#!/usr/bin/env bun
// @ts-nocheck — standalone Bun script; this repo has no TypeScript toolchain.
/**
 * Static-first wiki viewer for this repository.
 *
 *   bun scripts/view.ts            serve the repo; markdown stays at its real path
 *   bun scripts/view.ts --build    write a self-contained static site to dist/
 *   bun scripts/view.ts --dist     serve the built dist/ directory
 *   PORT=8080 bun scripts/view.ts
 *   HOST=0.0.0.0 PORT=8080 bun scripts/view.ts
 *
 * The shell is one HTML file. It fetches index.json for navigation and fetches
 * each .md file directly from /wiki/ or /sources/; markdown is never
 * embedded in the shell or pre-rendered by the server.
 */

import path from "node:path";
import { cp, mkdir, rm, stat } from "node:fs/promises";

const ROOT = path.resolve(import.meta.dir, "..");
const OUT = path.join(ROOT, "dist");
const PORT = Number(process.env.PORT ?? 4321);
const HOST = process.env.HOST ?? "127.0.0.1";
const CACHE_MS = 1000;
const BUILD = process.argv.includes("--build");
const DIST = process.argv.includes("--dist");
const SERVE_ROOT = DIST ? OUT : ROOT;

type Kind = "model" | "source";

interface Doc {
  path: string;
  kind: Kind;
  /** Display title: the canonical id for model pages, the H1 for everything else. */
  title: string;
  /** The document's own H1, kept for search and secondary display. */
  heading: string;
  summary: string;
  words: number;
  links: string[];
  sourceLinks: number;
  curated: boolean;
  publisher?: string;
  slug?: string;
  date?: string;
  origin?: string;
  originUrl?: string;
  evidence?: string;
  relevant?: string;
}

interface Wiki {
  docs: Map<string, Doc>;
  models: Doc[];
  sources: Doc[];
  publishers: { name: string; docs: Doc[] }[];
  backlinks: Map<string, string[]>;
  counts: {
    models: number;
    curated: number;
    sources: number;
    publishers: number;
    words: number;
  };
  builtAt: number;
}

/* ------------------------------------------------------------------ */
/* Markdown metadata                                                   */
/* ------------------------------------------------------------------ */

function extractTitle(content: string, rel: string): string {
  const heading = /^#\s+(.+)$/m.exec(content);
  if (heading) return heading[1].trim();
  return path.basename(rel, ".md");
}

function firstParagraph(content: string): string {
  const lines = content.split(/\r?\n/);
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith("#")) continue;
    if (/^([-*+]\s|\d+\.\s|\||>|```)/.test(line)) continue;
    start = i;
    break;
  }
  if (start === -1) return "";
  const parts: string[] = [];
  for (let i = start; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) break;
    if (/^([-*+]\s|\d+\.\s|\||>|```|#)/.test(line)) break;
    parts.push(line);
  }
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

function stripMd(text: string): string {
  return text
    .replace(/\\\[/g, "[")
    .replace(/\\\]/g, "]")
    .replace(/\[((?:[^\[\]]|\[[^\[\]]*\])*)\]\([^)]*\)/g, "$1")
    .replace(/\*\*|__/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractLinks(content: string): string[] {
  const links: string[] = [];
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(content))) {
    const href = match[1];
    if (/^(https?:|mailto:|#)/i.test(href)) continue;
    const file = href.split("#")[0];
    if (!file.endsWith(".md")) continue;
    links.push(file);
  }
  return links;
}

function parseHeaderMeta(content: string): Record<string, string> {
  const meta: Record<string, string> = {};
  const lines = content.split(/\r?\n/);
  let key: string | null = null;
  for (const line of lines.slice(0, 90)) {
    const match = /^[-*]\s+([A-Za-z][A-Za-z /-]*):\s*(.*)$/.exec(line);
    if (match) {
      key = match[1].trim().toLowerCase();
      meta[key] = match[2].trim();
      continue;
    }
    if (key && /^\s{2,}\S/.test(line)) {
      meta[key] = (meta[key] + " " + line.trim()).replace(/\s+/g, " ").trim();
      continue;
    }
    if (!line.trim()) key = null;
  }
  return meta;
}

/* ------------------------------------------------------------------ */
/* Index                                                               */
/* ------------------------------------------------------------------ */

let cache: { at: number; wiki: Wiki } | null = null;

async function buildWiki(): Promise<Wiki> {
  const paths: string[] = [];
  const glob = new Bun.Glob("**/*.md");
  for await (const rel of glob.scan({ cwd: ROOT, onlyFiles: true })) {
    if (rel.startsWith("dist/")) continue;
    if (rel.startsWith("wiki/models/") || rel.startsWith("sources/")) {
      paths.push(rel);
    }
  }

  const docs = new Map<string, Doc>();
  await Promise.all(
    paths.map(async (rel) => {
      const content = await Bun.file(path.join(ROOT, rel)).text();
      const meta = parseHeaderMeta(content);
      const kind: Kind = rel.startsWith("wiki/models/") ? "model" : "source";
      const parts = rel.split("/");
      const slug = kind === "source" ? parts[2] : undefined;
      const publisher = kind === "source" ? parts[1] : undefined;
      const dateMatch = /(\d{4}-\d{2}-\d{2})/.exec(meta["capture date"] ?? "");
      const date =
        dateMatch?.[1] ??
        parts
          .map((part) => part.replace(/\.md$/, ""))
          .find((part) => /^\d{4}-\d{2}-\d{2}$/.test(part)) ??
        undefined;
      const summary = stripMd(firstParagraph(content));
      const heading = extractTitle(content, rel);
      const title = kind === "model" ? path.basename(rel, ".md") : heading;
      const origin = meta.origin ?? "";
      const originUrl = /(https?:\/\/[^\s)]+)/.exec(origin)?.[1] ?? "";

      docs.set(rel, {
        path: rel,
        kind,
        title,
        heading,
        summary: summary || heading,
        words: content.split(/\s+/).filter(Boolean).length,
        links: extractLinks(content),
        sourceLinks: 0,
        curated: kind === "model" && (meta["status"] ?? "").toLowerCase() !== "stub",
        publisher,
        slug,
        date,
        origin: origin || undefined,
        originUrl: originUrl || undefined,
        evidence: meta["evidence kind"] ?? undefined,
        relevant: meta["relevant model/endpoint"] ?? meta["relevant models"] ?? undefined,
      });
    }),
  );

  for (const doc of docs.values()) {
    doc.links = [...new Set(doc.links)]
      .map((href) => path.posix.normalize(path.posix.join(path.posix.dirname(doc.path), href)))
      .filter((target) => docs.has(target));
    doc.sourceLinks = doc.links.filter((target) => docs.get(target)?.kind === "source").length;
  }

  const backlinks = new Map<string, string[]>();
  for (const doc of docs.values()) {
    for (const target of doc.links) {
      const list = backlinks.get(target) ?? [];
      list.push(doc.path);
      backlinks.set(target, list);
    }
  }

  const models = [...docs.values()]
    .filter((doc) => doc.kind === "model")
    .sort((a, b) => a.title.localeCompare(b.title));
  const sources = [...docs.values()]
    .filter((doc) => doc.kind === "source")
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "") || a.path.localeCompare(b.path));

  const byPublisher = new Map<string, Doc[]>();
  for (const doc of sources) {
    const name = doc.publisher ?? "unknown";
    const list = byPublisher.get(name) ?? [];
    list.push(doc);
    byPublisher.set(name, list);
  }
  const publishers = [...byPublisher.entries()]
    .map(([name, list]) => ({ name, docs: list }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const counts = {
    models: models.length,
    curated: models.filter((doc) => doc.curated).length,
    sources: sources.length,
    publishers: publishers.length,
    words: [...docs.values()].reduce((total, doc) => total + doc.words, 0),
  };

  return {
    docs,
    models,
    sources,
    publishers,
    backlinks,
    counts,
    builtAt: Date.now(),
  };
}

async function loadWiki(force = false): Promise<Wiki> {
  if (!force && cache && Date.now() - cache.at < CACHE_MS) return cache.wiki;
  const wiki = await buildWiki();
  cache = { at: Date.now(), wiki };
  return wiki;
}

function publicDoc(doc: Doc, wiki: Wiki) {
  return {
    path: doc.path,
    kind: doc.kind,
    title: doc.title,
    heading: doc.heading,
    summary: doc.summary,
    words: doc.words,
    sourceLinks: doc.sourceLinks,
    curated: doc.curated,
    publisher: doc.publisher,
    slug: doc.slug,
    date: doc.date,
    origin: doc.origin,
    originUrl: doc.originUrl,
    evidence: doc.evidence,
    relevant: doc.relevant,
    links: doc.links,
    backlinks: wiki.backlinks.get(doc.path) ?? [],
  };
}

function indexPayload(wiki: Wiki) {
  const docs: Record<string, ReturnType<typeof publicDoc>> = {};
  for (const doc of wiki.docs.values()) docs[doc.path] = publicDoc(doc, wiki);
  return {
    builtAt: wiki.builtAt,
    counts: wiki.counts,
    models: wiki.models.map((doc) => publicDoc(doc, wiki)),
    docs,
  };
}

/* ------------------------------------------------------------------ */
/* Static files                                                        */
/* ------------------------------------------------------------------ */

const MIME: Record<string, string> = {
  ".md": "text/markdown; charset=utf-8",
  ".markdown": "text/markdown; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
};

function mimeType(rel: string): string {
  return MIME[path.extname(rel).toLowerCase()] ?? "application/octet-stream";
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-cache",
    },
  });
}

async function serveFile(rel: string, root: string): Promise<Response> {
  let decoded: string;
  try {
    decoded = decodeURIComponent(rel);
  } catch {
    return new Response("Bad request", { status: 400 });
  }
  const normalized = path.posix.normalize(decoded.replace(/\\/g, "/"));
  if (
    normalized.startsWith("..") ||
    path.posix.isAbsolute(normalized) ||
    !/^(wiki|sources)\//.test(normalized)
  ) {
    return new Response("Not found", { status: 404 });
  }
  const abs = path.resolve(root, normalized);
  const base = path.resolve(root);
  if (!abs.startsWith(base + path.sep)) {
    return new Response("Forbidden", { status: 403 });
  }
  const file = Bun.file(abs);
  const info = await file.stat().catch(() => null);
  if (!info || !info.isFile()) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(file, {
    headers: {
      "content-type": mimeType(normalized),
      "cache-control": "no-cache",
    },
  });
}

/* ------------------------------------------------------------------ */
/* Build                                                               */
/* ------------------------------------------------------------------ */

async function buildSite(): Promise<void> {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const wiki = await loadWiki(true);
  await Bun.write(path.join(OUT, "index.html"), HTML);
  await Bun.write(path.join(OUT, "index.json"), JSON.stringify(indexPayload(wiki), null, 2));

  for (const dir of ["wiki", "sources"]) {
    const source = path.join(ROOT, dir);
    const info = await stat(source).catch(() => null);
    if (info?.isDirectory()) {
      await cp(source, path.join(OUT, dir), { recursive: true });
    }
  }

  let fileCount = 0;
  for await (const _ of new Bun.Glob("**/*").scan({ cwd: OUT, onlyFiles: true })) fileCount++;
  console.log(`Built ${OUT} · ${fileCount} files`);
}

/* ------------------------------------------------------------------ */
/* Server                                                              */
/* ------------------------------------------------------------------ */

const USAGE = `Usage:
  bun scripts/view.ts            serve the repository
  bun scripts/view.ts --build    write a static site to dist/
  bun scripts/view.ts --dist     serve the built dist/

Environment:
  PORT   port to listen on (default 4321)
  HOST   host to bind (default 127.0.0.1)`;

async function main(): Promise<void> {
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log(USAGE);
    return;
  }

  if (BUILD) {
    await buildSite();
    return;
  }

  if (DIST) {
    const built = await Bun.file(path.join(OUT, "index.html")).exists();
    if (!built) {
      console.error(`No build at ${OUT}. Run: bun scripts/view.ts --build`);
      process.exit(1);
    }
  }

  const server = Bun.serve({
    hostname: HOST,
    port: PORT,
    async fetch(request) {
      const url = new URL(request.url);
      try {
        if (url.pathname === "/" || url.pathname === "/index.html") {
          return new Response(HTML, {
            headers: {
              "content-type": "text/html; charset=utf-8",
              "cache-control": "no-cache",
            },
          });
        }
        if (url.pathname === "/index.json") {
          if (DIST) {
            const file = Bun.file(path.join(OUT, "index.json"));
            if (!(await file.exists())) return new Response("Not found", { status: 404 });
            return new Response(file, {
              headers: {
                "content-type": "application/json; charset=utf-8",
                "cache-control": "no-cache",
              },
            });
          }
          return json(indexPayload(await loadWiki()));
        }
        if (url.pathname === "/favicon.ico") {
          return new Response(null, { status: 204 });
        }
        return await serveFile(url.pathname.slice(1), SERVE_ROOT);
      } catch (error) {
        console.error(error);
        return new Response("Internal error", { status: 500 });
      }
    },
  });

  console.log(`Model wiki → http://${HOST}:${server.port}${DIST ? " (dist)" : ""}`);
  try {
    const counts = DIST
      ? (await Bun.file(path.join(OUT, "index.json")).json()).counts
      : (await loadWiki()).counts;
    console.log(
      `  ${counts.models} model pages · ${counts.sources} source records · ${counts.publishers} publishers`,
    );
  } catch {
    // The server is running; a missing index is reported by the page itself.
  }
}

/* ------------------------------------------------------------------ */
/* Embedded single-page app                                            */
/* ------------------------------------------------------------------ */

// Non-ASCII characters must be written as escapes (\u00b7, \2026, ...) inside this
// String.raw template: Bun's transpiler escapes them to \uXXXX in the emitted
// string, and String.raw would then keep that escape as literal text in the page.
const HTML = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Model Wiki</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #fbfaf7;
    --panel: #ffffff;
    --panel-2: #f6f3ed;
    --ink: #1d1b18;
    --muted: #6d675d;
    --faint: #989184;
    --line: #e6e1d7;
    --line-strong: #d5cec1;
    --accent: #9a4f1e;
    --accent-ink: #7a3d15;
    --accent-soft: #f4e8dc;
    --ok: #2f7a4f;
    --ok-soft: #e5f2e9;
    --warn: #9a6a12;
    --warn-soft: #f7eed5;
    --code: #f3efe7;
    --shadow: 0 1px 2px rgba(30, 25, 18, .05), 0 8px 24px rgba(30, 25, 18, .06);
    --sans: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --serif: ui-serif, Georgia, "Iowan Old Style", "Palatino Linotype", Palatino, serif;
    --mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #131210;
      --panel: #1a1815;
      --panel-2: #211e1a;
      --ink: #ece7dd;
      --muted: #a49d90;
      --faint: #7c7568;
      --line: #2d2923;
      --line-strong: #3d3830;
      --accent: #e2a273;
      --accent-ink: #f0bc93;
      --accent-soft: #2b221a;
      --ok: #7fc79b;
      --ok-soft: #1c2b22;
      --warn: #d8b26a;
      --warn-soft: #2b2416;
      --code: #23201b;
      --shadow: 0 1px 2px rgba(0, 0, 0, .3), 0 8px 24px rgba(0, 0, 0, .25);
    }
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; text-underline-offset: 2px; }
  kbd {
    font: 10px var(--mono);
    border: 1px solid var(--line-strong);
    border-bottom-width: 2px;
    border-radius: 4px;
    padding: 0 4px;
    background: var(--panel);
  }

  #app {
    min-height: 100vh;
  }

  /* Main ---------------------------------------------------------- */
  #main { min-width: 0; }
  #toolbar {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 54px;
    padding: 0 24px;
    border-bottom: 1px solid var(--line);
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    backdrop-filter: blur(10px);
  }
  .crumbs {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    font: 12px var(--mono);
    color: var(--muted);
  }
  .crumbs a { color: var(--muted); }
  .crumbs a:hover { color: var(--accent); }
  .crumb-dir { overflow: hidden; text-overflow: ellipsis; color: var(--faint); }
  .crumb-file { overflow: hidden; text-overflow: ellipsis; color: var(--ink); font-weight: 600; }
  .sep { color: var(--line-strong); }
  .tools { display: flex; gap: 6px; margin-left: auto; }
  .tool-btn {
    padding: 5px 10px;
    border: 1px solid var(--line-strong);
    border-radius: 6px;
    background: var(--panel);
    color: var(--muted);
    font: 12px var(--sans);
    cursor: pointer;
  }
  .tool-btn:hover {
    border-color: var(--accent);
    background: var(--accent-soft);
    color: var(--accent-ink);
  }

  #body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 224px;
    gap: 44px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 34px 44px 100px;
  }
  #body.home { grid-template-columns: minmax(0, 1fr); max-width: 1120px; }
  #content { min-width: 0; }

  #toc-rail {
    position: sticky;
    top: 54px;
    align-self: start;
    max-height: calc(100vh - 54px);
    overflow-y: auto;
    padding: 36px 0 40px 20px;
    border-left: 1px solid var(--line);
    scrollbar-width: thin;
  }
  .toc-title {
    margin-bottom: 8px;
    font: 600 10px var(--sans);
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--faint);
  }
  .toc-link {
    display: block;
    margin-left: -21px;
    padding: 3px 0 3px 10px;
    border-left: 2px solid transparent;
    font-size: 12px;
    line-height: 1.4;
    color: var(--muted);
  }
  .toc-link:hover { color: var(--accent); text-decoration: none; }
  .toc-link.active {
    border-left-color: var(--accent);
    color: var(--accent-ink);
    font-weight: 600;
  }
  .toc-link.lvl3 { padding-left: 22px; font-size: 11.5px; }

  /* Article ------------------------------------------------------- */
  .article {
    max-width: 74ch;
    font-family: var(--serif);
    font-size: 17px;
    line-height: 1.68;
    color: var(--ink);
  }
  .article > :first-child { margin-top: 0; }
  .article h1 {
    margin: 4px 0 20px;
    font-family: var(--sans);
    font-size: 30px;
    line-height: 1.2;
    letter-spacing: -.02em;
  }
  .article h2 {
    margin: 40px 0 12px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
    font-family: var(--sans);
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: -.01em;
  }
  .article h3 {
    margin: 28px 0 8px;
    font-family: var(--sans);
    font-size: 16px;
  }
  .article h4 {
    margin: 22px 0 6px;
    font-family: var(--sans);
    font-size: 14px;
  }
  .article p { margin: 0 0 16px; }
  .article ul, .article ol { margin: 0 0 16px; padding-left: 1.35em; }
  .article li { margin: 4px 0; }
  .article li > p { margin: 0 0 6px; }
  .article a {
    text-decoration: underline;
    text-decoration-color: color-mix(in srgb, var(--accent) 35%, transparent);
    text-underline-offset: 2.5px;
  }
  .article a:hover { text-decoration-color: var(--accent); }
  .article a.broken {
    color: #b3261e;
    text-decoration-style: wavy;
    text-decoration-color: #b3261e;
  }
  .article a.external::after {
    content: "\2197";
    margin-left: 2px;
    font-size: .7em;
    color: var(--faint);
  }
  .article blockquote {
    margin: 0 0 18px;
    padding: 2px 0 2px 18px;
    border-left: 3px solid var(--line-strong);
    color: var(--muted);
  }
  .article blockquote p:last-child { margin-bottom: 0; }
  .article code {
    padding: 1px 4px;
    border: 1px solid var(--line);
    border-radius: 4px;
    background: var(--code);
    font-family: var(--mono);
    font-size: .82em;
  }
  .article pre {
    margin: 0 0 18px;
    padding: 14px 16px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--code);
    overflow: auto;
  }
  .article pre code {
    padding: 0;
    border: none;
    background: none;
    font-size: 12.5px;
    line-height: 1.55;
  }
  .article table {
    width: 100%;
    margin: 0 0 20px;
    border-collapse: collapse;
    font-family: var(--sans);
    font-size: 13px;
    line-height: 1.45;
  }
  .article th, .article td {
    padding: 7px 10px;
    border: 1px solid var(--line);
    text-align: left;
    vertical-align: top;
  }
  .article th { background: var(--panel-2); font-weight: 600; }
  .article tr:nth-child(even) td {
    background: color-mix(in srgb, var(--panel-2) 45%, transparent);
  }
  .article hr { margin: 32px 0; border: none; border-top: 1px solid var(--line); }
  .article img { max-width: 100%; border-radius: 8px; }

  .meta-card {
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 7px 14px;
    margin: 0 0 28px;
    padding: 14px 16px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--panel);
    font-size: 12.5px;
  }
  .meta-card dt {
    padding-top: 2px;
    font: 10px var(--mono);
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--faint);
  }
  .meta-card dd { margin: 0; color: var(--ink); word-break: break-word; }

  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 9px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel);
    font: 11.5px var(--mono);
    color: var(--muted);
  }
  .chip:hover { border-color: var(--accent); color: var(--accent-ink); text-decoration: none; }
  .chip.kind-model { border-color: transparent; background: var(--accent-soft); color: var(--accent-ink); }
  .chip.kind-source { border-color: transparent; background: var(--ok-soft); color: var(--ok); }

  .chip.broken-chip { border-color: transparent; background: #fbe9e7; color: #b3261e; }

  .page-foot {
    display: grid;
    gap: 20px;
    margin-top: 48px;
    padding-top: 20px;
    border-top: 1px solid var(--line);
  }
  .foot-sec h3 {
    margin: 0 0 8px;
    font: 600 10px var(--sans);
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--faint);
  }

  /* Home ---------------------------------------------------------- */
  .hero { padding: 24px 0 36px; border-bottom: 1px solid var(--line); }
  .kicker {
    margin-bottom: 14px;
    font: 600 10px var(--sans);
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .hero h1 {
    max-width: 20ch;
    margin: 0 0 16px;
    font-family: var(--serif);
    font-size: clamp(32px, 4.5vw, 46px);
    line-height: 1.1;
    letter-spacing: -.02em;
  }
  .lede {
    max-width: 62ch;
    margin: 0 0 24px;
    font-family: var(--serif);
    font-size: 17px;
    line-height: 1.6;
    color: var(--muted);
  }
  .stats { display: flex; flex-wrap: wrap; gap: 28px; }
  .stat b {
    display: block;
    font-family: var(--serif);
    font-size: 26px;
    font-weight: 600;
    line-height: 1.1;
  }
  .stat span {
    font: 10px var(--sans);
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--faint);
  }
  .home-sec { margin: 36px 0 0; }
  .sec-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }
  .sec-head h2 { margin: 0; font: 600 18px var(--sans); letter-spacing: -.01em; }
  .sec-note { font: 11px var(--mono); color: var(--faint); }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 12px;
  }
  .card {
    display: block;
    padding: 15px 16px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--panel);
    color: var(--ink);
    transition: border-color .15s, box-shadow .15s, transform .15s;
  }
  .card:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow);
    text-decoration: none;
    transform: translateY(-1px);
  }
  .card h3 { margin: 0 0 6px; font: 600 15px var(--sans); }
  .card p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: 0 0 12px;
    font-size: 12.5px;
    line-height: 1.5;
    color: var(--muted);
  }
  .card-meta { display: flex; gap: 12px; font: 10px var(--mono); color: var(--faint); }
  .stub-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 0 16px;
  }
  .stub-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 0;
    border-bottom: 1px dotted var(--line);
    font-size: 13px;
    color: var(--muted);
  }
  .stub-row:hover { color: var(--accent); text-decoration: none; }
  .dot {
    flex: none;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--line-strong);
  }
  /* States -------------------------------------------------------- */
  .loading, .error { padding: 60px 0; color: var(--muted); }
  .error h1 { margin: 0 0 10px; font-size: 22px; color: var(--ink); }
  .mono { font-family: var(--mono); font-size: 12px; word-break: break-all; }
  .muted { color: var(--muted); }
  .raw-wrap { max-width: none; }
  pre.raw {
    padding: 20px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--panel);
    font-family: var(--mono);
    font-size: 12.5px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
  }
  #toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    z-index: 100;
    padding: 8px 14px;
    border-radius: 8px;
    background: var(--ink);
    color: var(--bg);
    font-size: 12.5px;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%) translateY(20px);
    transition: opacity .18s, transform .18s;
  }
  #toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  @media (max-width: 1100px) {
    #body { grid-template-columns: minmax(0, 1fr); }
    #toc-rail { display: none !important; }
  }
  @media (max-width: 900px) {
    #body { padding: 24px 20px 80px; }
    #toolbar { padding: 0 14px; }
    #toolbar > .chip { display: none; }
    .crumbs .crumb-dir, .crumbs .crumb-dir + .sep { display: none; }
    .tools { flex: none; }
    .tool-btn { white-space: nowrap; }
    .article { font-size: 16px; }
  }
</style>
</head>
<body>
<div id="app">
  <div id="main">
    <header id="toolbar"></header>
    <div id="body">
      <div id="content"></div>
      <aside id="toc-rail"><div id="toc"></div></aside>
    </div>
  </div>
</div>
<div id="toast"></div>
<script>
(function () {
  'use strict';

  var FENCE = String.fromCharCode(96, 96, 96);
  var state = {
    index: null,
    page: null,
    rawText: '',
    raw: false,
    observer: null
  };

  var el = {
    content: document.getElementById('content'),
    toc: document.getElementById('toc'),
    tocRail: document.getElementById('toc-rail'),
    toolbar: document.getElementById('toolbar'),
    body: document.getElementById('body'),
    toast: document.getElementById('toast')
  };

  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return ESC[ch];
    });
  }

  function encodePath(value) {
    return String(value).split('/').map(encodeURIComponent).join('/');
  }

  function fileHref(value) {
    return '#/file/' + encodePath(value);
  }

  var toastTimer = 0;
  function toast(message) {
    el.toast.textContent = message;
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.toast.classList.remove('show');
    }, 2200);
  }

  /* Markdown ------------------------------------------------------- */

  function decodeEntities(value) {
    return String(value)
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&');
  }

  function stripTags(value) {
    return decodeEntities(String(value).replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
  }

  function slugify(value) {
    var slug = String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return slug || 'section';
  }

  function uniqueId(base, toc) {
    var id = base;
    var n = 2;
    while (toc.some(function (item) { return item.id === id; })) id = base + '-' + n++;
    return id;
  }

  function normalizePath(value) {
    var parts = [];
    String(value).split('/').forEach(function (part) {
      if (!part || part === '.') return;
      if (part === '..') parts.pop();
      else parts.push(part);
    });
    return parts.join('/');
  }

  function resolveHref(href, relPath, index, broken) {
    var raw = String(href)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    if (/^(https?:)?\/\//i.test(raw) || raw.indexOf('mailto:') === 0) {
      return { href: raw, external: true };
    }
    if (raw.charAt(0) === '#') return { href: raw };
    var hashIndex = raw.indexOf('#');
    var filePart = hashIndex === -1 ? raw : raw.slice(0, hashIndex);
    var anchor = hashIndex === -1 ? '' : raw.slice(hashIndex + 1);
    var decoded;
    try {
      decoded = decodeURIComponent(filePart);
    } catch (error) {
      decoded = filePart;
    }
    var base = relPath.split('/').slice(0, -1).join('/');
    var target = normalizePath(base + '/' + decoded);
    if (!target || target.indexOf('..') === 0) return { href: raw, external: true };
    if (index && index.docs && index.docs[target]) {
      return {
        href: '#/file/' + encodePath(target) + (anchor ? '#' + encodeURIComponent(anchor) : ''),
        internal: true,
        path: target
      };
    }
    if (/\.(md|markdown)$/i.test(target)) {
      if (broken && broken.indexOf(target) === -1) broken.push(target);
      return { href: '#', broken: target };
    }
    return { href: target };
  }

  function renderInline(text, relPath, index, broken) {
    var code = [];
    var source = String(text == null ? '' : text);
    source = source.replace(/\x60([^\x60]+)\x60/g, function (match, value) {
      code.push('<code>' + esc(value) + '</code>');
      return '\u0000' + (code.length - 1) + '\u0000';
    });
    var literals = [];
    source = source.replace(/\\([\\\x60*_{}\[\]()#+.!|>$-])/g, function (match, ch) {
      if (ch === '*' || ch === '_' || ch === '\x60') {
        literals.push(ch);
        return '\u0003' + (literals.length - 1) + '\u0003';
      }
      return ch;
    });
    var html = esc(source);
    html = html.replace(/!\[((?:[^\[\]]|\[[^\[\]]*\])*)\]\(([^)\s]+)\)/g, function (match, alt, href) {
      var resolved = resolveHref(href, relPath, index, broken);
      return '<img src="' + esc(resolved.href) + '" alt="' + alt + '">';
    });
    html = html.replace(/\[((?:[^\[\]]|\[[^\[\]]*\])*)\]\(([^)\s]+)\)/g, function (match, label, href) {
      var resolved = resolveHref(href, relPath, index, broken);
      var attrs = ' href="' + esc(resolved.href) + '"';
      if (resolved.external) {
        attrs += ' target="_blank" rel="noreferrer noopener" class="external"';
      } else if (resolved.internal) {
        attrs += ' class="internal" data-path="' + esc(resolved.path) + '"';
      } else if (resolved.broken) {
        attrs += ' class="broken" data-broken="' + esc(resolved.broken) +
          '" title="Missing file: ' + esc(resolved.broken) + '"';
      }
      return '<a' + attrs + '>' + label + '</a>';
    });
    html = html.replace(/&lt;(https?:\/\/[^\s]+?)&gt;/g, function (match, url) {
      return '<a href="' + url + '" target="_blank" rel="noreferrer noopener" class="external">' + url + '</a>';
    });
    html = html.replace(/\*\*((?:[^*]|\*(?!\*))+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
    html = html.replace(/~~([^~]+)~~/g, '<del>$1</del>');
    html = html.replace(/\u0003(\d+)\u0003/g, function (match, i) {
      return esc(literals[Number(i)]);
    });
    html = html.replace(/\u0000(\d+)\u0000/g, function (match, i) {
      return code[Number(i)];
    });
    return html;
  }

  function isTableSeparator(line) {
    return /^\s*\|?\s*:?-{1,}:?\s*(\|\s*:?-{1,}:?\s*)+\|?\s*$/.test(line);
  }

  function splitRow(line) {
    var value = String(line).trim();
    if (value.charAt(0) === '|') value = value.slice(1);
    if (value.charAt(value.length - 1) === '|') value = value.slice(0, -1);
    var cells = [];
    var current = '';
    for (var i = 0; i < value.length; i++) {
      var ch = value.charAt(i);
      if (ch === '\\' && value.charAt(i + 1) === '|') {
        current += '|';
        i++;
      } else if (ch === '|') {
        cells.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    cells.push(current.trim());
    return cells;
  }

  function parseTable(lines, start, ctx) {
    var header = splitRow(lines[start]);
    var align = splitRow(lines[start + 1]).map(function (cell) {
      var left = cell.charAt(0) === ':';
      var right = cell.charAt(cell.length - 1) === ':';
      if (left && right) return 'center';
      if (right) return 'right';
      if (left) return 'left';
      return '';
    });
    var i = start + 2;
    var rows = [];
    while (i < lines.length && lines[i].trim() && lines[i].indexOf('|') !== -1) {
      rows.push(splitRow(lines[i]));
      i++;
    }
    var html = '<table><thead><tr>';
    header.forEach(function (cell, index) {
      html += '<th' + (align[index] ? ' style="text-align:' + align[index] + '"' : '') + '>' +
        renderInline(cell, ctx.relPath, ctx.index, ctx.broken) + '</th>';
    });
    html += '</tr></thead><tbody>';
    rows.forEach(function (row) {
      html += '<tr>';
      for (var c = 0; c < header.length; c++) {
        html += '<td' + (align[c] ? ' style="text-align:' + align[c] + '"' : '') + '>' +
          renderInline(row[c] || '', ctx.relPath, ctx.index, ctx.broken) + '</td>';
      }
      html += '</tr>';
    });
    return { html: html + '</tbody></table>', next: i };
  }

  function leadingSpaces(line) {
    var match = /^(\s*)/.exec(line);
    return match ? match[1].length : 0;
  }

  function unwrapSingleParagraph(html) {
    if (html.indexOf('<p>') === 0 && html.lastIndexOf('</p>') === html.length - 4 &&
        html.indexOf('<p>', 3) === -1) {
      return html.slice(3, -4);
    }
    return html;
  }

  function parseList(lines, start, baseIndent, ordered, ctx) {
    var items = [];
    var i = start;
    while (i < lines.length) {
      var match = /^(\s*)([-*+]|\d+\.)\s+(.*)$/.exec(lines[i]);
      if (!match || match[1].length !== baseIndent || /\d+\./.test(match[2]) !== ordered) break;
      var itemLines = [match[3]];
      i++;
      while (i < lines.length) {
        var line = lines[i];
        if (!line.trim()) {
          var look = i + 1;
          while (look < lines.length && !lines[look].trim()) look++;
          if (look < lines.length && leadingSpaces(lines[look]) > baseIndent) {
            itemLines.push('');
            i++;
            continue;
          }
          break;
        }
        var next = /^(\s*)([-*+]|\d+\.)\s+/.exec(line);
        if (next && next[1].length <= baseIndent) break;
        if (leadingSpaces(line) > baseIndent) {
          var cut = Math.min(leadingSpaces(line), baseIndent + 2);
          itemLines.push(line.slice(cut));
          i++;
          continue;
        }
        break;
      }
      items.push(itemLines);
    }
    var tag = ordered ? 'ol' : 'ul';
    var html = '<' + tag + '>';
    items.forEach(function (itemLines) {
      html += '<li>' + unwrapSingleParagraph(renderBlocks(itemLines, ctx)) + '</li>';
    });
    return { html: html + '</' + tag + '>', next: i };
  }

  function renderBlocks(lines, ctx) {
    var out = [];
    var i = 0;
    while (i < lines.length) {
      var line = lines[i];
      if (!line.trim()) { i++; continue; }

      if (line.trim().indexOf(FENCE) === 0) {
        var language = line.trim().slice(3).trim();
        var code = [];
        i++;
        while (i < lines.length && lines[i].trim().indexOf(FENCE) !== 0) {
          code.push(lines[i]);
          i++;
        }
        if (i < lines.length) i++;
        out.push('<pre><code' + (language ? ' class="language-' + esc(language) + '"' : '') + '>' +
          esc(code.join('\n')) + '</code></pre>');
        continue;
      }

      var heading = /^(#{1,6})\s+(.*)$/.exec(line);
      if (heading) {
        var level = heading[1].length;
        var headingHtml = renderInline(heading[2].trim(), ctx.relPath, ctx.index, ctx.broken);
        var headingText = stripTags(headingHtml);
        var id = uniqueId(slugify(headingText), ctx.toc);
        ctx.toc.push({ level: level, text: headingText, id: id });
        out.push('<h' + level + ' id="' + esc(id) + '">' + headingHtml + '</h' + level + '>');
        i++;
        continue;
      }

      if (/^\s*([-*_])(?:\s*\1){2,}\s*$/.test(line)) {
        out.push('<hr>');
        i++;
        continue;
      }

      if (line.indexOf('|') !== -1 && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
        var table = parseTable(lines, i, ctx);
        out.push(table.html);
        i = table.next;
        continue;
      }

      if (/^\s*>/.test(line)) {
        var quote = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) {
          quote.push(lines[i].replace(/^\s*>\s?/, ''));
          i++;
        }
        out.push('<blockquote>' + renderBlocks(quote, ctx) + '</blockquote>');
        continue;
      }

      var list = /^(\s*)([-*+]|\d+\.)\s+/.exec(line);
      if (list) {
        var parsed = parseList(lines, i, list[1].length, /\d+\./.test(list[2]), ctx);
        out.push(parsed.html);
        i = parsed.next;
        continue;
      }

      var paragraph = [line];
      i++;
      while (i < lines.length) {
        var nextLine = lines[i];
        if (!nextLine.trim()) break;
        if (/^(#{1,6})\s+/.test(nextLine)) break;
        if (/^\s*([-*_])(?:\s*\1){2,}\s*$/.test(nextLine)) break;
        if (/^\s*>/.test(nextLine)) break;
        if (/^(\s*)([-*+]|\d+\.)\s+/.test(nextLine)) break;
        if (nextLine.indexOf('|') !== -1 && i + 1 < lines.length && isTableSeparator(lines[i + 1])) break;
        if (nextLine.trim().indexOf(FENCE) === 0) break;
        paragraph.push(nextLine);
        i++;
      }
      out.push('<p>' + renderInline(
        paragraph.map(function (part) { return part.trim(); }).join(' '),
        ctx.relPath, ctx.index, ctx.broken
      ) + '</p>');
    }
    return out.join('\n');
  }

  function renderMarkdown(source, relPath, index) {
    var lines = String(source).replace(/\r\n?/g, '\n').split('\n');
    var ctx = { relPath: relPath, index: index, toc: [], broken: [] };
    var html = renderBlocks(lines, ctx);
    return { html: html, toc: ctx.toc, broken: ctx.broken };
  }

  /* Index ---------------------------------------------------------- */

  function loadIndex() {
    if (state.index) return Promise.resolve(state.index);
    return fetch('index.json')
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then(function (index) {
        state.index = index;
        return index;
      });
  }

  /* Home ----------------------------------------------------------- */

  function stat(value, label) {
    return '<div class="stat"><b>' + esc(value) + '</b><span>' + esc(label) + '</span></div>';
  }

  function modelCard(doc) {
    return '<a class="card" href="' + fileHref(doc.path) + '">' +
      '<h3>' + esc(doc.title) + '</h3>' +
      '<p>' + esc(doc.summary) + '</p>' +
      '<div class="card-meta"><span>' + doc.sourceLinks + ' sources</span>' +
      '<span>' + doc.words.toLocaleString() + ' words</span></div>' +
    '</a>';
  }

  function stubRow(doc) {
    return '<a class="stub-row" href="' + fileHref(doc.path) + '">' +
      '<span class="dot stub"></span><span>' + esc(doc.title) + '</span></a>';
  }

  function renderToolbarHome() {
    el.toolbar.innerHTML =
      '<div class="crumbs"><span class="crumb-file">Index</span></div>' +
      '<div class="tools"><button id="random-btn" class="tool-btn">Random page</button></div>';
    document.getElementById('random-btn').onclick = function () {
      var index = state.index;
      if (!index) return;
      var pool = index.models;
      if (!pool.length) return;
      var pick = pool[Math.floor(Math.random() * pool.length)];
      location.hash = fileHref(pick.path);
    };
  }

  function renderHome() {
    state.page = null;
    document.title = 'Model Wiki';
    renderToolbarHome();
    el.tocRail.style.display = 'none';
    el.body.classList.add('home');
    el.content.innerHTML = '<div class="loading">Loading index\u2026</div>';

    loadIndex().then(function (index) {
      var curated = index.models.filter(function (doc) { return doc.curated; });
      var stubs = index.models.filter(function (doc) { return !doc.curated; });
      var html = '';

      html += '<div class="hero">';
      html += '<div class="kicker">omsi \u00b7 model knowledge base</div>';
      html += '<h1>What we know about the models.</h1>';
      html += '<p class="lede">Evidence-backed pages for AI models. Each page separates documented ' +
        'capability from reported experience, and links every substantive claim to a dated capture ' +
        'under <code>sources/</code>.</p>';
      html += '<div class="stats">';
      html += stat(index.counts.models, 'model pages');
      html += stat(index.counts.curated, 'curated');
      html += stat(index.counts.sources, 'source records');
      html += stat(index.counts.publishers, 'publishers');
      html += stat(index.counts.words.toLocaleString(), 'words');
      html += '</div></div>';

      if (curated.length) {
        html += '<section class="home-sec"><div class="sec-head"><h2>Curated pages</h2>' +
          '<span class="sec-note">sources captured</span></div><div class="cards">' +
          curated.map(modelCard).join('') + '</div></section>';
      }
      if (stubs.length) {
        html += '<section class="home-sec"><div class="sec-head"><h2>Stubs</h2>' +
          '<span class="sec-note">identity scaffolding only</span></div><div class="stub-list">' +
          stubs.map(stubRow).join('') + '</div></section>';
      }

      el.content.innerHTML = html;
    });
  }

  /* Page ----------------------------------------------------------- */

  function renderToolbar(page) {
    var parts = page.path.split('/');
    var file = parts.pop();
    var dir = parts.join('/');
    el.toolbar.innerHTML =
      '<span class="chip kind-' + page.kind + '">' + page.kind + '</span>' +
      '<div class="crumbs"><a href="#/">Wiki</a><span class="sep">/</span>' +
      '<span class="crumb-dir">' + esc(dir) + '</span><span class="sep">/</span>' +
      '<span class="crumb-file">' + esc(file) + '</span></div>' +
      '<div class="tools">' +
        '<button id="raw-btn" class="tool-btn">' + (state.raw ? 'Rendered' : 'Raw') + '</button>' +
        '<button id="copy-btn" class="tool-btn">Copy path</button>' +
      '</div>';
    document.getElementById('raw-btn').onclick = toggleRaw;
    document.getElementById('copy-btn').onclick = copyPath;
  }

  function linkify(text) {
    return text.replace(/(https?:\/\/[^\s<]+)/g, function (url) {
      var trail = '';
      while (/[.,;:)]$/.test(url)) {
        trail = url.slice(-1) + trail;
        url = url.slice(0, -1);
      }
      return '<a href="' + url + '" target="_blank" rel="noreferrer noopener">' + url + '</a>' + trail;
    });
  }

  function sourceMeta(doc) {
    var rows = [];
    if (doc.origin) rows.push(['Origin', linkify(esc(doc.origin))]);
    if (doc.evidence) rows.push(['Evidence', esc(doc.evidence)]);
    if (doc.date) rows.push(['Captured', esc(doc.date)]);
    if (doc.relevant) rows.push(['Relevant', esc(doc.relevant.replace(/\x60/g, ''))]);
    if (doc.publisher) {
      rows.push(['Publisher', esc(doc.publisher) + (doc.slug ? ' / ' + esc(doc.slug) : '')]);
    }
    if (!rows.length) return '';
    var html = '<dl class="meta-card">';
    rows.forEach(function (row) {
      html += '<dt>' + row[0] + '</dt><dd>' + row[1] + '</dd>';
    });
    return html + '</dl>';
  }

  function linkChip(link) {
    return '<a class="chip" href="' + fileHref(link.path) + '" title="' + esc(link.path) + '">' +
      esc(link.title) + '</a>';
  }

  function resolveChip(path) {
    var target = state.index && state.index.docs ? state.index.docs[path] : null;
    return { path: path, title: target ? target.title : path };
  }

  function pageFooter(doc, broken) {
    var html = '';
    if (doc.links && doc.links.length) {
      html += '<section class="foot-sec"><h3>Links to</h3><div class="chips">' +
        doc.links.map(function (path) { return linkChip(resolveChip(path)); }).join('') + '</div></section>';
    }
    if (doc.backlinks && doc.backlinks.length) {
      html += '<section class="foot-sec"><h3>Cited by</h3><div class="chips">' +
        doc.backlinks.map(function (path) { return linkChip(resolveChip(path)); }).join('') + '</div></section>';
    }
    if (broken && broken.length) {
      html += '<section class="foot-sec"><h3>Missing links</h3><div class="chips">' +
        broken.map(function (target) {
          return '<span class="chip broken-chip">' + esc(target) + '</span>';
        }).join('') + '</div></section>';
    }
    return html ? '<footer class="page-foot">' + html + '</footer>' : '';
  }

  function buildToc(rendered) {
    if (state.observer) {
      state.observer.disconnect();
      state.observer = null;
    }
    var items = (rendered.toc || []).filter(function (item) {
      return item.level === 2 || item.level === 3;
    });
    if (items.length < 2) {
      el.tocRail.style.display = 'none';
      el.toc.innerHTML = '';
      return;
    }
    el.tocRail.style.display = '';
    el.toc.innerHTML = '<div class="toc-title">On this page</div>' +
      items.map(function (item) {
        return '<a class="toc-link lvl' + item.level + '" href="#' + esc(item.id) +
          '" data-id="' + esc(item.id) + '">' + esc(item.text) + '</a>';
      }).join('');

    el.toc.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var target = document.getElementById(link.getAttribute('data-id'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    var heads = el.content.querySelectorAll('.article h2, .article h3');
    if (!heads.length) return;
    state.observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        el.toc.querySelectorAll('a').forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('data-id') === id);
        });
      });
    }, { rootMargin: '-72px 0px -72% 0px', threshold: 0 });
    heads.forEach(function (head) {
      if (head.id) state.observer.observe(head);
    });
  }

  function bindContent() {
    el.content.querySelectorAll('a.broken').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        toast('Missing file: ' + link.getAttribute('data-broken'));
      });
    });
    el.content.querySelectorAll('a').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (link.classList.contains('broken') || link.classList.contains('external')) return;
      if (href.indexOf('#/') === 0) return;
      if (href.charAt(0) === '#') {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          var target = document.getElementById(href.slice(1));
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    });
  }

  function renderArticle(doc, rendered) {
    var body = rendered.html;
    if (doc.kind === 'model') {
      // The viewer names model pages by their canonical id, not the H1 wording.
      if (/<h1[^>]*>[\s\S]*?<\/h1>/.test(body)) {
        body = body.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/, '<h1$1>' + esc(doc.title) + '</h1>');
      } else {
        body = '<h1>' + esc(doc.title) + '</h1>' + body;
      }
    }
    if (doc.kind === 'source') {
      var meta = sourceMeta(doc);
      var headingEnd = body.indexOf('</h1>');
      if (meta && headingEnd !== -1) {
        body = body.slice(0, headingEnd + 5) + meta + body.slice(headingEnd + 5);
      } else if (meta) {
        body = meta + body;
      }
    }
    el.content.innerHTML = '<article class="article">' + body + '</article>' +
      pageFooter(doc, rendered.broken);
    buildToc(rendered);
    bindContent();
  }

  function openFile(path, anchor) {
    state.page = null;
    state.raw = false;
    state.rawText = '';
    el.body.classList.remove('home');
    el.content.innerHTML = '<div class="loading">Loading ' + esc(path) + '\u2026</div>';
    el.tocRail.style.display = 'none';

    fetch(encodePath(path))
      .then(function (response) {
        if (!response.ok) throw new Error(response.status === 404 ? 'Not found' : 'HTTP ' + response.status);
        return response.text();
      })
      .then(function (text) {
        var doc = state.index && state.index.docs ? state.index.docs[path] : null;
        if (!doc) throw new Error('Not in index');
        var rendered = renderMarkdown(text, path, state.index);
        state.page = doc;
        state.rawText = text;
        renderToolbar(doc);
        renderArticle(doc, rendered);
        document.title = doc.title + ' \u00b7 Model Wiki';
        window.scrollTo(0, 0);
        if (anchor) {
          setTimeout(function () {
            var target = document.getElementById(anchor);
            if (target) target.scrollIntoView({ block: 'start' });
          }, 0);
        }
      })
      .catch(function (error) {
        el.content.innerHTML = '<div class="error"><h1>Could not open page</h1>' +
          '<p class="mono">' + esc(path) + '</p>' +
          '<p class="muted">' + esc(error.message) + '</p>' +
          '<p><a href="#/">Back to index</a></p></div>';
        document.title = 'Not found \u00b7 Model Wiki';
      });
  }

  function toggleRaw() {
    if (!state.page) return;
    state.raw = !state.raw;
    var button = document.getElementById('raw-btn');
    if (button) button.textContent = state.raw ? 'Rendered' : 'Raw';
    if (state.raw) {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
      el.tocRail.style.display = 'none';
      el.content.innerHTML = '<article class="article raw-wrap"><pre class="raw"></pre></article>';
      el.content.querySelector('pre').textContent = state.rawText;
    } else {
      var rendered = renderMarkdown(state.rawText, state.page.path, state.index);
      renderArticle(state.page, rendered);
    }
  }

  function copyPath() {
    if (!state.page) return;
    var path = state.page.path;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(path).then(function () {
        toast('Copied ' + path);
      }).catch(function () {
        toast(path);
      });
    } else {
      toast(path);
    }
  }

  /* Routing and boot ----------------------------------------------- */

  function route() {
    var hash = location.hash || '#/';
    if (hash.indexOf('#/file/') === 0) {
      var rest = hash.slice(7);
      var split = rest.indexOf('#');
      var path = decodeURIComponent(split === -1 ? rest : rest.slice(0, split));
      var anchor = split === -1 ? '' : decodeURIComponent(rest.slice(split + 1));
      openFile(path, anchor);
    } else if (hash === '#' || hash.indexOf('#/') === 0) {
      renderHome();
    }
  }

  window.addEventListener('hashchange', route);

  window.__wiki = { renderMarkdown: renderMarkdown, state: state };

  loadIndex().then(route).catch(function () {
    el.content.innerHTML = '<div class="error"><h1>Could not load index</h1>' +
      '<p class="muted">Is the site being served from its root? Run <code>bun scripts/view.ts</code>.</p></div>';
  });
})();
</script>
</body>
</html>`;

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

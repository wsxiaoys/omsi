# omsi

An evidence-backed knowledge base of AI models. Each model gets one canonical Markdown page in
`wiki/models/`, and every substantive claim links to a dated capture of the source it came from in
`sources/`.

**Read it at <https://wsxiaoys.github.io/omsi/>.**

## Layout

| Path | Contents |
| --- | --- |
| `wiki/models/` | One page per model: identity, current assessment, limitations, evidence links, open questions. |
| `sources/` | Evidence records at `sources/<publisher-domain>/<document-slug>/<capture-date>.md`. Captures are append-only; a re-fetch is a new dated file. |
| `scripts/view.ts` | The whole site: a Bun script that indexes the Markdown and serves or builds a static viewer. |
| `.agents/skills/wiki/` | Maintenance instructions and the model-sourcing criteria. |
| `dist/` | Build output (git-ignored). |

## Local preview

Requires [Bun](https://bun.sh) 1.4+.

```sh
bun scripts/view.ts            # serve the repository at http://127.0.0.1:4321
bun scripts/view.ts --build    # write the static site to dist/
bun scripts/view.ts --dist     # serve the built dist/ instead of the repository
PORT=8080 HOST=0.0.0.0 bun scripts/view.ts
```

Markdown is fetched at request time, so edits show up on reload without a rebuild. `--build` is only
needed for deployment.

## Publishing

`.github/workflows/pages.yml` builds `dist/` with Bun and deploys it to GitHub Pages on every push to
`master` (and on manual dispatch). One-time setup: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

The viewer uses hash routing (`#/file/wiki/models/…`) and relative fetches, so it works unchanged
from a project subpath such as `/omsi/`.

## Adding a model

Read `.agents/skills/wiki/SKILL.md` first. In short: capture the evidence into `sources/` with its
provenance and capture date, then write or update the model page and cite those captures with
relative links. A model earns a page only when it has a first-party source and at least one
independent measurement that it matters — a host listing alone is not enough.

## Contributing

Corrections with evidence are welcome: open an issue with the source you are relying on, or a pull
request that adds the capture under `sources/` and updates the affected page.

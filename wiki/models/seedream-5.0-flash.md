# Seedream 5.0 Flash

ByteDance's low-cost, high-throughput tier of the Seedream 5.0 image family, announced on
ByteDance's cloud platforms in **September 2026** as a newly released model
([Ark release announcements](../../sources/volcengine.com/ark-model-release-notes/2026-10-26.md)).
It is the cheapest Seedream 5.0 tier on all three surfaces captured here, and ByteDance describes it
as capability-equivalent to Seedream 5.0 Pro but faster and cheaper — not as a reduced model. It is
hosted-only, has no published weights, and has no model card, launch blog, or benchmark anywhere in
this capture set: its entire first-party documentation is the Volcengine Ark and BytePlus ModelArk
API docs.

The roster label "Seedream 5.0 Flash" matches the vendor's own product name, so no identity
correction was needed for this row.

## Identity

- Canonical name: **Seedream 5.0 Flash**. Vendor spellings: "Seedream 5.0 flash" (BytePlus and
  Volcengine documentation), "Seedream 5.0 Flash" (fal's `modelFamily` and short description). No
  competing product name appears in any captured source.
- First-party model IDs, one per region, both with the same `-260915` snapshot suffix:
  - China / Volcengine Ark: `doubao-seedream-5-0-flash-260915`
    ([Ark model list](../../sources/volcengine.com/seedream-5-pro-model-list/2026-10-26.md))
  - International / BytePlus ModelArk: `dola-seedream-5-0-flash-260915`
    ([BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md),
    [BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md))
  - The China price list keys the model **without** the snapshot suffix
    (`doubao-seedream-5-0-flash`), so billing and model IDs are not the same string
    ([Ark pricing](../../sources/volcengine.com/seedream-5-pro-pricing/2026-10-26.md)).
- Release date: **September 2026, month precision only.** The Ark release log files the row under its
  `# 202609` table with the status 新发布 ("newly released") and gives no day
  ([release announcements](../../sources/volcengine.com/ark-model-release-notes/2026-10-26.md)).
  Two finer signals bracket it: the `260915` snapshot suffix (2026-09-15 under ByteDance's `YYMMDD`
  convention, an inference from the ID format, not a vendor statement) and fal's endpoint creation
  timestamps, 2026-09-23
  ([fal endpoints](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)). This is **inside** the
  one-year window.
- Host endpoints captured:

  | Surface | Endpoint / model ID | Notes |
  | --- | --- | --- |
  | Volcengine Ark (China) | `doubao-seedream-5-0-flash-260915` | region `cn-beijing`; 500 max IPM |
  | BytePlus ModelArk | `dola-seedream-5-0-flash-260915` | `ap-southeast-1` only — not `eu-west-1` |
  | fal | `bytedance/seedream/v5/flash/text-to-image` | $0.027/image; text-only |
  | fal | `bytedance/seedream/v5/flash/edit` | $0.027/image; 1–10 reference images |
  | fal | `bytedance/seedream/v5/flash/layerize` | $0.027/image; base + up to 16 layers |

  ([Ark model list](../../sources/volcengine.com/seedream-5-pro-model-list/2026-10-26.md),
  [BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md),
  [fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md))
- Siblings, each a separate model with its own page and ID: **[Seedream 5.0 Pro](seedream-5.0-pro.md)**
  (`-260628`, the flagship), **[Seedream 5.0 Lite](seedream-5.0-lite.md)** (`-260128`, the older
  reasoning tier), and the prior-generation Seedream 4.5 (`-251128`) and 4.0 (`-250828`).

### Identity ambiguity worth tracking

**Flash has no developer-facing launch material.** ByteDance Seed's own site has no Flash product
page and no Flash blog post: the 35-URL sitemap lists only `seedream-5-0-pro` and
`seedream-5-0-lite`, and the blog index's image-model posts cover Pro (2026-07-08), Lite
(2026-02-13), 4.0 and 3.0 only
([Seed site check](../../sources/bytedance.com/seedream-5-flash-model-page/2026-10-26.md)). Pro has a
product page, a launch post and an (empty) tech-report slot; Flash has none of those. Any claim about
Flash rests on cloud-platform API documentation plus one host.

**Flash is not "Pro in fast mode".** ByteDance's tutorial presents the two as alternatives — "For
latency-sensitive applications, use Seedream 5.0 pro in fast mode or use Seedream 5.0 flash for
faster image generation" — and documents `optimize_prompt_options.mode: fast` as Pro-only
([BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md),
[Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)). Flash is a
separate model with a separate ID, price and snapshot, not a serving mode of Pro.

**Whether Flash shares Pro's weights is undocumented.** The release note says "capabilities fully
consistent with Seedream 5.0 pro"
([release announcements](../../sources/volcengine.com/ark-model-release-notes/2026-10-26.md)); no
source says whether that means the same trained model served faster, a distilled model, or a
separately trained one. Nothing in the capture set measures quality, so "equivalent" cannot be
checked. See [Current assessment](#current-assessment).

**fal gives the endpoints the bare display name `Seedream`.** All three Flash endpoints carry
`title: "Seedream"` while the family appears only in `modelFamily: "Seedream 5.0 Flash"` and the
group key `seedream-5-flash`; the Pro endpoints were given full titles
([fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)). A reader searching fal for
"Seedream 5.0 Flash" gets three identically-named entries.

## Current assessment

Flash is the **cost tier**, and the price ordering is the one thing all three surfaces agree on.
ByteDance's framing is explicitly comparative and explicitly not about capability loss: for
high-precision image generation it has "capabilities fully consistent with Seedream 5.0 pro",
supporting interactive editing, layer decomposition and native multilingual generation, while
generating faster and costing less "for latency- and cost-sensitive business scenarios"
([release announcements](../../sources/volcengine.com/ark-model-release-notes/2026-10-26.md)). The
BytePlus tutorial says the same in one line: Pro "provides higher image quality", Flash "generates
images faster and costs less"
([BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md)).

That makes Flash a **distinct tier, not a repackaging**: it has its own model ID, its own snapshot
date, its own flat price on every surface, and at least one parameter (`fast` prompt optimization)
that Pro has and it does not. But the *quality* claim is unmeasured in both directions — ByteDance
publishes no benchmark for any 5.0 tier, and no host or third party in this capture set has measured
Flash against Pro or Lite. Treat "faster" and "slightly lower quality" as vendor positioning.

It is **current and GA**, not preview: the China-region release log marks it 新发布 and both cloud
model lists carry it as a current model ID, while fal shows `status: "public"`, `deprecated: false`,
and no captured page carries a retirement notice. The retirement flag that exists on the China-region
model list applies to the Seedream 5.0 entry that serves **Lite**, not to the Pro or Flash rows
([Ark model list](../../sources/volcengine.com/seedream-5-pro-model-list/2026-10-26.md)).

The tier is also the clearest example in this family that price does not order capability: Flash is
cheaper than Lite yet supports layer decomposition and transparent-background output, which Lite does
not, while Lite is the only 5.0 tier with 3K/4K output, batch generation and streaming. See
[Position in the family](#position-in-the-family).

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run for this page.**

- **Text-to-image and reference-guided generation.** ByteDance: text-to-image, single-reference
  image-to-image, and multi-reference image-to-image, "up to 10 reference images"
  ([BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md),
  [BytePlus API](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
  fal splits this across two endpoints and enforces the same ceiling in the edit schema: "Up to 10
  images are supported; if more are sent, only the last 10 are used"
  ([fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)).
- **Interactive precision editing by coordinate.** Point and bounding-box annotations are normalized
  to an integer 0–999 grid per image and submitted inline as `<point>x y</point>` or
  `<bbox>x1 y1 x2 y2</bbox>`, for "object replacement, element positioning, and partial repainting";
  the guide is scoped to "Seedream 5.0 pro / flash" jointly
  ([BytePlus editing guide](../../sources/byteplus.com/seedream-5-pro-flash-editing-guide/2026-10-26.md)).
- **Layer decomposition.** One base image plus up to 16 independently editable PNG layers with alpha,
  each returned with stacking order, bounding box, name and description
  ([BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md)). fal's
  layerize schema returns `layers` = "the base image followed by up to 16 separated layers, ordered
  by increasing z_index", with `bounding_box` in both absolute pixels and a normalized `[0, 1000]`
  range ([fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)). The layer-decomposition
  scenario accepts exactly one input image on Ark
  ([Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
- **Transparent-background output.** `background: transparent`, image-to-image only, exactly one
  input image which must already carry an alpha channel, and PNG output
  ([Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md),
  [fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)).
- **Resolution.** Tier-based or explicit pixels: tiers `1K`, `1.5K`, `2K`, default `2K`; explicit
  width×height within a total of 921,600–4,624,220 px and an aspect ratio of 1/16–16. The documented
  2K mapping reaches 2048×2048 at 1:1, 2848×1600 at 16:9 and 3136×1344 at 21:9
  ([Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)). fal's
  schema carries the identical pixel bounds and offers the same three `auto_*` tiers, with no 3K or
  4K option ([fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)).
- **Multilingual prompting and text rendering.** Chinese and English on all Seedream models; Pro and
  Flash add Russian, Arabic, Filipino, Thai, Turkish, Korean, Malay, Spanish, Portuguese, Indonesian,
  French, German, Vietnamese and Japanese — **14 additional languages**, enumerated on the Ark API
  page ([Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)). This
  is a prompt-language list, not a measurement of rendered-text accuracy in any of those languages.
- **Output format and watermark.** `png` or `jpeg` (default `jpeg`); `watermark` defaults to `true` on
  Ark and BytePlus and adds an "AI-generated" mark in the lower-right corner
  ([BytePlus API](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md),
  [Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)). fal defaults
  `watermark` to `false` ([fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)).
- **Prompt length guidance.** "Use no more than 300 Chinese characters or 600 English words" on the
  BytePlus image-generation page; longer prompts "may scatter information"
  ([BytePlus API](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
  This guidance is written for the page's models generally, not for Flash specifically.
- **Host-side fan-out.** fal exposes `num_images` 1–6 per request and returns one image per
  generation; that is fal's own fan-out, not a ByteDance batch feature
  ([fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)).

## Limitations and constraints

- **No group/batch generation, no web search, no streaming.** ByteDance documents these as
  unsupported for both Pro and Flash — "暂不支持组图生成、联网搜索、流式输出" — and marks the
  parameters `sequential_image_generation`, `stream` and `tools`/`web_search` as Lite/4.5/4.0-only
  ([Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md),
  [BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)). If you
  need a related set of images from one prompt, Flash is the wrong tier.
- **No `fast` prompt-optimization mode.** The one documented parameter gap against Pro: "Only
  Seedream 5.0 pro supports this mode"
  ([BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md)). Flash is
  itself the speed answer to that switch, so this is coherent rather than a defect — but it means the
  parameter surfaces are not identical, contrary to the release note's "capabilities fully
  consistent".
- **2K ceiling.** No 3K and no 4K output on any surface. The 4,624,220-pixel ceiling is the same as
  Pro's and well below Lite's 16,777,216
  ([Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md),
  [fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)).
- **Fewer reference images than Lite.** 10 for Flash and Pro, 14 for Lite, 4.5 and 4.0
  ([BytePlus API](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
  On fal, references beyond the tenth are silently dropped rather than rejected.
- **Layer decomposition is all-or-nothing.** The Ark API states, for the layer-decomposition
  scenario, that "if any layer fails to generate, the whole request errors; partial success is not
  supported", and that asking for more layers than the limit "may lose some layer information"
  ([Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)). The page
  documents the scenario once for the models that support it, which includes Flash.
- **No sampling controls.** Neither the Ark parameter list nor fal's Flash schemas expose `seed`,
  `steps` or `guidance`, so exact reproducibility is not documented on either surface
  ([Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md),
  [fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)).
- **"Faster" is unquantified.** No first-party latency, time-to-first-image, or throughput-per-second
  figure exists anywhere in this capture set, and fal publishes no latency either. The only capacity
  number is a 500 images-per-minute rate limit on both cloud platforms, with ByteDance's caveat that
  these are "theoretical maximum values" that depend on load
  ([BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)).
- **Single region on BytePlus.** Flash is listed for `ap-southeast-1` only; the second region
  (`eu-west-1`) is documented for Lite and `seed-2-0`, not for Flash
  ([BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)).
- **One host only.** fal carries Flash; Replicate does not
  ([Replicate lookup](../../sources/replicate.com/seedream-5-flash-lookup/2026-10-26.md)). There is no
  second host price or independent deployment to compare fal's against.
- **Annotation adherence is probabilistic.** ByteDance's own guidance tells developers to add prose
  ("the person on the left") when a bounding box contains several subjects, because the model may
  otherwise pick the wrong target — an explicit admission that coordinate targeting is not
  deterministic
  ([BytePlus editing guide](../../sources/byteplus.com/seedream-5-pro-flash-editing-guide/2026-10-26.md)).
- **Watermark defaults differ by surface** — `true` on Ark and BytePlus, `false` on fal — so the same
  prompt produces differently-marked output depending on where it is called.
- **Moderation is host-controlled and its policy is unpublished.** fal's safety checker defaults on
  and can only be disabled by authorized accounts; BytePlus does not bill images blocked by content
  moderation. No captured page states what is refused.
- **Closed weights.** See below.

## Position in the family

| | **Flash** | Pro | Lite |
| --- | --- | --- | --- |
| Model ID suffix | `-260915` | `-260628` | `-260128` |
| Announced | 2026-09 (month) | 2026-07-08 | 2026-02-13 |
| Output ceiling | 2K / 4.62 MP | 2K / 4.62 MP | 4K / 16.78 MP |
| Reference images | 10 | 10 | 14 |
| Layer decomposition | yes | yes | no |
| Transparent background | yes | yes | no |
| Interactive coordinate editing | yes | yes | not documented |
| `fast` prompt mode | no | yes | no |
| Batch / streaming / web search | no / no / no | no / no / no | yes / yes / yes |
| Prompt languages | zh, en + 14 | zh, en + 14 | zh, en |
| Ark price (CNY/image) | **0.12 flat** | 0.30 / 0.60 by MP | 0.22 flat |
| BytePlus price (USD/image) | **$0.018 flat** | $0.045 / $0.09 by MP | $0.035 flat |
| fal price (USD/image) | **$0.027 flat** | $0.0675–$0.135 + inputs | $0.035 flat |

Sources for the table: [Ark API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md),
[Ark pricing](../../sources/volcengine.com/seedream-5-pro-pricing/2026-10-26.md),
[BytePlus pricing](../../sources/byteplus.com/seedream-5-lite-model-pricing/2026-10-26.md),
[BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md),
[fal Flash](../../sources/fal.ai/seedream-5-flash/2026-10-26.md),
[fal Pro](../../sources/fal.ai/seedream-5-pro-endpoints/2026-10-26.md),
[fal Lite](../../sources/fal.ai/seedream-5-lite/2026-10-26.md). Lite's "interactive coordinate
editing" cell is marked "not documented" because the capability list ByteDance publishes for Lite
does not include it; that is an absence of documentation, not a documented absence.

Read across the row: **Flash is Pro's feature set minus the `fast` switch, at a flat price about
two-fifths of Pro's and lower than the smaller, older Lite.** Lite is not "below" Flash in the stack — it
is the resolution and batch tier, and it is the more expensive of the two on all three surfaces.

## Access, pricing, licensing

- **Volcengine Ark (China), CNY.** Input images **free**, output **CNY 0.12 per image**, flat — no
  megapixel tier, in contrast to Pro's 0.30/0.60 split at 2.61 MP
  ([Ark pricing](../../sources/volcengine.com/seedream-5-pro-pricing/2026-10-26.md)). Flash is the
  cheapest 5.0 tier here: 2.5× cheaper than Pro's low tier and about 45% cheaper than Lite's 0.22.
- **BytePlus ModelArk (international), USD.** Input images **free**, output **$0.018 per image**
  ([BytePlus pricing](../../sources/byteplus.com/seedream-5-lite-model-pricing/2026-10-26.md)).
  Region `ap-southeast-1`; base URL `https://ark.ap-southeast.bytepluses.com/api/v3`.
- **fal.** **$0.027 per image**, flat, on all three endpoints, `billing_unit: "images"`,
  `provider_type: "partner"`, `licenseType: "commercial"`
  ([fal](../../sources/fal.ai/seedream-5-flash/2026-10-26.md)). That is 50% more than BytePlus's
  direct price and 2.5× cheaper than fal's own Pro price floor. No per-input-image charge is stated for
  the edit endpoint, which is a real difference from fal's Pro edit pricing ($0.0045 per extra input
  image) — but the absence of a stated charge is not a promise of free inputs.
- **Rate limit.** 500 max IPM on both cloud platforms
  ([Ark model list](../../sources/volcengine.com/seedream-5-pro-model-list/2026-10-26.md),
  [BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)).
- **Billing basis.** Per output image, with input images free on both first-party surfaces. On Ark the
  Flash row is a single flat output price with no per-scenario or per-layer rates, whereas Pro is
  split by scenario (single-image generation vs layer decomposition) and by a 2.61-megapixel
  threshold, with layer decomposition billed per layer at 0.15/0.30
  ([Ark pricing](../../sources/volcengine.com/seedream-5-pro-pricing/2026-10-26.md)). Whether a Flash
  layer-decomposition call therefore costs the same as a single-image call is an inference from the
  absence of a separate rate, not a stated rule.
- **Licensing.** fal's catalogue marks the endpoints `commercial`, which is fal's statement about
  usage through fal. No ByteDance output-licence terms for Flash were captured, so the underlying
  grant is unverified. No weights exist to license: no ByteDance Seedream weights repository is
  published on Hugging Face (family-level search, 2026-10-26), and no captured page for Flash links
  to weights or a licence
  ([Hugging Face index](../../sources/huggingface.co/seedream-model-index/2026-10-26.md)).
  Self-hosting is not an available fallback.
- **Consumer surfaces.** None captured. Unlike Pro and Lite, Flash has no Seed-site "Try now" page,
  so no Dreamina/Jimeng/Dola entry point was found for it
  ([Seed site check](../../sources/bytedance.com/seedream-5-flash-model-page/2026-10-26.md)).

## Unresolved questions

1. **Is Flash the same model as Pro, served faster?** The vendor says "capabilities fully consistent"
   and nothing more. Same weights, distilled weights, or a separately trained sibling are all
   consistent with the captured evidence, and the difference matters: if it is a distillation, the
   quality gap on hard prompts (dense text, fine detail) is the whole decision.
2. **How much faster, and at what quality cost?** No latency figure and no benchmark exists for
   either tier. "Faster" is the product's reason to exist and the one thing nobody in this capture
   set measured.
3. **Why is Flash cheaper than Lite?** Lite is the older, smaller, "relatively small model" tier
   whose own launch post concedes gaps in "structural stability, realism, and aesthetics", yet it
   costs roughly twice as much per image on Ark and BytePlus. Presumably resolution (3K/4K) and batch
   generation explain it, but no captured source says so.
4. **Which snapshot does fal serve?** fal does not publish a model revision, and its `date`/
   `publishedAt` fields are fal timestamps, so whether it proxies `-260915` is unknown.
5. **What is the exact release date?** First-party evidence is month-granular (September 2026). The
   `260915` suffix and fal's 2026-09-23 endpoints bracket it, but neither is a launch date.
6. **Does Flash have a consumer entry point?** Pro and Lite are live in Dreamina/Jimeng; no
   equivalent was found for Flash, and the Seed site does not mention it.
7. **How reliable is coordinate editing on Flash specifically?** The editing guide covers Pro and
   Flash jointly and its demo hardcodes the Pro model ID, so no Flash-specific behaviour — including
   annotation count limits or failure modes — is documented.
8. **Are `dola-` and `doubao-` the same weights?** The IDs differ only in vendor prefix; no captured
   page says whether the two regions serve byte-identical models.
9. **Is the watermark difference material for commercial work?** Ark and BytePlus default it on, fal
   defaults it off; no captured source states whether the mark can be removed downstream or what the
   terms say about doing so.

## Evidence status

Evidence floor: **met, narrowly**. First-party: the Ark release announcement (the only first-party
statement of the launch and of the vendor's positioning), the Ark image-generation API reference, the
Ark model list and price list, the BytePlus model list, price list, tutorial and interactive editing
guide. Independent host record: **fal** (catalogue metadata, three OpenAPI schemas, and the rendered
per-image price). Fifteen records, all captured 2026-10-26, of which five are new captures made for
this page: the Ark release announcement, the fal Flash endpoints, the BytePlus Pro/Flash editing
guide, and two negative checks (the Seed site and Replicate).

The floor is narrow because **only one host carries the model**. Replicate, the second host used for
the Pro and Lite pages, returns 404 for `bytedance/seedream-5-flash` and does not list it in its
search index ([Replicate lookup](../../sources/replicate.com/seedream-5-flash-lookup/2026-10-26.md)),
and ByteDance Seed's own site has no Flash page or post
([Seed site check](../../sources/bytedance.com/seedream-5-flash-model-page/2026-10-26.md)). There is
therefore no second independent price, no second schema to diff, and no vendor marketing page to
check the API docs against.

**No direct tests have been run for this page.** Every capability, limit and price above is vendor or
host documentation. No benchmark, human-preference study, latency measurement or user report for
Flash was found in this capture set, and the vendor publishes no numbers at all. fal is a `proxy`
host in its own classification: it forwards to ByteDance's API, so it is an independent *record* of
the endpoint, not an independent *measurement* of the model, and its schema restates the same
upstream limits.

The most useful next evidence would be a small reproducible test set against a named endpoint and
date: the same prompts run on Flash and Pro for a like-for-like quality delta, wall-clock latency per
2K image on both, dense small-text legibility, layer-decomposition success rate and layer count on a
fixed image, coordinate-edit fidelity under repeated annotation-driven edits, and a check of whether
fal's `$0.027` includes reference-image inputs.

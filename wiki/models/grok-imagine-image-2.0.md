# Grok Imagine Image 2.0

xAI's current Grok Imagine image model, served as `grok-imagine-image-2.0` on the xAI API and on
fal and Replicate. It is a **separate generation, not an alias**: its own model ID, its own price
($0.04/image on xAI's table), a `quality` knob no other tier has, and an independent Elo measured
**+143 points above `grok-imagine-image`** on Artificial Analysis's text-to-image board
([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md),
[pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/grok-imagine-image-2.0/2026-10-26/index.md)). It is also
the tier xAI now redirects `grok-imagine-image-quality` into, so from **2026-11-02** it is the only
high-quality image option in the family.

## Identity

- Canonical model ID: **`grok-imagine-image-2.0`**. Display name **"Grok Imagine Image 2.0"** on
  xAI's Models page, on fal and on Artificial Analysis
  ([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md),
  [pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
  [fal](../../sources/fal.ai/grok-imagine-image-2.0/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/grok-imagine-image-2.0/2026-10-26/index.md)). Roster
  label, vendor display name and API slug agree here, unlike the 1.0 tier where host titles are
  ambiguous.
- Vendor: xAI. The docs site brands itself **"SpaceXSI"** during this capture; Artificial Analysis
  lists the creator as "SpaceXAI". Model slugs and the `api.x.ai` endpoint are unchanged.
  Recorded as observed, not interpreted.
- First-party endpoints: `POST https://api.x.ai/v1/images/generations` and
  `POST https://api.x.ai/v1/images/edits`, both `application/json`, with
  `"model": "grok-imagine-image-2.0"` in every guide example
  ([generation](../../sources/x.ai/imagine-image-generation/2026-10-26.md),
  [editing](../../sources/x.ai/imagine-image-editing/2026-10-26.md)).
- Host endpoints:
  - fal `xai/grok-imagine-image/v2.0/text-to-image` and `xai/grok-imagine-image/v2.0/edit`, listed
    **2026-08-06**, published **2026-08-11**, `hostingType: "proxy"`
    ([fal](../../sources/fal.ai/grok-imagine-image-2.0/2026-10-26.md)).
  - Replicate `xai/grok-imagine-image-2` (slug drops the `.0`), `created_at` **2026-08-13**,
    `"hardware": "CPU"` — a passthrough, not a Replicate deployment. The `.0` slug 404s on
    Replicate
    ([Replicate](../../sources/replicate.com/grok-imagine-image-2/2026-10-26.md)).
- **Aliases: none.** The model page lists no alias and no `-latest` form, unlike
  `grok-imagine-image` (`grok-imagine-image-2026-03-02`) and `grok-imagine-image-quality`
  (`…-20260403`, `…-latest`, `grok-imagine-image-pro`). There is no dated snapshot of 2.0 to pin
  ([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md)).
- Siblings, all separate IDs:
  - `grok-imagine-image` — $0.02/image, the 1.0 tier, explicitly "not affected" by the 2026
    retirements
  - `grok-imagine-image-quality` — $0.05/image, **retires 2026-11-02**, redirects to 2.0 at
    `quality: low`
  - `grok-imagine-image-pro` — retired 2026-05-15, redirected to `-quality`
  - video: `grok-imagine-video`, `grok-imagine-video-1.5`, `grok-imagine-video-1.5-lite`

### Release date: no first-party date, a consistent August 2026 cluster

xAI publishes **no launch date and no announcement** for 2.0. The release notes contain no entry
for it; the nearest first-party text is an **August 2026** changelog entry that already treats the
model as shipped ("The `quality` parameter on `grok-imagine-image-2.0` now accepts `auto`, and the
default when `quality` is omitted has moved from `medium` to `auto`")
([release notes](../../sources/x.ai/release-notes/2026-10-26.md)). Three independent records
bracket the date:

| Source | Date | What it dates |
| --- | --- | --- |
| Artificial Analysis `releaseDate` | **2026-08-07** | AA's own model metadata |
| fal endpoint `date` / `publishedAt` | 2026-08-06 / 2026-08-11 | host listing |
| Replicate `created_at` | 2026-08-13 | host listing |

The evidence supports **launch in the first half of August 2026**, with 2026-08-07 the best single
date available. That is inside the one-year window (on or after 2025-10-26). The only first-party
corroboration is month-level. Note that AA's `introducedAt` is **2026-09-14**, a month after its
own `releaseDate` — the date AA added the entry to its board, not the model's launch.

### Distinctness from `grok-imagine-image` (row 24) and from `-quality`

| | `grok-imagine-image` | `grok-imagine-image-quality` | `grok-imagine-image-2.0` |
| --- | --- | --- | --- |
| xAI price | $0.02/image | $0.05/image | $0.04/image |
| `quality` parameter | no | no | **yes** (`low`/`medium`/`auto`) |
| Batch API | yes | no | yes |
| xAI regions | us-east-1, us-west-2, us-saltlake-2 | us-east-1, us-west-2 | us-east-1, us-west-2 |
| AA T2I Elo | 1022.23 | 1048.86 | **1165.59** |
| AA Editing Elo | 1073.23 | 1095.27 | **1116.87** |

Sources: [model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/grok-imagine-image-2.0/2026-10-26/index.md).

The three IDs are priced separately, measured separately, and hosted on separate endpoints. 2.0 is
the **successor generation to `-quality`** — the migration guide says "`grok-imagine-image-2.0` now
covers everything `grok-imagine-image-quality` was used for, at a lower price" — while 1.0 survives
alongside it as the cheap tier
([migrations](../../sources/x.ai/imagine-image-migrations/2026-10-26.md)). It is **not** an alias of
either. What is *not* established is what changed technically: no parameter count, architecture,
training-data statement, or model card exists for any Grok Imagine image tier.

## Current assessment

**Current, recommended, and the family's quality leader — by a wide margin on generation, a narrow
one on editing.**

- **It is the model xAI tells you to use.** The Models page's "Which model should I choose?"
  section reads "Images: Grok Imagine Image 2.0", and every code example across the generation,
  editing, prompting and Imagine overview pages uses it
  ([pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
  [overview](../../sources/x.ai/imagine-overview/2026-10-26.md)). 1.0 is not recommended anywhere.
- **On independent measurement it is a clear step up for generation.** AA text-to-image: **1165.59**
  (95% CI 1153.59–1177.59), rank **6 of 106**, against 1022.23 for 1.0 (**+143.4**) and 1048.86 for
  `-quality` (**+116.7**), all with non-overlapping intervals
  ([AA](../../sources/artificialanalysis.ai/grok-imagine-image-2.0/2026-10-26/index.md)).
- **The editing advantage is real but modest.** AA editing: **1116.87** (CI 1103.87–1129.87), rank
  **17 of 77** — **+43.6** over 1.0 and **+21.6** over `-quality`, still non-overlapping but
  mid-pack on the board rather than near the top.
- **The gain is concentrated at the top end.** On T2I it is statistically tied with MAI-Image-2.6
  (1165.89, CI 1153.89–1177.89 — a 0.3-point gap inside both intervals) and clear of Nano Banana 2
  (1139.99), but below GPT Image 2 (high) at 1185.74, Nano Banana 2.1 at 1175.56, and the GPT Image
  2.5 entries at 1206.72 and 1221.96. It is the best Grok Imagine image model, not the best image
  model.
- **Its future is the whole high tier.** After 2026-11-02 the retired `-quality` slug is served by
  2.0 at `quality: low`, so a caller who never changes code ends up on 2.0
  ([migrations](../../sources/x.ai/imagine-image-migrations/2026-10-26.md)). 2.0 is not a preview
  or a retained specialist; it is the mainline.

For a reader choosing today: 2.0 when output quality matters; `grok-imagine-image` (1.0) when
$0.02/image dominates and 1022-Elo-class output is enough; `-quality` only for migration work
before 2026-11-02.

## Documented capabilities

Everything below is vendor or host documentation. No independent test was run.

- **Modalities:** "text, image → image" — one model ID serves generation and editing, not two SKUs
  ([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md)).
- **`quality`: `low` / `medium` / `auto`, 2.0-only.** "When omitted, the default is `auto`… Auto
  currently uses `low` for image generation and `medium` for image editing. Images are billed at the
  quality they are served at. **The parameter is only supported for `grok-imagine-image-2.0`.**"
  The default moved from `medium` to `auto` in August 2026
  ([generation](../../sources/x.ai/imagine-image-generation/2026-10-26.md),
  [release notes](../../sources/x.ai/release-notes/2026-10-26.md)).
- **Resolution:** `1k` (default) or `2k` per the guides; the REST reference and the OpenAPI
  `ImageResolution` enum also list `1.5k`, which no guide explains
  ([generation](../../sources/x.ai/imagine-image-generation/2026-10-26.md),
  [API reference](../../sources/x.ai/inference-api-images/2026-10-26.md)).
- **Aspect ratios:** 16 values — `1:1`, `16:9`/`9:16`, `4:3`/`3:4`, `3:2`/`2:3`, `2:1`/`1:2`,
  `19.5:9`/`9:19.5`, `20:9`/`9:20`, `21:9`, `5:2`, plus `auto` (default). `21:9` and `5:2` were
  added in the August 2026 update
  ([generation](../../sources/x.ai/imagine-image-generation/2026-10-26.md),
  [release notes](../../sources/x.ai/release-notes/2026-10-26.md)).
- **`n` up to 10 images per request** on xAI
  ([generation](../../sources/x.ai/imagine-image-generation/2026-10-26.md)); fal's 2.0 endpoints
  also allow 10.
- **Editing:** `/v1/images/edits`, `application/json` only — the OpenAI SDK's `images.edit()`
  (multipart) does not work. Inputs may be a public URL, a base64 data URI, or a Files API
  `file_id`, mixable within one request
  ([editing](../../sources/x.ai/imagine-image-editing/2026-10-26.md)).
- **Up to 5 source images per edit**, referenced positionally as `<IMAGE_0>`, `<IMAGE_1>`; output
  aspect ratio follows the first input unless overridden. Capacity went 3 → 5 in August 2026
  ([editing](../../sources/x.ai/imagine-image-editing/2026-10-26.md),
  [API reference](../../sources/x.ai/inference-api-images/2026-10-26.md),
  [release notes](../../sources/x.ai/release-notes/2026-10-26.md)).
- **Chained edits:** "Chain multiple edits together by using each output as the input for the next."
- **Deferred generation:** `deferred: true` returns a `request_id`; poll `GET
  /v1/images/{request_id}`; results retained 24 hours; URL output only.
- **Output:** `response_format` `url` (temporary) or `b64_json`; fal adds `jpeg`/`png`/`webp`.
- **Operations:** 6 requests/second; Batch API supported; regions `us-east-1`, `us-west-2`
  ([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md)).
- **Moderation signal:** the xAI SDK exposes `response.respect_moderation` so a caller can detect a
  filtered image.

### Marketing and host claims (kept separate, not findings)

- xAI, quoted in the retirement guide: 2.0 at `low` "ranks #2 on the Arena Image Edit leaderboard
  and #3 on Text-to-Image". No snapshot date, sample count, or board version is given, and the
  claim is about `low`, not the default configuration
  ([migrations](../../sources/x.ai/imagine-image-migrations/2026-10-26.md)). It is broadly
  consistent with AA's ranks (6 on T2I, 17 on editing) only in the loose sense that both put the
  model in the top fifth; the absolute ranks differ and cannot be reconciled without the board
  state xAI was reading.
- xAI: "The `grok-imagine-image-2.0` model supports a wide range of visual styles, from
  ultra-realistic photography to anime, oil paintings, and pencil sketches"
  ([editing](../../sources/x.ai/imagine-image-editing/2026-10-26.md)).
- Replicate: "the latest generation of the Imagine image family", "Image 2.0 sits in between, with a
  quality knob so you can tune the tradeoff yourself", and prompt advice ("Name real things
  directly… The model handles real-world knowledge well"). No method, sample, or measurement
  ([Replicate](../../sources/replicate.com/grok-imagine-image-2/2026-10-26.md)).
- xAI: "Generated media is subject to content policy review and is not used for training"
  ([overview](../../sources/x.ai/imagine-overview/2026-10-26.md)).

## Limitations and constraints

- **2K ceiling.** No 4K and no per-megapixel tier. Resolution is a two- (or three-) value choice.
- **`quality` is missing from xAI's machine-readable contract.** The guides, the August release
  note and the November migration guide all depend on it, but neither the REST request-field list
  nor `GenerateImageRequest` / `EditImageRequest` in `openapi.json` contains a `quality` property.
  A client generated from the spec cannot send it
  ([API reference](../../sources/x.ai/inference-api-images/2026-10-26.md)). fal and Replicate both
  expose it, so the gap is in the first-party spec, not in practice.
- **`1.5k` is undocumented.** It appears in the REST reference and the OpenAPI enum and in fal's
  schema, and in no xAI guide. Pixel dimensions for `1k`/`2k` come only from Replicate's README
  (1024 / 2048 on the long edge).
- **Not on the US regional endpoint.** `us.api.x.ai/v1` "currently serves only `grok-4.7` and
  `grok-4.6`, with no image generation, video generation, or voice APIs" — a US-processing
  guarantee and this model are mutually exclusive on xAI's own API
  ([security FAQ](../../sources/x.ai/security-faq/2026-10-26.md)).
- **Zero Data Retention changes the call shape.** Under ZDR the caller must return base64 or supply
  pre-signed `output.upload_urls`, `file_id` inputs are unavailable, and agentic image generation is
  excluded; the `grok-imagine` models are the only image models permitted under ZDR at all
  ([security FAQ](../../sources/x.ai/security-faq/2026-10-26.md)).
- **Temporary output URLs.** Retaining output requires `b64_json`, `storage_options`, or the Files
  API.
- **Host surface gaps, measured against xAI's contract:**

  | Capability | xAI docs | fal 2.0 | Replicate 2.0 |
  | --- | --- | --- | --- |
  | Edit references | up to 5 | 5 | **1** (`image`, no multi-reference) |
  | `quality` | `low`/`medium`/`auto`, default `auto` | all three, **default `medium`** | `low`/`medium`, default `medium`, no `auto` |
  | Resolution | `1k`, `2k` (+`1.5k` in schema) | `1k`, `1.5k`, `2k` | `1k`, `2k` |
  | Default resolution | `1k` | `1k` | **`2k`** |
  | Aspect ratios | 16 | 16 | 14 (no `21:9`, no `5:2`) |
  | Images per request | `n` 1–10 | 10 | 1 |
  | `aspect_ratio` when editing | override allowed | override allowed | "Ignored when editing an image" |

  Sources: [fal](../../sources/fal.ai/grok-imagine-image-2.0/2026-10-26.md),
  [Replicate](../../sources/replicate.com/grok-imagine-image-2/2026-10-26.md),
  [generation](../../sources/x.ai/imagine-image-generation/2026-10-26.md).
  The practical consequence: a multi-reference edit is xAI-only or fal-only, and an `auto`-quality
  request is billed differently depending on which host receives it.
- **Safety control differs by route.** fal exposes `enable_safety_checker` (default `true`,
  "Authorized callers may set false to request relaxed screening"), a knob xAI's public image docs
  do not describe. Replicate documents nothing about screening. Refusal behaviour therefore differs
  by host and by account.
- **Undocumented controls.** No seed, negative prompt, guidance, or step parameter appears in any
  xAI image documentation or host schema captured here. Reproducibility is not documented.
- **No weights, no local deployment.** No `author=xai` or `search=grok-imagine` hit on Hugging Face
  ([negative search](../../sources/huggingface.co/grok-imagine-image-weights-search/2026-10-26.md)).
  A one-date negative search, not a vendor statement.
- **Measurement is one configuration.** AA benchmarks 2.0 at "quality medium and 2k resolution"
  only, so no Elo exists for `low`, for `auto`, or for 1K output — and no Elo exists for the 1.0 or
  `-quality` tiers at a matched configuration
  ([AA](../../sources/artificialanalysis.ai/grok-imagine-image-2.0/2026-10-26/index.md)).
- **Editing quality is measured but not decomposed.** AA's editing Elo is a preference score with no
  identity-preservation, instruction-adherence, or multi-reference breakdown, and no sample images
  are stored for this model.

## Access, pricing, licensing

### xAI first-party

- **$0.04 per output image**, flat, regardless of prompt length
  ([pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
  [overview](../../sources/x.ai/imagine-overview/2026-10-26.md)). Generation is flat per image;
  "Image edits are billed for both the input image and the generated output image".
- **Billed at the quality served.** `auto` currently serves `low` for generation and `medium` for
  editing, so an omitted `quality` is billed at the served rate
  ([migrations](../../sources/x.ai/imagine-image-migrations/2026-10-26.md)).
- 6 rps, Batch API supported, two US regions. The published table has **no resolution or quality
  cells**, even though the migration guide says 2.0 at `low` is "$0.01 per image cheaper than
  `grok-imagine-image-quality` **at every resolution**" — a phrase that implies resolution-varying
  prices exist without publishing them.

### fal

- Four-cell price table per output image: **$0.04** (low, 1K), **$0.06** (medium, 1K), **$0.06**
  (low, 2K), **$0.08** (medium, 2K), plus **$0.01 per input image** on edits
  ([fal](../../sources/fal.ai/grok-imagine-image-2.0/2026-10-26.md)). `licenseType: "commercial"`,
  badges "Inference", "Commercial use", "Partner"; `hostingType: "proxy"`.

### Replicate

- **$0.04 per output image**, "or 25 images for $1", plus **$0.01 per input image** on edits — flat
  across quality and resolution. 457.4K runs at capture
  ([Replicate](../../sources/replicate.com/grok-imagine-image-2/2026-10-26.md)).

### Three-way pricing contradiction (preserved, not resolved)

| Configuration | xAI table | fal | Replicate | AA |
| --- | --- | --- | --- | --- |
| low, 1K | $0.04 (flat) | $0.04 | $0.04 | — |
| medium, 1K | $0.04 (flat) | $0.06 | $0.04 | $0.06 (if AA's price is medium 1K) |
| medium, 2K | $0.04 (flat) | $0.08 | $0.04 | $0.06 (AA says it serves this config) |

xAI publishes one number; fal prices quality and resolution; Replicate prices neither; AA records
$0.06/image for a medium-2K configuration that fal prices at $0.08. The sources do not reconcile
this, and no page explains whether xAI's flat $0.04 is a low/1K list price or a genuine
all-configuration price. Treat any single per-image figure for this model as configuration-specific
until the pricing page publishes a matrix.

### Licensing and weights

- No weights licence exists to inspect: the model is API-only.
- Output licensing terms were **not captured**. `x.ai` (including `/legal`, `/news` and
  `/sitemap.xml`) returned HTTP 403 to this fetcher on the capture date, and the docs pages that
  were reachable link out to `x.ai/legal` without restating the terms. fal's "Commercial use" badge
  is the only captured statement about commercial use, and it is the host's, not xAI's.

## Unresolved questions

1. **What is 2.0's actual launch date?** AA says 2026-08-07; fal listed it 2026-08-06 and published
   2026-08-11; Replicate created it 2026-08-13; xAI publishes no date and no announcement. Whether
   xAI shipped it earlier and hosts followed is unknown.
2. **What changed technically from `-quality` to 2.0?** No model card, parameter count,
   architecture, or training statement exists for any tier. "Successor generation" rests on the
   migration guide's wording and on a +117 T2I Elo delta, not on a technical disclosure.
3. **Is `1.5k` real, and for which tiers?** It is in the OpenAPI enum and fal's schema and in no
   guide; no pixel dimensions are published.
4. **Why is `quality` absent from the OpenAPI spec** while three documentation pages and two hosts
   depend on it?
5. **What does xAI actually charge at 2K and at `medium`?** The flat $0.04 table, fal's four-cell
   table and AA's $0.06 for medium-2K cannot all be right.
6. **Will `grok-imagine-image` (1.0) be retired in turn?** No notice covers it; the migration guide
   says only that it is unaffected by the November 2 change. xAI's recommendation has already moved
   to 2.0.
7. **How good is multi-reference editing, and does it hold identity across 5 images?** xAI documents
   the capacity, not the fidelity; AA scores editing without a reference-count breakdown; Replicate
   does not expose multi-reference at all.
8. **Do refusals behave the same on xAI and on fal with `enable_safety_checker: false`?** No test
   data; fal's relaxed setting is authorization-gated.
9. **What are xAI's output-licensing terms?** Not captured; `x.ai` blocked this fetcher.
10. **What exactly did xAI mean by "#2 on the Arena Image Edit leaderboard"?** No snapshot, board
    version, or configuration is named, and AA's independent board puts 2.0 at #17 for editing.

## Evidence status

**No direct tests were run for this page.** No image was generated, no edit was attempted, no
refusal was provoked, and no latency or quality figure was reproduced. Everything above is
documentation, host metadata, or a third-party leaderboard read on 2026-10-26.

Evidence floor: **met.**

- **First-party (xAI developer documentation):** the per-model pages for all three image tiers
  ([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md) — a three-model
  shared capture whose 2.0 section is quoted verbatim), generation, editing, prompting scope,
  pricing and model recommendation, release notes, the two retirement guides, the REST reference
  plus OpenAPI schema, the Imagine overview, and the security FAQ.
- **Independent hosts:** fal (two proxied 2.0 endpoints, catalogue pricing, input schemas) and
  Replicate (separate model slug, README, schema, price).
- **Independent measurement:** Artificial Analysis, two boards, with Elo, confidence intervals,
  sample counts, `releaseDate`, and the configuration it benchmarks.

Weaknesses of this evidence base, stated plainly:

- **No first-party announcement and no first-party release date.** `x.ai` returned HTTP 403 to
  every request on the capture date (homepage, `/news`, `/sitemap.xml`), so xAI's blog posts, model
  card and legal terms could not be captured. All first-party evidence is developer documentation,
  which describes the API contract and makes almost no capability claim beyond it.
- **The launch date is a host/aggregator consensus, not a vendor statement.** Three records agree
  within a week, which is stronger than one host alone, but none of them is xAI.
- **The quality numbers are one aggregator's Elo** at one configuration, with no published prompt
  set or vote count, so they cannot be re-derived and cannot be compared against another harness.
- **Pricing is genuinely unresolved** across four sources (see the table above); this page records
  the disagreement rather than picking a winner.
- **Two internal contradictions in xAI's own contract** (`1.5k`, and the missing `quality`
  property) are recorded rather than resolved.
- The sibling page [Grok Imagine Image](grok-imagine-image.md) was written from the same shared
  captures; its statements about 1.0 remain scoped to 1.0 and none of 2.0's findings transfer to it.

The next useful evidence would be: a fixed prompt set run against `grok-imagine-image`,
`grok-imagine-image-2.0` and `grok-imagine-image-quality` at 1K and 2K with `quality` pinned, on xAI
and on fal, to resolve both the quality ordering and the billing matrix; an edit-adherence and
identity-preservation check at 1, 3 and 5 references; a timing run to replace the absent latency
data (AA publishes none for this model); and a refusal probe on both hosts with the safety checker
on and off.

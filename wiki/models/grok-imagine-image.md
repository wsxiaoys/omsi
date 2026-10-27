# Grok Imagine Image

xAI's base-tier image model, served under the model ID `grok-imagine-image` on the xAI API and
through partners. It does text-to-image and image editing from the same slug, at a flat
**$0.02/image** — the cheapest of the three Grok Imagine image tiers
([xAI pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md)). xAI's image API dates to
**January 2026** and the model was on fal by **2026-01-29** and Replicate by **2026-02-12**
([release notes](../../sources/x.ai/release-notes/2026-10-26.md),
[fal](../../sources/fal.ai/grok-imagine-image/2026-10-26.md),
[Replicate](../../sources/replicate.com/grok-imagine-image/2026-10-26.md)). It is API-only: no
weights are published.

## Identity

- Canonical model ID: **`grok-imagine-image`** ([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md)).
  It is also the `model` example in xAI's own OpenAPI request schema
  ([API reference](../../sources/x.ai/inference-api-images/2026-10-26.md)).
- Display name: **"Grok Imagine Image"** is the roster label and the host display title on both fal and
  Replicate. xAI itself mostly refers to the model by its slug; the only first-party use of the
  spaced name found in this capture is the Models page pointing images at "Grok Imagine Image 2.0"
  ([pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md)). Label and slug identify the
  same thing here.
- Vendor: xAI. First-party endpoints: `POST https://api.x.ai/v1/images/generations` and
  `POST https://api.x.ai/v1/images/edits`, both with `"model": "grok-imagine-image"`.
- Host endpoints: `xai/grok-imagine-image` (text-to-image) and `xai/grok-imagine-image/edit` on fal,
  both published **2026-01-29**, both `hostingType: "proxy"`
  ([fal](../../sources/fal.ai/grok-imagine-image/2026-10-26.md)); `xai/grok-imagine-image` on
  Replicate, `created_at` **2026-02-12**, `"hardware": "CPU"` (a passthrough, not a Replicate GPU
  deployment) ([Replicate](../../sources/replicate.com/grok-imagine-image/2026-10-26.md)).
- Siblings (separate model IDs, not aliases):
  - `grok-imagine-image-quality` — $0.05/image, **retires 2026-11-02**
  - `grok-imagine-image-2.0` — $0.04/image, the tier xAI recommends
  - `grok-imagine-image-pro` — retired 2026-05-15, redirected to `-quality`
  - video: `grok-imagine-video`, `grok-imagine-video-1.5`, `grok-imagine-video-1.5-lite`

### What the identity question actually resolves to

Three readings of this model are plausible from the roster label alone: a new image model, an API
alias for Grok 2 Image, or a mode of Grok Imagine. The evidence supports the first, with a
qualification.

- **Not an alias for Grok 2 Image.** xAI's changelog records a separate "March 2025 — Image
  Generation Model available on API", and then a "January 2026" entry announcing "Video Generation &
  a revamped Image Generation […] now available"
  ([release notes](../../sources/x.ai/release-notes/2026-10-26.md)). No `grok-2-image` page, slug, or
  sitemap entry exists in current xAI documentation; the only image slugs in the current model and
  price tables are the `grok-imagine-*` ones
  ([pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md)). The absence of a
  `grok-2-image` page is consistent with retirement but is **not** a stated retirement — no
  migration guide names it.
- **Not a mode of the video model.** Grok Imagine is the family name for both modalities. The image
  model is a distinct ID with per-image pricing, synchronous (or deferred) responses, and 1K/2K
  output; the video models are separate IDs, asynchronous, 480p–1080p, up to 15 s, per-second priced
  ([video overview](../../sources/x.ai/imagine-video-overview/2026-10-26.md)). The one coupling is
  that image-to-video takes a still as its first frame, and text-to-video on 1.5 is implemented as
  text-to-image then image-to-video.
- **A distinct tier, not a repackaging of `-quality`.** Each tier has its own price, rate limit
  (all 6 rps), region list (the base tier alone adds `us-saltlake-2`), and Batch API support (base
  yes, quality no, 2.0 yes). Artificial Analysis also measures them separately, at 1022.23 vs
  1048.86 Elo ([AA](../../sources/artificialanalysis.ai/grok-imagine-image/2026-10-26.md)).

### Naming collision on fal worth knowing

fal publishes the **quality** tier under the plain title "Grok Imagine Image" at
`xai/grok-imagine-image/quality/text-to-image`, with a description that begins "Grok Imagine Pro is
an advanced AI model from xAI…". The standard tier at `xai/grok-imagine-image` carries the same
display title. Only the endpoint path separates them
([fal](../../sources/fal.ai/grok-imagine-image/2026-10-26.md)). Anyone citing "Grok Imagine Image on
fal" without the path may be citing either tier, at $0.02 or $0.05.

### Version ambiguity

- The model page lists exactly one alias, **`grok-imagine-image-2026-03-02`**, and no `-latest`
  alias ([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md)). Per xAI's
  documented alias convention, the undated slug resolves to the latest stable release, so the
  current behaviour is the 2026-03-02 snapshot. Nothing documents what changed on that date, or
  whether the January launch snapshot differed.
- Neither host states which snapshot it proxies. fal and Replicate both forward to xAI, so both
  inherit the alias and can change behaviour without a host-side announcement.
- The dated alias is the only first-party date attached to the model itself; everything else about
  timing comes from a month-level changelog entry or from host listing dates.

## Current assessment

**Current, distinct, and the cheap option — not the recommended one.**

- It survived both 2026 image-tier retirements. The November 2 migration guide states explicitly
  that "`grok-imagine-image` (1.0) is not affected by this change"
  ([migrations](../../sources/x.ai/imagine-image-migrations/2026-10-26.md)). It is not a
  retained-legacy model.
- On the one independent measurement available it scores below `-quality`: 1022.23 Elo
  (95% CI 1011.23–1033.23) against 1048.86 (CI 1039.86–1057.86), non-overlapping intervals and a
  ~27-point gap ([AA](../../sources/artificialanalysis.ai/grok-imagine-image/2026-10-26.md)). AA
  carries no Elo for `-2.0` in this capture, so "base vs 2.0" is unmeasured.
- xAI does not recommend it. The Models page's "Which model should I choose?" points images at
  Grok Imagine Image 2.0, and every code example across the image guides uses
  `grok-imagine-image-2.0`; the base slug appears only as the OpenAPI schema example
  ([pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
  [API reference](../../sources/x.ai/inference-api-images/2026-10-26.md)).
- Its practical niche is price: at $0.02/image it is half the cost of 2.0 at `low` and 40% of
  `-quality`, with the same 6 rps, the same documented 1K/2K output range, and Batch API support
  that `-quality` lacks.

For a reader choosing today: base tier if cost dominates and 1022 Elo-class output is acceptable;
2.0 if quality matters (it is also the tier with the `quality` knob and the five-reference edit
path in current docs); `-quality` only for migration work, since it retires on 2026-11-02.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

- **Text-to-image and editing from one model ID.** `grok-imagine-image` is listed with modalities
  "text, image → image" ([model page](../../sources/x.ai/grok-imagine-image-model-page/2026-10-26.md)).
  Generation goes to `/v1/images/generations`, edits to `/v1/images/edits`; the edit endpoint
  requires `application/json`, so the OpenAI SDK's `images.edit()` (multipart) does not work
  ([editing](../../sources/x.ai/imagine-image-editing/2026-10-26.md)).
- **Image inputs for editing**: public URL, base64 data URI, or a Files API `file_id`, mixable
  within one request.
- **Multi-image editing** up to **5** source images, referenced positionally as `<IMAGE_0>`,
  `<IMAGE_1>` in the prompt; the output aspect ratio follows the first input unless overridden
  ([editing](../../sources/x.ai/imagine-image-editing/2026-10-26.md),
  [API reference](../../sources/x.ai/inference-api-images/2026-10-26.md)).
- **Chained edits**: "Chain multiple edits together by using each output as the input for the next."
- **Aspect ratios**: 16 values including `21:9`, `5:2`, `19.5:9`, `9:20`, and `auto`
  ([generation](../../sources/x.ai/imagine-image-generation/2026-10-26.md)).
- **Resolution**: `1k` (default) or `2k`. The API schema also enumerates `1.5k`, which no guide
  explains (see Limitations).
- **`n` up to 10 images per request** on xAI; 1–4 on fal.
- **Deferred generation**: `deferred: true` returns a `request_id`, results retained 24 hours; URL
  output only.
- **Output formats**: `url` (temporary) or `b64_json`; fal adds `jpeg` / `png` / `webp`.
- **Rate limit**: 6 requests/second. **Regions**: `us-east-1`, `us-west-2`, `us-saltlake-2`.
  **Batch API**: supported.
- **Moderation signal**: the xAI SDK exposes `response.respect_moderation`, so a caller can detect
  that an image was filtered.

### Marketing and host claims (kept separate, not findings)

- Replicate: "SOTA image model from xAI"; "generates images quickly (around 4 seconds per image)";
  "particularly good at rendering readable text within images"; and, attributed to "testing from
  the ComfyUI team and other creators", "strong facial consistency" and strength in "retro anime
  and cyberpunk styles". No method, sample, resolution, or date is given for any of it
  ([Replicate](../../sources/replicate.com/grok-imagine-image/2026-10-26.md)).
- xAI, on the successor tier: `grok-imagine-image-2.0` at `low` "ranks #2 on the Arena Image Edit
  leaderboard and #3 on Text-to-Image" ([migrations](../../sources/x.ai/imagine-image-migrations/2026-10-26.md)).
  This is a claim about **2.0 at low**, quoted without a snapshot date, and it does not describe
  `grok-imagine-image`.
- xAI: "Generated media is subject to content policy review and is not used for training"
  ([overview](../../sources/x.ai/imagine-overview/2026-10-26.md)).
- fal's `revised_prompt` output field ("The enhanced prompt that was used to generate the image")
  implies prompt rewriting is applied, but no doc states whether it can be disabled
  ([fal](../../sources/fal.ai/grok-imagine-image/2026-10-26.md)).

## Limitations and constraints

- **2K ceiling.** No 4K, no per-megapixel tier. Output resolution is a two-value choice.
- **No quality knob.** `quality` (`low` / `medium` / `auto`) is documented as **2.0-only**
  ([generation](../../sources/x.ai/imagine-image-generation/2026-10-26.md)), so the base tier has one
  fixed quality at $0.02 — which also means its price does not move with resolution on xAI's table.
- **Not available on the US regional endpoint.** `us.api.x.ai/v1` "currently serves only `grok-4.7`
  and `grok-4.6`, with no image generation, video generation, or voice APIs"
  ([security FAQ](../../sources/x.ai/security-faq/2026-10-26.md)). A US-processing guarantee and
  this model are mutually exclusive on xAI's own API.
- **Zero Data Retention changes the call shape.** Under ZDR the caller must return base64 or supply
  pre-signed `output.upload_urls`, `file_id` inputs are unavailable, and agentic image generation is
  excluded — the `grok-imagine` models are the only image models permitted under ZDR at all
  ([security FAQ](../../sources/x.ai/security-faq/2026-10-26.md)).
- **Temporary output URLs.** xAI URLs expire; retaining output requires `b64_json`, `storage_options`,
  or the Files API.
- **Host parameter gaps.** Against xAI's documented surface, fal exposes `num_images` 1–4 (not 1–10),
  drops `21:9` and `5:2` from the aspect-ratio enum, caps edit references at **3** ("A maximum of 3
  images are supported", not 5), and has no `quality` field
  ([fal](../../sources/fal.ai/grok-imagine-image/2026-10-26.md)). The August 2026 changelog states the
  five-reference change as "Image editing now accepts up to 5 source images per request (was 3)" with
  no model qualifier, so fal's 3 looks like a host lag rather than a model limit — but no host
  statement confirms that.
- **Safety control differs by route.** fal exposes `enable_safety_checker` (default `true`, with
  "Authorized callers may set false to request relaxed screening"), a knob xAI's public image docs
  do not describe. Refusal behaviour therefore differs by host and by account, and a refusal on one
  platform is not evidence about the model's general willingness.
- **Two first-party documentation contradictions.** (1) `1.5k` appears in the REST reference and the
  OpenAPI `ImageResolution` enum while the generation guide says only `1k` and `2k` are supported.
  (2) `quality` is documented in the guides and depended on by the August release note and the
  November 2 migration guide, but is absent from both the REST request-field list and the OpenAPI
  request schemas — a client generated from the spec cannot send it
  ([API reference](../../sources/x.ai/inference-api-images/2026-10-26.md)).
- **No weights, no local deployment.** A Hugging Face query for `author=xai` and for
  `search=grok-imagine` returned empty on 2026-10-26
  ([negative search](../../sources/huggingface.co/grok-imagine-image-weights-search/2026-10-26.md)).
  That is a one-date negative search, not a vendor statement.
- **Undocumented controls.** No seed, negative prompt, guidance, or step parameters appear in any
  xAI image documentation captured here; fal's schema has none either.
- **Unmeasured editing quality.** Every independent number found is text-to-image. No source
  measures identity preservation, edit adherence, or multi-reference consistency for this model.

## Access, pricing, licensing

### xAI first-party

- **$0.02 per output image**, flat, regardless of prompt length
  ([pricing](../../sources/x.ai/imagine-models-pricing/2026-10-26.md),
  [overview](../../sources/x.ai/imagine-overview/2026-10-26.md)).
- **Edits bill the input image as well as the output**: "Image edits are billed for both the input
  image and the generated output image" ([overview](../../sources/x.ai/imagine-overview/2026-10-26.md)).
  The exact input rate is not published on the pricing page; fal's per-input figure is $0.002.
- 6 rps, Batch API supported, three US regions. Pricing table does not vary by resolution, even
  though partners charge a 2K premium for the quality and 2.0 tiers.

### fal

- Catalogue override: "**$0.022** per image (**$0.02** for image output + **$0.002** for image
  input)" — but the same endpoint's on-page calculator renders **$0.02 per image**, and a
  text-only request has no input image. Read $0.02 as the text-to-image price and $0.022 as the
  single-reference edit price; the catalogue string does not distinguish them
  ([fal](../../sources/fal.ai/grok-imagine-image/2026-10-26.md)).
- No resolution premium for this tier (unlike `-quality` at $0.05/$0.07 and `-2.0` at
  $0.04–$0.08).
- `licenseType: "commercial"`, badges "Inference", "Commercial use", "Partner". The licence field
  is fal's statement about use through fal, not an xAI licence grant.

### Replicate

- **$0.02 per output image**, "or 50 images for $1". No separate input charge is listed. 6.6M runs
  at capture ([Replicate](../../sources/replicate.com/grok-imagine-image/2026-10-26.md)).

### Artificial Analysis (for cross-checking the tier, not this model's price)

- The quality tier is recorded at `pricePer1kImages: 50`, i.e. $0.05/image, matching xAI. No price is
  recorded for `grok-imagine-image` itself ([AA](../../sources/artificialanalysis.ai/grok-imagine-image/2026-10-26.md)).

### Licensing and weights

- No weights licence exists to inspect: the model is API-only.
- Output licensing terms were **not** captured. `x.ai` (including `/legal` and `/news`) returned
  HTTP 403 to this fetcher on the capture date, and the docs pages that were reachable link out to
  `x.ai/legal` without restating the terms. fal's "Commercial use" badge is the only captured
  statement about commercial use, and it is the host's, not xAI's.

## Unresolved questions

1. **What shipped in January 2026, and what changed on 2026-03-02?** The changelog is month-level and
   the only dated alias is `grok-imagine-image-2026-03-02`. Whether the January launch snapshot is
   still reachable, and whether 1.0 was itself updated in March, is unknown.
2. **Which snapshot do fal and Replicate proxy,** and do they refresh when xAI moves the alias? Both
   are passthroughs, so neither can be assumed to pin a version.
3. **Does `1.5k` exist for this model?** It is in the schema enum and in no guide, and fal does not
   expose it.
4. **What is the base tier's real latency?** AA's ~5.1 s median is for `-quality`; Replicate's
   "around 4 seconds" is unattributed and unqualified by resolution or batch size.
5. **How good is editing?** No independent edit measurement exists for this tier; the only Arena
   ranks found are xAI's own reading, for 2.0 at `low`.
6. **Will `grok-imagine-image` (1.0) be retired in turn?** Two tiers were retired or redirected in
   2026 and no notice covers 1.0. xAI's recommendation has already moved to 2.0.
7. **Can prompt rewriting be disabled?** fal's `revised_prompt` implies rewriting; no doc says
   whether it is always on.
8. **What are xAI's output-licensing terms?** Not captured; `x.ai` blocked this fetcher.
9. **Do refusals behave the same on xAI and on fal with `enable_safety_checker: false`?** No test
   data; fal's relaxed setting is authorization-gated, so results will differ by account.

## Evidence status

**No direct tests were run for this page.** Everything above is documentation, host metadata, or a
third-party leaderboard read on 2026-10-26. No image was generated, no refusal was provoked, and no
latency or quality figure was reproduced.

Evidence floor: **met.** Ten first-party records from `docs.x.ai` (model pages, generation, editing,
pricing, release notes, migrations, REST reference plus OpenAPI, security FAQ, video overview,
Imagine overview) plus three independent records — fal (host), Replicate (host), and Artificial
Analysis (independent Elo) — plus one negative weights search on Hugging Face.

Weaknesses of this evidence base, stated plainly:

- **No first-party announcement.** `x.ai` returned HTTP 403 to every request on the capture date
  (homepage, `/news`, `/api`, `/sitemap.xml`), so xAI's blog posts and legal terms could not be
  captured. All first-party evidence here is developer documentation, which describes the API
  contract but makes no capability or quality claims beyond it.
- **The launch date rests on a month-level changelog entry** plus two host listing dates. It is not
  a day-precise first-party date.
- **The only quality number is an aggregator Elo** with no published prompt set or sample size, and
  it covers text-to-image only.
- **Two internal contradictions in xAI's own contract** (`1.5k`, `quality`) are recorded rather than
  resolved.
- The aggregator view is incomplete for the family: no `-2.0` entry appeared in either Artificial
  Analysis capture, so the base tier cannot be positioned against the recommended tier on measured
  quality.

The next useful evidence would be: a small fixed prompt set run against xAI `grok-imagine-image` and
`grok-imagine-image-2.0` at 1K and 2K with matched seeds where available; an edit-adherence and
identity-preservation check across one and five references; a refusal probe on both hosts with the
safety checker on and off; and a timing run at 1K and 2K to replace Replicate's unattributed
"4 seconds".

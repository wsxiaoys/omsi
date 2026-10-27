# FASHN Virtual Try-On v1.6

FASHN's versioned virtual try-on endpoint: two images in (a person, a garment), one on-model image
out, at a native 864 × 1296 resolution and roughly 5–17 seconds per image depending on the speed/quality
`mode`. FASHN released it on **2025-06-25**, which is **four months before this roster's one-year
window (2025-10-26)**; the roster keeps it as a specialist utility exception, and the in-window FASHN
try-on release is instead **Try-On Max** (2026-01-26), which the roster does not list. FASHN still
serves v1.6 and marks it `Stable`, but its own docs now call Try-On Max "the recommended try-on
endpoint for most applications" and keep v1.6 "for real-time, cost-sensitive integrations"
([v1.6 API reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md),
[model lifecycle](../../sources/fashn.ai/fashn-model-lifecycle/2026-10-26.md),
[Try-On Max](../../sources/fashn.ai/fashn-tryon-max-api-reference/2026-10-26.md)).

## Identity

- Canonical name: **FASHN Virtual Try-On v1.6**. Vendor: FASHN — the operating entity on fashn.ai is
  "FASHN LTD", 71-75 Shelton Street, Covent Garden, London
  ([ToS](../../sources/fashn.ai/fashn-terms-of-service/2026-10-26.md)).
- First-party model ID: **`tryon-v1.6`**, called through the universal `POST https://api.fashn.ai/v1/run`
  with `{"model_name": "tryon-v1.6", "inputs": {...}}`
  ([v1.6 API reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- Host endpoint: **`fal-ai/fashn/tryon/v1.6`** on fal, titled "FASHN Virtual Try-On V1.6", catalogue
  `modelFamily: "Tryon 1.6"`, `modelLab: "Fashn"`
  ([fal record](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)).
- Roster label: "FASHN Try-On 1.6" / discovery path `fal-ai/fashn/tryon/v1.6`. The roster label and the
  first-party name agree on the version; the first-party product name is longer ("FASHN Virtual Try-On
  v1.6"). "FASHN Try-On" alone is ambiguous, because FASHN also sells an app tool called "Try On" and a
  separate `tryon-max` endpoint.
- Release date: **2025-06-25**. FASHN's lifecycle table gives "June 25, 2025" and the launch post is
  datelined that day ([lifecycle](../../sources/fashn.ai/fashn-model-lifecycle/2026-10-26.md),
  [launch post](../../sources/fashn.ai/fashn-tryon-v1-6-launch/2026-10-26.md)). fal's catalogue `date`
  and `publishedAt` are 2025-06-24T20:58:43Z — one day earlier, consistent with a late-UTC-day listing
  ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)).
- Lifecycle stage: **Stable**, the only endpoint FASHN marks Stable; everything released after it is
  Preview or Experimental ([lifecycle](../../sources/fashn.ai/fashn-model-lifecycle/2026-10-26.md)).
- Weights: **not published**. The only FASHN try-on weights on Hugging Face are v1.5, Apache-2.0
  ([HF record](../../sources/huggingface.co/fashn-vton-1-5/2026-10-26.md)).

### Is 1.6 a distinct model, a checkpoint, or a host label?

It is a **distinct versioned model in FASHN's own API**, not a host label and not a silent checkpoint
of the same ID:

1. FASHN gives it its own `model_name` (`tryon-v1.6`), its own release date, its own lifecycle stage,
   its own parameter set, its own resolution and its own fixed price (1 credit). The predecessor ran
   under a different access path — v1.5 was released "via the `/nightly` endpoint"
   ([v1.5 launch](../../sources/fashn.ai/fashn-tryon-v1-5-launch/2026-10-26.md)) — so the version
   change is an addressable identity change, not a swap behind one slug.
2. fal's `modelFamily: "Tryon 1.6"` and its separate `v1.5` entry mirror FASHN's own versioning rather
   than inventing it, and fal's description of each version states the same resolutions FASHN does
   (864×1296 and 576×864) ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)).
3. The difference is material to a reader: 1.5× linear resolution, materially different documented
   latency, and — decisively — **v1.5 has open Apache-2.0 weights and v1.6 does not**
   ([open-source post](../../sources/fashn.ai/fashn-vton-1-5-open-source/2026-10-26.md)).

By the knowledge base's own split test, v1.5 would justify its own page: both versions are obtainable
(v1.5 on fal and as weights; v1.6 on FASHN and fal), the difference changes the recommendation, and
version-specific evidence exists for each. **This page deliberately covers v1.6 only**; v1.5 appears
here solely as the comparison needed to place v1.6. Creating a v1.5 page is out of scope for this row.

### Siblings

| Endpoint | `model_name` | Released | Lifecycle | Resolution | Price | Item classes |
| --- | --- | --- | --- | --- | --- | --- |
| FASHN Virtual Try-On v1.5 | not in current docs | 2025-03-26 (blog) | absent from current table | 576×864 (fal description) | — | apparel |
| **FASHN Virtual Try-On v1.6** | `tryon-v1.6` | 2025-06-25 | Stable | 864×1296 native | 1 credit / image | tops, bottoms, one-pieces |
| Try-On Max | `tryon-max` | 2026-01-26 | Preview | 1K / 2K / 4K | 1–5 credits by mode and resolution | clothing, shoes, hats, jewelry, bags, "other wearable fashion items" |

Sources: [lifecycle](../../sources/fashn.ai/fashn-model-lifecycle/2026-10-26.md),
[v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md),
[Try-On Max](../../sources/fashn.ai/fashn-tryon-max-api-reference/2026-10-26.md),
[fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md). FASHN's lifecycle table is titled "Current
models", so v1.5's absence is not proof of retirement — fal still lists v1.5 as `status: public`,
`deprecated: false`. Whether `tryon-v1.5` is still callable on FASHN's own API is not documented.

Two other FASHN endpoints are adjacent but not try-on versions: `product-to-model` (generates a new
on-model image when there is no person photo) and `model-swap` (replaces the person in an existing
image). FASHN's own FAQ distinguishes them from try-on
([product page](../../sources/fashn.ai/fashn-virtual-try-on-product-page/2026-10-26.md),
[lifecycle](../../sources/fashn.ai/fashn-model-lifecycle/2026-10-26.md)).

## Current assessment

The evidence supports a narrow, practical claim: **v1.6 is a small, fast, cheap apparel try-on endpoint
that FASHN has now positioned below its own flagship.** It is a two-image model with no prompt, no
resolution control and no aspect-ratio control; the useful controls are which garment class to apply,
whether the garment photo is on-model or flat-lay, and how much compute to spend
([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).

What is documented, not merely claimed: the endpoint exists, its parameter set, its 864 × 1296
processing resolution, its 1-credit price, its documented latency table, its `Stable` status, and its
positioning as the speed/cost option beneath Try-On Max. What is **not** established anywhere in the
captured material: any independent measurement of try-on quality, any benchmark against other try-on
systems, any fit or size accuracy, and any statement of model size or architecture for v1.6
specifically.

The quality story is entirely FASHN's. The launch post's six side-by-side comparisons against v1.5
claim sharper fabric detail, better zipper and stitch fidelity, more anatomically correct legs, and
restored skin tone in Quality mode — vendor-selected examples with no protocol, sample size, or rater
model ([launch post](../../sources/fashn.ai/fashn-tryon-v1-6-launch/2026-10-26.md)). FASHN's own
retrospective note then concedes the ceiling: Try-On Max is "our most capable virtual try-on model",
and v1.6 "remains available as our fastest, most cost-efficient try-on option". Read together, FASHN's
2026 documentation is telling readers that v1.6 is the budget tier of its own line, not the quality
leader.

Two structural facts matter more than the marketing for a buyer. First, **v1.6 does not upscale**:
"FASHN v1.6 does not upscale beyond the resolution of the original input", and the launch examples
produced 768×1152 because the input model photos were 768×1152. 864×1296 is a ceiling, not a promise
([launch post](../../sources/fashn.ai/fashn-tryon-v1-6-launch/2026-10-26.md)). Second, **the model is
closed**: the family's architecture disclosure (972M parameters, pixel-space, maskless) belongs to the
separately open-sourced v1.5, and nothing states that v1.6 shares it
([open-source post](../../sources/fashn.ai/fashn-vton-1-5-open-source/2026-10-26.md)).

On price, v1.6 is as cheap as FASHN try-on gets: one credit per output image regardless of `mode` or
`output_format`, i.e. $0.075 on-demand — the same credit count as Try-On Max's cheapest configuration
(`fast` at 1K), against up to 5 credits ($0.375) for a Try-On Max 4K `quality` image
([credit pricing](../../sources/fashn.ai/fashn-api-credit-pricing/2026-10-26.md)). fal charges the same
$0.075 per generation ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)).

## Documented capabilities

All of the following is vendor or host documentation. No direct tests were run for this page.

- **Two required images, nothing else.** `model_image` (the person) and `garment_image` (the garment);
  both accept a URL or a data URI. No prompt, no negative prompt, no mask
  ([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- **Garment categories: `tops`, `bottoms`, `one-pieces`, or `auto`.** `auto` classifies flat-lay and
  ghost-mannequin images directly; for on-model images, "full-body shots default to swapping the entire
  outfit, and focused shots (upper or lower body) select the most likely garment type"
  ([parameters guide](../../sources/fashn.ai/fashn-tryon-parameters-guide/2026-10-26.md)). This is the
  parameter to use when a garment photo contains more than one item.
- **Garment photo type: `model`, `flat-lay`, or `auto`.** `flat-lay` "is required for precise handling
  of flat-lay images where elements like back neck labels or size tags should be excluded"
  ([parameters guide](../../sources/fashn.ai/fashn-tryon-parameters-guide/2026-10-26.md)).
- **Segmentation-free fitting by default.** `segmentation_free: true` is the default: "direct garment
  fitting without clothing segmentation, enabling bulkier garment try-ons with improved preservation of
  body shape and skin texture". Set it to `false` "if original garments are not removed properly"
  ([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- **Three speed/quality modes.** `performance` / `balanced` (default) / `quality`, with the documented
  latency and no price difference ([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- **Up to four samples per request.** `num_samples` 1–4; FASHN advises "use `num_samples: 2-4` along
  with `mode: performance` to quickly test multiple seeds and assess how sensitive your inputs are to
  seed variation" ([parameters guide](../../sources/fashn.ai/fashn-tryon-parameters-guide/2026-10-26.md)).
- **Seed reproducibility with a caveat.** Default seed 42, range 0 to 2^32-1; results "remain
  reproducible for a given `num_samples` count" when the seed is held fixed
  ([parameters guide](../../sources/fashn.ai/fashn-tryon-parameters-guide/2026-10-26.md)).
- **Garment-image moderation is a request parameter**, not only a platform filter: `conservative` blocks
  underwear, swimwear and revealing outfits; `permissive` (default) allows them but blocks explicit
  nudity; `none` disables moderation, with a responsible-use warning and the statement that violations
  "may result in service denial" ([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- **Output format and delivery.** `png` (default) or `jpeg`; CDN URL by default, or base64 with
  `return_base64: true`, which also shortens output availability from three days to 60 minutes
  ([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md),
  [retention](../../sources/fashn.ai/fashn-data-retention-privacy/2026-10-26.md)).
- **Endpoint-specific failure mode.** `PoseError` when "the pipeline was unable to detect a body pose in
  either the model image or the garment image (when `garment_photo_type: "model"`)"
  ([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- **fal exposes the same parameters**, minus `return_base64` (it uses `sync_mode` instead) and plus
  `enable_safety_checker` (default `true`; "Authorized callers may set false to request relaxed
  screening") ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)).

### Documented latency and resolution

| Source | `performance` | `balanced` | `quality` |
| --- | --- | --- | --- |
| API reference (2026-10-26) | ~5 s | ~8 s | ~12–17 s |
| Launch post (2025-06-25, page updated 2026-07-03) | ~7 s | ~10 s | ~19 s |

The two tables are **not reconciled**: the launch post was edited in July 2026 without revising its
timings, while the API reference gives faster figures. Both are FASHN's, both are "typical", and
neither states a measurement method, percentile, or whether queueing is included
([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md),
[launch post](../../sources/fashn.ai/fashn-tryon-v1-6-launch/2026-10-26.md)).

Resolution: "Input images are processed at 864 × 1296 px" is the entire technical-limitations section
of the API reference — no file-size cap, no aspect-ratio range, no minimum dimension. The launch post
gives the operational rule: output matches input resolution and is capped at 864×1296, because v1.6
"does not upscale beyond the resolution of the original input".

### Marketing claims (labelled as claims)

- "Native 864x1296 Resolution (1MP) … representing a 50% increase compared to v1.5" — true only per
  axis; 864×1296 is 2.25× the pixel count of 576×864
  ([launch post](../../sources/fashn.ai/fashn-tryon-v1-6-launch/2026-10-26.md)).
- "Improved Identity Preservation (Quality Mode)" — "more accurate skin texture preservation, and
  smarter top & bottom interactions".
- "Our Best Virtual Try-On Model Yet" (June 2025 headline) — superseded by FASHN's own January 2026
  note that Try-On Max is "our most capable virtual try-on model".
- "Fast, lightweight virtual try-on optimized for real-time e-commerce experiences" (docs summary) —
  the latency documentation supports "fast"; "real-time" is not measured anywhere.
- FASHN's general try-on marketing claims — "true to your product" (prints, logos, colours, textures),
  "true to the person" (facial features, skin tone, body proportions, pose, background), "production-ready
  image quality … up to 4K" — are on the family product page, which names no version and whose 4K and
  accessory claims match Try-On Max and the app, **not** this endpoint
  ([product page](../../sources/fashn.ai/fashn-virtual-try-on-product-page/2026-10-26.md)). Do not read
  them as v1.6 specifications.

## Limitations and constraints

- **Out of the roster's date window.** First release 2025-06-25, four months before 2025-10-26. The
  page records the original date rather than inventing a newer one; the roster retains the row as a
  specialist utility exception. Anyone reading this as a 2026 model is misreading the roster.
- **Superseded as FASHN's recommendation.** FASHN's docs route most users to Try-On Max and keep v1.6 for
  "speed and cost" ([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
  "Stable" here means backward-compatible support, not "current flagship".
- **Apparel only, three classes.** `tops`, `bottoms`, `one-pieces`. Shoes, bags, hats, jewelry and
  eyewear are Try-On Max / app territory, and FASHN's docs say so explicitly
  ([Try-On Max](../../sources/fashn.ai/fashn-tryon-max-api-reference/2026-10-26.md),
  [product page](../../sources/fashn.ai/fashn-virtual-try-on-product-page/2026-10-26.md)). Accessories
  are not a v1.6 category.
- **~1 MP ceiling, and no upscaling.** 864×1296 is 1.12 MP. Outputs cannot exceed the input person
  image's resolution. There is no resolution or aspect-ratio parameter at all: the output framing
  follows the input, and nothing documents what happens with extreme aspect ratios or small inputs —
  the Try-On Max page has a limits table, the v1.6 page does not
  ([launch post](../../sources/fashn.ai/fashn-tryon-v1-6-launch/2026-10-26.md),
  [v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- **No prompt and no styling control.** You cannot ask for "tuck in shirt", "open jacket", or a
  background change, which Try-On Max's `prompt` allows. v1.6 is a fixed pipeline with a category hint
  ([v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- **No fit or size prediction.** FASHN states this for the try-on line as a whole: "Virtual try-on
  visualizes how a product may look on a person, but it does not measure the body or predict the correct
  garment size" ([product page](../../sources/fashn.ai/fashn-virtual-try-on-product-page/2026-10-26.md)).
- **No weights, no architecture, no technical report for v1.6.** The only first-party architecture
  statement in the family describes v1.5's released weights: 972M parameters, pixel-space generation,
  maskless inference, "runs on consumer GPUs", and an announced technical paper that had not appeared
  at capture ([open-source post](../../sources/fashn.ai/fashn-vton-1-5-open-source/2026-10-26.md)). The
  v1.6 `segmentation_free` parameter and its default are *consistent* with the maskless approach, but no
  source says v1.6 inherits it — that is an inference, not a documented fact.
- **No independent quality evidence.** No third-party benchmark, blind-vote leaderboard, or
  re-measurement of FASHN try-on quality was found. The only comparisons in the captured material are
  FASHN's own v1.5-vs-v1.6 examples and its positioning text.
- **Latency is unverified and self-contradictory** (see the table above). No independent latency
  measurement exists, and neither FASHN nor fal publishes a percentile.
- **Data-handling constraint on person images.** Request records are "not deleted automatically", and
  there is "currently no deletion endpoint"; you must contact FASHN with prediction IDs. Default CDN
  outputs are deleted after three days. FASHN's recommendation for sensitive photos is a short-lived
  signed URL (or base64) plus `return_base64: true`
  ([retention](../../sources/fashn.ai/fashn-data-retention-privacy/2026-10-26.md)).
- **Content restrictions are contractual, not just technical.** The ToS forbids deceptive imagery of
  real identifiable individuals without consent and requires consent from identifiable people in uploads
  ([ToS](../../sources/fashn.ai/fashn-terms-of-service/2026-10-26.md)).
- **Training-data claim conflicts with the moderation parameter.** A 2024 FASHN post says "intimate
  apparel and swimwear were intentionally excluded from the training dataset", while v1.6 documents
  `moderation_level: permissive` as allowing "swimwear, underwear, and revealing garments". The 2024
  statement may describe an earlier dataset; FASHN has not reconciled them
  ([partnership post](../../sources/fashn.ai/fashn-fal-partnership-2024-12/2026-10-26.md),
  [v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md)).
- **Host gaps.** fal exposes the endpoint but publishes no latency, throughput, or build information, and
  its `updated_at` (2026-04-21) is not documented as a model change. No Replicate endpoint was found:
  the `fashn` and `fashn-ai` owners and the obvious slugs returned 404
  ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)).

## Access, pricing, licensing

### First-party (FASHN API)

| Item | Value |
| --- | --- |
| Credit cost | 1 credit per output image, independent of `mode` and `output_format` |
| `num_samples` | Multiplies cost by the number of outputs (1–4) |
| On-demand rate | $0.075 per credit, 100-credit minimum ($7.50) |
| Tier I | $19/mo (282 credits included), top-ups $0.0675 |
| Tier II | $249/mo (4,150 credits), top-ups $0.0600 |
| Tier III | $1,249/mo (25,594 credits), top-ups $0.0488 |
| Failed predictions | Do not consume credits |

Sources: [credit pricing](../../sources/fashn.ai/fashn-api-credit-pricing/2026-10-26.md),
[v1.6 reference](../../sources/fashn.ai/fashn-tryon-v1-6-api-reference/2026-10-26.md). Annual billing is
10 months for 12 on every tier.

**Per-image arithmetic (not a published quote):** one v1.6 image costs **$0.075** on-demand, **$0.0675**
on Tier I, and **$0.0488** on Tier III. Four samples in one request cost $0.30 on-demand. For contrast,
a Try-On Max image costs 1–5 credits ($0.075–$0.375 on-demand) depending on generation mode and
resolution.

### fal

**$0.075 per generation** — the same figure as FASHN's on-demand rate, with `billing_unit:
"generations"` ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)). fal does not state whether
`num_samples: 4` bills as one generation or four; FASHN's own schedule charges per output image, so the
first-party reading is four. Treat a multi-sample fal request as an unresolved billing question.

### Licensing and commercial use

- **Outputs:** "As between you and FASHN, and to the extent permitted by applicable law, you own the
  outputs generated for you. FASHN assigns to you any rights it may have in those outputs. You may use
  them for personal or commercial purposes in accordance with your subscription plan." Qualified by:
  "Outputs may not be unique, and other customers may receive the same or similar outputs", and by
  third-party rights in inputs ([ToS](../../sources/fashn.ai/fashn-terms-of-service/2026-10-26.md)).
- **Commercial use is a plan entitlement** ("Commercial use license" is listed under "Included in every
  plan"; the on-demand API tier is "Available for commercial use")
  ([pricing page](../../sources/fashn.ai/fashn-pricing/2026-10-26.md),
  [credit pricing](../../sources/fashn.ai/fashn-api-credit-pricing/2026-10-26.md)).
- **No training on your content** absent explicit opt-in, for both FASHN and third-party models
  ([ToS](../../sources/fashn.ai/fashn-terms-of-service/2026-10-26.md),
  [retention](../../sources/fashn.ai/fashn-data-retention-privacy/2026-10-26.md)).
- **No model licence to grant.** v1.6 weights are not distributed, so there is no weights licence; the
  ToS instead prohibits reverse engineering or extracting "any aspect of the Services or their
  underlying technology", and prohibits reselling or sublicensing "standalone access to the FASHN API"
  while permitting embedding the API in an application you operate
  ([ToS](../../sources/fashn.ai/fashn-terms-of-service/2026-10-26.md)). The Apache-2.0 licence belongs
  to the separately published v1.5 weights, not to this endpoint
  ([HF](../../sources/huggingface.co/fashn-vton-1-5/2026-10-26.md)).
- **fal's "Commercial use" badge and `licenseType: "commercial"`** are fal's statements about use
  through fal, not a FASHN licence grant
  ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)).
- **API access is business-oriented:** "API access, API subscriptions, and API credit packages are
  offered to businesses and developers for trade, business, craft, or professional purposes"
  ([ToS](../../sources/fashn.ai/fashn-terms-of-service/2026-10-26.md)).

## Unresolved questions

1. **Why does FASHN keep two latency tables?** The launch post (~7/~10/~19 s) and the API reference
   (~5/~8/12–17 s) disagree, and the post was edited after the reference was written. Which reflects
   current serving, and what is the p50/p95 with queueing?
2. **What is the actual output size for a given input?** The docs give one number (864×1296) and one rule
   (never upscale beyond input), but no aspect-ratio handling, no minimum input size, and no file-size
   cap. Does a 512×512 phone photo produce a 512×512 try-on?
3. **Does v1.6 share v1.5's architecture?** v1.5 is documented at 972M parameters, pixel-space and
   maskless; v1.6's parameter count, architecture and training data are unpublished. The
   `segmentation_free` default is suggestive and nothing more.
4. **Is v1.5 still callable first-party?** It is absent from FASHN's current-model table and from the
   docs index, but fal still serves it (`status: public`, not deprecated) and its weights are
   Apache-2.0. If it is still reachable, the SKILL's split test argues for its own page.
5. **When did the FASHN app stop using v1.6?** The launch post says v1.6 was "the default model
   powering our Try-On Studio" in June 2025, but the 2025-12-08 changelog upgrades the app's Try On tool
   to "up to 4K", accessory items, ~30–40 s and 2 credits — a profile that matches Try-On Max, not v1.6.
   No source states which model the app calls
   ([launch post](../../sources/fashn.ai/fashn-tryon-v1-6-launch/2026-10-26.md),
   [changelog](../../sources/fashn.ai/fashn-changelog-try-on-upgrade-2025-12-08/2026-10-26.md)).
6. **Is anything about v1.6 in-window?** No first-party v1.6 announcement, changelog entry or docs page
   captured is dated on or after 2025-10-26. fal's `updated_at` of 2026-04-21 is the only later
   timestamp, and it is metadata, not a release
   ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md)).
7. **Does fal run the model or proxy it?** fal's catalogue says `hostingType: "serverless"`, and FASHN's
   2024 partnership post says fal hosts the API. No page explains the operational arrangement, so a
   fal-side behaviour change could be either fal's or FASHN's
   ([fal](../../sources/fal.ai/fashn-tryon-v1.6/2026-10-26.md),
   [partnership post](../../sources/fashn.ai/fashn-fal-partnership-2024-12/2026-10-26.md)).
8. **How does v1.6 compare with other try-on systems?** No independent benchmark exists in the captured
   material — not against Try-On Max, not against Leffa (also on fal), not against any hosted competitor.
   FASHN's "best commercially available clothing try-on API" claim dates from 2024 and has no evidence
   attached.
9. **Does `num_samples` on fal bill once or per image?** fal says "$0.075 per generation"; FASHN charges
   per output image. Unresolved.

## Evidence status

**Evidence floor: met.** One independent host record (fal catalogue metadata, input schema and price
line) plus fourteen first-party FASHN records: the v1.6 API reference, the v1.6 launch post, the model
lifecycle table, the Try-On Max reference, the v1.6 parameters guide, the v1.5 launch post, the v1.5
open-source post, the API credit-cost schedule, the pricing page, the Terms of Service, the data
retention page, the December 2025 try-on changelog entry, the 2024 fal partnership post and the
virtual-try-on product page. A Hugging Face registry record establishes which weights exist. All were
captured on 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base: no images were generated, no endpoint was called, no latency was timed, and no output was compared
against a reference. Every capability statement is FASHN's or fal's documentation; the quality claims
are FASHN's own example comparisons; the latency figures are FASHN's "typical" numbers, which
contradict each other across two of its own pages.

**Date status: out of window.** First release 2025-06-25, before the 2025-10-26 cut-off. This page states
that prominently rather than dating the model forward. The roster retains the row as a specialist
utility exception; the in-window FASHN try-on release is Try-On Max (2026-01-26), which is not on the
roster.

**What would change this assessment:** a reproducible try-on test set (flat-lay and on-model garments in
each of the three categories, varied person photos including non-frontal poses and non-standard body
types) run against named endpoints at each `mode`, measuring garment-detail fidelity, identity
preservation, pose and hand failures, and wall-clock latency with queueing — plus the same set against
Try-On Max and v1.5 to test FASHN's own tier ordering.

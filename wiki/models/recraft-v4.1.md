# Recraft V4.1

Recraft's May 2026 image generation, and the current default model of Recraft's API
([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)). V4.1 is a distinct
generation from V4, not a repackaging: it has its own model IDs, prices, documentation, and a new
Utility line. The base model is a 1K raster generator at **$0.035** per image; the same generation
also ships as 2K Pro, SVG Vector, Utility, Utility Pro, and Flash variants
([product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md)). It is hosted
first-party through the Recraft API and resold by fal and Replicate. Artificial Analysis rates
three of the variants — Utility, Utility Pro, and Flash — but **not the base V4.1 or V4.1 Pro**
([AA](../../sources/artificialanalysis.ai/recraft-v4-1/2026-10-26.md)). No direct tests were run
for this page.

## Identity

- Canonical name: **Recraft V4.1**.
- Canonical model ID: **`recraftv4_1`** — the base 1K raster model and the API default. Every
  raster model also accepts a `_raster` alias, so `recraftv4_1_raster` behaves exactly like
  `recraftv4_1` ([all models](../../sources/recraft.ai/models-overview/2026-10-26.md)).
- Vector sibling ID: **`recraftv4_1_vector`** — same generation, SVG output.
- 2K tier: **`recraftv4_1_pro`** (alias `recraftv4_1_pro_raster`) and
  **`recraftv4_1_pro_vector`**.
- Utility tier: **`recraftv4_1_utility`**, **`recraftv4_1_utility_vector`**,
  **`recraftv4_1_utility_pro`**, **`recraftv4_1_utility_pro_vector`**.
- Fast sibling: **`recraftv4_1_flash`** (alias `recraftv4_1_flash_raster`), raster only
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
- Vendor: Recraft (Recraft Inc.).
- First-party endpoint: `POST https://external.api.recraft.ai/v1/images/generations` with
  `"model": "recraftv4_1"` ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).
- Host endpoints:
  - fal `fal-ai/recraft/v4.1/text-to-image` (raster) and
    `fal-ai/recraft/v4.1/text-to-vector` (SVG); Pro, Pro Vector, Utility, and Utility Pro are
    separate fal endpoints ([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md)).
  - Replicate `recraft-ai/recraft-v4.1` (raster, prompt + aspect ratio only) and
    `recraft-ai/recraft-v4.1-pro` (2K raster); Replicate also lists Utility and Utility Pro, but
    **no vector or Flash endpoint** ([Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md),
    [Replicate Pro](../../sources/replicate.com/recraft-v4-1-pro/2026-10-26.md)).
- Release: **2026-05-14**, stated on Recraft's product page and launch post
  ([product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md),
  [launch post](../../sources/recraft.ai/recraft-v4-1-launch-blog/2026-10-26.md)). fal's endpoint
  metadata is dated the same day; Replicate's model record was created 2026-05-11, three days
  earlier (see Unresolved questions). This is inside the 2025-10-26 one-year window.
- Siblings: the eight other V4.1 variants above; older V4 (February 2026) and V4 Pro (2026-02-17);
  V3/V2; and the separate V4 Styles family (August 2026). Findings on this page should not be
  transferred to V4 Pro or V4 Styles without evidence.

### What "V4.1" names

"V4.1" is both the generation name and, in the roster and on fal, the base 1K model. This page
treats **`recraftv4_1`** as canonical and the other eight versions as variants of the same
generation. That follows Recraft's own API reference, which documents all eight under one "Recraft
V4.1" model page and makes `recraftv4_1` the default
([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).

The roster's discovery path also cites "AA Image Arena". That lead resolves to the **Utility,
Utility Pro, and Flash variants**, not to the base model: AA has no base "Recraft V4.1" or "Recraft
V4.1 Pro" row on the captured board, and `artificialanalysis.ai/image/models/recraft-v4-1` returns
HTTP 404 ([AA](../../sources/artificialanalysis.ai/recraft-v4-1/2026-10-26.md)). The base identity
is established by Recraft, fal, and Replicate, not by AA.

## Current assessment

**V4.1 is a distinct generation and Recraft's current default, not a repackaging of V4.** Recraft
calls it "the default model of the API" and "the default and most capable model: photorealism,
illustration, and strong results from short prompts"
([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md),
[all models](../../sources/recraft.ai/models-overview/2026-10-26.md)). It has its own model IDs,
its own price sheet, a new Utility line, and a later release date than V4 (February 2026). It is
current, not preview or deprecated.

**V4 Pro is now the older, more expensive 2K tier.** V4 Pro launched 2026-02-17 at $0.25 per 2K
raster image and $0.30 per vector image, with roughly 28–30 s latency
([V4 launch post](../../sources/recraft.ai/recraft-v4-launch-blog/2026-10-26.md),
[V4 product page](../../sources/recraft.ai/recraft-models-v4/2026-10-26.md)). V4.1 Pro is a newer
2K tier at **$0.21** raster / **$0.30** vector with median latencies of **12 s** and **15 s**
([product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md)). So on raster, V4.1
Pro undercuts V4 Pro by $0.04 and is roughly 2.5× faster; on vector, it matches V4 Pro's price but
is faster. The base V4.1 is a 1K model at $0.035 — 7× cheaper than V4 Pro — so the choice is
mostly resolution and latency, not a like-for-like tier comparison. V4 Pro remains documented and
priced, but it is absent from Recraft's current lineup table, which lists V4.1 as the default
([all models](../../sources/recraft.ai/models-overview/2026-10-26.md)).

**Independent quality evidence covers the variants, not the base.** On AA-Image-T2I v2.1,
Recraft V4.1 Utility is ranked 29th (Elo 1026.46), Utility Pro 37th (1017.42), and Flash 70th
(949.34); the top of the board is GPT Image 2.5 Sunburst at 1221.96
([AA](../../sources/artificialanalysis.ai/recraft-v4-1/2026-10-26.md)). Utility and Utility Pro
have overlapping 95% intervals, so their ~9-point gap is not signal; Flash is ~77 Elo below
Utility with non-overlapping intervals, a real gap. But **none of these rows is the base V4.1 or
V4.1 Pro**, and Utility is explicitly a predictability variant (flat lighting, front-facing
composition), not a stand-in for the expressive base model
([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)). The base model's
quality relative to V4, V4 Pro, or competitors is therefore supported only by Recraft's own
marketing.

**Hosts differ on price and coverage.** fal resells the V4.1 raster endpoints and the base/Pro
vector endpoints at Recraft's list price and marks them `provider_type: "partner"` /
`hostingType: "proxy"`; it has no Utility vector endpoint
([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md)). Replicate charges **above** list — $0.04
for base and Utility, $0.25 for Pro and Utility Pro — and offers no vector or Flash endpoint
([Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md)). Replicate's V4.1 listings
also lack the "Data privacy" and "Zero training" badges that its V4 Pro listing carries; no source
explains whether the terms differ or the badges were omitted.

## Documented capabilities

All of the following is vendor or host documentation. No tests were run.

### Variants, prices, and median latency

| Variant | Recraft `model` ID | Output | Price/image | Median latency |
| - | - | - | - | - |
| V4.1 | `recraftv4_1` | 1K raster | $0.035 | 6.5 s |
| V4.1 Vector | `recraftv4_1_vector` | SVG | $0.08 | 12 s |
| V4.1 Pro | `recraftv4_1_pro` | 2K raster | $0.21 | 12 s |
| V4.1 Pro Vector | `recraftv4_1_pro_vector` | SVG | $0.30 | 15 s |
| V4.1 Utility | `recraftv4_1_utility` | 1K raster | $0.035 | 8.5 s |
| V4.1 Utility Vector | `recraftv4_1_utility_vector` | SVG | $0.08 | 14 s |
| V4.1 Utility Pro | `recraftv4_1_utility_pro` | 2K raster | $0.21 | 14 s |
| V4.1 Utility Pro Vector | `recraftv4_1_utility_pro_vector` | SVG | $0.30 | 17 s |
| V4.1 Flash (sibling) | `recraftv4_1_flash` | 1K raster | $0.007 | 1.3 s |

Prices and latencies are from Recraft's product page, which labels the times **median** and warns
that they vary with prompt and aspect ratio
([product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md)). The model IDs are
from the API reference and appendix
([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md),
[limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).

### Core generation

- **Text-to-image at 1K or 2K.** Recraft's size table gives 14 ratios. 1K examples: `1024x1024`
  (1:1), `1344x768` (16:9), `1536x768` (2:1), `1216x896` (4:3). 2K examples: `2048x2048`,
  `2688x1536` (16:9), `3072x1536` (2:1), `2432x1792` (4:3). Exact `WxH` values must be one of the
  listed sizes; other values are rejected
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
- **10,000-character prompts.** Shared with the V4 family; V3/V2 are capped at 1,000
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
- **Batching.** Recraft accepts `n` from 1 to 6; the response has one entry per image
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).
- **Output formats.** `image_format` is `webp` (lossless, default) or `png`; `_vector` models
  always return SVG, and `image_format` is ignored for them
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).
- **Styles.** Custom styles (`style_id`), up to 10 style reference URLs, and `style_match`
  (`flexible` / `precise`) are documented; a style works only with the model it was created for,
  and creating one costs $0.005
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md),
  [pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)). Flash is documented as "raster
  only, no styles"; the page does not state whether Utility variants accept styles.
- **Controls.** Only `controls.colors` (preferred colors) and `controls.background_color` are
  supported; Controls are marked "Partial"
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).
- **Image to image.** Marked "Yes, default model" for V4.1, but no V4.1 image-to-image price is
  published (see Limitations).
- **Ephemeral outputs.** Image URLs last "about 24 hours" and are public; download what you need
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
- **Rate limit.** 100 requests/minute on the Recraft API; host limits were not captured
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).

### What the variants change

- **Pro** — "generate at 2K with finer detail, for print-ready and large-scale assets"
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).
- **Utility** — "trade the main line's artistic point of view for predictability: flat lighting,
  front-facing composition, simple scenes. Use them for mockups and product listing photos"
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).
- **Vector** — "return editable SVG, built for logos, typography, and illustration"; Recraft
  claims "structured layers and clean geometry" and calls it "the only model capable of generating
  editable, production-quality SVG graphics"
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md),
  [V4 launch post](../../sources/recraft.ai/recraft-v4-launch-blog/2026-10-26.md),
  [V4 product page](../../sources/recraft.ai/recraft-models-v4/2026-10-26.md)). The "only model"
  claim is a vendor competitive claim, not evidence about other vendors.
- **Flash** — "about 1.3 seconds and $0.007 per image, raster only, no styles"
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).

### Host parameter exposure

- **fal** exposes `prompt`, `image_size` (six presets or `{width,height}` up to 14142),
  `colors`, `background_color`, and `enable_safety_checker`. It does **not** expose `style_id`,
  `style_reference_urls`, `style_match`, `random_seed`, `n`, `image_format`,
  `response_format`, or `negative_prompt`
  ([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md),
  [fal schema](../../sources/fal.ai/recraft-v4-1-api-schema/2026-10-26.md)).
- **Replicate base** exposes only `prompt` and `aspect_ratio`; there is no exact-size control,
  color, style, seed, batch, or format parameter
  ([Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md)).
- **Replicate Pro** adds a 14-value `size` enum matching Recraft's 2K table, plus `aspect_ratio`
  ([Replicate Pro](../../sources/replicate.com/recraft-v4-1-pro/2026-10-26.md)).
- **Safety.** fal exposes `enable_safety_checker` (default `true`) and notes that disabling it
  "requires account authorization; unauthorized requests are always checked". Recraft's API
  documents no such toggle in the captured records
  ([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md)).

### Artifact observations (not tests)

- fal's published base example output is **1344 × 768** WebP, exactly Recraft's 1K 16:9 size
  (`1344x768`), not a generic 16:9 crop
  ([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md),
  [limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
- fal's published vector example is a plain `<svg>` with `viewBox="0 0 3072 1536"` and `<path>`
  elements carrying flat `rgb()` fills — geometry and fills, no embedded raster
  ([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md)).
- These are measurements of static host-published artifacts, not generation runs; they do not
  establish what any given `image_size` preset returns.

### Marketing claims, kept separate

- Recraft's launch framing: "quieter and more realistic" photorealism; "reads short prompts the
  way you'd imagine a creative director would"; "otherworldly 3D design and smoother gradients";
  stronger vector/illustration and typography
  ([launch post](../../sources/recraft.ai/recraft-v4-1-launch-blog/2026-10-26.md),
  [product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md)).
- The launch comparisons against Midjourney, GPT Image 2, and Nano Banana 2 are unblinded,
  vendor-run, and vendor-selected, with no seeds, sample sizes, rater counts, or blind protocol.
  They are recorded as marketing, not measurement
  ([launch post](../../sources/recraft.ai/recraft-v4-1-launch-blog/2026-10-26.md)).
- "The default and most capable model" is Recraft's positioning, not an independent finding
  ([all models](../../sources/recraft.ai/models-overview/2026-10-26.md)).
- fal adds host-side framing absent from Recraft's copy: "sharper prompt control and cleaner
  composition", "Tuned for brand systems and editorial work"
  ([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md)).

## Limitations and constraints

- **Feature gaps.** `negative_prompt`, curated `style`, `text_layout`, and the `artistic_level` /
  `no_text` controls are "Not supported by V4.1"; Recraft points to V3 for them
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)). Negative prompts
  are therefore not merely ignored — they are not an API parameter on this model.
- **Image-to-image has no published V4.1 price.** Recraft marks image-to-image "Yes, default
  model", but its pricing page lists image-editing operations (image-to-image, inpainting,
  outpainting, replace/generate background) only for V3
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md),
  [pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)). No V4.1 inpainting/outpainting
  price is published; absence of a price is not proof the operations are unavailable, but the
  cost is unresolved.
- **Host parameter loss.** fal drops styles, seed, batch, and format controls; Replicate base
  drops exact size, colors, styles, seed, batch, and format. Reproducibility is therefore not
  available through either host as captured
  ([fal schema](../../sources/fal.ai/recraft-v4-1-api-schema/2026-10-26.md),
  [Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md)).
- **Host coverage gaps.** Replicate has no vector or Flash endpoint; fal has no Utility vector
  endpoint, though Recraft's API documents two Utility vector model IDs
  ([Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md),
  [fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md)).
- **Replicate is above list price.** Base/Utility $0.04 vs $0.035; Pro/Utility Pro $0.25 vs
  $0.21. No source explains the premium
  ([Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md),
  [pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)).
- **Replicate's V4.1 listings lack the data-privacy and zero-training badges** that its V4 Pro
  listing carries. Do not assume the V4 Pro retention terms transfer
  ([Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md),
  [Replicate V4 Pro](../../sources/replicate.com/recraft-v4-pro/2026-10-26.md)).
- **No independent quality measurement for the base or Pro.** AA rates only Utility, Utility Pro,
  and Flash; its model page for base V4.1 is 404
  ([AA](../../sources/artificialanalysis.ai/recraft-v4-1/2026-10-26.md)). The base model's
  quality claims are vendor-only.
- **1K base may be insufficient for print.** The base is 1K; 2K requires the Pro tier at 6× the
  price ($0.21 vs $0.035) ([product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md)).
- **Vector quality is not independently measured.** Recraft claims production-quality editable
  SVG, but no captured source measures layer structure, path cleanliness, or typography fidelity.
  The Pro vector tier costs $0.30 against $0.08 for the base vector, and Recraft does not document
  what the extra $0.22 changes beyond price and latency
  ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md)).
- **Ephemeral outputs and rate limit.** URLs last about 24 hours; the API allows 100 requests/min
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
- **No public weights.** V4.1 is hosted-only; nothing in the captured evidence suggests a
  downloadable checkpoint or a weights licence.
- **Safety filtering differs by route.** fal's toggle is not documented on Recraft's API. A
  refusal on one route is not evidence about the model's general willingness
  ([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md)).
- **Latency is vendor-reported.** The medians are unqualified by hardware, region, or queue
  conditions; no independent latency measurement was captured
  ([product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md)).

## Access, pricing, licensing

### Pricing basis

Recraft bills **per image**: "$1 = 1,000 units", and V4.1 raster is 35 units = $0.035
([pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)). No size multiplier is stated, so
the price appears flat across the 1K size table and the 2K Pro price flat across the 2K table; that
is an inference from the absence of a stated multiplier. Creating a style adds $0.005; using style
references also adds $0.005 per request. "Enhance details (V4.1 Pro)" is $0.21 per request
([pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)).

| Route | Base 1K | Vector | Pro 2K | Pro vector | Utility 1K | Utility Pro 2K |
| - | - | - | - | - | - | - |
| Recraft API | **$0.035** | **$0.08** | **$0.21** | **$0.30** | **$0.035** | **$0.21** |
| fal | **$0.035** | **$0.08** | **$0.21** | **$0.30** | **$0.035** | **$0.21** |
| Replicate | **$0.04** | not offered | **$0.25** | not offered | **$0.04** | **$0.25** |
| AA price column (rated variants only) | — | — | — | — | **$0.035** | **$0.21** |

Sources: [Recraft pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md),
[product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md),
[fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md),
[Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/recraft-v4-1/2026-10-26.md). Replicate's Flash and vector
endpoints are absent; fal's Utility vector endpoints are absent.

For scale: V4.1 base is **$0.035** against V4's **$0.04** and V4 Pro's **$0.25**; V4.1 Pro is
**$0.21** against V4 Pro's **$0.25**
([pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)). On raster, V4.1 is both newer and
cheaper than the older V4 and V4 Pro tiers. AA also rates V4.1 Flash at **$0.007** per image
([AA](../../sources/artificialanalysis.ai/recraft-v4-1/2026-10-26.md)).

### Licensing

Different grants apply depending on route, and they are not interchangeable:

- **Recraft API (Developer Terms, effective 2026-10-20).** "You own all Assets you create with the
  API Services, and Recraft hereby assigns to you all copyright rights it may have in the Assets,
  for personal or commercial use", subject to one restriction: assets "may not be used to train
  any artificial intelligence model". Breach terminates the licence and reverts the rights.
  Recraft commits not to train on API assets and reserves the right to embed provenance metadata
  that the user must not strip
  ([developer terms](../../sources/recraft.ai/developer-terms/2026-10-26.md)).
- **Recraft app, paid plan.** Same ownership and same no-training restriction
  ([terms of service](../../sources/recraft.ai/terms-of-service/2026-10-26.md)).
- **Recraft app, Free tier.** Assets are owned by Recraft, commercial use is prohibited, and the
  user assigns all rights to Recraft. This matters because Recraft says all V4.1 versions are
  "available to test on all plan types, including the Free plan" — an access statement, not a
  licensing one ([terms of service](../../sources/recraft.ai/terms-of-service/2026-10-26.md),
  [product page](../../sources/recraft.ai/recraft-v4-1-product/2026-10-26.md)).
- **Hosts.** fal marks the endpoints "Commercial use" and `licenseType: "commercial"` but links
  only its own terms. Replicate states that "Images generated on Replicate with Recraft V4.1 can
  be used commercially" and links Recraft's terms, but its V4.1 pages lack the data-privacy and
  zero-training badges its V4 Pro page carries
  ([fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md),
  [Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md)). Which Recraft agreement
  governs resale through a host is not published; Recraft's Developer Terms acknowledge that such
  distribution agreements exist and prevail over the public terms without disclosing them
  ([developer terms](../../sources/recraft.ai/developer-terms/2026-10-26.md)).
- **No weights licence.** V4.1 is hosted-only; no downloadable checkpoint or model card was found.

## Unresolved questions

1. **Why does AA omit the base V4.1 and V4.1 Pro?** The board rates only Utility, Utility Pro, and
   Flash. Does AA treat Utility as the V4.1 representative, or has it simply not rated the base
   and Pro? No AA page or note explains the omission
   ([AA](../../sources/artificialanalysis.ai/recraft-v4-1/2026-10-26.md)).
2. **Why is Replicate above list?** Base/Utility $0.04 vs $0.035; Pro/Utility Pro $0.25 vs $0.21.
   Is this a host markup, a different upstream model, or a pre-launch price? Replicate's model was
   created 2026-05-11, three days before Recraft's announcement, and no source explains the gap
   ([Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md)).
3. **What does the Pro vector tier change?** `recraftv4_1_pro_vector` costs $0.30 and takes 15 s
   against $0.08 and 12 s for `recraftv4_1_vector`; both return SVG, and Recraft's size rule says
   SVG "has no fixed pixel size". Nothing documents the difference beyond price and latency
   ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md),
   [limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
4. **Is image-to-image available for Pro/Utility, and at what price?** Recraft marks it "Yes,
   default model" for the family, but prices only V3 image editing. The default model is
   `recraftv4_1`, so Pro/Utility support is not stated
   ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md),
   [pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)).
5. **How do fal's `image_size` presets map to Recraft's sizes?** fal offers `square_hd`,
   `square`, `portrait_4_3`, `portrait_16_9`, `landscape_4_3`, `landscape_16_9`, or an explicit
   `{width, height}`. The published example is 1344×768, which matches Recraft's 1K 16:9 row, but
   the preset mapping is not documented for all six
   ([fal schema](../../sources/fal.ai/recraft-v4-1-api-schema/2026-10-26.md),
   [limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
6. **Does V4.1 actually improve quality over V4/V4 Pro?** The only comparisons captured are
   Recraft's own, unblinded and vendor-selected; AA does not rate the base or Pro. The vendor
   claims "sharper photorealism" and "better prompt following", but no independent measurement
   separates V4.1 from V4 or V4 Pro
   ([launch post](../../sources/recraft.ai/recraft-v4-1-launch-blog/2026-10-26.md),
   [all models](../../sources/recraft.ai/models-overview/2026-10-26.md)).
7. **Do Replicate's V4.1 listings have different retention/training terms?** The pages lack the
   "Data privacy" and "Zero training" badges present on Replicate's V4 Pro listing. No source
   says whether the underlying terms changed or the badges were omitted
   ([Replicate](../../sources/replicate.com/recraft-v4-1/2026-10-26.md),
   [Replicate V4 Pro](../../sources/replicate.com/recraft-v4-pro/2026-10-26.md)).
8. **Where are the Utility vector variants hosted?** Recraft's API documents
   `recraftv4_1_utility_vector` and `recraftv4_1_utility_pro_vector`, but fal has no Utility vector
   endpoint and Replicate has no vector endpoint at all
   ([API model page](../../sources/recraft.ai/recraft-v4-1-model/2026-10-26.md),
   [fal](../../sources/fal.ai/recraft-v4-1/2026-10-26.md)).

## Evidence status

Everything above comes from documentation, host metadata, and a third-party leaderboard captured
on 2026-10-26. **No direct tests were run for this page.** Two claims rest on measurements the
curator made on host-published example artifacts rather than on the model: the 1344×768 dimensions
of fal's example WebP and the path-only structure of fal's example SVG. Both are labelled as
artifact observations and neither is a generation run.

Evidence floor: **met.** First-party: three model-specific `recraft.ai` records (API model page,
product page, launch post) plus the shared pricing, limits, lineup, developer-terms, and
terms-of-service records. Independent host records: fal (model page and OpenAPI schema) and
Replicate (base and Pro model pages). Third-party benchmark: AA-Image-T2I v2.1, which covers the
Utility, Utility Pro, and Flash variants but not the base or Pro. The two hosts are independent of
Recraft and of each other, though both resell Recraft's API rather than running their own
inference, so they corroborate pricing and parameter exposure far better than output quality.

The most useful next evidence would be a reproducible test against a named endpoint and date:
base V4.1 vs V4.1 Pro vs V4.1 Utility on the same prompts at matched aspect ratios, downscaled to
equal pixel counts, to separate resolution from quality; a dense-typography and logo prompt set;
an SVG structure check for the vector tiers; and a check of what fal's `square_hd` and other
presets actually return.

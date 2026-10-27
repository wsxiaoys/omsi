# Recraft V4 Pro

Recraft's 2K-resolution tier of its V4 image family, announced on 2026-02-17 alongside Recraft V4
([launch post](../../sources/recraft.ai/recraft-v4-launch-blog/2026-10-26.md)). It is the same
generation as V4 — Recraft says both "share the same creative capabilities and design taste" — and
differs in resolution, latency, and price: roughly 2048×2048 instead of 1024×1024, about 28–30 s per
image instead of 10 s, and $0.25 instead of $0.04
([V4 product page](../../sources/recraft.ai/recraft-models-v4/2026-10-26.md)). It is hosted-only; no
weights are published. It is available first-party through the Recraft API and through fal and
Replicate, both of which resell it at Recraft's list price.

## Identity

- Canonical name: **Recraft V4 Pro**. The roster's discovery label matches the vendor's own naming,
  so it is confirmed rather than inferred.
- Canonical model ID: **`recraftv4_pro`** (Recraft API `model` value). Alias `recraftv4_pro_raster`
  "behaves exactly like the base name"
  ([all models](../../sources/recraft.ai/models-overview/2026-10-26.md)).
- Vector sibling ID: **`recraftv4_pro_vector`** — same tier, SVG output.
- Vendor: Recraft (Recraft Inc.).
- First-party endpoint: `POST https://external.api.recraft.ai/v1/images/generations` with
  `"model": "recraftv4_pro"`
  ([API model page](../../sources/recraft.ai/recraft-v4-api-model/2026-10-26.md)).
- Host endpoints:
  - fal `fal-ai/recraft/v4/pro/text-to-image` (raster) and
    `fal-ai/recraft/v4/pro/text-to-vector` (SVG)
    ([fal raster](../../sources/fal.ai/recraft-v4-pro/2026-10-26.md),
    [fal vector](../../sources/fal.ai/recraft-v4-pro-vector/2026-10-26.md)).
  - Replicate `recraft-ai/recraft-v4-pro` (raster only)
    ([Replicate](../../sources/replicate.com/recraft-v4-pro/2026-10-26.md)).
- Release: **2026-02-17**, the date on Recraft's announcement post. Recraft's docs say only
  "February 2026" for the family
  ([all models](../../sources/recraft.ai/models-overview/2026-10-26.md)). This is well after the
  2025-10-26 one-year floor.
- Siblings: `recraftv4` (1K raster), `recraftv4_vector`, `recraftv4_pro_vector`, and the later
  families V4.1 / V4.1 Utility / V4.1 Flash (May–September 2026) and V4 Styles (August 2026). These
  are separate models with separate behaviour; findings on this page should not be transferred to
  them without evidence.

### The discovery path is not an endpoint

The roster records fal `fal-ai/recraft/v4/pro`. That path serves a page, but the callable endpoint
IDs carry a suffix: `.../v4/pro/text-to-image` and `.../v4/pro/text-to-vector`. The queue OpenAPI
for the unsuffixed ID returns HTTP 404 with a `null` body, while the suffixed ID returns a full
schema ([fal catalogue](../../sources/fal.ai/recraft-v4-catalogue/2026-10-26.md)).

### Date conflict worth tracking

fal's publish timestamp for the raster endpoint is `2026-02-12T18:30:16.402Z`, five days *before*
Recraft's announcement, and its vector endpoint is `2026-02-16T21:47:29.000Z`, one day before. Both
hosts' model records agree with the announcement otherwise — Replicate's model was created
`2026-02-17T10:41:11Z` ([Replicate](../../sources/replicate.com/recraft-v4-pro/2026-10-26.md)). No
source explains fal's earlier timestamp; it may be a staged publish or a backdated catalogue entry,
and it is left unresolved rather than smoothed over.

## Current assessment

**V4 Pro is a distinct tier, not a repackaging.** It has its own model ID, its own price, its own
14-entry size table, and a documented latency gap against V4. Recraft, fal, and Replicate all
describe the difference the same way — resolution and speed, not capability — which is unusually
consistent for a vendor/host trio. Giving it its own page rather than folding it into V4 follows the
wiki skill's identity guidance: both tiers are separately obtainable and separately documented, the
divergence (6.25× price, 2× linear resolution, ~3× latency) is large enough that one verdict would
mislead a reader of the other, and variant-specific evidence exists in the form of its own size
table and its own host endpoints. Note that this is a *tier* split, not a dated-checkpoint split:
the two share a generation and a launch date, and V4 Pro is not a newer snapshot of V4.

**But it is no longer Recraft's top tier, and it is priced above the newer one.** Recraft's own
lineup now puts V4.1 (May 2026) as "the default and most capable model" and prices V4.1 Pro at
**$0.21** per 2K raster image — *below* V4 Pro's **$0.25**
([pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)). Recraft publishes no explanation
for keeping the older, more expensive tier. Anyone choosing V4 Pro today should be doing so for
reproducibility or a pinned behaviour, not for quality or price; nothing in the evidence says
whether V4 Pro is retained for compatibility, or whether it will be retired.

**Both hosts are pass-throughs at list price.** fal marks the endpoint `provider_type: "partner"`
and `is_partner_api: true` with a "Partner" badge; Replicate runs it on `CPU` hardware behind a
private wrapper model; and every price read on either host equals Recraft's own list price to the
cent. There is no host-side discount and no host-side capability advantage to shop for — the
differences are in which parameters each host exposes (below).

## Documented capabilities

All of the following is vendor or host documentation. No tests were run.

- **Text-to-image at 2K.** Recraft's 2K ("Pro") size table gives 14 fixed sizes, `2048x2048` for
  1:1 up to `3072x1536` / `1536x2688` for the extreme ratios
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)). The launch post
  calls Pro "2048×2048" ([blog](../../sources/recraft.ai/recraft-v4-launch-blog/2026-10-26.md));
  Replicate phrases it as "~2048px base … up to 3072px on the long side", which resolves to the same
  table ([Replicate](../../sources/replicate.com/recraft-v4-pro/2026-10-26.md)).
- **10,000-character prompts.** Shared with the whole V4 family, against 1,000 for V3 and V2
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)). fal's OpenAPI
  independently caps `prompt` at `maxLength: 10000`
  ([fal schema](../../sources/fal.ai/recraft-v4-pro-api-schema/2026-10-26.md)); Replicate's schema
  repeats the figure ([Replicate schema](../../sources/replicate.com/recraft-v4-pro-schema/2026-10-26.md)).
- **Color control.** `controls.colors` (preferred colors) and `controls.background_color` are the
  only V4 controls Recraft documents, and it marks Controls as "Partial"
  ([API model page](../../sources/recraft.ai/recraft-v4-api-model/2026-10-26.md)). fal exposes both
  as top-level `colors` / `background_color` and advertises "precise color palette control"
  ([fal](../../sources/fal.ai/recraft-v4-pro/2026-10-26.md)). **Replicate does not expose them at
  all** ([Replicate schema](../../sources/replicate.com/recraft-v4-pro-schema/2026-10-26.md)).
- **Reproducibility.** `random_seed` exists on Recraft's API but is exposed by neither host, so
  output is not reproducible through fal or Replicate as captured.
- **Batching.** Recraft accepts `n` from 1 to 6. Neither host exposes an `n`; fal returns
  `{"images": [...]}` and Replicate returns a single URI.
- **Output format.** `image_format` is `webp` (lossless, default) or `png` on Recraft's API. The
  Recraft *app* additionally exports SVG, JPG, PDF, TIFF, and Lottie, which are not API options
  ([product page](../../sources/recraft.ai/recraft-models-v4/2026-10-26.md)).
- **No image input on either host.** Recraft's family capability table lists "Image to image: Yes"
  for V4, but fal and Replicate both expose prompt-only text-to-image endpoints for V4 Pro, so
  editing is first-party-only as far as the captured evidence goes.

### Vector versus raster behaviour

- Raster Pro (`recraftv4_pro`): 2K WebP or PNG, $0.25/image, ~30 s.
- Vector Pro (`recraftv4_pro_vector`): SVG, $0.30/image, ~45 s. Recraft states that "every `_vector`
  model" accepts the 14 ratios "as `w:h` only; SVG output has no fixed pixel size"
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
- Recraft claims vector output is "the only model capable of generating editable, production-quality
  SVG graphics" with "structured layers and clean geometry"
  ([product page](../../sources/recraft.ai/recraft-models-v4/2026-10-26.md),
  [blog](../../sources/recraft.ai/recraft-v4-launch-blog/2026-10-26.md)). The "only model" claim is
  a vendor competitive claim and is not evidence about other vendors' vector output.
- **Observed artifact (not a test).** fal's own published example output for the Pro vector endpoint
  is a plain `<svg>` with `viewBox="0 0 3072 1536"` and `<path>` elements carrying flat `rgb()`
  fills — geometry and fills, no embedded raster — consistent with a 2K canvas and with genuine
  vector output ([fal vector](../../sources/fal.ai/recraft-v4-pro-vector/2026-10-26.md)). fal's
  published example output for the Pro raster endpoint parses to 3072×1536 WebP
  ([fal raster](../../sources/fal.ai/recraft-v4-pro/2026-10-26.md)). These are measurements of
  static host artifacts, not runs.
- **Host gap:** Replicate has no vector endpoint for either V4 tier — `recraft-ai/recraft-v4-vector`
  and `recraft-ai/recraft-v4-pro-vector` both 404 on 2026-10-26
  ([Replicate V4](../../sources/replicate.com/recraft-v4/2026-10-26.md)). SVG output is reachable
  only through fal or Recraft's own API.

### Marketing claims, kept separate

- "Design taste" is the framing of the entire launch: "Design taste is V4's core breakthrough"; the
  model is said to make "intentional visual decisions about composition, lighting, color
  relationships, and material realism"
  ([blog](../../sources/recraft.ai/recraft-v4-launch-blog/2026-10-26.md)).
- Pro specifically is claimed to deliver "noticeably finer detail, improved structure, and higher
  realism" and to "perfect … anatomy issues" relative to V4
  ([product page](../../sources/recraft.ai/recraft-models-v4/2026-10-26.md)). No metric, benchmark,
  or sample size accompanies this. Because Recraft simultaneously says the two tiers "share the
  same creative capabilities", the claim that Pro improves *structure and anatomy* rather than only
  *resolution* sits awkwardly with the resolution-only framing; the page records both.
- The launch post's comparisons against Nano Banana Pro, "GPT High", and Midjourney are unblinded,
  vendor-run, vendor-selected, with no methodology or rater protocol. They are recorded as
  marketing, not as findings
  ([blog](../../sources/recraft.ai/recraft-v4-launch-blog/2026-10-26.md)).
- fal's own copy adds host-side framing absent from Recraft's: "Purpose-built for marketing and
  branding", "design-grade images"
  ([fal](../../sources/fal.ai/recraft-v4-pro/2026-10-26.md)).

## Limitations and constraints

- **V4-level feature gaps.** Recraft states that `negative_prompt`, curated `style`, `text_layout`,
  and the `artistic_level` / `no_text` controls are "Not supported by V4", and points to V3 for
  them ([API model page](../../sources/recraft.ai/recraft-v4-api-model/2026-10-26.md)). Negative
  prompts therefore are not merely ignored — they are not an API parameter on this tier.
- **No inpainting, outpainting, or background operations.** Recraft prices those for V3 only
  ([pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)).
- **Unresolved: is style creation supported?** Recraft's API model page lists `Create style: Yes`
  and documents creating a `recraftv4` style for $0.005, while its V4 product page lists "Style
  creation" under features "not yet supported in Recraft V4". Both pages were captured the same
  day. The product page reads as launch-time copy and the API docs as current, but nothing states
  that the limitation was lifted, so the contradiction is preserved
  ([API model page](../../sources/recraft.ai/recraft-v4-api-model/2026-10-26.md),
  [product page](../../sources/recraft.ai/recraft-models-v4/2026-10-26.md)).
- **Host parameter loss.** fal drops `style_id`, `style_reference_urls`, `style_match`,
  `random_seed`, `n`, `image_format`, and `response_format`. Replicate drops those plus `colors` and
  `background_color`, and also fixes output to one image
  ([fal schema](../../sources/fal.ai/recraft-v4-pro-api-schema/2026-10-26.md),
  [Replicate schema](../../sources/replicate.com/recraft-v4-pro-schema/2026-10-26.md)).
- **Safety filtering differs by route.** fal exposes `enable_safety_checker` (default `true`) but
  notes that "Disabling it requires account authorization; unauthorized requests are always
  checked". Recraft's own API documents no such toggle in the captured records. A refusal on one
  route is not evidence about the model's general willingness.
- **Ephemeral outputs.** Recraft's image URLs last "about 24 hours" and "are public and need no
  authentication"
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)).
- **No public weights.** V4 Pro is hosted-only; nothing in the captured evidence suggests a
  downloadable checkpoint, and Recraft publishes no model card or licence for weights.
- **Rate limit.** 100 requests/minute on the Recraft API
  ([limits and sizes](../../sources/recraft.ai/limits-and-sizes/2026-10-26.md)); host limits were
  not captured.

## Access, pricing, licensing

### Pricing basis

Recraft bills **per image**, not per megapixel, per token, or per second: "$1 = 1,000 units", and
V4 Pro raster is 250 units = $0.25, vector 300 units = $0.30
([pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md),
[product page](../../sources/recraft.ai/recraft-models-v4/2026-10-26.md)). No source states a size
multiplier, so the price appears flat across the whole 2K size table, but that is an inference from
the absence of a stated multiplier rather than an explicit statement. Creating a style adds $0.005
per request when style references are used.

| Route | Raster (2K) | Vector (SVG) | Source |
| - | - | - | - |
| Recraft API (`recraftv4_pro`) | **$0.25** | **$0.30** (`recraftv4_pro_vector`) | [pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md) |
| fal (`fal-ai/recraft/v4/pro/text-to-*`) | **$0.25** | **$0.30** | [fal](../../sources/fal.ai/recraft-v4-pro/2026-10-26.md), [fal catalogue](../../sources/fal.ai/recraft-v4-catalogue/2026-10-26.md) |
| Replicate (`recraft-ai/recraft-v4-pro`) | **$0.25** ("or 40 images for $10") | not offered | [Replicate](../../sources/replicate.com/recraft-v4-pro/2026-10-26.md) |

For scale: V4 is $0.04 raster / $0.08 vector, so Pro costs **6.25×** for raster and **3.75×** for
vector ([pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)).

### Licensing

Three different grants apply depending on route, and they are not interchangeable:

- **Recraft API (Developer Terms, effective 2026-10-20).** "You own all Assets you create with the
  API Services, and Recraft hereby assigns to you all copyright rights it may have in the Assets,
  for personal or commercial use", subject to one restriction: assets "may not be used to train any
  artificial intelligence model". Breach terminates the licence and reverts the rights. Recraft also
  commits not to train on API assets, and reserves the right to embed provenance metadata that the
  user must not strip
  ([developer terms](../../sources/recraft.ai/developer-terms/2026-10-26.md)).
- **Recraft app, paid plan.** Same ownership and same no-training restriction
  ([terms of service](../../sources/recraft.ai/terms-of-service/2026-10-26.md)).
- **Recraft app, Free tier.** Assets are owned by Recraft, commercial use is prohibited, and the
  user assigns all rights to Recraft. This matters because Recraft advertises that all V4 versions
  including Pro are "available to every user, including Free plan users" — an access statement, not
  a licensing one ([terms of service](../../sources/recraft.ai/terms-of-service/2026-10-26.md)).
- **Hosts.** fal marks the endpoint "Commercial use" and states "$0.25 per image with commercial
  licensing" but links only its own terms. Replicate states that "Images generated on Replicate with
  Recraft V4 Pro can be used commercially" and links Recraft's terms, and separately asserts "Data
  privacy: Inputs and outputs are not retained" and "Zero training"
  ([fal](../../sources/fal.ai/recraft-v4-pro/2026-10-26.md),
  [Replicate](../../sources/replicate.com/recraft-v4-pro/2026-10-26.md)). Which Recraft agreement
  governs resale through a host is not published; Recraft's Developer Terms acknowledge that such
  distribution agreements exist and prevail over the public terms, without disclosing them
  ([developer terms](../../sources/recraft.ai/developer-terms/2026-10-26.md)).

## Unresolved questions

1. **What does "Pro" change for vector output?** `recraftv4_pro_vector` costs $0.30 and takes 45 s
   against $0.08 and 15 s for `recraftv4_vector`, yet both return SVG and Recraft's own size rule
   says SVG "has no fixed pixel size". Nothing documents the difference beyond price and latency.
2. **How do fal's `image_size` presets map to pixels?** fal offers `square_hd` (default), `square`,
   `portrait_4_3`, `portrait_16_9`, `landscape_4_3`, `landscape_16_9`, or an explicit
   `{width, height}` up to 14142. The preset names look like fal's 1K conventions on a 2K tier, and
   no source states the resulting dimensions
   ([fal schema](../../sources/fal.ai/recraft-v4-pro-api-schema/2026-10-26.md)).
3. **Is `recraftv4_pro` accepted by image-to-image, and at what price?** Recraft documents
   image-to-image for "V3, V4, and V4.1" at the family level but prices only V3 and the default
   model ([pricing](../../sources/recraft.ai/api-pricing/2026-10-26.md)).
4. **Is style creation supported on V4 or not?** Two first-party pages captured the same day
   disagree (see Limitations).
5. **Why is V4 Pro priced above V4.1 Pro**, the newer and nominally more capable tier? Recraft
   publishes no deprecation or price-rationale note.
6. **How much of the quality difference is resolution?** Recraft says the tiers "share the same
   creative capabilities" and also that Pro improves anatomy and structure. No independent
   measurement separates the two effects, and no source publishes a benchmark.
7. **Why does fal's publish date precede Recraft's announcement** by five days?
8. **Does the "design taste" claim survive outside vendor-run comparisons?** The only comparisons
   captured are Recraft's own, unblinded and vendor-selected.

## Evidence status

Everything above comes from documentation and host metadata captured on 2026-10-26. **No direct
tests were run for this page.** Two claims rest on measurements the curator made on host-published
example artifacts rather than on the model: the 3072×1536 dimensions of fal's example WebP and the
path-only structure of fal's example SVG. Both are labelled as artifact observations and neither is
a generation run.

Evidence floor: **met.** First-party: eight `recraft.ai` records (launch post, API model page,
product page, model lineup, pricing, limits, developer terms, terms of service). Independent host
records: fal (four records, including the machine-readable OpenAPI schema and catalogue metadata)
and Replicate (three records, including the API schema and the V4 sibling page). The two hosts are
independent of Recraft and of each other, though both resell Recraft's API rather than running their
own inference, so they corroborate pricing and parameter exposure far better than they corroborate
output quality.

The next useful evidence would be a small reproducible test against a named endpoint and date:
V4 versus V4 Pro on the same prompts at matched aspect ratios, downscaled to equal pixel counts, to
separate a resolution effect from a quality effect; a dense-typography prompt set; hex/`colors`
fidelity; and a check of what fal's `square_hd` actually returns.

# Topaz Upscale

"Topaz Upscale" is the roster's label for **Topaz Labs' image upscaling API**, not a single model. The
first-party product is a REST image API whose upscaling is split into three tiers — Gigapixel
(precision), Wonder (generative) and Bloom (creative) — each containing several named models
([model taxonomy](../../sources/topazlabs.com/api-docs-model-taxonomy/2026-10-26.md)). The roster's
discovery path, fal `topaz/upscale`, is a host landing page: it is not an endpoint ID, and fal serves
the work as four separate endpoints
([fal record](../../sources/fal.ai/topaz-upscale/2026-10-26.md)).

**Date status: outside the roster window.** The image upscaling API was publicly documented and sold
with a published price list by **2024-09-07**, more than a year before the roster's 2025-10-26 cutoff
([Wayback snapshot](../../sources/archive.org/topazlabs-api-2024-09-07/2026-10-26.md)); Replicate's
`topazlabs/image-upscale` had a version by 2025-04-24
([Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md)). This row is retained
as an established **specialist/utility exception**, not as a new release. What is in-window is the
product's recent evolution: fal's Topaz integration (endpoints dated 2026-08-11, published 2026-08-17),
and dated model releases including Wonder 2 and Recover 3 (2026-01-20), Wonder 3 and Face Recovery 3
(2026-05-14), and Wonder 3.5 and Bloom 2 (2026-08-04)
([release notes](../../sources/topazlabs.com/topaz-upscale-release-notes/2026-10-26.md),
[fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)).

## Identity

- **Canonical name:** no single model name exists. The vendor calls it the "Topaz Labs API" / "Image
  API" and organises upscaling into three families: `Gigapixel` (precision), `Wonder` (generative),
  `Bloom` (creative) ([taxonomy](../../sources/topazlabs.com/api-docs-model-taxonomy/2026-10-26.md)).
  The roster label "Topaz Upscale" is a host grouping, not a vendor model name.
- **First-party endpoints:** base `https://api.topazlabs.com/image/v1`, authenticated with an
  `X-API-Key` header, asynchronous with `process_id` polling or webhooks
  ([reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md)). Upscaling models
  live on three paths:
  - `POST /enhance/async` — `"Standard V2"`, `"Upscale High Fidelity V3"`, `"Low Resolution V2"`,
    `"CGI"`, `"Text Refine"`, `"Faces"`
  - `POST /enhance-gen/async` — `"Wonder 3.5"`, `"Bloom 2"`, `"Detail"`, and (per the OpenAPI enum)
    `"Standard MAX"`, `"Recovery V2"`, `"Wonder"`, `"Redefine"`
  - `POST /restore-gen/async` — `"Face Recovery V3"`; `POST /tool/async` — `"Transparency Upscale"`
  ([Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md),
  [Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md))
- **Host endpoints:** fal `topaz/upscale/image/precision`, `…/generative`, `…/creative`,
  `…/transparent` ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)); Replicate
  `topazlabs/image-upscale` ([Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md)).
- **Aliases and marketing names:** "Topaz Upscale" (roster, fal); "Topaz Photo, Video, and Gigapixel
  APIs" and "Image upscaling API" (vendor site)
  ([product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)); "Gigapixel API" /
  "Photo AI API" (2024 branding, still the same REST product)
  ([Wayback](../../sources/archive.org/topazlabs-api-2024-09-07/2026-10-26.md)).
- **Dates:**
  - API publicly sold by **2024-09-07**; developer docs host live by 2024-10-05
    ([Wayback](../../sources/archive.org/topazlabs-api-2024-09-07/2026-10-26.md)). No dated launch
    announcement was found, so this is a lower bound on the launch, not the launch date.
  - fal integration: catalogue `date` **2026-08-11**, `publishedAt` **2026-08-17**, all four image
    endpoints ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)).
  - Replicate: version created **2025-04-24**, current version **2025-09-01**
    ([Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md)).
  - Dated model releases: Realism 2025-12-24 · Fidelity 2026-01-20 (Wonder 2, Recover 3, explicitly
    "and API") · Precision 2026-03-31 · Next Gen 2026-04-28 · Speed 2026-05-14 (Wonder 3, Face
    Recovery 3) · Mac Speed 2026-06-12 · Definition 2026-08-04 (Wonder 3.5, Bloom 2) · Speed
    2026-09-28 ([release notes](../../sources/topazlabs.com/topaz-upscale-release-notes/2026-10-26.md)).
- **Siblings, not the same model:** the same API's video line (Proteus, Starlight, Astra, Nyx, Apollo
  and others) and its non-upscaling image families (Sharpen, Denoise, Removal & Cleanup, Color &
  Lighting) ([taxonomy](../../sources/topazlabs.com/api-docs-model-taxonomy/2026-10-26.md)); the
  desktop and web applications Topaz Photo, Topaz Video, Topaz Gigapixel, and Topaz for Web
  ([product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)).
- **The API is not the desktop app.** Topaz markets Gigapixel as desktop software with "image
  upscaling up to 16x pixels", alongside Topaz Photo, Topaz Video and Topaz for Web; the API is sold
  separately on per-output-megapixel credits
  ([product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)). The vendor's bridge
  between them is a claim, not an identity: "Easily integrate the same industry-leading models in
  Topaz Photo and Topaz Gigapixel through a REST API interface". Nothing captured establishes that
  the API and a current desktop build run identical checkpoints, and the API's caps are dimensional
  (32,000 px per side, per-model megapixel ceilings) rather than a 16× pixel multiplier.

### Identity ambiguities worth tracking

- **The roster path is not a model.** `topaz/upscale` returns `Endpoint(s) not found` from fal's
  metadata API, and `fal.ai/models/topaz/upscale` renders an empty playground. The served IDs are the
  four `topaz/upscale/image/*` endpoints, plus eleven other Topaz endpoints returned by the same
  catalogue query (the landing page counts sixteen in total)
  ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)).
- **Model strings are inconsistent.** First-party `"Upscale High Fidelity V3"` appears on fal as
  `High Fidelity V3`; first-party `"Faces"` is fal's `Faces` model but fal's own copy calls it "Face
  Recovery 3"; the standalone face model is `"Face Recovery V3"` on a different endpoint. A caller
  cannot derive the model string from the display name
  ([Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md)).
- **The published OpenAPI lags the catalogue.** `/enhance/async` enumerates five models and
  `/enhance-gen/async` four, omitting High Fidelity V3, Faces, Wonder 2, Wonder 3, Wonder 3.5, Bloom
  and Recover 3, all of which have model pages
  ([reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md)). The request
  schema's `additionalProperties: string` escape hatch may be how newer strings are accepted, but
  nothing states that.
- **The two hosts serve different model sets.** Replicate exposes only the five V2-era precision
  models; fal exposes the current image-upscaling catalogue across four endpoints
  ([Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md),
  [fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)). "Topaz Upscale on Replicate" and "Topaz
  Upscale on fal" are therefore not the same product surface.

## Current assessment

This is an established commercial utility API, actively developed, and best understood as **three
upscaling contracts under one product** rather than one model:

- **Precision (Gigapixel)** — non-generative enlargement that claims to preserve source
  characteristics: Standard 2 (default), High Fidelity 2/3, Low Resolution 2, Art & CGI, Text &
  Shapes, plus the face models
  ([Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md)).
- **Generative (Wonder)** — diffusion-based reconstruction that adds detail the source lacks:
  Wonder, Wonder 2, Wonder 3.5, Standard Max, Recover 3, Redefine
  ([Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md)).
- **Creative (Bloom)** — deliberately invents detail and can change objects and identity, with a
  1–9 creativity control and optional prompt on Bloom 2
  ([Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md)).

The vendor's own framing is explicit that these are different contracts with the original pixels:
precision models "attempt to improve quality without changing the source characteristics", generative
models add "recovered detail and texture while preserving the original image intent", and creative
models "add new levels of detail that can change objects, identity, and stylization"
([taxonomy](../../sources/topazlabs.com/api-docs-model-taxonomy/2026-10-26.md),
[Wonder/Bloom](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md)). Choosing a
tier is therefore a fidelity decision, not a quality decision, and the page should not be read as
"one upscaler with presets".

What the evidence supports and does not:

- **Supported:** the API is current, priced per output megapixel, has an unusually high resolution
  ceiling, supports alpha-preserving upscaling, and ships new models on a roughly quarterly cadence
  through 2026-09-28
  ([release notes](../../sources/topazlabs.com/topaz-upscale-release-notes/2026-10-26.md)).
- **Supported:** hosts differ materially in model coverage, defaults, scale caps and price — enough
  that a recommendation must name a route.
- **Not supported:** any claim that Topaz Upscale is better or worse than other upscalers. No
  independent benchmark, blind comparison, or third-party measurement of this API was captured, and
  the vendor publishes no metrics. Artificial Analysis and similar leaderboards do not list it in any
  capture used here.
- **Not supported:** latency claims. The vendor publishes worst-case processing ceilings, not typical
  times ([operations](../../sources/topazlabs.com/api-docs-operations/2026-10-26.md)), and no host
  publishes an estimate.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

### Formats and transport

| Route | Input | Output | Transport |
| --- | --- | --- | --- |
| Topaz `/enhance/async` | jpeg, png, tiff | jpeg, jpg, png, tiff | multipart upload; async `process_id` + status/download endpoints or webhook |
| Topaz `/enhance-gen/async` | jpeg, png, tiff | jpeg, jpg, png, tiff | same |
| Topaz `/restore-gen/async` | jpeg, png, tiff | jpeg, jpg, png, tiff | same |
| fal `topaz/upscale/image/*` | image URL | `jpeg` or `png` (`png` only for transparent) | fal queue (`IN_QUEUE`/`IN_PROGRESS`/`COMPLETED`) |
| Replicate `topazlabs/image-upscale` | image URI | `jpg` or `png` (URI) | Replicate predictions + webhooks |

Sources: [reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md),
[fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md),
[Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md).

### Scale factors and maximum output

| Route | Scale control | Maximum output |
| --- | --- | --- |
| Topaz Gigapixel models | absolute `output_width`/`output_height`, each ≤ **32,000 px**; unset dimension scales proportionally | **1024 MP** output, **512 MP** input (Standard 2, Low Resolution 2, Art & CGI, Text & Shapes) |
| Topaz Standard Max / Recover 3 | same | **384 MP** output, **24 MP** input |
| Topaz Redefine | same | **256 MP** input and output |
| Topaz Transparent | not documented first-party | not documented |
| fal precision / generative / creative | `upscale_factor` **1–4**, default **2** | "output resolution up to 512MP" |
| fal transparent | no factor field; the model always returns 4× | fixed **4×** linear, i.e. 16× pixel area |
| Replicate | `upscale_factor` `None` / `2x` / `4x` / `6x`, default `None` | priced to 512 MP |

Sources: [reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md),
[Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md),
[Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md),
[fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md),
[Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md).

The first-party API has **no scale-factor parameter at all**: you either request absolute dimensions or
let "Autopilot" choose
([reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md)). The 32,000-px
per-side ceiling and the 1024 MP Gigapixel output cap are the same number (32,000² = 1,024 MP), which
is consistent but not stated as a single rule. Bloom's family page separately claims "creatively
upscale images made with Al up to 8x"
([Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md)) —
a marketing bullet with no parameter behind it.

### Face recovery

Face recovery exists in two forms, and they are not interchangeable:

- **A switch on the upscale models.** `faceEnhancement` (boolean), `faceEnhancementStrength` (0–1) and
  `faceEnhancementCreativity` (0–1, "realistic or creative") are documented on Standard 2 and High
  Fidelity 3, and are "required if `faceEnhancement=true`"
  ([Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md)).
- **Standalone face models.** `Recover Faces` (`"Faces"`) targets faces **smaller than 512×512 px**,
  `Detail Faces` (`"Detail"`, `/enhance-gen/async`) targets faces **at least 512×512 px**, and
  `Face Recovery 3` (`"Face Recovery V3"`) "reconstructs plausible features rather than strictly
  preserving original pixels", ships Realistic and Creative variants, and warns that "results may
  include subtle changes to expressions or fine facial characteristics"
  ([Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md)).

fal defaults `face_enhancement` to **true** (strength 0.8) and exposes the standalone model as `Faces`
on the precision endpoint; Replicate defaults it to **false**. The same request therefore produces
different faces on the two hosts unless the caller sets the flag
([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md),
[Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md)).

### Model catalogue as served

| Tier | Model (vendor) | Topaz `model` string | fal | Replicate |
| --- | --- | --- | --- | --- |
| Precision | Standard 2 | `"Standard V2"` | yes (default) | yes (default) |
| Precision | High Fidelity 2 | `"High Fidelity V2"` (OpenAPI) | yes | yes |
| Precision | High Fidelity 3 | `"Upscale High Fidelity V3"` | yes | no |
| Precision | Low Resolution 2 | `"Low Resolution V2"` | yes | yes |
| Precision | Art & CGI | `"CGI"` | yes | yes |
| Precision | Text & Shapes | `"Text Refine"` | yes | yes |
| Precision | Recover Faces | `"Faces"` | yes (`Faces`) | no |
| Precision | Transparent Image Upscale | `"Transparency Upscale"` (`/tool/async`) | yes (own endpoint) | no |
| Generative | Wonder 3.5 | `"Wonder 3.5"` | yes | no |
| Generative | Wonder 3 | not quoted | yes (endpoint default) | no |
| Generative | Wonder 2 | not quoted | yes | no |
| Generative | Wonder | `"Wonder"` (OpenAPI) | yes | no |
| Generative | Standard Max | `"Standard MAX"` (OpenAPI) | yes | no |
| Generative | Recover 3 | not quoted | yes | no |
| Generative | Redefine | `"Redefine"` (OpenAPI) | yes | no |
| Creative | Bloom 2 | `"Bloom 2"` | yes | no |
| Creative | Bloom / Bloom Realism | not quoted | yes | no |
| Face | Face Recovery 3 | `"Face Recovery V3"` (`/restore-gen/async`) | via `Faces`? | no |

Sources: [Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md),
[Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md),
[reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md),
[fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md),
[Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md).

fal's generative endpoint also lists `Recovery` and `Recovery V2`, which have no page in the current
first-party docs index
([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)). Whether `Recovery V2` is `Recover 3`'s
predecessor, and whether fal's `Faces` is Face Recovery 3 or the older Recover Faces, is not documented.

### Other documented behaviour

- **Autopilot and auto-parameters.** "Just pass in an image and our **Autopilot** will automatically
  determine the best settings"; any parameter not supplied "are **automatically** configured by our
  auto-parameter model", and unsupported parameters "are ignored"
  ([reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md),
  [Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md)).
- **Subject targeting.** `subject_detection` = `all` / `foreground` / `background` on the upscale
  models ([Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md)).
- **Crop or letterbox.** `crop_to_fill` defaults to false, in which case a differing aspect ratio is
  letterboxed ([reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md)).
- **Grain synthesis.** Wonder 3.5, Bloom 2 and Face Recovery 3 expose `grain`, `grainDensity`,
  `grainModel` (`silver`/`gaussian`/`grey`), `grainSize`, `grainStrength`
  ([Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md)).
- **C2PA.** "Yes, all of our API model outputs are C2PA-compliant"
  ([operations](../../sources/topazlabs.com/api-docs-operations/2026-10-26.md)).
- **Webhooks.** A `webhook_url` receives a JSON payload per status change with a ULID
  `notification_id`, retried on 5xx with exponential backoff up to 15 minutes
  ([reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md)).

### Marketing claims (vendor, unverified)

- "Industry-standard upscaling for photo, graphics, and print"; "Highest quality generative face
  recovery avoids plastic and synthetic looks"
  ([Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md),
  [Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md)).
- "3M+ users", "trusted by teams at Google, Tesla, Nike, and Nvidia", "over 20 years of experience",
  and per-month counters ("3 million + requests", "7.5 million + photos", "2.3 million + videos")
  ([taxonomy](../../sources/topazlabs.com/api-docs-model-taxonomy/2026-10-26.md),
  [product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)).
- Wonder 3.5 "provides the highest-definition upscaling results with more details, more natural
  textures, and less repetitive patterns"; Bloom 2 "solve[s] the plasticky textures that are common in
  AI images"
  ([release notes](../../sources/topazlabs.com/topaz-upscale-release-notes/2026-10-26.md)).
- "2X-to-4X faster processing time for images" from NeuroStream 2
  ([release notes](../../sources/topazlabs.com/topaz-upscale-release-notes/2026-10-26.md)). The only
  worked example is a **video** model (Starlight Precise 2.5, 30 min → 14 min on an RTX 4070 Ti), so
  the image figure is unsupported by any published measurement.
- fal's "Precision models … industry standard, go-to models" and "Wonder reconstructs detail rather
  than interpolating it, which is what separates a usable 4x enlargement from a soft one"
  ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)) — host copy, not measurement.

No third-party comparison of this API against any other upscaler was captured. These claims are
recorded as claims.

## Limitations and constraints

- **Per-model resolution ceilings are low for the generative tier.** Standard Max and Recover 3 accept
  only **24 MP** input (384 MP output); Redefine is capped at **256 MP** both ways, while the
  precision models accept 512 MP input ([Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md),
  [Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md)). A
  large source can therefore force the precision tier or a pre-downscale.
- **No scale factor first-party.** Callers must compute target dimensions; there is no `2x`/`4x`
  switch, and the maximum factor is implicit in the output cap rather than published
  ([reference](../../sources/topazlabs.com/api-docs-image-reference/2026-10-26.md)).
- **Transparent upscaling is fixed at 4×.** fal documents that the model "always returns a fixed
  4x-scaled image regardless of the requested `upscale_factor`" and that billing follows the actual
  4× output; the first-party page documents no factor at all
  ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)).
- **Host caps diverge.** fal allows 1–4× and "up to 512MP"; Replicate allows up to **6×** and prices to
  512 MP ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md),
  [Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md)).
- **Host model coverage diverges.** Replicate has none of the generative or creative models, so a
  "Topaz upscale" comparison across hosts is not like-for-like
  ([Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md)).
- **Documentation contradicts itself on the billing unit.** The product page banner says "1 API credit
  = 32MP Enhance output" while its own FAQ says 1 credit covers "up to 24 megapixel"
  ([product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)); the pricing pages use
  24 MP ([pricing](../../sources/topazlabs.com/api-docs-pricing/2026-10-26.md)).
- **Documentation contradicts itself on the Gigapixel rate.** The family page says "1 credit per 24
  megapixels" for the whole family; the individual-model table gives High Fidelity 2 = 4 and High
  Fidelity 3 = 2 MP/credit, and the High Fidelity 3 model page uses the 2 MP step. Wonder 3.5 has the
  same problem (8 MP/credit on its page, 4 on the family page, absent from the individual table)
  ([pricing](../../sources/topazlabs.com/api-docs-pricing/2026-10-26.md),
  [Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md),
  [Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md)).
- **"No subscriptions, no minimums" contradicts the plan pricing.** The developer pricing page says
  metered per-MP billing with no subscription; the product page sells $50/mo and $240/mo plans with
  included credits and auto-reload
  ([pricing](../../sources/topazlabs.com/api-docs-pricing/2026-10-26.md),
  [product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)).
- **No published latency, throughput, or rate limits.** The API Limits page is empty; the FAQ gives
  only worst-case ceilings (~90 min for GAN image models, ~20 min for generative image models) and
  notes that image tasks queue up to three attempts
  ([operations](../../sources/topazlabs.com/api-docs-operations/2026-10-26.md)).
- **Failure billing is partial, not free.** Timeouts are refunded, but a cancelled job is charged
  `1.1 × progress %`, so cancelling at 50% keeps 55% of the credits
  ([operations](../../sources/topazlabs.com/api-docs-operations/2026-10-26.md)).
- **Retention and data handling.** Inputs and outputs are deleted after 7 days by default; ZDR is
  Enterprise-only, off by default, and not indicated in API responses; service logs are kept up to 3
  years; processing is in the United States
  ([operations](../../sources/topazlabs.com/api-docs-operations/2026-10-26.md)).
- **Creative tier can change identity.** Bloom "add[s] new levels of detail that can change objects,
  identity, and stylization"; Face Recovery 3 "reconstructs plausible features" and may alter
  expressions. These are documented behaviour changes, not defects, but they make the tier unsuitable
  for evidentiary or forensic upscaling
  ([Wonder/Bloom models](../../sources/topazlabs.com/api-docs-wonder-bloom-models/2026-10-26.md),
  [Gigapixel models](../../sources/topazlabs.com/api-docs-gigapixel-models/2026-10-26.md)).
- **No public weights, no model cards, no parameter counts, no technical report** were found for any
  of these models. The models are developed in-house and sold as a service
  ([taxonomy](../../sources/topazlabs.com/api-docs-model-taxonomy/2026-10-26.md)).
- **fal's "serverless" claim is contradicted by its own catalogue.** The landing page FAQ calls the
  endpoints "serverless"; the catalogue records `hostingType: "proxy"`, i.e. fal forwards to Topaz
  ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)).
- **Refusals and safety filtering are undocumented first-party.** fal exposes an
  `enable_safety_checker` that "authorized callers may set false"; no Topaz moderation policy was
  captured ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)).

## Access, pricing, licensing

### Billing basis

Every route bills on **output** megapixels, not input: "Billing is based on the **output** resolution of
your processed image — not the input"
([pricing](../../sources/topazlabs.com/api-docs-pricing/2026-10-26.md)). That is the single most
important pricing fact for large upscales: a 4× linear upscale multiplies the billable area by 16.

### First-party credit schedule

| Family | Output MP per credit | Rate at Scale ($0.08/credit) |
| --- | --- | --- |
| Gigapixel (precision) | 24 (family page) | $0.08 per 24 MP |
| High Fidelity 2 | 4 (individual table) | $0.48 per 24 MP |
| High Fidelity 3 | 2 (individual table) | $0.96 per 24 MP |
| Wonder (generative) | 4 | $0.48 per 24 MP |
| Wonder 3.5 | 8 (model page) | $0.24 per 24 MP |
| Bloom (creative) | 2 | $0.96 per 24 MP |

Per-credit prices: Starter **$0.12** ("coming soon"), Developer **$0.10** ($50/mo, 500 credits), Scale
**$0.08** ($240/mo, 3,000 credits), Enterprise volume with on-premise deployment
([product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)). Credits roll over, the
balance is capped at 5× the monthly volume, and running out triggers an automatic 25% reload at the
plan rate.

The rate column is arithmetic from the two published schedules, not a quote, and it inherits the
family-vs-model contradictions above. fal's per-model rates corroborate part of the split — 24 MP for
every precision model, 8 MP for Wonder 3 and 3.5, 4 MP for the rest of the Wonder family, 2 MP for
Bloom — but they charge 24 MP for High Fidelity 2 and 3 as well, so the individual-model table's 4 and
2 MP figures have no second source ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)).

### Host pricing

| Route | Precision | Generative | Creative | Transparent |
| --- | --- | --- | --- | --- |
| fal | $0.08 per started 24 MP | $0.08 per 8 MP (Wonder 3/3.5) or 4 MP (others) | $0.08 per 2 MP | $0.08 per 24 MP of actual 4× output |
| Replicate | $0.05 per started 24 MP (1 unit), stepping to 17 units at 512 MP | not offered | not offered | not offered |

Sources: [fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md),
[Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md).

**Cost of one 24 MP output:**

| Tier | Topaz direct (Scale) | fal | Replicate |
| --- | --- | --- | --- |
| Precision (Standard 2) | $0.08 | $0.08 | $0.05 |
| Generative (Wonder 3.5) | $0.24 | $0.24 | — |
| Generative (Wonder/Standard Max) | $0.48 | $0.48 | — |
| Creative (Bloom 2) | $0.96 | $0.96 | — |
| Transparent (fixed 4× of a 6 MP source = 96 MP) | $0.32 | $0.32 | — |

fal's rates are exactly Topaz's Scale-tier rates, which is what its FAQ means by "at parity with what
Topaz charges" ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)). Replicate is roughly 40%
cheaper on precision work but sells an older, narrower model set
([Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md)). Topaz's Developer and
Starter tiers are more expensive per credit than either host, so a low-volume buyer pays a premium for
buying direct.

### Licensing and commercial terms

- **No open weights.** The models are closed; the API is the product, and Enterprise offers
  "on-premise deployment" as a commercial arrangement, not a download
  ([product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)).
- **Commercial use.** The API is sold in business-oriented plans (Developer, Scale, Enterprise) for
  production use, and Enterprise adds volume pricing and on-premise deployment
  ([product page](../../sources/topazlabs.com/api-product-page/2026-10-26.md)). fal's
  `licenseType: "commercial"` badge and FAQ ("Content processed through the fal.ai API can be used in
  commercial projects") are fal's statements about use through fal, not a Topaz licence
  ([fal](../../sources/fal.ai/topaz-upscale/2026-10-26.md)). Replicate's page states no commercial
  terms ([Replicate](../../sources/replicate.com/topazlabs-image-upscale/2026-10-26.md)). No
  standalone Topaz API licence or commercial-use document was captured, so the vendor's own grant to
  API customers is **unverified**.
- **Training and retention.** "Topaz Labs never trains its models on customer data"; inputs and
  outputs are deleted after 7 days by default; ZDR is an Enterprise addendum, effective 2026-10-16
  ([operations](../../sources/topazlabs.com/api-docs-operations/2026-10-26.md)).
- **Provenance.** Outputs are C2PA-compliant, so upscaled images carry a content credential
  ([operations](../../sources/topazlabs.com/api-docs-operations/2026-10-26.md)).

## Unresolved questions

1. **When did the API launch?** The earliest evidence is a 2024-09-07 product page with prices. No
   dated launch announcement was found, so "before 2024-09-07" is a bound, not a date.
2. **Is "Topaz Upscale" one model or a family?** The evidence says a family of roughly twenty
   named upscaling model IDs across three tiers. Whether any two of them share weights (for example Wonder 3
   and Wonder 3.5) is not documented.
3. **What is the real per-model credit rate?** Family pages and model pages disagree for High Fidelity
   2/3 and Wonder 3.5, and half the individual-model table is empty. Which schedule does a direct
   caller actually get billed on?
4. **Which face model does fal's `Faces` run?** Face Recovery 3, Recover Faces, or a routing rule by
   face size? fal's copy says "Face Recovery 3"; the first-party model string for Face Recovery 3 is on
   a different endpoint.
5. **Do the API and the desktop apps run the same checkpoints?** Topaz says they do; no version
   identifiers, model cards, or release notes make that checkable.
6. **How fast is it, really?** No typical latency, queue time, or throughput is published anywhere
   captured, and no independent measurement exists on this page.
7. **How good is it?** No independent benchmark or blind comparison of this API was captured. The
   quality claims are all vendor or host copy.
8. **What are the actual API limits?** The API Limits page is empty; upload size, concurrency, and rate
   limits are undocumented.
9. **Is `Recovery` / `Recovery V2` on fal the same lineage as `Recover 3`?** fal lists all three on the
   generative endpoint; the first-party docs index only has `Recover 3`.
10. **Does the in-window "16x pixels" desktop claim map to any API capability?** The API's caps are
    dimension- and megapixel-based, and fal caps the factor at 4×.

## Evidence status

Evidence floor: **met.** Eleven records captured on 2026-10-26: eight first-party (topazlabs.com
product page, developer.topazlabs.com API docs on model taxonomy, Gigapixel models, Wonder/Bloom
models, pricing, image reference, operations/ZDR, and dated release notes), one archived first-party
page via the Internet Archive, and two independent host records (fal catalogue plus four endpoint
schemas; Replicate model page plus schema).

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Every capability statement is vendor or host documentation, the pricing is arithmetic from
published schedules, and the quality and speed claims are recorded as claims. The date finding — that
the API predates the roster window by more than a year — rests on an archived first-party page,
not on a launch announcement.

The next useful evidence would be: (a) a small reproducible test set (product photo, portrait with
small faces, text-heavy screenshot, logo PNG with alpha, heavily compressed thumbnail) run at 2× and
4× on Topaz direct, fal and Replicate with matched settings, recording wall-clock time and queue time;
(b) a fidelity check — pixel/SSIM distance from a bicubic upsample — to test the precision tier's
"preserve source characteristics" claim against the generative tier; (c) an actual invoice or credit
ledger from a direct account to settle the family-vs-model pricing contradiction.

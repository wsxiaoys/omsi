# Seedream 5.0 Lite

ByteDance's small tier of the Seedream 5.0 image family, announced on 2026-02-13 as a
reasoning-focused upgrade over Seedream 4.0
([Seed launch post](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md)).
It is a hosted model with no published weights, priced at **$0.035 per output image** on ByteDance's
own platform and on both host pages captured here. Lite is not a cheaper alias of Seedream 5.0 Pro:
the two differ in resolution, reference-image count, supported parameters, and price, and
ByteDance documents them as separate tiers.

## Identity

- Canonical name: **Seedream 5.0 Lite**. Marketing spellings on first-party pages: "Seedream 5.0
  Lite", "Seedream 5.0 lite"; the Chinese platform name is "Doubao-Seedream-5.0-lite"
  ([launch post, Chinese edition](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md)).
- First-party model IDs: **`seedream-5-0-lite-260128`** on BytePlus ModelArk (international)
  ([model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md),
  [pricing](../../sources/byteplus.com/seedream-5-lite-model-pricing/2026-10-26.md)) and
  **`doubao-seedream-5-0-lite-260128`** on Volcengine Ark (China)
  ([Volcengine model list](../../sources/volcengine.com/seedream-5-lite-model-list/2026-10-26.md)).
  In both cases the ID is documented as *supported under a parent entry* (`seedream-5-0-260128` /
  `doubao-seedream-5-0-260128`) rather than as its own row.
- Release date: **2026-02-13**, the date on ByteDance's launch post and the Chinese edition. The
  snapshot suffix `260128` is consistent with a 2026-01-28 build under ByteDance's `yymmdd` snapshot
  convention (the same platform uses `seedream-4-5-251128` and `seedream-4-0-250828`); that reading
  is an inference from the ID format, not a vendor statement.
- Host endpoints captured:

  | Surface | Endpoint / slug | Notes |
  | --- | --- | --- |
  | BytePlus ModelArk | model ID `seedream-5-0-lite-260128` | first-party; regions `ap-southeast-1` and `eu-west-1` |
  | Replicate | `bytedance/seedream-5-lite` | $0.035 per output image; 2K/3K only |
  | fal | `bytedance/seedream/v5/lite/text-to-image` | $0.035 per image; 2K/3K/4K |
  | fal | `bytedance/seedream/v5/lite/edit` | same price and size options |

  ([Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md),
  [fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md))
- Sibling models: **Seedream 5.0 Pro** and **Seedream 5.0 Flash** are separate tiers with separate
  IDs (`dola-seedream-5-0-pro-260628`, `dola-seedream-5-0-flash-260915`), their own first-party
  launch material (Pro has its own blog post on the Seed site), and different capabilities. Do not
  transfer findings between tiers
  ([model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)). Seedream 4.5
  and 4.0 are the prior generations.

### Ambiguity to keep open

1. **Parent entry vs callable ID.** BytePlus's model list keys the Seedream 5.0 row by
   `seedream-5-0-260128` and notes it "Also supports `seedream-5-0-lite-260128`", but the pricing
   table prices *only* the lite ID and has no `seedream-5-0-260128` row. Whether the parent ID is
   separately callable, or is a family entry that resolves to the Lite snapshot, is not settled by
   the captured pages. The sibling page for "Seedream 5.0" has to resolve this; this page does not
   assume either reading.
2. **Which tier "Seedream 5.0 (full)" means.** First-party material names *Lite* and *Pro* as
   launch tiers (plus a `dola-`prefixed *Flash* on the cloud platforms), and fal's catalogue splits
   the family three ways (lite / flash / pro). A bare "Seedream 5.0" is not a first-party product
   name in any captured source, so the roster label "Seedream 5.0" needs its own identity work on
   its own page ([seedream-5.0.md](./seedream-5.0.md)).
3. **`fal.ai/models/bytedance/seedream/v5-lite`.** That URL returns HTTP 200 but is an empty page
   shell, and `api.fal.ai/v1/models?endpoint_id=bytedance/seedream/v5-lite` returns 404. It is not a
   fal endpoint ID; the two `/v5/lite/*` endpoints are
   ([fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md)).
4. **Replicate's README examples.** Every code sample on the Replicate page calls
   `replicate.run("bytedance/seedream-5", ...)`, but that slug returned 404 on capture, as did the
   version payload's own model URL `replicate/bytedance-seedream-5`. The page's documented slug is
   `bytedance/seedream-5-lite`; the samples do not run as written
   ([Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md)).

## Current assessment

Lite is the *small, cheap, high-resolution* member of the Seedream 5.0 family. ByteDance's own
framing is that its advance is reasoning rather than resolution or speed — "The main improvement
brought by Seedream 5.0 Lite is not higher resolution or faster speed, but the deep thinking behind
'reading', 'seeing', 'drawing', and 'writing'"
([launch post](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md)) — yet on
the API it is the only Seedream 5.0 tier documented at 3K and 4K output, and the only one with a
3.7 MP native pixel floor
([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).

Practically, the case for Lite over Pro is: flat $0.035 per image against Pro's $0.045–$0.09,
4K output, 14 reference images against Pro's 10, and sequential batch generation with streaming —
the two parameters Pro does *not* support. The case against is: no layer decomposition, no
transparent background, no `fast` prompt-optimization mode, Chinese/English prompts only, and
ByteDance calls it a "relatively small model" with acknowledged weakness in "structural stability,
realism, and aesthetics". If you need layer separation, alpha output, or the multilingual prompt
set, Lite is the wrong tier.

Two caveats bound this assessment. First, no independent measurement exists for Lite in this
knowledge base: quality claims are ByteDance's internal Elo comparison against Seedream 4.5, with
no published numbers. Second, the China-region model list marks the Seedream 5.0 entry that serves
Lite as 即将下线 ("retiring soon"), while the Pro and Flash rows carry no such flag
([Volcengine](../../sources/volcengine.com/seedream-5-lite-model-list/2026-10-26.md)) — so Lite's
availability should be re-checked before it is designed into anything long-lived.

## Documented capabilities

Everything in this section is vendor or host documentation. **No direct tests were run for this
page.**

### ByteDance's own claims (marketing, not measurements)

- **Unified multimodal architecture** for cross-modal understanding and reasoning; better
  reference-image feature capture and better handling of vague instructions
  ([launch post](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md)).
- **Real-time search enhancement**, described as new for the Seedream family: "It can now access
  up-to-date knowledge and information through the internet", and "The search function is flexible
  and can be toggled on or off" — enabled for freshness, disabled for stability
  ([launch post](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md),
  [product page](../../sources/seed.bytedance.com/seedream-5-lite-model-page/2026-10-26.md)).
- **Visual reasoning** — "multi-step reasoning" with Go-move and part-assembly examples; **information
  visualization** from world knowledge (rainforest strata, petroleum geology, textbook figures);
  **single-reference style transfer**; **instruction-based editing** that "maintains consistency in
  non-edited areas more stably"; **example-based editing** ("Modify Figure 3 based on the changes
  observed from Figure 1 to Figure 2"); **multi-subject adherence** — "even in visuals containing up
  to nine subjects" it held letters, times, numbers, and colours
  ([launch post](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md)).
- **Elo**: "Seedream 5.0 Lite's Elo score exceeds Seedream 4.5". Method stated as double-blind
  side-by-side comparisons on an internal "MagicArena" platform, scored by "senior evaluation
  experts", "based on tens of thousands of rounds"
  ([launch post](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md)).
  The product page calls the same internal benchmark "MagicBench" and shows only radar charts
  labelled "Text-to-Image Radar Chart" and "Single-Image Editing Radar Chart"
  ([product page](../../sources/seed.bytedance.com/seedream-5-lite-model-page/2026-10-26.md)). No
  numeric score, judge count, model roster, or variance is published, and the two pages name the
  benchmark differently — treat the Elo claim as directional only.

### Documented API behaviour (BytePlus, Lite-scoped)

- **Resolution.** 2K / 3K / 4K resolution levels, or explicit `widthxheight`; default `2048x2048`;
  total pixels must fall in [3,686,400, 16,777,216] (2560×1440 up to 4096×4096); aspect ratio
  [1/16, 16]. The documented 4K table runs to 6240×2656 for 21:9
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **Reference images.** "Seedream 5.0 lite, 4.5, and 4.0 support up to 14 reference images" —
  against 10 for pro and flash. Input images: jpeg/png/webp/bmp/tiff/gif/heic/heif, ≤30 MB,
  ≤36 MP, aspect ratio [1/16, 16]
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **Sequential (batch) generation.** `sequential_image_generation: auto|disabled` with
  `max_images` in [1, 15], and the constraint "Number of input reference images + number of
  generated images ≤ 15". Lite is the *only* Seedream 5.0 tier with this parameter; pro and flash
  are marked "Not supported" for batch generation
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md),
  [model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)).
- **Streaming** (`stream`), **output format** `png`/`jpeg` (default jpeg), and
  **`response_format`** `url` (24-hour expiry) or `b64_json` are all documented as supported for
  Lite ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **Watermark.** `watermark` defaults to `true` on BytePlus, adding an "AI-generated" mark in the
  lower-right corner ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **Prompting.** Chinese and English only; "Use no more than 300 Chinese characters or 600 English
  words" ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
  Replicate's schema carries the same 600-word guidance as "BytePlus recommends"
  ([Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md)).

### Host-side behaviour

- **Replicate** documents text-to-image, image-to-image, "Combine up to 14 reference images",
  sequential batch generation, text rendering with double-quoted strings, and PNG/JPEG output, and
  exposes `size` as 2K or 3K only
  ([Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md)).
- **fal** splits generation and editing into two endpoints, exposes `auto_2K`/`auto_3K`/`auto_4K`
  plus an explicit `width`/`height` object, adds a `num_images` fan-out of 1–6, returns the `seed`
  used, and defaults `watermark` to `false` with `enable_safety_checker` on
  ([fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md)).
- fal's published native pixel range (2560×1440 to 4096×4096) is identical to BytePlus's Lite
  range, and both Replicate and fal expose a `return_byteplus_urls` parameter, so both hosts appear
  to be proxying the BytePlus model rather than running their own deployment
  ([fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md),
  [Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md)). That is an inference from
  the parameter descriptions, not a hosting statement by either host.

### Contradiction worth preserving

Replicate's README advertises "Accurate typography with support for multiple languages", while
BytePlus documents Lite's *prompt* support as Chinese and English only, with the extra 15 prompt
languages reserved for pro and flash
([Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md),
[API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
These are different claims — rendered text in an image versus the language of the prompt — and
neither source is specific enough to resolve how well non-English text renders. Left open.

## Limitations and constraints

- **Vendor-acknowledged quality gaps.** "Seedream 5.0 Lite is a relatively small model, and there is
  still room for improvement in structural stability, realism, and aesthetics." ByteDance also
  frames further scaling as future work "to support more rounds of interactive editing", implying
  the current ceiling on long edit chains is known
  ([launch post](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md)).
- **No layer decomposition.** Lite is documented as "No" for layer decomposition, and the
  `layer_decomposition` parameter lists only pro and flash as supported
  ([model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md),
  [API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **No transparent background.** `background: transparent` is pro/flash-only
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **No `fast` prompt-optimization mode.** "Seedream 5.0 flash, Seedream 5.0 lite, and Seedream 4.5
  do not currently support this mode"
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **Prompt languages limited to Chinese and English** on BytePlus; no captured source documents a
  wider prompt-language set for Lite
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **Minimum output size.** The 3.69 MP pixel floor means you cannot request a small image; a
  1500×1500 request is documented as invalid. Cheap thumbnails are not a Lite use case
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
- **Reference-image ceiling is shared with output count.** 14 references and 15 outputs are not
  independent limits: inputs plus generated images must stay ≤15
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md)).
  fal adds a further default: "when more than 10 references are provided, only the last 10 are used"
  unless `image_passthrough` is enabled
  ([fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md)).
- **Watermark defaults differ by surface.** On by default at BytePlus, off by default at fal, and
  undocumented at Replicate — so "the same model" produces visibly different output depending on
  where it is called
  ([API reference](../../sources/byteplus.com/seedream-5-lite-image-generation-api/2026-10-26.md),
  [fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md),
  [Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md)).
- **Moderation is host-controlled and asymmetric.** fal enables a safety checker by default and
  requires account authorisation to disable it; BytePlus does not bill images blocked by content
  moderation; Replicate's page states no moderation policy at all
  ([fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md),
  [pricing](../../sources/byteplus.com/seedream-5-lite-model-pricing/2026-10-26.md),
  [Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md)). A refusal on one surface
  therefore says little about the model itself.
- **Retirement signal.** The China-region model list flags the parent Seedream 5.0 entry
  (the one that "同时支持" the Lite snapshot) as 即将下线; no retirement date is given, and the
  international model list showed no equivalent flag on capture
  ([Volcengine](../../sources/volcengine.com/seedream-5-lite-model-list/2026-10-26.md),
  [BytePlus model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)).
- **No public weights.** A Hugging Face search on 2026-10-26 returned no ByteDance-owned Seedream
  checkpoint ([search record](../../sources/huggingface.co/seedream-5-lite-weights-search/2026-10-26.md)).
  This is a negative search result, not a licence statement; self-hosting is not an available
  fallback.

## Access, pricing, licensing

- **First-party (BytePlus ModelArk).** `seedream-5-0-lite-260128`: **input images free, $0.035 per
  output image**. Sequential generation "is billed based on the actual number of generated
  images", and images blocked by content moderation are not billed
  ([pricing](../../sources/byteplus.com/seedream-5-lite-model-pricing/2026-10-26.md)). Lite is the
  only Seedream 5.0 tier with a flat output price — Pro is tiered by megapixels ($0.045 / $0.09) and
  Flash is $0.018.
- **Regions.** `ap-southeast-1` for all listed models, plus `eu-west-1` for `seedream-5-0-lite`
  specifically ([model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)).
- **Rate limit.** Max IPM 500 on BytePlus, with the platform's caveat that these are theoretical
  maxima that depend on load and invocation method
  ([model list](../../sources/byteplus.com/seedream-5-lite-model-list/2026-10-26.md)).
- **Replicate.** $0.035 per output image ("or around 28 images for $1"); no input charge stated
  ([Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md)).
- **fal.** $0.035 per image on both the generation and edit endpoints, catalogue
  `license_type: commercial`
  ([fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md)).
- **Licensing.** fal's catalogue carries `license_type: commercial` for both Lite endpoints, which is
  fal's assertion about usage through fal rather than a ByteDance licence statement. No ByteDance
  licence terms for Lite outputs were captured, and no weights licence exists to check because no
  weights are published. Replicate's page carries no licence or commercial-use statement at all
  ([fal](../../sources/fal.ai/seedream-5-lite/2026-10-26.md),
  [Replicate](../../sources/replicate.com/seedream-5-lite/2026-10-26.md)).
- **Consumer surfaces.** Live at launch on Dreamina AI (即梦AI) and the Volcano Ark Experience
  Center, in beta on Doubao; the Seed product page's "Try now" links to the Dola app and "Get API"
  links to the BytePlus playground
  ([launch post](../../sources/seed.bytedance.com/seedream-5-lite-launch-blog/2026-10-26.md),
  [product page](../../sources/seed.bytedance.com/seedream-5-lite-model-page/2026-10-26.md)).

## Unresolved questions

1. Is `seedream-5-0-260128` a callable model distinct from `seedream-5-0-lite-260128`, or only a
   family entry? The model list implies the first, the price list the second.
2. Is the Lite snapshot itself retiring, or only the parent entry it is listed under? What is the
   retirement date, and does it apply outside China? BytePlus's deprecation-notice page rendered no
   readable body on capture.
3. Is "real-time search" reachable through any API? The launch post presents it as a togglable
   feature, but the BytePlus image-generation parameter list contains no search switch, and no host
   exposes one.
4. Which BytePlus snapshot do Replicate and fal serve, and how stale is it? Neither host states a
   model revision, and fal's `date` field is a fal timestamp rather than a model date.
5. How good is the model, independently? No third-party benchmark, human preference study, or user
   report was captured. The Elo claim is internal, unquantified, and named inconsistently
   ("MagicArena" vs "MagicBench") across two first-party pages.
6. How reliable is typography, and in which languages? Replicate claims "multiple languages";
   BytePlus documents Chinese/English prompts only. Neither gives a measurement.
7. How far does editing stay consistent over repeated rounds — the capability ByteDance says is
   still to improve — and does the example-based (before/after pair) workflow that Replicate
   promotes behave the same on BytePlus and fal, which do not document it by name?
8. Does the 3.69 MP minimum output interact badly with reference-image-heavy workflows, where the
   total-pixel caps and the 14-reference ceiling compete?

## Evidence status

Evidence floor: **met**. One first-party source family — ByteDance Seed's launch post and product
page — plus three further first-party documentation pages from ByteDance's own cloud platforms
(BytePlus model list, image-generation API reference, price list) and the Volcengine model list.
Independent host records: **Replicate** and **fal**. All records were captured on 2026-10-26 and
are linked above at the claim level.

**No direct tests were run for this page.** Every capability, price, and limit above is vendor or
host documentation; every quality statement is ByteDance's own marketing or internal evaluation.
No third-party measurement, user report, or independent benchmark of Seedream 5.0 Lite was captured.

Known weaknesses of this evidence set: the first-party API documentation is organised per parameter
with per-model notes, so parameters that are silently unsupported for Lite cannot be distinguished
from supported ones; the launch post publishes no numbers; the two host pages restate BytePlus
limits rather than testing them; and the retirement flag exists in only one of the two regional
model lists. The most valuable next evidence would be a small reproducible test set run against a
named endpoint and snapshot: dense typography in English and Chinese, a 4K request, a 14-reference
blend, sequential batch output, and repeated-edit drift.

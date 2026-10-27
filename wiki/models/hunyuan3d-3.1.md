# Hunyuan3D 3.1

Tencent's closed, API-only 3D asset generator — text-to-3D and image-to-3D, textured or white-model, with
optional PBR maps and a configurable polygon budget. Version 3.1 became selectable on Tencent Cloud's
"Tencent HY 3D Global" API on **2026-01-20**, when the `Model` parameter was added to the Pro submit API
([API history](../../sources/tencentcloud.com/tencent-hy-3d-api-history/2026-10-26.md)); fal published its
`fal-ai/hunyuan-3d/v3.1/*` endpoints a week later, on 2026-01-27 to 2026-01-29
([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)). No weights are published for 3.0 or 3.1: the newest
open-weights release in the family is Hunyuan3D 2.1 from 2025-06-13
([weights check](../../sources/github.com/tencent-hunyuan-3d-repos/2026-10-26.md)).

The model is inside the one-year window on every date that matters — 3.1 selectable 2026-01-20, hosted
2026-01-27, Replicate version 2026-09-17. Its 3.0 predecessor is also inside the window (first cloud API
release 2025-12-15).

## Identity

- **Canonical name:** Hunyuan3D 3.1. Tencent does not use that string anywhere captured. The vendor's product
  is **Tencent HY 3D Global** (Chinese: 混元生3D), and the only first-party identifier for the version is the
  value `3.1` of the `Model` parameter on `SubmitHunyuanTo3DProJob`: "Tencent HY 3D Global model version
  Defaults to 3.0, with optional choices: 3.0, 3.1" ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)).
- **Aliases in use:** fal display names "Hunyuan 3D Pro Text to 3D", "Hunyuan 3D Pro Image to 3D",
  "Hunyuan 3D Rapid …", "Hunyuan 3D Smart Topology", "Hunyuan 3D Part Splitter", all under the URL path
  `fal-ai/hunyuan-3d/v3.1/`; Replicate's "Tencent Hunyuan 3D 3.1" (`tencent/hunyuan-3d-3.1`); the roster's
  "Hunyuan3D 3.1" ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md),
  [Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md)).
- **Vendor:** Tencent Hunyuan, delivered commercially through Tencent Cloud (API version `2023-09-01`, domain
  `hunyuan.intl.tencentcloudapi.com`).
- **Host endpoints:**

| Host | Endpoint | Tier | Modality |
| --- | --- | --- | --- |
| Tencent Cloud | `SubmitHunyuanTo3DProJob` (`Model=3.1`) | Professional | text + image + multi-view |
| Tencent Cloud | `SubmitHunyuanTo3DRapidJob` | Express | text + image |
| fal | `fal-ai/hunyuan-3d/v3.1/pro/text-to-3d` | Pro | text |
| fal | `fal-ai/hunyuan-3d/v3.1/pro/image-to-3d` | Pro | image + 7 views |
| fal | `fal-ai/hunyuan-3d/v3.1/rapid/text-to-3d` | Rapid | text |
| fal | `fal-ai/hunyuan-3d/v3.1/rapid/image-to-3d` | Rapid | image |
| fal | `fal-ai/hunyuan-3d/v3.1/smart-topology` | post-process | GLB/OBJ in → GLB out |
| fal | `fal-ai/hunyuan-3d/v3.1/part` | post-process | FBX in → FBX parts out |
| Replicate | `tencent/hunyuan-3d-3.1` | one surface, Pro-shaped (inferred from the schema) | text or image |

The roster's host string `fal-ai/hunyuan-3d/v3.1` is a **family prefix, not a callable endpoint**: its model
page returns 200 as a group landing page, but the queue OpenAPI schema at that exact `endpoint_id` returns 404
and the catalogue API returns a stub with no metadata. Calls must target one of the six suffixed endpoints
([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)).

- **Release timeline:**

| Date | Event | Source |
| --- | --- | --- |
| 2025-12-15 | First Hunyuan 3D generation APIs published on this endpoint (`Submit`/`QueryHunyuanTo3DProJob`); no `Model` parameter — this is 3.0 | [API history](../../sources/tencentcloud.com/tencent-hy-3d-api-history/2026-10-26.md) |
| 2025-12-16 | fal publishes `fal-ai/hunyuan3d-v3/*` (Hunyuan3d V3, i.e. 3.0) | [fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md) |
| 2026-01-04 | Express (`Rapid`) and Part APIs added | [API history](../../sources/tencentcloud.com/tencent-hy-3d-api-history/2026-10-26.md) |
| **2026-01-20** | **`Model` parameter added to the Pro submit API — 3.1 becomes selectable** | [API history](../../sources/tencentcloud.com/tencent-hy-3d-api-history/2026-10-26.md) |
| 2026-01-21 | Smart Topology APIs added | same |
| 2026-01-27 → 01-29 | fal publishes the six `hunyuan-3d/v3.1` endpoints | [fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md) |
| ~2026-02 | Replicate model created ("8 months, 2 weeks ago" at capture) | [Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md) |
| 2026-05-08 | Auto Rigging APIs added | [API history](../../sources/tencentcloud.com/tencent-hy-3d-api-history/2026-10-26.md) |
| 2026-09-17 | Replicate's latest version rebuilt; 142,541 runs recorded at capture | [Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md) |
| 2026-10-20 | fal endpoints' last `updated_at` | [fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md) |

- **Siblings that are different models, not aliases:** Hunyuan3D 2.1 (the newest open-weights release, June 2025),
  Hunyuan3D 3.0 (`Model=3.0`; still served on fal as `fal-ai/hunyuan3d-v3/*`), Hunyuan3D-Omni, Hunyuan3D-Part,
  Hunyuan3D-Buffalo1.0, Hunyuan3D-WorldClaw, and [Hunyuan Motion](hunyuan-motion.md) (text-to-motion, no pixels,
  no mesh) ([weights check](../../sources/github.com/tencent-hunyuan-3d-repos/2026-10-26.md)).
- **Identity ambiguity — real, and not resolved by any captured page:**
  - There is no model card, no technical report, no repository and no announcement page for "3.1". Tencent's
    product and marketing pages never mention a version number at all
    ([product pages](../../sources/tencentcloud.com/tencent-hy-3d-product/2026-10-26.md)).
  - "3.1" is therefore a *parameter value*, and the roster label is a reasonable canonicalisation of the
    hosts' display names, not a vendor product name.
  - The Pro and Rapid tiers are different service tiers of one product (Professional / Express), and the
    Rapid API has **no version parameter at all** — so a request to fal's `v3.1/rapid/*` endpoints cannot be
    shown from documentation to run 3.1 rather than 3.0. See Unresolved questions.

## Current assessment

**A version increment documented only by its parameter contract.** The one thing Tencent states about 3.1 is
what it *disables*: "When selecting version 3.1, the [LowPoly] and [Sketch] parameter is unavailable", and what
it *adds*: the top, bottom, left-front-45° and right-front-45° multi-view angles are "only supported in Model
3.1" ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)). Tencent charges the same
credits for either version — "Selecting version 3.0 or 3.1 from the [Model] parameter will not consume extra
credits" ([billing](../../sources/tencentcloud.com/tencent-hy-3d-billing/2026-10-26.md)). So on vendor evidence
3.1 is a distinct model with a different capability surface, not a repackaging — but nothing first-party says
it generates *better* geometry or textures.

The quality claims that exist are host copy. Replicate's readme (supplied by Tencent, but published as a
Replicate model readme) says 3.1 "focuses on improving geometry accuracy, texture quality, and generation
speed" and offers "Improved Geometry Quality — Enhanced mesh topology and surface consistency compared to
earlier releases" ([Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md)). fal's pages carry no
comparative claim at all. Treat all of it as marketing: no numbers, no benchmark, no harness.

**Status: current, but opt-in, and 3.0 is not retired.** All six fal endpoints are `status: active` with an
`updated_at` of 2026-10-20; Replicate rebuilt its version on 2026-09-17; Tencent's reference is current to
2026-05-27. At the same time, Tencent's documented default is still `Model=3.0` (as of the 2026-05-27 revision
of the Pro page), so a caller who does not set the parameter gets 3.0, and fal still lists and serves the 3.0
family ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)). 3.1 is best described as the newer optional
version of a live product line, not as a replacement.

**Practical position.** On documentation this is the most completely specified 3D generation route in this
knowledge base — it is also the only 3D asset generator here, so "most" is not a quality comparison. On the
input side: text, single image, up to seven simultaneous view images, a polygon budget, optional PBR, four
output containers on the vendor API, and a real post-processing family (topology, part splitting, UV, texture
edit, rigging, format conversion). Its weaknesses are equally concrete: no weights, no rig, no animation, no
low-poly path inside 3.1, and no independent quality evidence.

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run.

### Inputs

- **Text.** Pro: "Supports up to 1024 utf-8 characters" ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md));
  Rapid: "Supports up to 200 utf-8 characters" ([Rapid API](../../sources/tencentcloud.com/tencent-hy-3d-rapid-api/2026-10-26.md));
  fal and Replicate mirror both limits exactly ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md),
  [Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md)).
- **Image.** One image, base64 or URL: "unilateral resolution requirement, not less than 128 and not greater
  than 5000", ≤8 MB by URL (≤6 MB base64), `jpg/png/jpeg/webp`, with a vendor recommendation of "Simple
  background… No text or blended colors… Single object… The object occupies over 50% of the frame"
  ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)).
- **Text *or* image, never both.** "Prompt and ImageBase64/ImageUrl cannot coexist" — except in the `Sketch`
  mode that 3.1 removes, where both may be sent together
  ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)).
- **Multi-view, 3.1 only for four of the seven angles.** `left`, `right`, `back` exist in both versions;
  `top`, `bottom`, `left_front`, `right_front` are "only supported in Model 3.1"; one image per view, encoded
  total ≤8 MB ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)). fal exposes all
  seven as optional URL fields and repeats the "v3.1 exclusive" note
  ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)). Replicate exposes none.
- **Seed.** Not a documented input anywhere on the vendor API; fal's Pro output echoes a `seed` but its Pro
  input schema has no seed field, so reproducibility is not offered
  ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)).
- **Prompt guidance (vendor).** `{quantifier, recommend 1} + {subject}, {optional detail}, {optional style}`,
  single subject, and "There is no need to include frequently used prompt skills like negative prompt or 4k"
  ([product pages](../../sources/tencentcloud.com/tencent-hy-3d-product/2026-10-26.md)).

### Output formats

| Route | Formats |
| --- | --- |
| Tencent Pro | "生成模型文件组默认返回obj、glb格式" (default file set OBJ + GLB; GLB only under `Geometry`), with `ResultFormat` limited to one of STL, USDZ, FBX — **from the Tencent Cloud SDK, not from the international reference page, which omits `ResultFormat` entirely** ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)) |
| Tencent Rapid | "valid values: OBJ, GLB, STL, USDZ, FBX, MP4, GIF", with a warning that USDZ/MP4/GIF "may timeout" ([Rapid API](../../sources/tencentcloud.com/tencent-hy-3d-rapid-api/2026-10-26.md)) |
| fal Pro | `model_glb` plus a `model_urls` object with nullable `glb`, `obj`, `fbx`, `usdz`, `mtl` and a `texture` PNG ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)) |
| fal Rapid | `model_obj` / `model_glb` + `model_urls` + `material_mtl` + `texture` |
| Replicate | a single file URI, format undocumented ([Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md)) |

No route documents up-axis, unit scale, or UV layout.

### Topology and polycount

- **Generation types.** `Normal` (textured), `LowPoly` (textured, "after intelligent polygon reduction"),
  `Geometry` (untextured white model), `Sketch` (line drawing in). 3.1 supports only `Normal` and `Geometry`
  ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)); both hosts mirror that in
  their enums, with fal stating it outright: "LowPoly/Sketch are not available in v3.1"
  ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md),
  [Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md)).
- **Polygon budget.** `FaceCount` default 500,000. Vendor: "value range: 3000-1500000"
  ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)). Both hosts: "Range:
  40,000-1,500,000" ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md),
  [Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md)). **The lower bound disagrees by more
  than an order of magnitude and no captured source explains why.**
- **Quad topology.** Only reachable through `LowPoly` (`PolygonType: quadrilateral`), which 3.1 does not
  support, or through the separate Smart Topology API, which takes an existing GLB/OBJ (≤200 MB) and a
  `face_level` of `high`/`medium`/`low` plus `polygon_type` of `triangle`/`quadrilateral`
  ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md),
  [fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)). Retopology of 3.1 output therefore costs a
  second call.
- **Remeshing is a separate billed call on every route**: Smart Topology 50 credits / $0.75 per generation
  ([billing](../../sources/tencentcloud.com/tencent-hy-3d-billing/2026-10-26.md),
  [fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)).

### Textures and PBR

- `EnablePBR` is **off by default** on every route, and adds "metallic, roughness, and normal textures"
  ([billing](../../sources/tencentcloud.com/tencent-hy-3d-billing/2026-10-26.md),
  [fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)). With PBR off, only a base-colour texture is
  documented; the metallic/roughness/normal set is described as the add-on. No source quantifies texture
  resolution for generation output.
- `Geometry` mode ignores `EnablePBR` and returns GLB only ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)).
- The related Texture Edit API takes an existing model plus a prompt or reference image and can emit
  "square textures only, 720–4096 px, default 4096" (`TextureSize` in the SDK's texture-job definition, quoted in
  the [Pro API record](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)). That is the only
  texture-resolution figure anywhere in the corpus, and it is for texture *editing*, not for fresh generation.
- Vendor marketing claims "physical based rendering (PBR) textures and texture style selection, with one-click
  switching between realistic and cartoon styles" — **no API parameter exposes a style switch**
  ([product pages](../../sources/tencentcloud.com/tencent-hy-3d-product/2026-10-26.md)). Marketing, not
  capability.

### Rigging

**Hunyuan3D 3.1 does not rig.** The generation response is geometry plus texture; there is no skeleton, rig,
or animation field on any route. Rigging exists in the same product family as a separate, later API:

- `SubmitAutoRiggingJob` / `DescribeAutoRiggingJob`, added 2026-05-08 — "Input a character or animal 3D model
  for rigging and skinning, and output a 3D model with skeletal information", 10 credits per call
  ([billing](../../sources/tencentcloud.com/tencent-hy-3d-billing/2026-10-26.md),
  [API history](../../sources/tencentcloud.com/tencent-hy-3d-api-history/2026-10-26.md)).
- Neither fal nor Replicate exposes rigging ([fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md),
  [Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md)).
- Animation is a different model entirely — [Hunyuan Motion](hunyuan-motion.md) emits FBX/JSON motion on a
  fixed humanoid skeleton, not a rig for this mesh.

Whether the Auto Rigging API accepts 3.1 output, and what skeleton it produces, is not documented in anything
captured.

### Post-processing family (same product, separately billed)

| API | Function | Credits / call |
| --- | --- | --- |
| 3D Part Generation | "automatically identify the model structure and generate corresponding 3D components"; fal's Part endpoint accepts **FBX only**, ≤100 MB, ≤30,000 faces | 30 |
| Smart Topology | intelligent retopology of a GLB/OBJ | 50 |
| 3D Texture Edit | re-texture an existing model from a prompt or image | 30 |
| UV Unfold | "high-quality UV tangent model" | 10 |
| Auto Rigging | rig + skin a character/animal model | 10 |
| Convert 3D Format | convert between model formats | 5 |

Source: [billing](../../sources/tencentcloud.com/tencent-hy-3d-billing/2026-10-26.md),
[fal schemas](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md).

### Service mechanics

- Asynchronous jobs: submit returns a `JobId` "valid period: 24 hours"; query returns
  `WAIT`/`RUN`/`FAIL`/`DONE` and `ResultFile3Ds` ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)).
- Concurrency: 3 tasks on Pro, 1 on Rapid/Express; 20 requests/second per API; extra concurrency is sold at
  "5,000 USD/concurrency/month" ([billing](../../sources/tencentcloud.com/tencent-hy-3d-billing/2026-10-26.md)).
- Moderation on by default: "performs text content moderation and image content moderation by default on input
  content to block non-compliant content"; the customer carries the deep-synthesis labelling duty
  ([product pages](../../sources/tencentcloud.com/tencent-hy-3d-product/2026-10-26.md)).
- Failed calls are free: "no deduction for any failure, including failures caused by risk control policy"
  ([billing](../../sources/tencentcloud.com/tencent-hy-3d-billing/2026-10-26.md)).

## Limitations and constraints

- **No weights, no self-hosting.** "Is Private Deployment Method Supported? Not supported"; no 3.x repository
  or checkpoint exists in Tencent's GitHub org, Hugging Face org or ModelScope
  ([product pages](../../sources/tencentcloud.com/tencent-hy-3d-product/2026-10-26.md),
  [weights check](../../sources/github.com/tencent-hunyuan-3d-repos/2026-10-26.md)). Everything is a metered
  cloud call.
- **3.1 loses two modes.** `LowPoly` (and with it `PolygonType: quadrilateral` inside generation) and `Sketch`
  are unavailable in 3.1 ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md)). A
  low-poly asset therefore needs 3.0 or a separate Smart Topology pass.
- **3.1 is not the default.** Tencent's documented default is `Model=3.0`; on fal the version is in the path,
  but the Rapid tier has no version control at all
  ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md),
  [Rapid API](../../sources/tencentcloud.com/tencent-hy-3d-rapid-api/2026-10-26.md)).
- **Polygon floor contradiction.** Vendor documents 3,000 minimum; both hosts enforce 40,000. If the vendor
  figure is real, both hosts block a documented capability; if the hosts are right, the vendor page is stale.
- **No rigging, no animation, no scene, no camera.** Single object per call; multi-view input improves
  coverage but there is no multi-object or scene input.
- **No seed on the vendor API**, and no seed input on fal's Pro endpoints — generation is not reproducible by
  parameter.
- **Prompt language is contradictory.** The Tencent Cloud SDK documentation for the same API calls `Prompt` a
  "中文正向提示词" (Chinese positive prompt), while the English prompt guide's examples are all English
  ("A deep brown, big-eyed owl") ([Pro API](../../sources/tencentcloud.com/tencent-hy-3d-pro-api/2026-10-26.md),
  [product pages](../../sources/tencentcloud.com/tencent-hy-3d-product/2026-10-26.md)). English prompting evidently
  works in practice for the English-language docs to be written that way; how well it performs against Chinese
  is unmeasured.
- **Host gaps.** Replicate publishes no output format and a literally `unspecified_billing_metric` price; fal's
  `face_count` floor differs from the vendor's; fal's 3.0 endpoint descriptions are cross-wired (the
  text-to-3d entry advertises sketches and vice versa)
  ([Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md),
  [fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md)).
- **No independent quality evidence at all.** No benchmark, arena, or third-party measurement of 3.0 or 3.1 was
  found. Every quality statement on this page is vendor or host marketing.
- **Licensing is a service contract, not a weights licence.** See below.

## Access, pricing, licensing

### Tencent Cloud (first-party, credit-metered)

| Call | Credits | Postpaid USD (0.02/credit) | Best prepaid USD (0.0135/credit) |
| --- | --- | --- | --- |
| Pro `Normal` (text or image → textured model) | 25 | 0.50 | 0.3375 |
| Pro `Geometry` (white model) | 15 | 0.30 | 0.2025 |
| Pro `LowPoly` (3.0 only) | 30 | 0.60 | 0.405 |
| Pro + `EnablePBR` | +10 | +0.20 | +0.135 |
| Pro + multi-view images | +10 | +0.20 | +0.135 |
| Pro + custom `FaceCount` | +10 | +0.20 | +0.135 |
| Rapid / Express | 15 | 0.30 | 0.2025 |
| Rapid + `EnablePBR` | +10 | +0.20 | +0.135 |

Prepaid tiers: 1,000 credits $15, 10,000 $145, 50,000 $700, 100,000 $1,350; postpaid $0.02/credit with daily
settlement; 200 free credits on first activation, valid one year. Model version does not affect the price:
"Selecting version 3.0 or 3.1 … will not consume extra credits." Concurrency add-ons cost $5,000 per
concurrency per month. Source: [billing](../../sources/tencentcloud.com/tencent-hy-3d-billing/2026-10-26.md).
The USD-per-call column is arithmetic on Tencent's credit schedule, not a published price.

### fal (per generation, surcharges itemised)

| Endpoint | Base | Surcharges |
| --- | --- | --- |
| Pro text-to-3D, Pro image-to-3D | $0.375 | PBR +$0.15, multi-view +$0.15, custom face count +$0.15 |
| Rapid text-to-3D, Rapid image-to-3D | $0.225 | PBR +$0.15 |
| Smart Topology | $0.75 | — |
| Part | $0.45 | — |

Source: [fal](../../sources/fal.ai/hunyuan-3d-3-1/2026-10-26.md). fal's Pro base ($0.375) is cheaper than
Tencent's own postpaid Pro base ($0.50) but dearer than Tencent's best prepaid rate ($0.3375); with PBR and a
custom face count fal lands at $0.675 against Tencent's $0.90 postpaid. That comparison is arithmetic across
two different billing models and says nothing about which route serves the same checkpoint.

### Replicate

"$0.50" per unit, "or 20 units for $10" — a flat per-call price whose billing metric Replicate itself labels
`unspecified_billing_metric`, and which does not say whether PBR or a custom face count is surcharged
([Replicate](../../sources/replicate.com/hunyuan-3d-3-1/2026-10-26.md)). 142,541 runs were recorded at capture.

### Weights licence

**There is no weights licence, because there are no weights.** Hunyuan3D 2.1 (2025-06-13) is the newest open
release in the family, so 2.1's own licence is the one that would govern self-hosting — it was not captured for
this page. 3.0 and 3.1 are closed API services governed by Tencent Cloud's service agreement and privacy
module, with private deployment explicitly unsupported
([weights check](../../sources/github.com/tencent-hunyuan-3d-repos/2026-10-26.md),
[product pages](../../sources/tencentcloud.com/tencent-hy-3d-product/2026-10-26.md)). fal's
`license_type: "commercial"` is fal's statement about use *through fal*, not a Tencent grant. Output ownership
and commercial-use terms for the hosted routes were not captured on any of these pages.

## Unresolved questions

1. **What does 3.1 actually change?** No first-party page describes it beyond which parameters it disables and
   which view angles it enables. There is no model card, no tech report, no benchmark. Any "better geometry"
   statement in circulation is host copy.
2. **Is fal's Rapid tier running 3.1 at all?** The Rapid API has no `Model` parameter, and fal's Rapid
   endpoints sit under a `v3.1` path without any statement of what version they call. A path segment is not
   evidence.
3. **Why do both hosts floor `face_count` at 40,000 when Tencent documents 3,000?** Neither host explains it;
   no source says whether the vendor's 3,000–40,000 band works through the API.
4. **Does `ResultFormat` exist on the Pro API?** The Tencent Cloud SDK for this product defines it
   (STL/USDZ/FBX); the international reference page, last updated 2026-05-27, does not list it. fal always
   returns a `model_urls` set that nominally includes FBX and USDZ, but its examples never populate them.
5. **What does Replicate return?** One URI, format unstated.
6. **Does Replicate surcharge PBR or a custom face count?** Its price block is a single flat $0.50 with an
   "unspecified" metric.
7. **Is English prompting first-class?** Vendor Chinese docs say "Chinese positive prompt"; the English prompt
   guide is written and exemplified in English.
8. **Can the Auto Rigging API consume 3.1 output, and what skeleton does it emit?** Not documented anywhere
   captured.
9. **Where is the Chinese product documentation?** `cloud.tencent.com/document/product/1804` is behind a
   JavaScript bot challenge and returned only a challenge script on 2026-10-26; any Chinese-language
   announcement or version description is uncaptured.
10. **Do fal and Replicate serve the same checkpoint as Tencent?** No host names a checkpoint, and the
    surcharge structures differ, which is consistent with either the same model or different wrappers.

## Evidence status

**Evidence floor: met.** First-party: five Tencent Cloud (international) documentation records — the Pro and
Rapid API references, the billing/credit schedule, the API changelog and API category, and the product/marketing
pages — plus a machine-readable weights-availability check across Tencent's GitHub org, Hugging Face and
ModelScope. Independent hosts: fal (catalogue metadata, six endpoint schemas and price strings, plus the 3.0
siblings) and Replicate (model page, Cog schema, price, run count).

**No direct tests were run for this page.** Nothing here is a measurement by this knowledge base. Every
capability statement is vendor or host documentation; every price is a published string or arithmetic on one;
every quality statement is marketing. The single most load-bearing gap is that **3.1 has no first-party
description of its own** — the version exists in the documentation only as an enumerated value, and the two
tiers that carry it are not equally documented.

The next useful evidence would be: one prompt and one image run through Tencent Pro with `Model=3.0` and
`Model=3.1` and the outputs compared in a DCC tool (vertex/triangle counts, UV layout, texture set, silhouette
fidelity); the same input through fal Pro and Replicate to see whether outputs match byte-for-byte or merely in
kind; a `face_count` sweep at 3,000, 40,000 and 500,000 to settle the floor contradiction; an Auto Rigging run
on a 3.1 output to identify the skeleton; and an English-versus-Chinese prompt pair on the same subject.

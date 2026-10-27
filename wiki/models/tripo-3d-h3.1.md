# Tripo H3.1

Tripo's current flagship text/image/multiview-to-3D model, served by Tripo's own API under the snapshot ID
`v3.1-20260211` and by fal as three proxied endpoints under `tripo3d/h3.1/*`. It produces a mesh with
optional PBR material maps, up to 2,000,000 faces, with a quad/FBX export path and a smart-low-poly path;
rigging and animation are separate Tripo products with their own model versions
([vendor model page](../../sources/tripo3d.ai/tripo-h3-1-model-page/2026-10-26.md)).

The model is inside the roster's one-year window, but **no first-party release date exists**. The snapshot
string `v3.1-20260211` is the only date evidence, and no changelog entry, announcement or blog post
mentions H3.1 at all ([changelog](../../sources/tripo3d.ai/tripo-api-changelog/2026-10-26.md)). Its
predecessor **H3.0 = `v3.0-20250812`** is *outside* the window on the same reading and is still served as a
backward-compatibility option ([models and versions](../../sources/tripo3d.ai/tripo-models-and-versions/2026-10-26.md)).

## Identity

- **Canonical name:** Tripo H3.1. The vendor's page title is "Tripo H3.1", and the H3.1/H3.0 mapping is
  spelled out only in the vendor's model registry — "`v3.1-20260211` | H3.1, latest high-precision model
  (default)" ([models and versions](../../sources/tripo3d.ai/tripo-models-and-versions/2026-10-26.md)).
- **Model ID:** `v3.1-20260211`, described on the model page as "Default" and as "Current stable release"
  ([model page](../../sources/tripo3d.ai/tripo-h3-1-model-page/2026-10-26.md)). It is the documented default
  for `POST /v3/generation/text-to-model`, `/image-to-model` and `/multiview-to-model`.
- **Aliases in use:** "Tripo H3.1" (page title, fal display names); "Tripo v3.1" (body text on the same
  page: "Tripo v3.1 is our newest flagship model"); `v3.1-20260211` (API value); `H31TextTo3dInput` /
  `H31ImageTo3dInput` / `H31MultiviewTo3dInput` (fal schema class names); roster label "Tripo 3D H3.1".
- **Vendor:** Tripo, the trading name of **Holymolly Ltd**, Hong Kong, contracting under Hong Kong law with
  HKIAC arbitration ([terms](../../sources/tripo3d.ai/tripo-terms-of-service/2026-10-26.md)). API base URL
  `https://openapi.tripo3d.ai/v3`.
- **Host endpoints:**

| Host | Endpoint | Input | Notes |
| --- | --- | --- | --- |
| Tripo | `POST /v3/generation/text-to-model` | text | vendor default is `v3.1-20260211` |
| Tripo | `POST /v3/generation/image-to-model` | one image | as above |
| Tripo | `POST /v3/generation/multiview-to-model` | 2–4 images | front required |
| fal | `tripo3d/h3.1/text-to-3d` | text | proxied, `date` 2026-04-07 |
| fal | `tripo3d/h3.1/image-to-3d` | one image | proxied |
| fal | `tripo3d/h3.1/multiview-to-3d` | 2–4 images | proxied |
| fal | `fal-ai/tripo3d/rig`, `fal-ai/tripo3d/rig-check` | any GLB/FBX/OBJ/STL | separate rigging product, older rig snapshots only |

Sources: [text](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md),
[image](../../sources/tripo3d.ai/tripo-image-to-model-api/2026-10-26.md),
[multiview](../../sources/tripo3d.ai/tripo-multiview-to-model-api/2026-10-26.md),
[fal H3.1](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md),
[fal rig](../../sources/fal.ai/tripo3d-rig/2026-10-26.md).

- **The roster's host string `tripo3d/h3.1` is a family prefix, not a callable endpoint.** Its queue
  OpenAPI at that exact `endpoint_id` returns HTTP 404, and the catalogue API returns a stub with no
  metadata; the three suffixed endpoints resolve normally
  ([fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)).
- **Release timeline:**

| Date | Event | Source |
| --- | --- | --- |
| 2025-08-12 | `v3.0-20250812` — **H3.0**, the predecessor; outside the one-year window. Date decoded from the snapshot string, not stated. | [registry](../../sources/tripo3d.ai/tripo-models-and-versions/2026-10-26.md) |
| **2026-02-11** | `v3.1-20260211` — **H3.1**; date decoded from the snapshot string, no announcement found | [model page](../../sources/tripo3d.ai/tripo-h3-1-model-page/2026-10-26.md) |
| 2026-04 | API v3.0 architecture ships (dedicated `/v3/generation/*` endpoints replace `/v2/openapi/task`) | [changelog](../../sources/tripo3d.ai/tripo-api-changelog/2026-10-26.md) |
| 2026-04-07 | fal publishes all three `tripo3d/h3.1/*` endpoints | [fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md) |
| 2026-08 | `P2-20260801` preview added as a separate low-poly/quad line | [changelog](../../sources/tripo3d.ai/tripo-api-changelog/2026-10-26.md) |
| 2026-09 | Texture model `v3.5-20260815` becomes selectable via `texture_version` | same |
| 2026-10 | Rigging model `v3.0-20260909` announced (separate product) | [changelog](../../sources/tripo3d.ai/tripo-api-changelog/2026-10-26.md) |
| 2026-10-13 | fal publishes `fal-ai/tripo3d/rig` ($0.30 per rig), unlisted in its gallery | [fal rig](../../sources/fal.ai/tripo3d-rig/2026-10-26.md) |
| 2026-10-20 | fal endpoints' last `updated_at` | [fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md) |

- **Siblings that are different models, not aliases:** H3.0 (`v3.0-20250812`), H2.5 (`v2.5-20250123`),
  the P-series (`P1-20260311`, `P2-20260801`) aimed at low-poly game assets, Tripo Texture
  (`v3.5-20260815` / `v3.0-20250812`), Tripo Rigging (`v1.0`/`v2.5`/`v3.0`), Tripo Animation
  (`retarget-v1.0`), TripoSplat (image → 3D Gaussians, open source), and TripoSR — the 2024 open-weights
  single-image model, which is a different model despite the name
  ([weights check](../../sources/huggingface.co/tripo-h3-1-weights-check/2026-10-26.md)).
- **Identity ambiguity, recorded rather than resolved:**
  - The date `2026-02-11` is a *decoded version string*, not a stated release date. It is the only date
    evidence, and the vendor's changelog has no H3.1 entry
    ([changelog](../../sources/tripo3d.ai/tripo-api-changelog/2026-10-26.md)).
  - Tripo uses "v3.0" for **two different things**: the API version ("v3.0 (2026-04)" in the changelog,
    introducing `/v3/` URLs) and the model snapshot `v3.0-20250812` (H3.0). The same page set writes
    "v3.x" for the geometry family and "v3.1" for the model.
  - The marketing site `www.tripo3d.ai` sits behind a Cloudflare challenge (HTTP 403 on every attempt), so
    no consumer-facing announcement, pricing page, or product copy for H3.1 was captured. Everything here
    is from `developers.tripo3d.ai`.

## Current assessment

**A real version increment, but a thinly documented one.** On first-party evidence H3.1 is a distinct
model, not a repackaging: it has its own snapshot ID, it is the default on all three generation endpoints,
and the vendor registry separates it from H3.0 by name and by recommended use ("AAA production pipelines /
3D printing" versus "Backward compatibility")
([models and versions](../../sources/tripo3d.ai/tripo-models-and-versions/2026-10-26.md)). The only
*documented, measurable* difference between H3.1 and H3.0 is the standard-mode triangle ceiling —
1,500,000 for v3.1 against 1,000,000 for v3.0; in `geometry_quality=detailed` ("Ultra") mode both reach
2,000,000 ([text-to-3D reference](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)).

Everything else that sounds like a difference is marketing. The model page claims "Best-in-class geometry
and PBR textures", "Quality — Highest", and "top-tier geometry"; no number, benchmark, harness or
comparison accompanies any of it
([model page](../../sources/tripo3d.ai/tripo-h3-1-model-page/2026-10-26.md)). Its own feature bullets — quad
mesh output, smart low-poly — are *not* H3.1-exclusive: the reference scopes those parameters to
"`model ≥ v3.0-20250812`"
([text-to-3D reference](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)). The claimed
speeds (~40 s without texture, ~120 s with) are unsourced and unqualified.

**Status: current and default, with H3.0 retained and not deprecated.** Nothing in the changelog announces
a retirement of H3.0 or H2.5, and the registry keeps all three selectable. The H-line has, however, been
partly superseded *for its own low-poly use case* by the P-series, which the vendor now recommends for
"game characters and props … real-time production pipelines" — and the P-series is priced an order of
magnitude higher ($1.00–$1.30 per model on fal) than H3.1
([fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)).

**Practical position.** H3.1's strength in this knowledge base is that its parameter surface is unusually
completely specified for a 3D generator: four input routes, an explicit per-version polycount table, four
texture tiers, independent geometry and texture seeds, quad/FBX, smart low-poly, part segmentation, UV
control, real-world scaling, and meshopt compression — all documented with defaults and error codes
([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md),
[image-to-3D](../../sources/tripo3d.ai/tripo-image-to-model-api/2026-10-26.md),
[multiview](../../sources/tripo3d.ai/tripo-multiview-to-model-api/2026-10-26.md)). Its weaknesses are
equally concrete: no weights, no rig, no animation, no independent quality evidence anywhere, and a host
(fal) that exposes a strict subset of the vendor surface.

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run.

### Inputs

- **Text.** "Text prompt, up to 1024 characters"; `negative_prompt` "up to 255 characters"
  ([text-to-3D reference](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)). Vendor prompt
  guidance is concrete: "A low-poly medieval wooden treasure chest with iron hinges and a rusty lock" is
  good, "A box." is bad, and material/style hints are recommended "for better PBR results".
- **Image.** Exactly one image, as a Tripo `file_token`, a public URL, or the `task_id` of a previous Tripo
  image-generation task; "Supported formats: `PNG`, `JPEG`, `WebP`", "Max file size: **20 MB**",
  "Recommended resolution: at least **256 × 256 px**"
  ([image-to-3D reference](../../sources/tripo3d.ai/tripo-image-to-model-api/2026-10-26.md)).
- **Multiview.** "at least 2 images are required", "The front view **cannot be omitted**", fixed slots
  front/left/back/right, "All images should depict the same object under consistent lighting"
  ([multiview reference](../../sources/tripo3d.ai/tripo-multiview-to-model-api/2026-10-26.md)). There is no
  top, bottom, or oblique slot — unlike [Hunyuan3D 3.1](hunyuan3d-3.1.md), which added four extra angles.
- **Seeds.** Three independent seeds: `model_seed` for geometry, `image_seed` for the internal
  text-to-image stage of the text route, `texture_seed` for texturing. "Using the same seed with the same
  input will produce an identical 3D mesh", and holding `model_seed` while varying `texture_seed` is the
  documented way to re-texture the same geometry
  ([text-to-3D reference](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)).
- **Autofix (image route only).** `enable_image_autofix` (default false) "will enhance low-resolution or
  low-quality images to improve 3D generation results"
  ([image-to-3D reference](../../sources/tripo3d.ai/tripo-image-to-model-api/2026-10-26.md)).

### Output formats

| Route | Formats |
| --- | --- |
| Tripo generation | **GLB** (`model_url` example is `model_pbr.glb`) or **FBX** — "Enabling `quad` will force the output format to `FBX`"; plus a `rendered_image_url` PNG preview ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)) |
| Tripo `/v3/models/convert` | `GLTF`, `FBX`, `USDZ`, `OBJ`, `STL`, `3MF`; input `GLB`/`GLTF`/`FBX`/`OBJ`/`STL`, ≤150 MB ([convert](../../sources/tripo3d.ai/tripo-model-convert-api/2026-10-26.md)) |
| fal | `model_mesh` ("May be GLB or FBX") plus `model_urls` with nullable `glb`, `fbx`, `base_model` ("Base (untextured) model"), `pbr_model` ("PBR-textured model"), plus `rendered_image` ([fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)) |

USDZ (Apple AR), OBJ, STL and 3MF are **not generation outputs on any route** — they require the separate,
billed conversion task, which fal does not expose for this model.

### Topology and polycount

- **Triangle by default; quad on request.** `quad: true` produces a four-sided mesh, forces FBX, and
  defaults to 10,000 faces when `face_limit` is omitted; the quad ceiling is 150,000
  ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)). fal mirrors this: "When
  Tripo emits FBX bytes for quad output, the returned model file is FBX"
  ([fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)).
- **Polycount caps, per version and mode** (verbatim table):

| Mode | Standard | Ultra (`geometry_quality=detailed`) |
| --- | --- | --- |
| Triangle — v3.1 | 1,500,000 | 2,000,000 |
| Triangle — v3.0 | 1,000,000 | 2,000,000 |
| Triangle — v2.5 | 500,000 | — |
| Quad (`quad: true`) | 150,000 | — |

  Vendor guidance for the target band: "Game-ready assets: 50,000 – 100,000. Web/mobile: 10,000 –
  50,000." Omitting `face_limit` gives "adaptive topology"
  ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)).
- **Smart low-poly.** `smart_low_poly` forces a fixed budget regardless of version: "Triangle 500 – 20,000,
  Quad 500 – 10,000", described as "hand-crafted, clean topology style. Best suited for simple, non-complex
  inputs. Complex models may occasionally fail."
- **Part generation.** `generate_parts` emits "editable segmented parts" but is **incompatible with
  texturing**: with `texture` or `pbr` true — including by default — "the request is rejected with error
  code `1004`". It also conflicts with `quad` (ignored) and `smart_low_poly` (wins over parts).
- **Retopology is a separate billed task.** `/v3/mesh/decimate` v3.0 costs 35 credits (triangle) or 40
  (quad), with `face_limit` 500–20,000 / 500–10,000
  ([changelog](../../sources/tripo3d.ai/tripo-api-changelog/2026-10-26.md)). fal hosts an equivalent as
  `tripo3d/tripo/remesh` ("clean quad topology at a target polygon count")
  ([fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)).

### Textures and PBR

- **PBR is on by default**, which is unusual among 3D APIs: `pbr: true` and `texture: true` are both
  defaults, and "When `pbr` is set to `true`, `texture` will be automatically forced to `true`"
  ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)).
- **Named channels:** "`base_color`, `metallic`, `roughness`, `normal`" — four maps. No occlusion or
  emissive channel is documented anywhere captured.
- **Four texture tiers:** `fast` | `standard` (default) | `detailed` | `extreme`. "`extreme` — 8K textures,
  highest fidelity"; `fast` costs the same as `standard` and "Requires texture `v3.5-20260815`"
  ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md),
  [texture page](../../sources/tripo3d.ai/tripo-texture-model-page/2026-10-26.md)). No pixel dimensions are
  published for `standard`, `detailed` or `fast`.
- **Geometry and texture are separately versioned, and the default pairing is mismatched.** `texture_version`
  defaults to `v3.0-20250812` for any `v3.x` geometry — so a request that says only `model:
  v3.1-20260211` runs H3.1 geometry through the **older** texture model. The vendor's own parameter note
  describes `v3.0-20250812` as "default, for v3.0 / v3.1 models"; `v3.5-20260815` "must be set explicitly"
  ([texture page](../../sources/tripo3d.ai/tripo-texture-model-page/2026-10-26.md)).
- **Lighting removal.** `delight` (default `true`, v3.5 textures only) "Removes baked-in lighting from the
  reference image before texturing" — vendor guidance is to keep it on for game engines and turn it off
  for rendering/VFX ([texture page](../../sources/tripo3d.ai/tripo-texture-model-page/2026-10-26.md)).
- **UV and scale controls.** `export_uv` (default true; set false "for faster generation and smaller
  file size"), `auto_size` (real-world metres, default false), `compress: geometry` (meshopt)
  ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)).
- **Texture resolution is only settable on the conversion path:** `texture_size` default 4096 px,
  `texture_format` default JPEG ([convert](../../sources/tripo3d.ai/tripo-model-convert-api/2026-10-26.md)).

### Rigging and animation

**H3.1 does not rig and does not animate.** The generation response is geometry plus texture maps; there is
no skeleton, weight, or animation field on any route
([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md),
[fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)). Both exist in the same product family as separate,
separately billed tasks on separate model versions:

- **Auto Rig** — `POST /v3/animations/rig`, 25 credits. Input "GLB/FBX/OBJ/STL", output "Rigged GLB/FBX".
  Seven rig types (biped, quadruped, hexapod, octopod, avian, serpentine, aquatic, plus `others` on v3.0),
  Tripo or Mixamo bone naming, with v3.0 adding ActorCore/Unity/Unreal/VRM specs
  ([rig page](../../sources/tripo3d.ai/tripo-rigging-model-page/2026-10-26.md)).
- **Rig Check** — `POST /v3/animations/rig-check`, **free**, returns `riggable` and a recommended
  `rig_type`; the vendor instructs running it before spending rig credits
  ([rig page](../../sources/tripo3d.ai/tripo-rigging-model-page/2026-10-26.md),
  [fal rig](../../sources/fal.ai/tripo3d-rig/2026-10-26.md)).
- **Animation Retarget** — `POST /v3/animations/retarget`, 10 credits per animation (10 × count for a batch
  of up to 5), applies a preset library ("100+ preset animations (incl. 90+ biped-exclusive)") to an
  already-rigged model, with an `animate_in_place` option
  ([animation page](../../sources/tripo3d.ai/tripo-animation-model-page/2026-10-26.md)). It is a preset
  library, not text-to-motion.
- **fal exposes only the rig, not the animation.** `fal-ai/tripo3d/rig` exists ($0.30 per rig) but accepts
  only `model` values `v1.0-20240301` and `v2.5-20260210` — the vendor's current `v3.0-20260909` rig model
  is not offered — and there is no `fal-ai/tripo3d/animate` or `/retarget` endpoint
  ([fal rig](../../sources/fal.ai/tripo3d-rig/2026-10-26.md)).

No captured page states that H3.1 output was validated for rigging. Rig input is any GLB/FBX/OBJ/STL mesh,
so an H3.1 GLB is eligible by format; whether it rigs well is untested here.

### Service mechanics

- Asynchronous: create a task, then poll `GET /v3/tasks/{task_id}` or receive a webhook
  ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)).
- Concurrency: "3D Generation — H Series … 10 parallel tasks" per account, shared across all three
  endpoints; exceeding it returns HTTP 429 / code `2000`
  ([rate limits](../../sources/tripo3d.ai/tripo-rate-limits/2026-10-26.md)).
- Failed and cancelled tasks are free: "Frozen credits are returned to the available balance … Failed and
  cancelled tasks are not charged"
  ([billing](../../sources/tripo3d.ai/tripo-pricing/2026-10-26.md)).
- `credits_consumed`, `balance` and `frozen` are decimal JSON numbers, not integers — a documented parsing
  hazard ([changelog](../../sources/tripo3d.ai/tripo-api-changelog/2026-10-26.md)).

## Limitations and constraints

- **No weights, no self-hosting.** H3.1 is API-only. The only open weights in the Tripo lineage are TripoSR
  (2024, widely mirrored) and the unrelated VAST-AI TripoSG/TripoSF/TripoSplat releases; nothing named
  `tripo-h3`, `tripo3d` or `v3.1-*` exists on Hugging Face
  ([weights check](../../sources/huggingface.co/tripo-h3-1-weights-check/2026-10-26.md)).
- **No rig, no animation inside the model** — see above. A rigged, animated asset is three billed tasks.
- **No top/bottom coverage in multiview.** The view rig is front/left/back/right only, so the top of every
  object is inferred ([multiview](../../sources/tripo3d.ai/tripo-multiview-to-model-api/2026-10-26.md)).
- **Generation emits only GLB or FBX.** USDZ, OBJ, STL and 3MF need the conversion task, and fal does not
  offer conversion at all ([convert](../../sources/tripo3d.ai/tripo-model-convert-api/2026-10-26.md),
  [fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)).
- **The default texture model is the older one.** H3.1 geometry pairs with `v3.0-20250812` texturing unless
  `texture_version=v3.5-20260815` is set explicitly
  ([texture page](../../sources/tripo3d.ai/tripo-texture-model-page/2026-10-26.md)).
- **`generate_parts` cannot be combined with texturing**, and texturing is on by default — so a parts
  request must explicitly send `texture=false` and `pbr=false` or it fails with code `1004`
  ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)).
- **`export_orientation` breaks downstream tasks silently.** The vendor warns that post-processing a model
  exported with a non-default forward axis "may produce a wrongly-oriented result while the task still
  reports `status: success` — no error is raised"
  ([text-to-3D](../../sources/tripo3d.ai/tripo-text-to-model-api/2026-10-26.md)).
- **fal exposes a strict subset of the vendor surface.** Not available on fal: `smart_low_poly`,
  `generate_parts`, `texture_quality=extreme` (8K), `texture_version`, `delight`, `export_uv`,
  `export_orientation`, `compress`, `enable_image_autofix`, and format conversion. fal's
  `texture_quality` enum is only `standard` | `detailed`
  ([fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)).
- **Two fal/vendor parameter disagreements, unresolved.** `negative_prompt` is capped at 1024 characters in
  fal's schema against 255 in the vendor reference; and fal accepts `face_limit` up to 2,000,000 without
  requiring `geometry_quality=detailed`, which the vendor's table ties to the 2,000,000 ceiling. fal also
  enforces a `face_limit` **minimum of 1000** that the vendor reference never states.
- **No independent quality evidence at all.** No benchmark, arena, leaderboard, or third-party measurement
  of H3.1 (or H3.0) was found. Every quality statement on this page is vendor or host copy.
- **No free tier is documented**, and purchased credits are "prepaid and non-refundable"
  ([terms](../../sources/tripo3d.ai/tripo-terms-of-service/2026-10-26.md)).
- **Licensing is a service contract, not a weights licence** — see below.

## Access, pricing, licensing

### Tripo direct (credit-metered, 1 credit = $0.01)

| Call | Credits | USD |
| --- | --- | --- |
| Text → 3D, no texture | 10 | $0.10 |
| Text → 3D, standard texture | 20 | $0.20 |
| Text → 3D, detailed (HD) texture | 30 | $0.30 |
| Text → 3D, 8K texture | 40 | $0.40 |
| Image → 3D, no texture / standard / detailed / 8K | 20 / 30 / 40 / 50 | $0.20–$0.50 |
| Multiview → 3D, no texture / standard / detailed / 8K | 20 / 30 / 40 / 50 | $0.20–$0.50 |
| + `geometry_quality=detailed` | +20 | +$0.20 |
| + `quad` | +5 | +$0.05 |
| + `smart_low_poly` | +10 | +$0.10 |
| + `generate_parts` | +20 | +$0.20 |

Sources: [model page](../../sources/tripo3d.ai/tripo-h3-1-model-page/2026-10-26.md),
[pricing](../../sources/tripo3d.ai/tripo-pricing/2026-10-26.md). The vendor's own worked example is
consistent: "$50 ≈ 250 text-to-3D models with standard texture" (20 credits each). Adjacent operations:
Auto Rig 25, Animation Retarget 10 per animation, Rig Check free, Format Convert 5 (basic) or 10
(advanced), Smart UV 20, Retopology 30–40.

### fal (per generation)

| Endpoint | No texture | Standard | HD | Add-ons |
| --- | --- | --- | --- | --- |
| `tripo3d/h3.1/text-to-3d` | $0.10 | $0.20 | $0.30 | detailed geometry +$0.20, quad +$0.05 |
| `tripo3d/h3.1/image-to-3d` | $0.20 | $0.30 | $0.40 | as above |
| `tripo3d/h3.1/multiview-to-3d` | $0.20 | $0.30 | $0.40 | as above |
| `fal-ai/tripo3d/rig` | — | — | — | flat $0.30 per rig |

Source: [fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md),
[fal rig](../../sources/fal.ai/tripo3d-rig/2026-10-26.md). **fal's prices equal the vendor's credit
schedule exactly** at the tiers it exposes ($0.10/$0.20/$0.30 text; $0.20/$0.30/$0.40 image and multiview;
the same +$0.20 and +$0.05 add-ons). fal's rig at $0.30 is *above* Tripo's own 25-credit ($0.25) Auto Rig.
fal does not offer the 8K texture tier, so the $0.40/$0.50 vendor tops are unreachable there.

### Replicate

Not hosted. Replicate's 3D collection lists no Tripo model, the string "tripo" does not appear on that page,
and the plausible owner paths return 404
([negative record](../../sources/replicate.com/tripo-h3-1-not-listed/2026-10-26.md)). fal is the only
independent host found.

### Licence

**There is no weights licence, because no weights are published.** Use is governed by the Tripo Terms of
User Agreement (Holymolly Ltd, last updated 2025-07-11, Hong Kong law, HKIAC arbitration)
([terms](../../sources/tripo3d.ai/tripo-terms-of-service/2026-10-26.md)). The terms turn on paid versus
free, not on the model:

- **Paid users** "generally have all rights … of the Inputs and Outputs", including commercial use and
  derivative works, and Tripo states it "will not use Inputs and Outputs as training data to train,
  validate, test, or improve any AI Technology".
- **Free users** get the opposite: "Tripo retains all rights … to use, copy, reproduce, modify … and
  display the Inputs and Outputs submitted or generated by Free Users".
- **Two carve-outs:** outputs may not be used "to create models or services that directly compete with
  Holymolly and its models", and the service may not be made "available to any third party, including end
  users, without the prior written authorization and consent of Holymolly".
- **No exclusivity:** "Tripo does not provide any guarantee of exclusivity for Outputs generated through
  the Services."
- **No warranty** of any kind on outputs, and the liability cap is the greater of twelve months' fees or
  $500.

fal's `license_type: "commercial"` is fal's statement about use *through fal*, not a Tripo grant
([fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)).

## Unresolved questions

1. **When did H3.1 actually ship?** `2026-02-11` is decoded from `v3.1-20260211`. No announcement, blog
   post, changelog entry or press release exists in anything captured, and the marketing site is behind a
   Cloudflare challenge ([changelog](../../sources/tripo3d.ai/tripo-api-changelog/2026-10-26.md)).
2. **What does H3.1 change relative to H3.0?** The only documented delta is the standard-mode triangle cap
   (1.5M vs 1.0M). Every quality claim is unquantified marketing. A same-prompt A/B through
   `model=v3.0-20250812` and `model=v3.1-20260211` would settle it and has not been run.
3. **Which Tripo snapshot does fal's `tripo3d/h3.1/*` actually call?** The name and the `task_id`
   passthrough imply `v3.1-20260211`, but fal never states it
   ([fal](../../sources/fal.ai/tripo3d-h3-1/2026-10-26.md)).
4. **Why does H3.1 geometry default to the older `v3.0-20250812` texture model** rather than the newer
   `v3.5-20260815`? Deliberate stability choice or lag? Not explained
   ([texture page](../../sources/tripo3d.ai/tripo-texture-model-page/2026-10-26.md)).
5. **Is `negative_prompt` limited to 255 or 1024 characters?** The vendor reference says 255; fal's schema
   accepts 1024. One of them is stale.
6. **What is the real `face_limit` floor?** The vendor states only upper limits; fal enforces a 1000
   minimum. Whether 500–999 works on the vendor API is undocumented.
7. **What resolution are the standard/detailed textures?** Only the word "8K" for `extreme` and
   `texture_size` default 4096 on the conversion path give any pixel figure.
8. **Does an H3.1 mesh rig well?** No vendor page says it was validated; rig input accepts any
   GLB/FBX/OBJ/STL. An Auto Rig run on an H3.1 GLB would answer it.
9. **Is there China-site documentation with more detail?** `developers.tripo3d.com` is the vendor's stated
   China mirror and was not captured; `www.tripo3d.ai` returned 403 to every request.
10. **How does H3.1 compare with other 3D generators?** No independent measurement of H3.1 exists in this
    corpus — no benchmark, arena, or third-party review.

## Evidence status

**Evidence floor: met.** First-party: thirteen Tripo records covering the H3.1 model page, the model/version
registry, all three generation endpoint references, the format-conversion reference, the credit price list,
the changelog, the rate-limit reference, the terms of service, and the separate rigging, animation and
texture model pages. Independent host: fal (catalogue metadata for the H3.1 family and its P1/P2/2.5
predecessors, three endpoint schemas, published price strings, plus the rig and rig-check schemas). Negative
records: Replicate does not host the model; Hugging Face has no H3.1 weights.

**No direct tests were run for this page.** Nothing here is a measurement by this knowledge base. Every
capability statement is vendor or host documentation, every price is a published string, and every quality
statement is marketing. The two most load-bearing gaps are that **H3.1 has no first-party release
announcement of its own** — the version exists only as a snapshot string and a default value — and that
**no independent quality evidence of any kind exists** for it or for H3.0.

The next useful evidence would be: a same-prompt and same-image A/B between `v3.0-20250812` and
`v3.1-20260211` compared in a DCC tool (triangle count against `face_limit`, UV layout, texture-set
completeness, silhouette fidelity); the same input through fal `tripo3d/h3.1/*` to see whether outputs match
the vendor API byte-for-byte or merely in kind; a `texture_version` A/B (`v3.0-20250812` vs
`v3.5-20260815`) on identical geometry; a `negative_prompt` length probe to settle 255 versus 1024; and an
Auto Rig plus retarget run on an H3.1 GLB to see whether the mesh is practically riggable.

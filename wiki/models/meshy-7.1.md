# Meshy 7.1

Meshy's image-to-3D and text-to-3D generation model, announced 2026-09-10 as an upgrade to Meshy 7 and
selectable through the Meshy API as `ai_model: "meshy-7.1"` from 2026-09-18. Its one headline change is
a 4096³ geometry pass ("Ultra 4K") replacing Meshy 7's 2048³ pass, with raw meshes of up to 80 million
triangles before simplification
([launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md),
[changelog](../../sources/meshy.ai/api-changelog/2026-10-26.md)). Texturing, PBR maps, output formats,
credit price, and the API parameter surface are the same as Meshy 7's; the vendor describes 7.1 as
"same parameters and credit cost as `meshy-7`, higher geometry detail"
([changelog](../../sources/meshy.ai/api-changelog/2026-10-26.md)).

It is inside the roster's one-year window: 2026-09-10 is after 2025-10-26.

## Identity

- **Canonical name:** Meshy 7.1. The vendor's launch title is "Meshy 7.1: Attention to the Closest
  Detail" ([launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md)), the API value is
  `meshy-7.1`, and `latest` resolves to it
  ([deprecations](../../sources/meshy.ai/model-deprecations/2026-10-26.md)). The roster label matches
  first-party naming.
- **Vendor:** Meshy (Meshy LLC; the docs footer reads "© 2026 Meshy LLC"). No developer other than the
  vendor is named anywhere in the captured material.
- **Aliases and IDs:**

| Context | Identifier |
| --- | --- |
| Meshy API (`ai_model`) | `meshy-7.1`; `latest` resolves here |
| fal | `meshy/v7.1/text-to-3d`, `meshy/v7.1/image-to-3d`, `meshy/v7.1/multi-image-to-3d` |
| Meshy UI generation settings | Standard, Ultra 2K, Ultra 4K (`geometry_resolution` = `standard` / `2k` / `4k`) |
| Meshy 7 (predecessor) | `meshy-7`, deprecated 2026-09-18, "send `meshy-7.1` instead" |

Sources: [text-to-3D API](../../sources/meshy.ai/text-to-3d-api/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md).

- **Hosts:** Meshy's own API (`api.meshy.ai/openapi/…`) and fal. Replicate had no Meshy listing at
  capture (checked 2026-10-26). fal
  reports `hostingType: "proxy"`, i.e. it forwards to Meshy rather than running the weights
  ([fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md)).
- **Siblings:** Meshy 6 (active), Meshy 6 Lite (active), Meshy 7 (deprecated), and the separate
  Smart Topology line `meshy-t2` / `meshy-t2.5`. Retired: Meshy 5 (2026-10-10), Meshy 4 (2026-03-20),
  Meshy 3 (July 2025). The legacy `lowpoly` mesh type retires 2026-10-30
  ([deprecations](../../sources/meshy.ai/model-deprecations/2026-10-26.md)).

There is no identity ambiguity about the model itself: the roster label, the launch title, the API value
and the `latest` target all say the same thing. The one open identity question is narrower — whether the
7.1 texturing stage is the same model as Meshy 7's, which the documentation implies but does not state
(see Unresolved questions 2).

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-09-10 | Meshy 7.1 announced; "rolls out gradually in the Meshy workspace" | [launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md) |
| 2026-09-18 | Added as `ai_model` on Image to 3D, Multi-Image to 3D, Text to 3D; `latest` repointed; `geometry_resolution` replaces `ultra_mode`; `meshy-7` deprecated | [changelog](../../sources/meshy.ai/api-changelog/2026-10-26.md) |
| 2026-09-19 | fal `date` for the three 7.1 endpoints | [fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md) |
| 2026-09-21 | fal publishes the three endpoints (`publishedAt`); Meshy publishes its texture-alignment post, which calls 7.1 "released" and uses 7.1 Ultra 4K meshes in examples | [fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md), [texture benchmark](../../sources/meshy.ai/texture-alignment-benchmark/2026-10-26.md) |
| 2026-10-26 | Still `Active`, still the `latest` target | [deprecations](../../sources/meshy.ai/model-deprecations/2026-10-26.md) |

The eight-day gap between the announcement and API availability is a web-app-first rollout: the launch
post gates Ultra 2K/4K and downloads of 7.1 output behind a subscription, and says the rollout "will
reach all users soon after" without giving a completion date
([launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md)).

### Meshy 6 vs Meshy 7 vs Meshy 7.1

| | Meshy 6 | Meshy 7 | Meshy 7.1 |
| --- | --- | --- | --- |
| Announced | 2026-01-18 | 2026-08-12 | 2026-09-10 |
| API availability | Meshy 6 Preview behind `latest` from 2025-09-23; `latest` resolves to Meshy 6 from 2026-01-19 | 2026-08-12 (image/multi/retexture), 2026-08-13 (text) | 2026-09-18 |
| Stated target | "higher-quality geometry, better structural consistency", Low Poly Mode, multi-colour printing | geometry **alignment** to the input image | geometric **detail** / surface richness |
| Max geometry resolution | standard only | `2k` (2048³) | `2k` and `4k` (4096³) |
| Emission map with PBR | yes (except at 8K) | no | no |
| `remove_lighting` honoured | yes | no (accepted and ignored) | no (accepted and ignored) |
| Credits (mesh + 2K texture) | 30 | 30 | 30 |
| Status at capture | Active | Deprecated 2026-09-18, no retirement date | Active, `latest` |

Sources: [Meshy 6 launch](../../sources/meshy.ai/meshy-6-launch/2026-10-26.md),
[Meshy 7 launch](../../sources/meshy.ai/meshy-7-launch-geometry-alignment/2026-10-26.md),
[Meshy 7.1 launch](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md),
[text-to-3D API](../../sources/meshy.ai/text-to-3d-api/2026-10-26.md),
[changelog](../../sources/meshy.ai/api-changelog/2026-10-26.md).

The three are consecutive checkpoints of one product line, not separate model families: same endpoints,
same credit price, same parameter names, and the older two stay addressable. They are described on this
page as siblings rather than merged because the geometry ceiling changes what a user can obtain, and
because Meshy 6 retains two capabilities (emission map, `remove_lighting`) that neither 7 nor 7.1 has.

## Current assessment

The evidence supports a narrow, specific claim: **Meshy 7.1 is a geometry-resolution upgrade to Meshy 7,
sold at the same price, and its differentiator is available on single-view inputs only.** Everything
else in the documented capability set — text and image inputs, 2K/4K/8K base-colour textures, PBR
maps, remesh/polycount controls, output formats, rigging and animation as separate endpoints — is shared
with the earlier models or with the Smart Topology line
([text-to-3D API](../../sources/meshy.ai/text-to-3d-api/2026-10-26.md),
[image-to-3D API](../../sources/meshy.ai/image-to-3d-api/2026-10-26.md),
[api pricing](../../sources/meshy.ai/api-pricing/2026-10-26.md)).

It is current, not preview or deprecated: `Active` in the deprecation table, the `latest` alias target,
and the model the vendor's own benchmarks now feature
([deprecations](../../sources/meshy.ai/model-deprecations/2026-10-26.md),
[texture benchmark](../../sources/meshy.ai/texture-alignment-benchmark/2026-10-26.md)).

What the evidence does **not** support is a quality verdict. The only quantitative material is the
vendor's own Detail Richness benchmark, introduced in the same post that reports the result, with the
vendor running every competitor at what it judged their "maximum quality settings"
([launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md)). No independent measurement of
Meshy 7.1 was captured, and no independent comparison with Tripo, Hunyuan3D, Rodin or Hi3D exists in
this corpus. The vendor's earlier Meshy 7 post is, notably, less absolute: on four-view inputs it
reports Tripo 3.1 and Hi3D 2.1 ahead of Meshy 7 on overall proportion and surface details, and only
claims the top score on spatial distribution
([Meshy 7 launch](../../sources/meshy.ai/meshy-7-launch-geometry-alignment/2026-10-26.md)). Both of
those facts are worth holding together: a vendor that publishes its own losses in one benchmark and a
sweeping first place in the next is reporting two different metrics, not contradicting itself, but the
weaker result is the better-calibrated evidence about competitive standing.

## Documented capabilities

All of the following is vendor or host documentation. **No direct tests were run for this page.**

### Inputs

- **Text to 3D.** Two-step: a `preview` task generates untextured geometry, then a `refine` task
  textures the successful preview's task ID. "Both steps use the same endpoint"
  ([text-to-3D API](../../sources/meshy.ai/text-to-3d-api/2026-10-26.md)). Prompt limit 800 characters;
  longer returns 400.
- **Image to 3D.** One request. `image_url` as a public URL or base64 data URI; "JPG, JPEG, PNG, or
  WebP file of at most 20 MB". Can also consume the output of a Meshy Text to Image or Image to Image
  task via `input_task_id` ([image-to-3D API](../../sources/meshy.ai/image-to-3d-api/2026-10-26.md)).
- **Multi-image to 3D.** One to four views of the same object, ≤20 MB each; "With `meshy-7.1` or
  `latest`, Meshy uses the first image as the front view". Separate `texture_image_urls` accepts one to
  four texture-only references ([multi-image API](../../sources/meshy.ai/multi-image-to-3d-api/2026-10-26.md)).
- **Texturing guidance.** `texture_prompt` (≤800 characters) or `texture_image_url` (≤20 MB), not both.
- **Pose.** `pose_mode` = `a-pose`, `t-pose`, or empty for no specific pose.

### Output formats

`glb`, `obj` (with `.mtl`), `fbx`, `stl`, `usdz`, `3mf`, selectable per request via `target_formats`;
by default "Meshy generates every format except `3mf`"
([text-to-3D API](../../sources/meshy.ai/text-to-3d-api/2026-10-26.md)). fal additionally returns
`blend` and `stl` and does not expose a format choice
([fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md)). USDZ files switched from
declaring feet to metres on 2026-10-12; before the fix the unit mismatch meant "the model showed at
30.48% of its size" ([changelog](../../sources/meshy.ai/api-changelog/2026-10-26.md)).

### Geometry and topology

- **Three geometry passes:** `standard`, `2k` ("runs the Ultra pass at 2048³"), `4k` ("runs the Ultra
  pass at 4096³"). "`2k` needs `meshy-7.1`, `latest`, or the deprecated `meshy-7`. `4k` needs
  `meshy-7.1` or `latest`" ([text-to-3D API](../../sources/meshy.ai/text-to-3d-api/2026-10-26.md)).
- **Mesh types:** `standard` ("a high-detail 3D mesh"), `smart-topology` (T2 / T2.5, triangle-only,
  natively separated parts, face count set directly), and `lowpoly` (deprecated, retires 2026-10-30).
- **Remesh:** optional post-generation decimation. `should_remesh` defaults to false for every standard
  model except 6 Lite; "For the highest-quality 3D model, send false." `target_polycount` range
  100–300,000 with a default of 30,000, or by level via `decimation_mode` (ultra/high/medium/low);
  `topology` = `triangle` or `quad` (quad-dominant).
- **Raw mesh size:** an unsimplified Ultra 4K mesh "can contain as many as 80 million triangles"
  ([launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md)).

### Textures and PBR

- Base colour at `2k` (2048×2048), `4k` (4096×4096) or `8k` (8192×8192). "At `8k`, PBR maps are
  generated at 4K and no emission map is produced"
  ([changelog](../../sources/meshy.ai/api-changelog/2026-10-26.md)).
- `enable_pbr` adds "PBR maps (metallic, roughness, and normal) with the base color". Meshy 7.1 does
  **not** generate an emission map; only Meshy 6 does
  ([text-to-3D API](../../sources/meshy.ai/text-to-3d-api/2026-10-26.md)).
- `remove_lighting` (strip highlights and shadows from base colour) is accepted and ignored on 7.1.

### Rigging and animation (separate endpoints, not 7.1 features)

- **Rigging** (`POST /openapi/v1/rigging`, 5 credits): "works well only with standard humanoid
  (bipedal) characters that have a clearly defined limb and body structure". Input is a Meshy task ID or
  a `.glb` up to 400 MB; output is rigged FBX/GLB plus walking and running clips and armature-only GLBs.
  A 422 means "Pose estimation failed"; for `model_url` the character must face +Z
  ([rigging API](../../sources/meshy.ai/rigging-api/2026-10-26.md)).
- **Animation** (`POST /openapi/v1/animations`, 3 credits per action): preset `action_id`, up to 10
  `action_ids` merged into one file with one clip per action, or a Text to Motion clip. Post-processing
  can retime, e.g. `change_fps` to 24 ([animation API](../../sources/meshy.ai/animation-api/2026-10-26.md)).
- fal folds both into the generation call: `enable_rigging` ($0.20) and `enable_animation` ($0.12),
  with `animation_action_id` defaulting to 92 and bounded to 0–696
  ([fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md)).

### Vendor benchmark claims (labelled as claims)

- "Meshy 7.1 ranks first at 1K, 2K, and 4K render resolutions" on the vendor's new Detail Richness
  benchmark: 53.5% / 37.4% / 23.1% against Rodin 2.5's 51.4% / 35.0% / 21.1%, Tripo 3.1's 44.8% /
  29.5% / 17.3%, Hunyuan3D 3.1's 39.4% / 25.4% / 14.7% and Hi3D 3.0's 49.1% / 34.4% / 21.9%. Per-object
  win rate "ranges from 56% to 98%"
  ([launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md)).
- "as of this release the only 3D generative model to reach" 4096³ geometry resolution (same record).
- The metric is defined as the fraction of surface needing anti-aliasing at a given render resolution,
  on inputs chosen to have "very rich structural details but very simple textures" so that "every detail
  visible in the input represents a geometric fact" (same record).
- Meshy 7 texturing "ranks first overall on our texture alignment benchmark, both on a shared mesh and
  end to end", with 66.2% average end to end versus Tripo 3.5's 63.8% and Hi3D 3.0's 63.1%. Hi3D 3.0
  leads the separate Mesh-Texture Agreement metric (86.5% vs 84.8% on the shared mesh)
  ([texture benchmark](../../sources/meshy.ai/texture-alignment-benchmark/2026-10-26.md)).

## Limitations and constraints

- **Ultra 4K is single-view only.** "Ultra 2K is available for both single-view and multi-view
  generation, and Ultra 4K is available for single-view generation only"
  ([launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md)). Multi-Image to 3D returns 400
  for `geometry_resolution: "4k"` and its response schema can only ever report `2k`
  ([multi-image API](../../sources/meshy.ai/multi-image-to-3d-api/2026-10-26.md)).
- **Ultra and downloads are subscription-gated in the web app.** "only subscribed users are able to
  access Ultra 2K and Ultra 4K resolutions as well as download models generated by Meshy 7.1"
  ([launch post](../../sources/meshy.ai/meshy-7-1-launch/2026-10-26.md)). On the API, task creation
  itself requires a paid plan: a 402 reads "Free plan: Creating a task requires a paid plan"
  ([text-to-3D API](../../sources/meshy.ai/text-to-3D-api/2026-10-26.md)).
- **API output lives for three days.** "Meshy keeps the models you generate through the API for at most
  3 days", and signed URLs stop working at the task's `expires_at`. Studio plans get 14 days and
  Enterprise "forever" ([asset retention](../../sources/meshy.ai/asset-retention/2026-10-26.md),
  [pricing plans](../../sources/meshy.ai/pricing-plans/2026-10-26.md)).
- **No emission map, no `remove_lighting` on 7.1.** Both are Meshy 6 capabilities that 7 and 7.1 drop
  ([text-to-3D API](../../sources/meshy.ai/text-to-3D-api/2026-10-26.md)).
- **Rigging is humanoid-only and picky.** Non-bipedal or bas-relief models are refused (403), and pose
  estimation failures return 422; characters supplied by URL must face +Z
  ([rigging API](../../sources/meshy.ai/rigging-api/2026-10-26.md)).
- **Rate limits are per account, not per model.** 20 requests/second on Pro through Studio, 100 on
  Enterprise; concurrent tasks 10 (Pro) to 100 (Ultra). A text-to-3D run is two requests, so the
  effective pipeline rate is halved
  ([rate limits](../../sources/meshy.ai/rate-limits/2026-10-26.md)).
- **Moderation is opt-in.** `moderation` defaults to false; when it is enabled Meshy screens the prompt
  or input image and "If Meshy detects harmful content, the request returns 400 and Meshy doesn't create
  a task". The default API path therefore has no documented input screening
  ([text-to-3D API](../../sources/meshy.ai/text-to-3D-api/2026-10-26.md)).
- **`latest` is a moving target.** "`latest` always points to the newest standard model, so its output
  changes when a new model is released"; the vendor's own guidance is to pin `meshy-7.1` for
  reproducible output ([deprecations](../../sources/meshy.ai/model-deprecations/2026-10-26.md)).
- **Host gaps on fal.** fal exposes no `texture_resolution` or `target_formats`, caps the prompt at 600
  characters instead of 800, and does not state whether Ultra geometry carries a surcharge
  ([fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md)).
- **No second independent host.** Replicate had no Meshy listing (checked 2026-10-26), so fal is the
  only independent host record and every cross-host claim here rests on one host plus the vendor.
- **No independent quality evidence.** No benchmark, arena or third-party measurement of Meshy 7.1 was
  captured.

## Access, pricing, licensing

### Meshy API — credits per request

| Configuration | meshy-7.1 (`latest`) | meshy-6 | meshy-6-lite |
| --- | --- | --- | --- |
| Text to 3D preview / Image to 3D, mesh only | 20 | 20 | 5 |
| Mesh + 2K or 4K textures | 30 | 30 | 15 (2K only) |
| Mesh + 8K textures | 35 | 35 | not supported |
| Multi-Image to 3D, mesh only / 2K textures | 20 / 30 | 20 / 30 | 5 / 15 |
| Ultra geometry surcharge (`2k` **or** `4k`) | +5 | not supported | not supported |
| Text to 3D refine / Retexture (texturing only) | 10 (2K/4K), 15 (8K) | same | same |
| Rigging | 5 | — | — |
| Animation | 3 per action | — | — |

Source: [api pricing](../../sources/meshy.ai/api-pricing/2026-10-26.md). Ultra 4K costs the same
surcharge as Ultra 2K: "4K · Ultra (+5 credits)".

### Credits to dollars

Plan prices and monthly credit allowances imply $0.020 per credit on Pro ($20 / 1,000), ≈$0.0133 on
Premium ($40 / 3,000) and $0.0125 on Ultra ($100 / 8,000)
([pricing plans](../../sources/meshy.ai/pricing-plans/2026-10-26.md)). Applying those rates, a textured
7.1 image-to-3D at Standard geometry is roughly **$0.38–$0.60**, the Ultra 4K surcharge roughly
**$0.06–$0.10**, and an 8K-textured Ultra 4K asset roughly **$0.50–$0.80**. These are arithmetic from
two published tables, not quotes, and Extra Credit Packs or annual billing would change them.

### fal — per call, USD

"$0.80" untextured, "$1.20" textured, plus "$0.20" for auto-rigging and "$0.12" for animation; "A
textured model with auto-rigging and animation costs $1.52"
([fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md)). On the same implied credit
rates, fal's $1.20 for a textured model is roughly two to three times the first-party cost of 30 credits
(≈$0.38–$0.60), so the host price is a convenience margin rather than a discount. The price string does
not say whether Ultra geometry adds a surcharge on fal; with or without it, fal remains the dearer route
at every configuration these two schedules cover.

### Licensing

- **No weights, no open licence.** Every route is hosted; no captured page offers a checkpoint or
  weights download. fal's `licenseType: "commercial"` is fal's statement about use through fal.
- **Output ownership depends on plan.** Free-plan output is Meshy's, licensed back under CC BY 4.0
  "as long as the free plan customer provides appropriate credit to Meshy". Paid-plan customers own
  their Customer Output "to the extent possible under applicable law"
  ([terms of use](../../sources/meshy.ai/terms-of-use/2026-10-26.md)).
- **Non-Enterprise data may train the model.** "Meshy may use Customer Inputs and Customer Outputs …
  from non-Enterprise Customers to train, validate, test, or improve Services unless otherwise agreed
  to the Order. You may opt out of such use by contacting support@meshy.ai" (same record).
- **AI-provenance markers must be kept.** "You agree not to remove, alter, disable, or otherwise tamper
  with such identifiers" (same record).
- **Competitive-use and resale restrictions** apply, including using generated assets to train models
  "competitive with Meshy" (same record).

## Unresolved questions

1. **Do the Ultra 4K meshes hold up in practice?** The only evidence is the vendor's own benchmark on
   inputs deliberately chosen to be detail-rich and texture-poor. Nothing captured tests Ultra 4K on a
   normal concept-art image, on a 3D-printing workflow, or at a retopology-friendly polycount.
2. **What does 7.1 change besides geometry?** The changelog says "same parameters and credit cost …
   higher geometry detail", and the texture benchmark treats "Meshy 7 texturing" as the current
   texturer while using 7.1 meshes. But the Text to 3D refine parameter list says `4k`/`8k` textures
   "need `ai_model` `meshy-6`, `meshy-7.1`, or `latest`" — which excludes `meshy-7` — while the Image to
   3D page lists no such exclusion. Either 7.1 can texture above 2K where 7 cannot, or one of the two
   pages is wrong ([text-to-3D API](../../sources/meshy.ai/text-to-3D-api/2026-10-26.md),
   [image-to-3D API](../../sources/meshy.ai/image-to-3d-api/2026-10-26.md),
   [texture benchmark](../../sources/meshy.ai/texture-alignment-benchmark/2026-10-26.md)).
3. **How many animation presets exist?** The plan page advertises "600+ motions" while fal bounds
   `animation_action_id` to 0–696 and the Animation API page gives no count
   ([pricing plans](../../sources/meshy.ai/pricing-plans/2026-10-26.md),
   [fal catalogue](../../sources/fal.ai/meshy-v7-1-catalogue/2026-10-26.md),
   [animation API](../../sources/meshy.ai/animation-api/2026-10-26.md)).
4. **Is Ultra 4K gated on the API?** The launch post ties Ultra resolutions to a subscription in the web
   app; the API docs tie task creation to a paid plan but never say whether `4k` needs a specific tier.
5. **What is the latency of an Ultra 4K task?** No captured page gives processing times; the docs'
   "Processing times" link returned 404 at capture.
6. **How does 7.1 compare with Tripo, Hunyuan3D or Rodin on an independent test?** No independent
   comparison was captured for any of them.
7. **Does the 4096³ pass help downstream, or only in renders?** The vendor concedes that "further
   scaling geometric resolution beyond 4096³ will likely provide little to no additional benefit", but
   no source tests whether 4K geometry survives remeshing, rigging or engine import better than 2K.
8. **Is `seed` reproducible on the first-party API?** fal exposes `seed` with "Same prompt and seed
   usually generate the same result"; Meshy's own API documents no seed for 3D generation.

## Evidence status

Evidence floor: **met.** First-party: four Meshy blog records — the 7.1 launch (2026-09-10), the Meshy 7
launch (2026-08-12), the Meshy 6 launch (2026-01-18) and the texture-alignment benchmark (2026-09-21) —
plus the Text to 3D, Image to 3D, Multi-Image to 3D, Rigging and Animation API references, the API
price list, the plan/price page, the deprecations table, the changelog, the asset retention policy, the
rate limits and the Terms of Use (last updated 2026-09-19). Independent host: one
fal catalogue/schema/price record covering the three `meshy/v7.1/*` endpoints, published 2026-09-21. A
Replicate check is recorded as a negative finding. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules plus
arithmetic from two of them; quality statements are the vendor's own benchmarks, run by the vendor on
vendor-selected inputs.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same concept image at `standard`, `2k` and `4k` to see whether detail gains survive at a
game-usable polycount; a four-view request at `2k` versus the same object single-view at `4k`; a
preview/refine pair with `texture_resolution: "4k"` on `meshy-7` and `meshy-7.1` to settle question 2;
an 8K-textured asset checked for PBR map resolution; a rig-plus-animation chain to see how many of the
documented actions work on a 7.1 mesh; and a fal-versus-first-party run of the same prompt to check the
600-versus-800 character cap and whether fal applies the Ultra surcharge.

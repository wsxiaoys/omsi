# Hyper3D Rodin Gen-2.5

Deemos Corporation's Rodin Gen-2.5 is the current generation of the Rodin image-and-text-to-3D
generator, sold as a consumer workspace on [hyper3d.ai](https://hyper3d.ai/) and as a hosted API at
`api.hyper3d.com/api/v2/rodin`, where it is selected by a `tier=Gen-2.5-*` string rather than by its own
model ID. It produces a textured mesh in GLB, USDZ, FBX, OBJ or STL with quad or triangle topology,
PBR or baked-shading materials, target face counts from 500 to 2,000,000, and textures from 2K to 12K;
rigging is a separate paid endpoint.

The model is inside the roster's one-year window, but **the vendor never published a launch date for
Gen-2.5**. The earliest dated public evidence is fal's endpoint record of 2026-05-28
([fal catalogue](../../sources/fal.ai/hyper3d-rodin-v2-5/2026-10-26.md)); the vendor's API changelog
introduces the Gen-2.5 reference page in May 2026
([changelog](../../sources/hyper3d.ai/rodin-api-changelog/2026-10-26.md)). Its predecessor Rodin Gen-2 is
a separate, still-served generation documented from September 2025 — just *outside* the window — and is
not covered as its own page here.

## Identity

- **Canonical name:** Rodin Gen-2.5. The vendor's API reference, changelog and workspace all use
  "Gen-2.5" ([API spec](../../sources/hyper3d.ai/rodin-gen2-5-api-spec/2026-10-26.md),
  [help centre](../../sources/hyper3d.ai/help-choose-rodin-model/2026-10-26.md)); the marketing pages
  write it both hyphenated and as "Rodin Gen-2.5"
  ([homepage](../../sources/hyper3d.ai/hyper3d-home-rodin/2026-10-26.md),
  [product page](../../sources/hyper3d.ai/rodin-image-to-3d-page/2026-10-26.md)).
- **Vendor / developer:** Deemos Corporation, a Delaware company, operating as Hyper3D
  ([Terms of Service](../../sources/hyper3d.ai/hyper3d-terms-of-service/2026-10-26.md)). The vendor ties
  Rodin to its CLAY and CAST research, which it says won a SIGGRAPH Best Paper award
  ([product page](../../sources/hyper3d.ai/rodin-image-to-3d-page/2026-10-26.md)). That is a marketing
  claim: no paper, model card or weights were captured, and the only first-party repository found is an
  API integration skill, not a model release
  ([rodin3d-skills](../../sources/github.com/rodin3d-skills/2026-10-26.md)).
- **Aliases and host names:** "Rodin V2.5" and "Hyper3D - Rodin V2.5" on fal, where the catalogue
  family field also records "Rodin 2.5"; the roster's "Hyper3D Rodin 2.5" matches no single vendor
  string.
- **No canonical model ID exists.** There is one generation endpoint and one required `tier` parameter:

  | Surface | Selector |
  | --- | --- |
  | Hyper3D API | `POST /api/v2/rodin`, `tier` ∈ {`Gen-2.5-Extreme-Low`, `Gen-2.5-Low`, `Gen-2.5-Medium`, `Gen-2.5-High`, `Gen-2.5-Extreme-High`} |
  | Hyper3D workspace | "Gen-2.5" model with a "Thinking Effort" ladder, Extreme-Low → Extreme-High |
  | fal | `fal-ai/hyper3d/rodin/v2.5`, `…/v2.5/text-to-3d`, and `/fast` variants of both |
  | Replicate | **not hosted** |

  Omitting `tier` does not default to Gen-2.5: "If omitted, the endpoint falls back to `Regular` and
  generates a Gen-1/1.5 asset"
  ([API spec](../../sources/hyper3d.ai/rodin-gen2-5-api-spec/2026-10-26.md)). The tier string is the
  model identity, so a caller's model version is only as pinned as their request body.
- **Siblings:** Rodin Gen-2 (one tier, documented September 2025), Rodin Gen-1/1.5 (`Sketch`,
  `Regular`, `Detail`, `Smooth`), the newer beta `Rodin Agentic` endpoint (image-only, `basic`/
  `standard`/`pro`, 0.5/1/2 credits, quoted at 3/5/10 minutes), the `Bang` edit endpoint, and the
  separate ChatAvatar product. Gen-2.5 is the newest non-beta generation and the one the workspace
  labels "the most capable current model"
  ([help centre](../../sources/hyper3d.ai/help-choose-rodin-model/2026-10-26.md)).
- **Deprecation status is split.** The vendor's official integration skill calls Gen-2 a "Legacy tier"
  and the Gen-1/1.5 tiers "Deprecated, use Gen-2.5", while the API reference still documents Gen-1/1.5
  as a live family with its own tier table
  ([rodin3d-skills](../../sources/github.com/rodin3d-skills/2026-10-26.md),
  [API spec](../../sources/hyper3d.ai/rodin-gen2-5-api-spec/2026-10-26.md)). Deprecated in guidance,
  still served in practice.

### Gen-2 vs Gen-2.5

Both generations run through the same endpoint and share `material`, `geometry_file_format`, `seed`,
`bbox_condition`, `HighPack`, `TAPose` and the five-image input limit
([Gen-2 spec](../../sources/hyper3d.ai/rodin-gen2-api-spec/2026-10-26.md)). What Gen-2.5 adds is a
quality/tier axis and a texture axis:

| | Gen-2 | Gen-2.5 |
| --- | --- | --- |
| Tiers | `Gen-2` only | five tiers |
| Face-count presets (`Raw`) | 2K / 20K / 150K / 500K | 20K / 60K / 500K / 1M |
| `quality_override` ceiling | 1,000,000 | 2,000,000 (High, Extreme-High); 200,000 cap in Quad |
| Texture control | `HighPack` 2K→4K, `hd_texture` | `texture_mode` up to `extreme-high`, 6K/12K matrix, `uhd_texture`, `texture_delight` |
| Extra geometry switches | — | `is_micro`, `geometry_instruct_mode`, `is_symmetric`, `soft`, `detail_level`, `quad_normal`, `image_label` |
| Extra output | — | Extreme-High returns "an additional mesh with up to 10M of faces" |
| Default `mesh_mode` | `Quad` | `Raw` |
| Credit price | 0.5 | 0.5 base, +0.5 Extreme-High, +2.0 `extreme-high` texture |

This is enough divergence that a reader's verdict on one would mislead on the other, and both are
obtainable, so the two are treated as separate models. Gen-2.5's own behaviour also changed after
release: the `geometry_instruct_mode` default moved from `faithful` to `creative` in July 2026 and
`creative` was restricted to Medium-and-above in June 2026
([changelog](../../sources/hyper3d.ai/rodin-api-changelog/2026-10-26.md)), so unpinned requests from
different months are not the same configuration.

### Timeline

| Date | Event | Source |
| --- | --- | --- |
| 2025-09 | Rodin Gen-2 API documentation published | [changelog](../../sources/hyper3d.ai/rodin-api-changelog/2026-10-26.md) |
| 2025-09-26 | fal publishes `fal-ai/hyper3d/rodin/v2` | [fal catalogue](../../sources/fal.ai/hyper3d-rodin-v2-5/2026-10-26.md) |
| 2025-11-19 | Replicate's latest `hyper3d/rodin` version created (Gen-2) | [Replicate](../../sources/replicate.com/hyper3d-rodin/2026-10-26.md) |
| 2026-05 | Gen-2.5 API documentation published (month only) | [changelog](../../sources/hyper3d.ai/rodin-api-changelog/2026-10-26.md) |
| 2026-05-28 | fal creates the `rodin/v2.5` endpoints; published 2026-05-31 | [fal catalogue](../../sources/fal.ai/hyper3d-rodin-v2-5/2026-10-26.md) |
| 2026-06-05 | fal creates the `rodin/v2.5/*/fast` endpoints; published 2026-06-19 | [fal catalogue](../../sources/fal.ai/hyper3d-rodin-v2-5/2026-10-26.md) |
| 2026-06 / 07 / 08 | Gen-2.5 parameter and default changes | [changelog](../../sources/hyper3d.ai/rodin-api-changelog/2026-10-26.md) |
| 2026-10 | Rigging API documentation published | [changelog](../../sources/hyper3d.ai/rodin-api-changelog/2026-10-26.md) |

## Current assessment

Gen-2.5 is a **distinct generation, not a repackaging**: the tier ladder, the 2M face ceiling, the
12K texture matrix and the extra geometry controls are all documented capabilities that Gen-2 does not
have, and they are exposed identically in the vendor API and on fal. It is current and actively
developed — every parameter addition from June 2026 onward targets it, the one March 2026 addition
(`hd_texture`) went to Gen-2 — and it is the model the workspace offers first.

What the evidence supports is **controllability**, not quality. The vendor publishes no benchmark, no
comparison against other 3D generators, and no quantitative fidelity metric; its quality claims are
adjectives ("production-ready meshes", "high reference fidelity",
[product page](../../sources/hyper3d.ai/rodin-image-to-3d-page/2026-10-26.md)). The one hard number is
latency: the workspace quotes ~4 s at Extreme-Low rising to ~80 s at Extreme-High
([homepage](../../sources/hyper3d.ai/hyper3d-home-rodin/2026-10-26.md)), and the marketing "about five
seconds" for a full textured model is the bottom rung of that ladder, not a typical case.

Two structural facts matter more than any claim. First, **access is gated**: API use requires the $120
/month Business plan, and the Free tier's export row reads "Export from legacy models"
([pricing](../../sources/hyper3d.ai/rodin-pricing-plans/2026-10-26.md)). Second, **there is no open
weights path and no second host for this generation**: fal is the only independent host captured, and
Replicate serves Gen-2 only
([Replicate](../../sources/replicate.com/hyper3d-rodin/2026-10-26.md)). Anyone needing a second route
for Gen-2.5 has none.

## Documented capabilities

Everything in this section is vendor or host documentation. **No direct tests were run for this page.**

### Inputs

- **Image-to-3D:** 1–5 images; the first is used for material generation. Optional `prompt` gives
  "orientation-level guidance (symmetric, sharp, detail...)", and the vendor recommends omitting it
  ([API spec](../../sources/hyper3d.ai/rodin-gen2-5-api-spec/2026-10-26.md)).
- **Text-to-3D:** `prompt` only (≤ 1024 characters). "The prompt is first rendered to an image, so a
  text-only request can also be rejected with `IMAGE_CONTENT_VIOLATION`" — text-to-3D is an
  image-to-3D pipeline with a generated intermediate, and the text pass can be moderated on its own.
- **Per-image view labels** (`image_label`): `F`, `FL`, `FR`, `B`, `BL`, `BR`, `L`, `R`, `U`, `D`, `?`,
  positionally matched to the uploaded images.
- **Alpha handling:** `use_original_alpha` uses the uploaded image's alpha channel in preprocessing.
- **Spatial conditioning:** `bbox_condition` constrains maximum dimensions as `(x, y, z)` integers.
  The marketing site also advertises voxel and point-cloud ControlNets
  ([homepage](../../sources/hyper3d.ai/hyper3d-home-rodin/2026-10-26.md)), but neither appears in the
  API schema.
- **Human subjects:** `TAPose` re-poses human-like inputs into T/A pose "suitable for animation";
  when false the input pose is reconstructed as-is.
- **Image limits (not in the API reference):** the vendor's official integration skill states "File
  size limit: 16MB", "Resolution range: 512x512 to 4096x4096", and JPEG/PNG/WEBP input
  ([rodin3d-skills](../../sources/github.com/rodin3d-skills/2026-10-26.md)). Whether these are enforced
  server-side or are guidance only is not stated.

### Output formats

`glb` (default), `usdz`, `fbx`, `obj`, `stl` — identical on the vendor API and fal
([API spec](../../sources/hyper3d.ai/rodin-gen2-5-api-spec/2026-10-26.md),
[fal schema](../../sources/fal.ai/hyper3d-rodin-v2-5/2026-10-26.md)). The marketing page additionally
lists glTF, 3MF and DXF
([product page](../../sources/hyper3d.ai/rodin-image-to-3d-page/2026-10-26.md)); those are not
generation-output options in the API and most likely belong to the separate converter tools. Output is
a mesh file plus a texture bundle; `preview_render` optionally adds a render image, and
`material=All` returns both PBR and Shaded variants.

### Topology and polycount

- **Topology:** `mesh_mode=Raw` (triangle) or `Quad`. Gen-2.5 defaults to `Raw`, unlike every other
  tier which defaults to `Quad`.
- **Preset face counts** (`quality`): Quad 4,000 / 8,000 / 18,000 / 50,000; Raw 20,000 / 60,000 /
  500,000 / 1,000,000 for `extra-low` / `low` / `medium` / `high`.
- **Custom face count** (`quality_override`): 500–2,000,000; 2,000,000 only on High and Extreme-High;
  quad meshes capped at 200,000.
- **Extreme-High** "also returns an additional mesh with up to 10M of faces."
- **Normal baking:** `quad_normal` "bakes high-resolution geometry detail into a normal map during mesh
  refinement".
- **LODs:** the marketing page promises "optional LOD generation", but the vendor's own workspace
  guidance describes LODs as a downstream step the user builds, and Rodin face-count controls "do not
  replace an engine-specific LOD setup"
  ([product page](../../sources/hyper3d.ai/rodin-image-to-3d-page/2026-10-26.md),
  [help article, topology](../../sources/hyper3d.ai/help-topology-polycount-lods/2026-10-26.md)).
  Treat "LOD generation" as unsubstantiated.

**Contradiction:** the product page advertises "selectable target polygon counts up to 10 million",
while the API caps a *requested* count at 2,000,000 and produces 10M only as an extra Extreme-High
mesh. The two can be reconciled as "requested vs delivered", but the marketing sentence reads as a
request-side limit.

### Textures and PBR

- **Material bundles:** `PBR` (base colour, metallic, normal, roughness), `Shaded` (base colour with
  baked lighting), `All` (both), `Hybrid` (PBR maps with baked lighting in the base colour), `None`
  (geometry only, faster).
- **Resolution matrix:** 2K default; `uhd_texture` 4K; `HighPack` 4K; both 8K. With
  `texture_mode=extreme-high`: 6K, or 12K with `HighPack`.
- **Texture-quality axis:** `legacy`, `extreme-low`, `low`, `medium`, `high`, `extreme-high`, defaulting
  to the tier's level.
- **Cleanup switches:** `texture_delight` removes baked lighting from texture-reference images;
  `hd_texture` runs a super-resolution pass and "may also introduce artifacts"; `uhd_texture` adds
  sharpening with the same caveat.
- **UVs** are claimed ("ready-to-use UVs") on the homepage but are not described anywhere in the API
  reference.

### Rigging

Rigging is a separate endpoint, `POST /api/v2/rigging`, priced at 0.5 credits
([rigging spec](../../sources/hyper3d.ai/rodin-rigging-api/2026-10-26.md)). It accepts a confirmed
Rodin `asset_id` or an uploaded `obj`/`glb`/`stl`/`fbx`/`usd`/`usda`/`usdz`/`usdc` file, and offers
preset skeletons (`human`, `quadruped`, `human_UE`, `human_Unity`, `human_ActorCore`, `bird`, `dragon`,
`kaiju`), a custom hierarchy of up to 256 nodes, or a `custom` skeleton described in text. Skinning is
`shell` (general) or `core` (humanoid-optimised). Up to 10 stock animation presets or uploaded FBX
clips can be attached; output is `glb`, `fbx` or `usdz`. **Uploaded models lose embedded materials and
textures.**

The endpoint is newer than the model — documented October 2026 — and no quality claim, weight-painting
metric, or template inventory is published.

### Speed

The workspace shows approximate times per effort level: Extreme-Low ~4 s, Low ~9 s, Medium ~20 s,
High ~40 s, Extreme-High ~80 s
([homepage](../../sources/hyper3d.ai/hyper3d-home-rodin/2026-10-26.md)). These are UI estimates with no
stated hardware or queue conditions, and they exclude the separate texture pass, rigging, and download.

## Limitations and constraints

- **No open weights, no local inference, no licence to the model.** No model repository, checkpoint or
  model card was found — the only first-party GitHub repo is an API integration skill; every route is
  hosted, and the terms prohibit using the service to train a competing model
  ([rodin3d-skills](../../sources/github.com/rodin3d-skills/2026-10-26.md),
  [terms](../../sources/hyper3d.ai/hyper3d-terms-of-service/2026-10-26.md)).
- **API access is Business-tier.** The pricing table marks `API access` as unavailable on Free and
  Creator and "Full access" on Business ($120/mo), which is consistent with the API's
  `API_NO_ACTIVE_SUBSCRIPTION` and `API_SUBSCRIPTION_PLAN_TOO_LOW` error codes
  ([pricing](../../sources/hyper3d.ai/rodin-pricing-plans/2026-10-26.md),
  [API spec](../../sources/hyper3d.ai/rodin-gen2-5-api-spec/2026-10-26.md)).
- **One independent host.** fal proxies Gen-2.5; Replicate serves Gen-2 only. There is no second route
  for this generation, and fal itself is a proxy (`hostingType: "proxy"`), so neither host runs the
  model locally.
- **The tier must be sent explicitly.** A request that omits `tier` silently produces a Gen-1/1.5
  asset. This is the single most consequential footgun in the API.
- **Host and vendor defaults diverge.** The vendor defaults to `material=PBR` and has no Gen-2.5 tier
  default at all (omitting `tier` falls back to Gen-1/1.5); fal defaults to `material=All` and
  `tier=Gen-2.5-High`. The same request body can therefore yield different models and different
  material bundles on the two routes.
- **fal's schema is a subset.** It drops the `Hybrid` material and the `extreme-high` texture mode, and
  adds a `Gen-2.5-Minimum` tier that the vendor does not document
  ([fal schema](../../sources/fal.ai/hyper3d-rodin-v2-5/2026-10-26.md)). Anything relying on 12K
  textures must go direct.
- **Quoted latencies are UI estimates**, unqualified by image count, tier-consistent texture cost, or
  queue depth.
- **Text-to-3D is two-stage and can fail at the first stage** with `IMAGE_CONTENT_VIOLATION`, i.e. the
  prompt is moderated as an image request.
- **Content moderation exists but is undocumented.** The terms reserve the right to "access, review,
  screen, edit, modify, block and delete the Output and/or Prompts… at any time and for any reason",
  and `IMAGE_CONTENT_VIOLATION` is an enumerated error, but no policy, threshold or refusal taxonomy was
  captured. A refusal on one prompt is evidence about that request, not about the model's general
  willingness.
- **No documented determinism.** `seed` exists (0–65535) but nothing states that the same seed returns
  the same mesh, and the pipeline includes refinement stages whose sampling is not described.
- **Refunds are not available** for consumed credits, though failed tasks are refunded
  ([terms](../../sources/hyper3d.ai/hyper3d-terms-of-service/2026-10-26.md),
  [help centre](../../sources/hyper3d.ai/help-plans-and-credits/2026-10-26.md)).
- **Concurrency is capped per account** with a published error code but no published number.
- **Result URLs expire in 10 minutes.** "Download links expire in 10 minutes… Do not store or cache the
  URLs themselves" ([rodin3d-skills](../../sources/github.com/rodin3d-skills/2026-10-26.md)); the API
  reference does not mention the expiry. A pipeline that stores URLs instead of files will break.
- **The official integration skill ships stale defaults.** As of its last push (2026-05-25) it still
  lists `geometry_instruct_mode` default `faithful` and `HighPack` at "+1 credit", both superseded by
  the July and August 2026 changes ([rodin3d-skills](../../sources/github.com/rodin3d-skills/2026-10-26.md),
  [changelog](../../sources/hyper3d.ai/rodin-api-changelog/2026-10-26.md)). Its material enum also omits
  `Hybrid`, and its error-code table does not match the API's.
- **Marketing claims exceed documentation** on polygon ceiling (10M vs 2M), export formats
  (glTF/3MF/DXF vs five API formats), watertightness ("solid, manifold geometry" with no exceptions
  noted), and "optional LOD generation".

## Access, pricing, licensing

### Hyper3D direct (API and workspace)

Credits are the billing unit. The API charges per submission:

| Item | Credits |
| --- | --- |
| Base Gen-2.5 generation | 0.5 |
| `tier=Gen-2.5-Extreme-High` | +0.5 |
| `texture_mode=extreme-high` | +2.0 |
| Rigging | 0.5 |
| Rodin Agentic (sibling) | 0.5 / 1.0 / 2.0 for basic / standard / pro |

Source: [API spec](../../sources/hyper3d.ai/rodin-gen2-5-api-spec/2026-10-26.md),
[rigging](../../sources/hyper3d.ai/rodin-rigging-api/2026-10-26.md). `HighPack` is not priced in the
API reference; the official skill prices it at "+1 credit", and the changelog notes that add-on
pricing was revised across all generations in August 2026 without stating the new figures — so the
skill's figure may already be stale ([rodin3d-skills](../../sources/github.com/rodin3d-skills/2026-10-26.md)).

Direct credits cost **$1.50 each** ([pricing](../../sources/hyper3d.ai/rodin-pricing-plans/2026-10-26.md)),
so one base generation lists at about **$0.75**, an Extreme-High generation about **$1.50**, and
Extreme-High with 12K textures about **$4.50** — arithmetic on two published numbers, not a quoted
price. Subscription credits are cheaper: Creator ($30/mo) is estimated at "about 60 models" and
Business ($120/mo) at "about 416 models"
([help centre](../../sources/hyper3d.ai/help-plans-and-credits/2026-10-26.md)), i.e. roughly $0.29–$0.50
per model of list value, but the vendor does not say which tier or settings those estimates assume.

Two vendor surfaces disagree on the Creator yearly price: $280 in the help article, $288 on the
pricing page. The monthly $30 agrees.

### fal

Flat **$0.40 per generation** on both `v2.5` endpoints and **$0.10** on the fast variants, with
`HighPack` adding **$0.80** ([fal catalogue](../../sources/fal.ai/hyper3d-rodin-v2-5/2026-10-26.md)).
The price string is tier-agnostic, so Extreme-High and 12K textures appear to cost the same $0.40 as a
default High generation — cheaper than the vendor's own list arithmetic, if the string is complete.

### Replicate

$0.40 per output ("or 25 outputs for $10") — but for **Rodin Gen-2**, not Gen-2.5
([Replicate](../../sources/replicate.com/hyper3d-rodin/2026-10-26.md)). It is recorded here because it
is the only other host serving a Rodin generation, and because the identical price across hosts is a
useful warning: the two $0.40 figures are not the same model.

### Licensing

- **Weights:** none offered; no licence to the model itself is granted anywhere captured.
- **Output:** the Terms of Service state, for Rodin specifically, "we will not limit your use of such
  Output, subject to any restrictions set forth in these Agreements, the Applicable Laws and any
  third-party terms" ([terms](../../sources/hyper3d.ai/hyper3d-terms-of-service/2026-10-26.md)). That
  is broader than the marketing line that "paid plans include commercial licensing"
  ([product page](../../sources/hyper3d.ai/rodin-image-to-3d-page/2026-10-26.md)); the marketing framing
  is about plan entitlements, and the legal text imposes no commercial-use restriction on output.
- **No copyright warranty:** the same section disclaims any representation "as to the copyrightability
  of any Output", so the permission comes without an exclusivity guarantee.
- **Prohibited uses include** training a competing AI model on the service, reverse engineering, and
  reselling site Content (as distinct from your own Output).
- **fal's `licenseType: "commercial"`** is fal's statement about use through fal, not a Deemos licence
  ([fal catalogue](../../sources/fal.ai/hyper3d-rodin-v2-5/2026-10-26.md)).
- **Input rights are the user's problem:** the terms require that the user hold all rights to uploaded
  prompts and images and indemnify Deemos.

## Unresolved questions

1. **When did Gen-2.5 launch?** No vendor announcement, blog post, or press release was found. The
   available markers are "May 2026" for the API docs and 2026-05-28 for fal's endpoint creation. A
   consumer launch may predate both.
2. **Is Gen-2.5 a new model or Gen-2 plus an effort ladder?** The vendor says `tier` "selects the
   generation family and how much detail the model resolves", which can be read either way. No source
   states whether the tiers share weights.
3. **Does fal's flat $0.40 cover `Gen-2.5-Extreme-High` and 12K textures?** The price string does not
   vary by tier, and no per-tier fal price list was captured.
4. **What is `Gen-2.5-Minimum`?** It appears only in fal's schema, with a truncated description
   mentioning 50K triangles.
5. **Is `seed` honoured?** The parameter is documented on both routes; reproducibility is not.
6. **What does a delivered mesh look like?** No source states UV layout guarantees, real-world scale
   behaviour beyond a marketing sentence, watertightness conditions, or whether quad output is
   edge-flow-aware or merely quad-dominant.
7. **Is Gen-2 deprecated, and is Gen-1.5 still supported?** Both are still served and documented; no
   deprecation notice was captured.
8. **How good is the rigging?** No quality evidence, and the stock animation-preset inventory is not
   published.
9. **Do the workspace and the API run the same Gen-2.5?** The workspace exposes "Thinking Effort"; the
   API exposes tiers. The help centre does not equate them explicitly.
10. **What does the "10M faces" extra mesh cost?** It is attributed to Extreme-High, whose surcharge is
    only +0.5 credits; whether the extra mesh is always produced or only on request is not stated.

## Evidence status

Evidence floor: **met.** First-party: twelve Hyper3D captures (the Gen-2.5 API reference, the Gen-2
reference, the API changelog, the Features overview, the Rigging reference, the pricing page, three
help-centre articles, the Terms of Service, the homepage and the image-to-3D product page) plus the
vendor's own `DeemosTech/rodin3d-skills` repository. Independent host: fal's catalogue metadata, four
endpoint schemas and price strings; plus Replicate as a second host record that establishes Gen-2 (not
Gen-2.5) availability. All captured 2026-10-26.

**No direct tests were run for this page.** Nothing here is a measurement made by this knowledge base.
Capability statements are vendor or host documentation; prices are published schedules and simple
arithmetic on them; quality statements are the vendor's own and are labelled as such. The vendor
publishes no benchmark, arena result, or third-party comparison for Rodin, and none was captured.

The highest-value next evidence would be a small reproducible run against named endpoints and dates: one
image through all five tiers at fixed `quality_override`, to see whether the tier axis changes geometry
or only effort; a `quality_override=2000000` Raw request to confirm the 2M ceiling and measure the
delivered count; an `extreme-high` + `HighPack` request to confirm 12K textures and check whether fal
charges extra; a `seed`-reuse pair to test determinism; a rigging pass on a Gen-2.5 humanoid to check
weights and the stock animation list; and a GLB inspection for UV layout, scale, and manifoldness.

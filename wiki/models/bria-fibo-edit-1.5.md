# BRIA Fibo Edit 1.5

BRIA AI's second-generation FIBO editing model: an 8B-parameter, JSON-native image editor that takes
one to four reference images plus a plain-language or structured instruction, and returns an edited
image with the structured JSON it rendered
([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md)). It is a **version of Fibo
Edit**, not a new family: it replaces the January 2026 single-image editor with a multi-reference one
and adds a 4-step distilled variant. BRIA's API no longer serves it as the editor — the
`/v2/image/edit` endpoint was switched to Fibo 2 around 2026-10-19 "with no code changes"
([Fibo 2 release note](../../sources/bria.ai/fibo-edit-1-5-successor-whats-new/2026-10-26.md)) — but the
weights remain downloadable and fal still serves four 1.5 endpoints. Its own quality is **unmeasured**:
the independent editing board carries a row for Fibo Edit 1.0 and a row for Fibo 2.0, and none for 1.5
([AA board](../../sources/artificialanalysis.ai/fibo-edit-1-5/2026-10-26.md)).

## Identity

- Canonical name: **FIBO-Edit 1.5**, published as two checkpoints — **FIBO-Edit 1.5 Base** (full,
  non-distilled, "recommended starting point for fine-tuning") and **FIBO-Edit 1.5 Turbo** (4-step
  distilled) ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md),
  [Turbo card](../../sources/huggingface.co/fibo-edit-1-5-turbo/2026-10-26.md)).
- Vendor: BRIA AI. The model cards, the weights, the API and the licence are all BRIA's.
- Weight IDs: `briaai/Fibo-Edit-1.5-base` and `briaai/Fibo-Edit-1.5-turbo`, both `gated: manual`,
  both `library_name: diffusers`, both 8B BF16
  ([Base metadata](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md),
  [Turbo metadata](../../sources/huggingface.co/fibo-edit-1-5-turbo/2026-10-26.md)).
- Host endpoints (fal, the only host that serves 1.5):
  `bria/fibo-edit-1.5/edit`, `.../expand`, `.../virtual-try-on`, `.../product-holding`
  ([fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).
- First-party endpoint: `POST https://engine.prod.bria-api.com/v2/image/edit` with `images` (1–4),
  `instruction` or `structured_instruction`, optional `mask`, `aspect_ratio`, `seed`
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)). That
  path is not version-addressed: BRIA documents no way to request 1.5 rather than Fibo 2, and on
  2026-10-26 the live docs describe the same endpoint as Fibo 2
  ([Fibo 2 release note](../../sources/bria.ai/fibo-edit-1-5-successor-whats-new/2026-10-26.md)).
  That the 2026-08-27 snapshot describes **1.5** rather than 1.0 is an inference, not a vendor
  statement: the snapshot never writes a version, and it is dated after the 1.5 weights appeared and
  before Fibo 2. Its nine-ratio enum and 1–4 image cap match fal's 1.5 endpoints exactly.
- Aliases and label drift: the roster's "BRIA Fibo Edit 1.5" and fal's "Fibo Edit 1.5 Image Editing"
  are the same model as BRIA's "FIBO-Edit 1.5". fal's task endpoints title it "Bria Expand
  (FIBO-Edit-1.5)", "Bria Virtual Try-On (FIBO-Edit-1.5)" and "Bria Product Holding (FIBO-Edit-1.5)".
  BRIA's own API documentation never writes "1.5": the 2026-08-27 snapshot of the image-editing OpenAPI
  calls the model only "FIBO Edit"
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)).
- Dates: the earliest dated first-party artifact is the weights repository creation,
  **2026-08-10** (both checkpoints); fal dates the `/edit` endpoint **2026-08-18** and published it
  **2026-08-26**, with the try-on and product-holding endpoints following on **2026-09-17** and
  expand on **2026-10-10**
  ([Base metadata](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md),
  [fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)). No launch post, press
  release or changelog entry announcing 1.5 exists in BRIA's sitemap; the blog's only FIBO Edit
  announcement is the January one
  ([launch post](../../sources/bria.ai/fibo-edit-1-5-launch-post/2026-10-26.md)). "Mid-August 2026" is
  therefore the best-supported date, and the exact announcement date is unresolved. Either way it is
  well inside the roster's 2025-10-26 window — no exception is needed for this row.
- Siblings: FIBO Edit 1.0 (`briaai/Fibo-Edit`, weights created 2026-01-04, announced 2026-01-22), Fibo
  1.5 / Fibo Gen 1.5 text-to-image (`briaai/Fibo-1.5`, weights created 2026-07-13; fal
  `bria/fibo-gen-1.5/text-to-image`, 2026-08-18), Fibo Lite (2025-12-16), Fibo (2025-10-29), and Fibo 2
  / Fibo 2 Edit (fal 2026-10-19)
  ([1.0 card](../../sources/huggingface.co/fibo-edit/2026-10-26.md),
  [launch post](../../sources/bria.ai/fibo-edit-1-5-launch-post/2026-10-26.md),
  [fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)). The naming and the timing
  (Fibo 1.5 weights in July 2026, Fibo Gen 1.5 and Fibo-Edit 1.5 on fal on the same day, 2026-08-18)
  make 1.5 the edit member of the Fibo 1.5 generation; no source states that pairing directly.

### Version, not alias — and not a new family

The wiki's identity tests put 1.5 on its own page, but as a **version** rather than a separate model
line:

1. **Both versions are obtainable.** `briaai/Fibo-Edit` is still public and gated-but-requestable
   (787 downloads in the last 30 days) alongside the 1.5 checkpoints, so 1.0 was not withdrawn when 1.5
   shipped ([1.0 card](../../sources/huggingface.co/fibo-edit/2026-10-26.md)).
2. **The difference changes the recommendation.** 1.0 is documented as "structured JSON inputs paired
   with a source image (and optionally a mask)"; 1.5 adds "multi-reference editing with support for up
   to four reference images, while improving the visual quality of single-reference edits"
   ([1.0 card](../../sources/huggingface.co/fibo-edit/2026-10-26.md),
   [Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md)). A reader choosing
   between them makes a different request: one image versus four.
3. **Version-specific evidence exists.** The 1.5 cards, fal's 1.5 endpoints and the 2026-08-27 API
   snapshot describe 1.5 itself; the 1.0 card and its AA row describe 1.0.

Against a family split: the cards share the pipeline class `BriaFiboEditPipeline`, the Wan 2.2 VAE,
the SmolLM3 text encoder, the same licence terms and the same arXiv reference, and BRIA's own framing
is "Building on FIBO-Edit". So: one family, two documented versions, 1.5 the later one.

### The roster's discovery path is not an endpoint

The roster records fal `bria/fibo-edit-1.5`. That path returns HTTP 200 but serves a client-rendered
family landing page with no model data; the queue OpenAPI for the unsuffixed ID returns 404, while each
suffixed ID returns a full schema
([fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)). This is the same pattern as
Recraft V4 Pro's `/text-to-image` suffix.

## Current assessment

**1.5 is a real version bump, and a superseded one.** It is not a repackaging: new weights, a new
capability (four-reference editing), a new distilled checkpoint, and a published architecture
(`BriaFiboTransformer2DModel`, 8B parameters, 24 heads × 128 dim, 8 joint + 38 single layers, Wan 2.2
VAE with 48 latent channels, SmolLM3 text encoder, FlowMatchEuler scheduler at shift 3.0)
([Turbo card](../../sources/huggingface.co/fibo-edit-1-5-turbo/2026-10-26.md)). It is also no longer
what BRIA sells as its editor: Fibo 2 took over `/v2/image/edit` in October 2026 (fal's Fibo 2
endpoints and AA's release date both read 2026-10-19), and Bria's successor
note announces no deprecation, migration path, or price change for 1.5
([Fibo 2 release note](../../sources/bria.ai/fibo-edit-1-5-successor-whats-new/2026-10-26.md)).

**Nothing in the evidence measures 1.5's quality.** Artificial Analysis's AA-Image-Editing v2.1 carries
"FIBO Edit" at **915 Elo, rank 66** (2,591 samples, released Jan 2026, open weights →
`briaai/Fibo-Edit`) and "Fibo 2.0" at **1088 Elo, rank 22** (5,009 samples, Oct 2026). There is no 1.5
row ([AA board](../../sources/artificialanalysis.ai/fibo-edit-1-5/2026-10-26.md)). The 1.0 → 2.0 gap is
+173 Elo with non-overlapping intervals, which makes the unmeasured middle the interesting part: 1.5
could be most of that jump or very little of it, and no captured source says which. BRIA's "ranking
among the top models in open benchmarks" is an unquantified claim on the model card
([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md)).

**What 1.5 is still good for, on the evidence.** Three things keep it relevant rather than historical:
the weights are downloadable and diffusers-native (non-commercial, CC BY-NC 4.0); fal still runs four
1.5 endpoints, including two task-shaped ones (virtual try-on, product holding) that BRIA's own
documentation does not describe in model terms; and 1.5 is the generation whose API contract — 1–4
images, nine aspect ratios, mask on single reference only — is documented in machine-readable form.
For a production editor today the evidence points at Fibo 2 or a competitor; for fine-tuning, local
inference, or a pinned multi-reference behaviour, 1.5 remains a concrete, obtainable option.

**How it differs from the neighbours.**

- **Versus Fibo Edit 1.0 (Jan 2026):** 1.0 is single-image with an optional mask; 1.5 is
  multi-reference (1–4). Both are 8B, both are JSON/VGL-native, both are CC BY-NC 4.0 weights, and
  both remain obtainable — 1.5 as weights and on fal at $0.04/image, 1.0 as weights and on Replicate at
  $0.04/image ([1.0 card](../../sources/huggingface.co/fibo-edit/2026-10-26.md),
  [Replicate 1.0](../../sources/replicate.com/bria-fibo-edit/2026-10-26.md),
  [fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).
- **Versus Fibo 2 / Fibo 2 Edit (Oct 2026):** Fibo 2 adds 12 aspect ratios (21 total) and a generation
  sibling in the same API, plus four named photographic styles that apply to generation only; Bria says
  "Same API, nothing to change
  in your code" and advertises 1087 Elo on AA's open-weights board
  ([Fibo 2 release note](../../sources/bria.ai/fibo-edit-1-5-successor-whats-new/2026-10-26.md)). The
  structural contract (images/instruction/mask/seed) carried over, so 1.5-era integrations kept working
  — which is also why a 1.5-specific request cannot be addressed first-party.
- **Versus BRIA Eraser / GenFill:** those are single-purpose utilities, not editors. On fal they are
  legacy `proxy` endpoints dated 2024-12-19 (`fal-ai/bria/eraser`, `fal-ai/bria/genfill`,
  `fal-ai/bria/expand`), plus a newer serverless `bria/genfill/v2` (2026-06-08). BRIA keeps the same
  split on its own API: 1.5-era docs list 23 separate endpoints (`/erase`, `/gen_fill`,
  `/remove_background`, `/replace_background`, `/expand`, `/restore`, `/relight`, …) beside
  `/image/edit` ([fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md),
  [archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)). Eraser
  and GenFill remove or fill a region on command; 1.5 takes an instruction, optional references and an
  optional mask and re-renders the whole image under that instruction. They are complementary, not
  tiers, and several utilities carry the same $0.032/image list price as the editor (Eraser, Gen Fill,
  Image Expansion) while others differ (background removal $0.018, erase foreground $0.05)
  ([pricing](../../sources/bria.ai/fibo-edit-1-5-api-pricing/2026-10-26.md)).

## Documented capabilities

All of the following is vendor or host documentation. No tests were run.

- **Instruction editing with a JSON intermediate.** The documented pipeline is two-step: a VLM bridge
  ("powered by Gemini 2.5 Flash" on Bria's side) converts text plus image/mask into a
  `structured_instruction` JSON, then the model renders from that JSON
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)). The
  JSON can be inspected, edited, cached, or supplied directly to bypass the bridge
  (`/v2/structured_instruction/generate` is the standalone translation endpoint).
- **Multi-reference input, 1–4 images.** "1-4 reference images (files or URLs). Order is significant:
  the instruction is resolved against the images in the order they are sent"
  ([fal schema](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)); Bria's own wording is
  "You can now provide **1 to 4 reference images** in a single edit request"
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)). More
  than four returns an error. In the open-weights pipeline, a list of images "is treated as multiple
  references (not a batch): the first reference sets the output aspect ratio, and every reference is
  VAE-encoded at its own resolution and added as a separate conditioning stream"
  ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md)).
- **Native masking, single reference only.** "White where the model should edit, black elsewhere …
  Single-reference requests only, and it must be the same size as that image. A masked edit comes back
  at the reference's own resolution" ([fal schema](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).
  Bria describes the behaviour as "generative replacement … rather than modifying the existing
  pixels" ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)).
- **Nine aspect ratios.** `1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9`, defaulting to the first
  reference's ratio; the 21-ratio set is Fibo 2's, not 1.5's
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md),
  [Fibo 2 release note](../../sources/bria.ai/fibo-edit-1-5-successor-whats-new/2026-10-26.md)).
- **Reproducibility by seed + JSON.** "To recreate a specific result: You must provide the exact
  source images, the mask (if used), the `structured_instruction` returned in the original response,
  and the `seed` used to create it" ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)).
  fal returns the `structured_instruction` alongside the image for the same reason, and accepts a
  previous response's JSON as input ([fal schema](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).
- **Base and Turbo inference settings.** Base: 30 steps, CFG 5. Turbo: 4 steps, CFG 1.0 — "this is a
  distilled model … no classifier-free guidance needed"
  ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md),
  [Turbo card](../../sources/huggingface.co/fibo-edit-1-5-turbo/2026-10-26.md)).
- **Structured prompt vocabulary.** The JSON carries `context`, `edit_instruction`, `text_render[]`,
  `background_setting`, `photographic_characteristics` (focal length, camera angle, focus, depth of
  field), `aesthetics`, `short_description`, `objects[]` (each with `relationship` required),
  `artistic_style`, `lighting`, `style_medium`
  ([fal schema](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).
- **Output format.** Bria's API takes `output_type: png | jpeg` (default `png`); fal exposes no format
  control and returns `image` plus a single-element `images` array "kept for callers of the earlier Fibo
  Edit endpoint"
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md),
  [fal schema](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).
- **fal's task-shaped 1.5 endpoints.** `expand` extends a canvas "to any of 9 aspect ratios or a custom
  canvas up to 25 megapixels … with the original pixels kept at full resolution"; `virtual-try-on`
  takes a person photo plus "one to three garment or accessory reference images"; `product-holding`
  takes a person photo plus one to three product references. Both task endpoints accept an optional
  instruction and default to the source aspect ratio
  ([fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).

### Marketing claims, kept separate

- "Ranking among the top models in open benchmarks for prompt adherence and quality" — no board, rank,
  sample count or date ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md)).
- "Moves beyond 'prompt drift' … deterministic results", "pixel-perfect precision", "zero copyright
  infringement risks" — vendor framing repeated across both cards
  ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md),
  [Turbo card](../../sources/huggingface.co/fibo-edit-1-5-turbo/2026-10-26.md)). "Deterministic" here
  means reproducible given the same inputs, seed and JSON — Bria's own recreation recipe — not that
  different prompts cannot produce different renders.
- "Arena-ranked among the top editing models" on the undated product page, again without a board
  ([product page](../../sources/bria.ai/fibo-edit-1-5-product-page/2026-10-26.md)).
- fal adds host-side framing absent from BRIA's copy: "Commercially safe, multi-reference image editing
  model … purpose-built for complex object and character combinations"
  ([fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).

## Limitations and constraints

- **No technical report.** Both 1.5 cards say "Technical report coming soon" and defer architecture to
  the FIBO text-to-image card; the only architecture table in the evidence is on the Turbo card
  ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md),
  [Turbo card](../../sources/huggingface.co/fibo-edit-1-5-turbo/2026-10-26.md)). The cited arXiv paper
  (2511.06876) is the FIBO generation paper, not an edit-specific one.
- **No independent measurement.** No leaderboard row, no third-party review, no reported quality delta
  over 1.0 ([AA board](../../sources/artificialanalysis.ai/fibo-edit-1-5/2026-10-26.md)).
- **Masking is single-reference.** With two or more images a mask is an error, so region-precise
  multi-reference compositing is not available
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)).
- **Aspect-ratio changes degrade on single-reference edits.** "the model was not trained to change
  aspect ratio dramatically from the source image — results may degrade"; fal's schema states the same
  restriction ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md),
  [fal schema](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).
- **No documented output resolution.** Neither the first-party schema nor fal's exposes a size control
  beyond aspect ratio, and no source states the pixel dimensions of an unmasked edit. Masked edits
  return at the reference's resolution. fal's `expand` is the only endpoint with a stated ceiling (25
  MP).
- **Parameter gaps.** No negative prompt, no `n`, no seed-grid, no output-format control on fal, no
  safety-checker toggle on fal's 1.5 endpoints
  ([fal schema](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).
- **The local path needs an external VLM.** The weights render from JSON; converting a plain
  instruction into JSON requires a separate promptify model
  (`briaai/FIBO-edit-gemini-prompt-to-JSON`) and a Gemini API key
  ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md)). Self-hosting therefore
  either sends prompts to Google or requires replacing the bridge.
- **Weights are non-commercial.** CC BY-NC 4.0 with a manual access gate; "commercial use of this model
  requires a separate commercial agreement with BRIA AI"
  ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md)).
- **Moderation is asymmetric.** Bria's API exposes three moderation switches that default to `true`
  and return 422 on failure; the weights have no filter at all; fal's 1.5 endpoints document none
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md),
  [safety](../../sources/bria.ai/fibo-edit-1-5-safety/2026-10-26.md)). A refusal on one route is
  evidence about that route only.
- **IP prompts are not blocked, just under-trained.** "Prompts that reference public figures, brands, or
  other protected content are not blocked, but the models are not trained on this type of data"
  ([safety](../../sources/bria.ai/fibo-edit-1-5-safety/2026-10-26.md)).
- **Ephemeral outputs and per-endpoint rate limits.** Result URLs are temporary — "Download and store
  the file yourself" ([working with images](../../sources/bria.ai/fibo-edit-1-5-working-with-images/2026-10-26.md)) —
  and limits are 10 / 60 / 1000 requests per minute per endpoint on Free / Pay-as-you-go / Enterprise
  ([rate limits](../../sources/bria.ai/fibo-edit-1-5-rate-limits/2026-10-26.md)).
- **Host coverage is thin.** fal is the only host serving 1.5; Replicate stops at 1.0
  ([Replicate](../../sources/replicate.com/bria-fibo-edit/2026-10-26.md)). fal publishes no model card,
  no resolution table and no statement of which checkpoint (Base or Turbo) its endpoints run.
- **Version ambiguity in BRIA's own docs.** The live documentation has no 1.5 page and no version
  selector; the only dated first-party 1.5-era specification is an archived OpenAPI snapshot
  ([archived API reference](../../sources/bria.ai/fibo-edit-1-5-api-reference/2026-10-26.md)).

## Access, pricing, licensing

### Pricing basis

BRIA bills **per image** — no per-megapixel, per-token or per-second image rate appears anywhere in
the price list ([pricing](../../sources/bria.ai/fibo-edit-1-5-api-pricing/2026-10-26.md)).

| Route | Price | Basis | Source |
| --- | --- | --- | --- |
| Bria API, "Fibo Edit" line | **$0.032 / image** | per image | [pricing](../../sources/bria.ai/fibo-edit-1-5-api-pricing/2026-10-26.md) |
| Bria API, Product Holding / Virtual Try-On | **$0.032 / image** each | per image | [pricing](../../sources/bria.ai/fibo-edit-1-5-api-pricing/2026-10-26.md) |
| fal, `bria/fibo-edit-1.5/edit` | **$0.04 / image** | `billing_unit: images` | [fal](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md) |
| fal, `.../expand`, `.../virtual-try-on`, `.../product-holding` | **$0.04 / image** | "regardless of resolution" | [fal](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md) |
| Replicate, `bria/fibo-edit` (1.0 only) | **$0.04 / image** ("25 images for $1") | per output image | [Replicate](../../sources/replicate.com/bria-fibo-edit/2026-10-26.md) |
| Weights (Base or Turbo) | free | non-commercial licence only | [Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md) |

Two cautions on the first-party figure. The price list names **"Fibo Edit"** with no version, and on
2026-10-26 the endpoint behind that line runs Fibo 2 — so $0.032 cannot be shown to be 1.5's price
rather than its successor's. And fal's $0.04 is 25% above Bria's list price while being the same
per-image basis, with no stated reason; Artificial Analysis's price column reproduces $40/1k for the
1.0 model and $32/1k for Fibo 2.0, which is consistent with the two vendors charging what their own
pages say and with the 1.5 price being unlisted
([AA board](../../sources/artificialanalysis.ai/fibo-edit-1-5/2026-10-26.md)).

Plan-level pricing: Free (100 generations, 10 rpm, cloud only), Pay-as-you-go ("Starting from $0.018
per generation", 60 rpm, capped indemnification), Enterprise (custom, unlimited IP indemnification,
"Commercial use rights for open-source models")
([pricing](../../sources/bria.ai/fibo-edit-1-5-api-pricing/2026-10-26.md)).

### Licensing

Three different grants apply and they are not interchangeable:

- **Weights.** CC BY-NC 4.0, `license_name` `bria-fibo-edit-1.5` / `bria-fibo-edit-1.5-turbo`, manual
  access gate. "Bria AI Model weights are open source for non commercial use only"; commercial use
  "requires a separate commercial agreement with BRIA AI"
  ([Base card](../../sources/huggingface.co/fibo-edit-1-5-base/2026-10-26.md),
  [Turbo card](../../sources/huggingface.co/fibo-edit-1-5-turbo/2026-10-26.md)). No commercial weight
  licence terms, price, or redistribution rule are published.
- **First-party API.** The public Terms of Use grant only "a personal, limited, non-exclusive …
  right to access and use the Services … solely for your own personal and non-commercial use", and
  state that "commercial use rights … are available exclusively to users with active paid subscriptions
  or valid licensing agreements". The same terms contain **no output-ownership clause**; the only
  mention of "Outputs" prohibits removing Bria's attribution metadata
  ([terms of use](../../sources/bria.ai/fibo-edit-1-5-terms-of-use/2026-10-26.md)). The pricing page
  goes further and lists "Commercial use rights for open-source models" as an **Enterprise** feature
  ([pricing](../../sources/bria.ai/fibo-edit-1-5-api-pricing/2026-10-26.md)) — which, if read
  literally, means a Pay-as-you-go customer may not have commercial rights to outputs from the
  open-weights models. That reading is not confirmed anywhere else.
- **Host.** fal marks all four 1.5 endpoints `licenseType: "commercial"` and runs them itself
  (`provider_type: "fal"`, `is_partner_api: false`), so fal is not merely forwarding Bria's API. Which
  agreement governs resale is not published
  ([fal catalogue](../../sources/fal.ai/bria-fibo-edit-1-5/2026-10-26.md)).

Provenance: Bria states that every output carries C2PA metadata and an attribution/watermark layer,
that the models are trained on "100% licensed data", and that full IP indemnity applies "for enterprise
customers only" ([safety](../../sources/bria.ai/fibo-edit-1-5-safety/2026-10-26.md)). The open weights
cannot carry a C2PA manifest unless the local pipeline adds one.

## Unresolved questions

1. **When exactly did 1.5 launch?** Weights appeared 2026-08-10 and fal published 2026-08-26, but no
   first-party announcement, changelog, or press release names FIBO-Edit 1.5.
2. **Is 1.5 still served first-party?** `/v2/image/edit` now runs Fibo 2, and BRIA documents no version
   parameter. Whether any first-party route still serves 1.5 — or whether 1.5 survives only as weights
   and on fal — is not stated.
3. **Which checkpoint do fal's endpoints run, Base or Turbo?** fal publishes no model card and the
   catalogue has no checkpoint field.
4. **Why is fal 25% above Bria's list price** ($0.04 vs $0.032), and why does Bria's "Fibo Edit" line
   not name a version?
5. **Does Artificial Analysis's "FIBO Edit" row reflect 1.0 or a later endpoint?** The row's
   `releaseDate` is 2026-01-20 and its `openWeightsUrl` points at `briaai/Fibo-Edit`, but AA does not
   state which host it ran, so the 915 Elo figure is not provably 1.0 weights.
6. **How much of the 1.0 → 2.0 gain (+173 Elo) did 1.5 capture?** No source measures 1.5 at all.
7. **Do BRIA's Fibo-2-era product endpoints (`/v2/image/edit/product/holding`,
   `/product/virtual-tryon`) still run 1.5?** fal's equivalents are explicitly built on FIBO-Edit-1.5;
   Bria's own product pages are gated/undated and do not name a model version.
8. **What is the output resolution of an unmasked edit?** No source states it.
9. **What are the commercial weight-licence terms** for 1.5, and does a Pay-as-you-go Bria customer
   have commercial rights to outputs from an open-weights model?
10. **Is Fibo 1.5 (text-to-image) the same base checkpoint** as 1.5 Edit, or a separate training run?
    Both appeared in the same July–August 2026 window with the same generation number.
11. **What changed in the VLM bridge between versions?** The 2026-08-27 snapshot names Gemini 2.5
    Flash; the live docs describe a "VLM Bridge" without naming a model.

## Evidence status

Evidence floor: **met.** First-party records: seven `bria.ai` captures — the 2026-08-27 OpenAPI
snapshot of the image-editing API, the pricing page, the product page, the January launch post, the
Fibo 2 successor note, the safety page and the Terms of Use — plus three `huggingface.co` model cards
published by BRIA AI (`Fibo-Edit-1.5-base`, `Fibo-Edit-1.5-turbo`, `Fibo-Edit`). Independent host
records: fal (catalogue metadata, model-page billing object and the machine-readable input/output
schema) and Replicate (the 1.0 model page, which also documents 1.5's absence). Independent benchmark:
Artificial Analysis's AA-Image-Editing v2.1. All were captured on 2026-10-26.

The weakest link is identity dating, not capability: 1.5 is established as a real, separately
obtainable version by its two weight repositories and by fal's endpoint naming, but the *release date*
rests on repository-creation and host-publish timestamps rather than on a vendor announcement, and
BRIA's own documentation never uses the string "1.5".

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base: the capability list is vendor and host documentation, the Elo figures are Artificial Analysis's
blind-vote results for the 1.0 and 2.0 models, and the price comparison is arithmetic on published
schedules. The next useful evidence would be a reproducible test against a named endpoint and date —
the same prompts and references on 1.0 weights, 1.5 Base, 1.5 Turbo and Fibo 2, scored for
single-reference fidelity, four-reference composition, masked-edit boundary behaviour, and identity
retention across a multi-turn edit — plus a check of which checkpoint fal actually serves.

# Fibo 2 (BRIA)

BRIA AI's structured-prompt image generation and editing model, released in the 2026-10-18 to
2026-10-20 window and now the model behind BRIA's existing `/v2/image/generate` and
`/v2/image/edit` endpoints — "Same API, nothing to change in your code"
([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)). It renders from a
JSON scene description (VGL) that it also returns on every result, and it is published as gated,
non-commercial weights as well as a hosted API
([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)). Independent blind-vote
leaderboards place it mid-pack overall (22nd of 76 editing entries, 23rd of 106 text-to-image
entries) but **+173 and +190 Elo above BRIA's own previous generation**, which is the clearest
evidence that it is a new model rather than a relabel
([AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)).

## Identity

- Canonical name: **Fibo 2**. BRIA's docs and release page write "Fibo 2"; its Artificial Analysis
  chart captions, fal's endpoint titles and BRIA's Hugging Face repo IDs write "2.0"
  ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md),
  [fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md),
  [weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)). The roster label "BRIA
  Fibo 2" is the vendor name plus the model name; it is not a first-party string.
- Vendor: **BRIA AI** (Tel Aviv / New York). `modelLab: "Bria AI"`, `modelFamily: "Fibo"` on fal
  ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)).
- First-party endpoints: `POST https://engine.prod.bria-api.com/v2/image/generate` and
  `POST https://engine.prod.bria-api.com/v2/image/edit`
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md),
  [edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md)). **There is no model-ID
  parameter.** Fibo 2 is what those endpoints run; the only model-version-like input the docs
  mention is a `model_id` for "tailored" models, which returns 422 for the Fibo 2-only aspect
  ratios.
- Host endpoints: fal `bria/fibo-2/generate` and `bria/fibo-2/edit`, $0.04 per image
  ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)). The roster's discovery path
  `bria/fibo-2` is fal's **group key** (`group.key: "bria-fibo-2"`), not a callable endpoint.
  Replicate does not host Fibo 2: the three plausible paths return 404 and the BRIA organization
  page lists only FIBO and FIBO Edit (checked 2026-10-26).
- Weights: `briaai/Fibo-2.0-dev` (generate) and `briaai/Fibo-2.0-edit-turbo` (edit), both gated,
  both ~8.13B parameters, both `BriaFibo2Pipeline` diffusers classes, edit tagged as a finetune of
  dev ([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)).
- Siblings, and how to tell them apart:
  - **FIBO / FIBO Lite / FIBO Edit** (2025-10 to 2026-01) are the previous generation. fal dates
    `bria/fibo/generate` 2025-10-29, `bria/fibo-lite/generate` 2025-12-16 and `bria/fibo-edit/edit`
    2026-01-20; Artificial Analysis lists them as separate entries — FIBO 849 and FIBO Lite 813 on
    the text-to-image board, FIBO Edit 915 on the editing board
    ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md),
    [AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)).
  - **Fibo Gen 1.5** (`bria/fibo-gen-1.5/text-to-image`, 2026-08-18) and **Fibo Edit 1.5**
    (`bria/fibo-edit-1.5/edit`, 2026-08-18) are the 1.5 generation, and they are a different model
    from Fibo 2, not a variant of it: fal keeps them live as separate endpoints, and BRIA's product
    endpoints "Bria Virtual Try-On (FIBO-Edit-1.5)", "Bria Product Holding (FIBO-Edit-1.5)" and
    "Bria Expand (FIBO-Edit-1.5)" are built on 1.5
    ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)). Fibo Edit 1.5 is the subject of the
    roster's separate row 23.
  - **Fibo Lite** is a smaller, on-prem tier of the same VGL family, not a Fibo 2 variant
    ([generation overview](../../sources/bria.ai/fibo-2-image-generation-overview/2026-10-26.md),
    [VGL](../../sources/bria.ai/fibo-2-vgl/2026-10-26.md)).
  - **BRIA's other lines are separate products.** fal lists `Bria Text-to-Image Base` (proxy,
    2024-12-19), `Bria RMBG 2.0` (proxy, 2024-12-19) and `Bria's VRMBG 3.0` (serverless,
    2026-06-08); Replicate lists `bria/image-3.2` and `bria/remove-background`
    ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md); Replicate checked 2026-10-26). Those are
    BRIA's
    older text-to-image and background-removal lines, not Fibo tiers, and none of the Fibo evidence
    on this page transfers to them.

### Release date

No first-party announcement carries a printed date. The window is bounded by four sources:

| Evidence | Date |
| --- | --- |
| Hugging Face repo `createdAt` (generate / edit) | 2026-10-18T13:44:10Z / 2026-10-19T13:11:51Z |
| fal endpoint `date` (generate / edit) | 2026-10-19T12:39:45Z / 2026-10-19T12:40:40Z |
| fal `publishedAt` (both) | 2026-10-20T15:00Z |
| Artificial Analysis `releaseDate` | 2026-10-20 |
| BRIA docs "What's new: Fibo 2" | "Last updated 2026-10-22" |

So first public availability was **2026-10-18 to 2026-10-20**, and the documentation was last
edited 2026-10-22
([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md),
[fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md),
[AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md),
[release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)). This is comfortably
inside the roster's one-year window (on or after 2025-10-26); no exception is needed. Artificial
Analysis's `introducedAt` (2026-10-15T23:06Z) is earlier than the weights and the host listing and
is unexplained.

### Naming ambiguity: "Fibo", "Fibo 2", and "Bria 4.0"

BRIA's marketing site has a third name in circulation. Its model catalogue card reads "**NEW!
Fibo - Bria 4.0** — Newest foundation model trained on structured JSON for precise, controllable
generation", while the `/fibo` page the card links to still describes the first-generation model
(8B parameters, 100M+ training images, "The 1st JSON-Native T2I Model"), and the site never writes
"Fibo 2" anywhere
([catalogue](../../sources/bria.ai/fibo-2-model-catalogue/2026-10-26.md)). Whether "Bria 4.0" is
the family's generation number (making Fibo 2 a Bria 4.0 model) or a label on the 1.x page cannot
be settled from the captured text. Treat "Bria 4.0" as an unresolved alias, not as a second model.

## Current assessment

**It is a new generation, not a repackaging.** Three independent lines of evidence agree. New weight
repos with a new diffusers pipeline class and ~8.13B parameters
([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)); new documented capabilities
that the 1.x line does not have — native masking, 1–4 image editing, 12 extra aspect ratios, four
named photographic styles
([edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md),
[release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)); and a large measured
quality step on the same harness, **+173 Elo on AA-Image-Editing v2.1** over FIBO Edit (915 → 1088)
and **+190 Elo on AA-Image-T2I v2.1** over FIBO (849 → 1039), against ±19 confidence intervals
([AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)).

**But it is mid-pack, not frontier.** On the boards read 2026-10-26, Fibo 2.0 displays **#22 of 76**
on editing (1088 ±14, 5,009 samples, rank range 18–25) and **#23 of 106** on text-to-image (1039
±12, 5,113 samples, 20–29). It is 111 Elo below the editing leader (GPT Image 2.5 Sunburst, 1199)
and 183 below the T2I leader (1222)
([AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)). Those ranks are six days after
AA's recorded release date on ~5k samples each, so they are early but not thin.

**Its niche is open weights plus structured control.** Among models AA records with an
`openWeightsUrl`, Fibo 2.0 is the highest-ranked editing entry on the board (the next is
Qwen-Image-2.1 at #23, 1081, statistically tied) and the third-ranked T2I entry (behind FLUX 3
Image Klein 1043 and Qwen-Image-2.1 1042, all inside overlapping intervals)
([AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)). The structured-prompt control is
the thing the older open-weights editors do not offer: a JSON scene document that can be stored,
diffed, and re-rendered with one attribute changed
([VGL](../../sources/bria.ai/fibo-2-vgl/2026-10-26.md)).

**It is current, not a retained specialist.** Fibo 2 is what BRIA's v2 generate and edit endpoints
now run, and it is the model BRIA's release page leads with. The retained specialists in the same
family are the older tiers (Fibo Lite for on-prem speed, FIBO Edit 1.5 for BRIA's product-shot
endpoints), not Fibo 2.

**One caveat cuts across the pitch.** A plain-prompt request does not go straight to Fibo 2: a VLM
bridge first writes the VGL, and in the standard pipeline that bridge is **Gemini 2.5 Flash**, a
third-party model
([generation overview](../../sources/bria.ai/fibo-2-image-generation-overview/2026-10-26.md)). Only
requests that pass a `structured_prompt`/`structured_instruction` bypass it. So "deterministic JSON
in, image out" describes the second half of the pipeline; the first half is a language model whose
output varies unless it is bypassed.

## Documented capabilities

All of the following is vendor or host documentation. No tests were run.

### Two-step pipeline and VGL

- **Translation, then rendering.** "A VLM Bridge converts your input (text/images) into a detailed
  `structured_prompt` (JSON). … Fibo 2 generates the final visual based on that deterministic JSON
  instruction"
  ([generation overview](../../sources/bria.ai/fibo-2-image-generation-overview/2026-10-26.md)).
  The standard bridge is Gemini 2.5 Flash; the "Fibo Lite Pipeline" uses BRIA's open-source
  FIBO-VLM plus the Fibo Lite model for fully local deployment.
- **VGL returned on every result.** `result.structured_prompt` on generate,
  `result.structured_instruction` on edit
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md),
  [edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md)).
- **VGL is a documented schema**, not an opaque string: `short_description`, `background_setting`,
  `style_medium` (enumerated: photography, digital illustration, 3D render, vector art, watercolour,
  oil painting, pencil sketch, anime, pixel art), `artistic_style`, `context`, `lighting`
  {conditions, direction, shadows}, `aesthetics` {composition, mood_atmosphere, color_palette as
  RGB triples}, `photographic_characteristics` {depth_of_field, focus, camera_angle,
  lens_focal_length}, `objects[]` (with `bounding_box` in normalized coordinates, `texture`,
  `relationship`, and person-only fields including `pose` keypoints and a Monk Skin Tone Scale
  value), and `text_render[]` for typography
  ([VGL](../../sources/bria.ai/fibo-2-vgl/2026-10-26.md)).
- **Bypass and refine.** Send a `structured_prompt` back with the same `seed` to recreate, or add a
  `prompt` to refine it
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)). Separate
  endpoints exist for translation only (`/v2/structured_prompt/generate`), for repairing a
  hand-edited VGL (`/v2/structured_prompt/generate_from_diff`), and for editing instructions
  (`/v2/structured_instruction/generate`)
  ([VGL](../../sources/bria.ai/fibo-2-vgl/2026-10-26.md)).
- **Family portability.** "A VGL document created in one part of your pipeline can be executed by a
  different Fibo model in another part without translation"
  ([VGL](../../sources/bria.ai/fibo-2-vgl/2026-10-26.md)) — a vendor claim about Fibo 2 and Fibo
  Lite.

### Generation (`/v2/image/generate`)

- **Input combinations** (mutually exclusive): `prompt`; `images`; `images` + `prompt`;
  `structured_prompt`; `structured_prompt` + `prompt`. `images` "currently supports a single image"
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)).
- **Resolution:** `1MP` (default) or `4MP`. 4MP is asynchronous only — "will increase latency by 30
  seconds", and "a synchronous 4MP request returns 422"
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)).
- **21 aspect ratios**, twelve of them new with Fibo 2: 16:10, 10:16, 2:1, 1:2, 21:9, 9:21, 3:1,
  1:3, 4:1, 1:4, 5:1, 1:5 on top of the previous nine
  ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)). They are Fibo 2
  features and return 422 on requests Fibo 2 does not serve (4MP, `style_id`, refinement with both
  `prompt` and a structured prompt, reference images without a prompt)
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)).
- **Four photographic styles:** `kodak_film`, `hard_flash`, `hazy_dreamy`, `rough_realism`; "A style
  applies to generation from a text prompt, so it doesn't combine with `structured_prompt` or
  reference images" ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)).
- **Seed, sync, webhook, output format** (`png`/`jpeg`), and an `ip_signal` flag that returns a
  `warning` when IP content is detected
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)).
- **Opt-in moderation flags:** `prompt_content_moderation`, `visual_input_content_moderation`,
  `visual_output_content_moderation`, each returning 422 on failure when enabled
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)).

### Editing (`/v2/image/edit`)

- **1–4 images per request**; more than four returns an error. Instructions refer to inputs as
  `<image_1>`, `<image_2>`, and so on
  ([edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md),
  [fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)).
- **Text or JSON instructions:** `instruction` (free-form) or `structured_instruction` (JSON)
  ([edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md)).
- **Native masking, single image only.** White regenerates, black is preserved, and "the masking
  logic operates as a generative replacement; the model generates entirely new content within the
  masked area". Masked output keeps the input's exact size — BRIA's worked example is a masked edit
  on a 3840×2160 input returning 3840×2160
  ([edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md)).
- **Aspect ratio:** fully supported for 2–4 image requests; for single-image requests "the model
  was not trained to change aspect ratio dramatically from the source image — results may degrade"
  ([edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md)).
- **Reproduction requires all four of** the exact source images, the mask (if used), the
  `structured_instruction`, and the `seed`
  ([edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md)).

### On fal

fal's two endpoints expose the same core surface with host-written descriptions: free-form prompt
expanded to VGL or a VGL document used directly, 21 aspect ratios "at about one megapixel", seed,
sync mode, a single reference image on generate, 1–4 images plus `mask_url` on edit, and a `style`
enum
([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)). fal's `style` enum uses display names
(`Kodak Film`, `Hard Flash`, `Hazy Dreamy`, `Rough Realism`) where BRIA's API uses snake_case
values.

### Marketing claims (labelled as claims)

- **"#1 open-weights image editing model on Artificial Analysis"**, "Elo of 1087", and "a top-2
  open-weights text-to-image model", Elo 1038
  ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)). The editing claim is
  corroborated by the independent capture; the T2I claim is not (see below).
- **"it edits better than closed models from Ideogram, ByteDance and Black Forest Labs"**
  ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)). Not checkable from
  the captured tables: the models above Fibo 2.0 on the editing board include OpenAI, Microsoft,
  Google, xAI, Alibaba and Tencent entries, and Bria's comparison is against specific named labs
  rather than ranks.
- **"trained on 100% licensed data"**, "Trained only on licensed data, with clear commercial
  rights", "100% Licensed Data" ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md),
  [catalogue](../../sources/bria.ai/fibo-2-model-catalogue/2026-10-26.md),
  [fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)). No dataset inventory was captured; BRIA
  links a separate "Licensed Training Catalog" page that this page did not read.
- **"strongest on reasoning and knowledge-heavy prompts the ones that need real understanding, not
  just a style match"** is fal's host copy summarising Bria's positioning, not a measurement
  ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)).
- **C2PA provenance and "visual birth certificate including copyrightability reports per image"**,
  "enterprise indemnification", "EU AI ACT Ready"
  ([pricing](../../sources/bria.ai/fibo-2-pricing/2026-10-26.md),
  [catalogue](../../sources/bria.ai/fibo-2-model-catalogue/2026-10-26.md)). These are compliance
  and provenance claims about BRIA's platform; none was verified.

## Limitations and constraints

- **The weights are not open source, and commercial use needs a separate agreement.** Both repos
  are gated; the licence is `other` / `license_name: bria-fibo` with a CC BY-NC 4.0 link, and the
  gate states "Bria AI Model weights are open source for non commercial use only" plus "commercial
  use of this model requires a separate commercial agreement with BRIA AI"
  ([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)). "Open-weights" (AA's and
  BRIA's word) is accurate in the sense that weights are obtainable; "open source" in the OSI sense
  is not.
- **No version pinning first-party.** The v2 endpoints silently switched to Fibo 2 — the release
  page's selling point is that existing code needs no change. A stored prompt or pipeline that was
  tuned against FIBO or Fibo Edit 1.5 now runs a different model, and no parameter selects the old
  one ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md),
  [generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)).
- **Default output is about one megapixel.** 4MP exists but is asynchronous only and costs an extra
  ~30 s per the docs; the pixel dimensions of either tier are not published
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)). fal exposes no
  resolution control at all ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)).
- **Masking and multi-reference are mutually exclusive.** Masks are single-image only; a mask with
  2–4 images returns an error
  ([edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md)).
- **Single-image aspect-ratio changes are documented as degradation-prone**, and multi-reference
  requests are capped at four images
  ([edit ref](../../sources/bria.ai/fibo-2-image-edit-api/2026-10-26.md)).
- **Prompt-based requests depend on a third-party bridge.** The standard pipeline uses Gemini 2.5
  Flash to write the VGL; the docs do not state that the bridge is seeded, so "same specification
  and seed, same output" is documented for VGL-based requests but not established for prompt-based
  ones ([generation overview](../../sources/bria.ai/fibo-2-image-generation-overview/2026-10-26.md),
  [VGL](../../sources/bria.ai/fibo-2-vgl/2026-10-26.md)).
- **Default moderation behaviour is undocumented.** Three moderation flags exist and are off unless
  requested; what the service filters by default is not stated
  ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md)). IP-bearing
  prompts are documented to yield "generic outputs" plus a warning flag — a policy statement, not
  an observed refusal
  ([generation overview](../../sources/bria.ai/fibo-2-image-generation-overview/2026-10-26.md)).
- **Host gaps on fal.** fal's endpoints drop BRIA's `resolution`, moderation toggles, `webhook_url`
  and `output_type`; fal does not set `hostingType` for either endpoint, so whether it runs the
  weights or proxies Bria is unstated; and fal exposes no `updated_at`, so the served checkpoint
  cannot be pinned ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)). fal's `style`
  description also refers to a `negative_prompt` field that is not in its schema.
- **No second independent host.** Replicate hosts FIBO and FIBO Edit but not Fibo 2; the only host
  record is fal (Replicate checked 2026-10-26).
- **No Fibo 2 technical report.** Both weight repos tag `arXiv:2511.06876`, which is the FIBO v1
  paper on structured captions (submitted 2025-11-10), not a Fibo 2 paper; no architecture, training
  or evaluation report for Fibo 2 was found
  ([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)). The ~8.13B parameter count
  is from safetensors metadata; the readable model card is behind the gate.
- **Adoption was small in the first week:** 1,267 and 1,083 downloads and 167 and 127 likes across
  the two repos by 2026-10-26
  ([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)). That is a signal about
  uptake, not about quality.
- **The vendor's "top-2 open-weights T2I" claim does not hold at capture.** Fibo 2.0 is third among
  AA's open-weights T2I entries by point estimate (1039 against FLUX 3 Image Klein's 1043 and
  Qwen-Image-2.1's 1042), though all three intervals overlap
  ([AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)). The editing "#1 open-weights"
  claim does hold on the same capture, with the caveat that Fibo 2.0 and Qwen-Image-2.1 are
  statistically tied.

## Access, pricing, licensing

### Pricing

| Route | Generation | Editing | Notes |
| --- | --- | --- | --- |
| BRIA API (first-party) | $0.032 / image | $0.032 / image | Rows are labelled "Fibo" and "Fibo Edit"; the structured-prompt translation step is listed separately at $0.02 / call; Fibo Lite is $0.0288 / image ([pricing](../../sources/bria.ai/fibo-2-pricing/2026-10-26.md)) |
| fal | $0.04 / image | $0.04 / image | `pricingInfoOverride: "Your request will cost $0.04 per image"` on both endpoints ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)) |
| Artificial Analysis price column | $32.0 / 1k images | $32.0 / 1k images | Matches BRIA's own $0.032 ([AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)) |

Three cautions on those numbers. First, the price list has no version column: it says "Fibo", not
"Fibo 2", so the $0.032 is the list price of the Fibo generation endpoint, which the docs say now
runs Fibo 2 — an inference from the 2026-10-19 page revision, not a labelled Fibo 2 rate
([pricing](../../sources/bria.ai/fibo-2-pricing/2026-10-26.md)). Second, the page does not say
whether a prompt-based request that runs the bridge is billed as $0.032 + $0.02 or as a flat $0.032.
Third, there is one flat per-image rate while the endpoint offers a 4MP tier; the docs do not state
what 4MP costs.

At $0.032–$0.04 per image, Fibo 2 is roughly one sixth the price of the frontier editors on AA's
price column ($210.7 / 1k for GPT Image 2.5 Sunburst, $270 for Krea 3 Ultra) and in the same band as
Nano Banana 2.1 ($33.6) and Seedream 5.0 Lite ($35)
([AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)). That is arithmetic on published
rates, not a value judgement: it is 111 Elo behind the editing leader.

### Licensing

- **Weights:** gated, `license_name: bria-fibo`, licence link to CC BY-NC 4.0, "non commercial use
  only", commercial use by separate agreement; the gate names
  `https://platform.bria.ai/licensing/pricing?model=fibo-2` as the commercial route, which is a
  client-side app that did not render at capture
  ([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)).
- **Hosted API:** BRIA's price list and docs describe the platform as licensed-data, commercial-use
  oriented, with C2PA provenance and "enterprise indemnification" claims
  ([pricing](../../sources/bria.ai/fibo-2-pricing/2026-10-26.md),
  [catalogue](../../sources/bria.ai/fibo-2-model-catalogue/2026-10-26.md)). BRIA's terms-of-use page
  was not captured, so the API licence terms themselves are unverified here.
- **fal:** `licenseType: "commercial"` is fal's statement about use through fal, not a BRIA licence
  statement ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)).

## Unresolved questions

1. **Is "Bria 4.0" the same thing as Fibo 2?** BRIA's catalogue card says "Fibo - Bria 4.0" while
   the linked page describes the 8B first-generation model and the site never says "Fibo 2"
   ([catalogue](../../sources/bria.ai/fibo-2-model-catalogue/2026-10-26.md)).
2. **Is the previous generation still reachable first-party?** The v2 endpoints now run Fibo 2 with
   no version parameter. Whether FIBO or Fibo Edit 1.5 can still be called through BRIA's API under
   another route is not documented
   ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)).
3. **What is Fibo 2's architecture, and what exactly was trained?** ~8.13B parameters and a
   `BriaFibo2Pipeline` are all that is readable; the card is gated and the only paper referenced is
   the FIBO v1 report
   ([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)).
4. **Is prompt-based output actually reproducible?** VGL + seed is documented as reproducible; the
   bridge that writes the VGL is a separate model and the docs do not say it is seeded
   ([VGL](../../sources/bria.ai/fibo-2-vgl/2026-10-26.md)).
5. **What does the 4MP tier render, and what does it cost?** Undocumented pixel dimensions and no
   separate price ([generate ref](../../sources/bria.ai/fibo-2-image-generate-api/2026-10-26.md),
   [pricing](../../sources/bria.ai/fibo-2-pricing/2026-10-26.md)).
6. **Which checkpoint does each route serve?** BRIA exposes no version; fal exposes no `updated_at`
   and no `hostingType`; whether fal serves `Fibo-2.0-dev`/`edit-turbo` or a Bria-internal build is
   unstated ([fal](../../sources/fal.ai/fibo-2/2026-10-26/index.md)).
7. **Is Fibo 2 Edit the same model as the published `Fibo-2.0-edit-turbo` weights?** The repo is
   tagged "turbo" and "distillation", and BRIA's docs never use the word turbo
   ([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)).
8. **Is the VGL schema identical to Fibo 1.x's structured prompt?** The family-portability claim
   implies yes for Fibo 2 ↔ Fibo Lite; nothing compares it to 1.x
   ([VGL](../../sources/bria.ai/fibo-2-vgl/2026-10-26.md)).
9. **What are BRIA's commercial weight-licence terms and prices?** The licensing app did not render
   ([weights](../../sources/huggingface.co/fibo-2-weights/2026-10-26.md)).
10. **Was the "top-2 open-weights T2I" claim true when published?** The 2026-10-26 capture does not
    support it — Fibo 2.0 ranks third among open-weights entries there — so either the board moved
    or Bria read a filtered view
    ([AA](../../sources/artificialanalysis.ai/fibo-2/2026-10-26.md)).
11. **Does the "edits better than closed models from Ideogram, ByteDance and Black Forest Labs"
    claim hold per model?** The captured board puts several closed models far above Fibo 2.0, so
    the claim is narrower than "better than all closed models"; no per-model comparison table was
    captured ([release page](../../sources/bria.ai/fibo-2-release-notes/2026-10-26.md)).

## Evidence status

Evidence floor: **met.** Seven first-party BRIA records (release page, VGL spec, generation
overview, generate reference, edit reference, price list, marketing catalogue), one first-party
weights repository record (Hugging Face, gated, read through its metadata API), one independent
host record (fal catalogue, endpoint schemas and model pages), one independent benchmark capture
(Artificial Analysis editing and T2I boards), and one negative host record (Replicate). All were
captured on 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this
knowledge base. Capability descriptions are BRIA's or fal's; quality figures are Artificial
Analysis's blind-vote Elo; the licensing statements are Hugging Face metadata and a gated-form
notice. The vendor's "#1 / top-2 open-weights" claims are recorded as claims and checked against
the independent capture, not adopted.

The next useful evidence would be a small reproducible test set against named endpoints: a VGL
re-render at a fixed seed to test the reproducibility claim; the same prompt run through the
generate endpoint with and without a `structured_prompt` to isolate the Gemini 2.5 Flash bridge's
contribution; a 4-image edit and a masked 4K edit on fal and on BRIA's API to compare resolution
behaviour and price; and a check of whether a BRIA-API request and a fal request on identical inputs
return the same weights' output.

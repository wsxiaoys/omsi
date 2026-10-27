# FLUX 3 Image Klein

Black Forest Labs' compact open-weights member of the FLUX 3 Image family, released
**2026-10-15**. It is a 5.6B-parameter image generator that handles text-to-image, instruction
editing and multi-reference composition in one model, and it is the FLUX 3 family's second
open-weights release and its first image model with downloadable weights
([BFL launch post](../../sources/bfl.ai/flux-3-image-klein-blog/2026-10-26.md),
[BFL release note](../../sources/bfl.ai/flux-3-image-klein-release-note/2026-10-26.md)). The same
request shape runs on the parent model, so BFL frames migration as "switching the endpoint".

The roster label "FLUX 3 [klein]" is a discovery label. BFL does not bracket this model; the
canonical name is **FLUX 3 Image Klein**.

## Identity

- Canonical name: **FLUX 3 Image Klein**. Vendor: Black Forest Labs.
- First-party endpoint: `POST /v1/flux-3-image-klein`, serving the **distilled** checkpoint
  ([API reference](../../sources/bfl.ai/flux-3-image-klein-api-reference/2026-10-26.md)).
- Weights: `black-forest-labs/flux-3-image-klein` (distilled),
  `black-forest-labs/flux-3-image-klein-base` (undistilled), plus a separate prompt-upsampler
  model `black-forest-labs/flux-3-image-klein-pup`
  ([distilled card](../../sources/huggingface.co/flux-3-image-klein/2026-10-26.md),
  [base card](../../sources/huggingface.co/flux-3-image-klein-base/2026-10-26.md),
  [upsampler card](../../sources/huggingface.co/flux-3-image-klein-pup/2026-10-26.md)).
- Host endpoints: fal `blackforestlabs/flux-3/klein/{text-to-image,edit-image}`
  ([fal](../../sources/fal.ai/flux-3-klein/2026-10-26.md)); Replicate
  `replicate/flux-3-klein-image-lora`
  ([Replicate](../../sources/replicate.com/flux-3-klein-image-lora/2026-10-26.md)).
- Parameter count: **5.6B refers to the image transformer only** — "the text encoder is separate"
  ([card](../../sources/huggingface.co/flux-3-image-klein/2026-10-26.md)), and Hugging Face's
  safetensors index for the distilled repository reports 5,548,681,984 parameters in an ~11.1 GB
  BF16 checkpoint. The text encoder is Qwen3-VL-4B-Instruct, so the total download and memory
  footprint is larger than "5.6B" suggests.
- Aliases and naming drift:
  - "FLUX.3 Klein" — fal's display name.
  - "Flux 3 Klein Image" — from Replicate's tagline, "Generate images from Flux 3 Klein Image
    using your own LoRA".
  - "standard" and "turbo" — ComfyUI's names for the **base** and **distilled** checkpoints
    respectively ([Comfy](../../sources/comfy.org/flux-3-image-klein/2026-10-26.md)).
  - "FLUX 3 [klein]" — the roster's discovery label only.
- Release date: **2026-10-15** (BFL release note and launch post both dated that day; fal published
  its endpoints 2026-10-15; the Hugging Face repositories were created 2026-10-13/14). This is
  inside the one-year window (cutoff 2025-10-26).
- Siblings: **[FLUX 3 Image](flux-3-image.md)** (the hosted parent; only Klein has published
  weights among the image tiers, since BFL calls Klein "the second open weights release from the
  FLUX 3 family" —
  [launch post](../../sources/bfl.ai/flux-3-image-klein-blog/2026-10-26.md)); FLUX 3 Video, FLUX 3
  Action and [FLUX 3 Max](flux-3-max.md) elsewhere in the FLUX 3 family; and the prior generation
  [FLUX.2 [pro]](flux-2-pro.md), [max](flux-2-max.md), [flex](flux-2-flex.md),
  [dev](flux-2-dev.md), and [klein] [4B](flux-2-klein-4b.md) / [9B](flux-2-klein-9b.md).

### Identity questions that are settled

- **It is a distinct model tier, not a repackaging.** Different parameter count (5.6B), separate
  downloadable weights, separate licence, separate price schedule ($0.009 vs $0.048 per 1K image),
  and a measurably different quality level than the parent (below). BFL describes it as "a compact,
  open-weights version of FLUX 3 Image" with "the same features"
  ([docs](../../sources/bfl.ai/flux-3-image-klein-docs/2026-10-26.md)); the feature set matches,
  the artifact does not.
- **Two checkpoints, one model identity.** Klein (distilled, 16 steps, CFG 1) and Klein Base
  (undistilled, 50 steps, CFG 3.5) are both 5.6B and share an architecture, so a LoRA trained on
  Base loads into Distilled without conversion. Only Distilled is served first-party; Base is
  published for fine-tuning and is available as plain inference only through third-party
  deployments such as Replicate. Both stay obtainable, the difference is a caller-visible choice
  (16 vs 50 steps, LoRA-compatible vs training target), and each has its own model card — so this
  page keeps one identity with a checkpoint split rather than two pages.
- **It is not FLUX.2 [klein].** The prior generation has its own pages:
  [FLUX.2 [klein] 4B](flux-2-klein-4b.md) and [FLUX.2 [klein] 9B](flux-2-klein-9b.md). Klein 3 has
  fewer parameters than FLUX.2 [klein] 9B (5.6B vs 9B) and scores higher on independent preference
  votes, so findings do not transfer in either direction.

### FLUX 3 Max is a video model

The roster initially treated "FLUX 3 Max" as a FLUX 3 image tier (row 18). The captured evidence
describes it as a **video** model: fal's `blackforestlabs/flux-3-max/*` endpoints are
text-to-video, image-to-video and keyframes-to-video, and fal calls it "a post-trained variant of
FLUX 3 Video" ([fal catalogue](../../sources/fal.ai/flux-3-klein/2026-10-26.md)). The dedicated
[FLUX 3 Max](flux-3-max.md) page records the identity correction; no first-party FLUX 3 image
model above FLUX 3 Image was found.

## Current assessment

Klein is the cheap, controllable, self-hostable rung of the FLUX 3 image line. It buys FLUX 3
Image's interface — one endpoint, prompt-selected generate-or-edit, up to ten references,
bounding-box layout control, 15 aspect ratios, up to 4K — at roughly **one fifth the price** and
with weights you can run yourself. It does not buy the parent's quality: on Artificial Analysis'
blind-preference arena it trails FLUX 3 Image by 74.5 Elo on text-to-image and 50.5 on editing,
both outside the confidence intervals
([AA](../../sources/artificialanalysis.ai/flux-3-image-klein/2026-10-26.md)).

Three things distinguish Klein from the rest of the open-weights field, and all three are
constraints as much as features:

1. **The prompt upsampler is mandatory in practice.** BFL's documentation says plainly "Do not use
   Klein without the prompt upsampler" and "Do not use it without its prompt upsampler"
   ([docs](../../sources/bfl.ai/flux-3-image-klein-docs/2026-10-26.md)). The model expects full
   scene captions; a typed short prompt produces generic output. Self-hosting therefore means
   running a second 9B model with an 18.8 GB download and about 28 GB more GPU memory
   ([upsampler card](../../sources/huggingface.co/flux-3-image-klein-pup/2026-10-26.md)).
2. **Bounding boxes are soft layout guidance, not masks.** The model card states that boxes "guide
   placement and scale; they do not constrain pixels to a hard mask", that an element can extend
   past its box, and that "edits can change content outside the requested region"
   ([card](../../sources/huggingface.co/flux-3-image-klein/2026-10-26.md)). BFL's own launch post
   claims "pixel-perfect editing" for Klein, while Klein's model card says boxes are not a hard
   mask; the card is the more specific and more cautious statement, so it is the one to design
   around.
3. **The licence is open weights, not open source.** FLUX Kommunity License v1.0: non-commercial
   use plus a commercial-*output* exception under US$5M revenue, with commercial fine-tuning and
   distribution explicitly excluded.

Against its predecessor, BFL claims +91 Elo (text-to-image) and +70 (editing) over FLUX.2 [klein]
9B with 38% fewer parameters. AA independently measures the same direction at **+113.2** and
**+57.1**. The direction is corroborated; the magnitudes are not, and BFL publishes no method.

## Documented capabilities

Vendor and host documentation only — no direct tests were run for this page.

- **One endpoint, prompt-selected mode.** Text-to-image and editing share
  `POST /v1/flux-3-image-klein`; supplying `images` selects editing
  ([API reference](../../sources/bfl.ai/flux-3-image-klein-api-reference/2026-10-26.md)). BFL
  states Klein takes "the same request as FLUX 3 Image", and the changelog describes that
  request as "One endpoint: the prompt decides whether to generate or edit. There is no `mode`
  field" ([release note](../../sources/bfl.ai/flux-3-image-klein-release-note/2026-10-26.md)).
- **Up to 10 reference images**, the first setting the default output size
  ([API reference](../../sources/bfl.ai/flux-3-image-klein-api-reference/2026-10-26.md); fal
  states the same ten-reference ceiling). Replicate's captured deployment exposes **no image input
  at all** — its parameters are prompt, size, steps, guidance and seed only, so editing is
  unavailable there ([Replicate](../../sources/replicate.com/flux-3-klein-image-lora/2026-10-26.md)).
- **Resolution.** Five named tiers — `768sq`, `1k`, `1.5k`, `2k`, `4k` — or explicit `width`/
  `height` in [64, 6256] px with a 16,822,272-pixel (16.8 MP) cap. 15 named aspect ratios plus
  `auto`. BFL's launch post and ComfyUI both say Klein "generates natively at 4K"; no captured
  source documents the pipeline for that tier.
- **Bounding boxes in the prompt.** Append a JSON list of boxes on a 0–1000 `[top, left, bottom,
  right]` grid and tag elements by `<id>` in the caption. For edits, boxes can keep, move, resize,
  replace or remove objects across references (`source_box` / `target_box` / `source_image_index`)
  ([card](../../sources/huggingface.co/flux-3-image-klein/2026-10-26.md),
  [fal](../../sources/fal.ai/flux-3-klein/2026-10-26.md)).
- **Text rendering inside images** is listed as a key feature; the card simultaneously warns
  rendered text "may be inaccurate or subject to distortion".
- **Seed reproducibility.** Same seed + same prompt + same model version reproduces the image
  (BFL); fal and Replicate expose the seed identically.
- **LoRA training on Base.** AI Toolkit (`arch: flux3`) or Diffusers; a rank-32 LoRA on ~20 images
  trains in ~4.5 h on one GPU, and the result loads into Distilled at 16 steps with a recommended
  scale of 0.75. fal sells this as a hosted trainer plus LoRA inference endpoints.
- **Quantized builds.** FP8, INT8 and NVFP4 variants ship alongside BF16
  ([launch post](../../sources/bfl.ai/flux-3-image-klein-blog/2026-10-26.md),
  [Comfy](../../sources/comfy.org/flux-3-image-klein/2026-10-26.md)).
- **Day-one framework support:** ComfyUI, Diffusers, TensorRT-LLM, SGLang Diffusion, vLLM-Omni;
  NVIDIA NeMo AutoModel recipes.

### Marketing claims, kept separate

Recorded as vendor assertions, not findings:

- "Leading open weights quality with fewer parameters"; "ranks first in text-to-image,
  multi-reference generation and image editing, ahead of larger open weights models" and "above
  the closed models in the comparison, Ideogram V4.5 and FLUX.2 [pro]"
  ([launch post](../../sources/bfl.ai/flux-3-image-klein-blog/2026-10-26.md)). No method, prompt
  set, rater count or intervals are published. Independent Elo supports the FLUX.2 [pro] part
  clearly, the text-to-image part against Ideogram 4.5 clearly, and the *editing* part against
  Ideogram 4.5 only within noise (see AA record).
- "Closes the gap"-style framing is absent here, but "pixel-perfect editing" is used in the launch
  post and in the parent's docs, while Klein's own card says boxes are not a hard mask.
- "Extends the speed–quality Pareto frontier" and "delivers lower latency than Qwen-Image 2.1,
  FLUX.2 [pro], Ideogram V4.5 and Krea 2". BFL discloses that its own model was timed on its
  servers while competitors were timed from a client including polling and network — a
  methodological asymmetry that undercuts the comparison.
- "Runs on NVIDIA GeForce RTX GPUs with as little as 8GB of VRAM" (INT8 build) and "down to an
  RTX 3090". Neither statement names the framework, quantization build or image size, and both sit
  uneasily against the model card's measured 25–31 GB peak with the reference code.
- Safety: internal red-teaming plus external partner Cinder, "substantially fewer vulnerabilities
  than other popular open weights models" — no report, dataset or metric published.

## Limitations and constraints

- **Requires a prompt upsampler.** Documented as a hard usage constraint by BFL, and by ComfyUI.
  The upsampler is a 9B Qwen3.5-9B fine-tune whose output is English-only, whose reference images
  are downscaled (≤1 MP for one, less for several), and which "does not refuse requests"
  ([upsampler card](../../sources/huggingface.co/flux-3-image-klein-pup/2026-10-26.md)). Quality
  of the final image therefore depends on a component with its own failure modes.
- **No hard-mask editing.** Boxes set placement and scale only; content outside the requested
  region can change; small requested elements may not appear
  ([card](../../sources/huggingface.co/flux-3-image-klein/2026-10-26.md)).
- **Not a knowledge model.** "This model is not intended or able to provide factual information."
  The parent model has a default-on web grounding search exposed as a `grounding` flag
  ([parent docs](../../sources/bfl.ai/flux-3-image-klein-parent-features/2026-10-26.md)); Klein's
  request schema has **no `grounding` field**, and no captured source says whether Klein grounds at
  all. Do not assume the parent's factuality carries over.
- **Moderation is route-dependent.** `safety_tolerance` 0–7 (0 strictest, default 2), with the
  approved maximum set per route and organisation; unapproved levels return 422. Self-hosted
  reference code loads `Falconsai/nsfw_image_detection` unconditionally and offers optional
  `--safety` prompt/image checks. A refusal on one platform is therefore evidence about that route,
  not about the model.
- **Memory floor is configuration-dependent, and the sources disagree.** Model card: 31 GB BF16 /
  26 GB FP8 / 25 GB NVFP4 at 1024×1024 on a B200, *excluding* the upsampler (+~28 GB). Base
  checkpoint: 31 / 29 / 26 GB. BFL docs: "down to an RTX 3090". Launch post: 8 GB VRAM with INT8
  in ComfyUI/Diffusers. All three can be true of different builds; none states its build.
- **Host ceilings differ, sometimes sharply.** BFL allows 16.8 MP output and 10 references; fal
  allows 256–4096 px per side and 10 references; Replicate's deployment caps at 4,194,304 px
  (4 MP) and takes **no reference images**, i.e. generation only. Replicate is also the only
  captured host that serves the Base checkpoint for plain inference.
- **Step count is not portable.** BFL exposes 1–16 steps (default 16); fal fixes 12 and exposes no
  step field; Replicate exposes 0 (= 16 distilled / 50 base) or 1–100. Output from "the same
  prompt and seed" is not comparable across hosts.
- **Short prompts are a documented failure mode**, not a user error: "Short prompts produce generic
  output"; "a one-line edit instruction ('make it blue') reframes the shot".
- **4K ceiling.** Native 4K is claimed, but the only independent quality signal (AA) is arena
  preference with no resolution or bounding-box breakdown, so the 4K and layout claims are
  unverified.

## Access, pricing, licensing

**Price basis.** Per image by output resolution; text-to-image and editing cost the same.

| Resolution | BFL API ([release note](../../sources/bfl.ai/flux-3-image-klein-release-note/2026-10-26.md)) | fal ([catalogue](../../sources/fal.ai/flux-3-klein/2026-10-26.md)) |
| --- | --- | --- |
| 768 × 768 | $0.008 | $0.008 ("planned") |
| 1K | $0.009 | $0.009 ("planned") |
| 1.5K | $0.011 | $0.011 ("planned") |
| 2K | $0.014 | $0.014 ("planned") |
| 4K | $0.036 | $0.036 ("planned") |

- **BFL** also states 1 credit = $0.01 and that each submission response carries `cost`; the
  machine-readable pricing page renders its price cells empty, so the numbers come from the
  changelog ([pricing page](../../sources/bfl.ai/flux-3-image-klein-pricing/2026-10-26.md)).
- **fal** publishes the identical schedule but labels it "Planned pricing [...] Final pricing is
  not yet confirmed" — an unresolved hedge. fal also sells Klein LoRA inference at $0.012/MP
  (distilled) and $0.035/MP (base), and LoRA training at $0.0043/step ($4.30 for the default 1000
  steps).
- **Replicate** prices per run, not per megapixel: "approximately $0.035 to run", on an L40S,
  typically under 36 s. Not directly comparable with the per-image schedules.
- **Artificial Analysis** lists Klein at **$9 per 1k images**, which corroborates the $0.009/1K
  figure and the 5.3× gap to FLUX 3 Image's $48 ([AA](../../sources/artificialanalysis.ai/flux-3-image-klein/2026-10-26.md)).
- **Cost ratio to the parent:** ~5.3× cheaper at 1K ($0.009 vs $0.048) and ~17× cheaper at 4K
  ($0.036 vs $0.607).
- **Self-hosting** has no per-image price; the cost is hardware. Weights: ~11.1 GB BF16
  (5,548,681,984 parameters per Hugging Face's safetensors index), plus a separate ~18.8 GB
  upsampler.

**Licensing.** FLUX Kommunity License v1.0
([card](../../sources/huggingface.co/flux-3-image-klein/2026-10-26.md)):

- Non-commercial use; plus commercial **output** generation by Qualifying Users with less than
  US$5M gross annualised revenue including affiliates.
- "Its commercial-use exception is not blanket permission for commercial fine-tuning or
  distribution."
- Section 4 restrictions include military purposes, surveillance (including related R&D), biometric
  processing, CSAM and non-consensual intimate imagery, third-party rights including digital
  replica rights, and using the model or its outputs to improve a competing model.
- Larger organisations license commercially through BFL's self-hosted tiers, where FLUX 3 Image
  Klein is the entry model and appears in the Builder, Platform and Professional plans alongside
  FLUX.2 [klein] and [dev]
  ([BFL licensing](../../sources/bfl.ai/flux-3-image-klein-licensing-tiers/2026-10-26.md)).
- The **Qwen3-VL-4B-Instruct text encoder is Apache-2.0**, and the prompt upsampler is
  **Apache-2.0** as a whole — a different licence from the image generator.
- **Contradiction preserved:** BFL's launch post says the licence "allows free commercial use for
  individuals and companies with annual revenue under $5M". The model card limits the exception to
  commercial *output* and excludes commercial fine-tuning/distribution, and ComfyUI's FAQ
  independently says "commercial fine-tunes [...] needs a license". The narrow reading has two
  independent restatements and the broad reading one vendor sentence; the actual `LICENSE.md` is
  behind a gated-repo wall and was not retrieved, so the terms are known only at second hand.
- Commercial use of outputs through fal carries fal's own "commercial" licence label, which is
  fal's assertion about its service, not a statement of BFL's terms.

## Unresolved questions

1. **Does Klein ground?** The parent has default-on web search behind a `grounding` flag; Klein's
   schema has no such field and no source says whether the capability exists.
2. **Is 4K native or upscaled?** BFL's post and ComfyUI's FAQ say native; nothing documents the
   pipeline, and the API reference does not distinguish tiers.
3. **What configuration do the small-VRAM claims describe?** 8 GB INT8, "RTX 3090", and the card's
   25–31 GB reference-code figures are three different numbers with no stated build.
4. **Why does fal call its prices "planned [...] not yet confirmed"** when BFL publishes the same
   schedule as current?
5. **Which checkpoint and host did Artificial Analysis score?** AA's Klein row names neither, so
   its Elo cannot be attributed to distilled-16-step or base-50-step behaviour.
6. **How much does the upsampler actually matter?** "Noticeably weaker" and "generic output" are
   assertions; no source quantifies the gap, and no independent test isolates it.
7. **Does the parent's Elo gap hold outside preference voting?** AA measures arena preference, not
   layout compliance, typography fidelity, or multi-reference identity consistency — the three
   things Klein is sold on.
8. **What does "pixel restoration" do?** BFL's launch post says the API endpoint includes it "which
   preserves unedited regions of an image exactly"; no parameter, default, or documentation exists
   in the captured schema.

## Evidence status

Evidence floor: **met**. One first-party source family (BFL: launch post, release note, docs, API
reference, pricing page) plus three Hugging Face first-party model cards, and three independent
host records (fal, Replicate, ComfyUI), plus an independent third-party benchmark
(Artificial Analysis). fal's catalogue and request schemas are machine-readable and were captured
directly; the Replicate record is a Replicate-authored deployment of the open weights, not a
BFL-published model.

**No direct tests were run for this page.** Nothing here comes from generating an image, timing an
endpoint, or measuring memory. Every capability statement is vendor or host documentation; every
quality statement is either a vendor claim (marked as such) or Artificial Analysis' blind-preference
Elo, which measures preference and not task accuracy.

The next useful evidence would be: a reproducible small test set (dense typography, bounding-box
adherence, multi-reference identity consistency, sequential edit drift) run against named endpoints
on named dates, with the upsampler on and off to isolate its contribution; and a memory/latency
measurement of the INT8 build on a 24 GB consumer card, which is the configuration the 8 GB and
RTX 3090 claims implicitly promise.

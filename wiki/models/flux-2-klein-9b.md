# FLUX.2 [klein] 9B

Black Forest Labs' open-weights "flagship small" FLUX.2 image model, announced **2026-01-15**
with weights on Hugging Face the day before
([BFL release notes](../../sources/bfl.ai/flux2-klein-9b-release-notes/2026-10-26.md),
[HF repo metadata](../../sources/huggingface.co/flux-2-klein-9b-weights-repos/2026-10-26.md)).
It is a 9-billion-parameter rectified flow transformer paired with an 8B Qwen3 text embedder,
step-distilled to four inference steps, released under the **FLUX Non-Commercial License** —
unlike its 4B sibling, which is Apache 2.0.

It is a genuinely separate model from [FLUX.2 [pro]](flux-2-pro.md), not a repackaging: [pro] is
hosted-only with no published weights, exposes no sampling controls, and is licensed for
commercial output; [klein] 9B is downloadable (gated), non-commercial, and documented as
4-step step-distilled with a fixed 4-reference ceiling.

## Identity

- Canonical name: **FLUX.2 [klein] 9B**. Marketing spellings in circulation: "FLUX.2 Klein 9B",
  "Flux 2 Klein 9B", "FLUX 2 [klein] 9b" (fal's trainer display name uses the lower-case form).
- First-party endpoints:
  - `flux-2-klein-9b` — "A fixed snapshot of FLUX.2 [klein] 9B. Choose this when you need
    reproducibility" ([overview](../../sources/bfl.ai/flux2-klein-9b-overview/2026-10-26.md)).
  - `flux-2-klein-9b-preview` — "Our latest FLUX.2 [klein] 9B model with KV caching for improved
    performance" (same source). Same request/response contract; only the weights differ.
  - `flux-2-klein-9b-kv-finetuned` — managed LoRA inference, public beta since 2026-04-23
    ([release notes](../../sources/bfl.ai/flux2-klein-9b-release-notes/2026-10-26.md)).
- Weights:
  - `black-forest-labs/FLUX.2-klein-9B` — distilled, gated, `flux-non-commercial-license`
    ([model card](../../sources/huggingface.co/flux-2-klein-9b/2026-10-26.md)).
  - `black-forest-labs/FLUX.2-klein-base-9B` — undistilled Base, gated, same licence
    ([repo inventory](../../sources/huggingface.co/flux-2-klein-9b-weights-repos/2026-10-26.md)).
- Host endpoints:
  - fal: `fal-ai/flux-2/klein/9b` (text-to-image),
    `fal-ai/flux-2/klein/9b/edit` (editing),
    `fal-ai/flux-2/klein/9b/base/lora` (Base + your LoRA),
    `fal-ai/flux-2-klein-9b-base-trainer` (LoRA **training**)
    ([t2i](../../sources/fal.ai/flux-2-klein-9b/2026-10-26.md),
    [edit](../../sources/fal.ai/flux-2-klein-9b-edit/2026-10-26.md),
    [base LoRA](../../sources/fal.ai/flux-2-klein-9b-base-lora/2026-10-26.md),
    [trainer](../../sources/fal.ai/flux-2-klein-9b-base-trainer/2026-10-26.md)).
  - Replicate: `black-forest-labs/flux-2-klein-9b` (distilled) and
    `black-forest-labs/flux-2-klein-9b-base` (undistilled)
    ([distilled](../../sources/replicate.com/flux-2-klein-9b/2026-10-26.md),
    [base](../../sources/replicate.com/flux-2-klein-9b-base/2026-10-26.md)).
- Siblings: FLUX.2 [klein] 4B (Apache 2.0, ~13GB VRAM), [pro], [flex], [max], [dev]. BFL has
  since shipped a different family, FLUX 3 Image Klein (2026-10-01, 5.6B, FLUX Kommunity
  License), which is out of scope here
  ([release notes](../../sources/bfl.ai/flux2-klein-9b-release-notes/2026-10-26.md)).

### Distilled 9B vs Base 9B

Two obtainable checkpoints share the "9B" label and the non-commercial licence but not their
sampling regime or their role:

| | Distilled 9B | Base 9B |
| --- | --- | --- |
| Steps | 4, step-distilled | Not distilled; BFL's Diffusers example uses 50 |
| Purpose | Fast inference | Fine-tuning, LoRA training, research |
| Output diversity | Lower (BFL rates diversity only for Base) | "High"/"Highest" (BFL table) |
| First-party API | `flux-2-klein-9b` | "not offered on the public API" |
| Hosts | fal $0.006/MP; Replicate $0.015/output MP | fal $0.02/MP; Replicate $0.011/MP in+out |

Sources: [overview](../../sources/bfl.ai/flux2-klein-9b-overview/2026-10-26.md),
[training guide](../../sources/bfl.ai/flux2-klein-9b-training/2026-10-26.md), host records
above. Both hosts already price and list the two checkpoints separately, which is the strongest
available signal that they are not interchangeable. This page keeps them together because the
roster row is one model and no source treats Base as a different model *name*; the split
question is open (see below).

### The roster label points at a training endpoint

The curation roster's discovery path for this model is
`fal-ai/flux-2-klein-9b-base-trainer`. fal's catalogue classifies that endpoint as
`kind: training`, `category: training`, priced at **$0.0043 per step** ($4.30 for 1000 steps),
and its `inference_endpoint_ids` field points at `fal-ai/flux-2/klein/9b/base/lora`
([trainer record](../../sources/fal.ai/flux-2-klein-9b-base-trainer/2026-10-26.md)). It trains
LoRAs for the **Base** checkpoint; it does not serve the distilled model. Anyone reading the
roster label as "the model" would be looking at a fine-tuning product, not inference.

## Current assessment

FLUX.2 [klein] 9B is the family's speed tier with weights attached. The evidence supports:

- **A distinct model, not a re-badge.** Different parameterisation (9B flow + 8B Qwen3
  embedder), different licence, different reference ceiling, and its own endpoints and host
  listings. No source suggests it shares weights with [pro], [flex], or [max].
- **The trade is speed and locality for headroom.** Four steps and sub-second inference, at the
  cost of a 4-reference cap, no prompt upsampling, no grounding search, and a non-commercial
  licence that blocks commercial self-hosting. Where a reader needs commercial rights with open
  weights, the answer inside this family is [klein] 4B under Apache 2.0, not the 9B.
- **Open weights, gated access.** Both 9B repos are `gated: auto` on Hugging Face: you must
  accept the licence and acceptable-use policy before downloading
  ([card](../../sources/huggingface.co/flux-2-klein-9b/2026-10-26.md)).
- **Not a small download in practice.** "9B" counts the flow model; the text encoder is a
  separate 8B component, and the card quotes **~29GB VRAM**. That is above every 24GB consumer
  card, which contradicts the card's own "accessible on NVIDIA RTX 4090 and above" line — the
  card's example calls `enable_model_cpu_offload()`, one way the 4090 claim could hold.
- **Host prices span 2.5x for the same nominal model, and first-party is not the cheapest.**
  fal sells text-to-image at $0.006/MP, Replicate at $0.015/output MP, and BFL's release note
  quotes "from $0.015 / image". At 1024×1024 that is a real spread, not a rounding.

## Documented capabilities

All of the following is vendor or host documentation. **No direct tests were run for this
page.**

### Architecture and sampling

- "9 billion parameter rectified flow transformer", "Built on a 9B flow model with 8B Qwen3 text
  embedder, step-distilled to 4 inference steps"
  ([card](../../sources/huggingface.co/flux-2-klein-9b/2026-10-26.md)).
- BFL's comparison table lists "Inference steps: 4 (step-distilled)" and "Speed: Sub-second" for
  both 4B and 9B ([overview](../../sources/bfl.ai/flux2-klein-9b-overview/2026-10-26.md)).
- The reference Diffusers call uses `num_inference_steps=4, guidance_scale=1.0` at 1024×1024
  ([card](../../sources/huggingface.co/flux-2-klein-9b/2026-10-26.md)).
- The first-party API exposes **no** `steps` or `guidance` field at all — fixed configuration
  ([API reference](../../sources/bfl.ai/flux2-klein-9b-api-reference/2026-10-26.md)).
- fal exposes `num_inference_steps` **4–8, default 4**, plus `num_images` 1–4
  ([fal t2i](../../sources/fal.ai/flux-2-klein-9b/2026-10-26.md)). Runs above 4 steps are
  off-spec relative to BFL's distilled configuration; fal output at 8 steps is not evidence
  about the model as BFL ships it.

### Generation and editing in one model

- The same first-party endpoint accepts a prompt alone or with `input_image` …
  `input_image_4`; BFL's schema note reads "Input model for FLUX.2 Klein (non-base) - like Pro
  but max 4 images"
  ([API reference](../../sources/bfl.ai/flux2-klein-9b-api-reference/2026-10-26.md)).
- fal splits the same capability into two endpoints, text-to-image and `/edit`
  ([fal t2i](../../sources/fal.ai/flux-2-klein-9b/2026-10-26.md),
  [fal edit](../../sources/fal.ai/flux-2-klein-9b-edit/2026-10-26.md)).

### Multi-reference: four, with one dissent

- BFL: "Multi-reference — Up to 4"
  ([overview](../../sources/bfl.ai/flux2-klein-9b-overview/2026-10-26.md)), and the API schema
  has exactly four fixed image fields.
- fal edit: "The URLs of the images for editing. A maximum of 4 images are allowed."
- **Contradiction:** Replicate's Base 9B readme says "Combine up to 5 reference images"
  ([Replicate base](../../sources/replicate.com/flux-2-klein-9b-base/2026-10-26.md)). Three
  sources, two numbers. Either Base accepts one more reference than distilled, or the readme is
  wrong. Nothing captured resolves it, so treat 4 as the supported figure on the API and 5 as an
  unverified host claim about Base.

### Controls that are documented for this model

- **Seed** for reproducibility (first-party and both hosts).
- **Output format** `jpeg`/`png`/`webp`; default `jpeg` first-party, `png` on fal.
- **Dimensions** ≥ 64px per side first-party; fal accepts presets or explicit width/height up to
  14142px.
- **Safety tolerance** 0–7, default 2, with the approved maximum set per route and organisation;
  unapproved levels return 422
  ([API reference](../../sources/bfl.ai/flux2-klein-9b-api-reference/2026-10-26.md)).
- **Hex color control** in editing prompts — fal documents it for this endpoint specifically
  ("Precise modifications using natural language descriptions and hex color control")
  ([fal edit](../../sources/fal.ai/flux-2-klein-9b-edit/2026-10-26.md)). BFL documents hex
  control at family level; it is not [klein]-specific in the docs.
- **Prompt upsampling: absent.** "FLUX.2 [klein] does not include prompt upsampling"
  ([overview](../../sources/bfl.ai/flux2-klein-9b-overview/2026-10-26.md)).
- **Grounding search: absent** for [klein] (family table, same source).

### Marketing claims (not findings)

- "Sub-second generation", "as low as under a second", "in under half a second"
  ([card](../../sources/huggingface.co/flux-2-klein-9b/2026-10-26.md)).
- "Matches or exceeds models 5x its size" — repeated by Replicate. No benchmark, harness,
  dataset, or hardware is named in either place.
- "Defines the Pareto frontier for quality vs. latency" (card).
- BFL's marketing site is more modest than its model card: "[klein] — Fast and efficient:
  Optimized for rapid iteration and prototyping with excellent speed-to-quality ratio", and the
  same page's "Four variants" block omits [klein] entirely
  ([bfl.ai model page](../../sources/bfl.ai/flux2-klein-9b-models-page/2026-10-26.md)).

## Limitations and constraints

- **Non-commercial weights.** The 9B checkpoints are under the FLUX Non-Commercial License;
  only the 4B is Apache 2.0. Commercial use of the 9B is available through hosted services
  (BFL's API, fal, Replicate), each of which makes its own statement about output rights — fal's
  catalogue marks its endpoints "Commercial use", which is fal's statement about fal's service,
  not a relaxation of the weights licence
  ([fal t2i](../../sources/fal.ai/flux-2-klein-9b/2026-10-26.md)).
- **Gated download.** Both 9B repos require accepting the licence and BFL's Acceptable Use
  Policy; unauthenticated file requests return 401
  ([card](../../sources/huggingface.co/flux-2-klein-9b/2026-10-26.md)).
- **Filters are a licence obligation, not optional hardening.** The card states filters or
  manual review "must be used with the FLUX.2 [klein] 9B models under the terms of the FLUX
  Non-Commercial License". fal's `enable_safety_checker` defaults to on and returns flagged
  output as black images; disabling it requires account authorisation.
- **VRAM.** ~29GB per the card; 22GB VRAM + 64GB RAM for 9B Base *LoRA training* per BFL's
  training guide. The "13GB" figure that appears in the launch post is the 4B's.
- **Four references**, not eight or ten. Multi-image work at [pro]/[max] scale is not
  reproducible here.
- **No prompt upsampling**, so prompt quality is entirely the caller's. The card adds that
  "Prompt following is heavily influenced by the prompting style".
- **Self-reported quality limits:** "not intended or able to provide factual information", text
  "may be inaccurate or subject to distortion", may fail to follow prompts, may amplify
  training-data biases (card).
- **No resolution ceiling is documented for [klein].** The API schema bounds only the minimum
  (64px); the "up to 4MP" claim on BFL's site belongs to the [pro]/[flex] framing and the family
  marketing copy. fal's per-side 14142px cap is a host limit, not a model spec.
- **Host divergence in controls.** fal adds a steps range that first-party does not expose, and
  defaults to a different output format. Cross-host output comparisons need those pinned.

## Access, pricing, licensing

- **BFL first-party.** Megapixel-based, "first megapixel at a flat rate, then each additional MP
  adds to the total", with separate text-to-image and image-editing rates; the numeric cells are
  client-rendered and did not capture
  ([pricing page](../../sources/bfl.ai/flux2-klein-9b-pricing/2026-10-26.md)). The captured
  numbers are the launch figures: **9B from $0.015 / image**, 4B from $0.014 / image
  ([release notes](../../sources/bfl.ai/flux2-klein-9b-release-notes/2026-10-26.md)). LoRA
  requests on `flux-2-klein-9b-kv-finetuned` are billed at the base endpoint rate during beta.
- **fal.** Text-to-image **$0.006 per megapixel**; editing **$0.011 per input *and* output
  megapixel**, with inputs resized to 1MP (a 1024² output from a 512² input is $0.022); Base 9B
  LoRA inference **$0.02/MP**; LoRA training **$0.0043/step**
  ([t2i](../../sources/fal.ai/flux-2-klein-9b/2026-10-26.md),
  [edit](../../sources/fal.ai/flux-2-klein-9b-edit/2026-10-26.md),
  [base LoRA](../../sources/fal.ai/flux-2-klein-9b-base-lora/2026-10-26.md),
  [trainer](../../sources/fal.ai/flux-2-klein-9b-base-trainer/2026-10-26.md)).
- **Replicate.** Distilled: **$0.015 per output MP** plus **$0.002 per input MP**, H200,
  `p50price` $0.0063. Base: **$0.011 per input and output MP**, H100, `p50price` $0.029
  ([distilled](../../sources/replicate.com/flux-2-klein-9b/2026-10-26.md),
  [base](../../sources/replicate.com/flux-2-klein-9b-base/2026-10-26.md)).
- **Price spread, unexplained.** fal's $0.006/MP and Replicate's $0.015/output MP differ by
  2.5x for the same nominal model, and BFL's per-image figure sits with Replicate. The captured
  pages do not explain the gap (different hardware, a different snapshot, or fal absorbing
  margin), so treat the cheapest listing as a pricing observation, not a quality signal.
- **Licensing summary.** Weights: FLUX Non-Commercial License (9B, gated) vs Apache 2.0 (4B,
  ungated). Service: each host's own terms. Output provenance: the card says the first-party API
  applies cryptographically signed C2PA metadata and that the inference code includes an example
  pixel-layer watermark — whether hosts preserve that was not captured.

## Unresolved questions

1. **Should Base 9B be its own page?** It is separately obtainable, separately priced, and
   separately documented by both hosts, which meets most of the split test. It does not meet the
   naming test: no source gives it a distinct model name. Currently merged here with a checkpoint
   section; a split would need evidence that one verdict misleads a reader of the other.
2. **Which BFL snapshot do the hosts serve?** BFL runs a pinned `flux-2-klein-9b` and a moving
   `flux-2-klein-9b-preview` (KV caching). Replicate's served version dates 2026-05-05; fal's
   endpoints were updated 2026-07-09 and 2026-10-20. None of the host records says which one it
   tracks.
3. **How large is the preview speedup, if any?** BFL states KV caching "for improved
   performance" with no number. No independent latency measurement was captured.
4. **Is the reference limit 4 or 5 for Base?** BFL's schema and fal say 4; Replicate's Base
   readme says 5.
5. **What is the actual resolution ceiling for [klein]?** No captured first-party page states
   one for this model.
6. **Does the 9B really fit a 24GB card?** The card says ~29GB and, in the next sentence,
   "accessible on NVIDIA RTX 4090 and above".
7. **Does "9B" ever include the text encoder?** BFL's own text distinguishes the 9B flow model
   from the 8B Qwen3 embedder; hosts quote "nine billion parameter" without that caveat. Total
   resident parameters are therefore larger than 9B, and no captured source states the total.
8. **How do fal's 5–8 step runs relate to BFL's 4-step model?** fal exposes steps 4–8 with no
   note on quality or divergence above 4.
9. **Why is the 4B trainer deprecated on fal while the 9B trainer is active?** fal gives no
   reason or migration path.
10. **Is [klein] 9B still the right choice after FLUX 3 Image Klein (2026-10-01)?** BFL's
    release notes describe a newer open-weights small model in a different family; no captured
    source compares them, and that page is out of scope here.

## Evidence status

Everything above comes from vendor and host documentation captured on 2026-10-26. **No direct
tests have been run for this page.** The speed claims ("sub-second", "under half a second"),
the "matches or exceeds models 5x its size" claim, and fal's "enhanced realism, crisper text
generation" are recorded as claims, not findings.

Evidence floor: **met**. First-party sources: six BFL records (release notes, family overview,
API reference, pricing, training guide, marketing model page) plus two Hugging Face records
(model card, weights-repo inventory). Independent host records: four fal records and two
Replicate records.

The next useful evidence would be a small reproducible test on a named endpoint and date:
4-step vs 8-step divergence on fal, edit drift across sequential multi-reference edits, hex
colour fidelity, dense typography, and a measured latency and VRAM figure on a 24GB card.

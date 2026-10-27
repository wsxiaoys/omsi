# FLUX.2 [klein] 4B

Black Forest Labs' 4-billion-parameter FLUX.2 image model, released 2026-01-15 as the small, fast
member of the [klein] family
([BFL launch post](../../sources/bfl.ai/flux2-klein-4b-blog/2026-10-26.md)). It is the only FLUX.2
model whose weights are licensed **Apache 2.0**, and it is served both as open weights and on BFL's
own API, fal, and Replicate. It has an undistilled sibling, **FLUX.2 [klein] 4B Base**, which shares
the same architecture and license but is the fine-tuning target rather than the inference one.

## Identity

- Canonical name: **FLUX.2 [klein] 4B**. Marketing spellings seen: "FLUX.2 [klein] 4B", "FLUX 2
  [klein] 4b" (fal's trainer), "FLUX.2 klein 4B" (Replicate), "FLUX.2-klein-4B" (repository name).
  "klein" is German for "small" ([BFL launch post](../../sources/bfl.ai/flux2-klein-4b-blog/2026-10-26.md)).
- Weights: `black-forest-labs/FLUX.2-klein-4B` on Hugging Face — ungated, `license: apache-2.0`,
  created 2026-01-14, last modified 2026-02-24
  ([HF record](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md)).
- Undistilled sibling: `black-forest-labs/FLUX.2-klein-base-4B`, also Apache 2.0
  ([HF record](../../sources/huggingface.co/flux-2-klein-base-4b/2026-10-26.md)).
- First-party endpoint: `POST /v1/flux-2-klein-4b` — one endpoint for both text-to-image and editing
  ([BFL API reference](../../sources/bfl.ai/flux2-klein-4b-api-reference/2026-10-26.md)).
- Host endpoints on fal: `fal-ai/flux-2/klein/4b`, `.../4b/edit`, `.../4b/base`, `.../4b/base/edit`,
  `.../4b/base/lora`, plus the trainer `fal-ai/flux-2-klein-4b-base-trainer`
  ([fal catalogue record](../../sources/fal.ai/model-metadata-api-flux-2-klein-4b/2026-10-26.md)).
- Host endpoint on Replicate: `black-forest-labs/flux-2-klein-4b`, plus
  `black-forest-labs/flux-2-klein-4b-base`
  ([Replicate](../../sources/replicate.com/flux-2-klein-4b/2026-10-26.md)).
- Release date: **2026-01-15** (first-party launch post and dated changelog entry); weights appeared
  on Hugging Face 2026-01-14; fal's catalogue `date` for the first 4B endpoints is 2026-01-15 and
  Replicate's model creation date is 2026-01-15
  ([release notes](../../sources/bfl.ai/flux2-klein-4b-release-notes/2026-10-26.md)).
- Siblings that are **separate models**: [klein] 9B (different license, different architecture
  description), [pro], [flex], [max], [dev]. Findings here should not be transferred to them.

### The "4B" label is not the whole checkpoint

BFL calls the model "a 4 billion parameter rectified flow transformer"
([HF card](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md)). The repository also contains
a **Qwen3-family text encoder** (36 layers, hidden size 2560, intermediate 9728) and a FLUX.2 VAE, so
the download is materially larger than 4B parameters. BFL states the text encoder explicitly only for
the 9B ("8B Qwen3 text embedder"); for the 4B it is visible only in `text_encoder/config.json`. Treat
"4B" as the flow transformer's size, not the model's total size.

### Identity ambiguity: roster discovery path

The roster row for this model cites fal `fal-ai/flux-2-klein-4b-base-trainer` as its discovery path.
That endpoint is **deprecated** — "This endpoint is deprecated / This model is no longer supported",
last touched 2026-05-26
([fal trainer record](../../sources/fal.ai/flux-2-klein-4b-base-trainer/2026-10-26.md)). The live 4B
endpoints are the `fal-ai/flux-2/klein/4b` family. The roster label was a lead, not a citation; the
page above is the corrected identity.

### Base vs distilled

Both checkpoints are 4B flow transformers with identical `transformer/config.json` and
`text_encoder/config.json` shapes; only the `_name_or_path` differs (`klein-4b-distilled-diffusers`
vs `klein-4b-diffusers`)
([distilled card](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md),
[base card](../../sources/huggingface.co/flux-2-klein-base-4b/2026-10-26.md)). BFL describes Base as
"Undistilled, preserving complete training signal [...] Higher output diversity", and documents it as
the fine-tuning target, not an API model
([overview](../../sources/bfl.ai/flux2-klein-4b-overview/2026-10-26.md),
[training guide](../../sources/bfl.ai/flux2-klein-4b-training/2026-10-26.md)). Hosts expose the same
split in their schemas: fal's distilled endpoint allows 4–8 inference steps, its Base endpoint allows
4–50 (default 28) and adds an `acceleration` control
([fal distilled](../../sources/fal.ai/flux-2-klein-4b/2026-10-26.md),
[fal base](../../sources/fal.ai/flux-2-klein-4b-base/2026-10-26.md)).

Per the knowledge-base identity rules, Base and distilled are **kept on one page**: both are
obtainable, the difference changes the recommendation (speed vs fine-tunability), but every captured
source describes both together. The checkpoint history is recorded here rather than split out.

## Current assessment

FLUX.2 [klein] 4B is a real, distinct model — not a repackaging of [pro] or [dev] — and its
distinguishing feature is not quality but **price, licence, and footprint**. BFL sells it as "the
fastest and most affordable model, with open weights that run on consumer GPUs"
([API reference](../../sources/bfl.ai/flux2-klein-4b-api-reference/2026-10-26.md)), and the numbers
support the "cheapest" part: on BFL's API the 4B's first megapixel is $0.014 against [pro]'s $0.03 and
[max]'s $0.07 ([pricing](../../sources/bfl.ai/flux2-klein-4b-pricing/2026-10-26.md)); on Replicate it
is ~$0.001/MP ([Replicate](../../sources/replicate.com/flux-2-klein-4b/2026-10-26.md)).

The licence is the sharpest differentiator in the family. [klein] 9B, [dev], and the 9B Base all carry
the FLUX Non-Commercial License, while the 4B and 4B Base are Apache 2.0
([launch post](../../sources/bfl.ai/flux2-klein-4b-blog/2026-10-26.md),
[docs pricing table](../../sources/bfl.ai/flux2-klein-4b-pricing/2026-10-26.md)). For a
commercial deployment that must own its weights, the 4B is the only FLUX.2 option that needs no
commercial licence negotiation.

What the evidence does **not** support is a quality verdict. BFL claims it "matches or exceeds Qwen's
quality at a fraction of the latency and VRAM" and "punches above its size", but publishes no
benchmark names or numbers in the text
([launch post](../../sources/bfl.ai/flux2-klein-4b-blog/2026-10-26.md)). No independent measurement of
klein 4B quality was captured from any source. The practical reading is: pick it when latency,
per-image cost, or Apache-2.0 self-hosting dominate; do not assume it competes with [pro]/[max] on
editing consistency or typography.

What it descends from is undocumented. No first-party source says what the 4B was distilled from; the
only statement found is host copy on Replicate — "distilled from Black Forest Labs' larger FLUX 2 base
model" — which names no model ([Replicate](../../sources/replicate.com/flux-2-klein-4b/2026-10-26.md)).
"Separate model" here means separate weights, licence, endpoints and documentation, not a known
teacher-student link to [pro] or [dev].

One context fact matters for anyone choosing it now: BFL shipped a **FLUX 3 Image Klein** on
2026-10-15 — 5.6B, 16-step distilled, up to 4K and 10 references, $0.009 at 1k, under the FLUX
Kommunity License rather than Apache 2.0
([release notes](../../sources/bfl.ai/flux2-klein-4b-release-notes/2026-10-26.md)). The FLUX.2 4B
therefore competes with a newer, cheaper, larger sibling from the same vendor; the licence, not the
price, is what still argues for the FLUX.2 model.

## Documented capabilities

All of the following is vendor or host documentation. No capability below was tested for this page.

- **One model for generation and editing.** The same BFL endpoint takes an optional `input_image` (and
  `input_image_2..4`): a request without images generates, a request with them edits
  ([API reference](../../sources/bfl.ai/flux2-klein-4b-api-reference/2026-10-26.md)). fal splits the
  same capability across separate `/4b` and `/4b/edit` endpoints.
- **Multi-reference editing with a hard ceiling of 4 images.** BFL's comparison table gives [klein]
  "Up to 4" against [pro]/[flex]/[max]'s 8-via-API, 10-in-playground, and the schema has exactly four
  input-image fields ([overview](../../sources/bfl.ai/flux2-klein-4b-overview/2026-10-26.md)).
  fal independently caps `image_urls` at 4
  ([fal edit](../../sources/fal.ai/flux-2-klein-4b-edit/2026-10-26.md)). Replicate's Base page claims
  up to 10, which is inconsistent with every other source and with the family table
  ([contradiction](../../sources/replicate.com/flux-2-klein-4b-base/2026-10-26.md)).
- **4-step distilled inference.** BFL's API-model table lists "4 (step-distilled)" for both klein
  sizes, and the Hugging Face card's reference snippet uses `num_inference_steps=4` with
  `guidance_scale=1.0` ([overview](../../sources/bfl.ai/flux2-klein-4b-overview/2026-10-26.md),
  [HF card](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md)).
- **Speed.** BFL publishes ~0.3 s on a GB200 and ~1.2 s on an RTX 5090 for the 4B (against ~3 s / ~17 s
  for the 4B Base), and "sub-second inference" for the family
  ([model page](../../sources/bfl.ai/flux2-klein-4b-model-page/2026-10-26.md),
  [launch post](../../sources/bfl.ai/flux2-klein-4b-blog/2026-10-26.md)). fal's published example
  result for a 1024×768 generation reports `timings.inference = 0.169 s` and `safety_checker =
  0.019 s` ([fal](../../sources/fal.ai/flux-2-klein-4b/2026-10-26.md)). That is one host sample, not
  a benchmark.
- **Consumer-GPU footprint.** BFL quotes 8.4 GB VRAM for the 4B (9.2 GB for Base) on its product page
  but "~13GB VRAM" in the launch post, both model cards, and the docs overview — see
  [the contradiction](#unresolved-questions).
- **Resolution.** Replicate exposes `output_megapixels` up to **4**, the only explicit ceiling
  captured ([Replicate](../../sources/replicate.com/flux-2-klein-4b/2026-10-26.md)); BFL's schema
  documents only a minimum dimension of 64, and fal's named presets top out near 1 MP though custom
  dimensions are accepted. So "up to 4 MP" is a host configuration, not a first-party spec on any page
  captured here.
- **Hex colour control** is documented for klein editing by fal ("Precise modifications using natural
  language descriptions and hex color control"), and structured JSON prompting is documented for the
  FLUX.2 family generally, not for klein specifically
  ([fal edit](../../sources/fal.ai/flux-2-klein-4b-edit/2026-10-26.md)).
- **Fine-tuning.** Base is the training target; LoRA training needs a 12 GB GPU (32 GB RAM), and
  trained LoRAs can be served first-party through a `-finetuned` endpoint billed at the base rate
  during public beta ([training guide](../../sources/bfl.ai/flux2-klein-4b-training/2026-10-26.md),
  [release notes](../../sources/bfl.ai/flux2-klein-4b-release-notes/2026-10-26.md)). fal offers the
  same shape of path via a Base LoRA inference endpoint, but its paired 4B trainer is deprecated
  ([fal LoRA](../../sources/fal.ai/flux-2-klein-4b-base-lora/2026-10-26.md)).

### Marketing claims, kept separate

Recorded as vendor assertions, not findings:

- "State-of-the-art quality with end-to-end inference as low as under a second"; "matches or exceeds
  models 5x its size" (said of the 9B); "quality that punches above its size"
  ([launch post](../../sources/bfl.ai/flux2-klein-4b-blog/2026-10-26.md)).
- "Sub-second inference*, making it 30%+ faster than any competing model" — no competitor, no
  measurement ([model page](../../sources/bfl.ai/flux2-klein-4b-model-page/2026-10-26.md)).
- "Photorealistic outputs and high diversity, especially in the base variants"
  ([launch post](../../sources/bfl.ai/flux2-klein-4b-blog/2026-10-26.md)).
- Replicate: "brings professional image quality to smaller setups", "Unlike many image models that
  produce garbled or illegible text, FLUX.2 klein can generate clean typography"
  ([Replicate](../../sources/replicate.com/flux-2-klein-4b/2026-10-26.md)). BFL's own card lists
  inaccurate or distorted text under Limitations.

## Limitations and constraints

- **Four references, not ten.** The [klein] tier's multi-reference ceiling is half of [pro]'s, so
  workflows built on 8–10 reference images cannot be moved to the 4B unchanged.
- **No prompt upsampling.** "FLUX.2 [klein] does not include prompt upsampling. Write detailed,
  descriptive prompts for best results"
  ([overview](../../sources/bfl.ai/flux2-klein-4b-overview/2026-10-26.md)). [pro] has upsampling on by
  default, so prompts tuned for [pro] may under-perform on klein.
- **No sampling controls on the first-party API.** There is no `steps`, `guidance`, or negative-prompt
  field; the knobs are prompt, optional images, seed, width/height, format, and `safety_tolerance`
  ([API reference](../../sources/bfl.ai/flux2-klein-4b-api-reference/2026-10-26.md)). fal exposes a
  4–8 step range, which is a host extension, not a first-party capability.
- **Moderation is route-dependent.** `safety_tolerance` runs 0–7 (default 2) but the approved maximum
  depends on route and organization, and unapproved levels return 422 — the same scheme as [pro]
  ([API reference](../../sources/bfl.ai/flux2-klein-4b-api-reference/2026-10-26.md)). fal's schema
  adds that disabling its checker "requires account authorization" and flagged images come back as
  black images ([fal](../../sources/fal.ai/flux-2-klein-4b/2026-10-26.md)). A refusal or black frame
  on one host is not evidence about the weights.
- **Documented model limitations** (BFL card): not able to provide factual information; rendered text
  "may be inaccurate or subject to distortion"; may amplify training-data biases; may fail to follow
  prompts; prompt following is "heavily influenced by the prompting style"
  ([HF card](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md)).
- **Filter obligations differ by checkpoint.** Filters "must be used" with the 9B under its licence and
  are merely "encouraged" for the 4B; the Apache-2.0 weights carry no filter obligation
  ([HF card](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md)).
- **Base is not a drop-in substitute.** It is 10x slower in BFL's own numbers (~3 s vs ~0.3 s on
  GB200) and costs 1.8x more per megapixel on fal, in exchange for undistilled flexibility
  ([model page](../../sources/bfl.ai/flux2-klein-4b-model-page/2026-10-26.md),
  [fal base](../../sources/fal.ai/flux-2-klein-4b-base/2026-10-26.md)).

## Access, pricing, licensing

### Weights

- Apache 2.0, ungated, on Hugging Face: `FLUX.2-klein-4B` and `FLUX.2-klein-base-4B`, plus FP8 and
  NVFP4 quantizations of every klein variant released "in collaboration with NVIDIA" (up to 1.6x
  faster / 40% less VRAM for FP8, 2.7x / 55% for NVFP4, measured on RTX 5080/5090 per BFL)
  ([launch post](../../sources/bfl.ai/flux2-klein-4b-blog/2026-10-26.md),
  [HF record](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md)).
- ComfyUI and Diffusers support are named by BFL; the HF card ships a `Flux2KleinPipeline` snippet.
- Download volume at capture: ~436k for the distilled 4B, ~579k for the 4B Base, ~185k for the 9B
  ([HF records](../../sources/huggingface.co/flux-2-klein-base-4b/2026-10-26.md)).

### First-party API (BFL)

Megapixel-billed in credits (1 credit = $0.01): **$0.014 for the first output MP, $0.001 per
additional output MP, $0.001 per input MP**; text-to-image and editing at the same rate. A 1024×1024
image is therefore ~$0.014 and a 2 MP image ~$0.015
([pricing](../../sources/bfl.ai/flux2-klein-4b-pricing/2026-10-26.md)). The launch note quoted the same
"from $0.014 / image"
([release notes](../../sources/bfl.ai/flux2-klein-4b-release-notes/2026-10-26.md)).

### Hosts

| Route | Endpoint | Price | Notes |
| --- | --- | --- | --- |
| BFL | `/v1/flux-2-klein-4b` | $0.014 first MP + $0.001/MP, input $0.001/MP | fixed config, no steps control |
| fal | `fal-ai/flux-2/klein/4b` | $0.005/MP | 4–8 steps, no guidance field |
| fal | `fal-ai/flux-2/klein/4b/edit` | $0.01/MP | max 4 reference images |
| fal | `fal-ai/flux-2/klein/4b/base` | $0.009/MP | 4–50 steps, `acceleration` control |
| fal | `fal-ai/flux-2/klein/4b/base/lora` | $0.016/MP | LoRA inference on Base |
| Replicate | `black-forest-labs/flux-2-klein-4b` | $0.001/MP in, $0.001/MP out | `output_megapixels` up to 4 |
| Replicate | `black-forest-labs/flux-2-klein-4b-base` | $0.009/MP in and out | undistilled checkpoint |

Sources: [BFL pricing](../../sources/bfl.ai/flux2-klein-4b-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/flux-2-klein-4b/2026-10-26.md),
[fal edit](../../sources/fal.ai/flux-2-klein-4b-edit/2026-10-26.md),
[fal base](../../sources/fal.ai/flux-2-klein-4b-base/2026-10-26.md),
[fal LoRA](../../sources/fal.ai/flux-2-klein-4b-base-lora/2026-10-26.md),
[Replicate](../../sources/replicate.com/flux-2-klein-4b/2026-10-26.md),
[Replicate base](../../sources/replicate.com/flux-2-klein-4b-base/2026-10-26.md).

The spread is large: Replicate is ~14x cheaper than BFL for a 1 MP image and ~5x cheaper than fal. The
hosts also disagree on structure — fal prices editing at 2x generation while BFL prices them the same,
and Replicate charges input and output megapixels identically while fal publishes no input charge.
None of the three states which weights revision or quantization it serves, so cheaper routes cannot be
assumed to be the same artifact.

fal's `license_type: "commercial"` is a host catalogue field about use through fal, not a BFL licence
statement; the underlying weights licence is Apache 2.0.

## Unresolved questions

1. **VRAM: 8.4 GB or ~13 GB?** BFL's product page says 8.4 GB for the 4B (9.2 GB Base); the launch
   post, both Hugging Face cards, and the docs overview say ~13 GB. A plausible reconciliation —
   weights-only vs end-to-end with the text encoder — is not stated anywhere
   ([model page](../../sources/bfl.ai/flux2-klein-4b-model-page/2026-10-26.md) vs
   [HF card](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md)). Do not quote either as a
   measured floor.
2. **Is `flux-2-klein-4b` a pinned snapshot?** The docs define a preview/non-preview convention and
   apply it to [pro] and [klein] 9B, but list no 4B preview endpoint and do not say the 4B endpoint is
   frozen ([overview](../../sources/bfl.ai/flux2-klein-4b-overview/2026-10-26.md)). Reproducibility
   across time is therefore unverified.
3. **Which checkpoint do fal and Replicate serve, and at what precision?** Neither publishes a
   revision or quantization field; fal's distilled edit schema is internally named
   `KleinDistilledEditInput`, which is suggestive but not a snapshot id.
4. **Is the 4B in the BFL playground?** The product page offers "Try FLUX.2 [klein] instantly in our
   interactive playground", while the docs tip routes [max]/[pro]/[flex] to the playground and
   [klein] to the API and Hugging Face
   ([model page](../../sources/bfl.ai/flux2-klein-4b-model-page/2026-10-26.md),
   [overview](../../sources/bfl.ai/flux2-klein-4b-overview/2026-10-26.md)). One of the two pages is
   stale; which one is unknown.
5. **Does Base still ship unfiltered?** Replicate says Base is "the architecture before additional
   fine-tuning and safety modifications"; BFL's cards describe safety fine-tuning of the release
   checkpoints of both 4B models ([Replicate base](../../sources/replicate.com/flux-2-klein-4b-base/2026-10-26.md),
   [HF card](../../sources/huggingface.co/flux-2-klein-4b/2026-10-26.md)). Unresolved.
6. **How does 4B compare with 9B in practice?** BFL's differentiators are licence, speed, and "balanced
   quality and speed" vs "high volume"; fal's descriptions for the two are identical. No independent
   comparison of quality, text rendering, or multi-reference identity was captured.
7. **What replaces fal's deprecated 4B trainer?** The 9B trainer is still active; the 4B one was
   retired by 2026-05-26 with no stated successor, so the path from "train a 4B LoRA on fal" to
   `.../base/lora` is broken as documented
   ([fal trainer](../../sources/fal.ai/flux-2-klein-4b-base-trainer/2026-10-26.md)).
8. **Does a LoRA trained on 4B Base transfer to the distilled 4B?** BFL makes that claim for the FLUX 3
   Klein pair, not for FLUX.2 klein; the training guide is silent
   ([training guide](../../sources/bfl.ai/flux2-klein-4b-training/2026-10-26.md)).
9. **What is the real output-resolution ceiling?** Replicate offers up to 4 MP, BFL documents only a
   64-pixel minimum, and fal's presets stop near 1 MP. No first-party spec states 4 MP for the 4B.

## Evidence status

Everything above comes from vendor and host documentation captured on 2026-10-26. **No direct tests
have been run for this page** — no images were generated, no latency was measured, and no benchmark was
executed. Latency figures are BFL's own and one fal example result; quality claims are marketing until
someone measures them.

Evidence floor: **met**. First-party sources: BFL launch post, product page, docs overview, API
reference, pricing data, changelog, training guide, and two Hugging Face model cards. Independent host
records: fal (five endpoint pages plus its catalogue API) and Replicate (two model pages). The hosts
restate vendor copy in places — Replicate's readme is wrong on architecture, reference count, and
distillation — so host text is treated as host data (pricing, schemas, dates), not as measurement.

The most useful next evidence would be a small reproducible test: the same four prompts (dense
typography, hex-colour accuracy, four-reference identity, sequential edit drift) run at 1 MP and 4 MP
on `flux-2-klein-4b`, `fal-ai/flux-2/klein/4b`, and the 4B Base, with wall-clock latency and VRAM
recorded on named hardware.

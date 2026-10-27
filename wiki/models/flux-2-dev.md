# FLUX.2 [dev]

Black Forest Labs' open-weight member of the FLUX.2 image family, released **2025-11-25**: a 32B
rectified-flow transformer that generates, edits, and combines images from text instructions, with
weights published on Hugging Face under the FLUX [dev] Non-Commercial License
([launch blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md),
[GitHub README](../../sources/github.com/flux2-dev-readme/2026-10-26.md),
[HF model card](../../sources/huggingface.co/flux2-dev-model-card/2026-10-26.md)). Unlike its
siblings [pro], [flex] and [max], it has no first-party hosted endpoint; unlike [klein] it is not
size-distilled and not step-distilled.

## Identity

- Canonical name: FLUX.2 [dev]. Marketing spellings vary: "FLUX.2 Dev", "Flux 2 Dev",
  "FLUX.2-dev" (licence file name).
- Weights: `black-forest-labs/FLUX.2-dev` on Hugging Face, a gated repository (`gated: auto`) whose
  download requires accepting the non-commercial licence
  ([HF API metadata](../../sources/huggingface.co/flux2-dev-api-metadata/2026-10-26.md)).
- **No BFL API endpoint.** BFL's price list lists [dev] as "Local only" with the note "Open
  weights, non-commercial (no hosted API)"
  ([pricing](../../sources/bfl.ai/flux2-pricing/2026-10-26.md)). BFL's changelog entry for
  2025-11-25 covers only [pro] and [flex]
  ([release notes](../../sources/bfl.ai/release-notes/2026-10-26.md)), and the changelog contains
  no [dev] entry at any date: its later feature announcements enumerate "All FLUX.2 models — Pro,
  Max, Klein 4B/9B, and Flex" with no [dev]
  ([changelog absence record](../../sources/bfl.ai/flux2-dev-release-notes/2026-10-26.md)).
- Host endpoints captured:
  - fal: `fal-ai/flux-2-dev` and `fal-ai/flux-2-dev/edit`
    ([t2i](../../sources/fal.ai/flux-2-dev/2026-10-26.md),
    [edit](../../sources/fal.ai/flux-2-dev-edit/2026-10-26.md)).
  - Replicate: `black-forest-labs/flux-2-dev`
    ([Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)).
  - BFL's launch blog also names FAL, Replicate, Runware, Verda, TogetherAI, Cloudflare and
    DeepInfra as [dev] API providers. Only fal and Replicate were checked for this page; the other
    five are unverified leads.
- Siblings — separate models, not interchangeable with [dev]:
  - [pro], [flex], [max]: hosted-only, no public weights
    ([pricing](../../sources/bfl.ai/flux2-pricing/2026-10-26.md)). See
    [FLUX.2 [pro]](flux-2-pro.md).
  - [klein] 4B / 9B / 9B KV / Base: "size-distilled from the FLUX.2 base model"; 4B variants are
    Apache 2.0, 9B variants use the same non-commercial licence as [dev]
    ([GitHub README](../../sources/github.com/flux2-dev-readme/2026-10-26.md)).
- Release dates, three timestamps that do not coincide:
  - Hugging Face repository created **2025-11-22** (`createdAt` in the
    [HF API metadata](../../sources/huggingface.co/flux2-dev-api-metadata/2026-10-26.md)).
  - Replicate model created **2025-11-24** (`<time datetime="2025-11-24T17:41:54Z">` on the
    [Replicate page](../../sources/replicate.com/flux-2-dev/2026-10-26.md)).
  - Public announcement **2025-11-25** ([launch blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md);
    the GitHub README's news line is dated 25.11.2025). The announcement date is the launch date
    used here. All three are on or after the 2025-10-26 curation cutoff.

### Identity ambiguities worth tracking

- **fal's "FLUX 2" *is* [dev].** `fal-ai/flux-2` is described by fal as "Text-to-image generation
  with FLUX.2 [dev] from Black Forest Labs", and `fal-ai/flux-2/edit` as "Image-to-image editing
  with FLUX.2 [dev]", both at the same $0.012/MP as the `flux-2-dev` IDs
  ([fal t2i](../../sources/fal.ai/flux-2-dev/2026-10-26.md)). A price or quality report filed
  against "FLUX 2" on fal is a report about [dev], not about the family.
- **BFL's docs site does not document [dev].** The docs sitemap lists only
  `flux_2/flux2_overview`, `flux2_text_to_image`, `flux2_image_editing` and
  `flux2_klein_training` for FLUX.2, and the API reference covers [pro], [pro] preview, [flex],
  [max] and [klein] 4B/9B only
  ([sitemap check](../../sources/bfl.ai/flux2-dev-release-notes/2026-10-26.md)). The first-party
  [dev] material is the launch blog, the Hugging Face card and the GitHub repository — not the
  API docs.
- **Which checkpoint is live is not established.** The HF repository was modified 2026-02-17
  ([metadata](../../sources/huggingface.co/flux2-dev-api-metadata/2026-10-26.md)) and no revision
  history was captured. The launch blog, card, README and hosts were all read on 2026-10-26 and
  describe one model; whether they describe the same weights is unverified.

## Current assessment

FLUX.2 [dev] is a genuine distinct tier, not a repackaging: it is the only FLUX.2 model that
combines 32B-scale weights with multi-reference editing *and* a downloadable checkpoint, and its
licence, deployment story and pricing basis all differ from [pro]/[flex]/[max]. BFL describes it
as "derived from the FLUX.2 base model" rather than as a release of a hosted sibling
([blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md)); the hosted tiers publish no
weights, so there is no repackaging question in the other direction either.

The practical shape of the trade is unusual: **the model is free and the compute is not.** On the
hosts it costs about $0.012–$0.014 per megapixel, under half [pro]'s $0.03 starting price, but
self-hosting the reference path needs an "H100-equivalent GPU" and even an H100 cannot hold the
text encoder, transformer and VAE simultaneously without CPU offload
([VRAM guide](../../sources/github.com/flux2-dev-diffusers-vram/2026-10-26.md)). BFL's own
recommendation table puts [dev] at "maximum quality, no latency constraints" among the open
models and recommends it for fine-tuning and LoRA training alongside [klein] Base
([README](../../sources/github.com/flux2-dev-readme/2026-10-26.md)).

Two things the evidence does *not* support: that [dev] matches [pro] on quality (no paired
comparison exists in any captured source), and that its typography or multi-reference ceiling is
the family's best (BFL markets [flex] for typography and [max] for editing consistency). The
open-weight leadership claim is BFL's own.

## Documented capabilities

All of the following are vendor or host documentation, not independent tests.

- **Text-to-image, single-reference editing and multi-reference editing in one checkpoint.** The
  GitHub model table marks all three capabilities for [dev]
  ([README](../../sources/github.com/flux2-dev-readme/2026-10-26.md)); the card calls it "capable
  of generating, editing and combining images based on text instructions"
  ([HF card](../../sources/huggingface.co/flux2-dev-model-card/2026-10-26.md)).
- **No fine-tuning needed for references:** "character, object and style reference without
  additional training in one model" ([HF card](../../sources/huggingface.co/flux2-dev-model-card/2026-10-26.md)).
- **Guidance-distilled, not step-distilled.** The README table marks guidance distillation ✅ and
  step distillation ❌ for [dev], unlike [klein]'s 4-step distilled variants. Consistent with the
  diffusers examples using `num_inference_steps=50` with "28 steps can be a good trade-off", and
  with fal's default of 28 steps (range 4–50)
  ([README](../../sources/github.com/flux2-dev-readme/2026-10-26.md),
  [fal](../../sources/fal.ai/flux-2-dev/2026-10-26.md)).
- **Prompt upsampling materially helps.** "`FLUX.2 [dev]` benefits significantly from prompt
  upsampling", using `Mistral-Small-3.2-24B-Instruct-2506` locally or any OpenRouter model
  ([README](../../sources/github.com/flux2-dev-readme/2026-10-26.md)). fal exposes this as
  `enable_prompt_expansion`, **off by default**
  ([fal](../../sources/fal.ai/flux-2-dev/2026-10-26.md)).
- **Editing at up to 4MP.** "FLUX.2 can edit images at up to 4 megapixels while preserving detail
  and coherence" ([blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md)); Replicate
  repeats the 4MP editing figure
  ([Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)).
- **Architecture:** "a 32 billion parameter rectified flow transformer"
  ([HF card](../../sources/huggingface.co/flux2-dev-model-card/2026-10-26.md)); the family couples
  "the Mistral-3 24B parameter vision-language model with a rectified flow transformer"
  ([blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md),
  [Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)), over a new VAE.
- **Ecosystem:** reference inference code plus ComfyUI and Diffusers support; an fp8 reference
  implementation built with NVIDIA and ComfyUI for RTX-class GPUs
  ([HF card](../../sources/huggingface.co/flux2-dev-model-card/2026-10-26.md),
  [blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md)).
- **Provenance tooling in the release:** optional invisible watermarking in the inference code and
  a recommendation to write C2PA metadata; the repository "includes filters for NSFW and
  IP-infringing content at input and output"
  ([README](../../sources/github.com/flux2-dev-readme/2026-10-26.md),
  [HF card](../../sources/huggingface.co/flux2-dev-model-card/2026-10-26.md)).

### Family-level claims that are not [dev]-specific

BFL's product page lists FLUX.2-wide bullets — "32K text input tokens", "Sub-10-second generation
speeds", "Reliable from low-res drafts (400px²)", JSON-based control, pose guidance, generative
expand/shrink, 4MP output at any aspect ratio — without attributing any of them to a variant
([product page](../../sources/bfl.ai/flux2-dev-model-page/2026-10-26.md)). "Sub-10-second
generation" in particular cannot be read as a [dev] latency claim, since [dev] latency is a
function of whatever hardware the user runs. Hex-colour prompting and JSON structured prompting
are likewise family-level in BFL's materials
([overview](../../sources/bfl.ai/flux2-overview/2026-10-26.md)).

### Marketing claims, recorded as such

- "The most powerful open-weight image generation and editing model available today"
  ([blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md)).
- "leading performance across text-to-image generation, single-reference editing, and
  multi-reference editing, consistently outperforming all open-weights alternatives by a
  significant margin" ([blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md)). **No
  benchmark names, numbers, or methodology accompany this claim** in the blog, the card, the
  README, or on either host page. The README's Klein section includes a benchmark chart; the [dev]
  section includes none.
- fal markets it as "Enhanced realism, crisper text generation, and native editing capabilities"
  ([fal](../../sources/fal.ai/flux-2-dev/2026-10-26.md)); Replicate as "Quality image generation
  and editing with support for reference images"
  ([Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)). Host copy, not measurement.

## Limitations and constraints

- **Non-commercial weights.** The FLUX [dev] Non-Commercial License v2.0 (last revised
  2025-11-25) grants rights "solely for your Non-Commercial Purposes" and excludes "use (a) for
  revenue-generating activity, (b) in direct interactions with or that has impact on end users, or
  (c) to train, fine tune, or distill other models for commercial use"
  ([licence](../../sources/bfl.ai/flux2-dev-non-commercial-license/2026-10-26.md)). Commercial
  self-hosting requires a separate licence from BFL, priced privately.
- **Outputs may be used commercially** — "You may use Output for any purpose (including for
  commercial purposes), except as expressly prohibited herein" — but not to train a competing
  model ([licence](../../sources/bfl.ai/flux2-dev-non-commercial-license/2026-10-26.md)). The HF
  card's looser phrasing ("Generated outputs can be used for personal, scientific, and commercial
  purposes") is best read against the licence text, not instead of it.
- **Filtering and disclosure are licence conditions, not just recommendations.** Licensees must
  implement content filters or pre-distribution review, disclose AI generation where required, and
  may be spot-checked by BFL
  ([licence](../../sources/bfl.ai/flux2-dev-non-commercial-license/2026-10-26.md),
  [HF card](../../sources/huggingface.co/flux2-dev-model-card/2026-10-26.md)). Prohibited fields
  include commercial/production use, military, surveillance, biometric processing, and
  digital-replica infringement.
- **Reference-image ceiling is genuinely contested.**
  - BFL family overview: "Recommended max 6" for [dev]
    ([overview](../../sources/bfl.ai/flux2-overview/2026-10-26.md)).
  - BFL launch blog: "combine up to 10 images into a novel output"
    ([blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md)); Replicate's README repeats
    "up to 10" ([Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)).
  - fal's edit endpoint: "A maximum of 4 images are allowed, if more are provided, only the first
    4 will be used" ([fal edit](../../sources/fal.ai/flux-2-dev-edit/2026-10-26.md)).
  - The HF card gives no number. The most likely explanation — untested — is that 4 and 6 are
    practical/served limits and 10 is the architecture's ceiling, but no source says so.
- **No first-party endpoint, so no BFL-side controls.** There is no `safety_tolerance` parameter,
  no BFL-pinned snapshot and no BFL service terms covering the inference itself. Moderation is
  whatever the host applies: fal's `enable_safety_checker` defaults to on and "flagged as unsafe
  [images] are returned as black images"
  ([fal](../../sources/fal.ai/flux-2-dev/2026-10-26.md)); Replicate's page documents no filter
  behaviour ([Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)).
- **Resolution limits differ by route and are documented unevenly.** fal accepts width/height
  between 512 and 2048 pixels per dimension and states no total-megapixel cap
  ([fal](../../sources/fal.ai/flux-2-dev/2026-10-26.md)); the 4MP editing figure comes from BFL
  and is repeated by Replicate, which also phrases it as an editing-resolution limit
  ([blog](../../sources/bfl.ai/flux2-dev-launch-blog/2026-10-26.md),
  [Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)).
- **Self-host requirements are substantial.** Reference path: "H100-equivalent GPU", tested on
  GB200 with CUDA 12.9 and Python 3.12. Quantised: ~18G VRAM (4-bit transformer + *remote* text
  encoder, i.e. not offline) or ~20G (both 4-bit with CPU offload); 40–48G suggested for 8-bit;
  80G+ to hold everything in bf16 ([VRAM guide](../../sources/github.com/flux2-dev-diffusers-vram/2026-10-26.md)).
  These are load-time approximations, not measured peak memory for a 4MP edit.
- **Not step-distilled**, so it is slower per image than [klein] at equal hardware — the README's
  own recommendation sends latency-sensitive work to [klein].
- **Negative-prompt behaviour is undocumented for [dev].** Replicate states that FLUX.2 [pro] does
  not understand negative prompts
  ([Replicate [pro]](../../sources/replicate.com/flux-2-pro/2026-10-26.md)); no captured source
  says whether that carries to [dev], and the architecture is shared but not identical. Treat as
  unknown rather than inherited.

## Access, pricing, licensing

- **BFL first-party:** no hosted endpoint; weights are free for non-commercial use
  ([pricing](../../sources/bfl.ai/flux2-pricing/2026-10-26.md)). Commercial self-host licence
  available on request, terms not published
  ([licence §2(b)](../../sources/bfl.ai/flux2-dev-non-commercial-license/2026-10-26.md)).
- **fal:** $0.012 per megapixel for text-to-image. Editing is "$0.012 per megapixel of input and
  output. Input images will be resized to 1MP. For example, a 1024x1024 generation with 512*512
  size image input will cost $0.024 (1 MP input + 1 MP output)"
  ([fal](../../sources/fal.ai/flux-2-dev/2026-10-26.md),
  [fal edit](../../sources/fal.ai/flux-2-dev-edit/2026-10-26.md)). Editing therefore costs about
  double a same-size text-to-image call.
- **Replicate:** $0.012 per input *and* output megapixel with `go_fast=true` (default), $0.014
  with `go_fast=false`; ~83 or ~71 megapixels per dollar respectively
  ([Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)). The same page carries an
  unexplained "$0.001525 per second" model-level price that does not reconcile with the per-MP
  tiers.
- **Comparison with [pro]:** BFL charges $0.03/MP text-to-image and $0.045/MP editing for [pro];
  fal charges $0.03 for the first output MP plus $0.015 per additional input or output MP
  ([BFL pricing](../../sources/bfl.ai/flux2-pricing/2026-10-26.md),
  [fal [pro]](../../sources/fal.ai/flux-2-pro/2026-10-26.md)). [dev] is roughly 2.5× cheaper per
  megapixel at the low end — a price difference that says nothing about quality.
- **Host claims about commercial use of [dev]:** fal states that images generated with FLUX.2
  [dev] through its API "can be used in commercial projects" and that "[dev] is also available
  with a commercial license for self-hosted deployments"
  ([fal FLUX.2 landing page](../../sources/fal.ai/flux-2/2026-10-26.md)); Replicate states "[dev]
  is available for commercial use on Replicate"
  ([Replicate](../../sources/replicate.com/flux-2-dev/2026-10-26.md)). These are the hosts'
  statements about their own services; neither says whether it holds a commercial agreement with
  BFL, and neither changes the weights licence.
- **Licensing of the release is mixed:** weights and inference code under the FLUX [dev]
  Non-Commercial License; the FLUX.2 autoencoder under Apache 2.0
  ([README](../../sources/github.com/flux2-dev-readme/2026-10-26.md),
  [licence](../../sources/bfl.ai/flux2-dev-non-commercial-license/2026-10-26.md)).

## Unresolved questions

1. Are the published weights still the 2025-11-25 checkpoint? The HF repository was modified
   2026-02-17 and no revision history was captured.
2. What is the real multi-reference ceiling — 4 (fal), 6 (BFL overview), or 10 (BFL blog,
   Replicate)? Is the limit VRAM, implementation, or policy?
3. How does [dev] actually compare with [pro] and with [klein] 9B on the same prompts? No paired,
   reproducible comparison exists in the captured evidence, and BFL publishes no benchmark numbers
   for [dev].
4. Which quantisation/checkpoint do fal and Replicate serve, and does fal's `acceleration: "high"`
   trade quality for speed? fal documents the option and says nothing about quality.
5. Does the licence's exclusion of "revenue-generating activity" bar a freelancer or studio from
   using self-hosted [dev] in paid client work even though outputs may be used commercially? The
   text distinguishes model use from output use but does not resolve that case.
6. What does the commercial self-host licence cost, and does it cover fine-tuned derivatives?
7. Is prompt upsampling effectively mandatory for good results, and how much does host behaviour
   differ given fal defaults it off while BFL's own inference script recommends it?

## Evidence status

Everything above comes from vendor and host documentation captured on 2026-10-26. **No direct
tests have been run for this page**, and no image was generated on any endpoint. Performance,
typography, identity-consistency and multi-reference quality are all unmeasured here; the
"outperforms all open-weights alternatives" claim is BFL's and is recorded as a claim.

Evidence floor: **met.** First-party: BFL launch blog, licence, product page, Hugging Face model
card, HF repository metadata, and the GitHub README plus diffusers VRAM guide. Independent host
records: fal (`flux-2-dev` text-to-image and edit endpoints) and Replicate. Both host records
restate vendor copy and their own price schedules; neither is an independent measurement.

The next useful evidence would be a small reproducible test set — dense typography, a
multi-reference identity panel at 4, 6 and 10 references, sequential-edit drift, and hex-colour
fidelity — run on a named endpoint and date, plus a [dev]-vs-[pro] side-by-side at matched
resolution.

# FLUX.2 [pro]

Black Forest Labs' mid-tier FLUX.2 image model for production generation and editing, released
2025-11-25 alongside FLUX.2 [flex]
([BFL release notes](../../sources/bfl.ai/release-notes/2026-10-26.md)). It sits between
[klein] (speed) and [max] (quality/grounding) in the FLUX.2 family, and unlike [dev]/[klein] it
has no public weights — it is available only as a hosted endpoint, first-party or through
partners such as Replicate and fal.

## Identity

- Canonical name: FLUX.2 [pro]. Marketing spelling varies: "FLUX.2 Pro", "Flux 2 Pro".
- First-party endpoints: `flux-2-pro` (fixed snapshot) and `flux-2-pro-preview` (rolling)
  ([BFL overview](../../sources/bfl.ai/flux2-overview/2026-10-26.md)).
- Partner endpoints: `black-forest-labs/flux-2-pro` on Replicate
  ([source](../../sources/replicate.com/flux-2-pro/2026-10-26.md)); `fal-ai/flux-2-pro` on fal
  ([source](../../sources/fal.ai/flux-2-pro/2026-10-26.md)).
- Sibling models: FLUX.2 [klein] 4B/9B, [flex], [max], [dev]. These are separate models with
  separate behavior; findings here should not be transferred to them without evidence.

### Version ambiguity worth tracking

BFL's `flux-2-pro` endpoint is deliberately frozen at the launch snapshot, while
`flux-2-pro-preview` receives improvements. On 2026-03-03 BFL reported an approximately 2x
speed improvement with "no quality loss" and "no price change", shipped first on the preview
endpoint, leaving `flux-2-pro` "unchanged"
([release notes](../../sources/bfl.ai/release-notes/2026-10-26.md)). Consequently:

- "FLUX.2 [pro]" is not one immutable behavior. Latency claims depend on which endpoint is used.
- It is not established which snapshot the Replicate and fal endpoints serve, or when they were
  last updated. Treat cross-provider latency comparisons as unverified.
- The 2x speed claim and the "on par across all benchmarks" claim are BFL's own statements; no
  benchmark names, numbers, or methodology are published.

## Current assessment

FLUX.2 [pro] is best understood as the "no-knobs production" member of the family: fixed
inference configuration, prompt upsampling on by default, seed for reproducibility, and no
steps or guidance parameters exposed
([API reference](../../sources/bfl.ai/flux2-pro-api-reference/2026-10-26.md)). BFL
positions it as "top performance at affordable price" for "production at scale"
([overview](../../sources/bfl.ai/flux2-overview/2026-10-26.md)); fal describes it as
"studio-grade images with zero configuration"
([fal](../../sources/fal.ai/flux-2-pro/2026-10-26.md)).

If you need step/guidance control, the family's answer is [flex]; if you need maximum editing
consistency or web-grounded content, it is [max]. [pro] has no grounding search.

## Documented capabilities

All of the following are vendor or host documentation, not independent tests.

- **Text-to-image and instruction-based editing in one endpoint.** The same `POST /v1/flux-2-pro`
  accepts a prompt with or without input images
  ([API reference](../../sources/bfl.ai/flux2-pro-api-reference/2026-10-26.md)).
- **Multi-reference input.** Up to 8 reference images via API, 10 in the BFL playground
  ([overview](../../sources/bfl.ai/flux2-overview/2026-10-26.md)); Replicate independently
  states eight on the API ([Replicate](../../sources/replicate.com/flux-2-pro/2026-10-26.md)).
  Replicate adds a **9 megapixel total input cap** on the API.
  **Conflicting count:** fal's landing-page FAQ states "up to 10 reference images in a single
  request using the @ syntax" through the API, which contradicts BFL's 8-via-API figure
  ([fal FLUX.2 landing page](../../sources/fal.ai/flux-2/2026-10-26.md)). Unresolved; the
  practical ceiling on fal may depend on endpoint and total input megapixels rather than a
  fixed slot count.
- **Output resolution up to ~4MP**, at multiple aspect ratios; BFL's launch note says "up to 4MP
  output [...] at any aspect ratio"
  ([release notes](../../sources/bfl.ai/release-notes/2026-10-26.md)). Replicate phrases
  the 4MP figure as an editing-resolution limit.
- **Typography and text rendering.** BFL markets reliable text for infographics, UI mockups, and
  marketing layouts ([overview](../../sources/bfl.ai/flux2-overview/2026-10-26.md));
  Replicate claims it "works reliably in production, not just for simple cases". Note that BFL
  separately calls [flex] the family member "specialized for typography" — so [pro] being good
  at text does not make it the strongest text model in the family.
- **Hex color control.** Hex codes in the prompt for exact color matching; fal advises prefixing
  with "color" or "hex" ([fal](../../sources/fal.ai/flux-2-pro/2026-10-26.md),
  [overview](../../sources/bfl.ai/flux2-overview/2026-10-26.md)).
- **JSON / structured prompting** for scene, subjects, camera, lighting, palette
  ([fal](../../sources/fal.ai/flux-2-pro/2026-10-26.md),
  [Replicate](../../sources/replicate.com/flux-2-pro/2026-10-26.md)).
- **Prompt upsampling on by default**, disable with `disable_pup: true` on the BFL API
  ([API reference](../../sources/bfl.ai/flux2-pro-api-reference/2026-10-26.md)).
- **Seed** for reproducibility; no steps/guidance parameters
  ([API reference](../../sources/bfl.ai/flux2-pro-api-reference/2026-10-26.md),
  [fal](../../sources/fal.ai/flux-2-pro/2026-10-26.md)).

### Architecture as described by providers

Both Replicate and fal describe FLUX.2 as pairing a Mistral-3 24B vision-language model with a
rectified flow transformer over a new latent space, and fal refers to a "32B parameter
architecture" for the family
([Replicate](../../sources/replicate.com/flux-2-pro/2026-10-26.md),
[fal](../../sources/fal.ai/flux-2-pro/2026-10-26.md)). BFL's own overview page does not state the
architecture, and 24B + transformer does not arithmetically equal 32B, so treat the parameter
count as a family-level marketing figure rather than a verified [pro]-specific number.

## Limitations and constraints

- **No negative prompts.** Replicate states the model does not understand them and may add what
  you ask to avoid; use positive descriptions
  ([Replicate](../../sources/replicate.com/flux-2-pro/2026-10-26.md)). This is host documentation,
  not a measured failure rate.
- **No grounding search.** Web-grounded generation is [max]-only
  ([overview](../../sources/bfl.ai/flux2-overview/2026-10-26.md)).
- **No exposed sampling controls.** Fixed configuration is the design, not a missing feature;
  use [flex] when you need steps/guidance.
- **Moderation is configurable but gated.** `safety_tolerance` runs 0–7 (0 strictest, default 2),
  but the approved maximum depends on route and organization and unapproved levels return 422
  ([API reference](../../sources/bfl.ai/flux2-pro-api-reference/2026-10-26.md)). Practical
  refusals will therefore vary by account and provider; a refusal on one platform is not evidence
  about the model's general willingness.
- **No public weights.** [pro] is hosted-only; the open-weight options are [dev] and [klein]
  ([pricing](../../sources/bfl.ai/flux2-pricing/2026-10-26.md)).

## Access, pricing, licensing

- BFL first-party: from **$0.03** per text-to-image and from **$0.045** per image edit,
  megapixel-based ([pricing](../../sources/bfl.ai/flux2-pricing/2026-10-26.md)).
- fal: **$0.03** for the first output MP plus **$0.015** per additional input or output MP,
  rounded up (1024×1024 = $0.03; 1920×1080 = $0.045 with no inputs)
  ([fal](../../sources/fal.ai/flux-2-pro/2026-10-26.md)). This is the most explicit schedule
  captured; note it charges for input megapixels, which BFL's page does not spell out.
- Replicate: platform price not captured in this record.
- Licensing: fal marks the endpoint "Commercial use" and states that images generated through
  its API with FLUX.2 [pro] can be used commercially
  ([fal FLUX.2 landing page](../../sources/fal.ai/flux-2/2026-10-26.md)). That is the host's
  statement about its own service; the underlying BFL terms for [pro] output were not captured
  here and should be checked before relying on them.

## Unresolved questions

1. Which FLUX.2 [pro] snapshot do Replicate and fal serve, and how often do they refresh it?
2. What is the actual latency difference between `flux-2-pro` and `flux-2-pro-preview`, and does
   the 2x claim hold outside BFL's own benchmarks?
3. How reliable is typography in practice, and how does [pro] compare with [flex] on dense or
   small text? BFL's own positioning suggests [flex] is stronger, but no comparison data was
   captured.
4. How stable is identity across many sequential edits — the "sequential editing" workflow fal
   advertises — before drift appears?
5. Does `safety_tolerance` behave the same on partner platforms as on BFL's API?

## Evidence status

Everything above comes from vendor and host documentation captured on 2026-10-26. **No direct
tests have been run for this page.** Claims such as "closes the gap between generated and real
imagery" or "works reliably in production" are marketing statements from BFL and Replicate,
respectively, and are recorded as such rather than as findings. The next useful evidence would
be a small, reproducible test set: dense typography, multi-reference identity consistency,
sequential edit drift, and hex-color fidelity, run against a named endpoint and date.

Evidence floor: met. One first-party source (BFL docs, four records) plus two independent host
records (Replicate, fal).

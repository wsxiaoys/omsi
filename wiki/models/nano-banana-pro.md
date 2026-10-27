# Nano Banana Pro

Google DeepMind's premium image generation and editing model, built on Gemini 3 Pro. It shipped in
paid preview on 2025-11-20 and reached general availability as `gemini-3-pro-image` on 2026-05-28. It
is the only Nano Banana model with a "Pro" tier: the family's other members — Nano Banana 2, 2.1 and
2 Lite — are Flash-tier models, and Nano Banana 2.1's own model page describes itself as "the more
efficient counterpart to Gemini 3 Pro Image (Nano Banana Pro)"
([Gemini Nano Banana 2.1 page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).

## Identity

- Canonical marketing name: **Nano Banana Pro**. First-party model name: **Gemini 3 Pro Image**
  ([DeepMind family page](../../sources/deepmind.google/gemini-image/2026-10-26.md),
  [launch post](../../sources/blog.google/nano-banana-pro-launch/2026-10-26.md)).
- Gemini API model ID: **`gemini-3-pro-image`**
  ([models catalogue](../../sources/google.dev/gemini-api-models/2026-10-26.md)).
- Preview ID: **`gemini-3-pro-image-preview`**, released 2025-11-20, shut down 2026-06-25
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
- Aliases in circulation: "Gemini 3 Pro Image", "Nano Banana Pro", "Gemini 3 Pro Image (Nano Banana
  Pro)" (Vertex/Agent Platform title), and the emoji-suffixed "Nano Banana Pro 🍌" used as a DeepMind
  page heading. Host slugs: `fal-ai/nano-banana-pro`, `google/nano-banana-pro`.
- Release dates: paid preview **2025-11-20**
  ([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
  [developer post](../../sources/blog.google/nano-banana-pro-developers/2026-10-26.md)); GA
  **2026-05-28** on both the Gemini API and Vertex AI / Gemini Enterprise Agent Platform
  ([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
  [deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md),
  [Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md)).
  Both dates fall inside the roster's one-year window.
- Host endpoints: fal `fal-ai/nano-banana-pro` (text-to-image) and `fal-ai/nano-banana-pro/edit`
  (image-to-image), both dated to 2025-11-20 by fal's catalogue
  ([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)); Replicate `google/nano-banana-pro`
  ([Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)).
- Siblings: Nano Banana 2 (`gemini-3.1-flash-image`, deprecated in favour of 2.1), Nano Banana 2.1
  (`gemini-nano-banana-2.1`), Nano Banana 2 Lite (`gemini-3.1-flash-lite-image`), and the original
  Nano Banana (`gemini-2.5-flash-image`, shutdown 2027-03-15)
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)). Pro is a
  separate model ID with its own model card, price and support row — not a checkpoint of the Flash
  tier — and Google lists no recommended replacement for it.

### Version and positioning ambiguity worth tracking

- **Pro vs 2 vs 2.1: the marketing tier and the published numbers disagree.** Google's API guide
  calls Pro "The premium choice for the most complex visual tasks" and says "Gemini 3 Pro Image is
  optimized for professional asset production"
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)),
  while Nano Banana 2.1 is "the primary high-efficiency workhorse model". But Google's own Nano
  Banana 2.1 model card, published 2026-10-06, carries a Nano Banana Pro column and ranks 2.1 above
  Pro on every axis it reports — overall preference 1050 ± 14 vs 935 ± 8, infographics 1048 ± 17 vs
  912 ± 12, general editing 1026 ± 12 vs 939 ± 10
  ([2.1 model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)).
  Replicate goes further and describes Nano Banana 2 as "combining Pro-level visual quality with
  Flash-level speed and pricing"
  ([Replicate NB2 readme](../../sources/replicate.com/nano-banana-2/2026-10-26.md)). The price tier
  says Pro is best; the only 2026 first-party measurement says otherwise; no independent
  measurement exists either way. Treat "Pro is better" as an unverified positioning claim and "Pro
  is more expensive and slower" as documented.
- **Preview vs GA weights.** The preview ID was shut down on 2026-06-25 and replaced by
  `gemini-3-pro-image`, but no captured page says the two are the same weights
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
- **No dated checkpoint.** Unlike text models, there is no `-1017`-style snapshot suffix; the only
  version selector is preview vs GA. Replicate's public version still dates to 2025-11-20 (see
  below), so "which snapshot" is a host question rather than a first-party one.

## Current assessment

Pro is the family's premium tier by price, and its most expensive member by a wide margin: at
Google's list prices an image costs **$0.134** at 1K/2K and **$0.24** at 4K, against **$0.0336** and
**$0.113** for Nano Banana 2.1
([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)). Google's own developer
guidance says the same thing in words: "Use Gemini 2.5 Flash Image for faster, lower cost image
generation, or 3 Pro Image for higher quality image generation, with higher cost and latency"
([developer post](../../sources/blog.google/nano-banana-pro-developers/2026-10-26.md)).

What the documentation actually establishes, as of 2026-10-26:

- **No documented capability that Nano Banana 2.1 lacks.** 2.1 documents 1K/2K/4K output, 14
  reference images, PDF and video input, Search grounding (web *and* image), multi-turn editing and
  configurable thinking levels
  ([2.1 model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md),
  [image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  Pro documents the same generation and editing feature set with less: no Image Search grounding, no
  documented video input (the Cloud card contradicts itself on this — see Limitations), and no
  thinking-level control (fal: "Pro Image supports only high")
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
  [fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)).
- **The most detailed first-party limitations list of any Nano Banana model** — small text at 1K,
  page-length text, doodle-ink persistence, spatial left/right confusion
  ([model card](../../sources/deepmind.google/gemini-3-pro-image-model-card/2026-10-26.md),
  [product page](../../sources/deepmind.google/nano-banana-pro/2026-10-26.md)).
- **A published Elo evaluation with confidence intervals from November 2025**, measured against the
  2025 competitor set ([model card](../../sources/deepmind.google/gemini-3-pro-image-model-card/2026-10-26.md)).
  That is Pro's historical quality evidence; the current same-vendor comparison is the 2.1 card, and
  it does not favour Pro.

So the premium is a price-and-positioning premium, not a documented capability premium. At 1K, Pro
costs about 4x Nano Banana 2.1 and is described by Google as higher-latency, while the newest
first-party evaluation ranks 2.1 above it on overall preference, infographics, factuality and every
editing axis it reports. Some of that asymmetry may be documentation lag — Pro's dedicated model card
and launch material all date from November 2025 — which is itself a reason not to trust any current
capability ranking, in either direction. Until an independent comparison exists, "Pro for quality"
is an untested assumption and 2.1 is the better-documented default.

**No direct tests have been run for this page**, so nothing here establishes that Pro's output is
better — or worse — than 2.1's on any specific task.

## Documented capabilities

Everything in this section is vendor or host documentation. Quality language is quoted, not adopted.

- **Text-to-image and editing through one model ID.** The Gemini API exposes `gemini-3-pro-image` for
  both generation and editing; fal splits it into `nano-banana-pro` and `nano-banana-pro/edit`
  endpoints with identical pricing
  ([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)). Replicate exposes a single endpoint
  whose `image_input` accepts up to 14 images
  ([Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)).
- **Resolutions 1K, 2K, 4K.** Vertex lists exactly those three; fal and Replicate expose the same
  three in their schemas
  ([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md),
  [fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md),
  [Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)). Defaults differ: fal 1K,
  Replicate 2K. The launch post says only "2K and 4K resolution available"
  ([launch post](../../sources/blog.google/nano-banana-pro-launch/2026-10-26.md)); the 1K tier is
  documented by the Cloud card, the product page ("1k, 2k or 4k") and the API pricing footnote.
- **14 aspect ratios, including panoramic.** Vertex lists `1:1, 3:2, 2:3, 3:4, 1:4, 4:1, 4:3, 4:5,
  5:4, 1:8, 8:1, 9:16, 16:9, 21:9`
  ([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md)).
  fal's schema enum matches all 14 plus `auto`; Replicate's enum offers only the 10 non-panoramic
  ratios plus `match_input_image`.
- **Up to 14 input images.** Vertex: "Maximum images per prompt: 14 (up to 10 HTTP or HTTPS URLs)"
  ([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md)).
  The split of those 14 slots is contradictory across first-party pages; see Limitations.
- **Text rendering and in-image localization.** Google markets Pro as "the best model for creating
  images with correctly rendered and legible text directly in the image" and as able to "localize and
  translate your content" inside an image
  ([launch post](../../sources/blog.google/nano-banana-pro-launch/2026-10-26.md)). This is a marketing
  claim; the same vendor's model card says small text is "often blurry in 1k model".
- **Search grounding.** "Nano Banana Pro can also connect to Google Search's vast knowledge base to
  help you create a quick snapshot for a recipe or visualize real-time information like weather or
  sports" ([launch post](../../sources/blog.google/nano-banana-pro-launch/2026-10-26.md)). fal exposes
  this as `enable_web_search` (default false); Replicate exposes no search toggle at all
  ([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md),
  [Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)).
- **Multi-turn / conversational editing, interleaved text and images, C2PA Content Credentials,
  virtual try-on, person generation, system instructions, implicit context caching**
  ([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md)).
  fal additionally exposes `history`, `context` and `return_history` for replaying native
  conversations ([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)).
- **Thinking is on, but not tunable.** Vertex lists Thinking as "Supported". fal's schema states:
  "Pro Image supports only high; omit to retain its provider default [...] Thinking cannot be
  disabled" ([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)). Google's API guide publishes
  a thinking-levels table for 2.1, 3.1 Flash and Flash Lite but omits Pro entirely
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **Sampling controls.** Vertex documents `temperature` 0–2 (default 1.0) and `topP` 0–1 (default
  0.95). fal exposes `temperature`, `top_p`, `max_output_tokens` (≤32,768), `seed`, `num_images`
  (1–4) and `safety_tolerance`; Replicate exposes none of these except a three-level
  `safety_filter_level`.
- **Batch, Provisioned Throughput, Standard/Flex/Priority PayGo, `global` region only**
  ([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md)).
- **SynthID on every output**, stated first-party and repeated by both hosts
  ([developer post](../../sources/blog.google/nano-banana-pro-developers/2026-10-26.md),
  [fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md),
  [Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)).

### Benchmark numbers, and what they do and do not show

Two first-party model cards publish numbers for Pro, from different dates and against different
comparator sets. The November 2025 card reports Pro against 2025 competitors, with Google Search
**on** ([model card](../../sources/deepmind.google/gemini-3-pro-image-model-card/2026-10-26.md)):

| Capability | Gemini 3 Pro Image | Gemini 2.5 Flash Image | GPT-Image 1 | Seedream v4 4k | Flux Pro Kontext Max |
| --- | --- | --- | --- | --- | --- |
| Text Rendering | 1198 ± 18 | 997 ± 10 | 1150 ± 14 | 1019 ± 13 | 854 ± 13 |
| General Image Editing | 1127 ± 13 | 996 ± 8 | 1011 ± 13 | 965 ± 12 | 902 ± 13 |
| Multi character editing | 1213 ± 16 | 950 ± 10 | 997 ± 13 | 840 ± 19 | — |
| Infographics | 1268 ± 17 | 1162 ± 11 | 1087 ± 12 | 1049 ± 12 | 824 ± 15 |

Read these as vendor-run human-preference Elo from November 2025: the comparator set contains no 2026
model (not even Google's own Nano Banana 2/2.1), no prompt-set size, rater count or agreement
statistic is published, and the Search-On condition is not compared against Search-Off. The deltas
against Gemini 2.5 Flash Image are large relative to the published intervals (e.g. +201 on Text
Rendering, intervals ±18 and ±10); the gap against GPT-Image 1 on the same row is +48, with intervals
of ±18 and ±14, and GPT-Image 1 is itself a 2025 model. None of this measures Pro against the model
most buyers would compare it with today, Nano Banana 2.1.

The October 2026 card for Nano Banana 2.1 does exactly that, adding a "Gemini 3 Pro Image (Nano
Banana Pro)" column to a same-vendor side-by-side evaluation
([2.1 model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)):

| Capability | 2.1 (Thinking) | 2.1 (no thinking) | Nano Banana 2 (Thinking) | Nano Banana Pro |
| --- | --- | --- | --- | --- |
| Overall Preference (Elo) | 1050 ± 14 | 1015 ± 13 | 990 ± 7 | 935 ± 8 |
| Infographic Design (Elo) | 1048 ± 17 | 1001 ± 17 | 961 ± 12 | 912 ± 12 |
| Infographic Factuality (AutoRater) | 0.521 | 0.328 | 0.179 | 0.265 |
| General Editing (Elo) | 1026 ± 12 | 980 ± 15 | 938 ± 11 | 939 ± 10 |
| Single-Character Consistency | 1028 ± 14 | 1021 ± 14 | 981 ± 10 | 991 ± 9 |
| Multi-Character Consistency | 1106 ± 14 | 1068 ± 14 | 978 ± 10 | 1011 ± 10 |
| Multi-Reference Editing | 1066 ± 22 | 1041 ± 20 | 988 ± 13 | 989 ± 12 |

On this table Nano Banana 2.1 leads Pro on every row, and even the Flash-tier Nano Banana 2 beats Pro
on overall preference (990 vs 935) and infographics (961 vs 912). Pro still leads Nano Banana 2 on
single-character (991 vs 981), multi-character (1011 vs 978) and product consistency (965 vs 955)
editing, which is consistent with its editing-oriented marketing but not with a general quality
premium. The card does not say which Pro snapshot it evaluated. The AutoRater row is on an
unspecified scale and is not comparable with the Elo rows. Both tables are Google-run side-by-side
human evaluations of Google's own models, with no task counts, prompt sets or rater counts
published, so neither is independent evidence.

The DeepMind product page carries the same comparisons as charts whose labels are vector paths, so
the page text yields only alt-text summaries ("Gemini 3 Pro Image has the highest Elo score") and no
numbers ([product page](../../sources/deepmind.google/nano-banana-pro/2026-10-26.md)). The developer
post's "excels on Text to Image AI benchmarks" is likewise backed by a single unlabelled bar chart
([developer post](../../sources/blog.google/nano-banana-pro-developers/2026-10-26.md)).

### Marketing claims, kept separate

- "Built on Gemini 3. Create and edit images with studio-quality levels of precision and control"
  ([product page](../../sources/deepmind.google/nano-banana-pro/2026-10-26.md)).
- "the best model for creating images with correctly rendered and legible text"
  ([launch post](../../sources/blog.google/nano-banana-pro-launch/2026-10-26.md)).
- "State-of-the-art image generation and editing models for highly contextual native image creation"
  ([models catalogue](../../sources/google.dev/gemini-api-models/2026-10-26.md)).
- fal: "production-quality visuals", "First-generation outputs align with complex briefs"
  ([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)).
- Replicate: "Google's state of the art image generation and editing model"
  ([Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)).

None of these has a benchmark, sample size or methodology attached on the page where it appears.

## Limitations and constraints

**Vendor-stated failure modes.** The model card is unusually specific:

> - Text rendering: poor in small text (often blurry in 1k model), long paragraphs, page length
> - Character consistency is not always perfect between input images and generated output image
> - Masked/Doodle based editing: partial instruction following and persistent ink
> - When editing images: infrequent copying/pasting from user's input image to generated image
> - Occasional confusion around spatial localisation (e.g. left/right etc.)
> - Still limited in advanced capabilities with world knowledge, 3D reasoning and factuality

It also states: "There may also be occasional slowness or timeout issues", and "The knowledge cutoff
date for Gemini 3 Pro Image was January 2025"
([model card](../../sources/deepmind.google/gemini-3-pro-image-model-card/2026-10-26.md)). The product
page repeats the same themes in softer language — small faces, accurate spelling, fine details,
factual errors in infographics, translation nuance, artifacts in complex edits, imperfect character
consistency ([product page](../../sources/deepmind.google/nano-banana-pro/2026-10-26.md)).

**Context and output limits are contradictory.** The DeepMind model card says inputs have "a token
context window of up to 1M" and outputs "a 64K token output"
([model card](../../sources/deepmind.google/gemini-3-pro-image-model-card/2026-10-26.md)). The Vertex
/ Agent Platform card for the same model ID says maximum input **65,536** and maximum output
**32,768** ([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md)).
Both are first-party and both were read on 2026-10-26. The platform limit is the one that binds an
API request; the same 1M-vs-131,072 / 64K-vs-32,768 pattern appears for Nano Banana 2.1, so it looks
like a recurring model-card/platform mismatch rather than a transcription error. The Gemini API model
page for `gemini-3-pro-image` — which would settle it — was not captured (see Evidence status).

**Reference-image budget is contradictory.** Four first-party statements:

- Launch post: "using up to 14 images and maintaining the consistency and resemblance of up to 5
  people".
- Developer post: "consistent resemblance for up to five individuals, integrate six high-fidelity
  shots, or blend as many as fourteen standard inputs".
- API guide table: 6 object images + 5 character images + 3 style images for Gemini 3 Pro Image, and
  its prose says "`gemini-3-pro-image` supports 5 images with high fidelity, and up to 14 images in
  total" ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- DeepMind product page: "the consistency and resemblance of up to five characters and the fidelity of
  up to fourteen objects" ([product page](../../sources/deepmind.google/nano-banana-pro/2026-10-26.md)).

Four pages, three different splits, one consistent total of 14. Vertex adds a transport constraint:
14 images only via Cloud Storage URIs or inline data, 10 if passed as HTTP(S) URLs. A user who needs
"14 objects" should expect the 6-object ceiling the API guide documents.

**Video input is contradictory.** Vertex lists Video as "Not supported" in its modality row but
"Image generation, Image generation from video input — Supported" in its capability row
([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md)). The
API guide scopes video-to-image to Nano Banana 2.1, Gemini 3.1 Flash Image and Flash Lite, excluding
Pro ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
Treat video input as unavailable unless a test says otherwise.

**No Image Search grounding.** Web Search grounding is supported; Image Search grounding is limited
to Nano Banana 2.1 and Gemini 3.1 Flash Image
([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)). fal's
Pro schema correspondingly has `enable_web_search` but no `enable_image_search`
([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)).

**Moderation and refusals vary by route.** fal exposes `safety_tolerance` 1–6 (default 4, "1 is the
most strict"); Replicate exposes `safety_filter_level` with three levels, defaulting to the most
permissive (`block_only_high`), and warns "some prompts will still be blocked". Google's own
API-level safety settings for this model were not captured. A refusal on one host is therefore
evidence about that host's configuration, not about the model's general willingness.

**Capacity and fallback.** Replicate states the model "may at times be at capacity" and offers an
opt-in `allow_fallback_model` that routes to `bytedance/seedream-5` at that model's price ($0.035 per
image in the captured billing tiers) ([Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)).
That is a silent-substitution risk: with the flag on, an image can come from a different vendor's
model.

**Host-side capability gaps.** Replicate's aspect-ratio enum omits the panoramic ratios
(`1:4/4:1/1:8/8:1`) that Vertex documents, and exposes no seed, image count, search toggle or thinking
control. fal exposes all of those but its own spec table omits the panoramic ratios while its schema
includes them ([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md),
[Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)).

**Watermarking scope is ambiguous.** SynthID is embedded in every image first-party. A *visible*
Gemini-sparkle watermark is stated for free and Google AI Pro tier users in the Gemini app, removed
for Ultra subscribers and in AI Studio
([launch post](../../sources/blog.google/nano-banana-pro-launch/2026-10-26.md)). fal restates this as
"visible watermark for non-Ultra subscribers"
([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)), which does not map cleanly onto API
output. Whether an API image carries a visible mark is not established by any captured source.

## Access, pricing, licensing

- **Gemini API list price:** input $2.00 per 1M tokens, text/thinking output $12.00, image output
  $120.00 — "Equivalent to $0.134 per 1K/2K image and $0.24 per 4K image"
  ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)). Vertex bills the same token
  counts (1,120 tokens per 1K/2K image, 2,000 per 4K; 560 tokens per input image), so the per-image
  figures reconcile with the platform card
  ([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md)).
  Free-tier availability and batch pricing for Pro were not captured.
- **fal:** $0.15 per image, 4K at double rate ($0.30), +$0.015 when web search is used; "Commercial
  use enabled through fal.ai" ([fal](../../sources/fal.ai/nano-banana-pro/2026-10-26.md)). That is
  ~12% above Google's 1K/2K list price and 25% above at 4K.
- **Replicate:** $0.15 at 1K and 2K, $0.30 at 4K, $0.035 on the fallback tier
  ([Replicate](../../sources/replicate.com/nano-banana-pro/2026-10-26.md)).
- **Vertex / Gemini Enterprise Agent Platform:** GA 2026-05-28, retirement "May 28, 2027 or later"
  for Agent Platform support only — the footnote explicitly separates this from Gemini API
  availability, and the API deprecations table lists no shutdown date for `gemini-3-pro-image`
  ([Cloud model card](../../sources/google.com/gemini-3-pro-image-cloud-model-card/2026-10-26.md),
  [deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)). Batch inference,
  Provisioned Throughput and Standard/Flex/Priority PayGo are supported; region is `global` only.
  Vertex list pricing was not captured.
- **Consumer and workspace surfaces at launch:** Gemini app (via the "Thinking" model), AI Mode in
  Search (US, AI Pro/Ultra), NotebookLM, Google Ads, Workspace Slides and Vids, AI Studio, Google
  Antigravity, Flow (Ultra)
  ([launch post](../../sources/blog.google/nano-banana-pro-launch/2026-10-26.md),
  [developer post](../../sources/blog.google/nano-banana-pro-developers/2026-10-26.md)).
- **Licensing:** Google's output/licence terms for this model were not captured. fal asserts
  commercial use through its service; Replicate's page says nothing about licensing. Do not infer
  Google's terms from a host's badge.

## Unresolved questions

1. Why does Google still market Pro as the premium model when its own October 2026 model card ranks
   Nano Banana 2.1 above it on every reported axis? No independent comparison exists, and Pro's
   dedicated model card and launch material all date from November 2025, so it is unclear whether the
   card measures an outdated Pro or whether the positioning is simply marketing.
2. Which snapshot do fal and Replicate serve? Replicate's public `latest_version` dates to
   2025-11-20 while an internal mirror used by its playground dates to 2026-07-21; fal publishes no
   snapshot at all.
3. Is the context window 1M (model card) or 65,536 (Vertex), and is the output limit 64K or 32,768?
4. What exactly is the 14-image budget — 14 objects, 6 objects + 5 characters + 3 styles, or 5
   characters + 14 objects?
5. Does `gemini-3-pro-image` accept video input, as Vertex's capability row claims, or not, as its
   modality row and the API guide imply?
6. Is thinking level controllable? Google's guide omits Pro from the thinking-levels table; fal says
   only `high` is available and thinking cannot be disabled.
7. Are the panoramic aspect ratios (`1:4/4:1/1:8/8:1`) native to Pro, or inherited from the Nano
   Banana 2 work? Vertex lists them for Pro; the February 2026 Nano Banana 2 post presents them as new
   to Nano Banana 2.
8. What are Google's API-level safety settings, free-tier allowance and batch price for Pro?
9. Does API output carry a visible watermark for non-Ultra accounts, or is the visible mark confined
   to consumer apps?

## Evidence status

Evidence floor: **met**. Six new first-party records — the launch post, the developer post, the DeepMind
product page, the DeepMind model card PDF, the Vertex/Agent Platform model card, and the Nano Banana
2.1 model card that supplies the current same-vendor comparison — plus two independent host records
(fal, Replicate). Five consolidated Gemini API records
([models](../../sources/google.dev/gemini-api-models/2026-10-26.md),
[changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
[deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md),
[pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md),
[image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)) supply
the model ID, dates and list prices; the family page supplies the tier taxonomy
([DeepMind family page](../../sources/deepmind.google/gemini-image/2026-10-26.md)).

**No direct tests have been run for this page.** Every capability, quality and limitation statement
above is documentation or marketing from Google or from a host, captured on 2026-10-26. The only
quantitative sources are two vendor-run Elo evaluations (November 2025 and October 2026), neither of
which has an independent replication and neither of which reports task counts or rater counts.

Known capture gap: Google's Gemini API model page for `gemini-3-pro-image` was not captured because
the `ai.google.dev` model pages were unavailable during capture, and no `sources/ai.google.dev`
record was created. That page is where API-level token limits, capability flags and safety settings
would be stated; the contradictions listed above are partly a consequence of its absence.

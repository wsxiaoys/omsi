# Nano Banana 2

Google's high-efficiency image generation and conversational editing model, released as a
preview on 2026-02-26 and as GA on 2026-05-28
([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md)). "Nano Banana 2" is
a marketing name for **Gemini 3.1 Flash Image**, model ID `gemini-3.1-flash-image`
([Gemini API models catalogue](../../sources/google.dev/gemini-api-models/2026-10-26.md)). As of
the capture date Google's own developer guide calls it the "previous-generation high-efficiency
workhorse model" and recommends Nano Banana 2.1 for all new projects, while keeping NB2 stable
with no announced shutdown date
([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
[deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).

## Identity

- Canonical name: Nano Banana 2. Model name: Gemini 3.1 Flash Image. Model ID:
  `gemini-3.1-flash-image` ([models catalogue](../../sources/google.dev/gemini-api-models/2026-10-26.md),
  [model page](../../sources/google.dev/gemini-3.1-flash-image-model-page/2026-10-26.md)).
- Preview ID, now retired: `gemini-3.1-flash-image-preview`, released 2026-02-26, shut down
  2026-06-25 ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
- Other aliases: "Gemini 3.1 Flash Image" is the spelling Google's Cloud docs use alongside
  "(Nano Banana 2)"
  ([Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).
- Host endpoints: `fal-ai/nano-banana-2` and `fal-ai/nano-banana-2/edit` on fal
  ([fal](../../sources/fal.ai/nano-banana-2/2026-10-26.md)); `google/nano-banana-2` on Replicate
  ([Replicate](../../sources/replicate.com/nano-banana-2/2026-10-26.md)).
- First-party surfaces: Gemini API (`gemini-3.1-flash-image`), Google AI Studio, Vertex AI /
  Gemini Enterprise Agent Platform, Google Antigravity and Firebase
  ([launch post](../../sources/blog.google/nano-banana-2-launch/2026-10-26.md),
  [Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).

The name-to-ID mapping is **verified**, not inferred: Google's catalogue lists "Nano Banana 2 →
`gemini-3.1-flash-image`" in its name-to-endpoint table, and the launch post writes "Nano
Banana 2 (Gemini 3.1 Flash Image)" in its first sentence. There is no remaining doubt about
which Gemini model the marketing name denotes.

### Release date and the one-year window

- Preview availability: **2026-02-26** ("Launched Nano Banana 2, Gemini 3.1 Flash Image
  Preview") — [changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md), with a
  dated launch post on the same day
  ([blog](../../sources/blog.google/nano-banana-2-launch/2026-10-26.md)).
- General availability: **2026-05-28** — [changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
  corroborated by the Cloud card's "Release date: May 28, 2026"
  ([Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).
- Both dates fall on or after 2025-10-26, so Nano Banana 2 is **inside the one-year window** on
  either reading. No part of this model predates the window.
- Minor first-party inconsistency: the model page's own "Latest update" field says "February
  2026" while its footer is dated 2026-10-09
  ([model page](../../sources/google.dev/gemini-3.1-flash-image-model-page/2026-10-26.md)). The
  field appears to track model-side changes rather than release events; the changelog dates are
  the ones used above.

### Relationship to Nano Banana 2.1 and Nano Banana Pro

These are three distinct first-party models with separate IDs, separate prices and separate
release dates. Findings on this page should not be transferred to either sibling.

- **Nano Banana 2.1** (`gemini-nano-banana-2.1`, GA 2026-10-06) is described by Google as "an
  update to Nano Banana 2" and the current high-efficiency workhorse
  ([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
  [2.1 model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).
  It is a successor, not a serving tier of NB2: it has its own model code (which breaks the
  `gemini-3.x-*` naming pattern), its own pricing block, and its own documented feature set,
  including a `medium` thinking level that NB2 does not have. Google's deprecations table names
  it as the recommended replacement for `gemini-3.1-flash-image`
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
  Two first-party pages nonetheless present NB2 without noting a successor — the DeepMind
  family page, which does not mention 2.1 at all
  ([DeepMind](../../sources/deepmind.google/gemini-image/2026-10-26.md)), and NB2's own model
  page, dated 2026-10-09. Which model is "current" therefore depends on which Google page you
  read; the developer guide's statement is the most recent and most specific.
- **Nano Banana Pro** (`gemini-3-pro-image`) reached GA the **same day** as NB2, 2026-05-28,
  from a preview dated 2025-11-20
  ([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
  [deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)). It is
  positioned as the premium tier for "the most complex visual tasks" with a larger reference
  budget (6 objects + 5 characters + 3 style references, versus 10 objects + 4 characters for
  NB2) and a higher price — $0.134 per 1K/2K image against NB2's $0.067
  ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md),
  [image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  Pro is therefore a different model, not an up-charged route to NB2.
- **Nano Banana 2 Lite** (`gemini-3.1-flash-lite-image`, GA 2026-06-30) is a third sibling:
  same generation number, different ID, 1K-only output and no panoramic ratios
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  "Nano Banana 2" and "Nano Banana 2 Lite" must not be conflated; the Lite model is outside this
  page's scope.

## Current assessment

Nano Banana 2 is a fast, cheap, multimodal-in / image-and-text-out Gemini model whose
distinguishing features over the original Nano Banana are multimodal reasoning before
rendering, a wide resolution ladder (512px through 4K), 14 reference slots, optional Google Web
and Image Search grounding, and configurable thinking
([model page](../../sources/google.dev/gemini-3.1-flash-image-model-page/2026-10-26.md),
[launch post](../../sources/blog.google/nano-banana-2-launch/2026-10-26.md)). Google positions
it as the "high-efficiency counterpart to Gemini 3 Pro Image"
([model page](../../sources/google.dev/gemini-3.1-flash-image-model-page/2026-10-26.md)) and
markets it as offering "pro-level image generation and editing, at Flash speed"
([DeepMind](../../sources/deepmind.google/gemini-image/2026-10-26.md)) — a positioning claim,
not a measured equivalence.

The practical recommendation as of 2026-10-26 is to reach for it only when something specific
about NB2 is required, because Google's own guide says new projects should use Nano Banana 2.1
and the deprecations table already points at 2.1 as NB2's replacement. What NB2 still has that
2.1's documentation does not show is a 512px output tier — the image generation guide says
512px is added by Gemini 3.1 Flash Image and "not supported on Gemini Nano Banana 2.1"
([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
That is a documented difference in NB2's favour, not a quality claim.

None of the quality language around this model has been measured. "Pro-level image generation
and editing, at Flash speed", "vibrant lighting, richer textures and sharper details",
"significantly improving output quality" and "a generational leap in quality" are vendor and
host statements with no benchmark, dataset or sample size attached
([DeepMind](../../sources/deepmind.google/gemini-image/2026-10-26.md),
[launch post](../../sources/blog.google/nano-banana-2-launch/2026-10-26.md),
[fal](../../sources/fal.ai/nano-banana-2/2026-10-26.md)). They are recorded as marketing, not
as findings.

## Documented capabilities

All of the following is vendor or host documentation. No direct tests have been run for this
page.

- **Text-to-image and conversational editing from one model ID.** Inputs are text, image, video
  and PDF; outputs are image and text
  ([model page](../../sources/google.dev/gemini-3.1-flash-image-model-page/2026-10-26.md)).
  Multi-turn editing is listed as supported on the Cloud card
  ([Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).
- **Output resolutions 512px, 1K (default), 2K and 4K**, with 14 aspect ratios including the
  panoramic `1:4`, `4:1`, `1:8` and `8:1`
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
  [model page](../../sources/google.dev/gemini-3.1-flash-image-model-page/2026-10-26.md)).
- **Reference images: up to 14 total, of which 10 objects with high fidelity and 4 characters
  for consistency.** Google's Limitations text states the same 10/4 split
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **Grounding with Google Web Search and Google Image Search**, the latter added for this model
  ([model page](../../sources/google.dev/gemini-3.1-flash-image-model-page/2026-10-26.md),
  [image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **Thinking mode, configurable to `minimal` (default) or `high`**, with interim "thought
  images" generated in the backend and not charged
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **Video input for image generation.** The 2026-05-28 changelog introduced video-to-image
  "exclusively on the `gemini-3.1-flash-image` model"; the current guide extends it to 2.1 and
  Flash Lite, so the exclusivity was temporary
  ([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
  [image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **SynthID watermark on every output**
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)),
  and **C2PA Content Credentials** support on the Cloud surface
  ([Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).
- **Text rendering and in-image localization.** Google claims reliable typography for
  infographics, menus, diagrams and marketing assets and in-image translation across languages
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
  [launch post](../../sources/blog.google/nano-banana-2-launch/2026-10-26.md)). Best performance
  is documented for a 15-language list (EN, ar-EG, de-DE, es-MX, fr-FR, hi-IN, id-ID, it-IT,
  ja-JP, ko-KR, pt-BR, ru-RU, ua-UA, vi-VN, zh-CN); no accuracy figure is published.
- **Token and size limits** on the Cloud surface: 131,072 input tokens, 32,768 output tokens,
  500 MB input size limit, knowledge cutoff January 2025
  ([Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).
  Output images consume 747 / 1,120 / 1,680 / 2,520 tokens at 512px / 1K / 2K / 4K, and each
  input image consumes 1,120 tokens.

### What hosts expose beyond the first-party surface

Hosts do not expose the same controls, and a capability documented by Google may not be
reachable on a given host:

- fal exposes `thinking_level` (`minimal`/`high`, "thinking cannot be disabled"), `seed`,
  `num_images` (1–4), `temperature`/`top_p`/`max_output_tokens`, `safety_tolerance` 1–6,
  `system_prompt`, `enable_web_search`, `enable_image_search`, output formats jpeg/png/webp,
  and conversation state via `history`/`return_history`
  ([fal](../../sources/fal.ai/nano-banana-2/2026-10-26.md)).
- Replicate's current version exposes only `prompt`, `image_input`, `resolution`
  (`1K`/`2K`/`4K`), `aspect_ratio` (with `match_input_image`), `google_search`, `image_search`
  and `output_format` (`jpg`/`png`) — no seed, thinking level, batch count or safety parameter
  ([Replicate](../../sources/replicate.com/nano-banana-2/2026-10-26.md)).
- Consequence: "Nano Banana 2 supports X" is only actionable once you name the route. The
  512px tier and the thinking level are documented by Google and exposed by fal, but not by
  Replicate's current version.

## Limitations and constraints

- **Documented artifacts on panoramic ratios.** Google's Nano Banana 2.1 page lists "Fixed
  tiling artifacts on wide and panoramic aspect ratios (1:4, 4:1, 1:8, 8:1) at 2K and 4K
  resolutions" as one of 2.1's changes
  ([2.1 model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).
  That is an indirect statement that NB2 produced such artifacts; NB2's own documentation never
  mentions them. Treat it as a successor's release note about the predecessor, and as
  unresolved for NB2 specifically — neither the severity nor the affected resolutions were
  observed directly here.
- **Reference budget is split, not a flat 14.** 10 objects plus 4 characters, and the 14 is the
  total ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  Hosts state the total only: fal says "up to 14 reference images for editing", Replicate says
  "supports up to 14 images".
- **Character consistency is capped at 4 characters on Google's docs but claimed as 5 people by
  fal** ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
  [fal](../../sources/fal.ai/nano-banana-2/2026-10-26.md)). Unresolved; fal's figure coincides
  with Google's Nano Banana **Pro** number, so it may be a copy error rather than a real
  difference. Neither number is a measured identity-preservation rate.
- **No real-world images of people via search grounding.** Google states that grounding with
  Google Search does not support "using real-world images of people from web search at this
  time" for this model
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  This is a documented restriction on one feature, not a statement about the model's general
  willingness to render people — the Cloud card lists "Person generation" and "Virtual try-on"
  as supported
  ([Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).
- **Output count is not guaranteed.** "The model won't always follow the exact number of image
  outputs that the user explicitly asks for"
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  fal's `limit_generations` default of `true` is a host-side workaround for the same behaviour
  and is described by fal as possibly affecting quality
  ([fal](../../sources/fal.ai/nano-banana-2/2026-10-26.md)).
- **No audio input.** Documented explicitly, and the Cloud card marks audio "Not supported"
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
  [Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).
- **Not a structured-output or tool-calling model.** Structured output, function calling, code
  execution and URL context are all "Not supported" on both the Gemini API model page and the
  Cloud card.
- **Superseded by default.** Google's guide recommends 2.1 for new projects, and the
  deprecations table lists `gemini-nano-banana-2.1` as the replacement for
  `gemini-3.1-flash-image`
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
  [deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)). NB2 remains
  obtainable: no Gemini API shutdown date is announced, and Vertex lists a retirement date of
  2027-05-28 or later for its own surface.
- **Two different support clocks.** The Gemini API table says "no shutdown date announced",
  while Vertex AI says "Retirement date: May 28, 2027 or later" and explicitly notes that the
  Gemini API is a separate offering with its own terms
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md),
  [Cloud model card](../../sources/google.com/gemini-3.1-flash-image-cloud-model-card/2026-10-26.md)).
  A migration deadline therefore depends on which surface you call.

## Access, pricing, licensing

- **Gemini API, standard tier**: $0.50 per 1M input tokens, $3 per 1M output text/thinking
  tokens, $60 per 1M output image tokens — "equivalent to $0.045 per 0.5K image, $0.067 per 1K
  image, $0.101 per 2K image, and $0.151 per 4K image". Batch is exactly half. No free tier
  ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)).
- **Grounding searches**: 5,000 free requests per month shared across Gemini 3 and newer
  models, then $14 per 1,000 requests for text- and image-based grounding; retrieved grounding
  context is not charged as input tokens
  ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)).
- **fal**: $0.08 per image, with 2K at 1.5× and 4K at 2×, 0.5K at 0.75×, plus $0.015 per
  request when web search is used and $0.002 when high thinking is used
  ([fal](../../sources/fal.ai/nano-banana-2/2026-10-26.md)). That is above Google's own list
  price for 1K output; fal does not explain the difference.
- **Replicate**: $0.067 / $0.101 / $0.151 per output image at 1K / 2K / 4K, matching Google's
  list prices rather than marking them up
  ([Replicate](../../sources/replicate.com/nano-banana-2/2026-10-26.md)).
- **Licensing**: fal marks the endpoint "Commercial use" and states that commercial use is
  "enabled through fal.ai"
  ([fal](../../sources/fal.ai/nano-banana-2/2026-10-26.md)). That is the host's statement about
  its own service. Google's own output-usage terms for this model were **not captured**, and
  the Replicate page states no licence terms at all
  ([Replicate](../../sources/replicate.com/nano-banana-2/2026-10-26.md)). Do not treat a host's
  commercial-use badge as a statement of Google's terms.
- **No public weights.** Every source here describes hosted access only; nothing captured
  suggests NB2 can be self-hosted.

## Unresolved questions

1. Did `gemini-3.1-flash-image` change between the 2026-02-26 preview, the 2026-05-28 GA
   release, and the capture date? Neither the changelog nor the model page records a
   model-side change, and the "Latest update: February 2026" field is unexplained.
2. How severe are the panoramic-ratio tiling artifacts that Nano Banana 2.1 says it fixed, and
   do they affect all four extreme ratios at both 2K and 4K?
3. Which upstream snapshot do fal and Replicate serve, and how stale is each? Replicate has two
   versions (2026-02-26 and 2026-07-21) and does not document the difference; fal records only
   a deployment timestamp.
4. Is fal's "up to 5 people" character-consistency figure a copy error from Nano Banana Pro, or
   a real capability difference from Google's documented 4 characters?
5. Is the 512px tier genuinely absent from Nano Banana 2.1, or only undocumented there? Google's
   guide is explicit, but 2.1's model page does not mention 512px either way. This matters
   because it is currently NB2's only documented advantage over its successor.
6. Does Replicate's current version actually expose 512px output? Its readme says yes, its
   schema says no.
7. What are Google's output-usage terms for Gemini API images, as distinct from a host's
   "commercial use" badge?

## Evidence status

Evidence floor: **met**. The first-party publisher (Google) is represented by ten records: the
Gemini API models catalogue, image generation guide, pricing page, changelog, deprecations
table, the `gemini-3.1-flash-image` model page, the 2026-02-26 launch post, the DeepMind family
page, the Cloud model card, and the Nano Banana 2.1 model page. The last of those is cited only
for what it says about NB2 as 2.1's predecessor; 2.1's own capabilities are not imported here.
Two independent host records (fal and Replicate) supply the host side of the floor.

All records were captured on 2026-10-26. Everything above is documentation or marketing;
**no direct tests were run for this page**, and no independent evaluation, benchmark, user
report or measured latency exists in this evidence set. The one quantified figure that is
neither a price nor a limit — the 21.6M run count on Replicate — measures usage, not quality.

The most useful next evidence would be a small reproducible test on a named route and date:
panoramic-ratio output at 2K and 4K to check the tiling defect, the 10-object/4-character
reference budget, 512px output, thinking-level effect on latency, and refusal behaviour on
person-centric prompts with search grounding on and off.

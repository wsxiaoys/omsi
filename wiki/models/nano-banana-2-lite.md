# Nano Banana 2 Lite

Google's cheap-and-fast image generation and editing model, released **directly to general
availability on 2026-06-30** as `gemini-3.1-flash-lite-image`
([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
[deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)). It is the
Flash-Lite tier of the Nano Banana family: 1K output only, no search grounding, half of Nano
Banana 2's input token budget and an eighth of its output budget, and a per-image price half of
Nano Banana 2's
([pricing](../../sources/google.dev/gemini-3.1-flash-lite-image-pricing/2026-10-26.md)). Google's
own guide names it as the migration target for the original Nano Banana
(`gemini-2.5-flash-image`), not as a successor to Nano Banana 2
([image generation guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md)).

## Identity

- Canonical marketing name: **Nano Banana 2 Lite**. Model name: **Gemini 3.1 Flash Lite Image**
  (spelled "Gemini 3.1 Flash Lite image" in the model page's own title).
- Gemini API model ID: **`gemini-3.1-flash-lite-image`**
  ([models catalogue](../../sources/google.dev/gemini-api-models/2026-10-26.md),
  [model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
- The name-to-ID mapping is **verified first-party**, not inferred: the models catalogue's
  name-to-endpoint table lists "Nano Banana 2 Lite → `gemini-3.1-flash-lite-image`", the pricing
  page heads its block "Gemini 3.1 Flash Lite Image (Nano Banana 2 Lite) 🍌"
  ([pricing](../../sources/google.dev/gemini-3.1-flash-lite-image-pricing/2026-10-26.md)), and
  the model page opens "Nano Banana 2 Lite is designed as the efficiency specialist of the image
  generation family".
- Aliases in circulation: "Gemini 3.1 Flash Lite Image" (Google), "Gemini 3.1 Flash-Lite Image"
  (Replicate's hyphenated spelling,
  [Replicate](../../sources/replicate.com/nano-banana-2-lite/2026-10-26.md)), "Nano Banana 2
  Lite (Gemini 3.1 Flash Lite Image)" (Artificial Analysis,
  [AA](../../sources/artificialanalysis.ai/nano-banana-2-lite/2026-10-26.md)).
- Host endpoints: fal `google/nano-banana-2-lite` (text-to-image) and
  `google/nano-banana-2-lite/edit` (image-to-image)
  ([fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md)); Replicate
  `google/nano-banana-2-lite` ([Replicate](../../sources/replicate.com/nano-banana-2-lite/2026-10-26.md)).
- First-party surfaces: Gemini API and Google AI Studio ("Try in Google AI Studio"), with Batch
  API support; Flex and Priority inference are not supported
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
- **No preview ID.** Unlike every other model in the family, Lite has no `-preview` row in the
  deprecations table — it went straight to a stable ID
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
- Siblings: Nano Banana 2.1 (`gemini-nano-banana-2.1`, GA 2026-10-06), Nano Banana 2
  (`gemini-3.1-flash-image`, GA 2026-05-28), Nano Banana Pro (`gemini-3-pro-image`, GA
  2026-05-28), and the original Nano Banana (`gemini-2.5-flash-image`, shutdown 2027-03-15).
  Each is a separate model ID with its own price block and support row
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).

### Release date and the one-year window

- GA: **2026-06-30** — the changelog entry reads "Released `gemini-3.1-flash-lite-image` (Nano
  Banana 2 Lite) to general availability (GA)"
  ([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md)); the deprecations
  table gives the same release date
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
- fal's catalogue independently dates its endpoint to `2026-06-30T19:22:41Z` and Replicate's
  first version to `2026-06-30T19:12:21Z`, both the same day
  ([fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md),
  [Replicate](../../sources/replicate.com/nano-banana-2-lite/2026-10-26.md)).
- 2026-06-30 is after 2025-10-26, so the model is **inside the one-year window** with no
  specialist exception needed.
- The model page's "Latest update" field reads "June 2026" against a page footer of 2026-09-03,
  which is consistent with GA but does not date any model-side change
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).

### Relationship to Nano Banana 2, 2.1 and Pro

Four separate first-party models, not one model at four prices. The documented deltas:

| | 2 Lite | Nano Banana 2 | Nano Banana 2.1 | Pro |
| --- | --- | --- | --- | --- |
| Model ID | `gemini-3.1-flash-lite-image` | `gemini-3.1-flash-image` | `gemini-nano-banana-2.1` | `gemini-3-pro-image` |
| GA | 2026-06-30 | 2026-05-28 | 2026-10-06 | 2026-05-28 |
| Max resolution | 1K only | 4K (+512px) | 4K | 4K |
| Reference budget | 14 objects, no character slots | 10 objects + 4 characters | 10 objects + 4 characters | 6 objects + 5 characters + 3 style |
| Search grounding | Not supported | Web + Image Search | Web + Image Search | Web + Image Search |
| Thinking levels | minimal, high | minimal, high | minimal, medium, high | not in the guide's thinking table |
| Token limits | 65,536 in / 4,096 out | 131,072 / 32,768 | 131,072 / 32,768 | not captured |
| Image output | $30 / 1M ($0.0336 per 1K) | $60 / 1M ($0.067 per 1K) | $30 / 1M ($0.0336 per 1K) | $120 / 1M ($0.134 per 1K) |
| Input tokens | $0.25 / 1M | $0.50 / 1M | $1.50 / 1M | $2.00 / 1M |

Sources: model page, pricing page and image-generation guide above; the 2 and 2.1 columns come
from the existing [Nano Banana 2](nano-banana-2.md) and [Nano Banana 2.1](nano-banana-2.1.md)
pages, the Pro column from [Nano Banana Pro](nano-banana-pro.md) and the pricing page
([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)).

Two consequences worth stating plainly:

1. **"Cheapest" is about the whole request, not the image.** Lite and 2.1 charge the identical
   $30/1M for output images, so a bare 1K generation costs the same $0.0336 on either. Lite is
   cheaper on input ($0.25 vs $1.50) and on text/thinking output ($1.50 vs $7.50), which matters
   for reference-heavy or reasoning-heavy prompts, and it is the only model in the family
   without grounding charges because it cannot ground at all
   ([pricing](../../sources/google.dev/gemini-3.1-flash-lite-image-pricing/2026-10-26.md)).
2. **Lite is the replacement for the original Nano Banana.** Both the guide's migration note and
   the deprecations "Recommended replacement" column point `gemini-2.5-flash-image` traffic at
   Lite; nothing recommends Lite as a replacement for Nano Banana 2, whose replacement is 2.1
   ([guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md),
   [deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).

## Current assessment

Nano Banana 2 Lite is a **distinct tier, not a repackaging**. It has its own model ID, its own
price block, its own token limits (half of Nano Banana 2's input, an eighth of its output),
a capability it lacks that every sibling has (search grounding), a resolution ceiling the others
do not have, and an independent arena score and latency measurement. Google gives it a support
row of its own with no announced shutdown date and no recommended replacement
([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md),
[model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/nano-banana-2-lite/2026-10-26.md)).

The evidence supports a narrow, honest claim: **it is the cheapest route to a 1K image in this
family and the fastest one measured, at a measurable quality cost against Nano Banana 2.**
Independent arena data puts it 33 Elo below Nano Banana 2 with non-overlapping confidence
intervals, and 11 Elo below Nano Banana Pro with overlapping intervals — so "worse than NB2" is
supported while "worse than Pro" is not established by this sample
([AA](../../sources/artificialanalysis.ai/nano-banana-2-lite/2026-10-26.md)). Independently
measured median generation time is 3.03 s, against 7.74 s for Nano Banana 2 and 14.47 s for Pro.
No arena or latency measurement of Nano Banana 2.1 was captured, so "fastest" here is relative
to the models AA measured, not to the whole family.

What the evidence does **not** support:

- **"Sub-2 second end-to-end latency" is unverified and, as literally stated, contradicted.**
  Google states it as both a design target and a capability
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md));
  Artificial Analysis measures a 3.03 s median (2.52 s at p05) and says its figure includes
  downloading the image, which Google's may not. The two numbers measure different things, and
  neither page reconciles them, so treat "sub-2 second" as a vendor claim about model-side
  latency rather than an observed end-to-end time
  ([AA](../../sources/artificialanalysis.ai/nano-banana-2-lite/2026-10-26.md)).
- **"Maintains high character alignment matching original Nano Banana standards"** is marketing.
  The same vendor's reference table gives Lite **no character-consistency slots at all** — the
  character row is "N/A" for Lite and populated for every sibling
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md),
  [guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md)).
- **"Fast multi-turn local edits"** (fal's copy) is contradicted by Google's own positioning:
  Lite is "Not optimized for multiple reference inputs or multi-turn sequential editing"
  ([fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md),
  [guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md)).

It is neither preview nor deprecated: stable ID, GA since 2026-06-30, no shutdown date announced.

## Documented capabilities

All of the following is vendor or host documentation. No direct tests were run for this page.

- **Text-to-image and image editing from one model ID.** Inputs are text, image, video and PDF;
  outputs are image and text
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
  Google describes "interleaved generation and editing with native support for Text -> Text +
  Image(s) and Image + Text -> Text + Image(s)", and lists "fast multi-turn local edits (swapping
  colors, sticker creation, background adjustments)" among the model's uses.
- **Video input / video-to-image.** Documented for Lite specifically: a public YouTube URL or an
  uploaded video can be passed as multimodal context
  ([guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md)). This is one
  of only three models in the family with the feature.
- **1K output only.** `image_size` accepts 1024px; "2K and 4K are unsupported"
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
  Google's pricing footnote prices that 1K image at 1,120 tokens.
- **Ten documented aspect ratios**, with a competing count of fourteen — see the contradiction
  section below.
- **Up to 14 reference images, all objects.** The reference table's Lite column reads "Up to 14
  images of objects with high-fidelity", with "N/A" for characters and for style references
  ([guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md)).
- **Thinking levels `minimal` and `high`, default `minimal`**, with interim "thought images"
  generated but not charged
  ([guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md),
  [model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
- **SynthID watermark always on, plus C2PA** — "SynthID watermarking (Always On) + C2PA"
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
- **Batch API supported**, at exactly half the standard price
  ([pricing](../../sources/google.dev/gemini-3.1-flash-lite-image-pricing/2026-10-26.md)).
- **Token budget: 65,536 input / 4,096 output**
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
- **Host-side controls differ sharply by route.** fal exposes `seed`, `num_images` (1–4),
  `system_prompt`, `safety_tolerance` (1–6, default 4), `output_format`
  (jpeg/png/webp), `limit_generations`, `sync_mode` and an optional `thinking_level` that
  "Omit to disable" ([fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md)). Replicate's
  current version exposes only `prompt`, `image_input`, `aspect_ratio` and `output_format`
  (jpg/png) — no resolution, seed, thinking level, batch count or safety parameter
  ([Replicate](../../sources/replicate.com/nano-banana-2-lite/2026-10-26.md)). "Lite supports X"
  is only actionable once the route is named.

## Limitations and constraints

- **No search grounding, of any kind.** Google's model page marks "Search grounding: Not
  supported" and the guide says grounding "Not supported by Gemini 3.1 Flash Lite Image model";
  the pricing block has no grounding row at all. This is the single largest capability gap
  against Nano Banana 2, 2.1 and Pro, all of which ground with Web and Image Search
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md),
  [guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md),
  [pricing](../../sources/google.dev/gemini-3.1-flash-lite-image-pricing/2026-10-26.md)).
- **No 2K or 4K, and no 512px.** 1K is the only supported `image_size`: it cannot drop to 512px
  (Nano Banana 2 can) or rise to 2K/4K (every sibling can)
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
- **No character-consistency or style-reference slots.** 14 references, all objects. A workflow
  that needs the same face across generations is out of scope on this model by documentation,
  despite the marketing line about character alignment
  ([guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md)).
- **Explicitly not built for multi-reference or sequential editing.** Google's own selection
  text says "Not optimized for multiple reference inputs or multi-turn sequential editing",
  which sits awkwardly beside the 14-reference budget and beside fal's "fast multi-turn local
  edits" copy ([guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md),
  [fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md)).
- **No structured output, function calling, code execution, URL context, file search, caching,
  audio generation, Maps grounding, or Live API.** All marked not supported
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
  No audio *input* either, family-wide.
- **Output count is not guaranteed.** "The model won't always follow the exact number of image
  outputs that the user explicitly asks for" — a family-wide caveat. fal's `limit_generations`
  default of `true` is a host workaround that fal says "may affect generation quality"
  ([guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md),
  [fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md)).
- **Best-performance languages are a 15-item list** (EN, ar-EG, de-DE, es-MX, fr-FR, hi-IN,
  id-ID, it-IT, ja-JP, ko-KR, pt-BR, ru-RU, ua-UA, vi-VN, zh-CN) with no accuracy figure
  published.
- **No public weights.** Every source here describes hosted access only.

### The aspect-ratio contradiction

Google's two pages and the two host schemas disagree, and the disagreement is not resolvable
from this evidence:

- The model page says "Supports a discrete set of 14 aspect ratios" and then enumerates **ten**:
  `1:1, 3:2, 2:3, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9`
  ([model page](../../sources/google.dev/gemini-3.1-flash-lite-image-model-page/2026-10-26.md)).
- The image-generation guide lists the same **ten**, labelled "New aspect ratios"
  ([guide](../../sources/google.dev/gemini-api-image-generation-lite/2026-10-26.md)).
- fal and Replicate both enumerate **fourteen**, adding the panoramic `1:4`, `4:1`, `1:8`, `8:1`
  ([fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md),
  [Replicate](../../sources/replicate.com/nano-banana-2-lite/2026-10-26.md)).

The count "14" agrees with the hosts while the enumerated set of ten agrees across Google's two
pages, so the most likely reading is that Google's list is stale and the count is right — but
that is an inference, and nothing captured confirms that Lite actually returns a usable 1:8
image. Do not plan a panoramic workflow on this model without testing it.

## Access, pricing, licensing

- **Gemini API, standard tier:** $0.25 per 1M input tokens (text/image/video), $1.50 per 1M
  text/thinking output tokens, $30 per 1M image output tokens — "equivalent to $0.0336 per 1K
  resolution image". Batch is exactly half ($0.125 / $0.75 / $15.00, $0.0168 per 1K image). **No
  free tier** ([pricing](../../sources/google.dev/gemini-3.1-flash-lite-image-pricing/2026-10-26.md)).
- **fal:** text tokens $0.3125 input / $1.875 output per 1M; image tokens $0.3125 input /
  $37.50 output per 1M; output fixed at 1K. At Google's stated 1,120 tokens per 1K image that is
  **≈$0.042 per output image**, about 25% above Google's list price — arithmetic from fal's
  published rates, not a fal-published per-image figure. fal also bills image *input* tokens, so
  reference-image work costs more. The `edit` endpoint is priced as "$1 per units" with no
  definition of a unit ([fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md)).
- **Replicate:** $0.034 per output image ("or around 29 images for $1"), a single tier with no
  resolution or reference criteria — i.e. Google's $0.0336 rounded up, passed through rather
  than marked up ([Replicate](../../sources/replicate.com/nano-banana-2-lite/2026-10-26.md)).
- **Artificial Analysis** quotes $33.6 per 1,000 images, which matches Google's list price and
  confirms the Replicate and Google figures are the same price stated to different precision
  ([AA](../../sources/artificialanalysis.ai/nano-banana-2-lite/2026-10-26.md)).
- **Licensing:** fal records `licenseType: "commercial"` and shows a "Commercial use" badge, with
  `provider_type: "partner"` and `hostingType: "proxy"` — the host's statement about its own
  service ([fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md)). Replicate's page
  states no licence terms ([Replicate](../../sources/replicate.com/nano-banana-2-lite/2026-10-26.md)).
  Google's output-usage terms for this model were **not captured**; do not treat a host's
  commercial-use badge as a statement of Google's terms.
- **fal naming hazard:** fal also lists `google/nano-banana-lite` and `google/nano-banana-lite/edit`
  with byte-identical copy and identical token pricing, dated the same day. Nothing on either
  page explains the difference, so a caller who picks `google/nano-banana-lite` cannot tell from
  the listing whether they are calling this model
  ([fal](../../sources/fal.ai/nano-banana-2-lite/2026-10-26.md)).

## Unresolved questions

1. **Ten aspect ratios or fourteen?** Do the four panoramic ratios that fal and Replicate offer
   actually work on Lite, and does Google's own API accept them?
2. **Is there any character-consistency capability at all?** The model page claims character
   alignment "matching original Nano Banana standards" while the guide's table grants no
   character slots. Both are Google pages read the same day.
3. **What does "sub-2 second latency" measure?** Google's claim and AA's 3.03 s median cannot
   both describe the same quantity, and neither page scopes its figure to region, prompt length,
   reference count or output count.
4. **Which upstream snapshot do the hosts serve?** fal published on 2026-06-30 and last updated
   its record on 2026-10-20; Replicate has versions dated 2026-06-30 and 2026-07-05 with no
   changelog. Whether either tracks a post-GA Google change is unknown.
5. **Why is fal ~25% above list price while Replicate passes list price through**, and why does
   fal bill image input tokens at a rate Google does not publish for this model?
6. **What is `google/nano-banana-lite` on fal** relative to `google/nano-banana-2-lite`?
7. **How does Lite compare with Nano Banana 2.1 on quality?** They cost the same per 1K image and
   2.1 is documented as better on every axis, but no independent measurement of 2.1 exists in
   this evidence set — AA has no 2.1 row at all.
8. **What are Google's output-usage terms** for Lite, as distinct from a host's "commercial use"
   badge?

## Evidence status

Evidence floor: **met**. First-party Google records: the `gemini-3.1-flash-lite-image` model
page, the Lite pricing block, the Lite passages of the image-generation guide, plus the existing
Gemini API models catalogue, changelog and deprecations captures (all 2026-10-26). Independent
host records: fal (`google/nano-banana-2-lite` and `/edit`) and Replicate
(`google/nano-banana-2-lite`). Independent measurement: Artificial Analysis's Image Arena Elo,
generation-time and price rows for this model, plus its Nano Banana 2 and Pro comparison rows.

All records were captured on 2026-10-26. **No direct tests were run for this page.** Every
capability statement is documentation or marketing; the only measured quantities in the evidence
set are AA's Elo, its generation-time percentiles and the three published price schedules. The
"sub-2 second", "fastest", "cheapest" and "high character alignment" claims are vendor or host
copy and are recorded as claims.

The most useful next evidence would be a small reproducible test on named routes: a 1:8 and 4:1
generation to settle the aspect-ratio contradiction, a two-reference edit to see whether any
character consistency exists at all, a multi-turn edit chain to test Google's "not optimized"
warning, and wall-clock timing on the Gemini API in a named region to compare with AA's 3.03 s.

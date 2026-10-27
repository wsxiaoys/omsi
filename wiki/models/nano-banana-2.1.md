# Nano Banana 2.1

Google's high-efficiency image generation and conversational editing model, generally available
since **2026-10-06** as `gemini-nano-banana-2.1`
([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
[deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)). It replaces
Nano Banana 2 (`gemini-3.1-flash-image`) at the same Flash-tier position, and Google positions it
as "the more efficient counterpart to Gemini 3 Pro Image (Nano Banana Pro)"
([model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).

## Identity

- Canonical name: Nano Banana 2.1. Gemini API model code: `gemini-nano-banana-2.1`, listed as
  **stable** with no preview or dated-snapshot alias
  ([model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).
- Vendor: Google (Google DeepMind). Published model card dated 6 October 2026
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)).
- Base model, as stated by Google: "Nano Banana 2.1 is based on **Gemini 3.6 Flash**"
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)). The API
  documentation instead describes it as "an update to Nano Banana 2 (Gemini 3.1 Flash Image)"
  ([model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).
- Host endpoints captured: fal `google/nano-banana-2.1` and `google/nano-banana-2.1/edit`
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md),
  [fal edit](../../sources/fal.ai/nano-banana-2.1-edit/2026-10-26.md)); Replicate
  `google/nano-banana-2.1` ([Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)).
- Sibling models, with the identifiers Google assigns them: Nano Banana 2 = `gemini-3.1-flash-image`,
  Nano Banana 2 Lite = `gemini-3.1-flash-lite-image`, Nano Banana Pro = `gemini-3-pro-image`,
  original Nano Banana = `gemini-2.5-flash-image`
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  These are separate model entities; findings on this page should not be transferred to them.

### Is "2.1" a model, a checkpoint, or a serving tier?

**A distinct model.** Four first-party facts support this:

1. It has its own stable model code, its own API model page, and its own row in Google's lifecycle
   table — not a suffix on `gemini-3.1-flash-image`
   ([model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md),
   [deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
2. It has its own model card, published 2026-10-06, with its own evaluation tables
   ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)).
3. Its predecessor is deprecated *in favour of it*: the same changelog entry that ships 2.1
   declares `gemini-3.1-flash-image` deprecated and names `gemini-nano-banana-2.1` as the
   migration target ([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md)).
4. The request surface diverges in ways a caller must choose between: thinking levels are
   minimal/medium/high with **medium** as the default, where Nano Banana 2 offers minimal/high
   with **minimal** as default, and 2.1 drops the 512px (0.5K) output size
   ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).

Two qualifications matter. It is **not** a new family tier — it sits at the same Flash-tier slot
Nano Banana 2 occupied, between 2 Lite and Pro. And **the weight-level relationship is
unverified**: Google never says whether 2.1 is a re-trained image model on a Gemini 3.6 Flash base
or a post-train of Nano Banana 2 itself. "Based on Gemini 3.6 Flash" is a statement about the base
model, not about what changed.

A side observation on naming: 2.1 is the only image model in Google's lifecycle table whose model
code is the marketing name rather than a Gemini version string — every other entry is
`gemini-<version>-image` ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
The practical consequence is that a caller cannot infer 2.1's Gemini generation from its ID, and
"Gemini 3.6 Flash Image" is not a valid model code.

### Relation to the other roster entries

- **Nano Banana 2** is the predecessor at the same tier, still obtainable ("no shutdown date
  announced") but deprecated with 2.1 as the named replacement
  ([deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)). Google's
  guide tells readers that for new projects they should use 2.1
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  Whether the roster should keep two entries for a deprecated predecessor and its replacement is a
  decision for the roster owner; this page treats them as separate entities because Google does.
- **Nano Banana Pro** is the premium tier on a different base (`gemini-3-pro-image`, built on
  Gemini 3), which Google recommends "for the most complex visual tasks"
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  Google's model card puts Pro's overall-preference Elo at 935 against 1050 for 2.1 with thinking
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)) — but that
  is Google measuring Google, and it is recorded here as a vendor claim, not a finding about Pro.

## Current assessment

Nano Banana 2.1 is the model Google points new projects at as of capture: paid-tier only, GA, no
announced shutdown date
([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md),
[deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)). Its documented
differentiators over its predecessor are configurable thinking, Google Image Search grounding,
14-reference fusion, fixed tiling on extreme aspect ratios, and improved text rendering
([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
[model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).

The honest summary of quality is weaker than the feature list. Every published number is a
Google-run side-by-side human evaluation of Google's own models, reported as Elo with confidence
intervals, plus one autorater score
([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)). No
third-party benchmark, independent re-measurement, or hands-on test was captured. The two hosts
that serve it both proxy Google's API rather than running the model themselves — fal marks the
endpoint `hostingType: proxy` ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)) — so
their agreement is not independent confirmation of anything.

## Documented capabilities

Everything in this section is vendor or host documentation. Nothing here was tested.

- **Text-to-image and editing under one model.** Google exposes one model code that accepts
  prompts with or without input images, and supports multi-turn conversational editing
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  fal splits it into a generation endpoint and an edit endpoint over "the same underlying model"
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)); Replicate exposes one endpoint with
  an optional `image_input` array
  ([Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)).
- **1K / 2K / 4K output, no 0.5K.** Default 1K. Google publishes a per-aspect-ratio pixel and token
  table; 4:1, 1:4, 8:1 and 1:8 are supported at 2K and 4K, and Google states it fixed the tiling
  artifacts those formats previously had
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
  [model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)). The 512px
  tier that Nano Banana 2 has is explicitly not available on 2.1
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md),
  [image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **Up to 14 reference images**, with Google scoping fidelity to "character resemblance of up to 4
  characters and the fidelity of up to 10 objects in a single workflow"
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md),
  [model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).
  Replicate repeats "up to 14 reference images" in its schema
  ([Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)).
- **Configurable thinking.** minimal / medium / high, default **medium**
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  Google says the model generates interim "thought images" that are "visible in the backend but
  not charged" ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  fal exposes the same three levels as `thinking_level`
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)); Replicate exposes none
  ([Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)).
- **Grounding with Google Web and Image Search.** Image Search is a search type within the
  existing Google Search tool, scoped by Google to 2.1 and Nano Banana 2 only, and it "can be used
  independently or together with Web Search"
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  fal exposes only `enable_web_search`
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)); Replicate exposes separate
  `google_search` and `image_search` flags, noting that enabling `image_search` "also" turns on
  web search ([Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)).
- **Text rendering and localization.** Google lists localized text rendering across several
  languages, with a recommended language set of EN, ar-EG, de-DE, es-MX, fr-FR, hi-IN, id-ID,
  it-IT, ja-JP, ko-KR, pt-BR, ru-RU, ua-UA, vi-VN, zh-CN
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md),
  [image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **Video and PDF context, no audio.** The API model page lists Text, Image, Video and PDF inputs
  ([model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)); the guide
  says video inputs are supported on 2.1 and audio inputs are not
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  fal's edit endpoint accepts `video_url` and `pdf_url` with a 15MB inline cap, and treats a
  YouTube URL as pass-through ([fal edit](../../sources/fal.ai/nano-banana-2.1-edit/2026-10-26.md)).
- **SynthID watermark on every output** ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **Batch API at half price; no flex or priority inference**
  ([model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md),
  [pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)).

### Vendor quality claims, recorded as claims

Google's model card reports Elo from side-by-side human evaluation, "Results as of October, 2026",
for 2.1 with and without thinking against Nano Banana 2 and Nano Banana Pro: overall preference
1050 / 1015 / 990 / 935, infographic design 1048 / 1001 / 961 / 912, and infographic factuality
0.521 / 0.328 / 0.179 / 0.265
([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)). The card
publishes confidence intervals for the Elo rows but no task counts, prompt sets, or rater counts,
and the factuality row is an autorater score on an unspecified scale, so it is not comparable to
the Elo rows beside it. fal reproduces the same three rows and adds the caveat that the factuality
figure "is an autorater score, not an Elo rating"
([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)). Treat all of it as Google's own
measurement of Google's own models.

## Limitations and constraints

- **Small text degrades at 1K.** Google's own limitation list: "Poor text rendering in small text
  (often blurry in 1k model), long paragraphs, page length"
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)). fal
  relays the same advice — use 2K or 4K for small text
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)).
- **Character consistency is not guaranteed.** "Character consistency is not always perfect
  between input images and generated output image"
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)). This is
  a documented weakness, not a measured failure rate.
- **Mask and ink editing is partial.** "Partial instruction following and ink persistence in
  masked/doodle based editing", plus "rare instances of persistent subject pose, where structural
  alignment from the input image is retained in the generated output image"
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)). Neither
  fal's nor Replicate's captured schema exposes a mask parameter, so how mask-based editing is
  driven through those hosts is undocumented
  ([fal edit](../../sources/fal.ai/nano-banana-2.1-edit/2026-10-26.md),
  [Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)).
- **Spatial reasoning is unreliable.** "Occasional confusion around spatial localisation (e.g.,
  left/right etc.)" ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)).
- **World knowledge, 3D reasoning and factuality remain limited**, and the knowledge cutoff for the
  Gemini 3.6 Flash base is stated as March 2026, with some domains effectively at January 2025
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)). That
  bounds how useful web-search grounding is for anything older than the cutoff.
- **Image Search grounding cannot use real-world images of people.** Google scopes this to 2.1 and
  Nano Banana 2 ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
- **Image count is advisory.** "The model won't always follow the exact number of image outputs
  that the user explicitly asks for"
  ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  fal exposes a `limit_generations` flag, marked "Experimental", that forces one image per
  generation and ignores prompt instructions about image count
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)).
- **Occasional slowness or timeouts, and hallucinations**, per Google's general-limitations note
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)). No
  latency figures were captured anywhere.
- **Paid tier only.** Every 2.1 line in Google's price list reads "Not available" in the Free tier
  column ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)).
- **No weights, no self-hosting.** 2.1 is distributed through Google's products and the Gemini API
  only; the model card's distribution list contains no downloadable artifact
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)).
- **Moderation differs by route.** fal exposes `safety_tolerance` 1–6 with default 4
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)); Replicate exposes no moderation
  control at all ([Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)). A
  refusal on one platform is therefore not evidence about the model's general willingness.

## Access, pricing, licensing

- **Google, first-party (paid tier, per 1M tokens):** $1.50 input, $7.50 text and thinking output,
  $30.00 image output. Google states equivalents of **$0.0336 per 1K image, $0.0504 per 2K image,
  $0.113 per 4K image**. Batch tier is half: $0.75 / $3.75 / $15.00
  ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)).
- **Grounding:** 5,000 free search requests per month, shared across all Gemini 3 and newer
  models, then $14 per 1,000 requests for text and image-based grounding; retrieved grounding
  context is not charged as input tokens
  ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)).
- **fal:** token rates $1.764 input, $8.823 text/thinking output, $35.294 image output per 1M, and
  per-image estimates of **$0.040 (1K), $0.059 (2K), $0.134 (4K)** for a short prompt at medium
  thinking ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)). Those token rates are
  exactly 1.176x Google's published rates — a consistent ~17.6% markup that fal does not disclose.
- **Replicate:** flat **$0.0336 / $0.0504 / $0.1134 per output image** at 1K / 2K / 4K, which
  matches Google's list equivalents to four significant figures
  ([Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)).
- **Licensing:** 2.1 is a closed hosted model. Outputs are subject to Google's API terms — the
  model card points at the Gemini API Additional Terms of Service — and carry a SynthID watermark
  ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md),
  [image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md)).
  fal's endpoint carries a "commercial use" licence badge, which is fal's statement about its own
  service rather than a grant from Google
  ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)). The underlying Google terms were
  not captured in these records and should be read before relying on them.

## Contradictions on the record

These are unresolved, and the page does not pick a winner:

1. **Input context: 1M or 131,072 tokens?** The model card says "a token context window of up to
   1M" ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md));
   the API model page says input token limit 131,072
   ([model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)). Both are
   dated 2026-10-06.
2. **Output tokens: 64K or 32,768?** Model card: "text, with a 64K token output"
   ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)); API
   page: output token limit 32,768
   ([model page](../../sources/google.dev/gemini-nano-banana-2.1-model-page/2026-10-26.md)).
3. **4K image tokens: 2520 or 3780?** The image-generation guide's 2.1 table says every aspect
   ratio at 4K consumes 2520 tokens
   ([image generation guide](../../sources/google.dev/gemini-api-image-generation/2026-10-26.md));
   the price list says a 4096x4096 image consumes 3780 tokens and costs $0.113
   ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)). fal's cost model
   follows 3780 ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)). Per-image 4K cost
   should be treated as approximate.
4. **fal says "5K".** One fal sentence claims improved quality "across 1K, 2K, and 5K output"
   ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)); Google documents 1K/2K/4K and no 5K
   tier. Read as a fal typo, but it is on the page.
5. **fal says web search carries no separate fee**
   ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md)); Google prices grounding requests at
   $14 per 1,000 after a shared allowance
   ([pricing](../../sources/google.dev/gemini-api-pricing/2026-10-26.md)). fal may absorb the
   charge, but its wording is broader than "included in our token price".
6. **Which model do the safety results come from?** The card says 2.1 is based on Gemini 3.6 Flash,
   then assesses frontier safety via Gemini 3.1 Pro and Gemini 3.7 Flash and compares red-teaming
   against Gemini 3 Flash
   ([model card](../../sources/deepmind.google/nano-banana-2.1-model-card/2026-10-26.md)).
   Three different comparison bases in one document.
7. **Google's own product page omits 2.1.** The DeepMind Nano Banana family page lists only Pro,
   2 and 2 Lite, with zero mentions of "2.1", 20 days after GA
   ([family page](../../sources/deepmind.google/gemini-image/2026-10-26.md)). The model
   card and API are ahead of the marketing page.

## Unresolved questions

1. What actually changed in 2.1 relative to Nano Banana 2? Google states a base model (Gemini 3.6
   Flash) and a direction ("significant improvements"), but no training delta, no parameter count,
   and no statement that the image weights differ from a re-served Nano Banana 2.
2. Which input/output limits bind a real request — the model card's 1M/64K or the API page's
   131,072/32,768?
3. Is `gemini-3.1-flash-image` traffic silently rerouted to 2.1, as Google does for some
   deprecated text models (`gemini-3.5-flash` → `gemini-3.6-flash`)? The changelog only tells
   readers to migrate ([changelog](../../sources/google.dev/gemini-api-changelog/2026-10-26.md),
   [deprecations](../../sources/google.dev/gemini-api-deprecations/2026-10-26.md)).
4. Do the two hosts serve the same snapshot? fal is a proxy and Replicate pins a version dated
   2026-10-06; neither states a refresh policy
   ([fal](../../sources/fal.ai/nano-banana-2.1/2026-10-26.md),
   [Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)).
5. What thinking level do hosts use when they expose no control? Replicate has no
   `thinking_level` parameter ([Replicate](../../sources/replicate.com/nano-banana-2.1/2026-10-26.md)),
   and Replicate's flat per-image price matches Google's image-token price, which suggests thinking
   tokens are not billed separately there — but that is inference, not documentation.
6. How does 2.1 compare with Nano Banana Pro on tasks where Pro is the recommendation (complex
   world knowledge, brand consistency, localization)? Only Google's own Elo rows address this.
7. How reliable is typography in practice, and how does the 1K small-text weakness interact with
   the recommended 2K/4K path on cost-sensitive workloads?

## Evidence status

**Evidence floor: met.** First-party: the DeepMind model card, the Gemini API model page, price
list, changelog, deprecation table, image-generation guide, and the DeepMind family page — seven
records, all dated 2026-10-26. Independent hosts: fal (two endpoint records) and Replicate, both
dated 2026-10-26.

Caveats on that floor:

- Both hosts **proxy** Google's API rather than hosting the weights, so they are independent as
  *documentation of the serving surface* and not as *measurement*. Nothing on this page is a
  third-party quality result.
- **No direct tests were run for this page.** No image was generated, no latency measured, no
  refusal attempted. Every capability statement above is documentation.
- Google's quality figures are side-by-side human evaluations run by Google on Google's own
  models, with no published task counts; they are recorded as vendor claims.
- The DeepMind marketing page has not been updated for 2.1, so the family positioning on this page
  rests on the model card and API docs alone.

The next useful evidence would be a small reproducible test set — small-text rendering at 1K vs
2K, four-character consistency across 14 references, mask-based editing through a host that
exposes it, extreme-ratio tiling at 4K, and per-request token counts checked against the two
conflicting 4K figures — run against a named endpoint and date.

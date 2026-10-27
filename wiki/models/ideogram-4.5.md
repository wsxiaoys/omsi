# Ideogram 4.5

Ideogram's precision-editing image model, released **2026-09-30** (inferred; see
[Release date](#release-date-2026-09-30-inferred-not-announced)) and positioned by the vendor as
"the most precise edit model": multi-turn editing that preserves unchanged pixels instead of
accumulating artifacts
([Ideogram model page](../../sources/ideogram.ai/ideogram-4-5-model-page/2026-10-26.md)). It is a
distinct first-party model with its own API paths (`ideogram-4-5`), not a renamed or hosted variant
of another model, and it has no public weights — it is available only as a hosted endpoint,
first-party or through Replicate and fal.

## Identity

- Canonical name: **Ideogram 4.5**. Vendor: Ideogram, Inc.
- API identity: the model name is in the URL path. `POST /v2/image/generate/ideogram-4-5` and
  `POST /v2/image/precise-edit/ideogram-4-5`
  ([API overview](../../sources/ideogram.ai/ideogram-api-overview/2026-10-26.md)). A tool endpoint,
  "Replace background with Ideogram 4.5", also exists.
- Aliases: "Ideogram V4.5" (fal), `ideogram-4-5` (API/Replicate slug), "Ideogram 4.5 (High)" on the
  Artificial Analysis arena (a quality-tier label, not a separate model).
- Host endpoints: `ideogram-ai/ideogram-4-5` on Replicate
  ([source](../../sources/replicate.com/ideogram-4-5/2026-10-26.md)); `ideogram/v4.5` and
  `ideogram/v4.5/edit` on fal
  ([text-to-image](../../sources/fal.ai/ideogram-v4-5/2026-10-26.md),
  [edit](../../sources/fal.ai/ideogram-v4-5-edit/2026-10-26.md)).
- Siblings: **Ideogram 4.0** (open weights, launched 2026-06-03, no reference-image input),
  **Ideogram 4.0 Transparent**, **Ideogram 3.0** (2025-03-26, the only model with style presets,
  style references, negative prompts and color palettes), **Ideogram 3.0 Transparent**, legacy
  2.0/2a, Ideogram Vector, and the partner/free P-Image-Ideogram. The arena additionally lists
  "Ideogram 4.0 Fast" and "Ideogram 4.0 Instant" rows; those labels were not verified against
  first-party model names
  ([model comparison](../../sources/ideogram.ai/ideogram-models-comparison/2026-10-26.md),
  [blog index](../../sources/ideogram.ai/ideogram-blog-posts-index/2026-10-26.md)). Findings here
  should not be transferred to them.
- No public weights: the Ideogram organization on Hugging Face lists only `ideogram-4-fp8`,
  `ideogram-4-nf4` and `ideogram-4-nf4-diffusers`
  ([source](../../sources/huggingface.co/ideogram-ai-models/2026-10-26.md)).

### Is it a distinct model?

Yes, on the evidence captured. Three signals agree:

1. It has its own first-party model path (`ideogram-4-5`), separate from `ideogram-4` and
   `ideogram-3`, and a v1→v2 migration table that maps older endpoints but has no v1 equivalent for
   4.5 — it is a v2-only model
   ([API overview](../../sources/ideogram.ai/ideogram-api-overview/2026-10-26.md)).
2. Its control surface differs from 4.0's: 4.5 accepts up to five reference images and has four
   quality tiers; 4.0 accepts none and uses Turbo/Default/Quality
   ([model comparison](../../sources/ideogram.ai/ideogram-models-comparison/2026-10-26.md)).
3. 4.0 is the open-weight release; no 4.5 weights are published
   ([licensing](../../sources/ideogram.ai/ideogram-licensing/2026-10-26.md),
   [Hugging Face](../../sources/huggingface.co/ideogram-ai-models/2026-10-26.md)).

Conversely, the two first-party **endpoints** are modes of one model, not two models: fal exposes
them as a single `edit_precision` switch, where `regular` "uses Generate" and `high` "uses Precise
Edit with unchanged-pixel restoration"
([fal edit](../../sources/fal.ai/ideogram-v4-5-edit/2026-10-26.md)).

It is also **documented, not merely marketed**: the product page is marketing, but
`developer.ideogram.ai` publishes full parameter schemas for both 4.5 endpoints and the help docs
compare it setting-by-setting against 4.0 and 3.0
([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md),
[model comparison](../../sources/ideogram.ai/ideogram-models-comparison/2026-10-26.md)). A
marketing-only label would not carry its own documented API surface.

### Release date: 2026-09-30 (inferred, not announced)

Ideogram publishes no dated 4.5 launch announcement. The docs blog index links "Ideogram 4.5: Our
flagship model" to the model page itself with **no date**, while every neighbouring row is dated
([blog index](../../sources/ideogram.ai/ideogram-blog-posts-index/2026-10-26.md)). The date is
therefore triangulated:

- Replicate's `ideogram-ai/ideogram-4-5` model was created **2026-09-30 17:42 UTC**
  ([Replicate](../../sources/replicate.com/ideogram-4-5/2026-10-26.md)).
- The Wayback Machine's earliest capture of `ideogram.ai/models/4.5` is **2026-09-30 19:07 UTC**,
  and that snapshot is already a finished marketing page
  ([archive record](../../sources/archive.org/ideogram-4-5-model-page/2026-10-26.md)). The same
  method lands within a day of the documented 2026-06-03 launch for Ideogram 4.0.
- The earliest dated first-party artifact is the 4.5 product-photo workflow guide of 2026-10-14
  ([blog index](../../sources/ideogram.ai/ideogram-blog-posts-index/2026-10-26.md)).

This is well inside the roster's one-year window regardless of a day or two of error.

### Ambiguities to carry

- **Quality-tier naming is surface-specific.** First-party uses `very_low`/`low`/`medium`/`high`;
  fal's text-to-image endpoint offers only `low`/`medium`/`high`; fal's edit endpoint adds an
  `edit_precision` axis (`regular`/`high`) on top of quality, and its prose mentions a "very_high"
  tier that its enum does not expose
  ([fal edit](../../sources/fal.ai/ideogram-v4-5-edit/2026-10-26.md)).
- **Replicate exposes a tier it does not price.** Its `quality` enum includes `very_low` for any
  request, but only a `very_low-with-source-images` billing tier exists
  ([Replicate](../../sources/replicate.com/ideogram-4-5/2026-10-26.md)). First-party documents
  `very_low` as requiring source images
  ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md)).
- **"Native 2K" is a mode, not a constant.** Output size is chosen per request, and 3:1/1:3 aspect
  ratios are 2K-only ([image settings](../../sources/ideogram.ai/ideogram-image-settings/2026-10-26.md)).

## Current assessment

Ideogram 4.5 is best understood as an **editing-first** model. Its advertised differentiator is not
raw image quality but preservation: "pixels the edit doesn't touch are copied exactly from your
image", output returned at the source's own width and height, and drift that stays bounded across
chained edits ([API overview](../../sources/ideogram.ai/ideogram-api-overview/2026-10-26.md)). That
makes it the natural pick among Ideogram models when the job is "change one thing in an image I
already have" — product colorways, masked inpainting, photo restoration, text fixes — rather than
open-ended generation.

The one independent measurement in evidence supports a more modest reading of its *generation*
quality. On the Artificial Analysis Image Arena, "Ideogram 4.5 (High)" scores **1069.6 Elo
(95% CI 1055–1085)**, roughly 129 points below the arena leader GPT Image 2.5 Sunburst (max)
(1198.8, CI 1188–1210) and about 81 below Nano Banana 2.1 (1151.0, CI 1138–1164), with
non-overlapping intervals in both cases. It is the strongest Ideogram entry on that board
(4.0 Quality 1026.0, 3.0 910.6) but sits in the middle of the field
([Artificial Analysis](../../sources/artificialanalysis.ai/ideogram-4-5/2026-10-26.md)).

Read those two things separately: the arena measures blind pairwise preference on text-to-image
prompts and says nothing about multi-turn edit fidelity, artifact accumulation, or typography. The
vendor's central claim is therefore **untested** by the independent evidence we have. Ideogram's own
comparison ("GPT Image and Nano Banana outputs become unusable within a few edits, while Ideogram
4.5 stays clean edit after edit") publishes no prompts, sample size, or rater protocol
([model page](../../sources/ideogram.ai/ideogram-4-5-model-page/2026-10-26.md)).

Practically: if you need a model whose edits hold up over a chain, 4.5 is the reasonable default and
the only named Ideogram model that takes reference images at all (the `Auto` router accepts them
but chooses a model for you). If you need the best single-shot image, the arena suggests
competitors lead. If you need style presets, negative prompts, or color palettes, the family answer
is Ideogram 3.0, not 4.5
([model comparison](../../sources/ideogram.ai/ideogram-models-comparison/2026-10-26.md)).

## Documented capabilities

Everything in this section is vendor or host documentation. None of it has been verified by a
direct test for this page.

- **Two endpoints over one model.** `generate/ideogram-4-5` takes a prompt alone or with source
  images; `precise-edit/ideogram-4-5` edits one image and returns it at its own dimensions
  ([model page](../../sources/ideogram.ai/ideogram-4-5-model-page/2026-10-26.md)).
- **Reference images.** Generate: up to 5 (the first is edited, the rest are references); a masked
  request may carry at most 3 others. Precise Edit: up to 4 `reference_images`, 3 with a mask,
  because the mask takes a slot
  ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md),
  [Precise Edit reference](../../sources/ideogram.ai/ideogram-api-precise-edit-4-5/2026-10-26.md),
  [docs](../../sources/ideogram.ai/ideogram-models-comparison/2026-10-26.md)).
- **Masked and masked-free editing.** Black edits, white preserves; the mask must match the first
  source image's dimensions and contain both regions. Masks are optional — a plain instruction can
  edit the whole image
  ([Precise Edit reference](../../sources/ideogram.ai/ideogram-api-precise-edit-4-5/2026-10-26.md)).
- **Edit windows for large images.** `context_window` (`auto` + mask, or explicit
  `y_min,x_min,y_max,x_max`) confines the edit to a region so the rest of a 4K/8K image returns
  untouched at full resolution
  ([Precise Edit reference](../../sources/ideogram.ai/ideogram-api-precise-edit-4-5/2026-10-26.md),
  [docs](../../sources/ideogram.ai/ideogram-masks-and-inpainting/2026-10-26.md)).
- **Text or JSON prompts.** Natural language or a structured Ideogram 4.0 JSON prompt; up to 10,000
  characters; on 4.5 each text element can carry `text`, `desc`, `color_palette` and `bbox`
  ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md),
  [docs](../../sources/ideogram.ai/ideogram-models-comparison/2026-10-26.md)).
- **Magic Prompt / prompt expansion.** `auto` (default) and `on` rewrite the prompt; `off` keeps
  your wording. In the app the toggle hides when references are attached, because the prompt then
  acts as an edit instruction
  ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md),
  [image settings](../../sources/ideogram.ai/ideogram-image-settings/2026-10-26.md)). fal exposes
  the same idea as `enable_prompt_expansion`, default `true`
  ([fal](../../sources/fal.ai/ideogram-v4-5/2026-10-26.md)).
- **Transparent or opaque background.** `background: auto | transparent | opaque` on Generate
  ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md)).
- **Reproducibility and batching.** `seed`, `num_images` 1–8, `async`/webhook with Ed25519-signed
  deliveries
  ([Precise Edit reference](../../sources/ideogram.ai/ideogram-api-precise-edit-4-5/2026-10-26.md)).
- **Optional copyright detection** that flags images via `is_image_safe: false` and adds latency
  ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md)).

### Vendor claims, kept separate

- **"The most precise edit model" / "eliminates artifact buildup".** The claim was **strengthened
  without new published evidence**: the launch-day page (archived 2026-09-30) said 4.5 "reduces
  this drift, preserving details across multi-turn edits"; the 2026-10-26 page says it "eliminates
  artifact buildup, making multi-turn editing possible"
  ([archive record](../../sources/archive.org/ideogram-4-5-model-page/2026-10-26.md)).
- **Typographic quality.** Ideogram's developer overview calls 4.5 and 4.0 "known for prompt
  fidelity and crisp typography"
  ([API overview](../../sources/ideogram.ai/ideogram-api-overview/2026-10-26.md)); fal restates it
  as "accurate typography" and "accurate text rendering"
  ([fal](../../sources/fal.ai/ideogram-v4-5/2026-10-26.md)). Note the asymmetry: **the 4.5 product
  page does not lead with typography at all** — its headline is edit precision, and the docs assign
  style presets, negative prompts and color palettes to 3.0, not 4.5. No captured source measures
  text rendering, and the arena board publishes no typography metric. Treat "best at typography" as
  inherited Ideogram brand positioning, not a verified 4.5 property.
- **Superiority over named competitors.** "GPT Image and Nano Banana outputs become unusable within
  a few edits" is a vendor comparison with no methodology
  ([model page](../../sources/ideogram.ai/ideogram-4-5-model-page/2026-10-26.md)); it is also
  partly contradicted in *generation* quality by the arena rows, which place 4.5 well below GPT
  Image 2.5 and Nano Banana 2.1
  ([Artificial Analysis](../../sources/artificialanalysis.ai/ideogram-4-5/2026-10-26.md)).
- **"Edit at any resolution".** True only with an edit window; see the next section.
- **Host restatements.** Replicate's "the latest for precise image generation" and fal's
  "high-quality images, posters, and logos" are host copy, not independent findings
  ([Replicate](../../sources/replicate.com/ideogram-4-5/2026-10-26.md),
  [fal](../../sources/fal.ai/ideogram-v4-5/2026-10-26.md)).

## Limitations and constraints

- **Whole-image edits are capped at 4,194,304 pixels (2048×2048).** "Editing the whole image is
  bounded by 4194304 pixels […] so a larger image comes back scaled down to fit: an 8192x8192 image
  returns as 2048x2048." Full-resolution editing of larger images requires `context_window`, and
  the edit window is itself capped at the same area, ≥256 px per side, ratio ≤6:1
  ([Precise Edit reference](../../sources/ideogram.ai/ideogram-api-precise-edit-4-5/2026-10-26.md)).
  The product page's 4,016×6,016 (24.2 MP) example is therefore not a whole-image edit
  ([model page](../../sources/ideogram.ai/ideogram-4-5-model-page/2026-10-26.md)).
- **Generate size constraints.** Exact sizes: both sides a multiple of 32, at least 256 px, total
  area ≤2048×2048, aspect ratio ≤6:1; `size: "source"` is rejected without source images; every
  source image must be between 1:6 and 6:1
  ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md),
  [image settings](../../sources/ideogram.ai/ideogram-image-settings/2026-10-26.md)).
- **`very_low` requires source images.** Prompt-only Generate has no very-low tier in any source
  ([model page](../../sources/ideogram.ai/ideogram-4-5-model-page/2026-10-26.md),
  [image settings](../../sources/ideogram.ai/ideogram-image-settings/2026-10-26.md)).
- **File limits.** Generate: ≤25 MB per source image; Precise Edit: ≤50 MB and ≤67,108,864 px per
  image ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md),
  [Precise Edit reference](../../sources/ideogram.ai/ideogram-api-precise-edit-4-5/2026-10-26.md)).
- **No Ideogram 3.0-style controls.** 4.5 has no style presets, style-reference images, negative
  prompts or color palettes; the docs list those as 3.0-only
  ([model comparison](../../sources/ideogram.ai/ideogram-models-comparison/2026-10-26.md)).
- **No public weights.** Hosted-only; the open-weight path in the family is Ideogram 4
  ([Hugging Face](../../sources/huggingface.co/ideogram-ai-models/2026-10-26.md),
  [licensing](../../sources/ideogram.ai/ideogram-licensing/2026-10-26.md)).
- **Safety refusals are per request and per image.** A prompt that fails safety checks returns
  `422`; a flagged output comes back with `is_image_safe: false` and an empty URL
  ([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md)). A
  refusal is evidence about that request, not about the model's general willingness.
- **Free-plan limits on the edit surface.** "Free accounts can make a limited number of Precise
  Edit edits. After that, Precise Edit needs a paid plan or bought credits"
  ([docs](../../sources/ideogram.ai/ideogram-masks-and-inpainting/2026-10-26.md)).
- **Operational.** Default rate limit is 10 in-flight requests; generated image URLs expire and
  should be downloaded
  ([API overview](../../sources/ideogram.ai/ideogram-api-overview/2026-10-26.md)).
- **Host surfaces are narrower than first-party.** fal's text-to-image endpoint exposes no
  reference images, no mask, no `very_low` and no background control
  ([fal](../../sources/fal.ai/ideogram-v4-5/2026-10-26.md)); Replicate supports images and masks but
  its `size` enum tops out around 1.15 MP and defaults to `source`
  ([Replicate](../../sources/replicate.com/ideogram-4-5/2026-10-26.md)). Neither host documents
  which first-party snapshot it serves.

## Access, pricing, licensing

### Price basis: per image, by quality tier and by mode

Ideogram 4.5 is **not** priced per megapixel. Price is fixed per generated image and depends on two
things: the quality tier and the mode (prompt-only Generate, Generate with references, or Precise
Edit). A single per-image figure therefore misrepresents it — the same model ranges from $0.008 to
$0.22 per image.

First-party table, verbatim
([model page](../../sources/ideogram.ai/ideogram-4-5-model-page/2026-10-26.md)):

| Quality | Generate (prompt only) | Generate (with references) | Precise Edit |
| --- | --- | --- | --- |
| Very low | Not available | $0.008 | $0.008 |
| Low | $0.03 | $0.03 | $0.03 |
| Medium | $0.06 | $0.06 | $0.06 |
| High | $0.10 | $0.22 | $0.22 |

"Each image has a fixed price. It does not change with prompt length, the number of reference
images, or the output resolution, and no subscription is required."

For Precise Edit this is stated as an API guarantee: quality "is the only field that affects the
price: the size of the image you send does not change it, and neither does `context_window`"
([Precise Edit reference](../../sources/ideogram.ai/ideogram-api-precise-edit-4-5/2026-10-26.md)).

**Unresolved contradiction on Generate.** The Generate reference says the opposite for that
endpoint: "Pricing is tiered by the resolved output pixels: up to 1024x1024 bills as 1K, above that
as 2K. An 'auto' size bills as 2K"
([Generate reference](../../sources/ideogram.ai/ideogram-api-generate-4-5/2026-10-26.md)). No
captured source states the 2K premium, and no price list shows a 1K/2K split. Treat any Generate
cost estimate above 1024×1024 pixels as unverified.

### Host pricing, and where it disagrees

- **Replicate** reproduces the first-party table exactly, including "$8 per thousand output images"
  ($0.008) for very low with source images, and says "Billed per generated image by quality.
  Source-image requests have separate rates."
  ([Replicate](../../sources/replicate.com/ideogram-4-5/2026-10-26.md)).
- **fal edit** also matches: $0.008 / $0.03 / $0.06 / $0.22
  ([fal edit](../../sources/fal.ai/ideogram-v4-5-edit/2026-10-26.md)).
- **fal text-to-image disagrees at High:** $0.03 / $0.06 / **$0.22**, i.e. 2.2× the first-party
  prompt-only High price of $0.10
  ([fal](../../sources/fal.ai/ideogram-v4-5/2026-10-26.md)). No explanation is published. Two
  readings are possible — a host markup, or fal billing at a 2K tier — and the captured evidence
  does not decide between them.
- **Artificial Analysis** lists $100 per 1,000 images for "Ideogram 4.5 (High)", i.e. $0.10, which
  agrees with the first-party and Replicate figures and makes fal the outlier
  ([Artificial Analysis](../../sources/artificialanalysis.ai/ideogram-4-5/2026-10-26.md)).

### Licensing

- **Outputs.** "Ideogram does not claim ownership of outputs generated with the model. You can use
  outputs commercially as long as you respect third-party rights and follow the Acceptable Use
  Policy. The exception is using outputs to train models that compete with Ideogram"
  ([licensing](../../sources/ideogram.ai/ideogram-licensing/2026-10-26.md)). Qualification: that
  answer sits on a page about Ideogram 4 weight licensing, not on a page of API terms; the API
  terms themselves were not captured.
- **Prohibited uses** include surveillance, biometric identification, military applications, CSAM,
  non-consensual intimate imagery, and unlawful or rights-violating activity
  ([licensing](../../sources/ideogram.ai/ideogram-licensing/2026-10-26.md)).
- **Weights.** The non-commercial, self-serve commercial ($300/mo) and enterprise licences all cover
  self-hosting Ideogram 4 quantized weights and explicitly exclude Ideogram-hosted API access. None
  of them applies to 4.5, which has no published weights
  ([licensing](../../sources/ideogram.ai/ideogram-licensing/2026-10-26.md)).
- **Host terms.** fal badges the endpoint "Commercial use" — fal's statement about its own service,
  not a restatement of Ideogram's terms
  ([fal](../../sources/fal.ai/ideogram-v4-5/2026-10-26.md)). Replicate's page makes no licensing
  statement for 4.5
  ([Replicate](../../sources/replicate.com/ideogram-4-5/2026-10-26.md)).

## Unresolved questions

1. **What is the 1K/2K Generate surcharge?** The API reference declares a pixel-based billing tier;
   the marketing table and both hosts price per quality only. Until this is settled, Generate cost
   above 1024×1024 is unknown.
2. **Why is fal's High text-to-image $0.22?** Host markup, 2K tier, or a mapping to the
   with-references price — undecided by the evidence.
3. **Which first-party snapshot does each host serve, and when was it last refreshed?** Replicate
   shows only a creation date (2026-09-30); fal states nothing.
4. **Does 4.5 actually eliminate edit drift?** No independent multi-turn edit measurement is in
   evidence. Artificial Analysis publishes an "Image Editing" tab that was not captured; that is
   the most promising next source.
5. **Is 4.5 better at typography than 4.0, 3.0, or its competitors?** No measurement exists in
   evidence; the claim is inherited from Ideogram's brand positioning and is not made on the 4.5
   product page itself.
6. **Do the quality tiers differ in more than cost and speed?** No source says whether `high` is a
   different checkpoint, a larger sampling budget, or post-processing.
7. **What is fal's "very_high"?** Its edit description mentions a tier its schema does not expose.
8. **Is 2026-09-30 exactly right?** It rests on host metadata plus a first archive capture, not on a
   vendor announcement.
9. **Does the Replicate `very_low` prompt-only request work, and at what price?** Its enum allows the
   value; its billing table prices only the with-source-images variant.

## Evidence status

Evidence floor: **met**. One first-party publisher (ideogram.ai product page and developer docs,
nine captured documents) plus two independent host records (Replicate, fal) plus an independent
third-party measurement (Artificial Analysis arena), an archive record used for dating, and a
Hugging Face catalogue query establishing the absence of weights.

**No direct tests have been run for this page.** Every capability statement is vendor or host
documentation; the only non-vendor measurement is the arena Elo row, which covers text-to-image
preference only. Nothing here verifies that edits stay clean across many turns, that text renders
correctly, or that the published prices are what an account is actually charged.

Two provenance cautions:

- The 4.5 product page changed between its 2026-09-30 first capture and this 2026-10-26 capture: the
  API section and price table were added, and the drift claim was strengthened from "reduces" to
  "eliminates" ([archive record](../../sources/archive.org/ideogram-4-5-model-page/2026-10-26.md)).
  Cite the dated capture you read, not the page.
- Ideogram publishes no dated 4.5 launch announcement and no changelog, so version and date claims
  here are reconstructions.

The next useful evidence would be a small reproducible test set on a named endpoint and date:
a five-turn edit chain scored for pixel preservation outside the edit region, dense-text prompts
scored for character accuracy, and a 4K/8K edit run with and without `context_window`.

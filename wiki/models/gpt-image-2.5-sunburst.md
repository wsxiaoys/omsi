# GPT Image 2.5 Sunburst

OpenAI's precision tier of the GPT Image 2.5 pair, released 2026-09-08 alongside GPT Image 2.5
Flare ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md)). OpenAI positions it
as "Our most capable model for image generation and editing"
([model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md)) and as
"built for premium visual workflows that benefit from tighter control across edits"
([announcement](../../sources/openai.com/chatgpt-images-2-5-announcement/2026-10-26.md)). It
generates and edits images from text and image inputs, and trades generation speed against
fidelity: OpenAI says it offers "an extra level of precision for detailed creative work with
longer generation times" relative to Flare.

## Identity

- Canonical name: GPT Image 2.5 Sunburst.
- API model ID: `gpt-image-2.5-sunburst`; dated snapshot `gpt-image-2.5-sunburst-2026-09-08`,
  which the model page lists as the default
  ([model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md)).
- Spelling variants, all first-party: "GPT-Image-2.5 Sunburst" (model page title and catalog),
  "GPT Image 2.5 Sunburst" (changelog, announcement), "GPT-Image-2.5-Sunburst" (system card,
  which names the ID with hyphens throughout)
  ([system card](../../sources/openai.com/chatgpt-images-2-5-system-card/2026-10-26.md)).
- Host endpoints on fal: `openai/gpt-image-2.5/sunburst/text-to-image` and
  `openai/gpt-image-2.5/sunburst/edit`
  ([catalogue](../../sources/fal.ai/model-catalogue-api/2026-10-26.md)). fal labels them
  "Text to Image Sunburst" and "Image Editing Sunburst" and calls the model "GPT Image 2.5
  Sunburst".
- Sibling: [GPT Image 2.5 Flare](gpt-image-2.5-flare.md). Prior generation:
  [GPT Image 2](gpt-image-2.md).

**"Sunburst" is a first-party tier, not a host codename.** The name appears in OpenAI's own
model ID, model page, changelog entry, model catalog, announcement, and system card, and
`gpt-image-2.5-sunburst-2026-09-08` is the snapshot ID OpenAI tells you to pin. fal is reselling
it as a proxy (`hostingType: "proxy"`), not renaming it
([catalogue](../../sources/fal.ai/model-catalogue-api/2026-10-26.md)). It is a marketing word
in the sense that it names a product tier rather than an architecture, but the tier itself is
first-party.

### Release date and the one-year window

OpenAI's API changelog dates the release to **2026-09-08** — an entry under the page's
"September, 2026" heading, with `gpt-image-2.5-sunburst` and `gpt-image-2.5-flare` tagged
together ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md)). The system card
carries the same date ("Published September 8, 2026") and fal's catalogue timestamps all four
2.5 endpoints to 2026-09-08
([system card](../../sources/openai.com/chatgpt-images-2-5-system-card/2026-10-26.md),
[catalogue](../../sources/fal.ai/model-catalogue-api/2026-10-26.md)). That is comfortably inside a
one-year window starting 2025-10-26 — about ten and a half months after it, and 48 days before
this capture.

### Sunburst vs Flare: two tiers, two pages

The pair shares a release date, a token rate card, a quality enum, and a feature set. They do
not share an identity in any first-party document captured here: separate model pages, separate
model IDs, separate snapshots, separate one-line positionings
([catalog](../../sources/openai.com/model-catalog/2026-10-26.md)), separate rows in every safety
evaluation table ([system card](../../sources/openai.com/chatgpt-images-2-5-system-card/2026-10-26.md)),
and separate host endpoints on fal. Both are obtainable, and a developer must choose between
them at request time — Flare is documented as "the default choice for most applications" and
Sunburst as the premium/precision option
([announcement](../../sources/openai.com/chatgpt-images-2-5-announcement/2026-10-26.md)).

That satisfies the split tests in the skill (both obtainable, the choice changes the
recommendation, variant-specific evidence exists), so **no merge is warranted on current
evidence**. What is *not* documented anywhere captured is whether the two tiers share weights or
a base checkpoint — no source says either way, and "separate model ID" is not the same claim as
"separate model". This page should therefore not be deleted or merged unilaterally; if the
parent later concludes from the Flare page that the two are one model behind two labels, that
is the parent's call to make with both pages in hand.

## Current assessment

The useful way to hold Sunburst is: **same family, higher-fidelity tier, unpriced in practice.**
OpenAI gives it the strongest quality language in the family and the slowest speed language,
but publishes no benchmark, no latency figure, and no per-image price example. Both 2.5 tiers
bill at identical token rates, and OpenAI explicitly warns that "equal token rates don't mean
equal cost per image: token consumption can differ by model and quality setting"
([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)). The actual premium a
Sunburst image costs over a Flare image at the same size and quality is therefore **unknown
from first-party documentation** — it has to be measured with the response `usage` field.

What can be said with evidence:

- If the workflow's bottleneck is edit precision or multi-turn consistency, OpenAI's own
  positioning points at Sunburst and away from Flare.
- If the bottleneck is latency or volume, OpenAI's positioning points the other way, and the
  "50% lower latency than GPT Image 2" figure belongs to Flare, not to Sunburst
  ([announcement](../../sources/openai.com/chatgpt-images-2-5-announcement/2026-10-26.md)).
- Nothing captured here lets you predict which one produces a better *particular* image.

## Documented capabilities

All items below are vendor or host documentation. None has been tested for this page.

- **Generation and editing in one model.** Text and image in, image out; selectable in the
  Image API (`v1/images/generations`, `v1/images/edits`) or as the `model` of the Responses API
  `image_generation` tool
  ([model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md),
  [guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)). The Responses path is the
  one that adds multi-turn editing and File-ID inputs.
- **Inpainting**, listed as the model's only supported "feature" on the model page
  ([model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md)).
- **Six quality settings including two new ones.** `low`, `medium`, `high`, `xhigh`, `max`,
  `auto`; `xhigh` and `max` are new in 2.5 and earlier GPT Image models stop at `high`
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)). OpenAI's model page says the
  model supports all six; the guide says both 2.5 models default to `auto`.
- **Flexible sizes.** Recommended `1024x1024`, `1536x1024`, `1024x1536`; arbitrary
  `WIDTHxHEIGHT` with both edges multiples of 16, aspect ratio between 1:3 and 3:1, neither edge
  over 3840 px, total pixels 655,360–8,294,400, and resolutions above `2560x1440` flagged as
  experimental ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Transparent backgrounds** with `background: "transparent"` plus `png` or `webp` output
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Output formats and compression.** `png` (default), `jpeg`, `webp`, with
  `output_compression` 0–100 for the last two; `jpeg` documented as faster than `png` when
  latency matters ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Batch processing** at half the per-token rates
  ([model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md),
  [pricing](../../sources/openai.com/api-pricing/2026-10-26.md)).
- **Provenance metadata.** C2PA metadata plus SynthID invisible watermarking, which the system
  card says is applied "through ChatGPT, Codex, and the OpenAI API"
  ([system card](../../sources/openai.com/chatgpt-images-2-5-system-card/2026-10-26.md)).
- **A configurable moderation level.** `moderation: "auto"` (default) or `"low"`, with
  structured `moderation_blocked` errors carrying a coarse `moderation_stage` and category list
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Host-side parameters on fal** whose limits OpenAI's docs do not state: up to 16 reference
  images per edit call, a `num_images` cap of 10, a `mask_url` with two different polarity
  conventions depending on whether `image_passthrough` is set, and a pass-through mode that
  returns "the provider's original image bytes and format"
  ([fal edit](../../sources/fal.ai/gpt-image-2.5-sunburst-edit/2026-10-26.md),
  [fal text-to-image](../../sources/fal.ai/gpt-image-2.5-sunburst-text-to-image/2026-10-26.md)).
  These are host features; do not read them as model guarantees.

### Vendor quality claims, labelled as claims

These are marketing comparatives with no numbers attached and are recorded so they are not
mistaken for findings:

- "extra fidelity on intricate detail, in exchange for longer generation times"
  ([fal](../../sources/fal.ai/gpt-image-2.5-sunburst-text-to-image/2026-10-26.md), echoing
  OpenAI's "an extra level of precision ... with longer generation times"
  ([announcement](../../sources/openai.com/chatgpt-images-2-5-announcement/2026-10-26.md))).
- Better reference-photo fidelity, more natural lighting and textures, more recognisable
  subjects; edits that change "only what you've asked for"; earlier changes that "stay
  consistent" across multi-turn editing; more accurate real-world content and more complex
  layouts including transparent backgrounds
  ([announcement](../../sources/openai.com/chatgpt-images-2-5-announcement/2026-10-26.md)).
  The announcement attributes these to "Images 2.5" as a whole, not to Sunburst specifically.
- "edits scoped precisely to the instruction, with subject and composition preserved across
  many rounds of revision"
  ([fal edit](../../sources/fal.ai/gpt-image-2.5-sunburst-edit/2026-10-26.md)).

## Limitations and constraints

- **No published benchmark or latency figure.** The only quantified performance claim anywhere
  in this evidence set is a 50% latency reduction for the *family* versus Images 2.0, which the
  announcement attributes to Flare. Sunburst is explicitly the slower tier, with no multiplier
  given. Treat any "Sunburst is N× slower than Flare" number as unsourced.
- **Latency can be minutes.** "Complex prompts may take up to 2 minutes to process" — stated
  for GPT Image models generally, not measured on Sunburst
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Text rendering is still a documented weakness.** "Although significantly improved, the
  model can still struggle with precise text placement and clarity", alongside stated risks to
  cross-generation consistency and layout-sensitive composition control
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)). This sits awkwardly against
  the announcement's infographic-accuracy claims; the two are not reconciled by any source, and
  the honest reading is that the guide describes residual failure modes, not a refutation of
  the improvement.
- **Masks are guidance, not selection.** "Masking with GPT Image is entirely prompt-based. The
  model uses the mask as guidance, but may not follow its exact shape with complete precision";
  with multiple input images the mask applies to the first only
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)). fal exposes the same
  parameter but describes it as a region selector, and flips the polarity convention under
  `image_passthrough` — white-means-edit normally, transparent-means-edit in passthrough
  ([fal edit](../../sources/fal.ai/gpt-image-2.5-sunburst-edit/2026-10-26.md)). Getting that
  wrong inverts the edit.
- **Narrow endpoint support.** Chat Completions, Responses-as-a-text-model, fine-tuning,
  embeddings and moderation endpoints are all "Not supported"; only the Image API routes and
  Batch are ([model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md)).
  There is no fine-tuning path to adapt it to a brand style.
- **Low image-per-minute caps on new accounts.** 20 IPM on the Build tier, 150 on Launch, 250
  on Grow, with no free tier listed
  ([model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md)). At
  Sunburst's longer generation times this is the practical ceiling for batch work.
- **Access may require organization verification** before GPT Image models can be used at all
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Refusals are request-scoped evidence.** A `moderation_blocked` response says something about
  that prompt and that `moderation` setting; it is not proof of a blanket policy or of technical
  inability. The system card's own caveat applies: "Automated policy labels may contain errors"
  ([system card](../../sources/openai.com/chatgpt-images-2-5-system-card/2026-10-26.md)).
- **No weights.** Nothing captured describes published weights; access is API-only, directly or
  through a reseller such as fal.

### Documentation conflicts worth carrying forward

1. **Responses API support.** The model page's endpoint table marks `v1/responses` "Not
   supported", while the same page's description, the changelog, and the guide all say the model
   is selectable as the `image_generation` tool's model inside Responses. The likely reading is
   that the table describes the model as a top-level text model, but no source states that.
2. **Streaming.** The model page's feature list says "Streaming — Not supported", while the
   guide documents streaming image generation via `partial_images` (each partial image costing
   an extra 100 output tokens)
   ([model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md),
   [guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)). Unresolved.
3. **Default quality.** OpenAI says both 2.5 models default to `auto`; fal's schema defaults
   `quality` to `high`, which fal itself notes costs more. Equal prompts across the two routes
   are not price- or latency-comparable out of the box.

## Access, pricing, licensing

- **First-party token rates** (per 1M tokens, Standard): image input $8, cached image input $2,
  image output $30; text input $5, cached text input $1.25. Text output is not billed. Batch
  halves all of them — image output $15
  ([pricing](../../sources/openai.com/api-pricing/2026-10-26.md),
  [model page](../../sources/openai.com/gpt-image-2.5-sunburst-model/2026-10-26.md)). The rates
  are identical to GPT Image 2's.
- **No per-image dollar figure is published.** OpenAI directs readers to a client-side token
  calculator and to the response's `usage` field instead. Any per-image price you see quoted
  for Sunburst is someone's measurement or estimate, not an OpenAI price.
- **Cached input pricing is Responses-only.** It does not apply to direct Images API calls,
  including `/v1/images/edits`
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **fal charges the same token rates** — text $5/$1.25/$10, image $8/$2/$30 per 1M, "rounded up
  to the closest hundredth of a cent ($0.0001)"
  ([fal](../../sources/fal.ai/gpt-image-2.5-sunburst-text-to-image/2026-10-26.md)). fal's
  page-level statement is token rates only; the per-canonical-size cost table it points to is
  rendered client-side and was not captured.
- **Licensing.** fal marks both endpoints "Commercial use", which is fal's statement about use
  through fal, not a restatement of OpenAI's terms. OpenAI's own terms for API output were not
  captured for this page and should be checked before relying on them.

## Unresolved questions

1. **Does ChatGPT Images 2.5 run Sunburst, Flare, or something else?** The announcement
   introduces ChatGPT Images 2.5 and then "two new models in the API", without mapping them.
   The catalog lists `chatgpt-image-latest` as "Previous image model used in ChatGPT" and names
   no successor. Any claim that ChatGPT's default image model is Sunburst is unsupported.
2. **What is the real per-image cost premium over Flare?** Identical rates plus different token
   consumption means the gap can only come from measurement. This is the single most useful
   missing number for a build decision.
3. **How much slower is Sunburst than Flare?** No figure exists; "longer generation times" is
   all OpenAI says.
4. **Do the two tiers share weights?** No source addresses it. The system card evaluates them as
   separate models but says nothing about shared training.
5. **What does "precision" mean operationally** — prompt adherence, edit locality, typography,
   identity preservation? OpenAI's claims cover all four without separating them, and the guide
   still lists text placement and layout control as weaknesses.
6. **How many reference images does the first-party edit endpoint accept?** OpenAI's guide is
   silent; fal allows 16. Unverified whether 16 is a model limit or a fal limit.
7. **Which snapshot does fal serve, and does its schema change?** fal is a proxy with no
   revision history exposed; the dated snapshot `gpt-image-2.5-sunburst-2026-09-08` is the only
   pin documented here.
8. **Does the API run the same safety stack measured in the system card?** The card is written
   around the ChatGPT deployment and does not mention the API's `moderation` parameter or the
   `moderation_blocked` error surface at all; the mapping between the two is unstated.
9. **Do the system card's safety numbers say anything about quality?** No — they measure
   moderation blocking on an adversarial prompt set. Sunburst trails Flare slightly on safe
   generation (77.0% vs 79.4%) and leads slightly on unsafe-shown (1.09% vs 1.41%), but the
   card's significance tests are against the Images 2.0 baseline, not between the two 2.5
   variants, so that gap is untested and in any case is not a quality signal. Anyone citing
   these rows as a capability comparison is misreading the table.

## Evidence status

**Evidence floor: met.** Seven first-party OpenAI records captured 2026-10-26 — the model page,
the API changelog, the price list, the image generation guide, the model catalog, the launch
announcement, and the ChatGPT Images 2.5 system card — plus one independent host, fal, captured
as three records (text-to-image page, edit page, catalogue API).

Two qualifications on that floor:

- **fal is an independent record, not an independent measurement.** Its own catalogue labels the
  endpoints `hostingType: "proxy"`, and its descriptions restate OpenAI's positioning. No
  third-party benchmark, independent evaluation, or user report for this model was captured;
  every capability statement on this page traces back to OpenAI or to a host repeating OpenAI.
- **No direct tests were run for this page.** Nothing here is a measured result. The
  announcement's quality claims, fal's "precision" framing, and OpenAI's "most capable" line are
  vendor positioning; the system card's percentages are safety-stack behaviour, not quality.

The next useful evidence, in order of value: a measured per-image token cost for Sunburst vs
Flare at fixed size and quality (one request each, read `usage`); a latency comparison on the
same prompt; and a small reproducible edit suite — successive edits on one subject, dense
typography, mask adherence — run against a named endpoint and snapshot.

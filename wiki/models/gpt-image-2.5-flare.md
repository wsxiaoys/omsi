# GPT Image 2.5 Flare

OpenAI's fast tier of the GPT Image 2.5 image family, released 2026-09-08 alongside
[GPT Image 2.5 Sunburst](gpt-image-2.5-sunburst.md)
([OpenAI changelog](../../sources/openai.com/api-changelog/2026-10-26.md)). It generates and
edits images from text and image inputs and is billed at the same token rates as Sunburst and as
the earlier [GPT Image 2](gpt-image-2.md), with `xhigh` and `max` quality settings added for this
generation ([pricing](../../sources/openai.com/api-pricing/2026-10-26.md)).

**"Flare" is OpenAI's own name, not a host codename.** OpenAI publishes a model page for
`gpt-image-2.5-flare`, lists it in its changelog, and prices it by that identifier
([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)). fal and
Replicate reuse the name for their own endpoints. What is *not* first-party is much of the
marketing around it: see [Identity](#identity) for the "default model" claim, which OpenAI's own
reference contradicts.

## Identity

- Canonical name: GPT-Image-2.5 Flare — OpenAI's spelling on its model page. In prose and at
  both hosts it appears as "GPT Image 2.5 Flare"
  ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)).
- Model ID: **`gpt-image-2.5-flare`**. The only dated snapshot published is
  **`gpt-image-2.5-flare-2026-09-08`**, which the model page names as the default snapshot
  ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)).
- **Release date: 2026-09-08**, the date on the changelog entry, the snapshot suffix, and the
  first fal catalogue timestamps
  ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md),
  [fal metadata](../../sources/fal.ai/model-metadata-api/2026-10-26.md)). That is inside the
  roster's one-year window (launched on or after 2025-10-26).
- Vendor: OpenAI. The Replicate page is marked an official model owned by the `openai` account
  ([Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)).
- First-party endpoints: `POST /v1/images/generations`, `POST /v1/images/edits`, and Batch
  (`v1/batch`); Responses API only through the image-generation tool, per the changelog and guide
  ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md),
  [changelog](../../sources/openai.com/api-changelog/2026-10-26.md),
  [guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- Host endpoints: fal `openai/gpt-image-2.5/flare/text-to-image` and
  `openai/gpt-image-2.5/flare/edit`
  ([fal text-to-image](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md),
  [fal edit](../../sources/fal.ai/gpt-image-2.5-flare-edit/2026-10-26.md)); Replicate
  `openai/gpt-image-2.5-flare`, a single model covering both workflows
  ([Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)).
- Aliases: **none observed.** No bare `gpt-image-2.5` model ID appears in any captured
  first-party material — `gpt-image-2.5` occurs only as fal's URL namespace and catalogue group
  key (`gpt-25`), and Replicate's slug merely hyphenates the same identifier
  ([Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md),
  [fal metadata](../../sources/fal.ai/model-metadata-api/2026-10-26.md)).
- Sibling models: [GPT Image 2.5 Sunburst](gpt-image-2.5-sunburst.md) (same release day, separate
  ID and snapshot); [GPT Image 2](gpt-image-2.md) (prior generation, `gpt-image-2` /
  `gpt-image-2-2026-04-21`).

### Flare and Sunburst: distinct IDs, undemonstrated difference

OpenAI presents them as two models, and every surface captured keeps them apart: separate model
IDs, separate `2026-09-08` snapshots, separate model pages, separate fal endpoints and catalogue
entries, separate Replicate models
([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md),
[fal metadata](../../sources/fal.ai/model-metadata-api/2026-10-26.md)). Two callers' questions are
therefore genuinely different — "which do I call" is a real request-time choice — so this page
stays separate from Sunburst rather than being folded into one GPT Image 2.5 page.

But nothing captured *measures* a difference:

- The two OpenAI model pages differ only in title, one-line tagline, description sentence, model
  ID, snapshot ID, and snapshot list. Pricing tables, endpoint support table, "supported features"
  (`inpainting`), and rate limits are identical
  ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)).
- fal's two text-to-image schemas are identical in every field, enum, default, and description —
  the diff is empty apart from the schema's own class name
  ([fal Sunburst](../../sources/fal.ai/gpt-image-2.5-sunburst-text-to-image/2026-10-26.md)).
- All three price surfaces give both tiers the same numbers: OpenAI token rates, fal token rates,
  and Replicate's per-image tiers
  ([pricing](../../sources/openai.com/api-pricing/2026-10-26.md),
  [Replicate Sunburst](../../sources/replicate.com/gpt-image-2.5-sunburst/2026-10-26.md)).
- The only differentiation is vendor positioning: Flare as "fast, high-quality everyday image
  generation" versus Sunburst as "our most capable model" for editing precision
  ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md)), which fal renders as
  Sunburst's "extra fidelity on intricate detail, in exchange for longer generation times"
  ([fal Sunburst](../../sources/fal.ai/gpt-image-2.5-sunburst-text-to-image/2026-10-26.md)).

**Recorded ambiguity, not resolved here.** Whether the two tiers share weights, differ only in a
serving profile, or differ in training is unknown; no captured source says. The roster asks
whether the pair should be one entry. The evidence supports keeping the two pages open on
identity grounds while treating the behavioral gap as unverified; the merge decision is left to
the roster owner.

### Is Flare the default?

Conflicting, and the first-party answer is narrower than the host's.

- fal: *"OpenAI's default image model for most applications"*
  ([fal text-to-image](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md)).
- OpenAI's Images API reference: for `/images/edits`, `model` *"Defaults to
  `gpt-image-2.5-sunburst`"*; for `/images/generations` it says to *"Specify a model
  explicitly"* and documents no default
  ([Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)).

So on 2026-10-26 the documented default is Sunburst, not Flare. fal's line is unsupported by
first-party documentation and should be treated as host marketing.

## Current assessment

Flare is the throughput choice in the GPT Image 2.5 pair: same request surface, same price, same
token rates as Sunburst, positioned by OpenAI as the faster everyday option rather than the
precision one
([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)). If a
workload is high-volume generation with prompts that do not hinge on delicate edit fidelity,
Flare is the natural default to test; if edits must preserve a subject across many rounds,
Sunburst is the vendor's stated answer — but no captured evidence quantifies either side of that
trade.

Practically, the choice of *surface* matters more than the tier choice, because the two surfaces
differ in ways the two tiers do not: the Responses API adds multi-turn editing and File-ID inputs,
while the Image API is single-shot
([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
Cached-input pricing exists only on the Responses path
([pricing](../../sources/openai.com/api-pricing/2026-10-26.md)).

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

- **Text-to-image and instruction-based editing in one model.** Text and image inputs, image
  outputs ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md));
  `inpainting` is the only entry under "supported features".
- **Six quality settings.** `low`, `medium`, `high`, `xhigh`, `max`, `auto`, with `auto` the
  documented default; `xhigh` and `max` are new in the 2.5 generation and earlier GPT Image models
  stop at `high` ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Flexible sizing.** Recommended `1024x1024`, `1536x1024`, `1024x1536`; arbitrary
  `WIDTHxHEIGHT` with dimensions divisible by 16, aspect ratio 1:3–3:1, edges ≤ 3840 px, total
  pixels 655,360–8,294,400, and resolutions above `2560x1440` flagged experimental
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md),
  [API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)).
- **Transparent backgrounds**, documented as generally available for both 2.5 models and their
  `2026-09-08` snapshots — a step up from `gpt-image-2`, where the same support is marked preview.
  Requires `png` or `webp` output
  ([API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)).
- **Formats and compression.** `png` default, plus `jpeg` and `webp`, with
  `output_compression` 0–100; OpenAI notes `jpeg` is faster than `png`
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Up to 10 images per request** (`n` 1–10)
  ([API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)), which fal and
  Replicate mirror with `num_images` / `number_of_images`
  ([fal](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md),
  [Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)).
- **Mask-based editing.** The image and mask must match in format and size, be under 50 MB, and
  the mask must carry an alpha channel
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Moderation control** via `moderation: auto | low`
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md),
  [API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)).
- **Batch support** at half the effective token rates
  ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md),
  [pricing](../../sources/openai.com/api-pricing/2026-10-26.md)).

Host-only conveniences, which are not OpenAI features: fal's `image_passthrough` (send references
and masks without resizing or re-encoding, returning the provider's original bytes) and
`enable_safety_checker`
([fal text-to-image](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md));
Replicate's optional `openai_api_key` passthrough to bill OpenAI directly
([Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)).

### Reported quality (marketing, unverified)

OpenAI's tagline is "fast, high-quality everyday image generation"
([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)). Replicate
adds "strong instruction following and sharp text rendering" and lists dense text, small lettering,
infographics, UI mockups, character consistency, try-ons, and text-in-image translation as use
cases ([Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)). fal credits it
with "natural lighting, rich textures" and complex layouts
([fal](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md)). None of this is
measured anywhere in the captured evidence.

## Limitations and constraints

- **OpenAI's own limitation list is written for "GPT Image models" as a class**, not for Flare
  specifically: complex prompts may take up to two minutes; text placement and clarity can still
  fail; recurring characters or brand elements may drift across generations; layout-sensitive
  composition remains difficult
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **No published per-image price.** OpenAI bills tokens and publishes a client-side calculator;
  the model page states the *GPT Image 2* calculator "does not estimate GPT Image 2.5 token
  consumption"
  ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)). Cost
  per image therefore has to be measured from `usage` on your own workload.
- **Cached input pricing is Responses-only.** It does not apply to direct Images API requests,
  including `/v1/images/edits`, and cached token counts are not reported back in the response
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md),
  [pricing](../../sources/openai.com/api-pricing/2026-10-26.md)).
- **Not a general-purpose model.** Chat Completions, Assistants, Realtime, fine-tuning, and
  embeddings are all unsupported
  ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)).
- **Reference-image ceiling is host-specific.** fal documents a maximum of 16 images on its edit
  endpoint ([fal edit](../../sources/fal.ai/gpt-image-2.5-flare-edit/2026-10-26.md)); OpenAI's
  guide and API reference state no number. Which is the real vendor limit is unknown.
- **Mask convention differs by host.** OpenAI wants an alpha-channel mask; fal's default path
  takes white-as-edit / black-as-keep and only uses the OpenAI-native alpha mask when
  `image_passthrough` is set
  ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md),
  [fal edit](../../sources/fal.ai/gpt-image-2.5-flare-edit/2026-10-26.md)). Porting a request
  between the two without flipping the convention silently inverts the edit region.
- **Default `quality` differs by surface.** OpenAI documents `auto`; both hosts default to
  `high` ([fal](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md),
  [Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)). A host call and a
  first-party call with identical arguments are not the same request.
- **Relaxed screening is gated.** fal's schema says "authorized callers may set [the safety
  checker] false" without describing the gate
  ([fal](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md)). That is host
  policy; nothing captured states an OpenAI policy difference between tiers.

## Access, pricing, licensing

- **OpenAI, first-party, per 1M tokens:** image input $8, cached image input $2, image output
  $30; text input $5, cached text input $1.25; text output not billed. Batch halves these ($4 /
  $1 / $15 for images, $2.50 / $0.625 for text)
  ([pricing](../../sources/openai.com/api-pricing/2026-10-26.md)). Identical to Sunburst and to
  GPT Image 2.
- **fal, per 1M tokens:** the same rates, billed with a rounding-up rule to $0.0001, and the host
  states it defaults `quality` to `high`
  ([fal](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md)).
- **Replicate, per output image:** $0.012 `low`, $0.047 `medium`, $0.128 `high`, $0.25 `xhigh`,
  $0.50 `max`, $0.25 `auto` — flat by quality tier, independent of prompt length
  ([Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)). These are host
  prices, not OpenAI's; they are the only per-image figures captured for this model.
- **Rate limits (first-party, `default` tier):** Build 250,000 TPM / 20 IPM; Launch 3,000,000 /
  150; Grow 8,000,000 / 250
  ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)).
- **Licensing:** not established. fal marks the endpoint "Commercial use" and Replicate marks the
  model "Official", but those are the hosts' statements about their own services; OpenAI's terms
  for generated images were not captured for this page
  ([fal](../../sources/fal.ai/gpt-image-2.5-flare-text-to-image/2026-10-26.md),
  [Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)).

## Unresolved questions

1. **Does Flare differ from Sunburst in behavior at all?** Every captured parameter, price, and
   feature list is identical; only positioning differs. No benchmark or side-by-side run was
   captured for either tier.
2. **Do the two tiers consume the same tokens per image at the same size and quality?** OpenAI
   warns that equal rates do not mean equal cost per image and that consumption "can differ by
   model and quality setting"
   ([guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)), but publishes no
   comparison. If they differ, the identical price lists hide it.
3. **Which snapshot do the hosts serve?** Neither fal nor Replicate exposes a model revision, and
   OpenAI lists only one snapshot, so it is unclear whether `gpt-image-2.5-flare` is frozen at
   `2026-09-08` or will roll forward silently.
4. **Is Responses support real?** The model page's endpoint table says `v1/responses` is "Not
   supported" while the same page's prose, the changelog, and the guide all describe using the
   model inside the Responses image-generation tool
   ([model page](../../sources/openai.com/gpt-image-2.5-flare-model-page/2026-10-26.md)). The
   likely reading is that the table describes top-level use only, but no captured source says so.
5. **Does Flare accept `input_fidelity`?** The guide discusses the parameter only for
   `gpt-image-2`, where it is fixed to high fidelity. Replicate claims Flare "processes [reference
   images] at high fidelity automatically", which would imply the parameter is unnecessary — but
   that is host prose, not first-party
   ([Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)).
6. **How much slower is Sunburst, really?** fal says "longer generation times" without numbers.
   The only captured latency figure for either tier is a single Replicate sample run at
   `quality: high`: 23.10 s predict time, 1,372 output tokens
   ([Replicate](../../sources/replicate.com/gpt-image-2.5-flare/2026-10-26.md)). One run on one
   host is not a latency benchmark and says nothing about Sunburst.
7. **Is Flare what ChatGPT uses?** Not captured. openai.com returned HTTP 403 to every request
   from this client on the capture date, so no product announcement or consumer-facing naming was
   recorded, and no claim is made either way.

## Evidence status

Evidence floor: **met.** One first-party publisher (OpenAI developer documentation, five records:
model page, changelog, image generation guide, pricing, Images API reference) plus two independent
hosts (fal, four records; Replicate, two records).

The one-year window is satisfied: released 2026-09-08, inside the on-or-after-2025-10-26 window
([changelog](../../sources/openai.com/api-changelog/2026-10-26.md)).

**No direct tests have been run for this page.** Every capability statement above is vendor or
host documentation; phrases such as "natural lighting", "sharp text rendering", "extra fidelity",
and "fast" are marketing language recorded as claims, not findings. Two contradictions are kept
open rather than smoothed: fal's "default image model" line against OpenAI's documented Sunburst
default, and the Responses endpoint row against the Responses prose. One capture gap is material:
openai.com's own site (announcements, ChatGPT-facing model naming) was unreachable (HTTP 403), so
first-party evidence here is developer documentation only.

The next useful evidence would be a small reproducible run against a named endpoint and date:
the same prompt set at `high` and `max` on Flare and Sunburst, recording wall-clock latency,
`usage` token counts, and actual billed cost per image, plus one multi-round edit sequence to test
the drift claim that the two tiers are sold on.

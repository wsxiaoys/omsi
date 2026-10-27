# GPT Image 2

OpenAI's image generation and editing model, released **2026-04-21**
([changelog](../../sources/openai.com/api-changelog/2026-10-26.md)). It is the generation before
GPT Image 2.5 Sunburst/Flare (2026-09-08), still fully available in the API at capture, and still
the default model for the Responses API image generation tool. `gpt-image-2` is a real, current
API model ID — not a marketing label for the 2.5 family, and not an alias of it.

## Identity

- Canonical name: GPT Image 2. Page title on OpenAI's docs is "GPT-Image-2"; prose uses "GPT
  Image 2" ([model page](../../sources/openai.com/gpt-image-2-model/2026-10-26.md)).
- API model ID: **`gpt-image-2`**. Default (and only published) snapshot:
  **`gpt-image-2-2026-04-21`**
  ([model page](../../sources/openai.com/gpt-image-2-model/2026-10-26.md)).
- Release date: **2026-04-21**, from the API changelog entry that announces the model and from the
  snapshot's date suffix
  ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md)). This is inside the one-year
  window (on or after 2025-10-26); the roster entry survives the window check on first-party
  evidence.
- Aliases and host spellings:
  - "GPT-Image-2" — OpenAI page title and changelog metadata
    ([model page](../../sources/openai.com/gpt-image-2-model/2026-10-26.md)).
  - "ChatGPT Images 2.0" — fal's marketing name for the same model in its pricing and feature
    sections ([fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md)). Not used by OpenAI in any
    captured document.
  - `openai/gpt-image-2` (Replicate
    [source](../../sources/replicate.com/gpt-image-2/2026-10-26.md)); `openai/gpt-image-2` and
    `fal-ai/gpt-image-2` both appear on fal, plus `openai/gpt-image-2/edit` for editing
    ([fal T2I](../../sources/fal.ai/gpt-image-2/2026-10-26.md),
    [fal edit](../../sources/fal.ai/gpt-image-2-edit/2026-10-26.md)).
- Sibling pages: [GPT Image 2.5 Flare](gpt-image-2.5-flare.md) and
  [GPT Image 2.5 Sunburst](gpt-image-2.5-sunburst.md) are separate models with their own IDs,
  their own `2026-09-08` snapshots, and separate catalogue entries
  ([Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)). Findings
  on this page do not transfer to them, and theirs do not transfer here.

### Identity ambiguity worth tracking

- **Alias vs. snapshot.** OpenAI treats `gpt-image-2` and `gpt-image-2-2026-04-21` as two
  selectable values in the API reference, but the model page's "Snapshots" list contains only the
  dated ID, and no second snapshot appears in any captured document
  ([Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md),
  [model page](../../sources/openai.com/gpt-image-2-model/2026-10-26.md)). Whether `gpt-image-2`
  is a frozen alias or a moving pointer that could be re-pointed is not stated. Pin the dated
  snapshot when reproducibility matters; do not assume `gpt-image-2` is stable forever.
- **Relationship to the 2.5 entries.** They are not aliases: 2.5 shipped later that year
  (2026-09-08) with its own IDs and snapshots, and OpenAI's migration guide treats GPT Image 2 as
  the *source* workflow to migrate *from*
  ([image prompting](../../sources/openai.com/image-prompting-guide/2026-10-26.md)). The roster's
  discovery labels "GPT Image 2", "GPT Image 2.5 Flare", and "GPT Image 2.5 Sunburst" therefore
  map to three distinct model entities.
- **What "GPT Image 2" does not identify.** It does not name a parameter count, an architecture,
  or a training corpus; no first-party document captured here states any of those, and the
  `Architecture: GPT-Image-2` row on fal's spec table is a restatement of the name, not
  information ([fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md)).

## Current assessment

GPT Image 2 is the previous generation of OpenAI's image model, kept in service without a
deprecation date. Three facts define its position at capture:

1. **It is superseded but not withdrawn.** OpenAI released 2.5 Sunburst and Flare on 2026-09-08
   ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md)). Every retired or scheduled
   image model on the deprecations page has an explicit shutdown date — `gpt-image-1` (2026-10-23),
   `gpt-image-1.5`, `gpt-image-1-mini`, `chatgpt-image-latest` (2026-12-01) — and `gpt-image-2`
   appears on none of them ([deprecations](../../sources/openai.com/api-deprecations/2026-10-26.md)).
2. **It is still the default in one place.** A Responses API request that uses the image
   generation tool without naming a model gets `gpt-image-2`, not a 2.5 model
   ([Responses API reference](../../sources/openai.com/responses-api-reference/2026-10-26.md)).
   The direct Images API endpoints behave differently: `/v1/images/generations` tells callers to
   "specify a model explicitly", and `/v1/images/edits` defaults to `gpt-image-2.5-sunburst`
   ([Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)). That
   inconsistency is a defaulting artifact, not a quality recommendation, and it is the single
   most likely source of accidental GPT Image 2 usage.
3. **OpenAI's own guidance is to migrate.** "If GPT Image 2 already meets your quality
   requirements, start with GPT Image 2.5 Flare and test for a latency improvement. If GPT Image 2
   falls short on a complex use case, start with GPT Image 2.5 Sunburst"
   ([image prompting](../../sources/openai.com/image-prompting-guide/2026-10-26.md)).

For new work, the 2.5 models are the current generation and this page should be read as the
incumbent baseline. For existing validated workflows, OpenAI's advice is to keep the prompts and
inputs and compare on your own workload, because "the same quality label does not imply the same
image quality or response time across models"
([image prompting](../../sources/openai.com/image-prompting-guide/2026-10-26.md)). Editorial
conclusion: GPT Image 2 remains a reasonable default only where a workflow already validated on
it, or where the Responses-tool default is left implicit.

## Documented capabilities

Everything in this section is vendor or host documentation. No direct tests were run.

- **Text-to-image, editing, and inpainting in one model.** Supported endpoints are
  `v1/images/generations`, `v1/images/edits`, and `v1/batch`; "inpainting" is the listed supported
  feature. Chat Completions, Responses, Assistants, fine-tuning, and video endpoints are marked
  unsupported on the model page — the Responses *tool* is a separate integration path
  ([model page](../../sources/openai.com/gpt-image-2-model/2026-10-26.md)).
- **Arbitrary resolutions within fixed constraints.** `WIDTHxHEIGHT` strings are accepted with a
  maximum edge of 3840 px, both edges multiples of 16, long:short ratio at most 3:1, and total
  pixels between 655,360 and 8,294,400 (up to 4K). Sizes above 2560×1440 are marked experimental.
  Presets run from 1024×1024 to 3840×2160 and 2160×3840
  ([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md),
  [Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)).
- **Quality `low` / `medium` / `high`, default `auto`.** `xhigh` and `max` exist but are 2.5-only
  ([Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md),
  [image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Always-high input fidelity, not adjustable.** `input_fidelity` must be omitted: "the API
  doesn't allow changing it because the model processes every image input at high fidelity
  automatically". Replicate states the same in its own words — "There's no knob to adjust"
  ([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md),
  [Replicate](../../sources/replicate.com/gpt-image-2/2026-10-26.md)).
- **Transparent backgrounds, in preview.** `background: "transparent"` with `png` or `webp`
  output, announced 2026-08-20 and still described as preview at capture; `jpeg` cannot carry
  alpha ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md),
  [Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)).
- **Up to 10 images per request, prompt up to 32,000 characters, streaming with 0–3 partial
  images** ([Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md),
  [image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
  Each partial image costs an extra 100 image output tokens.
- **Batch at half price.** Batch is supported and priced at 50% of standard image rates
  ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md),
  [pricing](../../sources/openai.com/api-pricing/2026-10-26.md)).
- **Moderation control.** The `moderation` parameter takes `auto` (default) or `low`; all prompts
  and generated images are filtered per OpenAI's usage policy. Requests can send a
  `safety_identifier` in place of the deprecated `user` parameter
  ([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Prompt revision only through the Responses tool.** When the image generation tool is used,
  the mainline model revises the prompt and returns it as `revised_prompt`
  ([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).

### Capabilities claimed only by hosts

These are host marketing, not OpenAI documentation, and none is quantified:

- Text rendering across "dense text, small lettering, and complex layouts like infographics, UI
  mockups, and marketing materials", plus "correct spelling and consistent spacing … across both
  Latin and CJK scripts" ([Replicate](../../sources/replicate.com/gpt-image-2/2026-10-26.md),
  [fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md)).
- "World knowledge" / reasoning about the prompt: Replicate's Woodstock example, and fal's claim
  that the model "is capable of reasoning about input text, and is capable of thinking for
  variable amounts of time depending on the complexity of the prompt"
  ([Replicate](../../sources/replicate.com/gpt-image-2/2026-10-26.md),
  [fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md)). OpenAI's docs describe neither
  reasoning nor variable thinking time for this model.
- fal claims "the persistent warm color cast present in GPT Image 1.5 has been eliminated"
  ([fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md)). No first-party colour-accuracy claim
  was captured, and no measurement accompanies this one.

## Limitations and constraints

- **Capped at `high` quality.** The `xhigh` and `max` settings are 2.5-only, so any comparison that
  runs both models at `max` is not comparing this model at all
  ([Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)).
- **The documentation has moved on.** The image generation guide is now written around 2.5 and
  keeps GPT Image 2 in a collapsed "Earlier GPT Image models" section; the prompting guide's
  parameter table and all sample images are 2.5-only. GPT Image 2 guidance is still published but
  no longer the default reading path
  ([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md),
  [image prompting](../../sources/openai.com/image-prompting-guide/2026-10-26.md)).
- **Latency and quality caveats are stated at class level, not measured.** OpenAI's limitations
  list — complex prompts "may take up to 2 minutes", text placement and clarity can still fail,
  recurring characters or brand elements may drift across generations, layout-sensitive
  composition may misplace elements — is written for "GPT Image models" as a group, not for this
  checkpoint, and carries no numbers
  ([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **Edits can still move what you asked to keep.** OpenAI's advice is to restate constraints and,
  "if a region must remain pixel-identical, composite the approved edit into the original image
  instead of relying on prompting alone"
  ([image prompting](../../sources/openai.com/image-prompting-guide/2026-10-26.md)). A reported
  refusal or drift is evidence about that request, not proof of a general inability.
- **Reference-image cost is not flat.** Because every input image is processed at high fidelity,
  "image input tokens can be higher for edit requests that include reference images", and cached
  input pricing applies only through the Responses tool, not the Images API
  ([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)).
- **No published reference-image count limit.** Neither OpenAI's guide nor the API reference
  states how many input images `/v1/images/edits` accepts for this model. Replicate's schema has
  no cap either ([Replicate](../../sources/replicate.com/gpt-image-2/2026-10-26.md)).
- **Host feature coverage differs.** fal exposes `mask_image_url` for inpainting; Replicate's
  schema has no mask field, so mask-based inpainting is unavailable there even though OpenAI lists
  inpainting as a model feature
  ([fal edit](../../sources/fal.ai/gpt-image-2-edit/2026-10-26.md),
  [Replicate](../../sources/replicate.com/gpt-image-2/2026-10-26.md)).
- **Host defaults change what you get.** Replicate defaults to `webp` output and `1:1`;
  fal defaults to `quality: high` and `landscape_4_3` on text-to-image, `auto` size on edit.
  OpenAI's Images API defaults to `quality: auto` and `png`
  ([Replicate](../../sources/replicate.com/gpt-image-2/2026-10-26.md),
  [fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md),
  [Images API reference](../../sources/openai.com/images-api-reference/2026-10-26.md)). Two
  "GPT Image 2" results from different hosts are therefore not the same request.

### Contradictions left open

- **"State-of-the-art" vs. superseded.** The model page still leads with "State-of-the-art image
  generation model" ([model page](../../sources/openai.com/gpt-image-2-model/2026-10-26.md)),
  while the same changelog announces 2.5 as the new generation and the prompting guide states
  that Sunburst has "higher image quality than GPT Image 2"
  ([changelog](../../sources/openai.com/api-changelog/2026-10-26.md),
  [image prompting](../../sources/openai.com/image-prompting-guide/2026-10-26.md)). The likely
  explanation is stale marketing copy on the older page, but that is an inference; the pages
  disagree as published.
- **Which model is "recommended".** The DALL·E shutdown notice (May 2026) names `gpt-image-2`
  first among replacements; the June and October 2026 notices name only the 2.5 models
  ([deprecations](../../sources/openai.com/api-deprecations/2026-10-26.md)). Both statements are
  live on the same site at capture.
- **fal's own resolution figures disagree.** Its spec table says 655,340 px² minimum and a 4000 px
  maximum edge; its "Flexible Resolutions" section says 655,360 px² and 3840 px. OpenAI's guide
  agrees with the latter. Recorded as published, unresolved
  ([fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md)).
- **fal prices text output tokens that OpenAI does not bill.** fal lists "$10.00 output" per 1M
  text tokens; OpenAI's price list shows "-" for this model's text output while charging
  $10/1M for `gpt-image-1.5` and `chatgpt-image-latest`, so no text-output charge is published
  for `gpt-image-2`
  ([fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md),
  [pricing](../../sources/openai.com/api-pricing/2026-10-26.md)). Unresolved.
- **Replicate's README is narrower than Replicate's schema.** The README lists three aspect ratios;
  the schema on the same page accepts seven ratios plus ten explicit pixel sizes and `auto`
  ([Replicate](../../sources/replicate.com/gpt-image-2/2026-10-26.md)). Trust the schema; the prose
  looks stale.

## Access, pricing, licensing

**First-party (OpenAI API).** Token-based, per 1M tokens: image input **$8.00**, cached image input
**$2.00**, image output **$30.00**, text input **$5.00**, cached text input **$1.25**; no
text-output charge is listed. Batch halves each rate ($4.00 / $1.00 / $15.00, $2.50 / $0.625)
([pricing](../../sources/openai.com/api-pricing/2026-10-26.md)). Rates are identical to both 2.5
models, so price per token cannot distinguish the generations.

Per-image examples published by OpenAI for this model
([image generation guide](../../sources/openai.com/image-generation-guide/2026-10-26.md)):

| Quality | 1024×1024 | 1024×1536 | 1536×1024 |
| --- | --- | --- | --- |
| low | $0.006 | $0.005 | $0.005 |
| medium | $0.053 | $0.041 | $0.041 |
| high | $0.211 | $0.165 | $0.165 |

Those are examples at three sizes, not a schedule: "`gpt-image-2` supports thousands of valid
resolutions" and cost scales with output tokens, which vary with size and quality. Rate limits are
tiered (Build 250k TPM / 20 IPM, Launch 3M / 150, Grow 8M / 250)
([model page](../../sources/openai.com/gpt-image-2-model/2026-10-26.md)).

**Replicate.** Flat per output image by quality tier: **$0.012** low, **$0.047** medium, **$0.128**
high and auto
([Replicate](../../sources/replicate.com/gpt-image-2/2026-10-26.md)). This does not scale with
output size in the captured configuration, unlike OpenAI's token billing — so the two hosts
cross over: Replicate is 2× OpenAI's example price at `low` 1024×1024, slightly cheaper at
`medium`, and about 40% cheaper at `high`. The page does not state which size its flat rate
assumes, so the comparison cannot be closed. Replicate also accepts a caller-supplied
`openai_api_key`, in which case OpenAI bills directly.

**fal.** Per-size tables by quality. The 1024×1024 row matches OpenAI's own numbers exactly
($0.006 / $0.053 / $0.211) and 1024×1536 agrees to within $0.001, which is consistent with fal
passing through OpenAI's token pricing. The edit endpoint adds roughly one input image's worth
(1024×1024 high: $0.219 vs $0.211)
([fal](../../sources/fal.ai/gpt-image-2/2026-10-26.md),
[fal edit](../../sources/fal.ai/gpt-image-2-edit/2026-10-26.md)). fal also offers BYOK with
`openai_api_key`.

**Licensing and commercial use.** fal marks the endpoint "Commercial use" and states the licence as
"Commercial use via fal Partner agreement"; it is the only captured document that addresses
commercial rights. Replicate's page carries no licence statement in the captured record, and
OpenAI's own output-usage terms were not captured here. **Do not treat "commercially usable" as
established for first-party use from this page** — check OpenAI's terms before relying on it.

## Unresolved questions

1. Is `gpt-image-2` a frozen alias of `gpt-image-2-2026-04-21`, or a moving pointer that will
   adopt a newer snapshot? Only one snapshot appears in the captured documentation.
2. Why is `gpt-image-2` still the default for the Responses API image generation tool while the
   direct edit endpoint already defaults to `gpt-image-2.5-sunburst`, and is that scheduled to
   change?
3. How large is the quality gap to 2.5 Flare and Sunburst? OpenAI claims Flare is "comparable" and
   Sunburst "higher" with no numbers, benchmark, or task definition.
4. Is there a sunset date for `gpt-image-2`? None is published; absence at one capture is not a
   commitment.
5. Which snapshot do Replicate and fal actually serve, and how stale is it?
6. How many reference images does `/v1/images/edits` accept for this model, and does that limit
   differ from the 2.5 models?
7. Which size does Replicate's flat $0.128 high-quality rate correspond to, and is that rate a
   pass-through or a fixed host price?
8. Does ChatGPT's image feature run on `gpt-image-2`, on `chatgpt-image-latest`, or on something
   else? No captured document says.
9. What does transparent-background output actually deliver at object edges — OpenAI calls it
   preview and recommends inspecting alpha on hair, glass, shadows, and edges, but publishes no
   failure rate.

## Evidence status

Everything above comes from vendor and host documentation captured on 2026-10-26. **No direct
tests have been run for this page, and no benchmark or independent evaluation of GPT Image 2 was
captured.** Claims such as "near-perfect text rendering", "world-aware photorealism", or "state of
the art" are recorded as their authors' statements, not as findings. The only first-party
comparative claim captured is qualitative: Flare's quality is "comparable to GPT Image 2" and
Sunburst's is "higher than GPT Image 2"
([image prompting](../../sources/openai.com/image-prompting-guide/2026-10-26.md)).

The next useful evidence would be a small reproducible set run against a named endpoint and
snapshot: dense small text, multi-reference identity consistency, sequential edit drift, exact
resolution requests at 2K and 4K, transparent-background edge quality, and a same-prompt
comparison against `gpt-image-2.5-flare` and `gpt-image-2.5-sunburst` at matched quality, size,
and format.

Evidence floor: **met**. Eight first-party OpenAI records (model page, changelog, deprecations,
pricing, image generation guide, image prompting guide, Images API reference, Responses API
reference) plus three independent host records (Replicate, and fal's text-to-image and edit
pages).

# Muse Image

Meta's agentic image model, announced **2026-07-07** by Meta Superintelligence Labs
([launch post](../../sources/meta.com/muse-image-launch-blog/2026-10-26.md)) and served on Meta
Model API as `muse-image-1.0` at a flat **$0.01 per generated image**
([model page](../../sources/meta.com/muse-image-model-page/2026-10-26.md),
[pricing](../../sources/meta.com/muse-image-models-and-pricing/2026-10-26.md)). Unlike a single-pass
text-to-image model it plans a request first: it searches the web for references and current facts,
runs code for charts and typography, and refines its own output before returning one image. One model
covers generation, editing, multi-turn refinement and multi-reference composition.

Inside the one-year window (launch 2026-07-07, after 2025-10-26). Closed weights; no public
checkpoint.

## Identity

- **Canonical name:** Muse Image. Vendor: Meta (Meta Superintelligence Labs).
- **Canonical model ID:** `muse-image-1.0` — the identifier Meta documents
  ([models doc](../../sources/meta.com/muse-image-models-and-pricing/2026-10-26.md)), the one
  Artificial Analysis uses as its slug
  ([AA](../../sources/artificialanalysis.ai/muse-image/2026-10-26.md)), and the `model=` value in
  Meta's own cookbook ([cookbook](../../sources/github.com/meta-model-cookbook-muse-image/2026-10-26.md)).
- **Roster label:** "Meta Muse Image" is a vendor-prefixed display label, not a product name. Meta
  and Artificial Analysis both call it **Muse Image**; fal titles its two endpoints "Meta Muse Image
  Text to Image" and "Meta Muse Image Edit"; OpenRouter uses the slug `meta/muse-image`.
- **First-party endpoints:** `POST https://api.meta.ai/v1/responses` (the documented main interface),
  plus OpenAI-compatible `POST /v1/images/generations` and `/v1/images/edits`, authenticated with a
  `MODEL_API_KEY` bearer token
  ([image generation guide](../../sources/meta.com/muse-image-image-generation-guide/2026-10-26.md)).
- **Host endpoints:** fal `meta/muse-image/text-to-image` and `meta/muse-image/edit`, both
  `hostingType: "proxy"` and `licenseType: "commercial"`
  ([fal](../../sources/fal.ai/meta-muse-image/2026-10-26.md)); OpenRouter `meta/muse-image`
  ([OpenRouter](../../sources/openrouter.ai/muse-image/2026-10-26.md)). Meta's model page also lists
  **Runway** as a host, not captured here. **Replicate does not list it** (checked 2026-10-26).
- **Dates:** 2026-07-07 announcement, but the launch post only describes consumer surfaces (Meta AI
  app, meta.ai, Instagram Stories in the US, WhatsApp in limited countries). API access dates from
  **2026-08-26**: fal published both endpoints that day and OpenRouter's endpoint record has
  `created: 2026-08-26T17:15:32Z` with "Released Aug 26, 2026" on the page. Artificial Analysis
  added it to the boards on 2026-08-27 while keeping `releaseDate: 2026-07-07`.
- **Siblings:** Muse Video (previewed in the same post, "coming soon"), and the text/agent lines Muse
  Spark, Muse Wonder and Muse Glimmer. Meta's cookbook states Muse Image "is a separate model family
  from Muse Spark: it **outputs images** rather than text". The open-weight Muse checkpoints are
  Spark Open and Glimmer; no Muse Image weights exist on Hugging Face
  ([HF search](../../sources/huggingface.co/muse-image-weights-search/2026-10-26.md)).

### Identity ambiguity

- **fal's two endpoints are one model.** `text-to-image` and `edit` are separate fal slugs with
  separate titles and separate creation timestamps (six seconds apart), but Meta documents "one
  model handles both generation and editing" and Artificial Analysis records a single entry. The
  split is a host packaging choice, not two models.
- **An undocumented dated snapshot exists behind the ID.** OpenRouter's endpoint name is
  `Meta | meta/muse-image-1.0-eval-20260824` — a snapshot string dated 2026-08-24, two days before
  the listing. Meta's docs present `muse-image-1.0` as a single undated version with no checkpoint
  history, so it is unknown whether that eval build is what fal and Runway serve, and whether it will
  be replaced under the same ID.
- **"Muse" is overloaded inside Meta's own family.** Muse Wonder, Muse Spark, Muse Glimmer and Muse
  Code are text/agent products; Muse Image is the only image-output model. A reader who searches
  "Meta Muse" will land on the text models first.

## Current assessment

**A distinct model with a distinct price position, not a repackaging.** Three things separate it from
the frontier image models it competes with:

- **Agentic generation.** Search, code execution and self-refinement are on by default and included
  in the per-image price, with no separate grounding charge
  ([guide](../../sources/meta.com/muse-image-image-generation-guide/2026-10-26.md),
  [pricing](../../sources/meta.com/muse-image-models-and-pricing/2026-10-26.md)).
- **Conversational editing.** Edits chain through `previous_response_id`, with the image held
  server-side, rather than being stateless image-in/image-out calls
  ([cookbook](../../sources/github.com/meta-model-cookbook-muse-image/2026-10-26.md)).
- **Price.** $0.01/image against $0.0336–$0.211 per image for the models ranked above it on
  Artificial Analysis — an order of magnitude below the leaders
  ([AA](../../sources/artificialanalysis.ai/muse-image/2026-10-26.md)).

**Quality: mid-pack, and lower than the launch claim.** Meta claimed "the No. 2 spot on Arena for
text-to-image, single-image editing, and multi-image editing … as of July 5, 2026"
([launch post](../../sources/meta.com/muse-image-launch-blog/2026-10-26.md)). At capture Artificial
Analysis's blind human-preference boards place Muse Image **8th** for text-to-image (Elo 1127 ±11,
7–12 range, 8,479 samples) and **10th** for image editing (Elo 1129 ±12, 8–15 range, 13,358 samples)
([AA](../../sources/artificialanalysis.ai/muse-image/2026-10-26.md)). Both readings can be true: the
claim is four months older and names an unnamed "Arena", and the models above it now include GPT
Image 2.5, MAI-Image-2.6 and Nano Banana 2.1, several of which shipped after July. The claim should
be read as a July snapshot, not a current ranking.

**Status: current and generally available on Meta Model API.** No preview or beta label is attached
to Muse Image in Meta's model list, while the neighbouring Muse Wonder entry is explicitly marked
"Preview". fal shows `deprecated: false`, `removed: false`, `status: "public"` for both endpoints.
Artificial Analysis marks the entry `isCurrent: true`, `isRecent: false`.

**Retained specialist or default?** Neither. It is Meta's only image model, priced for high-volume
work rather than for benchmark leadership, and its differentiating capability is multi-turn,
reference-anchored composition at a low per-image price.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run.**

- **Generate, edit, refine, compose — one model.** "One model handles both generation and editing,
  and plain text-to-image and one-off edits are just special cases of the same conversational
  interface" ([guide](../../sources/meta.com/muse-image-image-generation-guide/2026-10-26.md)).
  Editing is instruction-scoped: "it changes only what you ask for while keeping the rest intact".
- **Multi-turn chaining.** Later turns pass `previous_response_id` and send only the new
  instruction; the server holds the image. `store: false` switches to caller-held state, where the
  prior `image_generation_call` item is replayed as input
  ([cookbook](../../sources/github.com/meta-model-cookbook-muse-image/2026-10-26.md)).
- **Reference images and interleaved prompts.** References ride as `input_image` parts and "guide
  the render (style, subject, pose, layout) without necessarily copying them into the output"; Meta
  supports "interleaving text and images inline in prompts". A bare content-part list is rejected
  with HTTP 400 — the parts must be wrapped in a `{"role": "user", "content": [...]}` message.
- **Built-in search, not a tool.** Web and image search run inside the model; passing a `web_search`
  tool "returns HTTP 400 with the message 'image models only support the `image_generation` tool'"
  ([guide](../../sources/meta.com/muse-image-image-generation-guide/2026-10-26.md)).
- **Tool and reasoning switches** (Responses API, inside an `image_generation` tool object):
  `enable_image_search`, `enable_web_search`, `enable_shell` — all `true` by default;
  `reasoning_strength: "high"` (default) refines over several passes, `"low"` returns after a single
  pass "trading some of that refinement for faster generation", at the same price.
- **Output format:** `webp` (default), `png`, `jpeg` — first-party and on fal.
- **Aspect ratio, not pixels.** `size` is "a `"WxH"` string … that sets the aspect ratio, not the
  exact pixel size: the image is produced at the generator's own resolution, so the returned
  dimensions won't match the numbers exactly". fal is the only source that quantifies it: "Muse
  renders it at its own fixed resolution of roughly 2.5 megapixels", ratio limited to **1:16–16:1**
  ([fal](../../sources/fal.ai/meta-muse-image/2026-10-26.md)).
- **Batch size:** `n` 1–10 first-party; `num_images` 1–10 on fal.
- **Provenance watermark.** "Content Seal" is an invisible watermark that "stays intact — even when
  cropped, compressed, resized, or screenshotted", scoped in the launch post to "Images created by
  Muse Image in the Meta AI app and on meta.ai"
  ([launch post](../../sources/meta.com/muse-image-launch-blog/2026-10-26.md)).
- **Response shape.** The output list interleaves a `reasoning` item ("a summary only, never the raw
  chain of thought"), a `message` item, and one `image_generation_call` per image whose `result` is
  base64 and whose `id` is "a signed handle you use to keep editing in a later turn".

### Claims kept separate

Vendor and host marketing, not findings:

- Meta: "our most advanced image generation model yet"; "frontier pricing previously put out of
  reach"; "change exactly what you specify and leave everything else untouched".
- Meta, on the launch chart: reasoning strength "improves human-preference Elo scores and shows an
  approximately log-linear scaling relationship" — internal ablation, no numbers published in prose.
- fal: "faithful instruction-following and exceptional visual fidelity, with fine details like text,
  plots, and QR codes rendered accurately"; the edit endpoint "does precise edits that change only
  what you ask, stay coherent across turns".
- OpenRouter: "precise text rendering within generated images".

## Limitations and constraints

- **Resolution is a vendor blank.** Meta documents no pixel count, no resolution tiers and no
  per-size price. The only figure anywhere is fal's "roughly 2.5 megapixels" with a worked example
  ("1920:1200" and "960:600" both return the same 1920×1200 image). Since the price is flat, there
  is no higher-resolution tier to buy.
- **No sampling controls.** Neither Meta's documented parameters nor fal's schema expose a seed,
  steps, guidance or negative prompt. Reproducibility and fine-grained control are not part of the
  interface; the intended controls are conversational.
- **One tool, no composition.** Only `image_generation` is accepted; function tools and `web_search`
  are rejected with 400. Tool *use* is built in, tool *calling* is not available.
- **Rate limit:** 150 requests per minute per team, no token-per-minute cap (the model is not
  token-priced) ([pricing doc](../../sources/meta.com/muse-image-models-and-pricing/2026-10-26.md)).
- **Context:** OpenRouter reports 65,536 tokens with `max_completion_tokens` 58,982
  ([OpenRouter](../../sources/openrouter.ai/muse-image/2026-10-26.md)); Meta publishes no context
  window for the model and bills per image, so this is host metadata of unclear practical weight.
- **Reference-image limits are host-only.** fal caps the edit endpoint at 1–10 HTTP(S) or data URLs;
  Meta documents no maximum reference count, no per-image byte or dimension ceiling, and no prompt
  length limit beyond "over-long prompt" returning 400.
- **Safety filtering is opaque.** Meta says images "removed by safety filtering before they're
  returned" are not billed, but publishes no policy text, no refusal categories, and no statement on
  whether API output carries Content Seal. fal adds no documented moderation layer of its own.
- **Closed weights.** No checkpoint on Hugging Face under `meta-models`; AA records
  `openWeightsUrl: null`. Access is API-only, governed by Meta's Terms of Service.
- **Host gaps vs. the first-party API.** fal's captured schemas expose only `prompt`, `image_urls`,
  `aspect_ratio`, `num_images`, `output_format` and `sync_mode` — no `reasoning_strength`, no tool
  toggles, and no conversation handle, so multi-turn refinement and per-request tool control are
  Meta-API-only. A workflow that depends on either cannot be moved to fal unchanged.
- **No Replicate listing**, so there is no second self-serve price or default-parameter set to
  compare.

## Access, pricing, licensing

Billing basis is **per successfully generated image**, not per token, per second or per megapixel:

| Route | Price | Basis | Captured? |
| --- | --- | --- | --- |
| Meta Model API (`api.meta.ai/v1`) | $0.01/image | flat; `n` images billed `n` times; search, code use and `reasoning_strength` included; failed or safety-filtered images not billed | [pricing doc](../../sources/meta.com/muse-image-models-and-pricing/2026-10-26.md) |
| OpenRouter (`meta/muse-image`) | $0.01/image | `image_token` $2.3952…e-6 × 4,175 tokens = exactly $0.01; prompt/completion tokens priced at 0 | [OpenRouter](../../sources/openrouter.ai/muse-image/2026-10-26.md) |
| fal (`meta/muse-image/*`) | **not captured** | catalogue carries no price override; the calculator is client-side only | [fal](../../sources/fal.ai/meta-muse-image/2026-10-26.md) |
| Runway | not captured | listed by Meta as a host | [model page](../../sources/meta.com/muse-image-model-page/2026-10-26.md) |

Artificial Analysis reports **$10.0 per 1,000 images** and attributes the endpoint to host
**Meta**, not fal — i.e. its price column reflects Meta's list price, and it does not independently
corroborate any fal price ([AA](../../sources/artificialanalysis.ai/muse-image/2026-10-26.md)).

- **Licensing.** fal marks both endpoints `licenseType: "commercial"` — a host's claim about output
  use, not a weights licence. Muse Image has no weights licence because it has no published weights;
  use is governed by Meta's Terms of Service, which the captured docs link but do not summarise. The
  cookbook repository is MIT-licensed, which covers its example code only.
- **Cost context.** At $0.01/image it is the cheapest entry among the leaderboard rows transcribed
  for this page, by a wide margin: Nano Banana 2.1 $0.0336, MAI-Image-2.6 $0.0389, Grok Imagine
  Image 2.0 $0.06, GPT Image 2 (high) $0.211 per image. Rows further down those boards were not
  captured, so this is a statement about the captured rows, not about the whole market.
- **Independent measurement.** Artificial Analysis measured a median API generation time of **12.87 s**
  per image (p05 9.43 s, p95 27.03 s) over the prior three days — the only latency evidence captured,
  and it reflects the Meta-hosted endpoint only.

## Unresolved questions

1. **What resolution does it actually return?** Meta says only "the generator's own resolution"; fal
   says "roughly 2.5 megapixels" and gives one worked example. No source states the exact output
   dimensions, whether they are fixed across aspect ratios, or what happens at the 1:16 and 16:1
   extremes.
2. **Which build is behind `muse-image-1.0`?** OpenRouter exposes `muse-image-1.0-eval-20260824`;
   Meta documents no snapshot, no dated tag and no deprecation policy. Claims about behaviour are
   valid only for the capture date.
3. **Does API output carry Content Seal?** The launch post scopes the watermark to the Meta AI app
   and meta.ai, and no captured document says whether Model API, fal, Runway or OpenRouter output is
   watermarked.
4. **Why does Meta's July "No. 2 on Arena" claim not match AA's 8th/10th?** Candidates: time decay as
   newer models shipped, a different arena than Artificial Analysis, or the multi-image-editing board
   (which AA's captured pages did not expose) still ranking it higher. No captured source settles it.
5. **What does fal charge?** Its catalogue has no price field for these endpoints and its page price
   is rendered client-side. A fal invoice or a rendered page capture would settle it.
6. **How much is lost on fal?** fal exposes no reasoning strength, no tool switches and no
   conversation state, so the same prompt may produce a less-refined image than the Responses API
   path, and multi-turn editing must be re-expressed as one-shot edits. No comparison exists.
7. **What are the real input limits?** Maximum reference images, input image dimensions, prompt
   length, and whether references count toward cost are undocumented first-party.
8. **What triggers a refusal?** No moderation policy, refusal taxonomy, or appeal path is published
   for this model.

## Evidence status

**Floor met.** First-party: five Meta records — the 2026-07-07 launch post, the `dev.meta.ai` model
page, the image generation guide, the models/pricing/rate-limit docs, and the official cookbook
repository. Independent host records: fal (catalogue, metadata API, both queue schemas), OpenRouter
(page, `llms.txt`, endpoints API), plus Artificial Analysis's blind-preference Elo and measured
generation time. Two absence checks (Replicate, Hugging Face) scope access and weights.

**No direct tests were run for this page.** Every capability claim is documentation; every price is a
published list price captured on 2026-10-26, not a billed invoice. The fal and OpenRouter pages
restate Meta copy and add their own parameter surfaces and prices — they are host records, not
measurements. The only independent measurements here are Artificial Analysis's Elo and generation
time.

The next useful evidence would be a small reproducible set against a named endpoint and date: the
exact pixel dimensions returned for a fixed set of aspect ratios, whether `reasoning_strength: "low"`
versus `"high"` changes output on the same prompt, identity retention across a chained multi-turn
edit, reference-composition fidelity with three or more inputs, whether a fal one-shot edit matches
the Responses-API chained result, and whether returned bytes carry a Content Seal signal.

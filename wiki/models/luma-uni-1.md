# Luma Uni-1

Luma AI's first "Unified Intelligence" model: a decoder-only autoregressive transformer that reasons
in text and emits images in one interleaved sequence, rather than a diffusion model with a separate
text encoder. It shipped on **2026-03-05** as the engine behind Luma Agents
([TechCrunch](../../sources/techcrunch.com/luma-uni-1-launch/2026-10-26.md)), and its image API
opened on **2026-05-05** under the name **Uni-1.1**, with a higher-quality **Uni-1.1 Max** tier
([Luma post](../../sources/lumalabs.ai/uni-1-1-api/2026-10-26.md)). One model ID handles
text-to-image, reference-guided generation and instruction editing; a second, `uni-1-max`, is the
same wire format at a higher price
([models doc](../../sources/lumalabs.ai/luma-agents-api-models/2026-10-26.md)).

## Identity

- **Canonical name:** Uni-1. Luma's page title and nav label render it "UNI-1"; the body copy,
  FAQ and API docs use "Uni-1" ([product page](../../sources/lumalabs.ai/uni-1/2026-10-26.md)).
- **Vendor:** Luma AI ("Luma Labs" in Artificial Analysis and Replicate listings).
- **First-party API model IDs:** `uni-1` (default) and `uni-1-max`, on `POST
  https://agents.lumalabs.ai/v1/generations` with `type: "image"`, `"image_edit"` or `"layering"`
  ([models doc](../../sources/lumalabs.ai/luma-agents-api-models/2026-10-26.md),
  [layering](../../sources/lumalabs.ai/luma-agents-api-image-layering/2026-10-26.md)).
- **Host endpoints:** `luma/agent/uni-1/v1/text-to-image`, `luma/agent/uni-1/v1/edit`,
  `luma/agent/uni-1/v1/max` and `luma/agent/uni-1/v1/max/edit` on fal, all active and
  commercial-use, live since 2026-06-09
  ([fal](../../sources/fal.ai/luma-uni-1/2026-10-26.md)). Replicate hosts Luma's Ray 3.2 video and
  the older Photon image models but **not** Uni-1 (checked 2026-10-26).
- **Other hosts (vendor claim, unverified):** Luma lists Envato, Comfy, Runware, Flora, Krea,
  Magnific (formerly Freepik), Fal and LovArt as Uni-1.1 API partners
  ([post](../../sources/lumalabs.ai/uni-1-1-api/2026-10-26.md)); only fal was checked here.
- **Siblings:** Ray 3.2 (video, same API) and the older Photon / Photon Flash image models, which
  are a different family and not Uni-1 checkpoints
  ([AA](../../sources/artificialanalysis.ai/luma-uni-1/2026-10-26.md); Replicate checked 2026-10-26).
  Luma describes "Uni-fied" as
  the family name and says audio/video output from it is future work
  ([technical report](../../sources/lumalabs.ai/uni-1-tech-specs/2026-10-26.md),
  [TechCrunch](../../sources/techcrunch.com/luma-uni-1-launch/2026-10-26.md)).

### Version ambiguity worth tracking

Three names circulate for what may be two things:

1. **Uni-1** — the model launched with Luma Agents on 2026-03-05.
2. **Uni-1.1 / Uni-1.1 Max** — the names on Luma's API announcement (2026-05-05) and on
   `lumalabs.ai/api`. The post says Uni-1.1 is "less than half the price and latency" of comparable
   models and never states whether it is a new checkpoint or the name of the API surface
   ([post](../../sources/lumalabs.ai/uni-1-1-api/2026-10-26.md),
   [API page](../../sources/lumalabs.ai/luma-api-overview/2026-10-26.md)).
3. **`uni-1` / `uni-1-max`** — the only IDs that appear in the API reference, which never mentions
   "1.1" ([models doc](../../sources/lumalabs.ai/luma-agents-api-models/2026-10-26.md)).

Artificial Analysis's rows are labelled "Luma UNI 1" and "Luma UNI 1 Max", with
`releaseDate: 2026-05-05` and prices ($40.4 / $100 per 1k) that match the *Uni-1.1* list prices
exactly, so the board is best read as measuring the Uni-1.1 API rather than the March model
([AA](../../sources/artificialanalysis.ai/luma-uni-1/2026-10-26.md)). Which checkpoint `uni-1`
resolves to, and whether March-era Uni-1 remains reachable, is unresolved.

**Dates.** Launch 2026-03-05 (TechCrunch, same-day); API 2026-05-05 (Luma byline); fal endpoints
2026-06-09. All fall inside the 2025-10-26 one-year window; no specialist-exception flag is needed.
Luma's own May 5 post says Uni-1 "launched last month", which would imply April 2026 — a loose
vendor phrasing, recorded as a contradiction rather than resolved
([post](../../sources/lumalabs.ai/uni-1-1-api/2026-10-26.md)).

## Current assessment

Uni-1 is a **distinct model family, currently served, not a repackaging of an older Luma image
model**: the architecture, the API surface (`type: "image"` / `"image_edit"` / `"layering"` on one
endpoint), the reasoning-before-render behaviour and the pricing are all new relative to Photon
([technical report](../../sources/lumalabs.ai/uni-1-tech-specs/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/luma-uni-1/2026-10-26.md)).

Its distinguishing claim is that understanding and generation share one model, so instructions with
multiple constraints, spatial relations and cultural style references are handled by reasoning
rather than prompt plumbing. Luma's evidence for that is qualitative (showcase sequences, a
storyboard workflow, a layering feature where a vision pass plans the split) plus unquantified
vendor benchmarks
([technical report](../../sources/lumalabs.ai/uni-1-tech-specs/2026-10-26.md),
[layering](../../sources/lumalabs.ai/luma-agents-api-image-layering/2026-10-26.md)).

On the one independent measure captured, it is **mid-pack, not frontier**. AA-Image-T2I v2.1 puts
UNI 1 at Elo 992 (rank 51, range 45–60) and UNI 1 Max at 1023 (rank 33), against 1222 for the top
row; on AA-Image-Editing v2.1 it is 1043 (rank 40) and 1079 (rank 25) against 1199
([AA](../../sources/artificialanalysis.ai/luma-uni-1/2026-10-26.md)). Luma's launch claim that
Uni-1 "ranks #1 on Human Preference Elo across overall, style & editing, and reference-based
generation" is dated to 2026-05-05 and names no arena; it is not reproducible on AA at capture, and
the two are left unreconciled
([product page](../../sources/lumalabs.ai/uni-1/2026-10-26.md),
[post](../../sources/lumalabs.ai/uni-1-1-api/2026-10-26.md)).

The Max tier is not marketing noise: AA separates it from the base tier by +31 Elo (T2I) and +36
(editing) at 2.5× the price, with non-overlapping intervals
([AA](../../sources/artificialanalysis.ai/luma-uni-1/2026-10-26.md)).

## Documented capabilities

Vendor and host documentation, not tests.

- **Text-to-image** from a prompt of 1–6,000 characters; nine aspect ratios (3:1 through 1:3); PNG
  or JPEG; optional `style: "manga"` preset, which is portrait-only and returns HTTP 422 on
  landscape or square ratios ([generation guide](../../sources/lumalabs.ai/luma-agents-api-image-generation/2026-10-26.md)).
- **Reference-guided generation** with up to **9** reference images, each a public URL, base64 with
  `media_type`, or a Files-API `file_id`; max 50 MB and 8000 px per side. Luma states plainly that
  `image_ref` is *not* editing: "none of the input pixels are preserved"
  ([generation guide](../../sources/lumalabs.ai/luma-agents-api-image-generation/2026-10-26.md)).
- **Instruction editing** via `type: "image_edit"` with a `source` (URL, base64, `file_id`, or a
  prior `generation_id` for chained edits) and up to **8** extra references, the source occupying
  one slot ([editing guide](../../sources/lumalabs.ai/luma-agents-api-image-editing/2026-10-26.md)).
- **Layering** (`type: "layering"`): decomposes a source into up to 10 ordered RGBA PNGs
  front-to-back, completing occluded regions, with `layer.bounds` geometry; a vision pass plans the
  split before any layer is rendered
  ([layering](../../sources/lumalabs.ai/luma-agents-api-image-layering/2026-10-26.md)).
- **Web-search grounding:** `web_search: true` (Luma) / `enable_web_search` (fal) makes the model
  consult the web for visual references before generating — aimed at landmarks, products and other
  real-world subjects ([generation guide](../../sources/lumalabs.ai/luma-agents-api-image-generation/2026-10-26.md),
  [fal](../../sources/fal.ai/luma-uni-1/2026-10-26.md)).
- **Multi-panel / temporal sequences.** Luma claims consistent multi-panel storyboard output and
  "consistency across time"; its technical report demonstrates a six-frame storyboard generated
  frame by frame ([report](../../sources/lumalabs.ai/uni-1-tech-specs/2026-10-26.md),
  [product FAQ](../../sources/lumalabs.ai/uni-1/2026-10-26.md)).
- **Agent capability.** Uni-1 is the model under **Luma Agents**, the March 2026 platform that
  plans and coordinates text, image, video and audio work and self-critiques its output; the fal
  endpoint namespace `luma/agent/...` mirrors that API
  ([TechCrunch](../../sources/techcrunch.com/luma-uni-1-launch/2026-10-26.md),
  [fal](../../sources/fal.ai/luma-uni-1/2026-10-26.md)). The *model* itself is not an agent: the
  API is a single request/response generation job, and agentic behaviour lives in the platform
  around it.
- **Marketing claims, labelled as such:** "best-in-class" at cinematic generation, manga/webtoon,
  style transfer, style reference and novel view synthesis
  ([product FAQ](../../sources/lumalabs.ai/uni-1/2026-10-26.md)); state of the art on RISEBench and
  strong ODinW-13 detection, with **no numbers published**
  ([report](../../sources/lumalabs.ai/uni-1-tech-specs/2026-10-26.md)); "~31 seconds per image"
  ([post](../../sources/lumalabs.ai/uni-1-1-api/2026-10-26.md)) against the FAQ's "typically 30–60
  seconds" ([FAQ](../../sources/lumalabs.ai/luma-agents-api-faq/2026-10-26.md)).

## Limitations and constraints

- **No seed, no negative prompt, no sampling controls.** Luma states reproducibility is not
  possible: "Each generation uses a different random seed and there is no public `seed` parameter";
  style consistency must be steered with reference images
  ([FAQ](../../sources/lumalabs.ai/luma-agents-api-faq/2026-10-26.md)).
- **Resolution is not selectable.** "For `type: "image"`, the model picks the resolution based on
  the chosen aspect ratio — there is no `1K/2K/4K` selector"; edits preserve the source's
  dimensions and silently ignore `aspect_ratio`
  ([FAQ](../../sources/lumalabs.ai/luma-agents-api-faq/2026-10-26.md),
  [editing](../../sources/lumalabs.ai/luma-agents-api-image-editing/2026-10-26.md)). Pricing pages
  say all image requests output at 2048px; the pixel dimensions per aspect ratio are never stated,
  so the two statements are consistent only in the loose sense of "about 2K".
- **English-optimised.** "Other languages may work to varying degrees, but results are less
  reliable" ([FAQ](../../sources/lumalabs.ai/luma-agents-api-faq/2026-10-26.md)) — in tension with
  the marketing claim of "native multilingual rendering across non-Latin scripts" for Uni-1.1
  ([post](../../sources/lumalabs.ai/uni-1-1-api/2026-10-26.md)).
- **Moderation cannot be disabled** on Luma's own API. It runs on prompts, sources, references and
  outputs, and Luma documents its own false-positive triggers: named public figures, dual-meaning
  words, and reference images of real people
  ([FAQ](../../sources/lumalabs.ai/luma-agents-api-faq/2026-10-26.md)). fal, by contrast, exposes
  `enable_safety_checker`, which "authorized callers may set false to request relaxed screening"
  ([fal](../../sources/fal.ai/luma-uni-1/2026-10-26.md)) — so refusal behaviour is platform-specific.
- **Input limits:** prompt 1–6,000 characters; references 50 MB / 8000 px per side; 9 references for
  generation, 8 for editing; `source.generation_id` and `file_id` bypass the upload caps
  ([generation](../../sources/lumalabs.ai/luma-agents-api-image-generation/2026-10-26.md),
  [editing](../../sources/lumalabs.ai/luma-agents-api-image-editing/2026-10-26.md)).
- **Async with ephemeral output:** submit, poll, download; presigned URLs expire after 1 hour
  ([models doc](../../sources/lumalabs.ai/luma-agents-api-models/2026-10-26.md)). One image per
  request; multi-output is listed as future work
  ([product FAQ](../../sources/lumalabs.ai/uni-1/2026-10-26.md)).
- **No public weights.** No Luma organization or Uni-1 repository on Hugging Face, and AA records
  `openWeightsUrl: null` ([negative record](../../sources/huggingface.co/luma-uni-1-weights-search/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/luma-uni-1/2026-10-26.md)).
- **Host gap:** no Replicate endpoint (checked 2026-10-26).

## Access, pricing, licensing

List prices, first-party ([API page](../../sources/lumalabs.ai/luma-api-overview/2026-10-26.md)):

| Task (2048px) | Uni-1.1 | Uni-1.1 Max |
| --- | --- | --- |
| Text to image | $0.0404 | $0.1000 |
| Image edit | $0.0434 | $0.1030 |
| 2 image references | $0.0464 | $0.1060 |
| 8 image references | $0.0644 | $0.1240 |

The API reference bills in **credits**, not dollars: 14 credits for a `uni-1` text-to-image, 15 for
an edit, +1 per additional reference, and 34/35 for `uni-1-max`, all at 2048px
([pricing](../../sources/lumalabs.ai/luma-agents-api-pricing/2026-10-26.md)). Provisioned
Throughput is $3,800/unit/month at a one-month commitment, quoted as an "effective per-image cost" of
$0.088 (`uni-1`) and $0.220 (`uni-1-max`), with 1 unit = 1 RPM on `uni-1` and 0.4 RPM on
`uni-1-max`, minimum 8 units. **The no-train guarantee is attached to Provisioned Throughput**; the
pay-as-you-go path defers data handling to the ToS and privacy policy
([pricing](../../sources/lumalabs.ai/luma-agents-api-pricing/2026-10-26.md),
[FAQ](../../sources/lumalabs.ai/luma-agents-api-faq/2026-10-26.md)).

fal is ~4% above Luma's list and charges per input image as well as per output: $0.042 per
generated image, $0.042 + $0.003 per reference or source image on edits ($0.045 with one source),
$0.102 for Max generation, $0.105 for Max edits ([fal](../../sources/fal.ai/luma-uni-1/2026-10-26.md)).
AA's price column ($40.4 and $100 per 1k) reproduces Luma's list prices, not fal's
([AA](../../sources/artificialanalysis.ai/luma-uni-1/2026-10-26.md)).

An older token-based schedule still published on Luma's product page — $45.45 per 1M output-image
tokens, "equivalent" $0.0909 per 2048px text-to-image — is roughly 2.2× the current list price and is
unlabelled as to version; the same page still advertises an API waitlist that no longer exists
([product page](../../sources/lumalabs.ai/uni-1/2026-10-26.md)). Treat it as stale or superseded, not
as a current rate.

**Licensing.** Luma grants commercial rights only by reference: "Ownership and licensing are governed
by Luma's Terms of Service, which covers commercial-use rights"
([FAQ](../../sources/lumalabs.ai/luma-agents-api-faq/2026-10-26.md)); the ToS itself was not
captured. fal marks the endpoints `license_type: "commercial"` and shows a "Commercial use" badge,
which is fal's statement about use through fal, not a Luma weights licence
([fal](../../sources/fal.ai/luma-uni-1/2026-10-26.md)). There is no weights licence because there are
no weights.

## Unresolved questions

1. Is `uni-1` today the March Uni-1 checkpoint or a Uni-1.1 checkpoint? Luma's marketing and its API
   docs use different names and neither reconciles them.
2. Does the original March Uni-1 remain reachable anywhere, or was it replaced in place?
3. Which arena produced the "#1 Human Preference Elo" claim, on what date and sample size, and does
   it include reference-based generation (a category AA's two boards do not show)?
4. How much of AA's 230-Elo T2I gap to the leader is model quality versus prompt/scaffold fit? AA's
   harness and Luma's default prompt handling (no seed, no negative prompt) were not compared.
5. Is fal a re-deployment or a proxy of Luma's API, and does it serve the same checkpoint?
6. How far can `source.generation_id` edit chains run before identity or composition drifts?
7. How is `type: "layering"` billed? It has no row in either pricing table.
8. Do the other named partners (Envato, Comfy, Runware, Flora, Krea, Magnific, LovArt) actually
   serve Uni-1 today, and at what price?

## Evidence status

Evidence floor: **met**. First-party: Luma's product page, technical report, Uni-1.1 announcement,
API overview page, and five Luma Agents API documentation pages, all captured 2026-10-26. Independent:
a host record (fal, four endpoints with schemas and pricing), an independent blind-preference
benchmark (Artificial Analysis, two boards), a dated trade-press launch report (TechCrunch), and two
negative records (Replicate listing, Hugging Face weights search).

**No direct tests were run for this page.** Every capability statement above is vendor or host
documentation; the Elo figures are AA's, captured on 2026-10-26 from a live board with no snapshot
date. The obvious next evidence would be a small fixed prompt set run against `uni-1`,
`uni-1-max` and the fal `edit` endpoint on the same day, covering: multi-reference identity
consistency, chained-edit drift, dense text rendering, web-search grounding accuracy on a named
landmark, and refusal behaviour for a public-figure prompt across first-party and fal.

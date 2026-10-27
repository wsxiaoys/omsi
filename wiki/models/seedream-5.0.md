# Seedream 5.0 Pro

ByteDance's flagship image model, launched **2026-07-08** (Beijing time; the launch post's
timestamp is 2026-07-07 16:00 UTC) as the production tier of the Seedream 5.0 generation
([launch blog](../../sources/bytedance.com/seedream-5-pro-launch-blog/2026-10-26.md)). It does
text-to-image, reference-guided generation, coordinate- and annotation-driven local editing, and
decomposition of a single image into editable layers. It is hosted-only: no weights release exists,
so the only ways to run it are ByteDance's own Ark/BytePlus APIs, first-party consumer apps, and
third-party hosts such as fal and Replicate.

The roster slot for this page is labelled "Seedream 5.0". That is the **family** label; the full
tier's first-party name is **Seedream 5.0 Pro**, and no bare "Seedream 5.0" model or page exists.
The filename is kept for continuity with the roster.

## Identity

- Canonical name: **Seedream 5.0 Pro** — the page title on ByteDance Seed's own site
  ([product page](../../sources/bytedance.com/seedream-5-pro-model-page/2026-10-26.md)).
- First-party model IDs, one per region:
  - China / Volcengine Ark: `doubao-seedream-5-0-pro-260628`
    ([model list](../../sources/volcengine.com/seedream-5-pro-model-list/2026-10-26.md))
  - International / BytePlus ModelArk: `dola-seedream-5-0-pro-260628`
    ([BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md))
- Names and aliases seen in first-party material: "Seedream 5.0 Pro" (Seed site), "Doubao Seedream
  5.0 pro" (Ark, China), "Dola Seedream 5.0 pro" / "Dola Seedream 5.0 Pro" (BytePlus), "Seedream
  5.0 Pro API" (fal's page title), "Seedream 5" (fal's family label). "Seedream 5.0" alone is the
  generation label used for the family, not a model ID.
- Release date: **2026-07-08** Beijing time. Three independent markers agree: the launch post's
  `PublishDate` metadata is 2026-07-07T16:00Z; fal created both Pro endpoints on 2026-07-07T20:08Z
  and published them 2026-07-08T13:18Z
  ([fal endpoints](../../sources/fal.ai/seedream-5-pro-endpoints/2026-10-26.md)); Replicate reports
  its model as "3 months, 2 weeks ago" at capture
  ([Replicate](../../sources/replicate.com/seedream-5-pro/2026-10-26.md)). The `260628` in the model
  ID is a **snapshot** date (2026-06-28), ten days before launch — ByteDance's `YYMMDD` suffix is
  not the release date; `doubao-seedream-4-0-250828` for example appears on fal as
  `fal-ai/bytedance/seedream/v4/*` created 2025-09-09, eleven days after its snapshot date
  ([fal endpoints](../../sources/fal.ai/seedream-5-pro-endpoints/2026-10-26.md)).
- Host endpoints:
  - fal: `bytedance/seedream/v5/pro/text-to-image`, `bytedance/seedream/v5/pro/edit`, and
    `bytedance/seedream/v5/pro/layerize` (added 2026-08-06).
  - Replicate: `bytedance/seedream-5-pro` (text-to-image with references; an `/edit` page exists
    behind a sign-in wall).
- Siblings, each a separate model: **[Seedream 5.0 Lite](seedream-5.0-lite.md)** (`-260128` on Ark,
  where it is marked for retirement; the older, cheaper tier — its own page, no findings transfer
  in either direction), **Seedream 5.0 Flash** (`-260915`, on both Ark and fal, not in the roster),
  and the previous generation Seedream 4.5 (`-251128`) and 4.0 (`-250828`), both also marked for
  retirement on Ark.

### Identity ambiguity worth tracking

**The lead URL is a soft 404.** `https://seed.bytedance.com/en/seedream5` returns HTTP 200 with no
content: the catch-all route renders, the `<title>` stays the site default, and the body is an empty
root div. The site's `sitemap.xml` lists only `seedream-5-0-pro` and `seedream-5-0-lite`
([product page record](../../sources/bytedance.com/seedream-5-pro-model-page/2026-10-26.md)). A
200 status on that URL is not evidence that a page exists.

**"Seedream 5.0" is not a model.** Ark carries three 5.0 tiers with three distinct IDs (pro, flash,
lite) and no unsuffixed one; fal's catalogue likewise has no bare `bytedance/seedream/v5` entry —
that path and `.../v5/pro` both return `Endpoint(s) not found` from fal's metadata API
([fal endpoints](../../sources/fal.ai/seedream-5-pro-endpoints/2026-10-26.md)). Replicate has no
`bytedance/seedream-5` slug (404); the correct one is `bytedance/seedream-5-pro`
([Replicate](../../sources/replicate.com/seedream-5-pro/2026-10-26.md)).

**The tiers differ in shape, not just in quality.** Pro and Flash support layer decomposition,
transparent-background output and (Pro only) a fast prompt-optimization mode. Lite, 4.5 and 4.0
support group-image generation, streaming output and web search, and accept 14 reference images
against Pro's 10. These are different parameter surfaces on the same API, not one model at two price
points. Pro is the only tier with both layer decomposition and the fast prompt mode.

## Current assessment

Seedream 5.0 Pro is a production-layout model more than a general-purpose image generator. ByteDance
sells it on four things — dense infographics, interactive precision editing, photographic realism,
and multilingual text — and the API surface matches the first two: the model accepts coordinates and
sketch annotations as first-class input, and can return a layered, alpha-channel decomposition of an
image rather than a flat bitmap
([launch blog](../../sources/bytedance.com/seedream-5-pro-launch-blog/2026-10-26.md),
[BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md)).

The unusual thing about it is that layer separation is *hosted*, not a separate utility model: you
ask for `layer_decomposition: true` and get one base image plus up to 16 PNG layers, each with a
bounding box, stacking index, name and description
([Volcengine API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
fal exposes the same capability as its own endpoint (`.../pro/layerize`, "2 to 17 layers per call").

What is missing is any measurement. **ByteDance publishes no benchmark, no tech report, and no
comparison against Seedream 4.x** — the product page's `seedreamPerformance` route-data field is an
empty array, and `full_tech_report_src` is an empty string
([product page](../../sources/bytedance.com/seedream-5-pro-model-page/2026-10-26.md)). No host or
third party in this capture set has measured it either. Every quality claim below is therefore a
vendor claim.

## Documented capabilities

All of the following is vendor or host documentation. None of it is an independent test.

- **Text-to-image and image-to-image in one endpoint.** Text prompt alone, or 1–10 reference images
  plus a prompt, generating a single image
  ([Volcengine API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
  The 10-reference ceiling is stated identically by ByteDance and by fal's edit endpoint
  description, and Replicate's README repeats it — three-way agreement, though all three are
  describing the same upstream API.
- **Interactive precision editing.** ByteDance: "translates coordinate information provided by users
  through point selection, lasso selection, box selection, and doodling into deterministic, local
  editing instructions"
  ([launch blog](../../sources/bytedance.com/seedream-5-pro-launch-blog/2026-10-26.md)). The API
  documents `<point>` and `<bbox>` tags in the prompt plus freeform markings on the reference image
  ([BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md)).
- **Layer decomposition.** One base image plus up to 16 independently editable layers, each a PNG
  with an alpha channel, returned with `z_index` (base fixed at 0), `bounding_box` in both absolute
  pixels and normalized coordinates, `name` and `description`. Regions hidden by the extracted
  subject are inpainted so the base stays complete
  ([BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md),
  [launch blog](../../sources/bytedance.com/seedream-5-pro-launch-blog/2026-10-26.md)). Only one
  input image is accepted in this mode.
- **Transparent-background output.** `background: transparent`, image-to-image only, exactly one
  input image, and the input must already have an alpha channel
  ([Volcengine API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
- **Resolution.** Two mutually exclusive methods: pick a tier (`1K`, `1.5K`, `2K`, default `2K`) and
  describe the shape in the prompt, or give explicit pixels within a total of 921,600–4,624,220 px
  and an aspect ratio of 1/16–16. The documented 2K mapping reaches 2048×2048 at 1:1, 2848×1600 at
  16:9 and 3136×1344 at 21:9
  ([Volcengine API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
  fal's schema carries the identical pixel and aspect-ratio bounds, which is consistent with fal
  proxying the first-party API rather than re-implementing it
  ([fal endpoints](../../sources/fal.ai/seedream-5-pro-endpoints/2026-10-26.md)).
- **Prompt-optimization speed mode.** `optimize_prompt_options.mode: standard` (default, higher
  quality) or `fast` (faster, slightly lower quality). **`fast` is Pro-only**; ByteDance states
  flash, lite and 4.5 do not support it
  ([BytePlus tutorial](../../sources/byteplus.com/seedream-5-pro-tutorial/2026-10-26.md)).
  fal exposes the same switch as `enhance_prompt_mode`.
- **Color and material control.** Hex codes in the prompt or an external color swatch as a
  reference image, combined with material replacement
  ([launch blog](../../sources/bytedance.com/seedream-5-pro-launch-blog/2026-10-26.md)).
- **Multilingual prompting and text rendering.** Chinese and English on all Seedream models; Pro
  and Flash add Russian, Arabic, Filipino, Thai, Turkish, Korean, Malay, Spanish, Portuguese,
  Indonesian, French, German, Vietnamese and Japanese — **14 languages beyond Chinese and English**
  ([Volcengine API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
  ByteDance's own marketing says "over ten" and its capability block says "a dozen"; fal says
  "native text in 14 languages". Those three counts are not the same claim — see the contradiction
  note below.
- **Dense text and layout.** Marketing claims for infographics, storyboards, UI mockups and
  multi-language posters, illustrated with prompts and outputs on the product page
  ([product page](../../sources/bytedance.com/seedream-5-pro-model-page/2026-10-26.md)). No
  legibility or accuracy metric is given anywhere.
- **Photographic realism.** Marketing claim about lighting, materials and skin texture, including
  panning-shot motion blur and multi-image portrait compositing
  ([launch blog](../../sources/bytedance.com/seedream-5-pro-launch-blog/2026-10-26.md)).

### Claims that do not line up

- **Language count.** "Over ten" (launch blog, fal landing page), "a dozen" (product page capability
  block), "14 languages" (fal endpoint description), "14 additional languages" (Ark API doc). The
  Ark list is the only enumeration and it names 14 beyond zh/en, i.e. 16 total. fal's "14 languages"
  most likely counts the same 14 additions but reads as a total. Unresolved; do not quote any of
  these figures without the enumeration.
- **Layer count.** ByteDance: "one base image and up to 16 independent layers". fal's layerize
  description: "returning 2 to 17 layers per call". Consistent only if fal counts the base image as
  a layer; neither side says so.
- **Resolution ceiling.** fal's FAQ says "up to 2048x2048". That is the 1:1 maximum only — the same
  tier reaches 2848×1600 and 3136×1344 at wide ratios, and fal's own schema allows 4,624,220 total
  pixels. Replicate phrases it correctly ("up to 2048x2048, or wider for cinematic ratios").
- **Watermark default.** `true` on Ark, `false` on fal. Same model, opposite default; a pipeline that
  relies on either default will behave differently across hosts.

## Limitations and constraints

- **No group generation, no web search, no streaming.** ByteDance states this directly for Pro and
  Flash: "暂不支持组图生成、联网搜索、流式输出"
  ([Volcengine API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
  The same page documents `sequential_image_generation`, `stream` and `tools`/`web_search` as
  parameters supported only by Lite, 4.5 and 4.0. If you need a related set of images, a streamed
  response, or web-grounded content, this model is the wrong tier.
- **Fewer reference images than its own cheaper siblings.** 10 for Pro and Flash, 14 for Lite, 4.5
  and 4.0 ([Volcengine API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
- **Layer decomposition is all-or-nothing.** "If any layer fails to generate, the whole request
  errors; partial success is not supported", and asking for more layers than the limit "may lose
  some layer information"
  ([Volcengine API](../../sources/volcengine.com/seedream-5-image-generation-api/2026-10-26.md)).
  It also accepts exactly one input image.
- **No sampling controls.** Neither the Ark parameter list nor fal's text-to-image schema exposes
  `seed`, `steps` or `guidance`. There is no documented way to reproduce a generation exactly.
- **No documented thinking mode.** ByteDance describes the model as having "advanced reasoning" and
  "deep-thinking prompt understanding", but the only related parameter is prompt optimization
  (`standard`/`fast`). Nothing in the first-party documentation describes an inference-time
  reasoning step, a thinking budget, or reasoning output. Treat "reasoning" as a positioning word
  until something documents it.
- **Vendor-admitted weak spots.** "There is still room to improve in finer-grained text rendering and
  pixel-level editing consistency"
  ([launch blog](../../sources/bytedance.com/seedream-5-pro-launch-blog/2026-10-26.md)). This is the
  only first-party statement of limitation, and it is unquantified — notably it concedes the two
  things the model is sold on.
- **Moderation is present but its policy is not published.** Ark does not bill images that fail
  moderation; fal's safety checker defaults on and can only be disabled by authorized accounts. No
  captured page states what is refused. A refusal on one host is not evidence about the model's
  general willingness.
- **Closed weights.** See the licensing section.
- **Latency and throughput are undocumented.** The only published capacity figure is a 500 IPM rate
  limit on Ark ([model list](../../sources/volcengine.com/seedream-5-pro-model-list/2026-10-26.md)).

## Access, pricing, licensing

- **Volcengine Ark (China), CNY.** Output images are priced by scenario and by a 2.61-megapixel
  threshold: **CNY 0.30** per image at or below 2.61 MP and **CNY 0.60** above it; layer
  decomposition is **CNY 0.15 / 0.30** per layer at the same threshold and is billed per layer.
  Input images are free for the first and **CNY 0.02** each thereafter
  ([pricing](../../sources/volcengine.com/seedream-5-pro-pricing/2026-10-26.md)). Because the
  documented 1K outputs sit below 2.61 MP and the 2K outputs above it, this is effectively a two-step
  per-image price, with 1.5K billed at the 1K rate.
- **BytePlus ModelArk (international).** USD pricing was not captured in any first-party record.
  This is a gap, not a "no price" finding.
- **fal.** "From **$0.0675 / image**" on the family landing page, with no stated conditions
  ([fal landing page](../../sources/fal.ai/seedream-5-pro-landing-page/2026-10-26.md)). The
  per-endpoint price schedule is behind an authenticated API and was not captured.
- **Replicate.** **$0.045** per output image at 1K and **$0.09** at 2K
  ([Replicate](../../sources/replicate.com/seedream-5-pro/2026-10-26.md)).
- **Consumer surfaces.** Dreamina (international) and Jimeng (China) via the product page's "Try
  now" button; a side-by-side arena at `aigcarena.com`.
- **Weights are not public.** No first-party page captured here links to weights or a licence for
  them, the product page's tech-report field is empty, and a query of the Hugging Face model index
  on 2026-10-26 returned no ByteDance Seedream repository — only three unrelated third-party uploads
  ([Hugging Face index](../../sources/huggingface.co/seedream-model-index/2026-10-26.md)). Seedream
  5.0 Pro is therefore API-only; there is no self-host path and no on-prem option.
- **Output licensing is only half-documented.** fal states that images generated through its API
  "can be used in commercial projects" — the host's statement about its own service. ByteDance's own
  terms for Seedream 5.0 Pro output were not captured, so the underlying grant is unverified.

## Unresolved questions

1. **How good is it?** No benchmark exists from ByteDance, and none from any host or third party in
   this capture set. There is no measured basis for comparing it with Nano Banana Pro, GPT Image 2
   or FLUX.2 [max], or for checking ByteDance's "across-the-board improvements" claim against
   Seedream 4.5.
2. **How reliable is layer decomposition?** Nothing measures how often a request returns the
   expected number of layers, how clean the inpainted background is, or what happens on complex
   images. The all-or-nothing failure mode makes this expensive to find out by trial.
3. **How stable is interactive editing?** "Pixel-level" and "deterministic" are the developer's
   words. No captured source measures edit fidelity, drift across sequential edits, or whether
   bounding-box adherence holds at high annotation counts.
4. **Which snapshot do the hosts serve?** Neither fal nor Replicate publishes a model version, so
   whether either serves `-260628` is unknown.
5. **What does the international (BytePlus) price actually look like in USD?** Only hosts' USD
   prices were captured.
6. **Is "advanced reasoning" real?** If there is an inference-time thinking step, it is not exposed
   as a parameter or described anywhere in the first-party docs.
7. **Are `dola-` and `doubao-` the same weights?** The IDs differ only in vendor prefix, and no
   captured page says whether the two regions serve byte-identical models.
8. **How good is the multilingual text, really?** The claim covers 14 languages including
   right-to-left Arabic script, but no captured source shows a failure case, a legibility
   measurement, or an independent check of the Arabic rendering.

## Evidence status

Evidence floor: **met**. One first-party publisher (ByteDance Seed: the product page and the launch
post) plus two independent host records (fal, Replicate), and three further first-party
documentation surfaces (Volcengine Ark model list, pricing and API reference; BytePlus ModelArk
tutorial). Ten records, all captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement of output quality.
Claims such as "production-grade quality", "pixel-level editing", "significantly enhancing
photographic realism" and "ready for direct use in high-density content production" are ByteDance's
or its hosts' characterizations and are recorded as such. The one first-party concession of
weakness — finer-grained text rendering and pixel-level editing consistency — is equally unmeasured.

Both hosts are `proxy` services in fal's own classification: they forward to ByteDance's API. They
are independent *records* of the endpoint, not independent *measurements* of the model, and they
restate the same upstream limits rather than testing them.

The next useful evidence would be a small reproducible test set against a named endpoint and date:
dense small-text legibility, layer-decomposition success rate and layer count on a fixed image, edit
fidelity under repeated annotation-driven edits, Arabic RTL rendering, and the same prompt run
against Seedream 4.5 for a like-for-like delta.

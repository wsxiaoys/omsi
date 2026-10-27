# Qwen Image 3

Alibaba's 3.0 generation of its Qwen image family, released as two vendor model IDs —
`qwen-image-3.0-pro` on **2026-07-20** and `qwen-image-3.0` on **2026-08-04** — each handling
text-to-image generation and instruction-based editing under the same ID
([Model Studio release list](../../sources/alibabacloud.com/qwen-image-3-release-notes/2026-10-26.md)).
It is a hosted-API model: no Qwen Image 3 weights were public on Hugging Face at capture
([negative search](../../sources/huggingface.co/qwen-image-3-weights-search/2026-10-26.md)), in
contrast to the previous generation `Qwen-Image-2.1`, which is open. Alibaba positions the pro tier
as its default recommendation for layout-heavy and text-heavy image work up to 2K
([model selection](../../sources/alibabacloud.com/qwen-image-3-model-selection/2026-10-26.md)).

## Identity

- **Canonical name:** Qwen Image 3 (family). Vendor model IDs: `qwen-image-3.0-pro` (flagship) and
  `qwen-image-3.0` (standard).
- **Vendor:** Alibaba (Qwen team), served first-party through Alibaba Cloud Model Studio
  (DashScope protocol and an OpenAI-compatible protocol)
  ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md)).
- **Aliases in use:** "Qwen-Image-3.0" (Replicate display title and fal copy), "Qwen Image 3"
  (fal, roster label), "Qwen-Image-3.0 Standard" (Alibaba's own name for `qwen-image-3.0`),
  "Qwen-Image-3.0-Pro". Alibaba never writes "Qwen Image 3" as a model ID.
- **First-party endpoints:** Model Studio, region- and workspace-scoped — Singapore
  `https://{WorkspaceId}.ap-southeast-1.maas.aliyuncs.com`, China (Beijing)
  `https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com`, plus the legacy
  `dashscope-intl.aliyuncs.com` / `dashscope.aliyuncs.com` domains
  ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md)).
- **Host endpoints:** fal `alibaba/qwen-image-3/text-to-image` and `alibaba/qwen-image-3/edit`
  ([fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md)); Replicate `alibaba/qwen-image-3`, a
  single endpoint that edits when an image is passed
  ([Replicate](../../sources/replicate.com/qwen-image-3/2026-10-26.md)).
- **Siblings and neighbours:** `qwen-image-2.1-pro`, `qwen-image-2.1-turbo`, `qwen-image-2.0` and
  its dated snapshots, and the open-weights `Qwen-Image-2.1` / `Qwen-Image-2512` line. Wan 2.7
  image (`wan2.7-image-pro`, `wan2.7-image`) and `z-image-turbo` are the same vendor's other image
  families, not Qwen Image 3 variants. Earlier Qwen Image generations are separate models;
  findings here should not be transferred to them.

### Identity ambiguity worth tracking

- **Two tiers, one page.** The pro and standard IDs differ in price by 25–60% and the vendor calls
  the standard one "a faster version", but no source quantifies a quality difference
  ([pricing](../../sources/alibabacloud.com/qwen-image-3-pricing/2026-10-26.md),
  [model selection](../../sources/alibabacloud.com/qwen-image-3-model-selection/2026-10-26.md)).
  There is no variant-specific evidence to justify separate pages, so both are documented here; the
  reader should not assume findings for one apply to the other.
- **Which tier the hosts serve is unknown.** fal never names a vendor model ID. Its per-image
  prices ($0.04 at 1K, $0.075 at 2K) match `qwen-image-3.0-pro` exactly, which is suggestive but
  not stated; Replicate charges $0.03, which matches `qwen-image-3.0` at both tiers. A working
  endpoint proves only that the host chose to serve it
  ([fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md),
  [Replicate](../../sources/replicate.com/qwen-image-3/2026-10-26.md)).
- **No launch blog post was located.** The Qwen team's legacy blog is frozen at 2025-09-23 and the
  current research index did not surface a Qwen Image 3 entry; the archive API returned empty
  results for every parameter shape tried
  ([Qwen blog search](../../sources/qwen.ai/qwen-image-3-blog-search/2026-10-26.md)). This is a
  failed search, not proof that no post exists.

## Current assessment

Qwen Image 3 is a **new model generation, not a repackaging**: new vendor IDs, a new release date,
and a capability set that Alibaba's release notes state for the 3.0 series specifically
(4,500-token prompts, 12-language text rendering, one ID for generation and editing). No 2.1-series
capability documentation was captured, so "new" here means "asserted for 3.0", not "proven absent
from 2.1". What is also *not* established is where it sits against competing image models — no
benchmark, no independent measurement, and no first-party comparison table was captured.

Within Alibaba's own catalogue the tiering is unusually explicit. `qwen-image-3.0-pro` is the
vendor's recommended default for both text-to-image and editing, but the same documentation sends
three common requests elsewhere: resolutions above 2K, exact brand-colour control, and more than
three references all go to `wan2.7-image-pro`; speed- and cost-sensitive generation with no editing
goes to `z-image-turbo`, claimed "10x faster … at about one-fifth the cost"
([model selection](../../sources/alibabacloud.com/qwen-image-3-model-selection/2026-10-26.md)).
That makes Qwen Image 3, on the captured evidence, a *layout and typography* specialist rather than
a general-purpose frontier image model.

The access picture matters as much as the capability one. The model is API-only, with prices that
vary by output resolution on the vendor side and by host, and with host interfaces that are
narrower than the vendor's: Replicate exposes one reference image and one output per call, while
the vendor documents one to three references and up to six outputs.

## Documented capabilities

All of the following are vendor or host documentation, not independent tests.

- **One model ID for generation and editing.** "Supports both text-to-image (T2I) and
  image-to-image/image editing (I2I)" — there is no separate `-edit` model ID, unlike the earlier
  `Qwen-Image-Edit-2509` / `Qwen-Image-Edit-2511` checkpoints
  ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md),
  [Hugging Face listing](../../sources/huggingface.co/qwen-image-3-weights-search/2026-10-26.md)).
- **Long prompts.** "Recommended maximum: 4,500 tokens"; fal and Alibaba both headline the 4.5K
  figure ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md),
  [fal landing page](../../sources/fal.ai/qwen-image-3-landing-page/2026-10-26.md)).
- **Text rendering.** "Precise rendering of text as small as 10px", "native rendering of 12
  languages and 20+ fonts", including text that "adapts to surfaces and perspective"
  ([release list](../../sources/alibabacloud.com/qwen-image-3-release-notes/2026-10-26.md),
  [fal landing page](../../sources/fal.ai/qwen-image-3-landing-page/2026-10-26.md)). No source
  lists which 12 languages or which fonts.
- **Multi-reference editing.** One to three input images, fused in array order; the vendor calls
  this "so you can fuse multiple references"
  ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md),
  [model selection](../../sources/alibabacloud.com/qwen-image-3-model-selection/2026-10-26.md)).
  fal's edit schema names them in-prompt as "image 1", "image 2", "image 3"
  ([fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md)).
- **Resolution.** Output total pixels 512×512 to 2048×2048, aspect ratio 1:8 to 8:1; when `size` is
  omitted "the model automatically recommends a resolution based on the prompt". Recommended 2K
  presets include 2688×1536 for 16:9, so "2K" is a resolution class, not a pixel cap
  ([text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md)).
- **Batch output.** `n` from 1 to 6 per request, on both vendor and fal endpoints
  ([text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md),
  [fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md)). Replicate exposes no `n` and returns a
  single image.
- **Negative prompts, 3.0 series only.** "Only the qwen-image-3.0 series supports this parameter" —
  the 2.1 series does not
  ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md)).
- **Prompt rewriting on by default.** `prompt_extend` defaults to true and adds "3 to 5 seconds" of
  latency; `prompt_extend_mode` selects `direct` (DPE, T2I and I2I) or `agent` (APE, T2I only —
  passing `agent` on I2I "will return a 400 error")
  ([text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md)).
- **Thinking mode on by default.** `enable_thinking` "default is `true`", requires
  `prompt_extend=true`, and "increases generation time"; not supported for I2I with the `agent`
  rewrite ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md)).
- **Seed, watermark, format.** Seed range 0–2147483647 with "relatively stable" results for a fixed
  seed; optional bottom-right "AI-generated" watermark, default off; vendor output format PNG, fal
  adds jpeg and webp
  ([text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md),
  [fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md)).
- **Two API protocols.** DashScope and OpenAI-compatible; the OpenAI-compatible mode puts all
  parameters at the top level and uses `1024x1024` rather than the DashScope `1024*1024`
  ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md)).

### Marketing claims, kept separate

- "Approaching the quality of real photography", "micro-expressions, pores, and individual strands
  of hair" ([release list](../../sources/alibabacloud.com/qwen-image-3-release-notes/2026-10-26.md)).
- "Pixel-Perfect Text", "hyperrealistic", "production-ready imagery … holding up at full resolution
  without post-processing", "no model chaining required"
  ([fal landing page](../../sources/fal.ai/qwen-image-3-landing-page/2026-10-26.md)).
- "Qwen-Image-3.0-Pro isn't just pursuing 'good looks'—it's pursuing 'usefulness'"
  ([release list](../../sources/alibabacloud.com/qwen-image-3-release-notes/2026-10-26.md)).

None of these comes with a benchmark, a test set, or a methodology. They are recorded as claims,
not findings.

## Limitations and constraints

- **2K ceiling, stated two ways.** The model-selection table gives "Max resolution 2048x2048"
  while the API reference caps **total pixels** at 2048×2048 and the text-to-image guide recommends
  2688×1536 for 16:9 — which is 2688 px wide, i.e. more than 2048 in one dimension. The total-pixel
  reading is the only one consistent with all three pages; a per-dimension reading of the table
  contradicts the vendor's own preset
  ([model selection](../../sources/alibabacloud.com/qwen-image-3-model-selection/2026-10-26.md),
  [API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md),
  [text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md)).
  Either way, Alibaba's own guidance points above-2K work at `wan2.7-image-pro` (up to 4096×4096)
  ([model selection](../../sources/alibabacloud.com/qwen-image-3-model-selection/2026-10-26.md)).
- **Three references, no masks.** The 3.0 series accepts 1–3 input images and documents no mask or
  region field; editing is instruction-based over whole images. `qwen-image-2.1-pro` accepts up to
  10 references and `wan2.7-image-pro` up to 9 with bounding-box editing
  ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md),
  [model selection](../../sources/alibabacloud.com/qwen-image-3-model-selection/2026-10-26.md)).
- **Default rewriting undercuts reproducibility.** With `prompt_extend` and `enable_thinking` both
  on by default, the executed prompt is not the prompt you sent unless you disable them; even then
  the vendor only promises "relatively stable" results for a fixed seed
  ([text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md)).
- **Input moderation.** "All `prompt` and `negative_prompt` inputs are subject to content
  moderation"; a blocked request returns `DataInspectionFailed`
  ([text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md)).
  fal layers its own checker, default on, which "requires account authorization" to disable
  ([fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md)). A refusal on one surface is therefore
  evidence about that surface, not about the model's general willingness.
- **Region coupling.** "The model, endpoint URL, and API key must belong to the same region.
  Cross-region calls fail"; Alibaba is migrating to workspace-specific domains
  ([API reference](../../sources/alibabacloud.com/qwen-image-3-api-reference/2026-10-26.md)).
- **Ephemeral output URLs.** "The API's image URLs are valid for 24 hours" — results must be copied
  to your own storage
  ([text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md)).
- **No public weights found.** Nothing named Qwen Image 3 exists under the Qwen organisation on
  Hugging Face; the latest open Qwen image checkpoint is `Qwen-Image-2.1` (2026-09-14)
  ([negative search](../../sources/huggingface.co/qwen-image-3-weights-search/2026-10-26.md)).
  ModelScope was not searched, so this is "not found", not "does not exist".
- **Host interface gaps.** Replicate offers one reference image, one output per call, nine
  aspect-ratio presets instead of a pixel `size`, and no `prompt_extend_mode` or thinking-mode
  control ([Replicate](../../sources/replicate.com/qwen-image-3/2026-10-26.md)). fal accepts
  presets or an explicit `{width,height}` and states its bound as a **total-pixel** range
  (512×512 to 2048×2048), not a per-dimension one; the vendor's 2688×1536 16:9 preset sits inside
  that total, but fal neither lists it as a preset nor documents how it bills it
  ([fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md),
  [text-to-image guide](../../sources/alibabacloud.com/qwen-image-3-text-to-image-guide/2026-10-26.md)).
- **fal's hosting description is inconsistent.** The landing page says "The API is serverless, so
  there are no GPUs to manage", while fal's catalogue marks both Qwen Image 3 endpoints
  `hostingType: "proxy"` — forwarding to Alibaba's API. fal uses `serverless` for its own Qwen
  Image 2512 deployments, so the distinction is deliberate in the catalogue
  ([fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md),
  [fal landing page](../../sources/fal.ai/qwen-image-3-landing-page/2026-10-26.md)).

## Access, pricing, licensing

**Alibaba Cloud Model Studio** (International/Singapore table), billed per image, output tier by
resolution, plus $0.003 per input image
([pricing](../../sources/alibabacloud.com/qwen-image-3-pricing/2026-10-26.md)):

| Model ID | 1K output | 2K output | Free quota |
| --- | --- | --- | --- |
| `qwen-image-3.0-pro` | $0.04/image | $0.075/image | 10 images |
| `qwen-image-3.0` | $0.03/image | $0.03/image | 10 images |

- Billing counts successfully generated images only; "Failed requests incur no cost and do not
  consume your free quota". The free quota applies only in Singapore and is valid 90 days
  ([pricing](../../sources/alibabacloud.com/qwen-image-3-pricing/2026-10-26.md)).
- Only the default region tab was captured; other regions may price differently.

**fal:** $0.04 per generated image at 1K and $0.075 at 2K, identical on both endpoints
([fal](../../sources/fal.ai/qwen-image-3/2026-10-26.md)). fal's landing page instead says "Both
endpoints are pay-per-image at $0.075" and repeats $0.075 in its FAQ
([fal landing page](../../sources/fal.ai/qwen-image-3-landing-page/2026-10-26.md)). **Unresolved:**
the landing page quotes 87% more than the catalogue for a 1K request; the catalogue figure is the
more specific and matches the vendor's pro-tier schedule.

**Replicate:** $0.03 per output image, "or around 33 images for $1"
([Replicate](../../sources/replicate.com/qwen-image-3/2026-10-26.md)). This is the cheapest captured
surface, and it is level with Alibaba's own `qwen-image-3.0` price rather than the pro price.

**Licensing.** No model licence was captured on any surface, because no weights are published and
the API references state no licence. On outputs: fal states "Images generated through the fal.ai
API can be used in commercial projects" subject to its terms of service
([fal landing page](../../sources/fal.ai/qwen-image-3-landing-page/2026-10-26.md)); Replicate
carries a "Commercial use" badge — "Outputs from this model can be sold or used in paid products" —
anchored to Alibaba's Model Studio documentation
([Replicate](../../sources/replicate.com/qwen-image-3/2026-10-26.md)). Both are host statements;
Alibaba's own output-licence terms were not captured.

## Unresolved questions

1. Which vendor tier does each host serve — `qwen-image-3.0-pro` or `qwen-image-3.0`? fal's prices
   and Replicate's price point in opposite directions.
2. How large is the quality gap between pro and standard? The vendor calls standard "faster" and
   charges up to 60% less at 2K, but publishes no comparison.
3. Does fal bill $0.04 or $0.075 for a 1K request, and what counts as 1K when the vendor's own 16:9
   preset is 2688×1536?
4. Will weights ship? The previous generation is open (`Qwen-Image-2.1`) and the release index is
   tagged "Open-Source" for that model but nothing for Image 3; ModelScope was not searched.
5. How good is the typography in practice, at what text density does it break, and how does it
   compare with other typography-first models such as [Ideogram 4.5](ideogram-4.5.md) or
   [FLUX.2 \[pro\]](flux-2-pro.md)? No comparison data was captured.
6. Which 12 languages and 20+ fonts are supported? No source enumerates them.
7. Does Replicate's one-reference limit reflect the model or only its wrapper?
8. What does thinking mode cost in latency, and does it change output at all?

## Evidence status

Everything above comes from vendor and host documentation captured on 2026-10-26. **No direct tests
have been run for this page.** No benchmark score, latency measurement, or side-by-side image
comparison was captured, so the capability section records what Alibaba and its hosts say the model
does, not what it has been shown to do.

Evidence floor: met. First-party sources are five records from Alibaba Cloud Model Studio (release
list, model selection, pricing, API reference, text-to-image guide). Independent host records are
fal (two records: catalogue/schemas and landing page) and Replicate. Two negative-search records
(Qwen blog, Hugging Face weights) are recorded as failed searches, not as findings of absence.

The next useful evidence would be a small reproducible test set run against a named endpoint and
date: dense small-text posters in several scripts, a 3-reference identity-preserving edit, an edit
chain to observe drift, and a like-for-like price check at 1K and 2K across the vendor API, fal, and
Replicate.

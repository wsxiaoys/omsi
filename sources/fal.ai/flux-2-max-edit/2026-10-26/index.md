# fal.ai: FLUX.2 [max] edit endpoint

- Origin: fal.ai, "Flux 2 Max (Edit Image) API on fal", https://fal.ai/models/fal-ai/flux-2-max/edit
- Evidence kind: provider documentation (third-party hosting page written by the host)
- Publication date: model metadata `publishedAt` / `date` = **2025-12-16T13:47:03.184Z**
- Capture date: 2026-10-26
- Relevant models: FLUX.2 [max] (fal endpoint `fal-ai/flux-2-max/edit`)

Artifact: [`openapi-queue.json`](openapi-queue.json) — the endpoint's published queue OpenAPI
document, `https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=fal-ai/flux-2-max/edit`.

## Captured content

Metadata (verbatim field values): `title` "Flux 2 Max", `category` `image-to-image`, `modelLab`
"Black Forest Labs", `modelFamily` "Flux 2 Max", `hostingType` `proxy`, `licenseType`
`commercial`, `publishedAt` 2025-12-16T13:47:03.184Z. The OpenAPI `x-fal-metadata` block names
the operation "Edit Image".

Pricing (verbatim, `pricingInfoOverride`):

> The first processed megapixel will cost **$0.07**. Each additional megapixel will cost
> **$0.03**. Input images counted as processed megapixel.

Billing record (verbatim): `billing_unit` `processed megapixels`, `price` `0.07`,
`provider_type` `partner`, `is_partner_api` `true`.

### Input schema (from the artifact, verbatim descriptions)

| Field | Type / constraint | Description |
| --- | --- | --- |
| `prompt` | string, required | "The prompt to generate an image from." |
| `image_urls` | array of string, **required** | "List of URLs of input images for editing" |
| `image_size` | `auto` (default), preset enum, or `{width,height}` | "The size of the generated image. If `auto`, the size will be determined by the model." |
| `seed` | integer, nullable | "The seed to use for the generation." |
| `safety_tolerance` | string, default `"2"` | "1 being the most strict and 5 being the most permissive." |
| `enable_safety_checker` | boolean, default `true` | as on the text-to-image endpoint |
| `output_format` | string, default `jpeg` | "The format of the generated image." |
| `sync_mode` | boolean, default `false` | data-URI response mode |

## Findings worth carrying to the model page

- **fal splits generation and editing into two endpoints** (`fal-ai/flux-2-max` and
  `fal-ai/flux-2-max/edit`) where BFL has one (`/v1/flux-2-max` accepts both). The `/edit`
  endpoint requires `image_urls`, so a pure text-to-image call is not valid on it.
- **No documented cap on `image_urls`.** The schema declares a bare string array with no
  `maxItems`, so fal documents neither BFL's eight-API-slot ceiling nor a megapixel cap.
  BFL's own pages contradict each other (8 via API vs 10), and fal does not resolve it.
- **`image_size` defaults to `auto`** here but to `landscape_4_3` on fal's text-to-image
  endpoint — the default changes the output shape for the same prompt depending on endpoint.
- Input megapixels are billed ("Input images counted as processed megapixel"), which is how
  fal reaches BFL's $0.10 edit figure without a separate edit rate.
- No prompt-upsampling control and no grounding-search control, same as the text-to-image
  endpoint.

## Gaps

- No reference-count, per-image size, or total input-megapixel limit documented.
- No `@image1`-style referencing syntax documented for this endpoint, although fal's FLUX.2
  landing page advertises `@`-syntax referencing for the family.
- No statement of which BFL snapshot is served.

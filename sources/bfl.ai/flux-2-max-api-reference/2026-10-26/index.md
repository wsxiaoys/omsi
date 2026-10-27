# BFL official: FLUX.2 [max] API reference

- Origin: Black Forest Labs, "Generate or edit an image with FLUX.2 \[max]",
  https://docs.bfl.ai/api-reference/models/generate-or-edit-an-image-with-flux2-[max]
  (documentation page; the schema it prints comes from https://api.bfl.ai/openapi.json)
- Evidence kind: official documentation (API reference)
- Publication date: not stated; the docs page is generated from the live OpenAPI document
- Capture date: 2026-10-26
- Relevant models: FLUX.2 [max] (endpoint `POST /v1/flux-2-max`)

Artifact: [`flux-2-max-openapi.json`](flux-2-max-openapi.json) — projection of
`https://api.bfl.ai/openapi.json` containing the `/v1/flux-2-max` path, the schemas it
references, and the FLUX.2 endpoint→schema map used below.

## Captured content

Page summary line (verbatim):

> Submits an image generation or editing task with FLUX.2 \[max]. Highest quality FLUX.2
> model for image generation and editing, with the strongest editing consistency and prompt
> following.

Page body (verbatim):

> Highest quality, for the hardest edits and maximum prompt following. For most use cases,
> start with FLUX.2 \[pro].

### Endpoint and contract

- `POST /v1/flux-2-max`, `operationId: generate_flux_2_max_v1_flux_2_max_post`, API-key header
  `x-key`. Asynchronous: returns `AsyncResponse` (`id`, `polling_url`, plus `cost`, `input_mp`,
  `output_mp`) or `AsyncWebhookResponse`.
- Request body schema: **`Flux2Inputs`** — the *same* component that `/v1/flux-2-pro` and
  `/v1/flux-2-pro-preview` reference. `[max]` and `[pro]` are therefore indistinguishable by
  request shape; only the endpoint path, the price, and the documented capabilities differ.
  ([`flux-2-max-openapi.json`](flux-2-max-openapi.json), `flux2_endpoint_schema_map`)

### `Flux2Inputs` fields (verbatim descriptions)

| Field | Type / range | Description |
| --- | --- | --- |
| `prompt` | string, required | "Text prompt for image generation." |
| `input_image` … `input_image_8` | string, nullable | "Path to the input image." (eight slots) |
| `disable_pup` | boolean, default `false` | "Disable automatic prompt upsampling for this request. FLUX.2 \[pro] and \[max] apply prompt upsampling by default; set this to true to generate from your prompt exactly as written." |
| `seed` | integer, nullable | "Optional seed for reproducibility." |
| `width` | integer ≥ 64, default `0` | "Width of the image" |
| `height` | integer ≥ 64, default `0` | "Height of the image" |
| `safety_tolerance` | integer 0–7, default `2` | "Harm moderation tolerance from 0 to 7, with 0 the strictest. The route and organization determine the approved maximum and per-category ceilings. Unapproved levels return 422 with approved levels." |
| `output_format` | `jpeg` \| `png` \| `webp`, default `jpeg` | — |
| `webhook_url` / `webhook_secret` | string | webhook delivery |
| `user` | string ≤ 256 | "Opaque identifier for the end user supplied by the calling platform." |

There is **no** grounding-search parameter, no steps/guidance parameter, no negative prompt,
and no reference-image weight parameter.

### Sibling endpoints present in the same OpenAPI document

`/v1/flux-2-flex` (`Flux2FlexInputs`), `/v1/flux-2-klein-4b`, `/v1/flux-2-klein-9b`,
`/v1/flux-2-klein-9b-preview` (`Flux2KleinInputs`), `/v1/flux-2-pro`,
`/v1/flux-2-pro-preview` (`Flux2Inputs`), `/v1/flux-2-max` (`Flux2Inputs`).

**There is no `flux-2-max-preview` endpoint** in the OpenAPI document, matching the overview
page's preview-endpoint table, which lists [pro] and [klein] only.

## Gaps

- No documented maximum `prompt` length in the schema, and no documented maximum on the
  `input_image_N` slots beyond the eight fields existing.
- `width`/`height` default to `0`, with only a minimum of 64 documented. Neither the schema nor
  the page states how `0` resolves, nor what the output-megapixel ceiling is; the 4MP figure
  comes from the family overview and marketing pages.
- No latency, rate-limit, or concurrency documentation on this page.
- The page does not say whether grounding search is triggered automatically, by prompt content,
  or by an undisclosed flag. No parameter for it exists, so the mechanism is opaque.
- Nothing here distinguishes [max] from [pro] at the weight level.

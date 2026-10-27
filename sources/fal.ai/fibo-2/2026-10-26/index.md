# fal.ai: Fibo 2.0 Generate and Edit endpoints (catalogue, schemas, model pages)

- Origin: fal.ai public model catalogue and endpoint schemas:
  - `GET https://fal.ai/api/models?keywords=bria` (gallery JSON, 55 items over 2 pages)
  - `GET https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=bria/fibo-2/generate`
  - `GET https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=bria/fibo-2/edit`
  - model pages `https://fal.ai/models/bria/fibo-2/generate` and `https://fal.ai/models/bria/fibo-2/edit`
- Evidence kind: provider documentation (host catalogue metadata, input/output schemas, and
  host-written model descriptions, machine-readable)
- Publication date: endpoint `date` 2026-10-19T12:39:45.491Z (generate) and
  2026-10-19T12:40:40.081Z (edit); `publishedAt` 2026-10-20T15:00:51.801Z (generate) and
  2026-10-20T15:00:44.422Z (edit). No `updated_at` field was returned for either endpoint.
- Capture date: 2026-10-26
- Relevant models: Fibo 2.0 on fal (`bria/fibo-2/generate`, `bria/fibo-2/edit`)

Artifacts beside this file: `catalogue-fibo-items.json` (the 17 Fibo-related catalogue items,
verbatim), `openapi-generate.json`, `openapi-edit.json` (full endpoint schemas).

## The roster's discovery path is a group, not an endpoint

The roster row lists `bria/fibo-2`. That string is the catalogue **group key** (`group.key:
"bria-fibo-2"`), not an endpoint. The two callable endpoints are:

| Endpoint | Title | Category | `group.label` | `date` | `publishedAt` |
| --- | --- | --- | --- | --- | --- |
| `bria/fibo-2/generate` | Fibo 2.0 Generate | text-to-image | Generate | 2026-10-19T12:39:45.491Z | 2026-10-20T15:00:51.801Z |
| `bria/fibo-2/edit` | Fibo 2.0 Edit | image-to-image | Edit | 2026-10-19T12:40:40.081Z | 2026-10-20T15:00:44.422Z |

Both are `modelLab: "Bria AI"`, `modelFamily: "Fibo"`, `discovery.version: "2.0"`,
`kind: "inference"`, `status: "public"`, `deprecated: false`, `licenseType: "commercial"`,
`hidePricing: false`. Both carry `pricingInfoOverride: "Your request will cost $0.04 per image"`.

**`hostingType` is not set for either Fibo 2 endpoint** — the field is absent (`$undefined` in
the page payload) rather than `"serverless"` or `"proxy"`. The same catalogue sets
`hostingType: "serverless"` on `bria/fibo-edit-1.5/edit` and on `bria/fibo/generate`. So fal does
not state whether it runs Fibo 2 on its own infrastructure or forwards to Bria's API. (See
**Gaps**.)

## Host-written descriptions (verbatim)

`bria/fibo-2/generate`:

> Fibo 2.0 Generate is Bria's text-to-image model, strongest on reasoning and knowledge-heavy
> prompts the ones that need real understanding, not just a style match. Trained only on licensed
> data, with clear commercial rights.

> Fibo 2.0 Generate is Bria's text-to-image model for campaign visuals, product and lifestyle
> scenes, and prompts that involve multiple subjects or spatial relationships. Bria describes its
> strengths as reasoning- and knowledge-heavy prompts and states that it is trained on licensed
> data.
>
> The endpoint accepts a free-form prompt, which is expanded into a structured prompt, or a VGL
> document used directly. The structured prompt is returned with the generated image and can be
> reused in a later request.
>
> Output is approximately one megapixel, with 21 aspect ratios from panoramic 5:1 to vertical 1:5.
> A seed controls reproducibility, and sync mode returns the image directly in the response. An
> optional image_url provides a visual reference for a prompt, or a close variation when used
> alone. It cannot be combined with vgl or style.
>
> For changes to an existing image, use Fibo 2.0 Edit.

`bria/fibo-2/edit`:

> Fibo 2.0 Edit makes targeted, instruction-based edits from up to four images. Background swaps,
> product restaging, keeping the product true to the original. Trained only on licensed data, with
> clear commercial rights.

> The endpoint accepts one to four images in image_urls: the source image first, followed by up to
> three references. Instructions can refer to them as <image_1>, <image_2>, and so on. Free-form
> instructions are expanded into a VGL document, which is returned with the edited image and can
> be reused directly.
>
> Single-image requests keep the source aspect ratio. An optional mask marks the area to
> regenerate in white and the area to preserve in black; it must match the source image size.
> Masked output retains the source dimensions and the original pixels outside the mask. Masks are
> supported only with a single image.
>
> Multi-image requests support 21 output aspect ratios at approximately one megapixel. Left unset,
> the output keeps the first image's aspect ratio. A seed controls reproducibility, and sync mode
> returns the image directly in the response.

Note the naming: fal titles both endpoints "Fibo **2.0**", while Bria's own docs and release page
say "Fibo 2" (see the bria.ai records).

## Input schema: `bria/fibo-2/generate` (`Fibo2GenerateInput`)

`x-fal-order-properties`: `prompt`, `style`, `image_url`, `vgl`, `seed`, `aspect_ratio`,
`sync_mode`. No field is required.

- `prompt` (string|null) — "What to generate, in free-form text. It is expanded into a VGL, which
  is returned. With 'vgl', the change to make to it."
- `style` (enum `Kodak Film` | `Hard Flash` | `Hazy Dreamy` | `Rough Realism` | null) — "A style
  for the generated image. Requires 'prompt'; not with 'image_url', 'vgl' or 'negative_prompt'."
  The enum values are display names; Bria's own API uses `kodak_film`, `hard_flash`,
  `hazy_dreamy`, `rough_realism`. **`negative_prompt` is named in that description but is not a
  field in the schema** — a stale reference in fal's description.
- `image_url` (string|null) — "A reference image (inspire mode). With 'prompt', VGL uses it as a
  visual reference for the prompt's scene and generates a new image of that scene, not the image.
  Alone, the VGL describes the image itself, so the result is a close variation of it. Not with
  'vgl'." One image only, matching Bria's own generate endpoint.
- `vgl` (`Vgl`|null) — "A VGL (Visual Generation Language) document: the structured JSON
  description of the scene. Alone, the model renders it as-is. With 'prompt', VGL changes it …"
- `seed` (integer, 0–2147483647) — "Random seed for reproducibility".
- `aspect_ratio` (enum, 21 values from `1:1` to `5:1`/`1:5`, default `1:1`) — "Aspect ratio of the
  image, at about one megapixel."
- `sync_mode` (boolean) — "If true, returns the image directly in the response (increases
  latency)."

Output `Fibo2GenerateOutput`: required `image` and `vgl`; plus `images`, a "Single-element list
holding the same image, as the sibling FIBO apps return." `vgl` is an object (the `Vgl` schema),
not a JSON string as on Bria's API.

The `Vgl` schema's fields are `short_description`, `objects[]`, `background_setting`, `lighting`,
`aesthetics`, `photographic_characteristics`, `style_medium`, `text_render[]`, `context`,
`artistic_style`.

## Input schema: `bria/fibo-2/edit` (`Fibo2EditInput`)

Required: `image_urls`. `x-fal-order-properties`: `image_urls`, `instruction`, `aspect_ratio`,
`seed`, `mask_url`, `sync_mode`, `vgl`.

- `image_urls` (array of string, `minItems: 1`, `maxItems: 4`) — "1-4 images to edit (files or
  URLs). The instruction refers to them as <image_1>, <image_2> and so on, in the order they are
  sent."
- `instruction` (string|null) — "The edit, in free-form text. It is expanded into a VGL, which is
  returned. With 'vgl', the change to make to it. 'prompt' is accepted as an alias."
- `vgl` (`VglEdit`|null) — "A VGL (Visual Generation Language) document. Alone, it is the edit
  as-is and must carry its 'edit_instruction'. With 'instruction', it is the first image's VGL,
  the baseline the edit is written from. Accepts what a previous request returned."
- `mask_url` (string|null) — "Mask (file or URL) marking the region to regenerate: white where the
  model should edit, black elsewhere. Single-image requests only, at that image's size. A masked
  edit comes back at the image's own size, with its own pixels outside the mask."
- `aspect_ratio` (enum, 21 values, nullable) — "Output aspect ratio, at about one megapixel. Left
  unset, the output keeps the ratio of the first image. A single image always keeps its own
  ratio."
- `seed` (integer, 0–2147483647, default `5555`).
- `sync_mode` (boolean).

Output `Fibo2EditOutput`: required `image` and `vgl`, plus `images`.

**Host gaps versus Bria's own API:** neither fal endpoint exposes Bria's `resolution` parameter
(`1MP`/`4MP`), nor the `ip_signal` and content-moderation toggles, nor `webhook_url`, nor
`output_type`. fal's generate endpoint exposes a single `image_url` where Bria's docs say
`images` "currently supports a single image" — equivalent in practice.

## Related Fibo entries in the same catalogue (identity context)

The `keywords=bria` query returned 55 items; 17 mention Fibo. Dates are fal's `date` field.

| Endpoint | Title | `date` | `publishedAt` | `hostingType` | Price |
| --- | --- | --- | --- | --- | --- |
| `bria/fibo/generate` | Fibo | 2025-10-29 | 2025-10-29 | serverless | — |
| `bria/fibo/generate/structured_prompt` | Fibo | 2025-10-29 | 2025-10-29 | serverless | — |
| `bria/fibo-lite/generate` | Fibo Lite | 2025-12-16 | 2025-12-16 | serverless | — |
| `bria/fibo-edit/edit` | Fibo Edit | 2026-01-20 | 2026-01-20 | serverless | — |
| `bria/fibo-edit/relight`, `/restore`, `/colorize`, `/reseason`, `/erase_by_text`, `/add_object_by_text` | Fibo Edit [Relight] etc. | 2026-01-20 | 2026-01-20 | serverless | — |
| `bria/fibo-gen-1.5/text-to-image` | Fibo Gen 1.5 Text to Image | 2026-08-18 | 2026-08-24 | serverless | — |
| `bria/fibo-edit-1.5/edit` | Fibo Edit 1.5 Image Editing | 2026-08-18 | 2026-08-26 | serverless | — |
| `bria/fibo-edit-1.5/virtual-try-on`, `/product-holding` | Bria Virtual Try-On (FIBO-Edit-1.5) etc. | 2026-09-17 | 2026-09-17 | — | $0.04/image |
| `bria/fibo-edit-1.5/expand` | Bria Expand (FIBO-Edit-1.5) | 2026-10-10 | 2026-10-14 | — | $0.04/image |
| `bria/fibo-2/generate`, `bria/fibo-2/edit` | Fibo 2.0 Generate / Edit | 2026-10-19 | 2026-10-20 | — | $0.04/image |

Two things follow. First, Fibo 2 is a **new family generation**, not a new endpoint on an existing
one: fal keeps the 1.x endpoints live alongside it. Second, fal's own labels are inconsistent
about version punctuation — "Fibo 2.0" for the new pair, "Fibo Gen 1.5"/"Fibo Edit 1.5" for the
previous pair, "FIBO-Edit-1.5" in the product endpoints' titles.

The catalogue also lists BRIA's non-Fibo lines under the same lab: `Bria Text-to-Image Base`
(proxy, 2024-12-19), `Bria RMBG 2.0` (proxy, 2024-12-19), `Bria's VRMBG 3.0` (serverless,
2026-06-08), plus eraser/genfill/expand/product-shot and video endpoints. Those are separate
BRIA models, not Fibo 2 tiers.

## Gaps

- `hostingType` absent for both Fibo 2 endpoints: whether fal runs the weights or proxies Bria is
  not stated in the catalogue payload.
- No `updated_at`/revision field for either endpoint, so the served checkpoint cannot be pinned.
- fal does not document the VLM used for prompt→VGL expansion on its side; Bria's own docs name a
  Gemini 2.5 Flash bridge for its standard pipeline.
- No latency, throughput, or quality measurements appear on these pages; the descriptions are
  host copy restating Bria's positioning.

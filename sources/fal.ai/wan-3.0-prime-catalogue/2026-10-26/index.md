# fal.ai: Wan 3.0 Prime and Wan 3.0 endpoints (catalogue, schemas, prices)

- Origin: fal.ai public model catalogue and endpoint schemas:
  - `GET https://fal.ai/api/models?keywords=wan-3.0` (gallery JSON, 6 items, `total: 6`)
  - `GET https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=alibaba/wan-3.0-prime/{text-to-video,image-to-video,reference-to-video}`
  - `GET https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=alibaba/wan-3.0/{text-to-video,image-to-video,reference-to-video}`
- Evidence kind: provider documentation (host catalogue metadata, input/output schemas, host-written
  model descriptions and price strings, machine-readable)
- Publication date: Wan 3.0 endpoints `publishedAt` 2026-08-24T03:15:09Z–03:15:20Z (endpoint `date`
  2026-08-03T22:57:05Z–23:59:45Z); Wan 3.0 Prime endpoints `publishedAt`
  2026-08-24T06:03:16Z–06:03:26Z (endpoint `date` 2026-08-24T04:26:21Z–04:43:49Z)
- Capture date: 2026-10-26
- Relevant models: `alibaba/wan-3.0-prime/*` (primary), `alibaba/wan-3.0/*` (comparison)

Artifacts beside this file: `catalogue-wan30-items.json` (the six catalogue items verbatim),
`alibaba-wan-3.0-prime-*.openapi.json` and `alibaba-wan-3.0-*.openapi.json` (full endpoint schemas).

## Endpoints

| Endpoint | Title | Category | `group.key` | `date` | `publishedAt` |
| --- | --- | --- | --- | --- | --- |
| `alibaba/wan-3.0-prime/text-to-video` | Wan 3.0 Prime | text-to-video | `Wan30prime` | 2026-08-24T04:26:21.187Z | 2026-08-24T06:03:26.646Z |
| `alibaba/wan-3.0-prime/image-to-video` | Wan 3.0 Prime | image-to-video | `Wan30prime` | 2026-08-24T04:37:45.099Z | 2026-08-24T06:03:16.474Z |
| `alibaba/wan-3.0-prime/reference-to-video` | Wan 3.0 Prime | video-to-video | `Wan30prime` | 2026-08-24T04:43:49.156Z | 2026-08-24T06:03:21.673Z |
| `alibaba/wan-3.0/text-to-video` | Wan Text to Video | text-to-video | `Wan30` | 2026-08-03T22:57:05.176Z | 2026-08-24T03:15:09.574Z |
| `alibaba/wan-3.0/image-to-video` | Wan 3.0 | image-to-video | `Wan30` | 2026-08-03T23:59:45.555Z | 2026-08-24T03:15:15.282Z |
| `alibaba/wan-3.0/reference-to-video` | Wan 3.0 | video-to-video | `Wan30` | 2026-08-03T23:56:31.060Z | 2026-08-24T03:15:20.439Z |

All six report `modelLab: "Alibaba"`, `modelFamily: "Wan 3.0"`, `landingPageSlug: "wan-3"`,
`hostingType: "proxy"`, `licenseType: "commercial"`, `kind: "inference"`, `status: "public"`,
`deprecated: false`, `removed: false`, `hidePricing: false`, `authSkippable: false`.

Two facts follow directly from that metadata:

1. **fal files Prime under the same family and the same landing page as Wan 3.0.** The only
   separators are the endpoint path segment `-prime` and `group.key` (`Wan30prime` vs `Wan30`).
2. **`hostingType: "proxy"` on all six** — fal reports forwarding to Alibaba rather than running the
   weights itself. This is consistent with the vendor's own hosted-only documentation (see the
   Alibaba Cloud records) and with there being no downloadable Wan 3.0 checkpoint.

## Host-written descriptions (verbatim)

`alibaba/wan-3.0-prime/text-to-video` (`shortDescription`):

> Wan 3.0 Prime Text-to-Video transforms written prompts into polished videos with accelerated
> generation, fluid motion, strong scene fidelity, and coherent visual storytelling. Built for fast
> creative iteration, it brings complex ideas to life while preserving visual detail and cinematic
> consistency throughout each shot.

`alibaba/wan-3.0-prime/image-to-video`:

> Wan 3.0 Prime Image-to-Video turns still images into dynamic, cinematic sequences with rapid
> turnaround, natural motion, and excellent visual continuity. It preserves the identity,
> composition, and atmosphere of the source image while introducing expressive movement, camera
> dynamics, and richly detailed animation.

`alibaba/wan-3.0-prime/reference-to-video`:

> Wan 3.0 Prime Reference-to-Video combines reference images, videos, and audio into a unified video
> with fast generation and strong multimodal coherence. It follows character identity, visual style,
> movement, and sound cues across references to create controlled, consistent, and production-ready
> results.

`alibaba/wan-3.0/*` (identical string on all three standard endpoints):

> Wan 3.0 is the latest generation AI video model, delivering enhanced motion smoothness, superior
> scene fidelity, and greater visual coherence.

Note that "accelerated", "rapid turnaround" and "fast creative iteration" appear only in the Prime
copy, and that the standard copy makes no speed claim at all. fal states no multiplier, latency
figure, or quality comparison for either.

## Price strings (verbatim, `pricingInfoOverride`)

Wan 3.0 Prime (same string on all three endpoints):

> Billing is calculated per second of video generated: **$0.068 at 480p**, **$0.14 at 720p**, or
> **$0.28 at 1080p**. For example, a **5-second video at 720p costs $0.70**. Pricing is subject to
> change.

Wan 3.0 (same string on all three endpoints):

> For every second of video you generate, you will be charged **$0.05** **480p**, **$0.10** **720p**,
> or **$0.20** **1080p**. For example, a **5s** video at **720p** will cost **$0.50**. **Pricing is
> subject to change.**

Both strings match Alibaba Cloud Model Studio's Singapore ("International") per-second prices
exactly, to the cent — see `sources/alibabacloud.com/wan3-0-video-prime-model-page/2026-10-26.md`.
fal adds no visible markup over that rate card and does not say whether it applies one.

## Input schemas: Prime and standard are field-for-field identical

The six schemas were compared programmatically, property by property, within each task pair. For
`text-to-video`, `image-to-video` and `reference-to-video` the results were: no property present in
one and absent in the other, and **no difference in type, enum, default, constraint, description or
`required` list**. The schema titles are the same too — `Wan30TextToVideoInput`,
`Wan30ImageToVideoInput`, `Wan30ReferenceToVideoInput` for both variants, and `Wan30Output` for the
output object.

Shared surface (identical on both):

| Field | Type / values | Default | Note |
| --- | --- | --- | --- |
| `prompt` | string, 1–20 000 chars (t2v required) | — | "Reference media can be addressed positionally, e.g. 'the subject in Image 1 walks past Video 1.'" |
| `resolution` | `480p`, `720p`, `1080p` | `1080p` | "Output video resolution tier." |
| `aspect_ratio` | `adaptive`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16` | `adaptive` | no `21:9` (the vendor supports it) |
| `duration` | integer 2–30, or null | `5` | null = "smart duration" |
| `audio` | boolean | `true` | "Include generated audio." |
| `enable_prompt_expansion` | boolean | `true` | "can save roughly 20-60 seconds of latency but is likely to degrade generation quality" |
| `enable_thinking` | boolean | `false` | "Enable enhanced reasoning before generation." |
| `seed` | integer 0–2147483647, or null | — | returned in the output |
| `enable_safety_checker` | boolean | `true` | "Disabling it requires account authorization" |
| `start_image_url` / `end_image_url` | string / nullable | — | i2v only; `start_image_url` required, `end_image_url` "Requires start_image_url" |
| `reference_image_urls` | array, max 10 | — | r2v only |
| `reference_video_urls` | array, max 5 | — | "totaling at most 15 seconds… Input video duration is billed in addition to output duration" |
| `reference_audio_urls` | array, max 5 | — | "totaling at most 15 seconds" |
| `file_url` / `web_url` | string / nullable | — | "Requires enable_thinking=true" |

Because the schemas are identical, **a caller cannot tell from the request which variant will run**;
only the endpoint path selects it. The practical consequence is that fal exposes Prime as a
drop-in, price-and-latency variant of the same call signature.

## Gaps

- fal does not publish a latency figure, speed multiplier, or any quality comparison between the two
  variants; "accelerated" / "fast" are unquantified adjectives.
- `enable_thinking` has no counterpart in Alibaba's documented request body, which gates file and web
  inputs on `prompt_extend` instead. Whether fal's flag is a rename, an extra wrapper, or something
  the vendor API exposes undocumented is not stated.
- The catalogue `date` for the three standard endpoints (2026-08-03) predates their `publishedAt`
  (2026-08-24) by three weeks and predates Alibaba's 2026-08-06 release date; fal does not explain
  what `date` means. The Prime endpoints have `date` and `publishedAt` on the same day.
- No page HTML was captured; the playground pages are client-rendered and returned only loading
  skeletons to a text reader, so the descriptions above are the machine-readable catalogue strings.

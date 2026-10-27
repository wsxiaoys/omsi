# fal.ai: Vidu catalogue and Vidu Q4 endpoint schemas

- Origin: fal.ai public model catalogue and endpoint schemas:
  - `GET https://fal.ai/api/models?keywords=vidu` (gallery JSON, 24 items)
  - `GET https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=fal-ai/vidu/q4/image-to-video`
  - `GET https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=fal-ai/vidu/q4/reference-to-video`
  - `GET https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=fal-ai/vidu/q3/{image-to-video,text-to-video,reference-to-video/mix}`
    (Q3 schemas for comparison)
  - Model page `https://fal.ai/models/fal-ai/vidu/q4/image-to-video`
- Evidence kind: provider documentation (host catalogue metadata, input/output schemas, host-written
  descriptions and price strings, machine-readable)
- Publication date: Q4 endpoints `date` 2026-10-05T17:04:50Z / 17:06:55Z, `publishedAt`
  2026-10-07T20:20:15Z / 20:19:57Z
- Capture date: 2026-10-26
- Relevant models: `fal-ai/vidu/q4/image-to-video`, `fal-ai/vidu/q4/reference-to-video` (primary);
  `fal-ai/vidu/q3/*`, `q2/*`, `q1/*` (catalogue context)

Artifacts beside this file: `catalogue-vidu-items.json` (all 24 catalogue items verbatim),
`fal-ai-vidu-q4-image-to-video.openapi.json`, `fal-ai-vidu-q4-reference-to-video.openapi.json`,
`fal-ai-vidu-q3-image-to-video.openapi.json`, `fal-ai-vidu-q3-text-to-video.openapi.json`,
`fal-ai-vidu-q3-reference-to-video-mix.openapi.json`.

## The catalogue: Q4 is exactly two endpoints

All 24 `vidu` hits, with the fields that matter here (`date` / `publishedAt` / `hostingType`):

| Endpoint | Title | Category | `date` | `publishedAt` | `modelFamily` |
| --- | --- | --- | --- | --- | --- |
| `fal-ai/vidu/q4/image-to-video` | Vidu Q4 | image-to-video | 2026-10-05T17:04:50Z | 2026-10-07T20:20:15Z | `Q4` |
| `fal-ai/vidu/q4/reference-to-video` | Vidu Q4 Reference to Video | image-to-video | 2026-10-05T17:06:55Z | 2026-10-07T20:19:57Z | `Q4` |
| `fal-ai/vidu/q3/image-to-video` | Vidu | image-to-video | 2026-01-31T07:34:05Z | same | `null` |
| `fal-ai/vidu/q3/image-to-video/turbo` | Vidu | image-to-video | 2026-02-06T20:23:42Z | same | `null` |
| `fal-ai/vidu/q3/text-to-video` | Vidu | text-to-video | 2026-01-31T07:32:31Z | same | `null` |
| `fal-ai/vidu/q3/text-to-video/turbo` | Vidu | text-to-video | 2026-02-06T20:22:55Z | same | `null` |
| `fal-ai/vidu/q3/reference-to-video/mix` | Vidu | image-to-video | 2026-04-08T16:23:14Z | same | `null` |
| `fal-ai/vidu/q2/*` (7 endpoints) | Vidu | various | 2025-10-22 → 2026-01-19 | same | `null` |
| `fal-ai/vidu/q1/*` (4 endpoints) | Vidu | various | 2025-05-09 → 2025-07-08 | same | `null` |
| `fal-ai/vidu/{image-to-video,reference-to-video,start-end-to-video,template-to-video,reference-to-image}` | Vidu | various | 2025-03-12 → 2025-09-09 | same | `null` |

Three facts follow:

1. **fal has no `vidu/q4/text-to-video` endpoint.** A direct request for
   `endpoint_id=fal-ai/vidu/q4/text-to-video` returned a 4-byte empty body, while every live endpoint
   returns a full OpenAPI document. Q4 on fal is image-to-video and reference-to-video only, matching
   the vendor's own mode list.
2. **Q4 is the only Vidu generation with a `modelFamily` of its own** (`"Q4"`) and a `group.key` of
   `"Vidu Q4"`; Q1/Q2/Q3 all carry `modelFamily: null`.
3. **All 24 entries are `hostingType: "proxy"`.** fal reports forwarding to Vidu rather than running
   weights itself — consistent with there being no downloadable Vidu checkpoint.

Both Q4 endpoints are `status: "public"`, `deprecated: false`, `removed: false`, `licenseType:
"commercial"`, `hidePricing: false`, `machineType: null`, and tag `4k` + `multi-shot`.

## Host-written descriptions (verbatim)

`fal-ai/vidu/q4/image-to-video` (`shortDescription`):

> Vidu Q4 turns a first-frame image into 3 to 16 second videos with native audio at up to 4K. Best for
> animating stills, product shots and character scenes with dialogue.

`fal-ai/vidu/q4/image-to-video` (`description` / OpenAPI `info.description`):

> Vidu Q4 Image-to-Video animates a start frame into a high-fidelity clip while preserving the subject
> and composition of the source image. Prompts can direct motion, camera cuts, and spoken dialogue, and
> native audio adds synchronized speech and sound effects. It supports durations from 3 to 16 seconds
> and output from 540p up to 4K.

`fal-ai/vidu/q4/reference-to-video` (`shortDescription`):

> Vidu Q4 generates videos from up to 12 reference images and 3 voice clips, keeping characters,
> objects, and voices consistent across up to 16 seconds at up to 4K.

`fal-ai/vidu/q4/reference-to-video` (`description`):

> Vidu Q4 Reference-to-Video builds a scene from your references. You tag up to 12 images (characters,
> products, objects, locations) and up to 3 voice clips directly in the prompt, and the model keeps each
> subject and voice consistent throughout the clip. It supports optional native audio with dialogue and
> sound effects, durations from 3 to 16 seconds, five aspect ratios, and output from 540p up to 4K, which
> makes it well suited for branded content, character-driven storytelling, and ads.

Note fal's **12-image** cap against the vendor's **15**.

## Price strings (verbatim)

Image-to-video `pricingInfoOverride`:

> Billing is calculated per second of video generated: **$0.0315 at 540p**, **$0.0665 at 720p**,
> **$0.084 at 1080p**, **$0.133 at 2K**, and **$0.273 at 4K**. For example, a **5-second video at 720p
> costs $0.3325**.

Reference-to-video `pricingInfoOverride` adds one sentence:

> Enabling audio does not change the price.

The same five-rung ladder applies to both endpoints. `$0.3325` is exactly 5 × `$0.0665`, so the
per-second basis is arithmetic on the published string, not a guess.

## Input schema: `fal-ai/vidu/q4/image-to-video`

Required: `image_url`. Properties:

| Param | Type / default | Notes (from the schema description) |
| --- | --- | --- |
| `image_url` | string | "URL or base64 data URI of the image to use as the first frame. Supports png, jpeg, jpg and webp up to 50 MB." |
| `prompt` | string, `""`, `maxLength: 5000` | "Text prompt for video generation, max 5000 characters" |
| `duration` | integer, default 5, min 3, max 16 | "Duration of the video in seconds (3-16)" |
| `resolution` | enum `540p`,`720p`,`1080p`,`2K`,`4K`, default `720p` | — |
| `seed` | integer or null | — |
| `enable_safety_checker` | boolean, default `true` | "Authorized callers may set false to request relaxed screening." |

No `aspect_ratio`, no `end_image_url`, no `audio` switch (audio is not a parameter on this endpoint),
no `is_rec`. The prompt limit is **5,000 characters** where the vendor's API allows 20,000.

## Input schema: `fal-ai/vidu/q4/reference-to-video`

Required: `prompt`. Properties:

| Param | Type / default | Notes (from the schema description) |
| --- | --- | --- |
| `prompt` | string, `minLength: 1`, `maxLength: 5000` | "Refer to references by their position in the lists: `[@reference_image_1]`, `[@reference_image_2]`, … for images and `[reference_audio_1]`, … for audio clips." |
| `reference_image_urls` | array of string | "up to 12 reference images (png, jpeg, jpg, webp)" |
| `reference_audio_urls` | array of string | "up to 3 mp3 reference audio clips (3-12 seconds each, max 50 MB)" |
| `duration` | integer, default 5, min 3, max 16 | — |
| `resolution` | enum `540p`…`4K`, default `720p` | — |
| `aspect_ratio` | enum `16:9`,`9:16`,`4:3`,`3:4`,`1:1`, default `16:9` | — |
| `audio` | boolean, **default `false`** | "Whether to generate audio … When false, the output video is silent." |
| `seed` | integer or null | — |
| `enable_safety_checker` | boolean, default `true` | — |

Two host/vendor mismatches on this endpoint: fal defaults `audio` to **false** where Vidu defaults it to
**true**, and fal caps references at **12 images** where Vidu allows **15**.

## Output schema (both endpoints)

`video` (`File`), `cover_image` (nullable `Image`), `seed` (integer). The reference-to-video output
description reads "The generated video from references using the **Q4 Preview** model" — the only place
the word "preview" survives on fal's side.

## Q3 schemas for comparison

`fal-ai/vidu/q3/image-to-video` (`ViduQ3ImageToVideoInput`): `image_url`, `end_image_url` (nullable),
`prompt` (max 2000), `duration` (1–16), `resolution` (`360p`,`540p`,`720p`,`1080p`; note "360p is not
available when end_image_url is provided"), `audio` (default **true**), `seed`, hidden
`enable_safety_checker`.

`fal-ai/vidu/q3/text-to-video`: `prompt` (max 2000), `aspect_ratio`, `duration` (1–16), `audio`
(default true), `resolution` (`360p`…`1080p`), `seed`, `enable_safety_checker`.

`fal-ai/vidu/q3/reference-to-video/mix`: `prompt`, `reference_image_urls` — "URLs of 1 to 4 reference
images used to keep subjects or scenes consistent" — `aspect_ratio`, `audio` (default true), `duration`
(1–16), `resolution` (`360p`…`1080p`), `seed`.

So against Q3, Q4 **loses** text-to-video, start/end-frame, the 360p rung and the 1–2 s durations, and
**gains** 2K/4K, 15 (12 on fal) image references, three voice references, and a 5,000-character prompt
limit (up from 2,000).

## Summary

fal's catalogue and schemas are the independent host record for Q4: two public proxy endpoints, per
second pricing in USD, and a parameter surface that is narrower than the vendor's in three places
(prompt length, image-reference count, audio default) and identical in the rest. fal's `publishedAt`
(2026-10-07) matches the vendor's own launch date to the day.

## Gaps

- fal does not date the model itself, only the endpoint records; `date` (2026-10-05) precedes the
  vendor's 2026-10-07 changelog entry by two days, which is presumably staging.
- No generation-time or throughput data in the catalogue.
- No region or data-residency field in the metadata; `hostingType: "proxy"` is the only signal that
  inference runs at Vidu.
- The `enable_safety_checker` flag is fal's own screening and no page says how it composes with Vidu's
  non-disableable moderation.

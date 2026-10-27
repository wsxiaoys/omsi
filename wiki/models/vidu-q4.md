# Vidu Q4

Shengshu Technology's flagship video model under the Vidu brand, launched on **2026-10-07** as "Vidu Q4
preview" ([Vidu changelog](../../sources/vidu.com/vidu-api-update-notice/2026-10-26.md)). It generates
3–16 second clips at 540p–4K and 24 fps with native synchronized audio, from a single first-frame image
or from 1–15 reference images plus up to 3 reference voice clips
([model map](../../sources/vidu.com/vidu-api-model-map/2026-10-26.md),
[product page](../../sources/vidu.com/vidu-q4-product-page/2026-10-26.md)). It has **no text-to-video
mode and no first/last-frame mode** — the vendor's own FAQ lists exactly two modes, Image-to-Video and
Reference-to-Video ([product page](../../sources/vidu.com/vidu-q4-product-page/2026-10-26.md)).

It is inside the roster's one-year window: 2026-10-07 is after 2025-10-26. The roster label "Vidu Q4"
drops the vendor's **preview** qualifier, which survives in the API model ID `viduq4-preview` and in
the documentation's section title.

## Identity

- **Canonical name:** Vidu Q4. The product page, the site navigation, the vendor changelog headline and
  fal's catalogue all use "Vidu Q4"
  ([product page](../../sources/vidu.com/vidu-q4-product-page/2026-10-26.md),
  [fal catalogue](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md)).
- **API model ID:** `viduq4-preview` — the only accepted value on both endpoints
  ([image-to-video](../../sources/vidu.com/vidu-api-q4-image-to-video/2026-10-26.md),
  [reference-to-video](../../sources/vidu.com/vidu-api-q4-reference-to-video/2026-10-26.md)). The docs
  section is titled "Vidu Q4 Preview"; the changelog entry is "[New Models]-Vidu Q4 preview"; fal's
  reference-to-video output schema says "the Q4 Preview model"
  ([changelog](../../sources/vidu.com/vidu-api-update-notice/2026-10-26.md),
  [fal catalogue](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md)).
- **Vendor:** Shengshu Technology, which publishes the Vidu Q series; the platform introduction calls
  the Q series "released by Shengshu Technology"
  ([platform introduction](../../sources/vidu.com/vidu-api-platform-introduction/2026-10-26.md)).
- **Aliases in the wild:** "Vidu Q4 Preview", `viduq4-preview`, `fal-ai/vidu/q4/*`, `vidu/q4/*` on
  WaveSpeedAI. Hosts do not invent a new marketing name; they drop or keep "Preview" inconsistently.
- **Roster label check:** the discovery path `fal-ai/vidu/q4/image-to-video` resolves to a live,
  `public` fal endpoint titled "Vidu Q4" with `modelFamily: "Q4"` and `group.key: "Vidu Q4"`, so the
  label names a real entity — but it is a *preview* entity and the page says so
  ([fal catalogue](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md)).

| Route | Identifier | Status at capture |
| --- | --- | --- |
| Vidu API (international) | `POST https://api.vidu.com/ent/v2/{img2video,reference2video}`, `model: "viduq4-preview"` | documented, callable |
| Vidu API (China) | same model ID on `https://api.vidu.cn/ent/v2/…` | documented in Chinese |
| fal | `fal-ai/vidu/q4/image-to-video`, `fal-ai/vidu/q4/reference-to-video` | `public`, `hostingType: "proxy"` |
| WaveSpeedAI | `vidu/q4/image-to-video`, `vidu/q4/reference-to-video` | `release_stage: "release"` |
| Replicate | — | not listed; `/vidu/q4` returns 404 |
| Artificial Analysis | — | not ranked on either video board |

Replicate hosts only `vidu/q3-pro` and `vidu/q3-turbo`
([Replicate absence record](../../sources/replicate.com/vidu-q4-not-listed/2026-10-26.md)), and
Artificial Analysis lists only Q3 variants on the Vidu family page
([AA record](../../sources/artificialanalysis.ai/vidu-q4-not-ranked/2026-10-26.md)).

### Siblings and predecessors

Q4 is a single model, not a tier family: there is no Q4 Turbo, Fast or Mix. Its predecessors are the
**five-model Q3 series** — `viduq3-pro`, `viduq3-turbo`, `viduq3-mix`, `viduq3-drama`, `viduq3-ad` — of
which only `pro` and `turbo` generate from text and only `pro`/`turbo` handle first-and-last frame
([model map](../../sources/vidu.com/vidu-api-model-map/2026-10-26.md)). Q3 rolled out between
2026-01-27 and 2026-04-13 ([changelog](../../sources/vidu.com/vidu-api-update-notice/2026-10-26.md)).
Q2, Q1, Vidu 2.0 and the real-time `Vidu S2` avatar models remain listed. No Vidu Q3 page exists in
this wiki yet, so Q3 comparisons here are drawn from vendor and host records rather than from a
maintained sibling page.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-09-28 | WaveSpeedAI's embedded model record `created_at` for both Q4 endpoints | [WaveSpeed](../../sources/wavespeed.ai/vidu-q4-image-to-video/2026-10-26.md) |
| 2026-10-05 | fal creates the two Q4 endpoint records (`date`) | [fal catalogue](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md) |
| 2026-10-07 | Vendor changelog: "[New Models]-Vidu Q4 preview" | [changelog](../../sources/vidu.com/vidu-api-update-notice/2026-10-26.md) |
| 2026-10-07 | fal publishes both endpoints (`publishedAt` 20:19–20:20 UTC) | [fal catalogue](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md) |
| 2026-10-26 | No GA announcement, no deprecation, no Q4 row on Artificial Analysis | [AA record](../../sources/artificialanalysis.ai/vidu-q4-not-ranked/2026-10-26.md) |

WaveSpeed's record predates the vendor's own launch entry by nine days and fal's endpoint `date` by
seven. Nothing captured says whether that was early staging or early serving.

### Is this a distinct model or a repackaged Q3?

Distinct, on four independent grounds: a new model ID (`viduq4-preview`) rather than a Q3 ID; a
different **mode set** (Q4 drops text-to-video and start/end frame, which Q3 `pro` and `turbo` both
have); a different **resolution ceiling** (2K/4K, which no Q3 model offers); and a new **input type**
(three reference voice clips, which Q3 reference-to-video does not accept — its fal schema documents
1–4 reference images and no audio references)
([model map](../../sources/vidu.com/vidu-api-model-map/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md)). The vendor also calls it
"Next-gen flagship for expressive audio & video"
([model map](../../sources/vidu.com/vidu-api-model-map/2026-10-26.md)).

## Current assessment

Q4 is a **preview flagship that trades breadth for fidelity**. It is the only Vidu video model that
reaches 2K/4K, the only one with voice references, and the only one with a 15-image reference cap — and
it is the only recent Vidu model without text-to-video or first/last-frame generation. A user who needs
those modes must stay on Q3 `pro`/`turbo`.

Its capability claims are vendor marketing plus host copy. **No independent quality measurement of Q4
exists in this capture**: Artificial Analysis ranks Q3 Pro (Elo 1016 on image-to-video, 937 on
text-to-video) but has no Q4 row on either board
([AA record](../../sources/artificialanalysis.ai/vidu-q4-not-ranked/2026-10-26.md)). Any statement that
Q4 is better than Q3, Seedance 2.5, Kling 4.0 or Wan 3.0 is therefore unsupported by measurement.

Pricing is at parity with `viduq3-pro` at 540p and 1080p and marginally cheaper at 720p, with 2K and 4K
as expensive new rungs (1.6× and 3.25× its own 1080p rate)
([pricing](../../sources/vidu.com/vidu-api-pricing/2026-10-26.md)).

## Documented capabilities

### Modes and inputs

| Capability | Vidu API | fal | WaveSpeedAI |
| --- | --- | --- | --- |
| Text-to-video | **not offered** | **no endpoint** (empty schema) | not offered |
| Image-to-video | 1 start frame, `images` (max 1) | `image_url` | `image` |
| First/last frame | **not offered** | not offered | not offered |
| Reference-to-video | 1–15 images + 0–3 mp3 voices | `reference_image_urls` max **12** + `reference_audio_urls` max 3 | `images` max **15** + `audios` max 3 |
| Reusable "Subjects" | explicitly unsupported | n/a | n/a |
| Prompt | ≤20,000 chars, `is_rec` expander default **on** | ≤5,000 chars | free-form, `enable_prompt_expansion` default off |
| Aspect ratio | R2V only: 1:1, 9:16, 16:9, 3:4, 4:3; I2V inherits the source frame | R2V: same five; I2V: no parameter | R2V: same five |
| Seed | integer, 0 = random | integer or null | integer, −1 = random |
| Async | create → poll `tasks/{id}/creations`, or signed callback | queue API | queue API |

Sources: [Vidu I2V](../../sources/vidu.com/vidu-api-q4-image-to-video/2026-10-26.md),
[Vidu R2V](../../sources/vidu.com/vidu-api-q4-reference-to-video/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md),
[WaveSpeed](../../sources/wavespeed.ai/vidu-q4-image-to-video/2026-10-26.md).

### Duration, resolution, frame rate

- **Duration:** 3–16 s on both modes per the API reference, the pricing table, fal and WaveSpeedAI. The
  vendor's model map says "1-16s selectable" and the product page says Reference-to-Video starts at 1 s
  while Image-to-Video starts at 3 s. Default 5 s.
- **Resolution:** 540p, 720p, 1080p, 2K, 4K; default 720p. No 360p rung (Q3 has one).
- **Frame rate:** 24 fps, stated only in the model map. No host documents it.
- **Aspect ratio:** inherited from the input image for I2V ("Output keeps your original aspect ratio");
  five choices for R2V.

### Audio

Native synchronized audio — speech, dialogue and sound effects — generated in the same pass, not
post-synced:

> Whether to use direct audio-video generation capability. `false`: No direct audio-video generation,
> outputs silent video `true`: Direct audio-video generation required, outputs video with sound
> (including dialogue and sound effects)；Default: `true`
> — [Vidu I2V](../../sources/vidu.com/vidu-api-q4-image-to-video/2026-10-26.md)

The reference-to-video mode adds **voice references**: up to 3 mp3 clips of 3–12 s and ≤50 MB each,
which the vendor says "clone a character's voice, with natural emotion, and lip-synced delivery"
([product page](../../sources/vidu.com/vidu-q4-product-page/2026-10-26.md),
[Vidu R2V](../../sources/vidu.com/vidu-api-q4-reference-to-video/2026-10-26.md)). Reference audio does
not change the price on fal ("Enabling audio does not change the price").

### Multi-shot and camera control

Q4 is documented as supporting "automatic camera switching" and "intelligent camera switching" in the
model description, and the product page claims "Up to 16s of multi-shot storytelling with smooth camera
moves" ([Vidu R2V](../../sources/vidu.com/vidu-api-q4-reference-to-video/2026-10-26.md),
[product page](../../sources/vidu.com/vidu-q4-product-page/2026-10-26.md)). fal tags both endpoints
`multi-shot`. There is **no parameter** for shot count, cut points or camera path — the only control
surface is the prompt. These are vendor claims; nothing captured measures how many cuts a 16-second
generation actually contains.

### Prompt-side control

The vendor exposes a recommended-prompt expander, `is_rec`, **on by default**, which "System will
automatically recommend a prompt and use its content to generate the video"
([Vidu I2V](../../sources/vidu.com/vidu-api-q4-image-to-video/2026-10-26.md)). A caller who does not
set `is_rec: false` may therefore be generating from the system's prompt rather than their own. fal and
WaveSpeedAI expose the equivalent as an opt-in (`enable_prompt_expansion`, default off), so the same
text behaves differently across hosts.

## Limitations and constraints

- **No text-to-video.** Confirmed by the vendor FAQ, the model map, the pricing table and fal's
  catalogue (no `vidu/q4/text-to-video` endpoint).
- **No first/last-frame generation**, which Q3 `pro`/`turbo` support.
- **No reusable Subjects.** "viduq4-preview does not support the subject invocation method for the time
  being" ([Vidu R2V](../../sources/vidu.com/vidu-api-q4-reference-to-video/2026-10-26.md)).
- **Duration floor is contested:** 3 s per API reference and price table, 1 s per model map and the
  product page's R2V FAQ. The 1 s figure may describe a planned capability rather than the shipped
  enum.
- **Prompt and reference limits differ by host:** 20,000 chars and 15 images at Vidu; 5,000 chars and
  12 images on fal; WaveSpeedAI matches Vidu's 15 images.
- **Audio default differs by host:** on at Vidu and WaveSpeedAI, off on fal's reference-to-video, and
  not a parameter at all on fal's image-to-video.
- **Body-size ceiling:** the HTTP body must be under 20 MB, while each image may be 50 MB and each audio
  clip 50 MB — the per-file caps cannot all be used in one request
  ([Vidu R2V](../../sources/vidu.com/vidu-api-q4-reference-to-video/2026-10-26.md)).
- **Output URLs expire after 24 hours** on the vendor API (`url`, `cover_url`, `watermarked_url`).
- **Concurrency is 5 tasks per organisation**, and buying more credits does not raise it
  ([usage and limits](../../sources/vidu.com/vidu-api-usage-and-limits/2026-10-26.md)).
- **Moderation is mandatory and cannot be disabled** at the vendor layer, covers input image, prompt
  and output video, explicitly reserves "public figures" and "living artists", and can suspend an
  account for repeat hits ([content moderation](../../sources/vidu.com/vidu-api-content-moderation/2026-10-26.md)).
  That collides with Q4's own selling points — photoreal people, cloned voices and dialogue — and no
  page says whether a voice reference is screened for identity or consent. fal adds its own
  `enable_safety_checker` flag (default on, relaxable for "authorized callers"); nothing captured says
  how that composes with Vidu's non-disableable moderation.
- **Stale vendor FAQ.** The platform FAQ still says "Two durations are supported: 4 seconds and 8
  seconds", "Three resolutions are supported: 360p, 720p, and 1080p" and "Up to approximately 1500
  characters" — all contradicted by the Q3 and Q4 pages. It was written for the Vidu 2.0 era and should
  not be used as a limits reference ([FAQ](../../sources/vidu.com/vidu-api-faq/2026-10-26.md)).
- **No documented frame rate, codec, container, bitrate or generation time** on any host page; 24 fps
  comes only from the vendor model map.
- **No region list and no data-residency statement.** The international API is `api.vidu.com` and the
  China API is `api.vidu.cn`; Vidu's own documentation examples reference China-region storage buckets
  (`s3.cn-northwest-1.amazonaws.com.cn`, `scene-aliyun.vidu.zone`), which is suggestive but is not a
  published hosting statement.

## Access, pricing, licensing

### Vendor (credits)

Vidu bills per output second, per resolution, in credits (1 credit = ¥0.03125). Q4 Preview rates:

| Resolution | Credits/second | ≈ RMB/second | fal USD/second | WaveSpeed USD/second |
| --- | --- | --- | --- | --- |
| 540p | 9 | ¥0.281 | $0.0315 | $0.045 |
| 720p | 19 | ¥0.594 | $0.0665 | $0.095 |
| 1080p | 24 | ¥0.75 | $0.084 | $0.12 |
| 2K | 38 | ¥1.188 | $0.133 | $0.19 |
| 4K | 78 | ¥2.438 | $0.273 | $0.39 |

Vendor credits from the [pricing table](../../sources/vidu.com/vidu-api-pricing/2026-10-26.md); RMB is
that table multiplied by the published credit unit price; fal from its
[price string](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md); WaveSpeed derived from its
[published formula](../../sources/wavespeed.ai/vidu-q4-image-to-video/2026-10-26.md). The USD columns are
published or arithmetic on published formulas — no exchange rate was assumed, so the RMB and USD columns
are not directly comparable.

Three structural points:

1. **Image-to-video and reference-to-video cost the same** at a given resolution, on every host.
2. **Audio is included.** Q4 has no audio surcharge line, unlike Q2's "+15 credits" for direct
   audio-video output, and fal states "Enabling audio does not change the price."
3. **There is no off-peak rate for Q4.** Every Q3 row carries an "Off-peak Credit Consumption" column;
   the Q4 rows carry none. This is an inference from the table's shape — no sentence says off-peak is
   unsupported.

WaveSpeedAI's per-second price is exactly **10/7 (≈1.43×)** fal's at every one of the five rungs, which
looks like deliberate host markup rather than an independent cost basis. Its own headline figure,
"$0.095 per run", equals one second at 720p rather than the schema's five-second default, so that
number should not be used for budgeting.

fal is a **proxy** host (`hostingType: "proxy"`), so its price is a resale of Vidu inference, not a
separately optimised deployment.

### Licensing

- **Weights are not published.** No Vidu checkpoint is downloadable and every host captured is a proxy
  to Vidu's API (`hostingType: "proxy"` on fal, `release_stage: "release"` on WaveSpeedAI), so there is
  no self-host or fine-tune route for Q4.
- fal marks both endpoints `licenseType: "commercial"` and shows a "Commercial use" badge; WaveSpeedAI
  labels the model "release".
- Commercial terms are Vidu's Terms of Use plus the moderation policy above. No page captured states
  indemnity, output ownership, or whether preview-tier output carries different commercial terms — a
  real gap, because "preview" often does.

### Regions

Two first-party API hosts exist (`api.vidu.com`, `api.vidu.cn`) with the same model ID and parameter
set, and the docs are served in English and Chinese from `platform.vidu.com` / `platform.vidu.cn`. No
page states which region performs inference, where outputs are stored, or whether the international
host differs in latency or model version. fal and WaveSpeedAI add their own routing on top.

## Differences from Q3

| Dimension | Q3 (`pro` / `turbo`) | Q4 (`viduq4-preview`) |
| --- | --- | --- |
| Text-to-video | yes | **no** |
| First/last frame | yes | **no** |
| Image-to-video | yes | yes |
| Reference-to-video | 1–7 images, no audio references (fal's `mix` endpoint: 1–4) | 1–15 images + 0–3 voice refs |
| Resolution | 360p–1080p | 540p–4K |
| Duration | 1–16 s | 3–16 s (vendor also says 1–16) |
| Frame rate | 24 fps | 24 fps |
| Audio | default on, off-peak pricing tied to audio | default on, no audio surcharge, no off-peak |
| Prompt limit | 2,000 chars (fal) | 5,000 (fal) / 20,000 (Vidu) |
| Tiers | five models incl. `drama`, `ad`, `mix` | one model, no tier split |
| Vendor price at 1080p | 24 credits/s (`pro`), 13 (`turbo`) | 24 credits/s |
| Independent Elo (I2V) | Q3 Pro 1016, Q3 Turbo 967 | not ranked |
| Host breadth | fal, Replicate, Runware, WaveSpeed, MachGen, Vidu | Vidu, fal, WaveSpeed |

Sources: [model map](../../sources/vidu.com/vidu-api-model-map/2026-10-26.md),
[pricing](../../sources/vidu.com/vidu-api-pricing/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/vidu-q4-catalogue/2026-10-26/index.md),
[AA record](../../sources/artificialanalysis.ai/vidu-q4-not-ranked/2026-10-26.md),
[Replicate absence](../../sources/replicate.com/vidu-q4-not-listed/2026-10-26.md).

The honest summary of the trade: Q4 buys resolution, references and voice at the cost of two generation
modes, the 360p rung, off-peak pricing, tier choice and host breadth. It is not a superset of Q3, and
the vendor's own "lower production costs" claim in the launch entry holds only below 2K.

## Unresolved questions

1. **Is Q4 still preview, and what changes at GA?** The model ID, docs section and changelog all say
   preview; the product page presents Q4 as a shipping product with no caveat. No GA date, no
   deprecation date, and no statement of whether preview output carries different terms.
2. **Does Q4 actually beat Q3 on quality?** No independent measurement exists. Artificial Analysis has
   Q3 rows on both boards and no Q4 row; the vendor's claims ("smoother motion", "richer FX", "stronger
   cinematic quality", "better results, faster generation, and lower production costs") are
   unquantified.
3. **1–16 s or 3–16 s?** Three first-party pages give 3–16 (API reference, pricing table, product-page
   I2V FAQ) and two give a 1 s minimum (model map, product-page R2V FAQ). No page explains the
   difference, and no host offers 1–2 s.
4. **Why does fal cap references at 12 when the vendor and WaveSpeedAI allow 15?** No page explains it;
   it could be a request-size guard or a stale schema.
5. **Why is WaveSpeedAI's `created_at` (2026-09-28) nine days before the vendor's launch entry?**
   Early staging, an early private release, or a backfilled date — not settled by any captured page.
6. **How does Q4's moderation treat voice references?** Cloning a voice is the marquee feature and
   "public figures" is a named moderated category, yet no page states whether a reference clip is
   screened for identity or consent, or what happens to a request that clones a real person's voice.
7. **What does `is_rec` cost on Q4?** The 2025-11-03 changelog says the parameter "will consume an
   additional 10 credits"; the Q4 price table has no such line, and the expander is on by default.
8. **What is the output format?** No frame rate, codec, container, bitrate or file-size figure is
   published by any host. 24 fps rests on one line in the model map.
9. **Does `audio: false` still use supplied voice references?** A silent output with cloned-voice
   inputs is undocumented in both directions.
10. **Where does inference run?** `api.vidu.com` and `api.vidu.cn` both serve `viduq4-preview`; no page
    states region, residency or whether the two hosts run the same checkpoint.

## Evidence status

Evidence floor: **met.** First-party: ten Vidu records captured 2026-10-26 — product page, platform
introduction, API model map, pricing, changelog, FAQ, Q4 image-to-video reference, Q4
reference-to-video reference, content moderation, usage and limits — plus the China-host variant of the
image-to-video reference read in the same session. Independent hosts: one fal record (catalogue of 24
Vidu endpoints, full OpenAPI schemas for both Q4 endpoints and three Q3 endpoints, host descriptions
and price strings), one WaveSpeedAI record (embedded model records, JSON request schemas, price
formula), and two absence records (Replicate has no Q4 listing; Artificial Analysis has no Q4 row on
either video board).

Two caveats about the captures. The Vidu documentation was read through the site's own Markdown
rendition (`…/docs/….md`) rather than by parsing the client-rendered HTML, which is how the parameter
tables and price tables were obtained verbatim; the product page is server-rendered and was read
directly. And WaveSpeedAI's embedded `updated_at` (2026-10-27T14:38Z) post-dates this batch's capture
date, so that page was edited after the nominal capture — only its `created_at` and pricing formula are
used as evidence.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation, prices are published schedules plus
arithmetic, and every quality claim is the vendor's own or absent.

The next useful evidence would be: the same prompt rendered on Q3 Pro and Q4 at 1080p and 4K to see
whether the extra resolution buys detail or only pixels; a 16-second R2V generation to count actual
cuts against the "multi-shot" claim; a voice-reference request to check lip-sync and whether consent
screening appears; an `audio: false` run with references supplied; a 1-second request to settle the
duration floor; and a re-capture of the Artificial Analysis boards after Q4 appears, if it does.

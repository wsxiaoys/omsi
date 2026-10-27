# Kling Lip Sync

Kuaishou's Kling AI lip-sync service: a source video plus speech or singing in, the same video with the
chosen face re-animated to that audio out. Kling's own API
changelog dates the first release to **2024-12-23**, ten months before the one-year window opens on
2025-10-26, and it has been extended three times since — arbitrary 720p/1080p source video
(2025-03-12), a 60-second ceiling (2025-06-30), and multi-face frames with audio insertion and cropping
(2025-09-15) ([API changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md)).

The roster retains the row as a **specialist/utility exception**, not as an in-window launch. The page
records the 2024-12-23 date and does not date the model forward. The in-window Kling releases are
Kling 3.0 and [Kling 4.0](kling-4.0.md), whose Native Audio generates dialogue inside the video model;
Lip Sync is the separate, older tool that retrofits audio onto a clip that already exists.

## Identity

- **Canonical name:** Kling Lip Sync. The vendor's API documentation titles the section "Lip Sync" and
  the endpoint `/v1/videos/advanced-lip-sync`; the marketing page is "AI Lip Sync Video Generator"; the
  blog calls it "the dedicated **Lip Sync** tool"; fal titles its endpoints "Kling LipSync"; Replicate
  titles its model "Kling Lip Sync". All of these names describe one service, and no first-party page
  attaches a version number to it.
- **Vendor:** Kuaishou, operating the product as Kling AI. As with the rest of this knowledge base, the
  captured pages name only "Kling AI"; the Kuaishou attribution rests on Replicate's README ("Data from
  this model is sent from Replicate to Kuaishou") and on fal's `modelLab: "Kling"`
  ([Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md),
  [fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md)).
- **Domains:** `kling.ai` is the global site; `klingai.com` 301s to it. The API documentation's base URL
  in every example is `https://api-singapore.klingai.com`, so the served region is Singapore
  ([API reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md)).

| Surface | Identifier |
| --- | --- |
| Vendor API — identify faces (prerequisite) | `POST /v1/videos/identify-face` |
| Vendor API — apply lip sync | `POST /v1/videos/advanced-lip-sync` (+ `GET …/{id}`, `GET …`) |
| fal — audio in | `fal-ai/kling-video/lipsync/audio-to-video` |
| fal — text + TTS voice in | `fal-ai/kling-video/lipsync/text-to-video` |
| Replicate | `kwaivgi/kling-lip-sync` |
| Consumer tool | Lip Sync tool in the Kling AI workspace (`kling.ai/app`) |

Sources: [vendor reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md),
[face recognition](../../sources/kling.ai/kling-face-recognition-api-reference/2026-10-26.md),
[fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md).

**The roster's endpoint ID is a family prefix.** `fal-ai/kling-video/lipsync` returns `null` from fal's
schema API and is not callable; only the two leaves resolve
([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md)).

### Separate model, or a Kling Video mode?

**A separate endpoint and a separate product, but not a separately versioned model.** The evidence for
each half:

*Separate.* It is a top-level entry in the API docs' *Basic APIs → Video* group, a sibling of the video
models rather than a parameter of one; it has its own two-tab documentation section, its own price line,
its own changelog entries, and its own two-step flow (face recognition, then lip sync) that no video-model
endpoint shares ([API reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md),
[price list](../../sources/kling.ai/kling-api-video-pricing/2026-10-26.md),
[changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md)). It consumes an existing
video rather than generating one. And the vendor distinguishes it from both neighbours in its own FAQ:

> Lip Sync adds new speech or singing to an existing supported character video. Native Audio in VIDEO 3.0
> and VIDEO 3.0 Omni generates the scene, dialogue, facial performance, and supporting sound together as
> part of a new video.
> ([feature page](../../sources/kling.ai/kling-lip-sync-feature-page/2026-10-26.md))

Avatar is the third product in that cluster — image in, talking head out, launched 2025-10-15, and the
vendor's answer to "can I lip sync a photo?" is "use Kling AI Avatar"
([feature page](../../sources/kling.ai/kling-lip-sync-feature-page/2026-10-26.md),
[changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md)).

*Not a versioned model.* No first-party page gives it a model ID, a generation number, or a checkpoint.
The only version-like statement in its entire changelog history is "Lip-Sync | New version new
capabilities" on 2025-06-30, which raised the ceiling from 10 s to 60 s and named no path, ID or quality
change ([changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md)). Call it an
unversioned service endpoint in the Kling Video group: distinct from the video models in function and
billing, but not a model tier a reader can compare across versions.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2024-12-23 | Lip Sync API released; only Kling V1.0/V1.5 generated videos, "as long as the video meets the facial requirements" | [changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md) |
| 2025-03-12 | Any 1080p/720p video up to 10 s; 8 new Chinese/English TTS tones | [changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md) |
| 2025-03-27 | fal publishes both endpoints | [fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md) |
| 2025-06-30 | "New version": max video duration 10 s → 60 s; "as little as 2 minutes" | [changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md) |
| 2025-09-15 | Multi-person frames, `face_id` speaker selection, `sound_insert_time`, audio clipping; online TTS producing reusable `audio_id` | [changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md) |
| 2026-04-26 | fal's metadata record last updated | [fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md) |
| 2026-10-21 | Vendor blog still promotes the dedicated Lip Sync tool alongside Kling 4.0 | [blog](../../sources/kling.ai/kling-lip-sync-blog-guide/2026-10-26.md) |

No later lip-sync entry appears in the changelog up to its newest section (09/15/2026).

## Current assessment

**Current, still sold, and superseded only for the from-scratch case.** The vendor promoted it in a blog
post dated 2026-10-21, six days before capture, and prices it on the current API price list
([blog](../../sources/kling.ai/kling-lip-sync-blog-guide/2026-10-26.md),
[price list](../../sources/kling.ai/kling-api-video-pricing/2026-10-26.md)). Nothing deprecates it:
both fal endpoints carry `deprecated: false` and `status: "public"`, and Replicate shows 60.3K runs
([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md)). What has changed is the
competitive frame: Kling 4.0 and 3.0 generate dialogue with the scene, so the retrofit tool is now for
footage that already exists — dubbing, re-voicing, singing — not for creating a talking shot.

The strongest evidence on this page is agreement across three publishers on the operational envelope:
720p/1080p source, mp4/mov, ≤100 MB, audio 2–60 s and ≤5 MB in mp3/wav/m4a/aac, text routed through TTS
rather than fed to the model, mp4 out, and $0.014 per second as the unit price on both hosts and (after
the $0.14/Unit conversion) on the vendor's own list. The vendor's 0.5 Units per 5 s and the hosts'
$0.014/s reconcile exactly, which is unusual in this corpus and worth stating.

What the evidence does **not** support is any quality claim. No benchmark, arena result, or third-party
measurement was captured. fal's page asserts "precision lip-sync accuracy" and a "12 minutes" fixed
latency, and the vendor's changelog claims "as little as 2 minutes"; the only run-level timing anywhere
is Replicate's own showcased example, which took ~636 s to produce a 9.97 s output
([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md)). That is one logged example, not
a measurement, and it sides with fal against the vendor.

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run.

### The vendor workflow is two calls

1. `POST /v1/videos/identify-face` with either `video_id` (a Kling-generated video from the last 30 days)
   or `video_url` (any mp4/mov, ≤100 MB, 2–60 s, 720p/1080p, sides 512–2160 px). Returns a `session_id`
   and, per detected face, a `face_id`, a face-crop URL, and the interval the face is on screen.
2. `POST /v1/videos/advanced-lip-sync` with that `session_id` and a `face_choose` entry naming the
   `face_id`, the audio, a crop window, an insertion time, and two volume levels.

The lip-sync call takes **no video URL of its own** — the video enters through step 1. Both hosts collapse
this into a single request and expose no face selection.

Sources: [reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md),
[face recognition](../../sources/kling.ai/kling-face-recognition-api-reference/2026-10-26.md).

### Inputs

| Input | Vendor API | fal | Replicate |
| --- | --- | --- | --- |
| Source video | `video_id` (Kling, ≤30 days) or `video_url`; mp4/mov, ≤100 MB, 2–60 s, 720p/1080p, 512–2160 px | `video_url`, mp4/mov, ≤100 MB, 720p/1080p, 720–1920 px; **2–10 s** on `audio-to-video`, **2–60 s** on `text-to-video` | `video_id` **or** `video_url`, mp4/mov, ≤100 MB, 720p/1080p, 720–1920 px, **2–10 s** |
| Face choice | `face_id` from step 1, required | not exposed | not exposed |
| Audio | `sound_file` (URL or base64), mp3/wav/m4a/aac, ≤5 MB, 2–60 s — or `audio_id` from TTS (last 30 days, 2–60 s) | `audio_url`, 2–60 s, ≤5 MB | `audio_file`, mp3/wav/m4a/aac, <5 MB |
| Text | not accepted directly; must become `audio_id` via TTS first | `text`, max 120 chars, plus `voice_id` (46 voices), `voice_language` (`zh`/`en`), `voice_speed` 0.8–2 | `text` plus `voice_id` (default `en_AOT`) and `voice_speed` 0.8–2 |
| Timing | `sound_start_time` / `sound_end_time` crop; `sound_insert_time` (must overlap the face's interval ≥2 s) | not exposed | not exposed |
| Mixing | `sound_volume` and `original_audio_volume`, each 0–2, default 1 | not exposed | not exposed |
| Watermark | `watermark_info.enabled`; "Custom watermarks are not currently supported" | not exposed | not exposed |
| Safety | not a parameter; failures surface as "content risk control" in `task_status_msg` | `enable_safety_checker`, default `true` | not exposed |

Sources: [reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md),
[fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md).

Two host-level losses follow from that table. The hosts drop every control that makes the vendor endpoint
a dubbing tool — speaker selection in multi-face footage, partial-clip insertion, audio cropping, and
independent volume mixing — leaving "the whole clip, one voice, at the start". And both hosts cap the
source at 10 s on their audio-in path, a sixth of the vendor's documented 60 s. fal's own two schemas
disagree with each other on this (2–10 s vs 2–60 s), so the cap is not even internally consistent
([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md)).

### Output

- **Container:** mp4. fal states ".mp4 video with synchronized lip movements"; Replicate's example
  output is an `.mp4`; the vendor response carries a URL and a duration.
- **Duration:** the vendor returns `videos[].duration` ("Total video duration, unit: s") and
  `task_info.parent_video.duration`. It does not say whether a short inserted segment trims the output
  or leaves the clip at its original length.
- **Resolution:** **undocumented for the output.** Input is restricted to 720p/1080p, so a pass-through
  is the natural inference, but no page states it, and fal's "Resolution Support 720p-1080p" row is
  labelled as an input constraint.
- **Frame rate:** **undocumented.** No vendor page, schema or README in the corpus gives an output fps.
  Any number quoted for this model would be invented.
- **Audio:** the result mixes the inserted speech with the original track under two volume parameters.
  Channel count is not stated anywhere; the vendor's `original_audio_volume` "No effect if source video
  is silent" implies the original track survives.
- **Retention:** generated media "will be deleted after 30 days" on the vendor API
  ([changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md)).

### Characters, languages, and what the model actually sees

The model is audio-driven, so language is a property of the audio, not of the lip-sync step. The vendor
says exactly that when asked which languages it supports: "Language availability depends on the
workflow. The Lip Sync tool accepts uploaded audio and offers available Text to Speech voices"
([feature page](../../sources/kling.ai/kling-lip-sync-feature-page/2026-10-26.md)). fal's `voice_language`
enum offers only `zh` and `en`, which is a limit on the bundled TTS voices, not on the sync step.

Characters: "works with realistic, 3D, and 2D human characters … Animal characters are not currently
supported", and the source needs "the character's full face … clearly visible"
([feature page](../../sources/kling.ai/kling-lip-sync-feature-page/2026-10-26.md),
[user guide](../../sources/kling.ai/kling-lip-sync-user-guide/2026-10-26.md)). fal's page adds that it
needs no speaker-specific training data — a claim about architecture, not a measured result
([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md)).

### Vendor and host claims, labelled

- "Sync speech, songs, or generated voices to character videos with natural-looking mouth movements"
  ([feature page](../../sources/kling.ai/kling-lip-sync-feature-page/2026-10-26.md)).
- fal: "trading speed for precision lip-sync accuracy", "~12 minutes", "zero-shot speaker adaptation"
  ([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md)).
- The vendor's own changelog offers the only counter-claim in the corpus: "as little as 2 minutes",
  which fal's "~12 minutes" and Replicate's 636-second example both contradict
  ([changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md)).

## Limitations and constraints

- **Ten-second cap on both hosts' audio path.** fal `audio-to-video` and Replicate both document 2–10 s
  source video while the vendor documents 2–60 s; fal's `text-to-video` leaf documents 2–60 s. A reader
  who needs the vendor's 60-second ceiling has to go direct
  ([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
  [Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md),
  [reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md)).
- **No multi-face control on either host.** The vendor added `face_id` speaker selection on 2025-09-15;
  neither fal nor Replicate exposes it, so in a two-person clip the caller cannot say who speaks
  ([changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md),
  [fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
  [Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md)).
- **Multi-face support is itself contradictory in the vendor docs.** The current reference says
  `face_choose` "Currently only supports one person lip-sync", while the 2025-09-15 changelog announces
  "Support multi person screen lip-sync". Unresolved
  ([reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md),
  [changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md)).
- **Human faces only.** "Animal characters are not currently supported"; a still image cannot be
  lip-synced at all — that is Avatar's job
  ([feature page](../../sources/kling.ai/kling-lip-sync-feature-page/2026-10-26.md)).
- **The user guide is stale.** It restricts source video to "videos generated in Kling 1.0 and Kling
  1.5", several model generations behind the API, which has accepted arbitrary 720p/1080p uploads since
  2025-03-12 ([user guide](../../sources/kling.ai/kling-lip-sync-user-guide/2026-10-26.md),
  [changelog](../../sources/kling.ai/kling-api-updates-changelog/2026-10-26.md)). Its "Nov 23, 2025"
  stamp appears on every page of that section and cannot be used to date anything.
- **No output specification.** Resolution, frame rate, bit depth and channel count are all undocumented;
  the only documented output facts are "mp4" and a duration.
- **Text input is a host convenience, not a vendor capability.** The vendor accepts audio only; fal's
  `text-to-video` and Replicate's `text` field run TTS first. Neither host says whether the TTS call is
  inside the quoted price, though the vendor prices TTS separately at 0.05 Units/call
  ([price list](../../sources/kling.ai/kling-api-video-pricing/2026-10-26.md),
  [fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md)).
- **No open weights.** Every route is hosted; fal reports `hostingType: "proxy"`, and Replicate forwards
  data to Kuaishou ([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
  [Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md)).
- **Moderation exists but is undocumented.** Failures surface as "content risk control of the platform"
  in `task_status_msg`; fal exposes `enable_safety_checker` (default true, and "Disabling safety checks
  requires account authorization"). No threshold, policy, or refusal taxonomy was captured. A refusal on
  one route is not evidence about the model's willingness
  ([reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md),
  [fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md)).

### Consent and likeness

This is the weakest documented area of the model, and the findings are negative findings.

- **No authorization gate.** Nothing in the lip-sync or face-recognition documentation requires consent,
  identity verification, or a rights declaration before animating a face in an uploaded video. Kling's
  control is contractual and post hoc
  ([reference](../../sources/kling.ai/kling-lip-sync-api-reference/2026-10-26.md),
  [face recognition](../../sources/kling.ai/kling-face-recognition-api-reference/2026-10-26.md)). This is
  a different posture from Seedance 2.0, whose vendor documentation refuses real-face reference uploads
  outright ([BytePlus](../../sources/byteplus.com/seedance-2-0-tutorial/2026-10-26.md)).
- **The contractual obligation is on the caller.** API paid-service terms §3.7 require that uploaded data
  be "authorized by you in accordance with the applicable law" and that you "obtained explicit
  authorization from the corresponding rights holder" for any third party's personal information; §5.2
  requires you to obtain end-user authorization and to disclose Kling's role in your own privacy policy
  ([API protocols](../../sources/kling.ai/kling-api-service-privacy-policy/2026-10-26.md)).
- **Impersonation is banned at the account level, not the model level.** The consumer terms prohibit
  impersonating "any person or entity" and misrepresenting that content emanates from a person or the
  services, and recognise "portrait rights" among the rights a complaint can assert
  ([terms of service](../../sources/kling.ai/kling-ai-terms-of-service/2026-10-26.md)). Neither clause is
  specific to synthetic speech on a real person's face.
- **The privacy policy contradicts the product.** It states Kling AI does "not analyse any facial
  features in pictures or identify the identity of individuals from such pictures, and will not collect,
  share or store any face data" — while the Face Recognition endpoint returns a `face_id` and a face-crop
  URL per detected face, and the lip-sync call cannot run without that session. The two cannot both be
  true of the same request
  ([API protocols](../../sources/kling.ai/kling-api-service-privacy-policy/2026-10-26.md),
  [face recognition](../../sources/kling.ai/kling-face-recognition-api-reference/2026-10-26.md)).

## Access, pricing, licensing

Three routes, three billing shapes.

### Vendor API — per 5 seconds, in Units

| Item | Billing | Price |
| --- | --- | --- |
| Lip Sync | Per 5 seconds | **0.5 Units/5s** |
| Face Recognition | Per request | 0.05 Units/call |
| TTS (if audio is generated) | Per request | 0.05 Units/call |

Source: [API price list](../../sources/kling.ai/kling-api-video-pricing/2026-10-26.md). The unit is
"1 Unit = $0.14 (list price)" per the sibling `/dev/pricing` page, so lip sync is **$0.07 per 5 s =
$0.014/s**, plus $0.007 for the face call and $0.007 for TTS if used
([developer price list](../../sources/kling.ai/kling-api-pricing/2026-10-26.md)). A 10-second clip with
uploaded audio therefore lists at $0.14 + $0.007. The Lip Sync row has no resolution column — every video
model on the same page is split 720P/1080P/4K — and `/dev/pricing` does not list lip sync at all, so this
one page is the only first-party schedule for it.

### fal — per input video second, 5-second increments

> Your request will be priced **$0.014** per input **video seconds**, rolling up to closest **5 second
> increment**. For example, if your video's duration is 3 seconds, it will be billed as a 5 second video
> ([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md))

Identical string on both endpoints. The basis is the **input** clip, so a 9-second source with 3 seconds
of speech bills as 10 s.

### Replicate — per output video second

> This model is priced by second of output video. It costs **$0.014 per second of output video**, or
> around 71 seconds for $1.
> ([Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md))

Same rate, different basis. For a source longer than the inserted audio, Replicate would bill less than
fal; for equal durations they converge. Neither host documents the rounding rule.

### Consumer credits

The user guide states: "A 5-second video costs 5 inspiration credits for lip-syncing, while a 10-second
video costs 10 inspiration credits" — 1 credit per second of video, a unit that cannot be converted to
dollars without a credit rate the page does not give, and that does not reconcile with the API's 0.5
Units/5 s ([user guide](../../sources/kling.ai/kling-lip-sync-user-guide/2026-10-26.md)).

### Licensing

- **No weights, no open licence.** Hosted only, `licenseType: "commercial"` and `hostingType: "proxy"` on
  fal; Replicate's README states the data is forwarded to Kuaishou
  ([fal](../../sources/fal.ai/kling-lip-sync/2026-10-26.md),
  [Replicate](../../sources/replicate.com/kling-lip-sync/2026-10-26.md)).
- **Commercial use differs by track.** API paid-service terms §6.4: "You use of the AI-generated content
  for commercial purposes is not restricted." The consumer terms §4.6 say the opposite without written
  permission. Do not quote one as if it governed the other
  ([API protocols](../../sources/kling.ai/kling-api-service-privacy-policy/2026-10-26.md),
  [terms of service](../../sources/kling.ai/kling-ai-terms-of-service/2026-10-26.md)).
- **Attribution obligation** on the consumer track: label output with Kling branding or state it was
  generated by "Kling AI" (ToS §4.5, same record).
- **No training on your data** under the API terms (§5.1), and no using the service to build competing
  models (§2(w) of the consumer terms).

## Unresolved questions

1. **When did `/v1/videos/advanced-lip-sync` itself ship?** The changelog dates the *feature* to
   2024-12-23 and a "new version" to 2025-06-30 but never names a path, so the `advanced-` route cannot
   be pinned to a date.
2. **Is the output resolution inherited from the source?** Input is 720p/1080p and output is undocumented.
3. **What is the output frame rate, bit depth and channel count?** Undocumented everywhere.
4. **Does a short inserted segment trim the output, or is the clip returned at source length?** Neither
   the reference nor either host says.
5. **Is multi-face lip sync supported?** The reference says one person; the changelog says multi-person
   frames. fal and Replicate expose no face selection either way.
6. **How does the original audio behave under an inserted segment?** Two volume parameters exist; mixing,
   ducking and overlap are all plausible and none is described.
7. **Is fal's `text-to-video` leaf a vendor capability or a host composition?** The vendor accepts audio
   only, and prices TTS separately; fal's schema takes the vendor's TTS parameters directly. The
   composition is the natural reading but no captured page states it.
8. **Why do fal's two schemas disagree on the source duration (2–10 s vs 2–60 s)?** No page explains it.
9. **Does the consumer tool accept non-Kling video?** The feature page says "a supported Kling AI clip"
   and the user guide says "videos generated in Kling 1.0 and Kling 1.5"; the API accepts any 720p/1080p
   URL. Consumer and API scope are documented differently.
10. **How does it compare with dedicated lip-sync models** — Replicate's own neighbours list, among
    others, `bytedance/latentsync`, `sync/lipsync-2-pro`, `pixverse/lipsync`, `veed/fabric-1.0` and
    `bytedance/omni-human` — on accuracy, latency, or price per second? No independent comparison of any
    of them was captured, and Replicate's run counts are usage counters, not quality signals.

## Evidence status

**Evidence floor: met.** First-party: eight new Kling AI captures — the lip-sync API reference, the face
recognition reference, the API changelog, the API price list, the feature page with its FAQ payload, the
user guide, the 2026-10-21 blog guide, and the API privacy policy and paid-service terms — plus the
pre-existing terms-of-service and `/dev/pricing` records. Independent hosts: one fal record (catalogue
metadata, two OpenAPI schemas, price strings, model-page prose) and one Replicate record (README, input
schema, price block, run counts, one example prediction). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base: no video was submitted, no endpoint called, no latency timed, no output inspected. Capability
statements are vendor or host documentation; the "precision lip-sync" and "12 minutes" language is fal's;
the "2 minutes" figure is the vendor's; the only run-level timing is Replicate's showcased example, which
is one logged prediction with no controlled conditions.

**Date status: out of window.** First release 2024-12-23, ten months before the 2025-10-26 cut-off. The
roster retains the row as a specialist/utility exception and this page states the original date rather
than dating it forward. The one date that would look in-window — the user guide's "Nov 23, 2025" stamp —
is a section-wide template date and is not evidence of a launch.

**Retrieval note.** The API documentation is a client-rendered SPA that returns an empty body through
text extractors; the body here was obtained by headless Chrome. An earlier attempt through
`r.jina.ai` produced a sidebar-only render, which would have looked like "the page has no content".

**What would change this assessment:** a controlled run on a fixed 10-second clip with identical audio
across the vendor API, fal and Replicate, measuring wall-clock latency, output resolution and frame rate,
mouth-shape error against the source, and whether the original track survives; a multi-face clip to see
whether `face_id` selection actually works and what the hosts do with two faces; a 60-second clip direct
to the vendor to confirm the ceiling that both hosts hide; and a probe of `sound_insert_time` to see
whether partial-clip dubbing behaves as documented.

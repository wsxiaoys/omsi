# Sync Lipsync 3 (sync-3)

Synchronicity Labs' (`sync. labs`) lip-sync model announced on 2026-04-06 as `sync-3`, the
successor to lipsync-2. It uses full-shot processing instead of the previous snippet-based
lipsync-2 architecture, adds still-image input, and is now the vendor's default model
([launch post](../../sources/sync.so/sync-3-launch-blog/2026-10-26.md),
[model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md)). It is sold as a premium model, not a
tier of lipsync-2: it costs roughly 2–3× more per output second and the vendor's own latency table puts
it several times slower.

It is inside the roster's one-year window: 2026-04-06 is after 2025-10-26. The roster label "Sync
Lipsync 3" is a discovery label; the vendor's model ID is `sync-3`, and fal's `v3` path is a host
generation label, not the model's name.

## Identity

- **Canonical name / ID:** `sync-3`. The docs' quick reference gives "Model name: `sync-3`" and
  "Status: Default model for all users"
  ([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md)).
- **Vendor:** Synchronicity Labs Inc., trading as `sync. labs` (also written "Sync Labs"). The terms
  name "Synchronicity Labs Inc." ([terms](../../sources/sync.so/terms-of-service/2026-10-26.md)); fal's
  `modelLab` is "Syncso" ([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)).
- **Aliases:** "sync-3" is the canonical spelling; "sync-3 Lipsync" is fal's video-endpoint title and
  "sync-3 Avatar Image to Video" is fal's image-endpoint title. The roster's "Sync Lipsync 3" and fal's
  path segment `v3` are descriptive, not vendor IDs. No captured page calls it "Lipsync 3.0".
- **Siblings:** `lipsync-2`, `lipsync-2-pro`, `react-1`, and the legacy
  `lipsync-1.9.0-beta`. lipsync-2 and lipsync-2-pro remain served; sync-3 is the flagship, not a
  replacement that delists them
  ([model comparison](../../sources/sync.so/lipsync-models-comparison/2026-10-26.md),
  [pricing](../../sources/sync.so/sync-3-pricing/2026-10-26.md)).

| Route | Identifier | Status at capture |
| --- | --- | --- |
| sync. labs API | `POST /v2/generate` with `"model": "sync-3"` | Default model; public |
| sync. labs Studio / Premiere / ComfyUI / MCP | sync-3 | Available |
| fal | `fal-ai/sync-lipsync/v3` | `public`, `licenseType: commercial`, `hostingType: proxy` |
| fal | `fal-ai/sync-lipsync/v3/image-to-video` | `public`, `licenseType: commercial`, `hostingType: proxy` |
| Replicate | none | No sync-3 listing under `sync` or in search |

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-04-06 | Launch post "sync-3: the most intelligent lipsync model" (byline "April 6, 2026") | [launch post](../../sources/sync.so/sync-3-launch-blog/2026-10-26.md) |
| 2026-04-06 | fal creates/publishes `fal-ai/sync-lipsync/v3` (`publishedAt` 11:59:40Z) | [fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md) |
| 2026-05-05 | Changelog: "sync-3 ... now available to all users, including free tier" | [changelog](../../sources/sync.so/sync-3-changelog/2026-10-26.md) |
| 2026-06-22 | fal publishes `fal-ai/sync-lipsync/v3/image-to-video` | [fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md) |
| 2026-07-14 | Changelog: "Image-to-video with sync-3" added to App, API, Premiere and DaVinci | [changelog](../../sources/sync.so/sync-3-changelog/2026-10-26.md) |

The launch date and the broad-availability date are different. The April post announces the model; the
May changelog entry says it became available to all users, including the free tier. No captured page
says what access looked like between those dates.

### v2 vs v3

| | lipsync-2 | sync-3 |
| --- | --- | --- |
| Processing | 2-second independent chunks | full shot, all frames at once |
| Face resolution (claim) | 512×512 | "4K native" |
| Image input | No | Yes (JPEG/PNG/WebP) |
| Close-ups / extreme angles | Limited | Native |
| Obstruction detection | Manual opt-in | Automatic |
| Silent lip opening | No | Yes |
| Price at 25 fps | $0.04–$0.05/sec | $0.107–$0.133/sec |

Sources: [model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md),
[model comparison](../../sources/sync.so/lipsync-models-comparison/2026-10-26.md),
[pricing](../../sources/sync.so/sync-3-pricing/2026-10-26.md). The two models have different input
surfaces (image input is sync-3-only), different prices, and different documented latency, so a single
verdict would mislead a reader of the other. This page does not transfer lipsync-2 findings to sync-3.

## Current assessment

sync-3 is a real, first-party, distinct model — not a relabelled lipsync-2 and not a host invention.
The evidence is direct: a dated vendor launch post, a model-reference page, a comparison page, a price
list, a billing page, a changelog, and a fal endpoint whose publish timestamp matches the launch date.
The vendor calls it the default model, and fal lists it as public and commercial.

What the evidence supports is a **premium, slow, full-shot model for difficult footage**. The
documented deltas over lipsync-2 are architectural (global shot context rather than 2-second chunks),
operational (image input, automatic obstruction handling, extreme-angle support), and commercial
(higher price, longer generation time). The vendor's own table puts sync-3 at ~10–15 minutes for a
30-second video and ~45–55 minutes for a 2-minute video, against ~1–3 and ~4–8 minutes for lipsync-2
([generation times](../../sources/sync.so/sync-3-generation-times/2026-10-26.md)). That is the
practical trade: sync-3 is for shots that lipsync-2 fails on, not for throughput.

What the evidence does **not** support is a quality ranking. No independent benchmark, arena, or
third-party measurement of sync-3 was captured. The vendor's claims — "the most powerful lip sync
model ever built", "nearly indistinguishable", "most flawless" — are marketing, not measurements
([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md),
[product page](../../sources/sync.so/sync-3-model-page/2026-10-26.md)). The one quantitative capability
claim, 4K native output, conflicts with the vendor's own media-format documentation (see
**Unresolved questions**).

Position as of capture: current and default, not preview or deprecated. lipsync-2 and lipsync-2-pro
remain the cheaper/faster options; sync-3 is the specialist for close-ups, profiles, obstructions and
multi-speaker scenes.

## Documented capabilities

All of the following is vendor or host documentation, not independent testing.

### Inputs and outputs

- **Video + audio** — the primary mode. `video_url` and `audio_url` are both required on fal's
  video-to-video endpoint ([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)).
- **Video + text (TTS)** and **image + text (TTS)** — the API can synthesize speech when given text
  instead of audio ([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md)).
- **Image + audio** — a still face plus an audio track produces a talking video. This is sync-3-only
  relative to lipsync-2/lipsync-2-pro. Image formats: JPEG, PNG, WebP. For multi-face images, manual
  speaker selection is required (`coordinates` with `frame_number: 0`); `auto_detect` is not supported
  for images ([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md)).
- **Output:** a single video file. On fal the schema returns `{ "video": File }`, and the example is
  `video/mp4` ([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)). sync. labs
  re-encodes all output to H.264 (libx264, `-crf 17 -preset slow`) and the output dimensions match the
  input dimensions and orientation
  ([media formats](../../sources/sync.so/sync-3-media-formats/2026-10-26.md)).
- **Languages:** "95+" ([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md)); the launch post
  says performance is preserved "across languages"
  ([launch post](../../sources/sync.so/sync-3-launch-blog/2026-10-26.md)).

### Duration

Duration is not a fixed model parameter. For video + audio, the output length is determined by
`sync_mode`:

| Mode | Effect when durations differ | Output length |
| --- | --- | --- |
| `cut_off` | clips audio to video, or trims video to audio | shorter input |
| `bounce` | when audio is longer, plays video forward/backward until audio ends; when video is longer, trims video | audio length |
| `loop` | when audio is longer, restarts video; when video is longer, trims video | audio length |
| `silence` | when video is longer, pads audio with silence; when audio is longer, keeps audio length | longer input |
| `remap` | time-stretches video to audio | audio length |

Source: [sync mode](../../sources/sync.so/sync-3-sync-mode/2026-10-26.md). Plan caps apply on top:
Free 20 s, Hobbyist 1 min, Creator 5 min, Growth 10 min, Scale 30 min; free accounts get at most one
15-second sync-3 generation per month
([billing](../../sources/sync.so/sync-3-billing/2026-10-26.md),
[pricing](../../sources/sync.so/sync-3-pricing/2026-10-26.md)). The two pages disagree on the general
free cap (20 s in billing, 15 s in pricing), while both cap sync-3 itself at 15 s. fal's endpoint
schema does not state a duration cap ([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)).

### Resolution and frame rate

- Vendor docs: "Face resolution: 4K native output"; the comparison page says "4K native output with
  built-in super resolution"
  ([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md),
  [model comparison](../../sources/sync.so/lipsync-models-comparison/2026-10-26.md)).
- Launch marketing: "sync-3 runs up to 4K at 60fps"
  ([launch post](../../sources/sync.so/sync-3-launch-blog/2026-10-26.md)).
- Input video is capped at 4096×2160; above that is rejected. Output is H.264, SDR, no alpha, and
  "always matches the input dimensions and orientation"
  ([media formats](../../sources/sync.so/sync-3-media-formats/2026-10-26.md)).
- Pricing is quoted per frame at **25 fps**, and the docs give per-second rates on that basis
  ([pricing](../../sources/sync.so/sync-3-pricing/2026-10-26.md)). The 60fps figure is a marketing
  ceiling, not a documented default output rate.

### Quality and control claims

Vendor claims, labelled as claims:

- "The most powerful lip sync model ever built"; "a generational shift in consistency and realism"
  ([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md)).
- Handles "tight close-ups, cropped frames, and partially obscured faces", "profile shots,
  over-the-shoulder angles", and obstructions such as "hands, microphones, scarves" automatically
  (same page).
- "Preserves the original speaker's cadence and emotional expression. Silent lips can be opened
  naturally." (same page).
- "fewer retakes, fewer manual fixes" and "the best generation in any possible scenario"
  ([product page](../../sources/sync.so/sync-3-model-page/2026-10-26.md)).
- "sync. preserves acting performance across languages"
  ([product page](../../sources/sync.so/sync-3-model-page/2026-10-26.md)).

No captured source quantifies any of these. There is no benchmark, no A/B test, and no third-party
review in the corpus.

### Async execution

sync-3 is asynchronous. `POST /v2/generate` accepts the job, then the client polls
`GET /v2/generate/{id}` or receives a webhook. Terminal statuses are `COMPLETED`, `FAILED` and
`REJECTED`; long videos are processed in 30–40 second chunks
([generation times](../../sources/sync.so/sync-3-generation-times/2026-10-26.md)). The Batch API
accepts up to 500 generations with a 24-hour turnaround. There is no documented real-time or streaming
mode.

### Host-side additions

fal's video endpoint exposes sync. labs' `sync_mode`, `active_speaker_detection` (auto-detect, v3,
manual coordinates, bounding boxes, face image), and a `enable_safety_checker` flag defaulting to
`true`. The schema says `temperature` and `occlusion_detection_enabled` are ignored by sync-3, and
`model_mode`/`prompt` are "primarily used by react-1"
([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)). The image-to-video endpoint
accepts only `image_url`, `audio_url` and the safety flag; it does not expose `sync_mode`.

## Limitations and constraints

- **No open weights.** Every captured route is hosted. No checkpoint, weights download, or
  self-hosting option was found. fal's `licenseType: "commercial"` is fal's label for use through fal,
  not a sync. labs weights licence ([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)).
- **Not real-time and not fast.** Vendor estimates: ~10–15 min for 30 s, ~45–55 min for 2 min
  ([generation times](../../sources/sync.so/sync-3-generation-times/2026-10-26.md)). The same vendor's
  comparison page rates sync-3 "Fast (4/5)", which contradicts the latency table; treat the table as
  the operational estimate and the rating as unexplained
  ([model comparison](../../sources/sync.so/lipsync-models-comparison/2026-10-26.md)).
- **4K input ceiling.** Videos above 4096×2160 are rejected. HDR is normalized to SDR, alpha is
  removed, and all output is re-encoded to H.264, so bitrate, frame rate and color grading can change
  ([media formats](../../sources/sync.so/sync-3-media-formats/2026-10-26.md)).
- **Audio limits.** 44.1/48 kHz, up to 32-bit float, up to 7.1 channels; spatial audio is not
  supported; only the first audio stream is processed (same page).
- **Plan-level duration caps.** 1 minute on Hobbyist, 5 on Creator, 10 on Growth, 30 on Scale; free
  sync-3 is capped at 15 seconds
  ([billing](../../sources/sync.so/sync-3-billing/2026-10-26.md),
  [pricing](../../sources/sync.so/sync-3-pricing/2026-10-26.md)).
- **Watermark on lower tiers.** Free and Hobbyist outputs carry a watermark; watermark-free downloads
  start on Creator ([billing](../../sources/sync.so/sync-3-billing/2026-10-26.md)).
- **Multi-face images need manual selection.** Auto-detect is not supported for image inputs
  ([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md)).
- **Long videos can time out.** Long inputs are chunked at 30–40 seconds; rapid scene changes or
  missing faces can cause `FAILED` with a timeout
  ([generation times](../../sources/sync.so/sync-3-generation-times/2026-10-26.md)).
- **No sync-3 on Replicate.** Replicate's official `sync` organization lists lipsync-2,
  lipsync-2-pro and react-1, not sync-3; a search for "sync-3" returned no sync-3 listing
  ([Replicate](../../sources/replicate.com/sync-org-model-list/2026-10-26.md)). fal is the only
  independent host captured for this model.
- **Host safety gate.** fal's `enable_safety_checker` defaults to `true`; a fal-side refusal is not
  evidence about sync. labs' own policy, and no captured page says whether a refused job is billed
  ([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)).
- **No documented consent/likeness verification.** The terms require the user to hold rights and obtain
  "any required consents", but no sync-3-specific deepfake, likeness, or consent-verification workflow
  was captured ([terms](../../sources/sync.so/terms-of-service/2026-10-26.md)).
- **No independent quality evidence.** See **Evidence status**.

## Access, pricing, licensing

### sync. labs (first-party)

Billing is per output frame, multiplied by the model's per-frame price. The published per-second rates
are quoted at 25 fps:

| Plan | Per-frame | Per-second (25 fps) |
| --- | --- | --- |
| Hobbyist / Creator | $0.00534 | $0.1334/sec |
| Growth | $0.00507 | $0.1266/sec |
| Scale | $0.00427 | $0.1066/sec |

Source: [pricing](../../sources/sync.so/sync-3-pricing/2026-10-26.md); the docs' headline range is
$0.107–$0.133/sec ([billing](../../sources/sync.so/sync-3-billing/2026-10-26.md)). With
`sync_mode: "cut_off"`, only the shorter of video and audio is billed. Free accounts get one
15-second sync-3 generation per month. Subscription tiers also gate duration and watermark removal.

### fal

Both `fal-ai/sync-lipsync/v3` and `fal-ai/sync-lipsync/v3/image-to-video` are priced at **$0.1333 per
output second** ($8 per minute), `licenseType: commercial`
([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)). That matches sync. labs'
Hobbyist/Creator rate ($0.1334/sec) but is higher than the Scale rate ($0.1066/sec); fal does not
publish a subscription discount.

### Replicate

No sync-3 endpoint. Replicate hosts only the v2 generation and react-1
([Replicate](../../sources/replicate.com/sync-org-model-list/2026-10-26.md)).

### Licensing and commercial terms

- **Proprietary, hosted-only.** No weights or open licence were found on any captured route.
- **sync. labs terms** (last revised 2024-06-06) require the user to own the uploaded content and to
  have "obtained any required consents", and grant sync. labs a broad, perpetual licence to use user
  content. They do **not** explicitly assign ownership of generated output or state that commercial
  use of output is permitted ([terms](../../sources/sync.so/terms-of-service/2026-10-26.md)).
- **fal** labels the endpoints "Commercial use" and `licenseType: "commercial"`, but that is fal's
  statement about use through fal, not a sync. labs output licence
  ([fal catalogue](../../sources/fal.ai/sync-lipsync-v3/2026-10-26.md)).
- **No sync-3-specific licence or acceptable-use addendum** was captured. The terms predate sync-3 by
  almost two years.

## Unresolved questions

1. **Is sync-3 actually 4K-native, or does it process a 512×512 face patch?** The model page and
   comparison say "4K native output"; the media-formats page says the pipeline "extracts the face
   region at 512×512 for processing, then composites it back into the original frame", and the
   generation-times page says "all models process faces at 512x512"
   ([model docs](../../sources/sync.so/sync-3-docs/2026-10-26.md),
   [media formats](../../sources/sync.so/sync-3-media-formats/2026-10-26.md),
   [generation times](../../sources/sync.so/sync-3-generation-times/2026-10-26.md)). The statements can
   coexist only if "4K native" describes the composited frame, not the generated face patch; no source
   says that.
2. **What is the output frame rate?** Pricing is defined at 25 fps; marketing says "up to 4K at 60fps";
   the media-formats page recommends 24/25/30 fps input and says the output frame rate "may differ".
   Whether 60fps is achievable, and under what input conditions, is undocumented.
3. **What exactly changed on 2026-05-05?** The changelog says sync-3 became available "to all users,
   including free tier"; the launch was 2026-04-06. The access state between those dates (preview,
   waitlist, paid-only) is not described.
4. **Why does the vendor rate sync-3 "Fast (4/5)" while its own latency table says 10–15 minutes for
   30 seconds?** No source reconciles the rating with the published estimate.
5. **Who owns the output, and is commercial use granted?** The terms contain no explicit output
   ownership or commercial-use clause; only the user-content warranty and licence to sync. labs.
6. **Does fal's safety checker change the model's behavior or billing?** The flag defaults to `true`;
   no refusal taxonomy or billing rule for rejected jobs was captured.
7. **Is there a sync-3 checkpoint or version suffix?** No model-ID date suffix or checkpoint history
   appears in any captured page. fal's `v3` is a host generation label, not a checkpoint.
8. **What are fal's duration and resolution limits for sync-3?** The endpoint schema does not state
   them; the vendor's plan caps do not necessarily apply to a fal job.
9. **How does sync-3 compare on quality with lipsync-2-pro, Kling Lip Sync, or other lip-sync models?**
   No independent measurement was captured for any of them.

## Evidence status

Evidence floor: **met.** First-party: the 2026-04-06 launch post, the `sync-3` model-reference page,
the lipsync-model comparison page, the product page, the pricing page, the billing docs, the
generation-times page, the media-formats page, the sync-mode guide, the changelog and the terms of
service. Independent host: fal's catalogue, endpoint schemas and price strings for both the
video-to-video and image-to-video endpoints; Replicate's `sync` organization listing is a second host
record and establishes the absence of sync-3 there. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; price statements are published
schedules; quality statements are the vendor's own marketing. The 4K/512×512 contradiction and the
speed-rating/latency contradiction are recorded rather than resolved.

The next useful evidence would be a reproducible test set against named endpoints and dates: the same
talking-head clip at 1080p and 4K through sync. labs and fal, with a profile shot and an obstructed
mouth; a still image plus audio through both image routes; a 30-second and a 2-minute job to check the
published latency; a `cut_off` versus `silence` pair to confirm billed duration; and an output probe
for actual resolution and frame rate to settle questions 1 and 2.

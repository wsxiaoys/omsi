# Seedance 2.5

ByteDance Seed's video generation model, the successor generation to Seedance 2.0. It generates 4–30
second clips with jointly generated audio from text, up to 30 images, 10 video clips and 10 audio
clips, and adds standalone audio references, timestamp-directed editing, a two-step 480p draft mode and
up to eleven prompt languages ([launch post](../../sources/bytedance.com/seedance-2-5-launch-blog/2026-10-26.md),
[Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md),
[BytePlus tutorial](../../sources/byteplus.com/seedance-2-5-tutorial/2026-10-26.md)).

The identity question this page has to answer is whether "2.5" is a new model or a relabelling of 2.0.
It is a **new model**: its own model IDs (`doubao-seedance-2-5-260628` in China,
`dreamina-seedance-2-5-260628` internationally), its own tutorial, its own price row at ~1.5× the 2.0
rate, and a capability envelope that differs in both directions — longer output and a much larger
reference budget, but no 4K and no cheap Fast/Mini tiers. The vendor calls it "the new-generation video
creation model" and keeps 2.0 on sale alongside it
([launch post](../../sources/bytedance.com/seedance-2-5-launch-blog/2026-10-26.md),
[Volcengine model list](../../sources/volcengine.com/seedance-2-5-model-list/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/seedance-2-5-catalogue/2026-10-26.md)).

It is inside the roster's one-year window under either candidate date: the Volcengine changelog month
(2026-06) and the ByteDance launch post (2026-07-31) are both after 2025-10-26.

## Identity

- **Canonical name:** Seedance 2.5. The vendor's page title is exactly "Seedance 2.5"
  ([model page](../../sources/bytedance.com/seedance-2-5-model-page/2026-10-26.md)), so the roster label
  matches first-party naming.
- **Vendor:** ByteDance Seed. Served first-party through Volcengine Ark in China and BytePlus ModelArk
  internationally, and by fal and Replicate.
- **Product names on other platforms:** "Doubao Seedance 2.5" on Volcengine, "Dreamina Seedance 2.5" on
  BytePlus, fal and Replicate. The prefixes are platform branding; the ID suffix is identical across the
  two clouds.

| Route | ID / endpoint | Notes |
| --- | --- | --- |
| Volcengine Ark (China) | `doubao-seedance-2-5-260628` | only tier; no fast/mini variants |
| BytePlus ModelArk (international) | `dreamina-seedance-2-5-260628` | only tier |
| fal | `bytedance/seedance-2.5/{text,image,reference}-to-video` | **gated**: "Early access — not yet generally available" |
| fal (US-hosted) | `bytedance/seedance-2.5/us/{text,image,reference}-to-video` | public since 2026-09-19 |
| fal (draft) | `bytedance/seedance-2.5/draft/complete` | public since 2026-09-25 |
| Replicate | `bytedance/seedance-2.5` | public; 480p/720p only |

Sources: [Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md),
[BytePlus tutorial](../../sources/byteplus.com/seedance-2-5-tutorial/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/seedance-2-5-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md).

- **Model-ID suffix:** `260628` reads as 2026-06-28. No captured page explains the convention or says
  what the checkpoint contains.
- **Siblings:** Seedance 1.0 Pro, 1.0 Pro Fast, 1.5 Pro, and the Seedance 2.0 family (2.0, 2.0 Fast,
  2.0 Mini). 2.5 is the flagship; there is no 2.5 Fast or Mini on any platform captured.
- **No technical report.** The Seed publications index carries no Seedance 2.5 paper, and the launch
  post cites no arXiv record — unlike Seedance 2.0, which has arXiv 2604.14148. Every capability claim
  below therefore rests on product documentation, not a method paper.

### Release timeline, and the date contradiction

| Date | Event | Source |
| --- | --- | --- |
| 2026-06 (month) | Volcengine changelog files `doubao-seedance-2-5-260628` as 新发布 (new release) | [release announcement](../../sources/volcengine.com/seedance-2-5-release-announcement/2026-10-26.md) |
| 2026-06-28 | Checkpoint date implied by the model ID suffix | [Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md) |
| 2026-07-31 | ByteDance Seed launch post: "officially launching Seedance 2.5"; rolling out on Jimeng AI and Doubao Pro; "API access coming soon via BytePlus ModelArk" | [launch post](../../sources/bytedance.com/seedance-2-5-launch-blog/2026-10-26.md) |
| 2026-08-07 | Replicate's earliest captured version of `bytedance/seedance-2.5` | [Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md) |
| 2026-09-19 | fal publishes the US-hosted 2.5 endpoints | [fal catalogue](../../sources/fal.ai/seedance-2-5-catalogue/2026-10-26.md) |
| 2026-09-25 | fal publishes `seedance-2.5/draft/complete` | [fal catalogue](../../sources/fal.ai/seedance-2-5-catalogue/2026-10-26.md) |
| 2026-10-23 | Replicate's latest version, three days before capture | [Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md) |

**Unresolved:** the changelog puts the API release in June and the launch post says on 2026-07-31 that
Ark API access is still "coming soon". One of them is wrong, or the post describes only the consumer
rollout and was written before it shipped. No captured page reconciles them. Use **2026-07-31** as the
public launch date and **2026-06-28** as the API/checkpoint date, and do not treat either as a
GA announcement.

## Current assessment

The evidence supports a clear reading: Seedance 2.5 is a **generation step focused on length, reference
capacity and edit control**, not a quality re-rating. Every structural difference from 2.0 is a
documented limit that moved:

| | Seedance 2.5 | Seedance 2.0 |
| --- | --- | --- |
| Max duration per generation | **30 s** (4–30, or model-chosen) | 15 s |
| Reference budget | **50** (30 images + 10 videos + 10 audio) | 15 (9 + 3 + 3) |
| Audio-only reference | **supported** | requires an accompanying image or video |
| Resolutions | 480p, 720p, **1080p (10-bit)** | 480p, 720p, 1080p, **4K (10-bit)** |
| Containers | mp4, **mov** | mp4 |
| Draft mode | **yes** (480p preview → 1080p final) | no |
| Prompt languages | **11** | 6 (Chinese and English, plus Spanish, Indonesian, Portuguese, Japanese) |
| Tiers | one | three (standard, Fast, Mini) |
| Token price (Volcengine, 480p/720p, no video input) | ¥70/M | ¥46/M |

Sources: [Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md),
[BytePlus tutorial](../../sources/byteplus.com/seedance-2-5-tutorial/2026-10-26.md),
[Volcengine pricing](../../sources/volcengine.com/seedance-2-5-pricing/2026-10-26.md),
[Seedance 2.0](seedance-2.0.md).

Two consequences a reader should not miss. First, **2.5 is not a superset**: it drops 4K and has no
cheap tier, so a 4K deliverable or a low-cost high-volume workflow still belongs on 2.0. Second, the
per-token price rises ~1.5×, so a 5-second 720p clip costs about 1.5× what 2.0 charges on the same
platform — the 30-second capability is not free.

What the evidence does **not** support is any quality claim. There is no benchmark, arena or
third-party measurement of 2.5 in the captured corpus, no technical report, and no side-by-side against
2.0. The vendor's own claims ("more realistic", "smoother and more consistent" motion, reduced
"overly artificial look") are unquantified, and the vendor also states its own remaining gaps —
"the physical plausibility of complex motions and the stability of scenes involving interactions among
multiple subjects" ([launch post](../../sources/bytedance.com/seedance-2-5-launch-blog/2026-10-26.md)).
Treat 2.5 as the longer, more controllable Seedance, and treat "better" as unverified.

Access is the practical obstacle. Both vendor clouds require a funding threshold before the model can
be enabled at all, fal's standard endpoints are behind a B2B-only access request while only the US
deployment is public, and Replicate's top resolution is 720p.

## Documented capabilities

Everything in this section is vendor or host documentation. No direct tests were run.

### Output envelope

| | Value |
| --- | --- |
| Duration | 4–30 s, or `-1`/`auto` for model-chosen (integer seconds) |
| Resolutions | 480p (8-bit), 720p (8-bit), 1080p (10-bit, H.265/HEVC) |
| Frame rate | **24 fps**, stated in the Volcengine model list; no frame-rate parameter exists |
| Aspect ratios | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16, plus `adaptive` |
| Containers | mp4 (default, standard colour precision) and mov (H.264 + yuv444p + PCM) |
| Audio | generated jointly, on by default (`generate_audio: true`); no price difference for audio |

Pixel dimensions at 16:9 are 854×480, 1280×720 and 1920×1080; at 21:9, 992×432, 1470×630 and 2206×946
([Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md)). The vendor
warns that 10-bit H.265 playback is not universal, the same caveat 2.0 carries for 4K.

`adaptive` is not a convenience flag but a requirement: editing, extension and first/first-last-frame
tasks accept **only** `adaptive` for `ratio`, and editing accepts **only** `-1` for `duration`.

### Inputs and tasks

- **Text-to-video, first-frame, first-and-last-frame, omni reference-to-video**, the last splitting by
  prompt intent into reference-to-video, video editing and video extension
  ([Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md),
  [BytePlus tutorial](../../sources/byteplus.com/seedance-2-5-tutorial/2026-10-26.md)).
- **Reference budget 50**: up to 30 images, 10 videos and 10 audio clips in one request, with video and
  audio each capped at 30 s combined. Assets are addressed as `@Image1` / `@Video1` / `@Audio1`
  (fal) or `[Image1]` / `[Video1]` / `[Audio1]` (Replicate).
- **Audio-only reference is new in 2.5.** BytePlus states it plainly: 2.5 "newly supports generating
  videos with pure audio references, without requiring image or video assets"
  ([BytePlus tutorial](../../sources/byteplus.com/seedance-2-5-tutorial/2026-10-26.md)), and Volcengine's
  API reference marks the text+audio combination "only Seedance 2.5"
  ([API reference](../../sources/volcengine.com/seedance-2-5-create-task-api/2026-10-26.md)). Replicate's
  schema still says `reference_audios` "Requires at least one reference image or video"
  ([Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md)) — see Unresolved questions.
- **Video editing** replaces subjects, adds/removes objects, repaints regions, and by the vendor's
  account handles green-screen background replacement with re-rendered physics (cloth, hair, gait,
  lighting) for the new scene. Editing is keyword-gated: the prompt must contain 编辑/增加/删除/修改
  (edit/add/delete/modify) or equivalent, or the task is misclassified.
- **Video extension** continues a clip forward or backward; the launch post's example prompt asks for
  "another 30-second clip" from an existing video, and the model page says the output can be extended
  "twice" while the post says "multiple rounds" and "several minutes".
- **Timestamp direction.** Timed shot lists in the prompt allocate running time to events; fal glosses
  this as "a timestamp gives an event its share of the running time rather than marking a
  frame-accurate cut"
  ([fal landing page](../../sources/fal.ai/seedance-2-5-landing-page/2026-10-26.md)). The vendor claims
  "timestamp-level control" for both generation and post-hoc editing; no source states the granularity.
- **Blockout / clay-render reference** (白模 / "white model"): an untextured 3D viewport supplied as a
  structural reference for camera path, blocking, subject trajectory and shot sizes, with lighting
  derived from the blockout's spatial information
  ([launch post](../../sources/bytedance.com/seedance-2-5-launch-blog/2026-10-26.md),
  [fal landing page](../../sources/fal.ai/seedance-2-5-landing-page/2026-10-26.md)). fal distinguishes
  coarse (structure only) from fine (full structure, re-rendered with new materials) blockouts.
- **Draft mode** — 2.5 only on the vendor platforms: generate a 480p preview, then complete it at
  1080p from the draft task ID within seven days; both steps bill separately. fal exposes the same
  flow as `draft: true` plus `draft/complete`.
- **Web-search tool** and **return-last-frame** are listed as supported for 2.5 on the Volcengine
  capability matrix. No captured page describes what the search tool does to a generation.
- **Watermark** toggle burns an "AI generated" mark into the lower-right corner; default off.

### Audio and language

Audio is generated jointly with picture, not layered afterwards — "Audio and video are generated
together, not separately" ([Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md)).
Dialogue is cued by double quotes in the prompt on both fal and Replicate.

2.5 supports **eleven prompt and audio languages**: Chinese, English, Spanish, Indonesian, Malay, Thai,
Arabic, Portuguese, Vietnamese, Japanese and Korean
([Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md),
[BytePlus tutorial](../../sources/byteplus.com/seedance-2-5-tutorial/2026-10-26.md)). That is the full
2.0 set plus Malay, Thai, Arabic, Vietnamese and Korean.

**Not established:** the audio channel layout. Seedance 2.0's page carries an unreconciled
stereo-vs-mono contradiction; for 2.5 the only related fact is that `mov` output carries PCM audio and
`mp4` carries AAC/MP3-class audio. No page states whether the delivered track is mono or stereo.

### Vendor and host claims (labelled as claims)

- "Longer Narratives. Better Control … Motion is smoother and more consistent, and the visuals are more
  realistic" ([model page](../../sources/bytedance.com/seedance-2-5-model-page/2026-10-26.md)).
- Reduced "overly artificial look": systematic optimisation of "object textures, skin and eye features,
  lighting, and color saturation", and fewer "uncontrolled occurrences in subtitles and background
  music" ([launch post](../../sources/bytedance.com/seedance-2-5-launch-blog/2026-10-26.md)).
- Story structure inside 30 s: the model "can organize multiple logically connected shots so that a
  story unfolds through setup, development, turning points, and resolution, rather than simply
  extending a single moment" (same record).
- fal adds "Weight, momentum, fabric and hair behave in generated video the way they do in filmed
  footage" and that the model "reasons about the whole shot at once, so identity, clothing, prop
  ownership and spatial direction hold from the first frame to the last"
  ([fal landing page](../../sources/fal.ai/seedance-2-5-landing-page/2026-10-26.md)).
- Industry claims — education (Doubao Learning "Doubao Classroom"), industrial manufacturing, robot
  training data, autonomous-driving long-tail simulation — with no numbers, named customers or
  evaluations ([launch post](../../sources/bytedance.com/seedance-2-5-launch-blog/2026-10-26.md)).

None of these has a measurement attached. fal's own showcase disclosure is worth quoting because it
undercuts the marketing: "Every clip was generated with Dreamina Seedance 2.5 and published by
BytePlus … None were generated via fal API"
([fal landing page](../../sources/fal.ai/seedance-2-5-landing-page/2026-10-26.md)).

## Limitations and constraints

- **No open weights.** Every route is hosted and proxied; fal reports `hostingType: "proxy"` and
  Replicate runs the model on a CPU runner with no GPU, consistent with forwarding. No ByteDance page
  offers a checkpoint or a weights licence
  ([fal catalogue](../../sources/fal.ai/seedance-2-5-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md)).
- **No 4K.** 2.5 stops at 1080p on every captured route, while 2.0 standard still offers 4K. This is the
  clearest capability regression between the generations
  ([Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md)).
- **No cheap tier, no offline/batch inference.** There is no 2.5 Fast or Mini, and both clouds mark
  offline inference unsupported for the model — Volcengine's `service_tier: flex` is explicitly "not
  currently supported" for 2.5 and 2.0
  ([API reference](../../sources/volcengine.com/seedance-2-5-create-task-api/2026-10-26.md)). The only
  cost lever is the two-step draft flow.
- **Real human faces cannot be uploaded as references.** "Seedance 2.5 does not support directly
  uploading reference images or videos containing real human faces"
  ([BytePlus tutorial](../../sources/byteplus.com/seedance-2-5-tutorial/2026-10-26.md),
  [Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md)). The
  documented workarounds are this account's own model outputs from the last 30 days, preset digital
  characters, and authorised real-person assets. fal's US-hosted Seedance 2.0 adds that "Faces and
  additional IP permissions are subject to a separate approval process"
  ([2.0 landing page](../../sources/fal.ai/seedance-2-0-landing-page/2026-10-26.md)); no equivalent
  statement was captured for 2.5's US tier, so whether it applies is unknown.
- **Task-type misclassification is a failure mode, not just a config error.** The model infers the task
  type from assets plus prompt, so a request can be accepted and then fail asynchronously
  (`InvalidParameter.TaskTypeMismatch`) if the prompt's intent disagrees with the declared type. Editing
  also imposes `ratio=adaptive`, `duration=-1` and a 4–30 s source clip
  ([Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md)).
- **Vendor platforms require a funding threshold.** Volcengine: balance > 200 CNY, a 200 CNY+ savings
  plan, or a resource pack. BytePlus: balance > USD 30, a USD 30+ savings plan, or a resource pack. An
  API key alone is not enough
  ([Volcengine pricing](../../sources/volcengine.com/seedance-2-5-pricing/2026-10-26.md),
  [BytePlus tutorial](../../sources/byteplus.com/seedance-2-5-tutorial/2026-10-26.md)).
- **fal's standard endpoints are gated and B2B-only.** The family page shows "Early access — This model
  is not yet generally available", with terms requiring business-only end users and an `end_user_id`
  per request. Only the US-hosted deployment is public, and fal publishes no date, price or approval
  criteria for the gate ([fal catalogue](../../sources/fal.ai/seedance-2-5-catalogue/2026-10-26.md)).
- **Host prose understates resolution.** fal's landing page says "up to 720p" in five places, including
  a FAQ answer, while its own schema exposes 1080p and its price strings quote a 1080p rate; Replicate
  genuinely stops at 720p. Read schemas as operational truth and prose as launch copy
  ([fal landing page](../../sources/fal.ai/seedance-2-5-landing-page/2026-10-26.md),
  [Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md)).
- **Region limits.** BytePlus serves the model from `ap-southeast-1` (Johor) only; `eu-west-1` carries
  no video model. Volcengine's documented endpoint is `ark.cn-beijing.volces.com`
  ([BytePlus model list](../../sources/byteplus.com/seedance-2-5-model-list/2026-10-26.md),
  [Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md)).
- **Rate limits are per account and per model, not per version.** 600 RPM / 10 concurrent tasks
  (enterprise) and 180 RPM / 3 concurrent (individual) on Volcengine; 2.5 shares its pool with 2.0
  ([Volcengine model list](../../sources/volcengine.com/seedance-2-5-model-list/2026-10-26.md)).
- **Minimum token charge on video-input requests.** If the estimate falls below the floor, the request
  is billed at the floor, which is why with-video prices are ranges
  ([Volcengine pricing](../../sources/volcengine.com/seedance-2-5-pricing/2026-10-26.md),
  [BytePlus pricing](../../sources/byteplus.com/seedance-2-5-pricing/2026-10-26.md)).
- **Output URL expiry.** Task records persist 7 days and output URLs 24 hours with a 100-download cap,
  so anything not copied to your own storage is lost
  ([Volcengine tutorial](../../sources/volcengine.com/seedance-2-5-tutorial/2026-10-26.md)).
- **Moderation exists but is undocumented.** Both clouds state that generations failing "for reasons
  such as content moderation" are not billed, implying a moderation step, but no policy, threshold or
  refusal taxonomy was captured. A refusal on one platform is not evidence about the model's general
  willingness.
- **Replicate's with-video pricing runs the wrong way.** It charges 4.2× the no-video rate when a video
  is supplied ($0.9676/s vs $0.2312/s at 720p), where the vendor and fal both discount to 0.6×. No
  page explains this; treat those tiers as unverified for budgeting
  ([Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md)).
- **No independent quality evidence.** No benchmark, arena or third-party measurement of Seedance 2.5
  was captured, and there is no technical report to check vendor claims against.

## Access, pricing, licensing

Four routes with three different billing bases: per token on the vendor clouds, per second of output
video on the hosts.

### Volcengine Ark (China) — per token, CNY

| Configuration | 元 per million tokens |
| --- | --- |
| 480p/720p, no video input | 70.00 |
| 480p/720p, with video input | 42.00 |
| 1080p, no video input | 77.00 |
| 1080p, with video input | 46.00 |
| 4K / offline inference | not supported |

Published examples, 16:9, 5-second output, no video input: 480p ¥3.36 (¥0.67/s), 720p ¥7.56
(¥1.51/s), 1080p ¥18.71 (¥3.74/s). With video input (2–30 s source): 480p ¥3.63–14.12, 720p
¥8.16–31.75, 1080p ¥20.12–78.25. Only successful generations are billed
([Volcengine pricing](../../sources/volcengine.com/seedance-2-5-pricing/2026-10-26.md)).

### BytePlus ModelArk (international) — per token, USD

| Configuration | USD per million tokens |
| --- | --- |
| 480p/720p, no video input | $10.70 |
| 480p/720p, with video input | $6.40 |
| 1080p, no video input | $11.70 |
| 1080p, with video input | $7.00 |

At the page's own ~6.57 CNY/USD ratio this is the China list converted with no regional discount. The
2.0 examples on the same page (480p $0.35, 720p $0.76, 1080p $1.87, 4K $3.89 per 5 s) put 2.5's
computed equivalents at roughly $0.52, $1.10 and $2.62 for 5 s — about 1.5× 2.0 at every resolution
([BytePlus pricing](../../sources/byteplus.com/seedance-2-5-pricing/2026-10-26.md); the 2.5 per-video
figures are arithmetic, not published).

### fal — per second of output video, USD

| Tier | 480p | 720p | 1080p |
| --- | --- | --- | --- |
| US-hosted, no video input | $0.2205/s | $0.4730/s | $1.164/s |
| US-hosted, with video input | — | $0.2838/s | — |
| Draft completion | — | — | $1.164/s |
| Standard (non-US) | not published (gated) | — | — |

fal's US token rate is $21.40 per million tokens for 480p/720p and $23.40 for 1080p — exactly 2×
BytePlus for the same model, which is what the US hosting premium costs here. The ×0.6 with-video
multiplier mirrors the vendor's own discount
([fal catalogue](../../sources/fal.ai/seedance-2-5-catalogue/2026-10-26.md)).

### Replicate — per second of output video, USD

| Resolution | No video input | With video input |
| --- | --- | --- |
| 480p | $0.1028/s | $0.4304/s |
| 720p | $0.2312/s | $0.9676/s |

No 1080p tier. The no-video rates are the cheapest captured route — about half of fal US and level with
BytePlus ([Replicate](../../sources/replicate.com/seedance-2-5/2026-10-26.md)).

### Comparing routes

For a 5-second, 720p, 16:9, no-reference generation: Replicate $1.16, BytePlus ≈$1.10, Volcengine
¥7.56 (≈$1.15 at the same 6.57 ratio), fal US $2.37. At 1080p: BytePlus ≈$2.62, fal US $5.82,
Volcengine ¥18.71 (≈$2.85). Replicate and fal cannot deliver 4K at all because 2.5 has none.

These are arithmetic from published schedules at one configuration, excluding activation thresholds,
the gated standard tier and any volume terms. The robust conclusion: 2.5 costs roughly 1.5× 2.0 for
the same output on the same platform, the cheapest routes are Replicate and BytePlus, and fal's US
deployment is about twice the vendor price for jurisdictional separation.

### Licensing and terms

- **No weights, no open licence.** All access is hosted and commercial. fal's
  `licenseType: "commercial"` describes use through fal, not a ByteDance grant.
- **Output ownership and commercial-use terms were not captured.** Neither vendor cloud's model service
  agreement nor fal's or Replicate's terms were retrieved, so no statement is made here about who owns
  generated video or what commercial use is permitted.
- **IP/copyright surcharge exists on Volcengine.** Video generation with copyrighted IP references is
  billed separately, per input IP per second, with prices shown only in the console — "单条视频版权费用 =
  Σ（每个输入 IP 的单价 × 视频时长）". This is a cost line that only appears for IP-referenced work
  ([Volcengine pricing](../../sources/volcengine.com/seedance-2-5-pricing/2026-10-26.md)).
- **fal's standard tier adds B2B-only terms**: business end users only, `end_user_id` per request, plus
  an access request ([fal catalogue](../../sources/fal.ai/seedance-2-5-catalogue/2026-10-26.md)).
- **Reference-asset rights are the user's problem**, and real human faces are blocked at upload.

## Unresolved questions

1. **When was it actually released?** The Volcengine changelog says June 2026 (and the ID says
   2026-06-28); the launch post says 2026-07-31 and describes the API as still coming soon. No source
   reconciles them.
2. **Is there a technical report?** None found on the Seed publications index; arXiv was rate-limited at
   capture. Without one, there is no architecture, training-data or evaluation detail for 2.5 at all.
3. **How many extension rounds are allowed, and how long can a final video get?** The model page says
   "extend twice", the launch post says "multiple rounds" and "several minutes". No hard limit is
   published.
4. **Does 2.5 accept audio-only references on every route?** The vendor says yes; Replicate's schema
   still requires a reference image or video. Either Replicate carries a stale 2.0-era constraint or the
   capability is conditional.
5. **Is the delivered audio mono or stereo?** Unstated for 2.5. The 2.0 page carries an unreconciled
   stereo-vs-mono contradiction that 2.5's docs neither repeat nor resolve.
6. **Why does 2.5 drop 4K** when 2.0 standard has it? No page explains whether 4K is planned, omitted
   for cost, or reserved for a later tier.
7. **Why is fal's standard tier gated while its US deployment is public**, and on what criteria is
   access granted? No date, price or approval process is published.
8. **Why does Replicate charge 4.2× more when a video input is present**, when both the vendor and fal
   discount to 0.6×? Possibly input seconds billed as output seconds; undocumented.
9. **Which checkpoint do the hosts serve?** fal and Replicate expose endpoint/version dates but not the
   ByteDance checkpoint, so cross-host comparisons cannot be pinned to a model version.
10. **Do the vendor platforms and the hosts run the same weights?** fal proxies and Replicate runs no
    GPU, but neither says so explicitly, and their parameter surfaces differ (Replicate lacks 1080p and
    the audio-only path; fal adds `bitrate_mode`, `codec` and `draft`).
11. **How does 2.5 compare with 2.0, Kling, Veo or Wan on any measured axis?** No independent benchmark
    was captured for any of them, and the vendor published no numbers for 2.5.

## Evidence status

Evidence floor: **met.** First-party: the ByteDance Seed launch post (2026-07-31) and model page; five
Volcengine Ark documents (tutorial, create-task API reference, model list, pricing, release
announcement); three BytePlus ModelArk documents (tutorial, pricing, model list). Independent hosts: two
fal records (catalogue/schemas/prices, landing page/FAQ) and one Replicate record (README, schema,
pricing, version dates). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules (the 2.5
per-video USD figures on the BytePlus side are arithmetic from its token rates and are labelled as
such); quality statements are the vendor's own. The BytePlus token-rate table is a reconstruction from
the page's client-rendered payload, cross-checked three ways and documented in that record.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same prompt at 4, 15 and 30 seconds to see where continuity breaks; a 30-image + 10-video + 10-audio
request to find the practical reference ceiling; a timestamped shot list to check whether pacing lands
where the prompt puts it; an edit and an extension on the same source clip; an audio-only reference
request on both a vendor endpoint and Replicate to settle question 4; a seed-reuse test; and a
channel-layout check on a delivered `mov` to settle question 5.

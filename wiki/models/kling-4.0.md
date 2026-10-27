# Kling 4.0

Kuaishou's video generation model, launched on the Kling AI product on 2026-10-15 as the successor to
Kling 3.0. It generates 3–30 second clips with two-channel stereo audio from text, up to 10 keyframe
images, or up to 15 mixed reference assets, and edits existing footage in the same model
([release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md),
[launch post](../../sources/kling.ai/kling-4-0-launch-news-post/2026-10-26.md)). Output is 720p or 1080p
today; native 4K and 10-bit HDR are announced as coming soon and are not yet served on any route
captured.

It is inside the roster's one-year window: 2026-10-15 is after 2025-10-26, and the roster label
("Kling 4.0", fal `kling/v4`) matches first-party naming. Kling 3.0 and 3.0 Omni remain available
alongside it and still own the 4K endpoints, so 4.0 is not a strict superset of its predecessor at
launch.

## Identity

- **Canonical name:** Kling 4.0. The vendor's release note is titled "Meet All-New Kling 4.0!", the
  feature page is "Kling 4.0: 30s AI Videos & Cinematic Motion", and the user guide is "Kling 4.0 User
  Guide" ([release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md),
  [feature page](../../sources/kling.ai/kling-4-0-feature-page/2026-10-26.md),
  [user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md)).
- **Vendor:** Kuaishou, shipped under its Kling AI brand. Replicate calls it "Kuaishou's latest video
  model" ([Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md)); fal's model lab is "Kling"
  ([fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md)).
- **Aliases:** "Kling Video 4.0" appears in the vendor FAQ ("What's the difference between Kling Video
  4.0 and 3.0?"); "Kling 4.0 Flash" is a *different, cheaper model*, not an alias. Hosts do not rename
  it.
- **Roster label check:** the discovery path `kling/v4` resolves to four live fal entries titled "Kling
  4.0 …" with `modelFamily: "Kling v4"` and `landingPageSlug: "kling-4"`
  ([fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md)). The label is
  correct; there is **no label collision with Kling 3.0**.

| Route | Identifier | Status at capture |
| --- | --- | --- |
| Kling AI product (web app) | Kling 4.0 | launched 2026-10-15, "fully available" 2026-10-23 |
| Kling AI API | `POST /image-to-video/kling-4.0` on `api-singapore.klingai.com` | sidebar label "Kling 4.0 PREVIEW"; full availability announced for 2026-10-28 |
| fal | `kling/v4/{text-to-video,image-to-video,reference-to-video,video-to-video/edit}` | endpoints `public`, page says "API coming soon", playground/agent only |
| Replicate | `kwaivgi/kling-v4.0` | runnable, 38 runs, one endpoint for all modes |

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-10-15 | "officially became available to everyone on October 15"; release-note `lastmod` in `sitemap-release.xml` | [release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md) |
| 2026-10-15 | "Kling AI officially launched Kling 4.0 on October 15, 2026" | [launch post](../../sources/kling.ai/kling-4-0-launch-news-post/2026-10-26.md) |
| 2026-10-16 | fal creates its four `kling/v4` endpoint records | [fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md) |
| 2026-10-21 | fal publishes the endpoints and the landing page ("Last updated: October 21, 2026") | [fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md), [fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md) |
| 2026-10-23 | "Kling 4.0 is now fully available" | [KING CARD post](../../sources/kling.ai/kling-4-0-king-card-post/2026-10-26.md) |
| 2026-10-23 | Replicate model created ("3 days, 11 hours ago" at capture) | [Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md) |
| 2026-10-26 | Kling 4.0 User Guide published (77 min read) | [user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md) |
| 2026-10-28 | Announced: "Kling 4.0 API will be fully available on October 28 at 11:00 PM (UTC+8)" | [API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md) |

### GA or preview?

Both, on different surfaces, and the vendor's own pages disagree in a way worth stating rather than
smoothing over:

- The **product** is generally available. The release note says it "officially became available to
  everyone", and the 2026-10-23 case study says it "is now fully available"
  ([release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md),
  [KING CARD post](../../sources/kling.ai/kling-4-0-king-card-post/2026-10-26.md)).
- The **API** is in preview. The API sidebar labels the model "Kling 4.0 PREVIEW", a banner on the same
  page says "Kling 4.0 API Is Now Available for Early Access", the model card on the API overview says
  "Coming Soon", and the price list says "Kling 4.0 API access is not yet available"
  ([API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md),
  [API pricing](../../sources/kling.ai/kling-api-pricing/2026-10-26.md)).
- The **hosts** straddle it. fal says the model is "now on fal in the playground and fal Agent, with API
  access coming soon" and that every clip on its page was made by Kling AI, "Not generated via fal API"
  ([fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)). Replicate, created two days
  later, shows 38 runs and an API tab ([Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md)).
  If Replicate is really executing the model while Kling's own API is still early-access-only, either
  Replicate is an early-access partner or it is proxying a channel the vendor has not announced; no
  captured page says which.

Read "Kling 4.0 is available" as true for the web product and unproven for self-serve API access on
2026-10-26.

### Siblings

| Model | Position | Source |
| --- | --- | --- |
| Kling 4.0 Flash | 3–20 s, 720p only, 8-bit SDR, no start-and-last-frame or multi-keyframe; "early access on fal" | [release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md), [user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md), [fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md) |
| Kling 3.0 / 3.0 Omni | previous generation; 15 s max, 4K endpoints, audio as a priced switch | [fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md), [API pricing](../../sources/kling.ai/kling-api-pricing/2026-10-26.md) |
| Kling 3.0 Turbo | faster, cheaper 3.0 | [API pricing](../../sources/kling.ai/kling-api-pricing/2026-10-26.md) |
| Kling 2.6, O1, O3, Motion Control, Avatar, Lip Sync | retained specialist endpoints on fal | [fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md) |

Kling 4.0 Flash is not in the roster and has no page here. It matters for identity because three separate
documents describe it as a *different* model with a lower ceiling, not as a speed setting of 4.0.

### A host naming wrinkle that is easy to misread

fal uses three parallel Kling naming schemes: numeric (`v2.6`, `v3`, `v4`), "Omni" (`o1`, `o3`), and
capability suffixes (`4k`, `turbo`, `motion-control`). Its site navigation links the label "Kling 3.0"
to the **O3** endpoints, while the separate `v3` endpoints also title themselves "Kling 3.0"
([fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md)). Neither is Kling 4.0;
only `kling/v4` is. Anyone matching host slugs to vendor versions should use fal's `version: "4.0"`
field rather than the slug pattern.

## Current assessment

Kling 4.0 is a real, first-party, distinct generation — not a relabelled 3.0 and not a host invention. The
evidence is unusually direct for a two-week-old model: a vendor release note dated the launch day, a
feature page, a 77-minute user guide published at capture, an API reference, a price list, and two host
records that agree on price to the cent.

What changed relative to 3.0, per the vendor: native duration 15 s → 30 s, up to 10 keyframes, up to 15
combined reference assets (10 images / 5 videos ≤30 s / 7 elements / 3 voice profiles), two-channel stereo
audio with improved lip sync, 21:9 output, and targeted video editing with creative recreation
([feature page](../../sources/kling.ai/kling-4-0-feature-page/2026-10-26.md),
[user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md)). fal's comparison table states
the same delta independently and adds the one place where 4.0 is *behind*: "Kling 3.0 — Multi-shot
storyboards, 4K output — 15 s — Up to 4K", against "Kling 4.0 — … — 30 s — Up to 1080p"
([fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)).

That combination is the practical verdict. Kling 4.0 is the better choice for long takes, reference-heavy
shots and editing, and the worse choice when the deliverable has to be 4K today, because 4K and 10-bit HDR
are announced but not shipped. The vendor says so itself in three places ("coming soon" in the release
note, the feature page and the guide) while still listing 4K in every specification table.

There is no independent quality evidence. No benchmark, arena entry or third-party measurement of Kling
4.0 was captured for this page. Every quality statement here is the vendor's, and every demo clip on fal's
page was produced by the vendor, not by fal.

## Documented capabilities

Vendor and host documentation, not independent testing.

### Output envelope

| | Kling 4.0 | Kling 4.0 Flash |
| --- | --- | --- |
| Duration | 3–30 s, 1-second steps, default 10 s | 3–20 s |
| Resolution | 720p / 1080p (API enum stops here); 4K "coming soon" | 720p |
| Dynamic range | 10-bit HDR at 1080p/4K, "coming soon" | 8-bit SDR |
| Aspect ratios | 21:9, 16:9, 1:1, 9:16, Auto | not stated |
| Audio | two-channel stereo, lip sync | native audio |
| Frame rate | **not documented on any captured page** | — |
| Container / codec | **not documented** | — |

Sources: [release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md),
[user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md),
[API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md),
[fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md).

The API's `resolution` enum is only `720p` and `1080p`, default `1080p`; `duration` is an integer 3–30
defaulting to 10, and the docs say that when `duration` is omitted "the model detects and follows the
duration intent in the Prompt" ([API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md)).
No `aspect_ratio` field is documented on the API endpoint even though the product UI offers five options —
so aspect control is a UI feature whose API equivalent was not captured.

### Inputs and modes

- **Text to video, image to video, first-and-last-frame, multi-keyframe** — all supported on 4.0; Flash
  supports text, first-frame image and references but "does not currently support start-and-last frames or
  multiple keyframes" ([user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md)).
- **Two mutually exclusive entry points.** "Omni Reference" takes images, videos and voice profiles;
  "Keyframes" takes images only. "The capabilities of the two entry points cannot be combined within a
  single generation task" (same record).
- **Omni Reference limits:** ≤10 images (≤30 MB, 2:5–5:2), ≤5 videos (3–30 s each, ≤30 s and ≤300 MB
  total), ≤7 elements including ≤3 video elements (source footage 3–8 s), ≤3 voice profiles (5–30 s of
  audio, ≤50 MB), ≤15 assets combined (same record).
- **Keyframes:** up to 10 images, each ≤30 MB, 2:5–5:2; the Keyframes entry "does not support uploading
  reference assets", and once images are supplied the aspect ratio follows the first keyframe (same
  record).
- **Video editing:** "Supports up to 5 input video clips, including 1 primary video. Each clip must be
  3–30 seconds long, and the combined duration of all clips must not exceed 30 seconds"
  ([release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md)). Replicate exposes it as
  `base_video` plus an instruction and says "The output keeps the length and aspect ratio of the original
  video" ([Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md)).
- **Multi-shot via prompt:** "Split a generation into shots with per-shot prompts and durations, and the
  clip length is the sum of the shots" ([fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)).
  The vendor documents "Smart Storyboard" as on by default with no toggle
  ([user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md)). No source states a maximum
  shot count or how reliably cuts land.
- **Video extension:** "Extend videos multiple times, up to 2 minutes" — marked "(coming soon)" in the
  release note and guide, and "Kling has announced video extension up to 2 minutes as coming soon" on fal
  ([release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md),
  [fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)).

### Prompt limits: two first-party numbers

The release note, feature page and user guide all say **8,000 tokens**. The API reference and Replicate
say **26,000 English characters / 11,000 non-English characters**, with mixed input satisfying
`E/26000 + N/11000 ≤ 1` ([API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md)). These are different units, not
necessarily different limits, but no captured page gives the conversion. Treat 8,000 tokens as the
product-facing figure and the character budget as the API-enforced one.

### Audio

Two-channel stereo generated with the picture: "dialogue, singing, sound effects and ambience as
two-channel stereo, in sync with the picture", with lip sync including "sung vocals"
([fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)). Audio input is limited to voice
profiles: "Audio input currently supports voice profile references only […] Background music and sound
effects are generated by the model based on the visuals"
([user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md)). Subtitles and music are opt-out
rather than opt-in: "Only two types of negative instructions are truly necessary: no subtitles and no
background music. The model may add these by default" (same record).

Notably, Kling's own price list gives 3.0 separate "No Native Audio" / "With Native Audio" rates but gives
4.0 a single rate with no audio switch — consistent with audio being unconditional, though never stated
([API pricing](../../sources/kling.ai/kling-api-pricing/2026-10-26.md)).

### Language and on-screen text

Speech and text rendering are documented for Chinese, English, Japanese, Korean, Spanish, Portuguese,
German, French and Hindi, with accents and dialects including Beijing, Taiwanese, Northeastern, Sichuanese
and Cantonese Mandarin, and American, British and Indian English; "emoji and logo generation" are also
claimed ([release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md),
[user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md)). fal's list adds Indonesian
([fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)) — a host claim the vendor page
does not repeat. No accuracy rate is published for any language.

### Vendor claims (labelled as claims)

- "more stable dynamic motion, realistic physical interactions, and stronger cinematic camera control"
  ([feature page](../../sources/kling.ai/kling-4-0-feature-page/2026-10-26.md)).
- "Dynamic Motions improves body mechanics, spatial consistency, and movement continuity through rapid
  actions" (same record).
- "Kling 4.0 can expand and refine your instructions with a director's eye"
  ([release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md)).
- fal restates them as feature copy and adds its own: "On-screen text renders legibly in the same languages,
  plus emoji and logos, and stays readable as the camera moves." None of these carries a number or a
  harness ([fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)).

## Limitations and constraints

- **4K and 10-bit HDR are not shipped.** Announced as coming soon in every vendor document while still
  appearing in the specification tables. Every route captured tops out at 1080p
  ([release note](../../sources/kling.ai/kling-4-0-release-note/2026-10-26.md),
  [API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md),
  [fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)). If 4K is a hard requirement,
  Kling 3.0's 4K endpoints remain the answer within this family.
- **Video extension is announced, not available** ("coming soon" in the release note and guide).
- **Self-serve API access is not generally open.** The API is labelled PREVIEW, full availability is
  dated 2026-10-28, early access is by contact, and the prepaid resource packages "are not compatible
  with Kling 4.0 or Kling 4.0 Flash"
  ([API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md),
  [API pricing](../../sources/kling.ai/kling-api-pricing/2026-10-26.md)).
- **fal's own API is not open yet** for 4.0: "API access to Kling 4.0 is coming soon", playground and
  agent only, with the demo clips supplied by Kling AI
  ([fal landing](../../sources/fal.ai/kling-4-landing-page/2026-10-26.md)). fal's catalogue nevertheless
  lists the endpoints as `status: "public"`, which is a catalogue flag, not an access grant
  ([fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md)).
- **No audio upload.** Only voice profiles; music and effects cannot be supplied
  ([user guide](../../sources/kling.ai/kling-4-0-user-guide/2026-10-26.md)).
- **Reference and video quotas are shared.** Reference videos, videos for editing and video elements draw
  on one pool of 5 clips / 30 s (same record). Adding a 30-second edit source leaves no room for
  reference video.
- **The two entry points cannot be combined** in one generation, so a job that needs both pinned
  keyframes and reference assets has to be split (same record).
- **Watermarking defaults off, custom watermarks unsupported.** The API toggle is
  `watermark_info.enabled`, "default: false", and "Custom watermarks are not currently supported"
  ([API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md)). No captured page states
  whether the web product always marks output.
- **No weights.** Every route is hosted; fal lists `licenseType: "commercial"` and `hostingType: "proxy"`,
  and Replicate links Kling's own privacy policy, API terms and SLA as the governing documents — the
  clearest sign that hosts forward to Kling rather than running their own copies
  ([fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md)).
- **No moderation or consent documentation captured.** Kling's user policy, the API privacy policy and the
  paid-service protocol were linked but not retrieved, so nothing is claimed here about refusal
  behaviour, likeness rules or output ownership.
- **No frame rate.** No captured page states fps for 4.0, so no fps figure is given.

## Access, pricing, licensing

### Kling AI API — per second in units, $0.14 per unit

| Kling 4.0 (preview, "Coming Soon") | 720p | 1080p |
| --- | --- | --- |
| No video input | 1.0 Unit/s | 1.5 Units/s |
| With video input, input ≤ output | 0.6 Unit/s | 0.9 Unit/s |
| With video input, input > output | 0.6 Unit/s | 0.9 Unit/s |

Billing duration: output length when there is no video input; `output × 2` when input ≤ output;
`input + output` when input > output. At the $0.14 list price the unit rates are $0.14/s and $0.21/s
without video input, and $0.084/s and $0.126/s with it
([API pricing](../../sources/kling.ai/kling-api-pricing/2026-10-26.md)). The page is explicit that these
are "for preview purposes only and cannot be used to submit requests before launch". Kling 4.0 Flash is
"TBA".

### fal and Replicate — per second in USD

| Route | 720p | 1080p | Video-input 720p | Video-input 1080p |
| --- | --- | --- | --- | --- |
| fal `kling/v4` | $0.157/s | $0.235/s | $0.094/s | $0.141/s |
| Replicate `kwaivgi/kling-v4.0` | $0.157/s | $0.235/s | $0.094/s | $0.141/s |

Sources: [fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md). The two hosts are identical to the
cent, which is what a shared upstream price list looks like.

**The hosts charge a markup over the vendor's preview rate:** $0.157 vs $0.14 at 720p (+12%) and $0.235 vs
$0.21 at 1080p (+12%), and $0.094 vs $0.084 / $0.141 vs $0.126 with video input (+12%). A 10-second 1080p
generation is $2.10 at the vendor preview rate and $2.35 on both hosts. fal's billing note — "billed on the
input plus output length (minimum 2× the output)" — resolves to the vendor's rule exactly: when input ≤
output, `output + max(input, output) = 2 × output`. Replicate states it the same way and gives the worked
example: "editing a 5 second video into a 5 second output bills 10 seconds"
([fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md)).

### Relative to Kling 3.0

Kling 3.0 at 1080p with native audio is 1.2 units/s ($0.168/s) on the vendor list, or $0.168/s on fal's
Pro tier. Kling 4.0's preview rate at 1080p is 1.5 units/s ($0.21/s) — about 25% more per second for twice
the maximum duration and the reference set
([API pricing](../../sources/kling.ai/kling-api-pricing/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md)). Per finished clip the gap
can invert, since a 30-second 4.0 generation replaces two 15-second 3.0 generations that would not share
continuity.

### Regions

The vendor's global API example uses `https://api-singapore.klingai.com`
([API reference](../../sources/kling.ai/kling-4-0-api-reference/2026-10-26.md)), while the protocol
documents that Replicate links as governing terms live on `app.klingai.com`
([Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md)) — the same platform served under two
domains. **No regional availability matrix for Kling 4.0 was captured**, and nothing states whether a
mainland-China endpoint serves it. fal and Replicate serve it from their own
regions without publishing a per-model region list.

### Licensing

No weights, no open licence, no self-hosting route. Commercial use is implied by fal's
`licenseType: "commercial"` and by the vendor's paid API terms, but the actual terms text (privacy policy,
paid-service protocol, SLA) was linked and not retrieved, so output ownership, indemnity and permitted-use
clauses are not summarised here
([fal catalogue](../../sources/fal.ai/kling-4-endpoint-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/kling-v4-0/2026-10-26.md)).

## Unresolved questions

1. **Is 4.0 actually callable through fal's API on 2026-10-26?** The landing page says "API coming soon";
   the catalogue lists four `public` endpoints with prices. Either the catalogue flag leads the gate or
   the landing page lags. Not settled by any captured page.
2. **How is Replicate serving a model whose vendor API is early-access-only?** Replicate shows 38 runs and
   Kling's own protocols as its terms, but no page explains the access path.
3. **When do 4K and 10-bit HDR ship?** "Coming soon" in every vendor document, with no date, and the API
   enum has no 4K value.
4. **What is the output frame rate and container?** Undocumented everywhere captured.
5. **Is audio always on, and is it priced in?** 4.0 has no audio switch in the price list, unlike 3.0, and
   no page says whether silent output is possible or cheaper.
6. **8,000 tokens or 26,000/11,000 characters?** Two first-party prompt limits in different units, with no
   published conversion.
7. **Does the API expose aspect ratio at all?** The product offers 21:9/16:9/1:1/9:16/Auto; the documented
   API request has no such field.
8. **How many shots can one 30-second generation hold, and are the cuts controllable?** "Per-shot prompts"
   and "Smart Storyboard" are claimed; no shot count, no control surface beyond the prompt.
9. **Does Kling 4.0 beat Kling 3.0, Seedance 2.0/2.5, Veo 3.1 or Wan 3.0 on anything measured?** No
   independent benchmark of Kling 4.0 was captured. Nothing here supports a ranking.
10. **Which checkpoint do fal and Replicate run?** Neither publishes a Kling checkpoint ID, and the vendor
    publishes none for 4.0.

## Evidence status

Evidence floor: **met.** First-party: five Kling AI documents — release note (2026-10-15), feature page,
user guide (2026-10-26), API reference and API price list — plus two dated vendor blog posts (2026-10-23,
2026-10-26). Independent hosts: two fal records (landing page/FAQ; catalogue metadata and prices) and one
Replicate record (README, limits, prices, terms links). All captured 2026-10-26.

Two capture caveats. The vendor release note and the API documentation are client-rendered SPAs and were
read through a headless renderer (`r.jina.ai`) rather than as raw HTML; the feature page and user guide are
server-rendered and were read directly. And the API price page returned an empty body on the first render
attempt, so its prices come from a second, longer-timeout render — an empty read of that page would have
wrongly looked like "no pricing published".

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation, prices are published schedules plus
arithmetic, and every quality statement is the vendor's own.

The next useful evidence would be: a 30-second 1080p generation to check whether length degrades
continuity; a 10-keyframe request to see whether intermediate frames are honoured or interpolated; a
15-asset Omni Reference request to find the practical failure point; a 5-second edit with a 30-second
source to confirm the billing rule; an audio-off request to test whether silence is even possible; and a
Kling 3.0 4K versus Kling 4.0 1080p comparison on the same prompt to make the resolution trade-off
concrete.

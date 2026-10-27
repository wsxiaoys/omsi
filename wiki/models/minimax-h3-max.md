# MiniMax H3 Max

A **video** model: MiniMax H3, post-trained by fal Research, offered both on fal
(`minimax/h3-max/*`, 21 endpoints) and as a selectable model in MiniMax's own video API
(`MiniMax-H3-Max`). It generates 480P/768P video at 24 fps with a generated soundtrack, from text,
first/last frames, or a mixed set of up to 9 images, 3 videos and 3 audio clips.

It is **in the roster's one-year window**: MiniMax launched the base model H3 on 2026-07-31
([launch post](../../sources/minimax.io/h3-launch-post/2026-10-26.md)) and H3 Max first appears on
2026-08-23/27 ([fal catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md),
[fal announcement](../../sources/fal.ai/h3-max-announcement/2026-10-26.md)).

## Identity

- **Canonical name:** MiniMax H3 Max. Model IDs: `MiniMax-H3-Max` on the vendor API
  ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md));
  `minimax/h3-max/…` on fal, with a separate `minimax/h3-max-turbo/…` family for the Turbo tier
  ([fal catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md)).
- **Who made it:** MiniMax built the base model; **fal post-trained the derivative.** MiniMax's docs
  say H3 Max is "jointly released by MiniMax and fal.ai; a video generation model post-trained by
  fal.ai on MiniMax H3 and optimized for high-speed generation"
  ([video guide](../../sources/minimax.io/video-generation-guide/2026-10-26.md)) and describe it in
  its model table as "High-speed video model post-trained by fal.ai on MiniMax H3"
  ([models overview](../../sources/minimax.io/models-intro/2026-10-26.md)). fal's own voice:
  "a post-trained version of MiniMax H3 developed by fal Research"
  ([fal announcement](../../sources/fal.ai/h3-max-announcement/2026-10-26.md)).
- **Aliases:** "H3 Max" (most fal endpoint titles), "MiniMax H3 Max" (Artificial Analysis, fal's t2v
  title), "H3 Max Turbo" (fal's faster sub-tier — a *different* set of endpoints, not an alias).
- **Release:** endpoints created 2026-08-23, published 2026-08-26; announcement 2026-08-27; fal's
  endpoint page prints "Released Aug 27, 2026"; Artificial Analysis prints "Aug 2026"
  ([catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md),
  [fal announcement](../../sources/fal.ai/h3-max-announcement/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/minimax-h3-max-text-to-video/2026-10-26.md)). Treat
  **2026-08-27** as the public launch. **MiniMax's changelog has no H3 Max entry at all**
  ([release notes](../../sources/minimax.io/model-release-notes/2026-10-26.md)).
- **Base model:** MiniMax H3, launched 2026-07-31 as an open-weights model — "we plan to open up the
  model weights"
  ([launch post](../../sources/minimax.io/h3-launch-post/2026-10-26.md)), published at
  `MiniMaxAI/MiniMax-H3` (repository created 2026-07-28,
  [model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)). H3's internal
  family name is Hailuo 03: the V2 video API is described as "MiniMax video generation V2 (Hailuo-03)
  API" and fal's grouping key is `hailuo-03-new-turbo`
  ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md),
  [catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md)).
- **Siblings in the H3 family** (vendor API): `MiniMax-H3` (768P/2K, "the variant for high-quality
  video creation"), `MiniMax-H3-Highspeed` (768P), `MiniMax-H3-Lite` (480P/768P), plus
  `MiniMax-H3-Regeneration` (768P → 2K) and `MiniMax-H3-Context-IR`
  ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md),
  [pricing](../../sources/minimax.io/video-pricing/2026-10-26.md)). Predecessors are Hailuo 02
  (2025-06-18) and Hailuo 2.3 (2025-10-28), both now listed as legacy.

### The identity question, settled

The roster carried "MiniMax H3 vs H3 Max" as unresolved. The evidence settles it as a **distinct
model artifact — a post-trained derivative checkpoint** — and specifically *not* the two alternatives
the roster allowed for:

1. **Not merely a host label or a serving tier.** MiniMax's own API gives H3 Max its own model ID,
   its own resolution envelope (480P/768P vs H3's 768P/2K), its own 5-second duration floor, its own
   price rows, and an exclusive parameter (`extra.prompt_expansion_mode`) that H3 does not accept
   ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md),
   [pricing](../../sources/minimax.io/video-pricing/2026-10-26.md)). A serving tier of one model does
   not get a different parameter surface.
2. **Not a premium tier either.** The word "Max" here does *not* mean highest quality. MiniMax calls
   H3 "the variant for high-quality video creation" and H3 Max "the fast generation variant"; at 768P
   the two cost the same ($0.08/s) and H3 Max cannot do 2K at all
   ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md),
   [pricing](../../sources/minimax.io/video-pricing/2026-10-26.md)).
3. **It is a new checkpoint trained by a third party.** fal states it "started with the open-weights
   MiniMax H3 model and introduced substantial new data during post-training, with a particular focus
   on prompt adherence and visual quality"
   ([fal announcement](../../sources/fal.ai/h3-max-announcement/2026-10-26.md)); fal's catalogue
   metadata attributes all 21 endpoints to `modelLab: "Fal"` rather than "Minimax"
   ([catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md)); and Artificial
   Analysis independently files it under the Fal logo with a "Based on MiniMax H3" base-model
   tooltip ([AA](../../sources/artificialanalysis.ai/minimax-h3-max-text-to-video/2026-10-26.md)).

Two consequences follow. First, **H3 Max deserves its own page** and H3's findings do not transfer to
it: same lineage, different weights, different envelope, different author. Second, the "Max" suffix
is a **fal post-training label, not a quality grade** — the same naming move as `flux-3-max.md`, where
fal took another vendor's base model, kept training it, and called the result "Max". A reader who
reads "Max" as "the premium one" will mis-price both families.

## Current assessment

H3 Max's documented proposition is **speed at the same price**, and that is what the vendor's
material supports. MiniMax frames it purely as a throughput variant — "generates faster than MiniMax
H3" — and prices it at parity with H3 at 768P
([video guide](../../sources/minimax.io/video-generation-guide/2026-10-26.md),
[pricing](../../sources/minimax.io/video-pricing/2026-10-26.md)). fal frames it as speed *and* quality:
"a better model at much faster speed", "#1 across overall quality, prompt understanding, and
aesthetics", "roughly 35x the throughput of the official MiniMax H3 endpoint"
([fal announcement](../../sources/fal.ai/h3-max-announcement/2026-10-26.md)). The two framings are not
the same claim, and only the speed half is echoed by the vendor.

The one independent measurement captured does **not** support the quality half. On Artificial
Analysis's AA-Video-T2V v2.1 board, MiniMax H3 Max is **rank 7, Elo 1152 (95% interval 1137–1167,
6,320 samples)**, while the model it was post-trained from, MiniMax H3 (768p), is **rank 3, Elo 1158
(1144–1172)**
([AA](../../sources/artificialanalysis.ai/minimax-h3-max-text-to-video/2026-10-26.md)). The intervals
overlap almost entirely, so the defensible reading is that the two are **statistically
indistinguishable on overall preference** — not that H3 Max is worse, and certainly not that it
"ranks #1 … including the original H3" as fal's post asserts. AA prices both at $4.80/min and does
not credit H3 Max with either a quality or a price advantage.

The practical picture is therefore: a genuinely distinct, heavily extended product surface (21 fal
endpoints in under eight weeks, including editing, relighting, recasting, lip sync and two realtime
"worlds" endpoints), justified by latency rather than by measured quality, sold at H3's 768P price,
and unavailable with open weights.

## Documented capabilities

All of the following is vendor or host documentation. **No direct tests were run for this page.**

### Output envelope

| | MiniMax H3 Max | MiniMax H3 (for comparison) |
| --- | --- | --- |
| Native resolution | 480P, 768P (default 768P) | 768P, 2K |
| Duration | 5–15 s, integers only | 4–15 s |
| Frame rate | 24 fps | 24 fps |
| Aspect ratio | `adaptive`, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | same |
| Audio | generated with the video; sample rate and channel count not documented | 32 kHz stereo |

Sources: [models overview](../../sources/minimax.io/models-intro/2026-10-26.md),
[API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md),
[video guide](../../sources/minimax.io/video-generation-guide/2026-10-26.md),
[H3 model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md).

Two frame-rate confirmations exist and they agree: MiniMax's model table prints "24 fps" for both
H3 and H3 Max, and fal's reference-to-video schema rounds `middle_frame_time` "to the nearest frame
at 24 fps" ([schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)).

**Audio.** H3 Max generates a soundtrack rather than a silent track: fal's style endpoints price
"video at 768p … with audio included", and every t2v/i2v schema accepts `target_audio_url` to
"pin to the generated soundtrack", replacing it with a supplied clip
([catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md),
[schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)). What is *not* documented is
H3 Max's sample rate or channel count; the "32 kHz stereo" figure belongs to H3's model card, and
fal's post-training claim that "the base model's core capabilities are intact" is not a specification.

**1080P is a refinement, not a native mode.** fal exposes `480P`/`768P`/`1080P`, and its schema
defines the third as "The native generation resolution, or 1080P latent refinement from a native
768P source" ([schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)). This reconciles
fal's 1080p option with MiniMax's 480P/768P cap, and mirrors how MiniMax produces H3's 2K — a second
pass (`H3-Regenerate-2K`) over the 768p result
([H3 model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)). A few fal
endpoints go further and quote 2K rates (lip sync, extend, relight), which no vendor document
supports for H3 Max.

### Inputs and tasks

- **Text-to-video** — prompt only. On fal, `ratio` is required for t2v and cannot be `adaptive`; on
  the vendor API the same rule applies
  ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md),
  [schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)).
- **Image-to-video** — first frame, last frame, or both; fal also allows end-only keyframe
  generation, where "the output canvas follows this image"
  ([schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)). For i2v the aspect ratio
  follows the input image and `ratio` is ignored.
- **Reference-to-video** — ≤ 9 images, ≤ 3 video clips of 2–15 s (total ≤ 15 s), ≤ 3 audio clips of
  2–15 s (total ≤ 15 s), all mixed inputs capped at 12 files
  ([video guide](../../sources/minimax.io/video-generation-guide/2026-10-26.md)). fal adds an
  ordered `reference_conditions` list ("cross-modality order is semantic and is preserved
  end-to-end") and a `middle_image_url`/`middle_frame_time` pair for a mid-clip keyframe, the latter
  restricted to "native 480P or 768P resolution"
  ([schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)).
- **Input limits** — prompt ≤ 7000 characters; video ≤ 50 MB per file, image ≤ 30 MB, audio ≤ 15 MB;
  request body ≤ 64 MB; input width/height in [256, 5760]; input aspect ratio within 2:5–5:2; input
  formats H.264/H.265 video, JPG/PNG/WEBP/HEIC/HEIF images, WAV/MP3 audio
  ([video guide](../../sources/minimax.io/video-generation-guide/2026-10-26.md)).
- **Prompt expansion** — `extra.prompt_expansion_mode` with `disabled` / `balanced` (default) /
  `quality`, documented as H3-Max-only
  ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md)). fal makes the
  same control **required** on every endpoint, and describes the cost: "'balanced' returns in about a
  second. 'quality' spends up to ~30s on a richer prompt"
  ([schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)).
- **Seed** — exposed by fal ("Random seed. A random seed is selected when omitted") but absent from
  MiniMax's H3-Max request schema.

### fal-only extensions

fal's 21 endpoints go well beyond the vendor's three modes: camera control ("precise, keyframe-based
camera orbit, elevation, and distance in 3D space"), lip sync from supplied audio, extend-video,
insert-video ("insert a new scene into an existing video … then return to the original footage"),
recast ("recast the people in a video using reference photos … preserving the source motion, camera,
cuts, and audio"), relight from "a lighting sphere image", reframe via "generative outpainting",
3D-to-video from "Blender renders and 3D previs", five style LoRAs (16-bit pixel, hand-drawn,
low-poly, retro-toon-70s, VHS), and two realtime "worlds" endpoints
([catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md)). None of these appear in
any MiniMax document captured; they are fal product surface built on the same derivative.

## Independent measurement

Only one independent measurement was captured: Artificial Analysis's AA-Video-T2V v2.1 board, in the
"Overall / With Audio" view, where H3 Max is rank 7 of at least 10 shown rows at Elo 1152
([AA](../../sources/artificialanalysis.ai/minimax-h3-max-text-to-video/2026-10-26.md)). Row order at
capture: Wan 3.0 (1174), Utopai X (1168), MiniMax H3 768p (1158), HeyGen Video 1 (1157), Dreamina
Seedance 2.5 (1156), FLUX 3 Max 720p (1155), **MiniMax H3 Max (1152)**, FLUX 3 (1142), Dreamina
Seedance 2.0 (1136), Gemini Omni Flash 1.1 (1128).

That is the whole of the independent quality evidence. fal's own preference study (12 models,
Bayesian Elo, 95% CI) is reported without a single number
([fal announcement](../../sources/fal.ai/h3-max-announcement/2026-10-26.md)), so its "#1 across all
three dimensions" cannot be checked — only contradicted at board level. The Design Arena quotation
("the quality of MiniMax H3 at more than 50× the speed") is second-hand through fal's post; Design
Arena's own video board is client-rendered and returned no H3 Max row on capture.

## Limitations and constraints

- **No 2K on the vendor API, and no native 1080p anywhere.** H3 Max tops out at 768P natively;
  fal's 1080P is a refinement pass
  ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md),
  [schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)). Buyers who need 2K must use
  H3 (or H3-Regeneration).
- **No weights.** H3 is open-weights; H3 Max is not. No `MiniMaxAI/MiniMax-H3-Max` repository exists
  (HTTP 401 on the HF API, and no such repo in search results), and no host offers a checkpoint
  ([H3 model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)). Every route is
  hosted.
- **Single third-party host.** Replicate hosts H3 but returns 404 for `minimax/h3-max`; fal is the
  only non-vendor host found
  ([Replicate](../../sources/replicate.com/minimax-h3/2026-10-26.md)). H3 Max is therefore
  concentrated in exactly two places: fal, and MiniMax's own API.
- **The licence path for the derivative is undocumented.** H3's weights carry the MiniMax H3
  Community License, whose "Excluded Territories" are the EU, UK, Republic of Korea and the USA, with
  use there requiring a separate licence; a post-trained variant is a "Model Derivative" under that
  agreement ([licence text](../../sources/huggingface.co/minimax-h3-license/2026-10-26.md)). fal is a
  US company and MiniMax co-announces the model, so a separate arrangement is the natural reading —
  but no captured document states one, and the licence also carries a >$20M revenue
  commercial-authorisation trigger and an attribution requirement.
- **Vendor docs contradict each other on reference support.** The models-overview table lists only
  "Text-to-Video / Image-to-Video (first / last frame)" for H3 Max
  ([models overview](../../sources/minimax.io/models-intro/2026-10-26.md)); the video guide and the
  price list both list Reference (image, video, audio)
  ([video guide](../../sources/minimax.io/video-generation-guide/2026-10-26.md),
  [pricing](../../sources/minimax.io/video-pricing/2026-10-26.md)). fal implements reference
  extensively. Read the feature list on the overview page as stale, but note the vendor has not
  corrected it.
- **No 4-second clips.** 4 s "is not supported" for H3-Max, unlike every other H3 tier
  ([API reference](../../sources/minimax.io/video-generation-v2-create/2026-10-26.md)).
- **Duration semantics differ by host.** MiniMax requires an integer 5–15 s; fal takes a `number`
  with no stated upper bound and warns "the output can run up to about 0.7 s longer than requested"
  ([schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md)).
- **Moderation is a black box.** fal exposes `enable_safety_checker` (default `true`) with no
  description of what it blocks; H3's card says prompts and inputs "are subject to automated
  moderation" with no refusal taxonomy
  ([schemas](../../sources/fal.ai/minimax-h3-max-schemas/2026-10-26.md),
  [H3 model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)).
- **Several fal endpoints bill more than the headline rate.** Recast is $0.30/s at 768p; reframe bills
  "generated overlap seconds" so billed duration can exceed output duration; reference-to-video bills
  reference tokens above 4,096 at $0.02/1k; lip sync applies "a 1.2x multiplier … to videos over 15
  seconds"; director sessions bill a 60-second minimum
  ([catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md)).
- **Promotional pricing expires 2026-10-31.** fal's headline $0.052/s at 768p is 35% off and reverts
  to $0.08/s — which is *more* than fal charges for H3 at 768p ($0.06/s)
  ([catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md)).

## Access, pricing, licensing

Two routes, two billing bases, and the same 768P price.

### MiniMax API (`api.minimax.io`) — per second, USD

| Output | Output video | Input video | Input image (beyond 2 free) |
| --- | --- | --- | --- |
| 768P | $0.08/s | $0.143/s | $0.074 |
| 480P | $0.05/s | $0.0553/s | $0.074 |

Source: [pricing](../../sources/minimax.io/video-pricing/2026-10-26.md). Audio input is free; the
first 2 images per task are free (H3 flagship tiers get 5). Access requires the pay-as-you-go API —
"To use MiniMax H3 or MiniMax H3 Max, please select the Pay-as-you-go API"
([video guide](../../sources/minimax.io/video-generation-guide/2026-10-26.md)).

For comparison, on the same list: H3 at 768P is $0.08/s and at 2K $0.13/s; H3-Highspeed $0.06/s;
H3-Lite $0.04/s at 768P and $0.025/s at 480P.

### fal (`minimax/h3-max/*`) — per second of generated video, USD

| Resolution | Promotional (to 2026-10-31) | From 2026-11-01 |
| --- | --- | --- |
| 480P | $0.0325/s | $0.05/s |
| 768P | $0.052/s | $0.08/s |
| 1080P | $0.104/s | $0.16/s |

Source: [catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md). Reference-to-video
includes 4,096 reference tokens per request, then $0.02 per 1,000 tokens prorated; "the first four
square images add no reference charge" when no video/audio references are present. Turbo is half the
standard rate ($0.025/$0.04/$0.08 after the promotion).

For comparison on fal, `minimax/h3/*` costs $0.05/s at 480p, $0.06/s at 768p, $0.13/s at 2K and
$0.16/s at 4K — so post-promotion **H3 Max is the more expensive option at 768p on the same host**,
and H3 additionally offers 2K and 4K. Replicate's H3 matches MiniMax's own list at $0.08/s 768P and
$0.13/s 2K ([Replicate](../../sources/replicate.com/minimax-h3/2026-10-26.md)).

### Licensing

- **H3 Max has no licence of its own and no weights.** The only licence in play is the MiniMax H3
  Community License covering the base model's weights
  ([licence text](../../sources/huggingface.co/minimax-h3-license/2026-10-26.md),
  [local deploy guide](../../sources/minimax.io/h3-local-deploy/2026-10-26.md)).
- That licence is **territory-restricted** (EU, UK, Republic of Korea, USA excluded; separate licence
  required), carries a **>$20M yearly revenue authorisation** requirement, requires prominent
  "MiniMax H3" attribution on commercial UIs, and treats API hosting as a licensed act.
- fal's `licenseType: "commercial"` is fal's catalogue field, i.e. fal's assertion about use through
  fal, not a statement of MiniMax's terms
  ([catalogue](../../sources/fal.ai/minimax-h3-max-catalogue/2026-10-26.md)).
- **Output ownership and commercial-use terms were not captured** for either route. No statement is
  made here about who owns generated video.
- **Regions.** No host publishes a region selector or region list for H3 Max. MiniMax serves it from
  `api.minimax.io` (global) with a CN counterpart at `platform.minimaxi.com` referenced from the H3
  card; whether the CN platform exposes `MiniMax-H3-Max` was not verified
  ([H3 model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)).

## Unresolved questions

1. **Is H3 Max licensed to operate in the USA?** The base weights' licence excludes the USA and fal is
   a US company; MiniMax co-announces H3 Max and its team is quoted in fal's post. A separate licence
   under the agreement's Excluded-Territories path is the obvious reading, but no document states it.
2. **Which H3 checkpoint was the starting point?** fal says it "started with the open-weights MiniMax
   H3 model"; MiniMax exposes H3-Base FL2VA and Ref2VA variants and several model-ID revisions, and
   neither party says which was used or which revision fal now serves.
3. **Is H3 Max actually better, or only faster?** fal claims "#1 across overall quality, prompt
   understanding, and aesthetics"; MiniMax claims only speed; Artificial Analysis finds it
   indistinguishable from H3 on overall preference and ranked 7th. No per-dimension independent
   measurement was captured.
4. **How large is the speed advantage, and on what hardware?** fal says "roughly 35x the throughput of
   the official MiniMax H3 endpoint" for a 5-second clip on GB200 NVL72 systems; Design Arena is
   quoted at "more than 50×". Neither number comes with a protocol, resolution, or batch size, and the
   two disagree by ~40%.
5. **What are H3 Max's audio specifications?** Sample rate and channel count are documented for H3
   (32 kHz stereo) and not for H3 Max. Whether the derivative's soundtrack is stereo is unverified.
6. **Does H3 Max support reference generation on the vendor API or not?** The models overview says no;
   the guide and price list say yes; fal implements it. One of MiniMax's pages is stale.
7. **Why does fal's H3 Max go to 2K on some endpoints when the vendor caps at 768P?** Lip sync,
   extend and relight quote 2K rates. Is that a 2K refinement stage, a different base checkpoint, or
   copy error?
8. **Is the Turbo family a different checkpoint or the same one with fewer steps?** fal publishes
   `minimax/h3-max-turbo/*` at exactly half the standard rate with an identical description modulo the
   name, and does not say what changed.
9. **What does the safety checker block?** `enable_safety_checker` defaults to `true` on every schema
   with no described policy, and no refusal record was captured.
10. **Do the vendor API and fal serve the same weights?** Both are labelled H3 Max and share the
    prompt-expansion control, but fal adds 1080P refinement, exposes `seed`, and documents duration as
    a float. Identity of the served artifact is assumed, not established.

## Evidence status

Evidence floor: **met.** First-party: five MiniMax documents (models overview, video-generation
guide, V2 create-task API reference, pricing overview, release notes), the H3 launch post, the
self-hosting guide, and two Hugging Face records for the base model (card and licence). fal records
are both developer-first-party (the H3 Max announcement, since fal built the model) and host records
(catalogue of 21 endpoints, OpenAPI schemas). Independent measurement: one Artificial Analysis
leaderboard capture. Independent host comparison: one Replicate capture, which also documents H3
Max's absence there. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules; quality
statements are fal's own unless attributed to Artificial Analysis. fal's announcement is treated as a
vendor claim, not as evidence of quality, and its "#1" assertions are recorded alongside the
independent board that contradicts them rather than resolved in fal's favour.

The most useful next evidence would be: a timed head-to-head of the same prompt on
`minimax/h3-max/text-to-video` and `minimax/h3/text-to-video` at 768p to test the 35× claim; the same
prompt on `MiniMax-H3-Max` and `MiniMax-H3` through the vendor API to test whether the two routes run
the same weights; a delivered-file probe of H3 Max's audio sample rate and channel count; a
`prompt_expansion_mode` A/B (`disabled` vs `quality`) to see what the vendor-exclusive parameter
actually changes; and a check of `platform.minimaxi.com` for a CN `MiniMax-H3-Max` listing.

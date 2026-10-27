# MiniMax H3

A **video** model — MiniMax's omni-modal video-plus-audio generator, and a rare case of a frontier
video model shipping downloadable weights. It takes text, images, video and audio in one context and
produces video with native stereo sound
([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md),
[launch post](../../sources/minimax.io/minimax-h3-launch/2026-10-26.md)). It launched **2026-07-31**,
inside the roster's one-year window.

H3 is also a **family**: MiniMax's own API exposes four model IDs under one endpoint —
`MiniMax-H3`, `MiniMax-H3-Highspeed`, `MiniMax-H3-Lite` and `MiniMax-H3-Max`
([API reference](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md)) — plus separate
Context-IR and Regeneration endpoints. This page covers H3 and the family, and records the one identity
question the roster flagged: **H3 Max is not a MiniMax tier of H3.** MiniMax describes it as
"High-speed video model post-trained by **fal.ai** on MiniMax H3"
([model list](../../sources/minimax.io/minimax-h3-models-intro/2026-10-26.md)), and fal's catalogue
files H3 Max under `modelLab: "Fal"` while H3 is `modelLab: "Minimax"`
([fal catalogue](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)). H3 Max gets its own page;
this one mentions it only where the two are confused.

## Identity

- **Canonical name:** MiniMax H3. The roster label matches first-party naming exactly — the release
  notes entry, the docs model list, the blog title and the Hugging Face repository all say "MiniMax H3".
- **Model IDs, by route:**

  | Route | Identifier |
  | --- | --- |
  | MiniMax global API | `model: "MiniMax-H3"` at `POST https://api.minimax.io/v2/video_generation` |
  | MiniMax CN API | same body, `https://api.minimaxi.com` base (named by the model card) |
  | fal | `minimax/h3/text-to-video`, `minimax/h3/image-to-video`, `minimax/h3/reference-to-video` (plus `/lora` variants and four trainers) |
  | Replicate | `minimax/h3` (single model, all tasks) |
  | Weights | `MiniMaxAI/MiniMax-H3` on Hugging Face; `Comfy-Org/MiniMax-H3` repackaged |

  The roster's discovery path `minimax/h3` is a **landing-page slug and endpoint group**, not a single
  endpoint — the same pattern as the FLUX 3 Max row.
- **Vendor:** MiniMax (the licence is granted by "Nanonoble Pte. Ltd."
  [licence](../../sources/minimax.io/minimax-h3-community-license/2026-10-26.md)).
- **Consumers:** `hailuoai.video/tools/minimax-h3` (global) and `hailuoai.com` (CN) are the web apps;
  `hub.minimax.io` / `hub.minimaxi.com` are desktop clients
  ([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)).
- **Aliases and near-aliases:** fal's internal `group.key` for all three H3 endpoints is
  `hailuo-03-new`, and for the LoRA endpoints `hailuo-03-lora`
  ([fal catalogue](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)). No captured MiniMax document
  writes "Hailuo 3": the launch post calls H3 the third generation after "Hailuo 01" and "Hailuo 02", and the
  docs model list files Hailuo 2.3 and Hailuo 02 under **Legacy Models**
  ([launch post](../../sources/minimax.io/minimax-h3-launch/2026-10-26.md),
  [model list](../../sources/minimax.io/minimax-h3-models-intro/2026-10-26.md)). Treat "Hailuo 3" as an
  inferred lineage name, not a documented alias.
- **Siblings / variants:**

  | ID | Scope per MiniMax docs | Resolution | Duration |
  | --- | --- | --- | --- |
  | `MiniMax-H3` | T2V, I2V (first/last frame), reference | 768P, 2K | 4–15 s |
  | `MiniMax-H3-Highspeed` | same, incl. reference | 768P (no 2K) | 4–15 s |
  | `MiniMax-H3-Lite` | same, incl. reference | 480P, 768P | 4–15 s |
  | `MiniMax-H3-Max` | fal post-train; T2V, I2V (first/last frame) per model list | 480P, 768P | 5–15 s |
  | `MiniMax-H3-Regeneration` | 768P → 2K regeneration endpoint | 768P→2K | — |
  | `MiniMax-H3-Context-IR` | prompt/context preprocessing endpoint | — | — |

  Sources: [API reference](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md),
  [pricing](../../sources/minimax.io/minimax-h3-pricing/2026-10-26.md),
  [model list](../../sources/minimax.io/minimax-h3-models-intro/2026-10-26.md).
- **Open-weight sub-components:** `H3-Base FL2VA` and `H3-Base Ref2VA` are the two released
  checkpoints. `H3-Context-IR` and `H3-Regenerate-2K` are **not** released
  ([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)).
- **Unresolved identity ambiguity:** the docs model list omits `MiniMax-H3-Highspeed` and
  `MiniMax-H3-Lite` entirely while the API reference and price list both expose them, and the release
  notes carry **no entry** for any variant except plain H3
  ([release notes](../../sources/minimax.io/minimax-h3-release-notes/2026-10-26.md)). There is therefore
  no first-party date for Highspeed, Lite, Max, Regeneration or Context-IR, and no way to tell from the
  captured corpus whether they shipped with H3 or were added later.

### Is H3 a video model, a family, or a tier?

All three readings are partly right, and the page treats them in that order:

1. **A video model.** MiniMax's one-line description is "Next-gen open general-purpose multimodal video
   model"; its output is a video file with an audio track. It is not an image model and not a language
   model, despite the shared "H3" letter with the M-series naming style.
2. **A family.** Four first-party model IDs plus two ancillary endpoints. The tiers differ in
   resolution ceiling and speed, and the vendor's price list sells them as four products.
3. **A tier inside that family.** The unqualified `MiniMax-H3` is the flagship tier — the only one that
   reaches 2K, the only one MiniMax calls "the variant for high-quality video creation".

This page is one entity for the family rather than four pages, because every capability statement
except the resolution ceiling and the 4-second floor applies to all four IDs, and because the variants
are documented only as deltas against the flagship.

### Release timeline

| Date | Event | Source |
| --- | --- | --- |
| 2026-07-28 | Hugging Face repository created; the licence dates the weight release five days later | [card metadata](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md) |
| 2026-07-31 | Launch post and release-notes entry; fal publishes all three H3 endpoints the same day | [launch](../../sources/minimax.io/minimax-h3-launch/2026-10-26.md), [release notes](../../sources/minimax.io/minimax-h3-release-notes/2026-10-26.md), [fal](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md) |
| 2026-08-02 | Weight release: "MiniMax H3 release date/License date: August 2, 2026" | [licence](../../sources/minimax.io/minimax-h3-community-license/2026-10-26.md) |
| 2026-08-02 | fal creates the H3 LoRA and trainer endpoints (published 2026-08-10) | [fal](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md) |
| 2026-08-13 | Replicate's H3 version created; weights repository last modified | [Replicate](../../sources/replicate.com/minimax-h3/2026-10-26.md), [card metadata](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md) |
| 2026-08-26 | fal publishes the first H3 Max endpoint (for row 40) | [fal](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md) |

## Current assessment

H3 is a **current, first-party flagship with published weights**, not a repackaging and not a preview.
Four independent facts support that: MiniMax's model list puts it above a "Legacy Models" section
containing Hailuo 2.3 and Hailuo 02; the release notes date it 2026-07-31; the weights are downloadable
and ungated; and both fal and Replicate serve it under their own endpoints with their own prices.

The most defensible technical claim is the **output envelope**, because three parties state it
identically. 4–15 seconds, 24 fps, native stereo audio, 768-pixel short edge with 2K available only
through a separate regeneration stage
([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md),
[ComfyUI guide](../../sources/comfy.org/minimax-h3-guide/2026-10-26.md),
[fal schema](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)). fal's schema wording is the
bluntest: "480P and 768P are native generation modes; 2K and 4K upscale a 768P base result."

The most defensible access claim is that **the weights are real but the system is not fully open**.
MiniMax released two task-specific base checkpoints and withheld the context preprocessor and the 2K
regenerator, both of which the card itself calls important: Context-IR is "critical to the quality of
the final output", and Regenerate-2K is how 2K exists at all. A local deployment therefore reproduces
768p output, not the hosted product.

The one comparative claim that is not MiniMax's own is a **quality** result, and it is favourable:
Artificial Analysis ranks H3 (768p) **first on its image-to-video board at 1140 ±16** and third on
text-to-video at 1158 ±14, naming it the leading open-weights model on both
([AA](../../sources/artificialanalysis.ai/minimax-h3-video-arena/2026-10-26.md)). The intervals
overlap the models immediately behind it, so "first" means "in the top group", not "best". MiniMax's
own comparisons remain unverifiable: "at 2K, H3's per-second price is less than a third of mainstream
models, and at 768p, it's less than half the price of mainstream models' 720p"
([launch post](../../sources/minimax.io/minimax-h3-launch/2026-10-26.md)) — no comparison set, no
numbers. The launch post's self-assessment is worth as much weight as its claims: it lists model size,
multimodal understanding and "visual detail" as areas needing work, and says the next H generation will
absorb the M-series models.

The unusual thing about H3 is not the envelope but the **licence**, which grants rights everywhere
except the EU, UK, South Korea and the United States. That single clause shapes who can use the weights
at all, and no host page mentions it — fal, Replicate and ComfyUI all sell or serve H3 without
qualification. See *Access, pricing, licensing*.

## Documented capabilities

Everything in this section is vendor or host documentation. **No direct tests have been run.**

### Output envelope

| Property | Value | Source |
| --- | --- | --- |
| Duration | 4–15 s (`MiniMax-H3`, Highspeed, Lite); 5–15 s (`Max`) | [API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md) |
| Frame rate | 24 fps | [model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md) |
| Native resolution | 768-pixel short edge, ~1 MP, up to 768×1344 area | [model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md), [ComfyUI](../../sources/comfy.org/minimax-h3-guide/2026-10-26.md) |
| 2K | Via `H3-Regenerate-2K` in-context regeneration of the 768p result | [model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md) |
| Audio | 32 kHz stereo, generated jointly with video | [model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md) |
| Aspect ratios | `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16`, plus `adaptive` | [API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md) |
| Dialogue languages | 11 "stable": Arabic, Chinese, English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Spanish; others "to varying degrees" | [model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md) |

ComfyUI adds the frame grid: requests round **up** to `17k+5` frames at 24 fps, so a 5-second request
renders 124 frames (5.17 s)
([ComfyUI guide](../../sources/comfy.org/minimax-h3-guide/2026-10-26.md)). No MiniMax document mentions
duration quantisation.

### Tasks and inputs

- **Text-to-video.** Prompt only; `ratio` is required and cannot be `adaptive`.
- **First/last-frame image-to-video.** Zero, one or two images. One image gives first-frame *or*
  last-frame generation; two give first-and-last-frame. With an image, the aspect ratio follows the
  input and a supplied `ratio` is ignored
  ([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md),
  [API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md)).
- **Omni-reference.** Up to 9 images, 3 video clips and 3 audio clips, cited in the prompt by modality
  and order ("Image 1", "Video 1", "Audio 3"), with "Maximum number of files across all input types is
  12" ([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)). Reference clips
  are 2–15 s each with a 15 s combined ceiling; audio is free to input and video is billed
  ([API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md)).
- **Image-to-video and reference-to-video are mutually exclusive.** "If any reference_image /
  reference_video / reference_audio role appears in content, then first_frame / last_frame must not
  appear (and vice versa)"
  ([API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md)).
- **Input limits** (first-party): images ≤ 30 MB, 256–5760 px per side, aspect 0.4–2.5; reference video
  ≤ 50 MB each, MP4/MOV, H.264 or H.265, 23.976–60 fps; reference audio ≤ 15 MB each, WAV/MP3; whole
  request ≤ 64 MB ([API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md)).
- **Reference-driven editing.** The card's reproducible example is a video-edit task: keep a subject from
  a source video, re-animate its mouth to speak new dialogue, reuse the source audio as music, and take
  a voice timbre from a second audio clip. This is documented, not tested here
  ([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)).

### Vendor claims, labelled as claims

- "excelling at instruction following, accurate text and brand rendering, and V2V motion transfer"
  ([launch post](../../sources/minimax.io/minimax-h3-launch/2026-10-26.md)).
- "Native multi-shot modeling", with no shot count or control surface
  ([launch post](../../sources/minimax.io/minimax-h3-launch/2026-10-26.md)).
- "industry-leading price-performance" at 2K and 768p, with no comparison set named
  ([launch post](../../sources/minimax.io/minimax-h3-launch/2026-10-26.md)).
- fal calls H3 "a frontier video model" and says the reference endpoint keeps "subjects consistent
  while following the referenced motion and audio"
  ([fal catalogue](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)).
- ComfyUI lists "accurate text rendering: clean spelled-out text and brand elements"
  ([ComfyUI guide](../../sources/comfy.org/minimax-h3-guide/2026-10-26.md)).

### Architecture (from the card, for capability inference only)

33.1 B-parameter dense single-stream omni Transformer with ~13 B in AdaLN branches; text and image
conditioning through a Qwen3-VL-32B encoder (50th layer hidden states); a temporally causal visual VAE
(f16t4d24) and a 40 Hz audio VAE; MM-RoPE over `(t, h, w)`; CFG-distilled checkpoints
([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)). Sparse attention was
used in training but "the initial open-source release provides inference with full attention only".

## Independent measurement

Artificial Analysis runs blind pairwise human-preference Elo on its video boards, and H3 is the only
model in this corpus whose quality has been measured by someone other than its vendor or host. Two
things about the measurement frame every number below: AA runs H3 **at 768p, not 2K** — "MiniMax H3 is
available in 768p or 2K only. We run it at 768p because our benchmark standard is the highest
resolution at or below 1080p" — and it files the model under the family `minimax-hailuo`, an
independent corroboration of the Hailuo lineage
([AA](../../sources/artificialanalysis.ai/minimax-h3-video-arena/2026-10-26.md)).

| Board | MiniMax H3 (768p) | Nearest rivals | Reading |
| --- | --- | --- | --- |
| AA-Video-I2V v1.1 | **1140 ±16** (1124–1156), rank 1 of range 1–5, 4,209 samples | FLUX 3 Max 1138, Seedance 2.5 1138, Gemini Omni Flash 1.1 1132, Wan 3.0 1127 | top group; intervals overlap ranks 1–5 |
| AA-Video-T2V v2.1 | **1158 ±14** (1144–1172), rank 3 of range 2–7, 6,669 samples | Wan 3.0 1174, Utopai X 1168, HeyGen Video 1 1157, Seedance 2.5 1156 | third, but within noise of ranks 2–5 |
| AA-Video-I2V-Silent v1.0 | 1356, rank 4 | Gemini Omni Flash 1368, Bach 1.0 Pro 1362, Wan 3.0 1362 | silent board mixes evaluator votes with pre-2026 public arena votes |
| AA-Video-T2V-Silent v2.1 | 1120, rank 3 | HeyGen Video 1 1143, Wan 3.0 1133 | H3 Max is rank 4 at 1118 |

Source: [AA](../../sources/artificialanalysis.ai/minimax-h3-video-arena/2026-10-26.md). Displayed board
ranks differ by one from the zero-based `storedRank` fields in the page's embedded data.

The open-weights comparison is the one with a gap wide enough to act on: AA says H3 "currently leads
among open weights models" on both boards, with the next open model at 1046 (i2v) and 949 (t2v). That is
consistent with MiniMax shipping a frontier model rather than a community-scale one, and with the 33 B
parameter count on the card.

**Limits of this evidence.** AA measures one configuration per model: 768p, default settings, with
audio. It does not evaluate 2K, reference-conditioned generation, editing, or the local checkpoints, and
it publishes no per-prompt results, prompt-set contents, or rater demographics. Its price column is a
normalisation, not a schedule: $4.80/min for H3 is consistent with MiniMax's $0.08/s at 768P, while
$5.76/min for H3 Max on the image board corresponds to no published first-party rate.

## Limitations and constraints

- **The licence excludes four jurisdictions.** The Applicable Territory is "worldwide, excluding …
  the European Union, the United Kingdom, the Republic of Korea and the United States of America"
  ([licence](../../sources/minimax.io/minimax-h3-community-license/2026-10-26.md)). Weights rights are
  not granted there at all; the only route is an application form. Commercial use above US$20M annual
  revenue needs prior written authorisation anywhere in the world, and the licence forbids using
  outputs to improve any other model.
- **The open release is a partial system.** `H3-Context-IR` and `H3-Regenerate-2K` are withheld, so
  local weights give 768p, not 2K, and without the vendor's context preprocessing the card warns the
  result depends on your own prompt pipeline
  ([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)).
- **2K is not native.** MiniMax's own architecture description says the base model generates at 768p
  and a regeneration pass produces 2K; fal states it flatly ("2K and 4K upscale a 768P base result").
  The launch post's "we offer 2K resolution by default" and the model list's "768P / 2K" read as
  product-tier statements, not as native-resolution claims
  ([launch post](../../sources/minimax.io/minimax-h3-launch/2026-10-26.md),
  [fal](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)).
- **Local inference needs real hardware.** ComfyUI's quantised builds run 16 GB (INT8 pruned) to 66 GB
  (full BF16), with separate video and audio VAEs; the card's own deployment example uses 4 GPUs
  ([ComfyUI guide](../../sources/comfy.org/minimax-h3-guide/2026-10-26.md),
  [model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md)).
- **The trained window is narrow.** ComfyUI puts the trained range at ~124–362 frames (~5–15 s) and
  warns that beyond it "errors compound (faces lose texture first)"; the API floor is 4 s, below
  ComfyUI's stated trained range ([ComfyUI guide](../../sources/comfy.org/minimax-h3-guide/2026-10-26.md)).
- **First/last-frame and reference conditioning cannot be combined** in one request
  ([API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md)).
- **Moderation is automated and opaque.** Inputs and expanded prompts "are subject to automated
  moderation", with the vendor conceding false positives and negatives; the API reports refusals only as
  error `1026` "video description contains sensitive content"
  ([model card](../../sources/huggingface.co/minimax-h3-model-card/2026-10-26.md),
  [API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md)). fal exposes its own
  `enable_safety_checker` toggle, default on, which is a separate gate
  ([fal](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)).
- **Host surfaces disagree on the resolution ladder.** fal sells 480P and 4K on the plain H3 endpoints;
  MiniMax's own H3 lists only 768P and 2K, with 480P confined to Lite and Max
  ([fal](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md),
  [API](../../sources/minimax.io/minimax-h3-api-create-task/2026-10-26.md)). Whether fal's 480P is a
  downscale of the 768p model or a separate mode is not stated.
- **Duration floors disagree.** MiniMax says 4–15 s for H3; fal's endpoint descriptions say "5 to 15
  seconds" while its schema accepts any integer; Replicate enforces 4–15; ComfyUI's templates default to
  5 s and treat ~5 s as the bottom of the trained range.
- **Replicate exposes no seed.** Reproducibility is available on fal (`seed`) and undocumented on
  MiniMax's API; Replicate's schema has no seed field at all
  ([Replicate](../../sources/replicate.com/minimax-h3/2026-10-26.md),
  [fal](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)).
- **Independent quality evidence covers one configuration only.** Artificial Analysis measures H3 at
  768p with audio; 2K, reference conditioning, editing and the local checkpoints are unmeasured by
  anyone outside the vendor.

## Access, pricing, licensing

Four routes with three different billing bases.

### MiniMax API — per second of video, USD

| Model | 768P | 2K | Input video | Image beyond free quota |
| --- | --- | --- | --- | --- |
| `MiniMax-H3` | $0.08/s | $0.13/s | same rate as output | $0.04 (first 5 free) |
| `MiniMax-H3-Highspeed` | $0.06/s | — | $0.06/s | $0.03 |
| `MiniMax-H3-Lite` | $0.04/s | — | $0.04/s | $0.02 (480P: $0.025/s) |
| `MiniMax-H3-Max` | $0.08/s | — | $0.143/s | $0.074 (first 2 free) |

Plus `MiniMax-H3-Regeneration` at $0.05/s of output (768P→2K) with the original input materials billed
again, and `MiniMax-H3-Context-IR` at $0.90 per M input tokens / $3.60 per M output tokens. Audio input
is free; "for the same model and resolution, all task types share the same unit price"
([pricing](../../sources/minimax.io/minimax-h3-pricing/2026-10-26.md)).

**Unresolved billing structure:** 2K on the flagship is priced at $0.13/s, but 768P→2K regeneration is
priced separately at $0.05/s *on top of* the original task. The price page does not say whether a
request with `resolution: "2K"` already includes regeneration, or whether the documented way to reach
2K is 768P generation plus a regeneration call. The API reference exposes both.

### fal — per second of video, USD

| Endpoint | 480P | 768P | 2K | 4K |
| --- | --- | --- | --- | --- |
| text-to-video, image-to-video | $0.05/s | $0.06/s | $0.13/s | $0.16/s |
| reference-to-video | same, plus first 5 images free and $0.08 per additional image | | | |
| `/lora` variants | $0.0625/s | $0.075/s | $0.1625/s | $0.20/s |

LoRA training: $0.005/step for text-to-video, $0.01/step for image-to-video and first/last-frame,
$0.015/step for reference — i.e. $5, $10 and $15 per 1,000 steps
([fal catalogue](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)).

### Replicate — per second of video, USD

768P $0.08/s, 2K $0.13/s; no per-image reference charge is listed
([Replicate](../../sources/replicate.com/minimax-h3/2026-10-26.md)).

### Comparing routes

At 768p the same output costs $0.06/s on fal, $0.08/s on Replicate and $0.08/s first-party. At 2K, fal
and MiniMax both charge $0.13/s and Replicate charges $0.13/s — but on MiniMax's side a caller may also
owe the $0.05/s regeneration fee, which would make the first-party 2K route 38% more expensive than the
hosts' at the same nominal price. That reading depends on the unresolved billing question above; the
robust conclusions are that fal is the cheapest 768p route, that fal is the only route offering 480P or
4K, and that only MiniMax's own platform exposes Highspeed and Lite pricing.

### Licensing

- **Weights:** MiniMax H3 Community License Agreement, dated 2026-08-02. Royalty-free use, modification
  and redistribution **within the Applicable Territory only** (worldwide minus the EU, UK, South Korea and
  the US); separate written authorisation above US$20M annual revenue; no distillation into other
  models; no use of outputs to improve other models; MiniMax claims no rights over outputs; "Powered by
  MiniMax H3" encouraged, and required on the UI of commercial products
  ([licence](../../sources/minimax.io/minimax-h3-community-license/2026-10-26.md)).
- **Hosted use:** fal's `licenseType: "commercial"` is fal's statement about use through fal, not a
  MiniMax grant ([fal](../../sources/fal.ai/minimax-h3-endpoints/2026-10-26.md)). Replicate's terms were
  not captured.
- **A third-party commercial licence exists.** ComfyUI states that commercial use of *locally generated*
  outputs requires a MiniMax commercial licence, "sold through Comfy, the only official reseller", and
  prices it: Professional from **$5,000/month** (up to 10 users, distilled open weights), Enterprise
  custom with a 12-month minimum (all versions, undistilled weights). It also states the rule that
  reconciles the licence text: free community licence for own-hardware commercial use outside
  US/EU/UK/KR and under $20M revenue, paid licence otherwise
  ([ComfyUI guide](../../sources/comfy.org/minimax-h3-guide/2026-10-26.md)).
  **Contradiction, preserved:** MiniMax's licence routes above-$20M authorisation requests to
  `api@minimax.io` and never mentions a reseller, while ComfyUI claims to be the only official one. No
  MiniMax document captured corroborates or denies the reseller claim.
- **Qwen3-VL-32B encoder:** the card says the encoder "uses the full pretrained weights of
  Qwen3-VL-32B". The released download therefore contains a second model's weights, and neither the card
  nor the licence addresses that model's licence.

## Unresolved questions

1. **Is the flagship's 2K option one charge or two?** The price page prices 768P→2K regeneration
   separately at $0.05/s; the API reference offers `resolution: "2K"` on `MiniMax-H3` directly. No
   captured page explains whether these are the same pipeline and how they are billed.
2. **What is `MiniMax-H3-Highspeed` and when did it ship?** It has an API model ID, a price and a
   resolution ceiling, but no release-notes entry and no line in the docs model list.
3. **Does H3 = "Hailuo 3"?** MiniMax describes H3 as the third generation after Hailuo 01 and 02 and
   files those under "Legacy Models", but never writes "Hailuo 3". fal's internal group key is
   `hailuo-03-new`. The name is a strong inference, not a documented alias.
4. **Where does fal's 480P and 4K come from?** Neither appears in MiniMax's own H3 documentation, and
   fal does not say whether 480P is a downscale or a distinct mode.
5. **How much quality lives in the withheld modules?** The card says Context-IR is "critical to the
   quality of the final output" and Regenerate-2K produces 2K, but publishes no ablation. A local
   deployment cannot measure the gap against the hosted pipeline.
6. **What does the Excluded Territory application actually grant?** The form collects revenue and
   commitments but no page states criteria, timeline, or price for approval.
7. **How is the Qwen3-VL-32B encoder licensed?** Unaddressed in the card and the licence.
8. **Do fal and Replicate run the same weights as MiniMax's API?** fal's `hostingType` is
   `"serverless"` rather than `"proxy"`, Replicate's version declares `arch: cpu`, and neither states
   which checkpoint (FL2VA / Ref2VA) or whether Context-IR and Regenerate-2K are in the path.
9. **Is the seed honoured?** fal exposes `seed`; MiniMax's API reference does not document one; Replicate
   has none.
10. **How does H3 compare on quality with Seedance 2.0/2.5, Kling, Veo or FLUX 3 Max?** Artificial
    Analysis is the only independent comparison, and it places H3 first on image-to-video (1140) with
    FLUX 3 Max (1138) and Seedance 2.5 (1138) inside the same interval, and third on text-to-video
    (1158) behind Wan 3.0 (1174). Kling and Veo were not captured on those boards, so their position is
    unknown.

## Evidence status

Evidence floor: **met.** First-party: the 2026-07-31 launch post, the docs model list, the video-generation
API reference, the price list, the release-notes page, the H3 Community License Agreement (2026-08-02),
and the Hugging Face model card with repository metadata. Independent hosts: one fal record (catalogue
entries, request schemas, prices), one Replicate record (README, input schema, billing, version dates)
and one ComfyUI record (deployment, VRAM tiers, frame grid, licence tiers). Independent evaluation: two
Artificial Analysis video boards plus their silent variants. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; price statements are published schedules.
The only quality measurement is Artificial Analysis's blind human-preference Elo, which covers H3 at
768p with audio and nothing else; where this page reports a ranking it is theirs, not ours.

The most valuable next evidence would be: a billed comparison of the same prompt at 768P and 2K on
MiniMax's API versus fal and Replicate, to settle both the 2K billing question and whether hosts match
the first-party pipeline, and to see whether 2K moves H3's Elo; an audio check on a delivered file to
confirm the 32 kHz stereo claim rather than the vendor's description of it; a first-and-last-frame
request plus a 9-image/3-video/3-audio reference request to find where the 12-file ceiling bites; a
local FL2VA run against the hosted 768p reference clip shipped in the weights repository, to quantify
what Context-IR contributes; and a re-check of the licence and the Excluded Territory form, since the
territory carve-out is the single constraint most likely to decide whether H3 can be used at all.

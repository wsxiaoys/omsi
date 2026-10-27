# Model curation roster — 131 models (upper-bound edition)

Working backlog for the knowledge base. **Not** knowledge — nothing here is evidence, and
nothing here should be cited. A model moves out of this file only when its page and source
records exist under `wiki/models/` and `sources/`.

Status: `[s]` stub page created, no sources · `[x]` page + sources curated · `[w]` in active worktree curation · `[ ]` planned, no page

130 pages exist on `master`: rows 1–100 are complete (row 91 is split into
`deepseek-v4.1-flash` and `deepseek-v4.1-flash-1017`), and 29 of the 30 rows in Batches 11–13 are
curated. Row 114 (Qwen-Audio 3.1 TTS Plus) remains `[ ]`: its first-party docs are captured and it
has an AA TTS leaderboard row, so the floor is met, but the page has not been written. Row 131
(Gemini 3.5 Flash Lite) is the proposed Batch 14 lite tier and remains planned.

Eighteen rows predate the one-year window and are retained as specialist/utility or baseline
exceptions: rows 25–27, 29–30, 38, 47, 49–50, 55, 63–66, 70–71, 74 and 98. Their pages state
the original dates; none claims to be a current-window launch.

## How this roster was built

- Discovery sources: `replicate.com/explore`, `fal.ai/models`, and
  `artificialanalysis.ai/leaderboards/models`, all read 2026-10-26.
- **Model names are discovery labels, not verified identities.** The `Discovery path` column
  records the host catalogue path where one was seen; it is a lead for curation, not a citation.
- Launch dates are not published in any of the three listings. The one-year filter
  (launched on or after 2025-10-26) therefore has to be checked per model during curation, from
  first-party changelogs or release notes. A model that turns out to be older gets dropped unless
  it is retained as a specialist/utility exception with the original date recorded on its page.
- Whether a family tier or a dated checkpoint gets its own page follows the three tests in
  `.agents/skills/wiki/SKILL.md` under **Model identity** (addressability, divergence, evidence
  separability), not the host catalogue. Hosts split entries for billing reasons and merge them
  for convenience, so catalogue structure is a lead rather than a decision. Where the split is
  unclear, the page records the ambiguity instead of guessing.
- Source records exist for every curated page (130 pages). Row 114 has first-party captures but
  no page; row 131 is planned.
- **Lite-tier rule (Batch 14).** A low-priced tier earns a row only when it is the newest member of
  its own efficiency line *and* the vendor is super-mainstream enough that the tier is a real
  production default (Gemini, OpenAI, Anthropic). Tiers that are one of five to eight
  near-identically priced sizes at a second-tier vendor are excluded even when they pass the
  identity and evidence tests, because they do not change a recommendation.

## Batch 1 — Image frontier (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 1 | GPT Image 2 | OpenAI | Replicate `openai/gpt-image-2` | `[x]` |
| 2 | GPT Image 2.5 Flare | OpenAI | fal `openai/gpt-image-2.5/flare` | `[x]` |
| 3 | GPT Image 2.5 Sunburst | OpenAI | fal `openai/gpt-image-2.5/sunburst` | `[x]` |
| 4 | Nano Banana 2 | Google | fal `fal-ai/nano-banana-2` | `[x]` |
| 5 | Nano Banana 2.1 | Google | fal `google/nano-banana-2.1` | `[x]` |
| 6 | Nano Banana Pro | Google | fal `fal-ai/nano-banana-pro` | `[x]` |
| 7 | Seedream 5.0 Pro | ByteDance | ByteDance Seed; fal `bytedance/seedream/v5/pro` | `[x]` |
| 8 | Seedream 5.0 Lite | ByteDance | Replicate `bytedance/seedream-5-lite` | `[x]` |
| 9 | Ideogram 4.5 | Ideogram | Replicate `ideogram-ai/ideogram-4-5` | `[x]` |
| 10 | Krea 3 | Krea | fal `krea/v3` | `[x]` |

## Batch 2 — Image: FLUX family and Qwen (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 11 | FLUX.2 [pro] | Black Forest Labs | BFL docs; fal `fal-ai/flux-2-pro` | `[x]` |
| 12 | FLUX.2 [max] | Black Forest Labs | BFL docs; fal `fal-ai/flux-2-max` | `[x]` |
| 13 | FLUX.2 [flex] | Black Forest Labs | fal `fal-ai/flux-2-flex` | `[x]` |
| 14 | FLUX.2 [klein] 4B | Black Forest Labs | BFL docs; fal `fal-ai/flux-2/klein/4b` | `[x]` |
| 15 | FLUX.2 [klein] 9B | Black Forest Labs | BFL docs; fal `fal-ai/flux-2/klein/9b` | `[x]` |
| 16 | FLUX.2 [dev] | Black Forest Labs | BFL docs; Hugging Face `black-forest-labs/FLUX.2-dev` | `[x]` |
| 17 | FLUX 3 Image | Black Forest Labs | fal `blackforestlabs/flux-3/text-to-image` | `[x]` |
| 18 | FLUX 3 Max | Black Forest Labs | fal `blackforestlabs/flux-3-max/text-to-video` | `[x]` video, not image: fal post-trained derivative of FLUX 3 Video |
| 19 | FLUX 3 Image Klein | Black Forest Labs | fal `blackforestlabs/flux-3/klein/text-to-image` | `[x]` |
| 20 | Qwen Image 3 | Alibaba | fal `alibaba/qwen-image-3/text-to-image`; Model Studio | `[x]` |

## Batch 3 — Image: specialists and utilities (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 21 | Recraft V4 Pro | Recraft | fal `fal-ai/recraft/v4/pro/text-to-image` | `[x]` |
| 22 | BRIA Fibo 2 | BRIA AI | fal `bria/fibo-2` | `[x]` |
| 23 | BRIA Fibo Edit 1.5 | BRIA AI | fal `bria/fibo-edit-1.5` | `[x]` |
| 24 | Grok Imagine Image | xAI | fal `xai/grok-imagine-image` | `[x]` |
| 25 | FASHN Try-On 1.6 | FASHN | fal `fal-ai/fashn/tryon/v1.6` | `[x]` out-of-window specialist (2025-06-25); see page |
| 26 | Leffa | Meta research | fal `fal-ai/leffa` | `[x]` out-of-window specialist (2024-12); see page |
| 27 | BiRefNet v2 | open source | fal `fal-ai/birefnet/v2` | `[x]` out-of-window specialist; `/v2` is a fal host revision |
| 28 | SAM 3 | Meta | fal `fal-ai/sam-3` | `[x]` |
| 29 | Topaz Upscale | Topaz Labs | fal `topaz/upscale` | `[x]` 2024 API; newer model releases in window |
| 30 | Pixelcut Background Removal | Pixelcut | fal `pixelcut/background-removal` | `[x]` out-of-window utility (2024-07); see page |

## Batch 4 — Video: frontier (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 31 | Seedance 2.0 | ByteDance | fal `bytedance/seedance-2.0` | `[x]` |
| 32 | Seedance 2.5 | ByteDance | fal `bytedance/seedance-2.5` | `[x]` |
| 33 | Wan 3.0 | Alibaba | fal `alibaba/wan-3.0` | `[x]` |
| 34 | Wan 3.0 Prime | Alibaba | fal `alibaba/wan-3.0-prime` | `[x]` |
| 35 | Happy Horse 1.1 | Alibaba | fal `alibaba/happy-horse/v1.1` | `[x]` |
| 36 | Kling 3.0 | Kuaishou | fal `fal-ai/kling-video/v3` | `[x]` |
| 37 | Kling 4.0 | Kuaishou | fal `kling/v4` | `[x]` |
| 38 | Veo 3.1 | Google | fal `fal-ai/veo3.1` | `[x]` out-of-window preview (2025-10-15); GA 2025-11-17 |
| 39 | MiniMax H3 | MiniMax | fal `minimax/h3` | `[x]` |
| 40 | MiniMax H3 Max | MiniMax | fal `minimax/h3-max` | `[x]` |

## Batch 5 — Video: specialists (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 41 | PixVerse V6 | PixVerse | fal `fal-ai/pixverse/v6` | `[x]` |
| 42 | Grok Imagine Video 1.5 | xAI | fal `xai/grok-imagine-video/v1.5` | `[x]` |
| 43 | LTX 2.5 | Lightricks | fal `lightricks/ltx-2.5` | `[x]` |
| 44 | P-Video 2 Pro | Pruna | draft discovery | `[x]` |
| 45 | Gemini Omni 1.1 | Google | draft discovery | `[x]` |
| 46 | Hunyuan Motion | Tencent | fal `fal-ai/hunyuan-motion` | `[x]` |
| 47 | OmniHuman 1.5 | ByteDance | fal `fal-ai/bytedance/omnihuman/v1.5` | `[x]` out-of-window specialist (2025-08-26) |
| 48 | Sync Lipsync 3 | Sync | fal `fal-ai/sync-lipsync/v3` | `[x]` |
| 49 | Kling Lip Sync | Kuaishou | fal `fal-ai/kling-video/lipsync` | `[x]` out-of-window specialist (2024-12-23) |
| 50 | Aurora | Creatify | fal `fal-ai/creatify/aurora` | `[x]` out-of-window specialist (2025-09-03); Aurora 2.0 later |

## Batch 6 — Video: avatars and world models, plus 3D (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 51 | HeyGen Avatar 5 | HeyGen | fal `fal-ai/heygen/avatar5` | `[x]` |
| 52 | ABot-World 0 | Alibaba | fal `alibaba/abot-world-0` | `[x]` |
| 53 | LingBot World 2 | Robbyant | fal `robbyant/lingbot-world-2` | `[x]` |
| 54 | Mirage Avatar X | Mirage | fal `mirage-api/avatar-x` | `[x]` |
| 55 | VEED Fabric 1.0 | VEED | fal `veed/fabric-1.0` | `[x]` out-of-window specialist (2025-09-19) |
| 56 | Eden Live 5B | Vast | fal `vast/eden-live-5b` | `[x]` |
| 57 | Decart Lucy 2 VTON | Decart | fal `decart/lucy2-vton` | `[x]` |
| 58 | Hunyuan3D 3.1 | Tencent | fal `fal-ai/hunyuan-3d/v3.1` | `[x]` |
| 59 | Hyper3D Rodin 2.5 | Deemos | fal `fal-ai/hyper3d/rodin/v2.5` | `[x]` |
| 60 | Meshy 7.1 | Meshy | fal `meshy/v7.1` | `[x]` |

## Batch 7 — Audio (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 61 | Eleven v4 | ElevenLabs | draft discovery | `[x]` |
| 62 | Eleven v3 | ElevenLabs | fal `fal-ai/elevenlabs/tts/eleven-v3` | `[x]` alpha 2025-06; GA 2026-02 |
| 63 | ElevenLabs Multilingual v2 | ElevenLabs | fal `fal-ai/elevenlabs/tts/multilingual-v2` | `[x]` out-of-window baseline (2023-08-22) |
| 64 | ElevenLabs Turbo v2.5 | ElevenLabs | fal `fal-ai/elevenlabs/tts/turbo-v2.5` | `[x]` out-of-window baseline (2024-07-19) |
| 65 | ElevenLabs Music | ElevenLabs | fal `fal-ai/elevenlabs/music` | `[x]` v1 out-of-window (2025-08); v2/v2.5 in window |
| 66 | ElevenLabs Sound Effects v2 | ElevenLabs | fal `fal-ai/elevenlabs/sound-effects/v2` | `[x]` out-of-window (2025-09) |
| 67 | MiniMax Music 2.6 | MiniMax | fal `fal-ai/minimax-music/v2.6` | `[x]` |
| 68 | MiniMax Speech 2.8 HD | MiniMax | fal `fal-ai/minimax/speech-2.8-hd` | `[x]` |
| 69 | Inworld TTS | Inworld | fal `fal-ai/inworld-tts` | `[x]` |
| 70 | Chatterbox | Resemble AI | fal `fal-ai/chatterbox` | `[x]` original 2025-04 out; Turbo/Nano/Flash in window |

## Batch 8 — Audio and 3D (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 71 | Dia TTS | Nari Labs | fal `fal-ai/dia-tts` | `[x]` out-of-window specialist (2025-04) |
| 72 | Qwen3 TTS | Alibaba | fal `fal-ai/qwen-3-tts` | `[x]` |
| 73 | Lyria 3 | Google | fal `fal-ai/lyria3` | `[x]` |
| 74 | ACE-Step | ACE Studio | fal `fal-ai/ace-step` | `[x]` out-of-window specialist (2025-05-06) |
| 75 | Seed Audio 1.0 | ByteDance | fal `bytedance/seed-audio-1.0` | `[x]` |
| 76 | Gemini 3.1 Flash TTS | Google | fal `fal-ai/gemini-3.1-flash-tts` | `[x]` |
| 77 | Gemini 3.8 Flash TTS | Google | draft discovery | `[x]` |
| 78 | Gemini 3.8 Flash Lite TTS | Google | draft discovery | `[x]` |
| 79 | TRELLIS 2 | Microsoft | fal `fal-ai/trellis-2` | `[x]` |
| 80 | Tripo 3D H3.1 | Tripo AI | fal `tripo3d/h3.1` | `[x]` |

## Batch 9 — Text frontier (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 81 | Claude Opus 5.5 | Anthropic | Artificial Analysis leaderboard | `[x]` |
| 82 | Claude Sonnet 5.5 | Anthropic | Artificial Analysis leaderboard | `[x]` |
| 83 | Claude Haiku 5.5 | Anthropic | Artificial Analysis leaderboard | `[x]` |
| 84 | GPT-6 Astra | OpenAI | Artificial Analysis leaderboard | `[x]` |
| 85 | GPT-6.1 Sol | OpenAI | Artificial Analysis leaderboard | `[x]` |
| 86 | Gemini 4 Argon | Google | Artificial Analysis leaderboard | `[x]` |
| 87 | Gemini 3.8 Flash | Google | Artificial Analysis leaderboard | `[x]` |
| 88 | Grok 4.7 | xAI | Artificial Analysis leaderboard | `[x]` |
| 89 | Kimi K3.1 Pro | Moonshot AI | Artificial Analysis leaderboard | `[x]` |
| 90 | Qwen3.8 Max | Alibaba | Artificial Analysis leaderboard | `[x]` |

## Batch 10 — Text mid-tier and open weights (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 91 | DeepSeek V4.1 Flash | DeepSeek | Artificial Analysis leaderboard | `[x]` split: `deepseek-v4.1-flash`, `deepseek-v4.1-flash-1017` |
| 92 | GLM-5.3 | Z AI | Artificial Analysis leaderboard | `[x]` |
| 93 | MiniMax M3.1 Flash | MiniMax | Artificial Analysis leaderboard | `[x]` |
| 94 | Mistral Large 4 | Mistral | Artificial Analysis leaderboard | `[x]` |
| 95 | Qwen3.8 Flash-Next | Alibaba | Artificial Analysis leaderboard | `[x]` |
| 96 | Nemotron 3.5 | NVIDIA | Artificial Analysis leaderboard | `[x]` |
| 97 | Gemma 4 | Google | Artificial Analysis leaderboard | `[x]` |
| 98 | gpt-oss-120b | OpenAI | Artificial Analysis leaderboard | `[x]` out-of-window (2025-08-05); open-weights baseline |
| 99 | OLMo 3.1 | AI2 | Artificial Analysis leaderboard | `[x]` |
| 100 | Granite 4.2 | IBM | Artificial Analysis leaderboard | `[x]` |

## Batch 11 — Image and Video: frontier gaps and late-window releases (10)

Models surfaced during the Batch 1–6 curation pass from the same discovery sources (`fal.ai/models`,
Artificial Analysis Image and Video Arenas, and vendor catalogues) that have distinct model IDs,
non-overlapping capability/price positioning, and in-window launch dates (Jun–Oct 2026).

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 101 | MAI-Image 2.6 | Microsoft | AA Image Arena (`MAI-Image-2.6`); fal `microsoft/mai-image-2.5` | `[x]` verify whether 2.6 is publicly addressable or 2.5 is the API SKU |
| 102 | Grok Imagine Image 2.0 | xAI | AA Image Arena (`Grok Imagine Image 2.0`) | `[x]` distinct from `grok-imagine-image` (+144 Elo on AA) |
| 103 | Meta Muse Image | Meta | fal `meta/muse-image`; AA Image Arena (`Muse Image`) | `[x]` |
| 104 | Nano Banana 2 Lite | Google | Google `gemini-3.1-flash-lite-image`; fal `google/nano-banana-2-lite` | `[x]` |
| 105 | Seedream 5.0 Flash | ByteDance | fal `bytedance/seedream/v5/flash/text-to-image` | `[x]` |
| 106 | Recraft V4.1 | Recraft | fal `fal-ai/recraft/v4.1/text-to-image`; AA Image Arena | `[x]` |
| 107 | Luma Uni-1 | Luma AI | fal `luma/agent/uni-1/v1/edit`; AA Image Arena (`Luma UNI 1`) | `[x]` |
| 108 | HeyGen Video 1 | HeyGen | fal `heygen/heygen-video/image-to-video`; AA Video Arena | `[x]` general T2V/I2V model, distinct from Avatar 5 |
| 109 | Kling O3 | Kuaishou | fal `fal-ai/kling-video/o3/pro/video-to-video/edit` | `[x]` omni video-edit line |
| 110 | Vidu Q4 | Shengshu / Vidu | fal `fal-ai/vidu/q4/image-to-video` | `[x]` |

## Batch 12 — Audio: TTS flagships, music successors, and speech-to-text (10)

Fills the Speech-to-Text (ASR) modality gap (absent from Batches 7–8) and adds the Aug–Oct 2026
TTS and music releases that now lead the Artificial Analysis TTS board and fal audio catalogue.

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 111 | Eleven v4 Turbo | ElevenLabs | ElevenLabs `eleven_v4_turbo`; AA TTS leaderboard (#1) | `[x]` half price of `eleven_v4`, ~100ms WebSocket tier |
| 112 | Inworld Realtime TTS-2 | Inworld | AA TTS leaderboard (`Realtime TTS-2`, `TTS-2 Flash`) | `[x]` successor to TTS-1.5 (#69) |
| 113 | Cartesia Sonic 3.6 | Cartesia | AA TTS leaderboard (`Sonic 3.6`) | `[x]` |
| 114 | Qwen-Audio 3.1 TTS Plus | Alibaba | AA TTS leaderboard (`Qwen-Audio-3.1-TTS-Plus`) | `[ ]` sources captured, floor met; page not written |
| 115 | Voxtral 3 TTS | Mistral | AA TTS leaderboard (`Voxtral 3 TTS`) | `[x]` |
| 116 | Lyria 3.5 | Google | fal `google/lyria-3.5` | `[x]` successor to Lyria 3 (#73) |
| 117 | MiniMax Music 3 | MiniMax | fal `minimax/music-3` | `[x]` successor to Music 2.6 (#67) |
| 118 | Stable Audio 3 | Stability AI | fal `fal-ai/stable-audio-3/medium/text-to-audio` | `[x]` |
| 119 | ElevenLabs Scribe v2 | ElevenLabs | fal `fal-ai/elevenlabs/speech-to-text/scribe-v2`; AA STT leaderboard | `[x]` STT |
| 120 | Voxtral Transcribe 3 | Mistral | AA STT leaderboard (`Voxtral Small Transcribe 3`, `Mini Transcribe 3`) | `[x]` STT |

## Batch 13 — Text: remaining frontier tiers, fast reasoning, and open weights (10)

Remaining in-window text/multimodal models on the Artificial Analysis LLM leaderboard (Index ≥ 30
or notable architectural outlier) with both first-party documentation and OpenRouter/host listings.

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 121 | Claude Fable 5.1 | Anthropic | Claude docs `claude-fable-5-1`; OpenRouter; AA leaderboard | `[x]` $10/$50 tier above Opus 5.5 |
| 122 | GPT-6.1 Terra | OpenAI | OpenAI `gpt-6.1-terra`; OpenRouter; AA leaderboard | `[x]` fast/efficient tier below Sol |
| 123 | GPT-6 Luna | OpenAI | OpenAI `gpt-6-luna`; OpenRouter; AA leaderboard | `[x]` high-volume low-cost tier |
| 124 | Meta Muse Wonder | Meta | OpenRouter `meta/muse-wonder`; AA leaderboard | `[x]` |
| 125 | Meta Muse Spark Open | Meta | OpenRouter `meta/muse-spark-open`; AA leaderboard | `[x]` open-weight Muse tier |
| 126 | Xiaomi MiMo-V2.6-Pro | Xiaomi | OpenRouter `xiaomi/mimo-v2.6-pro`; AA leaderboard | `[x]` Index 46 at $0.13/task; cover `MiMo-V2.6-Flash` on page if not split |
| 127 | StepFun Step 5 Preview | StepFun | OpenRouter `stepfun/step-5-preview`; AA leaderboard | `[x]` |
| 128 | InclusionAI Ling 3.1 Flash | InclusionAI (Ant) | OpenRouter `inclusionai/ling-3.1-flash`; AA leaderboard | `[x]` check `1019` checkpoint split during curation |
| 129 | DeepSeek V4 Pro 0813 | DeepSeek | OpenRouter `deepseek/deepseek-v4-pro-0813`; AA leaderboard | `[x]` Pro sibling to V4.1 Flash |
| 130 | Inception Mercury 3 | Inception Labs | OpenRouter `inception/mercury-3`; AA (`Mercury 2.5`) | `[x]` diffusion LLM |

## Batch 14 — mainline lite tiers (1)

Sweep for low-priced tiers at the three super-mainstream LLM vendors. The rule applied: **keep the
newest member of each efficiency line and drop any predecessor a same-line successor serves**, and
**only keep a lite tier where it changes a recommendation** — which is true for Gemini, OpenAI, and
Anthropic (10–30× below flagship, high-volume default, own leaderboard row) but not for the other
vendors, whose "lite" tier is one of five to eight near-identically priced sizes already covered by
their own flash or mid tier.

OpenAI and Anthropic need no new rows: GPT-6 Luna (#123) and Claude Haiku 5.5 (#83) are their
current low tiers, and `gpt-5.6-luna`, `gpt-5.4-nano`, and Gemini 3.1 Flash Lite are all superseded.
`openai/gpt-audio-mini` is recorded under **Deliberately excluded** rather than here: it is a
speech-in/speech-out model, not an LLM, and the audio modality is already covered by Batches 7–8
and 12.

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 131 | Gemini 3.5 Flash Lite | Google | OpenRouter `google/gemini-3.5-flash-lite` (2026-07-21), $0.30/$2.50 | `[ ]` current Gemini lite tier — no 3.6/3.7/3.8 lite exists |

## Upper-bound assessment — why we recommend stopping at 131

Across the four discovery feeds sampled on 2026-10-26 (`openrouter.ai/api/v1/models` with 318 IDs
created ≥ 2025-10-26, `fal.ai/api/models` with 301 model families published ≥ 2025-10-26,
`replicate.com/explore`, and the five Artificial Analysis leaderboards), **131 models is the
practical upper bound** before curation quality degrades. Expanding beyond Batch 14 runs into four
structural walls:

1. **Identity-rule collapse (effort flags, billing suffixes, and host routes).** More than half of
   the remaining post-2025-10-26 IDs on OpenRouter and fal are `:batch` / `:free` / `-pro` /
   `~latest` aliases, reasoning-effort rows (`low`/`medium`/`high`/`xhigh`/`max`), or task-split
   endpoints (`/text-to-image` vs `/edit`, `/image-to-video` vs `/reference-to-video`). Under the
   three-part identity rule in `.agents/skills/wiki/SKILL.md`, those belong inside the canonical
   model page, not as separate roster rows.
2. **In-window self-supersession.** Because major labs shipped two to four generations inside this
   single 12-month window, a large share of post-2025-10-26 releases are already superseded by the
   same vendor's own current tier (and in several cases already deprecated or scheduled for
   retirement). Curating every intermediate step (see **Deliberately excluded** below) dilutes
   recommendations without adding actionable choices.
3. **Evidence-floor failures in the long tail.** Below ~Index 30 on the AA text leaderboard and
   outside the top ~25 on the Image/Video/TTS/STT boards, most uncurated entries fail the wiki's
   evidence floor: they are either leaderboard-only previews marked `"No API available"` / `"Coming
   soon"` (e.g., `Utopai X`, `MAGI-2 Preview`, `Muse Wonder Full`), single-host community uploads on
   fal/Replicate with no independent second host, or thin ffmpeg/workflow utilities (`trim-video`,
   `smart-resize`, `merge-audios`).
4. **Diminishing decision value.** Batches 1–14 cover every top-15 model across Text, Image, Video,
   TTS, STT, Music, and 3D, plus the leading open-weight and specialist utility options. Beyond 131,
   new additions are either regional/niche open weights (`Ring-2.6-1T`, `JT-4.1 Flash`, `A.X-K2`,
   `K-EXAONE 2.0`, `HyperCLOVA X SEED Think`) or incremental point updates (`OmniHuman 2`, `Luma Ray
   3.2`, `SAM 3.1`, `Qwen3.8 2.4T A95B`) that are better handled either by updating the existing
   family page or by curating on demand when a concrete user question requires them.

The Batch 14 lite-tier sweep is the strongest evidence for this ceiling: applying the
keep-only-the-newest-in-line rule across every mainline vendor's cheap tiers produced **one**
addition, not fifteen. The apparent gap in "lite models" was a single genuine decision (Gemini 3.5
Flash Lite) plus a long tail of tiers that shift price by cents without shifting a recommendation.

## Deliberately excluded (older than the window, or fully superseded)

Recorded so the decision isn't relitigated. These get a page only if a constraint makes one
the correct answer (cheapest, on-prem, deterministic) — otherwise they stay out.

- **FLUX.1 [pro] / Kontext [pro] / [max]** — 2025 releases, outside the window; BFL itself
  points new work at FLUX.2.
- **Stable Diffusion 1.5 / SDXL / SD3.5** — superseded on quality. SDXL remains the cheapest
  self-hostable option, so it is the likeliest exception if cost-constrained questions recur.
- **Llama 3.x, Phi-4, o3, Gemini 1.5** — outside the window.
- **Llama 4 Maverick / Scout** — borderline (2025); AA score is far below current models.
  Revisit only if open-weight licensing becomes the deciding constraint.
- **Seedream 4.0 / 4.5** — 4.0 is 2025-09 (outside the window) and 4.5 (2025-12) is superseded by
  Seedream 5.0 Pro, Lite, and Flash.
- **In-window superseded text generations** — OpenAI `gpt-5.1` / `5.2` / `5.3-codex` / `5.4` /
  `5.5` / `5.6` and `gpt-6-sol` (superseded by the GPT-6 Astra / 6.1 Sol / 6.1 Terra / 6 Luna
  lineup); Anthropic `claude-opus-4.5` / `4.6` / `4.7` / `4.8` / `5.0` and `claude-sonnet-4.6` /
  `5.0` (superseded by the 5.5 family and Fable 5.1); Google `gemini-3-flash` / `3.1-pro` /
  `3.5-flash` / `3.6-flash` / `3.7-flash` (superseded by Gemini 4 Argon and 3.8 Flash — note this
  is the non-lite Flash line; `gemini-3.5-flash-lite` is current and is row 131); Alibaba
  `qwen3.5` / `3.6` / `3.7` series (superseded by Qwen3.8, with `qwen3.7-max` already marked legacy
  in Model Studio); Moonshot `kimi-k2.5` / `k2.6` / `k2.7-code` / `k3` (K2 series retiring Dec 2026;
  K3 described as previous-generation in favour of K3.1 Pro); Z AI `glm-4.7` / `5.0` / `5.1` / `5.2`
  (superseded by GLM-5.3); MiniMax `minimax-m2.1` / `m2.5` / `m2.7` / `m3` (superseded by M3.1
  Flash).
- **In-window superseded image/video/audio generations** — Ideogram 4.0 (superseded by 4.5), Krea 2
  (superseded by Krea 3), Wan 2.6 / 2.7 (superseded by Wan 3.0), PixVerse 5.5 / 5.6 (superseded by
  V6), Seedance 1.5 (superseded by 2.0 / 2.5), Kling 2.6 (superseded by 3.0 / 4.0), LTX 2.3
  (superseded by 2.5), MiniMax Hailuo 2.3 and Speech 2.6 (superseded by H3 and Speech 2.8).
- **Leaderboard-only previews without public API or weights** — `Utopai X` (#2 on AA-Video-T2V v2.1,
  marked "No API available"), `MAGI-2 Preview` (#14 on AA-Video-T2V v2.1, marked "Coming soon"), and
  `Muse Wonder Full` (AA LLM board, no public API pricing/speed columns). Eligible once an API or
  weights artifact ships.
- **Superseded lite tiers** — Gemini 3.1 Flash Lite (superseded by 3.5 Flash Lite), GPT-5.6 Luna and
  GPT-5.4 Nano (superseded by GPT-6 Luna), and Nemotron 3 Nano 30B (superseded by Nemotron 3.5
  Lightning). Each is served by a same-line successor at equal or lower price.
- **Non-mainstream-vendor lite tiers** — Amazon Nova 2 Lite, Mistral Small 4, Ministral 3
  (3B/8B/14B), Mistral Medium 3.5, Qwen3.8 Flash, Qwen3.8 Omni Flash, Qwen3.8 27B, GLM 5.3 Flash,
  GLM 5.3 FlashX, Nemotron 3.5 Lightning, Nemotron 3.5 Super VL, Meta Muse Glimmer 30B, and Command
  A+. These pass the identity and evidence tests but fail the decision test: each is one of five to
  eight near-identically priced sizes inside a vendor whose own flash or mid tier already occupies
  that slot, so a separate page adds a row without adding a choice. Revisit only if a vendor's lite
  tier becomes the cheapest credible option for a constraint that recurs (on-prem, flat-rate, or a
  specific regional endpoint).
- **`gpt-audio-mini`** — OpenAI's cheap speech-in/speech-out tier (2026-01-19, $0.60/$2.40). Not an
  LLM, and the audio modality is already covered by Batches 7–8 and 12; add only if a
  realtime-voice cost question makes the mini tier the answer.

## Open questions for the roster itself

1. Curation on 2026-10-26 settled the FLUX 3 grouping: FLUX 3 Max is a video model post-trained by
   fal, not an image tier, and FLUX 3 Image / FLUX 3 Image Klein are distinct. It also settled
   GPT Image 2.5 Flare vs Sunburst (separate IDs, no measured behavioural difference) and Nano
   Banana 2 vs 2.1 (distinct successor, with 2 deprecated), Kling 3.0 vs 4.0, and MiniMax H3 vs
   H3 Max. Each page records the ambiguity; curation settled these for rows 1–100.
2. **DeepSeek V4.1 Flash** (#91) is the first dated-checkpoint case, and it was **split** on
   2026-10-26. Resolved since: `1017` is a **separate MIT weights repository** (~510 GB, fp8),
   not an API-only refresh; both checkpoints are therefore obtainable artifacts, so the
   "unreachable base" re-merge condition does not apply. The divergence is also independently
   corroborated — +7.0 (Artificial Analysis) and +12.1 (Vals AI) on Terminal-Bench 4.0 against
   the vendor's +11.1 — so the split rests on evidence from three parties rather than one.
   Remaining: no name on DeepSeek's own API resolves to the base, so a reader cannot select it
   first-party. The same question applies to any AA label that turns out to be a dated
   snapshot; note that AA lists only the `1017` row, so a board entry naming a checkpoint does
   not imply the base is separately evaluated.
3. The Artificial Analysis names (Claude Opus 5.5, GPT-6 Astra, Gemini 4 Argon, etc.) are
   leaderboard labels. They may denote variants rather than canonical model IDs. Re-verify
   against first-party model cards before writing sources.
4. Utility models (BiRefNet, SAM 3, Topaz Upscale, Pixelcut) are included because the user
   asked for all modalities, not only generative models. If the 100 slots should be reserved
   for generative models, these four are the first to replace.
5. Launch dates were checked for rows 1–100: 18 fell outside the one-year window and are recorded
   as exceptions. Rows 101–131 still need the same check before curation; their inclusion is a
   proposal, not a verified count.

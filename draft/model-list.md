# Model curation roster — 100 models

Working backlog for the knowledge base. **Not** knowledge — nothing here is evidence, and
nothing here should be cited. A model moves out of this file only when its page and source
records exist under `wiki/models/` and `sources/`.

Status: `[s]` stub page created, no sources · `[x]` page + sources curated · `[ ]` planned, no page

15 pages exist. Image: all ten batch 1 pages and three from batch 2. Text: the two DeepSeek
V4.1 Flash pages from batch 10. Eight pages are curated with source records — GPT Image 2,
GPT Image 2.5 Flare, GPT Image 2.5 Sunburst, Nano Banana 2, Nano Banana 2.1, `flux-2-pro`,
`deepseek-v4.1-flash`, `deepseek-v4.1-flash-1017` — and the other seven are stubs. Batches 3–9
have no pages yet. Stub pages carry identity scaffolding only: canonical name, vendor, related
pages, and open questions. They make no capability, pricing, or policy claims.

## How this roster was built

- Discovery sources: `replicate.com/explore`, `fal.ai/models`, and
  `artificialanalysis.ai/leaderboards/models`, all read 2026-10-26.
- **Model names are discovery labels, not verified identities.** The `Discovery path` column
  records the host catalogue path where one was seen; it is a lead for curation, not a citation.
- Launch dates are not published in any of the three listings. The one-year filter
  (launched on or after 2025-10-26) therefore has to be checked per model during curation, from
  first-party changelogs or release notes. A model that turns out to be older gets dropped.
- Whether a family tier or a dated checkpoint gets its own page follows the three tests in
  `.agents/skills/wiki/SKILL.md` under **Model identity** (addressability, divergence, evidence
  separability), not the host catalogue. Hosts split entries for billing reasons and merge them
  for convenience, so catalogue structure is a lead rather than a decision. Where the split is
  unclear, the page records the ambiguity instead of guessing.
- Source records exist for the five curated batch 1 models, the FLUX.2 [pro] family, and the two
  DeepSeek V4.1 Flash pages.

## Batch 1 — Image frontier (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 1 | GPT Image 2 | OpenAI | Replicate `openai/gpt-image-2` | `[x]` |
| 2 | GPT Image 2.5 Flare | OpenAI | fal `openai/gpt-image-2.5/flare` | `[x]` |
| 3 | GPT Image 2.5 Sunburst | OpenAI | fal `openai/gpt-image-2.5/sunburst` | `[x]` |
| 4 | Nano Banana 2 | Google | fal `fal-ai/nano-banana-2` | `[x]` |
| 5 | Nano Banana 2.1 | Google | fal `google/nano-banana-2.1` | `[x]` |
| 6 | Nano Banana Pro | Google | fal `fal-ai/nano-banana-pro` | `[s]` |
| 7 | Seedream 5.0 | ByteDance | draft discovery; full-model slug unverified | `[s]` |
| 8 | Seedream 5.0 Lite | ByteDance | Replicate `bytedance/seedream-5-lite` | `[s]` |
| 9 | Ideogram 4.5 | Ideogram | Replicate `ideogram-ai/ideogram-4-5` | `[s]` |
| 10 | Krea 3 | Krea | fal `krea/v3` | `[s]` |

## Batch 2 — Image: FLUX family and Qwen (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 11 | FLUX.2 [pro] | Black Forest Labs | BFL docs; fal `fal-ai/flux-2-pro` | `[x]` |
| 12 | FLUX.2 [max] | Black Forest Labs | BFL docs | `[s]` |
| 13 | FLUX.2 [flex] | Black Forest Labs | fal `fal-ai/flux-2-flex` | `[s]` |
| 14 | FLUX.2 [klein] 4B | Black Forest Labs | fal `fal-ai/flux-2-klein-4b-base-trainer` | `[s]` |
| 15 | FLUX.2 [klein] 9B | Black Forest Labs | fal `fal-ai/flux-2-klein-9b-base-trainer` | `[s]` |
| 16 | FLUX.2 [dev] | Black Forest Labs | BFL docs | `[s]` |
| 17 | FLUX 3 Image | Black Forest Labs | fal `blackforestlabs/flux-3` | `[s]` |
| 18 | FLUX 3 Max | Black Forest Labs | fal `blackforestlabs/flux-3-max` | `[s]` |
| 19 | FLUX 3 [klein] | Black Forest Labs | fal `blackforestlabs/flux-3/klein` | `[s]` |
| 20 | Qwen Image 3 | Alibaba | fal `alibaba/qwen-image-3` | `[s]` |

## Batch 3 — Image: specialists and utilities (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 21 | Recraft V4 Pro | Recraft | fal `fal-ai/recraft/v4/pro` | `[s]` |
| 22 | BRIA Fibo 2 | BRIA AI | fal `bria/fibo-2` | `[s]` |
| 23 | BRIA Fibo Edit 1.5 | BRIA AI | fal `bria/fibo-edit-1.5` | `[s]` |
| 24 | Grok Imagine Image | xAI | fal `xai/grok-imagine-image` | `[s]` |
| 25 | FASHN Try-On 1.6 | FASHN | fal `fal-ai/fashn/tryon/v1.6` | `[s]` |
| 26 | Leffa | Meta research | fal `fal-ai/leffa` | `[s]` |
| 27 | BiRefNet v2 | open source | fal `fal-ai/birefnet/v2` | `[s]` |
| 28 | SAM 3 | Meta | fal `fal-ai/sam-3` | `[s]` |
| 29 | Topaz Upscale | Topaz Labs | fal `topaz/upscale` | `[s]` |
| 30 | Pixelcut Background Removal | Pixelcut | fal `pixelcut/background-removal` | `[s]` |

## Batch 4 — Video: frontier (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 31 | Seedance 2.0 | ByteDance | fal `bytedance/seedance-2.0` | `[s]` |
| 32 | Seedance 2.5 | ByteDance | fal `bytedance/seedance-2.5` | `[s]` |
| 33 | Wan 3.0 | Alibaba | fal `alibaba/wan-3.0` | `[s]` |
| 34 | Wan 3.0 Prime | Alibaba | fal `alibaba/wan-3.0-prime` | `[s]` |
| 35 | Happy Horse 1.1 | Alibaba | fal `alibaba/happy-horse/v1.1` | `[s]` |
| 36 | Kling 3.0 | Kuaishou | fal `fal-ai/kling-video/v3` | `[s]` |
| 37 | Kling 4.0 | Kuaishou | fal `kling/v4` | `[s]` |
| 38 | Veo 3.1 | Google | fal `fal-ai/veo3.1` | `[s]` |
| 39 | MiniMax H3 | MiniMax | fal `minimax/h3` | `[s]` |
| 40 | MiniMax H3 Max | MiniMax | fal `minimax/h3-max` | `[s]` |

## Batch 5 — Video: specialists (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 41 | PixVerse V6 | PixVerse | fal `fal-ai/pixverse/v6` | `[s]` |
| 42 | Grok Imagine Video 1.5 | xAI | fal `xai/grok-imagine-video/v1.5` | `[s]` |
| 43 | LTX 2.5 | Lightricks | fal `lightricks/ltx-2.5` | `[s]` |
| 44 | P-Video 2 Pro | Pruna | draft discovery | `[s]` |
| 45 | Gemini Omni 1.1 | Google | draft discovery | `[s]` |
| 46 | Hunyuan Motion | Tencent | fal `fal-ai/hunyuan-motion` | `[s]` |
| 47 | OmniHuman 1.5 | ByteDance | fal `fal-ai/bytedance/omnihuman/v1.5` | `[s]` |
| 48 | Sync Lipsync 3 | Sync | fal `fal-ai/sync-lipsync/v3` | `[s]` |
| 49 | Kling Lip Sync | Kuaishou | fal `fal-ai/kling-video/lipsync` | `[s]` |
| 50 | Aurora | Creatify | fal `fal-ai/creatify/aurora` | `[s]` |

## Batch 6 — Video: avatars and world models, plus 3D (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 51 | HeyGen Avatar 5 | HeyGen | fal `fal-ai/heygen/avatar5` | `[s]` |
| 52 | ABot-World 0 | Alibaba | fal `alibaba/abot-world-0` | `[s]` |
| 53 | LingBot World 2 | Robbyant | fal `robbyant/lingbot-world-2` | `[s]` |
| 54 | Mirage Avatar X | Mirage | fal `mirage-api/avatar-x` | `[s]` |
| 55 | VEED Fabric 1.0 | VEED | fal `veed/fabric-1.0` | `[s]` |
| 56 | Eden Live 5B | Vast | fal `vast/eden-live-5b` | `[s]` |
| 57 | Decart Lucy 2 VTON | Decart | fal `decart/lucy2-vton` | `[s]` |
| 58 | Hunyuan3D 3.1 | Tencent | fal `fal-ai/hunyuan-3d/v3.1` | `[s]` |
| 59 | Hyper3D Rodin 2.5 | Deemos | fal `fal-ai/hyper3d/rodin/v2.5` | `[s]` |
| 60 | Meshy 7.1 | Meshy | fal `meshy/v7.1` | `[s]` |

## Batch 7 — Audio (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 61 | Eleven v4 | ElevenLabs | draft discovery | `[s]` |
| 62 | Eleven v3 | ElevenLabs | fal `fal-ai/elevenlabs/tts/eleven-v3` | `[s]` |
| 63 | ElevenLabs Multilingual v2 | ElevenLabs | fal `fal-ai/elevenlabs/tts/multilingual-v2` | `[s]` |
| 64 | ElevenLabs Turbo v2.5 | ElevenLabs | fal `fal-ai/elevenlabs/tts/turbo-v2.5` | `[s]` |
| 65 | ElevenLabs Music | ElevenLabs | fal `fal-ai/elevenlabs/music` | `[s]` |
| 66 | ElevenLabs Sound Effects v2 | ElevenLabs | fal `fal-ai/elevenlabs/sound-effects/v2` | `[s]` |
| 67 | MiniMax Music 2.6 | MiniMax | fal `fal-ai/minimax-music/v2.6` | `[s]` |
| 68 | MiniMax Speech 2.8 HD | MiniMax | fal `fal-ai/minimax/speech-2.8-hd` | `[s]` |
| 69 | Inworld TTS | Inworld | fal `fal-ai/inworld-tts` | `[s]` |
| 70 | Chatterbox | Resemble AI | fal `fal-ai/chatterbox` | `[s]` |

## Batch 8 — Audio and 3D (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 71 | Dia TTS | Nari Labs | fal `fal-ai/dia-tts` | `[s]` |
| 72 | Qwen3 TTS | Alibaba | fal `fal-ai/qwen-3-tts` | `[s]` |
| 73 | Lyria 3 | Google | fal `fal-ai/lyria3` | `[s]` |
| 74 | ACE-Step | ACE Studio | fal `fal-ai/ace-step` | `[s]` |
| 75 | Seed Audio 1.0 | ByteDance | fal `bytedance/seed-audio-1.0` | `[s]` |
| 76 | Gemini 3.1 Flash TTS | Google | fal `fal-ai/gemini-3.1-flash-tts` | `[s]` |
| 77 | Gemini 3.8 Flash TTS | Google | draft discovery | `[s]` |
| 78 | Gemini 3.8 Flash Lite TTS | Google | draft discovery | `[s]` |
| 79 | TRELLIS 2 | Microsoft | fal `fal-ai/trellis-2` | `[s]` |
| 80 | Tripo 3D H3.1 | Tripo AI | fal `tripo3d/h3.1` | `[s]` |

## Batch 9 — Text frontier (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 81 | Claude Opus 5.5 | Anthropic | Artificial Analysis leaderboard | `[s]` |
| 82 | Claude Sonnet 5.5 | Anthropic | Artificial Analysis leaderboard | `[s]` |
| 83 | Claude Haiku 5.5 | Anthropic | Artificial Analysis leaderboard | `[s]` |
| 84 | GPT-6 Astra | OpenAI | Artificial Analysis leaderboard | `[s]` |
| 85 | GPT-6.1 Sol | OpenAI | Artificial Analysis leaderboard | `[s]` |
| 86 | Gemini 4 Argon | Google | Artificial Analysis leaderboard | `[s]` |
| 87 | Gemini 3.8 Flash | Google | Artificial Analysis leaderboard | `[s]` |
| 88 | Grok 4.7 | xAI | Artificial Analysis leaderboard | `[s]` |
| 89 | Kimi K3.1 Pro | Moonshot AI | Artificial Analysis leaderboard | `[s]` |
| 90 | Qwen3.8 Max | Alibaba | Artificial Analysis leaderboard | `[s]` |

## Batch 10 — Text mid-tier and open weights (10)

| # | Model | Vendor | Discovery path | Status |
| --- | --- | --- | --- | --- |
| 91 | DeepSeek V4.1 Flash | DeepSeek | Artificial Analysis leaderboard | `[x]` split: `deepseek-v4.1-flash`, `deepseek-v4.1-flash-1017` |
| 92 | GLM-5.3 | Z AI | Artificial Analysis leaderboard | `[s]` |
| 93 | MiniMax M3.1 Flash | MiniMax | Artificial Analysis leaderboard | `[s]` |
| 94 | Mistral Large 4 | Mistral | Artificial Analysis leaderboard | `[s]` |
| 95 | Qwen3.8 Flash-Next | Alibaba | Artificial Analysis leaderboard | `[s]` |
| 96 | Nemotron 3.5 | NVIDIA | Artificial Analysis leaderboard | `[s]` |
| 97 | Gemma 4 | Google | Artificial Analysis leaderboard | `[s]` |
| 98 | gpt-oss-120b | OpenAI | Artificial Analysis leaderboard | `[s]` |
| 99 | OLMo 3.1 | AI2 | Artificial Analysis leaderboard | `[s]` |
| 100 | Granite 4.2 | IBM | Artificial Analysis leaderboard | `[s]` |

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
- **Seedream 4.0** — 2025-09, just outside the window; Seedream 5.0 and Lite cover the family.

## Open questions for the roster itself

1. Curation on 2026-10-26 settled two identity questions. GPT Image 2.5 Flare and Sunburst are
   distinct first-party OpenAI model IDs with separate snapshots, but no captured evidence
   measures a behavioural difference; Nano Banana 2.1 is a distinct successor model, and Google
   has deprecated Nano Banana 2 in its favour. Still unverified: FLUX 3 Image vs Max vs [klein],
   Kling 3.0 vs 4.0, MiniMax H3 vs H3 Max. Each page records the ambiguity; curation should
   settle it before writing capability claims.
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
5. Launch dates remain the bottleneck. Expect some of the 100 to fall outside the one-year
   window once first-party dates are checked; the roster is sized at 100 so that replacements
   can be drawn from the same discovery pass.

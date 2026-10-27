# MiniMax Music 3

MiniMax's **open-weights text-to-music** model: prompt plus lyrics in, a complete sung song out, up to
five minutes, from an 8B global / 0.6B local hybrid language-model stack feeding a flow-matching
decoder. The vendor's launch post is dated **2026-08-13**
([launch post](../../sources/minimax.io/music-3-0-launch/2026-10-26.md)), inside the roster's one-year
window, and the weights were published to Hugging Face in the days before it
([weights listing](../../sources/huggingface.co/minimax-music-26-weights/2026-10-26.md)).

It is the direct successor to [MiniMax Music 2.6](minimax-music-2.6.md) and the first music model in
the line with published weights — but the vendor itself marks `music-3.0` **Discontinued/Retired**
([pricing](../../sources/minimax.io/music-pricing/2026-10-26.md),
[model list](../../sources/minimax.io/music-26-model-list/2026-10-26.md)), so the live routes at the
capture date are the open weights (self-hosted, or fal) and one reseller (WaveSpeedAI).

The uncomfortable finding is on Artificial Analysis: **Music 3 is the anchor of both AA music boards
and Music 2.6 is statistically indistinguishable from it** — 997 ±18 vs 1000 on vocals, 1001 ±21 vs
1000 on instrumentals ([AA](../../sources/artificialanalysis.ai/minimax-music-3-music-arena/2026-10-26.md)).
The architecture changed completely; the measured preference did not move.

## Identity

- **Canonical name:** MiniMax Music 3. The vendor writes "MiniMax Music 3.0" in prose and titles the
  launch post "MiniMax Music 3.0"; the API model ID is `music-3.0` and the weights repository is
  `MiniMaxAI/MiniMax-Music3`. The roster label "MiniMax Music 3" matches fal's title and the weights
  name. The `3`/`3.0` split is cosmetic.
- **Vendor:** MiniMax. The contracting entity for the hosted API is "Nanonoble Pte. Ltd."
  (Singapore) ([terms](../../sources/minimax.io/open-platform-terms-of-service/2026-10-26.md)).
- **Model IDs and routes:**

| Route | Identifier | Date on that route | Billing |
| --- | --- | --- | --- |
| MiniMax API (`POST /v1/music_generation`) | `model: "music-3.0"` (recommended), `music-3.0-free` | launch; both Retired at capture | $0.15 / up to 5 min ([pricing](../../sources/minimax.io/music-pricing/2026-10-26.md)) |
| Hugging Face weights | `MiniMaxAI/MiniMax-Music3` | repo created 2026-08-07T12:23Z | free, community licence |
| fal | `minimax/music-3` | `date` 2026-08-13T19:47Z ([fal](../../sources/fal.ai/minimax-music-3/2026-10-26.md)) | $0.002 / generated second |
| WaveSpeedAI | `minimax/music-3.0` | not stated ([WaveSpeed](../../sources/wavespeed.ai/minimax-music-3-0/2026-10-26.md)) | $0.15 / song |
| Replicate | **absent** ([Replicate](../../sources/replicate.com/minimax-music-3-absence/2026-10-26.md)) | — | — |

- **Release date, reconciled:** **2026-08-13** is the canonical date — the dated vendor launch post,
  the same day fal listed the endpoint, six days after the weights repository was created
  (2026-08-07). The vendor's own release notes instead say "**Jul. 16, 2026**"
  ([release notes](../../sources/minimax.io/music-release-notes/2026-10-26.md)), which no other source
  supports; the contradiction is left open. All candidate dates are inside the one-year window.
- **Siblings, not modes:** `music-cover` (cover generation from reference audio, still a separate
  model ID, retired) and the predecessors `music-2.6`, `music-2.5+`, `music-2.5`, `music-2.0`,
  `music-1.5` ([catalogue](../../sources/minimax.io/music-26-catalogue/2026-10-26.md)). MiniMax's
  `speech-2.8-*` text-to-speech models are a different line; the shared "2.x"/"3.x" numbers carry no
  meaning across modalities.
- **Naming collision to avoid:** fal's `minimax/music-3` is the open-weights serverless endpoint;
  WaveSpeedAI's `minimax/music-3.0` resells the vendor's API surface (inferred from its parameter set
  and flat per-song rate, not stated); MiniMax's `music-3.0` is the vendor ID. All three are the same
  model, with different control surfaces and billing.

## Current assessment

- **A genuinely new model, not a repackaging.** Music 2.6 was a closed, hosted-only model; Music 3
  ships weights, a documented architecture (8B global LLM + 0.6B local LLM, hidden-state fusion, 2.4B
  flow matching, 123M Flow-VAE), and a different request surface (duration, seed, sampling steps)
  ([launch post](../../sources/minimax.io/music-3-0-launch/2026-10-26.md),
  [model card](../../sources/huggingface.co/minimax-music-3-model-card/2026-10-26.md)).
- **Retired at the vendor, alive as weights.** MiniMax's Model List puts `music-3.0` in Retired and
  its pricing page labels it Discontinued; the guide says the paid music APIs closed to new users on
  2026-08-20 and points users at MiniMax Audio or the Hugging Face model instead
  ([guide](../../sources/minimax.io/music-generation-guide/2026-10-26.md)). The vendor's own catalogue
  page still describes it as current ([catalogue](../../sources/minimax.io/music-26-catalogue/2026-10-26.md)).
  The disagreement is about who may call it, not whether it exists.
- **Best understood as an open-weights specialist, not a current API tier.** Anyone can run it; the
  hosted vendor route is closed to new accounts; fal serves it cheapest for short tracks; WaveSpeedAI
  charges the same flat $0.15 per song the vendor charged for 2.6.
- **Quality: unmeasured by the vendor, measured as a tie by AA.** MiniMax publishes no benchmark, no
  MOS and no listening test — only claims ("vocals that sound performed rather than synthesized")
  ([launch post](../../sources/minimax.io/music-3-0-launch/2026-10-26.md)). The one independent
  measurement captured here puts it level with Music 2.6 and roughly 145 Elo behind Suno v6 on both
  boards ([AA](../../sources/artificialanalysis.ai/minimax-music-3-music-arena/2026-10-26.md)).

## Documented capabilities

Vendor and host documentation only; no direct tests were run.

- **Song from prompt + lyrics.** `prompt` is a music description (style, mood, vocals,
  instrumentation, arrangement); `lyrics` is the sung text with section tags on their own lines
  ([API reference](../../sources/minimax.io/music-generation-api/2026-10-26.md),
  [fal](../../sources/fal.ai/minimax-music-3/2026-10-26.md)).
- **Structured Caption prompting.** The vendor recommends a three-part caption — `Global Metadata`
  (genre, subgenre, BPM, key, scale, emotional progression, production profile), `Vocal Details`
  (gender, timbre, performance style, harmony, effects) and `Arrangement` (instruments, section-level
  evolution, groove, bass, percussion, textures) — and ships a `music-caption-rewriter` skill that
  expands a short prompt into one
  ([launch post](../../sources/minimax.io/music-3-0-launch/2026-10-26.md),
  [model card](../../sources/huggingface.co/minimax-music-3-model-card/2026-10-26.md)).
- **Section tags.** Two vocabularies are in circulation. The model card and fal list nine lowercase
  tags (`[intro]`, `[verse]`, `[pre-chorus]`, `[chorus]`, `[post-chorus]`, `[bridge]`,
  `[instrumental]`, `[solo]`, `[outro]`); WaveSpeedAI lists the 14 tags inherited from the Music 2.6
  API (`[Intro]`, `[Verse]`, `[Pre Chorus]`, `[Chorus]`, `[Post Chorus]`, `[Interlude]`, `[Bridge]`,
  `[Outro]`, `[Hook]`, `[Build Up]`, `[Break]`, `[Transition]`, `[Inst]`, `[Solo]`)
  ([WaveSpeed](../../sources/wavespeed.ai/minimax-music-3-0/2026-10-26.md)). fal's description adds a
  hard input-contract rule: "text on the same line as a leading tag is dropped by the model's input
  contract."
- **Instrumental mode.** `is_instrumental: true` on the vendor API and on WaveSpeedAI; the guide
  states "Music 3.0 supports instrumental-only generation"
  ([guide](../../sources/minimax.io/music-generation-guide/2026-10-26.md)). fal does **not** expose
  the flag. The weights instead carry an `[Instrumental]` section tag.
- **Auto lyrics.** `lyrics_optimizer: true` generates lyrics from the prompt when `lyrics` is empty
  ([API reference](../../sources/minimax.io/music-generation-api/2026-10-26.md)); WaveSpeedAI exposes
  the same field, fal does not.
- **Length and sampling control (weights and fal only).** `duration` 1–300 s, default 60, described as
  an "upper bound" with the actual length returned; `seed` for reproducibility; `num_inference_steps`
  1–100 default 30 "per 8-second denoising chunk"; `guidance_scale` 0–20 default 1.7
  ([fal](../../sources/fal.ai/minimax-music-3/2026-10-26.md)). The self-hosted card exposes
  `audio_duration` and a seed through the diffusers pipeline and `max_new_tokens` through
  SGLang-Omni ([model card](../../sources/huggingface.co/minimax-music-3-model-card/2026-10-26.md)).
  The **vendor API exposes none of these** — no duration, no seed.
- **Output.** First-party: "32 kHz, 16-bit stereo WAV"
  ([model card](../../sources/huggingface.co/minimax-music-3-model-card/2026-10-26.md)). fal: "44.1 kHz
  16-bit stereo WAV" ([fal](../../sources/fal.ai/minimax-music-3/2026-10-26.md)). WaveSpeedAI: sample
  rate 16/24/32/44.1 kHz, bitrate 32/60/64/128/256 kbps, `.mp3` example outputs. Vendor API:
  `audio_setting` with 16–44.1 kHz, 32–256 kbps, mp3/wav/pcm
  ([API reference](../../sources/minimax.io/music-generation-api/2026-10-26.md)).
- **Architecture (first-party, documented).** 8-layer RVQ tokenizer (first semantic codebook 16,384
  entries, seven acoustic codebooks of 1,024); 8B global LLM initialised from Qwen3-8B predicting
  semantic tokens frame by frame; 0.6B local LLM predicting within-frame acoustic tokens; fused
  hidden states conditioning a 2.4B flow-matching module and a 123M Flow-VAE
  ([model card](../../sources/huggingface.co/minimax-music-3-model-card/2026-10-26.md),
  [launch post](../../sources/minimax.io/music-3-0-launch/2026-10-26.md)). The launch post says
  "Qwen3.5-8B" where the card and licence say "Qwen3-8B".
- **Serving stacks.** SGLang-Omni (`sgl-omni serve`), diffusers modular pipeline, ComfyUI; CUDA
  required ([model card](../../sources/huggingface.co/minimax-music-3-model-card/2026-10-26.md)).

## Limitations and constraints

- **Song length is five minutes by policy and six by frame count.** Vendor prose says "up to five
  minutes"; the billing unit is "$0.15/up-to-5 minutes"
  ([pricing](../../sources/minimax.io/music-pricing/2026-10-26.md)); the reference implementation caps
  generation at "9,000 acoustic frames" at 25 frames per second — **360 s**
  ([model card](../../sources/huggingface.co/minimax-music-3-model-card/2026-10-26.md)). fal's
  `duration` max is 300 s. No document states which limit is enforced where.
- **No length control on the vendor API or on WaveSpeedAI.** A 30-second cue is not requestable there;
  it is on fal and on the weights.
- **Text ceilings differ by route.** Vendor: `prompt` ≤ 2000 chars, `lyrics` 1–3500. WaveSpeedAI:
  `prompt` ≤ 2000, `lyrics` 10–3000. fal: both required, no published length. Weights: "The tokenized
  text prompt is limited to 5,000 tokens."
- **Languages: no list anywhere.** MiniMax publishes no music language statement; its launch-post
  demos are English and Mandarin Chinese, and the only qualitative statement in the corpus is the
  predecessor's Replicate README ("English and Mandarin Chinese have the strongest support")
  ([Music 2.6 record](../../sources/replicate.com/minimax-music-2-6/2026-10-26.md)). Treat
  non-English/Mandarin lyric quality as unverified.
- **Control is generative, not symbolic.** The card's own caveat: "Section tags and music descriptions
  provide generative control rather than strict symbolic guarantees. The generated tempo, key,
  instrumentation, lyrics, and song structure may not always match every requested detail exactly."
  That directly qualifies the 2.6-era "BPM and key match 99%+" claim inherited by marketing copy.
- **Self-hosting has real costs.** CUDA required; non-streaming only; full precision "fits under 24GB
  of VRAM", ~22 GB with CPU offload, 8 GB only with layer-by-layer streaming of the language model.
- **Host gaps are asymmetric.** fal has no `is_instrumental`, no `lyrics_optimizer` and no audio
  settings; WaveSpeedAI has no duration or seed; Replicate has no Music 3 endpoint at all, though it
  still carries Music 2.6 and `music-cover`
  ([Replicate](../../sources/replicate.com/minimax-music-3-absence/2026-10-26.md)).
- **Moderation is present but thin.** The vendor's error `1026` is "Content flagged for sensitive
  material" ([API reference](../../sources/minimax.io/music-generation-api/2026-10-26.md)); fal's
  `enable_safety_checker` defaults true and "Authorized callers may set false to request relaxed
  screening" — who is authorized, and what relaxed screening still blocks, is undocumented. The
  weights licence instead puts the safeguard duty on the deployer. A refusal on one route is not
  evidence about the model's general behaviour.
- **No watermark documentation.** No MiniMax page captured states that music output is watermarked,
  and no SynthID/C2PA equivalent is mentioned. The weights licence requires disclosure of
  machine-generated content in public environments (AUP clause 11), which is an obligation on the
  user, not a marking technology.

## Access, pricing, licensing

### Billing basis

Three published schedules with **two different units**:

| Route | Price | Unit (verbatim) | What $0.15 buys |
| --- | --- | --- | --- |
| MiniMax API | $0.15 | "up-to-5 minutes music" (Discontinued) | one track, any length |
| WaveSpeedAI | $0.15 | "One generated song" | one track, any length |
| fal | $0.002 | "per seconds" / "per second" | 75 s of generated audio |

Sources: [pricing](../../sources/minimax.io/music-pricing/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/minimax-music-3-0/2026-10-26.md),
[fal](../../sources/fal.ai/minimax-music-3/2026-10-26.md).

The flat rate survives the version bump unchanged from Music 2.6 ($0.15 per track on four routes
there), so per-track pricing is not a differentiator between the two models. What changed is that fal
moved Music 3 onto **per-second billing of fal-hosted weights**: 60 s ≈ $0.12, the 300 s cap ≈ $0.60,
and the break-even against a flat $0.15/track is **75 seconds**. Short cues are cheaper on fal; full
five-minute songs are ~4× cheaper on WaveSpeedAI or the vendor API. WaveSpeedAI's FAQ also says "per
run or per second" in boilerplate while its table and header say per song — the table is the concrete
statement.

### Licensing and commercial terms

- **Weights:** the "MiniMax-Music3 COMMUNITY LICENSE", Copyright (c) 2026 MiniMax — commercial use
  permitted with conditions: display "MiniMax-Music3" prominently on any commercial product UI, and
  obtain prior written authorization from `api@minimax.io` if aggregate yearly revenue from the
  product exceeds **US$20 million**. A 19-clause Acceptable Use Policy applies (Exhibit A), including
  bans on impersonation, military use, and undisclosed machine-generated content in public
  environments ([licence](../../sources/huggingface.co/minimax-music-3-license/2026-10-26.md)).
- **Upstream licences:** fine-tuned from Qwen3-8B (Apache 2.0); DiT-2B modified from Stable Audio
  (MIT); VAE modified from DAC (MIT) — same record.
- **Hosted route:** MiniMax's Open Platform terms give the customer ownership of input and generated
  content while reserving a licence to use both to "provide, maintain, develop, and improve our
  Services", and impose a marking duty on integrators of deep-synthesis services
  ([terms](../../sources/minimax.io/open-platform-terms-of-service/2026-10-26.md)). fal labels the
  endpoint `licenseType: "commercial"` — fal's assertion about its own service, not a MiniMax grant.
- **Host disclaimers:** WaveSpeedAI says commercial rights "depend on the model's license, set by its
  provider (MiniMax)" and points at the provider's terms.
- **Music 2.6 comparison:** 2.6 had no weights and therefore no weights licence at all; every route
  was closed and proxied ([2.6 page](minimax-music-2.6.md)).

## Difference from Music 2.6

| | Music 2.6 | Music 3 |
| --- | --- | --- |
| Vendor date | 2026-04-10 | **2026-08-13** (notes say 2026-07-16) |
| Vendor tagline | "Cover Reborn. Bass Redefined." | "Intent Understood • Sound Elevated • Vocals Humanized" |
| Weights | closed, hosted only | **open** (`MiniMaxAI/MiniMax-Music3`, community licence) |
| Architecture | not disclosed | 8B global + 0.6B local LLM, 2.4B flow matching, 123M Flow-VAE |
| Duration control | none | `duration` 1–300 s on fal; `audio_duration`/`max_new_tokens` on weights |
| Seed / steps / guidance | none on any route | seed, 1–100 steps, 0–20 guidance (fal, weights) |
| Native output | 16–44.1 kHz, 32–256 kbps, mp3/wav/pcm, stereo (vendor API settings; defaults 44.1 kHz/mp3) | **32 kHz** 16-bit stereo WAV (card); 44.1 kHz claimed by fal |
| Cover | `music-cover`, separate ID | not documented in the captured sources |
| Price | $0.15/track flat | $0.15/track flat (vendor, WaveSpeed); $0.002/s (fal) |
| AA vocal Elo | 997 ±18 | 1000 (anchor) |
| AA instrumental Elo | 1001 ±21 | 1000 (anchor) |

Sources: [2.6 page](minimax-music-2.6.md), [launch post](../../sources/minimax.io/music-3-0-launch/2026-10-26.md),
[model card](../../sources/huggingface.co/minimax-music-3-model-card/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/minimax-music-3-music-arena/2026-10-26.md).

Two conclusions follow. **The models are technically distinct** — different architecture, different
weights story, different control surface, and a different sample rate. **But AA's blind preference
data does not separate them:** 2.6 sits 3 Elo below 3.0 on vocals and 1 Elo above it on instrumentals,
both far inside the ±18/±21 interval, while Suno v6 leads by ~145. The vendor's claim of "more natural
vocals" and "more complete arrangements" is therefore unconfirmed by the only independent measurement
in the corpus, and should be read as marketing until a listening test or a re-measured delta exists.

## Unresolved questions

1. **Is 2026-08-13 or 2026-07-16 the release date?** The launch post, the fal listing and the weights
   repository all cluster on 2026-08-07…13; the vendor's release notes say July 16. No source explains
   the two-month gap (weights first, announcement later, or a notes typo).
2. **Is `music-3.0` callable today?** Model list says Retired, pricing says Discontinued, the guide
   says existing paying users continue. No retirement date and no migration mapping are published.
3. **Why does the output sample rate disagree — 32 kHz (card) or 44.1 kHz (fal, WaveSpeedAI)?** fal's
   schema may describe an upsampled or re-encoded deliverable; no host says so.
4. **Is the length limit 5 minutes or 6?** Prose and billing say 5, the frame ceiling says 6, fal caps
   at 5.
5. **Which languages are supported, and how well?** No vendor list; only English and Mandarin demos.
6. **Does Music 3 support cover generation?** `music-cover` is retired and modelled separately for the
   2.x line; the Music 3 card documents no reference-audio input.
7. **Why is Music 3 missing from Replicate** while its closed predecessor is present?
8. **Why is Music 3.0 the fixed anchor on both AA boards?** The choice makes every comparison
   one-sided and leaves the anchor without a confidence interval of its own.
9. **Is there any watermark or provenance signal?** No source says yes; none says no.

## Evidence status

Evidence floor: **met.** First-party: the 2026-08-13 launch post, the `MiniMaxAI/MiniMax-Music3`
model card and its community licence, plus seven previously captured MiniMax records that cover this
model — the music-generation guide (with the 2026-08-20 notice), the `POST /v1/music_generation` API
reference, the pricing page's music table, the Model List retirement table, the Models overview music
table, the release notes, and the Open Platform terms. Independent hosts: fal (catalogue metadata,
OpenAPI input/output schema, billing payload) and WaveSpeedAI (model page, parameter table, price,
FAQ). Third-party measurement: Artificial Analysis AA-Music-Vocal v1.1 and AA-Music-Instrumental v1.1.
Negative host evidence: Replicate's MiniMax organisation listing. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base: prices are three published schedules, capability statements are vendor and host copy, the AA Elo
figures are Artificial Analysis's own blind-vote measurement, and the one latency figure in the corpus
is WaveSpeedAI's "around 88 seconds per request" estimate.

The next useful evidence would be: the same prompt and lyrics through fal (with a fixed seed, two step
counts), WaveSpeedAI and the weights on one GPU, comparing arrangement, vocal intelligibility, stereo
image and the actual sample rate of the returned file; a duration sweep (30/60/300 s) to find where the
5-minute claim and the 300-second cap actually bite; a deliberately over-length lyric to locate each
route's ceiling; and a paired 2.6-vs-3.0 listening test on identical inputs, since AA's tie is the only
quantitative comparison available.

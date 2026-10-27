# Qwen3-TTS (Alibaba Cloud, Qwen team)

Qwen3-TTS is Alibaba's **open-weights speech-generation family**, released **2026-01-22**: five
checkpoints across two sizes (0.6B, 1.7B) covering three jobs — preset-voice synthesis with
instruction control (CustomVoice), description-to-voice (VoiceDesign, 1.7B only), and zero-shot
voice cloning (Base) — plus a separate 12 Hz speech tokenizer
([repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md),
[blog](../../sources/qwen.ai/qwen3-tts-open-source-announcement/2026-10-26.md)).

The roster label `fal-ai/qwen-3-tts` is **not an endpoint ID**: on fal it is the shared `group.key`
for five endpoints (`text-to-speech/1.7b`, `clone-voice/1.7b`, `voice-design/1.7b`,
`text-to-speech/0.6b`, `clone-voice/0.6b`). The model is Qwen3-TTS; fal is one host
([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)).

**In-window.** Repository created 2026-01-21, weights on the Hub 2026-01-21, README release note
2026.1.22, technical report submitted 2026-01-22, fal endpoints published 2026-01-26 — all inside
the 2025-10-26 cutoff. A *hosted* API under the same name is older; see Identity.

## Identity

- **Canonical name:** Qwen3-TTS. **Checkpoints:** `Qwen3-TTS-12Hz-1.7B-Base`,
  `-1.7B-CustomVoice`, `-1.7B-VoiceDesign`, `-0.6B-Base`, `-0.6B-CustomVoice`, plus
  `Qwen3-TTS-Tokenizer-12Hz`. "12Hz" is the tokenizer variant (12.5 frames/s, 16 codebooks), not a
  version number ([model cards](../../sources/huggingface.co/qwen3-tts-model-cards/2026-10-26.md)).
- **Vendor / developer:** Qwen team at Alibaba Cloud. Weights, code, package (`qwen-tts` on PyPI),
  and the technical report are all first-party.
- **Aliases in the wild:** "Qwen 3 TTS - Text to Speech [1.7B]" (fal titles), "Qwen3 TTS"
  (Replicate), "Qwen-TTS" (the blog's own prose and the Model Studio product name), `qwen3-tts-flash`
  (the hosted API model ID).
- **Release date:** **2026-01-22** (README news line + arXiv submission); Hub repos 2026-01-21; fal
  2026-01-26. The blog page carries no date of its own and the reader proxy that rendered it
  reported `2025-03-24`, which no other artifact supports — that string is preserved in the source
  record and rejected here ([blog](../../sources/qwen.ai/qwen3-tts-open-source-announcement/2026-10-26.md)).
- **Siblings that are *not* this model:**
  - **Qwen3-TTS-Flash** (`qwen3-tts-flash`, `qwen3-tts-flash-realtime`) — the Model Studio hosted
    product. System voices only: cloning, voice design and instruction control are all documented as
    **Unsupported** ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
  - **Qwen-Audio-TTS** (`qwen-audio-3.1-tts-plus`, `-3.1-tts-flash`, `-3.0-tts-plus`,
    `-3.0-tts-flash`) — Model Studio's *current recommended* TTS line, with cloning, design,
    instruction control, emotion tags and up-to-48 kHz PCM/WAV/MP3/Opus output. This is what
    Artificial Analysis ranks, not Qwen3-TTS ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
  - **Qwen-TTS** (`qwen-tts-flash`) — a legacy, token-billed, Chinese-mainland-only entry still on
    the price list, with no model card captured
    ([pricing](../../sources/alibabacloud.com/model-pricing-speech-synthesis/2026-10-26.md)).
  - **CosyVoice** (`cosyvoice-v3*`, `cosyvoice-v2`) — a separate FunAudioLLM line served on the same
    platform; CosyVoice voice design is "powered by the FunAudioGen-VD model"
    ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).

### On "Qwen2.5-TTS"

No first-party model, repository, model card, or documentation page called **Qwen2.5-TTS** was
located. A Hub search returns only community fine-tunes of unrelated Qwen2.5 bases, and the Qwen
organisation's TTS repositories are the six Qwen3-TTS ones listed above
([model cards](../../sources/huggingface.co/qwen3-tts-model-cards/2026-10-26.md)). What does exist is
the pre-Qwen3 **Qwen-TTS** hosted series (`qwen-tts-flash`, token-billed, mainland-only), which is
presumably what a "Qwen2.5-TTS" label would be pointing at. That series is a different artifact from
Qwen3-TTS in every dimension this page measures — no weights, different billing basis, no
documented checkpoint — so nothing here transfers to it, and it is not claimed to be Qwen2.5-based
on any evidence captured.

### Host routes

| Route | ID | What it runs | Notes |
| --- | --- | --- | --- |
| Self-host | `Qwen/Qwen3-TTS-12Hz-*` | the weights | Apache-2.0; `qwen-tts` package, vLLM-Omni offline inference |
| fal | `fal-ai/qwen-3-tts/text-to-speech/{1.7b,0.6b}` | CustomVoice variant, per fal's own description | `voice` = 9 presets, or a fal-created embedding |
| fal | `fal-ai/qwen-3-tts/clone-voice/{1.7b,0.6b}` | clone/Base variant, per fal's own description | returns a **safetensors speaker embedding**, not audio |
| fal | `fal-ai/qwen-3-tts/voice-design/1.7b` | VoiceDesign variant | `text` + `prompt`, both required |
| Replicate | `qwen/qwen3-tts` | one endpoint, `mode` switch | official Qwen listing over a Replicate Cog |
| Model Studio | `qwen3-tts-flash`, `qwen3-tts-flash-realtime` | proprietary hosted model | system voices only; 600-char cap; 24 kHz |

fal also sells `alibaba/qwen-audio-3-tts` ("Qwen Audio 3.0 TTS (Flash)") as a **partner proxy**
(`is_partner_api: true`, default voice `Cherry`) — that is Model Studio's product, not Qwen3-TTS, and
it must not be read as a Qwen3-TTS price or capability
([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)).

## Current assessment

**A current, genuinely open model family with an unusual amount of first-party engineering detail
and almost no independent measurement.**

What the evidence supports:

- **Distinct model, not a repackaging.** A vendor technical report with its own tokenizer
  (`Qwen-TTS-Tokenizer-12Hz`), a published architecture (dual-track LM, 16 codebooks, 12.5 Hz), and
  three separately-trained task variants. fal, Replicate and Model Studio all name it independently
  ([arXiv](../../sources/arxiv.org/qwen3-tts-2601-15621/2026-10-26.md)).
- **Current on all three access routes.** fal's five endpoints are `status: public`,
  `deprecated: false`, reviewed 2026-10-26; Replicate's official listing has 2.97 M runs and a
  version dated 2026-05-08; Model Studio still serves `qwen3-tts-flash` in Singapore and Beijing
  ([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md),
  [Replicate](../../sources/replicate.com/qwen-qwen3-tts/2026-10-26.md),
  [Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
- **Demoted inside Alibaba's own platform.** Model Studio now recommends Qwen-Audio-TTS instead,
  strips Qwen3-TTS of cloning and design, and the Qwen3-TTS-specific API pages linked from the
  January blog all redirect to the generic guides. The hosted product has become a system-voice
  utility while the open weights kept the interesting capabilities
  ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
- **No independent quality evidence.** Artificial Analysis's TTS leaderboard, as captured, contains
  no Qwen3-TTS row; it ranks `Qwen-Audio-3.1-TTS-Plus` (1306 ± 15) and `Qwen-Audio-3.0-TTS-Plus`
  (1269 ± 13) instead ([leaderboard](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
  That capture is a partial slice (nine rows, ranks 1–13), so absence there is not proof the model
  is unlisted — it does mean this corpus holds no independent score for Qwen3-TTS.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run for this page.**

### Three task variants, five checkpoints

| Checkpoint | Job | Instruction control |
| --- | --- | --- |
| `1.7B-VoiceDesign` | voice from a natural-language description | yes |
| `1.7B-CustomVoice` | 9 preset timbres + style instructions | yes |
| `1.7B-Base` | 3-second zero-shot clone; fine-tuning base | not listed |
| `0.6B-CustomVoice` | 9 preset timbres | **README blank, blog ticks it** |
| `0.6B-Base` | 3-second clone; fine-tuning base | not listed |

There is no 0.6B VoiceDesign checkpoint and fal sells no such endpoint. The README's
instruction-control column for `0.6B-CustomVoice` is empty while the blog's table ticks it — the
same weights, two vendor tables, one disagreement
([repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md),
[blog](../../sources/qwen.ai/qwen3-tts-open-source-announcement/2026-10-26.md)).

### Languages

Ten, consistently: Chinese, English, Japanese, Korean, German, French, Russian, Portuguese, Spanish,
Italian. Three independent first-party statements agree — the README table, the blog, and the Base
checkpoint's `config.json`, whose `codec_language_id` map contains exactly those ten entries and no
others ([model cards](../../sources/huggingface.co/qwen3-tts-model-cards/2026-10-26.md)).

Dialects are **voices, not languages**: two of the nine presets are dialect voices — Dylan (Beijing)
and Eric (Sichuan) — and the blog's timbre list labels them "Chinese Dialect - Beijing Dialect" /
"Sichuan Dialect". The vendor claim is "10 major languages … as well as multiple dialectal voice
profiles"; no dialect code exists in the codec's language map, so dialect output rides on the voice
conditioning rather than a language ID
([repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md)).

### Voice cloning

- **3 seconds** is the vendor figure — the README and the paper both describe "3-second rapid voice
  clone", and Replicate's host README repeats "clone a voice from just 3 seconds of audio"
  ([repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md),
  [arXiv](../../sources/arxiv.org/qwen3-tts-2601-15621/2026-10-26.md)).
- The reference contract is **audio + transcript**; `x_vector_only_mode=True` drops the transcript
  and uses only the speaker embedding, "but cloning quality may be reduced"
  ([repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md)).
- Hosts differ sharply in how cloning is packaged. fal splits it into a separate endpoint that
  accepts **up to 300 seconds** of reference audio and returns a **safetensors speaker embedding**
  file, which the TTS endpoint then takes as `speaker_voice_embedding_file_url` — a two-call
  workflow that produces a reusable artifact
  ([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)). Replicate folds it into one endpoint via
  `mode: "voice_clone"` with `reference_audio` + `reference_text` per call and no stored voice
  ([Replicate](../../sources/replicate.com/qwen-qwen3-tts/2026-10-26.md)). Model Studio does not
  offer cloning for Qwen3-TTS at all
  ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
- A documented design→clone pipeline exists: synthesise a reference with VoiceDesign, then feed that
  clip to `create_voice_clone_prompt` to reuse a designed voice like a cloned one
  ([repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md)).

### Voice design

Description-to-voice on the 1.7B checkpoint only. The vendor's guidance is a full acoustic brief —
gender, age band, pitch, speed, volume, clarity, fluency, accent, texture, emotion, tone,
personality, plus character background sheets — and its sample tables show all five control styles
(single attribute, multi-attribute, gradual change, human-likeness, background information)
([blog](../../sources/qwen.ai/qwen3-tts-open-source-announcement/2026-10-26.md)). fal exposes it as
`prompt` and marks it **required** even while describing it as "Optional prompt to guide the style
of the generated speech"
([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)); Replicate exposes the same idea as
`voice_description` ([Replicate](../../sources/replicate.com/qwen-qwen3-tts/2026-10-26.md)).

### Output format and sample rate

| Property | Value | Source |
| --- | --- | --- |
| Codec rate | 12.5 Hz, 16 codebooks, codebook 2048, semantic codebook 4096 | [model cards](../../sources/huggingface.co/qwen3-tts-model-cards/2026-10-26.md) |
| Sample rate | **24,000 Hz** (`input_sample_rate` and `output_sample_rate` in the tokenizer config) | [model cards](../../sources/huggingface.co/qwen3-tts-model-cards/2026-10-26.md) |
| Model Studio API | WAV URL (24 h) or base64 PCM chunks; playback samples at 24 kHz mono 16-bit | [Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md) |
| fal | `AudioFile` with `url`, `sample_rate`, `duration`, `bitrate`, `channels`, `content_type` — values are response fields, not fixed by the schema | [fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md) |
| Replicate | a single `uri`; container, rate and bitrate undocumented | [Replicate](../../sources/replicate.com/qwen-qwen3-tts/2026-10-26.md) |

24 kHz is the only rate any source states. No host publishes the container it encodes to, and none
publishes a bitrate, so a delivered MP3 or WAV cannot be compared to the codec output on
documented grounds.

### Length limits

Three different ceilings, none of them a character limit on the open weights:

- **Model Studio: 600 characters** per request for `qwen3-tts-flash` — "The maximum input length is
  600 characters." This is the only published character cap anywhere
  ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
- **fal: no text limit, but `max_new_tokens` ≤ 8,192 codec tokens** (default 200). At the tokenizer's
  12.5 frames/s that is ≈ 655 s ≈ 10.9 min of audio — an editorial arithmetic, not a fal statement
  ([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)).
- **The model's own position budget:** `talker_config.max_position_embeddings` 32,768 with
  `position_id_per_seconds` 13. The per-second basis (13) does not match the tokenizer's 12.5 Hz
  frame rate, so the implied ceiling (~42 min) is not reliable arithmetic; it is recorded as a
  config fact, not a duration
  ([model cards](../../sources/huggingface.co/qwen3-tts-model-cards/2026-10-26.md)).
- Replicate documents no limit and claims "over 10 minutes of continuous audio" in prose
  ([Replicate](../../sources/replicate.com/qwen-qwen3-tts/2026-10-26.md)); the vendor's own long-form
  numbers come from "continuous 10-minute synthesis"
  ([blog](../../sources/qwen.ai/qwen3-tts-open-source-announcement/2026-10-26.md)).

### Streaming and latency

"End-to-end synthesis latency as low as 97ms" and "output the first audio packet immediately after a
single character is input" appear in the README, the blog, and the abstract
([arXiv](../../sources/arxiv.org/qwen3-tts-2601-15621/2026-10-26.md)). The report defines this as
first-packet emission, not utterance synthesis time. All five fal endpoints are queue-based and none
documents streaming output; Model Studio's `qwen3-tts-flash-realtime` is the WebSocket path
([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)). So the
headline latency is a property of the weights that no serverless route on this page exposes.

### Quality numbers (all vendor-run)

The README publishes full tables; the blog publishes summaries and images. Selected rows:

- Seed-TTS test-zh / test-en WER: 12Hz-1.7B-Base **0.77 / 1.24**; 12Hz-0.6B-Base 0.92 / 1.32;
  CosyVoice 3 **0.71** / 1.45; MiniMax-Speech 0.83 / 1.65.
- Long speech (long-zh / long-en WER): 12Hz-1.7B-CustomVoice **2.356 / 2.812** — worse than the
  unreleased 25 Hz CustomVoice (1.517 / 1.225) in the same table.
- Multilingual test set: the 12Hz-1.7B-Base is best in Italian, Portuguese, Spanish and Russian, but
  loses German to ElevenLabs (0.572) and Japanese to MiniMax (3.519).
- InstructTTSEval: 12Hz-1.7B-VoiceDesign beats Gemini-flash/pro on several voice-design columns;
  Gemini-flash leads the Target-Speaker EN columns.

Setup, verbatim: bfloat16, `max_new_tokens=2048`, `language="auto"` for Seed-Test and
InstructTTSEval, defaults from each checkpoint's `generate_config.json`
([repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md)). The 25 Hz tokenizer and its
checkpoints appear in these tables but are **not released**, so those rows cannot be reproduced
against obtainable weights ([arXiv](../../sources/arxiv.org/qwen3-tts-2601-15621/2026-10-26.md)).

## Limitations and constraints

- **No independent measurement of any kind.** No arena, no MOS study, no third-party WER. The only
  independent evaluator in this corpus does not list the model
  ([leaderboard](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
- **The hosted API cannot clone or design.** Anyone reading the January blog as a product promise
  and then opening Model Studio finds the opposite; the linked pages redirect
  ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
- **600-character cap on the hosted API** versus no published cap on the open weights — the hosted
  route is for short utterances only.
- **fal's clone endpoint returns an embedding, not speech.** The two-call design means a clone is
  billed as reference-audio minutes *plus* synthesis characters, and the embedding is an artifact
  with no documented lifetime, portability or privacy story
  ([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)).
- **Reference-audio limits are host-specific.** fal: ≤ 300 s. Model Studio's generic cloning guide
  (for other models): 10–20 s recommended, ≤ 60 s, ≤ 10 MB, ≥ 16 kHz, WAV/MP3/M4A. Qwen3-TTS's own
  cards say only "3 seconds"
  ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
- **No safety, consent or watermark documentation for Qwen3-TTS itself.** fal exposes an
  `enable_safety_checker` boolean (default true) and says "Authorized callers may set false to
  request relaxed screening", but neither fal nor Qwen documents what is screened, what is refused,
  or whether output carries a provenance marker. Model Studio's cloning guide requires reference
  audio with no "sensitive content" — a rule stated for the *other* models
  ([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)).
- **No VRAM or throughput guidance.** The README recommends FlashAttention 2 and a Python 3.12 env
  and stops there; vLLM-Omni support is "offline inference" only
  ([repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md)).
- **Host schemas drift from the vendor.** Replicate renames two presets (`Ono_anna`, `Uncle_fu` vs
  `Ono_Anna`, `Uncle_Fu`); fal marks voice-design `prompt` required while calling it optional; fal
  exposes nine sampling knobs that the vendor's own examples never set
  ([Replicate](../../sources/replicate.com/qwen-qwen3-tts/2026-10-26.md),
  [fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)).
- **Checkpoint ambiguity on both hosts.** Neither fal nor Replicate states whether a given
  text-to-speech call runs 1.7B or 0.6B; Replicate has no size selector at all, and fal's two
  endpoints differ only by URL path
  ([Replicate](../../sources/replicate.com/qwen-qwen3-tts/2026-10-26.md)).

## Access, pricing, licensing

### Billing basis

| Route | Price | Basis | Notes |
| --- | --- | --- | --- |
| Model Studio `qwen3-tts-flash` | **$0.10 / 10,000 chars** (Singapore); $0.114682 (Beijing) | input characters, output free | 110,000-char free quota, Singapore only |
| Model Studio `qwen3-tts-flash-realtime` | **$0.13 / 10,000 chars** (Singapore); $0.143353 (Beijing) | input characters | 10,000-char quota "after November 13" |
| fal `text-to-speech/1.7b` | **$0.09 / 1,000 chars** | input characters | L40S / RTX PRO 6000 / H100 |
| fal `voice-design/1.7b` | **$0.09 / 1,000 chars** | input characters | same |
| fal `text-to-speech/0.6b` | **$0.07 / 1,000 chars** | input characters | same |
| fal `clone-voice/{1.7b,0.6b}` | **$0.0008 / $0.0007 per minute** | reference-audio minutes | returns embedding, no audio |
| Replicate `qwen/qwen3-tts` | **$0.02 / 1,000 chars** | input characters | L40S, "50,000 characters for $1" |
| Self-host | $0 | Apache-2.0 weights | hardware cost only |

Normalised to the same unit, the spread is large and entirely a hosting markup, not a model
difference: Model Studio **$10 per 1M characters**, Replicate **$20**, fal **$90** (1.7B) / **$70**
(0.6B). fal charges nine times Model Studio's per-character price for the same open weights, and
Replicate twice. Chinese characters count double on Model Studio's schedule, so its effective cost
for Chinese text is twice the headline figure — fal and Replicate publish no equivalent counting
rule
([pricing](../../sources/alibabacloud.com/model-pricing-speech-synthesis/2026-10-26.md)).

Model Studio's voice-cloning line (`qwen-voice-enrollment`, $0.01 per voice clone, both regions) does
not apply to Qwen3-TTS, because cloning is unsupported for that model on the platform. The generic
guide states voice creation is *free* for Qwen-Audio-TTS/CosyVoice and synthesis is billed at the
target model's rate — two different cloning billing models on one platform
([pricing](../../sources/alibabacloud.com/model-pricing-speech-synthesis/2026-10-26.md)).

### Licensing

- **Weights and code: Apache-2.0.** Hub front matter `license: apache-2.0` on all six repositories,
  the GitHub API's `license.spdx_id`, and Replicate's own License link all agree
  ([model cards](../../sources/huggingface.co/qwen3-tts-model-cards/2026-10-26.md),
  [repository](../../sources/github.com/qwen3-tts-repo/2026-10-26.md),
  [Replicate](../../sources/replicate.com/qwen-qwen3-tts/2026-10-26.md)).
- **Commercial use is permitted by the licence**, with no acceptable-use addendum, no field-of-use
  restriction and no attribution requirement captured anywhere. That is a *weaker* constraint than
  the README-level "strictly forbidden" lists some peers publish — Qwen3-TTS has no equivalent
  clause in any captured document.
- **No voice-cloning consent policy exists** on the vendor side. fal's `enable_safety_checker` and
  Replicate's silence are the only guardrails documented, and neither is a consent check.
- **Host licence labels are host assertions.** fal's `licenseType: "commercial"` describes use
  through fal, not a grant from Qwen
  ([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)).
- **The hosted product is not covered by the Apache grant.** `qwen3-tts-flash` is a Model Studio
  service governed by Alibaba Cloud terms, which this page did not capture.

## Unresolved questions

1. **Is `qwen3-tts-flash` the same weights?** Nothing states it. It has 24 kHz output and the same
   ten languages, but no cloning, no design, no instruction control, and a 600-character cap. A
   hosted product with fewer capabilities than the open weights could be a different checkpoint, a
   capability gate, or a different model entirely
   ([Model Studio](../../sources/alibabacloud.com/qwen3-tts-model-studio-api/2026-10-26.md)).
2. **When did the hosted API launch?** No announcement date was located; the realtime free-quota note
   ("2025 (after November 13…)") implies it predates the open-weights release, which would make the
   *product* older than the *model* by two months or more
   ([pricing](../../sources/alibabacloud.com/model-pricing-speech-synthesis/2026-10-26.md)).
3. **Why do the vendor's two tables disagree on 0.6B instruction control?** README blank, blog
   ticked. Untested here.
4. **What happens at fal's token cap?** Truncation, an error, or a shortened utterance — fal says
   nothing, and the default `max_new_tokens: 200` implies a very short default output (~16 s at
   12.5 Hz) that no example explains
   ([fal](../../sources/fal.ai/qwen-3-tts/2026-10-26.md)).
5. **Is the output watermarked?** No vendor or host document mentions a marker; nothing rules one
   out. Absence of documentation is not proof of absence.
6. **What container and bitrate do the hosts return?** Undocumented on fal and Replicate; only Model
   Studio names formats (WAV/MP3/PCM/Opus on the *other* families, WAV or base64 PCM here).
7. **Does the 25 Hz tokenizer ever ship?** The README says "Other models mentioned in the technical
   report will be released in the near future" and the report benchmarks 25 Hz checkpoints that beat
   the released 12 Hz models on long-form WER. Nine months after release, the Qwen organisation's Hub
   account holds six TTS repositories, all 12 Hz, and no 25 Hz one
   ([model cards](../../sources/huggingface.co/qwen3-tts-model-cards/2026-10-26.md)).
8. **How good is it, independently?** No number in this corpus comes from anyone but Qwen, fal's
   restatement, or Replicate's restatement.
9. **What does the blog's `2025-03-24` proxy timestamp mean?** No artifact supports it; it is
   recorded and rejected, not explained.

## Evidence status

Evidence floor: **met.** First-party: the `QwenLM/Qwen3-TTS` repository (README, model table,
evaluation tables, licence field, repository metadata), six Hugging Face model cards with their API
metadata and `config.json` files, the official blog post (via a reader proxy, with its date caveat),
and the arXiv technical report. Independent hosts: one fal record (catalogue metadata, five
OpenAPI schemas, price strings, plus the `alibaba/qwen-audio-3-tts` partner endpoint for contrast),
one Replicate record (official model page, README, billing configuration, input schema, hardware and
version metadata), and Alibaba Cloud Model Studio's own API reference, capability matrix, voice list
and price schedule. All captured 2026-10-26.

**No direct tests have been run for this page.** Capability statements are vendor or host
documentation; prices are published schedules; every quality number is vendor-produced. Nothing here
measures audio quality, cloning fidelity, or whether the hosts deliver what their schemas promise.

The next useful evidence would be: the same 20-second reference clip cloned through
`fal-ai/qwen-3-tts/clone-voice/1.7b` and through Replicate's `voice_clone` mode, compared for
speaker similarity and for whether the embedding artifact round-trips; one 600-character English and
one 600-character Chinese script through `qwen3-tts-flash` to test the character rule and the actual
cost; a long script through fal at default and at `max_new_tokens: 8192` to find the real ceiling;
a spectral and provenance check on all three hosts' output for a watermark; and an independent
listening test against Qwen-Audio-3.1-TTS-Plus, the model Alibaba now recommends instead.

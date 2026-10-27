# MiniMax Speech 2.8 HD

MiniMax's text-to-speech model `speech-2.8-hd`, announced **2026-01-23** as the quality tier of a
two-model Speech 2.8 family (`speech-2.8-hd` and `speech-2.8-turbo`). It is the successor to Speech
2.6 and adds **native interjection ("sound") tags** — the one capability the vendor restricts to the
2.8 IDs. It is sold per character at **$100 per million characters**, unchanged from the model it
supersedes; four publishers quote that same number, and one independent arena places it mid-table
rather than at the top that a host's README claims.

The launch is inside the roster's one-year window (≥ 2025-10-26) by three months at the capture date,
so no out-of-window exception applies.

## Identity

- **Canonical name:** MiniMax Speech 2.8 HD. **Vendor model ID:** `speech-2.8-hd`
  ([T2A reference](../../sources/minimax.io/minimax-speech-2.8-t2a-api/2026-10-26.md)).
- **Vendor:** MiniMax (model lab and API operator). The Open Platform contract is with
  **Nanonoble Pte. Ltd.**, Singapore
  ([terms](../../sources/minimax.io/minimax-speech-2.8-terms/2026-10-26.md)).
- **Release:** 2026-01-23, from two first-party pages that agree — the launch post is dated
  `2026.1.23` ([launch](../../sources/minimax.io/minimax-speech-2.8-launch/2026-10-26.md)) and the
  changelog carries a `Jan. 23, 2026` Speech-2.8 entry
  ([release notes](../../sources/minimax.io/minimax-speech-2.8-release-notes/2026-10-26.md)).
- **Host endpoints** — the roster's discovery label was correct:

| Route | Endpoint | Notes |
| --- | --- | --- |
| MiniMax | `POST https://api.minimax.io/v1/t2a_v2` with `model: speech-2.8-hd` | also `api-uw.minimax.io` for US West, and WebSocket/bidi variants ([T2A reference](../../sources/minimax.io/minimax-speech-2.8-t2a-api/2026-10-26.md)) |
| MiniMax | `POST /v1/t2a_async_v2` (async long-form) | 50,000 characters inline, 1M via `text_file_id` ([async reference](../../sources/minimax.io/minimax-speech-2.8-async-api/2026-10-26.md)) |
| fal | `fal-ai/minimax/speech-2.8-hd` (+ `/stream`) | `hostingType: proxy`, `is_partner_api: true` ([fal](../../sources/fal.ai/minimax-speech-2.8-hd/2026-10-26.md)) |
| Replicate | `minimax/speech-2.8-hd` | vendor's own namespace on Replicate ([Replicate](../../sources/replicate.com/minimax-speech-2.8-hd/2026-10-26.md)) |

  Negative check: Replicate has no untiered `minimax/speech-2.8` (404), but does host
  `minimax/speech-02-hd` and `minimax/speech-2.6-hd`.

- **Siblings:** `speech-2.8-turbo` (same generation, cheaper/faster tier); legacy `speech-2.6-hd`,
  `speech-2.6-turbo`, `speech-02-hd`, `speech-02-turbo`, and the older `speech-01-*` IDs still
  accepted by the API. Speech lineage: Speech-02 (Jun 2025) → 2.5 (2025-08-06) → 2.6 (2025-10-29) →
  2.8 (2026-01-23).

### Four dates, one model

| Date | Source | What it measures |
| --- | --- | --- |
| **2026-01-23** | MiniMax launch post + changelog | vendor announcement |
| 2026-02-04 | fal `date`/`publishedAt` | host listing |
| ≈2026-02-05 | Replicate "Model created 8 months, 3 weeks ago" | host listing |
| 2026-02-14 | Artificial Analysis `releaseDate` | aggregator field, unexplained |

The vendor date is the only one described as a release by its publisher. The other three cluster
12–22 days later and are host/aggregator metadata, not competing launch claims. Note that
Artificial Analysis' own dates for the legacy models also differ from the vendor's (2.6 → 2025-10-30
vs vendor 2025-10-29), which is consistent with its field being a listing date.

### Identity ambiguity

- **"HD" is a tier, not a version.** `speech-2.8-hd` and `speech-2.8-turbo` are separate model IDs
  with separate prices and separately measured quality; both answer on the same endpoint.
- **No checkpoint or revision identifier exists** on any route. MiniMax does not publish a snapshot
  name, and fal and Replicate both serve through the vendor's API without pinning a revision. Claims
  here can be pinned to a capture date, not to a model revision.
- **"Speech 2.8 HD" and "MiniMax Speech 2.8" are used interchangeably** in host copy; the launch
  post covers the family and never separates the tiers.

## Current assessment

The evidence supports a **current, generally available quality tier**, not a preview. Both first-party
catalogue pages list `speech-2.8-hd` as current
([models list](../../sources/minimax.io/minimax-speech-2.8-models-list/2026-10-26.md)), the pricing
page prices it as the top of the ladder with no "preview" marker
([pricing](../../sources/minimax.io/minimax-speech-2.8-pricing/2026-10-26.md)), and fal lists it
`status: public`, `deprecated: false`, `removed: false` nine months after launch
([fal](../../sources/fal.ai/minimax-speech-2.8-hd/2026-10-26.md)).

**It is a distinct tier, not a repackaging of 2.6.** Four things separate them: 2.8-only interjection
tags, the loss of the `whisper` emotion (2.6-only), a different catalogue description, and an
independently measured **+48 Elo** (1174.05 vs 1125.98)
([T2A reference](../../sources/minimax.io/minimax-speech-2.8-t2a-api/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/minimax-speech-2.8-hd-leaderboard/2026-10-26.md)). What does
*not* separate them is text normalization: `text_normalization_mode=quality` is documented for both
2.8 and 2.6, so it is a 2.6-era feature carried forward, not a 2.8 addition.

The most decision-relevant findings are three:

1. **The quality claim does not hold up as "best".** Artificial Analysis' arena puts Speech 2.8 HD at
   **Elo 1174.05, 24th of 98 entries**, ~159 Elo below Eleven v4 Turbo. The HD-over-Turbo premium is
   real but modest: +21.6 Elo for 1.67× the price.
2. **Watermarking is the customer's job, not the vendor's.** No MiniMax document claims embedded
   provenance, the only watermark control in the speech API is an audible "AIGC watermark tone" on
   the *voice-clone preview* path (default off), and the terms oblige the developer to "add
   non-intrusive identifiers … and place a prominent mark"
   ([terms](../../sources/minimax.io/minimax-speech-2.8-terms/2026-10-26.md),
   [voice clone](../../sources/minimax.io/minimax-speech-2.8-voice-clone/2026-10-26.md)).
3. **The three routes are not interchangeable.** fal drops 4 of 7 output formats and 3 of 40
   languages, and exposes an emotion list that is neither the vendor's nor a subset; Replicate
   flattens the schema and is the only route that documents a path from its own cloning model into
   `voice_id`; only the vendor offers async long-form above 10,000 characters.

## Documented capabilities

Everything in this section is vendor or host documentation. No direct tests were run.

### Speech synthesis and control surface

- **Interjection tags, 2.8-only.** Written inline in the text as parentheticals. The **synchronous**
  T2A reference lists 19: `(laughs)`, `(chuckle)`, `(coughs)`, `(clear-throat)`, `(groans)`,
  `(breath)`, `(pant)`, `(inhale)`, `(exhale)`, `(gasps)`, `(sniffs)`, `(sighs)`, `(snorts)`,
  `(burps)`, `(lip-smacking)`, `(humming)`, `(hissing)`, `(emm)`, `(sneezes)`. The **async** reference
  and the **voice-clone** reference each list 22 — adding `(whistles)`, `(crying)` and `(applause)` —
  so the vendor's own lists disagree by route
  ([sync](../../sources/minimax.io/minimax-speech-2.8-t2a-api/2026-10-26.md),
  [async](../../sources/minimax.io/minimax-speech-2.8-async-api/2026-10-26.md),
  [voice clone](../../sources/minimax.io/minimax-speech-2.8-voice-clone/2026-10-26.md)).
- **Pause control:** `<#x#>` with `x` in `[0.01, 99.99]` seconds, "up to two decimal places", must
  sit between speakable segments and "cannot be used consecutively".
- **Emotion:** nine enumerated values (`happy`, `sad`, `angry`, `fearful`, `disgusted`, `surprised`,
  `calm`, `fluent`, `whisper`), but "`speech-2.8-hd` and `speech-2.8-turbo` do not support `whisper`".
  The default is automatic ("By default, the model automatically selects the most natural emotion
  based on text"), and manual selection is "only recommended when explicitly needed". The catalogue
  separately says "7 emotions supported" — a count no page derives.
- **Voice shaping:** `speed` 0.5–2, `vol` (0, 10], `pitch` −12–12 semitones, plus a separate
  `voice_modify` block with `pitch`/`intensity`/`timbre` on −100–100 (mapped to the product's
  "Deepen/Brighten", "Stronger/Softer", "Nasal/Crisp" sliders) and one of four `sound_effects`
  (`spacious_echo`, `auditorium_echo`, `lofi_telephone`, `robotic`).
- **Voice mixing:** `timbre_weights` blends "Up to 4 voices" at weights 1–100, with `voice_id` left
  empty.
- **Pronunciation control:** inline overrides in half-width parentheses — Pinyin with tone 1–5, IPA,
  or Cantonese Jyutping with tone 1–6 — plus a `pronunciation_dict.tone` list of
  `original/replacement` rules covering English IPA, Chinese pinyin, Japanese kana and plain text
  expansion.
- **Text normalization:** `text_normalization_mode: basic | quality`. `quality` is "a hybrid LLM +
  rule-based approach" and "currently takes effect only for non-streaming requests (`stream=false`)
  with `speech-2.8-hd`, `speech-2.8-turbo`, `speech-2.6-hd`, and `speech-2.6-turbo`"; on streaming
  requests it silently degrades to `basic`. Added latency is documented as ~30 ms (rule branch) or
  ~100 ms (LLM branch)
  ([T2A guide](../../sources/minimax.io/minimax-speech-2.8-t2a-api/2026-10-26.md)).
- **Subtitles/timestamps:** `subtitle_enable` with `sentence`, `word` or `word_streaming`
  granularity; non-streaming returns a JSON `subtitle_file` with millisecond timestamps and sentences
  "≤ 50 characters".
- **Streaming:** `stream: true` on HTTP, plus dedicated WebSocket and bidirectional WebSocket routes
  (`wss://api.minimax.io/ws/v1/t2a_v2`, `…/t2a_v2_bidi`).

### Languages

MiniMax claims **40 languages** and enumerates exactly 40: Chinese, Cantonese, English, Spanish,
French, Russian, German, Portuguese, Arabic, Italian, Japanese, Korean, Indonesian, Vietnamese,
Turkish, Dutch, Ukrainian, Thai, Polish, Romanian, Greek, Czech, Finnish, Hindi, Bulgarian, Danish,
Hebrew, Malay, Persian, Slovak, Swedish, Croatian, Filipino, Hungarian, Norwegian, Slovenian,
Catalan, Nynorsk, Tamil, Afrikaans
([T2A guide](../../sources/minimax.io/minimax-speech-2.8-t2a-api/2026-10-26.md)). The
`language_boost` enum has the same 40 values plus `auto`, in the combined `Chinese,Yue` form for
Cantonese. The vendor adds that "The speech-01 and speech-02 series models do not currently support
Persian, Filipino, or Tamil" — a limitation it does not state for 2.8, so those three are 2.8-era
additions by implication.

The language story is the one place where the launch post makes a *narrower* claim than the docs:
"Starting with our Mandarin-Japanese pair, we've fixed unnatural tones and pronunciation shifts …
Stay tuned as we bring this seamless experience to even more languages soon"
([launch](../../sources/minimax.io/minimax-speech-2.8-launch/2026-10-26.md)).

### Voice cloning

- **Sample floor is 10 seconds, not 5.** The clone API requires audio of "minimum 10 seconds, maximum
  5 minutes", mp3/m4a/wav, ≤20 MB. An optional second clip "less than 8 seconds" with its transcript
  improves similarity.
- **Cost is per stored voice, charged on first use:** "Rapid Voice Cloning … \$1.5 per voice … Charged
  when the cloned voice is first used for synthesis, not at cloning time"
  ([pricing](../../sources/minimax.io/minimax-speech-2.8-pricing/2026-10-26.md)).
- **Unused clones are deleted after 7 days:** "If a cloned voice is not used within 7 days, the
  system will delete it."
- **A transcript check exists, but it is not a consent check:** `text_validation` sends the sample to
  ASR and rejects with `1043` if similarity to the claimed transcript falls below `accuracy`
  (default 0.7).
- **Account capacity is plan-limited** by "voice slots": 10 / 100 / 250 / 500 / 800 across the five
  audio-subscription tiers.
- Marketing figures conflict with the API: the launch post says "just a 10-second sample", Replicate's
  README says "5 seconds", and the API rejects anything under 10.

### Output formats and sample rate

| Route | Formats | Sample rates | Bitrates | Channels |
| --- | --- | --- | --- | --- |
| MiniMax T2A v2 | `mp3`, `pcm`, `flac`, `wav`, `pcmu_raw`, `pcmu_wav`, `opus` | 8000, 16000, 22050, 24000, 32000, 44100 | 32k/64k/128k/256k (MP3 only) | mono, stereo |
| fal | `mp3`, `pcm`, `flac` | same six | same four | mono, stereo |
| Replicate | `mp3`, `wav`, `flac`, `pcm` | same six | same four | `mono`, `stereo` (string enum) |

Default on all three is MP3 at 32 kHz, 128 kbps, mono. **No source states the model's native sample
rate** — 44.1 kHz is the ceiling the API accepts, not a measured generation rate. `pcmu_raw`/
`pcmu_wav` are G.711 μ-law at 8 kHz; `opus` is Ogg/Opus.

Sources: [T2A reference](../../sources/minimax.io/minimax-speech-2.8-t2a-api/2026-10-26.md),
[fal](../../sources/fal.ai/minimax-speech-2.8-hd/2026-10-26.md),
[Replicate](../../sources/replicate.com/minimax-speech-2.8-hd/2026-10-26.md).

### Character limits

| Route | Limit | Kind |
| --- | --- | --- |
| MiniMax T2A sync | "Must be less than 10,000 characters" | hard |
| MiniMax T2A async, inline `text` | 50,000 characters | hard |
| MiniMax T2A async, `text_file_id` | 1,000,000 characters (txt/zip) | hard |
| MiniMax voice-clone preview `text` | 1,000 characters | hard |
| fal | `maxLength: 10000` | hard |
| Replicate | "max 10,000 characters" | hard |

The vendor also advises that "For texts over 3,000 characters, streaming output is recommended" — a
reliability heuristic, not a rejection threshold. **The advertised "1M characters" is a file-upload
ceiling, not an inline one:** async posts of raw text stop at 50,000
([async reference](../../sources/minimax.io/minimax-speech-2.8-async-api/2026-10-26.md)).
Async output is also not returned inline — it yields a `file_id` whose download URL is valid for 9
hours.

### Quality — the one independent measurement

Artificial Analysis' Speech Arena, an Elo board built from user votes, reports **1174.05**
(95% CI 1164.05–1184.05) for Speech 2.8 HD, and **1152.5** for 2.8 Turbo. Within the MiniMax family
the ladder is monotone: 2.8 HD > 2.8 Turbo > 2.6 HD (1125.98) > 2.6 Turbo (1120.05) > 02 HD (1108.25)
> 02 Turbo (1088.64). The generational steps and the 2.8 HD/Turbo step all exceed the ±10 CI, so they
are separable; 2.6 HD vs 2.6 Turbo differ by 5.9 with overlapping intervals and should be read as
tied
([AA](../../sources/artificialanalysis.ai/minimax-speech-2.8-hd-leaderboard/2026-10-26.md)).

Across the whole board, 23 entries scored higher at capture, led by Eleven v4 Turbo (1332.98), Eleven
v4 (1332.89), Qwen-Audio-3.1-TTS-Plus (1305.76), Cartesia Sonic 3.6 (1291.73) and Gemini 3.8 Flash TTS
(1279.68).

## Limitations and constraints

- **`whisper` is unavailable on 2.8** even though it is in the shared `emotion` enum. A pipeline
  migrating from 2.6 loses that option. No page says whether requesting `whisper` on 2.8 errors or
  silently falls back to automatic selection.
- **`quality` normalization is silently downgraded** on streaming and WebSocket requests — "For
  streaming requests or other models, `quality` is processed as `basic` and no error is returned."
- **60 requests per minute** on T2A for the `speech-2.8`, `speech-2.6` and `speech-02` rows on the
  pay-as-you-go default, with no published character-per-minute cap
  ([rate limits](../../sources/minimax.io/minimax-speech-2.8-rate-limits/2026-10-26.md)).
- **Async and sync disagree on defaults.** Async defaults to `channel: 2` (stereo) where sync
  defaults to mono, and Opus restricts sample rates to 8000/12000/16000/24000/48000 — so 44100 is
  accepted by the schema but fails the task when `format: opus`
  ([async reference](../../sources/minimax.io/minimax-speech-2.8-async-api/2026-10-26.md)).
- **Cloned voices expire after 7 days unused**, and voice capacity is capped by plan voice slots.
- **Host feature gaps.** fal exposes 3 of 7 formats (no `wav`, no μ-law, no Opus), 37 of 40
  languages (no Persian, Filipino or Tamil), 8 interjections rather than 19 (renaming
  `(clear-throat)` to `(clears throat)` and adding `(yawns)`, which appears in no MiniMax list), and
  an emotion enum containing `neutral` — a value MiniMax does not document — while dropping `calm`
  and `fluent`. Replicate exposes 4 formats, all 40 languages plus a standalone `Cantonese`, and a
  `neutral` emotion.
- **No voice-upload or cloning field on fal's speech endpoint.** `voice_id` is a free-form string with
  17 presets, so a caller's own MiniMax clone is not reachable there as documented. Replicate is the
  only host that documents a route from its cloning model into `voice_id`.
- **Resale is restricted** to "integrated applications": the terms forbid to "Independently
  sublicense, resell, or distribute any or all services outside of any integrated applications".
- **Outputs are used for vendor improvement.** The terms grant MiniMax the right to "use the input and
  generated content to provide, maintain, develop, and improve our Services"; no opt-out appears on
  the captured pages.
- **No watermark and no provenance field.** See below.
- **No quality evidence beyond Elo.** No WER, speaker-similarity or MOS measurement was captured, and
  the vendor publishes no numbers at all.

### Watermarking and content marking

This is the sharpest policy difference from ElevenLabs, and it runs the other way:

- **The T2A API has no watermark parameter and no provenance field.** Audio comes back as hex or a
  24-hour URL, nothing more
  ([T2A reference](../../sources/minimax.io/minimax-speech-2.8-t2a-api/2026-10-26.md)).
- **The only watermark control in the speech surface is `aigc_watermark` on `/v1/voice_clone`**,
  default `false`, described as "append an AIGC watermark tone to the end of the synthesized preview
  audio" — an audible tone, on a preview clip, off by default
  ([voice clone](../../sources/minimax.io/minimax-speech-2.8-voice-clone/2026-10-26.md)).
- **The marking duty is contractual and sits with the developer:** "You are required to adopt
  technical measures to add non-intrusive identifiers … and place a prominent mark in reasonable
  positions or areas within generated or edited content to inform the public of the use of deep
  synthesis technology"
  ([terms](../../sources/minimax.io/minimax-speech-2.8-terms/2026-10-26.md)).

A compliance pipeline that relies on vendor-side detection does not transfer to MiniMax. No capture
shows a vendor-side detector equivalent to ElevenLabs' Audio Detector.

## Access, pricing, licensing

### Billing basis

**Per input character.** MiniMax's own field for it is `usage_characters` ("Number of billable
characters used in this synthesis"), reported separately from `word_count`, which is "For reference
only and not used for billing".

| Route | speech-2.8-hd | speech-2.8-turbo | Rounding |
| --- | --- | --- | --- |
| MiniMax T2A sync | \$100 / M chars (\$0.10 / 1K) | \$60 / M (\$0.06 / 1K) | not stated |
| MiniMax T2A async | \$100 / M chars | \$60 / M | not stated |
| fal | \$0.10 / 1,000 chars | \$0.06 / 1,000 chars | per 1,000-character unit |
| Replicate | \$0.10 / 1,000 input tokens | \$0.06 / 1,000 input tokens | per-1,000 unit, plus \$0.0001/s CPU |
| Artificial Analysis (aggregated) | 100 / M chars | 60 / M chars | — |

Sources: [pricing](../../sources/minimax.io/minimax-speech-2.8-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/minimax-speech-2.8-hd/2026-10-26.md),
[Replicate](../../sources/replicate.com/minimax-speech-2.8-hd/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/minimax-speech-2.8-hd-leaderboard/2026-10-26.md).

**Every route charges the vendor's list price.** $0.10 per 1,000 characters for HD is quoted
identically by the vendor, fal and Replicate, and the aggregator's price field agrees. That makes the
cost predictable across hosts — and it means there is no host discount to shop for on HD.

The one exception in the corpus is **Speech 2.8 Turbo through Telnyx at $34 per million characters**
(≈$0.034/1K) on the Artificial Analysis provider board — 43% below MiniMax's own $60 and a third of
HD's price, at the same measured Elo, because it is the same model. No HD resale row exists. The
Telnyx entry is aggregator metadata; no Telnyx page was captured, so the offer is unverified.

Practical cost: a 10,000-character request is **$1.00** on HD and **$0.60** on Turbo; the 1M-character
async ceiling is **$100** on HD.

Beyond per-character: **\$1.5 per cloned voice** and **\$3 per designed voice**, each charged on the
voice's first synthesis; audio-subscription plans (\$5–\$999/month) bundle 100,000–20,000,000 audio
points plus voice slots and higher RPM.

### Licensing and commercial terms

- **Output ownership:** "you retain your ownership rights in Client input and generated content".
- **No weights, no self-hosting.** Every route is a hosted API; fal marks the endpoint
  `hostingType: "proxy"` / `provider_type: "partner"`. There is no weights licence to review.
- **Host licence fields are the host's assertion:** fal's `licenseType: "commercial"` describes use
  through fal, not a MiniMax grant.
- **Voice-cloning consent is not documented.** The only verification is the ASR transcript match; no
  captured page states who may clone whom, or how an impersonation complaint is handled.
- **Contracting entity:** Nanonoble Pte. Ltd. (Singapore), Singapore law, SIAC arbitration. US-region
  customers may not process ITAR or HIPAA data.

## Unresolved questions

1. **Is Speech 2.8 HD ever "first"?** Replicate's README claims it "ranked first on the Artificial
   Analysis Speech Arena and Hugging Face TTS Arena". At capture AA places it 24th of 98. No snapshot
   from February–September 2026 was captured, so whether the claim was ever true is unknown — but it
   is false now, and the README is undated.
2. **Why do the vendor's interjection lists differ by route (19 sync, 22 async and clone)?**
   `(whistles)`, `(crying)` and `(applause)` are missing only from the synchronous reference. Which
   set the sync endpoint actually accepts is untested.
3. **Is the "7 emotions" count a real restriction?** Nine values are enumerated, `whisper` is
   documented as unsupported on 2.8, and the catalogue says seven. `fluent` is the other candidate
   exclusion, but no page says so.
4. **What is the native sample rate?** 44.1 kHz is accepted; nothing states what the model generates
   at before resampling.
5. **Do interjection tags and `<#x#>` markers bill as characters?** They sit inside `text`, and
   `usage_characters` is reported separately from `word_count`, but no page defines the counting rule.
6. **Do the 2.8 HD and Turbo tiers share weights?** The pricing page says Turbo has "Same
   capabilities as hd, optimized for speed and cost"; no page says whether that is a different
   checkpoint or the same one at a different serving budget. The +21.6 Elo gap is consistent with
   either.
7. **Is Speech 2.6 retired?** The models overview files it under "Legacy Models"; the Model List
   files it under "Available Models" and lists no speech model as retired. Both read the same day.
8. **Which checkpoint is served?** No route publishes a revision, so cross-month comparisons cannot
   be pinned.
9. **Can a caller's own cloned voice be used through fal?** fal's speech schema has no voice-upload
   field, and no page says whose MiniMax workspace resolves `voice_id`.
10. **Does the Telnyx $34/M Turbo price exist?** It appears only as an aggregator row; no Telnyx page
    was captured.
11. **Do failed or partially generated requests bill?** No source states it.

## Evidence status

Evidence floor: **met.** First-party: nine MiniMax capture records covering eleven documents — the dated
launch post, the dated changelog entry, the synchronous `t2a_v2` OpenAPI reference, the async
`t2a_async_v2` reference, the models overview plus model list, the pricing overview, the voice-clone
guide and clone API reference, the rate-limits table, and the terms of service. Independent hosts:
fal (catalogue record, input schema, billing payload, `llms.txt` price) and Replicate (model page,
README, embedded prediction schema, billing config). Independent measurement: the Artificial Analysis
Text-to-Speech leaderboard. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules that
agree across four publishers; the only quality number is a third-party Elo, not a re-measurement we
performed.

Contradictions are preserved rather than resolved: the three interjection lists, the 40-vs-32
language counts, the 10-vs-5-second cloning figures, the three emotion lists across hosts, the
"Legacy" vs "Available" status of Speech 2.6, the "ranked first" claim against the current board, and
the four dates attached to one model.

The next useful evidence would be a small reproducible test set: the same 1,000-character script
through `speech-2.8-hd` on MiniMax, fal and Replicate, compared for speaker identity and interjection
rendering; one request containing all 22 candidate interjections to see which are accepted; a
10,000-character request on each route to confirm the ceiling bites identically; a clone from a
10-second sample re-tested on day 8 to confirm the deletion rule; and a spectral check for any
inaudible watermark on host-produced files.

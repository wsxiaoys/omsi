# Voxtral TTS 3 (Mistral AI)

Voxtral TTS 3 is Mistral's current hosted text-to-speech model, released **2026-10-20** in
**Public Preview** under Mistral's proprietary **Premier** class: 35 languages and 50+ dialects,
preset voices directed by inline emotion and pace tags, zero-shot and professional voice cloning,
five output containers at 24 kHz mono, and streaming
([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md)). It replaces
**Voxtral TTS** (`voxtral-mini-tts-2603`, GA March 2026), the 4B open-weights model under
CC BY-NC 4.0, at **$13 per 1M characters** against the predecessor's $16
([pricing](../../sources/mistral.ai/voxtral-tts-3-pricing/2026-10-26.md)).

**In window.** Announced 2026-10-20, inside the 2025-10-26 cutoff
([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md),
[model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md)).

## Identity

- **Canonical name:** Voxtral TTS 3. **Model ID:** `voxtral-mini-tts-3-0`
  ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md)).
- **Vendor / developer:** Mistral AI.
- **Aliases:** `voxtral-mini-tts-3` and `voxtral-mini-tts-latest`; the same card also carries the
  realtime identifiers `voxtral-mini-tts-realtime-3-0`, `-realtime-3` and `-realtime-latest`
  ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md)).
- **Names in the wild:** "Voxtral TTS 3" (model card, docs, OpenRouter), "Voxtral Mini TTS 3"
  (launch post and docs overview table), "Mistral: Voxtral TTS 3" (OpenRouter title), and
  "Voxtral 3 TTS" — the Artificial Analysis label the roster uses
  ([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/voxtral-3-tts/2026-10-26.md)). The roster label is an
  evaluator's string, not the vendor's: the canonical product name is **Voxtral TTS 3** and the
  canonical identifier is `voxtral-mini-tts-3-0`.
- **Release date:** **2026-10-20**, agreed by the model card ("October 20, 2026"), the AA payload
  (`releaseDate: "2026-10-20"`), OpenRouter's endpoint `created` timestamp (2026-10-20 16:13:33 UTC)
  and the site RSS item (`Tue, 20 Oct 2026`). The launch page's own JSON-LD says
  `2026-10-22T09:00:00+02:00` — a two-day first-party disagreement, preserved
  ([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md)).
- **Lifecycle:** Public Preview, version 3.0. Under Mistral's policy that stage "may receive updates
  before reaching General Availability", gets a one-month deprecation notice, is "priced at the same
  rate as General Availability models", and has "no guaranteed path to General Availability"
  ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md),
  [lifecycle policy](../../sources/mistral.ai/model-lifecycle-policy/2026-10-26.md)).
- **Siblings that are not this model:**
  - **Voxtral TTS** — `voxtral-mini-tts-2603`, GA 2026-03-23, CC BY-NC 4.0, 4B open weights, 9
    languages ([card](../../sources/mistral.ai/voxtral-tts-2603-model-card/2026-10-26.md),
    [weights](../../sources/huggingface.co/voxtral-4b-tts-2603/2026-10-26.md)). Still served and
    still listed on the pricing page; the migration guide maps it to Voxtral TTS 3 with no breaking
    changes ([migration](../../sources/mistral.ai/voxtral-2-to-3-migration/2026-10-26.md)).
  - **Voxtral TTS Realtime 3** — `voxtral-mini-tts-realtime-3-0`, a WebSocket session mode for text
    that is still being written
    ([realtime](../../sources/mistral.ai/voxtral-tts-3-realtime-sessions/2026-10-26.md)).
  - **Voxtral Mini TTS** — the name OpenRouter gives the predecessor on its own listing, priced
    there at $16/M characters
    ([OpenRouter](../../sources/openrouter.ai/voxtral-mini-tts-3-0/2026-10-26.md)).

### Host routes

| Route | Endpoint / ID | Relationship | Notes |
| --- | --- | --- | --- |
| Mistral API (global) | `POST /v1/audio/speech`, `model: voxtral-mini-tts-3-0` | first-party | $13/1M chars |
| Mistral API (EU / US) | `api.eu.mistral.ai`, `api.us.mistral.ai` | first-party | 1.1× regional upcharge |
| Mistral realtime | `wss://api.mistral.ai/v1/audio/speech/realtime?model=voxtral-mini-tts-3-0` | first-party | WebSocket sessions |
| OpenRouter | `mistralai/voxtral-mini-tts-3-0`, three endpoints | aggregator, **pass-through to Mistral** | $13.00 / $13.00 / $14.30 per 1M chars; no cloning exposed |
| OpenRouter (predecessor) | `Voxtral Mini TTS` | aggregator listing | $16/M chars — both generations listed side by side |
| Self-host | — | vendor offer only | no weights published; "talk to our team" |
| fal | — | **absent** | catalogue API `keywords=voxtral` returns `total: 0` |
| Replicate | — | **absent** | search returns only Voxtral transcription/audio-understanding ports |

Sources: [API reference](../../sources/mistral.ai/audio-speech-api-reference/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/voxtral-mini-tts-3-0/2026-10-26.md),
[regional inference](../../sources/mistral.ai/regional-inference/2026-10-26.md),
[launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md).

### Identity ambiguity

Two identifiers for one model, and one hidden snapshot behind them. The realtime socket is opened
with the **offline** ID (`?model=voxtral-mini-tts-3-0`) but the server's `session.created` event
echoes `"model": "voxtral-mini-tts-3-0-13"` — a snapshot suffix that appears nowhere else and that
no page explains ([realtime](../../sources/mistral.ai/voxtral-tts-3-realtime-sessions/2026-10-26.md)).
Because the model is in Public Preview, "silent updates" are policy, so a pinned `-3-0` does not pin
behaviour the way a GA pin would.

The `-latest` alias is documented inconsistently: the migration guide says
`voxtral-mini-tts-latest` "will point to Voxtral 3 within a month of GA", while the model card
already lists it among the 3.0 identifiers, and the model is not GA
([migration](../../sources/mistral.ai/voxtral-2-to-3-migration/2026-10-26.md),
[model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md)).

## Current assessment

**A distinct new model, not a repackaging of Voxtral TTS — but a hosted-only one, in preview, with
one independent measurement and no independent inference host.**

What the evidence supports:

- **Distinct model.** Artificial Analysis scores it **+133 Elo above its own predecessor**
  (1221 ±14 versus 1088 ±12), with non-overlapping intervals
  ([AA](../../sources/artificialanalysis.ai/voxtral-3-tts/2026-10-26.md)). The surface changed on
  every axis a reader would choose on: languages 9 → 35, price $16 → $13, inline emotion/pace tags
  where the predecessor used per-emotion voice variants, professional voice cloning added, five
  output formats retained
  ([predecessor card](../../sources/mistral.ai/voxtral-tts-2603-model-card/2026-10-26.md),
  [model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md)).
- **Current, but preview.** Public Preview with silent updates and a one-month notice period
  ([lifecycle policy](../../sources/mistral.ai/model-lifecycle-policy/2026-10-26.md)).
- **Mid-field on the only independent board.** Rank 12 of 98 at 1221 ±14 — 59 points below
  Gemini 3.8 Flash TTS (1280 ±14) and 112 below Eleven v4 Turbo (1333 ±16), on the same board and the
  same price column ([AA](../../sources/artificialanalysis.ai/voxtral-3-tts/2026-10-26.md)).
- **No open weights, and no second implementer.** The Premier badge carries an empty licence array
  and the card has no weights section, unlike the predecessor's; the Mistral organisation publishes
  no Voxtral 3 TTS repository; fal and Replicate do not list the model
  ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md),
  [weights check](../../sources/huggingface.co/voxtral-4b-tts-2603/2026-10-26.md)).
- **Every quality claim in the vendor material is Mistral-run.** The launch post's four charts use a
  `gemini-3.8-flash` judge on Mistral-selected prompt sets and print no numeric score for Voxtral in
  the page text ([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md)).

Editorial reading: for a product team choosing a TTS vendor in late October 2026 this is a
*price-per-character* competitor with unusually broad language coverage and a rich inline control
surface, sitting mid-board on preference and unavailable outside Mistral's own infrastructure. For
anyone who needs weights, an on-premise licence, or a second supplier, it is the wrong generation —
the March 2026 Voxtral TTS remains the only Voxtral TTS with published weights, and they are
non-commercial.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run for this page.**

### Two modes, one model

| Mode | ID | Use |
| --- | --- | --- |
| Offline | `voxtral-mini-tts-3-0` | "Generate speech from complete text, with preset or cloned voices, emotion and pace tags, and custom pronunciation. Stream the audio when the listener is waiting." |
| Realtime | `voxtral-mini-tts-realtime-3-0` | "Stream speech for live conversations" — WebSocket, text sent as deltas |

([docs overview](../../sources/mistral.ai/voxtral-tts-3-text-to-speech-overview/2026-10-26.md),
[realtime](../../sources/mistral.ai/voxtral-tts-3-realtime-sessions/2026-10-26.md))

Offline requests support the full feature set: preset voices, zero-shot cloning, emotion and pace
tags, custom pronunciation, expressiveness, contextual TTS, and a streamed response. Style
instructions are listed but **"not available at launch"**
([docs overview](../../sources/mistral.ai/voxtral-tts-3-text-to-speech-overview/2026-10-26.md),
[troubleshooting](../../sources/mistral.ai/voxtral-tts-3-troubleshooting/2026-10-26.md)).

### Languages

**35 languages and 50+ dialects**, of which **22 have at least one preset voice**; the rest are
reachable only by cloning a voice from a recording in that language
([languages](../../sources/mistral.ai/voxtral-3-audio-languages/2026-10-26.md)).

Language is **selected by voice, not by a request parameter**: "each voice is tagged with one or more
languages when it is created" ([languages](../../sources/mistral.ai/voxtral-3-audio-languages/2026-10-26.md)).
The language table lists 39 codes — 22 with presets, 17 without (Bulgarian, Croatian, Czech, Danish,
Filipino, Finnish, Greek, Icelandic, Indonesian, Latvian, Luxembourgish, Slovak, Slovenian, Swedish,
Tamil, Thai, Urdu) — against a headline of 35.

Three first-party disagreements, left standing:

| Claim | Source |
| --- | --- |
| "35 languages, 50+ dialects"; presets in **22** | [languages](../../sources/mistral.ai/voxtral-3-audio-languages/2026-10-26.md) |
| "Voice Presets are available in **18** languages" | [launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md) |
| English (UK) has **6** presets | [languages](../../sources/mistral.ai/voxtral-3-audio-languages/2026-10-26.md) |
| English (UK) has **7** presets | [voice library](../../sources/mistral.ai/voxtral-tts-3-voice-library/2026-10-26.md) |

The voice library's 22-language inventory reconciles with the language page's "22", so the launch
post's 18 is the outlier; the English (UK) 6-versus-7 difference is a plain table conflict.

### Voices

**36 Voxtral 3 preset voices** across 22 languages — English (UK) 7, English (US) 4, French 4, Hindi
2, Korean 2, and one each of Arabic, Catalan, Chinese, Dutch, German, Hungarian, Italian, Japanese,
Norwegian, Polish, Portuguese, Romanian, Russian, Spanish, Turkish, Ukrainian, Vietnamese
([voice library](../../sources/mistral.ai/voxtral-tts-3-voice-library/2026-10-26.md)).

**30 Voxtral 2 preset IDs remain accepted**, as per-emotion variants: Paul 8, Jane 9, Oliver 7,
Marie 6. 36 + 30 = **66**, which is exactly the voice count OpenRouter publishes for the model
([voice library](../../sources/mistral.ai/voxtral-tts-3-voice-library/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/voxtral-mini-tts-3-0/2026-10-26.md)).

The design change is the point: "With the Voxtral 2 voices, each preset speaker has one variant per
emotion … With the Voxtral 3 voices, you keep one voice and set the emotion inline instead"
([voice library](../../sources/mistral.ai/voxtral-tts-3-voice-library/2026-10-26.md)).

### Voice cloning

Three documented paths
([voice cloning](../../sources/mistral.ai/voxtral-tts-3-voice-cloning/2026-10-26.md)):

| Path | Reference audio | Reuse |
| --- | --- | --- |
| Zero-shot, per request | "A few seconds to a few minutes"; MP3 or WAV, base64, "A URL isn't accepted" | request only (`ref_audio`) |
| Saved voice | same clip, sent to `POST /v1/audio/voices` | by ID until deleted |
| Professional voice cloning | "30 minutes to 3 hours of clean, high-quality audio featuring only one speaker" | by ID |

Constraints: cloning and `voice_id` are mutually exclusive on a request ("Either ref_audio or voice
must be provided"); a clone "isn't limited to the language of its recording"; a saved voice carries a
`retention_notice` defaulting to 30 days (min 1, max 365)
([voice cloning](../../sources/mistral.ai/voxtral-tts-3-voice-cloning/2026-10-26.md),
[speech generation](../../sources/mistral.ai/voxtral-tts-3-speech-generation/2026-10-26.md),
[voice library](../../sources/mistral.ai/voxtral-tts-3-voice-library/2026-10-26.md)).

A clone copies more than timbre: "It also picks up the delivery of the recording, such as its emotion
and pace, and the way it sounds, such as background noise and the microphone"
([concepts](../../sources/mistral.ai/voxtral-tts-3-voices-concepts/2026-10-26.md)).
A different clip per request yields a different voice, so the documented fix for inconsistency is to
save the voice once and pass the ID
([troubleshooting](../../sources/mistral.ai/voxtral-tts-3-troubleshooting/2026-10-26.md)).

The launch post's phrasing — "voice cloning from 30+ minutes of sampled audio" and Pro Voice "using
just 30 minutes of audio" — describes the professional path only; the docs keep zero-shot at seconds
to minutes ([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md)).

### Inline control: emotion, pace, expressiveness, pronunciation

- **Emotion tags:** `[emotion=…]` with **34 values**, enumerated from `amused` and `angry` to `warm`
  and `wistful` ([emotion tags](../../sources/mistral.ai/voxtral-tts-3-emotion-pace-tags/2026-10-26.md)).
- **Pace tags:** the reference table ships **five** (`very-slow`, `slow`, `moderate`, `fast`,
  `very-fast`), while the model card, docs overview and launch post say "2 pace tags" and the limits
  page says "slow or fast" — the same vendor, one table, two marketing counts
  ([emotion tags](../../sources/mistral.ai/voxtral-tts-3-emotion-pace-tags/2026-10-26.md),
  [limits](../../sources/mistral.ai/voxtral-3-audio-limits/2026-10-26.md)).
- **Scope rules:** a tag applies "from its position until the next tag or the end of the input"; tags
  are never spoken; one tag of a type per section; emotion and pace combine
  ([emotion tags](../../sources/mistral.ai/voxtral-tts-3-emotion-pace-tags/2026-10-26.md)).
- **Expressiveness:** 1.0–5.0, "Higher values trade voice similarity and stability for stronger
  delivery" ([speech generation](../../sources/mistral.ai/voxtral-tts-3-speech-generation/2026-10-26.md)).
  The overview page states the range as ">= 1.0"
  ([docs overview](../../sources/mistral.ai/voxtral-tts-3-text-to-speech-overview/2026-10-26.md)).
- **Custom pronunciation:** `phoneme_hints` maps a "case-sensitive" word to an ordered list of IPA
  phones drawn from a closed set of **50 phonemes**
  ([API reference](../../sources/mistral.ai/audio-speech-api-reference/2026-10-26.md),
  [limits](../../sources/mistral.ai/voxtral-3-audio-limits/2026-10-26.md)).
- **Contextual TTS:** `conversation_history` conditions delivery on prior turns; it requires a
  Voxtral 3 preset voice, must alternate user/assistant and end on a user turn, and cannot combine
  with `ref_audio`, `instruction` or `realtime_context`
  ([speech generation](../../sources/mistral.ai/voxtral-tts-3-speech-generation/2026-10-26.md)).

### Output formats and sample rate

| Property | Value | Source |
| --- | --- | --- |
| Channels / rate | "Generated speech is mono at 24 kHz" | [formats](../../sources/mistral.ai/voxtral-3-audio-formats/2026-10-26.md) |
| Containers | `mp3` (default), `opus`, `wav`, `flac`, `pcm` | [formats](../../sources/mistral.ai/voxtral-3-audio-formats/2026-10-26.md) |
| Transport | base64 in `audio_data`, or SSE events `speech.audio.delta` / `speech.audio.done` | [API reference](../../sources/mistral.ai/audio-speech-api-reference/2026-10-26.md) |
| Bitrate | not published for any container | [formats](../../sources/mistral.ai/voxtral-3-audio-formats/2026-10-26.md) |

24 kHz mono is the only rate any source states. No bitrate is published, so a delivered MP3 or Opus
file cannot be compared to the PCM baseline on documented grounds.

### Streaming and latency

- Offline streaming is server-sent events: "You still send the complete text in one request: only the
  audio comes back in pieces" ([docs overview](../../sources/mistral.ai/voxtral-tts-3-text-to-speech-overview/2026-10-26.md)).
- Realtime is a WebSocket with `streaming_mode` `responsive` (default, "lower latency") or `long_form`
  ("higher quality for longer text"), several generations per socket, and `ref_audio` accepted
  ([realtime](../../sources/mistral.ai/voxtral-tts-3-realtime-sessions/2026-10-26.md)).
- **"~90 ms time-to-first-audio"** is the vendor headline on the card, in the docs overview and in
  the launch post. The predecessor's legacy page distinguishes the same ~90 ms as *processing* time
  from end-to-end time-to-first-audio of "~0.8s for pcm, ~3s for mp3"
  ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md),
  [predecessor docs](../../sources/mistral.ai/voxtral-tts-2603-deprecated-docs/2026-10-26.md)).
  The successor's pages drop that distinction, so the headline is best read as model-side processing
  latency, not as what a caller hears.

### Quality numbers (all vendor-run)

The launch post publishes four quality-per-dollar scatters with a `gemini-3.8-flash` judge, "generated
2026-10-20": Voice Code Bench (BeSimple AI, 300 English prompts), pronunciation control (300
sentences with rare or made-up words), multilingual (377 prompts, 11 languages) and expressive
English (`one_eval`, 237 prompts, "Voxtral TTS: Sarah and James"). Three are labelled "Internal
eval."; the page prints no numeric score for Voxtral, only the plots
([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md)).

The independent board is the only measurement outside Mistral: 1221 ±14 on the default view, from
blind A/B preference votes in the Speech Arena — "Users listen to pairs of speech samples generated
from the same text and choose which sounds more natural" — with per-slice values from 1139.80 to
1358.81 depending on the category, accent and open-weights filters
([AA](../../sources/artificialanalysis.ai/voxtral-3-tts/2026-10-26.md)). It is a preference score, not
an intelligibility or accuracy metric.

## Limitations and constraints

- **No published input length limit.** The limits page gives exact numbers for every transcription
  field and none for TTS text; the `input` field in the OpenAPI schema is a bare `string` with no
  `maxLength` ([limits](../../sources/mistral.ai/voxtral-3-audio-limits/2026-10-26.md),
  [API reference](../../sources/mistral.ai/audio-speech-api-reference/2026-10-26.md)). The only
  numeric ceiling anywhere is the aggregator's: 4,096-token context and 3,276 maximum completion
  tokens ([OpenRouter](../../sources/openrouter.ai/voxtral-mini-tts-3-0/2026-10-26.md)).
- **An emotion tag can truncate the audio.** Documented failure mode: "A tag before a long sentence
  can end the audio early, at a comma. Keep tagged sentences short, or split a long sentence in two"
  ([troubleshooting](../../sources/mistral.ai/voxtral-tts-3-troubleshooting/2026-10-26.md)).
- **Unknown tag values fail silently.** "The API doesn't reject it, and the tag isn't spoken"
  ([troubleshooting](../../sources/mistral.ai/voxtral-tts-3-troubleshooting/2026-10-26.md),
  [limits](../../sources/mistral.ai/voxtral-3-audio-limits/2026-10-26.md)).
- **Style instructions are advertised but off.** "Not available at launch" appears in the feature
  table, the request-field table and the error table; a request that sends one gets a 422
  ([docs overview](../../sources/mistral.ai/voxtral-tts-3-text-to-speech-overview/2026-10-26.md),
  [troubleshooting](../../sources/mistral.ai/voxtral-tts-3-troubleshooting/2026-10-26.md)).
- **No consent or verification step for cloning.** The voice-cloning page's reference-clip "Content:"
  list renders empty, and the concepts page ships a "Cloning and consent" heading with no body. No
  identity check, authorisation statement, or prohibited-voice rule is captured anywhere
  ([voice cloning](../../sources/mistral.ai/voxtral-tts-3-voice-cloning/2026-10-26.md),
  [concepts](../../sources/mistral.ai/voxtral-tts-3-voices-concepts/2026-10-26.md)).
- **No watermark or provenance statement.** Nothing in the docs, card, API schema or host record
  mentions a marker or C2PA. Absence of documentation is not proof of absence
  ([API reference](../../sources/mistral.ai/audio-speech-api-reference/2026-10-26.md)).
- **Cloning is unreachable through the aggregator.** All three OpenRouter endpoints set
  `supports_voice_cloning: false`, so an OpenRouter integration cannot use the model's headline
  feature even though Mistral's API documents it
  ([OpenRouter](../../sources/openrouter.ai/voxtral-mini-tts-3-0/2026-10-26.md)).
- **No weights, no second inference host.** Premier class, empty licence array, no Hub repository for
  the 3.0 model; fal and Replicate do not list it. Mistral's own endpoints (plus a pass-through
  aggregator) are the whole surface
  ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md),
  [weights check](../../sources/huggingface.co/voxtral-4b-tts-2603/2026-10-26.md); fal and Replicate
  searched 2026-10-26).
- **Preview-stage behaviour churn.** Silent updates are allowed, and a realtime session reports a
  `-13` snapshot behind the `-3-0` alias
  ([lifecycle policy](../../sources/mistral.ai/model-lifecycle-policy/2026-10-26.md),
  [realtime](../../sources/mistral.ai/voxtral-tts-3-realtime-sessions/2026-10-26.md)).
- **The board's number is filter-dependent.** Per-slice scores span 1139.8–1358.8, wider than the
  ±14 interval on any single row ([AA](../../sources/artificialanalysis.ai/voxtral-3-tts/2026-10-26.md)).
- **Saved voices expire by default.** `retention_notice` defaults to 30 days, with no documented
  behaviour at expiry and no way to audit which requests used a voice
  ([voice library](../../sources/mistral.ai/voxtral-tts-3-voice-library/2026-10-26.md)).

## Access, pricing, licensing

### Billing basis

| Route | Price | Basis | Notes |
| --- | --- | --- | --- |
| Mistral API (global) | **$13 / 1M chars** | input characters; output "—" | [pricing](../../sources/mistral.ai/voxtral-tts-3-pricing/2026-10-26.md) |
| Mistral API (EU / US) | 1.1× | same | regional upcharge applies to "input tokens, output tokens, cached reads, and cache writes" |
| OpenRouter (standard) | $13.00 / 1M chars | per character | two endpoints, P50 0.46 s / 0.49 s |
| OpenRouter (EU in-region) | $14.30 / 1M chars | per character | exactly $13 × 1.1; "fails closed" |
| Voxtral TTS (predecessor) | $16 / 1M chars | per character | still listed |

Sources: [pricing](../../sources/mistral.ai/voxtral-tts-3-pricing/2026-10-26.md),
[regional inference](../../sources/mistral.ai/regional-inference/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/voxtral-mini-tts-3-0/2026-10-26.md).

Three pricing anomalies are preserved rather than resolved:

1. **The schedule's second column** shows "$1.3 /M Chars" under a "Cached input" header, a 10×
   discount repeated on every audio row including per-minute transcription rows where a cache has no
   meaning. It is treated as a template artefact, not a real price
   ([pricing](../../sources/mistral.ai/voxtral-tts-3-pricing/2026-10-26.md)).
2. **Mistral's own marketing FAQ says the opposite of its own schedule:** "speech models are per
   minute" ([pricing](../../sources/mistral.ai/voxtral-tts-3-pricing/2026-10-26.md)).
3. **No character-counting rule is published** — whether whitespace, tags or the reference-audio
   payload are billed is undocumented.

Adjacent, not part of this model: the Voxtral voice-agent API is priced at "$0.04/min with Mistral
Small 4 for reasoning" and "$0.08/min with larger model", bundling STT, LLM and TTS
([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md)).

### Licensing

- **No weights, no licence grant.** The model card is badged "Premier" with `licenses: []` and has no
  weights section; the Mistral organisation's Hub account holds five Voxtral repositories and none is
  Voxtral 3 TTS ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md),
  [weights check](../../sources/huggingface.co/voxtral-4b-tts-2603/2026-10-26.md)).
- **Use is governed by Mistral's service terms**, which this page did not capture. Nothing captured
  states commercial-use restrictions, output ownership, or a voice-cloning indemnity.
- **The predecessor is the open one, and it is non-commercial:** `license: cc-by-nc-4.0`, gated,
  built on `Ministral-3-3B-Base-2512`, 20 preset voices, 24 kHz
  ([weights](../../sources/huggingface.co/voxtral-4b-tts-2603/2026-10-26.md)). Artificial Analysis
  records it as `openWeights: true, openWeightsCommercial: false`
  ([AA](../../sources/artificialanalysis.ai/voxtral-3-tts/2026-10-26.md)).
- **Self-deployment exists only as a sales conversation:** the launch post says to "talk to our team"
  for on-premises or private cloud
  ([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md)).

## Unresolved questions

1. **Is there any input cap at all?** Mistral publishes none, the schema enforces none, and the
   aggregator caps at 4,096 tokens. Whether long text truncates, errors or is silently shortened is
   untested here ([limits](../../sources/mistral.ai/voxtral-3-audio-limits/2026-10-26.md),
   [OpenRouter](../../sources/openrouter.ai/voxtral-mini-tts-3-0/2026-10-26.md)).
2. **Two pace tags or five?** The reference table lists five; three other first-party pages say two
   ([emotion tags](../../sources/mistral.ai/voxtral-tts-3-emotion-pace-tags/2026-10-26.md)).
3. **18 or 22 preset languages, and 6 or 7 English (UK) voices?** The launch post, the language page
   and the voice library give three different answers
   ([launch post](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md),
   [languages](../../sources/mistral.ai/voxtral-3-audio-languages/2026-10-26.md),
   [voice library](../../sources/mistral.ai/voxtral-tts-3-voice-library/2026-10-26.md)).
4. **Where does `voxtral-mini-tts-latest` point today?** The card lists it as a 3.0 alias; the
   migration guide says it moves "within a month of GA", and the model is in Public Preview
   ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md),
   [migration](../../sources/mistral.ai/voxtral-2-to-3-migration/2026-10-26.md)).
5. **What is `voxtral-mini-tts-3-0-13`?** A snapshot suffix echoed only by the realtime session
   ([realtime](../../sources/mistral.ai/voxtral-tts-3-realtime-sessions/2026-10-26.md)).
6. **When does Voxtral TTS 2603 retire?** The migration guide has a "Deprecation timeline" heading
   with no content, and the models page does not list the model as deprecated
   ([migration](../../sources/mistral.ai/voxtral-2-to-3-migration/2026-10-26.md)).
7. **What consent or verification does cloning require?** Two relevant doc sections render empty —
   the voice-cloning page's "Content:" list and the concepts page's "Cloning and consent" body — and
   no policy text was found
   ([voice cloning](../../sources/mistral.ai/voxtral-tts-3-voice-cloning/2026-10-26.md),
   [concepts](../../sources/mistral.ai/voxtral-tts-3-voices-concepts/2026-10-26.md)).
8. **Is output watermarked or provenance-signed?** Undocumented on every route captured.
9. **Is the realtime ID the same checkpoint as the offline one?** One model card covers both, the
   realtime socket takes the offline ID, and nothing states whether quality differs.
10. **How good is it, independently, beyond one preference board?** No MOS study, no WER/CER table,
    no third-party listening test exists in this corpus.
11. **Why does no third-party serverless host carry it?** Whether the Premier class forbids
    redistribution or the model is simply too new (one week old at capture) is not stated
    ([model card](../../sources/mistral.ai/voxtral-tts-3-model-card/2026-10-26.md),
    [OpenRouter](../../sources/openrouter.ai/voxtral-mini-tts-3-0/2026-10-26.md)).

## Evidence status

**Evidence floor: met**, with one caveat about what the host record is.

- **First-party:** the model card (identity, stage, class, price, aliases), the launch post
  (positioning, dates, vendor evals), the Studio audio documentation set — overview, speech
  generation, voice concepts, voice library, voice cloning, emotion/pace tags, realtime sessions,
  troubleshooting, languages, formats, limits — the OpenAPI reference for `POST /v1/audio/speech`,
  the inference price schedule, the model lifecycle policy, the migration guide, the predecessor's
  model card and deprecated docs, and the predecessor's Hugging Face weights card.
- **Independent host record:** OpenRouter's model page and endpoints API. **Caveat:** every OpenRouter
  endpoint is `provider_name: "Mistral"`, so it is a pass-through that restates Mistral's price and
  measures Mistral's service — a host record, not a second implementation. fal and Replicate were
  checked on 2026-10-26 and do not carry the model.
- **Independent evaluation:** Artificial Analysis's TTS leaderboard, default view plus the embedded
  per-slice payload.

All records captured 2026-10-26.

**No direct tests have been run for this page.** Capability statements are vendor or host
documentation; the price is a published schedule; every quality number is either vendor-run with a
Gemini judge or an Elo from one preference board. Nothing here measures audio quality, cloning
fidelity, whether long inputs survive, or whether the delivered containers match the documented
24 kHz mono.

The next useful evidence would be: one 5,000-character script and one 50,000-character script through
`POST /v1/audio/speech` to find whether an input cap exists at all; a tag placed mid-sentence to
reproduce or refute the truncation-at-comma failure mode; the same 20-second reference clip through
`ref_audio`, through a saved voice, and through OpenRouter (where cloning is flagged unsupported); a
spectral and provenance check on each of the five containers for a watermark; a character-counting
test using tags and whitespace to see what the $13 schedule actually meters; and a blind listening
test against Gemini 3.8 Flash TTS and Eleven v4 Turbo, the two models immediately above it on the
board.

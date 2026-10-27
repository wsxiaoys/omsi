# ElevenLabs Scribe v2

ElevenLabs' batch speech-to-text model `scribe_v2`, announced **2026-01-09** and available the same
day. It is a distinct model from Scribe v1 — its own model ID, its own price line, its own input
surface (keyterms, entity detection, transcript editing, multichannel) — and ElevenLabs explicitly
deprecates `scribe_v1` in its favour. Independent measurement puts it **4th on accuracy** at 2.2%
AA-WER on Artificial Analysis' non-streaming board, mid-pack on speed (69.5× real-time), and at
**$0.22/hour**, a price two hosts treat very differently: Replicate passes it through unchanged while
fal resells the same model at $0.48/hour.

The launch is inside the roster's one-year window (≥ 2025-10-26) by nine and a half months at the
capture date, so no out-of-window exception applies.

## Identity

- **Canonical name:** ElevenLabs Scribe v2. **Vendor model ID:** `scribe_v2`
  ([model IDs](../../sources/elevenlabs.com/scribe-v2-model-ids/2026-10-26.md)).
- **Vendor:** ElevenLabs. The model is served only as a hosted API; no weights are published
  (`openWeights: false` in Artificial Analysis' record,
  [AA](../../sources/artificialanalysis.ai/speech-to-text-leaderboard/2026-10-26/index.md)).
- **Aliases in circulation:** "Scribe v2" (vendor, AA), "Scribe V2" (fal group label), "ElevenLabs
  Speech to Text - Scribe V2" (fal display name), "Scribe v2, ElevenLabs" (AA model record),
  `elevenlabs/scribe-v2` (Replicate owner/model path).
- **Release:** **2026-01-09**, from the vendor launch post's own byline ("Published Jan 9, 2026") and
  "available today"
  ([launch post](../../sources/elevenlabs.com/scribe-v2-launch-blog/2026-10-26.md)). Artificial
  Analysis' embedded model record carries the same `releaseDate: 2026-01-09` — corroboration, not an
  independent derivation, since AA does not state where that field comes from
  ([AA](../../sources/artificialanalysis.ai/speech-to-text-leaderboard/2026-10-26/index.md)).
- **Host endpoints:**

| Route | Endpoint | Notes |
| --- | --- | --- |
| ElevenLabs | `POST /v1/speech-to-text` with `model_id: "scribe_v2"` | the reference endpoint; multipart form ([API reference](../../sources/elevenlabs.com/scribe-v2-convert-api/2026-10-26.md)) |
| fal | `fal-ai/elevenlabs/speech-to-text/scribe-v2` | `date` 2026-01-14, `status: active`, `license_type: commercial` ([fal](../../sources/fal.ai/elevenlabs-scribe-v2/2026-10-26/index.md)) |
| Replicate | `elevenlabs/scribe-v2` | latest version created 2026-05-06 ([Replicate](../../sources/replicate.com/elevenlabs-scribe-v2/2026-10-26/index.md)) |
| ElevenLabs Studio | in-product transcription surface | vendor says Studio now runs Scribe v2 for subtitles/captions ([launch post](../../sources/elevenlabs.com/scribe-v2-launch-blog/2026-10-26.md)) |

- **Siblings (separate IDs, not this model):** `scribe_v2_realtime` (streaming, $0.39/hour),
  `scribe_v2_medical` ("a fine-tune of Scribe v2" for clinical audio, billed at the same rate), and
  the deprecated `scribe_v1`
  ([model IDs](../../sources/elevenlabs.com/scribe-v2-model-ids/2026-10-26.md),
  [pricing](../../sources/elevenlabs.com/scribe-v2-api-pricing/2026-10-26.md)).

### Three dates, one model

| Date | Source | What it measures |
| --- | --- | --- |
| **2026-01-09** | ElevenLabs launch post; AA `releaseDate` | vendor announcement, GA the same day |
| 2026-01-14 | fal endpoint `date` | host listing, five days after launch |
| 2026-05-06 | Replicate latest version `created_at` | host listing, four months after launch |

Only the vendor date is presented as a release by its publisher. The other two are host catalogue
timestamps and do not compete with it.

### Identity ambiguity

- **No checkpoint or revision identifier exists on any route.** ElevenLabs publishes no snapshot name;
  fal has no served-revision field and Replicate pins only its own wrapper version, so which
  `scribe_v2` build each host runs cannot be determined. Claims here can be pinned to a capture date,
  not to a model revision.
- **The roster label matches the vendor ID**, so identity is not in doubt; what is unresolved is
  whether fal's and Replicate's wrappers pass through the full vendor model or a subset. Their input
  schemas differ from the vendor's and from each other, which is a host-surface difference, not
  evidence of different models.
- **Language count is stated three ways:** vendor docs "90+ languages" with 100 ISO-639-3 codes
  enumerated ([docs](../../sources/elevenlabs.com/scribe-v2-transcription-docs/2026-10-26.md)), fal
  "99 languages" ([fal](../../sources/fal.ai/elevenlabs-scribe-v2/2026-10-26/index.md)), and Replicate
  "90+ languages". fal's sentence is byte-identical to the `about` text on its Scribe **v1** endpoint,
  which suggests inherited copy rather than an independent count.

## Current assessment

The evidence supports a **current, generally available batch model** — not a preview, not a
repackaging of Scribe v1.

It is current: fal lists the endpoint `active` with `updated_at` 2026-10-20
([fal](../../sources/fal.ai/elevenlabs-scribe-v2/2026-10-26/index.md)); Replicate serves it; the vendor
model table carries `scribe_v2` with no deprecation marker and instead deprecates `scribe_v1`
([model IDs](../../sources/elevenlabs.com/scribe-v2-model-ids/2026-10-26.md)).

It is a distinct model, on four independent signals: a separate vendor model ID and price line; a
vendor-stated successor relationship (`scribe_v1` → replacement suggestion `scribe_v2`); a larger
vendor input surface (keyterms, entity detection/redaction, transcript editing, multichannel, speaker
library) that the older fal endpoint simply lacks; and an independent measurement of the current model
on a board where v1 does not appear at all.

Quality, as far as independent evidence goes, is **near the top but not at the top**: 2.2% AA-WER,
4th behind Fun-Realtime-ASR-preview (1.7%), MAI-Transcribe-2 (2.0%) and Voxtral Small Transcribe 3
(2.1%), level with Voxtral Mini Transcribe 3 (2.2%). Its 69.5× speed factor is mid-pack — an order of
magnitude slower than Parakeet TDT 0.6B V3 (687×) or Nova-3 (572×), which is consistent with the
vendor positioning it for "long and complex recordings" rather than throughput
([AA](../../sources/artificialanalysis.ai/speech-to-text-leaderboard/2026-10-26/index.md)).

## Documented capabilities

Vendor-documented, and where noted, restated by hosts:

- **Languages:** 90+; the docs enumerate 100 ISO-639-3 codes, with vendor-reported WER bands from
  "Excellent (≤5%)" for 36 languages down to "Moderate (>25% to ≤50%)" for 19. The bands do not cover
  the whole list: 8 listed languages (Cebuano, Chichewa, Fulah, Kabuverdianu, Lingala, Luo, Mandarin as
  `zho`, Umbundu) have no band, and Yoruba is banded without appearing in the list
  ([docs](../../sources/elevenlabs.com/scribe-v2-transcription-docs/2026-10-26.md)). Multi-language
  audio in one file is handled without manual segmentation
  ([launch post](../../sources/elevenlabs.com/scribe-v2-launch-blog/2026-10-26.md)).
- **Diarization:** up to **32 speakers**; `num_speakers` caps the expected count, `diarization_threshold`
  (default chosen per model, "0.22 usually") tunes over- vs under-splitting, and
  `detect_speaker_roles` labels `agent`/`customer` instead of `speaker_N` at +10%
  ([API reference](../../sources/elevenlabs.com/scribe-v2-convert-api/2026-10-26.md)). A workspace
  "speaker library" can match known speakers (`use_speaker_library`). Replicate restates the 32-speaker
  ceiling ([Replicate](../../sources/replicate.com/elevenlabs-scribe-v2/2026-10-26/index.md)).
- **Timestamps:** word- or character-level (`timestamps_granularity`), returned per token alongside
  `type` (`word`, `spacing`, `audio_event`) and `speaker_id`
  ([docs](../../sources/elevenlabs.com/scribe-v2-transcription-docs/2026-10-26.md)).
- **Audio event tagging:** non-speech sounds labelled, e.g. `(laughter)`, `(applause)`,
  `(footsteps)` — on by default at both hosts.
- **Keyterm prompting:** up to **1000** keyterms, <50 characters each, ≤5 words each, +20% surcharge;
  >100 keyterms imposes a 20-second minimum billable duration
  ([API reference](../../sources/elevenlabs.com/scribe-v2-convert-api/2026-10-26.md)). fal caps this at
  **100** keyterms and prices it as "+30% premium"; Replicate accepts 1000 as a comma-separated string.
- **Entity detection:** 65 entity types across `pii`, `phi`, `pci`, `other`, `offensive_language`,
  returned with text, type and character positions; `entity_redaction` replaces matches with
  `{REDACTED}`, `{ENTITY_TYPE}` or enumerated forms
  ([docs](../../sources/elevenlabs.com/scribe-v2-transcription-docs/2026-10-26.md),
  [API reference](../../sources/elevenlabs.com/scribe-v2-convert-api/2026-10-26.md)). Neither fal nor
  Replicate exposes this.
- **Transcript editing (experimental):** a natural-language `transcript_edit` instruction (≤2000
  characters) applied to the finished transcript, returned as `edited_transcript` with timestamps and
  speaker labels intact; cannot be combined with entity detection/redaction or multichannel.
- **Multichannel:** up to 5 channels, each transcribed independently with `channel_index`, or merged
  via `multichannel_output_style: combined`; each channel is billed at full duration.
- **Input beyond audio:** video files, and `source_url` accepting "YouTube video URLs, TikTok video
  URLs, and other video hosting services".
- **Async:** webhooks with 16 KB of `webhook_metadata`.
- **Compliance surface (vendor claims):** SOC 2, ISO 27001, PCI DSS L1, HIPAA, GDPR, EU and India data
  residency, zero-retention mode; ZRM requires enterprise and `enable_logging: false`
  ([launch post](../../sources/elevenlabs.com/scribe-v2-launch-blog/2026-10-26.md),
  [API reference](../../sources/elevenlabs.com/scribe-v2-convert-api/2026-10-26.md)).

### Marketing claims, labelled

- *"Scribe v2 achieves the lowest word error rate recorded on industry-standard benchmarks"*
  ([launch post](../../sources/elevenlabs.com/scribe-v2-launch-blog/2026-10-26.md)) — no benchmark,
  dataset or comparator named. The one independent measurement captured ranks it 4th, so the claim is
  not supported as stated.
- *"Over 98% transcription accuracy"* on the pricing card
  ([pricing](../../sources/elevenlabs.com/scribe-v2-api-pricing/2026-10-26.md)) — no test set,
  language, or measurement basis. AA's 2.2% AA-WER is consistent with ~98% on its own mix, but that is
  a different measurement, not corroboration of the card.
- *"35% fewer transcription errors on clinical audio than Scribe v2"* for Scribe v2 Medical — a sibling
  claim, unverified here; no independent measurement of the medical fine-tune was captured.

## Limitations and constraints

- **File size is stated two ways by the same vendor.** The capabilities page says "Files up to 3 GB"
  and repeats 3 GB as a key fact; the API reference says "The file size must be less than **5.0GB**"
  ([docs](../../sources/elevenlabs.com/scribe-v2-transcription-docs/2026-10-26.md),
  [API reference](../../sources/elevenlabs.com/scribe-v2-convert-api/2026-10-26.md)). Both hosts
  restate 3 GB. Unresolved; treat 3 GB as the safe ceiling.
- **Duration is stated two ways too.** Standard mode "up to 10 hours"; multichannel mode is
  "combined duration … less than 10 hours" in the FAQ but "1 hour (multichannel mode)" in the same
  page's key facts. Minimum input is 100 ms.
- **Format support is host-dependent.** The vendor accepts a long list of audio MIME types (AAC, AIFF,
  OGG, MP3, OPUS, WAV, FLAC, M4A, WebM and variants) plus nine video container types; fal's playground
  advertises only "mp3, ogg, wav, m4a, aac"; Replicate advertises MP3/WAV/M4A/FLAC/OGG/OPUS/WebM/AAC
  and several video containers.
- **No verbatim mode — except when there is.** The docs contain "No verbatim mode is available with
  Scribe v2, Scribe v2 Medical (batch), and Scribe v2 Realtime" immediately followed by a description of
  what `no_verbatim` removes, and the API reference documents `no_verbatim` as "Only supported with
  scribe_v2 model". Both hosts expose it. The likely reading is that the heading is a doc error, but
  the vendor text conflicts with itself and with its own API reference.
- **Feature combinations are restricted:** `transcript_edit` cannot be combined with entity
  detection/redaction or multichannel; `combined` multichannel output does not support entity detection
  or redaction; `detect_speaker_roles` requires diarization and forbids multichannel.
- **Host surface is narrower than the vendor's.** fal exposes five inputs total and always returns
  word-level timestamps; it has no entity detection, no editing, no multichannel, no `source_url`, no
  webhooks and a 100-keyterm cap. Replicate adds `num_speakers`, `timestamps_granularity`,
  `no_verbatim`, `temperature` and `seed`, but still no entity detection, editing or multichannel.
- **Defaults differ by host:** `diarize` defaults to `true` on fal and `false` on Replicate, so the same
  request returns different output shapes.
- **Billing includes silence.** "Silence counts toward the billed duration … there is no discount for
  silence" ([docs](../../sources/elevenlabs.com/scribe-v2-transcription-docs/2026-10-26.md)).
- **No weights, no self-hosting, no offline use.** The only licence surface found is ElevenLabs' general
  terms, which is what Replicate's "License" link points to.

## Access, pricing, licensing

Vendor list price is **per hour of audio**, and feature surcharges are additive per hour:

| Item | ElevenLabs | fal | Replicate |
| --- | --- | --- | --- |
| Base transcription | **$0.22 / hour** | **$0.008 / minute = $0.48 / hour** | **$0.003667 / minute = $0.22 / hour** ("ElevenLabs list price pass-through") |
| Keyterm prompting | +$0.050 / hour | +30% ("$0.0104/min") | included, no surcharge stated |
| Transcript editing | +$0.070 / hour | not offered | not offered |
| Billing granularity | every second, silence billed | per minute of input audio | per minute, **rounded up** per request |

Sources: [pricing](../../sources/elevenlabs.com/scribe-v2-api-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/elevenlabs-scribe-v2/2026-10-26/index.md),
[Replicate](../../sources/replicate.com/elevenlabs-scribe-v2/2026-10-26/index.md).

Two independent checks agree with the $0.22/hour figure: Artificial Analysis normalises it to **$3.67
per 1,000 minutes** (=$0.22/hour) and Replicate states it explicitly. **fal is 2.18× the vendor price
for the same model** — the widest host spread on any row this pass examined.

Credit accounting: subscriptions meter Speech to Text at "330 credits per minute" from a pool shared
with TTS and music, and the API pricing table lists included STT hours from 4 h 30 min to 4,500 h
across six plan columns
([pricing](../../sources/elevenlabs.com/scribe-v2-api-pricing/2026-10-26.md)).

Sibling prices for context: `scribe_v2_medical` is the same $0.22/hour with the same keyterm and
editing surcharges; `scribe_v2_realtime` is $0.39/hour (+$0.080 keyterm, +$0.120 editing).

Licensing: commercial use through the vendor API and through both hosts (`license_type: commercial` on
fal). No model weights are offered under any licence, so there is no open-weights question to answer.
HIPAA use requires a signed BAA with ElevenLabs Sales; ZRM is enterprise-only.

## Difference from Scribe v1

Three kinds of evidence, of different strength:

1. **Vendor statement (qualitative).** v2 "improves on the stability and accuracy of Scribe v1, with
   better handling of long-form audio, pauses, changes in tone, and extended silences"; v1 is listed as
   deprecated with `scribe_v2` as the replacement
   ([launch post](../../sources/elevenlabs.com/scribe-v2-launch-blog/2026-10-26.md),
   [model IDs](../../sources/elevenlabs.com/scribe-v2-model-ids/2026-10-26.md)). No number is attached
   to the improvement.
2. **Host-observable capability difference.** fal still serves both, in one group
   (`e11-speech-to-text`) with labels "Scribe V1" and "Scribe V2". The v1 endpoint
   (`fal-ai/elevenlabs/speech-to-text`, `date` 2025-02-27) accepts only `audio_url`, `language_code`,
   `tag_audio_events` and `diarize` — **it has no `keyterms` field at all**
   ([fal](../../sources/fal.ai/elevenlabs-scribe-v2/2026-10-26/index.md)). That is the concrete,
   checkable delta.
3. **Independent measurement.** Scribe v1 has **no row** on Artificial Analysis' STT board on
   2026-10-26, so no like-for-like v1-vs-v2 comparison is possible from the evidence captured; the
   "improved accuracy" claim is unquantified on both sides.

What this page cannot say is *how much* better v2 is. The vendor's claim and the missing v1 row leave
that open.

## Unresolved questions

- **3 GB or 5 GB?** Two first-party pages disagree; both hosts implement 3 GB. Which limit applies to
  which call path (direct upload vs `source_url`, or plan tier) is not stated.
- **1 hour or 10 hours for multichannel?** The same page gives both.
- **Does entity detection cost extra?** The docs say keyterms and transcript editing are surcharged and
  the pricing table prices exactly those two line items; entity detection and redaction have no listed
  price and no listed surcharge, but also no statement that they are free. `detect_speaker_roles` (+10%)
  is the only detection-adjacent surcharge documented.
- **Is fal's 100-keyterm cap a product limit or a wrapper limit?** The vendor allows 1000; fal documents
  100 with a 30% premium where the vendor says 20%. Whether fal passes keyterms through to the same
  vendor feature is not stated.
- **Which build runs on each host?** No revision identifier exists anywhere, so quality differences
  between vendor, fal and Replicate cannot be attributed to a model version.
- **Why is Scribe v1 absent from AA's board** while Zoom's unrelated "Scribe" models are present? The
  board's inclusion rule is not captured, so absence is not evidence of poor v1 quality.

## Evidence status

Evidence floor is met and exceeded. **No direct tests were run for this page**: nothing here was
reproduced, no audio was transcribed, and every accuracy number is either vendor-reported or
Artificial Analysis' own measurement.

- **First-party (5 records):** launch post, capabilities/transcription docs, model-ID registry and
  deprecation table, `POST /v1/speech-to-text` API reference, and the API pricing page — all captured
  2026-10-26.
- **Independent host records (2):** fal (catalogue metadata, OpenAPI schema and price strings, plus its
  Scribe v1 sibling endpoint) and Replicate (model page, version schema, billing config).
- **Independent measurement (1):** Artificial Analysis STT leaderboard, non-streaming and streaming
  tabs, with the embedded host-model JSON preserved as an artifact.

Contradictions are preserved rather than resolved: the 3 GB / 5 GB file cap, the 1 h / 10 h
multichannel duration, the "no verbatim mode" sentence against the documented `no_verbatim` parameter,
`zho` vs `cmn` for Mandarin (with Yoruba banded but unlisted and eight listed languages unbanded),
90+ vs 99 languages, and 56 vs 65 entity categories between the launch post and the current docs.
Where the launch post and the docs disagree, the docs are later and are treated as current; the
launch-post figures are recorded as launch-day state.

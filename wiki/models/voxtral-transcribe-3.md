# Voxtral Transcribe 3 (Mistral AI)

"Voxtral Transcribe 3" is Mistral's **speech-to-text family label**, not a single model ID. The
generation was released on **2026-10-20** and announced on **2026-10-22**, as three transcription
models: two offline tiers — `voxtral-small-transcribe-3-0` (Small, "our flagship transcription and
diarization model") and `voxtral-mini-transcribe-3-0` (Mini) — and a realtime sibling,
`voxtral-mini-transcribe-realtime-3-0` ([audio overview](../../sources/mistral.ai/voxtral-3-audio-overview/2026-10-26.md),
[Small card](../../sources/mistral.ai/voxtral-small-transcribe-3-model-card/2026-10-26.md),
[launch](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md)). The
roster row names the family; Artificial Analysis lists the two offline tiers separately, which is
why the row's discovery path carries both labels.

The generation is **in-window** (2026-10-20, inside the 2025-10-26 cutoff) and **in preview**: every
model card badges it "Public Preview" and "Premier", version `v 3.0`.

Three things define it against its predecessor: it **expands transcription from 13 languages to 50**,
it adds **realtime diarization, speaker references and turn detection**, and it **removes word-level
timestamps**, which are now a hard `400` error
([migration guide](../../sources/mistral.ai/voxtral-3-migrate-from-voxtral-2/2026-10-26.md)). At
capture no third party served the models: one aggregator proxies them to Mistral and nothing else
lists them.

## Identity

- **Canonical names:** Voxtral Small Transcribe 3 and Voxtral Mini Transcribe 3 — two distinct
  models with separate IDs, prices and measurements.
- **Vendor / developer:** Mistral AI (model lab and sole API operator).
- **Model IDs and aliases**, from the cards' payload and the migration table
  ([Small card](../../sources/mistral.ai/voxtral-small-transcribe-3-model-card/2026-10-26.md),
  [Mini card](../../sources/mistral.ai/voxtral-mini-transcribe-3-model-card/2026-10-26.md),
  [pricing](../../sources/mistral.ai/voxtral-3-pricing/2026-10-26.md)):

| Canonical | Model ID | Aliases | Price |
| --- | --- | --- | --- |
| Voxtral Small Transcribe 3 | `voxtral-small-transcribe-3-0` | `voxtral-small-transcribe-3`, `voxtral-small-transcribe-latest` | $0.004/min |
| Voxtral Mini Transcribe 3 | `voxtral-mini-transcribe-3-0` | `voxtral-mini-transcribe-3`, `voxtral-mini-transcribe-latest` | $0.0035/min |
| Voxtral Mini Transcribe Realtime 3 | `voxtral-mini-transcribe-realtime-3-0` | `voxtral-mini-transcribe-realtime-3` | $0.008/min |

- **Endpoint:** `POST /v1/audio/transcriptions` on Mistral's API, model field set to one of the IDs
  above; the realtime sibling uses a WebSocket session with `session.update`
  ([STT overview](../../sources/mistral.ai/voxtral-3-speech-to-text-overview/2026-10-26.md)).
- **Siblings in the same launch:** Voxtral TTS 3 (`voxtral-mini-tts-3-0`) and Voxtral TTS Realtime 3,
  plus a voice-agent SDK. "Voxtral 3 has five models: three turn speech into text, and two turn text
  into speech" ([audio overview](../../sources/mistral.ai/voxtral-3-audio-overview/2026-10-26.md)).
- **Predecessors:** Voxtral Mini Transcribe V2 (`voxtral-mini-2602`, 2026-02-04) and Voxtral Realtime
  (`voxtral-mini-transcribe-realtime-2602`, same date), plus the 2025-07-15 Voxtral 3B/24B audio-LLMs
  ([Transcribe 2 launch](../../sources/mistral.ai/voxtral-transcribe-2-launch/2026-10-26.md),
  [governance page](../../sources/mistral.ai/voxtral-small-family-ai-governance/2026-10-26.md)).
- **Host endpoints at capture:** Mistral's own API; the Vercel AI Gateway as a proxy
  (`mistral/voxtral-small-transcribe-3`, `mistral/voxtral-mini-transcribe-3`), whose provider table
  lists exactly one provider — Mistral
  ([gateway](../../sources/vercel.com/ai-gateway-voxtral-transcribe-3/2026-10-26/index.md)).
  Negative checks on 2026-10-26: no fal entry for any Voxtral model, no OpenRouter entry
  beyond the 2025 `mistralai/voxtral-small-24b-2507`, and no
  Voxtral row in Azure's "Mistral models sold directly by Azure" table
  ([Azure](../../sources/microsoft.com/azure-foundry-mistral-models/2026-10-26.md)).

### Dates

| Date | Source | What it measures |
| --- | --- | --- |
| **2026-10-20** | both model cards ("October 20, 2026"), AA `releaseDate`, gateway `released` | vendor release date |
| 2026-10-22 | launch post structured `datePublished` | announcement |
| 2025-08-21 | gateway `created` | catalogue-row creation, 14 months before the model; not a model date |

### Identity ambiguity

- **Small is a tier, not a rename.** The migration guide maps the 2025 `voxtral-small-2507` — a 24B
  open-weights audio-LLM that also generated text — onto Voxtral Small Transcribe 3, and the two are
  priced identically per minute ($0.004), while the new model is transcription-only and has no
  output-token price. Treating the migration mapping as a claim of continuity would be wrong: they
  are different products ([pricing](../../sources/mistral.ai/voxtral-3-pricing/2026-10-26.md)).
- **"Voxtral Transcribe 3" is used for the Small model** in the launch post's link label, while the
  same post calls it "Voxtral Small Transcribe 3" everywhere else and the docs' model table lists
  Mini first. The umbrella label is the source of the roster name; it is not an API ID.
- **The migration table's Small row is malformed**: its "Model ID" column gives
  `voxtral-small-transcribe-latest`, an alias, where every other row gives the fixed `-3-0` ID
  ([migration guide](../../sources/mistral.ai/voxtral-3-migrate-from-voxtral-2/2026-10-26.md)).
- **One page, two tiers.** Small and Mini are kept together here because the roster row is one and
  the docs present them as one offline pair, but every quality, price and speed statement below is
  attributed to the specific tier. AA measures them separately and they differ by 0.1 point of WER.

## Current assessment

**Current, in preview, and effectively single-source.** Both cards carry "Public Preview", which
Mistral defines as "Near-final before General Availability", allowing silent updates with no
guaranteed path to GA and one month's retirement notice
([lifecycle policy](../../sources/mistral.ai/model-lifecycle-policy/2026-10-26.md)). Neither model is
listed as GA, deprecated or retired anywhere in the captured corpus, and both are still priced and
documented as the current audio generation, while the Voxtral 2 audio docs have been moved into a
"Deprecated" group with no retirement date
([Voxtral 2 audio, deprecated](../../sources/mistral.ai/voxtral-2-audio-deprecated/2026-10-26.md)).

**It is a distinct generation, not a repackaging.** Four things separate it from Voxtral Transcribe 2:

1. **Language coverage** — 50 languages for both offline tiers versus 13 for Transcribe 2
   ([languages](../../sources/mistral.ai/voxtral-3-audio-languages/2026-10-26.md)).
2. **Diarization depth** — realtime diarization, speaker references from up to 8 clips, and turn
   detection are new (Transcribe 2's realtime model was documented as incompatible with `diarize`),
   and offline diarization gains segment timestamps
   ([diarization](../../sources/mistral.ai/voxtral-3-diarization/2026-10-26.md),
   [Voxtral 2 audio, deprecated](../../sources/mistral.ai/voxtral-2-audio-deprecated/2026-10-26.md)).
3. **Context biasing** — free-form phrases and sentences with no fixed entry count, replacing a
   100-term list, at the cost of sharing one 65,536-token window with the audio
   ([limits](../../sources/mistral.ai/voxtral-3-audio-limits/2026-10-26.md)).
4. **A new offline tier** — Transcribe 2 had one offline model; Transcribe 3 adds Small.

**It also regresses.** Word timestamps are gone (segment-only, `word` → `400`), and the published
audio-length limit disappeared: Transcribe 2 documented 3 hours per request and 1 GB per file,
Transcribe 3 documents neither.

**Independent accuracy is good but not best.** Artificial Analysis measures Small at **2.1% AA-WER
(3rd)** and Mini at **2.2% (5th)** on its English index, behind Fun-Realtime-ASR-preview (1.7%) and
MAI-Transcribe-2 (2.0%) ([AA](../../sources/artificialanalysis.ai/voxtral-transcribe-3/2026-10-26/index.md)).
Both improve on their predecessors at nearly the same price: Small 2.8% → 2.1% at the same
$4.00/1,000 min; Mini 3.6% → 2.2% for +$0.50.

**The two tiers are hard to tell apart on accuracy.** 0.1 point of AA-WER separates them, and Mini is
both cheaper and the *faster* of the two (76.9× vs 63.2× real-time). On the independent index, paying
14% more for Small buys the vendor's multilingual and diarization claims, not measurably better
English WER — and it is the slower model.

## Documented capabilities

**Offline (Small and Mini).** File transcription of recorded audio via `file`, `file_url` or
`file_id`; diarization with `speaker_id` per segment; segment timestamps; context biasing; language
pinning or auto-detection; streamed response for a complete file
([STT overview](../../sources/mistral.ai/voxtral-3-speech-to-text-overview/2026-10-26.md)).

**Realtime (Mini Realtime 3).** WebSocket sessions with turn detection, diarization, speaker
references, context biasing, and a configurable streaming delay of 80–1200 ms or 2400 ms. Realtime
segments carry a speaker label but no start/end times; diarization and turn detection cannot share a
session ([limits](../../sources/mistral.ai/voxtral-3-audio-limits/2026-10-26.md)).

**Languages.** 50 for both offline tiers, 45 "languages and dialects" for realtime. The docs give
counts only; the launch post adds that the 50 include "24 official EU languages and many low-resource
Asian and Indic languages" ([languages](../../sources/mistral.ai/voxtral-3-audio-languages/2026-10-26.md)).

**Vendor benchmark claims — marketing, vendor-run, no independent reproduction.** From the launch
post, on FLEURS-45 (macro-average WER over the intersection of languages all seven compared models
support): Small **4.1% forced / 4.0% inferred**, Mini **4.6% / 4.5%**, against Gemini 3.5 Transcribe
6.1%/4.5%, Scribe v2 4.9%, Whisper large-v3 16.0%/14.9%. Diarization cpWER: Small **18.4%**, Mini
18.6%, Pyannote Orchestrator 19.0%, Microsoft AI Transcribe 2 20.3%. Keyphrase recall (Earnings 22):
Small **94.6% with context vs 81.4% without**
([launch](../../sources/mistral.ai/voxtral-3-launch/2026-10-26.md)). These are the only per-language
and diarization numbers that exist; AA measures neither.

**Parameter count.** The launch post states the Mini variant is **4B parameters**. No other captured
source gives a parameter count for either tier.

**Audio in chat is a separate model.** Summaries, translations and Q&A over a recording are routed to
"a chat model that hears the audio", and at launch that is `voxtral-small-latest` — Voxtral 2, not
Transcribe 3 ([STT overview](../../sources/mistral.ai/voxtral-3-speech-to-text-overview/2026-10-26.md)).

## Limitations and constraints

- **Word timestamps removed.** `timestamp_granularities` accepts `segment` only; `word` returns a
  `400`. Subtitle and forced-alignment workflows that relied on word times have no replacement
  ([migration guide](../../sources/mistral.ai/voxtral-3-migrate-from-voxtral-2/2026-10-26.md)).
- **Overlapping speech is not supported**, yet the docs simultaneously instruct clients to expect
  overlapping segment times and to render both ([diarization](../../sources/mistral.ai/voxtral-3-diarization/2026-10-26.md)).
- **Audio length and file size are undocumented.** The limits table's "Uploaded file" value cell is
  empty in the page source, and the audio-formats page's file-transcription format cell is empty too,
  so neither the maximum duration, the maximum file size, nor the accepted containers are published
  ([limits](../../sources/mistral.ai/voxtral-3-audio-limits/2026-10-26.md),
  [formats](../../sources/mistral.ai/voxtral-3-audio-formats/2026-10-26.md)).
- **One 65,536-token budget for audio plus vocabulary.** Long recordings leave little room for
  `context_bias`, and exceeding the window returns `400` with nothing truncated. The cards display
  **32k** for the same field — unreconciled across first-party pages
  ([Small card](../../sources/mistral.ai/voxtral-small-transcribe-3-model-card/2026-10-26.md)).
- **Small's advertised scope contradicts the docs.** The card claims "translation, speech Q&A,
  summarization, and function calling"; the docs' own table says "Transcription only at launch" and
  routes those jobs to Voxtral 2. The card sentence is marketing copy
  ([audio overview](../../sources/mistral.ai/voxtral-3-audio-overview/2026-10-26.md)).
- **Closed weights, no licence.** No Voxtral 3 transcribe repository exists on Hugging Face; the
  `mistralai` org's five Voxtral repositories are all from the previous generation
  ([weights](../../sources/huggingface.co/voxtral-transcribe-3-weights/2026-10-26.md)). The cards name
  no licence (`licenses: []`) and AA records `openWeights: false`. The launch post's "self-deployment
  on your own infrastructure" claim has no public artefact behind it.
- **Preview lifecycle.** Silent updates are permitted and there is no guaranteed GA; the fixed `-3-0`
  ID is the only pin, and preview models carry one month's retirement notice
  ([lifecycle policy](../../sources/mistral.ai/model-lifecycle-policy/2026-10-26.md)).
- **Independent accuracy evidence is English-only.** AA's AA-WER is built from AgentTalk (English),
  VoxPopuli English and Earnings22 (English, ~8 hours total, weighted 50/25/25). It says nothing
  about the 50-language claim ([AA methodology](../../sources/artificialanalysis.ai/voxtral-transcribe-3/2026-10-26/index.md)).
- **No language list.** The 50 languages are never enumerated for transcription, so coverage of a
  specific low-resource language cannot be confirmed from the docs.

## Access, pricing, licensing

**Billing is per minute of audio**, with a cached-input rate at one tenth of the input rate and no
output rate ([pricing](../../sources/mistral.ai/voxtral-3-pricing/2026-10-26.md)):

| Model | Input | Cached input | vs predecessor |
| --- | --- | --- | --- |
| Voxtral Mini Transcribe 3 | $0.0035/min | $0.00035/min | Mini Transcribe 2 $0.003 (+17%) |
| Voxtral Small Transcribe 3 | $0.004/min | $0.0004/min | Voxtral Small 2 $0.004 (flat) |
| Voxtral Mini Transcribe Realtime 3 | $0.008/min | $0.0008/min | Realtime 2 $0.006 (+33%) |

The Vercel AI Gateway restates the same numbers as **$0.24 per hour of audio** and adds nothing on
top; its provider table has a single row, Mistral
([gateway](../../sources/vercel.com/ai-gateway-voxtral-transcribe-3/2026-10-26/index.md)). No host
discount or alternative price exists in the captured corpus. Batch and Priority tab prices were not
captured.

**Licensing is unstated.** The cards name no licence, the governance page the cards link to for
"Legal" lists only the 2025-07-15 Voxtral models — all classified "open source gpaim", a
classification these closed transcription models cannot share — and no terms page specific to
Voxtral 3 was found
([governance](../../sources/mistral.ai/voxtral-small-family-ai-governance/2026-10-26.md)). Commercial
use runs through Mistral's general terms; nothing in the corpus grants weight rights, because no
weights are published.

**Distribution is Mistral-only.** One aggregator proxies to Mistral; fal, OpenRouter, Azure and the
Hugging Face Hub have no Voxtral transcription entry (fal and OpenRouter checked 2026-10-26;
[Azure](../../sources/microsoft.com/azure-foundry-mistral-models/2026-10-26.md)). A reader who needs a
second provider, a data-residency alternative, or on-premises weights has none.

## Unresolved questions

1. **What is the maximum audio length and file size?** Neither is published for Transcribe 3, the
   two table cells that would carry them are empty in the page source, and no tokens-per-minute
   conversion is given for the 65,536-token window. Transcribe 2's documented 3 hours / 1 GB is not
   confirmed as inherited.
2. **32k or 65,536 tokens?** Cards say 32k; the audio overview and limits page say 65,536 shared with
   `context_bias`. No page reconciles them.
3. **Does Small do anything beyond transcription at launch?** The card claims translation, speech
   Q&A, summarization and function calling; two docs pages say transcription-only and route those
   jobs to Voxtral 2. Untested here.
4. **Where are the self-deployment artefacts?** The launch post says "Available today … or for
   self-deployment", no weights exist on Hugging Face, and no licence is named. Enterprise-only
   delivery would explain it and is not checkable.
5. **Why 50, 50+, 45 and 35 languages for the same generation?** Docs give 50 (offline) and 45
   (realtime); the launch post says "50+" and, for realtime, "over 35". No list is published for
   transcription, so the counts cannot be checked against each other.
6. **Is the Small tier worth 14% more than Mini?** Independent English WER differs by 0.1 point while
   Mini is faster; the vendor's multilingual and diarization numbers favour Small but are
   vendor-run and unpublished per language.
7. **What happens to Voxtral 2?** The migration guide's "Deprecation timeline" section is an empty
   heading and the deprecated audio docs give no retirement date.
8. **Are the models watermarked or provenance-marked?** Nothing in the vendor or host documentation
   mentions a marker. Absence of documentation is not proof of absence.

## Evidence status

Evidence floor: **met, with a caveat on the host half.** First-party: five Mistral documentation
pages (audio overview, speech-to-text overview, limits, languages, formats), the migration guide, the
pricing page, both model cards with their serialized payloads, the launch post, the Voxtral
Transcribe 2 launch post, the deprecated Voxtral 2 audio overview, the diarization page, the
governance page and the lifecycle policy. All captured 2026-10-26.

The **independent host record is a proxy, not a second serving stack**: the Vercel AI Gateway lists
both IDs with a release date and a $0.24/hour price but routes to exactly one provider, Mistral, and
restates vendor copy. **No third-party host serves these models at capture** — fal and OpenRouter have
no entry, Azure sells no Voxtral model, and no weights are on the Hub. The independent *measurement*
is Artificial Analysis (AA-WER, speed factor, normalised price, streaming latency), which is stronger
than a host record but measures English only. The page therefore separates what Mistral claims, what a
proxy restates, and what AA measured, and does not treat the gateway as corroboration of quality.

**No direct tests have been run for this page.** Every number is vendor-published, proxy-restated, or
AA-measured. Nothing here measures transcription accuracy on this page's own audio, diarization on
overlapping speech, latency from this machine, or whether the undocumented file-size limit is
generous or restrictive.

The next useful evidence would be: one long recording (30 minutes and 3 hours) through both tiers to
find the real duration ceiling and the token cost per minute; the same multi-speaker call with
overlapping speech through `diarize: true` on both tiers to test the "not supported" statement against
the 18.4% cpWER claim; a non-English sample in several of the claimed 50 languages to test coverage
the docs never enumerate; a word-timestamp request against both tiers to confirm the `400`; and a
check of the Batch/Priority price tabs, which were not captured.

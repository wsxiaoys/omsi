# Vercel AI Gateway — Voxtral Transcribe 3 entries (independent host record)

- Origin: two pages of the same publisher. (1) Gateway model catalogue API
  <https://ai-gateway.vercel.sh/v1/models> — `artifacts`: `models-excerpt.json`. (2) Gateway model
  page "Voxtral Small Transcribe 3" <https://vercel.com/ai-gateway/models/voxtral-small-transcribe-3>
  — `artifacts`: `model-page-small-transcribe-3.txt`. Retrieved 2026-10-26.
- Evidence kind: independent host / aggregator catalogue (routes to Mistral; not an independent
  measurement of quality).
- Publication date: not applicable (live catalogue). Release date field: `10/20/2026`.
- Capture date: 2026-10-26
- Relevant models: Voxtral Small Transcribe 3, Voxtral Mini Transcribe 3 (and Voxtral TTS 3, seen
  but not used here).
- Capture type: JSON excerpt plus rendered page text excerpt.

## Catalogue entries, verbatim (JSON)

| Field | `mistral/voxtral-small-transcribe-3` | `mistral/voxtral-mini-transcribe-3` |
| --- | --- | --- |
| `name` | "Voxtral Small Transcribe 3" | "Voxtral Mini Transcribe 3" |
| `owned_by` | "mistral" | "mistral" |
| `type` | "transcription" | "transcription" |
| `modalities.input` / `.output` | `["audio"]` / `["text"]` | `["audio"]` / `["text"]` |
| `created` | 1755815280 (2025-08-21) | 1755815280 (2025-08-21) |
| `released` | 1792454400 (2026-10-20) | 1792454400 (2026-10-20) |
| `pricing.transcription_duration_cost_per_second` | "0.00006667" (= $0.004/min) | "0.00005834" (= $0.0035/min) |
| `pricing.input` | "0" | "0" |
| `supported_specifications` | `["v2","v3","v4"]` | `["v2","v3","v4"]` |
| `zdr` / `no_training` | "all" | "all" |
| `description` | "Mistral's flagship transcription model, optimized for multilingual accuracy, speaker diarization, and domain-specific vocabulary." | "Fast, cost-efficient multilingual transcription with speaker diarization and vocabulary biasing, designed for high-volume audio processing." |

## Model page, verbatim

> "Price $0.24, Per hour of audio"

Provider table: a single row, **Mistral**, Input `$0.24/hr`, Release Date `10/20/2026`. Code sample:
`gateway.transcriptionModel('mistral/voxtral-small-transcribe-3')` with `experimental_transcribe`.

## Reading

- **This is a host record of addressability, not of independent capacity.** The gateway lists exactly
  one provider behind each model — Mistral — so requests still terminate at the vendor. The gateway
  restates vendor copy for the descriptions.
- **Price and date corroborate the vendor**: $0.24/hour of audio = $0.004/min, and 2026-10-20 matches
  the model cards. The per-second figures in the API round to $0.004 and $0.0035 per minute.
- **The `created` timestamp (2025-08-21) predates the model by 14 months** and is identical for both
  models and for unrelated Mistral entries; it is a catalogue-row creation time, not a model date. Use
  `released`.
- `zdr: "all"` and `no_training: "all"` are gateway policy flags (zero-data-retention and no-training
  eligibility), not vendor terms.

## Gaps

- No audio duration limit, language list, diarization support or benchmark data on the gateway pages.
- The gateway is a proxy; its presence does not establish a second serving stack or an independent
  price.

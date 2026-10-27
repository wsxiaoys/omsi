# Artificial Analysis: Speech to Text leaderboard — Scribe v2 rows

- Origin: Artificial Analysis, "Speech to Text AI Model & Provider Leaderboard",
  <https://artificialanalysis.ai/speech-to-text> (non-streaming) and
  <https://artificialanalysis.ai/speech-to-text/streaming> (streaming)
- Evidence kind: third-party evaluation (independent benchmark run by Artificial Analysis; AA-WER
  word-error measurement plus speed factor and normalised price)
- Publication date: none stated on the page. The embedded model record gives `releaseDate`
  **2026-01-09**. Capture date 2026-10-26
- Relevant models: Scribe v2 (`scribe_v2`, batch), Scribe v2 Realtime (`scribe_v2_realtime`)

## Captured rows

Non-streaming board, row "Scribe v2" / provider ElevenLabs:

| Field | Value |
| --- | --- |
| AA-WER index (v2) | **2.2%** (`aaWerIndex` 0.0218) |
| AA-AgentTalk WER | 1.51% (`aaSttDatasetWer` 0.015087) |
| VoxPopuli-Cleaned-AA WER | 1.74% (`voxpopuliCleanedWer` 0.017441) |
| Earnings22-Cleaned-AA WER | 3.95% (`earnings22CleanedWer` 0.039549) |
| Speed factor (median) | **69.5×** real-time (`medianSpeedFactor` 69.4900635036259; 5th–95th pct 47.4–96.5) |
| Price | **$3.67 per 1,000 minutes** of audio (`pricePer1kMinutes` 3.67) |
| `hostApiId` | `scribe_v2` |
| `openWeights` | `false` |
| `releaseDate` (AA's model record) | `2026-01-09` |

Streaming board, row "ElevenLabs Scribe v2 Realtime" (family `ElevenLabs Scribe v2`):

| Field | Value |
| --- | --- |
| AA-WER Streaming index (final transcription) | 3.59% (`aaWerStreamingIndex` 0.035946) |
| AA-AgentTalk streaming WER | 2.84% |
| VoxPopuli streaming WER | 2.27% |
| Earnings22 streaming WER | 6.43% |
| Time to first partial | 0.128 s (AA-AgentTalk), 0.150 s (VoxPopuli), 0.130 s (Earnings22) |
| Price | $6.50 per 1,000 minutes |
| `hostApiId` | `scribe_v2_realtime` |
| `releaseDate` | `null` |

Verbatim from the page's FAQ:

> The top speech to text models by accuracy (AA-WER) are: 1. Fun-Realtime-ASR-preview (1.7%), 2.
> MAI-Transcribe-2 (2.0%), 3. Voxtral Small Transcribe 3 (2.1%), 4. Scribe v2, ElevenLabs (2.2%), and
> 5. Voxtral Mini Transcribe 3 (2.2%). Lower AA-WER indicates better transcription accuracy.

## Methodology as stated on the page

> AA-WER is calculated as an audio-duration-weighted average of WER across ~8 hours from three
> datasets: AA-AgentTalk (50%), VoxPopuli-Cleaned-AA (25%), and Earnings22-Cleaned-AA (25%).

Speed factor is "audio file seconds transcribed per second of processing time", reported as "medians
across benchmark trials from the last 7 days" and measured on "an audio duration of 10 minutes".
Price is "estimated cost in USD to transcribe 1,000 minutes of audio, normalized across providers with
different billing models".

## Summary

The only independent measurement captured for Scribe v2. On the 2026-10-26 non-streaming board it is
**4th of the listed models on accuracy** at 2.2% AA-WER, behind Fun-Realtime-ASR-preview (1.7%),
MAI-Transcribe-2 (2.0%) and Voxtral Small Transcribe 3 (2.1%), and level with Voxtral Mini Transcribe 3
(2.2%). Its **speed factor of 69.5×** is mid-pack, well below the fastest batch models (Parakeet TDT
0.6B V3 at 687×, Nova-3 at 572×).

AA's normalised price of **$3.67/1,000 min = $0.22/hour** independently corroborates ElevenLabs' own
list price, and is far below fal's $0.48/hour resale of the same model.

AA's own model record dates the model **2026-01-09**, the same date as the vendor's launch post. That
is corroboration of the date rather than an independent derivation of it — AA's `releaseDate` field may
itself be sourced from vendor announcements, and the record states no basis for it.

## Gaps

- No per-language WER, so the vendor's per-language bands cannot be checked.
- The board does not state which vendor build or host endpoint was benchmarked; `hostApiId`
  `scribe_v2` is ElevenLabs' own API ID, which suggests AA called ElevenLabs directly rather than fal
  or Replicate.
- AA's methodology page was not captured, so the dataset composition beyond the percentages and the
  normalisation formula are unverified here.
- Scribe v1 has **no row** on this board, so no like-for-like AA comparison of v1 vs v2 is possible
  from this capture.

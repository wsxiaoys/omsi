# Artificial Analysis — Speech to Text leaderboard: Voxtral Transcribe 3 entries

- Origin: Artificial Analysis, Speech to Text leaderboards —
  <https://artificialanalysis.ai/speech-to-text> (redirects to `/speech-to-text/non-streaming`) and
  <https://artificialanalysis.ai/speech-to-text/streaming>; methodology at
  <https://artificialanalysis.ai/methodology/speech-to-text>. Values read from the pages' embedded
  dataset (`artifacts`: `stt-nonstreaming-rows.json`, `stt-streaming-rows.json`,
  `methodology-excerpt.md`).
- Evidence kind: third-party independent measurement (WER, speed factor, price normalisation).
- Publication date: live leaderboard, not dated; capture date 2026-10-26.
- Capture date: 2026-10-26
- Relevant models: Voxtral Small Transcribe 3, Voxtral Mini Transcribe 3, Voxtral Mini Transcribe
  Realtime 3 (480 ms / 960 ms variants), and the Voxtral 2 entries they are compared against.

## Non-streaming board, verbatim field values

| Entry | `hostApiId` | Host | AA-WER | Median speed factor | Price / 1,000 min | `releaseDate` | `openWeights` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Voxtral Small Transcribe 3 | `voxtral-small-transcribe-3-0` | Mistral | **2.1%** (`aaWerIndex` 0.0209) | 63.2× (p05 49.2, p95 73.8) | $4.00 | 2026-10-20 | false |
| Voxtral Mini Transcribe 3 | `voxtral-mini-transcribe-3-0` | Mistral | **2.2%** (`aaWerIndex` 0.0222) | 76.9× | $3.50 | 2026-10-20 | false |
| Voxtral Mini Transcribe 2 | `voxtral-mini-2602` | Mistral | 3.6% (0.0359) | 84.8× | $3.00 | 2026-02-04 | false |
| Voxtral Small | (2025 24B audio-LLM) | Mistral | 2.8% | 56.2× | $4.00 | — | — |

Per-dataset WER for the two Voxtral 3 entries (same fields, from the artifact):

| Entry | `aaSttDatasetWer` | VoxPopuli | Earnings22 |
| --- | --- | --- | --- |
| Voxtral Small Transcribe 3 | 1.65% | 1.51% | 3.55% |
| Voxtral Mini Transcribe 3 | 2.02% | 1.45% | 3.40% |

Board summary sentence on the page, verbatim: "The top speech to text models by accuracy (AA-WER)
are: 1. Fun-Realtime-ASR-preview (1.7%), 2. MAI-Transcribe-2 (2.0%), 3. Voxtral Small Transcribe 3
(2.1%), 4. Scribe v2, ElevenLabs (2.2%), and 5. Voxtral Mini Transcribe 3 (2.2%)."

## Streaming board, verbatim field values

| Entry | `hostApiId` | Price / 1,000 min | `aaWerStreamingIndex` | Time to first partial | Time to final transcript |
| --- | --- | --- | --- | --- | --- |
| Voxtral Mini Transcribe Realtime 3 480 ms | `mistral_voxtral_mini_transcribe_realtime_3_480ms` | $8.00 | 3.57% | 0.270 s | 0.825 s |
| Voxtral Mini Transcribe Realtime 3 960 ms | `mistral_voxtral_mini_transcribe_realtime_3_960ms` | $8.00 | 3.34% | 0.230 s | 1.190 s |
| Voxtral Mini Transcribe Realtime (2) | `voxtral-mini-transcribe-realtime-2602` | $6.00 | 5.24% | 0.320 s | 0.682 s |

## Methodology, verbatim (see `methodology-excerpt.md`)

> "Current evaluation: ~8 hours of audio across AA-AgentTalk, VoxPopuli-Cleaned-AA, and
> Earnings22-Cleaned-AA … we take a weighted average of 50% AgentTalk, 25% VoxPopuli, 25% Earnings22
> to produce our AA-WER result."

> "When models allow prompts, we provide: 'Transcribe the audio verbatim, outputting only spoken words
> in sequence.'"

Speed factor definition, verbatim: "Indicates how quickly a batch transcription API transcribes audio
compared to the actual length of that audio. A value above 1 means the service transcribes faster than
real time".

## Reading

- **This is the only independent measurement captured for either model.** It is English-only:
  VoxPopuli is the English subset, Earnings22 is English, AgentTalk is AA's own English voice-agent
  set. Nothing here tests the 50-language claim.
- **AA places Small 3rd and Mini 5th**, which is close to Mistral's own "ranks 3rd" line for Mini but
  on a different index and with a different ordering — the vendor's claim and AA's result should not
  be quoted interchangeably.
- **The Small/Mini gap is 0.1 point of AA-WER** (2.1% vs 2.2%) for +$0.50 per 1,000 minutes and a 22%
  lower speed factor (63× vs 77×). On this index the two tiers are nearly indistinguishable in
  accuracy.
- **Both Voxtral 3 entries beat their predecessors at the same or slightly higher price**: Small 2.8%
  → 2.1% at the same $4.00; Mini 3.6% → 2.2% for +$0.50.
- **Realtime 3 improves streaming WER by ~1.9 points** over Voxtral 2 realtime (3.34–3.57% vs 5.24%)
  at $8.00 vs $6.00 per 1,000 minutes, with lower time-to-first-partial.
- `openWeights: false` on every Voxtral 3 entry, consistent with the Hugging Face absence.

## Gaps

- The page's embedded selection state also carries duplicate rows where a Voxtral name is paired with
  another provider's `hostApiId` (for example `Voxtral Mini Transcribe 3` × SpaceXAI ×
  `grok-voice-transcribe-2.0`, price $1.67). Those are page-state artifacts — the same model name
  appears with its own ID and price elsewhere — and are **not** treated as a second host or an
  alternative price. They are preserved in the artifacts for inspection.
- No language coverage, diarization, or context-bias measurement is published by AA.
- No confidence intervals or run-to-run variance are exposed for AA-WER.

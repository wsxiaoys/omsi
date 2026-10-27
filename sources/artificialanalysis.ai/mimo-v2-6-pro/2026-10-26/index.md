# MiMo-V2.6-Pro — Artificial Analysis model page

- **Origin:** "MiMo-V2.6-Pro Intelligence, Performance & Price Analysis", Artificial Analysis,
  <https://artificialanalysis.ai/models/mimo-v2-6-pro>. Retrieved 2026-10-26.
- **Evidence kind:** third-party evaluation (independent measurement, composite index).
- **Publication date:** none stated; the page says "Released September 2026" and its serialized
  record carries `releaseDate: "2026-09-21"`.
- **Capture date:** 2026-10-26
- **Relevant models:** MiMo-V2.6-Pro (single entry, named "MiMo-V2.6-Pro").
- **Capture type:** rendered page text plus the page's serialized model record, saved verbatim as
  [`model-record.json`](model-record.json). Charts are client-rendered; values below are read from
  the embedded record, which is the data the charts plot.

## Header values, verbatim

| Field | Value |
| --- | --- |
| Classification | "Xiaomi • **Open weights** model • Released September 2026" |
| Intelligence | **46** — "Artificial Analysis Intelligence Index" (record: 46.3242) |
| Speed | 54.4 output tokens/s (record `medianOutputSpeed`) |
| Cost | "**$0.13** Cost per Intelligence Index task"; $0.43 in / $0.87 out per M, cache hit $0.0036 |
| Context window | "1M" |
| Input modality | "text, image, speech, and video input" (summary prose) |
| Output modality | text |
| Reasoning | "Yes — This page shows the reasoning version of this model. A non-reasoning variant may also exist." |

Summary, verbatim:

> "MiMo-V2.6-Pro is amongst the leading models in intelligence and well priced when comparing to
> other open weight models of similar size. It's also slower than average and somewhat verbose.
> The model supports text, image, speech, and video input, outputs text, and has a 1M tokens
> context window."

> "MiMo-V2.6-Pro scores 46 on the Artificial Analysis Intelligence Index, placing it well above
> average among comparable models (median: 19). When evaluating the Intelligence Index, it
> generated 140M tokens, which is somewhat verbose in comparison to the median of 140M."

> "Pricing for MiMo-V2.6-Pro is $0.43 per 1M input tokens (moderately priced, median: $0.43) and
> $0.87 per 1M output tokens (competitively priced, median: $1.40). On average, it costs $0.13 per
> task to evaluate MiMo-V2.6-Pro on the Intelligence Index."

> "At 54 tokens per second, MiMo-V2.6-Pro is slower than average (79)."

Index composition, verbatim: "Artificial Analysis Intelligence Index v4.3.2 incorporates 10
evaluations" — the record's evaluation list is AA-Briefcase, GDPval-AA, AutomationBench-AA,
Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience and AA-LCR.

## Record fields

| Field | Value |
| --- | --- |
| `isOpenWeights` / `openSourceCategorization` | **true** / "permissive" |
| `licenseName` / `modelWeightsSourceUrl` | **"MIT"** / `https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL` |
| `parameters` / `inferenceParametersActiveBillions` | 1020 / 42 |
| `contextWindowTokens` | 1,000,000 |
| `isReasoning` / `reasoningTokens` | true / 2000 |
| `knowledgeCutoffDate` | `null` |
| `hostModelCount` | 4 |
| `performanceDataSource` | `{"type":"firstParty","providerName":"Xiaomi"}` |
| `deprecated` | false |
| `openness.opennessIndex` | 52.78 (modelAvailability 6, methodology 3, post-training data 0.5, pre-training data 0) |
| input modalities | text, image, speech, video → text only |
| `timescaleData` | 54.41 tok/s median output; 3.53 s median time to first chunk |
| `timeToFirstAnswerToken` | 40.29 s total (3.53 s input + 36.76 s reasoning) |
| `endToEndResponseTime` | 49.48 s total |

## Measured evaluations

| Evaluation | AA value | Record field |
| --- | --- | --- |
| Intelligence Index v4.3.2 | **46.32** | `intelligenceIndex` |
| AA-Briefcase v1.1 | 1,510.67 Elo (95% CI 1,501–1,522) | `briefcaseBreakdown.overall` |
| GDPval-AA v2.1 | 1,691.26 Elo (CI 1,670–1,712) | `gdpval` |
| AutomationBench-AA | 58.6% | `automationBenchPartialScore` |
| Terminal-Bench 4.0 | 34.85% | `terminalBench40` |
| Terminal-Bench-Science 0.1 | 5.7% | `terminalBenchScience` |
| FrontierCode 1.1 | 45.4% | `frontierCode` |
| SciCode | 60.9% | `scicode` |
| Humanity's Last Exam | 49.4% | `hle` |
| CritPt | 26.6% | `critpt` |
| AA-LCR v1.1 (long context) | 86.3% | `lcr` |
| GDP.pdf (all-pass) | 19.2% | `gdpPdfAllPass` |
| AA-Omniscience accuracy / hallucination | 34.85% / 40.6% (index 8.38) | `omniscience*` |
| AnalystAgent | 37.5% | `analystAgent` |
| MMMU-Pro | `null` (not measured) | `mmmuPro` |
| Capability indexes | Finance 46.1, Strategy 47.8, Legal 44.8, Healthcare 41.0, Engineering 46.9, Economics 53.2 | `capabilities` |
| 3D Elo / code-to-video Elo | 983.1 (CI 952–1014) / 1,051.5 | `aa3dElo`, `code2videoElo` |

Cost and verbosity: **$0.1332 per index task** (input $0.0773 — of which cache write $0.0536,
cache read $0.0195, non-cached input $0.0042 — and output $0.0559, split reasoning $0.0326 /
answer $0.0233); 1,076 s per task; 64,276 output tokens per task (37,520 reasoning + 26,756
answer); 143.7M output tokens and 4.43B input tokens for the whole index run.

## Where AA and the vendor agree

- **Price**: AA's $0.435 / $0.87 / $0.0036 cache hit is exactly Xiaomi's list price.
- **Parameters and context**: 1020B total / 42B active / 1M — matches the model card and the
  technical report.
- **Terminal-Bench 4.0**: vendor 34.9%, AA 34.85% — a 0.05-point gap.
- **AutomationBench**: vendor 53.1% (v1.0.6), AA 58.6% (AutomationBench-**AA**) — different
  harness versions, not the same measurement.
- **GDPval-AA 2.1**: vendor 1673, AA 1,691.26 (CI 1,670–1,712) — the vendor's figure sits inside
  AA's interval.
- **Licence**: AA independently records MIT and points at the same Hugging Face repository.

## Where they diverge

- **AA-LCR 86.3%** is the strongest row on the page and is *not* in the vendor's table at all;
  conversely the vendor's internal MiMo Code Bench / MiMo Cyber Bench / MiMo Visual Coding have no
  AA counterpart.
- **Hallucination**: AA-Omniscience accuracy 34.85% with a 40.6% hallucination rate — the vendor
  publishes no calibration or hallucination row.
- **Verbosity**: AA's own summary calls the model "somewhat verbose … in comparison to the median
  of 140M" while reporting the identical 140M figure for both, so the sentence's own comparison is
  degenerate; the record shows 143.7M output tokens against that 140M median.
- **"Leading models in intelligence"** is scoped by AA to "open weight models of similar size"
  (median 19 for that peer set), not to the field: Kimi K3.1 Pro sits at 55 on the same index.

## Gaps

- One configuration only (reasoning on, default effort); no non-reasoning measurement, no
  per-provider breakdown in the record despite `hostModelCount: 4`.
- `mmmuPro` and other vision-language rows are null, so the multimodal claim is not independently
  scored here even though AA lists image/video/speech input.
- AA publishes no ordinal rank for this entry in the captured page text (no "#n of 221" string
  appears in the payload), so the roster's "Index 46" is confirmed but its position is not.
- No AA Cyber Index row exists, so the vendor's cyber benchmarks are unverified independently.

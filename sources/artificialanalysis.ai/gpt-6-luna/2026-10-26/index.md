# GPT-6 Luna — Artificial Analysis model page (independent benchmark)

- **Origin:** "GPT-6 Luna (max) — Intelligence, Performance & Price Analysis", Artificial
  Analysis, <https://artificialanalysis.ai/models/gpt-6-luna>; variant pages
  `…/models/gpt-6-luna-{xhigh,high,medium,low,non-reasoning}`. Retrieved 2026-10-26.
- **Evidence kind:** third-party evaluation (independent measurement: composite index plus
  AA-run benchmarks and AA-observed speed/cost).
- **Publication date:** none stated; the page reports "Released September 2026" and the
  embedded record carries `releaseDate: 2026-09-22`.
- **Capture date:** 2026-10-26
- **Relevant models:** GPT-6 Luna, listed as six variants under one release slug
  `gpt-6-luna` — `max` (default), `xhigh`, `high`, `medium`, `low`, `non-reasoning`.
- **Capture type:** directory capture — `index.md` plus `model-record.json` (the embedded
  model record for the `max` variant, extracted programmatically from the page's Next.js
  flight data) and `effort-variants.json` (index and effort metadata per variant). Charts are
  client-rendered; only printed text and the embedded records are recorded.

## Headline text, verbatim

> GPT-6 Luna (Max) is amongst the leading models in intelligence and well priced when
> comparing to other models of similar price. It's also faster than average, however
> somewhat verbose. The model supports text and image input, outputs text, and has a 1M
> tokens context window.

> GPT-6 Luna (Max) scores 38 on the Artificial Analysis Intelligence Index, placing it well
> above average among comparable models (median: 14). When evaluating the Intelligence
> Index, it generated 140M tokens, which is somewhat verbose in comparison to the median of
> 99M.

> Pricing for GPT-6 Luna (Max) is $0.10 per 1M input tokens (competitively priced, median:
> $0.24) and $0.50 per 1M output tokens (competitively priced, median: $0.82). On average, it
> costs $0.07 per task to evaluate GPT-6 Luna (Max) on the Intelligence Index.

> At 119 tokens per second, GPT-6 Luna (Max) is faster than average (114).

Ranking badges as printed: Intelligence **#11 / 172** (38); Speed **#65 / 149**
(118.6 output tokens/s); Cost **#26 / 68**; Verbosity **#42 / 68** (140M output tokens).
Also printed: "Cache Discount 90%", "Proprietary model", "Reasoning Yes", "This page shows
the reasoning version of this model. A non-reasoning variant may also exist", "8 API
providers".

Index composition, verbatim: "Artificial Analysis Intelligence Index v4.3.2 incorporates 10
evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0,
SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1".

## Effort variants, verbatim from the embedded records

| Variant | AA slug | Intelligence Index | Effort label |
| --- | --- | ---: | --- |
| GPT-6 Luna (Max) | `gpt-6-luna` | **38.12** | `max` (level 60) |
| GPT-6 Luna (Xhigh) | `gpt-6-luna-xhigh` | 34.56 | `xhigh` |
| GPT-6 Luna (High) | `gpt-6-luna-high` | 32.93 | `high` |
| GPT-6 Luna (Medium) | `gpt-6-luna-medium` | 29.93 | `medium` |
| GPT-6 Luna (Low) | `gpt-6-luna-low` | 21.53 | `low` |
| GPT-6 Luna (Non-reasoning) | `gpt-6-luna-non-reasoning` | 18.47 | non-reasoning |

All six share `releaseDate: 2026-09-22`, `price1mInputTokens: 0.1`,
`price1mOutputTokens: 0.5`, `contextWindowTokens: 1000000`, `deprecated: false`.

## Per-benchmark values from the `max` record

| AA field | Value |
| --- | --- |
| `intelligenceIndex` | 38.12 |
| `terminalBench40` | 12.63% |
| `terminalBenchScience` | 8.57% |
| `frontierCode` (1.1 Main) | 41.93% |
| `scicode` | 54.63% |
| `hle` | 38.51% |
| `critpt` | 19.43% |
| `mmmuPro` | 79.65% |
| `lcr` (AA-LCR v1.1) | 83.33% |
| `gdpval` (GDPval-AA v2.1 Elo) | 1444.72 |
| `briefcaseBreakdown.overall.elo` | 1336.19 |
| `automationBenchPartialScore` | 53.17% |
| `omniscienceAccuracy` | 43.78% |
| `omniscienceHallucinationRate` | 76.73% |
| `gdpPdfAllPass` | 22.8% |
| `analystAgent` | 43.75% |
| `harveyLab` | 3.33% |
| `mlcrOverall` | 26.11% |
| `medianOutputSpeed` | 118.57 tok/s |
| `medianTimeToFirstChunk` | 97.7 s |
| `intelligenceIndexCostPerTask.total` | $0.0678 |
| `intelligenceIndexOutputTokensPerTask.output` | 50,012 |

`knowledgeCutoffDate`, `gpqa`, `ifbench`, `tau2`, `tauBanking`, `livecodebench`, `aime25`
and `itBenchSre` are null in the record. `aa3dElo` is 1000 and `code2videoElo` 1029.65 —
both at the floor of those scales, i.e. no measured capability.

## What this establishes

- **The effort label is load-bearing.** One model spans **38 → 18** index points across
  six settings; "GPT-6 Luna" without an effort level is under-specified by nearly 20 points,
  and a non-reasoning run is a different model for comparison purposes.
- **Cost per index task ($0.07) is the cheapest in the GPT-6 family on AA's measure**, and
  the index (38) sits 14 points below GPT-6.1 Sol (52) at $0.72 per task.
- **The weaknesses are concentrated in agentic terminal work and calibration**: 12.6% on
  Terminal-Bench 4.0 and 8.6% on Terminal-Bench-Science against 38.5% HLE and 83.3% on
  long-context reasoning. A 76.7% hallucination rate on AA-Omniscience is the worst-looking
  number in the record.
- **Speed is unremarkable in absolute terms** (119 tok/s, 97.7 s to first chunk on AA's long
  prompts) even though it ranks above the median; the "fastest" label is about price and
  token economy, not latency.

## Gaps

- No per-variant cost-per-task or speed in `effort-variants.json` (the variant pages'
  records did not carry the cost/timescale blocks this extraction looked for).
- AA does not publish the raw transcripts or the harness settings per evaluation here.
- The 8-provider count is stated but the provider list was not captured (only the OpenRouter
  routing table was, in the [OpenRouter record](../../../openrouter.ai/gpt-6-luna/2026-10-26/index.md)).
- `knowledgeCutoffDate` is null, so AA cannot corroborate OpenAI's May 18, 2026 cutoff.
- AA's index version (v4.3.2) differs from the version OpenAI quoted for Astra; no
  vendor-published AA figure for Luna was captured to compare against.

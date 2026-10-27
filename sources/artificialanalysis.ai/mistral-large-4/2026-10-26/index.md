# Mistral Large 4 Preview — Artificial Analysis model page

- **Origin:** "Mistral Large 4 Preview — Intelligence, Performance & Price Analysis", Artificial
  Analysis, <https://artificialanalysis.ai/models/mistral-large-4>; provider page
  <https://artificialanalysis.ai/models/mistral-large-4/providers>. Retrieved 2026-10-26.
- **Evidence kind:** third-party evaluation (independent measurement, composite index).
- **Publication date:** none stated; the page says the model was "Released October 2026" and its
  record carries `releaseDate: 2026-10-06`.
- **Capture date:** 2026-10-26
- **Relevant models:** Mistral Large 4 (single entry, named "Mistral Large 4 Preview").
- **Capture type:** rendered page text plus the page's serialized model record, saved verbatim as
  [`model-record.json`](model-record.json). Per-benchmark charts are client-rendered; the values
  below are read from the embedded record, which is the same data the charts plot.

## Header values, verbatim

| Field | Value |
| --- | --- |
| Classification | "Mistral • **Proprietary model** • Released October 2026" |
| Intelligence | **38** — "# 70 / 221", "Artificial Analysis Intelligence Index" |
| Speed | 116.1 output tokens/s — "# 56 / 192" |
| Cost | "In $1.36 Out $4.18 Cache Discount 90%", "$1.61 Cost per Intelligence Index task", "# 81 / 121" |
| Verbosity | 200M output tokens from the Intelligence Index — "# 115 / 122" |
| Context window | "524k" — "~786 A4 pages of size 12 Arial font" |
| Input modality | "Supports: text and image" |
| Output modality | "Supports: text" |
| Reasoning | "Yes — This page shows the reasoning version of this model. A non-reasoning variant may also exist." |

Summary paragraph, verbatim:

> "Mistral Large 4 Preview is above average in intelligence and well priced when comparing to
> models of similar price. It's also faster than average, however very verbose. The model supports
> text and image input, outputs text, and has a 524k tokens context window."

> "Mistral Large 4 Preview scores 38 on the Artificial Analysis Intelligence Index, placing it
> above average among comparable models (median: 28). When evaluating the Intelligence Index, it
> generated 200M tokens, which is very verbose in comparison to the median of 81M."

> "On average, it costs $1.61 per task to evaluate Mistral Large 4 Preview on the Intelligence
> Index."

> "At 116 tokens per second, Mistral Large 4 Preview is faster than average (88)."

Index composition, verbatim: "Artificial Analysis Intelligence Index v4.3.2 incorporates 10
evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode,
Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1".

## Record fields (`model-record.json`)

| Field | Value |
| --- | --- |
| `isOpenWeights` | false |
| `openSourceCategorization` | "proprietary" |
| `licenseName` / `licenseUrl` / `modelWeightsSourceUrl` | `null` / `null` / `null` |
| `parameters` | 1000 (billions) |
| `inferenceParametersActiveBillions` | 49 |
| `sizeClass` | "large" |
| `contextWindowTokens` | 524288 |
| `isReasoning` / `reasoningTokens` | true / 2000 |
| `knowledgeCutoffDate` | `null` |
| `hostModelCount` | 2 |
| `performanceDataSource` | `{"type":"firstParty","providerName":"Mistral"}` |
| `deprecated` | false |

## Measured evaluations

| Evaluation | AA value | AA field |
| --- | --- | --- |
| Intelligence Index v4.3.2 | 38.4 | `intelligenceIndex` |
| AA-Briefcase v1.1 (Elo) | 1,390.8 (95% CI 1,380–1,402) | `briefcaseBreakdown.overall` |
| GDPval-AA v2.1 (Elo) | 1,433.85 (CI 1,410–1,457) | `gdpval` |
| AutomationBench-AA | 59.9% | `automationBenchPartialScore` |
| Terminal-Bench 4.0 | 26.8% | `terminalBench40` |
| Terminal-Bench-Science 0.1 | 4.8% | `terminalBenchScience` |
| FrontierCode 1.1 | 41.5% | `frontierCode` |
| SciCode | 54.2% | `scicode` |
| Humanity's Last Exam | 35.0% | `hle` |
| CritPt | 10.6% | `critpt` |
| AA-LCR v1.1 (long context) | 81.3% | `lcr` |
| GDP.pdf (all-pass) | 18.6% | `gdpPdfAllPass` |
| Harvey LAB-AA v1.1 | 3.1% | `harveyLab` |
| AA-Omniscience accuracy | 25.8% | `omniscienceAccuracy` |
| AA-Omniscience hallucination rate | 41.9% | `omniscienceHallucinationRate` |
| AA-Omniscience index | −5.3 | `omniscience` |
| MMMU-Pro | 76.4% | `mmmuPro` |

Capability indexes: Finance & Accounting 38.3, Strategy & Ops 42.2, Legal 37.0, Healthcare &
Medical 34.9, Engineering 37.6, Economics 43.6.

Speed and cost detail: median output speed 116.07 tok/s; time to first answer token 18.78 s on the
long workload; 521 s per Intelligence Index task; 200,168,141 output tokens for the index run;
$1,605.87 total index cost, $1.61 per task. Cache hit $0.14, cache write $1.36, blended 7:2:1
$0.788 per M tokens.

## Conflicts with first-party material

1. **"Proprietary model", `isOpenWeights: false`, `licenseName: null`.** The vendor calls ML4
   "open-weight" and dates the weights release to end-October 2026. AA's field is a statement about
   availability at measurement time, and at capture no weights existed. Both are correct about
   different things.
2. **Context window 524,288.** The vendor card says "1M" and OpenRouter reports 1,048,576 on the
   global endpoints. AA's number equals the EU-region endpoint's context on OpenRouter. AA does not
   say which endpoint it measured; the record's `hostModelCount` is 2.
3. **Active parameters 49B.** AA counts active parameters per token; the vendor card says 52B
   active. Hugging Face's release notice reconciles the two: "49 billion active parameters per
   token (52 billion including embeddings and output layers)".

## Where AA and the vendor agree

- **AutomationBench 59.9%**: identical to the vendor's "59.9%" for the same 657-workflow
  evaluation, which means the vendor is quoting AA's measurement rather than running its own.
- **Terminal-Bench 4.0**: vendor 28.3%, AA 26.8% — 1.5 points apart, vendor higher.
- **AA-Briefcase**: vendor "1,393 Elo", AA 1,390.8 — inside AA's own 95% interval.

## Where they diverge sharply

The vendor's framing is "performance competitive with the strongest open-source models globally"
and "state-of-the-art among open models" in cyber, finance and law. AA's general index puts it at
**38, #70 of 221**, below Kimi K3.1 Pro (55), and its legal agentic score (`harveyLab`, 3.1%) and
GDP.pdf all-pass (18.6%) are low in absolute terms. The vendor's vertical claims and AA's composite
are measuring different things; neither refutes the other, but the composite does not support a
general frontier claim.

## Gaps

- AA lists one configuration only (reasoning on, default effort); no per-effort breakdown.
- The provider page names a single provider, "Mistral", with a blended price of $0.79 per M
  tokens, 18.78 s time to first answer token, and 116.1 tok/s — so there is no cross-provider
  comparison to make.
- No AA Cyber Index exists at any URL tried (`/cyber`, `/models/cyber`, `/leaderboards/cyber` all
  404), so the vendor's "top five on the Artificial Analysis Cyber Index" could not be checked
  here.

# MiMo-V2.6-Flash — Artificial Analysis model page

- **Origin:** "MiMo-V2.6-Flash Intelligence, Performance & Price Analysis", Artificial Analysis,
  <https://artificialanalysis.ai/models/mimo-v2-6-flash>. Retrieved 2026-10-26.
- **Evidence kind:** third-party evaluation (independent measurement, composite index).
- **Publication date:** none stated; the page says "Released September 2026" and the record
  carries `releaseDate: "2026-09-21"`.
- **Capture date:** 2026-10-26
- **Relevant models:** MiMo-V2.6-Flash (single entry).
- **Capture type:** rendered page text plus the serialized model record, saved verbatim as
  [`model-record.json`](model-record.json).

## Header values, verbatim

| Field | Value |
| --- | --- |
| Classification | "Xiaomi • **Open weights** model • Released September 2026" |
| Intelligence | **38** (record: 37.8844) |
| Speed | 60.1 output tokens/s |
| Cost | "$0.06 Cost per Intelligence Index task"; $0.14 in / $0.28 out per M, cache hit $0.0028 |
| Context window | "1M" |
| Reasoning | "Yes — This page shows the reasoning version of this model. A non-reasoning variant may also exist." |

Summary, verbatim:

> "MiMo-V2.6-Flash is amongst the leading models in intelligence and well priced when comparing to
> other open weight models of similar size. It's also slower than average and very verbose. The
> model supports text and image input, outputs text, and has a 1M tokens context window."

> "MiMo-V2.6-Flash scores 38 on the Artificial Analysis Intelligence Index, placing it well above
> average among comparable models (median: 19). When evaluating the Intelligence Index, it
> generated 240M tokens, which is very verbose in comparison to the median of 140M."

> "Pricing for MiMo-V2.6-Flash is $0.14 per 1M input tokens (competitively priced, median: $0.43)
> and $0.28 per 1M output tokens (competitively priced, median: $1.40). On average, it costs $0.06
> per task to evaluate MiMo-V2.6-Flash on the Intelligence Index."

> "At 60 tokens per second, MiMo-V2.6-Flash is slower than average (79)."

**Internal inconsistency to preserve:** the summary prose says the model "supports text and image
input" while the record sets `inputModalityText/Image/Speech/Video` all to `true`. The Pro page's
prose for the same series says "text, image, speech, and video". One of the two AA texts is stale.

## Record fields

| Field | Value |
| --- | --- |
| `isOpenWeights` / `openSourceCategorization` | true / "permissive" |
| `licenseName` / `modelWeightsSourceUrl` | "MIT" / `https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL` |
| `parameters` / `inferenceParametersActiveBillions` | 309 / 15 |
| `contextWindowTokens` | 1,000,000 |
| `hostModelCount` | 4 (OpenRouter shows 10 routes; AA counts 4) |
| `performanceDataSource` | `{"type":"firstParty","providerName":"Xiaomi"}` |
| `timescaleData` | 60.14 tok/s; 3.02 s to first chunk |
| `timeToFirstAnswerToken` | 36.28 s total (3.02 s input + 33.26 s reasoning) |
| output tokens per task | 77,853 (58,022 reasoning + 19,831 answer) |
| index token totals | 244.7M output, 5.54B input |

## Measured evaluations

| Evaluation | AA value |
| --- | --- |
| Intelligence Index v4.3.2 | **37.88** |
| AA-Briefcase v1.1 | 1,486.06 Elo (CI 1,476–1,496) |
| GDPval-AA v2.1 | 1,615.21 Elo |
| AutomationBench-AA | 64.1% |
| Terminal-Bench 4.0 | 22.7% |
| Terminal-Bench-Science 0.1 | 4.3% |
| FrontierCode 1.1 | 42.1% |
| SciCode | 51.3% |
| Humanity's Last Exam | 35.1% |
| CritPt | 12.0% |
| AA-LCR v1.1 | 74.3% |
| GDP.pdf (all-pass) | 9.0% |
| AA-Omniscience accuracy / hallucination | 27.0% / 54.4% (index **−12.68**) |
| Capability indexes | Finance 40.3, Strategy 46.1, Legal 37.2, Healthcare 35.6, Engineering 37.3, Economics 43.6 |
| Cost per index task | **$0.0624** |

`aa3dElo`, `mmmuPro`, `ifbench`, `analystAgent` and the other vision rows are `null`.

## Pro versus Flash, on the same harness

| Row | Pro | Flash | Gap |
| --- | --- | --- | --- |
| Intelligence Index | 46.32 | 37.88 | −8.4 |
| Terminal-Bench 4.0 | 34.85% | 22.7% | −12.1 pts |
| GDP.pdf all-pass | 19.2% | 9.0% | −10.2 pts |
| HLE | 49.4% | 35.1% | −14.3 pts |
| CritPt | 26.6% | 12.0% | −14.6 pts |
| SciCode | 60.9% | 51.3% | −9.6 pts |
| AA-LCR | 86.3% | 74.3% | −12.0 pts |
| AA-Briefcase Elo | 1,510.7 | 1,486.1 | −24.6 |
| GDPval-AA Elo | 1,691.3 | 1,615.2 | −76.1 |
| **AutomationBench-AA** | 58.6% | **64.1%** | **+5.5 for Flash** |
| Cost per index task | $0.133 | $0.062 | −53% |
| Output speed | 54.4 tok/s | 60.1 tok/s | +10% |

Flash beats Pro on AA's AutomationBench (64.1% vs 58.6%) and on raw speed, and loses on every
other measured row. The vendor's own table has the same shape in the opposite direction: its
AutomationBench v1.0.6 row gives Pro 53.1 and Flash 52.3, i.e. Pro ahead — so the one benchmark
where the cheaper tier wins is also the one where vendor and independent harness disagree.

## Gaps

- No vision/multimodal rows measured, despite the multimodal claim.
- No non-reasoning configuration, no per-provider spread despite 10 host routes.
- The 309B parameter count is AA's, matching the card; the technical report says 310B and the
  safetensors index totals 310.76B.

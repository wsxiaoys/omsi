# Artificial Analysis: Muse Wonder model page and LLM leaderboard rows

- **Origin:** Artificial Analysis —
  - model page <https://artificialanalysis.ai/models/muse-wonder>
  - sibling model page <https://artificialanalysis.ai/models/muse-wonder-full>
  - LLM leaderboard <https://artificialanalysis.ai/leaderboards/models>
- **Evidence kind:** third-party evaluation (independent measurement: AA Intelligence Index and
  AA-run benchmarks) plus observed API speed/latency.
- **Publication date:** none stated; the page reports "Released October 2026" and the embedded
  record carries `releaseDate: 2026-10-12`.
- **Capture date:** 2026-10-26.
- **Relevant models:** "Muse Wonder (Max)" (`slug: muse-wonder`) and "Muse Wonder Full (Max)"
  (`slug: muse-wonder-full`). AA exposes one release slug per variant and selects `max` effort by
  default.
- **Capture type:** rendered page text plus JSON artifacts extracted from the page's embedded
  records: [`model-record.json`](model-record.json) and
  [`leaderboard-rows.json`](leaderboard-rows.json). Charts are client-rendered; the values below
  come from the printed text and embedded records.

## Header values (verbatim)

| Field | Muse Wonder (max) |
| --- | --- |
| Classification | "Meta • Proprietary model • Released October 2026" |
| Intelligence | **52** — "# 10 / 221", "Artificial Analysis Intelligence Index" |
| Speed | 197.4 output tokens/s — "# 16 / 192" |
| Cost | "In $4.00 Out $20.00", "Cache Discount 95%", "$3.27 Cost per Intelligence Index task", "# 107 / 121" |
| Verbosity | 130M output tokens from the Intelligence Index — "# 92 / 122" |
| Context window | "1M" — "~1573 A4 pages of size 12 Arial font" |
| Input modality | "Supports: text, image, speech, and video" |
| Output modality | "Supports: text" |
| Reasoning | "Yes — This page shows the reasoning version of this model. A non-reasoning variant may also exist." |

Summary paragraphs, verbatim:

> Muse Wonder (Max) is amongst the leading models in intelligence, but somewhat expensive when
> comparing to other models of similar price. It's also notably fast, however very verbose. The
> model supports text, image, speech, and video input, outputs text, and has a 1M tokens context
> window.

> Muse Wonder (Max) scores 52 on the Artificial Analysis Intelligence Index, placing it well above
> average among comparable models (median: 28). When evaluating the Intelligence Index, it generated
> 130M tokens, which is very verbose in comparison to the median of 81M.

> Pricing for Muse Wonder (Max) is $4.00 per 1M input tokens (expensive, median: $2.00) and $20.00
> per 1M output tokens (expensive, median: $10.00). On average, it costs $3.27 per task to evaluate
> Muse Wonder (Max) on the Intelligence Index.

> At 197 tokens per second, Muse Wonder (Max) is notably fast (85).

## Embedded record fields (verbatim)

```json
{"id":"ff2f3f3d-783f-4e27-8a39-47237501a313","slug":"muse-wonder",
 "name":"Muse Wonder (Max)","shortName":"Muse Wonder (max)","suffix":"Max",
 "releaseDate":"2026-10-12","knowledgeCutoffDate":null,"isReasoning":true,
 "reasoningTokens":2000,"effort":{"slug":"max","label":"max","level":60},
 "release":{"slug":"muse-wonder","name":"Muse Wonder","deprecatedTo":null},
 "deprecated":false,"isOpenWeights":false,"openSourceCategorization":"proprietary",
 "contextWindowTokens":1048576,"licenseName":null,"licenseUrl":null,
 "modelWeightsSourceUrl":null,"intelligenceIndex":52.393894697293,
 "price1mInputTokens":4,"price1mOutputTokens":20,"cacheHitPrice":0.2,
 "cacheHitDiscountPercent":0.95,"price1mBlended0To3To1":8,
 "intelligenceIndexCostPerTask":{"cost":{"total":3.2670566965220496}}}
```

Performance record fields: `medianOutputTokensPerSecond` 197.360135469824; `p05` 87.71, `q25`
130.35, `q75` 251.59, `p95` 417.72; `medianTimeToFirstChunk` 31.617816492 s; `medianTimeToFirstAnswerToken`
41.7515752434 s; `medianEndToEndResponseTime` 44.2850149313 s; `medianReasoningTimeSeconds`
10.1337587514 s.

## AA benchmark scores (Muse Wonder, max)

| Evaluation | Score |
| --- | --- |
| AA-Briefcase | 1658.65 (Elo) |
| GDPval-AA | 1770.34 |
| AutomationBench-AA (partial score) | 0.6809455131 |
| Terminal-Bench 4.0 | 0.5202020202 |
| SciCode | 0.6030092593 |
| Humanity's Last Exam | 0.5009267841 |
| GDP.pdf | 0.306 |
| CritPt | 0.2828571429 |
| AA-LCR | 0.8066666667 |
| AA-Omniscience | 25.4833333333 (accuracy 0.411; hallucination rate 0.2651) |
| Harvey LAB-AA | 0.10 |
| FrontierCode | 0.4647133333 |
| Terminal-Bench Science | 0.2571428571 |
| AA-MLCR | 0.2222222222 |

## Muse Wonder Full

Full is evaluated on its own AA page and recorded separately:
[`sources/artificialanalysis.ai/muse-wonder-full/2026-10-26/index.md`](../../muse-wonder-full/2026-10-26/index.md).
AA ranks it **4th of 704** at 56, with Speed and Cost rendered **N/A** and no price fields in its
record. Its per-benchmark scores are higher than Wonder's on most rows, but the access paths differ:
Wonder is pay-as-you-go, Full is a Muse Code subscription entitlement.

## Notes

- **AA is the only independent measurement captured for this page.** It ranks Muse Wonder **10th of
  221** by Intelligence Index, with 197 tok/s (16th of 192) and $3.27 cost per task (107th of 121).
- AA's **Muse Wonder Full row has no price or speed**, which is consistent with Full being sold only
  through a Muse Code subscription. AA still evaluated it, but the access path and date are not
  stated on the captured page.
- AA's `knowledgeCutoffDate` is `null`, `licenseName` is `null`, and `openWeights` is false.
- AA's `AutomationBench-AA` field is a **partial score** (0.681 for Wonder), while Meta's table
  reports 39.1 for the same model. The two are not the same metric; do not average or reconcile
  them.
- AA's Terminal-Bench 4.0 score (52.0%) matches Meta's table (52.0) but not Vals AI's host-displayed
  49.5%.

## Gaps

- No per-benchmark harness description on the model page; the page links its methodology but the
  captured text does not include the full prompt sets.
- No explanation of how Muse Wonder Full was accessed for evaluation, given no public API.
- AA does not publish a knowledge cutoff or a weights licence for either variant.
- Speed and latency are observed on the Meta-hosted API only; no per-provider comparison exists
  because OpenRouter routes to one provider.

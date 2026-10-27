# Artificial Analysis: Muse Wonder Full model page

- **Origin:** Artificial Analysis, "Muse Wonder Full (max) — Intelligence, Performance & Price
  Analysis", <https://artificialanalysis.ai/models/muse-wonder-full>.
- **Evidence kind:** third-party evaluation (independent measurement: AA Intelligence Index and
  AA-run benchmarks).
- **Publication date:** none stated; the page reports "Released October 2026" and the embedded
  record carries `releaseDate: 2026-10-12`.
- **Capture date:** 2026-10-26.
- **Relevant models:** Muse Wonder Full (`slug: muse-wonder-full`), the subscription-only sibling of
  `muse-wonder`.
- **Capture type:** rendered page text plus the page's embedded model record, saved as
  [`model-record.json`](model-record.json).

## Header values (verbatim)

| Field | Value |
| --- | --- |
| Classification | "Meta • Proprietary model • Released October 2026" |
| Intelligence | **56** — "# 4 / 704", "Artificial Analysis Intelligence Index" |
| Speed | "N/A — Output tokens per second — Unknown out of 4 units for Speed." |
| Cost | "In - Out -", "N/A Cost per Intelligence Index task", "Unknown out of 4 units for Cost." |
| Verbosity | 140M output tokens — "# 156 / 226" |
| Context window | "1M" |
| Input modality | "Supports: text, image, speech, and video" |
| Output modality | "Supports: text" |
| Reasoning | "Yes — This page shows the reasoning version of this model." |

Summary, verbatim:

> Muse Wonder Full (Max) is amongst the leading models in intelligence when comparing to other
> models. The model supports text, image, speech, and video input, outputs text, and has a 1M tokens
> context window.

> Muse Wonder Full (Max) scores 56 on the Artificial Analysis Intelligence Index, placing it well
> above average among comparable models (median: 13). When evaluating the Intelligence Index, it
> generated 140M tokens, which is somewhat verbose in comparison to the median of 81M.

## Embedded record fields (verbatim)

```json
{"id":"e994a6e0-d36b-4dab-8ae1-c1b469e4d9e2","slug":"muse-wonder-full",
 "name":"Muse Wonder Full (Max)","shortName":"Muse Wonder Full (max)","suffix":"Max",
 "releaseDate":"2026-10-12","knowledgeCutoffDate":null,"isReasoning":true,
 "reasoningTokens":2000,"effort":{"slug":"max","label":"max","level":60},
 "release":{"slug":"muse-wonder-full","name":"Muse Wonder Full","deprecatedTo":null},
 "deprecated":false,"isOpenWeights":false,"openSourceCategorization":"proprietary",
 "contextWindowTokens":1000000,"licenseName":null,"licenseUrl":null,
 "modelWeightsSourceUrl":null,"intelligenceIndex":55.8021199855616}
```

The record carries `price1mInputTokens: null`, `price1mOutputTokens: null`,
`cacheHitPrice: null`, and `medianReasoningTimeSeconds: null`; the page renders Speed and Cost as
"N/A".

## AA benchmark scores (Muse Wonder Full, max)

| Evaluation | Score |
| --- | --- |
| AA-Briefcase | 1729.32 (Elo) |
| GDPval-AA | 1857.09 |
| AutomationBench-AA (partial score) | 0.7133074973 |
| Terminal-Bench 4.0 | 0.5707070707 |
| SciCode | 0.6261574074 |
| Humanity's Last Exam | 0.5361445783 |
| GDP.pdf | 0.326 |
| CritPt | 0.3285714286 |
| AA-LCR | 0.8366666667 |
| AA-Omniscience | 30.15 (accuracy 0.4322; hallucination rate 0.2301) |
| Harvey LAB-AA | 0.1305555556 |
| FrontierCode | 0.4488656667 |
| Terminal-Bench Science | 0.3714285714 |

## Notes

- **AA ranks Full 4th of 704** by Intelligence Index at 56, but publishes **no price and no
  speed/latency** for it. This is consistent with Full being sold only through a Muse Code
  subscription rather than a metered API.
- Full's Index is 3.4 points above Muse Wonder's 52.4, and its per-benchmark scores are higher on
  most rows, but the access paths are not comparable: Wonder is pay-as-you-go, Full is a
  subscription entitlement.
- AA's `knowledgeCutoffDate`, `licenseName` and `modelWeightsSourceUrl` are all null; weights are
  not open.
- The page does not state how AA accessed Full for evaluation.

## Gaps

- No access path, evaluation date, price, speed or latency.
- No per-benchmark harness notes beyond the model page's general methodology.
- No independent verification that Full is a different checkpoint rather than a different serving
  configuration of Wonder.

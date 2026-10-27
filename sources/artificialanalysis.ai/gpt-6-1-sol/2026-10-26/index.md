# GPT-6.1 Sol — Artificial Analysis model page (independent benchmark)

- **Origin:** "GPT-6.1 Sol (max) — Intelligence, Performance & Price Analysis", Artificial
  Analysis, <https://artificialanalysis.ai/models/gpt-6-1-sol>; leaderboard context from
  <https://artificialanalysis.ai/leaderboards/models>. Retrieved 2026-10-26.
- **Evidence kind:** third-party evaluation (independent measurement: composite index plus
  AA-run benchmarks).
- **Publication date:** none stated; the page reports "Released September 2026" and the
  embedded record carries `releaseDate: 2026-09-29`.
- **Capture date:** 2026-10-26
- **Relevant models:** GPT-6.1 Sol, listed as five effort variants — `max`, `xhigh`, `high`,
  `medium`, `low` — under one release slug `gpt-6-1-sol`. The default-selected variant is
  `max`.
- **Capture type:** rendered page text plus a JSON artifact (`model-record.json`) extracted
  programmatically from the page's embedded model record. Charts are client-rendered; only
  the printed text and the embedded record are recorded here.

## Label → canonical model ID

The page title is "GPT-6.1 Sol (max)"; the embedded record's `shortName` is
"GPT-6.1 Sol (max)" and its release slug is `gpt-6-1-sol`. Three facts tie the label to
OpenAI's `gpt-6.1-sol`:

1. **Release date.** AA record: `releaseDate: 2026-09-29`. OpenAI's changelog dates the
   release to Sep 29, 2026
   ([changelog](../../../openai.com/gpt-6-1-sol-release-changelog/2026-10-26.md)).
2. **Price.** AA: $2.00 per 1M input / $10.00 per 1M output, cache discount 95%. That is
   `gpt-6.1-sol`'s first-party list price; GPT-6 Astra is $10/$50 and GPT-6 Sol is $2/$10
   with a $0.20 cached rate
   ([pricing](../../../openai.com/gpt-6-1-sol-pricing/2026-10-26.md)).
3. **Effort variants.** AA exposes exactly `max`, `xhigh`, `high`, `medium`, `low`, which is
   OpenAI's `reasoning.effort` set for this model — and notably **not** `none` or `minimal`,
   which Sol rejects.

**"Sol" is a tier name, not a codename.** OpenAI's guide lists GPT-6 Astra (highest
intelligence), GPT-6.1 Sol (balanced), GPT-6.1 Terra (fast and efficient), GPT-6 Luna
(fastest and most cost-effective), all with `gpt-6.*` model IDs
([family guide](../../../openai.com/gpt-6-family-guide/2026-10-26.md)). Sol also appears as a
tier in GPT-6 Sol and GPT-5.6 Sol.

## Headline text, verbatim

> GPT-6.1 Sol (Max) is amongst the leading models in intelligence and reasonably priced when
> comparing to other models of similar price. It's also slower than average, however fairly
> concise. The model supports text and image input, outputs text, and has a 1M tokens
> context window.

> GPT-6.1 Sol (Max) scores 52 on the Artificial Analysis Intelligence Index, placing it well
> above average among comparable models (median: 28). When evaluating the Intelligence
> Index, it generated 67M tokens, which is fairly concise in comparison to the median of
> 81M.

> Pricing for GPT-6.1 Sol (Max) is $2.00 per 1M input tokens (moderately priced, median:
> $2.00) and $10.00 per 1M output tokens (moderately priced, median: $10.00). On average, it
> costs $0.72 per task to evaluate GPT-6.1 Sol (Max) on the Intelligence Index.

> At 73 tokens per second, GPT-6.1 Sol (Max) is slower than average (89).

Index composition, verbatim: "Artificial Analysis Intelligence Index v4.3.2 incorporates 10
evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0,
SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1".

## Metric tiles

| Tile | Value |
| --- | --- |
| Intelligence | #13 / 221, index 52 |
| Speed | #126 / 192, 73.5 output tokens/s |
| Cost | #48 / 121, in $2.00 / out $10.00, cache discount 95%, $0.72 per index task |
| Verbosity | #54 / 122, 67M output tokens from the Intelligence Index |

## Per-evaluation scores (embedded record, max effort)

| Evaluation | Score | Cost/task | Time/task |
| --- | ---: | ---: | ---: |
| AA-Briefcase v1.1 (Elo) | 1555.1 | $2.31 | 1589 s |
| GDPval-AA v2.1 (Elo) | 1607.61 | $0.89 | 634 s |
| AutomationBench-AA | 64.9% | $0.30 | 193 s |
| Terminal-Bench 4.0 | 56.1% | $1.82 | 1495 s |
| SciCode | 54.2% | $0.04 | 54 s |
| Humanity's Last Exam | 52.9% | $0.08 | 106 s |
| GDP.pdf (all-pass) | 31.0% | $0.42 | 134 s |
| CritPt | 31.7% | $0.24 | 325 s |
| AA-Omniscience | 41.5 | $0.02 | 23 s |
| AA-LCR v1.1 | 83.0% | $0.20 | 15 s |

Additional fields: MMMU-Pro 86.0%, FrontierCode 1.1 49.1%, Terminal-Bench-Science 0.1 58.1%,
AA-AnalystAgent 50.0%, Harvey LAB-AA 6.9%, omniscience accuracy 62.1% with a 54.3%
hallucination rate, blended 3:1 price $4.00/1M, time per index task 527 s, AA-3D Elo 1119,
code2video Elo 1369.

## Summary

AA's independent read: 52 on the Intelligence Index v4.3.2, 13th of 221, one point below
GPT-6 Astra (52.7 on the same index version, per the embedded record for Astra). Cost per
index task $0.72 against Astra's much higher per-token price, but also **slower** than
average at 73.5 tok/s, and verbose on agentic tasks (108K output tokens per Terminal-Bench
task). The AA context figure is 1M tokens, a rounding of the vendor's 1,050,000.

## Gaps

- AA reports a single rounded integer (52) in prose; the embedded record gives 51.83, which
  is what the wiki's leaderboard capture rounds to 52
  ([leaderboard](../../leaderboards-models/2026-10-26.md)).
- Only the `max` variant has a full embedded record in this capture; the `xhigh`, `high`,
  `medium`, `low` variants are named but their scores are not in the captured data.
- No standard deviations, confidence intervals, or task counts are printed for the index
  itself.
- AA's context figure (1,000,000) differs from OpenAI's (1,050,000) and from the vendor's
  922,000 maximum input tokens; the discrepancy is not explained on either side.

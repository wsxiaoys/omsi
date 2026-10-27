# GPT-6.1 Terra — Artificial Analysis model page and leaderboard rows

- **Origin:** "GPT-6.1 Terra (Max) — Intelligence, Performance & Price Analysis", Artificial
  Analysis, <https://artificialanalysis.ai/models/gpt-6-1-terra>; leaderboard rows and variant
  records from <https://artificialanalysis.ai/leaderboards/models>. Retrieved 2026-10-26.
- **Evidence kind:** third-party evaluation (independent measurement: composite index plus
  AA-run benchmarks).
- **Publication date:** none stated; the page reports "Released October 2026" and the embedded
  release record carries `releaseDate: 2026-10-26`.
- **Capture date:** 2026-10-26
- **Relevant models:** GPT-6.1 Terra, listed as **six** effort variants under one release slug
  `gpt-6-1-terra`: `max`, `xhigh`, `high`, `medium`, `low`, `non-reasoning`. The
  default-selected variant on the model page is `max`.
- **Capture type:** rendered page text plus two JSON artifacts extracted programmatically from
  the page's embedded data — `model-record.json` (the full `max` record) and
  `leaderboard-variants.json` (all six variants as they appear in the leaderboard feed).
  Charts are client-rendered; only printed text and embedded records are captured.

## Label → canonical model ID

The page title is "GPT-6.1 Terra (Max)"; the embedded release record's `slug` is
`gpt-6-1-terra`. Four facts tie the label to OpenAI's `gpt-6.1-terra`:

1. **Release date.** AA: `releaseDate: 2026-10-26`. OpenAI's changelog dates the release to
   Oct 26, 2026 ([changelog](../../../openai.com/gpt-6-1-terra-release-changelog/2026-10-26.md)).
2. **Price.** AA: `price1mInputTokens: 1`, `price1mOutputTokens: 5`, `cacheHitPrice: 0.05`,
   `cacheWritePrice: 1.25`, `cacheHitDiscountPercent: 95`. That is `gpt-6.1-terra`'s
   first-party Standard list price and its 5%-of-input cache rule
   ([pricing](../../../openai.com/gpt-6-1-terra-pricing/2026-10-26.md)).
3. **Effort set.** AA exposes `max`, `xhigh`, `high`, `medium`, `low` **and**
   `non-reasoning` — six variants, which is OpenAI's six-value effort set including `none`
   ([model page](../../../openai.com/gpt-6-1-terra-model-page/2026-10-26.md)). Sol has five on
   AA because Sol rejects `none`.
4. **Tier position.** AA's release list carries GPT-6 Astra (2026-09-03), GPT-6.1 Sol
   (2026-09-29) and GPT-6.1 Terra (2026-10-26) as three distinct OpenAI releases, matching
   OpenAI's own tier list ([guide](../../../openai.com/gpt-6-1-terra-guide/2026-10-26.md)).

**"Terra" is a tier name, not a codename.** It appears in GPT-5.6 Terra and GPT-6.1 Terra, and
the tier skipped the 6.0 generation — there is no GPT-6 Terra.

## Headline text, verbatim

> GPT-6.1 Terra (Max) is amongst the leading models in intelligence and well priced when
> comparing to other models of similar price. It's also faster than average, however somewhat
> verbose. The model supports text and image input, outputs text, and has a 1M tokens context
> window.

> GPT-6.1 Terra (Max) scores 48 on the Artificial Analysis Intelligence Index, placing it well
> above average among comparable models (median: 28). When evaluating the Intelligence Index,
> it generated 130M tokens, which is somewhat verbose in comparison to the median of 81M.

> Pricing for GPT-6.1 Terra (Max) is $1.00 per 1M input tokens (competitively priced, median:
> $2.00) and $5.00 per 1M output tokens (moderately priced, median: $10.00). On average, it
> costs $0.40 per task to evaluate GPT-6.1 Terra (Max) on the Intelligence Index.

> At 91 tokens per second, GPT-6.1 Terra (Max) is faster than average (85).

Summary-panel ranks, verbatim: Intelligence **#25 / 221** (48, "4 out of 4 units"), Speed
**#88 / 192** (90.9 output tokens/s, "3 out of 4 units"), Cost **#32 / 121** ($0.40 per index
task, "2 out of 4 units"), Verbosity **#90 / 122** (130M output tokens, "3 out of 4 units").

The page also states "This page shows the reasoning version of this model. A non-reasoning
variant may also exist." — AA does carry the non-reasoning variant, as a separate leaderboard
row (see below).

## Intelligence Index by effort — all six variants

From the leaderboard feed (`leaderboard-variants.json`). Cost per task is AA's
`intelligenceIndexCostPerTask`; speed and latency are the leaderboard columns.

| AA variant | Intelligence Index | $/index task | Output tok/s | TTFT (s) | Total response (s) | Leaderboard position |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| GPT-6.1 Terra (max) | **48.11** | $0.40 | 91 | 189.33 | 194.83 | 22 |
| GPT-6.1 Terra (xhigh) | 45.36 | $0.19 | 91 | 21.67 | 27.17 | 31 |
| GPT-6.1 Terra (high) | 43.87 | $0.13 | 91 | 5.66 | 11.16 | 35 |
| GPT-6.1 Terra (medium) | 41.32 | $0.10 | 91 | 1.85 | 7.35 | 43 |
| GPT-6.1 Terra (low) | 36.21 | $0.05 | 91 | 1.30 | 6.80 | 56 |
| GPT-6.1 Terra (non-reasoning) | 33.49 | $0.11 | 91 | 1.02 | 6.51 | 67 |

Positions are row order on the 272-row leaderboard capture. AA's own summary panel ranks the
`max` variant **#25 of 221** on intelligence — a different denominator from the 272 rendered
rows, so the two rank numbers are not interchangeable. The effort slope is **14.6 index
points** from non-reasoning to max and **8×** in cost per task ($0.05 at `low` to $0.40 at
`max`) — but note the non-reasoning row costs *more* per task than `low` ($0.11 vs $0.05)
while scoring 2.7 points lower, and its TTFT is the fastest (1.02 s).

The wiki's existing Claude Haiku 5.5 capture independently recorded "GPT-6.1 Terra (high) 44"
as a board neighbour ([existing record](../../claude-haiku-5-5/2026-10-26.md)), matching
43.87 here — two captures of the same feed, taken the same day.

## Per-evaluation scores (`max` variant only)

From `model-record.json`. AA publishes full per-evaluation scores only for the `max` variant
in this capture; the other five variants appear with index and cost only.

| Evaluation | GPT-6.1 Terra (max) |
| --- | ---: |
| Terminal-Bench 4.0 | 55.6% |
| Terminal-Bench-Science 0.1 | 57.6% |
| FrontierCode 1.1 | 36.0% |
| SciCode | 55.1% |
| Humanity's Last Exam | 46.2% |
| CritPt | 28.0% |
| MMMU-Pro | 84.7% |
| AA-LCR v1.1 | 82.7% |
| GDP.pdf all-pass | 28.6% |
| GDPval-AA (Elo) | 1476.05 (95% CI 1453–1499) |
| AA-Briefcase (Elo) | 1401.68 (95% CI 1391.4–1412.86) |
| AutomationBench-AA | 60.2% |
| AA-Omniscience | 29.78 (accuracy 49.1%, hallucination 38.0%) |
| Domain indices | finance/accounting 47.1, strategy & ops 49.5, legal 49.0, engineering 49.1, economics 53.6 |

Cost and timing for the index run: **$0.40 per task** and **385 s per task**. GPT-6.1 Sol
(max) costs **$0.72** per task on the same index
([Sol record](../../gpt-6-1-sol/2026-10-26/index.md)) — Terra is 44% cheaper per task while
scoring 3.7 points lower.

Token counts behind the index run: 2,348M input and 128M output (of which 113M reasoning and
15M answer), i.e. ~35,100 output tokens and ~24,900 reasoning tokens per task. AA's prose
rounds the output total to 130M.

## Speed

`timescaleData.medianOutputSpeed` = **90.9 output tokens/s** and `medianTimeToFirstChunk` =
**189.3 s** on the long-prompt profile; AA's leaderboard rounds this to 91 tok/s.

Sibling rows from the same leaderboard capture, max effort:

| Model | Index | $/task | tok/s | TTFT (s) | Total (s) |
| --- | ---: | ---: | ---: | ---: | ---: |
| GPT-6.1 Terra (max) | 48 | $0.40 | 91 | 189.33 | 194.83 |
| GPT-6.1 Sol (max) | 52 | $0.72 | 77 | 284.31 | 290.78 |
| GPT-6 Astra (max) | 53 | $3.26 | 60 | 325.99 | 334.37 |
| GPT-6 Luna (max) | 38 | $0.07 | 119 | 97.70 | 101.92 |

Terra is faster than both Sol and Astra on both throughput and time-to-first-token at max
effort, and slower than Luna. That is the one place AA supports the "fast" half of OpenAI's
tier description.

The 189 s TTFT is effort-driven, not architectural: the same model shows 21.7 s at `xhigh`,
5.7 s at `high`, 1.9 s at `medium`, 1.3 s at `low` and 1.0 s at non-reasoning. Output
throughput is flat at 91 tok/s across all six variants.

GPT-5.6 Terra does not appear in this leaderboard capture, so the predecessor comparison here
rests on OpenRouter's echo of AA (42.1) rather than on an AA row
([host record](../../../openrouter.ai/gpt-6-1-terra/2026-10-26/index.md)).

## Open contradictions with the vendor

1. **Terminal-Bench-Science 0.1.** OpenAI's launch post claims Terra "surpasses GPT-6.1 Sol" on
   this evaluation at max reasoning
   ([announcement](../../../openai.com/gpt-6-1-terra-announcement/2026-10-26.md)). AA measures
   Terra at 57.6% and Sol at 58.1% — Terra *below* Sol by 0.5 points. Neither run is a
   controlled replication of the other.
2. **Terminal-Bench 4.0.** OpenAI claims 50.3% at max effort; AA measures **55.6%**. AA's
   number is higher, so this is harness divergence rather than a vendor overclaim, but the two
   figures should not be quoted interchangeably.
3. **Context window.** AA records `contextWindowTokens: 1000000`; OpenAI's model page says
   1,050,000 total with a 922,000 maximum input. Three numbers for overlapping concepts.

## Summary

AA's independent measurement puts Terra (max) at **48.11** on Intelligence Index v4.3.2 —
below GPT-6.1 Sol (51.83), GPT-6 Astra (52.67), and roughly level with Sol at `medium` (48 on
the board). It is the cheapest way into the low-40s-to-48 band, and the fastest GPT-6.1
variant, at the cost of the weakest coding and agentic scores in its own family.

## Gaps

- Per-evaluation scores exist only for `max`; the cost/quality curve inside the model is
  measured only at index level.
- `coding_index` and `agentic_index` are null in OpenRouter's echo of this model, and AA's page
  capture does not print separate coding/agentic indices.
- No AA run of the vendor's Agents' Last Exam or OSWorld 2.1 claims.

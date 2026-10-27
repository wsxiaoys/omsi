# xAI: "Introducing Grok 4.7" launch post

- Origin: xAI (SpaceXSI) news, "Introducing Grok 4.7", <https://x.ai/news/grok-4-7>
- Evidence kind: official announcement (vendor marketing with vendor-run benchmark table)
- Publication date: **2026-09-21** (byline on the page: "Sep 21, 2026")
- Capture date: 2026-10-26
- Relevant models: `grok-4.7` (roster row 88); comparison columns for `grok-4.6`

## Page text (verbatim, article body)

> SpaceXSI's most powerful model for coding and knowledge work. Twice as fast, at half the price
> of comparable models.
>
> Grok 4.7 is our most capable model for coding and knowledge work. It works longer on difficult
> tasks, checks its own work more carefully, and comes with our best-calibrated safeguards to
> date. Served at the same price and speed as Grok 4.6, it is highly competitive in its class.
>
> On CursorBench 4.0, which stresses longer-running coding tasks, Grok 4.7 is at the frontier in
> price-performance.
>
> Grok 4.7 uses a new, larger base model compared to Grok 4.6. It was trained with a longer
> reinforcement learning run on a harder mix of tasks, weighted toward problems that take many
> hours to complete. The model is better at verifying its own work and managing longer context. We
> also trained Grok 4.7 to natively understand the Grok Bot harness, making it better at
> conversational tasks and general knowledge work.
>
> Grok 4.7 is better at creating documents and presentations. In GDPval and AA Briefcase, AI is
> asked to work on tasks done by professionals such as lawyers, nurses, and financial analysts.
> Grok 4.7 improves upon Grok 4.6 on both benchmarks and performs comparably to other frontier
> models.
>
> Grok 4.7 was built with an entirely new safeguard stack. It is the strongest model we've tested
> on refusals and jailbreak resistance. In dual-use domains like cybersecurity and biological
> work, it leads on both utility for benign tasks and safe refusal on dangerous ones, topping
> LatchBio's biosafety benchmark at 62.4%.
>
> Grok 4.7 balances strong cyber defense capabilities with low refusal rates for legitimate use.
> It shows the highest safety on HackerBench v0.3, our benchmark for risky and malicious cyber
> tasks, allowing only 3.3% of risky dual-use prompts through while rarely blocking legitimate
> security work. We've also started giving select cybersecurity partners invite-only access to
> Grok 4.7's red-team capabilities for defense research.
>
> Grok 4.7 is available today in Cursor and Grok Build. It is also available through the Grok API,
> third-party coding harnesses, and model routers and cloud platforms.
>
> The model is priced starting at $2 per million input tokens and $6 per million output tokens. We
> also serve a fast variant with twice the output speed at twice the price.

The page also carries a "Cost / Tokens / Steps" scatter chart comparing "Fable 5.1, Opus 5,
Grok 4.7, GPT-5.6 Sol, and Sonnet 5" against "average cost per task" on CursorBench 4.0. Its axis
values are rendered as SVG tick labels only; **no per-model coordinates were extracted**, so the
scatter supports no number in this record.

## Benchmark table (vendor figures)

The table is a four-column grid. Column order was read from the HTML header cells, not inferred
from the rendered text, and is:

| # | Model (effort) | Input $/1M | Output $/1M |
| --- | --- | --- | --- |
| 1 | **Grok 4.7 (xHigh)** | $2 | $6 |
| 2 | Grok 4.6 (High) | $2 | $6 |
| 3 | GPT-5.6 Sol (Max) | $4 | $20 |
| 4 | Fable 5.1 (Max) | $10 | $50 |

Rows, in the same column order:

| Benchmark (domain) | Grok 4.7 xHigh | Grok 4.6 High | GPT-5.6 Sol Max | Fable 5.1 Max |
| --- | --- | --- | --- | --- |
| CursorBench 4.0 (software engineering) | **46.3%** | 40.4% | 41.7% | 51.8% |
| DeepSWE v1.1 (software engineering) | **71.0%\*** | 65.2% | 72.7% | 70.0% |
| EEBench (electrical engineering) | **64.0%** | 53.0% | 39.4% | 56.4% |
| AA Briefcase v1.1 (multi-hour office work) | **1,657** | 1,546 | 1,487 | 1,678 |
| Terminal-Bench 4.0 (multi-hour terminal work) | **37.6%** | 20.3% | 37.3% | 57.9% |
| Harvey Legal Agent Benchmark (legal work) | **19.6%** | 15.8% | 2.5% | 6.7% |
| HealthBench Professional (clinical reasoning) | **56.7%** | 48.5% | 60.5% | 62.1% |

Verbatim footnote on the table:

> \* high effort

> Token prices and benchmark scores for Grok 4.7, Grok 4.6, GPT-5.6 Sol, and Fable 5.1. Benchmarks
> are CursorBench 4.0, DeepSWE v1.1, EEBench, AA Briefcase v1.1, Terminal-Bench 4.0, Harvey Legal
> Agent Benchmark, and HealthBench Professional. An asterisk on Grok 4.7 DeepSWE marks a
> high-effort score.

The asterisk is a genuine inconsistency in the post: the Grok 4.7 column is headed **xHigh**, but
its DeepSWE row is marked as a **high-effort** score, so one cell in that column was not measured
at the effort level the column claims.

## Second chart: GDPval / AA Briefcase / EEBench (vendor figures)

Values read from the page's embedded bar-chart payload, saved verbatim as
[`benchmark-bar-charts.json`](benchmark-bar-charts.json):

| Benchmark | Fable 5.1 (max) | **Grok 4.7 (xhigh)** | Grok 4.6 (high) | GPT-6 Astra (max) |
| --- | --- | --- | --- | --- |
| GDPval (Elo) | 1735 | **1695** | 1605 | 1542 |
| AA Briefcase (Elo) | 1678 | **1657** | 1546 | 1569 |
| EEBench (accuracy %) | 56.4 | **64.0** | 53.0 | 69.3 |

The same EEBench figure (64.0% for Grok 4.7) appears in both charts, which is a consistency check
that passes. The comparison set differs between the two charts (GPT-6 Astra replaces GPT-5.6 Sol
and Fable 5.1 in the bar charts), and the AA Briefcase row agrees across both (1,657).

## What this establishes

- **The canonical launch date is 2026-09-21.** This is day-precise, first-party, and it matches
  the independent date Artificial Analysis records
  ([AA](../../../artificialanalysis.ai/grok-4-7/2026-10-26.md)). The model is inside the one-year
  window (on or after 2025-10-26) with room to spare.
- **xAI's own framing is that 4.7 is a new base model, not a repackage**: "a new, larger base
  model compared to Grok 4.6", a "longer reinforcement learning run", better self-verification and
  longer-context management, and native training on the Grok Bot harness.
- **"Served at the same price and speed as Grok 4.6"** — so the $2 / $0.50 / $6 schedule is
  inherited, not new, which matches the identical price tables on both model pages.
- The vendor's headline delta over 4.6 is large and consistent in direction across seven
  benchmarks: +5.9 CursorBench, +5.8 DeepSWE, +11.0 EEBench, +111 AA Briefcase Elo, +17.3
  Terminal-Bench 4.0, +3.8 Harvey, +8.2 HealthBench. Every one of those is a vendor-run number.
- The post still places Grok 4.7 **behind** Fable 5.1 on CursorBench, DeepSWE, AA Briefcase,
  Terminal-Bench 4.0, HealthBench Professional, and GDPval, and behind GPT-5.6 Sol on DeepSWE and
  HealthBench. The claim in the same post that it is "at the frontier in price-performance" on
  CursorBench is about the price/score ratio, not the score.

## What this does not establish

- **No methodology.** Prompt sets, sample sizes, scaffolds, repeats, and pass criteria are absent
  for every row. Nothing states whether these are single runs.
- **No independent confirmation of any row.** The only overlap with an independent measurement is
  Terminal-Bench 4.0 and GDPval, and both disagree in magnitude (see the model page).
- The safety claims (LatchBio 62.4%, HackerBench v0.3 3.3%, "strongest model we've tested on
  refusals and jailbreak resistance") are unattributed to any external auditor and give no
  baseline set. They are marketing until reproduced.
- The "twice as fast, at half the price of comparable models" subtitle is only half-checkable.
  "Half the price" is consistent with the table's input columns against GPT-5.6 Sol ($2 vs $4)
  and Fable 5.1 ($2 vs $10), but not with the output columns ($6 vs $20 and $50). "Twice as
  fast" has no speed figure anywhere on the post to test against.

## Gaps

- The CursorBench cost-per-task scatter was not extracted (SVG-only), so the price-performance
  claim cannot be checked even arithmetically.
- No statement of the snapshot ID or of whether the launch build equals the build served on
  2026-10-26.
- No context-length or output-length figures on the post; those come from the docs pages.

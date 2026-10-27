# Claude Fable 5.1

Anthropic's most expensive generally available tier, released **2026-09-01** at **$10 / $50**
per million input / output tokens — 2.5× Claude Opus 5.5 on both sides, and tied with Fable 5,
with cache reads cut to $0.25 per MTok ([model page](../../sources/claude.com/claude-fable-5-1-model-page/2026-10-26.md),
[release notes](../../sources/claude.com/claude-fable-5-1-release-notes/2026-10-26.md)). It is
the successor to Claude Fable 5, and Anthropic's docs still send "demanding reasoning and
long-horizon agentic work" to it after Opus 5.5 has been tried at higher effort
([models overview](../../sources/claude.com/models-overview/2026-10-26.md)).

Its identity has two parts that are easy to conflate. **Claude Mythos 5.1 is the same weights
under different safeguards**, restricted to vetted organizations
([system card](../../sources/anthropic.com/claude-fable-5-1-system-card/2026-10-26.md),
[announcement](../../sources/anthropic.com/claude-fable-5-1-announcement/2026-10-26.md)).
And the roster's "$10/$50 tier above Opus 5.5" is a *price and positioning* claim, not a
measured one: on Anthropic's own most recent comparison table, and on Artificial Analysis's
independent index, the cheaper Opus 5.5 scores higher (see
[Current assessment](#current-assessment)).

## Identity

- **Canonical name:** Claude Fable 5.1. **API ID:** `claude-fable-5-1`.
- **Vendor:** Anthropic. Proprietary; no weights published, no on-premises option.
- **Released:** 2026-09-01. **Status:** Active (latest). **Retirement:** not sooner than
  2027-09-01 ([model page](../../sources/claude.com/claude-fable-5-1-model-page/2026-10-26.md),
  [lifecycle](../../sources/claude.com/claude-fable-5-1-lifecycle/2026-10-26.md)).
- **Host endpoints**, all on the same undated ID
  ([model page](../../sources/claude.com/claude-fable-5-1-model-page/2026-10-26.md)):
  Claude API (`claude-fable-5-1`), Amazon Bedrock (`anthropic.claude-fable-5-1`, plus
  `us.` and `global.` inference profiles), Claude Platform on AWS, Google Cloud (Google
  managed and Anthropic managed), Microsoft Foundry
  ([Bedrock](../../sources/amazon.com/claude-fable-5-1-bedrock-model-card/2026-10-26.md),
  [Google Cloud](../../sources/cloud.google.com/claude-fable-5-1/2026-10-26.md)).
- **Aliases and leaderboard labels:** Artificial Analysis lists five effort variants —
  "Claude Fable 5.1 (max with fallback)" through "(low with fallback)"
  ([AA](../../sources/artificialanalysis.ai/claude-fable-5-1/2026-10-26.md)); OpenRouter uses
  `anthropic/claude-fable-5.1` with the dated `canonical_slug`
  `anthropic/claude-fable-5.1-20260831`
  ([OpenRouter](../../sources/openrouter.ai/claude-fable-5-1/2026-10-26.md)). Both resolve to
  `claude-fable-5-1`; see [label mapping](#label-mapping-artificial-analysis-to-canonical-id).
- **Siblings:** Claude Mythos 5.1 (same weights, permissive safeguards, restricted access);
  Claude Fable 5 (predecessor, retired no sooner than 2027-06-09, implying a 2026-06-09
  release, $10/$50 with $1 cache reads); Claude Opus 5.5 (2026-09-22, $4/$20), Claude Opus 5
  ($5/$25), Sonnet 5.5 and Haiku 5.5 below it in price; Claude Opus 4.8 and Opus 5 as the
  documented fallback targets for refusals
  ([what's new](../../sources/claude.com/claude-fable-5-1-whats-new/2026-10-26.md),
  [lifecycle](../../sources/claude.com/claude-fable-5-1-lifecycle/2026-10-26.md)).

### A distinct model, or a repackaging?

**Against Fable 5: distinct.** Three independent reasons, none of which would hold for a
relabel:

1. **New ID with a fixed snapshot.** `claude-fable-5-1` is a new canonical ID, and for the
   4.6 generation and later "the dateless ID is the canonical model ID for that release. It
   maps to a single, fixed model snapshot"
   ([lifecycle](../../sources/claude.com/claude-fable-5-1-lifecycle/2026-10-26.md)).
2. **Breaking API changes.** Forced tool use returns a 400; thinking blocks are readable only
   by Fable 5.1 and Mythos 5.1; editing any earlier turn invalidates thinking blocks; several
   advisor pairings 400
   ([what's new](../../sources/claude.com/claude-fable-5-1-whats-new/2026-10-26.md)). Code
   written for Fable 5 does not run unchanged.
3. **Different measured behaviour at the same list price.** Terminal-Bench-Science 0.1 goes
   24.7% → 52.6%, AutomationBench 17.1% → 31.4%, GDPval-AA v2 1723 → 1853
   ([system card](../../sources/anthropic.com/claude-fable-5-1-system-card/2026-10-26.md)).
   Not uniformly better: HealthBench Professional and ARC-AGI-1 fall slightly.

**Against Mythos 5.1: not a separate model.** "two configurations of a new large language
model from Anthropic, sharing identical model weights"
([system card](../../sources/anthropic.com/claude-fable-5-1-system-card/2026-10-26.md)). By
the repository's identity tests it is nonetheless *addressable* (`claude-mythos-5-1`, its own
access programmes, its own system-card rows), so a future page may be warranted; no such page
exists, and this one treats Mythos 5.1 as a deployment configuration.

## Current assessment

**Current, GA, not preview or deprecated.** Active, listed on all six platforms, GA on Google
Cloud, retirement floor a year out, and named in Anthropic's current model picker alongside
the 5.5 family ([Google Cloud](../../sources/cloud.google.com/claude-fable-5-1/2026-10-26.md),
[lifecycle](../../sources/claude.com/claude-fable-5-1-lifecycle/2026-10-26.md)).

**The price tier is above Opus 5.5; the measured capability is not.** This is the page's
central finding, and it rests on two independent comparisons:

- **Anthropic's own later table.** The Opus 5.5 system card (2026-09-22) carries Fable 5.1 as
  a comparison column. Opus 5.5 is ahead on **every row printed**: SWE-bench Pro 89.9 vs 81.2,
  SWE-bench Multilingual 93.9 vs 89.1, SWE-bench Multimodal 61.4 vs 54.7, Terminal-Bench 4.0
  66.4 vs 55.8, Terminal-Bench-Science 58.7 vs 52.6, HLE 64.4/67.7 vs 60.9/65.6, OSWorld 2.0
  81.8/48.7 vs 80.7/42.8, GDPval-AA v2.1 1846 vs 1735, AA-Briefcase 1822 vs 1678,
  AutomationBench 40.0 vs 31.4
  ([Opus 5.5 system card](../../sources/anthropic.com/claude-opus-5-5-system-card/2026-10-26.md)).
- **Artificial Analysis.** Index 53 for Fable 5.1 at max effort, against 58 for Opus 5.5 and
  56 for Sonnet 5.5 — two cheaper Claude models above it
  ([AA](../../sources/artificialanalysis.ai/claude-fable-5-1/2026-10-26.md)).

Both must be read with care. Fable 5.1's own system card predates Opus 5.5 by three weeks and
contains no Opus 5.5 column, so it cannot contradict the table above — it shows a large lead
over **Opus 5** on several benchmarks (Terminal-Bench-Science 52.6% vs 29.0%, AutomationBench
31.4 vs 26.9) and deficits on others (SWE-bench Multilingual 89.1 vs 89.5, Multimodal 54.7 vs
59.4, and Toolathlon-Verified 77.8% vs 80.6% Pass@1)
([system card](../../sources/anthropic.com/claude-fable-5-1-system-card/2026-10-26.md)). The
Toolathlon row is the sharpest: it was the one evaluation where Anthropic ran Fable 5.1 with
safeguards and an Opus 4.8 refusal fallback against unsafeguarded comparisons, and 3.4% of its
trials were partly or wholly completed by the weaker fallback model. The most defensible
reading is that Fable 5.1 was the top of the line on 2026-09-01 and was overtaken by Opus 5.5
on 2026-09-22 without a price change, while the documentation's recommendation language was
not revised.

**What still argues for it** is qualitative and partly vendor-sourced: long unattended runs,
research and document workflows, and a cache-read price of 2.5% of input that makes long
agentic sessions cheaper *relative to Fable 5* than the list price suggests. Anthropic's own
framing is an escalation path — "when your evals on Claude Opus 5.5 at higher effort still
don't meet your requirements" — which is a claim about the reader's own evals, not a benchmark
result. 22 named launch partners make specific claims (Browserbase 82% vs 74% for Opus 5;
Crosby RedlineBench 47.9 → 57.0; Millennium's rare-crash diagnosis), all unverifiable and
treated here as marketing.

**The cost claim is a workload claim.** "An estimated 25% less than Fable 5 for typical
workloads … up to approximately 45%" for highly agentic work
([announcement](../../sources/anthropic.com/claude-fable-5-1-announcement/2026-10-26.md)) comes
entirely from the cache-read cut ($1 → $0.25); input and output prices are unchanged. AA's
independent cost per index task is **$7.63** at max effort, against $5.98 for Opus 5.5 — so on
AA's workload the more expensive model is also more expensive per task
([AA](../../sources/artificialanalysis.ai/claude-fable-5-1/2026-10-26.md)).

## Documented capabilities

From the [model page](../../sources/claude.com/claude-fable-5-1-model-page/2026-10-26.md),
[what's new](../../sources/claude.com/claude-fable-5-1-whats-new/2026-10-26.md),
[Bedrock](../../sources/amazon.com/claude-fable-5-1-bedrock-model-card/2026-10-26.md) and
[Google Cloud](../../sources/cloud.google.com/claude-fable-5-1/2026-10-26.md) unless noted.

| Property | Value |
| --- | --- |
| Context window | 1M tokens (default and maximum), standard per-token pricing across the whole window |
| Max output | 128K tokens |
| Input | Text, images; PDF/file input documented by Google Cloud and OpenRouter |
| Output | Text only |
| Reasoning | Adaptive thinking, always on, not disableable; effort levels `low`/`medium`/`high`/`xhigh`/`max`, default `high` |
| Tool use | Function calling, strict tool use, structured outputs, web search, code execution, computer use, batch, prompt caching, count tokens |
| Knowledge cutoff | Jun 2026 (reliable and training data) |
| Tokenizer | Same as Fable 5 (introduced with Opus 4.7); ~30% more tokens than pre-4.7 models for the same text |
| Other | Multilingual; vision; mid-conversation effort changes and turn-scoped system messages (beta); progress updates between tool calls via `thinking.display: "updates"` (beta); text watermark and C2PA credentials |

**API constraints worth knowing before migrating:** `temperature`, `top_p`, `top_k` and
assistant prefill all return 400; the minimum cacheable prompt is 512 tokens; and thinking
blocks are model-bound, so a conversation that leaves Fable 5.1 for another Claude model loses
its reasoning for those turns.

**Marketing claims, labelled as such:** "the world's most advanced models for coding and
knowledge work"; "sets a new standard for coding, knowledge work, and long-running
problem-solving"; "much higher performance than its predecessor"; "an estimated 25% less …
up to approximately 45%"; "improved our safeguards to reduce false positives"
([announcement](../../sources/anthropic.com/claude-fable-5-1-announcement/2026-10-26.md)).
The safety framing is Anthropic's own instrument: "no evidence of a critical-severity
jailbreak" is a statement about their classifiers, not an independent audit.

### Benchmarks

Anthropic's capability summary (Table 8.1.A), adaptive thinking at max effort, five trials,
Fable 5.1 / Mythos 5.1 in one column
([system card](../../sources/anthropic.com/claude-fable-5-1-system-card/2026-10-26.md)):

| Evaluation | Fable 5.1 | Fable 5 | Opus 5 | GPT-5.6 Sol |
| --- | --- | --- | --- | --- |
| SWE-bench Pro | 81.2 | 80 | 79.2 | 64.6 |
| SWE-bench Multilingual | 89.1 | 86.6 | 89.5 | – |
| SWE-bench Multimodal | 54.7 | 54.1 | 59.4 | – |
| Terminal-Bench 4.0 | 56% (61% Mythos) | 42% (45% Mythos) | 52% | 37% |
| Terminal-Bench-Science 0.1 | 52.6% | 24.7% | 29.0% | 22.4% |
| Humanity's Last Exam (no / with tools) | 60.9% / 65.0% | 57.8% / 63.8% | 56.6% / 63.6% | – |
| OSWorld 2.0 (partial / strict) | 77.9% / 41.7% | 72.9% / 36.1% | 75.4% / 39.6% | – |
| HealthBench Professional | 62.1% | 63.3% | 59.8% | – |
| GDPval-AA v2 | 1853 | 1723 | 1824 | 1711 |
| AA-Briefcase | 1694 | 1572 | 1685 | 1502 |
| AutomationBench | 31.4 | 17.1 | 26.9 | 19.6 |
| ARC-AGI-1 | 97.5% | 98.5% | 97.5% | 96.5% |
| ARC-AGI-2 | 90.0% | 89.2% | 90.42% | 92.5% |

Caveats that belong on that table, all stated by Anthropic:

- **The scores are of a routed system.** "Fable 5.1 was evaluated with its production
  safeguards enabled. On tasks where these safeguards intervened, Fable 5.1 and Fable 5
  scored a zero on OSWorld 2.0 … This likely reduces the performance of Fable 5.1 and Fable 5
  on these benchmarks" ([announcement](../../sources/anthropic.com/claude-fable-5-1-announcement/2026-10-26.md)).
- **Row provenance differs.** AA-Briefcase "was run independently by Artificial Analysis";
  AutomationBench is Zapier's benchmark, quoted from its held-out leaderboard; competitor
  figures are quoted from competitors' publications. The rest are Anthropic runs.
- **The two cards disagree** on Fable 5.1's OSWorld (77.9/41.7 here, 80.7/42.8 in the Opus
  5.5 card) and HLE-with-tools (65.0 vs 65.6) values, and on whether GDPval-AA v2 or v2.1 is
  the current version (1853 on v2 here, 1735 on v2.1 in the Opus 5.5 card).
- **Effort matters more than the model.** Everything above is at max effort; AA measures 53 →
  47 index points across max → low, and Anthropic's own advice is to run lower effort for
  routine work.

Independent measurements, where the picture is less flattering:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2, max | **53**, #6 of 221 |
| Artificial Analysis | same, xhigh / high / medium / low | 53 / 51 / 49 / 47 |
| Artificial Analysis | cost per index task, max | $7.63 (Opus 5.5: $5.98) |
| Artificial Analysis | Terminal-Bench 4.0, max | 52.0% |
| Artificial Analysis | output tokens on the index, max | 190M (median 81M) |
| Artificial Analysis | TTFT at max effort | 166.61 s (16.85 s at high) |
| Vals AI (via OpenRouter) | Terminal-Bench 4.0 | 58.1% |
| Vals AI (via OpenRouter) | Vals Index / LiveCodeBench / GPQA Diamond | 65.8% / 90.5% / 93.4% |

The Terminal-Bench 4.0 row is a useful spread check: vendor 55.8%, Vals 58.1%, AA 52.0% — a
6-point harness spread on one benchmark. The ~10.6-point gap between Fable 5.1 (55.8) and
Opus 5.5 (66.4) on Anthropic's own harness is therefore larger than the spread, which is why
the ordering of those two survives while either absolute score should be read loosely. AA's
per-effort rows and its terminal-bench
figure reach this wiki through OpenRouter's restatement of AA's table
([OpenRouter](../../sources/openrouter.ai/claude-fable-5-1/2026-10-26.md)); AA's own page
renders those charts client-side.

## Limitations and constraints

**API and integration**

- Thinking cannot be disabled and `temperature`/`top_p`/`top_k` are rejected, so there is no
  cheap, deterministic mode; `effort: "low"` is the floor.
- Forced tool use (`tool_choice: "any"` or a named tool) returns 400. Anthropic's stated
  reason is that a forced call would skip thinking and push the model's working-out into tool
  arguments. Use `auto` with strict tool use.
- Thinking blocks are bound to the model and to the conversation prefix: editing an earlier
  turn, changing tools, or rebuilding the system prompt invalidates later blocks for accounts
  created on or after 2026-08-31, returning 400 unless the beta opt-in drops them instead.
  Integrations that rewrite history will break.
- Only Fable 5.1 and Mythos 5.1 can read Fable 5.1 thinking blocks, so a router that switches
  models mid-conversation silently loses reasoning (reported in `input_transformations` only
  with the beta header).
- The advisor tool rejects advisors weaker than the executor: Fable 5, Mythos 5, Opus 5.5 and
  Opus 5 all 400 when paired with a Fable 5.1 executor.

**Safeguards change what the model answers**

- Dual-use cyber and life-sciences requests are refused (`stop_reason: "refusal"`), and
  Anthropic says "Refusal rates on this model are materially higher than on previous Claude
  models" ([Bedrock](../../sources/amazon.com/claude-fable-5-1-bedrock-model-card/2026-10-26.md)).
- Penetration testing, exploit generation and binary-based vulnerability scanning are
  redirected to Opus models; life-sciences R&D queries are "still be directed to our Opus
  models" ([announcement](../../sources/anthropic.com/claude-fable-5-1-announcement/2026-10-26.md)).
- Prompt-stage refusals in low-false-positive categories are **billed** since 2026-09-24
  (first-party), while Bedrock's card says prompt-stage refusals are not billed. That is a
  host-level difference between two Anthropic-operated billing paths, and neither document
  reconciles them.
- The system card reports alignment regressions against Opus 5 ("a slight regression on
  overall misaligned behavior compared to Opus 5"), rare workarounds of permission hooks
  (under 0.01% of monitored completions), and less honesty under pressure
  ([system card](../../sources/anthropic.com/claude-fable-5-1-system-card/2026-10-26.md)).

**Data retention and compliance**

- First-party: "require 30-day data retention and aren't available under zero data retention
  unless expressly authorized by Anthropic"
  ([release notes](../../sources/claude.com/claude-fable-5-1-release-notes/2026-10-26.md)).
  The launch post says eligible customers can use it with zero data retention until the
  Enterprise Frontier Safeguards programme ships — the two are only reconcilable if
  "eligible" means "expressly authorized", which neither says.
- Bedrock requires opting into `aws_review` retention; Google Cloud stores prompts and
  responses up to 30 days and requires accepting the Advanced AI Safety Addendum; OpenRouter
  states flatly that "Anthropic's data retention policy does not allow zero data retention".
- Outputs carry Anthropic's statistical text watermark on every platform, and supported files
  produced through the code-execution tool carry C2PA Content Credentials.

**Cost shape**

- 2.5× Opus 5.5 per token on both sides, with a cache read at 2.5% of input ($0.25) versus
  Opus 5.5's 5% ($0.20) — Fable 5.1's cache reads are still more expensive in absolute terms.
- AA measures it as "particularly expensive", "slower than average" (65 t/s) and "very
  verbose" (190M output tokens on the index), and its cost per index task is 28% above Opus
  5.5's.
- No fast mode: the fast-mode table covers Opus 5.5, Opus 5 and Opus 4.8 only.
- No long-context premium inside 1M, and the captured Fable 5.1 pages list 128K output only —
  Opus 5.5 additionally documents a 300K Batch API output option, which is not documented
  for this model.

## Access, pricing, licensing

USD per million tokens
([pricing](../../sources/claude.com/claude-fable-5-1-pricing/2026-10-26.md),
[model page](../../sources/claude.com/claude-fable-5-1-model-page/2026-10-26.md)):

| Item | Fable 5.1 | Fable 5 | Opus 5.5 |
| --- | --- | --- | --- |
| Input | $10 | $10 | $4 |
| Output | $50 | $50 | $20 |
| 5-minute cache write | $12.50 | $12.50 | $5 |
| 1-hour cache write | $20 | $20 | $8 |
| Cache read | $0.25 | $1 | $0.20 |
| Batch API | $5 / $25 | $5 / $25 | $2 / $10 |
| Fast mode | not offered | not offered | $8 / $40 |

**Billing basis:** per token, with prompt caching, batch (50% off), and the 1.1× US-only
`inference_geo` multiplier stacking on base rates. No per-request or per-seat API price.
Long agentic sessions are billed mostly through cache reads, which is the one line where
Fable 5.1 is cheaper than Fable 5.

**Licence:** proprietary, under Anthropic's commercial terms; no weights, so nothing to
redistribute. Access is gated by data-retention terms rather than by licence tier.

**Host differences:** all four OpenRouter-routed providers list the same $10 / $50 / $0.25
(Anthropic, Azure, Google Vertex, and Bedrock BYOK-only), with 100% three-day uptime on the
three public endpoints and no EU in-region routing
([OpenRouter](../../sources/openrouter.ai/claude-fable-5-1/2026-10-26.md)). Bedrock exposes it
through `bedrock-runtime` and `bedrock-mantle` with `us.` and `global.` inference profiles;
the runtime region table lists 35 regions, though its per-region icon grid was not
captured, and the mantle table names only `us-gov-west-1`. Google Cloud serves it GA in US,
Europe and global multi-regions plus an `asia-southeast1` ML-processing region, without
provisioned throughput.
Google's page states a retirement floor of **2027-03-01**, six months earlier than the
2027-09-01 that Anthropic and Bedrock state
([Google Cloud](../../sources/cloud.google.com/claude-fable-5-1/2026-10-26.md)).

## Label mapping: Artificial Analysis to canonical ID

The roster label came from Artificial Analysis, whose row is "Claude Fable 5.1 (max with
fallback)". That resolves to `claude-fable-5-1` at `effort: "max"`, on four matches: the
2026-09-01 release date, the $10/$50 "based on Anthropic's API" price, the 1M context with
text+image input, and the five-variant set (`max`, `xhigh`, `high`, `medium`, `low`) that is
exactly Anthropic's effort parameter
([AA](../../sources/artificialanalysis.ai/claude-fable-5-1/2026-10-26.md),
[model page](../../sources/claude.com/claude-fable-5-1-model-page/2026-10-26.md)).

Two parts of the label are not vendor language:

- **"with fallback"** is AA's qualifier and is undefined on any captured AA page. The best
  supported reading is that AA scored the deployment with Anthropic's refusal-fallback path
  available (targets: Opus 4.8 and Opus 5). Whether a fallback fired during AA's runs is not
  stated, and no "without fallback" row exists.
- **AA's "max"** is an effort setting, not a variant: the five rows differ by 6 index points
  (53 → 47) and by 3× in cost per task ($7.63 → $2.37). Any comparison that quotes "Claude
  Fable 5.1" without an effort level is under-specified.

## Unresolved questions

1. **Which number is right for OSWorld 2.0 and HLE?** Fable 5.1's card says 77.9/41.7 and
   65.0-with-tools; the later Opus 5.5 card says 80.7/42.8 and 65.6. The Fable card says its
   OSWorld figures "supersede" the Claude Opus 5 card's, which does not explain the newer
   card's different values. Unresolved.
2. **v2 or v2.1 for GDPval-AA?** The two cards use different versions (1853 vs 1735 for the
   same model) and neither says when the switch happened. This matters because on v2.1 Opus
   5.5 is ahead (1846 vs 1735) and on v2 there is no Opus 5.5 measurement at all.
3. **Is the documentation's recommendation stale?** Anthropic still routes "demanding
   reasoning" to Fable 5.1 while its own 2026-09-22 card shows Opus 5.5 ahead on every printed
   row and AA agrees. Either the docs were not revised after Opus 5.5, or the intended
   advantage is in behaviour the tables do not measure (long-horizon coherence, research
   quality). Not resolvable from the captured evidence.
4. **What did AA measure, and did refusals fire?** "with fallback" implies safeguard routing;
   AA does not say. If refusals occurred, the 53 understates the bare model.
5. **Why is TTFT 166.61 s at max effort?** Against 16.85 s at high effort on the same page.
   Either a long reasoning phase before the first answer token or a harness artefact.
6. **Why does Google Cloud state 2027-03-01 retirement?** Every other source says 2027-09-01.
7. **Does Mythos 5.1 deserve its own page?** It shares weights but has its own ID, access
   programmes, and system-card rows. This page does not decide the roster question.
8. **Does the "25% / 45% cheaper" claim survive contact with a non-Anthropic workload?** It is
   modelled on August 2026 usage and driven by cache-hit share; AA's cost per task ($7.63)
   measures a different workload and does not test it.

## Evidence status

**Floor met, with three independent hosts.**

- **First-party, seven records:** the launch
  [announcement](../../sources/anthropic.com/claude-fable-5-1-announcement/2026-10-26.md), the
  212-page [system card](../../sources/anthropic.com/claude-fable-5-1-system-card/2026-10-26.md),
  the platform [model page](../../sources/claude.com/claude-fable-5-1-model-page/2026-10-26.md),
  [what's new](../../sources/claude.com/claude-fable-5-1-whats-new/2026-10-26.md),
  [pricing](../../sources/claude.com/claude-fable-5-1-pricing/2026-10-26.md),
  [release notes](../../sources/claude.com/claude-fable-5-1-release-notes/2026-10-26.md) and
  [lifecycle/ID policy](../../sources/claude.com/claude-fable-5-1-lifecycle/2026-10-26.md).
  Together these establish identity, date, context, modalities, effort control, tool surface,
  prices, lifecycle, safeguard behaviour and snapshot policy.
- **Independent hosts, three records:**
  [OpenRouter](../../sources/openrouter.ai/claude-fable-5-1/2026-10-26.md) (routing, four
  providers, identical prices, uptime, retention warning),
  [Amazon Bedrock](../../sources/amazon.com/claude-fable-5-1-bedrock-model-card/2026-10-26.md)
  (lifecycle, endpoints, sampling constraints, refusal billing, `aws_review` retention) and
  [Google Cloud](../../sources/cloud.google.com/claude-fable-5-1/2026-10-26.md) (GA status,
  PDF input, regions, 30-day retention, a different retirement floor).
- **Independent benchmarks:** Artificial Analysis's
  [model page and leaderboard rows](../../sources/artificialanalysis.ai/claude-fable-5-1/2026-10-26.md),
  with Vals AI and Design Arena figures reaching this page through OpenRouter's restatement.
- **No direct tests were run for this page.** Every number is quoted from a source record.
  Where two sources disagree (OSWorld, HLE-with-tools, GDPval version, retirement date) both
  values are recorded rather than reconciled.
- **Weakest links:** AA's per-benchmark values are second-hand via OpenRouter because AA
  renders them client-side; the announcement's cost-vs-accuracy charts and the system card's
  figures were not captured as images; no first-party dated snapshot ID exists; and no
  external safety evaluation (METR or others) was captured.

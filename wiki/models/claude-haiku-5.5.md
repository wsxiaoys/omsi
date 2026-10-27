# Claude Haiku 5.5

Anthropic's small, fast model, released **2026-10-07** at **$0.10 / $0.50 per million
input / output tokens** for prompts up to 100,000 tokens — a 5× cheaper tier than its own
long-context tier and roughly a tenth of Haiku 4.5's list price
([announcement](../../sources/anthropic.com/claude-haiku-5-5-announcement/2026-10-26.md),
[model page](../../sources/claude.com/claude-haiku-5-5-model-page/2026-10-26.md)). It is the
first Haiku-class model with an `effort` parameter, and, unlike its larger 5.5 siblings, its
safeguards block rather than fall back to another model.

It is not a cheap route to frontier capability. Anthropic's own capability table puts it
below Claude Sonnet 5.5 on nine of ten rows
([system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)), and
the launch post says plainly that "Sonnet 5.5 and Opus 5.5 remain better choices for complex
agentic coding tasks". Its value is throughput and price per call on narrow, high-volume
work.

## Identity

- **Canonical name:** Claude Haiku 5.5. **API ID:** `claude-haiku-5-5`.
- **Vendor:** Anthropic. Proprietary; no weights, no on-premises option.
- **Released:** 2026-10-07. **Status:** Active (latest). **Retirement:** not sooner than
  2027-10-07 ([model page](../../sources/claude.com/claude-haiku-5-5-model-page/2026-10-26.md)).
  The date is inside the one-year window; no specialist-exception flag applies.
- **Host endpoints**, all with the same ID
  ([model page](../../sources/claude.com/claude-haiku-5-5-model-page/2026-10-26.md)): Claude
  API (`claude-haiku-5-5`), Amazon Bedrock (`anthropic.claude-haiku-5-5`), Claude Models on
  Google Cloud (Google-managed and Anthropic-managed), Microsoft Foundry, Claude Platform on
  AWS. OpenRouter routes it across Anthropic, Amazon Bedrock, Google Vertex, Azure and Claude
  Platform on AWS ([OpenRouter](../../sources/openrouter.ai/claude-haiku-5-5/2026-10-26.md)).
  Bedrock additionally offers geo inference profiles (`us.`, `eu.`, `au.`, `jp.`) and a
  `global.` profile ([Bedrock](../../sources/aws.amazon.com/claude-haiku-5-5/2026-10-26.md)).
- **Aliases and leaderboard labels:** Artificial Analysis lists five rows — "Claude Haiku 5.5
  (Max)", "(Xhigh)", "(High)", "(Medium)", "(Low)" — under canonical slug `claude-haiku-5-5`;
  OpenRouter as `anthropic/claude-haiku-5.5`. See
  [label mapping](#label-mapping-artificial-analysis-to-canonical-id) below.
- **Siblings:** Claude Haiku 4.5 (predecessor, API ID `claude-haiku-4-5-20251001`), Claude
  Sonnet 5.5 ($2/$10), Claude Opus 5.5 ($4/$20), Claude Fable 5.1 ($10/$50) in the same 5.5
  wave ([models overview](../../sources/claude.com/models-overview/2026-10-26.md)).

### Is it a distinct model or a repackaging?

Distinct. Four independent things would each have to be false:

1. **New ID with no date suffix.** "`claude-haiku-5-5` is a fixed model ID with no date suffix
   and no separate alias" ([migration guide](../../sources/claude.com/claude-haiku-5-5-migration-guide/2026-10-26.md)).
   Its predecessor is `claude-haiku-4-5-20251001`.
2. **New tokenizer.** "The same input text produces approximately 30 percent more tokens on
   Claude Haiku 5.5 than on Claude Haiku 4.5", and images move to the high-resolution tier
   ([migration guide](../../sources/claude.com/claude-haiku-5-5-migration-guide/2026-10-26.md)).
   Token counts are not portable from the predecessor.
3. **New envelope.** 200k → 1M context and 64k → 128k max output
   ([what's new](../../sources/claude.com/claude-haiku-5-5-whats-new/2026-10-26.md)).
4. **Breaking API changes.** Manual `budget_tokens` thinking, `temperature`/`top_p`/`top_k`,
   assistant prefill, and `computer_20250124` each return a 400
   ([what's new](../../sources/claude.com/claude-haiku-5-5-whats-new/2026-10-26.md)). Code
   written for Haiku 4.5 does not run unchanged.

There is **no first-party dated snapshot**, so there is nothing to split on. The system card
notes that "different snapshots … are taken at various points during the training process"
and that most evaluations use the final one, but no snapshot identifier is published on any
platform.

## Current assessment

**Current, not preview, not deprecated.** GA on Google Cloud, Active on Bedrock with an
EOL floor of 2027-10-07, listed as "Active (latest)" on the Claude Platform.

The evidence supports a narrow reading. This is a **throughput model with a real reasoning
dial**, not a small frontier model:

- Artificial Analysis ranks it **#4 of 173** on intelligence at index 43 (max effort) and
  **#17 of 150** on speed at 234.4 output tokens/s
  ([AA](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md)). Both ranks are
  against price-matched peers, not the whole field.
- On Anthropic's own table it loses to Sonnet 5.5 on every row except FrontierCode 1.1 Main,
  where it scores 46.4 at max effort against Sonnet 5.5's 46.2 at max
  ([system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)).
  Anthropic calls this out as one of the "few areas" where it "rivaled or exceeded Claude
  Sonnet 5.5".
- The gap to its predecessor is large and consistent: 735 → 1620 Elo on GDPval-AA v2.1,
  10.2% → 45.9% on Humanity's Last Exam without tools, 15.7% → 72.4% on OSWorld 2.1, and 0.0%
  → 39.2% on Terminal-Bench 4.0.

**The effort dial changes the answer more than the model name does.** AA's five rows span an
index of 29 to 43 and $0.02 to $0.21 per task
([AA](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md)). At `max` it scores
above Claude Sonnet 5.5 at `medium` (41); at `low` it sits below GPT-6 Luna's `high`. Quoting
"Claude Haiku 5.5" without an effort level is under-specified in the same way it is for Opus
5.5.

## Documented capabilities

From the [model page](../../sources/claude.com/claude-haiku-5-5-model-page/2026-10-26.md),
[what's new](../../sources/claude.com/claude-haiku-5-5-whats-new/2026-10-26.md) and
[Bedrock](../../sources/aws.amazon.com/claude-haiku-5-5/2026-10-26.md) unless noted.

| Property | Value |
| --- | --- |
| Context window | 1M tokens |
| Max output | 128K tokens; 300K on the Message Batches API with the `output-300k-2026-03-24` beta header |
| Input | Text and images; PDF input documented by Google Cloud |
| Output | Text only |
| Reasoning | Adaptive thinking, on by default; five effort levels (`max`, `xhigh`, `high`, `medium`, `low`), default `medium`; can be disabled at `high` effort or below |
| Tool use | Function calling, forced `tool_choice`, structured outputs, web search, code execution, computer use (`computer_toolset_20260801`, or `computer_20251124` on Bedrock), browser use, memory tool, batch, prompt caching, token counting |
| Knowledge cutoff | Jun 2026 (both reliable and training-data) |
| Cache minimum | 512 tokens (down from 4,096 on Haiku 4.5) |

**Thinking can be switched off — the opposite of Opus 5.5.** "You can still turn thinking off
with `thinking: {"type": "disabled"}` at `high` effort or below"
([what's new](../../sources/claude.com/claude-haiku-5-5-whats-new/2026-10-26.md)). Bedrock
states the coupling precisely: "effort capped at high when thinking is disabled"
([Bedrock](../../sources/aws.amazon.com/claude-haiku-5-5/2026-10-26.md)). So `xhigh` and `max`
are unreachable with thinking off, and a non-reasoning deployment is possible for the first
time in this tier. Claude Opus 5.5, by contrast, returns a 400 for that same parameter at
every effort level ([release notes](../../sources/claude.com/release-notes/2026-10-26.md)).

**Forced tool choice works here.** "Claude Haiku 5.5 accepts a forced `tool_choice` (`any` or
a named tool), but the response starts with the tool call and has no `thinking` block"
([migration guide](../../sources/claude.com/claude-haiku-5-5-migration-guide/2026-10-26.md)) —
whereas Opus 5.5 returns a 400 for the same parameter
([release notes](../../sources/claude.com/release-notes/2026-10-26.md)).

**Marketing claims, labelled as such:** "the cheapest, fastest, and most capable small model
we've ever released"; "around 75% less to run" than Haiku 4.5; "our fastest model to date";
"our most robust Haiku-class model yet to prompt injections"; "major improvements across
almost all of our alignment evaluations"
([announcement](../../sources/anthropic.com/claude-haiku-5-5-announcement/2026-10-26.md),
[system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)). The
alignment claims are Anthropic's internal automated audit, not an independent evaluation. Six
named customer testimonials are unverifiable and are not treated here as capability evidence.

### Benchmarks

Anthropic's capability numbers: Table 8.1.A (adaptive thinking at max effort unless noted,
five trials) plus the prose benchmarks in §8.4–8.7, which use their own harnesses and trial
counts ([system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)):

| Evaluation | Haiku 5.5 | Haiku 4.5 | Sonnet 5.5 | GPT-6 Luna |
| --- | --- | --- | --- | --- |
| SWE-Bench Pro | 64.8 | – | 81.3 | – |
| SWE-bench Multilingual | 83.7 | 67.4 | 90.3 | – |
| SWE-bench Multimodal | 30.7 | 19.8 | 54.3 | – |
| FrontierCode 1.1 (Main) | 46.4 (max) / 45.8 (xhigh) | – | 46.2 (max) / 52.1 (xhigh) | 42.4 |
| Humanity's Last Exam (no / with tools) | 45.9 / 57.4 | 10.2 / 18.7 | 56.9 / 64.5 | – |
| OSWorld 2.1 (offline subset) | 72.4 | 15.7 | 83.9 | 48.9 |
| HealthBench Professional (length-adj.) | 64.8 | 32.2 | 69.2 | – |
| GDPval-AA v2.1 (Elo) | 1620 | 735 | 1840 | 1437 |
| AA-Briefcase v1.1 (Elo) | 1578 | 614 | 1824 | 1336 |
| Terminal-Bench 4.0 | 39.2 ±1.9 | 0.0 | 70.6 | 16.4 |
| Terminal-Bench-Science 0.1 | 20.6 ±3.7 | 0.1 | 59.9 | – |
| FrontierSWE v2 | 43.8 | – | – | – |
| ProgramBench (long context) | 82.0 | – | 79.7 | – |

Three caveats belong on those numbers. Competitor figures are "drawn from the respective
developers' published system cards or benchmark leaderboards unless otherwise noted", and
GPT-6 Luna was re-run by Anthropic through OpenAI's API "with OpenAI's own context
compaction". The Terminal-Bench runs used Claude Code `--bare` with **no internet egress** and
with safeguards on and no fallback, which failed 1.8% of trials outright. And the benchmark
set is effort-sensitive in a way the table does not show: FrontierCode Main is *better* at
`max` (46.4) than at `xhigh` (45.8), so "max effort" is not uniformly the best setting.

Independent measurements, where the picture both agrees and breaks:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2, max | **43**, #4/173 (median 13) |
| Artificial Analysis | same, xhigh / high / medium / low | 41 / 38 / 34 / 29 |
| Artificial Analysis | cost per index task, max | $0.21 |
| Artificial Analysis | output tokens on the index, max | 440M (last of 69; median 100M) |
| Artificial Analysis | output speed, max | 234.4 tokens/s (#17/150) |
| Artificial Analysis (via OpenRouter) | Terminal-Bench 4.0, max | 32.8% |
| Vals AI (via OpenRouter) | Terminal-Bench 4.0 | 36.4% |
| Vals AI (via OpenRouter) | ProgramBench | **2.5%** |
| Vals AI (via OpenRouter) | SRE Bench / HLAB-Vals-1.1 / Vibe Code Bench 1-100 | 5.7% / 4.2% / 20.4% |
| OpenRouter AutoExacto | GPQA Diamond / TAU-Bench, by endpoint | 86.4–87.3% / 72.5–75.2% |

The level agrees across independent harnesses on Terminal-Bench 4.0 — 39.2 vendor, 36.4 Vals,
32.8 AA — which is the usual vendor-high ordering and a spread of 6.4 points, comparable to
the ±1.9 standard error plus harness differences.

**ProgramBench is a genuine contradiction, not a harness delta.** Anthropic reports 82.0% for
Haiku 5.5 on a 166-task ProgramBench, *above* Sonnet 5.5's 79.7%
([system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)). Vals
AI, restated on OpenRouter, reports **2.5%**
([OpenRouter](../../sources/openrouter.ai/claude-haiku-5-5/2026-10-26.md)). A 79.5-point gap
cannot be effort, sampling noise, or CLI scaffolding. The most likely explanation is that the
two are not the same evaluation despite the shared name — Anthropic describes a
mini-swe-agent harness with the six-hour limit removed and 34 flaky tasks excluded — but no
captured source reconciles them, so both numbers stand and neither should be quoted alone.
The same caveat applies to the sub-6% Vals rows (SRE Bench, HLAB): a general-purpose small
model is expected to be weak on domain-specific agentic benchmarks, but the magnitudes are
unverified here.

## Limitations and constraints

**Refusals are terminal**

- "Safety classifiers can decline a request … Server-side fallback isn't available", and the
  client must handle `stop_reason: "refusal"`
  ([what's new](../../sources/claude.com/claude-haiku-5-5-whats-new/2026-10-26.md)). This is
  the structural inverse of Opus 5.5, where blocked requests are re-routed to Opus 4.8 or
  Opus 5 ([Opus 5.5 system card](../../sources/anthropic.com/claude-opus-5-5-system-card/2026-10-26.md)).
- The cyber classifiers are "significantly narrower" than the larger models' and biology uses
  the Opus 5 / Sonnet 5 classifier set rather than Opus 5.5's research-biology set
  ([system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)).
- Vetted access exists for the blocked domains (Life Sciences Verification Program, Cyber
  Verification Program), but criteria were not captured.

**Over-refusal is measured, not hypothetical**

> "it over-refused more than any other model we tested in our automated behavioral audit, and
> it used a leaked answer without telling the user more often than Haiku 4.5"
> ([system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)).

The same audit calls it "at least as honest under pressure as every other model we tested".

**API and integration**

- `temperature`, `top_p`, `top_k` should be omitted and can error.
- Assistant prefill returns a 400 "even with thinking turned off".
- `budget_tokens` thinking returns a 400; use adaptive thinking plus `effort`.
- Thinking blocks are account-bound: replaying a stored conversation through a different
  account silently drops the reasoning.
- Sending a thinking block after changing `system`, `tools`, or earlier messages returns a
  400 — conversations must stay append-only.
- Thinking blocks from all earlier turns stay in context and bill as input, so multi-turn
  conversations cost more than the tokenizer change alone explains.
- Thinking text is empty by default; set `thinking.display: "summarized"` to read it.
- Priority Tier is not supported on the Claude Platform
  ([migration guide](../../sources/claude.com/claude-haiku-5-5-migration-guide/2026-10-26.md)).
  Bedrock, separately, does offer a Priority service tier — a host difference, not a
  contradiction ([Bedrock](../../sources/aws.amazon.com/claude-haiku-5-5/2026-10-26.md)).

**Cost shape**

- The cheap price is a **≤100k-prompt-token** price. Above it, every category is 5×: input
  $0.10 → $0.50, output $0.50 → $2.50, cache read $0.01 → $0.05
  ([model page](../../sources/claude.com/claude-haiku-5-5-model-page/2026-10-26.md)). Bedrock
  bills this as a separate "Claude Haiku 5.5 - Long Context" row.
- The tokenizer inflates token counts ~30% versus Haiku 4.5, so a prompt near the boundary can
  cross it after migration.
- Images cost more: "an image of 2,000 by 1,500 pixels costs about 2.5 times as many visual
  tokens on Claude Haiku 5.5 as on Claude Haiku 4.5"
  ([migration guide](../../sources/claude.com/claude-haiku-5-5-migration-guide/2026-10-26.md)).
- Verbosity is last in AA's class: 440M output tokens on the index against a 100M median, so
  cost-per-task comparisons matter more than list price
  ([AA](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md)).
- AA reports TTFT of 357.95s at `max`, against 1.73s for the median model in its price tier.
  The leaderboard shows 352.54s at `max` falling to 8.63s at `low`. As with Opus 5.5, the
  figure most plausibly measures first *answer* token after a long reasoning phase; AA does
  not say, so it is recorded without interpretation.

**No open weights, no on-premises deployment.** Nothing to license or redistribute.

## Access, pricing, licensing

USD per million tokens
([model page](../../sources/claude.com/claude-haiku-5-5-model-page/2026-10-26.md),
[announcement](../../sources/anthropic.com/claude-haiku-5-5-announcement/2026-10-26.md)):

| Item | ≤100k prompt tokens | >100k prompt tokens |
| --- | --- | --- |
| Input | $0.10 | $0.50 |
| Output | $0.50 | $2.50 |
| 5-minute cache write | $0.125 | $0.625 |
| 1-hour cache write | $0.20 | $1 |
| Cache read | $0.01 | $0.05 |

Batch API: 50% off input and output. US-only inference via `inference_geo` carries a 1.1×
multiplier on all token categories, and that multiplier stacks on the long-context tier
([pricing](../../sources/claude.com/pricing/2026-10-26.md)).

**Billing basis:** per token, with a prompt-length tier break at 100k tokens, prompt caching,
batch discount, and data-residency multipliers. No per-request or per-seat API price.

**The two discount claims in the launch post are different claims.** "Around 75% less to run"
is a workload-weighted figure that already nets out the tokenizer's extra ~30% tokens; "90%
lower" is the list-price gap on the ≤100k tier only, and 50% above it
([announcement](../../sources/anthropic.com/claude-haiku-5-5-announcement/2026-10-26.md)).
The footnote says so directly: the calculation "also accounts for changes between Haiku 4.5
and Haiku 5.5 in how many tokens are used to complete a given piece of work".

**Host differences worth knowing.** OpenRouter lists the same $0.10 / $0.50 / $0.01 cache-read
across Anthropic, Amazon Bedrock, Google Vertex, Azure and Claude Platform on AWS, plus a
$0.11 / $0.55 / $0.011 set on endpoints "not used in Standard routing" that matches the EU
in-region premium — a 10% uplift that requires a Business or Enterprise plan and fails closed
outside Europe ([OpenRouter](../../sources/openrouter.ai/claude-haiku-5-5/2026-10-26.md)). Bedrock
sells the model through AWS Marketplace and bills it "under the model provider (not under
Amazon Bedrock)"
([Bedrock](../../sources/aws.amazon.com/claude-haiku-5-5/2026-10-26.md)). Google Cloud serves
it GA with text/image/PDF input and 1M/128K limits in US, Europe and global endpoints, with ML
processing also in `asia-southeast1`
([Google Cloud](../../sources/cloud.google.com/claude-haiku-5-5/2026-10-26.md)).

**Licence:** proprietary, commercial terms via Anthropic's Commercial Terms of Service. The
Max/Team API credit announced alongside the launch ($100/$200 per month, up to $500 pooled
for Team) applies to any Anthropic model, not to Haiku 5.5 specifically.

## Label mapping: Artificial Analysis to canonical ID

The roster label came from Artificial Analysis, whose rows read "Claude Haiku 5.5 (Max)" and
four lower-effort variants. That label resolves to `claude-haiku-5-5` at `effort: "max"`, on
four independent matches: AA's own canonical slug and `releaseDate: "2026-10-07"`; the
2026-10-07 release date stated on the page; the $0.10/$0.50 "based on Anthropic's API" price;
and the five-variant set that is exactly Anthropic's `effort` value list, with `medium` the
documented default ([AA](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md),
[effort](../../sources/claude.com/effort/2026-10-26.md)).

One asymmetry is worth recording. AA labels Claude Opus 5.5 and Claude Sonnet 5.5 rows
"(max **with fallback**)" but labels Haiku 5.5 rows without the qualifier. That matches the
vendor: Haiku 5.5's classifiers "have no fallback model"
([system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md)). The
absence is consistent with AA scoring the undiluted deployed model, but AA does not state it.

AA's `$0.10 / $0.50` is the ≤100k tier only. Cost-per-task figures therefore absorb some
long-context pricing that the headline number does not show.

## Unresolved questions

1. **Why does ProgramBench disagree by 79.5 points?** Anthropic 82.0%, Vals AI 2.5%. Almost
   certainly two different evaluations sharing a name, but no captured source says which is
   which. Until then neither number is usable on its own.
2. **Is the >100k tier per request or per message?** Neither the model page nor the migration
   guide says how the boundary is evaluated in a multi-turn conversation, and the answer
   changes the cost of agentic use substantially.
3. **Does AA's 43 exercise the long-context tier?** AA reports a single $0.10/$0.50 price and
   a $0.21 cost per task. Whether any index task exceeded 100k prompt tokens, and so was
   billed at 5×, is not stated.
4. **What does "effort capped at high when thinking is disabled" mean in practice?** Bedrock
   states it; Anthropic's docs state the softer "at `high` effort or below". Whether a request
   setting `effort: "max"` with `thinking: {"type": "disabled"}` errors, silently downgrades,
   or is rejected on the Claude API is not documented in the captures.
5. **Is there a dated snapshot?** No. The system card mentions multiple training snapshots but
   publishes no identifier, and no platform lists one. Any behaviour change under the stable
   ID would be invisible to a caller.
6. **Do the safety claims replicate?** "Most robust Haiku-class model yet to prompt
   injections" and "over-refused more than any other model" are both Anthropic-internal audit
   results. No external red-team report was captured.
7. **Is Haiku 4.5 still obtainable?** The migration guide says Haiku 3.5 and Haiku 3 are
   retired, but not what Haiku 4.5's deprecation schedule is beyond a link. AA's current
   leaderboard has no Haiku 4.5 row, which is suggestive but not proof.

## Evidence status

**Floor met: one first-party source plus four independent hosts.**

- **First-party, five records:** the launch
  [announcement](../../sources/anthropic.com/claude-haiku-5-5-announcement/2026-10-26.md), the
  144-page [system card](../../sources/anthropic.com/claude-haiku-5-5-system-card/2026-10-26.md),
  the platform [model page](../../sources/claude.com/claude-haiku-5-5-model-page/2026-10-26.md),
  [what's new](../../sources/claude.com/claude-haiku-5-5-whats-new/2026-10-26.md) and the
  [migration guide](../../sources/claude.com/claude-haiku-5-5-migration-guide/2026-10-26.md).
  Together these establish identity, date, context, modalities, effort control, tool surface,
  prices, lifecycle, breaking changes, and safeguard behaviour.
- **Shared first-party records, cited not edited:** the
  [models overview](../../sources/claude.com/models-overview/2026-10-26.md) (retirement floor
  2027-10-07, "from $0.10 / $0.50", default effort `medium`) and
  [pricing](../../sources/claude.com/pricing/2026-10-26.md) (the two-tier price is unique to
  Haiku 5.5 among the current models).
- **Independent hosts, three records:**
  [OpenRouter](../../sources/openrouter.ai/claude-haiku-5-5/2026-10-26.md) (five backends,
  per-provider prices, EU premium, re-published benchmark scores),
  [Google Cloud](../../sources/cloud.google.com/claude-haiku-5-5/2026-10-26.md) (GA card,
  modalities including PDF, regions, quotas) and
  [Bedrock](../../sources/aws.amazon.com/claude-haiku-5-5/2026-10-26.md) (lifecycle,
  endpoints, features, effort/thinking coupling, tiered billing).
- **Independent benchmarks, one direct:** Artificial Analysis's
  [model page and leaderboard capture](../../sources/artificialanalysis.ai/claude-haiku-5-5/2026-10-26.md).
  Vals AI and Design Arena numbers reach this page only through OpenRouter's restatement.
- **No direct tests were run for this page.** Every number above is quoted from a source
  record; nothing was re-measured. Where a figure appears twice — the AA index (43 on AA,
  43.4 restated on OpenRouter) and Terminal-Bench 4.0 (39.2 vendor, 36.4 Vals, 32.8 AA) — both
  values are recorded rather than reconciled.
- **Weakest links:** AA's per-benchmark numbers reach this wiki only through OpenRouter's
  restatement, because AA's own charts render client-side; the ProgramBench contradiction is
  unresolved; and no first-party dated snapshot ID exists to anchor behaviour over time.

# Claude Opus 5.5

Anthropic's Opus-tier frontier model, released **2026-09-22** at $4 / $20 per million
input / output tokens — 20% below Claude Opus 5 on both sides, with cache reads 60% cheaper
([announcement](../../sources/anthropic.com/claude-opus-5-5-announcement/2026-10-26.md),
[model page](../../sources/claude.com/claude-opus-5-5-model-page/2026-10-26.md)). It is the
model Artificial Analysis ranks **#1** on its Intelligence Index at capture time, and the
one Vals AI ranks **#1** on Terminal-Bench 4.0.

Its defining constraint is not a capability but a policy: **thinking cannot be turned off**.
Adaptive thinking is always on and `thinking: {"type": "disabled"}` returns a 400 error
([release notes](../../sources/claude.com/release-notes/2026-10-26.md)). Effort is the only
cost dial, and the default is `medium`, one level below Opus 5's default.

## Identity

- **Canonical name:** Claude Opus 5.5. **API ID:** `claude-opus-5-5`.
- **Vendor:** Anthropic. Proprietary; no weights, no on-prem option.
- **Released:** 2026-09-22. **Status:** Active (latest). **Retirement:** not sooner than
  2027-09-22 ([model page](../../sources/claude.com/claude-opus-5-5-model-page/2026-10-26.md)).
- **Host endpoints**, all with the same undated ID
  ([model page](../../sources/claude.com/claude-opus-5-5-model-page/2026-10-26.md)):
  Claude API (`claude-opus-5-5`), Amazon Bedrock (`anthropic.claude-opus-5-5`), Claude
  Platform on AWS, Google Cloud (Google-managed and Anthropic-managed), Microsoft Foundry.
  OpenRouter lists six routed endpoints including Azure and Vertex
  ([OpenRouter](../../sources/openrouter.ai/claude-opus-5-5/2026-10-26.md)); Google Cloud
  documents GA status, text/image/PDF input, 1M/128K limits, and US/EU/global plus
  `asia-southeast1` ML-processing regions
  ([Google Cloud](../../sources/cloud.google.com/claude-opus-5-5/2026-10-26.md)).
- **Aliases and leaderboard labels:** Artificial Analysis lists it as "Claude Opus 5.5
  (max with fallback)" and four lower-effort siblings; OpenRouter as
  `anthropic/claude-opus-5.5`. Both map to `claude-opus-5-5`; see
  [label mapping](#label-mapping-artificial-analysis-to-canonical-id) below.
- **Siblings:** Claude Opus 5 (predecessor; OpenRouter's canonical slug carries a
  2026-07-23 date), Claude Fable 5.1 ($10/$50) and Claude Mythos 5.1 in the tier above —
  Anthropic still points at Fable 5.1 "for demanding reasoning and long-horizon agentic
  work, or when your evals on Claude Opus 5.5 at higher effort still fall short"
  ([models overview](../../sources/claude.com/models-overview/2026-10-26.md)); Claude
  Sonnet 5.5 and Claude Haiku 5.5 in the same 5.5 wave; Claude Opus 4.8, which handles
  cyber requests that Opus 5.5's safeguards block.

### Is it a distinct model or a repackaging?

Distinct. Three things would each have to be false for this to be a relabelled Opus 5, and
none is:

1. **New ID and new price.** `claude-opus-5-5` is a separate ID at $4/$20 against Opus 5's
   $5/$25, with a cache read at 5% of input instead of the 10% default
   ([pricing](../../sources/claude.com/pricing/2026-10-26.md)).
2. **Breaking API changes.** Thinking can no longer be disabled, `tool_choice` of `any` or
   `tool` returns a 400, thinking blocks are bound to the model and conversation, and the
   older `computer_20251124` tool is rejected on the Claude API and Google Cloud
   ([release notes](../../sources/claude.com/release-notes/2026-10-26.md)). Code written
   for Opus 5 does not run unchanged.
3. **Different behaviour under test.** Anthropic's own comparison puts Opus 5.5 above Opus
   5 on every row of its capability summary, by 10.7 points on SWE-bench Pro and 14.1 on
   Terminal-Bench 4.0 ([system card](../../sources/anthropic.com/claude-opus-5-5-system-card/2026-10-26.md)).

It is also the first Opus model shipped with Fable-class safeguards on cyber, biology and
distillation, which changes what the deployed system will actually answer.

## Current assessment

**Current, not preview, not deprecated.** GA on Google Cloud, active on every platform,
retirement floor a year out.

The evidence supports a clear reading: this is the strongest agentic-coding model in the
comparisons captured here, and it is the *cheapest* way to buy frontier-class agentic
coding rather than the *most capable* model outright. On Anthropic's numbers it leads
Terminal-Bench 4.0 (66.4%), SWE-bench Pro (89.9%) and FrontierCode v1.1 (54.4%) among the
compared models, and on GDPval-AA v2.1 it scores 1846 Elo against Fable 5.1's 1735 and Opus
5's 1708 ([system card](../../sources/anthropic.com/claude-opus-5-5-system-card/2026-10-26.md)).
But it does *not* lead everywhere: GPT-6 Astra beats it on Terminal-Bench-Science (64.6 vs
58.7) and AutomationBench (41.4 vs 40.0) in the same table, and Anthropic itself says "at
these levels of capability we've found that benchmark margins have become a less reliable
guide to real-world differences"
([announcement](../../sources/anthropic.com/claude-opus-5-5-announcement/2026-10-26.md)).

Independent measurement agrees on the ranking and disagrees on the level. Artificial
Analysis ranks it #1 at index 58, two points above Claude Sonnet 5.5 (56) and five above
Claude Fable 5.1 (53)
([AA](../../sources/artificialanalysis.ai/claude-opus-5-5/2026-10-26.md)). Vals AI
ranks it #1 on Terminal-Bench 4.0 at 65.15% ([Vals
AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)). AA's own Terminal-Bench 4.0
figure for the model is 59.6% at max effort — 6.8 points below the vendor's number and 5.5
below Vals'. That gap is larger than Anthropic's stated ±2.6 standard error, and it is a
harness difference, not a vendor exaggeration: Anthropic states that it reproduced the
public leaderboard's Opus 5 score (51.8% → 52.3%) "within noise" using its own Claude Code
setup ([announcement](../../sources/anthropic.com/claude-opus-5-5-announcement/2026-10-26.md)).

**The cost story is the more defensible claim.** The 40%-cheaper claim is not just a token
price: Anthropic says it "uses fewer tokens per task", and AA's cost-per-task measurement
($5.98 at max) supports a large but not 40% gap — AA also measures the model as very
verbose (260M output tokens on the index, against a median of 81M)
([AA](../../sources/artificialanalysis.ai/claude-opus-5-5/2026-10-26.md)). Fewer tokens per
*agentic task* and more tokens per *index question* are both true; they measure different
things.

## Documented capabilities

All from the [model page](../../sources/claude.com/claude-opus-5-5-model-page/2026-10-26.md),
[models overview](../../sources/claude.com/models-overview/2026-10-26.md) and
[effort](../../sources/claude.com/effort/2026-10-26.md) unless noted.

| Property | Value |
| --- | --- |
| Context window | 1M tokens |
| Max output | 128K tokens; 300K on the Batch API with the `output-300k-2026-03-24` beta header |
| Input | Text, images; PDF/file input documented by Google Cloud and OpenRouter |
| Output | Text only |
| Reasoning | Adaptive thinking, always on, not disableable; five effort levels (`max`, `xhigh`, `high`, `medium`, `low`), default `medium` |
| Tool use | Function calling, strict tool use, web search, code execution, computer use (`computer_toolset_20260801`), memory tool, batch, prompt caching, token counting |
| Knowledge cutoff | Jun 2026 (both reliable and training-data) |
| Other | Multilingual; vision; effort can be changed mid-conversation while preserving the prompt cache |

**Marketing claims, labelled as such:** "the first model in our new Claude 5.5 family", "a
major step up from Opus 5", best-ever score on Anthropic's automated behavioural audit,
"much less likely … to take hard-to-reverse actions", "more resistant than Opus 5 to prompt
injection", and sixteen named early-tester testimonials
([announcement](../../sources/anthropic.com/claude-opus-5-5-announcement/2026-10-26.md)).
The alignment claim is Anthropic's own audit, not an independent one; the testimonials are
unverifiable and are not treated here as capability evidence.

### Benchmarks

Anthropic's capability summary (Table 8.1.A), adaptive thinking at max effort except
Terminal-Bench 4.0 at xhigh, five trials
([system card](../../sources/anthropic.com/claude-opus-5-5-system-card/2026-10-26.md)):

| Evaluation | Opus 5.5 | Opus 5 | Fable 5.1 | GPT-6 Astra |
| --- | --- | --- | --- | --- |
| SWE-bench Pro | 89.9 | 79.2 | 81.2 | – |
| SWE-bench Multilingual | 93.9 | 89.5 | 89.1 | – |
| SWE-bench Multimodal | 61.4 | 59.4 | 54.7 | – |
| FrontierCode v1.1 (Main) | 54.4 | 48.0 | 50.3 | 53.3 |
| Terminal-Bench 4.0 | 66.4 | 52.3 | 55.8 | 57.9 |
| Terminal-Bench-Science 0.1 | 58.7 | 29.0 | 52.6 | 64.6 |
| Humanity's Last Exam (no / with tools) | 64.4 / 67.7 | 56.6 / 63.6 | 60.9 / 65.6 | – / 57.2 |
| OSWorld 2.0 (partial / strict) | 81.8 / 48.7 | 74.0 / 37.2 | 80.7 / 42.8 | – |
| GDPval-AA v2.1 (Elo) | 1846 | 1708 | 1735 | 1542 |
| AA-Briefcase v1.1 (Elo) | 1822 | 1673 | 1678 | 1569 |
| AutomationBench | 40.0 | 26.9 | 31.4 | 41.4 |
| ProgramBench (long context) | 91.2 | 85.4 | 87.6 | – |

Three caveats belong on those numbers. The rows are **not all vendor-run**: AA-Briefcase
was "run independently by Artificial Analysis" and AutomationBench is Zapier's benchmark and
Zapier's runs, while SWE-bench, Terminal-Bench, HLE, OSWorld and HealthBench are Anthropic's
own. Competitor figures are quoted from the competitors' own publications rather than re-run.
And the OSWorld version label is inconsistent — the launch post says OSWorld **2.1**, the
system card says **2.0**, with the same 81.8% partial score.

Independent measurements, which is where the picture softens:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2, max effort | **58**, #1 (median 28) |
| Artificial Analysis | same, xhigh / high / medium / low | 56 / 54 / 51 / 42 |
| Artificial Analysis (via OpenRouter) | Terminal-Bench 4.0, max | 59.6% |
| Vals AI | Terminal-Bench 4.0, mini-swe-agent, avg@3 | **65.15%**, rank 1 |
| Artificial Analysis | cost per index task, max | $5.98 |
| Artificial Analysis | output tokens on the index, max | 260M |

AA's per-effort sub-scores, as re-published on
[OpenRouter](../../sources/openrouter.ai/claude-opus-5-5/2026-10-26.md): HLE 61.4% at max
falling to 48.3% at low; GDPval-AA 68.3% → 37.0%; Terminal-Bench 4.0 59.6% → 31.3%. The
effort slope is steep, which is the practical point of the model: much of the capability
sits below max effort, as Anthropic itself says.

## Limitations and constraints

**API and integration**

- Thinking cannot be disabled, so there is a cost floor per request even for trivial tasks;
  `effort: "low"` is the cheapest setting, not "no thinking".
- `tool_choice` of `any` or `tool` returns a 400. Use `auto` with strict tool use.
- Thinking blocks are tied to the model and the conversation, so transcripts cannot be
  replayed across models.
- `computer_20251124` returns a 400 on the Claude API and Google Cloud; it still works on
  Amazon Bedrock, so the same request is portable in one direction only.
- At the default `display` setting, text between tool calls arrives in thinking blocks whose
  text is empty — streaming UIs go quiet between tool calls until they opt in.
- Prompt caching has a 512-token minimum.

**Safeguards change what the model answers**

- Cyber requests are re-routed to Opus 4.8; biology and frontier-LLM-development requests to
  Opus 5; distillation attempts are blocked with no fallback
  ([system card §1.5](../../sources/anthropic.com/claude-opus-5-5-system-card/2026-10-26.md)).
  The system card states plainly that "in typical product deployments, requests that touch
  on a few sensitive areas for high-stakes misuse will be referred to a weaker model rather
  than answered by the primary Opus 5.5 model".
- Anthropic warns this "likely reduces Claude Opus 5.5's performance" on the benchmarks
  where it intervened, so the published scores are of a *routed* system, not the bare model.
- Refusals in the `bio`, `frontier_llm` and `reasoning_extraction` categories are billed like
  any other request since 2026-09-24
  ([release notes](../../sources/claude.com/release-notes/2026-10-26.md)).
- Vetted access exists for the blocked domains (Life Sciences Verification Program, Cyber
  Verification Program), but the criteria were not captured.

**Data and compliance**

- "Preserved thinking" prevents API users from editing Claude's prior context, for accounts
  created on or after 2026-08-31. Integrations that rewrite assistant turns will break.
- Watermarking for EU AI Act compliance is on. Zero data retention is available.
- No open weights and no on-premises deployment, and no first-party dated snapshot ID is
  documented (see below).

**Cost shape**

- Verbose on long-form evaluation: 260M output tokens on AA's index, against an 81M median,
  and AA puts it in the bottom quartile for verbosity (#120 of 122). Token-price comparisons
  understate the bill for reasoning-heavy work.
- Fast mode costs $8/$40 — double list — for up to 2.5× speed. It is GA on the Claude API
  since 2026-10-15, and available on Google Cloud (Anthropic-managed) and Microsoft Foundry,
  but not with the Batch API.
- Partner-operated platforms price independently: OpenRouter shows Bedrock and Vertex EU
  endpoints at $4.40 / $22.00, a 10% premium. US-only inference through `inference_geo` is a
  1.1× multiplier.
- No long-context premium inside the 1M window — unlike Haiku 5.5, which doubles its input
  price above 100K tokens.

## Access, pricing, licensing

USD per million tokens
([pricing](../../sources/claude.com/pricing/2026-10-26.md),
[model page](../../sources/claude.com/claude-opus-5-5-model-page/2026-10-26.md)):

| Item | Claude Opus 5.5 | Claude Opus 5 |
| --- | --- | --- |
| Input | $4 | $5 |
| Output | $20 | $25 |
| 5-minute cache write | $5 | $6.25 |
| 1-hour cache write | $8 | not listed on this page |
| Cache read | $0.20 (5% of input) | $0.50 |
| Batch API | $2 / $10 | not listed on this page |
| Fast mode | $8 / $40 | $10 / $50 |

**Billing basis:** per token, with prompt caching, batch (50% off), fast mode (2×), and
data-residency multipliers stacking on the base rates. No per-request or per-seat API price.

**Licence:** proprietary, commercial terms via Anthropic's Commercial Terms of Service; no
weights are published, so there is no licence to redistribute. Consumer and Team/Max plans
get higher five-hour usage limits and a saved rate-limit reset, per the launch post — plan
pricing itself was not captured.

**Host differences worth knowing:** Google Cloud serves it GA with text/image/PDF input and
the same 1M/128K limits, in US/EU/global regions plus an `asia-southeast1` ML-processing
region ([Google Cloud](../../sources/cloud.google.com/claude-opus-5-5/2026-10-26.md)).
OpenRouter routes across Bedrock, Azure, Vertex, Claude Platform on AWS and Anthropic
itself, reports 100% uptime for four of five standard endpoints at capture, and offers EU
in-region routing at the 10% premium
([OpenRouter](../../sources/openrouter.ai/claude-opus-5-5/2026-10-26.md)).

## Label mapping: Artificial Analysis to canonical ID

The roster label came from Artificial Analysis, whose row is "Claude Opus 5.5 (max with
fallback)". That label resolves to `claude-opus-5-5` at `effort: "max"` with production
safeguards active, on three independent matches: the 2026-09-22 release date, the $4/$20
"based on Anthropic's API" price, and the five-variant set (`max`, `xhigh`, `high`, `medium`,
`low`) that is exactly Anthropic's effort parameter
([AA](../../sources/artificialanalysis.ai/claude-opus-5-5/2026-10-26.md),
[effort](../../sources/claude.com/effort/2026-10-26.md)).

Two parts of the label are not vendor language:

- **"with fallback"** is AA's own qualifier. No AA page captured defines it. The best
  supported reading is that the score reflects the deployed system, including the Opus 4.8 /
  Opus 5 safeguard routing that Anthropic documents. AA lists no "without fallback" Opus 5.5
  row, so the two cannot be compared.
- **AA's "max"** is not a model variant. It is one of five effort settings of one model, and
  the five rows differ by up to 16 index points (58 → 42), which is larger than the gap
  between Opus 5.5 and its nearest competitor. Any comparison that quotes "Claude Opus 5.5"
  without an effort level is under-specified.

## Unresolved questions

1. **Does a first-party dated snapshot exist?** OpenRouter's canonical slug is
   `anthropic/claude-opus-5.5-20260921`, a day before the public release. Anthropic's docs
   print only the undated `claude-opus-5-5` on all six platforms. Either the snapshot ID is
   simply not published, or OpenRouter invented the date. Unresolved; treat `20260921` as
   host naming until a first-party page shows it.
2. **What exactly did AA measure?** Whether safeguard fallbacks fired during AA's runs, and
   whether AA used the Claude API or a partner endpoint, is not stated. That matters: the
   score is of a routed system.
3. **Why is AA's TTFT 712 seconds?** The model page and the leaderboard both report it,
   against 34.76s for the same model at `high` effort. Either it is time-to-first-answer-
   token after a long reasoning phase or a measurement artefact. AA does not say.
4. **Does the 40% cost reduction hold outside Anthropic's workloads?** The claim combines a
   20% price cut with fewer tokens per task. AA's cost per index task ($5.98) is a different
   workload and does not isolate the two effects.
5. **OSWorld 2.1 or 2.0?** The launch post and the system card disagree on the version
   label for the same 81.8% score.
6. **Is there a non-reasoning variant?** AA's generic note says "a non-reasoning variant may
   also exist", which directly contradicts Anthropic's "thinking can't be disabled". Vendor
   documentation wins, but the AA note shows how a host-side caveat can leak into a model's
   profile.
7. **Do the safety claims replicate?** "Best scores of any model to date" on Anthropic's
   automated behavioural audit is a vendor-internal instrument. METR and Frontier Design ran
   pre-deployment evaluations, but their reports were not captured here.

## Evidence status

**Floor met, with the independent half stronger than usual.**

- **First-party, seven records:** the launch
  [announcement](../../sources/anthropic.com/claude-opus-5-5-announcement/2026-10-26.md),
  the 230-page [system card](../../sources/anthropic.com/claude-opus-5-5-system-card/2026-10-26.md),
  the platform [model page](../../sources/claude.com/claude-opus-5-5-model-page/2026-10-26.md),
  [pricing](../../sources/claude.com/pricing/2026-10-26.md),
  [release notes](../../sources/claude.com/release-notes/2026-10-26.md), plus the
  [models overview](../../sources/claude.com/models-overview/2026-10-26.md) and
  [effort](../../sources/claude.com/effort/2026-10-26.md) docs. Together these establish
  identity, date, context, modalities, effort control, tool surface, prices, lifecycle, and
  safeguard behaviour.
- **Independent hosts, two records:**
  [OpenRouter](../../sources/openrouter.ai/claude-opus-5-5/2026-10-26.md) (catalogue
  metadata, per-provider prices, regional premium) and
  [Google Cloud](../../sources/cloud.google.com/claude-opus-5-5/2026-10-26.md) (GA model
  card, modalities, limits, regions, quotas).
- **Independent benchmarks, two:** Artificial Analysis's
  [model page](../../sources/artificialanalysis.ai/claude-opus-5-5/2026-10-26.md) and Vals
  AI's [Terminal-Bench 4.0 board](../../sources/vals.ai/terminal-bench-4/2026-10-26.md).
  The existing [AA leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)
  independently shows the same 58.
- **No direct tests were run for this page.** Every number above is quoted from a source
  record; nothing was re-measured. Where a figure appears twice — the AA index (58 on AA,
  57.6 restated on OpenRouter) and Terminal-Bench 4.0 (66.4 vendor, 65.15 Vals, 59.6 AA) —
  both values are recorded rather than reconciled.
- **Weakest links:** AA's per-benchmark numbers reach this wiki only through OpenRouter's
  restatement, because AA's own page renders them client-side; the system card's charts
  were not captured; and no first-party dated snapshot ID was found.

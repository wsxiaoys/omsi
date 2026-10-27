# Claude Sonnet 5.5

Anthropic's Sonnet-tier model, released **2026-09-28** at $2 / $10 per million input /
output tokens — the same token price as Claude Sonnet 5, with cache reads halved to $0.10
([model page](../../sources/claude.com/claude-sonnet-5-5-model-page/2026-10-26.md),
[announcement](../../sources/anthropic.com/claude-sonnet-5-5-announcement/2026-10-26.md)).
It is the second model in the Claude 5.5 family after Opus 5.5, and Artificial Analysis ranks
it **#2** on its Intelligence Index at capture, one place behind Opus 5.5
([AA](../../sources/artificialanalysis.ai/claude-sonnet-5-5/2026-10-26.md)).

Its defining constraint is not a capability but an API contract: **`thinking: {"type":
"disabled"}` is gone**. The lowest thinking setting is `between_tools`, which turns off
up-front thinking but still returns progress updates as thinking blocks, and it is rejected at
`xhigh` and `max` effort ([What's new](../../sources/claude.com/claude-sonnet-5-5-whats-new/2026-10-26.md)).

## Identity

- **Canonical name:** Claude Sonnet 5.5. **API ID:** `claude-sonnet-5-5`.
- **Vendor:** Anthropic. Proprietary; no weights, no on-premises option.
- **Released:** 2026-09-28. **Status:** Active (latest). **Retirement:** not sooner than
  2027-09-28 ([model page](../../sources/claude.com/claude-sonnet-5-5-model-page/2026-10-26.md),
  [Bedrock](../../sources/amazon.com/claude-sonnet-5-5-bedrock-model-card/2026-10-26.md)).
- **Host endpoints**, all with the same undated ID
  ([model page](../../sources/claude.com/claude-sonnet-5-5-model-page/2026-10-26.md)):
  Claude API (`claude-sonnet-5-5`), Amazon Bedrock (`anthropic.claude-sonnet-5-5`, plus
  `us.`/`eu.`/`au.`/`global.` inference profiles), Claude Platform on AWS, Microsoft Foundry,
  and Google Cloud both Google-managed and Anthropic-managed. OpenRouter routes five standard
  endpoints — Google Vertex, Amazon Bedrock, Azure, Claude Platform on AWS and Anthropic
  itself ([OpenRouter](../../sources/openrouter.ai/claude-sonnet-5-5/2026-10-26.md)).
- **Aliases and leaderboard labels:** Artificial Analysis lists it as "Claude Sonnet 5.5 (max
  with fallback)" plus four lower-effort rows; OpenRouter as `anthropic/claude-sonnet-5.5`.
  Both map to `claude-sonnet-5-5`; see [label mapping](#label-mapping-artificial-analysis-to-canonical-id).
- **Siblings:** Claude Sonnet 5 (predecessor, same $2/$10 but cache reads at $0.20); Claude
  Opus 5.5 ($4/$20) and Claude Fable 5.1 ($10/$50) above it; Claude Haiku 5.5 ("from
  $0.10/$0.50") below, which the launch post said "will join the Claude 5.5 family in the
  coming weeks" and which appears as a current model by the 2026-10-26 captures
  ([models overview](../../sources/claude.com/models-overview/2026-10-26.md)).
- **Naming inconsistency, first-party:** the announcement says the model is "available on all
  platforms, including Amazon Web Services, Google Cloud, and Microsoft Azure", while the docs'
  platform table says "Microsoft Foundry". Both refer to Anthropic models served through
  Microsoft's cloud ([announcement](../../sources/anthropic.com/claude-sonnet-5-5-announcement/2026-10-26.md)).

### Is it a distinct model or a repackaging?

Distinct. Three things would each have to be false for this to be a relabelled Sonnet 5, and
none is:

1. **New ID and new cache economics.** `claude-sonnet-5-5` is a separate ID. The input and
   output prices are unchanged, but cache reads are half of Sonnet 5's — "Claude Sonnet 5.5 has
   the same prices as Claude Sonnet 5, except for prompt cache reads, which cost $0.10 USD per
   million tokens, half the Claude Sonnet 5 rate"
   ([What's new](../../sources/claude.com/claude-sonnet-5-5-whats-new/2026-10-26.md)).
   Price alone therefore does *not* separate the two, unlike Opus 5.5 vs Opus 5.
2. **Breaking API changes.** `disabled` thinking, forced `tool_choice`, manual thinking
   budgets, `temperature`/`top_p`/`top_k`, and `computer_20251124` on two of the six platforms
   all return 400 errors. Code written for Sonnet 5 does not run unchanged.
3. **A large measured delta, at least on the vendor's harness.** Terminal-Bench 4.0 moves from
   10.3% to 70.6%, and every row of Anthropic's capability summary improves
   ([system card](../../sources/anthropic.com/claude-sonnet-5-5-system-card/2026-10-26.md)).
   The tokenizer is unchanged, so the same text produces the same token counts — this is a
   model change, not a re-tokenisation.

What it does *not* have is an independent re-measurement of the delta: no captured source
reports Sonnet 5 and Sonnet 5.5 on the same independent harness. The delta is vendor-measured
end to end.

## Current assessment

**Current, GA, not preview.** GA on Google Cloud, active on every platform, retirement floor a
year out.

The evidence supports a clear reading: this is the **cost-efficient tier of the 5.5 wave**, not
a second frontier model. Anthropic says so directly — "Sonnet 5.5 is a faster, lower-cost
complement to Claude Opus 5.5 … strongest at well-scoped everyday tasks, fixing bugs, and
creating polished documents, slides, and spreadsheets" — and the system card's own summary is
that it "is broadly less capable than Opus 5.5 across domains and does not cross any new RSP
thresholds" ([announcement](../../sources/anthropic.com/claude-sonnet-5-5-announcement/2026-10-26.md),
[system card](../../sources/anthropic.com/claude-sonnet-5-5-system-card/2026-10-26.md)).

The interesting part is *how close* it gets on some rows. On Anthropic's numbers it is 2 Elo
behind Opus 5.5 on GDPval-AA (1844 vs 1846) and 11 behind on AA-Briefcase (1811 vs 1822) — both
benchmarks Artificial Analysis ran, not Anthropic — while sitting at half the token price. On
Terminal-Bench 4.0 it *beats* Opus 5.5 (70.6% vs 66.4%), though Opus 5.5 is reported at `xhigh`
and Sonnet 5.5 at `max`, and Sonnet 5.5's run had safeguard fallbacks fire on 1.2% of requests.

Independent measurement agrees on the ranking and disagrees on the level. AA puts it at index
**56**, #2 of 221, two points below Opus 5.5 ([AA](../../sources/artificialanalysis.ai/claude-sonnet-5-5/2026-10-26.md)).
AA's own Terminal-Bench 4.0 figure is **63.6%** at max effort — 7.0 points below the vendor's
70.6% — and Vals AI's is 64.1%
([OpenRouter restatement](../../sources/openrouter.ai/claude-sonnet-5-5/2026-10-26.md)). A
7-point spread across three harnesses is most plausibly a harness difference rather than a
vendor exaggeration: Anthropic reports ±2.5 points of trial noise on its own run and documents
that it disallowed internet egress and pre-cached resources to control for it.

**The cost story needs care.** The announcement claims "up to 30% less per task than its
predecessor" and "30%+ faster". The price per token did not fall; the saving is claimed to come
from fewer tokens per task and faster generation. AA's independent measurement does not
corroborate the token-efficiency half: it measures Sonnet 5.5 at **420M output tokens** on the
Intelligence Index, against a median of 81M, and ranks it **last of 122 models for verbosity** —
worse than Opus 5.5's 260M. AA's cost per index task is $5.46, against Opus 5.5's $5.98. Fewer
tokens per *agentic task* and more tokens per *short index question at max effort* are both
true; they measure different workloads, and only the vendor measures the first.

**Two cautions on the headline benchmark.** Terminal-Bench 4.0 was run "with safeguards
enabled; requests flagged by the safeguards were answered by a fallback model … (1.2% of
requests, affecting 1.5% of trials)", and the two AA-run knowledge-work benchmarks were run
"on a pre-release deployment … which we found to have a bug that could degrade responses to
requests that use structured outputs"
([system card](../../sources/anthropic.com/claude-sonnet-5-5-system-card/2026-10-26.md),
[announcement footnote 3](../../sources/anthropic.com/claude-sonnet-5-5-announcement/2026-10-26.md)).
The published numbers are of a routed system on a snapshot with a known bug, not the bare model.

## Documented capabilities

All from the [model page](../../sources/claude.com/claude-sonnet-5-5-model-page/2026-10-26.md),
[What's new](../../sources/claude.com/claude-sonnet-5-5-whats-new/2026-10-26.md) and
[effort](../../sources/claude.com/effort/2026-10-26.md) unless noted.

| Property | Value |
| --- | --- |
| Context window | 1M tokens (≈555k words on the current tokenizer) |
| Max output | 128K tokens; 300K on the Batch API with the `output-300k-2026-03-24` beta header |
| Input | Text, images; PDF and Files API support documented |
| Output | Text only |
| Reasoning | Adaptive thinking, on by default; five effort levels (`max`, `xhigh`, `high`, `medium`, `low`), default `high` |
| Thinking off | Only via `thinking: {"type": "between_tools"}`, at `high` effort or below |
| Tool use | Function calling, strict tool use, web search, code execution, computer use (`computer_toolset_20260801`), advisor tool (beta), memory tool, batch, prompt caching, token counting, structured outputs |
| Knowledge cutoff | Jun 2026 (both reliable and training-data) |
| Cache minimum | 512 tokens |
| Sampling | `temperature`, `top_p`, `top_k` return a 400 error |

Bedrock additionally documents `bedrock-mantle` and `bedrock-runtime` endpoints, Compaction
(`compact-2026-09-04`), intelligent prompt routing, Guardrails, Agents and Flows — a wider
feature surface than the Claude API page lists
([Bedrock](../../sources/amazon.com/claude-sonnet-5-5-bedrock-model-card/2026-10-26.md)). Google
Cloud lists text/image/PDF input, the same 1M/128K limits, and an empty "not supported"
capability list ([Google Cloud](../../sources/cloud.google.com/claude-sonnet-5-5/2026-10-26.md)).

**Marketing claims, labelled as such:** "a clear upgrade over Claude Sonnet 5", "our fastest
Sonnet model to date", "the best combination of speed and intelligence", "a sharp eye for
design", "writes more clearly than our previous generation", "the first Sonnet model to beat
Pokémon Red working only from screenshots", and thirteen named early-tester testimonials (Epic
Games, Every, CodeRabbit, SpaceXAI, Base44, Unity, Slack, Zendesk, Balyasny, Box, Lovable,
Atlassian and others) ([announcement](../../sources/anthropic.com/claude-sonnet-5-5-announcement/2026-10-26.md)).
The testimonials are vendor-selected and unverifiable; none is treated here as capability
evidence.

### Benchmarks

Anthropic's capability summary (Table 8.1.A), adaptive thinking at max effort, five trials,
competitor rows quoted from the competitors' own publications
([system card](../../sources/anthropic.com/claude-sonnet-5-5-system-card/2026-10-26.md)):

| Evaluation | Sonnet 5.5 | Sonnet 5 | Opus 5.5 | GPT-6 Sol |
| --- | --- | --- | --- | --- |
| SWE-Bench Pro | 81.3 | 63.2 | 89.9 | – |
| SWE-Bench Multilingual | 90.3 | 78.3 | 93.9 | – |
| SWE-Bench Multimodal | 54.3 | 28.1 | 61.4 | – |
| FrontierCode v1.1 (Main) | 46.2 | 42.4 | 54.4 | 49.3 |
| Humanity's Last Exam (no / with tools) | 56.9 / 64.5 | 43.1 / 54.9 | 64.4 / 67.7 | – / – |
| OSWorld 2.1 (partial) | 80.1 | 57.0 | 81.8 | – |
| HealthBench Professional | 69.2 | 57.8 | 65.6 | – |
| GDPval-AA v2.1 (Elo) | 1844 | 1449 | 1846 | 1487 |
| AA-Briefcase v1.1 (Elo) | 1811 | 1359 | 1822 | 1483 |
| AutomationBench | 44.7 | 10.7 | 42.5 | 32.0 |

Reported outside that table, in the card's own prose:

| Evaluation | Sonnet 5.5 | Sonnet 5 | Opus 5.5 |
| --- | --- | --- | --- |
| Terminal-Bench 4.0 | 70.6% | 10.3% | 66.4% (at `xhigh`) |
| FrontierCode v1.1 Main at `xhigh` | 52.1% | – | – |
| CursorBench 4.0 (max / xhigh / high / medium) | 55.5 / 53.1 / 47.8 / 39.2 | 34.1 (best) | 57.8 (best) |
| Chartography (no / with tools) | 61.6 / 90.2 | 15.6 / – | 64.4 / 89.0 |
| OSWorld 2.1 strict pass | 43.5% | 25.6% | 48.7% |
| ProgramBench | 79.7% | 77.3% | 91.2% |
| DeepSWE v1.1 | 71.0% | – | – |
| Toolathlon-Verified (Pass@1) | 77.8% | 74.7% | 77.8% |

Four caveats belong on those numbers:

- **Not all vendor-run.** Cognition ran FrontierCode; Cursor ran CursorBench "end-to-end in
  Cursor's production agent harness" and "independently measured and reported" it; Artificial
  Analysis ran GDPval-AA and AA-Briefcase; Surge AI authored Chartography, with Anthropic's own
  grading harness. SWE-Bench, HLE, OSWorld, Terminal-Bench, ProgramBench and Toolathlon are
  Anthropic's runs.
- **FrontierCode is non-monotonic in effort.** Sonnet 5.5 scores 52.1% at `xhigh` and 46.2% at
  `max`, because at max effort it "more often ran Claude Code's code-review skill, which splits
  the review across many subagents", producing timeouts or out-of-scope edits. Any single
  FrontierCode number for this model is under-specified without its effort level.
- **Terminal-Bench 4.0 was run with safeguard fallbacks active** (1.2% of requests flagged), so
  70.6% is a routed-system score.
- **The two AA-run Elo rows come from a pre-release deployment with a structured-output bug**,
  which Anthropic expects to "understate its performance".

Independent measurements, which is where the picture softens:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2, max effort | **56**, #2 of 221 (median 28) |
| Artificial Analysis | same, xhigh / high / medium / low | 51.9 / 46.8 / 40.8 / 35.9 |
| Artificial Analysis | Terminal-Bench 4.0, max effort | 63.6% |
| Artificial Analysis | GDPval-AA, max / low | 66.9% / 34.1% |
| Artificial Analysis | cost per index task, max | $5.46 |
| Artificial Analysis | output tokens on the index, max | 420M (#122 of 122) |
| Artificial Analysis | output speed, max | 141.3 tok/s (#33 of 192) |
| Vals AI | Terminal-Bench 4.0 | 64.1% |
| OpenRouter (AutoExacto, per host) | GPQA Diamond | 91.6–93.2% across 8 endpoints |
| OpenRouter (AutoExacto, per host) | TAU-Bench | 77.3–79.5% across 8 endpoints |

AA's per-effort sub-scores, as re-published on
[OpenRouter](../../sources/openrouter.ai/claude-sonnet-5-5/2026-10-26.md): HLE 55.0% at max
falling to 36.2% at low; GDPval-AA 66.9% → 34.1%; Terminal-Bench 4.0 63.6% → 20.7%; SciCode
61.0% → 49.1%. The effort slope is steeper than Opus 5.5's on the index (20.1 points from max to
low, against 16 for Opus 5.5), which is the practical shape of the model: most of its capability
sits at `high` and above.

One contradiction is worth flagging rather than reconciling. **ProgramBench:** Anthropic reports
79.7%, OpenRouter's restatement of Vals AI reports **6.5%**. Those cannot both be the same
scoring rule; a plausible explanation is a different task subset or a different ProgramBench
version, but no captured source says which. Treat the ProgramBench number as unresolved.

## Limitations and constraints

**API and integration**

- Thinking cannot be disabled with `disabled` — that returns a 400 pointing at
  `between_tools`. The cheapest setting is `between_tools` at `low` effort, not "no thinking".
- `between_tools` is rejected at `xhigh` and `max` effort, and effort cannot change
  mid-conversation while it is in use. To vary effort per turn, use adaptive thinking.
- `tool_choice` of `any` or `tool` returns a 400. Use `auto` with `strict: true`.
- `temperature`, `top_p` and `top_k` all return a 400. Sampling is not tunable at all.
- Thinking blocks are bound to the model, the conversation prefix and the producing account.
  Sonnet 5.5 reads Sonnet 5's blocks, so upgrading keeps the reasoning; Opus 5.5 reads Sonnet
  5.5's blocks on the Claude API and Google Cloud (Google managed) only, so the reverse
  downgrade does not. Every other move away from Sonnet 5.5 runs without its earlier reasoning.
- At the default `display: "omitted"`, text between tool calls arrives in thinking blocks whose
  text is empty — streaming UIs go quiet between tool calls until they opt in.
- `computer_20251124` is rejected on the Claude API and Google Cloud (Google managed) but
  **accepted on Amazon Bedrock**, so the same request is portable in one direction only.
- The advisor tool rejects Opus 4.8, Opus 4.7, Sonnet 5 and Haiku 5.5 as advisors for a Sonnet
  5.5 executor, and every accepted advisor returns its advice encrypted.

**Safeguards change what the model answers**

- Cyber requests fall back to Claude Sonnet 5 — automatically in Anthropic's apps, opt-in on
  the API via `fallbacks: "default"`. The system card warns "users should expect increased
  refusals with Sonnet 5.5, even on benign cybersecurity-related tasks", and that vulnerability
  discovery in compiled binaries is blocked while source-code review is allowed.
- Biology classifiers fall back to nothing; distillation classifiers block with no fallback.
- "The fallback behavior described above applies to our first-party products and to developers
  who are opted in … traffic on our models via other platforms and providers may experience
  different behavior" — so behavior on Bedrock, Vertex or Foundry is not guaranteed identical.
- Refusal billing depends on category, and a refusal counts against rate limits either way.

**Data and compliance**

- Preserved thinking: accounts created on or after 2026-08-31 have prefix-mismatch enforcement
  on by default, so integrations that rewrite earlier history can get a 400.
- Zero data retention is available: "Claude Sonnet 5.5 is available with zero data retention"
  per the announcement.
- No open weights and no on-premises deployment, and no first-party dated snapshot ID is
  documented (see below).

**Cost shape**

- Verbose on long-form evaluation: 420M output tokens on AA's index against an 81M median, and
  last of 122 models on verbosity. Token-price comparisons understate the bill for
  reasoning-heavy work.
- No fast mode: fast mode is documented only for Opus 5.5, Opus 5 and Opus 4.8
  ([pricing](../../sources/claude.com/pricing/2026-10-26.md)).
- No long-context premium inside the 1M window — the model page carries a single flat price
  row, and only Haiku 5.5 has a documented two-tier price.
- US-only inference through `inference_geo` is a 1.1× multiplier; partner-operated platforms
  price independently.

## Access, pricing, licensing

USD per million tokens
([model page](../../sources/claude.com/claude-sonnet-5-5-model-page/2026-10-26.md),
[pricing](../../sources/claude.com/pricing/2026-10-26.md)):

| Item | Claude Sonnet 5.5 | Claude Sonnet 5 |
| --- | --- | --- |
| Input | $2 | $2 |
| Output | $10 | $10 |
| 5-minute cache write | $2.50 | $2.50 |
| 1-hour cache write | $4 | not listed on the pricing page |
| Cache read | $0.10 (5% of input) | $0.20 (10% of input) |
| Batch API | $1 / $5 | not listed on the pricing page |

**Billing basis:** per token, with prompt caching, batch (50% off) and data-residency
multipliers stacking on the base rates. No per-request or per-seat API price.

**Licence:** proprietary, commercial terms via Anthropic's Commercial Terms of Service; no
weights are published, so there is no licence to redistribute. On Bedrock the model is "a
third-party model offered and billed through AWS Marketplace", with charges appearing under the
model provider rather than under Amazon Bedrock
([Bedrock](../../sources/amazon.com/claude-sonnet-5-5-bedrock-model-card/2026-10-26.md)).

**Host differences worth knowing:**

- **OpenRouter:** all five standard endpoints list at $2.00 / $10.00 with a $0.10 cache read —
  no premium in the default pool, unlike Opus 5.5. Three non-standard endpoints (two Google
  Vertex, one Azure) list at $2.20 / $11.00 and are excluded from standard routing. EU in-region
  routing is available on Business or Enterprise and "fails closed". All five standard
  endpoints reported 100% uptime at capture
  ([OpenRouter](../../sources/openrouter.ai/claude-sonnet-5-5/2026-10-26.md)).
- **Google Cloud:** GA, text/image/PDF input, 1M/128K limits, US/EU multi-region plus a
  `global` endpoint and an `asia-southeast1` ML-processing region; quota 1,250 QPM and 12.5M
  input TPM per multi-region, doubling on the global endpoint. Unlike Opus 5.5, Sonnet 5.5
  supports **Provisioned Throughput** and **Shared Model Lineage Quota**
  ([Google Cloud](../../sources/cloud.google.com/claude-sonnet-5-5/2026-10-26.md)).
- **Amazon Bedrock:** no in-Region endpoint — every call goes through a `us.`/`eu.`/`au.` geo
  profile or the `global.` profile; a second `bedrock-mantle` endpoint serves the Messages API;
  Standard, Priority, Flex, Reserved and Batch service tiers; the older `computer_20251124`
  computer-use tool still works here ([Bedrock](../../sources/amazon.com/claude-sonnet-5-5-bedrock-model-card/2026-10-26.md)).
- **Host choice moves benchmark scores.** OpenRouter's per-endpoint GPQA Diamond spans 91.6% to
  93.2% and TAU-Bench 77.3% to 79.5% across eight entries (seven endpoints plus auto-routing) of
  the same model — a small but real spread that bounds how much weight a single host's score
  deserves.

## Label mapping: Artificial Analysis to canonical ID

The roster label came from Artificial Analysis, whose row is "Claude Sonnet 5.5 (max with
fallback)". That label resolves to `claude-sonnet-5-5` at `effort: "max"` on four independent
matches: AA's URL slug `claude-sonnet-5-5`; the 2026-09-28 release date; the $2/$10 "based on
Anthropic's API" price; and the five-variant set (`max`, `xhigh`, `high`, `medium`, `low`) that
is exactly Anthropic's effort parameter, with `high` as the documented default
([AA](../../sources/artificialanalysis.ai/claude-sonnet-5-5/2026-10-26.md),
[effort](../../sources/claude.com/effort/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/claude-sonnet-5-5/2026-10-26.md)).

Two parts of the label are not vendor language:

- **"with fallback"** is AA's own qualifier. The best supported reading is that the score
  reflects the deployed system, including the documented Sonnet 5 cyber and `frontier_llm`
  fallbacks. AA does not define it and does not say whether any fallback fired. AA lists no
  "without fallback" Sonnet 5.5 row, so the two cannot be compared.
- **AA's "max"** is not a model variant. It is one of five effort settings of one model, and the
  five rows differ by 20.1 index points (56.0 → 35.9) — larger than the gap between Sonnet 5.5
  and its nearest competitor. Any comparison that quotes "Claude Sonnet 5.5" without an effort
  level is under-specified. This matters more here than for Opus 5.5, because the announcement
  and Anthropic's own apps default to `medium` while the Claude Platform defaults to `high`.

## Unresolved questions

1. **Does a first-party dated snapshot exist?** OpenRouter's `canonical_slug` is
   `anthropic/claude-sonnet-5.5-20260928`, matching the public release date. Anthropic's docs
   print only the undated `claude-sonnet-5-5` on all six platforms. Either the snapshot ID is
   unpublished or OpenRouter constructed it from the release date. Unresolved; treat
   `20260928` as host naming until a first-party page shows it.
2. **Does the Sonnet 5 → Sonnet 5.5 delta survive an independent harness?** No captured source
   measures both models on the same independent benchmark. AA's leaderboard capture has no
   Sonnet 5 row. The vendor's 10.3% → 70.6% Terminal-Bench jump is the single largest claim on
   the page and the least independently checked.
3. **Which effort level did AA use per benchmark?** AA's page prints only the `max` composite;
   the per-benchmark series reach this wiki through OpenRouter's restatement, which is labelled
   per effort but is a second-hand copy.
4. **Why is AA's TTFT 470.80 seconds?** It is two orders of magnitude above the 3.88s median and
   above every comparable model. Either it is time to first *answer* token after a long
   maximum-effort reasoning phase or a measurement artefact. AA does not say. Opus 5.5 has the
   same anomaly at 712.32s.
5. **ProgramBench: 79.7% or 6.5%?** Anthropic and Vals AI (via OpenRouter) differ by 73 points on
   a benchmark of the same name. Neither source explains the discrepancy.
6. **Is "Adaptive thinking can be turned on or off" (Google Cloud) compatible with "doesn't
   support `thinking: {"type": "disabled"}`" (Anthropic)?** The two first-party pages appear to
   disagree. The most likely reading is that Google's sentence refers to the `between_tools`
   setting rather than to `disabled`, but neither page says so.
7. **Does the model behave identically off the first-party platform?** The system card explicitly
   declines to promise it: fallbacks "apply to our first-party products and to developers who
   are opted in". Whether Bedrock or Vertex enforce the same cyber routing was not captured.
8. **Is there a non-reasoning variant?** AA's generic note says "a non-reasoning variant may
   also exist", contradicting Anthropic's refusal of `disabled`. Vendor documentation wins;
   the AA note is a host-side caveat, not a model fact.

## Evidence status

**Floor met: four first-party records, three independent hosts, two independent benchmark
captures.**

- **First-party:** the [model page](../../sources/claude.com/claude-sonnet-5-5-model-page/2026-10-26.md)
  (identity, six platform IDs, limits, prices, lifecycle), [What's
  new](../../sources/claude.com/claude-sonnet-5-5-whats-new/2026-10-26.md) (breaking changes,
  feature support, refusal and fallback behaviour), the launch
  [announcement](../../sources/anthropic.com/claude-sonnet-5-5-announcement/2026-10-26.md)
  (vendor benchmark table, cost and speed claims, safeguards, tester quotes) and the 148-page
  [system card](../../sources/anthropic.com/claude-sonnet-5-5-system-card/2026-10-26.md)
  (evaluation tables, harness detail, safeguards, RSP). Two shared first-party records —
  [pricing](../../sources/claude.com/pricing/2026-10-26.md) and
  [effort](../../sources/claude.com/effort/2026-10-26.md) — supply the cache-read rule, the
  fast-mode scope and the effort value set.
- **Independent hosts:** [OpenRouter](../../sources/openrouter.ai/claude-sonnet-5-5/2026-10-26.md)
  (five routed endpoints, per-provider prices and latency, EU routing, per-host GPQA/TAU scores,
  re-published AA and Vals numbers), [Google Cloud](../../sources/cloud.google.com/claude-sonnet-5-5/2026-10-26.md)
  (GA model card, modalities, limits, regions, quota, usage types) and
  [Amazon Bedrock](../../sources/amazon.com/claude-sonnet-5-5-bedrock-model-card/2026-10-26.md)
  (lifecycle, inference-profile IDs, capabilities, service tiers).
- **Independent benchmarks:** Artificial Analysis's
  [model page](../../sources/artificialanalysis.ai/claude-sonnet-5-5/2026-10-26.md) and the
  existing [AA leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md),
  which independently shows the same 56. Vals AI and Design Arena numbers reach this wiki only
  through OpenRouter's restatement.
- **No direct tests were run for this page.** Every number above is quoted from a source record;
  nothing was re-measured. Where a figure appears twice — the AA index (56.0 on AA, 56.0 on
  OpenRouter, 56 on the leaderboard) and Terminal-Bench 4.0 (70.6 vendor, 64.1 Vals, 63.6 AA) —
  the values are recorded rather than reconciled.
- **Weakest links:** the vendor's Terminal-Bench delta has no independent counterpart for
  Sonnet 5; AA's per-benchmark series arrive second-hand through OpenRouter; the system card's
  charts were not read (images only); and no first-party dated snapshot ID was found.
- **Roster date check:** released 2026-09-28, inside the one-year window that opens 2025-10-26.
  No out-of-window exception applies.

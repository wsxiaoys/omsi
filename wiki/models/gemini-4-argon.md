# Gemini 4 Argon

Google DeepMind's frontier reasoning model, announced **2026-09-30** to vetted cyber
defenders and generally available since **2026-10-13** at an introductory **$2 / $10 per
million input / output tokens** — half of its $4 / $20 list price, which takes effect
2026-12-01 ([announcement](../../sources/blog.google/gemini-4-argon-announcement/2026-10-26.md),
[GA post](../../sources/blog.google/gemini-4-argon-available/2026-10-26.md),
[pricing](../../sources/cloud.google.com/gemini-4-argon-pricing/2026-10-26.md)).

It is the first model in the Gemini 4 family and the first Gemini to sell a **single
1,048,576-token budget covering input *and* output**, where output includes thinking,
function calls and the final response
([developer guide](../../sources/cloud.google.com/gemini-4-argon-developer-guide/2026-10-26.md)).
Outputs beyond one request's 65,536-token cap require a continuation-token loop that works
only on the `v1beta1` API.

Its defining constraint is not capability but API surface: `temperature`, `top_p` and `top_k`
are ignored, `thinking_budget` and `MINIMAL` return HTTP 400, explicit context caching is
gone, and prefilled model turns are rejected. Code written for Gemini 3.1 Pro does not run
unchanged.

## Identity

- **Canonical name:** Gemini 4 Argon. **API ID:** `gemini-4-argon`
  ([model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md)).
- **Vendor:** Google / Google DeepMind. Proprietary; no weights, no on-prem option.
- **Announced:** 2026-09-30, limited to "a set of trusted cyber defenders through our
  Fairwind Program"
  ([announcement](../../sources/blog.google/gemini-4-argon-announcement/2026-10-26.md)).
- **Generally available:** 2026-10-13 — "Launch stage: GA", "Release date: October 13, 2026",
  retirement "October 13, 2027 or later"
  ([model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md)).
  Both dates are inside the one-year window; no exception is needed.
- **Family position:** "the first model in the Gemini 4 family"
  ([developer guide](../../sources/cloud.google.com/gemini-4-argon-developer-guide/2026-10-26.md));
  Google says "we're looking forward to bringing you the rest of the Gemini 4 family"
  ([GA post](../../sources/blog.google/gemini-4-argon-available/2026-10-26.md)). No other
  Gemini 4 model exists at capture; the only variant is the cyber-permissive sibling below.
- **Host endpoints:** Gemini API (paid tier) in AI Studio and Android Studio
  ([developer post](../../sources/blog.google/gemini-4-argon-developers/2026-10-26.md));
  Gemini Enterprise Agent Platform — the Google Cloud catalogue that now serves the former
  `vertex-ai` documentation paths — on `global`, `us`, `eu`, `europe-west2` and
  `asia-southeast1`
  ([model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md));
  OpenRouter as `google/gemini-4-argon` routed to Google Vertex and Google AI Studio
  ([OpenRouter](../../sources/openrouter.ai/gemini-4-argon/2026-10-26.md)).
- **Aliases and leaderboard labels:** Artificial Analysis lists "Gemini 4 Argon (high)";
  OpenRouter uses `google/gemini-4-argon` with canonical slug `google/gemini-4-argon-20261013`.
  See [label mapping](#label-mapping-artificial-analysis-to-canonical-id).
- **Sibling:** `gemini-4-argon-cyber-permissive` — a version of Gemini 4 Argon for defensive
  security work, allowlisted through the Fairwind Program, default thinking level HIGH instead
  of MEDIUM, computer use disabled, priced at list with no promotion
  ([model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md),
  [pricing](../../sources/cloud.google.com/gemini-4-argon-pricing/2026-10-26.md)).
  Google's launch post puts the same arrangement as "we'll be releasing Argon without cyber
  guardrails" for trusted defenders
  ([announcement](../../sources/blog.google/gemini-4-argon-announcement/2026-10-26.md)).

### Is "Argon" a codename, and is this a new model?

**Not a codename.** "Gemini 4 Argon" is Google's public product name and is embedded in the
model ID `gemini-4-argon`; the roster's suspicion that a leaderboard label might hide a
different canonical ID does not apply here. The only part of the AA label that is not vendor
language is `(high)`, which is one of three documented thinking levels.

**A new model, not a repackaging.** The model card states it plainly — "Gemini 4 Argon, a new
frontier model, is not a modification or a fine-tune of a prior model"
([model card](../../sources/deepmind.google/gemini-4-argon-model-card/2026-10-26.md)) — and
three other facts agree: a new ID at a new price, API conventions that break Gemini 3.1 Pro
code (`thinking_budget` → HTTP 400, sampling parameters ignored, explicit caching removed,
unified token budget), and a benchmark profile that differs from the predecessors in both
directions rather than uniformly improving.

## Current assessment

**Current and GA.** Not a preview, not deprecated, with a retirement floor a year out.

Two readings of the evidence are supported, and they point at different uses.

**Google's own table says it wins knowledge work and multimodal understanding, and loses
several coding and science rows.** Argon leads the vendor's Vals Index (68.9% against Claude
Opus 5.5's 67.0% and GPT-6 Astra's 63.1%), AutomationBench (51.3% vs 42.5% / 41.4%), DeepSWE
v1.1 (77.9% vs 74.2% / 74.1%), Harvey's Legal Agent Benchmark (19.6% vs 3.8%), LABBench 2
(88.8%), LVBench (91.7%) and long-context GraphWalks at 256k–1M (84.2% vs 66.8% / 71.8%).
It trails on FrontierSWE v2 (55.0% vs GPT-6 Astra's 65.5% and Opus 5.5's 62.3%),
Terminal-Bench 4.0 (57.4% vs Opus 5.5's 66.4%), Terminal-Bench Science 0.1 (57.6% vs 68.1%)
and PostTrainBench (45.3% vs 49.3%)
([model card](../../sources/deepmind.google/gemini-4-argon-model-card/2026-10-26.md)). Every
one of those rows is vendor-run, and the card states no effort level for any of them — which
matters, because the model has three.

**Independent measurement puts it ninth, not first.** Artificial Analysis scores it **53** on
Intelligence Index v4.3.2, rank 9 of 221, with a median of 28 — behind Claude Opus 5.5 (58),
Claude Sonnet 5.5 (56), Kimi K3.1 Pro (55), and level with GPT-6 Astra (53)
([AA](../../sources/artificialanalysis.ai/gemini-4-argon/2026-10-26.md),
[AA leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)).
So the vendor's "leading" claims survive as sector wins (knowledge work, long video) but not
as a general-capability lead.

**It is slow and verbose for the price.** AA measures 79.7 output tokens per second against a
median of 89, a time to first token of **50.81 s** at high effort against a 3.88 s median,
and 110M output tokens on the index against an 81M median. Cost per index task is $1.62
([AA](../../sources/artificialanalysis.ai/gemini-4-argon/2026-10-26.md)). OpenRouter's
endpoint measurements are slower still, 18–46 tok/s
([OpenRouter](../../sources/openrouter.ai/gemini-4-argon/2026-10-26.md)).

**The price is promotional, not structural.** $2 / $10 is half of list through 2026-11-30;
from 2026-12-01 the model is $4 / $20, which is Opus 5.5's price, not a discount to it
([pricing](../../sources/cloud.google.com/gemini-4-argon-pricing/2026-10-26.md)).

## Documented capabilities

From the [model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md),
[developer guide](../../sources/cloud.google.com/gemini-4-argon-developer-guide/2026-10-26.md)
and [model card](../../sources/deepmind.google/gemini-4-argon-model-card/2026-10-26.md) unless
noted.

| Property | Value |
| --- | --- |
| Context window | 1,048,576 tokens, **unified across input and output** (output includes thinking, tool calls, answer) |
| Max output, one request | 65,536 tokens streaming; 32,768 non-streaming direct HTTP |
| Max output, long decode | 1,048,576 minus input tokens, via `continuation_token` on `v1beta1` `GenerateContent` only |
| Input | Text, image, audio, video, files (PDF/plain text); image/audio/video **input only** |
| Output | Text only |
| Reasoning | Mandatory; `thinking_level` = `LOW`, `MEDIUM` (default), `HIGH`. `thinking_budget` and `MINIMAL` → HTTP 400 |
| Sampling | `temperature`, `top_p`, `top_k` ignored; `frequency_penalty`, `presence_penalty`, `candidate_count` → HTTP 400 |
| Caching | Implicit only, durable by default; 95% discount on cache hits; explicit caching unsupported |
| Tool use | Function calling, structured output, code execution, URL context, grounding (Google Search, Maps, Agent Search, Parallel Web Search, Exa, Web Grounding for Enterprise); computer use preview |
| Video | Agentic video understanding GA, off by default (`media_processing="agentic"`) |
| Knowledge cutoff | March 2026 |
| Architecture | Sparse MoE transformer, natively multimodal, trained on TPUs with JAX/ML Pathways; no parameter count disclosed |
| Not supported | Tuning, RAG Engine, Gemini Live API, explicit caching, fixed quota |
| Billing surfaces | Standard PayGo, Priority PayGo, Provisioned Throughput, Batch |

**Per-modality limits** ([model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md)):
3,000 images per prompt (100 URIs; 7 MB inline, 30 MB from Cloud Storage); 3,000 files or
pages per text prompt (50 MB PDF, 7 MB plain text); ~45 minutes of video with audio or ~1 hour
without, 10 videos per prompt; ~8.4 hours or 1M tokens of audio, one audio file per prompt.

**Marketing claims, labelled as such:** "our most resilient model yet against indirect prompt
injections", Gray Swan IPI attack success cut "to 0.7%", shortcut attempts "dropped to just
2%", bio red teaming that "could only unlock less than 1% of bio sub-tasks", "new state of the
art" on DeepSWE v1.1, and internal anecdotes about Chrome refactors, ADK, xTB and Gemma
inference speedups
([announcement](../../sources/blog.google/gemini-4-argon-announcement/2026-10-26.md),
[GA post](../../sources/blog.google/gemini-4-argon-available/2026-10-26.md)). These are
vendor-internal instruments and internal productivity stories; they are not treated here as
capability evidence.

### Benchmarks

Vendor table, "as of October, 2026", reproduced in full on the
[model card record](../../sources/deepmind.google/gemini-4-argon-model-card/2026-10-26.md).
Selected rows:

| Evaluation | Gemini 4 Argon | GPT-6 Astra | Claude Fable 5.1 | Claude Opus 5.5 |
| --- | --- | --- | --- | --- |
| Vals Index | **68.9** | 63.1 | 65.8 | 67.0 |
| AutomationBench | **51.3** | 41.4 | 31.4 | 42.5 |
| Harvey's Legal Agent Benchmark | **19.6** | 5.4 | 6.7 | 3.8 |
| DeepSWE v1.1 | **77.9** | 74.1 | 67.4 | 74.2 |
| FrontierSWE v2 | 55.0 | **65.5** | 56.3 | 62.3 |
| Terminal-Bench 4.0 | 57.4 | 58.2 | 57.9 | **66.4** |
| Terminal-Bench Science 0.1 | 57.6 | **68.1** | 52.6 | 63.3 |
| LABBench 2 | **88.8** | 85.4 | 68.6 | 73.1 |
| GraphWalks 256k–1M (BFS F1) | **84.2** | 71.8 | 65.0 | 66.8 |
| LVBench | **91.7** | 87.5 | 79.7 | 83.7 |
| OSWorld-2.0 (offline, partial) | 69.2 | **72.6** | — | — |
| CWE-bench v1 | **68.0** | **68.0** | 58.0 | 67.0 |

Caveats that belong on that table: the competitor columns are quoted from the competitors'
own publications rather than re-run; no effort level, seed or scaffold is stated per row; and
the launch post's claim that CWE-bench v1 "ties for first place with a top score of 68%" is
supported by the table only in the narrow sense that 68.0 equals GPT-6 Astra's 68.0 — it is a
tie, not a lead.

Independent measurements:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2, high effort | **53**, #9 of 221 (median 28) |
| Artificial Analysis | HLE / AA-LCR / GDPval-AA / CritPt / SciCode | 57.1% / 79.7% / 56.6% / 27.1% / 61.8% |
| Artificial Analysis | Terminal-Bench 4.0 | 57.1% (vendor: 57.4%) |
| Artificial Analysis | AA-Omniscience accuracy / non-hallucination | 49.9% / 84.9% |
| Vals AI (via OpenRouter) | Vals Index / Vibe Code Bench v1.1 | 69.2% / 91.9% |
| Vals AI (via OpenRouter) | Terminal-Bench 4.0 / ProgramBench | 57.6% / 2.5% |
| Design Arena (via OpenRouter) | 3D / Website / SVG Elo | 1385 / 1316 / 1322 |

The AA per-benchmark figures are restatements published on
[OpenRouter](../../sources/openrouter.ai/gemini-4-argon/2026-10-26.md); AA's own page renders
them client-side and only the composite index, speed, latency and cost figures were
extractable from the [AA capture](../../sources/artificialanalysis.ai/gemini-4-argon/2026-10-26.md).
AA's Terminal-Bench 4.0 figure of 57.1% is within 0.3 points of the vendor's 57.4% and Vals
AI's 57.6%, so this is one row where vendor and independent runs agree closely; nothing else
in the captured sources was re-measured by two parties.

## Limitations and constraints

**The context window is not a 1M input window.** Input, thinking, tool calls and answer share
one 1,048,576-token budget, so a request with 900K tokens of input has ~148K left for
everything the model generates. The guide explicitly advises against long decode for "agents
that call tools in many short turns" and for "prompts near the 1,048,576-token input limit"
([developer guide](../../sources/cloud.google.com/gemini-4-argon-developer-guide/2026-10-26.md)).

**Long decode is a protocol, not a parameter.** Outputs over 65,536 tokens need
`continuation_token` loops; these work only on `v1beta1` `GenerateContent`, not on the
Interactions API, not on `v1`, and not through "the OpenAI compatibility layer" or older SDKs.
Each request has a 20-minute limit, and continuation requests re-prefill prior output as
input, so `prompt_token_count` grows and the guide says to read
`initial_prompt_token_count` for compaction decisions instead.

**Sampling controls are gone.** `temperature`, `top_p` and `top_k` are ignored; the documented
way to change behaviour is `thinking_level` and `response_schema`. Deterministic sampling
(`temperature: 0`) is not available, and requests carrying `frequency_penalty`,
`presence_penalty` or `candidate_count` fail with HTTP 400.

**Chat histories are validated.** A history cannot end with a `model` turn, and prefilled
model turns are unsupported — a migration hazard for harnesses that prime the assistant.

**Billing extends beyond successful responses.** "When a completion exceeds 32K tokens in
length, users will be charged for retrievable token usage even if the request ultimately
fails due to client or server timeouts", effective 2026-11-13
([pricing](../../sources/cloud.google.com/gemini-4-argon-pricing/2026-10-26.md)). Every token
processed is billed, "including thinking tokens and internal tool system instructions and
function declarations when using grounding"
([developer guide](../../sources/cloud.google.com/gemini-4-argon-developer-guide/2026-10-26.md)).

**Safeguards and the cyber split.** Google's Frontier Safety Framework assessment says it
"cannot rule out" that Argon reached the biological CBRN CCL and the cybersecurity CCL, and
that safety cases bring residual risk below both
([model card](../../sources/deepmind.google/gemini-4-argon-model-card/2026-10-26.md)). The
public deployment therefore ships with the safeguards those safety cases describe, while
`gemini-4-argon-cyber-permissive` is the variant offered with cyber guardrails removed for
Fairwind members — and that allowlist "doesn't carry over" from Gemini 3.8 Flash Cyber
([model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md)). The
published benchmark rows do not say whether they were run on the guarded or permissive
variant.

**Speed and verbosity.** 79.7 tok/s and a 50.81 s TTFT at high effort
([AA](../../sources/artificialanalysis.ai/gemini-4-argon/2026-10-26.md)); 110M output tokens
on AA's index. Interactive use at `HIGH` is latency-hostile, which is presumably why Google
defaults to `MEDIUM`.

**No first-party dated snapshot.** `gemini-4-argon` is undated on every Google surface;
OpenRouter's `-20261013` suffix is host naming that happens to match the GA date
([OpenRouter](../../sources/openrouter.ai/gemini-4-argon/2026-10-26.md)). No checkpoint
history can be tracked.

## Access, pricing, licensing

USD per 1M tokens, Google Cloud rates
([pricing](../../sources/cloud.google.com/gemini-4-argon-pricing/2026-10-26.md)):

| Tier | Through 2026-11-30 | From 2026-12-01 |
| --- | --- | --- |
| Standard, global — input / cached input / output | $2 / $0.10 / $10 | $4 / $0.20 / $20 |
| Standard, non-global | $2.20 / $0.11 / $11 | $4.40 / $0.22 / $22 |
| Priority, global | $3.60 / $0.18 / $18 | $7.20 / $0.36 / $36 |
| Batch, global | $1 / $0.05 / $5 | $2 / $0.10 / $10 |
| Cyber Permissive (no promotion) | $4 / $0.20 / $20 | $4 / $0.20 / $20 |

Cached **output** is charged at the full output rate in every tier; only input caching is
discounted. Grounding with Google Search includes 5,000 queries per month across all Gemini 3
and 4 models, then $14 per 1,000 queries. Provisioned Throughput carries a 50% credit on net
spend from 2026-10-13 through 2026-11-30.

**Billing basis:** per token, with input caching at 95% off, batch at 50% of standard, priority
at 1.8× standard, and a regional premium of 10% outside `global`. AA's blended rate at a
7:2:1 cache-hit/input/output mix is $1.47 per 1M
([AA](../../sources/artificialanalysis.ai/gemini-4-argon/2026-10-26.md)).

**The "introductory price" is a 50% credit, not a tier.** Google's launch posts call $2 / $10
an introductory price and give $4 / $20 as what applies "after the introductory period
expires"; the Cloud price page implements the discount as "50% credits back on net spend"
through 2026-11-30; OpenRouter shows $4.00 / $20.00 struck through with a "50% off" badge
([announcement](../../sources/blog.google/gemini-4-argon-announcement/2026-10-26.md),
[pricing](../../sources/cloud.google.com/gemini-4-argon-pricing/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/gemini-4-argon/2026-10-26.md)). Any cost comparison
dated after 2026-11-30 must use $4 / $20.

**Host differences.** OpenRouter routes to Google Vertex and Google AI Studio, lists six
endpoints including Flex and Priority, reports 18–46 tok/s across them and 91.95–100% uptime,
and notes the model is "Not currently available through EU in-region routing"
([OpenRouter](../../sources/openrouter.ai/gemini-4-argon/2026-10-26.md)). OpenRouter's metadata
also carries a cache-write price of $0.1875 per 1M tokens that has no counterpart on Google's
price page.

**Licence:** proprietary, via Google's Gemini API Additional Terms and Google Cloud Platform
Terms of Service; no weights are published, so there is nothing to redistribute or self-host
([model card](../../sources/deepmind.google/gemini-4-argon-model-card/2026-10-26.md)). The
cyber-permissive variant adds Section 31 of the Service Specific Terms and is allowlist-only
([model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md)).

## Label mapping: Artificial Analysis to canonical ID

The roster label came from Artificial Analysis, whose row is "Gemini 4 Argon (high)". Three
matches tie it to `gemini-4-argon` at thinking level HIGH:

1. **Date.** AA: "released on September 30, 2026" — the announcement date, not the 2026-10-13
   GA date Google prints.
2. **Price.** AA: "$2.00 per 1M input tokens and $10.00 per 1M output tokens (based on
   Google's API)" — Google's introductory price.
3. **Effort set.** AA's variant is `high`; Google documents exactly three thinking levels and
   OpenRouter exposes the same three with `medium` as the default.

What the label does *not* say is which level is being compared elsewhere. Google's default is
`MEDIUM`, so AA's headline 53 is **not** the default configuration, and a reader quoting
"Gemini 4 Argon scores 53" without the level is under-specifying the model the same way AA's
own DeepSeek row does.

## Unresolved questions

1. **Which caching minimum is real?** The model page says implicit caching applies from
   4,096 tokens; the developer guide for the same model says "shared prompt prefixes of 6,144
   tokens or more" (and repeats 6,144 for the continuation discount). Unresolved first-party
   contradiction.
2. **What does AA's 53 correspond to in Google's terms?** AA's `high` maps cleanly onto
   `thinking_level=HIGH`, but AA does not state which endpoint or effort it ran, and Google
   publishes no per-level scores of its own. The MEDIUM-default cost/quality point is
   unmeasured in this wiki.
3. **Did the benchmarks run on the guarded model or the cyber-permissive one?** The model card
   reports CWE-bench v1 and cyber results without saying which deployment was used, while the
   launch post says vetted defenders got "Argon without cyber guardrails".
4. **Does the Gemini API share the Agent Platform's rules?** Parameter rejections, the
   `v1beta1`-only continuation protocol and the caching minimum are documented on the Cloud
   (Agent Platform) pages. The Gemini API's own docs were not captured, so parity is assumed
   rather than shown.
5. **Does the Gemini API promotion end on the same date?** The Cloud price page ends the 50%
   credit on 2026-11-30; OpenRouter's badge implies the API follows, but no Gemini API price
   page was captured.
6. **Is there a non-reasoning mode?** AA's boilerplate says "a non-reasoning variant may also
   exist"; Google's pages say `MINIMAL` and `thinking_budget` return HTTP 400, and OpenRouter's
   metadata marks reasoning `mandatory: true`. Vendor documentation wins, but the AA note is
   the kind of host-side caveat that leaks into model profiles.
7. **What does the Gemini 4 family name scheme imply?** Argon is an element; Google says more
   Gemini 4 models are coming but does not name or date them, so no page can be pre-planned
   for them.

## Evidence status

**Floor met, comfortably.** Seven first-party records and two independent ones, none of them
derived from another.

- **First-party:** the DeepMind
  [model card](../../sources/deepmind.google/gemini-4-argon-model-card/2026-10-26.md) (identity,
  modalities, vendor benchmarks, FSF assessment, knowledge cutoff), the
  [2026-09-30 announcement](../../sources/blog.google/gemini-4-argon-announcement/2026-10-26.md),
  the [2026-10-13 availability post](../../sources/blog.google/gemini-4-argon-available/2026-10-26.md),
  the [2026-10-13 developer post](../../sources/blog.google/gemini-4-argon-developers/2026-10-26.md),
  and Google Cloud's [model page](../../sources/cloud.google.com/gemini-4-argon-model-page/2026-10-26.md),
  [developer guide](../../sources/cloud.google.com/gemini-4-argon-developer-guide/2026-10-26.md)
  and [price list](../../sources/cloud.google.com/gemini-4-argon-pricing/2026-10-26.md).
- **Independent host:** [OpenRouter](../../sources/openrouter.ai/gemini-4-argon/2026-10-26.md) —
  catalogue metadata, per-provider prices, measured throughput and uptime.
- **Independent benchmark:** [Artificial Analysis](../../sources/artificialanalysis.ai/gemini-4-argon/2026-10-26.md),
  corroborated by the existing
  [leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)
  that first surfaced the row.
- **No direct tests were run for this page.** No prompt was sent to the model and no number
  here was re-measured. Where two sources give the same quantity differently — AA's index
  (53 on AA, 52.6 on OpenRouter), Terminal-Bench 4.0 (57.4 vendor, 57.1 AA, 57.6 Vals), the
  caching minimum (4,096 vs 6,144 tokens) — both values are recorded rather than reconciled.
- **Host gap, recorded deliberately:** the brief designates `google.dev` as the Gemini API
  documentation host, but at capture every `google.dev/gemini-api/...` path redirected to
  `developers.google.com/profile/...` and returned 404, so no Gemini API model page or price
  list could be captured from it. `ai.google.dev` was excluded by the brief and was not used.
  The Gemini API side of the model is therefore documented here only through DeepMind's model
  card and the blog posts, and the operational detail comes from the Cloud/Agent Platform
  docs.
- **Weakest links:** the vendor benchmark table has no stated harness, effort or seed; the AA
  per-benchmark numbers reach this wiki only through OpenRouter's restatement; the DeepMind
  evaluation-methodology page, the model card PDF and the separate safety post were not
  captured.

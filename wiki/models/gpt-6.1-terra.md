# GPT-6.1 Terra

OpenAI's **fast/efficient tier**, released **2026-10-26** at **$1 / $5** per million input /
output tokens — half of GPT-6.1 Sol and a tenth of GPT-6 Astra — with the same 1,050,000-token
context, text+image in and text out, and a six-value reasoning-effort set that **includes
`none`** ([model page](../../sources/openai.com/gpt-6-1-terra-model-page/2026-10-26.md),
[changelog](../../sources/openai.com/gpt-6-1-terra-release-changelog/2026-10-26.md)).

Its selling point is a specific shape of cheapness rather than general cheapness. Artificial
Analysis measures it at **48.11** on Intelligence Index v4.3.2 — 3.7 points below Sol for 44%
less cost per task — while running **91 output tokens/s** against Sol's 77 and Astra's 60
([AA record](../../sources/artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md)). What it
gives up is coding and agentic headroom: it scores 36.0% on FrontierCode 1.1 where Sol scores
49.1%, and on OpenAI's own Sandbox Bench it compromises 5 of 22 targets against Sol's 9
([system card](../../sources/openai.com/gpt-6-1-terra-system-card/2026-10-26.md)).

Its defining constraint is a safety one: **OpenAI classifies Terra Critical for cybersecurity
under its Preparedness Framework**, the same determination it made for GPT-6 Astra, at one tenth
of Astra's input price
([system card](../../sources/openai.com/gpt-6-1-terra-system-card/2026-10-26.md),
[Astra system card](../../sources/openai.com/gpt-6-astra-system-card/2026-10-26.md),
[announcement](../../sources/openai.com/gpt-6-1-terra-announcement/2026-10-26.md)).

## Identity

- **Canonical name:** GPT-6.1 Terra. **API ID:** `gpt-6.1-terra`.
- **Vendor:** OpenAI. Proprietary, closed weights, no fine-tuning endpoint
  ([model page](../../sources/openai.com/gpt-6-1-terra-model-page/2026-10-26.md)).
- **Released:** **2026-10-26**. The changelog entry reads "Released GPT-6.1 Terra
  (`gpt-6.1-terra`), a fast, efficient model for visual reasoning, precise computer use, and
  clear, natural writing"
  ([changelog](../../sources/openai.com/gpt-6-1-terra-release-changelog/2026-10-26.md)). Three
  independent confirmations of the date: Azure's model table dates the model `(2026-10-26)`
  ([Azure](../../sources/microsoft.com/gpt-6-1-terra-azure-models/2026-10-26.md)); AA's release
  record carries `releaseDate: 2026-10-26`
  ([AA](../../sources/artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md)); the system
  card is stamped "Published October 26, 2026"
  ([system card](../../sources/openai.com/gpt-6-1-terra-system-card/2026-10-26.md)).
  **Inside the 2025-10-26 window.**
- **Status:** generally available, non-preview, undeprecated. `gpt-6.1-terra` appears nowhere
  on OpenAI's deprecations page, so the 6-month GA notice floor applies
  ([deprecations](../../sources/openai.com/gpt-6-1-terra-deprecations/2026-10-26.md)).
- **Aliases and snapshots:** exactly one snapshot, `gpt-6.1-terra`, and no second alias
  ([model page](../../sources/openai.com/gpt-6-1-terra-model-page/2026-10-26.md)). Host-side
  constructs that are **not** OpenAI IDs: `openai/gpt-6.1-terra` with canonical slug
  `openai/gpt-6.1-terra-20261026` (a pin of the release date), `:batch`, `-pro`, `-pro:batch`,
  and the rolling alias `~openai/gpt-terra-latest`
  ([host record](../../sources/openrouter.ai/gpt-6-1-terra/2026-10-26/index.md)).
- **Leaderboard label:** Artificial Analysis "GPT-6.1 Terra (max)", release slug
  `gpt-6-1-terra`, with six variants — `max`, `xhigh`, `high`, `medium`, `low`,
  `non-reasoning` ([AA record](../../sources/artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md)).
  The parenthetical is an effort annotation, not a different model.
- **Host endpoints:** OpenAI API (Responses, Chat Completions, Batch); Azure OpenAI
  ([Azure](../../sources/microsoft.com/gpt-6-1-terra-azure-models/2026-10-26.md)); OpenRouter
  routes to OpenAI standard, OpenAI Flex, OpenAI Fast and Azure EU
  ([host record](../../sources/openrouter.ai/gpt-6-1-terra/2026-10-26/index.md)). Bedrock is
  **unresolved** — see below.

### Tier position relative to Astra and Sol

OpenAI's guide lists four tiers, in this order
([guide](../../sources/openai.com/gpt-6-1-terra-guide/2026-10-26.md)):

| Tier | Model ID | Released | Standard $/1M in / out | OpenAI's phrase |
| --- | --- | --- | ---: | --- |
| 1 | `gpt-6-astra` | 2026-09-03 | $10 / $50 | Highest intelligence |
| 2 | `gpt-6.1-sol` | 2026-09-29 | $2 / $10 | Balanced speed, cost, and intelligence |
| 3 | **`gpt-6.1-terra`** | **2026-10-26** | **$1 / $5** | **Fast and efficient** |
| 4 | `gpt-6-luna` | 2026-09-22 | $0.10 / $0.50 | Fastest and most cost-effective |

Terra is rung 3 of 4: **below Astra and below GPT-6.1 Sol, above GPT-6 Luna**, at half of
Sol's price and ten times Luna's. Prices from the
[pricing page](../../sources/openai.com/gpt-6-1-terra-pricing/2026-10-26.md); Astra and Luna
dates from the [Astra changelog](../../sources/openai.com/gpt-6-astra-changelog/2026-10-26.md).

**"Terra" is a tier name, not a codename, and the tier moved down a rung.** In the GPT-5.6
family released 2026-07-09, Terra was the *middle* of three — "GPT-5.6 Terra for a balance of
intelligence and cost"
([changelog](../../sources/openai.com/gpt-6-1-terra-release-changelog/2026-10-26.md)). The 6.0
generation dropped the name entirely — there is **no `gpt-6-terra`** — and 6.1 brought it back
one rung lower, beneath a Sol tier that now sits above it. A "Terra" label therefore identifies
neither the generation nor the rung on its own.

### Distinct model or repackaging?

**Distinct.** Four things separate it from both neighbours:

1. **Its own model ID, snapshot list, price row and effort set.** The effort set is the sharpest
   discriminator: Terra accepts `none`, Astra and 6.1 Sol do not
   ([guide](../../sources/openai.com/gpt-6-1-terra-guide/2026-10-26.md)). AA independently
   reflects this — six variants for Terra against five for Sol.
2. **A different knowledge cutoff:** 2026-06-01, against Sol's 2026-04-30
   ([model page](../../sources/openai.com/gpt-6-1-terra-model-page/2026-10-26.md)). Azure
   reports "June 2026" training data for Terra and "April 2026" for Sol, so the difference is
   corroborated by the host
   ([Azure](../../sources/microsoft.com/gpt-6-1-terra-azure-models/2026-10-26.md)).
3. **Its own measured behaviour.** AA: 48.11 vs Sol 51.83, with a distinct per-evaluation
   profile (Terra is relatively strong on MMMU-Pro at 84.7% and relatively weak on FrontierCode
   at 36.0%).
4. **Its own safety document** — a Terra-specific addendum to the Astra system card, not a
   shared card.

It is *not* a repackaging of GPT-5.6 Terra either: different price ($1/$5 vs $2/$12), different
knowledge cutoff (2026-06-01 vs 2026-02-16 as OpenRouter records the 5.6 slug), different rung
in the ladder, and a documented capability step up.

## Current assessment

**The right default for high-volume visual and screen work, and the wrong default for hard
coding.** The evidence supports a narrower claim than OpenAI's "fast, efficient" tagline:

- **It is genuinely faster.** AA: 91 tok/s at every effort level, against Sol's 77 and Astra's
  60; at max effort its time-to-first-token is 189 s against Sol's 284 s and Astra's 326 s
  ([AA record](../../sources/artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md)). This is
  the one vendor claim that independent measurement supports without qualification.
- **It is genuinely cheaper per task, not just per token.** AA puts the index run at $0.40 per
  task against Sol's $0.72 and Astra's $3.26 — an 8× spread to Astra, close to the 10× token
  ratio.
- **It is not "near-Astra" outside the tasks OpenAI names for it.** OpenAI's own post concedes
  "For the most complex coding tasks, GPT-6.1 Sol and GPT-6 Astra remain the better choice"
  ([announcement](../../sources/openai.com/gpt-6-1-terra-announcement/2026-10-26.md)). AA's
  independent run puts Terra 0.5 points under Sol on Terminal-Bench 4.0 and 13 points under on
  FrontierCode.
- **Its agentic ceiling is materially lower.** Sandbox Bench 5/22 vs Sol 9/22 and Astra 10/22;
  KernelGen 45.34%; FrontierCode 1.1 36.0% vs Sol's 49.1%
  ([system card](../../sources/openai.com/gpt-6-1-terra-system-card/2026-10-26.md),
  [AA record](../../sources/artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md)).

**Where it sits in the field.** At 48 on AA's board, Terra (max) is 22nd of 272 rendered rows.
The 21 rows above it are Claude Opus 5.5 at four efforts, Claude Sonnet 5.5 at two, Muse Wonder
Full, Kimi K3.1 Pro, Claude Fable 5.1 at four, GPT-6 Astra at four, Gemini 4 Argon, Muse Wonder,
and GPT-6.1 Sol at three. Immediately below it: GPT-6.1 Sol (medium) at the same 48, then
Claude Fable 5.1 (low) 47, Grok 4.7 46, MiMo-V2.6-Pro 46 and Qwen3.8 Max 45
([AA record](../../sources/artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md)). The
comparison that matters for procurement is the internal one: **Sol at `medium` matches Terra at
`max` on the index for half the cost per task** ($0.21 vs $0.40), so Terra's value proposition is
latency and modality handling rather than raw index points.

## Documented capabilities

From the [model page](../../sources/openai.com/gpt-6-1-terra-model-page/2026-10-26.md) unless
noted:

| Property | Value |
| --- | --- |
| Context window | 1,050,000 tokens |
| Maximum input | 922,000 tokens |
| Maximum output | 128,000 tokens |
| Input modalities | text, image |
| Output modalities | text |
| Unsupported modalities | audio, video |
| Knowledge cutoff | 2026-06-01 |
| Reasoning efforts | `none`, `low`, `medium` (default), `high`, `xhigh`, `max` |
| Reasoning modes | `standard` (default), `pro` — family-scoped, see below |
| Endpoints | Responses, Chat Completions, Batch |
| Rate limits (Standard) | Build 5,000 RPM / 1M TPM; Launch 10,000 / 4M; Grow 15,000 / 40M |

- **Tools** (Responses API): `web_search`, `file_search`, `image_generation`,
  `code_interpreter`, `hosted_shell`, `apply_patch`, `skills`, `computer_use`, `mcp`,
  `tool_search`.
- **Features:** streaming, structured outputs, function calling, file search, image input, web
  search, prompt caching. Explicitly unsupported: fine-tuning, predicted outputs.
- **GPT-6 family behaviours** (documented family-wide; examples use Astra): async tool calling,
  mid-turn steering, changing reasoning effort mid-conversation via `configuration_update`,
  multi-agent orchestration (Azure labels it *preview*), compaction, persisted reasoning
  ([guide](../../sources/openai.com/gpt-6-1-terra-guide/2026-10-26.md),
  [Azure](../../sources/microsoft.com/gpt-6-1-terra-azure-models/2026-10-26.md)).
- **`none` effort is supported.** The guide names Terra explicitly: "GPT-6 Astra and GPT-6.1
  Sol do not support `none` reasoning effort; GPT-6.1 Terra, GPT-6 Sol, and GPT-6 Luna do"
  ([guide](../../sources/openai.com/gpt-6-1-terra-guide/2026-10-26.md)). Within OpenAI's current
  four-tier ladder, only Terra and Luna accept `none` — Terra is the strongest model in the
  family whose reasoning can be switched off entirely.
- **Fast mode with EU residency.** "Fast mode supports EU data residency for GPT-6.1 Sol,
  GPT-6.1 Terra, and GPT-6 Luna" — Astra and GPT-6 Sol do not have this
  ([data residency](../../sources/openai.com/gpt-6-1-terra-data-residency/2026-10-26.md)).
- **Pro mode** is documented as a family feature — "GPT-5.6 and GPT-6 models support `standard`
  and `pro` reasoning modes" — billed at standard token rates, with no Terra-specific example
  ([reasoning guide](../../sources/openai.com/gpt-6-1-terra-reasoning-guide/2026-10-26.md)).
  OpenRouter sells a `-pro` slug for Terra, described as "the same underlying model … served
  with `reasoning.mode` set to `pro`"
  ([host record](../../sources/openrouter.ai/gpt-6-1-terra/2026-10-26/index.md)).

### Vendor claims, labelled as claims

- **"50% lower" than GPT-5.6 Terra and GPT-6.1 Sol.** Exact against Sol; against GPT-5.6 Terra
  input halves but output falls 58% ($12 → $5), so the claim is directionally right and
  numerically loose ([pricing](../../sources/openai.com/gpt-6-1-terra-pricing/2026-10-26.md)).
- **Agents' Last Exam: "15 percentage points higher than GPT-5.6 Terra at about one-third the
  cost … on par with GPT-6 Astra at only one-tenth its price per token."** Relative claim only;
  no absolute score was recoverable (the chart did not render), and no independent run exists
  in this capture.
- **MMMU-Pro: "nearly matches … GPT-6 Astra, and GPT-6.1 Sol."** No vendor number captured.
  AA's independent 84.7% is consistent with a small gap to Sol's 86.0%.
- **OSWorld 2.1: "surpasses GPT-5.6 Terra's best score."** No number captured.
- **Internal error rate on error-inducing prompts: 53.6% → 16.7% at low effort, → 4.3% at max.**
  The only absolute factuality numbers in the capture, and internal-benchmark only.
- **"Over three times as token efficient as Claude Opus 5.5 … ~9x lower cost per task … over
  three times faster than both GPT-6 Astra and GPT-6.1 Sol."** Unverifiable here; note the
  "faster" half is directionally supported by AA's 91 tok/s vs 60 and 77.

## Benchmarks

### Independent — Artificial Analysis, Intelligence Index v4.3.2

All six effort variants, from the leaderboard feed
([AA record](../../sources/artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md)):

| Variant | Index | $/task | tok/s | TTFT (s) |
| --- | ---: | ---: | ---: | ---: |
| max | **48.11** | $0.40 | 91 | 189.33 |
| xhigh | 45.36 | $0.19 | 91 | 21.67 |
| high | 43.87 | $0.13 | 91 | 5.66 |
| medium | 41.32 | $0.10 | 91 | 1.85 |
| low | 36.21 | $0.05 | 91 | 1.30 |
| non-reasoning | 33.49 | $0.11 | 91 | 1.02 |

Per-evaluation scores exist only for the `max` variant:

| Metric | Terra (max) | Sol (max) |
| --- | ---: | ---: |
| Intelligence Index | 48.11 | 51.83 |
| Terminal-Bench 4.0 | 55.6% | 56.1% |
| Terminal-Bench-Science 0.1 | 57.6% | 58.1% |
| FrontierCode 1.1 | 36.0% | 49.1% |
| SciCode | 55.1% | 54.2% |
| Humanity's Last Exam | 46.2% | 52.9% |
| CritPt | 28.0% | 31.7% |
| MMMU-Pro | 84.7% | 86.0% |
| AA-LCR v1.1 | 82.7% | 83.0% |
| GDP.pdf all-pass | 28.6% | 31.0% |
| GDPval-AA (Elo) | 1476.05 | 1607.61 |
| AA-Briefcase (Elo) | 1401.68 | 1555.1 |
| AutomationBench-AA | 60.2% | 64.9% |
| AA-Omniscience | 29.78 (acc 49.1%, halluc. 38.0%) | 41.5 (acc 62.1%, halluc. 54.3%) |

Sol's column is from the wiki's existing
[Sol AA record](../../sources/artificialanalysis.ai/gpt-6-1-sol/2026-10-26/index.md) — same
harness, same capture date. Two readings matter: **Terra is competitive on SciCode (ahead),
MMMU-Pro, AA-LCR and Terminal-Bench** and **far behind on GDPval Elo, AA-Briefcase Elo, the
AA-Omniscience score and FrontierCode**. That is a professional-knowledge and long-horizon gap,
not a general one — and on AA-Omniscience Terra's hallucination rate is *better* (38.0%) than
Sol's (54.3%) even though its accuracy is 13 points lower, so the deficit is recall rather than
confabulation.

### Vendor, from the launch post

| Evaluation | Claim |
| --- | --- |
| Terminal-Bench 4.0 | 50.3% at max effort (GPT-5.6 Terra's published score: 21.5%) |
| Terminal-Bench-Science 0.1 | "surpasses GPT-6.1 Sol at lower cost", within five points of Opus 5.5 |
| Agents' Last Exam | +15 pp over GPT-5.6 Terra at medium effort; on par with Astra |
| MMMU-Pro | beats GPT-5.6 Terra at every setting; "nearly matches" Astra and 6.1 Sol |
| OSWorld 2.1 | beats GPT-5.6 Terra's best score at medium effort |
| Internal error rate | 53.6% (5.6 Terra, low) → 16.7% (Terra, low); 4.3% at max |

([announcement](../../sources/openai.com/gpt-6-1-terra-announcement/2026-10-26.md))

### Contradictions preserved

1. **Terminal-Bench-Science 0.1.** OpenAI claims Terra "surpasses GPT-6.1 Sol"; AA measures
   Terra 57.6% against Sol 58.1% — below. Neither is a replication of the other.
2. **Terminal-Bench 4.0.** OpenAI claims 50.3%; AA measures 55.6%. Here the independent number
   is *higher*, so the disagreement runs the other way and cannot be read as vendor inflation.
3. **Context window.** OpenAI: 1,050,000 total, 922,000 max input. AA: `contextWindowTokens`
   1,000,000. Azure: 1,050,000 (input 922,000 / output 128,000). Three figures for overlapping
   concepts.

### Safety and alignment measurements (system card)

| Evaluation | Terra | Comparison |
| --- | ---: | --- |
| ExploitBench (ACE-normalized) | 97.10% | contaminated by design, per OpenAI |
| Sandbox Bench | 5/22 (22.7%) | Sol 9/22 (41.9%); Astra 10/22 (45.5%) |
| Internal research debugging | 76.39% | below the indicative High threshold |
| KernelGen 1P | 45.34% | below Astra and below the High threshold |
| AAV capsid packaging (Spearman) | 0.5285 | threshold 0.600 — below |
| SHP2 function (R²) | 0.3696 | threshold 0.60 — below |
| Coronavirus–ACE2 entry (composite) | 0.4741 | threshold 0.75 — below |
| Phage–plasmid co-evolution (NLL) | 10.8229 | threshold ≤9.40 — worse |
| MentalHealthBench | 55.5% | 5.6 Terra 46.2% |
| CoT controllability (750–1,250 tokens) | 14.8% | GPT-6 Sol 23.2%; 6.1 Sol 44.8% |
| Respecting warnings (max effort) | 29.6% circumvented | higher than Astra, Luna, 6.1 Sol; lower than GPT-6 Sol |
| Peer-message engagement | 65.00% engaged / 13.75% acted | Sol 50.00% / 1.25% |
| Search-limitation acknowledged | fails in 1.83% | Sol 2.08% |

([system card](../../sources/openai.com/gpt-6-1-terra-system-card/2026-10-26.md)). Terra made
"no attempts to bypass the monitor", matching Astra, GPT-6 Sol and 6.1 Sol, and is "on par with
GPT-6.1 Sol" on user-flagged hallucinations. The card's own tables did not render in the
capture, so the "on par" production-benchmark statements cannot be checked numerically.

**No direct tests were run for this page.** Every number above is quoted from a captured
record.

## Limitations and constraints

- **Text out only.** No audio, video, or image output, and no image generation endpoint — the
  `image_generation` tool is the Responses-API tool, not a modality
  ([model page](../../sources/openai.com/gpt-6-1-terra-model-page/2026-10-26.md)).
- **Tool calling is Responses-only.** "GPT-6 Astra, GPT-6.1 Sol, and GPT-6.1 Terra support Chat
  Completions, but tool calling requires Responses"
  ([guide](../../sources/openai.com/gpt-6-1-terra-guide/2026-10-26.md)).
- **Sampling controls vanish while reasoning is on** — "remove `temperature`, `top_p`, and
  `top_logprobs`", plus `logprobs` in Chat Completions. The rule is stated conditionally ("when
  reasoning effort is not `none`"), so `none` is the one documented setting where sampling
  controls are permissible; OpenAI never states that positively, and Sol cannot offer it at all
  ([guide](../../sources/openai.com/gpt-6-1-terra-guide/2026-10-26.md)).
- **Long context is not the same price.** Prompts over 272K input tokens bill the whole request
  at 2× input and 1.5× output: $2 / $7.50 per 1M at Standard.
- **No Ultrafast tier.** The Ultrafast price table lists Astra and 6.1 Sol only; Terra has no
  Ultrafast row or residency note
  ([pricing](../../sources/openai.com/gpt-6-1-terra-pricing/2026-10-26.md),
  [data residency](../../sources/openai.com/gpt-6-1-terra-data-residency/2026-10-26.md)).
- **Documented as US and EU only.** "GPT-6.1 Sol and GPT-6.1 Terra support only US and EU data
  residency" — the only such note in the table. No GPT-6 model appears in the UAE column, so
  Terra is not visibly narrower than its siblings, only more explicitly restricted
  ([data residency](../../sources/openai.com/gpt-6-1-terra-data-residency/2026-10-26.md)).
- **Closed weights, no fine-tuning.** AA records `isOpenWeights: false`, `licenseName: null`;
  the model page marks fine-tuning unsupported.
- **`all_turns` persisted reasoning is undocumented for Terra.** Both statements of support name
  the GPT-5.6 family and GPT-6.1 Sol only
  ([reasoning guide](../../sources/openai.com/gpt-6-1-terra-reasoning-guide/2026-10-26.md)).
- **Verbose.** AA: 130M output tokens on the index run against a median of 81M, and ~35,100
  output tokens per task at max effort.
- **Safety posture.** Critical cybersecurity classification; image-input hate/extremism
  regression against GPT-5.6 Terra that OpenAI calls statistically significant (while calling
  the text-prompt regressions insignificant); lower CoT controllability and weaker multi-agent
  boundary behaviour than 6.1 Sol
  ([system card](../../sources/openai.com/gpt-6-1-terra-system-card/2026-10-26.md)).
- **Host-coverage gaps.** No Bedrock, Vertex or Together endpoint in OpenRouter's feed at
  capture; Azure's row omits streaming although OpenAI lists it as supported.

## Access, pricing, licensing

All first-party prices are USD per 1M tokens
([pricing](../../sources/openai.com/gpt-6-1-terra-pricing/2026-10-26.md)).

### OpenAI, by service tier

| Tier | Short context in / out | Cached in | >272K in / out | vs Standard |
| --- | ---: | ---: | ---: | ---: |
| Standard | $1.00 / $5.00 | $0.05 | $2.00 / $7.50 | 1× |
| Batch | $0.50 / $2.50 | $0.025 | $1.00 / $3.75 | 0.5× |
| Flex | $0.50 / $2.50 | $0.025 | $1.00 / $3.75 | 0.5× |
| Fast | $2.00 / $10.00 | $0.10 | $4.00 / $15.00 | 2× |
| Ultrafast | — | — | — | not offered |

Cache writes: $1.25 (30-minute TTL) or $2.50 (12-hour TTL) on Standard, scaled by tier. Regional
processing adds 10% where available.

### Tool and container fees

- Web search: $10.00 per 1k calls, plus retrieved content tokens at model rates.
- Containers (Hosted Shell, Code Interpreter): $0.03 (1 GB) to $1.92 (64 GB) per 20-minute
  session; billed by the minute with a 5-minute minimum.

### Host prices

| Provider | In / out per 1M | Note |
| --- | ---: | --- |
| OpenAI standard | $1.00 / $5.00 | matches list price |
| OpenAI Flex | $0.50 / $2.50 | matches list price |
| OpenAI Fast | $2.00 / $10.00 | matches list price |
| Azure (EU) | $1.20 / $6.00 | **1.2× list**, against OpenAI's stated 1.1× regional premium |

([host record](../../sources/openrouter.ai/gpt-6-1-terra/2026-10-26/index.md)). Every endpoint
advertises 1,050,000 context and 128,000 max completion; `openrouter:web_search` is $0.01 per
call.

### Licensing

Proprietary and API-only. No weights, no fine-tuning, no redistribution terms beyond the API
agreement. Available in ChatGPT Work and Codex to Plus, Pro, Enterprise and Edu users, and via
the API as `gpt-6.1-terra`
([announcement](../../sources/openai.com/gpt-6-1-terra-announcement/2026-10-26.md)).

## Unresolved questions

1. **Does Terra replace GPT-5.6 Terra?** The guide frames it as a migration comparison, but the
   deprecations page still routes several retirements (including `gpt-5-mini` and `o4-mini`) to
   **`gpt-5.6-terra`**, not to Terra. Both tiers remain live and no retirement is announced for
   either.
2. **Does `gpt-6.1-terra` support `reasoning.context: "all_turns"`?** Not documented either way;
   Terra is absent from both support lists.
3. **Does `minimal` effort work?** Only Astra and Sol are documented as rejecting `none` and
   `minimal`; Terra's own list omits `minimal` without saying it errors.
4. **Is `file` an input modality?** OpenAI lists text and image; OpenRouter lists `file`,
   `image`, `text`.
5. **Is Terra on Bedrock?** Not in OpenRouter's feed; AWS's supported-models page returned a
   stub with no model names. Unresolved, not absent.
6. **Does Terra stream on Azure?** Azure's capability row omits "Streaming" where Sol's row has
   it; OpenAI lists streaming as supported.
7. **Why does AA's non-reasoning variant cost more per task ($0.11) than `low` ($0.05)** while
   scoring 2.7 points lower? Likely longer verbatim answers without reasoning tokens to cut
   them short, but the record does not say.
8. **Terminal-Bench-Science direction.** Vendor says Terra beats Sol; AA says it does not.
9. **Why does Azure price Terra at 1.2× list** when OpenAI documents a 10% regional premium?
   The same discrepancy appears on the wiki's Sol record, so it is systematic rather than
   Terra-specific.
10. **What does `~openai/gpt-terra-latest` jump to next?** The alias follows the Terra tier
    across generations (created 2026-09-11, pointed at 5.6 Terra, now at 6.1 Terra). No
    vendor-side equivalent exists, so a pinned request can silently change model.

## Evidence status

**Floor met, with an unusually complete first-party set for a one-day-old model.**

- **First-party (9 records):** [model page](../../sources/openai.com/gpt-6-1-terra-model-page/2026-10-26.md)
  (specs, modalities, effort set, tools, rate limits), [changelog](../../sources/openai.com/gpt-6-1-terra-release-changelog/2026-10-26.md)
  (release date), [pricing](../../sources/openai.com/gpt-6-1-terra-pricing/2026-10-26.md)
  (all service tiers and tool fees), [guide](../../sources/openai.com/gpt-6-1-terra-guide/2026-10-26.md)
  (tier ladder, migration rules, `none` support), [reasoning guide](../../sources/openai.com/gpt-6-1-terra-reasoning-guide/2026-10-26.md)
  (modes, defaults, `all_turns` gap), [data residency](../../sources/openai.com/gpt-6-1-terra-data-residency/2026-10-26.md)
  (US/EU limitation, Fast-mode EU), [deprecations](../../sources/openai.com/gpt-6-1-terra-deprecations/2026-10-26.md)
  (no entry; notice floor), [announcement](../../sources/openai.com/gpt-6-1-terra-announcement/2026-10-26.md)
  (vendor benchmark claims), [system card](../../sources/openai.com/gpt-6-1-terra-system-card/2026-10-26.md)
  (Preparedness levels, safety evaluations).
- **Independent hosts, two:** [OpenRouter](../../sources/openrouter.ai/gpt-6-1-terra/2026-10-26/index.md)
  (dated slug, four endpoints, three matching price points, one 1.2× Azure row, `pro` and
  `-latest` host constructs) and [Azure / Microsoft Learn](../../sources/microsoft.com/gpt-6-1-terra-azure-models/2026-10-26.md)
  (dated model row, limits, June 2026 cutoff).
- **Independent measurement, one:** [Artificial Analysis](../../sources/artificialanalysis.ai/gpt-6-1-terra/2026-10-26/index.md),
  six effort variants, per-evaluation scores for `max`, cost and timing, plus the wiki's
  existing leaderboard capture of the same feed.
- **No direct tests were run for this page.**
- **Weakest links:** every OpenAI benchmark chart failed to render, so all vendor figures here
  are prose numbers only; the system card's tables are likewise client-rendered and
  uncaptured; Bedrock availability and Azure regions were not resolvable; the model is one day
  old at capture, so no third-party replication, no ecosystem report, and no measured
  Agents' Last Exam or OSWorld 2.1 result exists in this capture.

# Gemini 3.8 Flash

Google's `gemini-3.8-flash` is the text model of the Gemini 3.8 generation, generally available since
**2026-09-02** ([release notes](../../sources/google.dev/gemini-3.8-flash-release-notes/2026-10-26.md)).
It is a real version step over Gemini 3.7 Flash — the model card states it "is based on Gemini 3.7
Flash" — but a modest one: the largest vendor-measured gains are on agentic and terminal-coding
benchmarks, while knowledge and document benchmarks barely move
([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)). Artificial
Analysis independently scores it **41** on its Intelligence Index, above the median for its price tier
and well below the frontier tier the roster's other text rows occupy
([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md),
[AA leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)).

The launch is inside the roster's one-year window (≥ 2025-10-26) by under two months, so no
out-of-window exception applies.

The single most important identity fact: **"3.8 Flash" alone names the text model, while every "3.8
Flash-Lite" or "3.8 Flash TTS" string in this generation names an audio model.** There is no
`gemini-3.8-flash-lite` text model in either captured price list or in either platform's model list —
the only Flash-Lite in the 3.8 generation is `gemini-3.8-flash-lite-tts`
([Gemini API pricing](../../sources/google.dev/gemini-3.8-flash-pricing/2026-10-26.md),
[Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).

## Identity

- **Canonical name:** Gemini 3.8 Flash. **Model code:** `gemini-3.8-flash`, published as
  `Stable: gemini-3.8-flash` with no preview or snapshot suffix
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md)). OpenRouter
  carries the same model under `google/gemini-3.8-flash` with canonical slug
  `google/gemini-3.8-flash-20260902`, a dated snapshot matching the release day
  ([OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md)).
- **Vendor:** Google (developer and API operator). Proprietary, hosted only — "Google has not
  disclosed the model size or parameter count", and no weights licence exists to review
  ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)).
- **Release:** **2026-09-02**, "Gemini 3.8 Flash generally available (GA)" in the Gemini API release
  notes ([release notes](../../sources/google.dev/gemini-3.8-flash-release-notes/2026-10-26.md)).
  Four other captures give the same date: the deprecations table lists release date September 2, 2026
  ([deprecations](../../sources/google.dev/gemini-3.8-flash-deprecations/2026-10-26.md)); the Agent
  Platform page gives "Launch stage: GA, Release date: September 2, 2026"
  ([Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md));
  and two independent hosts agree — Artificial Analysis answers "released on September 2, 2026"
  ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)) and OpenRouter's `created`
  timestamp is 2026-09-02 15:14 UTC
  ([OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md)).
- **Host endpoints:**

| Route | Endpoint | Notes |
| --- | --- | --- |
| Gemini API | `gemini-3.8-flash` | GA, stable, no shutdown date announced ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md), [deprecations](../../sources/google.dev/gemini-3.8-flash-deprecations/2026-10-26.md)) |
| Gemini Enterprise Agent Platform (Vertex AI) | `gemini-3.8-flash` | GA 2026-09-02, `global` / `us` / `eu`, retirement "September 2, 2027 or later" ([Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)) |
| OpenRouter | `google/gemini-3.8-flash` (+ `:batch`) | four Google-served price tiers under one ID ([OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md)) |

- **Siblings and neighbours:**
  - `gemini-3.7-flash` — the direct predecessor the card is based on, released 2026-08-13, deprecated
    2026-10-08, and now **auto-routing**: "API requests to `gemini-3.7-flash` are automatically routed
    to `gemini-3.8-flash`" ([release notes](../../sources/google.dev/gemini-3.8-flash-release-notes/2026-10-26.md)).
  - `gemini-3.6-flash` — still supported and named by Google as the cheaper alternative when token
    spend matters ([guide](../../sources/google.dev/gemini-3.8-flash-whats-new/2026-10-26.md)).
  - `gemini-3.8-live`, `gemini-3.8-live-extended-thinking` — separate Live-API models (2026-09-15);
    the text model's own capability matrix says "Live API: Not supported"
    ([deprecations](../../sources/google.dev/gemini-3.8-flash-deprecations/2026-10-26.md)).
  - `gemini-3.8-flash-tts` and `gemini-3.8-flash-lite-tts` — the audio pair (2026-09-22), with their
    own pages: [Gemini 3.8 Flash TTS](gemini-3.8-flash-tts.md),
    [Gemini 3.8 Flash Lite TTS](gemini-3.8-flash-lite-tts.md). The catalogue resolves the marketing
    names to endpoints on separate rows: "Gemini 3.8 Flash | `gemini-3.8-flash`" and "Gemini 3.8 Flash
    TTS | `gemini-3.8-flash-tts`"
    ([catalogue](../../sources/google.dev/gemini-3.8-flash-lite-tts-model-catalogue/2026-10-26.md)).
    The TTS models are text-in/audio-out, 8,192-token input, and priced per audio token
    ([TTS pricing](../../sources/google.dev/gemini-3.8-flash-tts-pricing/2026-10-26.md)) — a different
    product, not a tier of this one.
  - `gemini-3.8-flash-cyber` — an allowlisted cybersecurity post-train of the same base, GA, priced at
    the undiscounted standard rate, with no grounding, code execution, function calling, URL context
    or computer use
    ([cyber page](../../sources/cloud.google.com/gemini-3-8-flash-cyber-model-page/2026-10-26.md)).

### Identity ambiguity

- **GA-first, no public preview.** The captured changelog reaches back to 2026-02-26 and contains no
  `gemini-3.8-flash` preview entry; the September 2 entry is the model's first appearance and it is
  already GA ([release notes](../../sources/google.dev/gemini-3.8-flash-release-notes/2026-10-26.md)).
  Whether an internal preview existed is not stated anywhere captured.
- **"Gemini 3.8 Flash Lite" is a naming trap.** The roster's rows 77/78 and Google's own catalogue
  use "Flash-Lite" only for TTS. A reader who assumes a 3.8-generation Flash-Lite *text* tier exists
  will not find one; the cheap text option Google points at is 3.6 Flash
  ([guide](../../sources/google.dev/gemini-3.8-flash-whats-new/2026-10-26.md)).
- **Predecessor lifetime.** 3.7 Flash was released 2026-08-13 and deprecated 2026-10-08 — eight
  weeks — so "previous generation" here describes a very short window, not a stable tier
  ([deprecations](../../sources/google.dev/gemini-3.8-flash-deprecations/2026-10-26.md)).
- **Two lifecycle answers for one ID.** The Gemini API table says "No shutdown date announced"; the
  Agent Platform page says retirement "September 2, 2027 or later", explicitly scoped to platform
  support, since the model "may remain accessible through the Gemini API after these dates"
  ([deprecations](../../sources/google.dev/gemini-3.8-flash-deprecations/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
  Both can be true; neither page mentions the other.

## Current assessment

- **A distinct model, not a repackaging** — but a small step. The model card's own comparison against
  3.7 Flash shows the gains concentrated in agentic work: DeepSWE v1.1 73.7% vs 65.3% (+8.4), Terminal-
  bench 4.0 19.1% vs 11.2% (+7.9), BioMysteryBench (human difficult) 56.5% vs 43.5% (+13.0), OSWorld-2.0
  59.0% vs 50.6% (+8.4). Knowledge and document rows are nearly flat: HLE-Verified 54.9% vs 53.6%
  (+1.3), GDP.PDF 35.0% vs 34.0% (+1.0), CharXiv 86.2% vs 84.5% (+1.7), Terminal-bench 2.1 89.4% vs
  85.8% (+3.6) ([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)).
  Read as a whole, this is a successor tuned for long tool-using runs, not a broader capability jump.
- **The gap to frontier is benchmark-specific, not uniform.** On the card's own rows the model sits
  32.7 points below Claude Opus 5 on Terminal-bench 4.0 and 16.4 below on OSWorld-2.0, yet beats it on
  Harvey's Legal Agent (10.0% vs 6.7%), Vals Finance Agent v2 (61.4% vs 58.6%) and CharXiv (86.2% vs
  83.7%) ([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)). A
  single "how good is it" verdict would mislead on both sides.
- **Independent scoring agrees on the tier.** AA's Intelligence Index v4.3.2 gives 41 — rank 56 of 221,
  above the comparable-price median of 28, and 17 points under Claude Opus 5.5 (58) and 12 under
  Gemini 4 Argon (53) on the same board ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md),
  [AA leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)). AA's index
  is a composite and is not comparable to any single vendor row.
- **Status: current and GA**, with the caveat that Google's Flash line moves every few weeks (3.5 → 3.6
  → 3.7 → 3.8 between May and September 2026) and old strings are remapped rather than retired
  ([deprecations](../../sources/google.dev/gemini-3.8-flash-deprecations/2026-10-26.md)). Google made
  it the default for its own Managed Agents' Antigravity agent
  ([guide](../../sources/google.dev/gemini-3.8-flash-whats-new/2026-10-26.md)).

## Documented capabilities

Vendor and host documentation, not test results.

- **Modalities:** input text, image, video, audio and PDF; output text only. Audio generation, image
  generation and the Live API are each explicitly "Not supported"
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md)). OpenRouter
  independently lists `text+image+file+audio+video->text`
  ([OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md)); AA lists "text, image,
  speech, and video" input, text output
  ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)).
- **Context and output:** 1,048,576-token input ceiling and 65,536-token output ceiling on both
  platforms, corroborated by OpenRouter's `context_length` 1048576 / `max_completion_tokens` 65536
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md)).
- **Per-modality ceilings** (Agent Platform only): 3,000 images per prompt; video "approximately 45
  minutes" with audio and "approximately 1 hour" without, 10 videos per prompt; audio "approximately
  8.4 hours, or up to 1 million tokens", 1 audio file per prompt; 3,000 PDF pages per file
  ([Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
- **Reasoning:** tunable thinking over `low`, `medium` (default) and `high`; `minimal` "is not
  supported and returns an error", so thinking cannot be switched off
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md),
  [guide](../../sources/google.dev/gemini-3.8-flash-whats-new/2026-10-26.md)). The API parameter is a
  string enum `thinking_level`, replacing `thinking_budget`
  ([guide](../../sources/google.dev/gemini-3.8-flash-whats-new/2026-10-26.md)). OpenRouter encodes the
  same fact as `reasoning.mandatory: true` with efforts `high`/`medium`/`low`
  ([OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md)). AA's row is the `high`
  variant ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)).
- **Tool use:** function calling, code execution, file search, structured outputs, URL context, search
  grounding and Maps grounding are supported; computer use is "Supported (Preview)"
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md)). The Agent
  Platform page adds RAG Engine, agentic video understanding, Parallel Web Search and Exa Web Search
  grounding, Count Tokens and Chat Completions, with the Interactions API in preview and Gemini Live
  API not supported
  ([Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
  Tools are billed as tokens, not per call, apart from grounding's 5,000-free-then-$14-per-1,000
  search requests ([pricing](../../sources/google.dev/gemini-3.8-flash-pricing/2026-10-26.md)).
- **Serving modes:** Batch API, Flex inference and Priority inference on the Gemini API; Provisioned
  Throughput, batch and usage-tiered PayGo on the platform
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
- **Knowledge cutoff:** "March 2026", with the caveat that "in others they may experience the model's
  knowledge is limited to January 2025 (in line with the Gemini 3 Model Family)"
  ([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)). OpenRouter
  publishes no cutoff for the ID.

### Vendor benchmark rows (card, "results as of September, 2026")

| Benchmark | 3.8 Flash | 3.7 Flash | Claude Opus 5 | GPT-5.6 Sol |
| --- | --- | --- | --- | --- |
| DeepSWE v1.1 | 73.7% | 65.3% | 74.0% | 72.7% |
| GDPVal-AA v2 (Elo) | 1545 | 1482 | 1824 | 1710 |
| Vals Finance Agent v2 | 61.4% | 59.0% | 58.6% | 53.8% |
| Harvey's Legal Agent (all pass) | 10.0% | 8.8% | 6.7% | 2.5% |
| Terminal-bench 2.1 | 89.4% | 85.8% | 89.1% | 88.8% |
| Terminal-bench 4.0 | 19.1% | 11.2% | 51.8% | 37.3% |
| GDP.PDF (all pass) | 35.0% | 34.0% | 37.0% | 40.0% |
| CharXiv Reasoning (no tools) | 86.2% | 84.5% | 83.7% | 85.8% |
| LVBench (agentic) | 87.8% | 85.4% | 75.4% | 82.1% |
| HLE-Verified | 54.9% | 53.6% | 54.4% | 54.5% |
| OSWorld-2.0 (partial) | 59.0% | 50.6% | 75.4% | 62.6% |
| BioMysteryBench (human difficult) | 56.5% | 43.5% | 49.4% | 44.7% |
| LABBench2 | 86.2% | 82.1% | 84.2% | 82.1% |

All figures and column labels are Google's, from the model card
([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)). The card
publishes no confidence intervals, no task counts and no harness description for these rows, and its
comparison columns are named without versions ("Claude Opus 5", "GPT-5.6 Sol") — labels that do not
match the roster's 5.5-generation Anthropic or GPT-6 rows, so the comparison set is best read as
September-2026 state.

### Independent measurement

Artificial Analysis, Intelligence Index v4.3.2 (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA,
Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1):

| Metric | Value |
| --- | --- |
| Intelligence Index | 41 (rank 56 of 221) |
| Coding / agentic sub-index | 76.3 / 40.2 (as republished by OpenRouter) |
| Output speed | 134.0 tokens/s |
| Time to first token | 28.67 s (AA: "at the higher end", price-tier median 3.88 s) |
| Output tokens on the index | 170M (median 81M — "very verbose") |
| Cost per index task | $3.49 |

Sources: [AA model page](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md). AA's captured page shows
only the `high` variant and no 3.7 Flash row, so it cannot be used to check the vendor's delta claims;
per-benchmark series are client-rendered and were not extractable.

## Limitations and constraints

- **No thinking-off mode.** `minimal` returns an error on both surfaces, so latency and token cost
  cannot be traded away entirely — the lowest setting is `low`
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
- **Verbosity is a documented cost risk.** Google: the model "can use more tokens on longer running and
  complex tasks, by design"; the Agent Platform page advises lower effort levels "or use 3.7 Flash
  instead" when compute efficiency dominates
  ([guide](../../sources/google.dev/gemini-3.8-flash-whats-new/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
  AA's independent 170M-token index run against an 81M median is the measurement behind that warning
  ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)).
- **High first-token latency.** 28.67 s TTFT in AA's measurement, versus a 3.88 s price-tier median
  ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)). The model is fast once it
  starts (134 tok/s), so the latency is reasoning time, not throughput.
- **No generation of media, no Live API.** Text out only; audio and image generation unsupported; the
  Live API is unsupported on this ID and served by separate `gemini-3.8-live` models
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md),
  [deprecations](../../sources/google.dev/gemini-3.8-flash-deprecations/2026-10-26.md)).
- **Some capabilities are preview-gated.** Computer use is "Supported (Preview)" on the Gemini API; the
  Interactions API is preview on the platform; tuning is unsupported on both
  ([model page](../../sources/google.dev/gemini-3.8-flash-model-page/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
- **Sampling parameters are in flux.** The migration guide instructs callers to remove `temperature`,
  `top_p`, `top_k`, `candidate_count` and prefilled model turns for Gemini 3 models, while the Agent
  Platform page still publishes `Temperature: 1.0`, `topP: 0.95`, `topK: 64` as defaults. Unresolved
  ([guide](../../sources/google.dev/gemini-3.8-flash-whats-new/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
- **Safety moved backwards in one dimension.** The card's automated evaluations show multilingual
  safety +5.4pp (lower is better) and unjustified refusals +1.1pp worse than 3.7 Flash, with text
  safety −0.4pp and tone +0.2pp better
  ([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)). These are
  percentage-point deltas on internal automated evaluations, not red-team findings.
- **Regions are coarse.** `global`, `us` and `eu` only, and non-global endpoints carry a 10% price
  premium ([Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md),
  [platform pricing](../../sources/cloud.google.com/gemini-3-8-flash-pricing/2026-10-26.md)).
- **Knowledge cutoff March 2026** — about six months before GA, and January 2025 for some domains
  ([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)).

## Access, pricing, licensing

Prices are list prices on 2026-10-26, USD per 1M tokens. Every paid tier is currently **introductory**
and doubles on 2027-01-01.

| Mode | Input (now → 2027) | Output incl. thinking (now → 2027) | Cached input |
| --- | --- | --- | --- |
| Standard | $0.75 → $1.50 | $3.75 → $7.50 | $0.075 → $0.15 |
| Flex / Batch | $0.375 → $0.75 | $1.875 → $3.75 | $0.0375 → $0.075 |
| Priority | $1.35 → $2.70 | $6.75 → $13.50 | $0.135 → $0.27 |
| Contributor (invite-only) | $0.375 → $0.75 | $1.875 → $3.75 | $0.0375 → $0.075 |

Sources: [Gemini API pricing](../../sources/google.dev/gemini-3.8-flash-pricing/2026-10-26.md),
[platform pricing](../../sources/cloud.google.com/gemini-3-8-flash-pricing/2026-10-26.md). Both Google
pages agree on the ladder; the platform page splits it into three tables and adds a **10% non-global
surcharge** ($0.825/$4.125 now, $1.65/$8.25 from 2027) plus $0.50→$1.00 per 1M tokens per hour of
cache storage. The model carries **no long-context surcharge** on the platform — its `>200K` columns
repeat the `≤200K` figures — despite the page's general long-context rule.

- **Free tier exists** on Standard and Priority, is "Not available" on Batch and Flex, and free-tier
  traffic is the only traffic "used to improve our products" (paid tiers are not)
  ([Gemini API pricing](../../sources/google.dev/gemini-3.8-flash-pricing/2026-10-26.md)).
- **Grounding is metered separately:** 5,000 free search requests per month shared across all Gemini 3
  and newer models, then $14 per 1,000 requests
  ([Gemini API pricing](../../sources/google.dev/gemini-3.8-flash-pricing/2026-10-26.md)).
- **Host price presentation differs.** OpenRouter surfaces four Google-served endpoints under one ID at
  $0.375/$1.875, $0.75/$3.75, $0.825/$4.125 and $1.35/$6.75, and its model-level default is
  $0.825/$4.125 — the non-global rate, not the $0.75/$3.75 global rate, which is a listing choice
  rather than a markup ([OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md)).
  AA quotes Google's global list price ($0.75/$3.75) and a blended $0.58 at a 7:2:1 cache-hit mix
  ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)).
- **Effective cost is dominated by tokens, not sticker price.** AA measures $3.49 per Intelligence
  Index task and 170M tokens for a full index run, roughly double the median token spend for a model at
  this price ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)).
- **Licensing:** no weights, no self-hosting, no open licence — access is governed by the Gemini API
  Additional Terms of Service and, on Google Cloud, the Cloud Platform Terms
  ([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)). The
  allowlisted `gemini-3.8-flash-cyber` variant is additionally "subject to Section 31(a) of the Service
  Specific Terms" ([cyber page](../../sources/cloud.google.com/gemini-3-8-flash-cyber-model-page/2026-10-26.md)).
- **Distribution:** Gemini app, Gemini Enterprise Agent Platform, Google AI Studio, Gemini API, Google
  AI Mode and Google Antigravity
  ([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md)).

## Unresolved questions

- **Did a preview ID ever exist?** The changelog shows a GA-first launch; no `gemini-3.8-flash-preview`
  appears in a capture reaching back to 2026-02-26. Absence of a public entry is not proof of no
  preview ([release notes](../../sources/google.dev/gemini-3.8-flash-release-notes/2026-10-26.md)).
- **Which lifecycle applies?** "No shutdown date announced" (Gemini API) versus "September 2, 2027 or
  later" (Agent Platform). Neither page acknowledges the other
  ([deprecations](../../sources/google.dev/gemini-3.8-flash-deprecations/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
- **Sampling parameters.** The migration guide says remove them; the platform page publishes defaults.
  Whether this is a GenerateContent-vs-Interactions split is not stated
  ([guide](../../sources/google.dev/gemini-3.8-flash-whats-new/2026-10-26.md),
  [Agent Platform page](../../sources/cloud.google.com/gemini-3-8-flash-model-page/2026-10-26.md)).
- **How big is the real gain over 3.7 Flash?** Only vendor numbers exist for the delta. AA has no 3.7
  Flash row in the captured text, and the vendor's Terminal-bench 4.0 row (19.1%) is far below the
  frontier models in the same table, so both the delta and the level need independent confirmation
  ([model card](../../sources/deepmind.google/gemini-3-8-flash-model-card/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md)).
- **Who else serves it?** AA says "available via API through 4 providers", while OpenRouter's endpoint
  list for the ID contains only Google-branded providers. Whether any non-Google inference host serves
  it is unresolved ([AA](../../sources/artificialanalysis.ai/gemini-3-8-flash/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/gemini-3.8-flash/2026-10-26.md)).
- **No confirmed 3.8-generation text Flash-Lite.** No such ID appears in either captured price list or
  in the platform's Flash-Lite model list; a future release could still add one.

## Evidence status

Floor met. First-party evidence: the Gemini API model page, price schedule, release notes, launch
guide and deprecations table (all `google.dev`, captured 2026-10-26) plus the DeepMind model card.
Independent host records: OpenRouter's listing and endpoint APIs, and the Gemini Enterprise Agent
Platform model and pricing pages (`cloud.google.com`, Google-operated but a distinct surface with its
own lifecycle and price presentation). Independent third-party measurement: Artificial Analysis.

**No direct tests were run** for this page. Every capability statement is documentation; every
benchmark number is either Google's own or AA's published measurement, and the two are never mixed
into a single score. All claims pin to captures dated 2026-10-26, and the introductory price expires
2026-12-31, so the pricing section needs re-capture after that date.

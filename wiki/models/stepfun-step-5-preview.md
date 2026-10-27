# Step 5 Preview

StepFun's flagship agentic model, published as open weights under the **StepFun Model License
1.0**: a 600B-parameter sparse MoE with 27B active parameters, a **1M-token context window**,
text/image/video input, and three reasoning-effort levels, at **$1.00 / $2.70 per million
input / output tokens** ([model card](../../sources/huggingface.co/stepfun-step-5-preview-model-card/2026-10-26.md),
[docs](../../sources/stepfun.com/step-5-preview-docs/2026-10-26.md),
[pricing](../../sources/stepfun.com/step-5-preview-pricing/2026-10-26.md)).

It is a distinct model, not a relabel: its own API ID (`step-5-preview`), its own price tier at
5× the input rate of `step-3.7-flash`, its own weights repositories, and its own independent
benchmark row. What makes it awkward to curate is that **"Preview" is unexplained by its
vendor**. The word appears only inside the model ID and the product name; there is no GA date,
no end-of-preview date, no support window, and no first-party page stating what changes at GA.
Every other status signal is a third party's: OpenRouter records no `expiration_date` and
Artificial Analysis marks it `deprecated: false`
([OpenRouter](../../sources/openrouter.ai/step-5-preview/2026-10-26.md),
[AA row](../../sources/artificialanalysis.ai/step-5-preview-leaderboard-row/2026-10-26.md)).
Treat it as current, with an unpriced lifecycle risk.

## Identity

- **Canonical name:** Step 5 Preview. **API model ID:** `step-5-preview`
  ([docs](../../sources/stepfun.com/step-5-preview-docs/2026-10-26.md)). No dated vendor snapshot
  ID exists; `stepfun/step-5-preview-20261008` is OpenRouter's canonical slug, not a vendor name.
- **Vendor:** StepFun (阶跃星辰). **Weights:** `stepfun-ai/Step-5-Preview` (FP8) and
  `stepfun-ai/Step-5-Preview-BF16`, mirrored on ModelScope, ungated
  ([model card](../../sources/huggingface.co/stepfun-step-5-preview-model-card/2026-10-26.md)).
- **Architecture:** sparse Mixture-of-Experts, 600B total / 27B active parameters; the Hub
  architecture tag is `step5_vl`, the only machine-readable signal that the checkpoint carries a
  vision tower ([model card](../../sources/huggingface.co/stepfun-step-5-preview-model-card/2026-10-26.md)).
- **Aliases and labels:** "Step 5 Preview" everywhere; OpenRouter "StepFun: Step 5 Preview"
  (`stepfun/step-5-preview`); Artificial Analysis measurement slug `step-5` bound to catalogue
  slug `step-5-preview` by its own `releaseSlug` field. No non-preview "Step 5" exists in any
  captured source, so AA's shorter slug is not a second model.
- **Siblings (same vendor, current catalogue):** `step-3.7-flash` (196B / ~11B active, 256K
  context, $0.20 / $1.15), `step-3.5-flash` (196B / ~11B, 256K, $0.10 / $0.30), plus the StepAudio
  and vision lines. `step-3` and eight older Step models were retired on **2026-07-08**
  ([lifecycle](../../sources/stepfun.com/model-lifecycle/2026-10-26.md)); AA additionally marks
  all three earlier Step text rows deprecated
  ([AA row](../../sources/artificialanalysis.ai/step-5-preview-leaderboard-row/2026-10-26.md)).
- **Host endpoints:** StepFun's own OpenAI-compatible API at `https://api.stepfun.ai/v1`
  ([reasoning guide](../../sources/stepfun.com/reasoning-models-guide/2026-10-26.md)), and
  OpenRouter with five endpoints across four providers — InferenceNet (two routes), Featherless,
  DeepInfra, StepFun — at a uniform $1.00 / $2.70
  ([OpenRouter](../../sources/openrouter.ai/step-5-preview/2026-10-26.md)).

### Release date: three answers, no first-party one

| Source | Date | What the date actually is |
| --- | --- | --- |
| Artificial Analysis | **2026-09-18** | AA's `releaseDate` field and FAQ answer; no cited source |
| Hugging Face | **2026-09-20** | repository `createdAt` 2026-09-20T03:15:06Z |
| OpenRouter | **2026-10-08** | catalogue `created` 2026-10-08T12:34:09Z, labelled "Released Oct 8, 2026" |

No captured first-party page prints a launch date — not the model card, not the docs, not the
Chinese platform, whose only Step 5 Preview announcement is a cache-price change. The
2026-09-18/20 pair is coherent — AA's date precedes the weights upload by two days — and is the
better-supported reading, since a model whose weights exist on 2026-09-20 was presumably
announced by then. OpenRouter's 2026-10-08 is most likely the day OpenRouter listed it; the
[cache-price announcement](../../sources/stepfun.com/step-5-preview-cache-price-adjustment/2026-10-26.md)
proves paying API usage before 2026-10-14, which is consistent with either date and therefore
settles nothing. The disagreement is recorded, not reconciled. **All three candidate dates fall
inside the one-year window**, so this is not a specialist exception.

### Preview status and support window

- The vendor's lifecycle page lists retirements and scheduled retirements and **does not mention
  Step 5 Preview**; it does recommend Step 5 Preview as the forward path for software-engineering
  and multimodal workloads, and states it "does not replace image-generation or audio models"
  ([lifecycle](../../sources/stepfun.com/model-lifecycle/2026-10-26.md)).
- The docs never use "preview" as a status term and publish no GA commitment
  ([docs](../../sources/stepfun.com/step-5-preview-docs/2026-10-26.md)).
- OpenRouter's `expiration_date` is `null`; AA's `deprecated` is `false` on both rows.
- Conclusion: **current and actively recommended, with no published support window.** Absence
  from a retirement table is weak positive evidence, not a commitment, and the `-preview` suffix
  means the model ID, price, and weights may all change at GA.

### Is it a distinct model or a repackaging?

Distinct, on the tests that matter here:

1. **Its own ID and price tier.** `step-5-preview` at $1.00/$2.70 against `step-3.7-flash` at
   $0.20/$1.15 and `step-3.5-flash` at $0.10/$0.30 — a different tier, not a rename
   ([pricing](../../sources/stepfun.com/step-5-preview-pricing/2026-10-26.md)).
2. **Its own weights.** A separate 600B/27B repository pair in FP8 and BF16, alongside a vLLM
   image (`vllm/vllm-openai:step-5-preview`) and an SGLang image
   (`lmsysorg/sglang:step-5-preview`)
   ([model card](../../sources/huggingface.co/stepfun-step-5-preview-model-card/2026-10-26.md)).
3. **Its own evidence.** Its own AA row, its own OpenRouter entry, its own doc page, and a
   dedicated cache-price announcement.

The caveat is that no captured first-party source describes the architecture's lineage from the
Step 3 series, so "600B/27B" is a specification, not a proven training relationship.

## Current assessment

**Frontier-adjacent, not frontier; expensive for an open-weight model of its class, cheap against
the proprietary frontier; unusually well served for a preview.** Five independent facts carry
the assessment:

- **AA Intelligence Index 43.73, #5 of 122** — the rounded 44 appears on AA's page, 43.7 on
  OpenRouter ([AA model page](../../sources/artificialanalysis.ai/step-5-preview/2026-10-26.md),
  [AA row](../../sources/artificialanalysis.ai/step-5-preview-leaderboard-row/2026-10-26.md)).
  AA's comparison class is *open-weight models of similar size*, where the median is 19; the
  model is far ahead of that class but below the frontier rows in the same wiki (Claude Opus 5.5
  58, Claude Sonnet 5.5 56, Kimi K3.1 Pro 55, GPT-6 Astra 53).
- **Fast and verbose.** 189 output tokens/s median (5th–95th percentile 158–259), and 160M
  output tokens on the index against a 140M median. Speed and verbosity both raise the bill on
  reasoning-heavy workloads.
- **Reasoning dominates latency.** Median TTFT is 1.24 s, but median time to first *answer*
  token is 11.82 s and median reasoning time 10.58 s; end-to-end median 14.47 s. Any
  responsiveness claim based on the 1.24 s figure alone is misleading.
- **Mid-pack on professional work in third-party harnesses.** OpenRouter's restatement of
  Vals AI and AA scores shows 33.3% (AA) / 31.8% (Vals) on Terminal-Bench 4.0, 58.9% SciCode,
  54.7% GDPval-AA, 46.5% HLE, 55.4% Vals Finance Index, 40.8% SWE-bench Multimodal, and 0.4% on
  SRE Bench ([OpenRouter](../../sources/openrouter.ai/step-5-preview/2026-10-26.md)). The
  finance and code-migration numbers support the vendor's "particular strength in finance"
  positioning; the SRE and legal rows do not support a general agentic claim.
- **The vendor publishes no number this wiki can quote.** The model card's entire benchmark
  section is one PNG chart with no figures in text, and no first-party launch post or benchmark
  table was found ([model card](../../sources/huggingface.co/stepfun-step-5-preview-model-card/2026-10-26.md)).
  Every quantitative claim on this page is therefore third-party.

**What the evidence undercuts:** the vendor's "frontier-level performance" phrasing. On AA's
index the model sits 9–14 points below the frontier rows listed above, and its 33.3% on
Terminal-Bench 4.0 is a mid-pack agentic-coding result rather than a leading one.
"Frontier-level" is marketing; "best open-weight model in its size class by a wide margin, well
short of the proprietary frontier" is what the numbers support.

## Documented capabilities

From the [docs](../../sources/stepfun.com/step-5-preview-docs/2026-10-26.md) unless noted.

| Property | Value |
| --- | --- |
| Context | 1M tokens (1,000,000 on StepFun's endpoint; 1,048,576 on OpenRouter's fp4 routes) |
| Max output | **64k tokens** per the docs; OpenRouter endpoints range 32,768–131,072; the card claims "up to 1M" |
| Input | Text, images, video. Images by URL or Base64; video by URL, Base64, or `stepfile://` |
| Image limits | JPG/JPEG, PNG, WebP, static GIF; up to **60 images** per request; `detail` of `low`/`high` |
| Video limits | MP4, QuickTime, Matroska; individual MP4 under **128 MB**; "less than 5 minutes is recommended" |
| Output | Text only |
| Reasoning | `low` / `medium` / `high` via `reasoning_effort` (Chat Completions) or `output_config.effort` (Messages) |
| Tool use | Function calling, `tool_choice` in all four modes, JSON Mode and JSON Schema structured output |
| Caching | Prompt caching; cache-hit input $0.10/M on the vendor platform |
| Streaming | Supported |
| Sampling | Vendor recommends `temperature=1.0`, `top_p=0.95`, `top_k=0` |
| Self-hosting | vLLM / SGLang OpenAI-compatible serving, or Transformers offline; FP8 on 4× B300 or 8× H200 |

**Vendor boundary statement, quoted because it limits the agentic claim:** "Tools, search, and
code execution capabilities are provided by the application that integrates the model; the model
does not itself access your local environment or external services"
([docs](../../sources/stepfun.com/step-5-preview-docs/2026-10-26.md)).

**Marketing claims, labelled as such:** "frontier-level performance across software engineering
and professional knowledge work, with particular strength in finance"; "can navigate large
codebases, coordinate changes across files, run and verify code, and iterate on the results";
"particularly strong in financial tasks" ([model card](../../sources/huggingface.co/stepfun-step-5-preview-model-card/2026-10-26.md)).
The card's evaluation notes name its harnesses — SWE-agent for DeepSWE v1.1, AA as the source of
GDPval-AA v2.1 "as of September 20, 2026" — and state that published results use the **High**
reasoning setting, but publish no scores in text.

## Limitations and constraints

**Conflicting published envelopes.** The same vendor publishes three different output ceilings
— "Up to 1M tokens" (card), "64k tokens" (docs at-a-glance), and "`max_tokens` defaults to `INF`;
no limit is applied" (docs feature table). OpenRouter's routes span 32,768 to 131,072. Plan for
64k unless the specific route is tested. The context figure also disagrees by 48,576 tokens
between the vendor's 1,000,000 and OpenRouter's 1,048,576.

**Input modality disagreement.** The card's prose, the docs, and OpenRouter all say text, image
**and video**; the card's own specification table says "Text, image"; AA says "text and image"
and never mentions video
([AA](../../sources/artificialanalysis.ai/step-5-preview/2026-10-26.md)). Video is documented with
concrete limits, so the narrower readings look like harness scope rather than a capability
difference — but no captured source tests video end to end.

**Reasoning is not optional.** OpenRouter reports reasoning as `mandatory: true` with a `medium`
default and `low`/`medium`/`high` efforts
([OpenRouter](../../sources/openrouter.ai/step-5-preview/2026-10-26.md)); the vendor documents
three levels and no off switch. Every request pays a reasoning floor, and reasoning tokens bill
at the $2.70 output rate ([pricing](../../sources/stepfun.com/step-5-preview-pricing/2026-10-26.md)).

**Host routes are not equivalent.** At one uniform price, OpenRouter's routes differ in
quantisation and envelope: fp4 routes (InferenceNet) reach 131,072 output tokens and 1,048,576
context; the fp8 routes cap at 64,000 (StepFun) or 65,536 (DeepInfra); Featherless caps context
at 262,144 and runs at 31 tokens/s. Cache-read pricing also differs, $0.05 on InferenceNet
versus $0.10 elsewhere. Because every route costs the same, the meaningful choice is context,
quantisation, and speed, not price.

**Licensing conditions are unread.** The card says the StepFun Model License 1.0 is "an
Apache-2.0-Style license, with additional attribution and commercial-license conditions specific
to model use, modification and distribution"; AA summarises it as "Commercial use is allowed with
restrictions". The `LICENSE.txt` text was not captured, so the actual thresholds are unknown —
this is the largest unquantified deployment risk for anyone planning to self-host commercially.

**BF16 self-hosting is unvalidated.** The card states plainly that "the full BF16 `convert.py →
generate.py --tp-dir` file-shard workflow has not yet been validated end to end". FP8 serving is
the documented, exercised path.

**Rate limits are account-level.** Concurrency, RPM and TPM are assigned by cumulative top-up
tier (V0: 5 concurrent / 100 RPM / 500k TPM; V4: 130 / 2,600 / 13M), with no model-specific
quota, and the vendor reserves the right to adjust tiers at capacity
([pricing](../../sources/stepfun.com/step-5-preview-pricing/2026-10-26.md)). A large-context agent
loop on a low tier will hit TPM long before the 1M window.

**Scope exclusion.** The vendor explicitly says Step 5 Preview "does not replace image-generation
or audio models" — it is a text-out model and no part of the StepFun image or audio lines
([lifecycle](../../sources/stepfun.com/model-lifecycle/2026-10-26.md)).

**No safety or refusal evidence.** Nothing captured describes content policy, refusals, or
moderation for this model; OpenRouter's `is_moderated` is `false`, which is a host flag, not a
vendor safety statement.

## Access, pricing, licensing

USD per million tokens
([pricing](../../sources/stepfun.com/step-5-preview-pricing/2026-10-26.md)):

| Item | `step-5-preview` | `step-3.7-flash` | `step-3.5-flash` |
| --- | --- | --- | --- |
| Input, cache miss | $1.00 | $0.20 | $0.10 |
| Input, cache hit | $0.10 | $0.04 | $0.02 |
| Output | $2.70 | $1.15 | $0.30 |
| Context | 1M | 256K | 256K |

**Billing basis:** per token, with no separate cache-write charge — "the cache-miss input price
includes writing new content to the cache" — and reasoning billed as output. Images bill as
tokens: "By default, each image uses 169 input tokens; with `detail` enabled, the token count is
calculated from the image size." Platform add-ons are priced separately (internet search $0.006
per call, image search $0.02 per call, file storage $0.08/GB/day).

**A dated price change on one line.** Effective 2026-10-14 00:30 Beijing time, the Chinese
platform raised cache-hit input from ¥0.35 to ¥0.70 per million tokens for pay-as-you-go calls,
leaving cache-miss input (¥7) and output (¥20) unchanged, with grandfathering for prior callers
and an exclusion for Step Plan routes
([announcement](../../sources/stepfun.com/step-5-preview-cache-price-adjustment/2026-10-26.md)).
The CNY and USD lists are consistent at roughly ¥7 per USD, but no StepFun page states a
conversion basis or guarantees they move together.

**Triple-confirmed list price.** The vendor's $1.00 / $0.10 / $2.70, OpenRouter's catalogue
pricing, and AA's "$1.00 in / $2.70 out, cache discount 90%" agree exactly. AA's derived figures
are $0.54 per million blended at a 7:2:1 cache-hit/input/output ratio and **$1.03 per
Intelligence Index task**
([AA](../../sources/artificialanalysis.ai/step-5-preview/2026-10-26.md)).

**Cost shape.** AA calls the $1.00 input rate "at the higher end" against a $0.43 open-weight
median and the $2.70 output rate "somewhat higher than average" against $1.40, while per task
$1.03 is mid-pack ([AA](../../sources/artificialanalysis.ai/step-5-preview/2026-10-26.md)).
Against the proprietary frontier it is cheap: a quarter of Claude Opus 5.5's $4.00 input rate as
recorded in this wiki ([Opus 5.5](claude-opus-5.5.md)). Verbosity (160M index tokens against a
140M median) erodes the token-price advantage rather than the rate itself.

**Licence:** StepFun Model License 1.0, weights downloadable, ungated, with ModelScope mirrors;
"Apache-2.0-Style" per the vendor, "commercial use … with restrictions" per AA. The full terms
were not read. No separate hosted-service licence or acceptable-use document was captured.

**Host differences worth knowing:** StepFun's own endpoint is the only one whose envelope matches
the docs (1,000,000 context, 64,000 output, fp8), and at 105 tps it is faster than Featherless's
31 but well below the fp4 routes' 144–149. AA benchmarks only StepFun's API, so its 189 tps
figure describes the vendor's serving, not the fp4 routes that OpenRouter's own table measures
at 144–149 tps — the two are not directly comparable and neither is a controlled comparison.

## Unresolved questions

1. **What does "Preview" commit to?** No first-party page defines it, dates it, or says what
   changes at GA (ID, price, weights). The model ID itself is the only marker.
2. **When was it released?** AA says 2026-09-18, the weights repository was created 2026-09-20,
   OpenRouter says 2026-10-08. No first-party date exists in any captured page.
3. **Why does the card's specification table say input is "Text, image"** when its prose, the
   docs, and OpenRouter say video too — and why does it claim "up to 1M" output against the
   docs' 64k?
4. **What are the licence's commercial conditions?** `LICENSE.txt` was not captured; "additional
   attribution and commercial-license conditions" is unspecified, and this decides whether
   self-hosting is viable for a commercial product.
5. **Are the fp4 and fp8 routes the same weights?** OpenRouter reports quantisation per endpoint
   but not checkpoint identity, and no source measures quality loss from fp4 on this model.
6. **What effort setting do the independent scores use?** The vendor's card says High; AA and Vals
   do not state an effort level, and AA's reasoning time (10.58 s median) suggests deep thinking
   but does not prove the setting.
7. **Why is SRE Bench 0.4%** while neighbouring agentic rows sit near 30–50%? One harness, one
   number, no explanation in any captured source; it may be a task-format mismatch rather than a
   capability gap.
8. **Is there a non-preview Step 5?** No source mentions one. The `-preview` suffix plus the
   absence of a lifecycle entry leaves the GA path entirely undocumented.

## Evidence status

**Floor met, comfortably.** Five first-party records, one independent host, and two independent
benchmark records.

- **First-party, five records:** the [model card](../../sources/huggingface.co/stepfun-step-5-preview-model-card/2026-10-26.md)
  (identity, parameters, licence, self-hosting, evaluation settings), the
  [model docs page](../../sources/stepfun.com/step-5-preview-docs/2026-10-26.md) (ID, context,
  output, image/video limits, features), the [pricing page](../../sources/stepfun.com/step-5-preview-pricing/2026-10-26.md),
  the [lifecycle page](../../sources/stepfun.com/model-lifecycle/2026-10-26.md) (status, siblings,
  retirement context), and the [reasoning guide](../../sources/stepfun.com/reasoning-models-guide/2026-10-26.md)
  (tier positioning, effort levels, base URL). The dated
  [cache-price announcement](../../sources/stepfun.com/step-5-preview-cache-price-adjustment/2026-10-26.md)
  is the only first-party artefact with a date on it.
- **Independent host:** [OpenRouter](../../sources/openrouter.ai/step-5-preview/2026-10-26.md) —
  catalogue metadata, five endpoints with per-route context/quantisation/pricing, latency,
  throughput, uptime, listing date, and restated AA and Vals AI scores.
- **Independent benchmarks:** [Artificial Analysis model page](../../sources/artificialanalysis.ai/step-5-preview/2026-10-26.md)
  (index 44, speed, cost, verbosity, licence, release date) and the
  [AA leaderboard row](../../sources/artificialanalysis.ai/step-5-preview-leaderboard-row/2026-10-26.md)
  (full-precision index 43.73, latency decomposition, deprecation flags, `releaseDate`).
- **Not captured, and it matters:** the card's benchmark chart (image-only, so the vendor's own
  scores are unreadable here), `LICENSE.txt`, the model page at `stepfun.com/step-5-preview`
  (client-rendered SPA returning an empty shell), and any Vals AI page directly — its numbers
  reach this page only through OpenRouter's restatement.
- **No direct tests were run for this page.** No request was sent to any endpoint; every number
  is quoted from a source record. Where figures disagree — release date (2026-09-18 / 09-20 /
  10-08), output ceiling (64k / 131k / "1M"), context (1,000,000 / 1,048,576), latency (1.24 s
  TTFT / 11.82 s to first answer token), cache-read price ($0.05 / $0.10), index (43.73 / 43.7 /
  44) — all values are recorded rather than reconciled.
- **Weakest links:** the vendor's benchmark evidence is an image, so the page's quantitative
  spine is entirely third-party; the licence text is unread; and the preview lifecycle is
  undocumented, which means the ID, price, and weights could change without notice.

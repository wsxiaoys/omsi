# DeepSeek V4 Pro 0813

DeepSeek's large MoE flagship: **1.6T total / 49B active** parameters (the preview card's
figures, restated independently by Artificial Analysis), 1M-token context, **text-only**, MIT
weights, released **2026-08-13** as the GA version of the V4-Pro preview
([model card](../../sources/deepseek.com/v4-pro-0813-model-card/2026-10-26.md),
[GA announcement](../../sources/deepseek.com/v4-pro-ga-announcement/2026-10-26.md),
[preview card](../../sources/deepseek.com/v4-pro-preview-model-card/2026-10-26.md)). It is the
current Pro tier and, on DeepSeek's own API, the model behind `deepseek-v4-pro`.

The identity that matters for reading the rest of the wiki: **this is not the same entity as
DeepSeek V4.1 Flash, and it is not a bigger sibling that dominates it.** V4.1 Flash shipped four
weeks later on a different architecture (Causal Encoder-Decoder, 552B backbone, native vision),
costs less, and on DeepSeek's own comparison table beats this model on almost every agentic and
coding benchmark. What V4 Pro 0813 keeps is a knowledge-recall edge and the Pro name. On
Artificial Analysis the gap runs the other way from the naming: **V4 Pro 0813 scores 36, V4.1
Flash 1017 scores 45**
([AA](../../sources/artificialanalysis.ai/deepseek-v4-pro-0813/2026-10-26.md),
[AA leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)).

## Identity

- **Canonical name:** DeepSeek-V4-Pro-0813. The roster label "DeepSeek V4 Pro 0813" is
  Artificial Analysis's rendering of the same model, not a separate ID.
- **Vendor:** DeepSeek (DeepSeek-AI).
- **Released:** **2026-08-13**, inside the one-year window. Three first-party artifacts agree:
  the [GA announcement](../../sources/deepseek.com/v4-pro-ga-announcement/2026-10-26.md), the
  [change log](../../sources/deepseek.com/changelog/2026-10-26.md), and the Hugging Face
  repository creation timestamp (`2026-08-13T03:05:06Z`). AA's payload carries
  `releaseDate: 2026-08-13`. **OpenRouter says "Released Aug 12, 2026"**; its catalogue record
  was created `2026-08-12T15:42:44Z`, which reads as a catalogue-entry timestamp rather than a
  vendor launch date ([OpenRouter](../../sources/openrouter.ai/deepseek-v4-pro-0813/2026-10-26.md)).
  The one-day discrepancy is recorded, not resolved.
- **What `0813` denotes:** the release date, 2026-08-13. Neither the card nor the announcement
  says so; the reading comes from the date agreement above.
- **Aliases and labels:**
  - First-party API: **`deepseek-v4-pro`**, a **rolling alias**. Verbatim: *"simply set the model
    name to `deepseek-v4-pro` to use the latest version"*
    ([announcement](../../sources/deepseek.com/v4-pro-ga-announcement/2026-10-26.md)).
  - App/web: "Expert Mode".
  - OpenRouter: `deepseek/deepseek-v4-pro-0813`, permaslug
    `deepseek/deepseek-v4-pro-20260813`.
  - Hugging Face: `deepseek-ai/DeepSeek-V4-Pro-0813`.
  - Artificial Analysis: "DeepSeek V4 Pro 0813 (Max)". `(max)` is a reasoning-effort level, not
    a variant.
- **Host endpoints:** first-party `api.deepseek.com`; 23 providers across 25 endpoints on
  OpenRouter, including DeepSeek itself
  ([OpenRouter](../../sources/openrouter.ai/deepseek-v4-pro-0813/2026-10-26.md)); inference-provider
  integrations declared on the weights repository (Together, Novita, DeepInfra, Baseten). Not
  available through OpenRouter's EU in-region routing at capture.
- **Siblings and predecessors:**
  - **DeepSeek-V4-Pro (Preview)**, released 2026-04-24 — a **different checkpoint** with its own
    repository (64 shards, ~1.60T parameters) and its own card. The GA card describes 0813 as
    *"built on the DeepSeek-V4-Pro (Preview) model structure, with a DSpark speculative decoding
    module attached"* and as *"superseding the preview version"*. The preview is not curated as a
    separate page; its architecture is documented in
    [its card record](../../sources/deepseek.com/v4-pro-preview-model-card/2026-10-26.md).
  - **[DeepSeek V4.1 Flash](deepseek-v4.1-flash.md)** (2026-09-10) and its
    [`1017` checkpoint](deepseek-v4.1-flash-1017.md) — a **different architecture family**, not a
    smaller sibling of this model. See "Relationship to V4.1 Flash" below.
  - DeepSeek-V4-Flash (284B/13B) and DeepSeek-V4-Flash-0731 — the previous Flash generation,
    retired from DeepSeek's API on 2026-09-10
    ([change log](../../sources/deepseek.com/changelog/2026-10-26.md)).

### Identity ambiguity

The first-party name does not pin the checkpoint. `deepseek-v4-pro` moved from the preview to
0813 at GA and is documented as pointing at "the latest version". The same pattern already
moved `deepseek-flash` from the September V4.1-Flash base to `1017` on 2026-10-17 without
changing name or price. Treat `deepseek-v4-pro` as an alias with a checkpoint history, not as a
canonical ID, and cite `DeepSeek-V4-Pro-0813` when the distinction matters.

## Current assessment

**Status: current, not deprecated.** No retirement or deprecation statement was captured for any
V4-Pro model, and `deepseek-v4-pro` resolves here
([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)). It is also what DeepSeek's
app and web front-end offer as "Expert Mode"; which checkpoint the app runs is not stated.

**It is a real checkpoint, not a repackaging.** A separate repository whose file metadata sums
to ~1.65T parameters against the preview's ~1.60T, an extra DSpark speculative-decoding module,
and a benchmark table that differs from the preview's throughout (Terminal-Bench 2.1 87.9 vs
72.1; DeepSWE 62.7 vs 12.8)
([card](../../sources/deepseek.com/v4-pro-0813-model-card/2026-10-26.md)). The card describes
this as the preview structure plus a post-training update and DSpark — the same architecture,
not a new one.

**Where it actually sits.** Two independent evaluators put its Terminal-Bench 4.0 score at
**14.1%** — Artificial Analysis via OpenRouter's restatement, and Vals AI directly
([Vals AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)). DeepSeek's own V4.1-Flash card
attributes **12.4** on that benchmark to "DS-V4-Pro"
([V4.1 card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)). Vendor and
independent figures agree here to within 1.7 points, which is the opposite of the V4.1-Flash
case, where independent runs landed 8.5–10.5 points below the vendor row. The honest reading is
that this model is **weak on Terminal-Bench 4.0 in absolute terms** (V4.1 Flash 1017 scores
31.8% on the same board) and that its strength is elsewhere: knowledge, and Terminal-Bench
**2.1**-era agentic work.

**Who should use it.** A reader who needs maximum knowledge recall from an open-weights model
that self-hosts, or who is pinned to a text-only pipeline. A reader choosing on agentic coding
per dollar should look at V4.1 Flash first — it is cheaper and, on both DeepSeek's table and
AA's index, ahead.

## Documented capabilities

- **Context and output:** 1M-token context (1,048,576) and up to **384K (393,216)** completion
  tokens ([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/deepseek-v4-pro-0813/2026-10-26.md)). The card
  recommends a 384K maximum output length at `high` and `max` effort.
- **Modality: text in, text out.** DeepSeek's capability table marks vision **not supported**
  for `deepseek-v4-pro`, against ✓ for `deepseek-flash`
  ([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)); AA independently lists
  "Supports: text" for both directions. This is the clearest functional difference from V4.1
  Flash, which is natively multimodal.
- **Reasoning control:** `low` / `high` / `max`, new at GA for both Pro and Flash
  ([announcement](../../sources/deepseek.com/v4-pro-ga-announcement/2026-10-26.md)). OpenRouter
  reports default `high` and non-mandatory reasoning. The preview card named the same three
  modes Non-think / Think High / Think Max; neither card states the mapping
  ([preview card](../../sources/deepseek.com/v4-pro-preview-model-card/2026-10-26.md)).
- **Tool use and structured output:** function calling via `tools` / `tool_choice`, JSON output,
  and structured outputs through a JSON-schema `response_format`
  ([OpenRouter](../../sources/openrouter.ai/deepseek-v4-pro-0813/2026-10-26.md)).
- **Protocols:** native OpenAI Responses API support "optimized for Codex with one-click setup",
  plus Anthropic-API compatibility and chat-prefix completion (beta)
  ([announcement](../../sources/deepseek.com/v4-pro-ga-announcement/2026-10-26.md),
  [price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)).
- **FIM completion:** beta, non-thinking mode only
  ([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)).
- **Architecture (inherited from the preview, not restated on the GA card):** hybrid attention
  combining Compressed Sparse Attention (CSA) and Heavily Compressed Attention (HCA), stated to
  need 27% of DeepSeek-V3.2's single-token inference FLOPs and 10% of its KV cache at 1M
  context; manifold-constrained hyper-connections; Muon optimizer; 32T pre-training tokens;
  SFT + GRPO RL then on-policy distillation
  ([preview card](../../sources/deepseek.com/v4-pro-preview-model-card/2026-10-26.md)).
- **Self-hosting:** vLLM and SGLang recipes, with DSpark enabled by a single flag from the same
  checkpoint; the vLLM example targets "a single 4×GB300 node" with fp8 KV cache
  ([card](../../sources/deepseek.com/v4-pro-0813-model-card/2026-10-26.md)).

### Vendor-reported benchmarks (marketing, harness-qualified)

From the [GA card](../../sources/deepseek.com/v4-pro-0813-model-card/2026-10-26.md), at `max`
effort, `temperature=1.0`, `top_p=0.95`, using **DeepSeek Harness minimal mode**:

| Benchmark | V4-Pro-0813 | V4-Pro (Preview) | V4-Flash-0731 | Kimi K3 | Opus-4.8 |
| --- | --- | --- | --- | --- | --- |
| HLE (wo / w tools) | 42.7 / 60.0 | 37.7 / 48.2 | 37.8 / 51.5 | 43.5 / 56.0 | **49.8 / 57.9** |
| Terminal Bench 2.1 | 87.9 | 72.1 | 82.7 | **88.3** | 85.0 |
| NL2Repo | 61.5 | 38.5 | 54.2 | — | **69.7** |
| Cybergym | **83.3** | 52.7 | 76.7 | 80.0 | 78.3 |
| DeepSWE | 62.7 | 12.8 | 54.4 | **67.5** | 58.0 |
| Toolathlon-Verified | 74.1 | 55.9 | 70.3 | **76.5** | 76.2 |
| Agents' Last Exam | 25.7 | 16.5 | 25.2 | **27.6** | 25.7 |
| AutomationBench (Public) | 31.8 | 12.8 | 25.1 | 30.8 | 27.2 |

These are vendor numbers under a vendor harness, and the table has **no Terminal-Bench 4.0 row**
even though the V4.1-Flash card reports one for this model. Two of the ten rows (DSBench-FullStack
71.1, DSBench-Hard 67.2) are internal test sets and cannot be checked at all.

## Limitations and constraints

- **Text only.** No image or document input. If the workload involves screenshots, charts or
  PDFs, this model cannot be pointed at them
  ([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)).
- **No Jinja chat template.** The release ships an `encoding/` folder and the `encoding_dsv4`
  Python encoder instead. A generic chat template will not reproduce the reported numbers, and
  self-hosting means adopting DeepSeek's prompt format
  ([card](../../sources/deepseek.com/v4-pro-0813-model-card/2026-10-26.md)).
- **Weak on the newest agentic benchmark.** 14.1% on Terminal-Bench 4.0 in two independent
  measurements, against 31.8% for V4.1 Flash 1017 on the same board. For terminal-agent work this
  is the wrong model in the DeepSeek family.
- **A composite index that contradicts the tier name.** AA scores it 36, one point above the
  DeepSeek vision model (35) and nine below V4.1 Flash 1017 (45), out of a 122-model field
  ([AA](../../sources/artificialanalysis.ai/deepseek-v4-pro-0813/2026-10-26.md)).
- **Non-hallucination is the weakest sub-score in reach.** AA's restated AA-Omniscience
  non-hallucination rate is **5.2%** with 49.1% accuracy — a knowledge model that is often wrong
  when it does not know. This is a restatement through OpenRouter, not an AA page reading
  ([OpenRouter](../../sources/openrouter.ai/deepseek-v4-pro-0813/2026-10-26.md)).
- **Host gaps are large and easy to miss.** DeepInfra caps completion at **16,384 tokens** and
  Venice at 32,768, against DeepSeek's 393,216; Nebius serves 979,000 context; eleven of the 25
  OpenRouter endpoints declare no quantization while others serve fp4, mxfp4 or fp8. A benchmark
  number attached to the slug is not necessarily a number for identical weights
  ([OpenRouter](../../sources/openrouter.ai/deepseek-v4-pro-0813/2026-10-26.md)).
- **Regional routing.** Not available through OpenRouter's EU in-region routing at capture; no
  reason or date given. DeepSeek does not publish a data-residency option for this model in the
  captured material.
- **Concurrency.** 500 concurrent requests on the first-party API, against 2,500 for
  `deepseek-flash` ([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)).
- **Two unexplained Vals AI rows.** ProgramBench **0.0%** and SRE Bench **1.9%** appear in
  OpenRouter's restatement. Nothing explains them; they look like harness or submission failures
  rather than capability. Do not quote them as measurements.

## Relationship to V4.1 Flash

The roster calls this model "Pro sibling to V4.1 Flash". That framing is misleading in one
direction and should not be carried into a recommendation.

- **Different architecture, later date.** V4.1 Flash (2026-09-10) is the first model on DeepSeek's
  Causal Encoder-Decoder design with a 552B backbone, 8B/16B active parameters and native image
  understanding ([V4.1 card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)).
  V4 Pro 0813 is the earlier hybrid-CSA/HCA MoE line. They are not two sizes of one model.
- **DeepSeek's own table puts Flash ahead on agentic work.** In the V4.1 card, `DS-V4-Pro` (this
  model) scores Terminal-Bench 4.0 12.4 against 31.2, DeepSWE 62.7 against 74.2, CyberGym 83.3
  against 88.1, and Agents' Last Exam 25.7 against 31.8. **Pro keeps the knowledge lead**: GPQA
  Diamond 92.4 vs 90.9, HLE 42.7 vs 36.8
  ([V4.1 card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)).
- **Independent measurement agrees on direction, not on size.** AA: 36 for Pro 0813, 45 for V4.1
  Flash 1017. OpenRouter's summary of DeepSeek's positioning also describes Flash as the
  cost-efficient tier that "exceeds V4 Pro on performance, speed, and task completion time"
  ([OpenRouter](../../sources/openrouter.ai/deepseek-v4-pro-0813/2026-10-26.md)).
- **Price runs the same way.** Off-peak, Pro costs $0.66 / $1.98 per million tokens and Flash
  $0.15 / $0.60 ([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)).
- **What remains Pro-only:** the name, the larger parameter count, the 1.6T-class knowledge
  profile, and — for now — the absence of a V4.1 Pro. Nothing in the captured evidence announces
  one.

The practical rule: **do not transfer findings between these pages in either direction**, and do
not assume the Pro tier is the stronger one for agentic work.

## Access, pricing, licensing

- **Weights:** public, **MIT**, `deepseek-ai/DeepSeek-V4-Pro-0813`, 66 safetensors shards, ~892.8
  GB, fp8/8-bit tags ([card](../../sources/deepseek.com/v4-pro-0813-model-card/2026-10-26.md)).
  AA independently records the licence as MIT. MIT is unusually permissive at this scale, but the
  card does not address acceptable use, output ownership or training-data provenance, and the MIT
  text does not reach those questions. Silence is not permission.
- **First-party API list price, USD per 1M tokens**
  ([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)):

| | Off-peak | Peak |
| --- | --- | --- |
| Input, cache hit | $0.022 | $0.044 |
| Input, cache miss | $0.66 | $1.32 |
| Output | $1.98 | $3.96 |

Peak is exactly 2× off-peak, and peak hours are narrow: *"01:00 - 04:00 and 06:00 - 10:00 UTC,
Monday through Friday, excluding Chinese public holidays."* Everything else, including
weekends, is off-peak. The scheme took effect **2026-08-16 16:00 UTC**
([announcement](../../sources/deepseek.com/v4-pro-ga-announcement/2026-10-26.md)). Any cost
figure without a peak/off-peak qualifier is ambiguous by 2×.

- **Host price spread on OpenRouter:** input $0.1259–$1.65 and output $0.80–$8.00 per million
  across 25 endpoints, with the common rate $1.32 / $3.96 on eight of them. OpenRouter's headline
  "$0.1259 / $8" is Relace's endpoint — cheapest input, most expensive output on the page — not a
  market price. The DeepSeek endpoint is listed at the off-peak rate ($0.66 / $1.98), so
  OpenRouter's figures understate first-party peak cost. AA priced the model at the **peak** rate
  ($1.32 / $3.96) for its cost-per-task figure
  ([AA](../../sources/artificialanalysis.ai/deepseek-v4-pro-0813/2026-10-26.md)).
- **Server-side tools:** Search and Fetch are billed per successful request at $0.75 per 1,000,
  with tool calls made through DeepSeek Harness, Claude Code or Codex free until
  **2026-11-01 00:00 Beijing time**. That is a dated change, not a stable condition
  ([price list](../../sources/deepseek.com/api-pricing/2026-10-26.md)).
- **Availability:** 100% uptime and 99.46% availability over three days on OpenRouter, with 76
  tok/s best-case P50 throughput; AA measured 93 tok/s and a $0.67 cost per Intelligence-Index
  task. Neither host states which quantization it measured.

## Unresolved questions

1. **Does `deepseek-v4-pro` keep pointing at 0813?** The alias is documented as "the latest
   version" and has already moved once for the Flash line. No support window or deprecation
   schedule was captured. A reader pinning production work to the first-party API should assume
   the alias can move.
2. **Is the preview still callable anywhere?** Its repository is live with 367,647 downloads in
   the previous month, but no first-party model name resolves to it after GA, and no host slug was
   checked for it. Obtainable as weights; callable is unverified.
3. **Why do Vals AI's ProgramBench (0.0%) and SRE Bench (1.9%) rows exist in that shape?** No
   capture explains them. They are either real failures or harness artifacts, and the difference
   matters.
4. **What does DSpark cost?** The card says the module ships inside the same checkpoint and that
   target and draft weights come from one file, but gives no memory or latency figures, and no
   statement of whether disabling it changes output.
5. **How large is the harness effect for this model?** The GA card discloses one harness
   (DeepSeek Harness minimal mode) and does not repeat the eight-harness sweep the V4.1-Flash card
   published. AA's Terminal-Bench 2.1 figure (78.7) is 9.2 points below the vendor's 87.9 —
   slightly larger than the ~6.5-point spread DeepSeek's own eight-harness sweep documents for
   the V4.1 family — but no controlled comparison exists for 0813.
6. **Is the "expert mode" app model the same checkpoint?** The announcement says V4 Pro is
   available on app/web as "Expert Mode" and via API; it does not say the app runs 0813.
7. **No knowledge cutoff is published.** OpenRouter's payload carries `knowledge_cutoff: null`,
   and no first-party page states one.

## Evidence status

**Floor met: three first-party records, one independent host, two independent evaluators.**

- **First-party:** the
  [GA model card and weights repository](../../sources/deepseek.com/v4-pro-0813-model-card/2026-10-26.md),
  the [GA announcement](../../sources/deepseek.com/v4-pro-ga-announcement/2026-10-26.md), the
  [preview card](../../sources/deepseek.com/v4-pro-preview-model-card/2026-10-26.md) (the only
  source for architecture), plus the existing
  [change log](../../sources/deepseek.com/changelog/2026-10-26.md) and
  [price list](../../sources/deepseek.com/api-pricing/2026-10-26.md) captures. Together these
  establish identity, date, weights availability, licence, context, modality, reasoning control,
  protocol support, prices and the vendor's benchmark claims.
- **Independent host:** [OpenRouter](../../sources/openrouter.ai/deepseek-v4-pro-0813/2026-10-26.md)
  — catalogue entry, 25 endpoints with per-route prices, quantization and completion caps,
  uptime, and a restatement of third-party scores.
- **Independent measurement:**
  [Artificial Analysis](../../sources/artificialanalysis.ai/deepseek-v4-pro-0813/2026-10-26.md)
  (index 36, parameters, licence, speed) with the existing
  [leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)
  showing the same 36 independently, and
  [Vals AI's Terminal-Bench 4.0 board](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)
  (14.14%, rank 35, $3.31 per test). AA's per-benchmark sub-scores reach this wiki only through
  OpenRouter's restatement, because AA's charts render client-side.
- **No direct tests were run for this page.** No request was sent to any endpoint, no weights
  were downloaded, and no benchmark was re-executed. Every number is quoted from a source record.
  Where a figure appears twice with different values — the release date (2026-08-13 vendor,
  Aug 12 on OpenRouter), Terminal-Bench 2.1 (87.9 vendor, 78.7 AA), the price basis (peak vs
  off-peak) — both values are recorded rather than reconciled.
- **Weakest links:** the vendor's benchmark table is entirely self-run under a vendor harness and
  omits the one benchmark (Terminal-Bench 4.0) where independent numbers exist; the architecture
  claims belong to the preview card and are inherited by assumption; and the AA-Omniscience
  figures are second-hand.

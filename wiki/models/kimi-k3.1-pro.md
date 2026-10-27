# Kimi K3.1 Pro

Moonshot AI's flagship reasoning model, released **2026-10-24**, at **$2 / $10 per million
input / output tokens** — a third cheaper than its own predecessor — with a 1,048,576-token
context window and text, image and video input
([tech blog](../../sources/kimi.ai/kimi-k3-1-pro-tech-blog/2026-10-26.md),
[pricing](../../sources/kimi.ai/kimi-model-pricing/2026-10-26.md)). It is a post-trained
version of Kimi K3 with a new API ID, a new price, and its own benchmark rows, so it is a
distinct model rather than a K3 relabel.

Its defining open question is not capability but **licensing**: the vendor calls it its "most
capable 3T-class open-weight model" and promises "the full model weights will be released by
Nov 4", but at capture there was no weights repository, no parameter count, and no licence
text. Artificial Analysis accordingly classifies it as a "Proprietary model". Until the
weights ship, "open-weight" is a commitment, not a property.

## Identity

- **Canonical name:** Kimi K3.1 Pro. **API ID:** `kimi-k3.1-pro`
  ([model list](../../sources/kimi.ai/kimi-model-list/2026-10-26.md)).
- **Vendor:** Moonshot AI (Kimi). **Status:** current flagship, available on the vendor
  platform and through its API; no retirement date announced and no "preview" label anywhere
  in the captured docs. Billed pay-as-you-go.
- **Released:** **2026-10-24** per the vendor's research index entry for the launch post
  ([tech blog](../../sources/kimi.ai/kimi-k3-1-pro-tech-blog/2026-10-26.md)). OpenRouter
  prints "Released Oct 23, 2026" and its `created` field is 2026-10-23T17:56:28Z; Artificial
  Analysis says only "Released October 2026". A one-day disagreement between host and vendor
  is recorded, not reconciled.
- **Host endpoints:** Moonshot's own OpenAI-compatible API at `https://api.moonshot.ai/v1`
  (`kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`); OpenRouter as `moonshotai/kimi-k3.1-pro`,
  routed **only** to Moonshot's endpoint in `mxfp4`
  ([OpenRouter](../../sources/openrouter.ai/kimi-k3-1-pro/2026-10-26.md)). No third-party
  inference provider was found: DeepInfra lists K3 but not K3.1 Pro
  ([DeepInfra](../../sources/deepinfra.com/kimi-k3-1-pro-availability/2026-10-26.md)).
- **Aliases and labels:** Artificial Analysis "Kimi K3.1 Pro"; OpenRouter "MoonshotAI: Kimi
  K3.1 Pro" (`moonshotai/kimi-k3.1-pro`); vendor product surfaces "K3.1 Pro".
- **Siblings:** `kimi-k3` (previous-generation flagship, 2.8T parameters, $3/$15, still
  available); `kimi-k3.1-pro-highspeed` (same model at 2–3× speed and 2× price);
  `kimi-k2.7-code`, `kimi-k2.6` (older, 256K-context tiers scheduled for retirement with the
  rest of the K2 series by end-2026).

### Is it a distinct model or a repackaging of K3?

Distinct, on all three of the tests that matter:

1. **New ID and new price.** `kimi-k3.1-pro` is a separate catalogue entry at $2/$10 against
   `kimi-k3`'s $3/$15 — 33% cheaper on both sides
   ([pricing](../../sources/kimi.ai/kimi-model-pricing/2026-10-26.md)).
2. **New series, stated training change.** The vendor calls it "the first model in our new
   K3.1 series" and "a post-trained version of Kimi K3, with substantially larger
   post-training compute"
   ([tech blog](../../sources/kimi.ai/kimi-k3-1-pro-tech-blog/2026-10-26.md)). "Post-trained"
   is a claim about the training stage, not about effect size; the effect size is argued
   separately below.
3. **Its own evidence.** The vendor publishes K3.1 Pro-specific rows with K3 as the baseline
   (Kimi Code Bench 3.0 Long-horizon 61.2% against K3's 55.95%; hallucination rate 8.3%
   against 23.4%), and a separate weights release is scheduled for it.

The honest caveat is that the *architecture* is inherited. Nothing captured says the base
model changed, so "K3.1 Pro" is best read as K3 plus a much larger post-training run, priced
lower — a new product with the same backbone.

## Current assessment

**Current, single-source, weights pending.** Every route to the model terminates at
Moonshot's own API.

The evidence supports three claims and undercuts a fourth:

- **Strong on agentic coding, by both vendor and independent measurement.** The vendor's
  Terminal-Bench 4.0 figure is 65.7% (Claude-Code harness), 0.7 points behind Claude Opus 5.5
  (66.4%) and ahead of GPT-6 Astra (58.2%)
  ([tech blog](../../sources/kimi.ai/kimi-k3-1-pro-tech-blog/2026-10-26.md)). Vals AI,
  running mini-swe-agent with avg@3 over three runs, measures **63.64%**, rank 3 behind Claude
  Opus 5.5 (65.15%) and ahead of GPT-6 Astra (59.60%), at **$4.57 per test** against Opus's
  $13.20 ([Vals AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)). That is a rare
  case where an independent harness lands within ~2 points of the vendor's number.
- **Top-tier on the composite index but not frontier.** Artificial Analysis scores it **55**
  on Intelligence Index v4.3.2, **#4 of 221**, above GPT-6 Astra and Gemini 4 Argon (53 each)
  and below Claude Opus 5.5 (58) and Claude Sonnet 5.5 (56)
  ([AA model page](../../sources/artificialanalysis.ai/kimi-k3-1-pro/2026-10-26.md),
  [AA leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)).
  The vendor's "matches or approaches the strongest proprietary models" is defensible at the
  index level; "matches" is not.
- **Cheap per token, expensive per task.** AA's cost per index task is $2.11 and it flags the
  model as "notably slow" (42.6 output tokens/s, #185 of 192) and "very verbose" (150M output
  tokens on the index against an 81M median)
  ([AA](../../sources/artificialanalysis.ai/kimi-k3-1-pro/2026-10-26.md)). Vals' $4.57 per
  Terminal-Bench test is the useful counterweight: for agentic work it is roughly a third of
  Opus 5.5's cost per task at 97% of the score.

**What the evidence undercuts:** any reading of "open-weight" as a present property. AA's
"Proprietary model" label, the absent Hugging Face repository, and the vendor's own "by Nov 4"
wording all agree on the state at capture.

## Documented capabilities

All from the [model guide](../../sources/kimi.ai/kimi-k3-1-pro-quickstart/2026-10-26.md) and
[model list](../../sources/kimi.ai/kimi-model-list/2026-10-26.md) unless noted.

| Property | Value |
| --- | --- |
| Context window | 1,048,576 tokens; flat pricing across the whole window, "no tiering by context length" |
| Max output | `max_completion_tokens` defaults to 131,072, settable up to 1,048,576 (vendor docs); OpenRouter reports a 943,718 ceiling |
| Input | Text, images, video. Images as base64 or `ms://<file-id>`; video uploaded with `purpose="video"` then referenced as `video_url` |
| Output | Text only |
| Reasoning | Always on — "you can't" turn it off; `reasoning_effort` of `low`, `high`, `max`, default `max` |
| Tool use | Function tools, `tool_choice` (`required` supported), dynamic tool loading via `system` messages, structured output (`json_schema`, strict), partial mode, streaming with separate `reasoning_content` |
| Sampling | `temperature=1.0`, `top_p=0.95`, `n=1`, both penalties 0 — fixed, must be omitted from requests |
| Caching | Automatic prompt caching, TTL `5m` (default) or `1h`, billed per tier |
| Scale | "3T-class" — no exact parameter count published for K3.1 Pro |

**Marketing claims, labelled as such:** "our most capable 3T-class open-weight model to date",
"industry-leading intelligence" (docs site description), "substantial improvements across
coding, 3D creation, financial research, and other agentic capabilities", and the
demonstration videos (Unreal Engine, Godot and Blender artefacts said to be "created end to
end by K3.1 Pro"). The videos are unverifiable by a reader and are not treated here as
capability evidence; the benchmark rows are.

### Benchmarks

Vendor-reported, at `reasoning_effort: max`, temperature 1.0, top-p 0.95
([tech blog](../../sources/kimi.ai/kimi-k3-1-pro-tech-blog/2026-10-26.md)):

| Evaluation | K3.1 Pro | Comparator on the same row |
| --- | --- | --- |
| Terminal-Bench 4.0 (Claude-Code harness) | 65.7% | Claude Opus 5.5 66.4%, GPT-6 Astra 58.2% |
| Kimi Code Bench 3.0 Long-horizon (internal) | 61.2% | K3 55.95% |
| BenchCAD, with tools | 92.7% | Opus 5.5 96.2%, GPT-6 Astra 95.9% |
| OfficeQA Pro v2 | 64.4 | "state-of-the-art" per vendor |
| Kimi Hallu Bench Hard, claim-level hallucination | 8.3% | K3 23.4% |
| xdev-bench-hard, pass@3 | 81.0% | 90.5% for the same pipeline without cyber data removal |

Internal finance deltas over K3: Financial Modeling +7.2 points, Financial Research +11.6
points, Business Operation "about 4.2×". The comparator figures on these rows are quoted from
the competitors' own publications or from official leaderboards, not re-run by Moonshot.

Independently measured:

| Source | Measurement | Value |
| --- | --- | --- |
| Artificial Analysis | Intelligence Index v4.3.2 | **55**, #4 of 221 (median 28) |
| Artificial Analysis | Terminal-Bench 4.0 | 67.2% |
| Vals AI | Terminal-Bench 4.0, mini-swe-agent, avg@3 | **63.64%**, rank 3, $4.57/test |
| Artificial Analysis | HLE / AA-LCR / GDPval-AA | 52.5% / 86.3% / 67.3% |
| Artificial Analysis | SciCode / CritPt | 60.8% / 24.6% |
| Artificial Analysis | AA-Omniscience accuracy / non-hallucination | 51.0% / 56.1% |
| Artificial Analysis | speed / cost per index task / index verbosity | 42.6 tok/s / $2.11 / 150M tokens |

Three caveats on that table. The AA per-benchmark numbers reach this wiki only through
[OpenRouter's restatement](../../sources/openrouter.ai/kimi-k3-1-pro/2026-10-26.md), because
AA's own charts are client-rendered; the index score of 55 is confirmed twice, on the AA model
page and on the [AA leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md).
The three Terminal-Bench 4.0 figures disagree in an unusual direction — AA's 67.2% is
**above** the vendor's 65.7%, which is the opposite of the usual vendor-optimism pattern and
means the spread here is harness variance, not inflation. And Vals' 63.64% comes from a
different harness (mini-swe-agent) than the vendor's (Claude Code), so the 2-point gap between
them is not a clean model comparison.

## Limitations and constraints

**API and integration**

- Thinking cannot be disabled, so every request pays a reasoning floor. `low` is the cheapest
  setting, not "no thinking".
- `temperature`, `top_p`, `n` and both penalties are fixed; sending other values is not
  supported. OpenRouter's parameter list correspondingly omits them.
- Vision input **rejects public image URLs** — base64 or `ms://<file-id>` only. This breaks
  the most common multimodal integration pattern.
- Video input requires a file upload round-trip before the chat call, then `ms://` references.
- Multi-turn tool use requires replaying the complete assistant message, including
  `reasoning_content`; keeping only `content` breaks the loop.
- Access is gated: the model is "unlocked after a successful top-up (minimum $1)".
- The vendor states web search "is being updated and is not recommended for production
  workflows in the near term".

**Open-weight status**

- Weights, parameter count, quantisation and licence were all unpublished at capture; the
  vendor's own date is "by Nov 4, 2026". Any deployment plan that assumes downloadable weights
  is currently unhedged.
- The model is single-sourced: OpenRouter's two endpoints both point at Moonshot's own
  serving, and no independent host was found. No fallback exists if Moonshot's API is down or
  unavailable in a region, and OpenRouter states it is "not currently available through EU
  in-region routing".

**Safety controls that change measured capability**

- The vendor deliberately removed cyber-related data at mid-training and filtered cyber RL
  environments, which cuts xdev-bench-hard from 90.5% to 81.0% pass@3. The released model is
  therefore intentionally weaker than its pipeline's potential, and the vendor says it
  "remains behind that of frontier proprietary models". Published cyber numbers describe a
  model that was filtered, not a capability ceiling.
- The hallucination figures are from a deliberately adversarial internal stress test; the
  vendor itself warns the rates "do not represent overall error rates in daily use".

**Cost and speed shape**

- Slow (42.6 tok/s) and verbose (150M index tokens). Token price understates the bill for
  reasoning-heavy workloads; the highspeed variant is the lever, at 2× the price.
- Cache writes are billed separately by TTL tier, so long-context agentic loops that churn
  prefixes pay twice (write, then read).

**Documentation defects**

- The docs page's own benchmark paragraph is unfilled placeholder text (`[xx.x%]`,
  `[tests xxx]`), and its hallucination numbers (23.35% → 6.85%, 46.4% of predecessor) differ
  from the launch post's (23.4% → 8.3%, 42.4%). The launch post is the more complete record;
  both are preserved here rather than reconciled.

## Access, pricing, licensing

USD per million tokens
([pricing](../../sources/kimi.ai/kimi-model-pricing/2026-10-26.md)):

| Item | `kimi-k3.1-pro` | `kimi-k3.1-pro-highspeed` | `kimi-k3` |
| --- | --- | --- | --- |
| Input | $2.00 | $4.00 | $3.00 |
| Output | $10.00 | $20.00 | $15.00 |
| Cached input | $0.20 | $0.20 | $0.30 |
| 5-minute cache write | $2.00 | $4.00 | $3.00 |
| 1-hour cache write | $4.00 | $8.00 | $6.00 |
| Context | 1,048,576 | 1,048,576 | 1,048,576 |

**Billing basis:** per token, flat across the whole 1M window, with automatic prefix caching
billed by TTL tier; no subscription and no per-request fee. Batch API exists on the platform,
but K3.1 Pro batch rates were not captured. Prices exclude tax. OpenRouter's $2/$10 and AA's
"$2.00 in / $10.00 out, cache discount 90%" both match the vendor's list, so the price is
triple-confirmed.

**Licence:** unpublished. There is no K3.1 Pro weights repository and therefore no licence
text; Hugging Face returns 401 on the two plausible repository names and the Moonshot
organisation lists no K3.1 Pro entry
([weights search](../../sources/huggingface.co/kimi-k3-1-pro-weights-search/2026-10-26.md)).
The predecessor's terms are the only first-party indication: the "Kimi K3 License" is
permissive — use, modify, redistribute, sublicense, sell — with a separate-agreement
requirement for hosted "Model as a Service" businesses above $20M trailing-12-month revenue
and prominent "Kimi K3" attribution above 100M MAU or $20M monthly revenue
([licence](../../sources/huggingface.co/kimi-k3-license/2026-10-26.md)). That is a lead about
what K3.1 Pro's licence may look like, not evidence of its terms, and the thresholds are
exactly the kind of term a successor release could change.

**Host differences worth knowing:** there are none to compare between independent providers,
because there are none. The only host variation is within OpenRouter's own listing: two
endpoints under one model ID, priced $2/$10 and $4/$20, the second almost certainly the
highspeed variant — an inference from the price match, since OpenRouter prints the same
display name for both.

## Label mapping: Artificial Analysis to canonical ID

The roster label came from Artificial Analysis, whose row is simply "Kimi K3.1 Pro" at index
55. That resolves to `kimi-k3.1-pro` on three matches: the same 55 on AA's model page, the
same $2/$10 price AA says it used, and the same October 2026 release month as the vendor's
launch.

Two qualifications. AA lists **no effort-suffixed variants** for this model — unlike Claude
Opus 5.5, which it splits into five effort rows — so the AA score is of one unlabelled
configuration; the vendor's default is `max`, and the launch benchmarks are stated at `max`,
which makes `max` the most plausible reading but not a stated one. And AA's "Proprietary
model" classification is AA's availability judgement at capture, not a contradiction of the
vendor's roadmap.

## Unresolved questions

1. **What licence will the weights carry, and when exactly?** The vendor says "by Nov 4,
   2026" on both the blog and the docs; nothing captured after the launch confirms delivery.
   Whether the K3-style $20M/100M-MAU carve-outs survive is unknown.
2. **How many parameters?** "3T-class" is a class label. K3 is documented at 2.8T; K3.1 Pro's
   count, and whether it shares K3's architecture unchanged, are unstated.
3. **Why do the docs and the blog disagree on hallucination rate** (6.85% vs 8.3% claim-level,
   46.4% vs 42.4% relative)? One of the two pages is stale. The blog is the fuller record; the
   docs page also still carries `[xx.x%]` placeholders.
4. **Does video input actually work end to end?** Vendor docs and OpenRouter's modality field
   say `text+image+video->text`; AA says "text and image". No captured source tests video.
5. **Is the highspeed variant a different checkpoint or the same weights served faster?** The
   vendor says only "same intelligence, about 2-3× the speed"; OpenRouter prices it 2× and
   gives both endpoints the same name and the same 943,718 output ceiling.
6. **Is there a dated snapshot ID?** OpenRouter's endpoint is named
   `moonshotai/kimi-k3.1-pro-20261023`, while the vendor publishes only the undated
   `kimi-k3.1-pro`. As with other hosts, the date in the slug is the host's naming until a
   first-party page shows one.
7. **Why is AA's Terminal-Bench 4.0 (67.2%) higher than the vendor's (65.7%)?** Normally the
   vendor number is the outlier. With Vals at 63.64% under a third harness, the three-way
   spread looks like harness sensitivity rather than anyone's error, but no source explains
   it.
8. **No Kimi K3 page exists in this wiki.** K3 is the comparison baseline throughout this page
   and remains on sale at $3/$15; it is not this task's row.

## Evidence status

**Floor met.** One first-party source would have been enough; four were captured, plus three
independent records.

- **First-party, four records:** the
  [launch post](../../sources/kimi.ai/kimi-k3-1-pro-tech-blog/2026-10-26.md) (date, identity,
  benchmarks, weights timeline, cyber controls), the
  [model guide](../../sources/kimi.ai/kimi-k3-1-pro-quickstart/2026-10-26.md) (API surface,
  parameters, limits, access gate), the
  [pricing page](../../sources/kimi.ai/kimi-model-pricing/2026-10-26.md) (all token rates), and
  the [model list](../../sources/kimi.ai/kimi-model-list/2026-10-26.md) (canonical IDs,
  siblings, retirements).
- **Independent host, two records:** [OpenRouter](../../sources/openrouter.ai/kimi-k3-1-pro/2026-10-26.md)
  (catalogue metadata, modalities, per-endpoint prices, listing date, re-published scores) and
  [DeepInfra](../../sources/deepinfra.com/kimi-k3-1-pro-availability/2026-10-26.md) (negative
  availability check that establishes the single-source finding).
- **Independent benchmarks, two:** [Artificial Analysis](../../sources/artificialanalysis.ai/kimi-k3-1-pro/2026-10-26.md)
  (index 55, speed, cost, verbosity) and [Vals AI Terminal-Bench 4.0](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)
  (63.64%, rank 3). The existing [AA leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)
  independently shows the same 55.
- **Weights evidence, two records:** the [absence check](../../sources/huggingface.co/kimi-k3-1-pro-weights-search/2026-10-26.md)
  and the predecessor's [licence text](../../sources/huggingface.co/kimi-k3-license/2026-10-26.md).
- **No direct tests were run for this page.** No request was sent to any endpoint; every
  number is quoted from a source record. Where a figure appears more than once with different
  values — the release date (Oct 23 vs Oct 24), the hallucination rate (6.85% vs 8.3%),
  Terminal-Bench 4.0 (65.7% / 67.2% / 63.64%), the output ceiling (1,048,576 vs 943,718) —
  both or all values are recorded rather than reconciled.
- **Weakest links:** the vendor's benchmark charts were not extractable, so only the rows
  quoted in prose are captured; AA's per-benchmark numbers are second-hand through
  OpenRouter; and the weights/licence position will be stale the moment Moonshot publishes,
  which the vendor says will be 2026-11-04.

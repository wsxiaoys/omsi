# DeepSeek V4.1 Flash 1017

The post-training update to [DeepSeek V4.1 Flash](deepseek-v4.1-flash.md), and the
checkpoint **DeepSeek's own API actually serves** under the name `deepseek-flash`
([API pricing](../../sources/deepseek.com/api-pricing/2026-10-26.md)). The model card text
describes it as a "minor update"; on DeepSeek's own numbers it gains 11.1 points on
Terminal-Bench 4.0 and 8.8 on ProgramBench over the base release
([DeepInfra](../../sources/deepinfra.com/deepseek-v4.1-flash-1017/2026-10-26.md)).

This is a separate page rather than a section on the parent because the two checkpoints
diverge enough that a single verdict would be wrong for one of them. **No finding on the
parent page transfers here, and vice versa.**

## Identity

- Canonical name: DeepSeek-V4.1-Flash-1017. Also written "DS-V4.1-Flash-1017".
- **Release date: 2026-10-17.** The `1017` suffix is the release date, October 17
  ([release announcement](../../sources/deepseek.com/news-261017/2026-10-26.md),
  [change log](../../sources/deepseek.com/changelog/2026-10-26.md)).
- First-party: served as **`deepseek-flash`**
  ([API pricing](../../sources/deepseek.com/api-pricing/2026-10-26.md)). No model name
  exposes the base release; the retired `deepseek-v4-flash` and
  `deepseek-v4-flash-vision-exp` names also route here, billed at Flash price.
- **Weights: published, MIT**, in a repository separate from the base model —
  `deepseek-ai/DeepSeek-V4.1-Flash-1017`, fp8, with a ModelScope mirror
  ([model card](../../sources/deepseek.com/v4.1-flash-1017-model-card/2026-10-26.md)).
  Roughly 510 GB across 48 safetensors shards, per a third-party reading rather than the
  card itself ([OrcaRouter](../../sources/orcarouter.ai/deepseek-v4-1-flash-leak/2026-10-26.md)).
  This is the fact that most changes the picture: `1017` is a downloadable checkpoint,
  not an API-only refresh, so the base and this checkpoint are both obtainable and the
  split is between two real artifacts rather than a product and its ghost.
- Host: `deepseek-ai/DeepSeek-V4.1-Flash-1017` on DeepInfra, with live pricing and
  serving metadata ([DeepInfra](../../sources/deepinfra.com/deepseek-v4.1-flash-1017/2026-10-26.md)).
- Sibling: [DeepSeek V4.1 Flash](deepseek-v4.1-flash.md) (base, released 2026-09-10),
  DeepSeek-V4-Pro, and the V4-generation Flash models.
- The model card is short and omits the architecture section entirely, deferring to the
  base card's technical report. Consistent with a post-training-only update, but never
  stated as such.

## Current assessment

`1017` is the model you get when you call DeepSeek's Flash API, so for most readers it
*is* DeepSeek V4.1 Flash in practice. Its character is unchanged from the base: strong
on execution, weak on recall. What the update moves is the agentic and coding frontier,
not the knowledge frontier.

The largest deltas are concentrated in exactly the benchmarks that reward long-horizon
tool use — Terminal-Bench 4.0 (+11.1), ProgramBench (+8.8), Apex Bench (+7.5),
Automation-Bench (+5.7), HLE-without-tools (+5.8). Smaller gains on DeepSWE v1.1 (+2.8)
and NL2Repo (+2.8) suggest the improvement is not uniform across coding: it is largest
where the task requires sustained agentic execution rather than a single patch.

DeepSeek also states the update **reduces task execution time and output length**, which
matters more than a benchmark delta for cost: fewer output tokens at the same price is a
direct cost cut on agentic loops. That claim is unquantified in every source captured.

## The divergence, as reported

DeepSeek's table, reproduced by DeepInfra. Vendor-reported, not independently measured.

| Benchmark | **1017** | base | Δ |
| --- | --- | --- | --- |
| Terminal-Bench 4.0 | 42.3 | 31.2 | **+11.1** |
| ProgramBench | 29.1 | 20.3 | **+8.8** |
| Apex Bench v1.1 | 72.1 | 64.6 | **+7.5** |
| HLE w/o tools | 42.6 (44.0†) | 36.8 (39.1†) | +5.8 |
| Automation-Bench v1.0.6 | 60.5 | 54.8 | +5.7 |
| Chartography (w/ tools) | 83.0 | 78.9 | +4.1 |
| Agents' Last Exam | 35.4 | 31.8 | +3.6 |
| BabyVision (w/ tools) | 92.5 | 89.6 | +2.9 |
| DeepSWE v1.1 | 77.0 | 74.2 | +2.8 |
| NL2Repo-Bench | 68.2 | 65.4 | +2.8 |
| ZeroBench-main (w/ tools) | 51.0 | 49.0 | +2.0 |

† text-only HLE subset. Harnesses: Claude Code for Terminal-Bench 4.0, Mini-SWE-V2 for
DeepSWE v1.1.

One consistency check worth recording: the base column here matches the
[DeepSeek model card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)
exactly on all ten benchmarks the two tables share. Apex Bench v1.1 is the only row
absent from the card. The two tables therefore describe the same base measurement, so
the deltas are not an artefact of re-measurement.

Two things the table does **not** support:

- It does not show `1017` beating frontier models overall. At 42.3 on Terminal-Bench 4.0
  it is still well below Opus-5.0 (51.8), though above GPT-5.6 Sol (39.9). Its 77.0 on
  DeepSWE v1.1 does edge past Opus-5.0's 74.0, on DeepSeek's own harness choice.
- It does not show the knowledge axis improving much. HLE rises to 42.6, still far below
  Opus-5.0's 56.3.

## Independent verification

Two independent evaluators have now measured both checkpoints. This is the strongest
evidence on the page, and it splits the vendor's claim into two parts — one that holds and
one that does not.

| Source | Harness | Base | 1017 | Delta |
| --- | --- | --- | --- | --- |
| DeepSeek (vendor) | Claude Code | 31.2 | 42.3 | +11.1 |
| Vals AI | mini-swe-agent | 19.70 | 31.82 | **+12.12** |
| Artificial Analysis | mini-swe-agent | 26.8 | 33.8 | **+7.0** |

Vals AI's figures are from its own Terminal-Bench 4.0 board, 66 tasks, avg@3, no partial
credit ([Vals AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)). The Artificial
Analysis figures are reported second-hand and are **not** in this wiki's direct AA
capture, which shows only the composite index
([AA leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md),
[OrcaRouter](../../sources/orcarouter.ai/deepseek-v4-1-flash-leak/2026-10-26.md)).

**What survives:** the improvement is real, and its magnitude is in the range the vendor
claimed. Two evaluators using harnesses DeepSeek did not use both reproduce a gain of
7–12 points. The split between base and `1017` is justified on evidence, not just on a
vendor table.

**What does not survive:** the absolute level. Both independent runs put `1017` 8.5–10.5
points below DeepSeek's 42.3, and both put the base well below 31.2. DeepSeek ran
Terminal-Bench 4.0 under Claude Code; the boards hold mini-swe-agent constant. So the
vendor's row is best read as a harness-specific result, not a benchmark score.

**Calibration against the field.** On the AA Intelligence Index, `1017` scores **45** —
level with GLM-5.3, thirteen points below Claude Opus 5.5 (58), and mid-pack overall. On
Vals AI's board it ranks 19th of 55 at 31.82%. DeepSeek's own agentic rows make this model
look closer to the frontier than either independent measurement does.

**The cost position is the part that holds up best.** Vals AI measures $0.54 per test
against $13.20 for the top-ranked model at roughly twice the score. A 24× cost difference
for a 2× score difference is a real Pareto argument, and it is the one claim in DeepSeek's
announcement that independent measurement supports rather than deflates.

One caution: Vals AI and Artificial Analysis both say mini-swe-agent, yet report base
scores of 19.70 and 26.8. Same harness name does not mean the same harness build or
settings, so cross-evaluator numbers should not be mixed into a single comparison.

## Access and pricing

### DeepSeek first-party, USD per 1M tokens

| | Off-peak | Peak |
| --- | --- | --- |
| Input, cache hit | $0.003 | $0.006 |
| Input, cache miss | $0.15 | $0.30 |
| Output | $0.60 | $1.20 |

Peak is 01:00–04:00 and 06:00–10:00 UTC, Monday–Friday, excluding Chinese public holidays;
off-peak is half price
([API pricing](../../sources/deepseek.com/api-pricing/2026-10-26.md)).

### DeepInfra, USD per 1M tokens

| Tier | Input | Output | Cached input |
| --- | --- | --- | --- |
| List | $0.20 | $0.60 | $0.006 |
| Promotional (51% off) | $0.098 | $0.294 | $0.003 |
| Priority (1.5×) | $0.147 | $0.441 | $0.0044 |
| Flex (0.8×) | $0.0784 | $0.2352 | $0.0024 |

([DeepInfra](../../sources/deepinfra.com/deepseek-v4.1-flash-1017/2026-10-26.md))

The promotional column is time-limited; the list column is the durable comparison. Note
that DeepInfra list output ($0.60) equals DeepSeek's *off-peak* output, so DeepInfra is
not cheaper than first-party off-peak and is cheaper than first-party peak. Whether that
holds through the promotion ending is the obvious question.

## Capabilities and constraints

From the DeepSeek API table for `deepseek-flash`
([API pricing](../../sources/deepseek.com/api-pricing/2026-10-26.md)):

- 1M context, 384K max output.
- Non-thinking and thinking modes; thinking is the default.
- Vision input supported (unlike `deepseek-v4-pro`, which does not).
- JSON output, tool calls, Responses API, Anthropic-format API, chat prefix completion.
- **FIM completion in non-thinking mode only.**
- Concurrency limit 2500.
- DeepInfra serves it at fp8 with a 1,048,576 context and zero retention
  ([DeepInfra](../../sources/deepinfra.com/deepseek-v4.1-flash-1017/2026-10-26.md)).

The Anthropic-format endpoint is worth flagging: it means this model can be dropped into
Claude-Code-shaped harnesses without an adapter, which is presumably why the benchmark
table uses Claude Code as one of its scaffolds.

## Limitations and uncertainty

- **The vendor's absolute numbers are inflated.** Independent measurement puts `1017` at
  31.82% (Vals AI) and 33.8 (Artificial Analysis) on Terminal-Bench 4.0 against DeepSeek's
  42.3. The delta survives; the level does not. Use the independent figures when
  comparing against other models, and the vendor table only for the base-to-`1017` delta.
- **The vendor table's harness is not the boards' harness.** DeepSeek used Claude Code;
  both independent boards use mini-swe-agent. This is the most likely explanation for the
  gap, and it means the vendor row cannot be compared to leaderboard rows directly.
- **"Minor update" understates the deltas.** Either the label describes the training
  change (post-training only, no architecture change) rather than the effect, or the
  numbers are optimistic. The change log's framing supports the first reading, but no
  source states it.
- **The reduced-output-length claim is unquantified.** It is the most economically
  important claim on the page and the least supported. Vals AI's token counts offer an
  indirect check that cuts against it: `1017` used **39.65m tokens per test** against the
  base's 31.53m — more output work, not less, on that board. That may reflect the harness
  spending the new capability on longer attempts rather than the model being more
  verbose, but it does mean the "shorter outputs" claim does not show up in the one
  independent token measurement available.
- **Host catalogue disagrees with host model page.** DeepInfra's DeepSeek family listing
  omits this model entirely while its model page is live
  ([family listing](../../sources/deepinfra.com/deepseek-family/2026-10-26.md)). Trust the
  model page, not the index.
- **The AA delta is second-hand.** This wiki's direct AA capture shows the composite
  index (45) but not the Terminal-Bench sub-score or the September row. The +7.0 figure
  rests on a secondary report, so it is weaker evidence than the Vals AI number.

## Unresolved questions

1. ~~What does `1017` denote, and when was it released?~~ **Resolved:** 2026-10-17, the
   date in the suffix.
2. ~~Are weights published?~~ **Resolved:** yes, MIT, separate repository, ~510 GB.
3. ~~Do the agentic gains replicate outside DeepSeek's harnesses?~~ **Partly resolved:**
   yes in direction and rough magnitude (+7.0, +12.1 across two evaluators), no in
   absolute level (8.5–10.5 points lower). Still open: whether the *ordering* against
   peers holds, since AA places `1017` level with GLM-5.3 while DeepSeek's table places it
   above GLM-5.3 on Terminal-Bench 4.0.
4. How much of the gain comes from shorter outputs rather than better reasoning? The one
   independent token measurement shows *more* tokens per test for `1017`, which
   complicates the vendor's "shorter outputs" claim.
5. Will `deepseek-flash` keep pointing at `1017`, or move again? The change log shows the
   alias already moved once, from the September checkpoint, so any finding here has a
   shelf life.
6. Is the base checkpoint still callable anywhere? Vals AI and DeepInfra both list it, so
   the split now rests on two obtainable artifacts rather than one. Whether a hosted
   endpoint serves the base is still unconfirmed.
7. Does the ProgramBench gain (+8.8 vendor) replicate? No independent ProgramBench
   measurement was found, so half of the headline claim is unverified.

## Evidence status

Evidence floor: **met, including the independent half.**

- First-party, four records: the release announcement, the change log, the model card,
  and the API pricing page. Together these establish identity, release date, weights,
  context, features, and prices.
- Independent measurement: Vals AI's Terminal-Bench 4.0 board measures both checkpoints
  directly. Artificial Analysis supplies a composite index for `1017` and, via secondary
  reporting, a Terminal-Bench figure.
- Host: DeepInfra confirms serving terms and pricing.

This page is now the best-evidenced in the wiki on the specific question it exists to
answer — whether the checkpoint is materially better than the base. Three measurements
agree it is, by 7–12 points, and two of them are not DeepSeek's.

What remains unverified: ProgramBench's +8.8, the "shorter outputs" claim, and any
measurement at production effort settings or near the 1M-token context limit. The next
useful evidence would be an independent ProgramBench run, and a token-count comparison
under a fixed harness that isolates output length from attempt count.

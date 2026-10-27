# DeepSeek V4.1 Flash

DeepSeek's multimodal "Flash" tier: a 552B-backbone sparse MoE with a 1M-token context,
released **2026-09-10** under MIT with downloadable weights
([change log](../../sources/deepseek.com/changelog/2026-10-26.md),
[model card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)). This page
covers the **base release**. The checkpoint DeepSeek's own API serves today is a later
post-training update, tracked separately at
[DeepSeek V4.1 Flash 1017](deepseek-v4.1-flash-1017.md).

The distinction matters more than the "minor update" label suggests: on DeepSeek's own
numbers the `1017` checkpoint gains 11.1 points on Terminal-Bench 4.0 and 8.8 on
ProgramBench over this model. **Do not transfer findings between the two pages.**

## Identity

- Canonical name: DeepSeek-V4.1-Flash. Written "DS-V4.1-Flash" in DeepSeek's own
  benchmark tables.
- Vendor: DeepSeek (DeepSeek-AI).
- Weights: public, **MIT**, in `deepseek-ai/DeepSeek-V4.1-Flash` on Hugging Face, with
  local-inference instructions in the repository
  ([model card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)).
- First-party API name: **none selects this base checkpoint now.** From 2026-09-10 to
  2026-10-17 this model *was* what `deepseek-flash` returned; on 2026-10-17 the alias moved
  to `1017` without changing name or price
  ([change log](../../sources/deepseek.com/changelog/2026-10-26.md)). The retired legacy
  names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` also resolve to `1017`
  ([API pricing](../../sources/deepseek.com/api-pricing/2026-10-26.md)). This is the
  clearest example in the wiki of a rolling alias that silently changed the model behind
  a stable name.
- Host: DeepInfra carries a model page for the base slug, but with no pricing or serving
  metadata attached
  ([DeepInfra](../../sources/deepinfra.com/deepseek-v4.1-flash/2026-10-26.md)).
- Siblings: DeepSeek-V4-Flash (284B backbone), DeepSeek-V4-Pro (1.6T), and the
  [V4.1-Flash-1017](deepseek-v4.1-flash-1017.md) checkpoint. These are separate
  entities with separate evidence; the V4.1 card's own tables show V4-Pro beating V4.1
  Flash on knowledge-recall benchmarks (SimpleQA-Verified 55.2 vs 42.3, MultiLoKo 50.9
  vs 45.5, LongBench-V2 51.5 vs 45.2) while losing badly on agentic ones (Terminal-Bench
  4.0 12.4 vs 31.2).

### Obtainable, but no longer first-party-callable

The base is definitely **obtainable**; whether it is **callable on DeepSeek's own API** is
not. Two independent lines of evidence say somebody served it after the update:

- Vals AI ran both checkpoints on Terminal-Bench 4.0 and reports a separate base row at
  19.70% ([Vals AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)).
- DeepInfra carries a model page for the base slug, though with no pricing block or
  serving metadata, and the model is absent from DeepInfra's family listing
  ([record](../../sources/deepinfra.com/deepseek-family/2026-10-26.md)). That listing is
  itself stale — it omits the live `1017` page too — so absence there proves little.

On DeepSeek's first-party API, no name resolves here: `deepseek-flash` moved to `1017` on
2026-10-17. The practical reading is that the base survives as **open weights**, as a
third-party-hosted slug, and as the comparison baseline in DeepSeek's `1017` table.

## Current assessment

The interesting property of this model is not its benchmark position — on knowledge
benchmarks it sits below Opus-5.0 and GPT-5.6 Sol, and even below its own V4-Pro
sibling. It is the **cost structure**: a Causal Encoder-Decoder design that activates
8B parameters per token on prefill and 16B on decode, with a global KV cache of 890
bytes per token, roughly a quarter of V4-Flash's
([model card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)).

That is a design aimed at input-heavy agentic workloads, where long contexts and many
tool-call round trips dominate cost. The benchmark table tells the same story: the model
is competitive-to-strong on agentic and code benchmarks (DeepSWE v1.1 74.2, CyberGym
88.1, Terminal-Bench 2.1 90.6) and weak on knowledge recall (HLE 36.8, SimpleQA-Verified
42.3 base). It is a model for doing, not for knowing.

For a reader deciding today, the base is mainly relevant if self-hosting matters. If you
are calling an API, you are almost certainly getting `1017`.

## Architecture as documented

All from the [model card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md),
which summarises a technical report that was not retrieved.

- **Causal Encoder-Decoder:** 40 layers, 20 causal encoder + 20 decoder. The decoder's
  global KV cache is projected from final encoder hidden states rather than derived per
  layer. Stated effect: 8B active parameters per token during prefill, 16B during
  decode.
- **SWA Bounded Replay** rebuilds missing sliding-window KV by replaying recent tokens
  instead of persisting SWA KV to SSD, cutting persistent KV to ~1/8 of V4-Flash.
- **Compressed Sparse Attention 2:** per-layer static modes (Full, Reindex, Reuse) share
  main KV and indexer K across layers; a Hierarchical Sparse Indexer bounds deeper
  indexer cost independently of context length.
- **FP4 main KV cache** (E2M1, one E4M3 scale per 16 channels) → **890 bytes per token**.
- **Engram conditional memory, 196B parameters**, sparsely accessed by token lookup.
- **DSpark speculative decoding**, semi-autoregressive drafting with confidence-scheduled
  verification.
- MoE: 1 shared + 384 routed experts per layer, 6 routed experts active per token.
- Pre-training: 45T multimodal tokens; sparse attention trained at 64K, extended to 1M at
  34T tokens.
- Post-training: SFT → RL → on-policy distillation, with changes attributed to data
  pipeline rather than algorithm.
- Controllable reasoning effort on an integer 1–100 scale.

**Parameter count caveat.** 552B is the *backbone*. With a 196B Engram module the total
is larger, and the card never states the combined figure. Quoting "552B" as the model
size is wrong; quoting 748B is arithmetic the card does not authorise.

## Reported performance

DeepSeek's own numbers, internal framework, scores within 0.3 treated as equivalent.
Selected rows; full tables are in the
[source record](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md).

| Benchmark | V4.1-Flash | V4-Pro | Opus-5.0 | GPT-5.6 Sol |
| --- | --- | --- | --- | --- |
| GPQA Diamond | 90.9 | 92.4 | 93.4 | **94.1** |
| HLE (Pass@1) | 36.8 | 42.7† | **56.3** | 44.5 |
| Codeforces (rating) | **3471** | 3348 | — | — |
| Terminal-Bench 2.1 | **90.6** | 87.9 | 89.1 | 88.8 |
| Terminal-Bench 4.0 | 31.2 | 12.4 | **51.8** | 39.9 |
| DeepSWE v1.1 | **74.2** | 62.7 | 74.0 | 73.0 |
| CyberGym | **88.1** | 83.3 | — | 84.5 |
| AutomationBench | **54.8** | 43.2 | 50.3 | 45.8 |

† text-only HLE subset.

### The scaffold result is the most transferable finding

DeepSeek ran the same two benchmarks across eight agent harnesses. The same model scores
**69.8 to 74.2** on DeepSWE v1.1 and **84.1 to 90.6** on Terminal-Bench 2.1 depending
only on the scaffold
([model card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)).

This is vendor data, but it is internally controlled and it is the kind of result that
generalises: an agentic benchmark number is a property of the model-plus-harness pair,
not of the model. Any cross-vendor comparison that does not name the harness is
comparing unknown quantities. Note also that the best scaffold for this model is
DeepSeek's own DSH Minimal, which is the sort of home-field result that should be
discounted slightly.

### One independent measurement

Vals AI's Terminal-Bench 4.0 board ran this checkpoint under mini-swe-agent and scored it
**19.70%**, ranking 30th of 55, at $0.50 per test
([Vals AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)). DeepSeek's own row for
the same benchmark is 31.2 under Claude Code. The ~11.5-point gap is a harness effect, and
it is larger than the entire gain the `1017` update claims on that benchmark — which is
the clearest illustration on either page of why an unqualified agentic score is close to
meaningless.

Artificial Analysis does not list this checkpoint separately; its board carries only the
`1017` row ([AA leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)).

## Access, pricing, licensing

- **Weights:** MIT, downloadable, with conversion and inference instructions
  ([model card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)).
- **First-party API:** not offered under any documented model name. `deepseek-flash`
  serves `1017` instead
  ([API pricing](../../sources/deepseek.com/api-pricing/2026-10-26.md)).
- **DeepInfra:** page exists, no pricing captured, availability unresolved
  ([DeepInfra](../../sources/deepinfra.com/deepseek-v4.1-flash/2026-10-26.md)).
- **License scope:** MIT is unusually permissive for a frontier-scale multimodal model.
  The card states the repository *and the model weights* are MIT. The card does not
  separately address acceptable use, output ownership, or training-data provenance, and
  the MIT text itself does not reach those questions. Silence is not permission; check
  the license file and DeepSeek's terms before relying on MIT for a commercial use case.

## Limitations and constraints

- **No Jinja chat template.** The release ships a Python reference encoder and the
  `deepseek-recipe` Rust/Python libraries instead. Self-hosting means adopting their
  prompt format; a generic chat template will not reproduce the reported numbers
  ([model card](../../sources/deepseek.com/v4.1-flash-model-card/2026-10-26.md)).
- **FIM completion is non-thinking-mode only** on the API that serves this generation
  ([API pricing](../../sources/deepseek.com/api-pricing/2026-10-26.md)).
- **Knowledge recall is the weak axis.** HLE 36.8 and base SimpleQA-Verified 42.3 are
  well behind Opus-5.0 and GPT-5.6 Sol. For factual recall and open-domain reasoning,
  this is not the model to reach for.
- **Almost every benchmark number is unaudited.** One figure has an independent check —
  Terminal-Bench 4.0, where Vals AI scores this checkpoint 19.70% against DeepSeek's 31.2
  ([Vals AI](../../sources/vals.ai/terminal-bench-4/2026-10-26.md)). Nothing else here has
  been reproduced, and Artificial Analysis does not list this checkpoint separately, so
  there is no composite score either.

## Unresolved questions

1. ~~What is the release date of the base V4.1-Flash, and of the `1017` checkpoint?~~
   **Resolved:** 2026-09-10 and 2026-10-17 respectively, both from the change log.
2. Is the base checkpoint still callable on DeepSeek's own API? No name resolves here.
   Whether a third-party host serves it is likely but not directly confirmed — Vals AI
   measured it, though without stating which endpoint.
3. ~~Are `1017` weights published?~~ **Resolved:** yes, in a separate MIT repository
   (~510 GB, fp8), so the two checkpoints are both downloadable artifacts.
4. ~~What does `1017` denote?~~ **Resolved:** the release date, 2026-10-17.
5. Does the 890 bytes/token KV figure survive contact with a real long-context
   agentic workload, and what does it imply for self-hosted memory budgets?
6. Do the agentic gains hold outside DeepSeek's own harnesses? Partly: independent runs
   reproduce a 7–12 point gain but score both checkpoints 8.5–10.5 points lower in
   absolute terms. See the [1017 page](deepseek-v4.1-flash-1017.md) for the numbers.

## Evidence status

Evidence floor: **met for identity; one independent figure, no full capability check.**

- First-party: the DeepSeek model card, change log, and API pricing page, all captured
  2026-10-26.
- Independent measurement: one figure — Vals AI's 19.70% on Terminal-Bench 4.0 under
  mini-swe-agent. That is enough to establish that the absolute level is far below the
  vendor's row, but it is a single benchmark.
- Independent host: DeepInfra, but its base-model page is a verbatim reproduction of the
  card and adds no independent claim.
- Aggregator: Artificial Analysis lists only the `1017` checkpoint, so there is no
  composite score for this one.

Every other number here is DeepSeek's own measurement under DeepSeek's own settings,
recorded as vendor-reported rather than established fact. The next useful evidence would
be a self-hosted run against a named checkpoint and prompt encoding, or an independent
ProgramBench result.

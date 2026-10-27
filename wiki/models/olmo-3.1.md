# Olmo 3.1

Ai2's **December 2025 post-training refresh of Olmo 3**, shipped as two 32B checkpoints —
`Olmo-3.1-32B-Think` and `Olmo-3.1-32B-Instruct` — plus refreshed 7B RL-Zero baselines
([Ai2 blog, "Update 12/12"](../../sources/allenai.org/olmo3-blog-post/2026-10-26.md)). Both 32B
checkpoints sit on the **same Olmo 3 32B base** (`Olmo-3-1125-32B`) with the same architecture and
the same 65,536-token context; nothing in the config files distinguishes 3.1 from Olmo 3 32B
([configs](../../sources/huggingface.co/olmo-3-1-32b-config/2026-10-26.md)). So 3.1 is best read as a
**longer post-training run on an unchanged backbone**, not a new model family — but the Think
checkpoint's measured behaviour does move enough that its results cannot be read off the Olmo 3 32B
Think column, and the Instruct checkpoint has no Olmo 3 predecessor at all.

Everything is Apache 2.0 weights, English, text-in/text-out, and the entire training data and code
are published. The practical constraint is not licence or capability but **distribution**: at capture
the only independent host listing any 3.1 checkpoint was DeepInfra, for the Instruct model only, on a
deprecation path ([DeepInfra](../../sources/deepinfra.com/olmo-3-1-32b-instruct/2026-10-26.md)), and
OpenRouter listed no OLMo model of any generation
([OpenRouter catalogue check](../../sources/openrouter.ai/olmo-3-1-catalog-check/2026-10-26.md)).

## Identity

- **Canonical names / weight IDs:** `allenai/Olmo-3.1-32B-Instruct` and `allenai/Olmo-3.1-32B-Think`
  on Hugging Face ([Instruct card](../../sources/huggingface.co/olmo-3-1-32b-instruct-model-card/2026-10-26.md),
  [Think card](../../sources/huggingface.co/olmo-3-1-32b-think-model-card/2026-10-26.md)).
  Architecture string `Olmo3ForCausalLM`, `model_type: olmo3`.
- **Vendor:** Allen Institute for AI (Ai2), as "Team Olmo"
  ([technical report](../../sources/arxiv.org/olmo-3-technical-report/2026-10-26.md)).
- **Aliases and labels:** roster "OLMo 3.1"; Ai2 writes "Olmo 3.1" (the roster's capitalisation is a
  discovery label, not a vendor spelling); Ai2 Playground `?model=Olmo-3.1-32B-Instruct` /
  `-Think` ([project page](../../sources/allenai.org/olmo-project-page/2026-10-26.md)); Ollama library
  `olmo-3.1` with tags `32b-instruct` and `32b-think`
  ([Ollama](../../sources/ollama.com/olmo-3-1/2026-10-26.md)); DeepInfra
  `allenai/Olmo-3.1-32B-Instruct`; Artificial Analysis "Olmo 3.1 32B Instruct" and "Olmo 3.1 32B
  Think".
- **Release date: 2025-12-12** for the announcement, under a section headed "Update 12/12" appended
  to the 2025-11-20 Olmo 3 launch post. The year is inferred, not printed: the visible heading gives
  day and month only, and 2025 comes from the weights being uploaded 2025-12-10 and arXiv v1 being
  submitted 2025-12-15 ([blog](../../sources/allenai.org/olmo3-blog-post/2026-10-26.md),
  [report](../../sources/arxiv.org/olmo-3-technical-report/2026-10-26.md)). This falls inside the
  one-year window (≥ 2025-10-26); no specialist exception is needed.
- **Status:** current per Ai2 — the project page's 32B-Think and 32B-Instruct cards now download and
  serve the 3.1 weights, and the page never uses the string "3.1"
  ([project page](../../sources/allenai.org/olmo-project-page/2026-10-26.md)). Hosted availability is
  thinning rather than current: DeepInfra's entry is flagged deprecated as of 2026-05-07.
- **Host endpoints present at capture:**
  - DeepInfra `https://api.deepinfra.com/v1/inference/allenai/Olmo-3.1-32B-Instruct` — Instruct only,
    no Think entry ([DeepInfra](../../sources/deepinfra.com/olmo-3-1-32b-instruct/2026-10-26.md)).
  - Ai2 Playground, interactive only; `api.allenai.org` does not resolve and no first-party price
    list exists ([docs/API capture attempt](../../sources/allenai.org/ai2-docs-and-api-capture-check/2026-10-26.md)).
  - Ollama `olmo-3.1` — a 19 GB local redistribution, both tags, not a hosted endpoint
    ([Ollama](../../sources/ollama.com/olmo-3-1/2026-10-26.md)).
  - **Not present:** OpenRouter (zero `olmo` matches in a 464-entry catalogue)
    ([catalogue check](../../sources/openrouter.ai/olmo-3-1-catalog-check/2026-10-26.md)).
- **Siblings:** Olmo 3.1 RL Zero 7B Code and 7B Math (refreshed RL baselines, no 7B chat checkpoint in
  3.1); the parent Olmo 3 family — `Olmo-3-1025-7B`, `Olmo-3-1125-32B`, `Olmo-3-7B-Think`,
  `Olmo-3-32B-Think`, `Olmo-3-7B-Instruct`; Olmo 2 32B as the vendor's own older baseline
  ([report artifact list](../../sources/arxiv.org/olmo-3-technical-report/2026-10-26.md)).

### Is Olmo 3.1 distinct from Olmo 3?

Distinct enough to need its own evidence, not distinct enough to be a new architecture. Applied to the
three identity tests:

1. **Both obtainable.** The Olmo 3 32B Think weights remain published and the 3.1 weights sit beside
   them; the Instruct checkpoint has no Olmo 3 32B counterpart, so for that checkpoint there is
   nothing to merge with
   ([Instruct card stage table](../../sources/huggingface.co/olmo-3-1-32b-instruct-model-card/2026-10-26.md)).
2. **The difference changes the recommendation — for Think.** Against the same table's Olmo 3 Think 32B
   column, 3.1 Think is +5.6 on AIME 2025, +20.5 on IFBench, +14.8 on Safety, and −5.1 on AlpacaEval 2
   LC, −1.2 on BigBenchHard ([Think card](../../sources/huggingface.co/olmo-3-1-32b-think-model-card/2026-10-26.md)).
   A single verdict would mislead one of the two checkpoints. For Instruct the question is moot.
3. **Variant-specific evidence exists.** Ai2 publishes separate cards with separate benchmark columns
   per checkpoint, and the report names the training change (RL run extended from 750 to 2,300 steps).

What 3.1 is *not*: a new base model. The report says the base, the data mixes and the pipeline are
unchanged; the 3.1 Think DPO parent is `Olmo-3-32B-Think-DPO`, the same parent the Olmo 3 32B Think
card uses ([report](../../sources/arxiv.org/olmo-3-technical-report/2026-10-26.md)). Ai2's own framing
is "extending the same model flow".

**Granularity note.** Instruct and Think are different models behaviourally (one reasons, one does
not, and their benchmark columns diverge sharply). They share this page because the roster row and
Ai2's release are singular — one "Olmo 3.1" announcement, one date, one base — and the vendor gives
them one product identity. **No figure in the Think sections transfers to Instruct, or vice versa**;
each table below names its checkpoint.

## Current assessment

**Current at the vendor, weak at the hosts, and the only third-party number is an estimate.**

- **Ai2's own claim is a top-of-class claim, and it is vendor-measured only.** "Olmo 3.1 32B Instruct
  is our most capable fully open chat model to date and – in our evaluations – the strongest fully
  open 32B-scale instruct model"
  ([blog](../../sources/allenai.org/olmo3-blog-post/2026-10-26.md)); the report repeats it as "the
  best fully-open model at 32B" for both checkpoints
  ([report](../../sources/arxiv.org/olmo-3-technical-report/2026-10-26.md)). Every number behind that
  is Ai2-produced, on Ai2's own evaluation suite (OLMES), against a vendor-chosen comparator set.
- **No independent measurement exists.** Artificial Analysis scores Think **7** (open-weight reasoning
  class median 8 — "below average") and Instruct **6** (class median 6), and both figures carry an
  asterisk: "* Estimated", with "Estimate (independent evaluation forthcoming)" on every chart and
  "No publicly available API" as the legend
  ([AA Think](../../sources/artificialanalysis.ai/olmo-3-1-32b-think/2026-10-26.md),
  [AA Instruct](../../sources/artificialanalysis.ai/olmo-3-1-32b-instruct/2026-10-26.md)). These are
  not measurements and must not be compared against measured rows. They do, however, fail to
  corroborate "best fully open 32B" in either direction.
- **The strongest evidenced result is the RL-scaling one.** Extending the Think RL run from 750 to
  2,300 steps (+21 days on 224 GPUs) bought +20.5 IFBench and +5.6 AIME 2025 on the same base, with
  the report noting performance "had not yet fully saturated" and compute as the stopping reason.
  That is a statement about post-training headroom in an open pipeline, and it is the most useful
  thing in the release for anyone training rather than serving.
- **Distribution is the real limitation.** The Instruct checkpoint is the only one any independent
  host served, that listing is deprecated with a Gemma 4 replacement named, its human-readable page
  404s, and no Think endpoint was found anywhere outside Ai2's Playground and local Ollama.

## Documented capabilities

| Property | Value |
| --- | --- |
| Parameters | 32B class; Artificial Analysis prints **32.2B**; Ai2 never prints a count in the cards or configs |
| Architecture | 64 layers, hidden 5,120, 40 query heads / 8 KV heads (GQA), vocab 100,278, `Olmo3ForCausalLM`, bfloat16 |
| Context window | **65,536 tokens** (`max_position_embeddings`) — YaRN factor 8 over an 8,192 base, `rope_theta` 500,000 |
| Attention pattern | `sliding_window` 4,096 on 48 layers, 16 full-attention layers (three sliding per full, 4-layer period) |
| Input / output | **Text only, both directions.** AA's FAQ is explicit: "does not support image input" |
| Reasoning | Think emits ` thinking…</think>` traces; Instruct is non-reasoning. Both ship the same `generation_config.json` |
| Sampling defaults | `temperature` 0.6, `top_p` 0.95, `max_new_tokens` 32,768, `do_sample` true |
| Tool use / structured output | Advertised by DeepInfra tags (`tools`, `json`, `structured-output`) and evaluated by Ai2 (BFCL); no first-party API schema documented |
| Languages | `en` in both card and config metadata; date cutoff **December 2024** |
| Fine-tuning surface | All intermediate checkpoints published (SFT, DPO) except most of the RL run |

Sources: [configs](../../sources/huggingface.co/olmo-3-1-32b-config/2026-10-26.md),
[Think card](../../sources/huggingface.co/olmo-3-1-32b-think-model-card/2026-10-26.md),
[Instruct card](../../sources/huggingface.co/olmo-3-1-32b-instruct-model-card/2026-10-26.md),
[AA Think](../../sources/artificialanalysis.ai/olmo-3-1-32b-think/2026-10-26.md).

**Marketing claims, labelled as such:** "our most performant to date", "the strongest fully open
32B-scale instruct model", "substantial gains across math, reasoning, and instruction-following", and
the report's "best fully-open model at 32B". Also from Ai2: "fully open" means data, code, logs and
every checkpoint are released — a provenance claim, verifiable, and separate from the performance
claim, which is not independently verified.

### Benchmarks

All vendor-measured on Ai2's OLMES suite; no harness detail, sample counts or confidence intervals are
published, and AIME rows at this scale are high-variance with no repeats reported.

**Olmo 3.1 Think 32B against the checkpoint it replaces**
([Think card](../../sources/huggingface.co/olmo-3-1-32b-think-model-card/2026-10-26.md)):

| Benchmark | 3.1 Think 32B | Olmo 3 Think 32B | Δ |
| --- | --- | --- | --- |
| AIME 2024 | 80.6 | 76.8 | +3.8 |
| AIME 2025 | 78.1 | 72.5 | +5.6 |
| IFBench | 68.1 | 47.6 | +20.5 |
| IFEval | 93.8 | 89.0 | +4.8 |
| ZebraLogic | 80.1 | 76.0 | +4.1 |
| OMEGA | 53.4 | 50.8 | +2.6 |
| Safety (benchmark unnamed on card) | 83.6 | 68.8 | +14.8 |
| MATH | 96.2 | 96.1 | +0.1 |
| MMLU | 86.4 | 85.4 | +1.0 |
| GPQA | 57.5 | 58.1 | −0.6 |
| LiveCodeBench v3 | 83.3 | 83.5 | −0.2 |
| BigBenchHard | 88.6 | 89.8 | −1.2 |
| PopQA | 30.9 | 31.9 | −1.0 |
| AlpacaEval 2 LC | 69.1 | 74.2 | −5.1 |

The blog's summary of this delta is "5+ points on AIME, 4+ points on ZebraLogic, 4+ points on IFEval,
and 20+ points on IFBench"
([blog](../../sources/allenai.org/olmo3-blog-post/2026-10-26.md)). It holds for AIME 2025 (+5.6) but
**not for AIME 2024 (+3.8)**, and the blog omits the largest movement in the table — the +14.8 Safety
delta — as well as the four regressions. Directionally honest, selectively rounded.

**Olmo 3.1 32B Instruct** (final RLVR checkpoint), against the vendor's chosen peers
([Instruct card](../../sources/huggingface.co/olmo-3-1-32b-instruct-model-card/2026-10-26.md)):

| Benchmark | 3.1 Instruct | Qwen 3 32B (No Think) | Qwen 3 VL 32B Instruct | Gemma 3 27B |
| --- | --- | --- | --- | --- |
| AIME 2025 | 57.9 | 21.3 | 64.2 | 22.9 |
| AIME 2024 | 67.8 | 27.9 | 75.4 | 28.9 |
| MATH | 93.4 | 84.3 | 95.1 | 87.4 |
| IFBench | 39.7 | 31.3 | 37.2 | 31.3 |
| IFEval | 88.8 | 87.5 | 88.1 | 85.4 |
| LiveCodeBench v3 | 54.7 | 57.5 | 70.2 | 39.0 |
| HumanEvalPlus | 86.7 | 83.9 | 89.3 | 79.2 |
| MMLU | 80.9 | 85.8 | 88.7 | 74.6 |
| GPQA | 48.6 | 54.4 | 61.4 | 45.0 |
| ZebraLogic | 61.7 | 28.4 | 86.7 | 24.8 |
| AlpacaEval 2 LC | 59.8 | 67.9 | 84.3 | 65.5 |
| Safety | 89.5 | 81.6 | 85.8 | 68.8 |

Read against that table, "strongest fully open 32B instruct" survives only under a narrow reading: it
leads Qwen 3 32B (No Think) on math, instruction following and HumanEval, but trails it on MMLU,
GPQA, LiveCodeBench and AlpacaEval, and trails Qwen 3 VL 32B Instruct on almost every row. The claim
depends on "fully open" excluding Qwen 3 VL, which Ai2 does not argue — the card simply lists Qwen 3 VL
as a comparator it loses to.

**Tool use, only in the report** (Table 25, SFT / DPO / final):
SimpleQA 82.3 / 85.3 / 84.7, LitQA2 47.6 / 53.3 / 55.6, BFCL 57 / 58.6 / 58.8
([report](../../sources/arxiv.org/olmo-3-technical-report/2026-10-26.md)). The model card omits these
three rows entirely.

## Limitations and constraints

**Capability and scope**

- **Text only.** No vision, audio or document input on either checkpoint, per AA's FAQ and the absence
  of any multimodal field in the cards or configs.
- **65,536-token ceiling, and the long-context behaviour of 3.1 specifically was never measured.** The
  report describes the 8,192 → 65,536 extension for the Olmo 3 base; neither 3.1 card reports a
  long-context evaluation, so the inherited window is an architectural capacity, not a tested
  capability at the 3.1 checkpoints.
- **English, December 2024 cutoff.** Both are stated in card and config metadata; no multilingual
  evaluation exists.
- **Instruct is weaker than Think on reasoning benchmarks** (AIME 2025 57.9 against Think's 78.1), so
  the two are not interchangeable at the same price.

**Vendor claim defects**

- The **Instruct card's training-stage section describes the Think corpora** — "Dolci-Think-SFT-7B",
  "Dolci-Think-DPO-7B", "Dolci-Think-RL-7B" — for an instruct model, while repository metadata tags
  `allenai/Dolci-Instruct-RL` and the report describes instruct-side corpora. The stage text is
  therefore not usable as a record of what trained this checkpoint
  ([Instruct card](../../sources/huggingface.co/olmo-3-1-32b-instruct-model-card/2026-10-26.md)).
- The Instruct card's own inference snippet uses `top_k=50, top_p=0.95` with no temperature, while the
  shipped `generation_config.json` sets `temperature` 0.6 and `top_p` 0.95 with no `top_k`
  ([configs](../../sources/huggingface.co/olmo-3-1-32b-config/2026-10-26.md)). Follow the config.
- **"Safety" is an unnamed benchmark with unstated direction** on both cards. It is the single largest
  Think improvement (+14.8) and cannot be interpreted as written.
- The Think card's "Model Sources" gives the paper link as "TBD"; the arXiv ID `2512.13961` appears
  only in repository metadata.

**Host and distribution**

- **No Think endpoint anywhere except Ai2's Playground and local Ollama.** DeepInfra carries Instruct
  only; OpenRouter carries neither.
- **The one host listing is deprecated.** DeepInfra's `deprecated` field is 2026-05-07, in the past at
  capture, with `replaced_by: google/gemma-4-31B-it`, and the vendor's own copy reads "Due to low
  usage this model will be deprecated on {{date}}". The API still returns the entry and the human page
  404s — so whether requests are still accepted is unresolved
  ([DeepInfra](../../sources/deepinfra.com/olmo-3-1-32b-instruct/2026-10-26.md)).
- **DeepInfra does not state quantisation** (`quantization: null`), so hosted output may not match the
  bfloat16 reference weights.
- **Ollama's 19 GB artifact is compressed** — 32B at bfloat16 would be roughly 64 GB — and Ollama does
  not say in what format or who converted it. Its "64K context" is a rounded 65,536
  ([Ollama](../../sources/ollama.com/olmo-3-1/2026-10-26.md)).
- **Documentation is unreachable.** Every path on `docs.allenai.org` returned the same 21,988-byte
  SPA shell, so no per-model docs (limits, hosting guidance, API keys) could be read
  ([capture attempt](../../sources/allenai.org/ai2-docs-and-api-capture-check/2026-10-26.md)).

**Licensing nuance**

- The cards state Apache 2.0 *and* "intended for research and educational use in accordance with Ai2's
  Responsible Use Guidelines". Those sit awkwardly: Apache 2.0 grants commercial use, and AA's FAQ
  reads the licence that way ("This license allows commercial use"), but Ai2's framing is a
  use-intent statement appended to a permissive licence. The licence text itself was not captured, so
  how the two interact is unresolved.

## Access, pricing, licensing

| Route | Checkpoint | Price | Notes |
| --- | --- | --- | --- |
| DeepInfra | Instruct only | **$0.20 / $0.60 per 1M input / output tokens**; no cached-input price (`null`) | 65,536-token `max_tokens`; deprecated 2026-05-07, `replaced_by` Gemma 4 31B; `create_ts` 2025-12-17 |
| OpenRouter | — | — | Not listed at all (0 of 464 catalogue entries) |
| Ai2 Playground | Both | Not published | Interactive chat only; no price, quota or terms captured; `api.allenai.org` does not resolve |
| Ollama | Both | No per-token charge | 19 GB local artifact, 65,536-token context, `tools` and `thinking` tags |
| Hugging Face weights | Both | Free (Apache 2.0) | Not gated; 17,311 (Instruct) and 19,339 (Think) downloads at capture |

**Billing basis:** per token on the only paid route, with no cache tier and no batch rate captured.
There is no first-party Ai2 API and therefore no vendor price to compare against — the DeepInfra
number is the only published price for any Olmo 3.1 checkpoint, and it was never exercised (no
credentials, no requests sent).

**Weights licence: Apache 2.0**, `gated: false`, on both repositories.

**Data licence:** the Dolma 3 pretraining/midtraining/long-context mixes and most Dolci post-training
corpora are **ODC-BY**; two tool-use subsets (`Dolci-Instruct-SFT-Tool-Use-SA`,
`Dolci-Think-SFT-Olmo-Hybrid-Tool-Use-SA`) are **CC-BY-SA-4.0**, so share-alike obligations attach to
those specific corpora rather than to the weights
([dataset licence metadata](../../sources/huggingface.co/olmo-3-dolma3-dolci-dataset-licences/2026-10-26.md)).
The RL corpora the 3.1 runs actually used (`Dolci-Instruct-RL`, `Dolci-Think-RL`) expose **no licence
tag**, so their terms are unresolved — the one real gap in an otherwise unusually complete openness
package.

## Unresolved questions

1. **Why does Artificial Analysis date the Instruct checkpoint 2026-01-13** when Ai2 announced both in
   the same 12/12 update, both weight sets were uploaded 2025-12-10, and AA's own Think page says
   2025-12-12? An AA catalogue date is the likely explanation; AA does not say so, and the two pages
   contradict each other.
2. **Is the DeepInfra listing still serving?** The deprecation date passed months before capture, the
   catalogue still returns the entry, and the human page 404s. No request was made.
3. **What licence covers `Dolci-Instruct-RL` and `Dolci-Think-RL`**, the corpora behind the 3.1
   post-training runs?
4. **Does 3.1 hold up at long context?** The 65,536 window is inherited and untested at these
   checkpoints; no needle-in-haystack or long-context result exists for 3.1.
5. **Does "fully open" exclude Qwen 3 VL 32B, and on what basis?** The "strongest fully open 32B"
   claim loses to Qwen 3 VL on most rows of Ai2's own table, and Ai2 does not argue the exclusion.
6. **Is there any independent benchmark at all?** No. AA's two figures are estimates, and no third
   party has published a measured run of either checkpoint.
7. **Why does Ai2's product page serve 3.1 weights under Olmo 3 labels without ever naming 3.1?** A
   reader following the project page gets 3.1 without being told, and the older `Olmo-3-32B-Think`
   weights are not linked from it.
8. **Should Instruct and Think be two pages?** They diverge enough in behaviour to justify it; they
   are merged here because the roster row and the vendor release are singular. Revisit if either
   checkpoint starts being cited separately.
9. **No Olmo 3 page exists in this wiki.** The parent generation is the comparison baseline throughout
   and is still published; it is not this task's row.

## Evidence status

**Floor met.** Six first-party records, two independent host records (one positive, one negative),
plus a local distribution listing and two third-party evaluation records.

- **First-party, six records:** the
  [Ai2 blog with the 12/12 update](../../sources/allenai.org/olmo3-blog-post/2026-10-26.md) (date,
  identity, claimed deltas, distribution), the
  [project page](../../sources/allenai.org/olmo-project-page/2026-10-26.md) (32B cards now resolve to
  3.1), the [Instruct card](../../sources/huggingface.co/olmo-3-1-32b-instruct-model-card/2026-10-26.md)
  and [Think card](../../sources/huggingface.co/olmo-3-1-32b-think-model-card/2026-10-26.md) (licence,
  benchmarks, lineage, sampling), the
  [configs](../../sources/huggingface.co/olmo-3-1-32b-config/2026-10-26.md) (architecture, 65,536
  context, defaults), and the
  [technical report](../../sources/arxiv.org/olmo-3-technical-report/2026-10-26.md) (what 3.1 changed,
  750 → 2,300 steps, tool-use rows, base training budget).
- **Independent hosts, three records:**
  [DeepInfra](../../sources/deepinfra.com/olmo-3-1-32b-instruct/2026-10-26.md) (the only positive host
  listing, price, deprecation), the
  [OpenRouter catalogue check](../../sources/openrouter.ai/olmo-3-1-catalog-check/2026-10-26.md)
  (negative — establishes that the usual cross-host price reference does not exist here), and
  [Ollama](../../sources/ollama.com/olmo-3-1/2026-10-26.md) (local distribution, quantised artifact).
- **Third-party evaluation, two records:** [AA Think](../../sources/artificialanalysis.ai/olmo-3-1-32b-think/2026-10-26.md)
  and [AA Instruct](../../sources/artificialanalysis.ai/olmo-3-1-32b-instruct/2026-10-26.md). Both are
  **estimates**, explicitly flagged, with no speed, cost or verbosity data. The
  [AA leaderboard capture](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md) does
  not contain an Olmo row, so the roster's "Artificial Analysis leaderboard" discovery path is not
  corroborated by it — the two model pages are the actual AA evidence.
- **Licence evidence:** [dataset licence metadata](../../sources/huggingface.co/olmo-3-dolma3-dolci-dataset-licences/2026-10-26.md)
  (ODC-BY / CC-BY-SA-4.0 tags) and the Apache 2.0 tags on both weight repositories.
- **No direct tests were run for this page.** No request was sent to DeepInfra, the Playground or
  Ollama; every number is quoted from a source record. Contradictions are preserved rather than
  reconciled: the release date (2025-12-12 vs AA's 2026-01-13 for Instruct), the blog's AIME delta
  ("5+") against the card's +3.8 on AIME 2024, the Instruct card's Think-corpus stage text against
  repository metadata, and the card's inference snippet against `generation_config.json`.
- **Weakest links:** the vendor's evaluation tables have no harness, sample counts or intervals, so
  the size of the 3.1-over-Olmo-3 delta is unverifiable independently; AA's indices are estimates and
  cannot be compared to measured models; and hosted availability rests on a single deprecated
  DeepInfra entry whose status is unresolved.

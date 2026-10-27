# gpt-oss-120b

OpenAI's open-weight Mixture-of-Experts reasoning model: 116.8B total parameters with 5.1B active,
**Apache 2.0** weights, a 131,072-token context, and a design target of one 80GB GPU
([OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md),
[model card paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)). It was released
**2025-08-05**, 82 days before this roster's 2025-10-26 window start, and is retained as a
**specialist exception** — the reference open-weights reasoning model of its generation, still
served by 17+ providers at capture ([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md),
[OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)).

Its significance at capture is not capability. Artificial Analysis scores it 12 on its Intelligence
Index v4.3.2 — well above the median of 8 for open-weights models of similar size, and far below the
frontier rows on the same board (45–58; that comparison is indicative only, since the leaderboard
capture does not state its index version —
[leaderboard](../../sources/artificialanalysis.ai/leaderboards-models/2026-10-26.md)). What keeps it
relevant is the combination of a permissive licence, full chain-of-thought, and a price floor of
$0.03/$0.15 per million tokens on the cheapest hosts.

## Identity

- **Canonical name and ID:** `gpt-oss-120b`. OpenAI's docs give exactly that as "Model ID"
  ([OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)); the weights
  repository is `openai/gpt-oss-120b`
  ([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)); OpenRouter's
  `canonical_slug` is the same un-suffixed string
  ([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)).
- **Vendor:** OpenAI. Open weights, not a hosted OpenAI product.
- **Released 2025-08-05.** Four independent witnesses agree: the model card paper is headed
  "OpenAI, August 5, 2025"
  ([paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)); Bedrock's table gives
  "Release date August 5, 2025"
  ([Bedrock](../../sources/aws.amazon.com/gpt-oss-120b-bedrock/2026-10-26.md)); Artificial
  Analysis's FAQ says "released on August 5, 2025"
  ([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)); OpenRouter's `created`
  timestamp decodes to 2025-08-05T17:17:11Z. The weights repository was created
  `2025-08-04T22:33:06Z`, the previous UTC evening
  ([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)); the arXiv v1
  submission followed on 2025-08-08.
- **Host endpoints:** `openai/gpt-oss-120b` on OpenRouter (25 endpoints)
  ([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)); `openai.gpt-oss-120b-1:0`
  on Amazon Bedrock, reachable via `InvokeModel`, `Converse`, and an OpenAI-compatible Chat
  Completions route
  ([Bedrock](../../sources/aws.amazon.com/gpt-oss-120b-bedrock/2026-10-26.md)); plus Together,
  Groq, Cerebras, DeepInfra, Fireworks, Nebius, Novita, BaseTen, SambaNova, Google, DigitalOcean
  and others in the same endpoint table.
- **Aliases and leaderboard labels:** Artificial Analysis lists it as "gpt-oss-120b (High)" — the
  `(High)` is the reasoning effort, not a variant
  ([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)). Bedrock's `-1:0` suffix is
  AWS's revision counter, not a model version
  ([Bedrock](../../sources/aws.amazon.com/gpt-oss-120b-bedrock/2026-10-26.md)). The roster label
  matches the canonical ID, so there is no identity ambiguity to resolve.
- **No dated snapshots.** OpenAI lists a single "Default snapshot: `gpt-oss-120b`"
  ([docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)); OpenRouter's
  `canonical_slug` carries no date. Only the weights repository's `lastModified`
  (`2025-08-26T17:25:03Z`) hints that the files were touched after launch, and nothing documents a
  revision ([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)).
- **Siblings:** [gpt-oss-20b](https://huggingface.co/openai/gpt-oss-20b) — 20.9B total, 3.6B active,
  runs in 16GB, listed at $0.018/$0.09 on OpenRouter — and `gpt-oss-safeguard-20b`, described by
  OpenRouter as "a safety reasoning model from OpenAI built upon gpt-oss-20b", listed
  2025-10-29 ([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)). There is no
  120b safeguard model in the captured catalogue.
- **Status at capture:** live, not deprecated; no `expiration_date` on OpenRouter, and Bedrock
  serves a pinned revision.

## Current assessment

A distinct model, not a repackaging: distinct weights (116.8B/5.1B, 36 layers, 128 experts with
top-4 routing), a distinct licence (Apache 2.0), and its own benchmark table
([paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)). Nothing in the evidence
suggests a newer checkpoint hiding under the same name.

The evidence supports a narrow, durable verdict: **cheap, fast, concise, and licence-clean, with a
2024 knowledge cutoff and a capability level that is no longer near the frontier.** Artificial
Analysis — the only independent measurement in this set — reports 12 on its Intelligence Index
(#11 of 67 open-weights medium models), 241 tok/s median output speed (#4 of 26), 0.75 s time to
first token, $0.11 cost per Index task, and 84M output tokens across the Index against a 100M
median ([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)). Speed and concision
are the parts of that profile a 2026 reader would still choose it for.

The price story is dispersion, not a number. OpenRouter's headline is $0.15/$0.60 per million
tokens, which is exactly the Bedrock/Together/Groq/Nebius tier; the same weights are served at
$0.03/$0.15 by Near AI and Venice, and at $0.35/$0.75 by Cerebras
([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)). Artificial Analysis's
$0.15/$0.60 is a median across providers, not a first-party price
([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)).

## Documented capabilities

**Modalities and limits.** Text in, text out; no image input, and Artificial Analysis answers
"does not support image input" explicitly
([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)). OpenAI documents a
**131,072-token context window and 131,072 max output tokens**, with "Reasoning token support"
([OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)). The paper explains
the context figure mechanically: rotary embeddings plus YaRN, extending "the context length of
dense layers to 131,072 tokens"
([paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)).

**Reasoning.** Three efforts — low, medium, high — selected in the system prompt
(`Reasoning: high`), with a `medium` default in the chat template
([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)). Reasoning is
mandatory at the API level: OpenRouter's metadata carries `"reasoning": {"mandatory": true}`, so
there is no non-reasoning mode
([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)). Full chain-of-thought is
returned, which the card says is "not intended to be shown to end users"
([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)).

**Tool use.** Native function calling, web browsing, Python execution, and Structured Outputs
([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)). On OpenAI's
Responses API the documented tools are `function_calling`, `code_interpreter`, `mcp`, and
`web_search`, with `streaming`, `structured_outputs`, and `function_calling` as supported features
([OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)). The browser and
Python tools are prompt-level contracts in the harmony format, not hosted services: OpenAI ships
reference implementations, and the calling application performs the browser call and runs the
Python tool itself — in a "permissive Docker container which could be problematic in cases like
prompt injections", per the repository's own warning
([repo README](../../sources/github.com/gpt-oss-repo-readme/2026-10-26.md)).

**Harmony format is not optional.** Both models "should only be used with the harmony format as it
will not work correctly otherwise"; the shipped chat template hardcodes the knowledge cutoff,
reasoning effort, and the `analysis` / `commentary` / `final` channel scheme
([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)).

**Benchmarks (vendor-run, MXFP4, high effort).** OpenAI's Table 3, accuracy %: AIME 2025 92.5
without tools and 97.9 with tools; AIME 2024 95.8 / 96.6; GPQA Diamond 80.1 / 80.9; HLE 14.9 /
19.0; MMLU 90.0; SWE-bench Verified 62.4; τ-Bench Retail 67.8; Aider Polyglot 44.4; HealthBench
57.6; Codeforces Elo 2463 without tools and 2622 with
([paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)). The paper frames these as
"basic pass@1 results for high reasoning mode using the model's default system prompt" and says
all evals were run at the shipped MXFP4 quantisation. The Hugging Face card's eval-results panel
echoes several of these rows plus third-party contributions (MMLU-Pro 80.8, SWE-bench Pro 16.2),
all marked unverified
([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)).

**Hardware.** 36 layers, 116.83B total and 5.13B active parameters, 128 experts with top-4 routing,
MoE weights post-trained to MXFP4 at 4.25 bits, **60.8 GiB checkpoint**, which is what makes a
single 80GB H100 or MI300X sufficient; the 20b model needs 16GB
([paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md),
[HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)). The HF repository's
safetensors total is 116,829,156,672 parameters across 65.2 GB of files — more than the 60.8 GiB
MXFP4 checkpoint because the Hub conversion stores the 114.66B MoE parameters as packed U8 and the
remaining 2.17B in BF16 ([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)).
Fine-tuning is documented for a single H100 node
([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)).

## Limitations and constraints

- **Knowledge stops in mid-2024.** OpenAI says "Jun 01, 2024"; Artificial Analysis says "May 31,
  2024"; the paper says "June 2024"; the chat template hardcodes `2024-06`; OpenRouter says
  `2024-06-30`. Five spellings, one month — treat the month as the fact and the day as unreliable
  ([OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md),
  [paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md),
  [OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)).
- **Context is not 131,072 everywhere.** Bedrock documents 128,000
  ([Bedrock](../../sources/aws.amazon.com/gpt-oss-120b-bedrock/2026-10-26.md)); Venice and
  DigitalOcean serve 128,000 and BaseTen 128,072 through OpenRouter; Artificial Analysis's spec
  table says 131k while its FAQ says 130k
  ([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)).
- **Max output varies far more than the context.** OpenAI documents 131,072 output tokens; the
  OpenRouter endpoints range from 4,096 (DigitalOcean) and 8,192 (SiliconFlow) to 117,964
  ([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)).
- **Quantisation is host-specific.** OpenRouter lists int4 (Venice), fp4, fp8, bf16, and fp16
  (Cerebras) endpoints. OpenAI's benchmark numbers were measured at MXFP4, so they do not
  automatically describe an int4 or fp8 host
  ([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md),
  [paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)).
- **No first-party inference surface.** OpenAI's page marks Chat Completions "Not supported",
  Fine-tuning "Not supported", and publishes rate limits of 0 RPM / 0 TPM at every tier, while
  claiming Responses and Batch support
  ([OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)). Its pricing page
  carries no `gpt-oss` row at all (same record). Artificial Analysis computes its figures as a
  "median across providers where a first-party API is not available"
  ([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)). Everything below the
  weights is a third-party host's product.
- **Licence text and policy text disagree.** The shipped `LICENSE` is bare Apache 2.0 with no added
  restrictions, but the model card paper describes release "under the Apache 2.0 license **and our
  gpt-oss usage policy**"
  ([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md),
  [paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)). No such policy ships
  with the weights; see [unresolved questions](#unresolved-questions).
- **Safety posture is explicitly non-revocable.** The paper states that once released, attackers
  "could fine-tune them to bypass safety refusals […] without the possibility for OpenAI to
  implement additional mitigations or to revoke access", and that developers will need extra
  safeguards to replicate API-level protections
  ([paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)). OpenAI's own
  adversarial fine-tuning did not reach "High" capability in its Biological/Chemical or Cyber
  categories.
- **Not a medical device.** "The gpt-oss models do not replace a medical professional and are not
  intended for the diagnosis or treatment of disease"
  ([paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)).

## Access, pricing, licensing

**Weights.** Apache 2.0, 65.2 GB of safetensors on Hugging Face, ungated, 116.8B parameters, with
`deploy:sagemaker` and `deploy:azure` tags and an `arxiv:2508.10925` reference
([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)). Apache 2.0 is also
what Artificial Analysis records as the licence
([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)).

**No OpenAI price.** OpenAI's API pricing page has no `gpt-oss` row; there is no first-party
per-token rate to compare against
([OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)).

**Host pricing at capture** (USD per 1M tokens, OpenRouter's endpoint table — one endpoint each):

| Host | In | Out | Quantisation | Context | Max out |
| --- | ---: | ---: | --- | ---: | ---: |
| Near AI / Venice | 0.030 | 0.150 | fp4 / int4 | 131,072 / 128,000 | 117,964 / 32,768 |
| CoreWeave / DekaLLM / AkashML | 0.030 | 0.170–0.187 | fp4 / bf16 | 131,072 | 117,964 |
| DeepInfra | 0.037 | 0.170 | bf16 | 131,072 | 117,964 |
| Novita / Crusoe / Mancer 2 | 0.050 | 0.250 | fp4 / bf16 / fp8 | 131,072 | 32,768–117,964 |
| Google | 0.090 | 0.360 | unknown | 131,072 | 117,964 |
| BaseTen / Parasail | 0.100 | 0.500–0.750 | fp4 | 128,072–131,072 | 115,264–117,964 |
| Amazon Bedrock / Together / Groq / Nebius | 0.150 | 0.600 | unknown | 131,072 | 65,536–117,964 |
| SambaNova | 0.140 | 0.950 | unknown | 131,072 | 117,964 |
| Cerebras | 0.350 | 0.750 | fp16 | 131,072 | 40,960 |

Batch pricing is roughly a fifth of live: `openai/gpt-oss-120b:batch` at $0.0296/$0.136 per 1M
([OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md)). Artificial Analysis's
independent cost figures — $0.15/$0.60, a 33% cache discount, a $0.16 blended rate at a 7:2:1
cache/input/output mix, and $0.11 per Index task — are medians across providers, not a price list
([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)).

**Bedrock specifics.** `openai.gpt-oss-120b-1:0`, text in/out, 128,000 context, InvokeModel /
Converse / OpenAI Chat Completions / batch inference, and Guardrails applied by header. With
`InvokeModel`, reasoning is returned inside `<reasoning>` tags before the answer text
([Bedrock](../../sources/aws.amazon.com/gpt-oss-120b-bedrock/2026-10-26.md)).

## Unresolved questions

1. **Does OpenAI serve the model at all?** Its docs mark Responses and Batch "Supported" but list
   zero rate limits at every tier, and its pricing page has no entry
   ([OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)). Artificial
   Analysis treats it as having no first-party API
   ([AA](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md)). A zero rate-limit table
   could equally be a documentation artifact. No captured source resolves this.
2. **Is there a binding "gpt-oss usage policy"?** The paper says the release is under Apache 2.0
   *and* that policy; the repository ships only Apache 2.0. `openai.com` returned HTTP 403 to this
   capture, no usage-policy page appears in `developers.openai.com/llms.txt`, and the model docs
   do not mention one ([paper](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md),
   [HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md),
   [OpenAI docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)). The legal
   position of a downstream user is therefore unresolved.
3. **131,072 or 128,000?** OpenAI and most hosts say 131,072; Bedrock says 128,000; Artificial
   Analysis says both 131k and 130k on one page. Whether this is rounding, reserved headroom, or a
   real tokenizer difference is unstated.
4. **Were the weights revised after 2025-08-26?** The HF repository's `lastModified` is
   2025-08-26T17:25:03Z; no changelog or card note explains it
   ([HF card](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)).
5. **Do the vendor benchmarks hold on host variants?** All vendor evals were at MXFP4; hosts serve
   int4, fp4, fp8, bf16 and fp16. No per-quantisation re-measurement is captured.
6. **How do the vendor numbers compare with independent ones?** They don't, in this evidence set:
   Artificial Analysis reports only a composite Index score (12) and no per-benchmark figures for
   this model, so no vendor claim has been independently re-run.

## Evidence status

Floor met. First-party: OpenAI's own model documentation
([docs](../../sources/openai.com/gpt-oss-120b-model-docs/2026-10-26.md)), the weights repository and
card ([HF](../../sources/huggingface.co/gpt-oss-120b-model-card/2026-10-26.md)), the OpenAI-authored
model card paper ([arXiv](../../sources/arxiv.org/gpt-oss-120b-2508-10925/2026-10-26.md)), and the
reference implementations
([repo README](../../sources/github.com/gpt-oss-repo-readme/2026-10-26.md)). Independent hosts:
[OpenRouter](../../sources/openrouter.ai/gpt-oss-120b/2026-10-26.md) (25 endpoints, prices,
quantisations) and [Amazon Bedrock](../../sources/aws.amazon.com/gpt-oss-120b-bedrock/2026-10-26.md)
(model ID, limits, API surface). Independent evaluation:
[Artificial Analysis](../../sources/artificialanalysis.ai/gpt-oss-120b/2026-10-26.md), composite
index and serving medians only.

All benchmark numbers on this page are OpenAI's own, run at MXFP4 with OpenAI harnesses. **No direct
tests were run for this page**, and no independent re-measurement of any vendor benchmark number was
captured. The out-of-window flag is a roster decision, not an evidence claim: the model is
2025-08-05, 82 days before the window start and roughly 14.7 months old at capture.

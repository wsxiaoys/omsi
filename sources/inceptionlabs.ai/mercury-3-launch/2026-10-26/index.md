# "Diffusion at Scale: Introducing Mercury 3" (Inception launch post)

- Origin: "Diffusion at Scale: Introducing Mercury 3", Inception Team, Inception,
  <https://www.inceptionlabs.ai/blog/introducing-mercury-3>. Artifact:
  `quality-vs-size.png` (the post's "Model Quality vs. Model Size" chart, downloaded from
  `https://framerusercontent.com/images/YO5OXn25zt3KJBJkUxO2kAwmS6o.png`).
- Evidence kind: first-party launch announcement (vendor claims; no independent measurement).
- Publication date: **2026-10-19** (the post's own byline, "Product · Oct 19, 2026").
- Capture date: 2026-10-26
- Relevant models: Mercury 3 (`mercury-3`); Mercury 1, Mercury 2, Mercury 2.5 as comparators.
- Capture type: rendered page text plus one image artifact. The post's benchmark evidence is a
  chart image, not a table.

## Verbatim

> Today we're introducing Mercury 3, the most capable diffusion-based LLM released to date.
> Across a range of benchmarks, Mercury 3 outperforms GPT-6 Luna and Claude Haiku 5.5, while
> running 4–8x faster at 1,000+ tokens per second.

> Mercury 3 demonstrates that text diffusion scales. It's more than 40x larger than Mercury 1 and
> is vastly more intelligent, but just as fast.

> **Quality:** On par or better than frontier speed-optimized models like GPT-6 Luna and Claude
> Haiku 5.5.
> **Speed:** 1,068 tokens per second on NVIDIA GPUs.
> **Context:** 1M tokens, up from 260K for Mercury 2.5
> **Price:** $0.20 per million input and $0.70 per million output tokens.
> At launch, Mercury 3 is 50% off at $0.10 per 1M input and $0.35 per 1M output. Cached tokens
> are 90% off the input price.

> We've scaled Mercury more than 40x in total parameters, and intelligence across a range of
> standard benchmarks has risen 3x from Mercury 1 (mini) to Mercury 3. The scaling laws that drove
> progress in autoregressive models hold for diffusion too.

> Mercury 3 is available today on the Inception API Platform and through OpenRouter, Baseten, and
> Vercel. It is OpenAI API compatible, so it drops into your existing stack with no rewrites.
> Enterprise deployments support dedicated capacity, autoscaling, compliance controls, and
> configurable retention.

## Benchmark evidence: a chart, not a table

The post publishes **no per-benchmark scores**. Its quantitative quality evidence is one
two-axis chart (artifact `quality-vs-size.png`), titled "Model Quality vs. Model Size / Five
Mercury generations, from M1 (mini) to M3":

- x-axis: "Total parameters, relative to Mercury 1 (Mini) (log scale)"; y-axis: "Model Quality*".
- Plotted points and their annotations: M1 (MINI) "~5× faster than Gemini 2.0 Flash Lite";
  M1 (SMALL) "~4× faster than Gemini 2.0 Flash Lite"; M2 (FEB 2026) "~10× faster than Claude
  Haiku 4.5"; M2.5 (SEP 2026) "~10× faster than GPT-5.6 Luna"; M3 (OCT 2026) "~8× faster than
  GPT-6 Luna".
- Footnote, verbatim: "Average of GDPval (Elo), SciCode, τ³-Banking, AA-Omniscience-Public
  (Accuracy), IFBench, SO Quality, AA-LCR v1.1, GPQA Diamond, Terminal-Bench v2.1, BrowseComp+,
  and DeepSeekQA (DSQA) @ 30."

The y-axis has no printed values at the data points; gridlines are labelled 10, 20, 30, 40, 50.
Reading positions off the image puts M3 near 50 on that composite, M2.5 near 36 and M2 near 31 —
**approximate chart readings, not published numbers**, and the composite is the vendor's own
mixture, so it is not comparable to any external index.

Note the internal tension in the footnote: the composite includes Terminal-Bench v2.1 while the
vendor's independent evaluators run Terminal-Bench 4.0, where Mercury 3 scores near zero (see
`../../vals.ai/mercury-3/2026-10-26.md`).

## Customer quotes carrying numbers

The post's only quantified performance claims outside the chart are attributed to early-access
customers, not to Inception:

> We ran Mercury 3 inside our production web-agent harness against frontier models, on 50 live
> Mind2Web navigation tasks. Mercury 3 completed 50% of them, significantly more than
> GPT-6.1-Sol. — Shuhao Zhang, Cofounder, TinyFish AI

> Mercury 3 delivered the best balance of speed and quality among the fast models we tested, with
> a median generation time of 0.9 seconds and a median end-to-end response time of 2.2 seconds.
> — Kuan Zou, Founder & CEO, Octen AI

Also announced in the same post: Mercury Voice (TTFT-oriented) and Mercury Decide (classification
model), i.e. Mercury 3 is positioned as the flagship of a three-model portfolio.

## Gaps

- No parameter count, no architecture detail beyond "diffusion-based" / "40x larger than
  Mercury 1", no tokenizer, no training-data description, no knowledge cutoff, no safety
  evaluation.
- No benchmark table and no harness disclosure, so none of the quality claims can be checked
  against a named evaluation setting.
- "1,068 tokens per second on NVIDIA GPUs" states no GPU, batch size, context length or prompt
  type.
- The post does not say whether Mercury 2.5 remains available; that is stated only on the
  marketing models page (`../mercury-model-family-page/2026-10-26.md`).

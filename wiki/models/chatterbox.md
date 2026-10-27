# Chatterbox

Chatterbox is Resemble AI's family of **MIT-licensed, open-weights text-to-speech models**, and the
roster's row 70 points at the original English model that started it. That model is **out of the
one-year window**: the repository was created on **2025-04-23**, the weights repository on
**2025-04-24**, the first commit is dated **2025-05-28**, and the vendor's product page was live by
**2025-05-29** — roughly five months before the window opens on 2025-10-26
([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md),
[weights card](../../sources/huggingface.co/chatterbox-model-card/2026-10-26.md),
[launch page](../../sources/resemble.ai/chatterbox-launch-page/2026-10-26.md)). It is retained as a
**specialist exception**: an open-weights zero-shot TTS model with a self-hostable MIT licence, which
none of the roster's other audio rows offer. No newer date is claimed for it.

The family, however, did not stop in 2025. Chatterbox **Turbo** (2025-12), **Nano** (2026-04),
**Flash** (2026-05) and **Multilingual v3** (2026-06) all fall inside the window
([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md),
[Multilingual v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md),
[Nano/Flash post](../../sources/resemble.ai/chatterbox-nano-and-flash/2026-10-26.md)). They are
documented here as family members because the roster has one row for them and the variants share a
licence, an architecture lineage and a package.

The whole family now carries a **vendor status label that matters more than any version number**.
Every Chatterbox page on Resemble AI's site opens with the same banner: "Chatterbox and our generative
voice models remain open and free to build on under Voice AI Research, but are no longer offered as
commercial paid products"
([model pages](../../sources/resemble.ai/chatterbox-model-pages/2026-10-26.md)). Chatterbox is an
**archived open-weights release**, not a vendor-supported product line.

## Identity

- **Canonical name:** Chatterbox. There is **no vendor model ID and no versioned API identifier** for
  the open weights — identity is carried by the Hugging Face repositories `ResembleAI/chatterbox`
  (English and multilingual checkpoints), `ResembleAI/chatterbox-turbo`, `ResembleAI/chatterbox-nano`
  and `ResembleAI/chatterbox-flash`, and by the PyPI package `chatterbox-tts`
  ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)).
- **Vendor:** Resemble AI (model lab and publisher).
- **Python entry points:** `ChatterboxTTS` (English), `ChatterboxMultilingualTTS(..., t3_model="v3"|"v2")`,
  `ChatterboxTurboTTS` with `nano=True` for Nano, and the separate `chatterbox-flash` package's
  `ChatterboxFlashTTS` ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md),
  [Nano/Flash cards](../../sources/huggingface.co/chatterbox-nano-and-flash-model-cards/2026-10-26.md)).
- **Aliases in the wild:** "Chatterbox TTS", "Chatterbox Multilingual", "Chatterbox Turbo", and — on
  the hosts — "ChatterboxHD" (fal) and "Chatterbox Pro" (Replicate), neither of which the vendor
  documents.

### Host endpoints

| Route | Endpoint | Listed | Notes |
| --- | --- | --- | --- |
| fal | `fal-ai/chatterbox/text-to-speech` | 2025-06-01 | English; $0.025 / 1k chars |
| fal | `fal-ai/chatterbox/speech-to-speech` | 2025-06-01 | voice conversion; $0.015 / min |
| fal | `fal-ai/chatterbox/text-to-speech/multilingual` | 2025-09-04 | 23 languages, 300-char cap |
| fal | `resemble-ai/chatterboxhd/text-to-speech`, `…/speech-to-speech` | 2025-06-02 | preset voices, 24/48 kHz, $0.04 / 1k chars |
| Replicate | `resemble-ai/chatterbox`, `…/chatterbox-multilingual` | 2025-06-11, 2025-09-03 | $0.025 / 1k chars |
| Replicate | `resemble-ai/chatterbox-turbo` | 2025-12-14 | 500-char cap, paralinguistic tags |
| Replicate | `resemble-ai/chatterbox-pro` | 2025-06-17 | preset voices + Resemble voice UUID, $0.04 / 1k chars |
| NVIDIA NIM | build.nvidia.com container | 2026-06-10 | Multilingual v3 only; TensorRT-LLM |

Sources: [fal](../../sources/fal.ai/chatterbox/2026-10-26.md),
[Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md),
[Multilingual v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md).

**The roster's discovery label is a namespace, not an endpoint.** `fal-ai/chatterbox` returns a bare
endpoint ID with no title, date or schema from fal's model API; every usable route carries a suffix
([fal](../../sources/fal.ai/chatterbox/2026-10-26.md)).

### Distinguishing the variants

| | Chatterbox (original) | Multilingual v2 | Multilingual v3 | Turbo | Nano | Flash |
| --- | --- | --- | --- | --- | --- | --- |
| Public since | 2025-05 (repo 2025-04) | 2025-09-04 | 2026-06-10 | 2025-12-02 (weights) | 2026-04-14 | 2026-05-28 |
| Parameters | 500M | 500M | 500M | 350M | 110M | ~520M block-diffusion decoder |
| Languages | English | 23 | 25 incl. 4 dialects (+6 packs) | English | English | English |
| Emotion control | `exaggeration` + CFG | `exaggeration` + CFG | `exaggeration` + CFG | **not supported** | **not supported** | not documented |
| Paralinguistic tags | no | no | no | yes (`[laugh]` …) | yes | not documented |
| Licence | MIT | MIT | MIT | MIT | MIT | MIT |

Sources: [repository](../../sources/github.com/chatterbox-repo/2026-10-26.md),
[v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md),
[Turbo page](../../sources/resemble.ai/chatterbox-turbo-launch-page/2026-10-26.md),
[Nano/Flash cards](../../sources/huggingface.co/chatterbox-nano-and-flash-model-cards/2026-10-26.md).

The two control surfaces are **mutually exclusive**, and that is a first-party code fact, not a
marketing reading: `tts_turbo.py` logs "CFG, min_p and exaggeration are not supported by the Turbo/Nano
version and will be ignored" when either is set, while `tts.py` implements exaggeration for the original
model ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)). A pipeline that depends on
emotion exaggeration cannot move to Turbo without changing its prompting strategy.

### Identity ambiguities that remain

1. **One Hugging Face repository holds three generations.** `ResembleAI/chatterbox` ships the original
   English checkpoint, the multilingual v2 checkpoint and the multilingual v3 checkpoint side by side,
   selected at runtime (`t3_model="v2"|"v3"`)
   ([weights card](../../sources/huggingface.co/chatterbox-model-card/2026-10-26.md)).
2. **Two fal namespaces, one product name.** `fal-ai/chatterbox/*` (open-model endpoints) and
   `resemble-ai/chatterboxhd/*` (preset voices, 48 kHz option, 1.6× the price) are different products
   with no documented relationship ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md)).
3. **"Pro" and "HD" are host inventions.** Replicate's `chatterbox-pro` and fal's `chatterboxhd` expose
   *different* preset voice libraries (Luna/Ember/Hem/Josh/Orion/Ken versus
   Aurora/Blade/Britney/Carl/Cliff/Richard/Rico/Siobhan/Vicky), and no captured vendor document names
   either product ([Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md),
   [fal](../../sources/fal.ai/chatterbox/2026-10-26.md)).
4. **Turbo's date has three values:** weights repository 2025-12-02, repository commit 2025-12-15,
   Replicate listing 2025-12-14, product page live by 2026-01-12 with December-2025 assets. Only the
   year-month is safe.

## Current assessment

**Chatterbox is an archived open-weights family: still free, still downloadable, no longer a commercial
Resemble AI product.** That is the vendor's own framing, in the banner on every Chatterbox page
([model pages](../../sources/resemble.ai/chatterbox-model-pages/2026-10-26.md)), and it is not a
deprecation notice for the weights — the same page states "You can use them in commercial products,
self-host, modify the weights, and ship to production — no royalties, no revenue share, no usage caps".
Neither host marks an endpoint deprecated: fal and Replicate both list their Chatterbox endpoints as
public ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md),
[Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md)).

Within the family, the original 500M English model is superseded rather than withdrawn. The repository
leads with Multilingual v3 and recommends Turbo "for low-latency English voice agents" and Nano "for the
most resource-constrained deployments"
([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)); the vendor's English pages now
present three tiers side by side — original, Multilingual, Turbo — with the original described only as
"the original" ([model pages](../../sources/resemble.ai/chatterbox-model-pages/2026-10-26.md)).

**It is a distinct model, not a repackaging.** Sizes differ (500M / 350M / 110M / ~520M), the control
surfaces differ (exaggeration versus paralinguistic tags), the languages differ (English versus 23–25),
and the decoders differ (10-step versus single-step distilled versus block-diffusion). The MIT licence
is constant across all of them.

**Where the family sits in-window:** Turbo (December 2025) is the earliest in-window member; Nano,
Flash and Multilingual v3 are 2026. All four are open-weights releases; none is a preview or waitlist
product, and all four are downloadable at capture.

**What the evidence does not support is a quality ranking.** Every comparison in the corpus is
vendor-run: a Podonos study reporting 63.75% preference over ElevenLabs for the original model, a
win-rate chart for Turbo with no printed numbers, and a CER table for Multilingual v3 that the vendor
itself calls an incomplete proxy. No independent benchmark, MOS study or arena result was captured.

## Documented capabilities

Everything in this section is vendor or host documentation. **No direct tests were run for this page.**

### Voice cloning

- **Zero-shot from a short reference clip, no fine-tuning.** The launch page advertises "Voice Cloning
  with 5 seconds of reference audio" ([launch page](../../sources/resemble.ai/chatterbox-launch-page/2026-10-26.md));
  the Nano/Flash post repeats "Voice cloning from a 5-second reference clip, no fine-tuning required"
  ([Nano/Flash post](../../sources/resemble.ai/chatterbox-nano-and-flash/2026-10-26.md)). The current
  FAQ widens it to "any 5–20 second reference clip of a voice you have permission to use", and the
  multilingual page asks for "10 seconds or more"
  ([model pages](../../sources/resemble.ai/chatterbox-model-pages/2026-10-26.md)).
- **API shape:** the reference is a URL or path — `audio_url` on fal, `audio_prompt` on Replicate's
  original model, `reference_audio` on Replicate's multilingual and Turbo models, `audio_prompt_path` in
  the library. Replicate's Turbo schema states the clip "Must be longer than 5 seconds"
  ([Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md)).
- **No custom-voice registry on the open model.** Cloning is per-request from a reference file; there is
  no voice ID to reuse. The hosted tiers are the opposite: fal's ChatterboxHD and Replicate's Pro both
  accept preset voice names, and Pro accepts a Resemble "uuid of the voice to use"
  ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md),
  [Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md)).

### Emotion and expressiveness control

- **Original, Multilingual v2 and v3:** an `exaggeration` scalar plus a classifier-free-guidance weight.
  Vendor defaults are `exaggeration=0.5`, `cfg=0.5`, with lower `cfg` (~0.3) recommended for fast
  speakers and higher `exaggeration` (~0.7+) for dramatic delivery
  ([weights card](../../sources/huggingface.co/chatterbox-model-card/2026-10-26.md)). The launch page
  calls it "the first open source model with emotion exaggeration control"
  ([launch page](../../sources/resemble.ai/chatterbox-launch-page/2026-10-26.md)).
- **Cross-language accent drift** is the documented failure mode: "Ensure that the reference clip
  matches the specified language tag. Otherwise, language transfer outputs may inherit the accent of
  the reference clip's language. To mitigate this, set `cfg_weight` to `0`"
  ([weights card](../../sources/huggingface.co/chatterbox-model-card/2026-10-26.md)).
- **Turbo and Nano drop both controls** in favour of inline paralinguistic tags — `[laugh]`, `[chuckle]`,
  `[sigh]`, `[cough]`, `[sniffle]`, `[groan]`, `[yawn]`, `[gasp]` depending on the host
  ([Turbo page](../../sources/resemble.ai/chatterbox-turbo-launch-page/2026-10-26.md),
  [Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md)).

### Languages

- **Original Chatterbox is English-only**; the multilingual checkpoints are a separate model in the same
  repository.
- **Multilingual v2: 23 languages** — ar, da, de, el, en, es, fi, fr, he, hi, it, ja, ko, ms, nl, no, pl,
  pt, ru, sv, sw, tr, zh ([weights card](../../sources/huggingface.co/chatterbox-model-card/2026-10-26.md)).
- **Multilingual v3: 25 entries "including 4 dialects and 6 tuned Language Pack models"**, but the list
  is *not* a superset: it adds Czech and Vietnamese, drops Greek, Malay and Swahili, and splits
  Portuguese and Spanish into dialect variants
  ([v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md)).
- **Two of v3's advertised languages are not production-ready by the vendor's own measurement** — see
  Limitations.
- The **Single Language Pack** adds six dedicated finetunes (Mandarin, LatAm Spanish, Brazilian
  Portuguese, Spain Spanish, Portugal Portuguese, Hindi), 500M each
  ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)).

### Output format and sample rate

- **24 kHz native.** `S3GEN_SR = 24000` and every class sets `self.sr = S3GEN_SR`; the library writes
  whatever the caller does with `torchaudio.save`
  ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)).
- **Hosts return WAV only** — fal's three open-model endpoints expose no format parameter, and the
  example output URL is a `.wav`
  ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md)). Replicate returns a file URI with no format
  or sample-rate field ([Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md)).
- **48 kHz is a hosted-tier extra, not a model capability.** fal's ChatterboxHD offers
  `high_quality_audio`: "If True, the generated audio will be upscaled to 48kHz […] If False, the
  generated audio will be 24kHz" ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md)).

### Watermarking

- **PerTh (Perceptual Threshold) watermark, applied to every generation by default**, in the open
  weights as well as the hosted tiers: "Every audio file generated by Chatterbox includes Resemble AI's
  Perth (Perceptual Threshold) Watermarker"
  ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)).
- **It cannot be switched off through the library API, and removal is against the vendor's terms.**
  All three classes build `perth.PerthImplicitWatermarker()` in `__init__` and call `apply_watermark`
  unconditionally at the end of `generate()`; no parameter or branch skips it
  ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)). No host exposes a watermark
  toggle, and the FAQ states that removing it "is explicitly against the intended use"
  ([model pages](../../sources/resemble.ai/chatterbox-model-pages/2026-10-26.md)).
- **Extraction is public:** `perth.PerthImplicitWatermarker().get_watermark(...)` returns `0.0` or
  `1.0`. The vendor says the watermark survives MP3/Opus compression, telephony codecs, editing,
  conversion, clipping and resampling, "detectable with near 100% accuracy on unmodified outputs"
  ([v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md)).
- **The vendor states the watermark's limits.** It carries a binary "generated by Chatterbox" signal
  only — "not a model-version signal or a tenant-attribution signal" — and "we have not yet published
  systematic robustness curves under adversarial conditions"
  ([v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md)). A related Resemble AI
  research post argues the opposite risk for detection: when synthetic speech is watermarked by default
  and real speech is not, a detector "can learn 'watermarked equals fake'" — a shortcut that lets
  unwatermarked fakes evade detection
  ([v3 post, related-resources block](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md)).

### Speech-to-speech and voice conversion

- Both hosts run a Chatterbox voice-conversion endpoint: fal `fal-ai/chatterbox/speech-to-speech`
  ($0.015 / min) and `resemble-ai/chatterboxhd/speech-to-speech` ($0.02 / min, preset target voices)
  ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md)). The repository ships "Easy voice conversion
  script" / `example_vc.py`
  ([weights card](../../sources/huggingface.co/chatterbox-model-card/2026-10-26.md)).

### Latency and throughput (vendor claims)

| Model | Claim | Conditions given |
| --- | --- | --- |
| Original | "~200ms" | none |
| Turbo | "75ms Latency", "6× faster than real-time on a GPU" | none |
| Nano | "10x realtime on GPU, 3x realtime on CPU using 8 threads" | thread count only |
| Multilingual v3 | TTFB "under 300ms", RTF "approximately 5" | single H100, unoptimized PyTorch |
| Flash | TTFP 103–119 ms, RTF 0.076–0.107 | single request, 50 utterances, 25 Hz |

Sources: [launch page](../../sources/resemble.ai/chatterbox-launch-page/2026-10-26.md),
[Turbo page](../../sources/resemble.ai/chatterbox-turbo-launch-page/2026-10-26.md),
[Nano/Flash post](../../sources/resemble.ai/chatterbox-nano-and-flash/2026-10-26.md),
[v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md),
[Flash card](../../sources/huggingface.co/chatterbox-nano-and-flash-model-cards/2026-10-26.md).

None of these is a measurement this knowledge base made, and only Flash's card states a hardware and
utterance protocol.

### Quality evidence (all vendor-run)

- **Original vs ElevenLabs:** "63.75% of evaluators preferred Chatterbox over ElevenLabs", Podonos,
  7–20 second clips, identical text, zero-shot. No rater count, date or language in the captured text
  ([launch page](../../sources/resemble.ai/chatterbox-launch-page/2026-10-26.md)).
- **Turbo vs ElevenLabs Turbo 2.5 / Cartesia Sonic 3 / VibeVoice 7B:** Podonos win-rate chart, no
  printed values ([Turbo page](../../sources/resemble.ai/chatterbox-turbo-launch-page/2026-10-26.md)).
- **Multilingual v3 CER** (whisper-large-v3, 100 samples per language): Italian and German under 0.20%,
  English 0.65%, Hebrew 0.93%, base Spanish 2.89%, base Portuguese 3.85%, Hindi/French/Polish/Arabic
  6–8%, Finnish 17.52%, Japanese 21.87%, Czech 32.21%, Korean 70.90%, Vietnamese 75.21%
  ([v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md)).
- **Flash on Seed-TTS test-en:** SIM-o 0.704 / WER 1.96 / UTMOS 4.09 for Flash (`α = 0`) against
  Chatterbox's autoregressive backbone at 0.685 / 2.20 / 4.10 — the only absolute benchmark table in
  the corpus ([Flash card](../../sources/huggingface.co/chatterbox-nano-and-flash-model-cards/2026-10-26.md)).

## Limitations and constraints

- **Out of window.** The original model predates the roster window by about five months; it is retained
  as an open-weights specialist, not as a current-window launch.
- **Input ceilings are host-specific and much lower than the library's.** fal's English endpoint caps
  `text` at 5,000 characters, fal's multilingual endpoint at **300**, Replicate's multilingual at
  **300**, Replicate's Turbo at **500**. The vendor publishes no ceiling for the library itself
  ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md),
  [Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md)).
- **No duration control, no SSML, no streaming endpoint documented** on either host; output length
  follows from input length.
- **Korean and Vietnamese are not usable commercially on v3 by the vendor's own advice**: "We recommend
  against using v3 for commercial deployments in either language […] until we have shipped an
  improvement" ([v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md)). Czech,
  Japanese and Finnish are "usable with caveats".
- **Emotion exaggeration is unavailable on Turbo and Nano**, and CFG/`min_p` are ignored there
  ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)) — even though the vendor's
  current Turbo page still advertises "emotion exaggeration control" for Turbo, copy-pasted from the
  family page ([model pages](../../sources/resemble.ai/chatterbox-model-pages/2026-10-26.md)). The code
  is the more specific claim, but the contradiction is live vendor text, not a stale archive.
- **Watermarking is not optional** in the library or on the hosts, and it is a binary flag with no
  model-version or tenant payload
  ([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md),
  [v3 post](../../sources/resemble.ai/chatterbox-multilingual-v3/2026-10-26.md)).
- **No consent or cloning policy was captured.** The model cards say only "Don't use this model to do
  bad things"; the current FAQ asks for "a voice you have permission to use" but describes no
  verification, prohibited-use list or takedown process
  ([model pages](../../sources/resemble.ai/chatterbox-model-pages/2026-10-26.md)).
- **The vendor claims 100% detection of its own watermark.** The multilingual page states "Resemble
  Detect identifies any Chatterbox-generated audio with 100% accuracy" — no test set, condition or date
  ([model pages](../../sources/resemble.ai/chatterbox-model-pages/2026-10-26.md)). Treat as marketing.
- **Host coverage is uneven.** fal has no Turbo, Nano, Flash or v3 endpoint; Replicate has no Nano,
  Flash or v3. Anyone needing an in-window variant through an API must self-host or use Replicate's
  Turbo.
- **Host schemas disagree with the vendor on the original model's tags.** fal documents angle-bracket
  emotion tags (`<laugh>`, `<chuckle>`, `<sigh>`, …) on the original endpoint, while the vendor
  attributes paralinguistic tags to Turbo/Nano and writes them in square brackets
  ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md),
  [repository](../../sources/github.com/chatterbox-repo/2026-10-26.md)). Whether the original model
  honours any tag is unresolved.
- **fal's default exaggeration is 0.25, the vendor's is 0.5**, and the guidance weight is named `cfg`,
  `cfg_scale` or `cfg_weight` depending on endpoint
  ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md),
  [Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md)). Porting a request between
  routes changes behaviour silently.
- **Adoption figures conflict.** Hugging Face's API reports 1,938,621 downloads (30-day) for
  `ResembleAI/chatterbox`; the vendor claims Chatterbox "crossed 13 million downloads on Hugging Face"
  ([weights card](../../sources/huggingface.co/chatterbox-model-card/2026-10-26.md),
  [Nano/Flash post](../../sources/resemble.ai/chatterbox-nano-and-flash/2026-10-26.md)). The two
  numbers measure different things and neither defines its window.

## Access, pricing, licensing

### Weights licence

**MIT**, stated in the repository (`license.spdx_id: MIT`) and in every model card, for all six
checkpoints including the Single Language Pack finetunes
([repository](../../sources/github.com/chatterbox-repo/2026-10-26.md),
[weights card](../../sources/huggingface.co/chatterbox-model-card/2026-10-26.md),
[Nano/Flash cards](../../sources/huggingface.co/chatterbox-nano-and-flash-model-cards/2026-10-26.md)).
That permits commercial use and fine-tuning without a vendor agreement. The vendor's own summary of the
offer is "✓ MIT License […] ✓ Full Control ✓ Free Forever"
([launch page](../../sources/resemble.ai/chatterbox-launch-page/2026-10-26.md)).

fal's `licenseType: "commercial"` on the same models is the host's assertion about use *through fal*,
not a second licence ([fal](../../sources/fal.ai/chatterbox/2026-10-26.md)).

### Billing basis and rates

**Per input character** for text-to-speech on every route; **per minute of audio** for
speech-to-speech.

| Route | Model | Price |
| --- | --- | --- |
| Self-host | any checkpoint | $0 (weights) |
| fal | `fal-ai/chatterbox/text-to-speech` | $0.025 / 1,000 characters |
| fal | `fal-ai/chatterbox/text-to-speech/multilingual` | $0.025 / 1,000 characters |
| fal | `fal-ai/chatterbox/speech-to-speech` | $0.015 / minute |
| fal | `resemble-ai/chatterboxhd/text-to-speech` | $0.04 / 1,000 characters |
| fal | `resemble-ai/chatterboxhd/speech-to-speech` | $0.02 / minute |
| Replicate | `chatterbox`, `chatterbox-turbo` | $0.025 / 1,000 input characters ("or 40,000 characters for $1") |
| Replicate | `chatterbox-multilingual` | $0.000975 / second only, no character rate listed |
| Replicate | `chatterbox-pro` | $0.04 / 1,000 input characters ("or 25,000 characters for $1") |

Sources: [fal](../../sources/fal.ai/chatterbox/2026-10-26.md),
[Replicate](../../sources/replicate.com/chatterbox-family/2026-10-26.md).

Three observations. **The open model is priced identically on both hosts** — $0.025 per 1,000
characters for the original and for Turbo on Replicate — which is unusual in this knowledge base and
suggests a host-standard rate rather than a model-specific one. **The hosted tier costs 1.6× the open
model on both hosts** ($0.04 versus $0.025), and is the only route with preset voices and a 48 kHz
option. **Replicate's second price field is unexplained**: every page carries a per-second figure
($0.000975/s, or $0.0001/s for Pro) with no statement of what it meters, and the multilingual page has
*only* that figure.

For scale, the vendor's launch-page comparison priced ElevenLabs at "$0.15/1000 chars", OpenAI TTS at
"$15/1M chars" and Azure TTS at "$24/1M chars" against Chatterbox's "Free Forever" self-hosting
([launch page](../../sources/resemble.ai/chatterbox-launch-page/2026-10-26.md)) — those competitor
prices are the vendor's, from May 2025, and are not current evidence for any other row in this wiki.

## Unresolved questions

1. **Which checkpoint is `fal-ai/chatterbox/text-to-speech` actually serving?** fal publishes no
   checkpoint identifier, and the endpoint predates Turbo, v3 and Flash. A request could be running the
   May 2025 weights or a later silent swap.
2. **What is "ChatterboxHD" / "Chatterbox Pro"?** Neither name appears in any vendor document captured.
   Both cost 1.6× the open model, expose preset voices the vendor does not list, and disagree with each
   other on which voices exist.
3. **Can the original model perform paralinguistic tags?** fal documents eight angle-bracket tags on the
   original endpoint; the vendor introduces tags as a Turbo feature. No source reconciles this and no
   test was run.
4. **Does host output still carry the PerTh watermark?** The library applies it unconditionally, and both
   hosts run the weights serverlessly, but neither host states it and no file was inspected.
5. **Is 300 characters the real multilingual limit?** Both hosts cap the multilingual endpoint at 300
   characters while the vendor documents none; a long-form multilingual pipeline sized against the
   library will not work through either API.
6. **How good is Chatterbox, independently?** Every comparison is vendor-run or vendor-commissioned, and
   the only absolute numbers (Flash's Seed-TTS table) are the vendor's own run.
7. **Which voice-cloning consent terms apply?** No policy page was captured for the open weights, and the
   hosted tiers accept a "Resemble voice uuid" without documenting who may clone whom.
8. **Should Turbo, Nano, Flash and Multilingual v3 have their own pages?** They differ in size,
   architecture, control surface, language coverage and host availability — the identity tests in the
   wiki skill would support splitting them. They are merged here because the roster has one row and no
   variant-specific evidence set beyond the vendor's own cards exists yet.

## Evidence status

**Evidence floor: met.** First-party sources: the `resemble-ai/chatterbox` repository README and
inference source (`tts.py`, `tts_turbo.py`, `mtl_tts.py`, `s3gen/const.py`); four Hugging Face model
cards (`chatterbox`, `chatterbox-turbo`, `chatterbox-nano`, `chatterbox-flash`); the archived Chatterbox
and Chatterbox Turbo product pages; and two Resemble AI research posts (Multilingual v3, 2026-06-10;
Nano and Flash, 2026-07-06). Independent host records: one fal record covering five endpoints with
schemas and prices, and one Replicate record covering four models with schemas, prices and run counts.
All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules; latency,
quality and preference numbers are the vendor's own or vendor-commissioned, and the only non-vendor
usage figure in the corpus is a host's own run count.

The next useful evidence would be a small reproducible test: the same 300- and 5,000-character script
through fal's English and multilingual endpoints and Replicate's original and Turbo models, comparing
speaker similarity to a fixed reference clip and checking tag adherence; a file-level PerTh extraction on
each host's output; an exaggeration sweep at 0.0/0.5/1.0 on the original model to see whether the
parameter moves prosody or only speaking rate; and a self-hosted run of Multilingual v3 in Korean and
Vietnamese to confirm the vendor's 70.90% / 75.21% CER warning.

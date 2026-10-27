# Stable Audio 3 (Stability AI)

A **text-to-instrumental-music and sound-effects** family from **Stability AI**: latent diffusion
transformers over a new "semantic-acoustic" autoencoder, generating **44.1 kHz stereo** at
**variable length up to 380 seconds (6:20)**. It launched **2026-05-20**, inside the roster's one-year
window, as four tiers — **Small SFX**, **Small**, **Medium**, **Large** — of which the first three have
**open weights** and only Large is API/enterprise-only
([launch post](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md),
[technical report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)).

The roster row's endpoint, `fal-ai/stable-audio-3/medium/text-to-audio`, is **Medium** — the open-weights
middle tier, not the flagship. That distinction is the single most important thing on this page: the
best Stable Audio 3 model (Large) is not obtainable at any host, and the model most people can run or
rent is Medium
([fal catalogue](../../sources/fal.ai/stable-audio-3/2026-10-26.md),
[launch post](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md)).

## Identity

- **Canonical name:** Stable Audio 3.0. The vendor writes "Stable Audio 3.0" in prose
  ([launch post](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md),
  [product page](../../sources/stability.ai/stable-audio-3-family-page/2026-10-26.md)); fal's title is
  "Stable Audio 3"; Artificial Analysis writes "Stable Audio 3 Large / Medium / Small"
  ([AA](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)). All three
  spellings identify the same family.
- **Vendor:** Stability AI Ltd. The paper's authors are Stability staff (Evans, Parker, Rice, Carr,
  Zukowski, Taylor, Pons); the Hugging Face org is `stabilityai`.
- **Tiers and sizes** — the paper's Table 1 is the only authoritative table
  ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)):

| Tier | Diffusion transformer | Max length | Weights | Music | SFX | H200 time |
| --- | --- | --- | --- | --- | --- | --- |
| Stable Audio 3.0 Small SFX | 459M | 120 s | **open** | — | ✓ | 0.44 s |
| Stable Audio 3.0 Small | 459M | 120 s | **open** | ✓ | — | 0.44 s |
| Stable Audio 3.0 Medium | 1.4B | 380 s | **open** | ✓ | ✓ | 1.31 s |
| Stable Audio 3.0 Large | 2.7B | 380 s | **closed** | ✓ | ✓ | 1.80 s |

  Each model also carries a SAME autoencoder (108M for small, 852M for medium/large); the paper's
  parameter counts exclude it. Hugging Face's metadata reports the whole bundle — 567,573,761 for small
  and 2,305,495,793 for medium — which is why "1.4B" and "2.3B" both appear in circulation for the same
  model ([HF metadata](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md)).
- **Model IDs:**

| Route | Identifier | Serves |
| --- | --- | --- |
| Stability API | `model: "stable-audio-3"` — one id, **no size** | text-to-audio, audio-to-audio, inpaint ([API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md)) |
| fal | `fal-ai/stable-audio-3/{medium,small/music,small/sfx}/…` + `…/base/…` | 24 inference endpoints + a LoRA trainer ([fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)) |
| Hugging Face | `stabilityai/stable-audio-3-{medium,small-music,small-sfx}` and `…-base` | 6 repos, 3 gated post-trained + 3 ungated base ([HF](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md)) |
| Artificial Analysis | "Stable Audio 3 Large / Medium / Small" | arena entries only, no endpoints ([AA](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)) |

- **Host naming differs from vendor naming.** The vendor's "Small" is two separate models; fal and
  Hugging Face both split them (`small/music`, `small/sfx`, `small-music`, `small-sfx`), so "Stable Audio
  3 Small" alone is ambiguous between a music model and an SFX model. fal also splits each tier into a
  post-trained endpoint and a `base` endpoint, a distinction the vendor makes only in the paper and on
  Hugging Face.
- **Dated milestones:**

| Date | Event | Source |
| --- | --- | --- |
| 2026-05-16 / 05-17 | Six Hugging Face repositories created (base repos first) | [HF](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md) |
| **2026-05-18** | Technical report submitted to arXiv (2605.17991) | [report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md) |
| **2026-05-20** | Vendor launch post; HF collection last updated 14:31Z; AA `releaseDate` | [launch](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md), [HF](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md) |
| 2026-05-22 | fal's first Stable Audio 3 endpoints (`date`) | [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md) |
| 2026-06-03 | fal `publishedAt` for all 24 inference endpoints | [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md) |
| 2026-06-11 | fal LoRA trainer endpoint | [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md) |
| 2026-08-18 | DAW plugin (macOS AU/VST3, beta) and expanded web app | [post](../../sources/stability.ai/stable-audio-3-daw-plugin/2026-10-26.md) |
| 2026-09-19 | Three Stable Audio 3 entries added to AA's music arena | [AA](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md) |

- **Predecessors, distinct models:** Stable Audio Open (up to 47 s), Stable Audio Open Small (11 s),
  Stable Audio 2.0 and Stable Audio 2.5 (the latter up to 190 s, released 2025-09-10)
  ([launch post](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md),
  [report §5.1](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md),
  [2.5/2.0 endpoint descriptions](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)). Stable Audio
  2.5 remains the vendor's own strongest baseline on some music metrics and is still sold at the same
  8-credit price ([pricing](../../sources/stability.ai/stable-audio-3-api-pricing/2026-10-26.md)).
- **No successor.** The launch post calls 3.0 "the new architecture on which we're already building our
  next generation of fully licensed audio models for professionals", but no 3.1/4.0 exists in any
  captured source.

### Unresolved identity: which tier does the API serve?

The launch post says **Large is "available via the Stability AI API and self-hosting for enterprise
deployments"**, and the product page calls the API route "our latest model"
([launch](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md),
[product page](../../sources/stability.ai/stable-audio-3-family-page/2026-10-26.md)). But the API
reference names no size at all — its only model id is `stable-audio-3`
([API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md)). Two details
make "Large" the likely reading without proving it: the API's `steps` cap of 8 matches the paper's
post-trained 8-step configuration (base checkpoints need ~50), and Artificial Analysis lists a distinct
"Stable Audio 3 Large" arena entry whose samples must have come from somewhere. **The page does not
assert it.** Anyone who needs certainty should treat the API's tier as undocumented.

## Current assessment

- **A genuinely new family, not a repackaging.** Different architecture (SAME autoencoder with 4096×
  downsampling, diffusion transformer, flow matching + distillation warmup + adversarial post-training),
  different parameter counts, a new technical report, a different duration ceiling (380 s versus 190 s
  for 2.5), and a different host schema. Nothing here is 2.5 under a new name
  ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md),
  [2.5 API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md)).
- **Current, public, actively developed.** All 25 fal endpoints are `status: "public"`,
  `deprecated: false`; the vendor shipped product surfaces in August 2026; the HF repos were touched
  as recently as 2026-10-06
  ([fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md),
  [post](../../sources/stability.ai/stable-audio-3-daw-plugin/2026-10-26.md),
  [HF](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md)). This is a current model,
  not a retained specialist.
- **But "state-of-the-art" is true only against the baselines the vendor chose.** The paper's comparison
  set is open-weight systems (ACE-Step 1.5, DiffRhythm 2, Woosh, TangoFlux, Stable Audio Open/2.5) — no
  Suno, Udio, Lyria, Eleven Music or Mureka
  ([report §5.1](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)). On Artificial
  Analysis's independent blind-vote instrumental board the family sits mid-table: **Large 1014 Elo
  (rank 8 of 19), Medium 996 (rank 14), Small 946 (rank 17)**, against Suno v6 at 1148 and Lyria 3 Pro
  at 1080, with the MiniMax Music 3.0 anchor fixed at 1000
  ([AA](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)).
- **Medium's advantage over Stable Audio 2.5 does not survive independent measurement.** The paper
  reports Medium better than 2.5 on musicality (MOS 4.15 vs 3.70) and roughly tied on FAD/CLAP; AA
  measures Medium at 995.88 against 2.5's 983.54, a 12-point gap with ±21-point intervals on both. The
  vendor says "substantially improve musicality"; the arena cannot distinguish them. Both readings are
  recorded here rather than reconciled
  ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)).
- **The practical verdict depends on which tier you can reach.** Medium at $0.0376 per generation for up
  to 6:20 of 44.1 kHz stereo, with open weights as a fallback, is a strong cost position for
  instrumental beds, stems and SFX. Large — the tier that leads the AA board — is unobtainable outside
  the vendor API or an enterprise contract.

## Documented capabilities

Vendor, paper and host documentation only. **No direct tests were run for this page.**

### What it generates

- **Instrumental music, stems, samples, sound effects, and edits of existing audio.** The vendor's scope
  statement is explicit: "Stable Audio 3.0 is designed primarily for instrumental work. It can sometimes
  create non-lexical vocal-like textures, but it is not intended to generate intelligible vocals"
  ([prompt guide](../../sources/stability.ai/stable-audio-3-prompt-guide/2026-10-26.md)). The paper
  frames the whole family as "instrumental music and sound effects generation"
  ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)).
- **No TTS, no lyrics, no voice cloning.** No captured source claims any of them; the prompt guide
  documents genre/instrument/mood/BPM prompting and stem prompting instead.
- **English only.** The API's error catalogue includes `422 invalid_language` with the example "English
  is the only supported language for this service", and the HF cards tag `language: ['en']`
  ([API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md),
  [HF](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md)).

### Duration and sample rate

- **Variable length at per-second granularity:** 1–380 s on Medium and Large, 1–120 s on Small and Small
  SFX. The vendor's own framing is that this is the architectural innovation — "variable-length
  generation … at per-second granularity", so "variable-length generations are key to avoid the cost of
  producing full-length generations for short sounds"
  ([launch](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md),
  [report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md),
  [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)).
- **44.1 kHz stereo**, from the paper's inference formula (`f_s = 44,100Hz`) and the API's "up to
  6-minute, 44.1 kHz stereo compositions"
  ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md),
  [API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md)).
- **Defaults differ by route:** the vendor API defaults to 190 s, fal to 30 s
  ([API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md),
  [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)).

### Output formats

- **Vendor API:** `mp3` (default) or `wav`, nothing else; raw bytes or base64 JSON
  ([API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md)).
- **fal:** `mp3` (default), `wav`, `flac`, `ogg`, `opus`, `m4a`, `aac`, plus a `bitrate` string
  (`192k` default, ignored for lossless)
  ([fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)).
- **Neither host documents a file-size ceiling or a channel-count field**; stereo comes from the paper
  and docs, not from any host schema.

### Controls

- **Prompt** — up to 10,000 characters on the vendor API (no documented limit on fal). The vendor and the
  paper both recommend the `TrackType:` prefix convention: `TrackType: Music, VocalType: Instrumental,`
  for music and `TrackType: SFX,` for sound effects, which the paper says "significantly improve
  generation quality" ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md),
  [prompt guide](../../sources/stability.ai/stable-audio-3-prompt-guide/2026-10-26.md)).
- **Steps** — 8 by default on post-trained checkpoints ("look good with the default 8 and gain little
  from going higher"), ~50 on base checkpoints. The vendor API caps at **4–8**; fal allows 1–100
  ([fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md),
  [API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md)).
- **CFG** — post-trained models "do not rely on CFG during inference"; fal's `guidance_scale` default of 1
  is documented as "Only effective on base (non-distilled) checkpoints", and base endpoints default it to
  7 ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md),
  [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)).
- **Negative prompt** — **fal only**; the vendor API has no such field
  ([fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md),
  [API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md)).
- **LLM prompt expansion** — fal only, `enable_prompt_expansion`, off by default.
- **Seed** — both routes, for reproducibility.

### Editing

- **Audio-to-audio** — vendor `strength` (0–1, default 1, "how much influence the `audio` parameter has");
  fal `init_noise_level` (0–1, default 0.9). Input must be 6–380 s, mp3 or wav
  ([API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md),
  [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)).
- **Inpainting** — vendor `mask_start`/`mask_end` (0–380); fal `mask_start_seconds`/`mask_end_seconds`.
  **One mask window per request on both hosts**, even though the paper documents "single-segment editing,
  multi-segment editing, and causal continuation" and evaluates a double-inpaint setting
  ([report §5.1](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md),
  [launch](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md)).
- **Continuation / outpainting** — **fal only**, as a separate `audio-outpainting` endpoint with
  `extend_seconds_before` / `extend_seconds_after` (0–380, after defaults to 30). The vendor API has no
  continuation endpoint; its inpaint can only reach the tail via `mask_end`
  ([fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md),
  [API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md)).

### Speed and hardware (developer-run)

- **H200, 8 ping-pong steps:** Medium generates 380 s in **1.31 s**, Large in **1.80 s**, Small 120 s in
  0.45 s; with TensorRT, Medium 380 s drops to 0.43 s
  ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)).
- **Peak VRAM:** Small 2.40 GB at 120 s; Medium 6.52 GB at 380 s; Large 9.04 GB. The paper names RTX
  3050 for Small and RTX 3060/4060/4070 for Medium as viable.
- **MacBook Pro M4:** Small, 120 s, CPU-only 5.92 s, CoreML 3.09 s.
- These are the vendor's own numbers on the vendor's own harness; no independent latency measurement was
  captured.

### Customisation

- **LoRA training is documented first-party** — "For the first time we're publishing documentation for
  LoRa training, alongside the weights for 3.0 Small and 3.0 Medium"
  ([launch](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md)). fal sells it as
  `fal-ai/stable-audio-3-trainer` at **$0.002 per step**, producing "compact LoRA weights"
  ([fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)). The vendor's licence FAQ permits LoRAs and
  permits training LoRAs on LoRA outputs
  ([licence FAQ](../../sources/stability.ai/stable-audio-community-license-faq/2026-10-26.md)).

### Vendor benchmark claims (labelled as developer-run)

- **Music (Song Describer Dataset, 120 s):** Medium FAD 0.107 / CLAP 0.390 / MOS OVL 4.20; Large 0.101 /
  0.393 / 3.95; Small 0.145 / 0.393 / 3.20; Stable Audio 2.5 0.106 / 0.395 / 3.90; ACE-Step 1.5
  xl-turbo 0.193 / 0.321 / 3.35
  ([report Table 3](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)).
- **Sound effects (BBC Sound Effects, 5 s):** Medium FAD 0.369 / CLAP 0.369; Large 0.358 / 0.370; Small
  SFX 0.395 / 0.351; Woosh Flow 0.580 / 0.277; Stable Audio Open 0.501 / 0.263.
- **The claim "state-of-the-art results for instrumental music and sounds" is scoped to open-weight
  baselines.** The paper's own text says the best music baseline is Stability's Stable Audio 2.5, i.e.
  the comparison is largely internal plus open-weight competitors.

## Limitations and constraints

- **Instrumental only.** No intelligible vocals, no lyrics, no singing, no TTS, no voice conversion
  ([prompt guide](../../sources/stability.ai/stable-audio-3-prompt-guide/2026-10-26.md)). The vendor
  frames this as design intent — "designed primarily for instrumental work … not intended to generate
  intelligible vocals" — not as moderation, and no captured source says whether a vocal prompt is
  refused. Artificial Analysis's vocal-music board contains no Stable Audio entry at all
  ([AA](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)).
- **Prompt adherence collapses at maximum length.** The paper's own duration sweep shows Medium's CLAP
  falling from 0.390 at 120 s to 0.275 at 380 s, and explains why: "long training examples are
  predominantly ambient or classical music … conditioning on long durations can bias the model toward
  generating ambient or classical music, omitting the provided text prompt"
  ([report Table 7](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)). The marketing
  claim of "up to six minutes" and the measured behaviour at six minutes are in tension.
- **Very short generations are also weaker.** At 20 s, Medium's FAD rises to 0.163 and Large's to 0.171,
  worse than at 120 s; the paper attributes it to short training clips being loops rather than songs. Best
  measured performance is at 120–190 s, not at either end of the range.
- **Small is materially worse and split in two.** The paper concedes Small "performs noticeably worse
  than the larger models" and that mixing SFX data "degrades musical coherence", hence the music/SFX
  split. AA agrees: Small is **50 Elo below Medium** (945.91 vs 995.88).
- **Large is not obtainable.** No weights, no host, no public price beyond the vendor API's flat 8
  credits; the enterprise route is the only self-host path
  ([launch](../../sources/stability.ai/stable-audio-3-launch/2026-10-26.md),
  [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)).
- **Weights are gated on Hugging Face.** All three post-trained repos are `gated: auto` and require
  accepting terms plus profile sharing; the three `-base` repos are ungated. Neither the model cards nor
  the licence files could be read without an account
  ([HF](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md)).
- **Community Licence ceiling.** Free use is limited to organisations under **USD $1M annual revenue**;
  above that an Enterprise licence is required, and indemnification exists only at Enterprise. The
  licence is "revocable if you violate its terms", and it forbids using the models or their outputs to
  build a competing foundation model
  ([licence FAQ](../../sources/stability.ai/stable-audio-community-license-faq/2026-10-26.md)).
- **Host gaps.** fal is the only general-purpose third-party host; Replicate hosts Stable Audio 2.5
  officially (115.2K runs) but has **no** Stable Audio 3 endpoint, not even a community repackage
  (checked 2026-10-26). The vendor's
  "will be available on ComfyUI" claim from the launch post is unverified.
- **Schema narrowness versus the paper.** The vendor API exposes no negative prompt, no prompt
  expansion, no outpaint, two output formats, and `steps` 4–8; the paper's base checkpoints need ~50
  steps and are therefore unreachable through the vendor API.
- **Moderation and refusal surface.** The vendor API returns `403 content_moderation` for flagged
  prompts ("You were not charged for this request") and `422 copyrighted_content` for flagged audio
  inputs. fal exposes `enable_safety_checker` (default **true**) and an NSFW check. Neither host
  documents what the classifiers cover or how they behave on instrumental audio
  ([API reference](../../sources/stability.ai/stable-audio-3-api-reference/2026-10-26.md),
  [fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md)).
- **Rate limit:** 150 requests per 10 seconds on the vendor API, with a 60-second timeout on breach.
- **No watermarking documented anywhere.** Twenty-six pages of technical report, the API reference, the
  prompt guide, the launch post, and both host schemas contain no watermark, C2PA, or provenance
  statement. That is an absence of evidence, not evidence of absence — but for a model sold on
  "commercially safe" training data it is a notable documentation gap
  ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)).

## Access, pricing, licensing

### Billing basis and price

Both live routes bill **flat per successful generation**, not per second, per minute, or per compute-hour.
That makes the price-per-minute strongly duration-dependent and rewards long generations.

| Route | Basis | Price | 30 s generation | 380 s generation |
| --- | --- | --- | --- | --- |
| Stability API `stable-audio-3` (text-to-audio, audio-to-audio, inpaint) | 8 credits per **successful generation**, flat | **$0.08** | $0.08 | $0.08 |
| fal `…/medium/text-to-audio` | per `audios` unit | **$0.0376** | $0.0376 | $0.0376 |
| fal `…/medium/base/text-to-audio` | per `audios` | $0.0479 | $0.0479 | $0.0479 |
| fal `…/small/music/text-to-audio` | per `audios` | $0.0217 | $0.0217 | — (120 s cap) |
| fal `…/small/sfx/text-to-audio` | per `audios` | $0.0206 | $0.0206 | — (120 s cap) |
| fal `…/medium/audio-to-audio` / `audio-inpainting` / `audio-outpainting` | per `audios` | $0.0417 / $0.0442 / $0.0446 | same | same |
| fal `fal-ai/stable-audio-3-trainer` | per **step** | $0.002 | — | — |
| Hugging Face weights | free, gated | $0 | — | — |

Sources: [vendor pricing](../../sources/stability.ai/stable-audio-3-api-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/stable-audio-3/2026-10-26.md),
[HF](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md). Two consequences worth
stating plainly: fal charges **$0.0376** where the vendor charges **$0.08** per generation — under half,
though whether the two routes run the same tier is unresolved (see above) — and a 10-second sound effect
costs the same as a six-minute track on both. No host publishes a per-second or per-minute rate, so
"price per minute of audio" is a derived figure: at fal's Medium price that is **$0.0059 per minute** for
a full 380 s track and **$0.23 per minute** for a 10 s clip.

**A pricing contradiction is unresolved:** `platform.stability.ai/llms.txt` lists **26 credits** for
`stable-audio/text-to-audio` (and 20 for Stable Audio 2.5) where the pricing page and the endpoint pages
say **8**
([pricing record](../../sources/stability.ai/stable-audio-3-api-pricing/2026-10-26.md)). This page uses
8 credits / $0.08 as the operative figure because it is stated twice, inline in the OpenAPI schema, but
the discrepancy is recorded rather than resolved.

### Weights licence

- **Small, Small SFX, Medium: Stability AI Community License** (`license_name:
  stable-audio-community`, `license: other`). Free for research, personal, and commercial use below
  USD $1M annual revenue; output ownership with the user; LoRA and fine-tune rights; no use to build a
  competing foundation model; revocable on breach
  ([licence FAQ](../../sources/stability.ai/stable-audio-community-license-faq/2026-10-26.md),
  [HF metadata](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md)).
- **Large: no licence is offered** because no weights are published; access is the vendor API or an
  enterprise self-hosting agreement with indemnification.
- **Two licence-text problems on the Hugging Face gate.** The "License Agreement" link in the gating
  prompt points at **`stabilityai/stable-audio-open-1.0`'s `LICENSE.md`** — a different model's licence —
  while the metadata names `stable-audio-community`. Both files are themselves gated, so the text that
  actually governs could not be read
  ([HF](../../sources/huggingface.co/stable-audio-3-collection/2026-10-26.md)).
- **Components under Gemma Terms.** The gate states the model "includes components redistributed under
  the Gemma Terms of Use" and binds the user to "the use restrictions in Section 3.2". No captured page
  identifies which components.
- **The "fully licensed data" claim has a provenance trail, unusually.** The paper counts the corpus:
  806,284 AudioSparx tracks plus 266,324 CC-0, 194,840 CC-BY and 11,454 CC-Sampling+ Freesound
  recordings, with music in the Freesound portion identified by a PANNs tagger and verified by "a trusted
  content detection company" before removal
  ([report](../../sources/arxiv.org/stable-audio-3-2605-17991/2026-10-26.md)). This is a vendor
  description of its own filtering, not an audit — but it is more than the "trained on licensed data"
  sentence that usually stands alone.
- **API outputs** are described in the vendor FAQ as usable commercially "as long as the output doesn't
  violate anyone's copyright", with a referral to the Terms of Service — a different and weaker statement
  than the Community Licence's output-ownership grant
  ([pricing/FAQ](../../sources/stability.ai/stable-audio-3-api-pricing/2026-10-26.md)).
- **fal's `licenseType: "commercial"`** describes fal's service, not the weights; the grant for
  self-hosting still comes from the Community Licence.

## Unresolved questions

1. **Which tier does the vendor API serve?** The launch post and product page point at Large; the API
   reference names no size. Confirming it would decide whether $0.08 per generation buys the AA
   top-8 model or the mid-table one.
2. **Is fal's "Medium post-trained" the same checkpoint as Hugging Face's
   `stable-audio-3-medium`?** Hugging Face lists fal as an inference provider for that repo, which is
   strong but indirect evidence; fal carries no revision field.
3. **Why 26 credits in `platform.stability.ai/llms.txt` and 8 everywhere else?** No date on either
   document.
4. **Does output carry a watermark or provenance signal?** Nothing in 26 pages of report or any host
   schema says either way.
5. **Which licence text governs the weights** — the `stable-audio-community` name in metadata, or the
   Stable Audio Open 1.0 `LICENSE.md` the gate links to? Both are behind the same gate.
6. **Which components fall under the Gemma Terms**, and do their use restrictions (Section 3.2) add
   constraints the Community Licence does not?
7. **Is multi-segment inpainting reachable?** The paper documents and evaluates double inpainting; no host
   schema exposes more than one mask window.
8. **Is 6 minutes or 6:20 the ceiling?** The API maximum is 380 s (6:20); the product page and launch
   summary round to "six minutes"; the launch body says "up to 6:20". Same number, three renderings.
9. **Why is there no Replicate endpoint**, when Stable Audio 2.5 is hosted there officially? No statement
   from either party.
10. **Did ComfyUI support ship?** The launch post promised it; no ComfyUI page was captured.
11. **What did AA sample per tier?** The three entries share a `releaseDate` and near-identical
    `appearances`; the board does not say which endpoint, duration, or prompt set produced them.
12. **How do the base checkpoints behave in practice?** They are ungated on Hugging Face and sold on fal
    at a higher price ($0.0479 vs $0.0376), but no captured source benchmarks them outside the paper's
    step-count tables.

## Evidence status

**Floor met.** First-party: the 2026-05-20 launch post, the product page, the licence page and Community
Licence FAQ, the API reference for three endpoints, the pricing page and FAQ, the prompt guide, the
2026-08-18 product post, the arXiv technical report (2605.17991, 26 pages), and Hugging Face repository
metadata for six repos. Independent host: fal, 25 endpoints with full schemas, dates, and billing units.
Independent measurement: Artificial Analysis's instrumental music arena (Elo, three tiers plus 2.5), and
a negative Replicate catalogue probe. All captured 2026-10-26.

**No direct tests have been run for this page.** Every capability statement is vendor or host
documentation; every quality number is either the developer's own FAD/CLAP/MOS or Artificial Analysis's
blind-preference Elo; every price is a published schedule. Where the developer and the independent
measurement disagree — Medium's advantage over 2.5 — both are recorded and neither is preferred.

The most valuable missing evidence is a licence reading: three model cards and two licence files sit
behind a Hugging Face gate that requires an account, so the recommended step counts, stated limitations,
and actual licence terms in those documents are unverified here. After that, four tests would settle the
open questions: a same-prompt, same-seed comparison of fal's Medium post-trained against the vendor API at
120 s and 380 s (to establish whether the two `stable-audio-3` routes are the same model and how far
prompt adherence really drops at length); a 380-second generation checked for a watermark and for the
ambient/classical bias the paper admits; a duration-versus-price check (does fal really charge $0.0376
for a 6-minute track?); and a multi-segment inpaint attempt on each host to see whether the paper's
capability is reachable at all.

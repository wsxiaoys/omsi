# ACE-Step (ACE-Step v1)

An **open-weights text-to-music** model from **ACE Studio and StepFun**, released **2025-05-06** as code
and weights, with a 3.5B-parameter diffusion transformer conditioned through Sana's Deep Compression
AutoEncoder and aligned with MERT/m-hubert (REPA)
([repo news + abstract](../../sources/github.com/ace-step-repo/2026-10-26.md),
[technical report](../../sources/arxiv.org/ace-step-2506-00045/2026-10-26.md)). It takes genre tags plus
lyrics — or a plain description — and returns a finished song of up to four minutes, with `[verse]`,
`[chorus]`, `[bridge]` structure tags and an `[inst]` sentinel for instrumental output. The roster row's
endpoint, `fal-ai/ace-step`, is this model, not its successor.

**Out-of-window flag.** ACE-Step v1 was open-sourced on **2025-05-06**, **173 days before** the
one-year window opens on 2025-10-26; the technical report followed on 2025-05-28 and fal listed the
endpoint on 2025-05-08
([repo](../../sources/github.com/ace-step-repo/2026-10-26.md),
[fal](../../sources/fal.ai/ace-step/2026-10-26.md)). The page is retained as a roster specialist
exception on that basis. The date is not re-stated as anything later: v1 is a May-2025 model that is
still callable, not a recent release. Its **successor ACE-Step 1.5 is in-window** (first weights
2026-01-23, vendor announcement 2026-01-28) and is documented below as a separate entity — see
**The successor**.

## Identity

- **Canonical name:** ACE-Step (the v1 model). The roster label "ACE-Step" matches the repository,
  paper title and Hugging Face card.
- **Weights repository / alias:** `ACE-Step/ACE-Step-v1-3.5B` — the only place the "3.5B" size appears
  ([model card](../../sources/huggingface.co/ace-step-v1-3.5b-model-card/2026-10-26.md)).
- **Host display names:** fal calls it **"ACE Step"** (two words, no hyphen)
  ([fal](../../sources/fal.ai/ace-step/2026-10-26.md)); Replicate's wrapper uses the description "A
  Step Towards Music Generation Foundation Model text2music"
  ([Replicate](../../sources/replicate.com/ace-step/2026-10-26.md)).
- **Vendor:** "ACE Studio and StepFun" — co-led, per both the v1 model card and the repository. The
  Hugging Face organization is `ACE-Step`; the v1.5 card writes the developer as `[ACE-STEP]`. Neither
  page states which entity holds the weights copyright.
- **Dated milestones, first-party:**

| Date | Event | Source |
| --- | --- | --- |
| 2025-04-28 | GitHub repo and HF weights repo created (pre-release) | [repo](../../sources/github.com/ace-step-repo/2026-10-26.md), [card](../../sources/huggingface.co/ace-step-v1-3.5b-model-card/2026-10-26.md) |
| **2025-05-06** | **Code and model open-sourced** | [repo news](../../sources/github.com/ace-step-repo/2026-10-26.md) |
| 2025-05-08 | fal lists `fal-ai/ace-step` | [fal](../../sources/fal.ai/ace-step/2026-10-26.md) |
| 2025-05-12 | RapMachine Chinese-rap LoRA released | [repo news](../../sources/github.com/ace-step-repo/2026-10-26.md) |
| 2025-05-14 | First Replicate wrapper version | [Replicate](../../sources/replicate.com/ace-step/2026-10-26.md) |
| 2025-05-22 | HF card last modified (no changes since) | [card](../../sources/huggingface.co/ace-step-v1-3.5b-model-card/2026-10-26.md) |
| 2025-05-28 | Technical report on arXiv | [paper](../../sources/arxiv.org/ace-step-2506-00045/2026-10-26.md) |
| 2026-01-28 | v1.5 announced; v1 repository effectively frozen (last push 2026-02-15) | [repo](../../sources/github.com/ace-step-repo/2026-10-26.md) |

- **Host endpoints:**

| Route | Endpoint | Serves |
| --- | --- | --- |
| fal | `fal-ai/ace-step` (`date` 2025-05-08) | tags + lyrics → song ([fal](../../sources/fal.ai/ace-step/2026-10-26.md)) |
| fal | `fal-ai/ace-step/prompt-to-audio` | natural-language prompt, explicit `instrumental` flag |
| fal | `fal-ai/ace-step/audio-to-audio` | `edit_mode: remix`, lyrics-only edit vs full remix |
| fal | `fal-ai/ace-step/audio-inpaint` / `audio-outpaint` | masked regeneration / extension by seconds |
| Replicate | `lucataco/ace-step` (community, not official) | tags + lyrics, 1–240 s, 60 steps default |
| Self-host | `pip`-installable repo, Gradio UI, ComfyUI node, local REST API (`uv run acestep-api` in v1.5) | the same weights |

- **Siblings inside the family:** `ACE-Step/ACE-Step-v1-chinese-rap-LoRA` ("RapMachine", Apache-2.0,
  2025-05-12), plus the Lyric2Vocal and Text2Samples LoRAs described in the README. StemGen and
  Singing2Accompaniment were announced as "Coming Soon" and their roadmap boxes remain unchecked.
- **Identity ambiguity that remains.** "ACE-Step" now names two materially different models. v1 is a
  3.5B DCAE+linear-transformer model, Apache-2.0, 4-minute ceiling, 19 claimed languages. v1.5 is an
  LM-planner + DiT hybrid, MIT, 10-minute ceiling, 50+ claimed languages, with its own repository,
  paper and HF organization entry. They meet the wiki's split criteria — both are obtainable (v1
  weights and endpoints are still live), the recommendation differs (v1.5 supersedes it on duration,
  language coverage, editing surfaces and licence), and each has checkpoint-specific documentation.
  This page keeps them together only because the roster assigns one row and the shared name is what a
  reader will search for; the successor section is written to be read on its own.

## Current assessment

- **A retained specialist, not a current model.** v1's own repository stopped moving when v1.5 shipped
  (last push 2026-02-15, no GitHub releases ever cut, HF card untouched since 2025-05-22), and its
  README now points readers at v1.5 and at `acemusic.ai`
  ([repo](../../sources/github.com/ace-step-repo/2026-10-26.md)). The fal endpoint is still
  `status: "public"`, `deprecated: false`, `updated_at` 2026-10-20, and Replicate's wrapper still
  serves 162.8K runs. Nothing is retired; nothing is being developed.
- **Not a repackaging of anything.** v1 and v1.5 differ in architecture, licence, duration ceiling,
  language claim and host schemas (v1 takes `tags` and exposes eight guidance/sampling knobs;
  v1.5 takes `prompt` plus `thinking`,
  `bpm`, `key_scale`, `time_signature`, `vocal_language`, `num_outputs`). They are two models.
- **The practical case for v1 is now narrow:** Apache-2.0 weights that the vendor says run in 8 GB of
  VRAM, four
  minutes of audio, deterministic with a seed. The case against it is the vendor's own limitation list
  — "Vocal Quality: Coarse vocal synthesis lacking nuance", "needs finer-grained musical parameter
  control", "gacha-style" variance
  ([card](../../sources/huggingface.co/ace-step-v1-3.5b-model-card/2026-10-26.md)).
- **Every quality claim on this page is a vendor claim.** No benchmark, MOS, listening test or
  independent review of ACE-Step v1 was captured. The only numbers are ACE Studio/StepFun's own speed
  table and the paper's "15× faster than LLM-based baselines".

## Documented capabilities

Vendor and host documentation only. **No direct tests were run for this page.**

### Inputs and controls

- **Tags.** `tags` is the required field on fal and Replicate — "Comma-separated list of genre tags to
  control the style", which "can also be supplied as `prompt`"
  ([fal](../../sources/fal.ai/ace-step/2026-10-26.md)). The README claims short tags, descriptive text
  and use-case scenarios all work.
- **Lyrics with structure tags.** `[verse]`, `[chorus]`, `[bridge]` are the documented control
  structures ([fal](../../sources/fal.ai/ace-step/2026-10-26.md),
  [Replicate](../../sources/replicate.com/ace-step/2026-10-26.md)). Neither host documents a character
  cap for v1 lyrics; v1.5's 4096-character limit is not inherited evidence.
- **Instrumental.** Two different mechanisms on two fal endpoints: the main endpoint treats
  `[inst]`/`[instrumental]` in the `lyrics` field as "no lyrics will be sung", while
  `prompt-to-audio` exposes a boolean `instrumental` (default `false`). Replicate documents the
  sentinel only.
- **Duration.** 5–240 s on fal (default 60), 1–240 s on Replicate, where `-1` means "a random duration
  between 30 and 240 seconds". The inference pipeline defaults to 60 s and clamps at 240 s.
- **Diffusion controls.** 27 steps default on fal (3–60) but **60 default on Replicate** (10–200);
  `scheduler` `euler`/`heun`; `guidance_type` `cfg`/`apg`/`cfg_star`; separate `tag_guidance_scale`
  and `lyric_guidance_scale`, `granularity_scale`, `guidance_interval`, `guidance_interval_decay`;
  `seed` for reproducibility. These are v1's distinguishing feature — a knob-per-aspect surface that
  v1.5 replaces with musical metadata (BPM, key, time signature).
- **Editing, as separate endpoints.** Audio-to-audio with `edit_mode: remix` ("Whether to edit the
  lyrics only or remix the audio"), inpainting with `start_time`/`end_time`/`variance`, and outpainting
  with `extend_before_duration`/`extend_after_duration`. The README describes the same operations as
  training-free inference-time techniques (variations, repainting, flow-edit lyric editing) and warns
  lyric edits "can only modify small segments … at once to avoid distortion".

### Output

- **fal:** a `File` object (`url`, `content_type`, `file_name`, `file_size`) plus an echo of `seed`,
  `tags`, `lyrics`. **No sample rate or container is documented by fal.**
- **Replicate:** a single URI string, no metadata echo, no format parameter.
- **Self-host:** the pipeline's `latents2audio(..., sample_rate=48000)` saves a **48 kHz WAV** by
  default, decoding from a codec whose internal rate is **44 100 Hz**
  ([repo source](../../sources/github.com/ace-step-repo/2026-10-26.md)). The 48 kHz figure is a code
  default, not a published spec, and no host confirms it applies to their output.
- **Speed (vendor-run):** RTF 27.27× on an A100 at 27 steps (2.20 s per minute of audio), 34.48× on a
  4090, 12.76× on a 3090, 2.27× on an M2 Max; "up to 4 minutes of music in just 20 seconds on an A100".

### Languages

The two first-party documents disagree on the count: the README says **19 languages** and names only
ten (English, Chinese, Russian, Spanish, Japanese, German, French, Portuguese, Italian, Korean), while
the model card's `language` field lists **17 codes** (en, zh, de, fr, es, it, pt, pl, tr, ru, cs, nl,
ar, ja, hu, ko, hi) — including seven the README never names, and two short of its total
([repo](../../sources/github.com/ace-step-repo/2026-10-26.md),
[card](../../sources/huggingface.co/ace-step-v1-3.5b-model-card/2026-10-26.md)). Neither document
identifies the nineteenth, and no host exposes a language parameter for v1: on fal and Replicate the
language is whatever the lyrics happen to be. The card's own caveat: "Performance varies by language
(top 10 languages perform best)".

## The successor: ACE-Step 1.5 (in-window)

Recorded here because a reader who searches "ACE-Step" today will land on it, and because the roster
row's endpoint does not serve it.

| | ACE-Step v1 | ACE-Step 1.5 |
| --- | --- | --- |
| First weights | 2025-04-28 repo / 2025-05-06 release | 2026-01-23 (`ACE-Step/Ace-Step1.5`) |
| Vendor announcement | 2025-05-06 | **2026-01-28** ([repo news](../../sources/github.com/ace-step-repo/2026-10-26.md)) |
| Paper | arXiv 2506.00045, 2025-05-28 | arXiv 2602.00744, 2026-01-31 |
| Architecture | DCAE + linear transformer, MERT/m-hubert REPA | Qwen3-derived 5Hz LM planner + DiT, intrinsic RL |
| Sizes | 3.5B | 2B DiT (`base`/`sft`/`turbo`) and XL 4B DiT (2026-04-02) |
| Licence | Apache-2.0 | **MIT** |
| Duration | 5–240 s | **10–600 s** |
| Languages | 19 claimed / 17 coded | "50+", none enumerated |
| fal endpoint | `fal-ai/ace-step` (public) | `fal-ai/ace-step-1.5` (**unlisted**, 2026-02-03) |
| Replicate | `lucataco/ace-step` (community) | `fishaudio/ace-step-1.5` (community) |

- **Dated evidence:** weights 2026-01-23, paper 2026-01-31, vendor news 2026-01-28, first code release
  `v0.1.0-beta.1` 2026-02-11, `v0.1.0` 2026-02-16, latest `v0.1.8` 2026-05-18, XL DiT 2026-04-02
  ([v1.5 repo](../../sources/github.com/ace-step-1-5-repo/2026-10-26.md),
  [card](../../sources/huggingface.co/ace-step-1-5-model-card/2026-10-26.md)). No single artifact fixes
  the release date; 2026-01-28 is the vendor's own statement and is used here.
- **Capability deltas:** `thinking` (LM chain-of-thought planning, on by default), explicit `bpm`
  (30–300), `key_scale`, `time_signature`, `vocal_language`, `num_outputs` up to 4 on fal and
  `batch_size` up to 8 in the vendor REST API, cover
  generation, repaint, track separation, vocal2BGM, LRC timestamps, LoRA training from ~8 songs.
- **Its own claims, unverified:** "Quality beyond most commercial music models (between Suno v4.5 and
  Suno v5)"; "1000+ instruments and styles"; "under 2 seconds per full song on an A100"; "less than 4GB
  of VRAM"; a "legally compliant dataset" of licensed, royalty-free and synthetic audio
  ([v1.5 repo](../../sources/github.com/ace-step-1-5-repo/2026-10-26.md),
  [card](../../sources/huggingface.co/ace-step-1-5-model-card/2026-10-26.md)).

## Limitations and constraints

- **Four minutes, enforced in code.** The pipeline clamps the extend path to 240 s and Replicate's
  schema tops out at `maximum: 240`; fal's is 5–240. The model card's limitation "Longer generations
  (>5 minutes) may lose structural coherence" therefore describes a regime no released route can reach
  — a contradiction to preserve, not to resolve
  ([card](../../sources/huggingface.co/ace-step-v1-3.5b-model-card/2026-10-26.md),
  [repo source](../../sources/github.com/ace-step-repo/2026-10-26.md)).
- **No musical metadata control.** v1 has no `bpm`, `key_scale` or `time_signature` parameter on any
  route; tempo and key can only be requested in the tag text. The card's own limitation list concedes
  "Control Granularity: Needs finer-grained musical parameter control".
- **Vocal quality is the vendor's own weakest claim:** "Coarse vocal synthesis lacking nuance".
- **Output variance is documented, not fixed.** "Highly sensitive to random seeds and input duration,
  leading to varied 'gacha-style' results"; a seed is exposed on both hosts, but the same seed is not
  guaranteed to reproduce across hosts because their defaults and step counts differ.
- **The two hosts disagree on defaults**, so "ACE-Step" is not one sound: 27 steps and
  `tag_guidance_scale` 5 on fal versus 60 steps and 0 on Replicate; Replicate also caps
  `guidance_scale` at 30 where fal allows 200.
- **No first-party paid API.** There is no vendor endpoint with a published price for v1; the vendor's
  own online product (`acemusic.ai`, "100% free") is promoted from the v1.5 repository, not the v1 one.
  The v1.5 README simultaneously warns that "the only official website … is our GitHub Pages site" and
  that domains like "ac\*\*p.com" are fake.
- **No official Replicate presence.** Every ACE-Step model on Replicate is `is_official_model: false`;
  `replicate.com/ace-step` returns 404. The Replicate route is an individual's packaging of the open
  weights with no vendor support, and the v1.5 wrapper there has no README at all.
- **No watermark documentation.** No ACE-Step page captured says generated audio is watermarked, and no
  page says it is not.
- **No content filter documented.** fal and Replicate expose no `safety_checker` parameter for these
  endpoints, unlike their music endpoints for other vendors.

## Access, pricing, licensing

### Billing basis and price

| Route | Basis | Price | 60 s generation |
| --- | --- | --- | --- |
| fal `fal-ai/ace-step` (+4 siblings) | per **second of generated audio** | **$0.0002/s** ("$1 … 5,000 seconds") | $0.012 |
| fal `fal-ai/ace-step-1.5` | per **output second** | **$0.0003/s**, **2× when `thinking` is on** (default on) | $0.036 (thinking, the default) / $0.018 |
| Replicate `lucataco/ace-step` | hardware time (L40S), approximated | **~$0.029/run** ("34 runs per $1") | ≈ $0.029, varies with steps |
| Replicate `fishaudio/ace-step-1.5` | hardware time (L40S), approximated | **~$0.028/run** ("35 runs per $1") | ≈ $0.028, varies with steps |

Sources: [fal v1](../../sources/fal.ai/ace-step/2026-10-26.md),
[fal v1.5](../../sources/fal.ai/ace-step-1-5/2026-10-26.md),
[Replicate v1](../../sources/replicate.com/ace-step/2026-10-26.md),
[Replicate v1.5](../../sources/replicate.com/ace-step-1-5/2026-10-26.md). Two consequences: fal's
per-second model makes cost linear in duration, so a 4-minute v1 track costs $0.048; and Replicate's
per-run approximation is duration-insensitive at the quoted figure, which means a 10-second clip and a
4-minute song are both "approximately $0.029" — the number is a compute-time estimate, not a tariff.
Neither host publishes a per-request floor or a minimum charge.

### Weights licence

- **v1: Apache-2.0**, declared in both the repository `LICENSE` and the model card metadata
  ([repo](../../sources/github.com/ace-step-repo/2026-10-26.md),
  [card](../../sources/huggingface.co/ace-step-v1-3.5b-model-card/2026-10-26.md)). Self-hosting,
  modification and commercial use are permitted by the licence text; the card adds non-binding
  "Ethical Considerations" ("Verify originality", "Disclose AI involvement") and an out-of-scope list
  that names "Generating copyrighted content without permission".
- **v1.5: MIT**, and the card goes further, claiming outputs are commercially usable because the
  training data is "legally compliant" ([card](../../sources/huggingface.co/ace-step-1-5-model-card/2026-10-26.md)).
  That is a **vendor claim about training data**, not a term of the MIT grant, and no dataset or
  provenance document is published to support it.
- **The host's licence field is the host's assertion.** fal marks all six endpoints
  `licenseType: "commercial"`; that describes fal's service, while the grant for the weights
  themselves comes from Apache-2.0 (v1) or MIT (v1.5).
- **v1's card is silent on training data.** Unlike v1.5, it says nothing about where the music came
  from — a real gap for anyone weighing the output rights.

## Unresolved questions

1. **Which model does "ACE-Step" mean in the roster's own terms?** The label plus `fal-ai/ace-step`
   points at v1 (2025-05-08), but the vendor's current model is 1.5 and fal also serves it — unlisted —
   at `fal-ai/ace-step-1.5`. A refresh of the row would change the canonical date by eight months.
2. **Why is `fal-ai/ace-step-1.5` unlisted?** It has a live schema and price but is absent from fal's
   catalogue search and returns no metadata from `api.fal.ai/v1/models`. No host statement explains it.
3. **19 languages or 17?** The README and the card disagree and neither enumerates the full set.
4. **What sample rate and container do the hosts actually return?** The self-host default is 48 kHz WAV
   from a 44.1 kHz codec; fal documents neither field and Replicate's v1 wrapper has no format input.
5. **Does v1 output carry a watermark?** Nothing says yes or no.
6. **Where does the ">5 minutes" caveat come from?** It is on the v1 card and on Replicate's copy of
   that card, is absent from v1.5's materials, and contradicts every v1 route's 240-second cap.
7. **Which checkpoint does each host run?** fal's v1 endpoints carry no revision field; Replicate's
   wrapper names none; the v1.5 endpoints do not say whether they run turbo, base or XL.
8. **Do the two fal v1 edit endpoints work as described?** The audio-to-audio schema reuses the
   outpaint field description ("URL of the audio file to be outpainted") and has no `duration` field;
   nothing in the corpus tests them.
9. **What is the real cost of a long Replicate run?** The page quotes a single approximate per-run
   figure for a model whose duration range spans 1–240 s.
10. **Is the "legally compliant dataset" claim checkable?** v1.5's card asserts it; no dataset card,
    licence inventory or provenance record is published.

## Evidence status

Evidence floor: **met.** First-party: the v1 repository (README, licence, news list, inference
pipeline and codec source), the v1.5 repository (README, model zoo, REST API parameter tables,
inference guide, 13 releases), the v1 and v1.5 Hugging Face cards, and the two arXiv technical reports.
Independent hosts: fal (five v1 endpoints with full OpenAPI schemas and price strings, plus the
unlisted v1.5 endpoint) and Replicate (`lucataco/ace-step` page, README, schema and price, plus the
search index and the `fishaudio/ace-step-1.5` wrapper). All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are four published schedules;
speed figures are the vendor's own RTF table; and the one place where a vendor contradicts itself —
song-length caveat versus 240-second ceiling — is recorded rather than resolved.

The next useful evidence would be a small reproducible set against named endpoints and dates: the same
tags and lyrics through `fal-ai/ace-step` (27 steps) and `lucataco/ace-step` (60 steps) to quantify how
much the default divergence changes the output; a 4-minute and a 5-minute request on each route to see
which ceiling actually bites; a seed-reproducibility check across the two hosts; an instrumental
request via the `[inst]` sentinel and via `prompt-to-audio`'s `instrumental` flag on the same prompt; a
`file`-level sample-rate and container check on returned audio; and the same prompt through
`fal-ai/ace-step-1.5` to see whether the successor's 10-minute ceiling and LM planner justify replacing
v1 at 1.5–3× the per-second price.

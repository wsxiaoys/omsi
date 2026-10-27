# Dia (Dia-1.6B, Nari Labs)

Dia is Nari Labs' 1.6-billion-parameter **open-weights text-to-dialogue TTS model**: it takes a
two-speaker transcript marked with `[S1]` / `[S2]` and generates the conversation in one pass, with
inline non-verbal tags and optional audio conditioning for voice cloning
([model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md),
[repository](../../sources/github.com/dia-repo/2026-10-26.md)).

**Out-of-window specialist exception.** Dia predates the roster's one-year window: the GitHub
repository was created **2025-04-19**, the Hub weights **2025-04-20**, and fal's endpoint went
public **2025-04-22** — roughly six months before the 2025-10-26 cutoff. No later date is invented
here; the row is retained as a specialist, not as a current launch
([repository](../../sources/github.com/dia-repo/2026-10-26.md),
[Hub metadata](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md),
[fal](../../sources/fal.ai/dia-tts/2026-10-26.md)).

The roster label "Dia TTS" is fal's endpoint title, not a model name. The model is **Dia-1.6B**;
fal's own README calls it "1.6 billion parameter model by Nari Labs"
([fal](../../sources/fal.ai/dia-tts/2026-10-26.md)).

## Identity

- **Canonical name:** Dia. **Checkpoints:** `nari-labs/Dia-1.6B` (April 2025) and
  `nari-labs/Dia-1.6B-0626` (June 2025). Both are 1,611,160,576 F32 parameters with an identical
  `config.json` architecture ([model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md)).
- **Vendor / developer:** Nari Labs — the repository describes the team as "1 full-time and 1
  part-time research-engineers" ([repository](../../sources/github.com/dia-repo/2026-10-26.md)).
- **Aliases seen in the wild:** "Dia TTS" (fal), "Dia 1.6B by Nari Labs" (Replicate), "Dia-1.6B".
- **No dedicated paper.** The Hub page attaches SoundStorm's paper (arXiv 2305.09636, 2023) and the
  card carries the tag `arxiv:2305.09636`, but the repository names SoundStorm only as an
  inspiration alongside Parakeet and Descript Audio Codec. Citing that arXiv ID as Dia's paper
  would be wrong ([model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md)).
- **Host endpoints.** There is no first-party hosted Dia API: Nari Labs' paid APIs are Qwen3-based
  TTS/ASR, and Dia appears on the vendor site only as "our dialogue TTS model series"
  ([vendor site](../../sources/nari-labs.com/dia-open-source-series/2026-10-26.md)).

| Route | Endpoint | Hosting | Notes |
| --- | --- | --- | --- |
| fal | `fal-ai/dia-tts` | serverless, fal-run | `text` in, `audio` (MP3) out |
| fal | `fal-ai/dia-tts/voice-clone` | serverless, fal-run | labelled voice cloning, but its schema also exposes only `text` |
| Replicate | `zsxkib/dia` | community Cog, L40S | `audio_prompt`, `seed`, sampling controls exposed |
| Self-host | `nari-labs/Dia-1.6B-0626` | Apache 2.0 weights | ~4.4 GB VRAM at bf16 |

Sources: [fal](../../sources/fal.ai/dia-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/zsxkib-dia/2026-10-26.md),
[repository](../../sources/github.com/dia-repo/2026-10-26.md).

### Distinguishing Dia 1.6B from Dia2

Dia2 is a **different model family**, not a checkpoint of this one: separate repository
(`nari-labs/dia2`, created 2025-11-17), separate package, checkpoints of **1B and 2B** parameters,
and a different codec (Kyutai Mimi, ~12.5 Hz) instead of Dia's Descript Audio Codec at 86 tokens
per second. Dia2's design goal is *streaming* generation with a **2-minute** ceiling; Dia 1.6B
generates a complete utterance in one pass under a ~35-second token budget
([Dia2 repository](../../sources/github.com/dia2-repo/2026-10-26.md),
[repository](../../sources/github.com/dia-repo/2026-10-26.md)).

Dia2's weights appeared on the Hub on 2025-11-15, the repository on 2025-11-17, and the Dia README
announced it on 2025-11-19 — **inside** the roster window. That does not move this page's date:
the roster row names fal `fal-ai/dia-tts`, and the only Dia endpoint fal serves is the 1.6B model.
Dia2 has no fal or Replicate listing at capture, so a Dia2 page would need its own evidence and its
own row ([Dia2 repository](../../sources/github.com/dia2-repo/2026-10-26.md)).

### Checkpoint history, not a split

`Dia-1.6B-0626` is the same entity re-released: PR #243 (2025-06-27) says "updated weights",
"transformers", "new logit controls", "cfg filter", "some bug fixes", and the card diff adds only a
Transformers usage section. Nothing published states a quality delta, and neither host names the
checkpoint it runs. The Hub keeps both repos up; the README and every example now point at
`Dia-1.6B-0626` ([model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md),
[repository](../../sources/github.com/dia-repo/2026-10-26.md)).

## Current assessment

**A retained specialist, not a current flagship.** Evidence for that reading:

- fal still lists both endpoints `status: "public"`, `deprecated: false`, `removed: false`, with
  `licenseType: "commercial"` and an active H100 deployment — but the catalogue date is still
  2025-04-22 and no model card, changelog, or "v2" of Dia 1.6B has appeared since the June 2025
  checkpoint ([fal](../../sources/fal.ai/dia-tts/2026-10-26.md)).
- The repository's last code change was 2025-07-06; the only later commit is the 2025-11-19 pointer
  to Dia2 ([repository](../../sources/github.com/dia-repo/2026-10-26.md)).
- Nari Labs' commercial site sells Qwen3-TTS instead and lists Dia only as open source
  ([vendor site](../../sources/nari-labs.com/dia-open-source-series/2026-10-26.md)).

What Dia still uniquely offers in this knowledge base is **two-speaker dialogue from a single
transcript with inline non-verbals**, self-hostable under Apache 2.0 in ~4.4 GB of VRAM. What it
does not offer is any independent quality evidence: the model card's comparison is a listening demo
against ElevenLabs Studio and Sesame CSM-1B on an external page, and no MOS, WER, speaker-similarity
score, or third-party benchmark was captured for Dia
([model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md)).

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run for this page.

### Dialogue and multi-speaker support

Exactly **two speakers**, tagged `[S1]` and `[S2]`. The guidance is prescriptive:

> Always begin input text with `[S1]`, and always alternate between `[S1]` and `[S2]`
> (i.e. `[S1]`... `[S1]`... is not good)

> Put `[S1]` or `[S2]` (the second-to-last speaker's tag) at the end of the audio to improve audio
> quality at the end

This is a two-voice format, not an arbitrary N-speaker script engine — a materially narrower
constraint than hosted dialogue APIs that accept up to ten voice IDs (see [Eleven v4](eleven-v4.md))
([repository](../../sources/github.com/dia-repo/2026-10-26.md),
[fal](../../sources/fal.ai/dia-tts/2026-10-26.md)).

### Non-verbal tags

Parenthesised tags are documented as recognised: `(laughs)`, `(clears throat)`, `(sighs)`,
`(gasps)`, `(coughs)`, `(singing)`, `(sings)`, `(mumbles)`, `(beep)`, `(groans)`, `(sniffs)`,
`(claps)`, `(screams)`, `(inhales)`, `(exhales)`, `(applause)`, `(burps)`, `(humming)`, `(sneezes)`,
`(chuckle)`, `(whistles)`. The card warns that tags outside the list "will be recognized, but might
result in unexpected output" and that overuse "may cause weird artifacts"
([repository](../../sources/github.com/dia-repo/2026-10-26.md)). fal's README additionally suggests
`(whispers)` and `(excited)`, which are **not** on Nari Labs' list — a host-side embellishment
([fal](../../sources/fal.ai/dia-tts/2026-10-26.md)).

### Voice cloning

In-context conditioning, not a trained clone: the reference audio's transcript is prepended to the
target script and the waveform is passed as `audio_prompt`; only the new text is returned. The
reference should be **5–10 seconds**, and its transcript must use the `[S1]` / `[S2]` convention
([repository](../../sources/github.com/dia-repo/2026-10-26.md),
[model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md)).

> The model was not fine-tuned on a specific voice. Hence, you will get different voices every time
> you run the model. You can keep speaker consistency by either adding an audio prompt, or fixing
> the seed.

Host coverage of cloning is uneven. Replicate exposes `audio_prompt` (accepting `.wav`, `.mp3`,
`.flac`) plus `seed` ([Replicate](../../sources/replicate.com/zsxkib-dia/2026-10-26.md)). fal
advertises cloning on both endpoints and ships a dedicated `voice-clone` route, but **neither fal
schema has a field for reference audio** — see Limitations.

### Languages

English only, stated identically in three places: "The model only supports English generation at
the moment" on both Hub cards, the Hub language tag `en`, and Replicate's "English Only" limitation
([model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md),
[Replicate](../../sources/replicate.com/zsxkib-dia/2026-10-26.md)). No language list, no
code-switching claim, no multilingual variant of Dia 1.6B exists. Dia2 is also English-only.

### Output format, sample rate and duration

| Property | Value | Source |
| --- | --- | --- |
| Sample rate | 44,100 Hz (`DEFAULT_SAMPLE_RATE = 44100`; card snippet writes with 44100) | [repository](../../sources/github.com/dia-repo/2026-10-26.md) |
| Codec / token rate | Descript Audio Codec, 9 codebooks, 86 tokens ≈ 1 s of audio | [repository](../../sources/github.com/dia-repo/2026-10-26.md) |
| Default token budget | `max_tokens = 3072` ≈ **35.7 s** of audio per generation | [repository](../../sources/github.com/dia-repo/2026-10-26.md) |
| Recommended length | 5–20 s of audio per request ("under 5s… will sound unnatural", "over 20s… will make the speech unnaturally fast") | [repository](../../sources/github.com/dia-repo/2026-10-26.md) |
| fal output | "Format: MP3"; base endpoint example URL ends `.mp3`, voice-clone example ends `.wav` | [fal](../../sources/fal.ai/dia-tts/2026-10-26.md) |
| Replicate output | temporary `.wav` | [Replicate](../../sources/replicate.com/zsxkib-dia/2026-10-26.md) |

fal publishes no sample rate or bitrate; the 44.1 kHz figure is the model's own output rate, and no
source states whether fal re-encodes.

### Inference cost and hardware (self-host)

RTX 4090 realtime factors from the repository: bfloat16 ×2.1 with `torch.compile` (×1.5 without,
~4.4 GB VRAM), float16 ×2.2 (×1.3, ~4.4 GB), float32 ×1 (×0.9, ~7.9 GB). On an A4000 the card
quotes ~40 tokens/s. The card also says "CPU support is to be added soon", yet the repository ships
`example/simple-cpu.py` and `example/simple-mac.py`
([repository](../../sources/github.com/dia-repo/2026-10-26.md),
[model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md)).

## Limitations and constraints

- **~35-second ceiling per generation.** 3072 audio tokens at 86 tokens/second, and the audio
  prompt is prefilled into that same budget (`max_generation_length=max_tokens` is set before the
  prompt prefill), so a long reference clip eats into the output length. fal publishes no
  `maxLength` and no duration cap, so what fal does with a 2,000-word script is undocumented
  ([repository](../../sources/github.com/dia-repo/2026-10-26.md),
  [fal](../../sources/fal.ai/dia-tts/2026-10-26.md)).
- **Two speakers only**, with mandatory alternation.
- **English only.**
- **No fixed voices.** Without an audio prompt or a fixed seed, "you will get different voices every
  time you run the model" — there is no voice library, and fal exposes no seed, so fal output is
  not reproducible run-to-run ([repository](../../sources/github.com/dia-repo/2026-10-26.md),
  [fal](../../sources/fal.ai/dia-tts/2026-10-26.md)).
- **fal cannot clone, as documented.** `fal-ai/dia-tts` takes only `text`; `fal-ai/dia-tts/voice-clone`
  is described as cloning "from a sample audio" but its OpenAPI input and rendered form also expose
  only `text`. Either the schema is incomplete or the endpoint does not do what its name and
  description say — no source resolves this
  ([fal](../../sources/fal.ai/dia-tts/2026-10-26.md)).
- **No watermarking or provenance mechanism is documented anywhere** — not in the repository
  (`model.py` contains no "watermark" string), not on either Hub card, not on fal or Replicate.
  Absence of documentation is not proof of absence of a detector; it does mean a Dia file carries
  no advertised, checkable marker, unlike ElevenLabs' watermarked output.
- **Licence terms and use restrictions are in two different places.** The weights and code are
  Apache 2.0 (`LICENSE` is the unmodified Apache text), while the README adds "strictly forbidden"
  uses — identity misuse, deceptive content, illegal or malicious use. Those prohibitions are a
  request in the README, not a condition of the Apache grant
  ([repository](../../sources/github.com/dia-repo/2026-10-26.md)).
- **Host licence fields are the host's assertion.** fal's `licenseType: "commercial"` and the
  "Commercial use" badge describe use through fal, not a Nari Labs licence grant.
- **Replicate is unofficial.** `replicate:is_official` is `false`; the listing is a community Cog
  whose README pins `nari-labs/Dia-1.6B` while its latest version dates to 2025-07-15
  ([Replicate](../../sources/replicate.com/zsxkib-dia/2026-10-26.md)).
- **No safety filtering or refusal behaviour is documented** on any route; the only guardrail is
  the README disclaimer.
- **No independent quality evidence.** No benchmark, arena result, MOS, WER or preference study was
  captured.

## Access, pricing, licensing

### Billing basis

| Route | Price | Basis | Notes |
| --- | --- | --- | --- |
| fal `fal-ai/dia-tts` | $0.04 / 1,000 characters | per character (`billing_unit: "1000 characters"`) | H100, regions eu-north, eu-west, us-west, us-central, us-east |
| fal `fal-ai/dia-tts/voice-clone` | $0.04 / 1,000 characters | same | same |
| Replicate `zsxkib/dia` | $0.000975 / second of GPU time (p50 $0.030/run, ~31 s) | per GPU-second on L40S | community model |
| Self-host | $0 | Apache 2.0 weights | ~4.4 GB VRAM at bf16 |

fal is the only route with a published per-character rate, and it bills the input text, not the
audio produced — the same basis ElevenLabs uses. Replicate bills wall-clock GPU time, so cost scales
with how long generation takes rather than with script length
([fal](../../sources/fal.ai/dia-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/zsxkib-dia/2026-10-26.md)).

A 1,000-character dialogue — an editorial estimate of roughly a minute of speech at normal pace,
so two to three generations under the 35 s ceiling — costs $0.04 on fal. Self-hosting removes the per-character cost entirely and is the only
route that exposes every control the model has.

### Licensing

- **Weights and code: Apache 2.0.** Both Hub repos carry `license: apache-2.0`, the GitHub repo
  reports the same, and Replicate repeats "The original Dia model and code are licensed under the
  Apache License 2.0" ([model card](../../sources/huggingface.co/dia-1.6b-model-card/2026-10-26.md),
  [repository](../../sources/github.com/dia-repo/2026-10-26.md)).
- **Commercial use is permitted by the licence**, subject to the README's forbidden-use list and to
  each host's own terms.
- **Third-party codec.** Output decoding depends on the Descript Audio Codec, whose own licence
  terms this page did not capture; Dia2's repository is explicit that "All third-party assets
  (Kyutai Mimi codec, etc.) retain their original licenses", but Dia's repository makes no
  equivalent statement ([Dia2 repository](../../sources/github.com/dia2-repo/2026-10-26.md)).
- **No voice-cloning consent policy exists.** Nothing on the card, repository, or hosts describes
  consent verification for cloned reference audio beyond the README's "Do not produce audio
  resembling real individuals without permission".

## Unresolved questions

1. **Which checkpoint does each host run?** fal says "1.6 billion parameter model by Nari Labs";
   Replicate's README says `nari-labs/Dia-1.6B` but its version postdates the 0626 weights. Neither
   names a revision, and fal exposes no way to ask
   ([fal](../../sources/fal.ai/dia-tts/2026-10-26.md),
   [Replicate](../../sources/replicate.com/zsxkib-dia/2026-10-26.md)).
2. **Why does fal's voice-clone endpoint have no audio input?** The page promises cloning from a
   sample; the schema has one `text` field. Undocumented and untested here.
3. **What happens above ~35 s on fal?** Truncation, speed-up, or an error — the model's token budget
   and fal's silence leave this open.
4. **Is Dia 1.6B deprecated?** Nari Labs shipped Dia2 in November 2025 and stopped committing to the
   Dia repository, but no source declares Dia 1.6B retired, and fal still serves it without a
   deprecation flag.
5. **Is the output watermarked?** Nothing documents a marker; nothing rules one out.
6. **What does fal's MP3 re-encoding do to quality?** fal returns MP3 while the model produces
   44.1 kHz PCM; the transcode settings are unpublished.
7. **How good is it, independently?** No benchmark exists in this corpus, and the vendor's own
   comparison is an undated listening demo against ElevenLabs Studio and Sesame CSM-1B.
8. **Does the April release have an announcement date?** The earliest artifacts are dated
   2025-04-19/20/22; no first-party announcement post was captured.

## Evidence status

Evidence floor: **met.** First-party: the `nari-labs/dia` repository (README, `LICENSE`,
`dia/model.py`, `example/voice_clone.py`, commit history, PR #243), the two Hugging Face model cards
and their API metadata, the `nari-labs/dia2` repository for the sibling, and the Nari Labs corporate
site. Independent hosts: one fal record (catalogue metadata, OpenAPI schemas for both endpoints,
price strings, host README) and one Replicate record (page, README, pricing metadata, input
parameters, plus negative checks for `nari-labs/dia` and other slugs). All captured 2026-10-26.

**No direct tests have been run for this page.** Capability statements are vendor or host
documentation; prices are published schedules; the only numbers are the vendor's own token-rate and
RTF figures. Nothing here measures Dia's audio quality, and no host record was produced by
generating audio.

The next useful evidence would be a small reproducible run: the same two-speaker script through
`fal-ai/dia-tts` and self-hosted `Dia-1.6B-0626` (bf16, seed fixed) to establish whether fal serves
the April or June weights and how its MP3 compares to 44.1 kHz PCM; a 1,500-character script to find
fal's real ceiling; a 10-second reference clip through `fal-ai/dia-tts/voice-clone` to see whether
cloning works despite the missing schema field; and a spectral/provenance check on fal output for
any watermark.

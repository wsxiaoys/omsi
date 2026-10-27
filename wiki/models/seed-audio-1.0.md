# Seed Audio 1.0 (ByteDance Seed)

Seed Audio 1.0 is ByteDance Seed's **full-scene audio creation model**: one prompt produces
coordinated speech (multiple characters, directed performance), sound effects, ambience, and other
scene audio in a single pass, with the same model also usable as a plain TTS engine
([launch blog](../../sources/bytedance.com/seed-audio-1-0-launch-blog/2026-10-26.md),
[model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md)). It is a closed
hosted model — no weights, paper, or repository are published — served first-party through
**BytePlus** (international) and **Volcengine 豆包语音** (China), and through **fal** as a partner
proxy at $0.1875/minute ([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)).

**In window.** The dated first-party announcement is **2026-07-20**, inside the roster's one-year
window (cutoff 2025-10-26); fal listed the endpoint **2026-06-25**, roughly four weeks earlier
([launch blog](../../sources/bytedance.com/seed-audio-1-0-launch-blog/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)). The earliest
first-party technical doc captured (Volcengine API reference) was last updated 2026-09-28.

## Identity

- **Canonical name:** Seed Audio 1.0. **Model ID:** `seed-audio-1.0` — the literal `model` value in
  the Volcengine/BytePlus request body
  ([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).
- **Vendor / developer:** ByteDance Seed team; commercial distribution by BytePlus and Volcengine.
- **Aliases:** "Seed Audio 1.0" (roster label and vendor name), "Seed Audio" as the fal model family,
  "Audio Creation → Audio 1.0" as the BytePlus/Volcengine doc section title
  ([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md),
  [Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)). The roster label
  is not a host rename: it matches the vendor's own product name.
- **Siblings:** none documented. fal's `family` is "Seed Audio" with version "1.0" and no other
  Seed Audio endpoint exists in its catalogue; the vendor names no 1.x/2.0 successor, only a roadmap
  (video references, long-form, multitrack, controllable translation)
  ([model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md),
  [fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)).

#### Host endpoints

| Route | Endpoint | Relationship | Notes |
| --- | --- | --- | --- |
| Volcengine (China) | `POST https://openspeech.bytedance.com/api/v3/tts/create`, `model: seed-audio-1.0` | first-party API | full parameter set, Chinese docs |
| BytePlus (international) | Seed Speech → Audio Creation, docs `byteplusvoice/seedaudio-01` | first-party API | English docs; body is client-rendered and was not retrievable |
| fal | `bytedance/seed-audio-1.0` | partner proxy (`is_partner_api: true`) | reduced schema, $0.1875/min |
| Replicate | — | absent (404) | ByteDance's Seedream/Seedance are listed there, Seed Audio is not |

Sources: [Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md),
[model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md).

### Identity ambiguity: one model or a TTS/T2A pair?

The vendor exposes **one model ID** with three input modes (text only; text + reference audio; text +
reference image) and no mode switch
([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)). fal, by contrast,
exposes a `multilingual` boolean described as "the multilingual model variant", and its guide splits
behaviour into "two modes: text-to-speech, with no background sound effects or music, and
text-to-audio"
([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md),
[fal guide](../../sources/fal.ai/seed-audio-1-0-workflow-guide/2026-10-26.md)). Whether
`multilingual: true` selects a different backend checkpoint, and whether TTS-only is a distinct
model, is undocumented. One page is used here because no source gives either a separate identity,
price, or support window.

## Current assessment

**A current, actively documented flagship audio model, not a repackaging.** What the evidence
supports:

- ByteDance frames it as a step past speech generation — the announcement is titled "From Speech to
  Audio Creation", and Seed Audio 1.0 is the only audio-creation model in the Seed site's model
  navigation, alongside SeedRealtime (an audio-visual interaction LLM)
  ([launch blog](../../sources/bytedance.com/seed-audio-1-0-launch-blog/2026-10-26.md),
  [model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md)).
- Both first-party clouds carry it (BytePlus console activation link and Volcengine API doc), and the
  Volcengine doc was updated 2026-09-28 — i.e. maintained at least two months after announcement
  ([model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md),
  [Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).
- fal lists it `status: public`, `deprecated: false`, `removed: false`, with catalogue metadata
  refreshed 2026-09-14 and reviewed 2026-10-23
  ([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)).

What it is *not*, on the evidence: it is **not a music model**. The vendor's model page and blog
describe speech, SFX, ambience and "other audio elements", and both list fine-grained control of
**music** as future work. Music can appear inside a generated scene — the vendor's own API example
specifies a marimba/synth/electric-bass bed under dialogue
([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)) — but no source
documents a music parameter, and fal's claim that the model produces "background music in a single
pass" is host editorial, not vendor language
([fal guide](../../sources/fal.ai/seed-audio-1-0-workflow-guide/2026-10-26.md)).

There is **no independent quality evidence** in this corpus: no benchmark, arena, or third-party
MOS. Every number on the page traces to ByteDance's own evaluation images.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run for this page.**

### Modality and modes

| Mode | Inputs | What it produces |
| --- | --- | --- |
| Text-to-audio (T2A) | prompt only | full scene: dialogue, SFX, ambience, room tone |
| Text-and-audio-to-audio (TA2A) | prompt + up to 3 reference clips via `@Audio1..3` | same, with voices/scenes conditioned on the references |
| Text + reference image | one image + text | voice conditioned on a portrait image; the text is the script |
| TTS | prompt (or `voice` preset) | speech only, no bed |

Modes are inferred by which parameters are supplied, not selected explicitly
([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)). Vendor architecture
statement: "A language model helps structure the creative intent into scene-level controls, while a
diffusion-based acoustic generator produces the final audio in a high-fidelity latent space"
([launch blog](../../sources/bytedance.com/seed-audio-1-0-launch-blog/2026-10-26.md)).

### Voice identity and cloning

Zero-shot, no per-voice training: "shape a voice from a text description, an authorized reference
sample, or both" ([launch blog](../../sources/bytedance.com/seed-audio-1-0-launch-blog/2026-10-26.md)).
On the vendor API the voice can also be a **voice ID** — "音色 ID，支持使用'豆包语音合成模型2.0'的音色或
声音复刻音色" — i.e. a Doubao TTS 2.0 library voice or a voice-cloning (声音复刻) voice
([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)). fal exposes 21
preset IDs with `_en` / `_zh` / `_mixed_…` suffixes (e.g. `sophie_en_zh`, `vivi_mixed_en_zh_ja_es_id`,
`monkey_king_zh`) or a cloned voice ID
([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)). Reference audio limits:
**3 clips, ≤ 30 s and ≤ 10 MB each**, `wav`/`mp3`/`pcm`/`ogg_opus`; the reference image is
**1 image ≤ 10 MB** (`jpeg`/`png`/`webp`) and **cannot be combined with audio references**
([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).

### Languages

| Source | Claim |
| --- | --- |
| Seed blog (2026-07-20) and model page | "20+ languages, including Chinese, English, Japanese, Korean, Spanish, Indonesian, German, French, Thai, and Vietnamese" |
| Volcengine API (updated 2026-09-28) | **17 named**: zh, en, ja, ko, es-MX, es, de, fr, pt-BR, th, vi, ms, fil, it, ru, nl, pl, tr |
| fal schema | `multilingual` boolean variant; preset voices cover en/zh/mixed |
| fal guide (2026-06-26) | "currently supports English and Chinese … Broader multilingual support is planned for the July 2026 update" |

The contradiction is chronological, not factual: the fal guide predates the July multilingual
release, and fal's schema now carries a multilingual flag. What stays unresolved is the count — 20+
claimed, 17 listed, with Indonesian named by the vendor but absent from the API's language list,
while Malay and Filipino appear in the API list and not in the vendor's examples
([model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md),
[Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md),
[fal guide](../../sources/fal.ai/seed-audio-1-0-workflow-guide/2026-10-26.md)).

### Duration

- **120 s per call** — "单次最长可生成 120 秒音频", and the response's `original_duration` is "该值为计费
  依据，上限为120秒" ([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).
- "up to two minutes of audio in a single pass and supports further continuation" — longer content is
  built by repeated extensions, not by a longer request
  ([model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md)).
- fal has **no duration field**: length follows the prompt, capped by the vendor's 120 s
  ([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)).

### Timing control

"prompt-level timing control for character dialogue, with current timing precision at 100 ms
intervals" ([model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md)). The
Volcengine doc describes the same thing without a number: `text_prompt` can control total duration
and the exact spans in which a voice speaks, and this is scoped to **dialogue** — SFX, ambience and
music timing are named as future work
([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md),
[launch blog](../../sources/bytedance.com/seed-audio-1-0-launch-blog/2026-10-26.md)).

### Output formats and sample rate

| Property | Vendor API | fal |
| --- | --- | --- |
| Formats | `wav` (default), `mp3`, `pcm`, `ogg_opus` | `mp3` (default), `wav`, `pcm`, `ogg_opus` |
| Sample rates | 8000–48000; wav/pcm default **40000**, mp3 default 44100, `ogg_opus` fixed 48000 | 8000–48000, default **24000** |
| Prosody | `speech_rate` [-50,100], `loudness_rate` [-50,100], `pitch_rate` [-12,12] | `speed` 0.5–2, `volume` 0.5–2, `pitch` -12–12 |
| Timestamps | `enable_subtitle` → sentence + word-level timestamps | not exposed |
| Delivery | base64 + URL valid 2 h | file URL with `duration`, `sample_rate`, `content_type` |

Sources: [Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md).

### Watermarking

The vendor API has two **opt-in, off-by-default** mechanisms: `aigc_watermark` appends an audible
"音频节奏标识" marker at the end of the audio, and `aigc_metadata.enable` writes metadata into the
audio header, alongside free-text provenance fields (`content_producer`, `produce_id`,
`content_propagator`, `propagate_id`)
([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)). fal exposes no
watermark field, only `enable_safety_checker`
([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)). So a Seed Audio
output is **not** watermarked unless the caller asks for it, and fal offers no way to ask.

### Vendor evaluation claims (marketing, unverified)

- A/B subjective preference gains for text-described voices, plus improved "Availability Rate and
  High-quality Rate" ([model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md)).
- "audio Availability Rate exceeds 90% in most scenarios" across film/TV, short drama, animation,
  podcast dialogue, live commerce, stage and TTS use cases.
- Multilingual: "most languages scored above 4.0" on Naturalness MOS; instruction-following MOS above
  3.5 for all evaluated languages **except Vietnamese**.

No sample sizes, rater counts, competitor names, or absolute scores are in text — the numbers exist
only inside chart images on the vendor page. These are vendor claims, not measurements, and nothing
independent corroborates them.

## Limitations and constraints

- **120 seconds per request, hard.** Longer work needs continuation passes; the vendor states
  continuation preserves voice identity but publishes no seam/overlap guidance
  ([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md),
  [model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md)).
- **Prompt cap differs by route:** 3000 characters on the vendor API, **2048** on fal. fal's
  behaviour above 2048 is undocumented
  ([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md),
  [fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)).
- **Reference audio is short and small:** 3 clips × 30 s / 10 MB. A long scene cannot be conditioned
  on more than 90 s of reference audio.
- **Image and audio references are mutually exclusive**, so a portrait-conditioned voice cannot also
  be cloned from a sample in the same call.
- **No music control.** Music appears in scenes but is not a parameter, and vendor docs place
  fine-grained music control on the roadmap.
- **No seed or reproducibility control** on either route; the same prompt is not documented to be
  repeatable.
- **Maximum speakers per prompt is undocumented.** The vendor example carries two; nothing states a
  limit.
- **fal's schema is a subset:** no duration field, no subtitle/timestamp output, no watermark
  control, shorter prompt cap, lower default sample rate (24 kHz vs 40 kHz)
  ([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)).
- **Safety behaviour is host-asserted, not vendor-documented.** fal's `enable_safety_checker`
  defaults to true and "authorized callers may set false to request relaxed screening"; the vendor
  API page documents no moderation policy or refusal behaviour
  ([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md),
  [Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).
- **Voice cloning consent is asserted, not mechanised.** The blog says "authorized reference sample"
  and `speaker` accepts cloned voice IDs, but no captured source describes consent verification or
  an enrollment review for this model
  ([launch blog](../../sources/bytedance.com/seed-audio-1-0-launch-blog/2026-10-26.md),
  [Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).
- **Replicate does not serve it** (checked 2026-10-26), so there is no cheap community-hosted
  alternative and no cross-host price check.
- **The BytePlus English doc body could not be captured** (client-rendered), so the international
  parameter set is verified only through the Chinese Volcengine doc and fal's proxy schema.

## Access, pricing, licensing

### Billing basis

| Route | Price | Basis |
| --- | --- | --- |
| fal `bytedance/seed-audio-1.0` | **$0.1875 per minute** (`billing_unit: "minutes"`, `price: 0.1875`) | minutes of generated audio; a full 2-minute pass ≈ $0.375 |
| Volcengine `seed-audio-1.0` | rate **not published** on the captured doc | `original_duration` in seconds, "该值为计费依据，上限为120秒" — pre-processing duration, so speed/pitch changes do not alter the bill |
| BytePlus | not captured | same API family; billing page is client-rendered |
| Self-host | not available | no weights published |

fal is the only route with a retrievable rate. Its per-minute basis means cost tracks **generated
length, not input text**: a short prompt that yields a two-minute scene costs more than a long script
that yields thirty seconds. The vendor's `original_duration` basis and fal's per-minute basis agree
in direction — both bill produced audio
([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md),
[Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).

### Licensing

- **No weights, no licence grant to inspect.** Neither first-party page links weights, a repository,
  or a paper — the only outbound links are the BytePlus console and API docs
  ([model page](../../sources/bytedance.com/seed-audio-1-0-model-page/2026-10-26.md)). Access is
  API-only under BytePlus/Volcengine commercial terms, none of which were captured here.
- **fal's `licenseType: "commercial"` and "Commercial use" badge** describe use through fal under
  fal's partner agreement, not a ByteDance licence grant
  ([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md)).
- **AIGC labelling is the caller's switch**, not the vendor's default: both watermark mechanisms are
  off unless requested ([Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).

## Unresolved questions

1. **Is `multilingual: true` a different model?** fal calls it "the multilingual model variant"; the
   vendor exposes one model ID with no variant field. No source says whether the multilingual
   capability is a checkpoint or a runtime switch
   ([fal catalogue](../../sources/fal.ai/seed-audio-1-0-catalogue/2026-10-26.md),
   [Volcengine API](../../sources/volcengine.com/seed-audio-1-0-api/2026-10-26.md)).
2. **How many languages, exactly?** "20+" claimed, 17 listed, Indonesian claimed but not listed,
   Malay/Filipino listed but not claimed in the blog's examples.
3. **What is the first-party list price?** BytePlus and Volcengine billing pages were not retrievable;
   only fal's $0.1875/min is documented here.
4. **How many speakers can one prompt carry?** Undocumented; the example shows two.
5. **Does continuation actually hold identity across many extensions?** Vendor claim only; the
   mechanism (reference audio vs prompt) and any drift over several passes are undocumented.
6. **Why does the vendor example include music if music is roadmap?** The scene prompt specifies a
   full music bed, which suggests music is generated but not separately controllable — unverified.
7. **What does the safety checker filter?** fal documents the switch but not its behaviour; the
   vendor documents no policy.
8. **Is there an earlier release date than fal's 2026-06-25?** fal listed the endpoint before the Seed
   blog existed; no first-party June announcement was found.

## Evidence status

Evidence floor: **met.** First-party: the Seed model page, the Seed launch blog (2026-07-20), and the
Volcengine 豆包语音 API reference for `seed-audio-1.0` (updated 2026-09-28). Independent host: fal
(catalogue metadata, OpenAPI input schema, `endpointBilling` price payload, and a host-written
workflow guide). One negative host record (Replicate) documents the absence. All captured 2026-10-26.

**No direct tests have been run for this page.** Every capability statement is vendor or host
documentation; the price is a published schedule; the only quality numbers are ByteDance's own
evaluation claims, whose values live in chart images and were not transcribed.

The next useful evidence would be a reproducible run: one two-character scene prompt through both
fal and the Volcengine endpoint to compare output at 24 kHz MP3 vs 40 kHz WAV; a 3000-character
prompt on fal to find its real ceiling (schema says 2048); a multilingual prompt (e.g. Turkish or
Vietnamese) with `multilingual: true` to test the variant claim and the vendor's Vietnamese MOS
outlier; three continuation passes to measure voice drift; and a check for the audible
`aigc_watermark` marker when enabled.

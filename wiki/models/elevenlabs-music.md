# ElevenLabs Music (Eleven Music)

ElevenLabs' text-to-music family. The roster row calls it "ElevenLabs Music" and names the host
endpoint `fal-ai/elevenlabs/music`; the vendor calls the product **Eleven Music** and ships it under
three model IDs — `music_v1`, `music_v2` and `music_v2_5`
([models list](../../sources/elevenlabs.com/eleven-music-models-list/2026-10-26.md)). It generates
full songs from a text prompt or a structured composition plan, with or without vocals, at 3 s–10 min
per generation on the vendor API — the vendor's own pages variously state a 5- and a 10-minute
ceiling, see **Limitations** — and it is billed per minute of output audio rather than per request.

**Out-of-window flag.** The model the roster row actually points at is v1, whose launch was
**2025-08-05** — 82 days before the one-year window opens on 2025-10-26 — with the API following on
**2025-08-18**
([v1 launch](../../sources/elevenlabs.com/eleven-music-v1-launch/2026-10-26.md),
[API launch](../../sources/elevenlabs.com/eleven-music-api-launch/2026-10-26.md)). The page is
retained as a roster exception on that basis. It is *not* re-dated: the family's current generation,
`music_v2_5`, was announced **2026-09-11** and reached the API on **2026-09-14**, both inside the
window ([v2.5 launch](../../sources/elevenlabs.com/eleven-music-v2-5-launch/2026-10-26.md),
[changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md)).

## Identity

- **Canonical name:** Eleven Music (vendor product name). The roster label "ElevenLabs Music" is a
  discovery label and is also fal's display name for its endpoint.
- **Model IDs:** `music_v1`, `music_v2`, `music_v2_5` — all three are first-party, all three remain
  obtainable ([models list](../../sources/elevenlabs.com/eleven-music-models-list/2026-10-26.md)).
- **Vendor:** ElevenLabs (model lab; no third-party developer credited).
- **Dated milestones, all first-party:**

| Date | Event | Source |
| --- | --- | --- |
| 2025-08-05 | Eleven Music launched as a product | [v1 launch](../../sources/elevenlabs.com/eleven-music-v1-launch/2026-10-26.md) |
| 2025-08-18 | Music API launched (`music_v1`) | [API launch](../../sources/elevenlabs.com/eleven-music-api-launch/2026-10-26.md) |
| 2026-05-26 | Music v2 announced; API "coming soon" | [v2 launch](../../sources/elevenlabs.com/eleven-music-v2-launch/2026-10-26.md) |
| 2026-06-15 | `music_v2` accepted by the API | [changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md) |
| 2026-06-22 | 48 kHz MP3 240/320 kbps added; v2 `auto` default → `mp3_48000_192` | [changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md) |
| 2026-07-20 | Music Finetunes API (five endpoints, `finetune_id`) | [changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md) |
| 2026-09-11 | Music v2.5 announced | [v2.5 launch](../../sources/elevenlabs.com/eleven-music-v2-5-launch/2026-10-26.md) |
| 2026-09-14 | `music_v2_5` accepted by the API | [changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md) |
| 2026-10-19 | Video-to-music gains `add_sfx` / `separate_tracks` / `use_audio_as_reference`; music covered by Zero Retention | [changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md) |

- **Host endpoints.**

| Route | Endpoint | What it serves |
| --- | --- | --- |
| ElevenLabs | `POST /v1/music` (`model_id` default `music_v1`) | all three model IDs ([compose reference](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md)) |
| ElevenLabs | `/v1/music/detailed`, `/v1/music/detailed/stream`, `/v1/music/stream`, `/v1/music/plan`, `/v1/music/upload`, `/v1/music/separate-stems`, `/v1/music/video-to-music`, `/v1/music/finetunes` | the same family, other surfaces ([changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md)) |
| fal | `fal-ai/elevenlabs/music` (catalogue `date` 2025-12-22) | v1 surface only — no `model_id` field ([fal v1](../../sources/fal.ai/elevenlabs-music/2026-10-26.md)) |
| fal | `elevenlabs/music/v2` and `elevenlabs/music/v2.5` (both `date` 2026-09-14) | v2 and v2.5, separate endpoints ([fal v2.5](../../sources/fal.ai/elevenlabs-music-v2-5/2026-10-26.md)) |
| Replicate | `elevenlabs/music` (created 2025-10-29) | a reduced v1-era wrapper; no v2/v2.5 path exists ([Replicate](../../sources/replicate.com/elevenlabs-music/2026-10-26.md)) |

- **Siblings inside the family** are the three model IDs above plus Music Finetunes (customer-trained
  variants used via `finetune_id`). Speech, sound effects and dubbing are separate roster rows.
- **Identity ambiguity that remains.** The family is one page here because the roster assigns one row
  and because the product name, licence, price and host listings do not separate the generations. But
  the three IDs differ materially: v1 uses `MusicPrompt`/`sections`, v2 and v2.5 use
  `CompositionPlan`/`chunks`, and the vendor's own models page marks `music_v1` as "Outclassed by
  `music_v2` and `music_v2_5`". A reader who treats "ElevenLabs Music" as one model will pick the
  wrong endpoint. If independent per-generation evidence ever appears, v1 and v2.5 meet the wiki's
  split criteria.

### Which model does a given endpoint actually run?

| Endpoint | Default / implied model | Evidence |
| --- | --- | --- |
| ElevenLabs `POST /v1/music`, no `model_id` | `music_v1` | schema default ([compose](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md)) |
| ElevenLabs product UI (ElevenMusic) | `music_v2_5` | "now the default for prompted and reference generation" ([v2.5 launch](../../sources/elevenlabs.com/eleven-music-v2-5-launch/2026-10-26.md)) |
| fal `fal-ai/elevenlabs/music` | v1 surface (inferred) | catalogue entry has no `version` field (siblings say `2` / `2.5`), `sections`-shaped plan, `mp3_44100_128` default, no 48 kHz MP3 options, no `model_id` ([fal v1](../../sources/fal.ai/elevenlabs-music/2026-10-26.md)) |
| fal `elevenlabs/music/v2.5` | `music_v2_5` | endpoint name; chunked plan; `mp3_48000_192` default ([fal v2.5](../../sources/fal.ai/elevenlabs-music-v2-5/2026-10-26.md)) |
| Replicate `elevenlabs/music` | v1-era surface (inferred, unconfirmed) | prompt-only schema, `mp3_standard`-style format names, 5-minute cap ([Replicate](../../sources/replicate.com/elevenlabs-music/2026-10-26.md)) |

The vendor states the API default explicitly: "For API generations, Music v1 will remain the default
model for transition period. After this, Music v2 will be the default in both UI and API"
([capabilities](../../sources/elevenlabs.com/eleven-music-capabilities/2026-10-26.md)). So the UI and
the API disagree about which model a default call gets.

## Current assessment

**Three distinct models under one product name, and the newest is current while the roster's endpoint
is the oldest.** That is the load-bearing finding.

- **Not a repackaging.** The vendor assigns each generation its own model ID, its own plan schema
  (`sections` vs `chunks`), its own default output format (44.1 kHz/128 kbps vs 48 kHz/192 kbps), its
  own capability set (Audio Reference is v2/v2.5 only; inpainting is "improved in v2") and its own
  quality ranking ("Outclassed by `music_v2` and `music_v2_5`"). A host that exposes no `model_id`
  cannot reach the newer generations at all.
- **Status.** `music_v2_5` is current and generally available on the vendor API, ElevenCreative and
  ElevenMusic. `music_v2` is retained ("It isn't going anywhere"). `music_v1` is a deprecated-in-waiting
  default: still the API default, still live on both hosts, with a promise of "at least a few months'
  notice" before deprecation but no date.
- **What the evidence does not support is any independent quality claim.** The only quantitative
  quality evidence in the corpus is ElevenLabs' own blind test: "47,885 pairs", one take per model,
  v2.5 "preferred the majority of the time", with the gap widest in vocal-led and acoustic-heavy
  genres ([v2.5 launch](../../sources/elevenlabs.com/eleven-music-v2-5-launch/2026-10-26.md)). No
  preference rate, rater count, rater population, audio or methodology is published, and nothing in
  this corpus re-measures it. It is a vendor claim.
- **The most decision-relevant facts are contractual, not acoustic.** Commercial rights vary by plan
  and exclude film, TV, radio and Studio Games below Enterprise; Exhibit A permits no downloads at all
  on Free and requires attribution (the v2.5 launch post says otherwise — see **Access, pricing,
  licensing**); and the same model costs $0.15, $0.50 or $0.60 per minute depending on route
  ([Music Terms](../../sources/elevenlabs.com/eleven-music-terms/2026-10-26.md)).

## Documented capabilities

Everything here is vendor or host documentation. No direct tests were run.

### Generation surfaces

- **Prompt mode.** Free-text description; the model chooses length if `music_length_ms` is omitted.
  Vendor guidance describes the model as responding to genre, mood, instrumentation, tempo and
  production-era language and as holding a stated BPM and key well enough to layer with other material
  — a vendor claim from the prompting guide, not a measurement
  ([best practices](../../sources/elevenlabs.com/eleven-music-best-practices/2026-10-26.md)).
- **Composition plans.** v1 takes `MusicPrompt`: `positive_global_styles`, `negative_global_styles`
  and `sections[]`, each with local positive/negative styles, `duration_ms` (3–120 s) and lyrics
  ("Max 30 lines per section and max 200 characters per line"). v2/v2.5 take `CompositionPlan`:
  `chunks[]` of 3–120 s each, up to 30 chunks totalling 3–600 s, with per-chunk
  `context_adherence` (`low`/`medium`/`high`) and optional `conditioning_ref` +
  `condition_strength` (`low`/`medium`/`high`/`xhigh`)
  ([compose reference](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md)).
  The two shapes are mutually exclusive: using `MusicPrompt` with v2 errors and vice versa.
- **Instrumental or vocal.** `force_instrumental: true` "guarantees that the generated song will be
  instrumental"; with `false`, "the song may or may not be instrumental depending on the `prompt`"
  ([compose reference](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md)).
- **Lyrics.** Supplied in the plan, or generated by the model; multilingual, with English, Spanish,
  German and Japanese named and "and more" left unspecified
  ([creative guide](../../sources/elevenlabs.com/eleven-music-creative-guide/2026-10-26.md)).
- **Audio Reference (v2/v2.5 only).** Upload ~30 s of audio to guide "the overall sound, production
  style, instrumentation, tempo, and mood"; every upload is copyright-screened; it "does not copy or
  remix the uploaded audio" and is "not designed for genre transformation"
  ([capabilities](../../sources/elevenlabs.com/eleven-music-capabilities/2026-10-26.md)). On fal it is
  expressed as `audio_url` + a ≤ 30 s window + a four-level `strength`, because the vendor itself
  conditions on a song ID that exists only after upload
  ([fal v2.5](../../sources/fal.ai/elevenlabs-music-v2-5/2026-10-26.md)).
- **Inpainting.** Regenerate a section of an existing song: "select a specific section … and
  regenerate just that section without affecting the rest of the track", addressed by `song_id` +
  `TimeRange`, with optional `negative_ranges`. Requires `store_for_inpainting: true` at generation
  time ([capabilities](../../sources/elevenlabs.com/eleven-music-capabilities/2026-10-26.md),
  [compose reference](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md)).
- **Finetunes.** Train on audio the customer owns (copyright-screened, ~5–10 minutes to train), then
  pass `finetune_id`; curated ElevenLabs Finetunes are also offered. Enterprise customers "may
  fine-tune on proprietary intellectual property that they fully own and control, without third-party
  copyright screening"
  ([capabilities](../../sources/elevenlabs.com/eleven-music-capabilities/2026-10-26.md)).
- **Adjacent endpoints in the same family:** stream / detailed-stream (SSE with composition plan,
  base64 audio chunks, optional word timestamps and a low-resolution waveform), `POST /v1/music/plan`
  (generate a plan before generating audio), stem separation, and video-to-music with `add_sfx`,
  `separate_tracks` and `use_audio_as_reference`
  ([changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md),
  [compose-detailed](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md)).

### Output formats and sample rate

| Route | Default | Range |
| --- | --- | --- |
| ElevenLabs, `music_v1` | `mp3_44100_128` (from `auto`) | 26 values: MP3 22.05–48 kHz / 32–320 kbps, PCM 8–48 kHz, μ-law, A-law, Opus 32–192 kbps |
| ElevenLabs, `music_v2` / `music_v2_5` | `mp3_48000_192` (from `auto`) | same 26 values |
| fal `fal-ai/elevenlabs/music` | `mp3_44100_128` | 19 values; **no `mp3_48000_*`** |
| fal `elevenlabs/music/v2.5` | `mp3_48000_192` | 24 values including `mp3_48000_240/320` |
| Replicate `elevenlabs/music` | `mp3_standard` (128 kbps) | 6 host-specific names: `mp3_standard`, `mp3_high_quality`, `wav_16khz`, `wav_22khz`, `wav_24khz`, `wav_cd_quality` |

Sources: [compose reference](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md),
[fal v1](../../sources/fal.ai/elevenlabs-music/2026-10-26.md),
[fal v2.5](../../sources/fal.ai/elevenlabs-music-v2-5/2026-10-26.md),
[Replicate](../../sources/replicate.com/elevenlabs-music/2026-10-26.md). The vendor's two product
pages disagree with this table: the capabilities FAQ says "MP3 (44.1kHz, 128-192kbps) and WAV", the
ElevenCreative guide says MP3 only with "Other audio formats … soon"
([creative guide](../../sources/elevenlabs.com/eleven-music-creative-guide/2026-10-26.md)).

### Provenance and determinism

- `sign_with_c2pa` (default `false`) signs MP3 output with C2PA. It is the only provenance control on
  the music API, and fal's music endpoints do not expose it
  ([compose reference](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md),
  [fal v2.5](../../sources/fal.ai/elevenlabs-music-v2-5/2026-10-26.md)).
- `seed` "can only be used with `composition_plan`", never with a plain prompt, and even then "exact
  reproducibility is not guaranteed and outputs may change across system updates".
- Zero Retention Mode (`enable_logging: false`) is available to enterprise customers for music, but
  "Music requests that set `store_for_inpainting=true` are rejected in this mode" — inpainting and
  zero retention are mutually exclusive
  ([changelog](../../sources/elevenlabs.com/eleven-music-changelog/2026-10-26.md)).

## Limitations and constraints

- **The maximum song length is disputed inside the vendor's own documentation.** The capabilities FAQ
  and the pricing card say **5 minutes**; the API schema accepts `music_length_ms` up to **600000 ms**
  and the ElevenCreative guide says "the maximum is 10 minutes"; fal carries the 10-minute bound; only
  Replicate enforces 5 minutes (and a 5-second floor)
  ([capabilities](../../sources/elevenlabs.com/eleven-music-capabilities/2026-10-26.md),
  [pricing](../../sources/elevenlabs.com/eleven-music-api-pricing/2026-10-26.md),
  [compose reference](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md),
  [creative guide](../../sources/elevenlabs.com/eleven-music-creative-guide/2026-10-26.md),
  [Replicate](../../sources/replicate.com/elevenlabs-music/2026-10-26.md)). Plan accordingly against
  10 minutes; the 5-minute figure appears to be stale marketing copy, but no source says so.
- **Minimum length is 3 s everywhere except Replicate (5 s).**
- **Structural limits:** ≤ 30 chunks/sections per plan; each chunk 3–120 s; ≤ 30 lyric lines per
  section and ≤ 200 characters per line; prompt `maxLength` 4100 on fal v2.5 (no vendor-stated prompt
  cap).
- **The roster endpoint cannot reach v2 or v2.5.** `fal-ai/elevenlabs/music` has no `model_id`,
  no `seed`, no `finetune_id`, no `sign_with_c2pa` and no 48 kHz MP3 options, and its catalogue entry
  carries no `version` field where the v2 and v2.5 entries carry `2` and `2.5`. Replicate's wrapper is
  narrower still: prompt only, no composition plan, 5-minute cap, and a **default of
  `force_instrumental: true` with a 10-second length** — an unconfigured Replicate call produces a
  10-second instrumental, not a song.
- **No weights, no self-hosting.** Every route is hosted; fal marks all three music endpoints
  `hosting: "proxy"` with `lab: "ElevenLabs"`, and its own schema note confirms fal uploads audio
  references to ElevenLabs on the caller's behalf
  ([fal v1](../../sources/fal.ai/elevenlabs-music/2026-10-26.md),
  [fal v2.5](../../sources/fal.ai/elevenlabs-music-v2-5/2026-10-26.md)).
- **Free-plan API access to music is zero.** Music concurrency on Free is `0`, and "The Music API is
  available for paid subscribers" ([models list](../../sources/elevenlabs.com/eleven-music-models-list/2026-10-26.md),
  [capabilities](../../sources/elevenlabs.com/eleven-music-capabilities/2026-10-26.md)).
- **Concurrency is capped per plan** (2 on Starter/Creator/Pro, 5 on Scale/Business), so music is a
  low-throughput workload even on paid plans.
- **No independent quality evidence.** No benchmark, MOS, preference study, or third-party review of
  any Eleven Music generation was captured. The only comparison is the vendor's own 47,885-pair blind
  test, and it compares v2.5 with v2, not with any competitor.
- **The models move under fixed IDs.** ElevenLabs reserves the right to "add, substitute, restrict,
  suspend, or withdraw particular Music Models" and to designate iterations as separate models
  ([Music Terms](../../sources/elevenlabs.com/eleven-music-terms/2026-10-26.md)); no checkpoint or
  revision identifier exists anywhere in the corpus, so claims here pin to a capture date only.
- **Inpainting requires storing the song**, which is incompatible with Zero Retention Mode, and
  `song_id` (returned in response headers) is the only handle for later section edits.

## Access, pricing, licensing

### Billing basis

Per **minute of generated audio**, on the vendor and fal; per **second of output audio** on Replicate.
The vendor's own pricing page states two different bases in one document — "Price per minute" on the
Music card and table, and "Music and Sound Effects are billed per generation" in the metering FAQ
([pricing](../../sources/elevenlabs.com/eleven-music-api-pricing/2026-10-26.md)). The card's
per-minute framing is corroborated by fal and Replicate's duration-based metrics; treat "per
generation" as loose wording for "generation length drives the bill".

| Route | Price | Per-minute equivalent | Rounding |
| --- | --- | --- | --- |
| ElevenLabs API | **$0.15 / minute** | $0.15 | not stated |
| fal (`fal-ai/elevenlabs/music` and `elevenlabs/music/v2.5`) | **$0.60 / output minute** | $0.60 | rounded **up** to the next minute |
| Replicate (`elevenlabs/music`) | **$8.30 / 1,000 output seconds** | ≈ $0.50 | per second ("around 120 seconds for $1") |

Sources: [pricing](../../sources/elevenlabs.com/eleven-music-api-pricing/2026-10-26.md),
[fal v1](../../sources/fal.ai/elevenlabs-music/2026-10-26.md),
[fal v2.5](../../sources/fal.ai/elevenlabs-music-v2-5/2026-10-26.md),
[Replicate](../../sources/replicate.com/elevenlabs-music/2026-10-26.md).

Three consequences:

1. **The host markup is 3.3–4×.** fal charges exactly 4× the vendor list, and its round-up rule makes
   a 30-second generation cost $0.60 where the vendor's arithmetic gives $0.075 — an 8× effective
   difference at that length. Replicate is cheaper than fal per second but still ~3.3× the vendor.
2. **Model choice does not change fal's price.** v1 and v2.5 both cost $0.60/minute on fal, while the
   vendor charges one $0.15 rate for all three model IDs
   ([fal v2.5](../../sources/fal.ai/elevenlabs-music-v2-5/2026-10-26.md),
   [pricing](../../sources/elevenlabs.com/eleven-music-api-pricing/2026-10-26.md)).
3. **Music pricing was cut at the v2 launch** — "up to 50%" for ElevenAPI — so any older price quote
   for `music_v1` is not comparable to today's
   ([v2 launch](../../sources/elevenlabs.com/eleven-music-v2-launch/2026-10-26.md)).

Plan economics on the vendor route: the API pricing table lists six plan rows all at $0.150/minute
with included minutes of **3 / 40 / 147 / 660 / 1,993 / 6,600** and **$1.50 per Finetune**
([pricing](../../sources/elevenlabs.com/eleven-music-api-pricing/2026-10-26.md)). Those included
minutes do not match the Music Terms' monthly generation limits of **11 / 17 / 62 / 304 / 1,100 /
4,800** minutes — two different allowances, neither page reconciling them.

### Licensing and commercial terms

Rights are **plan-dependent** and set out in Exhibit A of the Music Terms (last updated
2026-10-09), not in a single "cleared for commercial use" claim
([Music Terms](../../sources/elevenlabs.com/eleven-music-terms/2026-10-26.md)):

| Plan | Generation / month | Downloads / month | Media rights | Attribution | Streaming distribution |
| --- | --- | --- | --- | --- | --- |
| Free | 11 min | **not permitted** | online+offline commercial, **except film, TV, radio, Studio Games** | **required** ("denote Eleven Music when distributing") | prohibited |
| Starter | 17 min | 30 min | same carve-outs | none | prohibited |
| Creator | 62 min | 250 min | same carve-outs | none | permitted |
| Pro | 304 min | 500 min | same carve-outs | none | permitted |
| Scale (< 10 employees) | 1,100 min | 1,500 min | same carve-outs | none | permitted |
| Business (< 50 employees) | 4,800 min | 4,000 min | same carve-outs | none | permitted |
| Enterprise Music Lite | custom | custom | same carve-outs | none | permitted |
| Enterprise Music | custom | custom | **all commercial use** (film, TV, radio included) | none | permitted |

- **Building or contributing to a "Music Library" is prohibited** from Free through Business — "any
  collection of Output … made available to third parties for those third parties to use, license,
  download, or incorporate into their content" — as is "Model Resale". The stock-music reseller use
  case needs Enterprise.
- **Permissions travel with the track:** "The permissions that apply when you create a track stay with
  it, so cancelling or downgrading doesn't change how you can use tracks you've already created", and
  future term changes apply only to new tracks
  ([v2.5 launch](../../sources/elevenlabs.com/eleven-music-v2-5-launch/2026-10-26.md)).
- **Two contradictions to preserve.** (a) The v2.5 launch post says Free "gets five lossless downloads
  a day" and may use output commercially with credit, while Exhibit A says Free downloads are "Not
  permitted" — the post describes ElevenMusic, the Terms describe the Music Service, and neither
  reconciles them. (b) The vendor describes music as "cleared for nearly all commercial uses, from
  film and television to …", while Exhibit A excludes film and TV below Enterprise
  ([capabilities](../../sources/elevenlabs.com/eleven-music-capabilities/2026-10-26.md)).
- **No weights licence exists** — nothing is downloadable or self-hostable.
- **Watermarking scope is unresolved.** ElevenLabs embeds an inaudible watermark in "audio we
  generate" and only its own detector can read it, but no captured page says whether that applies to
  music output; the music API's only documented provenance control is the opt-in `sign_with_c2pa`
  flag ([watermarking](../../sources/elevenlabs.com/eleven-v4-watermarking/2026-10-26.md),
  [compose reference](../../sources/elevenlabs.com/eleven-music-api-compose/2026-10-26.md)).
- **Host licence fields are the host's assertion:** fal's `license_type: commercial` and Replicate's
  "yours to use commercially under ElevenLabs Music Terms" describe use through that host; the grant
  itself is Exhibit A.

## Unresolved questions

1. **Is the maximum 5 minutes or 10 minutes?** Two vendor pages say 5, two say 10, the API schema
   accepts 600000 ms, and only Replicate enforces 5. No source explains the split.
2. **When does `music_v1` stop being the API default, and when is it deprecated?** The vendor promises
   "at least a few months' notice" and nothing more.
3. **Which model does Replicate's `elevenlabs/music` actually call?** The wrapper's prompt-only schema
   and 5-minute cap suggest v1; Replicate does not say, and it lists no v2 or v2.5 endpoint.
4. **Will fal migrate `fal-ai/elevenlabs/music` in place, or is it frozen at v1?** The endpoint was
   `updated_at` 2026-09-15 but its schema still carries the v1 shape and 44.1 kHz defaults.
5. **Does music output carry the inaudible ElevenLabs watermark, and does it survive proxying on fal
   and Replicate?** Neither host says, and no test was run.
6. **How large is the v2 → v2.5 quality gap, independently?** The only number is a vendor-run
   47,885-pair blind test with no preference rate published, and it does not compare against any
   competitor.
7. **What happened to `generation_mode` (`track` / `loop` / `ambience`)?** It was added to "music
   prompt request bodies" on 2026-05-25 and is absent from the compose reference captured 2026-10-26.
8. **Do the two monthly allowances compose or conflict?** The API pricing table's included minutes
   (3 → 6,600) and Exhibit A's generation limits (11 → 4,800) are different numbers for what reads
   like the same entitlement.
9. **Is the "up to 50%" price cut reflected in the $0.15 figure, and what did v1 cost before it?** The
   pre-cut rate is not published.
10. **Do failed or partial generations bill, and does a partial minute bill as a full minute on the
    vendor route?** Unstated by ElevenLabs; fal rounds up, Replicate bills per second.

## Evidence status

Evidence floor: **met.** First-party: twelve ElevenLabs records — the capability overview, the
compose API reference (plus the compose-with-details variant), the models list with music concurrency,
the API pricing page, the Music Terms with Exhibit A, the ElevenCreative product guide, the Music
prompting best-practices guide, the v1 launch post, the API launch post, the v2 launch post, the v2.5
launch post, and the dated changelog entries for 2026-05-25 through 2026-10-19. Independent hosts: fal
(two records — the roster endpoint and the v2.5 endpoint — covering catalogue metadata, OpenAPI
schemas and price strings) and Replicate (model page, README, embedded schema, duration-based price).
All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules from
three publishers; the only quality comparison is the vendor's own blind test; and every length,
format and licence claim traces to a document that, in several cases, disagrees with another document
from the same publisher.

The next useful evidence would be a reproducible test set against named endpoints and dates: the same
60-second prompt and the same chunked plan through `music_v2_5` on ElevenLabs and on
`elevenlabs/music/v2.5` at fal, to see whether the proxy changes the audio; a 5-minute and a
9-minute request on each route to establish which ceiling actually bites; the same prompt with
`force_instrumental` unset on Replicate to confirm the instrumental-by-default behaviour; a
watermark check on host output with the ElevenLabs Audio Detector; and an independent preference test
against at least one competing music model, since none exists in this corpus.

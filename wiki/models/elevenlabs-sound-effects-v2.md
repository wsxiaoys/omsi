# ElevenLabs Sound Effects v2

ElevenLabs' text-to-sound-effect model, served as **`eleven_text_to_sound_v2`** on
`POST /v1/sound-generation` and as **`fal-ai/elevenlabs/sound-effects/v2`** on fal. It turns a short
text prompt into 0.5–30 seconds of audio — Foley, ambience, impacts, whooshes, or musical stems — with
optional duration, seamless looping and a prompt-adherence control
([capabilities](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-capabilities/2026-10-26.md),
[API reference](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-reference/2026-10-26.md)).

**It predates the roster's one-year window.** ElevenLabs published no launch announcement, changelog
entry, or blog post for v2 that this pass could find. The first-party evidence places its introduction
between the 2025-08-14 and 2025-09-02 captures of the capability page, and between the 2025-06-21 and
2025-09-08 captures of the API reference; fal listed the endpoint on **2025-09-02**
([docs history](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-docs-history/2026-10-26.md),
[fal](../../sources/fal.ai/elevenlabs-sound-effects-v2/2026-10-26.md)). That is roughly eight weeks
before the 2025-10-26 window start, so this row is retained as a **specialist exception**, not as a
current-window launch. The only recent change is additive: WAV output arrived on 2026-10-19
([changelog](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-changelog/2026-10-26.md)).

## Identity

- **Canonical name:** ElevenLabs Sound Effects v2. **Model ID:** `eleven_text_to_sound_v2`, the
  documented and default value of the API's `model_id` field
  ([models overview](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-models-overview/2026-10-26.md),
  [OpenAPI `SFXModelId`](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-openapi-spec/2026-10-26.md)).
- **Vendor:** ElevenLabs (model lab; no third-party developer credited).
- **Aliases:** "Sound Effects" (the vendor's page and product name, which is version-free and therefore
  ambiguous), "ElevenLabs Sound Effects V2" (fal's catalogue title), `fal-ai/elevenlabs/sound-effects/v2`.
- **Release:** no vendor date published; earliest first-party evidence **2025-09-02** (see the window
  note above).
- **Host endpoints:**

| Route | Endpoint | Notes |
| --- | --- | --- |
| ElevenLabs | `POST https://api.elevenlabs.io/v1/sound-generation` | regional hosts `api.us.`, `api.eu.residency.`, `api.in.residency.`, `api.sg.residency.elevenlabs.io` |
| fal | `fal-ai/elevenlabs/sound-effects/v2` | `hostingType: "proxy"`, `licenseType: "commercial"`, $0.002/second |
| Replicate | none | `/elevenlabs/sound-effects` and `/elevenlabs/sound-effects-v2` return 404; the ElevenLabs org page lists seven models, none of them sound effects ([negative record](../../sources/replicate.com/elevenlabs-sound-effects-not-listed/2026-10-26.md)) |

Unlike row 61 in this roster, the row-66 discovery label is **correct**: the live fal endpoint ID is
exactly `fal-ai/elevenlabs/sound-effects/v2`.

- **Siblings:** the retired v1 (no longer selectable), an undocumented `eleven_text_to_sound_v3`, and
  the separate music family (`music_v2_5`, `music_v2`, `music_v1`), which the vendor recommends for
  "full music production" rather than sound effects.

### v1 versus v2, and an undocumented v3

v2 is not a repackaging of v1 — it is a distinct request surface, dated by the vendor's own docs:

| | Sound effects v1 | Sound effects v2 |
| --- | --- | --- |
| `model_id` | absent — no model selector existed | present, default `eleven_text_to_sound_v2` |
| Looping | not available | `loop` boolean; the reference said "Only available for the 'eleven_text_to_sound_v2 model'" from 2025-09-08 to 2026-08-21 |
| Duration ceiling | 22 s | 30 s |
| fal presence | bare endpoint ID `fal-ai/elevenlabs/sound-effects/v1`; OpenAPI and `llms.txt` both 404 | full catalogue record, schema and price |

Sources: [docs history](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-docs-history/2026-10-26.md),
[fal](../../sources/fal.ai/elevenlabs-sound-effects-v2/2026-10-26.md).

**The unresolved identity problem is v3.** The API reference and the live OpenAPI document both accept
`eleven_text_to_sound_v3`, with `eleven_text_to_sound_v2` still the default
([API reference](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-reference/2026-10-26.md),
[OpenAPI](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-openapi-spec/2026-10-26.md)). But v3
appears in no models table, no changelog entry, no pricing line, no model card, and no host schema; fal
exposes no `model_id` at all, so a fal caller cannot reach it. It appeared in the API reference between
the 2026-08-21 and 2026-10-26 captures. Nothing captured says what it is, what it costs, or whether it
supersedes v2 — so this page describes v2 only and records v3 as an open question.

## Current assessment

The evidence supports a **current, generally available specialist**: it is the only sound-effects model
in the vendor's model list, it is the API default, it is the only ElevenLabs sound-effects endpoint on
fal, and it carries a published per-minute price on both routes. No source calls it preview, beta, or
deprecated.

It is also **thinly documented relative to the speech models**. There is no dedicated model page, no
capability comparison against v1 or v3, no language or style list, no benchmark, and no example gallery
beyond four prompt categories. The models page gives it one row: "Sound effects generation from text
prompts", languages "N/A"
([models overview](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-models-overview/2026-10-26.md)).
That one-liner is the whole vendor description.

What the evidence supports as *capability* is narrower and more concrete than the marketing: one prompt
in, one audio file out, with duration, looping and prompt-adherence as the only knobs. There is no
`seed`, no reference audio, no inpainting, no continuation, no documented stereo or bit-depth control,
and no batch form of the endpoint.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run.**

### Input and controls

| Parameter | Type | Default | Vendor bound | fal bound |
| --- | --- | --- | --- | --- |
| `text` | string, required | — | no API maximum stated; product text box capped at **450 characters** | `maxLength: 450` |
| `duration_seconds` | number, nullable | `null` (model guesses) | "at least 0.5 and at most 30"; capability page says "0.1 to 30" | `0.5`–`22` |
| `loop` | boolean | `false` | "loops smoothly" | same |
| `prompt_influence` | number, nullable | `0.3` | 0–1; higher = more literal, less variation | same |
| `output_format` | enum (query) | `mp3_44100_128` | 28 values: mp3, pcm, opus, ulaw, alaw, wav | 19 values, **no wav** |
| `model_id` | enum | `eleven_text_to_sound_v2` | `…_v2` \| `…_v3` | not exposed |
| `enable_logging` | boolean (query) | `true` | `false` = zero retention, enterprise only | not exposed |

Sources: [API reference](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-reference/2026-10-26.md),
[OpenAPI](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-openapi-spec/2026-10-26.md),
[product guide](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-product-guide/2026-10-26.md),
[fal](../../sources/fal.ai/elevenlabs-sound-effects-v2/2026-10-26.md).

The vendor describes prompt influence as a literalness dial — "High: More literal interpretation of the
prompt / Low: More creative interpretation with added variations" — and the product surface defaults it
to 30% ([capabilities](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-capabilities/2026-10-26.md),
[product guide](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-product-guide/2026-10-26.md)).

### What it is documented to generate

The vendor's own prompt taxonomy is the capability statement: simple one-shots ("Glass shattering on
concrete"), complex sequences ("Footsteps on gravel, then a metallic door opens"), musical elements
("90s hip-hop drum loop, 90 BPM"), and prompts phrased in audio-production vocabulary — impact, whoosh,
ambience, one-shot, loop, stem, braam, glitch, drone
([capabilities](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-capabilities/2026-10-26.md)).

The vendor simultaneously warns that sequences are unreliable and recommends generating individual
effects and combining them in an editor
([product guide](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-product-guide/2026-10-26.md)).
That is a claim about the model's weakness, from the vendor, and it bounds the "complex sequences"
capability claim above it.

### Looping

Looping is the one feature that distinguishes v2 from v1 in the vendor's docs. The promise is seam-free
repeat playback: "the ending will blend into the beginning without a noticeable gap"
([product guide](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-product-guide/2026-10-26.md)).
No source quantifies loop quality, and no source explains what happens when `loop: true` is combined
with a very short `duration_seconds`.

### Output formats and sample rate

| Route | Default | MP3 | WAV | Other |
| --- | --- | --- | --- | --- |
| ElevenLabs API | `mp3_44100_128` | 22.05/24/44.1 kHz, 32–192 kbps | 8/16/22.05/24/32/44.1/**48 kHz** | PCM 8–48 kHz, Opus 48 kHz, μ-law/A-law 8 kHz |
| ElevenLabs product UI | — | MP3 44.1 kHz | WAV 48 kHz | — |
| fal | `mp3_44100_128` | 22.05/44.1 kHz, 32–192 kbps | **none** | PCM, Opus, μ-law, A-law |

Sources: [API reference](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-reference/2026-10-26.md),
[product guide](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-product-guide/2026-10-26.md),
[fal](../../sources/fal.ai/elevenlabs-sound-effects-v2/2026-10-26.md).

Two vendor pages describe the format set differently, and neither matches the API's actual enum. The
capability page says "MP3 for all effects; WAV at 48 kHz for non-looping effects" — implying WAV is
withheld on looping generations and that only two codecs exist. The pricing page says "MPS (44.1kHz) or
WAV (48kHz) output" (the "MPS" is verbatim). The API reference and OpenAPI list 28 formats including
Opus, PCM and telephony codecs
([capabilities](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-capabilities/2026-10-26.md),
[pricing](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-pricing/2026-10-26.md)). The
enum is the machine-readable truth; the two prose descriptions are marketing simplifications.

WAV is also **new**: the changelog entry of 2026-10-19 announces the seven `wav_*` values
([changelog](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-changelog/2026-10-26.md)). fal's
schema, last updated 2026-04-21, has no WAV and cannot have had it.

Higher-quality output is plan-gated on the vendor route: 192 kbps MP3 requires Creator tier or above,
and 44.1 kHz PCM/WAV requires Pro or above
([API reference](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-reference/2026-10-26.md)).
The page does not say which plan the advertised 48 kHz WAV needs, so the cheapest plan on which the
headline format is actually available is unknown.

## Limitations and constraints

- **30 seconds is the hard ceiling**, and 22 seconds on fal. There is no extension, continuation or
  stitching mechanism: a longer bed must be assembled by looping or by editing. The docs' advice to
  "generate 30s of 'soft rain' then loop it endlessly" is the vendor's own workaround
  ([capabilities](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-capabilities/2026-10-26.md)).
- **The duration floor is stated two ways**: 0.1 s on the capability page against 0.5 s in the API
  reference, the OpenAPI schema and fal's schema. A pipeline that sends 0.2 s will pass one document
  and fail the others; only the API is authoritative.
- **"Looping … for sound effects longer than 30 seconds"** — the capability page's own phrasing — is
  unreconciled with a 30-second maximum. Either the sentence is stale from a longer-duration era, or
  looping changes the achievable length; no source says which.
- **The 450-character prompt cap is a product-page number.** The API reference declares no maximum and
  the OpenAPI schema has no `maxLength`; fal enforces 450. Whether the vendor API rejects a longer
  prompt is unknown.
- **No determinism.** There is no `seed` parameter anywhere in this API, so identical requests are not
  reproducible and A/B comparisons need many samples.
- **No reference or editing inputs.** The endpoint accepts text only — no audio reference, no
  inpainting, no continuation, no video-to-audio. ElevenLabs' video-to-music and stem-separation
  features live on the music endpoints, not here.
- **Metering is stated inconsistently** (see below), so cost per second of audio is a list rate, not a
  billing guarantee.
- **Zero retention is enterprise-only.** `enable_logging=false` exists but "may only be used by
  enterprise customers", and it only reached sound effects on 2026-10-19
  ([changelog](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-changelog/2026-10-26.md)).
- **Watermarking is on and has no opt-out.** ElevenLabs "embeds watermarks into audio we generate", only
  its own Audio Detector can read them, and no `watermark` parameter exists
  ([watermarking](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-watermarking/2026-10-26.md)).
  The pages say "audio we generate" rather than naming sound effects; fal proxies to ElevenLabs, so the
  watermark should be present there too, but no source states it and no test was run.
- **No weights, no self-hosting.** fal marks the endpoint `hostingType: "proxy"` — forwarded to
  ElevenLabs, not run by fal.
- **Host schema drift is a real integration hazard**: fal still caps duration at the v1 value of 22 s and
  offers no WAV, despite being the roster's nominated host.
- **No language, style, or quality documentation.** The models page lists languages as "N/A"; there is
  no MOS, no benchmark, no arena result, and no third-party measurement of this model in the corpus.

## Access, pricing, licensing

### Billing basis

**Per second of generated audio**, priced at $0.12 per minute on the vendor's list and $0.002 per second
on fal — the same rate. It is not billed per character: the vendor states "The cost is not influenced by
the text input you use"
([pricing](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-pricing/2026-10-26.md),
[product guide](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-product-guide/2026-10-26.md),
[fal](../../sources/fal.ai/elevenlabs-sound-effects-v2/2026-10-26.md)).

| Route | Rate | Basis | Practical maximum |
| --- | --- | --- | --- |
| ElevenLabs API | $0.12 / minute | "Price per minute" | $0.06 for a 30-second effect |
| ElevenLabs platform | 40 credits / second when duration is specified | credits, per the capability page | 2,400 credits for a 60-second total |
| fal | $0.002 / second | `llms.txt` price string | $0.044 for a 22-second effect |

The vendor's own pricing page contradicts itself on the unit. One FAQ entry says "API usage is billed in
US dollars, not credits… Sound Effects $0.12 per minute"; the next says "Music and Sound Effects are
billed per generation." A per-generation charge and a per-minute rate cannot both be the basis, and no
page reconciles them. The capability page adds a third accounting — **40 credits per second** when a
duration is set — which only applies when the caller specifies `duration_seconds`; auto-duration
generations have no stated credit cost
([pricing](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-pricing/2026-10-26.md),
[capabilities](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-capabilities/2026-10-26.md)).

Credits and dollars do not reconcile either. ElevenLabs' plan table prices 30,000 credits at $6 on
Starter, $22 for 121,000 on Creator and $99 for 600,000 on Pro
([plan/credit table, captured for the Eleven v4 page](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).
At 40 credits per second, one minute of sound effects costs 2,400 credits — about $0.48 on Starter, $0.44
on Creator and $0.40 on Pro, against the $0.12 API rate. **That arithmetic is this page's inference, not
a vendor statement**; the vendor never ties its credit schedule to its USD schedule, and the two may
describe different surfaces (platform vs API).

Auto-duration is the cost risk: when `duration_seconds` is omitted the model chooses the length, so the
price of a request is unknown until after generation.

### Licensing and commercial terms

- **"Royalty-free"** is the vendor's word for the output on the API pricing page, listed as a product
  feature rather than a licence clause
  ([pricing](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-api-pricing/2026-10-26.md)).
- **Output ownership:** "as between you and ElevenLabs, you retain all rights in and to your Output."
- **Commercial use is plan-gated:** free-tier users "may only use the Services for non-commercial
  purposes"; paid subscribers may use it commercially, subject to the Prohibited Use Policy. The terms
  were last updated 2026-10-09
  ([terms of use](../../sources/elevenlabs.com/elevenlabs-sound-effects-v2-terms-of-use/2026-10-26.md)).
- **No weights licence exists** — nothing is downloadable or self-hostable. fal's `licenseType:
  "commercial"` is fal's own field describing use through fal, not an ElevenLabs grant.
- **The Prohibited Use Policy was not captured**, so the limits on commercial use are unknown beyond the
  paid-plan gate.

## Unresolved questions

1. **When exactly did v2 launch?** The archive brackets it to 2025-08-14 → 2025-09-02 (docs) and
   2025-06-21 → 2025-09-08 (API reference), and fal listed it 2025-09-02. No vendor announcement,
   changelog entry or blog post exists in anything captured.
2. **What is `eleven_text_to_sound_v3`?** Selectable in the live API, absent from the models page,
   changelog, pricing and every host. Unknown status, price, capability, and relationship to v2.
3. **Is the 30-second cap enforced per request, or does looping lift it?** The capability page says
   looping is "for sound effects longer than 30 seconds" while also stating a 30-second maximum.
4. **Is the floor 0.1 s or 0.5 s?** Vendor pages disagree; only the API decides.
5. **Does the API enforce the 450-character prompt cap** that the product page states and fal enforces?
6. **How is it actually billed** — per minute, per generation, or per 40-credit second — and do failed
   or auto-duration generations bill?
7. **Does fal proxy the current v2 revision?** fal's schema still caps duration at the v1-era 22 s and
   predates the WAV addition, so its `updated_at` (2026-04-21) and the vendor's behaviour have diverged.
8. **Does the ElevenLabs watermark survive on fal output?** Untested and unstated.
9. **How good is it?** No benchmark, MOS, preference study, or third-party measurement exists in the
   corpus; the only quality claims are vendor copy and four example prompts.
10. **Why is it absent from Replicate** while the rest of the ElevenLabs audio line is there?

## Evidence status

Evidence floor: **met.** First-party: nine ElevenLabs records — the sound-effects capability page, the
API reference, the live OpenAPI schema, the models overview, the API pricing page, the October 19 2026
changelog, the product guide and help-centre FAQs, the terms of use, and the watermarking pages — plus
one archived documentation history record that dates the v1→v2 transition from the vendor's own pages.
Independent host: one fal record (catalogue metadata, OpenAPI schema, price strings, `llms.txt`, plus
the v1 bare-ID probe) and one Replicate negative record. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; prices are published schedules that agree
across two publishers; the credit-versus-dollar arithmetic is this page's inference and is labelled as
such.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same ten prompts through `eleven_text_to_sound_v2` on ElevenLabs and fal, scored for prompt adherence
and loop seam quality; a 0.2 s and a 31 s request on each route to find where each limit actually bites;
a 451-character prompt to test the vendor cap; the same prompt at `prompt_influence` 0 and 1; and an
ElevenLabs Audio Detector pass over fal-produced files to test watermark survival.

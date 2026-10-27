# MiniMax Music 2.6

A **text-to-music** model from MiniMax: given a style prompt and optional lyrics, it composes and
sings a complete track in one request, with an instrumental-only mode and an auto-lyrics mode. It
launched **2026-04-10** as a "global creative beta"
([launch post](../../sources/minimax.io/music-26-launch/2026-10-26.md)), inside the roster's one-year
window, and it is the fourth step in a music line that runs 1.5 → 2.0 → 2.5/2.5+ → 2.6 → 3.0
([release notes](../../sources/minimax.io/music-release-notes/2026-10-26.md)).

Its defining fact at the capture date is that it is **retired at the vendor and still on sale at three
independent hosts**. MiniMax closed the paid music API to new users on 2026-08-20, discontinued the
free tiers, and lists `music-2.6` as Retired
([guide notice](../../sources/minimax.io/music-generation-guide/2026-10-26.md),
[model list](../../sources/minimax.io/music-26-model-list/2026-10-26.md),
[pricing](../../sources/minimax.io/music-pricing/2026-10-26.md)). fal, Replicate and WaveSpeedAI all
still serve it at the same $0.15 per track, and none of the three host pages carries a deprecation
notice. It is not a current model; it is a retained, cheap, closed-weight one.

## Identity

- **Canonical name:** MiniMax Music 2.6. The roster label matches the first-party launch post and
  release-notes entry.
- **Model ID:** `music-2.6` on the MiniMax Open Platform, at `POST /v1/music_generation`
  ([API reference](../../sources/minimax.io/music-generation-api/2026-10-26.md)). A free variant,
  `music-2.6-free` (3 RPM), existed and is discontinued.
- **Host IDs:**

| Route | Identifier | Listing date |
| --- | --- | --- |
| MiniMax API | `model: "music-2.6"` | 2026-04-10 (launch) |
| fal | `fal-ai/minimax-music/v2.6` | `date` 2026-04-11 ([fal](../../sources/fal.ai/minimax-music-2-6/2026-10-26.md)) |
| Replicate | `minimax/music-2.6` (official, MiniMax-published) | version created 2026-04-09T23:39Z ([Replicate](../../sources/replicate.com/minimax-music-2-6/2026-10-26.md)) |
| WaveSpeedAI | `minimax/music-2.6` | not stated ([WaveSpeed](../../sources/wavespeed.ai/minimax-music-2-6/2026-10-26.md)) |

- **Vendor:** MiniMax. The contracting entity for the platform API is "Nanonoble Pte. Ltd."
  (Singapore) ([terms](../../sources/minimax.io/open-platform-terms-of-service/2026-10-26.md)).
- **Release date, reconciled:** the vendor post is dated 2026-04-10; Replicate's first version is
  timestamped 2026-04-09T23:39Z, which is 2026-04-10 morning in Singapore; fal listed it 2026-04-11.
  The three agree to within a day, so **2026-04-10** is the canonical date. The vendor's own
  release-notes entry gives only the month ("Apr. 2026").
- **Spelling:** MiniMax writes "MiniMax Music 2.6" in prose and `music-2.6` as the ID; fal's title is
  "Minimax Music 2.6" with a lowercase `m`. Cosmetic only.
- **Siblings, all separate model IDs, not modes:** `music-cover` (cover generation from a reference
  audio, launched alongside 2.6), and the predecessors `music-2.5+`, `music-2.5`, `music-2.0`,
  `music-1.5`. The successor is **MiniMax Music 3** (`music-3.0`), which is open-weights.
- **Numbering collision:** MiniMax's `speech-2.6-hd` / `speech-2.6-turbo` are text-to-speech models
  from a different line; "2.6" carries no shared meaning across modalities
  ([fal catalogue](../../sources/fal.ai/minimax-music-2-6/2026-10-26.md)).

### Distinguishing Music 2.x

| | Music 2.0 | Music 2.5 | Music 2.5+ | Music 2.6 | Music 3.0 |
| --- | --- | --- | --- | --- | --- |
| Vendor date | 2025-10-29 | 2026-01-16 | 2026-03 | **2026-04-10** | 2026-07-16 (vendor notes) / 2026-08-13 (vendor blog, fal) |
| Vendor tagline | "Enhanced musical expression" | "Direct the detail, define the real" | "Instrumental unlocked" | "Cover Reborn. Bass Redefined." | "Intent Understood • Sound Elevated • Vocals Humanized" |
| Instrumental mode | — | — | yes ("Instrumental unlocked") | yes | yes |
| Cover | no | no | no | **yes** (`music-cover`, new) | not documented in the sources captured |
| Price | $0.03 / up to 5 min | $0.15 / up to 5 min | $0.15 / up to 5 min | **$0.15 / up to 5 min** | $0.15 / up to 5 min (API); $0.002/s on fal |
| Weights | closed | closed | closed | **closed** | open (`MiniMaxAI/MiniMax-Music3`) |
| Status at capture | Retired | Retired | Retired | **Retired at vendor, hosted elsewhere** | Retired at vendor; open weights + fal |

Sources: [pricing](../../sources/minimax.io/music-pricing/2026-10-26.md),
[release notes](../../sources/minimax.io/music-release-notes/2026-10-26.md),
[model list](../../sources/minimax.io/music-26-model-list/2026-10-26.md),
[launch post](../../sources/minimax.io/music-26-launch/2026-10-26.md),
[fal](../../sources/fal.ai/minimax-music-2-6/2026-10-26.md),
[Hugging Face](../../sources/huggingface.co/minimax-music-26-weights/2026-10-26.md).

Two conclusions follow. **2.6 is a real version, not a repackaging of 2.5:** the vendor announces a
new capability with it (cover), renames the model, charges 5× the 2.0 rate, and the fal schemas differ
— v2.6 accepts three more structure tags (`[Post Chorus]`, `[Transition]`, `[Build Up]`) and raises
`prompt`'s minimum length from 1 to 10
([fal](../../sources/fal.ai/minimax-music-2-6/2026-10-26.md)). **But 2.6 is also not the tier to
choose today:** its own successor is open-weights, cheaper per second on fal, and exposes controls
(duration, seed, steps, guidance) that 2.6 never had.

## Current assessment

- **Status: retired first-party, alive on hosts, superseded.** MiniMax's model list places
  `music-2.6` under Retired with no date; its pricing page labels it "Discontinued"; its guide says
  paid music APIs stopped accepting new users on 2026-08-20
  ([model list](../../sources/minimax.io/music-26-model-list/2026-10-26.md),
  [pricing](../../sources/minimax.io/music-pricing/2026-10-26.md),
  [guide](../../sources/minimax.io/music-generation-guide/2026-10-26.md)). fal still reports
  `status: "public"`, `deprecated: false`; Replicate's model page is live with 80.1K runs and no
  deprecation notice; WaveSpeedAI lists it beside Music 2.5 and Music 3.0.
- **The vendor contradicts itself on availability.** The same MiniMax site, captured the same day,
  keeps `music-2.6` in a Music table with a feature line
  ([catalogue](../../sources/minimax.io/music-26-catalogue/2026-10-26.md)) while the model list says
  Retired, and the guide says only *new* users are excluded. Read together: existing paying API
  accounts may still call it, new ones cannot, and the consumer app is the vendor's recommended path.
  Neither the retirement date nor a migration target is published.
- **Quality is unmeasured.** Every capability claim on this page is vendor or host copy. No benchmark,
  listening test, preference study or independent re-measurement was captured. Claims such as "BPM and
  key match 99%+ of the time" and "sub-bass actually hits now" are recorded as claims, not findings.

## Documented capabilities

Vendor and host documentation only; no direct tests were run.

- **Song from prompt + lyrics.** `prompt` describes "style, mood, and scenario"; `lyrics` carries the
  vocal content; `\n` separates lines
  ([API reference](../../sources/minimax.io/music-generation-api/2026-10-26.md)).
- **Structure tags.** 14 tags on the vendor API — `[Intro]`, `[Verse]`, `[Pre Chorus]`, `[Chorus]`,
  `[Interlude]`, `[Bridge]`, `[Outro]`, `[Post Chorus]`, `[Transition]`, `[Break]`, `[Hook]`,
  `[Build Up]`, `[Inst]`, `[Solo]`. The tag set is not stable across documents: Replicate's README
  swaps `[Post Chorus]` for `[Drop]`, while its own schema description and the vendor, fal and
  WaveSpeed lists all use the 14 above. A prompt that works on one route may be interpreted
  differently on another.
- **Instrumental mode.** `is_instrumental: true` drops vocals and makes `lyrics` optional while making
  `prompt` required. Instrumental generation predates 2.6 — Music 2.5+ was marketed as "Instrumental
  unlocked" — so it is not a 2.6 feature.
- **Auto lyrics.** `lyrics_optimizer: true` writes lyrics from the prompt when `lyrics` is empty.
- **Prompt-level musical control.** BPM, key, genre, mood, vocal type, instruments and mix style can be
  written into the prompt; the 2.6 launch post calls instruction control "comprehensively enhanced" and
  names "BPM, key, song structure, emotional arc"
  ([launch post](../../sources/minimax.io/music-26-launch/2026-10-26.md)). Replicate's README restates
  this with a number — "matches 99%+ of the time" for exact BPM and key — with no method attached
  ([Replicate](../../sources/replicate.com/minimax-music-2-6/2026-10-26.md)).
- **Cover generation is a separate model, not a 2.6 mode.** The launch post introduces cover as "new in
  Music 2.6", but the API exposes it as `model: "music-cover"`, and the input schema for `music-2.6`
  has no reference-audio field ([API reference](../../sources/minimax.io/music-generation-api/2026-10-26.md)).
  Cover accepts 6 s–6 min of reference audio up to 50 MB, either one-step (lyrics auto-extracted by
  ASR) or two-step via `music_cover_preprocess`, which returns a `cover_feature_id` valid for 24 hours.
  Only Replicate carries it (`minimax/music-cover`); fal and WaveSpeedAI do not.
- **Output.** Stereo (`music_channel: 2` in the documented response), 16–44.1 kHz, 32–256 kbps,
  mp3/wav/pcm; defaults 44.1 kHz / 256 kbps / mp3 on every route
  ([API reference](../../sources/minimax.io/music-generation-api/2026-10-26.md),
  [fal](../../sources/fal.ai/minimax-music-2-6/2026-10-26.md),
  [Replicate](../../sources/replicate.com/minimax-music-2-6/2026-10-26.md)).
- **Transport.** Non-streaming by default; `stream: true` with `output_format: hex`, or `url` links
  that "expire after 24 hours". Hosts return a finished file (WaveSpeed and Replicate both warn about
  the 24-hour expiry).
- **Rate limit.** 120 RPM on the paid API, 3 RPM on the discontinued free variant.

## Limitations and constraints

- **Song length is 5 minutes or 6, depending on who you ask.** The vendor's billing unit is "$0.15/up-to-5
  minutes music" and WaveSpeedAI states "per song (up to 5 minutes)"; Replicate's README says "up to 6
  minutes per generation (most songs land between 2 and 4 minutes)"
  ([pricing](../../sources/minimax.io/music-pricing/2026-10-26.md),
  [WaveSpeed](../../sources/wavespeed.ai/minimax-music-2-6/2026-10-26.md),
  [Replicate](../../sources/replicate.com/minimax-music-2-6/2026-10-26.md)). No vendor document states
  a maximum duration, and the API has no duration parameter. Unresolved: the 6-minute figure may be a
  host-side observation of what the model will emit, or an error.
- **No duration control.** You cannot ask for a 30-second cue. fal's successor endpoint for Music 3
  does expose `duration` (1–300 s), which makes the omission concrete.
- **No seed, despite a README promise.** Replicate's README documents "a seed parameter
  (0–1,000,000) for deterministic output", but neither Replicate's nor fal's input schema has a `seed`
  field, and the vendor API does not expose one. The same prompt and lyrics "produce different
  arrangements each time" per the README itself. Reproducibility is therefore not available as
  documented on any route captured here.
- **Lyrics ceilings differ by host.** Vendor 1–3500 characters; fal max 3500; Replicate 1–3500;
  WaveSpeedAI 10–3000. Prompt ceilings: vendor 0–2000 (2000 required when instrumental), fal
  `minLength` 10, Replicate 0–2000, WaveSpeed max 2000.
- **Languages: host-only evidence, and thin.** The only statement in the corpus is Replicate's:
  "English and Mandarin Chinese have the strongest support. Other languages work but with less
  consistent pronunciation." MiniMax publishes no music language list — its Music table has no
  language column ([catalogue](../../sources/minimax.io/music-26-catalogue/2026-10-26.md)). Treat
  non-English/Mandarin lyric quality as unverified.
- **Moderation is present but undocumented.** The vendor error code `1026` is "Content flagged for
  sensitive material"; fal and WaveSpeed expose `enable_safety_checker` (default true) where
  "Authorized callers may set false to request relaxed screening". Who counts as authorized, and what
  relaxed screening still blocks, is not documented. A refusal on one route is not evidence about the
  model's general behaviour.
- **No weights, no self-hosting.** `MiniMaxAI`'s public Hugging Face listing contains Music 3 and no
  Music 2.6 repository; the first open music release is Music 3
  ([Hugging Face](../../sources/huggingface.co/minimax-music-26-weights/2026-10-26.md)). Every route to
  2.6 is closed and proxied.
- **Cover is a rights risk with no guidance.** The cover workflow takes an existing song and rewrites
  its style while keeping the melody. The platform terms require you to own or be licensed for the
  input and say nothing about cover generation, derivative-work status, or music training data
  ([terms](../../sources/minimax.io/open-platform-terms-of-service/2026-10-26.md)).
- **No watermark documentation.** No MiniMax page captured states that music output carries a
  watermark. The terms instead put a marking duty on integrators who offer services built on the API.

## Access, pricing, licensing

### Billing basis

**Per generated track, flat**, not per second and not per minute. Four routes, one price:

| Route | Price | Unit (verbatim) |
| --- | --- | --- |
| MiniMax API | $0.15 | "up-to-5 minutes music" (Discontinued) |
| fal | $0.15 | "per audios" — `billing_unit: "audios"`, `provider_type: "partner"` |
| Replicate | $0.15 | "per output audio file" ("or around 66 files for $10") |
| WaveSpeedAI | $0.15 | "per song (up to 5 minutes)" |

Sources: [pricing](../../sources/minimax.io/music-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/minimax-music-2-6/2026-10-26.md),
[Replicate](../../sources/replicate.com/minimax-music-2-6/2026-10-26.md),
[WaveSpeed](../../sources/wavespeed.ai/minimax-music-2-6/2026-10-26.md).

The agreement is exact, which is the strongest pricing evidence on the page: three hosts charging the
vendor's own list rate to the cent, with no host markup and no host discount. It also means cost is
insensitive to length — a 30-second jingle costs the same as a five-minute song, so per-second
comparison with Music 3 on fal ($0.002/s) favours 2.6 only above roughly 75 seconds.

The vendor also sells lyrics generation separately at $0.01 per song (discontinued), and the two-step
cover preprocess call is free. Replicate's page carries two unreconciled compute figures ($0.0001 per
second, p50 $0.012) that describe the CPU line rather than the customer charge.

### Licensing and commercial terms

- **Output ownership:** "you retain your ownership rights in Client input and generated content", with
  MiniMax reserving the right to use both "to provide, maintain, develop, and improve our Services"
  ([terms](../../sources/minimax.io/open-platform-terms-of-service/2026-10-26.md)).
- **Commercial use on hosts:** fal marks the endpoint `licenseType: "commercial"` and the page carries
  a "Commercial use" badge — that is fal's assertion about its own service, not a MiniMax grant
  ([fal](../../sources/fal.ai/minimax-music-2-6/2026-10-26.md)).
- **No weights licence exists** for 2.6; there is nothing to self-host and no weights terms to check.
- **Integrator marking duty:** a customer offering a service built on the API "must … add non-intrusive
  identifiers … and place a prominent mark … to inform the public of the use of deep synthesis
  technology". This is an obligation on the integrator, not evidence that MiniMax marks outputs.
- **Data flow:** Replicate states "Data from this model is sent from Replicate to MiniMax", linking
  MiniMax's privacy policy and terms.

## Unresolved questions

1. **Is 2.6 actually retired, or only closed to new users?** The model list says Retired, the pricing
   page says Discontinued, the guide says existing paying users continue, and the catalogue still lists
   it. No date and no migration path are published.
2. **Is the maximum song 5 minutes or 6?** Vendor billing says 5, WaveSpeedAI says 5, Replicate says 6.
   No document states an enforcement mechanism.
3. **Which languages work, and how well?** Only Replicate comments, and only qualitatively; the vendor
   publishes no music language list at all.
4. **Is cover really part of 2.6?** The launch post says "new in Music 2.6"; the API and catalogue
   model it as a separate `music-cover` ID, and `music-2.6` cannot accept reference audio. Whether 2.6
   and `music-cover` share a checkpoint is not stated.
5. **Why does Replicate's README promise a seed that no schema exposes?** Either the field was removed,
   or the README was written against an internal API. Unverified on all routes.
6. **Do any hosts carry the vendor's retirement forward?** fal and Replicate both still list 2.6 as
   live with no deprecation flag three weeks after the vendor's notice. When, or whether, they will
   delist is unknown.
7. **Is there a watermark?** No source says yes, no source says no. The only marking language is the
   integrator duty in the terms.
8. **How good is it, independently?** No benchmark, MOS, listening test or preference data was
   captured. The only latency figure tied to a real request is Replicate's published example:
   `predict_time` 53.9 s for one track (host-published, single warm run, not a benchmark).

## Evidence status

Evidence floor: **met.** First-party: eight MiniMax records — the 2026-04-10 launch post, the music
generation guide with the 2026-08-20 service notice, the `POST /v1/music_generation` API reference, the
pricing page's music section, the Model List retirement table, the Models overview music table, the
release-notes music entries, and the Open Platform terms of service. Independent hosts: fal (catalogue
metadata, `llms.txt`, OpenAPI schema, billing payload, sibling endpoints), Replicate (official model
page, README, embedded OpenAPI `Input`, billing config, one example prediction), and WaveSpeedAI (model
page, parameter table, price statement). Weight availability: a Hugging Face organisation-listing
capture. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Prices are four published schedules that happen to agree; capability statements are vendor and
host copy; the one latency number is a single host-published example.

The next useful evidence would be a small reproducible set against named endpoints and dates: the same
lyrics and prompt on all four routes at 44.1 kHz/256 kbps, compared for arrangement, vocal
intelligibility and stereo image; a deliberately over-length lyric to find where each host's ceiling
bites; an exact-BPM/key test (e.g. "E minor, 90 BPM") measured against the output file rather than
trusted from the README's 99% claim; non-English lyrics to test the language claim; and a cover run on
Replicate to see whether `music-cover` reproduces the melody of a known reference track.

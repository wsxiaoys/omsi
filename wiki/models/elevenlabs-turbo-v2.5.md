# ElevenLabs Turbo v2.5

ElevenLabs' first low-latency multilingual speech model, launched **2024-07-19**
([launch post](../../sources/elevenlabs.com/eleven-turbo-v2-5-launch/2026-10-26.md)) — **outside the
roster's one-year window by more than two years**. It is retained here as a specialist exception, and
its original date is not re-dated anywhere on this page.

The model ID is `eleven_turbo_v2_5`. At capture the vendor files it under "Older Models … maintained
for backward compatibility but are not recommended for new projects" and names `eleven_flash_v2_5` as
the replacement ([models FAQ](../../sources/elevenlabs.com/eleven-turbo-v2-5-models-faq/2026-10-26.md)),
while both hosts checked still serve it as an ordinary endpoint. It is **deprecated but live**: the
vendor stopped recommending it, not serving it.

## Identity

- **Canonical name:** Eleven Turbo v2.5. **Model ID:** `eleven_turbo_v2_5`
  ([models FAQ](../../sources/elevenlabs.com/eleven-turbo-v2-5-models-faq/2026-10-26.md)).
- **Aliases:** "Turbo v2.5"; `turbo_v2.5` in 2024 changelog prose; "ElevenLabs TTS Turbo v2.5" (fal
  display name); `elevenlabs/turbo-v2.5` (Replicate).
- **Vendor:** ElevenLabs. No third-party developer is credited.
- **Release:** 2024-07-19, per the launch post's rendered date and its JSON-LD
  `datePublished` ([launch](../../sources/elevenlabs.com/eleven-turbo-v2-5-launch/2026-10-26.md)). The
  model was already in production by 2024-10-13, when the changelog lists stability fixes "most
  noticeable on `turbo_v2` and `turbo_v2.5`"
  ([changelog](../../sources/elevenlabs.com/changelog-2024-10-turbo-v2-5/2026-10-26.md)).
- **Host endpoints:**

| Route | Endpoint | Status at capture |
| --- | --- | --- |
| ElevenLabs | `POST /v1/text-to-speech/{voice_id}` with `model_id: eleven_turbo_v2_5` | served; labelled "Older Models" ([FAQ](../../sources/elevenlabs.com/eleven-turbo-v2-5-models-faq/2026-10-26.md)) |
| fal | `fal-ai/elevenlabs/tts/turbo-v2.5` | `status: "active"`, no `deprecated`/`removed` flag, `updated_at` 2026-04-21 ([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md)) |
| Replicate | `elevenlabs/turbo-v2.5` | official, 121,511 runs, latest version 2025-10-24 ([Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)) |

  The roster row's `fal-ai/elevenlabs/tts/turbo-v2.5` label is **correct** — unlike the Eleven v4
  rows, this endpoint never moved to fal's newer `elevenlabs/` namespace.

- **Siblings:** `eleven_turbo_v2` (English-only predecessor), `eleven_flash_v2_5` (the vendor's named
  replacement), `eleven_flash_v2`, `eleven_multilingual_v2`, and the v3/v4 families. "Turbo" is
  **not** a single product line: `eleven_v4_turbo` is a 2026 flagship at the same $0.04 list price
  and a different model ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).

### Distinguishing Turbo v2.5 from Multilingual v2, Turbo v2, Flash v2.5, v3 and v4

| | Turbo v2.5 | Turbo v2 | Flash v2.5 | Multilingual v2 | Eleven v3 | Eleven v4 / v4 Turbo |
| --- | --- | --- | --- | --- | --- | --- |
| Model ID | `eleven_turbo_v2_5` | `eleven_turbo_v2` | `eleven_flash_v2_5` | `eleven_multilingual_v2` | `eleven_v3` | `eleven_v4` / `eleven_v4_turbo` |
| Vendor status at capture | "Older Models", not recommended | "Older Models" | current flagship | current flagship (called "a previous generation" model in the models page prose) | "previous generation" | current flagship |
| Languages | 32 (enumerated) | 1 (`en`) | the same 32 as Turbo v2.5 | 29 | 70+ (85 codes listed) | 90+ (84 codes listed) |
| Latency claim | ~250–300 ms | ~250–300 ms | ~75 ms | not stated (vendor says higher latency than Flash) | ~280 ms for v3 Conversational | ~100 ms for v4 Turbo |
| Character limit | 40,000 | 30,000 | 40,000 | 10,000 | 5,000 | 10,000 |
| List price / 1K chars | $0.04 | $0.04 | $0.04 | $0.08 | $0.08 | $0.08 / $0.04 |
| Replacement named by vendor | `eleven_flash_v2_5` | `eleven_flash_v2` | — | — | — | — |

Sources: [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
[models FAQ](../../sources/elevenlabs.com/eleven-turbo-v2-5-models-faq/2026-10-26.md),
[price list](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md),
[archived models page 2025-11-06](../../sources/archive.org/elevenlabs-docs-models-turbo-v2-5-snapshots/2026-10-26.md).

The table is the whole argument for why this model exists on its own page rather than as a footnote to
Flash v2.5: separate ID, separate language history (it is the model that *added* Vietnamese, Hungarian
and Norwegian — 32 languages versus Multilingual v2's 29), separate 40,000-character tier, and a
documented status change that Flash v2.5 never had.

**Identity ambiguities that remain open:**

1. **Three different "release" dates.** The vendor says 2024-07-19; fal's catalogue `date` field says
   2025-02-27; Replicate's `created_at` is 2025-10-24. Only the vendor's date is a release date — the
   other two are host listing dates, and fal never explains its field
   ([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md),
   [Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)). A reader who took fal's
   `date` at face value would place this model inside the roster window; it does not belong there.
2. **No checkpoint identifier.** The model is served under one ID with no revision string, and
   ElevenLabs changed its documented status — flagship to deprecated — without any version bump. No
   claim on this page can be pinned to a specific weights revision, only to a capture date.
3. **Is Flash v2.5 the same model?** The vendor says the Turbo models are "functionally equivalent to
   the `eleven_flash_v2_5` and `eleven_flash_v2` models respectively, except the latency on the Flash
   models is lower on average", and separately that "the Flash models give very similar results"
   ([models FAQ](../../sources/elevenlabs.com/eleven-turbo-v2-5-models-faq/2026-10-26.md)). That is a
   vendor claim of near-equivalence between two separately named model IDs. Whether Flash v2.5 is a
   re-tuned Turbo v2.5 or a distinct model is not documented.

## Current assessment

**Deprecated, still served, and dominated by its own replacement.** The evidence is unusually
one-sided, because the vendor supplies both halves:

- The status label is explicit: "These models are maintained for backward compatibility but are not
  recommended for new projects", and the deprecated table's description of this row is "First
  generation low-latency model (outclassed by Flash models)" with replacement `eleven_flash_v2_5`
  ([FAQ](../../sources/elevenlabs.com/eleven-turbo-v2-5-models-faq/2026-10-26.md),
  [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Nothing is left on which Turbo v2.5 beats Flash v2.5.** They share the 32-language list, the
  40,000-character limit and the $0.04 list price; Flash v2.5 is quoted at ~75 ms against this
  model's ~250–300 ms. On the vendor's own numbers the replacement is equal on coverage and price and
  3–4× faster.
- **The vendor's older framing contradicts the newer one.** While Turbo v2.5 was current, the docs
  called it "an ideal choice for all scenarios where you'd use Flash v2.5, but where you're willing to
  trade off latency for higher quality voice generation"; the deprecated row now says it is
  "outclassed by Flash models"
  ([archived 2025-11-06 models page](../../sources/archive.org/elevenlabs-docs-models-turbo-v2-5-snapshots/2026-10-26.md)).
  Both statements are first-party, ~4 months apart. The earlier one claims a quality advantage the
  later one retracts, and no quality measurement supports either.
- **The deprecation happened between 2026-02-12 and 2026-03-12.** On 2026-02-12 the archived models
  page still carried Turbo v2.5 as a flagship card with the "~250ms-300ms" latency bullet; by
  2026-03-12 the card was gone and `eleven_turbo_v2_5` sat in the deprecated table. No changelog entry
  announces it, and no removal date is published
  ([archive](../../sources/archive.org/elevenlabs-docs-models-turbo-v2-5-snapshots/2026-10-26.md)).
- **Hosts do not reflect the deprecation at all.** fal returns `status: "active"` with no
  `deprecated`/`removed` keys and an `updated_at` of 2026-04-21, i.e. after the vendor's change;
  Replicate lists it as official and keeps serving it
  ([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md),
  [Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)). A host still serving a
  model says nothing about whether the vendor will keep doing so; here the two statuses point in
  opposite directions.
- **It is not dead in practice.** Every Professional Voice Clone is still automatically trained on
  Turbo v2.5 ([PVC docs](../../sources/elevenlabs.com/professional-voice-cloning/2026-10-26.md)), so
  existing cloned voices have a live Turbo v2.5 variant, and Replicate's 121,511 runs are real usage.

This is a **distinct model, not a repackaging** — different ID, different language history, its own
documented character tier — but it is a distinct model with no remaining advantage over its successor.
It is a retained specialist only in the weak sense that a working endpoint and existing PVC fine-tunes
still exist.

## Documented capabilities

Everything below is vendor or host documentation. **No direct tests were run.**

### Languages

32 languages, enumerated identically by the vendor, fal ("Supports 32 languages") and Replicate:

> Arabic, Bulgarian, Chinese, Croatian, Czech, Danish, Dutch, English, Filipino, Finnish, French,
> German, Greek, Hungarian, Hindi, Indonesian, Italian, Japanese, Korean, Malay, Norwegian, Polish,
> Portuguese, Romanian, Russian, Slovak, Spanish, Swedish, Tamil, Turkish, Ukrainian, Vietnamese

([models FAQ](../../sources/elevenlabs.com/eleven-turbo-v2-5-models-faq/2026-10-26.md),
[fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md),
[Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)). The set is exactly
Multilingual v2's 29 plus Hungarian, Norwegian and Vietnamese — the three languages the launch post
calls new ([launch](../../sources/elevenlabs.com/eleven-turbo-v2-5-launch/2026-10-26.md)). Flash v2.5
carries the same 32, so language coverage is not a reason to choose Turbo v2.5 over it.

`language_code` (ISO 639-1) is supported on this model: the API reference's only exclusion is "not
supported for multilingual_v2 models"
([API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).
fal exposes the parameter; Replicate's input list does not include it.

### Control surface

- **Voice settings:** `stability` (default 0.5), `similarity_boost` (0.75), `style` (0), `speed`
  (0.7–1.2 on fal, default 1), `use_speaker_boost` (true). fal and Replicate both expose stability,
  similarity and style; fal additionally exposes `speed`, `previous_text`/`next_text`,
  `language_code`, `apply_text_normalization` and a `timestamps` flag; Replicate additionally exposes
  `seed` and `optimize_streaming_latency` (0–4) but **not** `speed`, `language_code`,
  `previous_text`/`next_text` or `apply_text_normalization`
  ([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md),
  [Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)).
- **Long-form stitching:** `previous_text` / `next_text` on the vendor API and fal;
  `previous_request_ids` / `next_request_ids` on the vendor API only.
- **SSML break tags:** the vendor's support page states the rule by exclusion — "All of our models,
  **with the exception of Eleven v4 and Eleven v3**, support SSML break tags" — which includes Turbo
  v2.5 ([SSML page](../../sources/elevenlabs.com/tts-ssml-break-tags-model-coverage/2026-10-26.md)).
  A second vendor page lists break-tag support only for "Multilingual v2, Flash v2, and Flash v2.5"
  and omits Turbo v2.5 ([pauses page](../../sources/elevenlabs.com/tts-how-can-i-add-pauses/2026-10-26.md)).
  The two pages disagree; neither references the other and no test was run, so this page does not
  settle it. Pauses are capped at 3 seconds where break tags work.
- **Phoneme tags are *not* available:** the vendor names only "Eleven Flash v2 and Eleven Turbo v2" as
  SSML-phoneme models, English-only
  ([SSML page](../../sources/elevenlabs.com/tts-ssml-break-tags-model-coverage/2026-10-26.md)).
- **Voice cloning:** all PVCs "will automatically train on the Flash v2.5, Turbo v2.5 and Multilingual
  v2 models" ([PVC docs](../../sources/elevenlabs.com/professional-voice-cloning/2026-10-26.md)).
  Host access to cloned voices differs sharply: fal's `voice` field documents 20 preset names with
  default "Rachel" and no custom-voice-ID field, while Replicate accepts a "Voice ID or name" with the
  Adam voice ID (`pNInz6obpgDQGcFmaJgB`) as default
  ([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md),
  [Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)).

### Latency positioning

The vendor's own figure is **~250–300 ms**, footnoted "Excluding application & network latency", on
both the flagship card and the model table of the 2025-11-06 and 2026-02-12 archived pages
([archive](../../sources/archive.org/elevenlabs-docs-models-turbo-v2-5-snapshots/2026-10-26.md)).
Replicate restates "~250-300ms – ideal for real-time applications"
([Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)). For scale, the same vendor
pages put Flash v2.5 at ~75 ms, Eleven v3 Conversational at ~280 ms and Eleven v4 Turbo at ~100 ms
([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).

Turbo v2.5 is therefore **a 2024-generation low-latency model, not a current one**: it sits in the
same latency band as v3 Conversational and 3–4× behind the model that replaced it. fal's own copy
calls it "High quality with lowest latency", which contradicts the vendor's table and should be read
as stale host marketing ([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md)).

The live models page no longer carries a Turbo v2.5 row or section at all, so the ~250–300 ms figure
survives only in archived snapshots and in host copy ([models
overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).

### Output formats and sample rate

| Route | Formats | Default | Notes |
| --- | --- | --- | --- |
| ElevenLabs API | 28 `output_format` values across MP3, PCM, WAV, Opus, μ-law, A-law | `mp3_44100_128` | top sample rate 48 kHz; 192 kbps MP3 requires Creator+, 44.1 kHz PCM/WAV requires Pro+ ([API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)) |
| fal | MP3 only as documented — **no `output_format` field** | — | output is a single `audio` file whose example URL ends `.mp3` ([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md)) |
| Replicate | `output_format` string, examples `mp3_44100_128`, `pcm_16000`, `wav` | `mp3_44100_128` | README describes output as "Base64-encoded MP3 (default) or other format audio file" ([Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)) |

No captured page states a per-model format restriction for `eleven_turbo_v2_5`, so the 28-value list
is the API-wide contract, not a verified Turbo v2.5 contract. fal's MP3-only surface is the practical
ceiling there.

## Limitations and constraints

- **Character limits differ by route.** Vendor: 40,000 characters (~40 minutes) per request, stated on
  the 2025-11-06 and 2026-02-12 archived pages and in the historical character-limits table. Replicate
  restates 40,000. fal's schema has `minLength: 1` and **no `maxLength`**, so fal's real ceiling is
  undocumented. The current vendor character-limits table **omits `eleven_turbo_v2_5` entirely**, so
  the 40,000 figure is no longer maintained
  ([archive](../../sources/archive.org/elevenlabs-docs-models-turbo-v2-5-snapshots/2026-10-26.md),
  [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md),
  [fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md),
  [Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md)).
- **Deprecation with no removal date.** The vendor says "Older Models" are "maintained for backward
  compatibility" and the explicit "will be removed in the future" sentence on the same table applies
  only to the v1 models, not to Turbo
  ([models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)). Nothing
  in the corpus states a retirement date, a notice period or whether existing PVC fine-tunes survive
  removal.
- **Concurrency entitlement is no longer documented.** The archived 2025-11-06 page had a
  "Concurrency Limit (Turbo & Flash)" column; the live page's column is "Concurrency Limit (Flash)",
  so Turbo v2.5 no longer has a published concurrency number
  ([archive](../../sources/archive.org/elevenlabs-docs-models-turbo-v2-5-snapshots/2026-10-26.md),
  [models overview](../../sources/elevenlabs.com/eleven-v4-models-overview/2026-10-26.md)).
- **Text normalization was plan-gated.** "For v2.5 models, this feature is available with Enterprise
  plans only" (2024-10-20 changelog). Both host schemas expose `apply_text_normalization` (fal) or
  omit it (Replicate) without restating that restriction, and the current API reference describes the
  parameter with no plan caveat
  ([changelog](../../sources/elevenlabs.com/changelog-2024-10-turbo-v2-5/2026-10-26.md),
  [API reference](../../sources/elevenlabs.com/eleven-v4-prompting-best-practices/2026-10-26.md)).
- **Watermarking is on and has no opt-out.** ElevenLabs "embeds watermarks into audio we generate",
  the mark is inaudible, and "No other platforms can currently detect ElevenLabs watermarks" — only
  the vendor's own Audio Detector can
  ([watermarking](../../sources/elevenlabs.com/eleven-v4-watermarking/2026-10-26.md)).
- **Closed weights, no self-hosting.** No weights, repo or licence to run it locally exists; every
  route is hosted.
- **Host gaps for voice access.** fal cannot reach a caller's cloned voice as documented (20 preset
  names only), so a PVC-dependent pipeline is not portable to fal.
- **Replicate lacks a `language_code` field**, so language is inferred from the text on that host.
- **No independent quality or latency evidence.** No WER, MOS, speaker-similarity score, arena result
  or third-party re-measurement of Turbo v2.5 was captured. The only numbers are the vendor's, restated
  by hosts.

## Access, pricing, licensing

### Billing basis

**Per input character on all three routes**, not per second of audio and not per request. fal's price
string is "per 1000 characters"; Replicate's billing metric is `character_input_count`; the vendor
sells TTS by the character/credit
([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md),
[Replicate](../../sources/replicate.com/eleven-turbo-v2-5/2026-10-26.md),
[price list](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).

| Route | Rate | 40,000-character request |
| --- | --- | --- |
| ElevenLabs API (list) | $0.04 / 1K chars | $1.60 |
| fal | $0.05 / 1K chars | $2.00 |
| Replicate | $0.05 / 1K chars ("20,000 characters for $1") | $2.00 |

Both hosts charge **25% above the vendor's list price** — the opposite of the Eleven v4 pattern, where
vendor and hosts matched to the cent. Turbo v2.5 is also no cheaper than Flash v2.5 anywhere: the
vendor prices the whole Flash/Turbo tier at $0.04 per 1K characters
([price list](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)).

Credits on the consumer side: "For V2 Flash/Turbo English and V2.5 Flash/Turbo Multilingual models,
discounted pricing applies for API usage, costing between 0.5 and 1 character"
([price list](../../sources/elevenlabs.com/eleven-v4-api-pricing/2026-10-26.md)). The vendor does not
reconcile that credit band with the USD-per-1K-character API price.

### Licensing and commercial terms

- **Output ownership:** "You retain ownership of any audio you generate."
- **Commercial rights:** "commercial usage rights are only available with paid plans. With a paid
  subscription, you may use generated audio for commercial purposes and monetize the outputs if you
  own the IP rights to the input content."

Both are the vendor's platform-level FAQ statements, captured on the Eleven v4 Text to Dialogue page —
they are written for the platform, not for v4 specifically, but no page captured for this model restates
them
([Text to Dialogue FAQ](../../sources/elevenlabs.com/eleven-v4-text-to-dialogue/2026-10-26.md)).

- **No weights licence exists** — hosted only.
- **Host licence fields are the host's assertion:** fal returns `license_type: "commercial"` for this
  endpoint, which describes use through fal, not an ElevenLabs grant
  ([fal](../../sources/fal.ai/eleven-turbo-v2-5/2026-10-26.md)).
- **Voice-cloning consent terms were not captured.** The vendor's cloning pages link the Terms of
  Service and Prohibited Use Policy, and state "All audio generated by our models can be instantly
  traced back to the user responsible for the generation", but neither policy page was retrieved for
  this model ([PVC docs](../../sources/elevenlabs.com/professional-voice-cloning/2026-10-26.md)).

## Unresolved questions

1. **When exactly was Turbo v2.5 deprecated, and when will it be removed?** The bracket is
   2026-02-12 → 2026-03-12 from archived snapshots; no changelog entry exists, and no removal date,
   notice period or end-of-support statement was found.
2. **Are Turbo v2.5 and Flash v2.5 the same weights?** The vendor calls them "functionally equivalent
   … except the latency", yet they are separate IDs with separate listings and separate histories. No
   source says whether Flash v2.5 is a re-tuned Turbo v2.5.
3. **What is the real character ceiling on fal?** Its schema sets no `maxLength`; the vendor's 40,000
   figure is no longer maintained in the current character-limits table.
4. **Is ~250–300 ms still accurate, and how was it measured?** The figure survives only in archived
   snapshots of the models page and in host copy; no measurement conditions were ever published, and
   no live first-party page states a latency number for this model.
5. **Does `apply_text_normalization` still require Enterprise for v2.5?** The 2024 changelog says yes;
   the current API reference is silent.
6. **Do SSML break tags work on Turbo v2.5?** Two first-party pages disagree by inclusion and by
   omission, and no test was run.
7. **Does the watermark survive on fal and Replicate output?** The vendor says it watermarks audio its
   own models generate, so it should; neither host record mentions the mark and no test was run.
8. **Can a caller's cloned voice be used through fal?** fal documents preset names only; the vendor
   trains every PVC on this model, so the capability exists upstream but not through that host as
   documented.
9. **Why do both hosts still mark it current?** fal's `updated_at` (2026-04-21) postdates the vendor's
   deprecation, so either fal does not mirror vendor status or it has a support commitment; no source
   explains which.
10. **How good is it, independently?** No third-party quality or latency measurement was captured.

## Evidence status

**Evidence floor: met.** First-party: the 2024-07-19 launch post, the vendor's models FAQ ("Older
Models" section, 32-language list), two dated 2024 changelog entries, the docs models page (via the
existing `eleven-v4-models-overview` capture, which carries the deprecated table and the
replacement suggestion), the API price list, the TTS API reference for output formats and
`language_code`, the Professional Voice Cloning page, both SSML/pause help-centre pages, and the
watermarking policy record. Independent hosts: fal (catalogue metadata, OpenAPI schema, price string)
and Replicate (catalogue metadata, README, price config, run count). Archived first-party snapshots
(2025-11-06, 2026-02-12, 2026-03-12, 2026-04-01) establish the status change and the ~250–300 ms
figure that the live pages no longer carry. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Prices are published schedules; latency and language claims are the vendor's own, restated by
hosts; the deprecation timeline is inferred from archived snapshots of a vendor page.

The next useful evidence would be: the same 1,000-character script through `eleven_turbo_v2_5` on
ElevenLabs, fal and Replicate with measured time-to-first-byte and total latency; a 40,000-character
request on each route to find where each ceiling actually bites; a `<break time="1.5s" />` test to
settle the break-tag contradiction; a watermark check on host-produced files with the ElevenLabs Audio
Detector; and a PVC generation on the vendor route versus fal's preset-only voices.

# Inworld TTS-1.5 (Max / Mini)

Inworld AI's second-generation realtime text-to-speech family, launched **2026-01-21** as two
variants: `inworld-tts-1.5-max` (quality-first) and `inworld-tts-1.5-mini` (latency-first)
([launch post](../../sources/inworld.ai/tts-1-5-launch/2026-10-26.md),
[release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md)). It is a distinct
generation from Realtime TTS 1 — different model IDs, 15 languages instead of 11, and a re-tiered
price list — and it has since been superseded by TTS-2. **The vendor now marks both TTS-1.5 IDs
deprecated** while both independent hosts captured here still serve them
([models page](../../sources/inworld.ai/tts-models/2026-10-26.md)).

The roster row calls this model "Inworld TTS" and names the fal endpoint `fal-ai/inworld-tts`. That
endpoint exists, but fal titles it "Inworld TTS-1.5 Max" and pins `modelFamily: "TTS-1.5 Max"`,
`version: "1.5"` — so the roster label is a discovery label for the 1.5 generation, not a vendor
model name ([fal](../../sources/fal.ai/inworld-tts/2026-10-26.md)).

## Identity

- **Canonical name:** Inworld TTS-1.5, sold as two models. **Model IDs:** `inworld-tts-1.5-max`,
  `inworld-tts-1.5-mini`. Both IDs are first-party
  ([launch post](../../sources/inworld.ai/tts-1-5-launch/2026-10-26.md)).
- **Vendor:** Inworld AI (Theai, Inc. dba Inworld AI, per its
  [Terms of Service](../../sources/inworld.ai/terms-of-service/2026-10-26.md)).
- **Release:** 2026-01-21, both variants the same day. The blog and the dated release-notes entry
  agree; Replicate's page metadata says the model was created "7 months, 2 weeks ago" and its
  earliest embedded prediction timestamp is 2026-03-11, consistent with a March 2026 host launch
  ([launch post](../../sources/inworld.ai/tts-1-5-launch/2026-10-26.md),
  [release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md),
  [Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md)).
- **In-window:** yes. 2026-01-21 is inside the roster's one-year window (≥ 2025-10-26). The
  *predecessor* generation is not: Realtime TTS 1 and 1-Max shipped **2025-08-15**, before the window
  ([TTS-1 launch post](../../sources/inworld.ai/tts-1-launch/2026-10-26.md)).

### Host endpoints

| Route | Endpoint | Variants | Notes |
| --- | --- | --- | --- |
| Inworld AI | `modelId` on the TTS REST / streaming / WebSocket / async APIs | both | `modelId` is not enumerated in the API reference ([API reference](../../sources/inworld.ai/tts-synthesize-speech-api/2026-10-26.md)) |
| fal | `fal-ai/inworld-tts` | **Max only** | serverless, `publishedAt` 2026-03-13 ([fal](../../sources/fal.ai/inworld-tts/2026-10-26.md)) |
| Replicate | `inworld/realtime-tts-1.5-max`, `inworld/realtime-tts-1.5-mini` | both | created ~2026-03-11 per page metadata ([Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md)) |

Neither host names a model ID in its slug in a way that matches the vendor's. fal's
`fal-ai/inworld-tts` gives no hint that it is the 1.5 generation, and its keyword search returns no
other Inworld endpoint — there is no fal TTS-1.5 Mini and no fal TTS-2. A reader who assumes the
generic-looking slug tracks Inworld's current model is wrong on both counts.

### TTS-1 vs TTS-1.5 vs TTS-2

| | Realtime TTS 1 / 1-Max | **Inworld TTS-1.5 Max / Mini** | Realtime TTS-2 / 2 Flash |
| --- | --- | --- | --- |
| Model IDs | `inworld-tts-1`, `inworld-tts-1-max` | `inworld-tts-1.5-max`, `inworld-tts-1.5-mini` | `inworld-tts-2`, `inworld-tts-2-flash` |
| Released | 2025-08-15 (1-Max "experimental") | 2026-01-21 | 2026-05-05; Flash 2026-08-09 |
| Languages | 11 | 15 | 200+ languages and locales claimed |
| List price | $15 /1M chars (1-Max price not stated) | $25 /1M (Max), $15 /1M (Mini) | $25 /1M, $15 /1M |
| Steering / delivery mode | audio markups as a "research preview" | markups only; no delivery mode | natural-language steering, `deliveryMode` |
| Vendor status | **discontinued 2026-06-15**, auto-routed | **deprecated**, no end date | current |

Sources: [TTS-1 launch](../../sources/inworld.ai/tts-1-launch/2026-10-26.md),
[TTS-1.5 launch](../../sources/inworld.ai/tts-1-5-launch/2026-10-26.md),
[models page](../../sources/inworld.ai/tts-models/2026-10-26.md),
[release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md),
[pricing](../../sources/inworld.ai/pricing/2026-10-26.md).

Three things follow. First, **1.5 is not a repackaging of TTS-1**: separate IDs, +4 languages, a new
Max/Mini split where TTS-1 had a flagship plus an "experimental" larger model, and a price increase
on the top tier. Second, the **Max tier is new money**: TTS-1 cost $15/1M, and after 1.5 the
$15/1M slot belongs to Mini while Max sits at $25/1M. Third, **TTS-1.5 is not the current model** —
it was superseded four months after launch and its own vendor no longer prices or documents it.

### Version ambiguity that remains

Inworld publishes no snapshot or revision identifier for TTS-1.5. The only dated first-party change
that mentions it is the 2026-08-06 steering note, which explicitly excludes
`inworld-tts-1.5-max`/`-mini` from a behaviour change applied to TTS-2 — the last evidence that the
vendor still treats 1.5 as a live, separately behaving model
([release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md)). Nothing establishes
whether the fal and Replicate endpoints serve the launch snapshot or a later revision.

## Current assessment

**A deprecated, still-served previous generation — not a current model.** The evidence is
unambiguous on the vendor side: the models page lists all four earlier IDs under "deprecated and not
recommended for new projects", distinguishes the discontinued TTS-1 pair (2026-06-15, requests
auto-routed) from the merely deprecated TTS-1.5 pair, and never gives 1.5 an end date
([models page](../../sources/inworld.ai/tts-models/2026-10-26.md)). The vendor's pricing page no
longer carries any TTS-1.5 rate ([pricing](../../sources/inworld.ai/pricing/2026-10-26.md)), and the
current documentation describes formats and controls for TTS-2 only.

The hosts disagree with the vendor on status. fal marks the endpoint `deprecated: false` and
`status: "public"`; Replicate's pages carry no deprecation notice at all
([fal](../../sources/fal.ai/inworld-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md)). That is a host
choosing to keep serving, not evidence that the model is supported. A caller picking this endpoint
today is buying an unsupported model from a host that has not said what happens when it goes away.

The claim that most needs correcting is quality. Inworld's launch post says "Our models rank #1 on
the Artificial Analysis TTS Leaderboard"; Replicate's README repeats "Ranked #1 on Artificial
Analysis" for both 1.5 variants. On the 2026-10-26 board capture, **no TTS-1.5 row appears at all**,
Inworld's current flagship `Realtime TTS-2` ranks **7th** (1267, interval 5-8), and TTS-2 Flash ranks
**13th** (1218) ([Artificial Analysis](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md)).
That does not prove 1.5 was never #1 — no January-2026 board snapshot was captured — but the
"#1" line in host copy is stale marketing, and the only live third-party measurement of an Inworld
TTS model puts the family mid-table.

## Documented capabilities

Everything below is vendor or host documentation. No direct tests were run for this page.

### Expressive control

- **Audio markups** — emotion tags (`[happy]`, `[sad]`, `[angry]`, `[surprised]`, `[fearful]`,
  `[disgusted]`), delivery styles (`[laughing]`, `[whispering]`) and non-verbals (`[breathe]`,
  `[clear_throat]`, `[cough]`, `[laugh]`, `[sigh]`, `[yawn]`), plus SSML `<break time="1s" />`
  pauses ([Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md)).
  Inworld introduced markups with TTS-1 as a "research preview" and never graduated them for the 1.5
  generation ([TTS-1 launch](../../sources/inworld.ai/tts-1-launch/2026-10-26.md)).
- **Temperature** — the 1.5-era sampling control, 0–2 with a model default of **1.1** on Replicate's
  schema. Inworld's current docs list temperature as "not supported by `inworld-tts-2`" with a
  default of 1.0, which is a TTS-2 statement and conflicts with the host's 1.1 for 1.5
  ([Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md),
  [generating audio](../../sources/inworld.ai/tts-generating-audio/2026-10-26.md)).
- **Speaking rate** 0.5–1.5× and, on Replicate, `text_normalization` (`auto`/`on`/`off`) for numbers,
  dates and abbreviations.
- **Inline IPA pronunciation** was added to the TTS models in the 2025-08-22 update, i.e. during the
  TTS-1 generation ([release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md)). Neither
  host documents it for 1.5, so it is plausibly present but unconfirmed on the routes this page
  covers.
- **No steering and no delivery mode.** Both belong to TTS-2; the 1.5 generation has neither
  ([models page](../../sources/inworld.ai/tts-models/2026-10-26.md)).

### Languages

15, named consistently by the vendor and by both hosts: English, Chinese, Japanese, Korean, Russian,
Italian, Spanish, Portuguese, French, German, Polish, Dutch, Hindi, Hebrew, Arabic
([launch post](../../sources/inworld.ai/tts-1-5-launch/2026-10-26.md),
[Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md)). fal's voice enum is
the strongest corroboration because it is a parameter list, not prose: 113 voices tagged across
exactly those 15 languages ([fal](../../sources/fal.ai/inworld-tts/2026-10-26.md)). One small
discrepancy is preserved: the launch post says 15 languages arrived "with the addition of Hindi",
while the release notes say Hindi, Arabic and Hebrew were added — 11 + 3 ≠ 15, so one of the two
counts is loose.

The vendor states a cross-lingual caveat: "a voice delivers the best speaker similarity when
synthesizing text in its native language — the language it was cloned in"
([generating audio](../../sources/inworld.ai/tts-generating-audio/2026-10-26.md)).

### Voice cloning

Instant Voice Cloning is first-party and model-independent: "from as little as 3 seconds of audio",
sample capped at 30 seconds (15 seconds for clones made before 2026-08-15), `wav`/`mp3`/`webm` up to
12 MB, with an optional background-noise removal step
([instant voice cloning](../../sources/inworld.ai/tts-instant-voice-cloning/2026-10-26.md)). The
vendor warns it "may not perform well for less common voices, such as children's voices or unique
accents". Professional Voice Cloning (a fine-tuned, asynchronous clone) is Beta and scoped to
`inworld-tts-2` only, so it is **not** documented as available on TTS-1.5.

**Hosts cannot reach your clones as documented.** fal exposes only a fixed 113-voice preset list with
no cloning field ([fal](../../sources/fal.ai/inworld-tts/2026-10-26.md)). Replicate's README says the
opposite of its own schema — "Custom voices you clone in your own Inworld account are scoped to that
account's API key and aren't usable here", while `voice_id` is documented as "a preset voice name …
or a custom cloned voice ID" ([Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md)).
Treat custom voices as vendor-API-only until that is resolved.

### Output formats and sample rate

| Route | Formats | Sample rates | Default |
| --- | --- | --- | --- |
| Inworld API | `MP3`, `PCM`, `WAV`, `LINEAR16`, `OGG_OPUS`, `FLAC`, `ALAW`, `MULAW` | 8,000–48,000 Hz | `MP3`; 48 kHz except 8 kHz for μ-law/A-law |
| fal | not selectable — WAV in the schema's example response | 8,000 / 16,000 / 24,000 / 32,000 / 40,000 / 48,000 | 48,000 |
| Replicate | `mp3`, `wav`, `ogg_opus`, `flac` | 8,000 / 16,000 / 22,050 / 24,000 / 32,000 / 44,100 / 48,000 | 48,000 |

Sources: [API reference](../../sources/inworld.ai/tts-synthesize-speech-api/2026-10-26.md),
[generating audio](../../sources/inworld.ai/tts-generating-audio/2026-10-26.md),
[fal](../../sources/fal.ai/inworld-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md).

The vendor's format and sample-rate documentation is written for the TTS-2 family and does not name
TTS-1.5; applying it to 1.5 is an inference that the two host schemas support but do not prove. The
vendor also never publishes a model's **native** output rate, so the "capped at the model's native
output rate when known" clause cannot be resolved to a number.

### Latency

Vendor claim at launch: P90 time to first audio chunk "under 250ms for our Max model and under 130ms
for our Mini model, a 4x improvement compared to TTS-1"
([release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md)). Replicate's README
instead states "<200ms median latency" (Max) and "~120ms" (Mini)
([Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md)). The two
publishers quote different statistics — P90 time to first audio byte versus median — of the same
model, so the numbers are not directly comparable, and neither is an independent measurement.

## Limitations and constraints

- **Character limits depend on route, and both hosts stop at the smallest one.** Vendor: 2,000
  characters non-streaming, 4,000 streaming, 100,000 per async job (10,000 on the free On-Demand
  plan) ([synthesize speech guide](../../sources/inworld.ai/tts-synthesize-speech-guide/2026-10-26.md)).
  fal hard-caps `text` at `maxLength: 2000`; Replicate's schema says "Maximum 2,000 characters". No
  host exposes streaming or async, so the 4,000 and 100,000 ceilings are unreachable through them.
- **Deprecated without an end date.** The vendor calls TTS-1.5 deprecated and recommends TTS-2, but
  publishes no shutdown date or notice period, unlike TTS-1's explicit 2026-06-15 discontinuation
  with auto-routing ([models page](../../sources/inworld.ai/tts-models/2026-10-26.md)). A production
  dependency on this model has an unbounded but non-zero termination risk.
- **No steering, no delivery mode, no professional clones.** Those are TTS-2 features. Migration to
  TTS-2 is therefore not behaviour-preserving: TTS-2 changed how inline tags behave (they now persist
  until changed, with `[reset]` to end them), and TTS-1.5 was explicitly excluded from that change
  ([release notes](../../sources/inworld.ai/tts-release-notes/2026-10-26.md)).
- **Watermarking is asserted once and never restated.** The TTS-1 launch post says "All synthesized
  audio from our platform contains an imperceptible watermark to ensure it can be identified as
  AI-generated" ([TTS-1 launch](../../sources/inworld.ai/tts-1-launch/2026-10-26.md)). No current
  documentation page, API reference field, or host schema mentions a watermark, a detector, or an
  opt-out; no `watermark` parameter exists on any route. Whether TTS-1.5 output is watermarked, and
  whether it survives on fal or Replicate, is **unverified** — the statement is also unscoped to a
  generation, so it cannot be assumed to have carried forward.
- **Safety screening differs by host.** fal exposes `enable_safety_checker` (default `true`) and
  says "Authorized callers may set false to request relaxed screening" without publishing the gating
  criteria ([fal](../../sources/fal.ai/inworld-tts/2026-10-26.md)). Replicate's schema exposes no
  equivalent. A refusal on one host is therefore not evidence about the model.
- **Consent is a checkbox, not a policy.** The Portal requires the operator to "Confirm you have the
  rights to clone the voice", and the TTS-1 post claims "robust safeguards to prevent the cloning of
  voices without explicit consent" — but no voice-cloning policy page, verification process, or
  disputed-clone procedure was captured
  ([instant voice cloning](../../sources/inworld.ai/tts-instant-voice-cloning/2026-10-26.md),
  [TTS-1 launch](../../sources/inworld.ai/tts-1-launch/2026-10-26.md)). The Terms of Service contain
  no cloning or impersonation clause at all
  ([ToS](../../sources/inworld.ai/terms-of-service/2026-10-26.md)).
- **No self-hosting, no weights.** Every route is hosted and closed; the Terms of Service state that
  Inworld "retain[s] all rights, title, and interest in and to the Services, including models".
- **No independent quality evidence for TTS-1.5 specifically.** The only independent measurement
  captured is of TTS-2, not 1.5.

## Access, pricing, licensing

### Billing basis

**Per input character**, on every route. Inworld counts `processedCharactersCount` — "Number of
input UTF-16 code units processed" — and bills it even for cancelled requests; `synthesisContext`
text "is not billed" ([API reference](../../sources/inworld.ai/tts-synthesize-speech-api/2026-10-26.md)).
Replicate bills on `character_input_count`; fal's price is per 1,000 characters.

| Route | TTS-1.5 Max | TTS-1.5 Mini | Rounding |
| --- | --- | --- | --- |
| Inworld list at launch (2026-01-21) | $25 /1M chars | $15 /1M chars | not stated |
| Inworld today | not priced — model deprecated | not priced | — |
| fal | **$10 /1M chars** ($0.01/1K) | not offered | per 1,000-character unit |
| Replicate | **$35 /1M chars** ($0.035/1K) | **$15 /1M chars** ($0.015/1K) | per character, "around 28,571 characters for $1" |
| Artificial Analysis (third-party estimate) | not listed | not listed | TTS-2 $20.8/M, Flash $10.4/M for context |

Sources: [launch post](../../sources/inworld.ai/tts-1-5-launch/2026-10-26.md),
[pricing](../../sources/inworld.ai/pricing/2026-10-26.md),
[fal](../../sources/fal.ai/inworld-tts/2026-10-26.md),
[Replicate](../../sources/replicate.com/inworld-realtime-tts-1-5/2026-10-26.md),
[Artificial Analysis](../../sources/artificialanalysis.ai/text-to-speech-leaderboard/2026-10-26.md).

**The same model ranges 3.5× in price across routes**, and the spread runs in both directions from
the vendor's list: fal at $10/M is 60% below Inworld's $25/M, Replicate at $35/M is 40% above it,
and Replicate's Mini price exactly matches Inworld's $15/M. The vendor no longer prices the model, so
neither host can be checked against a live list price — the comparison is against a January-2026
figure for a model the vendor has since deprecated. Replicate's billing config also carries undated
change notes — "Price cut: $25/M → $15/M chars" on Mini, "$35/M → $25/M chars" on TTS-2 — so host
prices for this family have moved at least once.

### Licensing and commercial terms

- **Output ownership:** "we assign to you all of our right, title, and interest in Outputs", subject
  to compliance with the Terms ([ToS](../../sources/inworld.ai/terms-of-service/2026-10-26.md)).
- **Commercial use:** "Commercial license" is listed as a plan feature on every tier, including the
  free On-Demand plan ([pricing](../../sources/inworld.ai/pricing/2026-10-26.md)). The pricing page
  does not define it; the Terms carry no separate commercial-use clause.
- **Inputs are your responsibility:** the customer warrants it has "all rights, licenses, and
  permissions" for the Inputs — the clause that governs cloning someone else's voice.
- **No-training commitment:** Inworld will not train on non-public Materials, except on voluntary
  feedback and on material flagged for trust-and-safety review.
- **No weights licence exists** — the model is hosted-only. fal's `licenseType: "commercial"` is the
  host's assertion about its own service, not a grant from Inworld.
- **Effective date:** the Terms are dated 2025-06-11; no amendment history was captured.

## Unresolved questions

1. **When does TTS-1.5 stop working?** The vendor calls it deprecated and discontinued its
   predecessor on a fixed date with auto-routing, but gives 1.5 no date. Whether requests will be
   silently re-routed (changing voice and behaviour) or rejected is unknown.
2. **Is the output watermarked?** The only first-party statement is from the TTS-1 launch in
   August 2025 and is not repeated anywhere in the current documentation. No detector, opt-out, or
   host-side confirmation exists in the corpus.
3. **Was 1.5 ever #1 on Artificial Analysis?** Both Inworld and Replicate assert it; the 2026-10-26
   board has no TTS-1.5 row and puts TTS-2 7th. No historical board snapshot was captured, so the
   claim can be neither confirmed nor refuted.
4. **Do the host endpoints serve the launch snapshot?** No vendor revision identifier exists, and
   neither host states when it last refreshed.
5. **Can a caller's own cloned voice be used through Replicate?** The README says no; the input
   schema says a "custom cloned voice ID" is accepted.
6. **What is the real character ceiling?** 2,000 is the vendor's non-streaming limit and both hosts'
   hard cap; the vendor also supports 4,000 (streaming) and 100,000 (async), which no host exposes.
7. **Is the vendor's temperature default 1.0 or 1.1 for 1.5?** The current docs state 1.0 while
   Replicate's schema states a 1.1 model default; the docs section is written for TTS-2.
8. **How much does 1.5 cost on the vendor API today?** The pricing page prices only TTS-2, and no
   source says whether a deprecated model is billed at its launch rate or the current one.
9. **What are fal's rules for `enable_safety_checker: false`?** The capability is documented; the
   authorization criteria are not.
10. **Does 1.5 support professional voice clones?** The models page scopes PVC to `inworld-tts-2`;
    nothing states what happens if a PVC voice ID is sent to a 1.5 model.

## Evidence status

Evidence floor: **met.** First-party: ten Inworld documents — the TTS-1.5 launch post, the TTS-1
launch post, the TTS models page, the dated TTS release notes, the generating-audio guide, the
Synthesize Speech API reference and its guide, the instant-voice-cloning page, the pricing page and
the Terms of Service. Independent hosts: fal (catalogue metadata, OpenAPI input schema, price string,
`llms.txt`) and Replicate (organisation page, three model pages, embedded prediction schemas, billing
config). Third-party measurement: the Artificial Analysis TTS leaderboard. All captured 2026-10-26.

**No direct tests have been run for this page.** Nothing here is a measurement made by this
knowledge base. Capability statements are vendor or host documentation; prices are published
schedules that disagree by up to 3.5×; latency and quality statements are the vendor's own, and the
only independent measurement covers the successor generation, not TTS-1.5.

The single largest gap is that the vendor's own documentation has moved past this model. Formats,
sample rates, temperature defaults and character limits are documented for TTS-2 and applied here by
inference from the host schemas; the 1.5-specific parameter surface is only fully described by
Replicate's input schema.

The next useful evidence would be a small reproducible test set against named endpoints and dates: a
2,000-character request through `fal-ai/inworld-tts` and `inworld/realtime-tts-1.5-max` with the same
preset voice, compared for output sample rate, container, bit depth and speaker identity; a
watermark check on host-produced files; a check of whether a cloned voice ID is accepted on
Replicate; and a 4,000-character streaming request on the vendor API to confirm the transport-level
limits still apply to a deprecated model.

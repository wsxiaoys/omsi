# Lyria 3

Google DeepMind's music-generation model, shipped as **two API variants under one name**: a 30-second
clip model (`lyria-3-clip-preview`) and a full-song model up to 184 seconds
(`lyria-3-pro-preview`). Both entered public preview on **2026-03-25**
([Vertex AI release notes](../../sources/cloud.google.com/vertex-generative-ai-release-notes/2026-10-26.md))
and are still Preview at the capture date
([model card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md)).

It is the first Lyria model Google documents with vocals: Lyria 2's card lists vocal generation,
lyric generation and user-provided lyrics as unsupported. Text or image in, stereo MP3 out with
generated vocals and lyrics in eight languages, plus SynthID watermarking and C2PA Content
Credentials. The roster row `fal-ai/lyria3` resolves exactly to the 30-second variant; a caller who
wants full songs needs a different endpoint ID on every surface.

## Identity

- **Canonical name:** Lyria 3. Google DeepMind writes "Lyria 3" in the model credits and
  `lyria-3-*` in IDs; fal writes "Lyria3" (no space) for `fal-ai/lyria3` and "Lyria 3 Pro" for the
  pro endpoint; Replicate writes "Lyria 3" / "Lyria 3 Pro". Cosmetic only.
- **Vendor:** Google DeepMind; served by Google Cloud (Gemini Enterprise Agent Platform, formerly
  Vertex AI) and reachable in consumer surfaces — Google Flow Music, Gemini, YouTube Shorts Dream
  Track, Google Vids, Google AI Studio
  ([DeepMind page](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)).
- **Model IDs:** `lyria-3-clip-preview` (30 s) and `lyria-3-pro-preview` (184 s). There is **no GA
  Lyria 3 ID**; the `-preview` suffix is part of the only published identifier.

| Route | Identifier | Listing / version date | Variants served |
| --- | --- | --- | --- |
| Google Cloud (Interactions API) | `lyria-3-clip-preview`, `lyria-3-pro-preview` | release date 2026-03-25 ([card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md)) | both |
| fal | `fal-ai/lyria3` | `date` 2026-03-30 ([fal](../../sources/fal.ai/lyria3/2026-10-26.md)) | clip only |
| fal | `fal-ai/lyria3/pro` | `date` 2026-05-20 ([fal](../../sources/fal.ai/lyria3/2026-10-26.md)) | pro only |
| Replicate | `google/lyria-3` | version created 2026-04-02 ([Replicate](../../sources/replicate.com/lyria-3/2026-10-26.md)) | clip only |
| Replicate | `google/lyria-3-pro` | version created 2026-04-02 ([Replicate](../../sources/replicate.com/lyria-3/2026-10-26.md)) | pro only |
| fal | `google/lyria-3.5` | `date` 2026-09-19 ([fal](../../sources/fal.ai/lyria3/2026-10-26.md)) | Lyria 3.5, not Lyria 3 |

- **Release date, reconciled:** **2026-03-25** is the canonical date — the dated first-party launch
  entry, matching the model card's per-version release date for both IDs. fal listed the clip model
  five days later and the pro model eight weeks later; Replicate published both on 2026-04-02. Host
  listing dates are not release dates. The launch falls inside the roster's one-year window
  (≥ 2025-10-26) with five months to spare.
- **The two variants are one model, two tiers.** Every capability row on the model card is identical
  except clip length (30 s vs 184 s), "Song generation" ("30 second clips" vs "Full song"), and
  "Detailed structure controls" (Pro adds Duration). Same languages, same sample rate, same bitrate,
  same one-clip-per-request limit, same price unit.

### Siblings and near-neighbours

| Model | Status at capture | Relationship to Lyria 3 |
| --- | --- | --- |
| **[Lyria 3.5](lyria-3.5.md)** | Newest per DeepMind; reachable only via `google/lyria-3.5` on fal | Distinct model with its own page. Google's page title is literally "Lyria 3.5 — Google DeepMind" and lists it above "Lyria" in the family list. **No Google model card, model ID, price, or release date was found for it.** |
| **Lyria 2** (`lyria-002`) | GA | Predecessor. Instrumental only, no vocals, no image input, no watermarking, 48 kHz WAV, four clips per request. See below. |
| Lyria RealTime | Product listing only | Interactive/streaming music, separate product entry, no model card captured. |
| Magenta RealTime | "Our Lyria open model" | The open-weights branch of the family. Nothing about Lyria 3's weights. |

### Lyria 3 is not Lyria 2

| | Lyria 2 (`lyria-002`) | Lyria 3 clip | Lyria 3 Pro |
| --- | --- | --- | --- |
| Launch stage | **GA** (version date 2025-10-27) | Preview | Preview |
| Max clip | 32.8 s | 30 s | **184 s** |
| Clips per request | **4** | 1 | 1 |
| Vocals / lyrics | **No** | Yes | Yes |
| Image input | **No** | Yes | Yes |
| Languages | US English prompts only | 8 vocal languages | 8 vocal languages |
| Format | **WAV, 48 kHz** | MP3, 44.1 kHz / 192 kbps | MP3, 44.1 kHz / 192 kbps |
| Watermarking | **Not supported** per card (contested) | SynthID + C2PA | SynthID + C2PA |
| Endpoint shape | `:predict`, regional, `instances`/`parameters` | Interactions API, `global`, `input`/`outputs` | same as clip |
| Price | $0.06 / 30 s | $0.04 / clip | $0.08 / song |

Sources: [Lyria 2 card](../../sources/cloud.google.com/lyria-2-model-card/2026-10-26.md),
[Lyria 3 card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md),
[generate-music](../../sources/cloud.google.com/lyria-generate-music/2026-10-26.md),
[pricing](../../sources/cloud.google.com/lyria-pricing/2026-10-26.md).

The two are also separately developed: DeepMind publishes two different author lists for Lyria 3 and
Lyria 2 with only partial overlap
([DeepMind page](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)). No request format,
output format, or capability transfers between them.

## Current assessment

- **Current, not superseded in the API — but branded as one generation behind.** Lyria 3 is the newest
  Lyria that Google documents as an API model, and both IDs are live. DeepMind's own product page,
  however, leads with Lyria 3.5 as "our newest music generation model" and describes 3.5 as improving
  "musicality, lyrics, and vocal quality" over what came before. Read together: Lyria 3 is the
  supported API tier, Lyria 3.5 is the newest model, and the two statements are only consistent if 3.5
  is not (yet) API-documented.
- **A real model, not a repackaging.** Vocals, lyrics, image conditioning, eight languages, SynthID,
  C2PA, and a 5.6× longer maximum clip are all new against Lyria 2, and Google gives Lyria 3 its own
  model IDs, price points, and author list.
- **The clip/pro split is the choice a caller actually makes**, and hosts split it too: `fal-ai/lyria3`
  is clip-only, `fal-ai/lyria3/pro` is pro-only, same on Replicate. There is no single endpoint that
  gives you both.
- **The tier that matters is Pro.** The clip model costs $0.04 for 30 s; Pro costs $0.08 for 184 s —
  about a third of the per-second price, with timestamp-directed structure. Clip is a drafting tool,
  and Replicate's README says so outright ("Iterate with Lyria 3 Clip first, then generate full songs
  with Pro").

## Documented capabilities

Vendor-documented, from the model card and prompt guide unless noted:

- **Text-to-music** across genres: prompt carries genre, mood, instrumentation, tempo/BPM, key, vocal
  style, production quality.
- **Image-to-music**: one image per request via the Interactions API (`image/jpeg` or `image/png`,
  Cloud Storage URI or base64). fal takes a single `image_url`; Replicate's schema accepts up to 10
  `images`; the prompt guide claims up to 10 references.
- **Vocals and lyrics**: generates lyrics, or sings supplied lyrics (prefix them with `Lyrics:`),
  including backing vocals.
- **Instrumental mode**: request "instrumental" in the prompt.
- **Eight vocal languages**: English, German, Spanish, French, Hindi, Japanese, Korean, Portuguese.
- **Structure control via prompt text** — the model card claims "Duration, BPM, Intensity"; the
  mechanism is `[mm:ss]` segment markers (Pro) and `Intensity: n/10` annotations, plus BPM in the
  prompt ([prompt guide](../../sources/cloud.google.com/lyria-prompt-guide/2026-10-26.md)). The
  Interactions API request body has **no parameters object at all**, so none of this is an API field
  ([generate-music](../../sources/cloud.google.com/lyria-generate-music/2026-10-26.md)).
- **Prompt rewriter**: supported per the model card; not exposed as a parameter.
- **Content Credentials (C2PA)**: supported per the model card. **SynthID** watermarking on all output
  per DeepMind, the model card, and both hosts.
- **Three-part response** on Google's API: lyrics text, a prose description of the track, and the audio
  part. fal exposes `audio` + `lyrics` (where `lyrics` carries a caption and detected BPM); Replicate
  returns the audio file only.

Marketing claims, labelled as such: "most advanced music generation model, now up to 3 minutes long",
"professional-grade", "crisp, clear tracks ready for your projects"
([DeepMind page](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)). No numeric quality,
intelligibility, or musicality measurement exists in any captured source.

## Limitations and constraints

- **One clip per request.** Both variants, explicitly ("Maximum number of clips per prompt: 1"). Lyria 2
  allowed four. There is no batch or sample-count control on any Lyria 3 route.
- **No seed.** `seed` is documented for Lyria 2 and accepted by Replicate for Lyria 3 ("exact
  determinism is not guaranteed"), but it is absent from Google's Lyria 3 capability list and from
  fal's schema. Reproducibility is therefore host-dependent and unguaranteed.
- **No negative prompting** per the model card ("Negative prompting: Not supported") and per fal's
  schema, which keeps the field marked `deprecated` with the note "Negative prompting is not supported
  by Lyria 3." Google's prompt guide contradicts both by documenting `negative_prompt` as "the API
  parameter". The contradiction is unresolved; the model card and fal's schema both say no, and the
  prompt guide is the outlier.
- **No editing, extension, inpainting, or continuation.** Every route is single-turn text/image →
  audio. Replicate states it as a limitation ("Single-turn generation only — no iterative editing");
  Google simply never documents an edit path.
- **Clip ceiling is hard and format-specific**: 30 s for clip, 184 s for Pro, one file per request. The
  Pro ceiling is not a prompt hint — it is the "maximum audio clip length".
- **Prompt length**: only fal publishes a limit — 5,000 characters, minimum 1.
- **Region and quota**: `global` only, 10 requests per minute per base model on Google Cloud. That is a
  hard throughput ceiling for anything resembling a catalogue build, and the model card states it in
  the ambiguous "10 tokens per minute" phrasing.
- **Preview status**: subject to Pre-GA terms, which permit commercial use but do not carry Google's IP
  indemnity (see licensing below).
- **Safety filtering** is listed as input filtering, recitation checking, and **vocal-likeness**
  filtering. fal's about-text says the same in plainer words: "Safety filters prevent generation of
  content mimicking real artists' voices." fal also exposes `enable_safety_checker` (default `true`)
  with the note "Authorized callers may set false to request relaxed screening"; Google documents no
  such switch and Replicate's schema has no equivalent field.
- **Sample rate is contested**: 44.1 kHz / 192 kbps MP3 per Google's model card and fal; **48 kHz
  stereo** per Replicate's README for both variants. Two surfaces against one; unresolved.
- **Console download is WAV, API output is MP3** on the same Google page — the only WAV path is the
  console's "downloadable as WAV files" note.
- **PDF input** is claimed only by the prompt guide ("up to 10 reference images or PDFs"); the model
  card lists image only, and the API sample shows JPEG/PNG parts.

## Access, pricing, licensing

**Billing basis: per generated item, not per second.** Google Cloud prices Lyria 3 at `$0.04 / 1
count` for the 30-second clip and `$0.08 / 1 count` for the full song, with Lyria 2 at `$0.06 / 1
count` ([pricing](../../sources/cloud.google.com/lyria-pricing/2026-10-26.md)). The pricing page never
defines "count", but both hosts land on the same numbers per clip, which fixes the reading.

| Surface | Clip (30 s) | Pro (≤184 s) | Notes |
| --- | --- | --- | --- |
| Google Cloud | $0.04 | $0.08 | global region, 10 RPM |
| fal `fal-ai/lyria3` / `fal-ai/lyria3/pro` | $0.04 | $0.08 | proxy; identical prices |
| Replicate `google/lyria-3` / `-pro` | $0.04 ("25 files for $1") | $0.08 ("around 12 files for $1") | official Google-published |
| fal `google/lyria-3.5` | — | $0.10 per generation (Lyria 3.5) | newest model, different price |

No markup on Lyria 3 at either host, unlike fal's Lyria 2 rate ($0.10 / 30 s against Google's $0.06).
No per-second, batch, or Provisioned Throughput price is listed for any Lyria model.

**Licensing:**

- **Weights: closed.** No checkpoint, Hugging Face repo, or licence text for Lyria 3 weights exists in
  any captured source. (Magenta RealTime is the family's open model and is a different product.)
- **Commercial use of output is permitted under Preview terms**: "Customers may elect to use it for
  production or commercial purposes, or disclose Generated Output to third-parties"
  ([model card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md)).
- **No IP indemnity.** Google's Generative AI Indemnified Services list covers the Agent Platform API
  only for "generally available versions" of Codey, Gemini, Imagen, PaLM and Veo. **Lyria is absent
  from the list entirely**, and Lyria 3 is Preview regardless
  ([indemnified services](../../sources/cloud.google.com/generative-ai-indemnified-services/2026-10-26.md)).
  A customer shipping Lyria 3 music carries the copyright risk of the output.
- **Provenance is built in**: SynthID watermarking on all output plus C2PA Content Credentials. fal's
  `license_type` for all four endpoints is `commercial`.
- **Safety-filter responsibility sits with the customer**: the Service Specific Terms make the customer
  "solely responsible for (i) its use, non-use, or modification … of safety filters in creating
  Generated Output" — relevant because fal offers a documented way to relax screening.

## Unresolved questions

1. **Is Lyria 3.5 a Lyria 3 successor, and is it API-served?** DeepMind calls 3.5 the newest model and
   fal sells `google/lyria-3.5` at $0.10, but Google publishes no model card, ID, date, or price for
   it, and Replicate has no 3.5 page. Either 3.5 is app-only and fal is proxying an internal surface,
   or the documentation lags. Unresolved; the successor question is now tracked on
   [the Lyria 3.5 page](lyria-3.5.md), where AA's music boards put the two models within noise of
   each other (3.5 1051 Elo vs 3 Pro 1047 on vocals).
2. **44.1 kHz or 48 kHz?** Google's model card and fal say 44.1 kHz / 192 kbps MP3; Replicate says
   48 kHz stereo. If Replicate is resampling, the output files differ between hosts. Not measured.
3. **Does negative prompting work on Lyria 3 or not?** Model card and fal say no; the prompt guide
   documents the parameter. A one-request test would settle it; none was run.
4. **What does "1 count" buy when a request is filtered?** Neither Google nor the hosts state whether
   a blocked or recitation-refused request is billed.
5. **Is `seed` honoured on Lyria 3?** Replicate accepts it and disclaims determinism; Google and fal do
   not expose it. Unknown whether it is silently ignored.
6. **Why did fal take eight weeks to list the Pro variant** while the clip model appeared in five days?
   Commercial decision or availability constraint — not documented.
7. **Are the 10 references images only, or images and PDFs?** Prompt guide says both; every other
   surface says images.
8. **How good is it, independently?** No benchmark, MOS, listening test, or preference data was
   captured for any Lyria generation. Every quality statement on this page is vendor or host copy.

## Evidence status

Evidence floor: **met.** First-party: the DeepMind Lyria family page (capability claims, family
structure, SynthID, separate Lyria 3 / Lyria 2 author lists), Google Cloud's Lyria 3 model card
(capability matrix, technical specifications, per-version dates), the Lyria 2 model card (baseline), the
dated Vertex AI release-notes entries (2026-03-25 Lyria 3 preview; 2025-05-20 Lyria 2 GA), the
generate-music API guide (request/response shape), the Lyria pricing section, the prompt guide, the
`lyria-002` API reference (Lyria 2 pricing and clip length), and the Generative AI Indemnified Services
list. Independent hosts: fal (four endpoint IDs, catalogue metadata, schemas, prices, dates) and
Replicate (two official Google-published models, READMEs, schemas, billing config). All captured
2026-10-26.

Two gaps in that floor are worth naming. The DeepMind page carries **no dates**, so every date here
comes from Google Cloud or a host. And **no source in this knowledge base measures Lyria 3** — the
sample rates, durations, and language lists are all restatements of vendor copy by hosts that proxy the
same model.

**No direct tests have been run for this page.** Nothing above is a measurement made by this knowledge
base.

The next useful evidence would be a small reproducible set against named endpoints and dates: one
prompt run on `lyria-3-clip-preview`, `fal-ai/lyria3`, and `google/lyria-3` with the output files
inspected for actual sample rate, bitrate, channel count and duration; a `negative_prompt` run to see
whether it is rejected, ignored, or applied; an exact-duration prompt ("exactly 60 seconds") to see how
tightly the Pro model hits `[mm:ss]` targets; a non-English lyric test per language; and a SynthID
detection attempt on a downloaded file.

# Lyria 3.5

Google DeepMind's newest music-generation model. It is named and described on DeepMind's Lyria
product page — "Introducing Lyria 3.5 — Our newest music generation model delivers significant
advancements across musicality, lyrics, and vocal quality"
([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)) — but Google publishes
**no model ID, model card, technical specification, price, launch stage, or release note** for it:
the Agent Platform model card is still titled "Lyria 3" and lists exactly two versions
([card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md)), and the Lyria price list
still has three rows ([pricing](../../sources/cloud.google.com/lyria-pricing/2026-10-26.md)).

The only surface in this knowledge base that serves Lyria 3.5 as an API is fal, as
`google/lyria-3.5`, a proxy endpoint at `$0.1 per generations`
([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)). Artificial Analysis measures it separately
from Lyria 3 Pro on both its music boards
([vocal](../../sources/artificialanalysis.ai/music-vocal-leaderboard/2026-10-26.md),
[instrumental](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)).

## Identity

- **Canonical name:** Lyria 3.5. Google DeepMind writes "Lyria 3.5"; fal's endpoint is
  `google/lyria-3.5` with display name "Lyria 3.5"; Artificial Analysis lists "Lyria 3.5". No
  spelling conflict, and no Google model ID at all.
- **Vendor:** Google DeepMind. Consumer/product surfaces named on DeepMind's page: Google Flow
  Music, Gemini, Dream Track (YouTube Shorts), Google Vids, Google AI Studio, and the Gemini
  Enterprise Agent Platform ([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)).
- **Family position:** DeepMind's family list puts Lyria 3.5 first — "Our latest model with improved
  vocals, musicality, and variable song lengths" — above "Lyria", "Lyria RealTime" and "Magenta
  RealTime" ([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)).

| Route | Identifier | Dated evidence | Status |
| --- | --- | --- | --- |
| Google Cloud / Agent Platform | **none** | model card, pricing, API guide, prompt guide, release notes and model-versions index all searched on 2026-10-26; zero hits for "3.5"; candidate `lyria-3-5`-style URLs 404 | not documented |
| DeepMind product page | "Lyria 3.5" | undated; no `datePublished` in the markup ([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)) | product entry only |
| fal | `google/lyria-3.5` | catalogue `date` **2026-09-19**, `updated_at` **2026-09-30** ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)) | active, proxy |
| Replicate | none | `replicate.com/google/lyria-3.5` returns 404 ([Replicate](../../sources/replicate.com/lyria-3/2026-10-26.md)) | not listed |
| Artificial Analysis | "Lyria 3.5" | `releaseDate` **2026-07-29**, added to arena **2026-08-25** ([AA vocal](../../sources/artificialanalysis.ai/music-vocal-leaderboard/2026-10-26.md)) | ranked on both music boards |

**Dates, reconciled.** There is **no first-party release date**. The earliest dated claim anywhere is
Artificial Analysis's `releaseDate` field of 2026-07-29, which is aggregator metadata, not a Google
announcement; the earliest dated *API availability* is fal's listing on 2026-09-19, and AA added the
model to its arena on 2026-08-25 — earlier than fal's catalogue date, which means at least one of the
two dates describes something other than first public API access. Every dated reading falls inside
the roster's one-year window (≥ 2025-10-26); the ambiguity is *which* date is the launch, not whether
3.5 is in-window.

**Distinct model, not a rename.** The skill's split test is met: (1) both Lyria 3.5 and Lyria 3 Pro
remain obtainable, on different surfaces; (2) the differences a caller acts on — price, endpoint,
prompt-controlled length, lyric-output shape — are large enough that one verdict would mislead; and
(3) variant-specific evidence exists (a fal endpoint with its own schema and price, and two separate
AA rows with different Elo and different `releaseDate`). A merged page would have to keep 3.5's
single-host, undocumented status and 3 Pro's Vertex price in the same paragraph.

### Siblings

| Model | Status at capture | Relationship |
| --- | --- | --- |
| **Lyria 3 Pro** (`lyria-3-pro-preview`) | Preview since 2026-03-25 on Google Cloud, fal and Replicate | Closest neighbour: 184 s max, `$0.08`/song, C2PA + SynthID, AA 1047 vocal / 1080 instrumental |
| **Lyria 3 Clip** (`lyria-3-clip-preview`) | Preview since 2026-03-25 | 30 s tier, `$0.04`/clip, not ranked by AA |
| Lyria 2 (`lyria-002`) | GA | Instrumental-only predecessor; AA 926 instrumental |
| Lyria RealTime | Product listing only | Interactive/streaming music, separate product entry |
| Magenta RealTime | "Our Lyria open model" | The family's open-weights branch; nothing to do with 3.5's weights |

## Current assessment

- **Current, and the family flagship by DeepMind's own account — but not a documented API model.**
  DeepMind's page title is literally "Lyria 3.5 — Google DeepMind" and its family list leads with
  3.5; Google Cloud, however, still documents only the two Lyria 3 preview IDs and prices only three
  Lyria rows. Read together, 3.5 is a product-tier model that one third-party host exposes through a
  proxy, while 3 is the tier with a published card, quota and price.
- **A distinct endpoint and a distinct price, but no measurable quality step over Lyria 3 Pro.** On
  AA-Music-Vocal v1.1, 3.5 scores 1051 Elo (5th of 13) against Lyria 3 Pro's 1047 (6th); on
  AA-Music-Instrumental v1.1 the order reverses, 3 Pro 1080 (5th) against 3.5 1078 (6th). Both gaps
  are 1.5–3.8 Elo against confidence intervals of ±18 to ±21
  ([vocal](../../sources/artificialanalysis.ai/music-vocal-leaderboard/2026-10-26.md),
  [instrumental](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)).
  DeepMind's "significant advancements across musicality, lyrics, and vocal quality" is therefore a
  marketing claim that the one independent measurement available does not corroborate at these
  sample sizes.
- **What 3.5 actually changes is packaging, not ceiling.** The headline "up to 3 minutes" is not new:
  Lyria 3 Pro already generates 184 seconds (3:04) per Google's card. What changes is that 3.5
  collapses the clip/pro split into one endpoint whose length is set by prompt hints, returns
  timestamped lyric data instead of a prose caption, and costs `$0.10` per generation on its only
  host.
- **Where it is not: everywhere else.** No Google Cloud model ID, no Replicate page, no second host
  price. A caller who needs a documented spec, a quota, an SLA or a second vendor stays on Lyria 3
  Pro.

## Documented capabilities

Vendor and host documentation; marketing language is quoted and labelled.

- **Text-to-music.** Prompt carries genre, mood, instrumentation, tempo, structure and vocal style;
  fal's example prompt asks for "An uplifting pop song with driving electric guitar, energetic drums,
  and a catchy chorus … 120 BPM. Two minutes long with a verse-chorus-verse-chorus-bridge-chorus
  structure" ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)).
- **Image-to-music.** One `image_url`, described as "visual inspiration … music that matches the mood
  and theme of the image" ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)); DeepMind markets the
  same capability as "Upload an image and ask Lyria to transform it into a custom high-fidelity
  track" ([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)).
- **Vocals and lyrics.** DeepMind: "Write your own lyrics, or generate them around specific subjects
  or themes. Then express them with realistic, natural, and nuanced vocals". fal returns an optional
  `lyrics` field and describes "advanced controls for fully timed lyrics, precise tempo, and complex
  arrangement structure" ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)).
- **Length by prompt.** DeepMind: "Prompt for the length you need — Generate cohesive tracks matching
  your project's exact duration — whether you need a quick 60-second clip, a half-length track, or a
  full 3-minute song". fal: "use timestamps or duration hints in your prompt to control song length,
  e.g. 'a 2-minute track' or section markers like '[0:00-0:30] Intro: …'". There is no `duration`
  parameter.
- **Eight vocal languages:** English, German, Spanish, French, Hindi, Japanese, Korean, Portuguese
  ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)) — the same eight Lyria 3 documents. DeepMind
  only says "vocals in different languages" without a list.
- **Instrumental material.** No vendor statement of an instrumental mode; AA nonetheless ranks 3.5 on
  its instrumental board, which means instrumental samples were generated from it
  ([instrumental board](../../sources/artificialanalysis.ai/music-instrumental-leaderboard/2026-10-26.md)).
- **Output:** "Full-length MP3 audio (44.1 kHz stereo)", plus optional lyrics and SynthID watermarking
  ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)). fal's published example file measures
  44,100 Hz, stereo, 192 kb/s MP3, **30.69 s** long — same record, direct observation below.
- **Safety:** "Safety filters prevent generation of content mimicking real artists' voices" and an
  `enable_safety_checker` flag (default `true`) where "Authorized callers may set false to request
  relaxed screening" ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)). DeepMind describes
  filtering and data labelling as an input-side measure and states the tracks are "imperceptibly
  watermarked with SynthID" ([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)).

Marketing claims, labelled as such: "Our most advanced music generation model, now up to 3 minutes
long", "producing complete, structured songs", "Export professional-grade audio … crisp, clear
tracks ready for your projects", "significant advancements across musicality, lyrics, and vocal
quality" ([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md);
[fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)). No vendor-side numeric quality, intelligibility
or musicality measurement exists in any captured source.

## Limitations and constraints

- **No Google identity means no Google guarantees.** No model ID, card, launch stage, region, quota,
  rate limit, SLA, deprecation window or technical specification exists. Google's Lyria 3 card
  documents `global`-only serving and a per-minute quota stated as "10 tokens per minute"
  ([card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md)); nothing comparable is
  published for 3.5, and fal publishes no rate limit either.
- **Maximum length is undocumented.** "Up to a few minutes" (fal) and "up to 3 minutes" (DeepMind) are
  the entire statement; no minimum is given and no parameter enforces either. Because length is a
  prompt hint, a request that asks for two minutes may return something much shorter — fal's own
  example output, published next to an example prompt asking for "Two minutes long", is **30.69 s**
  ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)). That is an artifact inspection, not a model
  test; it shows what fal ships as a sample, not a cap.
- **No negative prompting.** fal's schema keeps a `negative_prompt` field marked `deprecated` with
  "Negative prompting is not supported by Lyria 3.5" — the field exists but is documented as ignored,
  and fal's own `llms.txt` omits it entirely. Lyria 3 has the same conflict between its model card
  and prompt guide ([Lyria 3](lyria-3.md)).
- **No seed, sample count, format, BPM, intensity or duration fields.** One generation per request;
  no batch control, no editing, extension, inpainting or continuation path is documented on any
  surface.
- **Prompt length:** 5,000 characters maximum, 1 minimum ([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)).
- **Single host.** One price, one schema, one format claim; no failover and no cross-host check. fal
  is a `proxy` of a Google model, so its "44.1 kHz stereo" restates Google rather than measuring it —
  except in the example artifact, where it is measured and consistent.
- **Licensing and terms are unstated for 3.5.** fal's `license_type` is `commercial`, but which
  Google terms govern the underlying model — Pre-GA preview terms, GA terms, or a consumer-surface
  ToS — is not published. See below.
- **C2PA is not claimed for 3.5.** DeepMind says SynthID for "all of our tracks" and fal repeats
  SynthID; the C2PA Content Credentials claim exists only on the Lyria 3 model card
  ([card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md)). No 3.5 source mentions
  C2PA.
- **Independent evidence is thin and coarse.** AA discloses no endpoint, prompt set, sample count or
  language for its music boards, and its ±18–21 intervals make adjacent rows inseparable
  ([vocal](../../sources/artificialanalysis.ai/music-vocal-leaderboard/2026-10-26.md)).

## Access, pricing, licensing

**Billing basis: per generation, flat — not per second, and not per output minute.** fal lists
`$0.1 per generations` for `google/lyria-3.5`
([fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)). Google Cloud lists no 3.5 row at all (searched
2026-10-26), so fal's number
is the only price that exists.

| Surface | Price | Basis | Per-second, at documented length |
| --- | --- | --- | --- |
| fal `google/lyria-3.5` | **$0.10** | per generation | ~$0.00056/s if the output is a 3-minute song; **~$0.0033/s if it is 30 s** (as fal's example) |
| Google Cloud `lyria-3-pro-preview` | $0.08 | per song (≤184 s) | ~$0.00043/s ([pricing](../../sources/cloud.google.com/lyria-pricing/2026-10-26.md)) |
| Google Cloud `lyria-3-clip-preview` | $0.04 | per 30 s clip | ~$0.0013/s |
| fal `fal-ai/lyria3/pro` | $0.08 | per audio | same as Google Cloud ([fal Lyria 3 record](../../sources/fal.ai/lyria3/2026-10-26.md)) |

Because the unit is a generation rather than a duration, 3.5's economics depend entirely on how long
the returned track is: at 3 minutes it costs about 28% more per second than Lyria 3 Pro on Google
Cloud; at the 30 seconds fal's own example runs, it costs about 2.5× the clip model's per-second rate.
No markup comparison is possible for 3.5 because Google publishes no price for it.

**Licensing:**

- **Weights: closed.** No checkpoint, Hugging Face repo or licence text for any Lyria 3.x model
  exists in any captured source; Magenta RealTime is the family's open branch and a different product
  ([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md)).
- **Commercial use:** fal tags the endpoint `commercial`, and the outputs carry SynthID. But Google
  publishes no terms page for 3.5, so whether output may be used in production, and under which
  Google agreement, is not documented. Lyria 3's card explicitly permits production and commercial
  use under Pre-GA terms ([card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md));
  that permission is written for `lyria-3-*-preview`, not for 3.5.
- **No IP indemnity.** Google's Generative AI Indemnified Services list covers the Agent Platform API
  only for GA versions of Codey, Gemini, Imagen, PaLM and Veo — **Lyria is absent entirely**
  ([indemnified services](../../sources/cloud.google.com/generative-ai-indemnified-services/2026-10-26.md)).
  A customer shipping Lyria 3.5 music carries the copyright risk of the output.
- **Provenance:** SynthID watermarking on all output per DeepMind and fal
  ([DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md),
  [fal](../../sources/fal.ai/lyria-3-5/2026-10-26.md)); C2PA not claimed for 3.5.

## Difference from Lyria 3

| | Lyria 3 Clip | Lyria 3 Pro | **Lyria 3.5** |
| --- | --- | --- | --- |
| Google model ID | `lyria-3-clip-preview` | `lyria-3-pro-preview` | **none published** |
| Launch evidence | 2026-03-25 preview ([release notes](../../sources/cloud.google.com/vertex-generative-ai-release-notes/2026-10-26.md)) | 2026-03-25 preview | **no Google date**; AA `releaseDate` 2026-07-29, fal listing 2026-09-19 |
| Documented max length | 30 s | 184 s | "up to 3 minutes" / "a few minutes", prompt-controlled |
| Length control | none | `[mm:ss]` markers, `Intensity: n/10` | `[mm:ss]` markers **and** duration hints ("a 2-minute track") |
| `lyrics` output shape | prose caption + `BPM:` trailer | same | **timestamped lyric lines with segment markers** (`[[A0]]`, `[12.0:] …`) |
| Hosts | Vertex, fal, Replicate | Vertex, fal, Replicate | **fal only** |
| Price | $0.04 / clip | $0.08 / song | $0.10 / generation |
| AA vocal Elo | not ranked | 1047 (6th) | **1051 (5th)** |
| AA instrumental Elo | not ranked | **1080 (5th)** | 1078 (6th) |
| Languages | 8 | 8 | 8 (same list) |
| Watermark | SynthID + C2PA | SynthID + C2PA | SynthID; C2PA unstated |
| Negative prompt | card says unsupported | card says unsupported | fal schema says unsupported |

What 3.5 does **not** change: the language list, the prompt-only control surface, the 5,000-character
prompt limit, the one-generation-per-request model, the MP3/44.1 kHz output claim, the vocal-likeness
safety filter, and the absence of any IP indemnity. The 3-minute ceiling is not new either — Lyria 3
Pro already produced 184 seconds — so the difference is a single variable-length endpoint with
structured lyric output and a `$0.10` price, not a longer or better-documented model.

Sources: [DeepMind](../../sources/deepmind.google/lyria-model-page/2026-10-26.md),
[fal 3.5](../../sources/fal.ai/lyria-3-5/2026-10-26.md),
[fal Lyria 3 endpoints](../../sources/fal.ai/lyria3/2026-10-26.md),
[Lyria 3 card](../../sources/cloud.google.com/lyria-3-model-card/2026-10-26.md),
[Lyria 3 page](lyria-3.md).

## Unresolved questions

1. **When did Lyria 3.5 launch?** No Google date exists. AA's `releaseDate` (2026-07-29) and fal's
   listing (2026-09-19) disagree by seven weeks, and AA added the model to its arena (2026-08-25)
   before fal's catalogue date. Which surface saw it first is unknown.
2. **Is it a new model or a re-launch of Lyria 3 Pro?** DeepMind lists 3.5 as a family member; AA
   ranks 3.5 and 3 Pro as separate models with different `releaseDate` values; fal sells them at
   different prices with different lyric-output shapes. Nothing contradicts distinctness, but no
   Google source states that 3.5 has different weights from Lyria 3 Pro, and AA's measurement finds
   no separable quality difference. DeepMind's author-credit block credits "Lyria 3" and "Lyria 2" and
   **does not** credit a Lyria 3.5 team.
3. **What is the hard maximum duration?** "A few minutes" (fal) vs "3-minute song" (DeepMind) vs
   30.69 s in fal's published example. No source states a cap and no parameter enforces one.
4. **Is 3.5 served by any Google API behind an allow-list?** The docs say nothing either way; fal's
   proxy implies a Google-side endpoint exists somewhere.
5. **Which terms license 3.5 output?** Pre-GA preview terms, GA terms, or a consumer ToS? Is
   commercial use permitted? Is C2PA applied?
6. **Does `negative_prompt` get rejected or silently ignored?** fal marks it deprecated and unsupported
   while still accepting the field.
7. **Is there an instrumental mode?** AA ranks 3.5 on its instrumental board; no vendor surface
   documents a toggle or an "instrumental" convention for 3.5 (Lyria 3's prompt guide recommends
   saying so in the prompt).
8. **Are the returned lyric timestamps aligned to the audio?** The format carries line-level
   timestamps; nothing states whether they are model estimates or measured alignments.
9. **How good is it, independently?** Only AA's two blind-preference boards exist, both without
   endpoint, prompt set, language or sample-count disclosure, and with intervals wider than the
   gaps between adjacent models.

## Evidence status

Evidence floor: **met**, but with an unusually weak first-party leg. First-party: DeepMind's Lyria
family page — the only Google surface that names Lyria 3.5, and it carries no date, no
specification and no price — plus Google Cloud's Lyria 3 model card, pricing section, API guide,
prompt guide and release notes as the documented baseline the 3.5 record is measured against, and an
explicit absence capture for the 3.5 model ID. Independent host: fal's `google/lyria-3.5` endpoint
(catalogue metadata, OpenAPI schema, "about" text, price string, published example artifact).
Independent measurement: Artificial Analysis's AA-Music-Vocal v1.1 and AA-Music-Instrumental v1.1
boards. All captured 2026-10-26.

The gap worth naming: **every capability claim on this page that is specific to 3.5 traces back to
either DeepMind's undated marketing copy or fal's restatement of it.** No Google document states a
3.5 model ID, sample rate, duration cap, language list, price or licence. The sample rate and format
in the table above are measured only in the sense that I inspected the container of fal's published
example file.

**No direct tests have been run for this page.** No generation request was made against any endpoint.
The single direct observation is `ffmpeg -i` metadata on fal's example MP3 (44.1 kHz, stereo, 192
kb/s, 30.69 s); it is an artifact inspection, not a model evaluation.

The next useful evidence would be a small reproducible set: run fal's own example prompt
("Two minutes long …") and measure the returned duration; repeat with "exactly 60 seconds" and "a
3-minute track" to see how tightly the prompt hint is honoured; run one non-English lyric prompt per
language; compare 3.5 and Lyria 3 Pro on the same prompt and inspect sample rate, bitrate, channel
count and duration in both files; send a `negative_prompt` to see whether it is rejected or ignored;
and attempt SynthID detection on a downloaded file.

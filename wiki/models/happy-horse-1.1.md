# Happy Horse 1.1

Alibaba's second-generation "Happy Horse" video model, released on Alibaba Cloud Model Studio on
**2026-06-16** as three single-task model IDs — text-to-video, first-frame image-to-video and
reference-to-video — each producing 3–15 second clips at 480P/720P/1080P, 24 fps, MP4, with
synchronised audio ([release record](../../sources/alibabacloud.com/happyhorse-model-lifecycle/2026-10-26.md),
[capability table](../../sources/alibabacloud.com/happyhorse-video-generation-guide/2026-10-26.md)).
It is served by the vendor, by fal and by Replicate as an official model.

It is inside the roster's one-year window (2026-06-16 is after 2025-10-26). The 1.0 line it follows
shipped 2026-04-21/22 and is still on sale, including a video-editing model that 1.1 does not have.

## Identity

- **Canonical name:** "Happy Horse 1.1" (fal, Replicate) / "HappyHorse 1.1" (Alibaba Cloud Model
  Studio's own heading). The roster label matches both spellings; the vendor writes the family name as
  one word in model IDs and headings, and fal writes it as two words in titles.
- **Canonical model IDs** (vendor): `happyhorse-1.1-t2v`, `happyhorse-1.1-i2v`, `happyhorse-1.1-r2v`
  ([release record](../../sources/alibabacloud.com/happyhorse-model-lifecycle/2026-10-26.md)). fal's
  OpenAPI documents confirm the same internal names — the 1.1 text-to-video endpoint's `about` text
  calls the model `happyhorse-1.1-t2v` ([fal catalogue](../../sources/fal.ai/happy-horse-catalogue/2026-10-26.md)).
- **Vendor:** Alibaba, sold as a first-party model in Alibaba Cloud Model Studio (Bailian) across
  Singapore, China (Beijing), Germany (Frankfurt), US (Virginia) and Japan (Tokyo)
  ([pricing](../../sources/alibabacloud.com/happyhorse-model-pricing/2026-10-26.md)). Who inside
  Alibaba built it is less settled — see the ambiguity note below.
- **Aliases in the wild:** "Happy Horse v1.1" / "Happy Horse 1.1" appears in Black Forest Labs'
  FLUX 3 comparison set, alongside "Happy Horse v1" and Kling v3 Pro
  ([BFL announcement](../../sources/bfl.ai/flux-3-max-family-announcement/2026-10-26.md)).

| Route | Endpoint / ID | Tasks exposed | First seen |
| --- | --- | --- | --- |
| Model Studio | `happyhorse-1.1-t2v`, `-i2v`, `-r2v` | three separate models | 2026-06-16 (release) |
| fal | `alibaba/happy-horse/v1.1/text-to-video`, `/image-to-video`, `/reference-to-video` | three endpoints | `publishedAt` 2026-06-22 |
| Replicate | `alibaba/happyhorse-1.1` | one endpoint, task chosen by image count | listed as "created 4 months ago" at capture |

Sources: [release record](../../sources/alibabacloud.com/happyhorse-model-lifecycle/2026-10-26.md),
[fal catalogue](../../sources/fal.ai/happy-horse-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/happyhorse-1-1/2026-10-26.md).

- **The roster's discovery path is not an endpoint.** `alibaba/happy-horse/v1.1` is a fal *group*
  (`group.key: "happy-horse-1.1"`); `GET api.fal.ai/v1/models?endpoint_id=alibaba/happy-horse/v1.1`
  returns the bare string with no metadata and the bare endpoint's OpenAPI schema 404s. The callable
  endpoints are the three children ([fal catalogue](../../sources/fal.ai/happy-horse-catalogue/2026-10-26.md)).
- **Siblings:** the Happy Horse 1.0 line (`happyhorse-1.0-t2v`, `-i2v`, `-r2v`, `-video-edit`); Alibaba's
  Wan family, which the same vendor guide recommends over HappyHorse for longer clips and for
  first/last-frame and all-in-one reference work (`wan3.0-video`, `wan3.0-video-prime`); and the
  unrelated `happyoyster-1.0-*` world models (2026-09-17), which share the "Happy" prefix and nothing
  else ([release record](../../sources/alibabacloud.com/happyhorse-model-lifecycle/2026-10-26.md)).

### Unresolved identity ambiguity

1. **1.1 is a new version, not a relabelled 1.0.** The vendor gives it new model IDs, new release notes
   and a resolution tier (480P) that 1.0 does not offer; both versions remain obtainable and separately
   priced; Artificial Analysis ranks them as separate entries. The vendor's change note is qualitative
   only ("improved semantic understanding, cinematic shot control, and dynamic motion rendering"), with
   no numbers and no checkpoint suffix in the IDs
   ([release record](../../sources/alibabacloud.com/happyhorse-model-lifecycle/2026-10-26.md),
   [AA leaderboards](../../sources/artificialanalysis.ai/video-arena-happyhorse/2026-10-26.md)).
2. **The lab attribution is contested.** fal's FAQ says the 1.0 model "was submitted pseudonymously to
   the Artificial Analysis leaderboard", that the team's marketing "claim[s] it was built by the Future
   Life Lab team at Taotian Group (Alibaba), led by Zhang Di", and that "This claim has not been
   independently verified" — while the same page's body text states flatly that "On April 9, 2026,
   Alibaba Group Holding Ltd revealed it created the 'Happy Horse' video AI model"
   ([fal landing page](../../sources/fal.ai/happyhorse-1.0-landing-page/2026-10-26.md)). Artificial
   Analysis labels the lab "Alibaba-ATH" (Alibaba Token Hub)
   ([AA](../../sources/artificialanalysis.ai/video-arena-happyhorse/2026-10-26.md)). Model Studio's own
   documentation makes no ATH or Future Life Lab attribution at all. What is established is that
   Alibaba sells the model as a first-party Model Studio product.
3. **The name in the wild is inconsistent:** `happy-horse` (fal), `happyhorse` (Replicate, vendor IDs),
   "HappyHorse-1.1" (vendor headings), "Happy Horse 1.1" (roster, BFL).

## Current assessment

Happy Horse 1.1 is a **distinct, current model**, not a repackaging, and it is a genuine improvement on
1.0 — but it is mid-pack, not the leader its host's marketing says it is.

- **Measured position.** On the captured Artificial Analysis boards it ranks **#13 of 30** on
  text-to-video (Elo 1050±15, 5,929 votes) and **#10 of 23** on image-to-video (Elo 1061±17, 4,597
  votes) ([AA](../../sources/artificialanalysis.ai/video-arena-happyhorse/2026-10-26.md)). Both intervals
  overlap several neighbours, so treat it as "upper-middle of a large field", not a rank.
- **The "#1-ranked" phrasing on fal is stale.** fal's endpoint descriptions still say "Happy Horse 1.1
  is Alibaba's #1-ranked video model" ([fal catalogue](../../sources/fal.ai/happy-horse-catalogue/2026-10-26.md));
  the only #1 evidence on fal's own pages is an April 2026 snapshot for **1.0** on two no-audio boards,
  captioned "Scores reflect early vote counts and may shift"
  ([fal landing page](../../sources/fal.ai/happyhorse-1.0-landing-page/2026-10-26.md)).
- **1.1 > 1.0, modestly.** +17 Elo on text-to-video and +19 on image-to-video, with overlapping
  intervals: a real ordering that does not establish a tier gap
  ([AA](../../sources/artificialanalysis.ai/video-arena-happyhorse/2026-10-26.md)).
- **Alibaba's own Wan 3.0 outranks it.** Wan 3.0 is #1 on the text-to-video board (1174±14) and #5 on
  image-to-video (1127±16) — ahead of HappyHorse 1.1 on both — and the vendor guide routes longer
  clips, first/last-frame work and richer references to Wan 3.0 while recommending HappyHorse 1.1 for
  plain prompt-to-clip and single-frame animation
  ([vendor guide](../../sources/alibabacloud.com/happyhorse-video-generation-guide/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/video-arena-happyhorse/2026-10-26.md)).
  HappyHorse's advantage is price, not quality: $0.18/s at 1080P against the $12.00/minute
  (≈$0.20/s) that Artificial Analysis lists for Wan 3.0.
- **Not deprecated, not preview.** All 1.1 endpoints are `status: public`, `deprecated: false` on fal,
  and the vendor prices and documents them as current. The editing task stays on 1.0, which is a
  retained specialist rather than a superseded one.

## Documented capabilities

Output envelope, first-party ([vendor guide](../../sources/alibabacloud.com/happyhorse-video-generation-guide/2026-10-26.md)):

| | text-to-video | image-to-video (first frame) | reference-to-video |
| --- | --- | --- | --- |
| Resolution | 480P, 720P, 1080P (default 1080P) | 480P, 720P, 1080P (default 1080P) | 480P, 720P, 1080P (default 1080P) |
| Duration | 3–15 s, default 5 | 3–15 s, default 5 | 3–15 s, default 5 |
| Frame rate / container | 24 fps, MP4 | 24 fps, MP4 | 24 fps, MP4 |
| Audio | yes ("Audio" feature) | yes | yes |
| Aspect ratio | `16:9` default, `9:16`, `1:1`, `4:3`, `3:4`, `4:5`, `5:4`, `9:21`, `21:9` | inherited from the first frame (no `ratio` parameter) | same nine as text-to-video |
| Image input | — | exactly one `first_frame`, ≥300 px per side, 1:2.5–2.5:1, ≤20 MB | 1–9 `reference_image`, shortest side ≥400 px, ≤20 MB each |
| Prompt | required, ≤5,000 non-Chinese / 2,500 Chinese characters, excess truncated | optional, same limit | required, same limit |

Sources: [t2v](../../sources/alibabacloud.com/happyhorse-text-to-video-api-reference/2026-10-26.md),
[i2v](../../sources/alibabacloud.com/happyhorse-image-to-video-api-reference/2026-10-26.md),
[r2v](../../sources/alibabacloud.com/happyhorse-reference-to-video-api-reference/2026-10-26.md).

- **Reference syntax is positional.** In reference-to-video, "[Image 1]"…"[Image 9]" in the prompt map
  to the order of the media array ([r2v reference](../../sources/alibabacloud.com/happyhorse-reference-to-video-api-reference/2026-10-26.md)).
- **Watermark is on by default.** `watermark: true` burns "Happy Horse" / "HappyHorse" into the
  bottom-right corner; it is the only output marking the vendor documents
  ([i2v reference](../../sources/alibabacloud.com/happyhorse-image-to-video-api-reference/2026-10-26.md)).
- **Reproducibility is partial.** `seed` is accepted (0–2147483647) but the vendor states "the same seed
  does not guarantee identical results".
- **Async only, 24-hour artifacts.** Jobs take 1–5 minutes; the task ID and the result URL both expire
  after 24 hours, so output must be copied to storage
  ([t2v reference](../../sources/alibabacloud.com/happyhorse-text-to-video-api-reference/2026-10-26.md)).
- **Host surface differs from the vendor's.** fal and Replicate offer only 720p/1080p, five or nine
  aspect ratios, 10–20 MB images, and (fal) an `enable_safety_checker` toggle the vendor does not
  document; the vendor's `watermark` parameter is absent from both hosts
  ([fal](../../sources/fal.ai/happy-horse-catalogue/2026-10-26.md),
  [Replicate](../../sources/replicate.com/happyhorse-1-1/2026-10-26.md)).

### Claims, labelled as claims

- **"Synchronized native audio and multilingual lip-sync"** — fal's description of every 1.1 endpoint.
  The vendor's capability page says only "generate videos with audio" and never uses the word
  lip-sync; the closest first-party phrasing is the 1.1 image-to-video release note's "audio-visual
  synchronization" ([release record](../../sources/alibabacloud.com/happyhorse-model-lifecycle/2026-10-26.md)).
  fal's separate FAQ names the languages: "native lip-sync across seven languages: Mandarin,
  Cantonese, English, Japanese, Korean, German, and French"
  ([fal landing page](../../sources/fal.ai/happyhorse-1.0-landing-page/2026-10-26.md)). No vendor page
  captured confirms a language list or a lip-sync mode.
- **"15 billion parameters, unified 40-layer self-attention Transformer with no cross-attention
  modules, ~38 s for a 1080p clip on one H100"** — fal attributes these to "the team's own sites" and
  states "These specs have not been independently verified"
  ([fal landing page](../../sources/fal.ai/happyhorse-1.0-landing-page/2026-10-26.md)). No vendor
  documentation captured mentions architecture or parameter count.
- **"Alibaba's #1-ranked video model"** — host marketing, addressed under Current assessment.
- **BFL's preference study** ranks Happy Horse 1.1 as beaten by FLUX 3 in 57% of comparisons on
  10-second 720p text-to-video clips, "preliminary" and "early"
  ([BFL](../../sources/bfl.ai/flux-3-max-family-announcement/2026-10-26.md)) — a vendor's own comparison,
  not an independent measurement.

## Limitations and constraints

- **15-second ceiling and 24 fps.** Both are below Wan 3.0 (2–30 s, 30 fps) in the same vendor guide.
- **No last frame, no extension, no multi-clip stitching.** HappyHorse 1.1 exposes first-frame
  image-to-video only; last-frame and first/last-frame workflows are Wan 3.0 features
  ([vendor guide](../../sources/alibabacloud.com/happyhorse-video-generation-guide/2026-10-26.md)).
- **Editing is 1.0-only.** `happyhorse-1.0-video-edit` takes one video (3–60 s, ≤100 MB, 8–60 fps) plus
  0–5 reference images and returns at most 15 seconds — anything longer is truncated to the first 15 s.
  Its only audio control is `auto` or `origin`, so it cannot generate new audio
  ([edit reference](../../sources/alibabacloud.com/happyhorse-video-edit-api-reference/2026-10-26.md)).
- **References are images only.** No video, audio, document or link references; nine images is the cap.
- **No audio toggle.** Unlike Wan 3.0, HappyHorse 1.1 has no `audio` switch and no audio-track input, so
  a silent or custom-soundtrack workflow has to discard the generated audio.
- **Prompt truncation is silent:** 5,000 non-Chinese / 2,500 Chinese characters, "Excess is truncated".
- **Region coupling.** Model, endpoint URL and API key must be in the same region; cross-region calls
  fail. The 10-second free quota exists only in Singapore.
- **Moderation differs by host.** fal defaults `enable_safety_checker: true` and requires account
  authorisation to disable it; the vendor documents no equivalent toggle.
- **Host-imposed narrowing.** On Replicate a reference image needs "each side >=300px" while the vendor
  requires shortest side ≥400 px; a request that satisfies Replicate's schema may be rejected or
  downscaled upstream. Neither host exposes the vendor's 480P tier.
- **No weights, no local run.** fal states the 1.0 model "will not be licensable or open source"
  ([fal landing page](../../sources/fal.ai/happyhorse-1.0-landing-page/2026-10-26.md)); no weights were
  found for any Happy Horse model on Hugging Face or ModelScope at capture (searches returned no
  results).
- **Which checkpoint each host serves is unknown.** fal publishes endpoint dates, Replicate publishes
  page-update dates, and neither names a vendor checkpoint.

## Access, pricing, licensing

Billing is **per second of output video, by resolution tier**, with failed requests free. Editing
additionally bills input seconds.

Vendor list price, Singapore/International (verbatim rows in
[pricing record](../../sources/alibabacloud.com/happyhorse-model-pricing/2026-10-26.md)):

| Model | 480P | 720P | 1080P |
| --- | --- | --- | --- |
| `happyhorse-1.1-t2v` / `-i2v` / `-r2v` | $0.07/s | $0.14/s | $0.18/s |
| `happyhorse-1.0-t2v` / `-i2v` / `-r2v` | — | $0.14/s | $0.24/s |
| `happyhorse-1.0-video-edit` (input **and** output) | — | $0.14/s | $0.24/s |

Other regions (Beijing, Frankfurt, Virginia, Tokyo) are ~8 % cheaper and carry no free quota:
1.1 at $0.0618845 / $0.123769 / $0.165026 per second for 480P / 720P / 1080P.

Hosts:

| Route | 720p | 1080p | Notes |
| --- | --- | --- | --- |
| Model Studio (Singapore) | $0.14/s | $0.18/s | 10-second free quota; 480P tier available |
| fal | $0.14/s | $0.18/s | matches vendor; no 480P |
| Replicate | $0.14/s | $0.18/s | matches vendor; no 480P |

Sources: [pricing](../../sources/alibabacloud.com/happyhorse-model-pricing/2026-10-26.md),
[fal](../../sources/fal.ai/happy-horse-catalogue/2026-10-26.md),
[Replicate](../../sources/replicate.com/happyhorse-1-1/2026-10-26.md).

- **A price contradiction survives in the 1.0 line:** fal charges **$0.28/s** for 1.0 at 1080p while the
  vendor charges $0.24/s — and $0.56/s for 1.0 editing at 1080p against the vendor's $0.24/s. For 1.1 the
  three routes agree exactly. Artificial Analysis's "$10.80 /min" for 1.1 is the vendor's $0.18/s rate
  annualised, and its "$14.40 /min" for 1.0 is the vendor's $0.24/s, not fal's
  ([AA](../../sources/artificialanalysis.ai/video-arena-happyhorse/2026-10-26.md)).
- **Licensing:** commercial use only, closed weights. `licenseType: "commercial"` on every fal endpoint;
  Replicate lists it as an official model; Model Studio sells it as a managed API. No open-weights
  release exists to license.

## Unresolved questions

1. **What actually changed in 1.1?** The vendor's note is qualitative, with no measured delta, and no
   captured source compares 1.1 to 1.0 on a fixed prompt set. The AA Elo gap (+17 T2V, +19 I2V) is the
   only quantitative comparison available, and it is a preference measure with overlapping intervals.
2. **Does 1.1 really do lip-sync, and in which languages?** fal says so, including a seven-language
   list; the vendor's release note claims "audio-visual synchronization" but documents no language
   coverage and no lip-sync control.
3. **Is the audio generated jointly or muxed afterwards?** fal repeats a claim of joint audio-video
   generation in a single 40-layer pass, sourced to the team's own sites and flagged unverified. No
   vendor page captured describes the architecture.
4. **Who built it?** fal simultaneously asserts Alibaba authorship and calls it unverified; Artificial
   Analysis labels it Alibaba-ATH; Model Studio documents the model without any org attribution.
5. **Why is fal's 1.0 1080p price above the vendor's?** No source explains the markup, and it makes the
   "cheaper 1.1" story partly a host artefact for 1.0 buyers.
6. **Will 1.0 editing be superseded?** The vendor still recommends `happyhorse-1.0-video-edit` for
   editing; there is no 1.1 editing model and no deprecation notice.
7. **Which checkpoint do fal and Replicate forward to?** Neither names one, so cross-host comparisons
   cannot be pinned to a version.
8. **What do 480P outputs look like?** No captured page gives pixel dimensions per tier.
9. **What are the consent and safety terms for lip-sync and reference-based identity?** No vendor policy
   text on likeness, consent, or deepfake marking beyond the on-by-default watermark was captured.

## Evidence status

**Floor met.** First-party: seven Alibaba Cloud Model Studio documents captured 2026-10-26 — the model
release record, the video-generation capability guide, three task API references, the video-editing API
reference, and the pricing page. Independent hosts: two fal records (catalogue/schemas/price strings,
and the 1.0 landing page with its FAQ and ranking snapshot) and one Replicate record (official model
card, schema, pricing). Independent measurement: Artificial Analysis text-to-video and image-to-video
Elo boards. One third-party cross-reference (BFL's FLUX 3 announcement) corroborates the name in
circulation.

**No direct tests have been run for this page.** Nothing here is a measurement made by this knowledge
base. Capability statements are vendor or host documentation; price statements are published
schedules; quality statements are Artificial Analysis's blind preference votes or the vendor's own
marketing. Where the vendor and a host disagree (lip-sync, architecture, 1.0 pricing, image minimums)
both are recorded rather than reconciled.

The next useful evidence would be a small reproducible test set against named endpoints and dates: the
same prompt at 480P/720P/1080P to check the tier ladder and audio presence; a first-frame pair to
measure frame adherence; a 9-image reference request to find where identity breaks; a lip-sync check in
each of fal's seven claimed languages; and a seed-reuse run to test reproducibility.

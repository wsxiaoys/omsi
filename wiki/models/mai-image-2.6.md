# MAI-Image 2.6

Microsoft AI's flagship image model, released **2026-08-14** and brought to developers in Microsoft
Foundry public preview on **2026-09-04** alongside a cheaper, faster sibling, MAI-Image-2.6-Flash
([model card](../../sources/microsoft.ai/mai-image-2-6-model-card/2026-10-26.md),
[launch post](../../sources/microsoft.ai/mai-image-2-6-announcement/2026-10-26.md)). It generates
and edits images from text and up to five reference images, and it is the only MAI-Image generation
documented with **web grounding** and **model-chosen aspect ratio** — neither parameter exists on
any 2.5 model
([Foundry how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).

**Is "2.6" a real model ID, or is 2.5 the API SKU?** 2.6 is real and first-party: Microsoft
publishes a model card, a product page, a Foundry catalogue entry (`MAI-Image-2.6`, version
`2026-07-31`) and its own Azure billing meters, and the aggregator label matches the vendor ID
exactly (`mai-image-2-6` on Artificial Analysis). **2.5 is a different, older generation**, and it is
the only MAI-Image family any third-party host serves — fal's `microsoft/mai-image-2.5` is not a
rename of 2.6 ([fal](../../sources/fal.ai/mai-image-2.5/2026-10-26.md)). The roster's suspicion is
half right: fal's slug stops at 2.5, but that is a hosting gap, not an identity.

## Identity

- Canonical name: **MAI-Image-2.6** (Microsoft's spelling, hyphenated). Prose and press variants
  "MAI Image 2.6" and "MAI-Image 2.6" appear; Foundry labels it "MAI-Image-2.6 (Preview)".
- Developer: Microsoft AI (author), published by Microsoft. Sold "Direct from Azure" — Microsoft is
  the biller, not a marketplace partner
  ([catalogue](../../sources/microsoft.com/mai-image-2-6-foundry-catalog/2026-10-26.md)).
- Model version: **`2026-07-31`** — the snapshot string Foundry uses for both 2.6 and 2.6-Flash
  ([catalogue](../../sources/microsoft.com/mai-image-2-6-foundry-catalog/2026-10-26.md),
  [how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)). It predates the
  model card's release date, so treat it as a build label, not a launch date.
- Dates: **release 2026-08-14** (2.6) and **2026-09-04** (2.6-Flash), with an EU release of
  2026-09-04 ([model card](../../sources/microsoft.ai/mai-image-2-6-model-card/2026-10-26.md));
  **public preview in Foundry 2026-09-04**
  ([launch post](../../sources/microsoft.ai/mai-image-2-6-announcement/2026-10-26.md)).
  Artificial Analysis independently lists the release month as Aug 2026
  ([AA](../../sources/artificialanalysis.ai/mai-image-2-6/2026-10-26.md)). Both dates are inside the
  roster's one-year window.
- Endpoints (first-party only): `POST https://<resource>.services.ai.azure.com/mai/v1/images/generations`
  and `…/mai/v1/images/edits`, addressed by *deployment name*, not model ID
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)). Consumer surface:
  MAI Playground (`playground.microsoft.ai/chat?model=mai-image-2-6`)
  ([product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md)).
- Host endpoints: **none found.** fal serves 2.5 and 2.5-Pro only and has no 2.6 endpoint
  ([fal](../../sources/fal.ai/mai-image-2.5/2026-10-26.md)); Replicate's Microsoft account carries
  only open models (Phi, VibeVoice, OmniParser) and no MAI-Image entry
  ([Replicate check](../../sources/replicate.com/mai-image-not-listed/2026-10-26.md)).
- Siblings: **MAI-Image-2.6-Flash** — "an optimized version of MAI-Image.2.6", sold as
  "production-ready quality at less than half the price of our flagship model"
  ([model card](../../sources/microsoft.ai/mai-image-2-6-model-card/2026-10-26.md),
  [product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md)). Previous
  generation: MAI-Image-2.5, 2.5-Flash and 2.5-Pro (versions `2026-06-02`, `2026-06-02`,
  `2026-06-19`), all still listed in Foundry
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).

### The 2.5 → 2.6 relationship

Microsoft's own site treats 2.6 as the successor: the URL `microsoft.ai/models/mai-image-2-5/` now
**redirects to** `/models/mai-image-2-6/`, while a "Try MAI-Image-2.5" link still points at the old
path ([product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md)).

The two generations differ on four things the documentation states outright:

| | MAI-Image-2.5 family | MAI-Image-2.6 family |
| --- | --- | --- |
| Output pixel ceiling | 1,048,576 (1024×1024) | **2,359,296** (1536×1536) |
| `web_grounding` | no | **yes** (Bing Search) |
| `auto_aspect_ratio` | no | **yes** |
| Output price (Global) | $47 /1M tokens | **$38 /1M tokens** |

([Foundry models table](../../sources/microsoft.com/foundry-models-mai-image-specs/2026-10-26.md),
[how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md),
[Azure meters](../../sources/microsoft.com/mai-image-2-6-azure-retail-prices/2026-10-26/index.md))

So 2.6 is not a repackaging: it has a higher resolution ceiling, two parameters 2.5 lacks, a lower
per-token price, and a measurably higher preference score on both Artificial Analysis boards
(§ Current assessment). 2.5-Pro keeps one distinction Microsoft still advertises — object and
character consistency across complex scenes and views — but that is a 2.5-series positioning claim,
not a measured advantage over 2.6
([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).

## Current assessment

2.6 is a **current flagship in preview, not a GA product**, and it is no longer the newest model in
its own line. Foundry lists it as Preview with no SLA ("Microsoft doesn't recommend it for
production workloads")
([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md),
[catalogue](../../sources/microsoft.com/mai-image-2-6-foundry-catalog/2026-10-26.md)). Artificial
Analysis also carries a **MAI-Image-2.7-Preview** entry (Oct 2026, Elo 1193, "No API available") that
outranks 2.6 on the editing board — the editing successor is visible on the leaderboard before any
first-party 2.7 documentation was captured
([AA](../../sources/artificialanalysis.ai/mai-image-2-6/2026-10-26.md)).

Independent measurement places 2.6 in the chasing pack rather than at the frontier:

| Board (AA v2.1) | MAI-Image-2.6 | Leader | Nearest rivals |
| --- | --- | --- | --- |
| Text-to-image | **1166 ±12**, rank 5 (band 4–6), 8,342 comparisons | GPT Image 2.5 Sunburst (max) 1222 | GPT Image 2.5 Flare 1207, GPT Image 2 (high) 1186, Nano Banana 2.1 1176 |
| Image editing | **1151 ±12**, rank 4 (band 4–7), 16,644 comparisons | GPT Image 2.5 Sunburst (max) 1199 | MAI-Image-2.7-Preview 1193, GPT Image 2.5 Flare 1182 |

Its real strength is **price-adjusted**: on AA's numbers it beats the GPT Image 2.5 pair on cost per
Elo by a wide margin ($38.9 vs $210.72 per 1,000 images) while sitting ~40–55 Elo behind, and it is
both cheaper and better than MAI-Image-2.5 ($48.1) and 2.5-Pro ($108.5)
([AA](../../sources/artificialanalysis.ai/mai-image-2-6/2026-10-26.md)). That is the substance behind
Microsoft's "best price-per-Elo performance in the world" line — a claim about a frontier, not about
quality
([launch post](../../sources/microsoft.ai/mai-image-2-6-announcement/2026-10-26.md)).

**Rankings moved after launch.** Microsoft's launch post claimed "#2 for both text to image and
image editing on Arena" and "#2 text-to-image / #1 image editing on Artificial Analysis", footnoted
"as of Sep 4, 2026". At capture, AA has it 5th and 4th. The September claim is stale rather than
false — GPT Image 2.5, Nano Banana 2.1, Grok Imagine Image 2.0 and 2.7-Preview have all arrived or
moved since ([AA](../../sources/artificialanalysis.ai/mai-image-2-6/2026-10-26.md)).

## Documented capabilities

All vendor/host documentation; no independent capability test was run.

- **Text-to-image and instruction editing in one model.** Same deployment serves
  `/mai/v1/images/generations` and `/mai/v1/images/edits`
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).
- **Multi-reference editing, up to five images.** "Input: text and up to five images (JPEG or PNG
  format for image editing workflows)"; the product page calls it "up to five visual references"
  ([Foundry models table](../../sources/microsoft.com/foundry-models-mai-image-specs/2026-10-26.md),
  [product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md)).
- **Web grounding (2.6-only).** `web_grounding: true` lets the model "retrieve current, relevant
  information from Bing Search and use the results as additional context"
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).
- **Model-chosen aspect ratio (2.6-only).** `auto_aspect_ratio` lets the model pick the output shape
  from prompt and inputs; otherwise `width`/`height` are explicit
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).
- **Resolution up to 2,359,296 total pixels** (1536×1536 equivalent), each side ≥768; marketed as
  "up to 1.5K resolution" ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md),
  [product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md)).
- **Architecture (vendor-stated):** diffusion with a flow-matching objective, **20B non-embedding
  parameters**, trained 2026-04-17 → 2026-07-22 on paired image/text data
  ([model card](../../sources/microsoft.ai/mai-image-2-6-model-card/2026-10-26.md)).
- **Edit types claimed:** object removal and replacement, attribute changes, inpainting, text
  updates, artifact cleanup (motion blur), layout adaptation, with consistency across iterative
  edits ([model card](../../sources/microsoft.ai/mai-image-2-6-model-card/2026-10-26.md),
  [catalogue](../../sources/microsoft.com/mai-image-2-6-foundry-catalog/2026-10-26.md)).
- **Text rendering, portraits, product/commercial design** are the marketed strengths; Foundry
  describes 2.6 as having "stronger text rendering, improved portraits and 3D imagery" than 2.5
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).

### Marketing claims, labelled

- "Ranks No. 2 for both text to image and image editing on Arena" and "No. 2 text-to-image, No. 1
  image editing on Artificial Analysis" — **as of 2026-09-04 only**; not reproducible on the capture
  date ([launch post](../../sources/microsoft.ai/mai-image-2-6-announcement/2026-10-26.md)).
- "MAI-Image-2.6-Flash … 2.8x faster than GPT-Image-2-Medium while delivering 72% greater
  efficiency" — vendor internal load test, 100 RPM at 1024×1024; no prompt set, hardware, or
  definition of "efficiency" published
  ([launch post](../../sources/microsoft.ai/mai-image-2-6-announcement/2026-10-26.md),
  [product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md)).
- "Best price-per-Elo performance in the world" — true of the vendor's own chart and consistent with
  AA's price column, but it is a frontier claim, not a quality claim
  ([product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md)).
- **Vendor Elo numbers do not match AA's.** Microsoft's chart plots 2.6 at Elo **1324**, 2.5 at
  1301, 2.5-Pro at 1294; AA's boards give 2.6 1166/1151 and 2.5 1118/1127. Different boards,
  different snapshots, or both — the vendor chart carries no date and no sample count, so its
  absolute values should not be compared with AA's
  ([product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md),
  [AA](../../sources/artificialanalysis.ai/mai-image-2-6/2026-10-26.md)).

## Limitations and constraints

- **Preview status, no SLA.** All five MAI image models are Preview; Microsoft "doesn't recommend
  [preview] for production workloads"
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).
- **PNG only.** "The output format is always PNG" — no JPEG/WebP option on the Foundry API
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).
- **English only, no tool calling**, 32K-token context, 4,096 output tokens
  ([Foundry models table](../../sources/microsoft.com/foundry-models-mai-image-specs/2026-10-26.md),
  [catalogue](../../sources/microsoft.com/mai-image-2-6-foundry-catalog/2026-10-26.md)).
- **Size floor and ceiling.** Both dimensions ≥768 px; total ≤2,359,296 px. An unusual aspect ratio
  is legal only inside that budget
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)).
- **Thin control surface.** The documented parameters are `prompt`, `width`, `height`,
  `auto_aspect_ratio`, `web_grounding` and the reference images — no seed, negative prompt, steps,
  guidance, or safety-threshold control
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)). Reproducibility
  and fine-grained sampling control are therefore not available.
- **Rate limits are low.** Global Standard gives 6 RPM per quota tier for 2.6 and 2.6-Flash, against
  2 RPM for every 2.5 model, and **0 RPM on the free tier**
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)). High-throughput
  production use needs a quota increase.
- **Safety gating.** Prompt and output filtering with data-side mitigations; the card concedes image
  models "are assumed to be able to produce harmful or unexpected content"
  ([model card](../../sources/microsoft.ai/mai-image-2-6-model-card/2026-10-26.md)). Photorealistic
  edits of minors are **blocked by default** with an access-request path, auto-approved for
  enterprise-tier customers
  ([how-to](../../sources/microsoft.com/mai-image-foundry-how-to/2026-10-26.md)). Refusals will vary
  by tenant and deployment, so one blocked request is not evidence of a universal restriction.
- **No public weights and no open licence.** Distribution is Foundry + MAI Playground only; licence
  is "various product and service terms where the model is deployed"
  ([model card](../../sources/microsoft.ai/mai-image-2-6-model-card/2026-10-26.md)).
- **No third-party host.** Nothing to fall back on if Foundry is unavailable or a region is missing.

## Access, pricing, licensing

Billing is **per token**, not per image, on Azure Global Standard meters effective 2026-09-01
([Azure meters](../../sources/microsoft.com/mai-image-2-6-azure-retail-prices/2026-10-26/index.md)):

| Meter | MAI-Image-2.6 | MAI-Image-2.6-Flash |
| --- | --- | --- |
| Text input /1M | $5.00 | no Global meter captured (Data Zone $1.925) |
| Image input /1M | $8.00 | $2.50 |
| Image output /1M | **$38.00** | **$19.00** |
| ≈ per generated image (1,024 output tokens) | **$0.0389** | **$0.0195** |
| Data Zone (EU boundary) output /1M | $41.80 | $20.90 |
| US Gov output /1M | $47.50 | $23.75 |

The 1,024-tokens-per-image basis is **arithmetic, not documentation**: $38/1M × 1,024 = $38.9 per
1,000 images, which is exactly the figure on Microsoft's own chart and in AA's price column, and fal
states the same 1,024-token basis for the 2.5 sibling
([Azure meters](../../sources/microsoft.com/mai-image-2-6-azure-retail-prices/2026-10-26/index.md),
[product page](../../sources/microsoft.ai/mai-image-2-6-model-page/2026-10-26.md),
[AA](../../sources/artificialanalysis.ai/mai-image-2-6/2026-10-26.md),
[fal](../../sources/fal.ai/mai-image-2.5/2026-10-26.md)). Larger outputs likely consume more output
tokens; no captured page states the rate. An edit adds **image-input tokens at $8/1M** on top, and
the tokens one reference image consumes are not documented, so per-edit cost cannot be derived from
the captured evidence — note that AA prices 2.6 identically for generation and editing ($38.9/1k),
which suggests its price column ignores input tokens.

Two pricing contradictions are left standing:

- **The public Azure price list does not list 2.6.** The page that the 2.6 catalogue card links to
  as "View pricing" carries MAI-Image-2, 2-Efficient and the three 2.5 models, but no 2.6 row, while
  the billing API has live 2.6 meters
  ([price list](../../sources/microsoft.com/foundry-models-pricing-page/2026-10-26.md),
  [meters](../../sources/microsoft.com/mai-image-2-6-azure-retail-prices/2026-10-26/index.md)).
- **fal's prices are not Microsoft's.** For 2.5, fal charges $47/1M output tokens — the same as
  Azure's 2.5 Global meter — but for 2.5-Pro it charges $162/1M against Azure's $106/1M
  ([fal](../../sources/fal.ai/mai-image-2.5/2026-10-26.md),
  [Azure meters](../../sources/microsoft.com/mai-image-2-6-azure-retail-prices/2026-10-26/index.md)).
  Host markups therefore exist on this family; do not assume a 2.6 host price would match Azure's.

Licensing: use is governed by the hosting product's terms (Foundry / MAI Playground), not a model
licence; there is no weights licence because no weights are published
([model card](../../sources/microsoft.ai/mai-image-2-6-model-card/2026-10-26.md)). Commercial use of
outputs was not separately documented in any capture — check Microsoft's product terms before
relying on it.

## Unresolved questions

1. **When does 2.6 leave preview, and do the preview prices survive GA?** No GA date appears in any
   capture; the meters have no end date.
2. **Which regions actually serve 2.6?** Global meters exist for ~16–25 regions depending on the
   meter, and the sets differ per meter — a pattern that suggests staged rollout, not uniform
   availability. The Foundry region-availability page was not captured.
3. **How many output tokens does an image really cost?** Everything above assumes 1,024 tokens per
   image; the catalogue's 4,096-output-token limit would allow several images at that rate, and no
   page ties tokens to pixels or to output count.
4. **Why is there no third-party host?** fal and Replicate both carry Microsoft models but not this
   one; whether that is preview exclusivity, commercial terms, or lack of demand is unknown.
5. **How does 2.6 compare with 2.5-Pro on the categories where 2.5-Pro is still positioned as
   stronger** (object/character consistency across views)? AA's aggregate Elo favours 2.6, but
   aggregate Elo does not settle a category claim.
6. **What is the vendor's 1324-Elo chart?** It cannot be reconciled with AA's 1166/1151 without a
   board name, snapshot date, or sample count.
7. **Is MAI-Image-2.7 a replacement or a parallel editing model?** AA lists a 2.7-Preview at Elo 1193
   on editing with "No API available"; no first-party 2.7 documentation was captured.

## Evidence status

Floor met. **First-party:** model card PDF, product page, launch post (microsoft.ai); Foundry
catalogue entry, deployment/API how-to, model inventory and Azure billing meters (microsoft.com).
**Independent:** Artificial Analysis arena rows for every MAI-Image variant (the only independent
*measurement* of 2.6), a fal host record (the only independent host, covering 2.5/2.5-Pro only), and
a Replicate catalogue check confirming no MAI-Image endpoint there.

**No direct tests were run for this page.** Nothing here describes output the wiki generated. The
Elo figures are AA's human-preference measurements, the speed and "72% efficiency" figures are
Microsoft's own load test, and the capability list is vendor documentation throughout. The most
useful next evidence would be: a fixed prompt set run through a named deployment and region, measuring
per-image token consumption at several resolutions, grounding-on versus grounding-off behaviour,
five-reference edits, and drift across sequential edits.

All records were captured in the 2026-10-26 curation pass. One caveat worth recording: the
Artificial Analysis editing board changed *during* that pass — the MAI-Image-2.7-Preview row was
absent from the earlier read of the same board
([krea-3 record](../../sources/artificialanalysis.ai/krea-3/2026-10-26.md)) and present in this one,
which is why ranks differ between the two records while the Elo values agree.

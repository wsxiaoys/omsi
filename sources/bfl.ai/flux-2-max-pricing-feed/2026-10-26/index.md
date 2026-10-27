# BFL official: FLUX.2 pricing feed (read for FLUX.2 [max])

- Origin: Black Forest Labs — the pricing dataset behind the "API Pricing" docs page
  (https://docs.bfl.ai/quick_start/pricing) and https://bfl.ai/pricing. Read from the
  published dataset query the page itself issues:
  `https://2gpum2i6.api.sanity.io/v2025-02-19/data/query/production?perspective=published&query=*[_type == "pricing"][0]{pricingCards[]{title,apiEndpoint,priceUnit,firstMpPrice,mpPrice,inputMpPrice,…}}`
- Evidence kind: official documentation (provider price list, machine-readable source)
- Publication date: not stated; dataset is live and reflects whatever BFL has published
- Capture date: 2026-10-26
- Relevant models: FLUX.2 [max] (also captures [pro], [flex], [klein] 4B/9B for comparison)

Artifact: [`flux2-pricing-cards.json`](flux2-pricing-cards.json) — the FLUX.2 cards from that
dataset, values as integer credits.

## Why this record exists

The docs pricing table and the bfl.ai pricing calculator both render their numbers client-side,
so a text capture of either page yields empty price cells (see the pre-existing shared capture
at [`../../flux2-pricing/2026-10-26.md`](../../flux2-pricing/2026-10-26.md), whose table has
blanks for the same reason). This record captures the dataset the pages read from, so the [max]
price is quotable with provenance instead of being reconstructed.

## Captured content

Page framing (verbatim, from https://docs.bfl.ai/quick_start/pricing):

> **Simple credit-based pricing:** 1 credit = \$0.01 USD • Pay per image, or per second for
> video • Same price for API and Playground

> FLUX.2 uses **megapixel-based pricing** — cost scales with output resolution.

The docs table's [max] row, as displayed (verbatim labels, numbers resolved from the dataset):

| Model | Text-to-Image | Image Editing | Best For |
| --- | --- | --- | --- |
| FLUX.2 \[max] | from $0.07 | from $0.10 | Highest quality, grounding search |

Dataset values (credits, 1 credit = $0.01):

| Endpoint | `priceUnit` | `firstMpPrice` | `mpPrice` (each additional output MP) | `inputMpPrice` |
| --- | --- | --- | --- | --- |
| `/v1/flux-2-max` | 0.07 | 7 | 3 | 3 |
| `/v1/flux-2-pro` | 0.03 | 3 | 1.5 | 1.5 |
| `/v1/flux-2-flex` | 0.05 | 5 | 5 | 5 |
| `/v1/flux-2-klein-4b` | 0.014 | 1.4 | 0.1 | 0.1 |
| `/v1/flux-2-klein-9b` | 0.015 | 1.5 | 0.2 | 0.2 |

### Reconstructing the table's two columns

The "Image Editing" column is not a separate rate. For every FLUX.2 card, `firstMpPrice` plus
one `inputMpPrice` reproduces the printed editing figure exactly:

- [max]: $0.07 + $0.03 = $0.10 ✓
- [pro]: $0.03 + $0.015 = $0.045 ✓
- [flex]: $0.05 + $0.05 = $0.10 ✓
- [klein] 4B: $0.014 + $0.001 = $0.015 ✓
- [klein] 9B: $0.015 + $0.002 = $0.017 ✓

So the editing premium is an **input-megapixel charge**, not a different per-image rate. This is
an arithmetic reading of the two published figures, not a statement BFL makes in prose: the page
spells out the first-MP-plus-additional-MP structure explicitly only for [klein]
("The first megapixel costs a flat rate, then each additional MP adds to the total").

### Derived [max] prices

From the dataset alone: 1MP output = $0.07; each further output MP = $0.03; each input MP
= $0.03. So a 4MP text-to-image is $0.07 + 3 × $0.03 = **$0.16**, and a 1MP output from a 1MP
input is $0.07 + $0.03 = **$0.10**. The page's own batch note confirms multiplication by image
count ("Batch requests multiply the base cost by the number of images").

## Gaps

- `inputMpPrice` is charged per input megapixel; the page does not say whether input megapixels
  are rounded up, nor whether the count is the sum of all reference images or something else.
- No maximum output megapixel is stated here; the 4MP ceiling comes from the family overview.
- No statement of whether [max]'s higher price buys a different number of inference steps or a
  different model size. Price is the only published quantity that distinguishes the tiers.
- The dataset carries no date or version, so a price change cannot be dated from this record;
  only the capture date is known.

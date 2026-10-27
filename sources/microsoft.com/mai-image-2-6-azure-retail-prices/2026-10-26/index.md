# Azure Retail Prices API: MAI-Image-2.6 meters

- Origin: Azure Retail Prices API, query
  `https://prices.azure.com/api/retail/prices?$filter=productName eq 'MAI Models' and serviceName eq 'Foundry Models'`
  (documented at <https://learn.microsoft.com/rest/api/cost-management/retail-prices/azure-retail-prices>)
- Evidence kind: official documentation (machine-readable Azure billing meters)
- Publication date: meters carry `effectiveStartDate` values of 2026-09-01 (Global) and
  2026-10-01 (Data Zone / Gov); no page-level date
- Capture date: 2026-10-26
- Relevant models: MAI-Image-2.6, MAI-Image-2.6-Flash (plus 2.5 family rows for comparison)
- Artifact: `azure-retail-prices-image-2-6.json` beside this record (the 181 `Image 2.6` items
  filtered from the 1,000-item first page of the response; a `NextPageLink` was present)

## Captured content

The MAI Models / Foundry Models product exposes per-token meters. Global Standard prices, in USD,
per 1M tokens (commercial cloud; the higher figure in each pair is the US Government cloud price):

| Model | Text input | Image input | Image output |
| --- | --- | --- | --- |
| MAI-Image-2.6 | $5.00 | $8.00 | **$38.00** (Gov $47.50) |
| MAI-Image-2.6-Flash | *no Global text meter* (Data Zone only: $1.925) | $2.50 (Gov $3.125) | **$19.00** (Gov $23.75) |
| MAI-Image-2.5 | $5.00 | $8.00 | $47.00 |
| MAI-Image-2.5-Pro | $5.00 | $8.00 | $106.00 |
| MAI-Image-2.5-Flash | $1.75 | $1.75 | $19.50 |
| MAI-Image-2 (older) | $5.00 | — | $33.00 |

Data Zone ("DZ", i.e. EU data-boundary) meters carry a premium, effective 2026-10-01:

| Model | Text input | Image input | Image output |
| --- | --- | --- | --- |
| MAI-Image-2.6 | $5.50 | $8.80 | $41.80 |
| MAI-Image-2.6-Flash | $1.925 | $2.75 | $20.90 |

Global meters for 2.6 are published for many regions but the region sets differ per meter — e.g.
text input appears in 24 regions (incl. `westeurope`, `swedencentral`, `eastus`-adjacent zones),
image input in 25, image output in 16 (`centralus`, `eastus2`, `japanwest`, `koreacentral`,
`northeurope`, `qatarcentral`, `southcentralus`, `southindia`, `uksouth`, `westeurope`, `westus`,
`canadacentral`, `canadaeast`, `northcentralus`, `usgovarizona`, `usgovvirginia`).

## The per-image arithmetic

Microsoft bills images as **output tokens**, not as images. Three independent figures reconcile only
if one image is 1,024 output tokens:

- 2.6: $38.00 / 1M tokens × 1,024 = **$0.0389 per image**, i.e. $38.9 per 1,000 images — exactly the
  figure on Microsoft's own quality-vs-price chart
  ([product page](../../../microsoft.ai/mai-image-2-6-model-page/2026-10-26.md)).
- 2.6-Flash: $19.00 / 1M × 1,024 = **$0.0195**, i.e. $19.5 per 1,000 — again matching the vendor
  chart.
- fal states for the 2.5 sibling that "1,024 image output tokens cost $0.048128" at $47/1M
  ([fal](../../../fal.ai/mai-image-2.5/2026-10-26.md)), which is the same 1,024-token basis.

Artificial Analysis independently lists $38.9 /1k and $19.5 /1k for the same two models
([AA](../../../artificialanalysis.ai/mai-image-2-6/2026-10-26.md)).

The 1,024-tokens-per-image figure is therefore an **inference from arithmetic**, not a documented
rate: no captured Microsoft page states it. A larger output size may well consume more tokens; the
meter is per token, so per-image cost scales with output.

## Summary

The billing basis for MAI-Image-2.6 is token-metered on Azure: $5/1M text input, $8/1M image input,
$38/1M image output in Global Standard, effective 2026-09-01, with a Data Zone premium of ~10% and a
25% US-Gov uplift. At the observed 1,024-tokens-per-image basis that is ~$0.039 per generated image.
An edit adds image-input tokens at $8/1M on top, but the number of tokens a reference image consumes
is not documented anywhere captured, so a per-edit price cannot be derived — note that Artificial
Analysis prices 2.6 identically for generation and editing ($38.9 /1k), which implies its price
column ignores input tokens entirely.

Two findings matter for the page:

1. **2.6 is cheaper per output token than the model it replaces** ($38 vs $47 for 2.5, and vs $106
   for 2.5-Pro), while scoring higher on both Artificial Analysis boards. That is a real price/quality
   move, not a marketing line.
2. **The 2.6 meters exist in the billing API but not on the public price-list page** (see
   [Foundry models price list](../../foundry-models-pricing-page/2026-10-26.md)). Billing and
   documentation are out of step.

## Gaps

- The API returns only the first 1,000 items plus a `NextPageLink`; only that page was filtered, so a
  rarer meter (e.g. a Global text meter for 2.6-Flash, or provisioned-throughput meters) may exist
  beyond it.
- No per-image meter is published, so "cost per image" cannot be read directly from Azure — only
  derived.
- Prices are list prices for pay-as-you-go; enterprise agreements and PTU pricing are not visible.
- No effective end date, so it is unknown whether these are promotional preview prices.

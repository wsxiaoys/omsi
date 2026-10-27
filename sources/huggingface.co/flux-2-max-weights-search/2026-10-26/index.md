# Hugging Face: black-forest-labs repositories (checked for FLUX.2 [max] weights)

- Origin: Hugging Face model hub API, organization listing
  `https://huggingface.co/api/models?author=black-forest-labs&limit=100`, plus a search query
  `https://huggingface.co/api/models?search=flux-2-max&limit=50`
- Evidence kind: registry listing (publisher-controlled account, host-served index)
- Publication date: live index; `createdAt` per repository
- Capture date: 2026-10-26
- Relevant models: FLUX.2 [max] (as the absent subject); FLUX.2 [dev], [klein] 4B/9B and
  FLUX 3 weights appear for contrast

Artifact: [`black-forest-labs-models.json`](black-forest-labs-models.json) — the organization
listing reduced to `id`, `createdAt`, `pipeline_tag`, `likes`, `downloads`.

## Captured content

42 repositories under `black-forest-labs` at capture. The FLUX.2 and FLUX 3 image entries are:

| Repository | Created |
| --- | --- |
| `black-forest-labs/FLUX.2-dev` | 2025-11-22 |
| `black-forest-labs/FLUX.2-klein-4B`, `-4b-fp8`, `-4b-nvfp4` | 2026-01-14 |
| `black-forest-labs/FLUX.2-klein-9B`, `-9b-fp8`, `-9b-nvfp4` | 2026-01-14 |
| `black-forest-labs/FLUX.2-klein-base-4B` / `-9B` (+ fp8, nvfp4) | 2026-01-14 |
| `black-forest-labs/FLUX.2-klein-9b-kv`, `-kv-fp8` | 2026-03-09 |
| `black-forest-labs/FLUX.2-small-decoder` | 2026-04-06 |
| `black-forest-labs/flux-3-image-klein`, `-base`, `-comfy`, `-pup` | 2026-10-13 / 2026-10-14 |
| `black-forest-labs/flux-3-action-*` | 2026-09-22 |

**No repository for FLUX.2 [max] or FLUX.2 [pro] exists** in the listing. A name search for
`flux-2-max` returns 11 results, all third-party LoRAs and unrelated accounts
(e.g. `MaxNoichl/..._FLUX2_KLEIN9B_lora_...`, `maxmarklund/gta-cinematic-flux2-cloud`); a
search for `flux2-max` returns 4, all third-party. None is a BFL-published checkpoint.

## Reading

Weights for [max] are not published under the vendor's account, and the vendor's own docs offer
downloads only for [dev] and [klein]
([overview](../../../bfl.ai/flux-2-max-bfl-model-page/2026-10-26.md)). The strongest defensible
statement is: **no FLUX.2 [max] weights were found in BFL's public Hugging Face organization on
2026-10-26.** This is an absence-of-evidence finding from one registry; a private or
non-Hugging-Face release would not appear here.

## Gaps

- The listing endpoint returns at most 100 entries and the organization has 42, so the listing is
  complete as of capture.
- Absence from Hugging Face does not by itself prove closed weights; it proves only that no
  BFL-published checkpoint is hosted there.
- The search endpoints are not exhaustive indexes and their relevance ranking is opaque.

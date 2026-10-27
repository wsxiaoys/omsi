# Artificial Analysis: "Grok Imagine Image 2.0" on the T2I and Image Editing boards

- Origin: Artificial Analysis image leaderboards and model page:
  - "AA-Image-T2I Leaderboard", <https://artificialanalysis.ai/image/leaderboard/text-to-image>
  - "AA-Image-Editing Leaderboard", <https://artificialanalysis.ai/image/leaderboard/editing>
  - model page <https://artificialanalysis.ai/image/models/grok-imagine-image-2-0>
  - leaderboard index <https://artificialanalysis.ai/image/models>
  Values read from each page's embedded Next.js payload (the `textToImage` and `imageEditing`
  arrays), not from rendered chart pixels; rendered table cells cross-checked.
- Evidence kind: third-party benchmark (independent Elo from Artificial Analysis's own image arena;
  neither vendor nor host)
- Publication date: no page-level publication or snapshot date. Per-model metadata in the payload:
  `releaseDate` **2026-08-07**, `introducedAt` **2026-09-14T03:01:57Z** (text-to-image) /
  **2026-09-14T03:02:17Z** (editing)
- Capture date: 2026-10-26
- Relevant models: `Grok Imagine Image 2.0` (AA display name; slug `grok-imagine-image-2-0`), with
  `grok-imagine-image` and `grok-imagine-image-quality` as context rows
- Artifact: [`grok-rows.json`](grok-rows.json) — the three Grok Imagine rows extracted from both
  boards, verbatim fields

## The rows that matter (verbatim from the rendered tables)

| Board | Rank | Rank range | Model | Elo (95% CI) | Samples | Released | AA price |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AA-Image-T2I | 6 | 4–6 | Grok Imagine Image 2.0 | 1166 ±12 (1154–1178) | 7,481 | Aug 2026 | $60.0 /1k imgs |
| AA-Image-Editing | 17 | 12–18 | Grok Imagine Image 2.0 | 1117 ±13 (1104–1130) | 8,692 | Aug 2026 | $60.0 /1k imgs |

Payload fields for the same rows (verbatim):

> `"name":"Grok Imagine Image 2.0"`, `"rank":5`, `"elo":1165.59`, `"ciLower":1153.59`,
> `"ciUpper":1177.59`, `"appearances":7481`, `"releaseDate":"2026-08-07"`,
> `"openWeightsUrl":null`, `"pricePer1kImages":60`, `"isCurrent":true`, `"isRecent":false`,
> `"note":"Served at quality medium and 2k resolution; the API default quality (auto) serves low for
> generation."`, `"introducedAt":"2026-09-14T03:01:57.685832+00:00"`, `"ciDelta":12`,
> `"storedRank":6`, `"rankLower":4`, `"rankUpper":6`

> `"name":"Grok Imagine Image 2.0"`, `"rank":16`, `"elo":1116.87`, `"ciLower":1103.87`,
> `"ciUpper":1129.87`, `"appearances":8692`, `"releaseDate":"2026-08-07"`,
> `"pricePer1kImages":60`, `"note":"Served at quality medium and 2k resolution; the API default
> quality (auto) serves medium for editing."`, `"introducedAt":"2026-09-14T03:02:17.313158+00:00"`,
> `"ciDelta":13`, `"storedRank":17`, `"rankLower":12`, `"rankUpper":18`

`rank` is a zero-based stored value; the displayed rank is `rank + 1`, and the rendered cells show
`6 | 4-6` and `17 | 12-18` before each model name.

## Sibling rows on the same two boards (context, verbatim fields)

| Board | Model | Displayed rank | Elo (95% CI) | Samples | `releaseDate` | AA price |
| --- | --- | --- | --- | --- | --- | --- |
| T2I | `grok-imagine-image-quality` | 20 | 1048.86 (1039.86–1057.86) | 16,728 | 2026-05-06 | $50.0 /1k imgs |
| T2I | `grok-imagine-image` | 34 | 1022.23 (1011.23–1033.23) | 6,330 | 2026-01-28 | $20.0 /1k imgs |
| Editing | `grok-imagine-image-quality` | 19 | 1095.27 (1083.27–1107.27) | 8,787 | 2026-05-06 | $50.0 /1k imgs |
| Editing | `grok-imagine-image` | 26 | 1073.23 (1060.23–1086.23) | 6,100 | 2026-01-28 | $20.0 /1k imgs |

## Board context at the capture

Top of the AA-Image-T2I board (`/image/models` payload, ranked order): GPT Image 2.5 Sunburst (max)
1221.96, GPT Image 2.5 Flare (max) 1206.72, GPT Image 2 (high) 1185.74, Nano Banana 2.1 1175.56,
MAI-Image-2.6 1165.89, **Grok Imagine Image 2.0 1165.59**, Nano Banana 2 1139.99. 106 rows on the
board.

Top of the AA-Image-Editing board: GPT Image 2.5 Sunburst (max) 1198.81, MAI-Image-2.7-Preview
1193.12, GPT Image 2.5 Flare (max) 1181.64, MAI-Image-2.6 1151.42, Krea 3 (Ultra) 1151.11, Nano
Banana 2.1 1150.98 … with Grok Imagine Image 2.0 at rank 17. 77 rows on the board.

## What this establishes

- **2.0 is measured as its own entity on both boards**, separate from `grok-imagine-image` and
  `grok-imagine-image-quality`. Three distinct AA IDs, three distinct rows.
- **The deltas are large on text-to-image and modest on editing.** Against 1.0: **+143.4 Elo**
  (1022.23 → 1165.59) on T2I and **+43.6** (1073.23 → 1116.87) on editing. Against the quality
  tier: **+116.7** on T2I and **+21.6** on editing. All four gaps have non-overlapping 95%
  intervals.
- **T2I position:** rank 6 of 106, statistically tied with MAI-Image-2.6 (1165.89, CI
  1153.89–1177.89 — a 0.3-point gap inside both intervals) and clear of Nano Banana 2 (1139.99).
  It sits below the GPT Image 2.x entries (1185.74–1221.96) and Nano Banana 2.1 (1175.56).
- **Editing position:** rank 17 of 77, mid-pack, roughly 80 Elo below the board leader.
- **AA dates the model to 2026-08-07**, the only day-precise release date found anywhere for 2.0.
  Its `introducedAt` of 2026-09-14 is when AA added the entry to the board, a month later.
- **AA records the configuration it benchmarks:** "Served at quality medium and 2k resolution".
- The AA price for 2.0 is **$60 per 1,000 images** — i.e. $0.06/image — recorded for that
  medium/2K configuration.

## Contradictions and caveats in this record

- **Price does not reconcile with either vendor or host.** xAI's table lists a flat $0.04/image;
  fal charges $0.08 for medium at 2K and $0.06 for medium at 1K; AA records $0.06 for the
  medium-at-2K configuration. AA's note and its price are consistent with medium 1K, not with the
  resolution it says it serves.
- **AA's own two pages disagree on 2.0's appearance count and Elo spread.** Each leaderboard page
  embeds several views of the same model (for example 832 samples at 1164.60 and 7,481 samples at
  1165.59 on the T2I page). Only the primary table row is used above; the sub-views are not
  comparable.
- **`providersUrl` is `null` on the 2.0 model page**, so AA lists no host endpoint and no latency
  measurement for this model. The page's charts therefore carry Elo and price only; the 2.47 s
  median generation time visible in that page's payload belongs to a different model (Z-Image Turbo,
  fal.ai), not to 2.0.
- No prompt set, vote count method, or arena version label appears in the payloads, so the Elo
  cannot be re-derived. The earlier `sources/artificialanalysis.ai/fibo-2/2026-10-26.md` capture
  names the boards "AA-Image-T2I v2.1" and "AA-Image-Editing v2.1"; these payloads do not carry a
  version string.
- The creator is labelled **SpaceXAI**, matching the self-branding on docs.x.ai during this capture
  rather than the "xAI" name used in the roster.

## Gaps

- No per-resolution or per-quality Elo: 2.0 is measured at one configuration (medium, 2K).
- No editing-task breakdown (identity preservation, instruction adherence, multi-reference), and no
  sample images stored for this model (`"gallery"` messages indicate none stored for these
  providers).
- No human-vote totals, no arena snapshot date, and no statement of which upstream endpoint was
  queried.

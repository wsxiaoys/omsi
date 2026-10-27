# Hugging Face: xAI org model listing (negative search for Grok 4.7 weights)

- Origin: Hugging Face model API,
  <https://huggingface.co/api/models?author=xai-org&limit=100>
- Evidence kind: registry query (negative search for published weights)
- Publication date: n/a
- Capture date: 2026-10-26
- Relevant models: `grok-4.7` (roster row 88)

Artifact: [`xai-org-models.json`](xai-org-models.json) — the full response, reduced to
`modelId`, `createdAt`, `downloads`, `likes`, `pipeline_tag`.

## Result (complete — two repositories)

| Repo | Created | Downloads | Likes |
| --- | --- | --- | --- |
| `xai-org/grok-2` | 2025-08-22 | 9,296 | 1,198 |
| `xai-org/grok-1` | 2024-03-17 | 2,125 | 2,482 |

A search across all of Hugging Face for `grok`
(`/api/models?search=grok&limit=50`) returned 50 hits, of which the only `xai-org` repositories
were the same `grok-1` and `grok-2`; the rest were third-party models that merely mention "Grok"
in their names (distillation and merge recipes) or are unrelated "grokking" research repos.

## What this establishes

- **xAI has published weights only for Grok 1 and Grok 2.** No Grok 4.x checkpoint — and no
  `grok-4.7` — exists as a downloadable model on Hugging Face as of the capture date, which is
  consistent with Artificial Analysis classifying 4.7 as proprietary and with xAI's documentation
  describing API-only access ([AA](../../../artificialanalysis.ai/grok-4-7/2026-10-26.md)).
- The absence is a one-date negative search, not a vendor statement that weights will never be
  released.

## Gaps

- Only the `xai-org` org and a `grok` keyword search were queried. Weights published under another
  org name, or on another registry (e.g. GitHub releases, a vendor CDN), would not appear here.
- No check for gated or private repositories, which the public API does not list.

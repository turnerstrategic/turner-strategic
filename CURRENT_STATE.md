# Current State

Last updated: 2026-07-15

This document is the canonical snapshot of what exists in the repository right now.
Unlike the README (which describes intent and conventions), this file should be
updated whenever the shape of the repository materially changes — it is a record of
fact, not aspiration.

## Summary

The repository has been initialized as an infrastructure-only monorepo. Tooling is
configured and verified to install, lint, typecheck, and build. No product features
exist yet.

## What exists

- **Monorepo tooling**: pnpm workspaces + Turborepo, wired and verified.
- **`apps/reading-room`**: Next.js 15 (App Router) + React 19 + TypeScript, with
  Tailwind CSS v4 configured via the shared design-system tokens. Renders a single
  placeholder page.
- **`apps/api`**: FastAPI placeholder with one route (`GET /health`). No persistence,
  no auth, no business logic.
- **`packages/design-system`**: Tailwind v4 theme tokens (`tokens.css`) plus mirrored
  TypeScript constants. No components.
- **`packages/ui`**: One placeholder component (`Button`) to prove the workspace
  wiring (package → app import, Tailwind class resolution, type-checking) works
  end to end.
- **`packages/common`**: One placeholder export (`ORGANIZATION_NAME`) for the same
  reason.
- **Institutional directories** (`institution/`, `memory/`, `design/`, `docs/`):
  scaffolded with a short README in each describing its intended purpose. No
  substantive content yet.
- **CI**: A GitHub Actions workflow (`.github/workflows/ci.yml`) that installs, lints,
  typechecks, and builds on every push and pull request.

## What does not exist yet

- No routing beyond the single placeholder page.
- No data layer, database, or persistence of any kind.
- No authentication or authorization.
- No deployment configuration (hosting, environments, secrets management).
- No tests (no test runner is configured yet — deliberately deferred, see
  [PARKING_LOT.md](./PARKING_LOT.md)).
- No content in `institution/`, `memory/`, or `design/` beyond folder-purpose READMEs.

## Verified working

As of this writing, the following have been run successfully from a clean install:

- `pnpm install`
- `pnpm build` (via Turborepo, across all apps/packages)
- `pnpm lint`
- `pnpm typecheck`
- `apps/api`: `ruff check .` and a direct FastAPI app import, verified against the
  scaffolding machine's system Python (3.9.6) since no 3.11+ interpreter was
  available locally. `pyproject.toml` declares `requires-python = ">=3.11"` as the
  institutional target — install a 3.11+ interpreter (e.g. via `pyenv` or `uv`)
  before running `pip install -e ".[dev]"`, which will enforce that constraint.

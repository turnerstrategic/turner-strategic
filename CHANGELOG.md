# Changelog

All notable changes to this repository are recorded here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); dates are ISO 8601.

## [Unreleased]

### Added

- Initialized the repository as a pnpm + Turborepo monorepo.
- `apps/reading-room`: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4.
- `apps/api`: FastAPI backend placeholder with a single health-check route.
- `packages/design-system`, `packages/ui`, `packages/common`: internal workspace
  packages, consumed as source via `transpilePackages`.
- Root tooling: shared TypeScript base config, ESLint 9 flat config, Prettier,
  Husky + lint-staged pre-commit hook.
- `institution/`, `memory/`, `design/`, `docs/` directory scaffolding with
  purpose-describing READMEs.
- GitHub Actions CI workflow (install, lint, typecheck, build).
- Institutional documents: `CURRENT_STATE.md`, `DECISION_REGISTER.md`,
  `ROADMAP.md`, `PARKING_LOT.md`.

This is an infrastructure-only commit. No product features were added.

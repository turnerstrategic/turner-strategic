# Turner Strategic

Turner Strategic's institutional monorepo. This repository hosts the organization's
software (apps and shared packages) alongside its institutional record (governance,
memory, and design assets) in a single, version-controlled source of truth.

## Status

**Infrastructure only.** This repository has been scaffolded — tooling, workspace
wiring, and configuration are in place and verified to build. No product features
have been implemented yet. See [CURRENT_STATE.md](./CURRENT_STATE.md) for the
canonical, up-to-date snapshot of what exists.

## Repository layout

```
turner-strategic/
├── apps/
│   ├── reading-room/     Next.js 15 (App Router) application
│   └── api/               FastAPI backend placeholder
├── packages/
│   ├── design-system/     Design tokens + shared Tailwind theme
│   ├── ui/                 Shared React component library
│   └── common/             Shared TypeScript types/utilities
├── institution/
│   ├── constitution/       Founding rules and governance documents
│   ├── publications/       Formal published output
│   ├── standards/          Engineering and editorial standards
│   └── offices/            Role and responsibility definitions
├── memory/
│   ├── archive/            Superseded material, kept for record
│   ├── briefs/              Working briefs
│   ├── committee/          Committee notes and decisions
│   ├── research/            Research notes and source material
│   └── lessons/             Retrospectives and lessons learned
├── design/
│   ├── assets/              Source design assets (logos, icons, imagery)
│   └── templates/           Reusable design templates
├── docs/                    Technical documentation
└── .github/                 CI workflows and repository configuration
```

## Tech stack

| Concern                | Choice                                                  |
| ---------------------- | ------------------------------------------------------- |
| Monorepo orchestration | [Turborepo](https://turbo.build/repo)                   |
| Package management     | [pnpm](https://pnpm.io) workspaces                      |
| Web framework          | [Next.js 15](https://nextjs.org) (App Router), React 19 |
| Language               | TypeScript (strict mode)                                |
| Styling                | [Tailwind CSS v4](https://tailwindcss.com)              |
| Backend placeholder    | [FastAPI](https://fastapi.tiangolo.com) (Python 3.11+)  |
| Linting                | ESLint 9 (flat config)                                  |
| Formatting             | Prettier                                                |
| Git hooks              | Husky + lint-staged                                     |

## Getting started

Requires Node.js 20.9+ and pnpm. Corepack is the recommended way to get a pinned
pnpm version:

```bash
corepack enable
corepack prepare pnpm@11.13.0 --activate
```

Install dependencies from the repository root:

```bash
pnpm install
```

Run the web app in development:

```bash
pnpm --filter @turner-strategic/reading-room dev
```

Run the FastAPI placeholder (separately, in its own virtualenv — see
[apps/api/README.md](./apps/api/README.md)):

```bash
cd apps/api
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]"
uvicorn app.main:app --reload --port 8000
```

## Common commands

All commands below run from the repository root and are orchestrated by Turborepo,
which caches results and only re-runs work for packages that changed.

```bash
pnpm build       # Build all apps and packages
pnpm dev         # Run all apps in development mode
pnpm lint        # Lint all apps and packages
pnpm typecheck   # Type-check all apps and packages
pnpm format      # Format the repository with Prettier
```

## Workspace conventions

- Internal packages are referenced as `@turner-strategic/<package-name>` and consumed
  as **source**, not pre-built bundles. Next.js transpiles them at build time via
  `transpilePackages` in [apps/reading-room/next.config.ts](./apps/reading-room/next.config.ts).
  This avoids a build step (and its cache-invalidation complexity) for internal
  packages while the organization's needs are still simple. Revisit if a package needs
  to be published externally or consumed by a non-bundler-based tool.
- All TypeScript configs extend the shared [tsconfig.base.json](./tsconfig.base.json)
  at the repository root.
- ESLint uses a single flat config per lintable root (JS/TS packages share the root
  config; the Next.js app extends `eslint-config-next` on top of it) rather than a
  shared internal `eslint-config` package. With three packages and one app, a config
  package is premature; revisit if the number of lintable roots grows.

## Institutional documents

- [CURRENT_STATE.md](./CURRENT_STATE.md) — what exists right now
- [CHANGELOG.md](./CHANGELOG.md) — notable changes over time
- [DECISION_REGISTER.md](./DECISION_REGISTER.md) — architectural and organizational decisions, with rationale
- [ROADMAP.md](./ROADMAP.md) — what's planned, in what order
- [PARKING_LOT.md](./PARKING_LOT.md) — ideas and issues deliberately deferred

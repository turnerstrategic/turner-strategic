# Parking Lot

Ideas, questions, and issues that came up during work but were deliberately deferred
rather than acted on. This is not a backlog — items here have not been prioritized or
even necessarily agreed to. When one gets picked up, move it to
[ROADMAP.md](./ROADMAP.md) with an actual sequence, or resolve it and note the
resolution in [DECISION_REGISTER.md](./DECISION_REGISTER.md).

## From initial scaffolding (2026-07-15)

- **Test runner choice.** No test runner is configured yet (see
  [DECISION_REGISTER.md](./DECISION_REGISTER.md)). When the time comes: Vitest is the
  natural fit for the TS side (fast, ESM-native, works well with Next.js); pytest for
  the API. Not decided with certainty — revisit if requirements change.
- **Python interpreter provisioning.** The scaffolding machine only has system Python
  3.9.6; `apps/api` targets 3.11+. Needs a real decision on how developers provision
  interpreters consistently (`pyenv`, `uv`, Docker dev container) rather than each
  developer improvising.
- **Monorepo CI caching.** `turbo.json` has no remote cache configured (e.g. Vercel
  Remote Cache or a self-hosted alternative). Fine for now; worth revisiting once CI
  run times become annoying.
- **`packages/eslint-config` extraction.** Deferred until a second lint profile
  exists — see the relevant entry in `DECISION_REGISTER.md`.
- **Design token depth.** `packages/design-system/src/tokens.css` currently has a
  minimal placeholder palette (a handful of `brand-*` colors, two font stacks). Real
  brand tokens (full color scale, spacing scale, type scale) should come from
  `design/assets` once the organization's actual brand guidelines exist.
- **Monorepo package manager lockfile in CI.** CI currently runs `pnpm install
--frozen-lockfile`. Worth adding a Dependabot/Renovate config once there are enough
  dependencies for drift to become a real maintenance burden.

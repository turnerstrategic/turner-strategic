# Decision Register

A running record of architectural and organizational decisions, with rationale. Each
entry should let a future reader understand _why_, not just _what_ — the code already
shows what. New entries go at the top. Entries are not deleted when superseded; a
superseding entry links back to the one it replaces.

---

## 2026-07-15 — `ThemeProvider` lives in `packages/ui`, not `packages/design-system`

**Decision**: The React context provider that exposes design tokens at runtime
(`ThemeProvider` / `useTheme`) is defined in `packages/ui/src/ThemeProvider.tsx`,
not in `packages/design-system`.

**Why**: `packages/design-system` has no React dependency by design (see the
"Internal packages consumed as source" entry below — it's meant to be
framework-agnostic tokens consumable by anything, not just React). Adding
`createContext`/`useContext` there would force a React dependency onto a package
that other tooling (e.g. a future non-React surface) might want to consume without
pulling in React. `packages/ui` already depends on `design-system` and already has
`react` as a peer dependency, so it's the natural home for the React-specific
consumption layer.

**Revisit when**: never, structurally — this boundary should hold as long as
`design-system` stays framework-agnostic.

---

## 2026-07-15 — Removed the guessed "Inter" / "Source Serif 4" font names

**Decision**: `packages/design-system/src/tokens.css` (`--font-sans`, `--font-serif`)
and `packages/design-system/src/index.ts` (`fonts.sans`, `fonts.serif`) no longer
name specific typefaces — they now fall back to generic system font stacks only
(`ui-sans-serif, system-ui, sans-serif` / `ui-serif, Georgia, serif`).

**Why**: These were guessed placeholder font names left over from the initial
scaffold, predating the explicit "do not select final fonts yet" instruction that
has now been given twice (once for `packages/design-system/tokens/typography.ts` in
TS-FEAT-002 Part 1, again for the semantic type scale in Part 2). Leaving "Inter"
and "Source Serif 4" sitting in the Tailwind theme while the new token files
correctly used `"TBD"` was an inconsistency worth fixing while this exact area was
already being edited for the type-scale work, rather than carrying it forward
silently.

**Action required**: when a typeface is actually selected, update both files
together — they're intentionally parallel (one is the Tailwind theme source, the
other is the framework-agnostic TS mirror of the same values).

---

## 2026-07-15 — Generated-file ESLint ignores must be duplicated at the root config

**Decision**: `**/next-env.d.ts` is ignored in both the root `eslint.config.js` and
`apps/reading-room/eslint.config.js`, not just the app-level one.

**Why**: Caught by the Husky pre-commit hook itself, on the first real commit
attempt. `lint-staged` invokes `eslint --fix <file>` from the repository root, and
ESLint's flat-config resolution picks exactly one `eslint.config.js` per invocation
based on the _current working directory_, not per linted file — so it resolved the
root config, not the app-level one that already ignored this Next.js-generated file.
The app-level ignore is real and does the work for `turbo run lint` (which runs
`eslint .` with `cwd` set to the app directory); the root-level copy exists purely
as the safety net for tools (lint-staged, editors) that invoke ESLint from the repo
root instead.

**Action required**: any future generated file that a specific app's config ignores
should be re-checked against whether it also needs to be ignored at the root, if
that app's files could ever be staged and picked up by root-invoked `lint-staged`.

---

## 2026-07-15 — `@source` directive required for cross-package Tailwind scanning

**Decision**: `packages/design-system/src/tokens.css` includes
`@source "../../ui/src";` above its `@theme` block.

**Why**: Tailwind v4's automatic content detection is scoped to the consuming app's
own directory tree — it does not, by default, traverse into sibling workspace
packages like `packages/ui/src`, even though those files are part of the same git
repo and not gitignored. This was caught during verification, not assumed: the
initial build compiled without error, but inspecting the generated CSS showed
`bg-brand-600` (used only inside `packages/ui/src/Button.tsx`) was silently absent
from the output — a class that looks like it should work, renders unstyled in
production, with no error anywhere. The fix is Tailwind's own escape hatch, the
`@source` directive, placed in `tokens.css` (imported by every app) rather than
repeated per-app, so a new app automatically gets correct utility generation for
`@turner-strategic/ui` without rediscovering this gotcha.

**Action required**: any future shared package that ships Tailwind class names
(e.g. if `packages/common` ever gains JSX) needs its own `@source` line added
alongside the existing one.

---

## 2026-07-15 — Tailwind CSS v4 (CSS-first config) over v3

**Decision**: Use Tailwind CSS v4 with the CSS-first `@theme` configuration model,
rather than a `tailwind.config.ts` JS preset.

**Why**: v4 is the current major version and is what `create-next-app` ships by
default as of this writing. It removes the need for a JS config file and content
globs entirely — the Lightning CSS-based engine detects usage automatically. For a
shared design-token package (`packages/design-system`) consumed by multiple apps,
tokens live in a single `tokens.css` file that apps `@import`, which is simpler to
reason about than exporting a JS preset object and re-composing it per app.

**Trade-off accepted**: v4's ecosystem (plugins, third-party docs) is younger than
v3's. If a dependency requires the v3 JS-config API, that's a reason to revisit.

---

## 2026-07-15 — Internal packages consumed as source, not pre-built

**Decision**: `packages/ui`, `packages/design-system`, and `packages/common` have no
build step. Their `package.json` `main`/`types`/`exports` fields point directly at
`src/*.ts(x)`. Consuming apps transpile them via Next.js's `transpilePackages`.

**Why**: This is the pattern Turborepo's own documentation recommends for internal
(non-published) packages. It eliminates an entire class of monorepo pain — stale
build artifacts, incremental build ordering, watch-mode rebuilds — for packages that
will only ever be consumed by our own bundler-based apps. `turbo run build` still
works because each package's `build` script runs `tsc --noEmit`, so type errors are
still caught and cached.

**Trade-off accepted**: These packages cannot be published to npm or consumed by a
non-bundler tool without adding a real build step first. Acceptable — the packages
are private (`"private": true`) and not intended for external consumption.

**Revisit when**: a package needs to be published externally, or consumed by
something that doesn't transpile TypeScript (e.g., a plain Node.js script run
without a loader).

---

## 2026-07-15 — Next.js pinned to 15.x, not latest (16.x)

**Decision**: `apps/reading-room` depends on `next@15.5.20`, `eslint-config-next@15.5.20`,
explicitly pinned rather than accepting whatever `pnpm add next` resolves to (which
was 16.x at scaffold time).

**Why**: The engineering requirement specified Next.js 15 (App Router) specifically.
Pinning the major version avoids an unplanned framework upgrade being introduced by
this infrastructure commit.

**Revisit when**: the organization deliberately decides to upgrade to Next.js 16 —
that should be its own commit with its own changelog entry and migration notes, not
bundled into initial scaffolding.

---

## 2026-07-15 — FastAPI targets Python 3.11+, verified against 3.9 locally

**Decision**: `apps/api/pyproject.toml` declares `requires-python = ">=3.11"` even
though the scaffolding machine's system Python is 3.9.6.

**Why**: 3.11+ is the reasonable modern floor for a new institutional service
(performance improvements, exception groups, `tomllib`). The scaffolding machine
lacking a matching interpreter is a local-environment gap, not a reason to lower the
project's standard. The placeholder app was still verified — importable, passing
`ruff check .` — directly against 3.9 (bypassing the `requires-python` gate, which
`pip install .`/`pip install -e .` would otherwise enforce) to confirm the code
itself is correct before a 3.11 interpreter is provisioned.

**Action required**: install Python 3.11+ locally (`pyenv install 3.11` or
equivalent) before running `pip install -e ".[dev]"` for real development.

---

## 2026-07-15 — No test runner configured yet

**Decision**: Neither Vitest/Jest (TS) nor pytest execution (Python, though `pytest`
is listed as an optional dependency) is wired into `turbo.json` or CI.

**Why**: There is no product code to test yet — this commit is infrastructure only,
per explicit instruction. Adding a test runner now, with nothing to exercise it,
would be scaffolding for its own sake. See [PARKING_LOT.md](./PARKING_LOT.md).

**Revisit when**: the first feature branch is opened. Set up the test runner in that
branch, alongside the first real test.

---

## 2026-07-15 — Single flat ESLint config per lintable root, no shared `eslint-config` package

**Decision**: The root `eslint.config.js` covers the three TS packages (ESLint's
flat-config resolution walks up the directory tree, so no per-package config file is
needed for `packages/*`). `apps/reading-room` has its own `eslint.config.js` that
layers `eslint-config-next` on top via `FlatCompat`. There is no
`packages/eslint-config` internal package.

**Why**: With one app and three packages, a shared config package is a layer of
indirection with no current payoff — it exists in many monorepo templates because
they anticipate many apps sharing many rule variants. We have one variant (plain
TS) and one exception (Next.js). Introducing the package now would be premature
abstraction.

**Revisit when**: a second Next.js-style app (or a third distinct lint profile)
appears — extract the shared parts into `packages/eslint-config` at that point, not
before.

# Development

## Development Workflow

- **Do not run `next build` while `next dev` is using the same `.next` directory.**
  Dev and production builds write incompatible module manifests to `.next`; running
  both against the same directory corrupts the dev server's webpack HMR state.
- **If the development overlay reports unexplained runtime errors after a
  successful build, clear the `.next` directory and restart the dev server before
  investigating source code.** A corrupted dev cache can surface as confusing,
  seemingly arbitrary runtime errors (for example, a failed chunk load being
  reported as `[object Event]`) that have nothing to do with application code.
  Ruling out cache corruption first avoids chasing a phantom bug.
- **Keep development and production verification as separate workflows.** Use
  `next dev` (via `pnpm --filter @turner-strategic/reading-room dev`) for local
  development, and a separate, clean `next build` (e.g. in CI, or locally only
  after stopping any running dev server) to verify the production build. Don't
  interleave the two against the same `.next` directory.

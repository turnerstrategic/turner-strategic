# Roadmap

What's planned, roughly in order. This is a working document, not a commitment —
update it as priorities shift. See [DECISION_REGISTER.md](./DECISION_REGISTER.md) for
the rationale behind decisions already made, and
[PARKING_LOT.md](./PARKING_LOT.md) for things deliberately deferred rather than
sequenced here.

## Now

- [x] Scaffold the monorepo (this commit): tooling, workspace wiring, placeholder
      app/package/API, CI.

## Next

- [ ] Populate `institution/constitution` with the organization's founding governance
      documents.
- [ ] Stand up a test runner (Vitest for TS packages/apps, `pytest` wiring for the
      API) alongside the first real feature — not before.
- [ ] Define the first real route/page for `apps/reading-room` and the first real
      endpoint for `apps/api`, and connect them.
- [ ] Decide on a deployment target (hosting for `reading-room`, hosting for `api`,
      whether they deploy independently) and add the corresponding CI/CD workflow.

## Later

- [ ] Persistence layer for `apps/api` (database choice deferred until there's a
      concrete data model to store).
- [ ] Authentication/authorization, once there's something worth protecting.
- [ ] Populate `design/assets` and `design/templates` with real brand assets.
- [ ] Populate `memory/` with the organization's actual research, briefs, and
      committee notes as they're produced.

## Explicitly not scheduled

Items the organization has discussed but deliberately not sequenced yet — see
[PARKING_LOT.md](./PARKING_LOT.md).

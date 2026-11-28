# NumCheck – Project Plan

The backlog for NumCheck v1. Every task links to the requirements it delivers in [01-srs.md](01-srs.md) and follows [02-design.md](02-design.md).

**Purpose of the project:** a real, useful community product, and a portfolio piece.
**Built by:** me, task by task. This document is the backlog.

---

## 1. Workflow

1. Pick the next task. Create a branch from `main`: `feat/T-011-phone-normalize`.
2. First commit on the branch: tick the previous task in this file (`docs: mark T-0XX as done`).
3. Build the task in small commits using Conventional Commits (`feat:`, `fix:`, `test:`, `chore:`, `docs:`).
4. Open a pull request. The description says what changed, which requirement IDs it covers, and includes a screenshot for UI work.
5. For any task that changes a screen: run an unslop review (DESIGN.md section 10) and fix the findings before opening the pull request.
6. CI must be green. Review, fix the comments, then merge.

Nothing goes to `main` except through a pull request.

### Definition of done (applies to every task)

- All acceptance criteria met.
- No TypeScript or ESLint errors. No `any`.
- Core logic changes have unit tests.
- Loading, empty and error states handled for every data view.
- Works at 360px wide and on desktop.
- Risk levels use icon + text + color, never color alone.
- UI follows [DESIGN.md](DESIGN.md): tokens only, no hard-coded hex values, sizes or radii. Works in light and dark themes.
- No emoji in the UI. Icons are lucide only.
- Screens passed an unslop review.
- All visible text comes from `messages/en.json` (from T-005 onwards).
- Usable with keyboard only. Form fields have labels.

---

## 2. Sprints

Size: **S** = under 2 hours, **M** = half a day, **L** = a full day.

**Cut if late:** tasks marked _(cut if late)_ are the first to move to "Later" if the schedule slips. They are all SRS "Should" items.

| Sprint | Phases | Goal at the end of the sprint |
|---|---|---|
| Sprint 1 | Phase 0, Phase 1 | Empty app is live on Vercel; core logic works and is fully tested |
| Sprint 2 | Phase 2, Phase 3 | Database is secure; anyone can search a number and see seeded reports |
| Sprint 3 | Phase 4 | Users can log in, report and flag numbers |
| Sprint 4 | Phase 5, Phase 6 | Disputes and admin moderation work; static pages and SEO done |
| Sprint 5 | Phase 7 | Tested, polished and launched in production |

---

## 3. Backlog

### Phase 0 – Setup (Sprint 1)

- [ ] **T-001 Create the project** (S)
  - Next.js app with TypeScript, Tailwind, ESLint, App Router and the `src/` directory.
  - `strict` is on in `tsconfig.json`. Path alias `@/*` works.
  - Git repository initialised with a sensible `.gitignore`. Existing `docs/` folder is the first commit.
  - Pushed to a new GitHub repository.

- [ ] **T-002 Tooling** (S)
  - Prettier configured with the Tailwind plugin.
  - Vitest installed. One example test passes.
  - shadcn/ui initialised with lucide icons. `Button` renders on the home page.
  - `npm run lint`, `npm run typecheck`, `npm run format` and `npm run test` exist and pass.

- [ ] **T-003 CI pipeline** (S)
  - GitHub Actions workflow runs lint, typecheck, test and build on every push and pull request.
  - A deliberately broken commit on a test branch turns the check red.
  - `main` is protected: merging requires a pull request and a green check.

- [ ] **T-004 Supabase projects** (S)
  - Two Supabase projects created: `numcheck-dev` and `numcheck-prod`.
  - Dev URL and anon key are in `.env.local`. `.env.example` lists the variable names without values.
  - Supabase CLI installed and linked to `numcheck-dev`. `supabase/migrations/` exists.
  - Server and browser clients exist in `src/lib/supabase/`.
  - No secret key is committed. The service role key is not used anywhere in the app.

- [ ] **T-005 i18n setup** (S) — Design D7
  - next-intl installed. All UI text comes from `messages/en.json`.
  - The home page shows a heading from the messages file.

- [ ] **T-007 Design tokens** (M) — [DESIGN.md](DESIGN.md), NFR-ACC-01, NFR-ACC-02 — do this right after T-002
  - Light and dark color tokens from DESIGN.md section 2 are CSS variables in `globals.css`, mapped onto the shadcn variables and into Tailwind, including every risk level's `surface`, `text` and `solid`.
  - Radius tokens (`sm`, `md`, `lg`, `full`) and the type scale from section 3.2 are available as Tailwind utilities.
  - Mulish (500, 700) and JetBrains Mono (700) load through `next/font` with no layout shift.
  - next-themes is installed with `attribute="class"`, following the system theme by default.
  - The motion tokens from DESIGN.md 8.2 (one easing curve, three durations) exist as Tailwind utilities.
  - A temporary `/styleguide` page shows buttons, search pill, text input, every risk badge and banner, the tally pill, a number card and the type scale in both themes.

- [ ] **T-006 Deploy the skeleton** (S)
  - App is live on Vercel with dev environment variables set.
  - Every pull request gets a preview URL.

### Phase 1 – Core logic (Sprint 1)

Pure TypeScript, no database or UI. Write the tests first.

- [ ] **T-010 Config values** (S) — FR-RISK-08
  - `src/lib/config.ts` holds every value from Design 7.4, exported as typed constants.

- [ ] **T-011 Phone normalization** (M) — FR-SEARCH-01 – 04
  - `normalizePhone`, `toDigits` and `formatLocal` in `src/lib/phone.ts` using libphonenumber-js.
  - Tests cover: `0771234567`, `077 123 4567`, `077-123-4567`, `+94771234567`, `94771234567`, a landline (`0112345678`), an international number with `+`, empty input, letters, too short, too long.
  - Invalid input returns `{ ok: false, error }`, never throws.

- [ ] **T-012 Risk scoring** (M) — FR-RISK-01 – 07
  - `calculateRisk` in `src/lib/risk.ts` follows Design 7.2 exactly.
  - Tests cover: fewer than 3 reports → unverified; each level boundary (net exactly 1 and exactly 3); new-account weight; each age band (180, 181, 365, 366 days); spam at half weight; safe votes lowering the score; high + verified dispute → disputed; medium + verified dispute stays medium.
  - `now` is passed in, so tests do not depend on today's date.

- [ ] **T-013 Content filter** (M) — FR-REPORT-05
  - `checkDescription` in `src/lib/content-filter.ts` follows Design 7.3.
  - Tests cover: old NIC (`912345678V`, lowercase `v`, `X`), new NIC (12 digits), email, phone number in different formats, and normal text that must pass (prices like "Rs. 5000", dates, short numbers like "3 times").

### Phase 2 – Database (Sprint 2)

- [ ] **T-020 Schema migration** (M) — Design 4.1, 4.2
  - All six tables created through a migration file with foreign keys, unique constraints and check constraints (category list, channel list, status list, description 10–500 chars).
  - `reports.user_id` is `ON DELETE SET NULL`. `report_flags` cascades when a report or user is deleted.
  - Running the migrations on an empty database succeeds.
  - TypeScript types are generated into `src/types/database.ts` and there is an npm script for it.

- [ ] **T-021 Row-level security** (M) — Design 5.1, NFR-SEC-02
  - RLS enabled on every table. Admin checks go through a `security definer` `is_admin()` function.
  - A signed-out request can read only visible reports and phone numbers, and can only insert disputes.
  - A signed-in user cannot insert a report with another user's id, cannot change `status`, `hold_reason` or `reporter_was_new`, and cannot read held reports of others.
  - A banned user cannot insert reports or flags.
  - Dispute emails and codes are not readable by non-admins. The public owner-response view exposes only `number_id` and `owner_response`.

- [ ] **T-022 Triggers** (M) — Design 4.3, FR-REPORT-04, FR-ABUSE-02, FR-ABUSE-03
  - `create_profile`, `enforce_report_rate_limit`, `detect_brigading`, `hold_flagged_report` and `set_updated_at` exist.
  - `reporter_was_new` is set by the database at insert time, not by the client.

- [ ] **T-023 Database tests** (M) — Design 11
  - SQL test scripts prove: 11th report in 24h is rejected; second report by the same user on the same number is rejected; 5 reports from new accounts in an hour are held; 3 flags hold a report; RLS rules from T-021.
  - The tests can be run with one command and are documented in the README.

- [ ] **T-024 Seed data** (S)
  - `seed.sql` creates 1 admin, about 20 users (some new, some old), about 15 numbers covering every risk level, held reports, flagged reports, one pending and one verified dispute.
  - Resetting the dev database produces the same data every time.

### Phase 3 – Public pages (Sprint 2)

- [ ] **T-030 App layout and risk badge** (M) — NFR-USE-01, NFR-ACC-01
  - Nav bar, footer and theme toggle as in DESIGN.md 7.12. Footer links to static pages and shows the disclaimer.
  - `RiskBadge`, `RiskBanner`, `TallyPill` and `NumberCard` components follow DESIGN.md 7.3 – 7.6.
  - Phone numbers everywhere use the monospace `number` type tokens.

- [ ] **T-031 Home search** (S) — FR-SEARCH-04, FR-SEARCH-05
  - Search box normalizes input and redirects to `/number/[digits]`.
  - Invalid input shows an inline error and keeps the typed text.

- [ ] **T-032 Number page** (L) — FR-PAGE-01 – 08, NFR-SEO-01, NFR-PERF-01
  - Server-rendered page shows both number formats, risk badge, report count, category breakdown and visible reports (newest first).
  - A number with no reports shows "No reports yet" and a report button.
  - Wording is neutral (FR-PAGE-05). No reporter identity anywhere in the HTML.
  - Published owner response is shown above the reports.
  - Page title and meta description contain the number in local and international format.
  - An invalid number in the URL shows a 404 page.

- [ ] **T-033 Recent reports feed** (S) — FR-FEED-01, FR-FEED-02
  - Home page shows the 20 most recent visible reports with number, category, risk badge and relative time.
  - Held and removed reports never appear.

### Phase 4 – Auth and reporting (Sprint 3)

- [ ] **T-040 Login** (M) — FR-AUTH-01, FR-AUTH-02
  - Google sign-in works on dev and preview URLs.
  - Email magic link sign-in works _(cut if late)_.
  - After login the user returns to the page they came from.

- [ ] **T-041 Route protection** (S) — FR-ADMIN-01
  - Signed-out users visiting `/number/[digits]/report` or `/account` are redirected to `/login` and come back after login.
  - Non-admins visiting any `/admin` route get a 404, checked on the server.

- [ ] **T-042 Report form** (L) — FR-REPORT-01 – 06, FR-AUTH-05
  - Form with category, channel and description, validated with Zod in a Server Action. Guidelines are shown above the form.
  - Blocked content shows a specific message (NIC / email / phone).
  - If the user already reported this number, the form opens in edit mode with a delete option.
  - Database errors (rate limit, banned) show a clear message, not a crash.
  - The submit button shows a pending state and cannot be double-submitted.

- [ ] **T-043 Flag a report** (S) — FR-ABUSE-01
  - Signed-in users see a flag button on each report. Flagging twice shows "Already flagged".
  - Signed-out users who click it are sent to login.

- [ ] **T-044 Account page** (M) — FR-AUTH-03, FR-AUTH-04
  - Lists the user's own reports with links to edit them.
  - Sign out works.
  - Delete account asks for confirmation, deletes the account and keeps the reports anonymized.

### Phase 5 – Dispute and admin (Sprint 4)

- [ ] **T-050 Dispute form** (S) — FR-DISPUTE-01, FR-DISPUTE-02
  - `/dispute?number=` form with number, contact email and explanation, validated with Zod.
  - Submitting shows a confirmation explaining the next steps. The number page does not change.

- [ ] **T-051 Admin layout** (S) — FR-ADMIN-01
  - `/admin` layout with navigation to queue, disputes and users.

- [ ] **T-052 Review queue** (M) — FR-ADMIN-02, FR-ADMIN-03
  - Lists held reports (with reason) and flagged reports (with flag count).
  - Admin can approve (make visible) or remove each one.

- [ ] **T-053 Dispute management** (L) — FR-DISPUTE-03 – 06, FR-ADMIN-05
  - Admin can generate a verification code for a dispute, mark it verified, publish the owner response, and resolve as upheld (choose reports to remove) or rejected.
  - A verified dispute changes High to Disputed on the number page. Resolving removes the label.

- [ ] **T-054 Ban users** (S) — FR-ADMIN-04
  - Admin can search users by email, ban and unban them.

- [ ] **T-055 Audit log** (S) — FR-ADMIN-06 _(cut if late)_
  - Every admin action from T-052 – T-054 writes a row to `admin_audit_log`.
  - `/admin` shows the latest 50 entries.

### Phase 6 – Content and SEO (Sprint 4)

- [ ] **T-060 Static pages** (M) — FR-STATIC-01, FR-STATIC-02
  - Terms of Use, Privacy Policy (what is stored, why, how to delete, PDPA), Reporting Guidelines and Contact / takedown pages.

- [ ] **T-061 Sitemap** (S) — NFR-SEO-02 _(cut if late)_
  - `/sitemap.xml` lists numbers with visible reports. `robots.txt` blocks `/admin` and `/account`.

- [ ] **T-062 Sinhala UI** (M) — NFR-USE-02 _(cut if late)_
  - `messages/si.json` with every string translated. Language switch in the header, saved in a cookie.
  - Noto Sans Sinhala (500, 700) loads through `next/font` with no layout shift, and Sinhala text uses a line height of at least 1.6 (DESIGN.md 3.3).

### Phase 7 – Quality and launch (Sprint 5)

- [ ] **T-070 E2E tests** (L) — Design 11
  - Playwright flows: search → number page; login → report → report appears; edit and delete own report; flag a report; admin approves a held report.
  - Running in CI.

- [ ] **T-071 Accessibility pass** (M) — NFR-ACC-01, NFR-ACC-02
  - Every page passes an axe scan with no serious or critical issues.
  - A final unslop review of every public page finds nothing that breaks DESIGN.md.
  - The whole report flow can be completed with the keyboard only.

- [ ] **T-072 Performance pass** (M) — NFR-PERF-01, NFR-PERF-02
  - Lighthouse (mobile) on the deployed home and number pages: Performance 90+, Accessibility 95+, SEO 95+.

- [ ] **T-073 Production setup** (M) — NFR-COST-01
  - Migrations applied to `numcheck-prod`. Production env variables set on Vercel.
  - Google OAuth configured for the production URL.
  - Admin account created in production.

- [ ] **T-074 README** (M)
  - One-paragraph pitch, live link, screenshots, feature list, tech stack, architecture notes (RLS + triggers, risk scoring), local setup steps, how to run tests, what I would do next.

- [ ] **T-075 Final review and launch** (S)
  - No `console.log`, commented-out code or unused dependencies.
  - Every task in this file is ticked or moved to "Later".
  - Charter, SRS and design docs updated to v1.0 to match what was built.

---

## 4. Later (not in this plan)

- OTP-based automatic ownership verification for disputes
- AI check: paste an SMS and get a scam likelihood
- Tamil language
- Weekly "Top reported numbers" page
- Android app with incoming call warnings
- Config values stored in the database so triggers and app share one source

## 5. Interview talking points to collect while building

- Why abuse rules live in database triggers and RLS, not only in Server Actions.
- How the risk score is weighted, and why it is calculated on read instead of stored.
- How fake reports against innocent people were handled (layers: prevention, display, dispute, moderation).
- Privacy decisions: no owner identity, anonymized reports on account deletion, PDPA.
- How server rendering helps people find number pages from Google.
- The hardest bug, and how I found it.

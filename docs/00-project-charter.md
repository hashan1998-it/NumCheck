# NumCheck – Project Charter

| | |
|---|---|
| **Project** | NumCheck |
| **Version** | 0.2 (Draft) |
| **Date** | 2026-11-27 |
| **Methodology** | Agile (Scrum-lite) |
| **Team** | Solo developer |

## 1. Problem Statement

Scam calls, fake bank calls and lottery/prize SMS messages are increasing in Sri Lanka. When an unknown number calls or messages, there is no quick, local place to check whether it can be trusted.

## 2. Solution

A community web platform where people report their experiences with phone numbers, and anyone can search a number for free to see what others have said about it.

## 3. Target Users

- Everyday phone users in Sri Lanka who receive unknown calls or SMS
- Family members checking numbers on behalf of elderly parents

## 4. Goals (v1)

1. Users can search any phone number, in any common format.
2. Logged-in users can report a number.
3. Fake or spam reports must not harm innocent number owners.

## 5. Scope

### In scope (v1)

- Number search
- Number details page
- Report submission
- User login
- Abuse protection
- Recent reports feed

### Out of scope (v1)

- Mobile app
- AI-based scam detection
- Tamil language support
- OTP-based automatic ownership verification for disputes (planned for v2; v1 uses a manual dispute process)
- Showing the owner's name or personal details for a number (never planned, for privacy reasons)

## 6. Success Metric

More than 100 numbers reported within one month of launch.

## 7. Constraints

- Single developer
- Free-tier tools and hosting only
- Must comply with Sri Lanka's Personal Data Protection Act No. 9 of 2022 (PDPA)

## 8. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Fake reports against innocent numbers | High | Login required, one report per user per number, report threshold before showing risk, manual dispute process |
| Spam / bot reports | Medium | Rate limiting per user |
| Privacy / legal issues | High | Never publish owner identity; store only what is needed |
| Low initial usage | Medium | SEO-friendly number pages so people find the site from Google searches |

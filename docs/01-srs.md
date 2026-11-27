# NumCheck – Software Requirements Specification (SRS)

| | |
|---|---|
| **Project** | NumCheck |
| **Version** | 0.1 (Draft) |
| **Date** | 2026-11-27 |
| **Related** | [00-project-charter.md](00-project-charter.md) |

## 1. Introduction

### 1.1 Purpose

This document defines what NumCheck v1 must do (functional requirements) and how well it must do it (non-functional requirements). It is the reference for design, implementation and testing.

### 1.2 Scope

NumCheck is a community web platform where users report experiences with phone numbers and anyone can search a number to see those reports. v1 covers search, number pages, reporting, login, abuse protection, a manual dispute process, admin moderation and a recent reports feed.

### 1.3 Definitions

| Term | Meaning |
|---|---|
| **Report** | A user's statement about a number: a category, call/SMS type and a short description |
| **Negative report** | A report in the Scam, Fake bank call, Lottery/prize, Harassment or Spam/marketing category |
| **Safe vote** | A report in the Safe category |
| **Normalized number** | A phone number converted to E.164 format, for example `+94771234567` |
| **New account** | An account less than 7 days old |
| **Held report** | A report kept out of public view and scoring until an admin reviews it |
| **Dispute** | A request by a number's owner to review the reports on that number |
| **Brigading** | Many coordinated reports against one number in a short time |
| **PDPA** | Sri Lanka Personal Data Protection Act No. 9 of 2022 |

### 1.4 Priority Levels (MoSCoW)

- **Must**: v1 cannot launch without it
- **Should**: important, included in v1 if time allows
- **Could**: nice to have, likely moved to v2

## 2. Overall Description

### 2.1 Product Perspective

A standalone web application. Users access it through a browser on mobile or desktop. Number pages are publicly viewable and indexable by search engines.

### 2.2 User Classes

| User class | Description | Can do |
|---|---|---|
| **Visitor** | Not logged in | Search numbers, view number pages, view recent feed |
| **Registered User** | Logged in | Everything a visitor can, plus report numbers and flag reports |
| **Number Owner** | Owns a number and has had ownership verified by an admin | Post a public response on their number's page |
| **Admin** | Site operator | Review held/flagged reports and disputes, remove reports, ban users |

### 2.3 Operating Environment

- Modern browsers (Chrome, Safari, Firefox, Edge), latest two versions
- Mobile-first; must work well on small Android phones
- Hosted on free-tier services (Vercel, Supabase)

### 2.4 Constraints

- Single developer
- Free-tier tools only; no paid SMS in v1
- Must comply with PDPA

### 2.5 Assumptions

- Most users arrive on mobile, often from a Google search for a number
- Initial traffic is low, so manual dispute handling is manageable

## 3. Functional Requirements

### 3.1 Number Search

| ID | Requirement | Priority |
|---|---|---|
| FR-SEARCH-01 | The system shall accept phone numbers in common formats (for example `0771234567`, `077 123 4567`, `+94771234567`, `94771234567`) and normalize them to E.164. | Must |
| FR-SEARCH-02 | Numbers without a country code shall be treated as Sri Lankan (`+94`). | Must |
| FR-SEARCH-03 | The system shall accept valid international numbers when entered with a country code. | Should |
| FR-SEARCH-04 | The system shall reject invalid numbers with a clear error message. | Must |
| FR-SEARCH-05 | A search shall redirect to the number's page, whether or not it has reports. | Must |

### 3.2 Number Page

| ID | Requirement | Priority |
|---|---|---|
| FR-PAGE-01 | Each number shall have a public page at a stable URL (for example `/number/94771234567`). | Must |
| FR-PAGE-02 | The page shall show the number's risk level (see 3.5), total report count and a breakdown by category. | Must |
| FR-PAGE-03 | The page shall list visible reports, newest first, with category, call/SMS type, description and date. | Must |
| FR-PAGE-04 | Reporter identity shall never be shown publicly. | Must |
| FR-PAGE-05 | Wording shall be neutral and factual, for example "5 users reported this number as Scam", never "This person is a scammer". | Must |
| FR-PAGE-06 | A number with no reports shall show "No reports yet" and a prompt to report it. | Must |
| FR-PAGE-07 | If the number has a verified owner response, it shall be shown clearly above the reports. | Should |
| FR-PAGE-08 | The page shall include a "This is my number" link to the dispute form. | Must |

### 3.3 Authentication

| ID | Requirement | Priority |
|---|---|---|
| FR-AUTH-01 | Users shall be able to sign in with Google. | Must |
| FR-AUTH-02 | Users shall be able to sign in with an email magic link. | Should |
| FR-AUTH-03 | Users shall be able to sign out and delete their account. | Must |
| FR-AUTH-04 | When an account is deleted, its reports shall be kept but unlinked from the user (anonymized). | Must |
| FR-AUTH-05 | Banned users shall not be able to submit reports or flags. | Must |

### 3.4 Reporting

| ID | Requirement | Priority |
|---|---|---|
| FR-REPORT-01 | Only logged-in users shall be able to submit reports. | Must |
| FR-REPORT-02 | A report shall contain: category (Scam, Fake bank call, Lottery/prize, Spam/marketing, Harassment, Safe), type (Call / SMS / WhatsApp) and a description of 10–500 characters. | Must |
| FR-REPORT-03 | A user shall be able to submit only one report per number. They may edit or delete it later. | Must |
| FR-REPORT-04 | A user shall be able to submit at most 10 reports per 24 hours. | Must |
| FR-REPORT-05 | The system shall reject descriptions that contain a Sri Lankan NIC number (old `#########V/X` or new 12-digit format), an email address, or another phone number, and explain why. | Must |
| FR-REPORT-06 | The report form shall show short guidelines: describe what happened, do not include names or personal details. | Must |

### 3.5 Risk Scoring

| ID | Requirement | Priority |
|---|---|---|
| FR-RISK-01 | Each visible report shall have a weight = account weight × age weight. | Must |
| FR-RISK-02 | Account weight shall be 0.5 if the reporter's account was new when the report was made, otherwise 1. | Must |
| FR-RISK-03 | Age weight shall be 1 for reports up to 180 days old, 0.5 for 181–365 days, and 0.25 for older reports. | Must |
| FR-RISK-04 | Spam/marketing reports shall count at half weight in the negative score. | Must |
| FR-RISK-05 | Net score = sum of negative report weights − sum of Safe vote weights. | Must |
| FR-RISK-06 | Risk level shall be: **Unverified** if fewer than 3 visible reports; otherwise **Low 🟢** if net < 1, **Medium 🟡** if 1 ≤ net < 3, **High 🔴** if net ≥ 3. | Must |
| FR-RISK-07 | If a number has a verified, open dispute, High shall be shown as **Disputed ⚖️** instead. | Must |
| FR-RISK-08 | Thresholds and weights shall be stored as configuration, not hard-coded, so they can be tuned. | Should |

### 3.6 Abuse Protection

| ID | Requirement | Priority |
|---|---|---|
| FR-ABUSE-01 | Logged-in users shall be able to flag a report as false or abusive, once per report. | Must |
| FR-ABUSE-02 | A report with 3 or more flags shall be automatically held. | Must |
| FR-ABUSE-03 | If a number receives 5 or more reports within 1 hour from new accounts, those reports shall be automatically held (brigading detection). | Must |
| FR-ABUSE-04 | Held reports shall not be shown publicly or counted in risk scoring. | Must |

### 3.7 Dispute (Manual, v1)

| ID | Requirement | Priority |
|---|---|---|
| FR-DISPUTE-01 | Anyone shall be able to submit a dispute form with: the number, a contact email, and an explanation. | Must |
| FR-DISPUTE-02 | Submitting a dispute shall not change what is shown on the number page until an admin verifies ownership. | Must |
| FR-DISPUTE-03 | The admin shall verify ownership manually by sending the claimant a one-time code and asking them to send it back by SMS or WhatsApp from the disputed number. | Must |
| FR-DISPUTE-04 | Once ownership is verified, the number shall show as Disputed (FR-RISK-07) until the dispute is resolved. | Must |
| FR-DISPUTE-05 | A verified owner shall be able to post one public response on their number's page. | Should |
| FR-DISPUTE-06 | The admin shall resolve a dispute as **Upheld** (remove selected reports) or **Rejected** (reports stay). Either way the dispute is closed and the Disputed label removed. | Must |

### 3.8 Recent Reports Feed

| ID | Requirement | Priority |
|---|---|---|
| FR-FEED-01 | The home page shall show the 20 most recent visible reports with number, category, risk level and time. | Must |
| FR-FEED-02 | Numbers in the feed shall show their current risk level, including Unverified. | Must |

### 3.9 Admin

| ID | Requirement | Priority |
|---|---|---|
| FR-ADMIN-01 | Admin pages shall be accessible only to users with the admin role. | Must |
| FR-ADMIN-02 | The admin shall see a review queue of held reports, flagged reports and open disputes. | Must |
| FR-ADMIN-03 | The admin shall be able to approve (make visible) or remove a held or flagged report. | Must |
| FR-ADMIN-04 | The admin shall be able to ban and unban users. | Must |
| FR-ADMIN-05 | The admin shall be able to mark a dispute's ownership as verified and resolve it (FR-DISPUTE-06). | Must |
| FR-ADMIN-06 | Every admin action shall be recorded in an audit log (who, what, when). | Should |

### 3.10 Static Pages

| ID | Requirement | Priority |
|---|---|---|
| FR-STATIC-01 | The site shall have Terms of Use, Privacy Policy and Reporting Guidelines pages. | Must |
| FR-STATIC-02 | The site shall have a contact / takedown request page. | Must |

## 4. Non-Functional Requirements

| ID | Category | Requirement | Priority |
|---|---|---|---|
| NFR-PERF-01 | Performance | A number page shall load in under 2 seconds on a typical 4G connection. | Must |
| NFR-PERF-02 | Performance | Search shall respond in under 1 second. | Should |
| NFR-SEO-01 | SEO | Number pages shall be server-rendered with a title and description containing the number in local and international formats. | Must |
| NFR-SEO-02 | SEO | The site shall provide a sitemap of numbers that have visible reports. | Should |
| NFR-SEC-01 | Security | All traffic shall use HTTPS. | Must |
| NFR-SEC-02 | Security | Database access shall be protected with row-level security so users can only edit their own reports. | Must |
| NFR-SEC-03 | Security | All user input shall be validated on the server, not only in the browser. | Must |
| NFR-SEC-04 | Security | User-written text shall be escaped when displayed to prevent XSS. | Must |
| NFR-PRIV-01 | Privacy | The system shall store only the data needed: email, account creation date, role, ban status and the user's reports. | Must |
| NFR-PRIV-02 | Privacy | The system shall never publish a number owner's name or personal details. | Must |
| NFR-PRIV-03 | Privacy | Dispute contact emails shall be visible to admins only. | Must |
| NFR-USE-01 | Usability | The UI shall be mobile-first and usable on screens 360px wide. | Must |
| NFR-USE-02 | Usability | The UI shall be available in English and Sinhala. | Should |
| NFR-ACC-01 | Accessibility | Risk levels shall not rely on color alone; each shall also have a text label and icon. | Must |
| NFR-ACC-02 | Accessibility | Pages shall be keyboard-navigable and meet WCAG 2.1 AA contrast. | Should |
| NFR-MAINT-01 | Maintainability | Core logic (number normalization, risk scoring, content filtering) shall be covered by unit tests. | Must |
| NFR-COST-01 | Cost | The system shall run within free-tier limits of its hosting and database services. | Must |

## 5. Out of Scope (v1)

- Mobile app
- AI-based scam detection
- Tamil language
- OTP-based automatic ownership verification (planned for v2)
- Showing a number owner's name or personal details (never planned)

## 6. Traceability to Charter Risks

| Charter risk | Covered by |
|---|---|
| Fake reports against innocent numbers | FR-REPORT-01, FR-REPORT-03, FR-RISK-01 – 07, FR-ABUSE-01 – 04, FR-DISPUTE-01 – 06 |
| Spam / bot reports | FR-REPORT-01, FR-REPORT-04, FR-ABUSE-03 |
| Privacy / legal issues | FR-PAGE-04, FR-REPORT-05, NFR-PRIV-01 – 03, FR-STATIC-01 – 02 |
| Low initial usage | NFR-SEO-01 – 02 |

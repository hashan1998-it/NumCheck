---
version: 0.1
name: NumCheck
description: A calm, high-density community lookup. A cool-gray canvas holds stacked white cards, each one a phone number with its risk badge and a tally pill of what the community reported. One trust-blue owns every action, so red, amber and green stay free to mean risk and nothing else. Pill buttons and badges, 12px cards, one line-icon set, Mulish at two weights, and a monospace face for phone numbers.

colors:
  light:
    primary: "#1d4ed8"
    primary-hover: "#1e40af"
    primary-surface: "#e8eefc"
    on-primary: "#ffffff"
    canvas: "#f3f5f7"
    surface: "#ffffff"
    ink: "#000000"
    body: "#5f6266"
    muted: "#a7a9ac"
    hairline: "#dfe1e4"
    hairline-strong: "#8a8f96"
    focus-ring: "#1d4ed8"
    risk-unverified-surface: "#eef0f2"
    risk-unverified-text: "#4b5057"
    risk-unverified-solid: "#8a8f96"
    risk-low-surface: "#e3f6e6"
    risk-low-text: "#19692a"
    risk-low-solid: "#2e9e3a"
    risk-medium-surface: "#faf6c8"
    risk-medium-text: "#8a4f08"
    risk-medium-solid: "#a87400"
    risk-high-surface: "#fde8eb"
    risk-high-text: "#b3122f"
    risk-high-solid: "#ce1736"
    risk-disputed-surface: "#efeafd"
    risk-disputed-text: "#5b3fc4"
    risk-disputed-solid: "#7457dd"
    bar-negative: "#ce1736"
    bar-spam: "#d35400"
    bar-safe: "#2e9e3a"
  dark:
    primary: "#7b96ff"
    primary-hover: "#9bb0ff"
    primary-surface: "#1d2540"
    on-primary: "#0b0d10"
    canvas: "#0f1216"
    surface: "#181c21"
    ink: "#f2f4f6"
    body: "#a3a9b1"
    muted: "#5d636b"
    hairline: "#2c3239"
    hairline-strong: "#6b727b"
    focus-ring: "#7b96ff"
    risk-unverified-surface: "#262b31"
    risk-unverified-text: "#c3c8ce"
    risk-unverified-solid: "#858c95"
    risk-low-surface: "#12301a"
    risk-low-text: "#7ad68a"
    risk-low-solid: "#4cc25e"
    risk-medium-surface: "#33290b"
    risk-medium-text: "#f2c94c"
    risk-medium-solid: "#e0a400"
    risk-high-surface: "#3a1018"
    risk-high-text: "#ff8a9b"
    risk-high-solid: "#e8455e"
    risk-disputed-surface: "#261d45"
    risk-disputed-text: "#b9a6ff"
    risk-disputed-solid: "#8f76ee"
    bar-negative: "#f0506a"
    bar-spam: "#f08a3c"
    bar-safe: "#4cc25e"

typography:
  display:
    fontFamily: Mulish
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
  heading-lg:
    fontFamily: Mulish
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
  heading:
    fontFamily: Mulish
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
  lead:
    fontFamily: Mulish
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: Mulish
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  ui:
    fontFamily: Mulish
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
  caption:
    fontFamily: Mulish
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
  number-xl:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.1
  number:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 40px

components:
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    height: 44px
    padding: "0px 18px"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    height: 44px
  button-outline-neutral:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    height: 44px
  button-muted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    height: 44px
  search-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.number}"
    rounded: "{rounded.full}"
    height: 52px
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  number-card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  report-card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  risk-badge:
    backgroundColor: "{colors.risk-*-surface}"
    textColor: "{colors.risk-*-text}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  risk-banner:
    backgroundColor: "{colors.risk-*-surface}"
    textColor: "{colors.risk-*-text}"
    accentBorder: "4px solid {colors.risk-*-solid}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  tally-pill:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    negativeColor: "{colors.risk-high-text}"
    safeColor: "{colors.risk-low-text}"
  category-bar:
    trackColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    height: 8px
  timestamp-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
  owner-response-card:
    backgroundColor: "{colors.risk-disputed-surface}"
    textColor: "{colors.ink}"
    accentBorder: "4px solid {colors.risk-disputed-solid}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  sidebar-card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
---

# NumCheck – Design System

| | |
|---|---|
| **Version** | 0.1 (Draft) |
| **Date** | 2026-11-27 |
| **Related** | [02-design.md](02-design.md) section 9 |
| **Based on** | The mydealz analysis in [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (MIT), adapted for NumCheck |

## 1. Overview

NumCheck borrows its structure from a deals-community feed: a cool-gray canvas (`{colors.canvas}`) with stacked white cards (`{colors.surface}`), hairline borders instead of shadows, fully-round pill buttons and 8px cards. That pattern fits NumCheck well, because the home page is also a dense community feed and every number has a crowd verdict.

Four things are changed for NumCheck:

1. **The brand color is trust-blue, not green.** In NumCheck, red, amber and green mean risk. If the main button were green, a "Report" action and a "Low risk" badge would look the same. One blue (`{colors.primary}`) owns every action and link, and nothing else is blue.
2. **The vote control becomes a tally pill.** Instead of up/down votes on a price, each number shows how many people reported it as a problem and how many said it is safe.
3. **Phone numbers use a monospace face.** People compare numbers digit by digit, and a monospace face keeps `0`/`O` and `1`/`l` clearly different and lines digits up.
4. **Fewer pills, no emoji.** The source rounds almost everything fully and uses decoration freely. Here only buttons, badges and the search box are pills, cards use a 12px radius, and every icon comes from one line-icon set.

**Key characteristics**
- One trust-blue for actions; red / amber / green / violet reserved for risk
- Every risk level shown as icon + text + color, never color alone
- Cool-gray canvas behind white cards, separated by hairlines
- Pills for buttons, the search box, badges and the tally pill; 12px cards; 8px form fields
- One line-icon set (lucide), no emoji anywhere in the UI
- Mulish at two weights (500 for reading, 700 for anything that acts or signals)
- JetBrains Mono for phone numbers only
- Light and dark themes, both meeting WCAG AA

## 2. Colors

All tokens are defined for light and dark themes in the front matter. Every text/background pair below was checked against WCAG 2.1 AA: 4.5:1 for text, 3:1 for non-text marks such as bars and borders.

### 2.1 Brand and surfaces

| Token | Light | Dark | Use |
|---|---|---|---|
| `primary` | `#1d4ed8` | `#7b96ff` | Primary buttons, links, focus ring, active nav |
| `primary-hover` | `#1e40af` | `#9bb0ff` | Hover / pressed state of primary |
| `primary-surface` | `#e8eefc` | `#1d2540` | Selected chip, info callout |
| `on-primary` | `#ffffff` | `#0b0d10` | Text on a primary fill |
| `canvas` | `#f3f5f7` | `#0f1216` | Page background |
| `surface` | `#ffffff` | `#181c21` | Cards, nav, footer, inputs |
| `hairline` | `#dfe1e4` | `#2c3239` | Card and divider borders (decorative) |
| `hairline-strong` | `#8a8f96` | `#6b727b` | Input borders (must be visible, 3:1) |

### 2.2 Text

| Token | Light | Dark | Use |
|---|---|---|---|
| `ink` | `#000000` | `#f2f4f6` | Headings, numbers, main text |
| `body` | `#5f6266` | `#a3a9b1` | Secondary text, metadata, placeholders |
| `muted` | `#a7a9ac` | `#5d636b` | Disabled text and decorative icons only. **Never** for readable text: it does not meet 4.5:1 |

The source system used `#6b6d70` for body text. It is darkened to `#5f6266` so it passes 4.5:1 on the gray canvas, not only on white.

### 2.3 Risk levels

Each level has three tokens: `surface` (badge / banner fill), `text` (label on that fill) and `solid` (icon, banner accent border, chart mark).

| Level | Icon (lucide) | Label | Light surface / text | Dark surface / text | Solid (L / D) |
|---|---|---|---|---|---|
| unverified | `circle-dashed` | Unverified | `#eef0f2` / `#4b5057` | `#262b31` / `#c3c8ce` | `#8a8f96` / `#858c95` |
| low | `shield-check` | Low risk | `#e3f6e6` / `#19692a` | `#12301a` / `#7ad68a` | `#2e9e3a` / `#4cc25e` |
| medium | `triangle-alert` | Medium risk | `#faf6c8` / `#8a4f08` | `#33290b` / `#f2c94c` | `#a87400` / `#e0a400` |
| high | `octagon-alert` | High risk | `#fde8eb` / `#b3122f` | `#3a1018` / `#ff8a9b` | `#ce1736` / `#e8455e` |
| disputed | `scale` | Disputed | `#efeafd` / `#5b3fc4` | `#261d45` / `#b9a6ff` | `#7457dd` / `#8f76ee` |

Disputed is violet, not blue, so it never looks like a link or button.

### 2.4 Category breakdown bars

| Token | Light | Dark | Categories |
|---|---|---|---|
| `bar-negative` | `#ce1736` | `#f0506a` | Scam, Fake bank call, Lottery/prize, Harassment |
| `bar-spam` | `#d35400` | `#f08a3c` | Spam/marketing |
| `bar-safe` | `#2e9e3a` | `#4cc25e` | Safe |

Each bar also shows the category name and count as text, so color is never the only signal.

## 3. Typography

### 3.1 Fonts

| Font | Weights | Use | Why |
|---|---|---|---|
| **Mulish** | 500, 700 | All UI text | Open-source substitute for the source system's commercial font, with the same warm, geometric feel |
| **Noto Sans Sinhala** | 500, 700 | Sinhala text (T-062) | Mulish has no Sinhala glyphs; Noto Sans Sinhala matches its weight and size well |
| **JetBrains Mono** | 700 | Phone numbers only | Clear `0`/`O` and `1`/`l`, digits line up |

All fonts load through `next/font` to avoid layout shift. The font stack is `Mulish, "Noto Sans Sinhala", system-ui, sans-serif`, so Sinhala characters fall through to Noto automatically.

### 3.2 Scale

| Token | Size | Weight | Line height | Use |
|---|---|---|---|---|
| `display` | 40px (32px on mobile) | 700 | 1.1 | Home hero: "Who is calling you?" |
| `heading-lg` | 24px | 700 | 1.2 | Page titles, risk banner title |
| `heading` | 20px | 700 | 1.25 | Card and section headings |
| `lead` | 18px | 500 | 1.4 | Intro text under the hero |
| `body` | 16px | 500 | 1.5 | Report descriptions, paragraphs, form text |
| `ui` | 14px | 700 | 1.3 | Buttons, badges, tally pill, labels |
| `caption` | 12px | 500 | 1.3 | Timestamps, metadata |
| `number-xl` | 32px (26px on mobile) | 700 | 1.1 | The number at the top of a number page |
| `number` | 16px | 700 | 1.3 | Numbers in feed cards and the search box |

### 3.3 Rules

- Two weights only: 500 for reading, 700 for anything that acts or signals.
- Hierarchy comes from size and weight, not color. Color is for risk and actions.
- Body text is never below 16px, so it stays readable on small phones and for older users.
- Sinhala text uses a line height of at least 1.6, because Sinhala letters have taller marks above and below the line.

## 4. Layout

### 4.1 Spacing

8px base unit. Tokens: `xxs` 2 · `xs` 4 · `sm` 8 · `md` 12 · `lg` 16 · `xl` 24 · `xxl` 40.
Cards pad `lg`. Cards in a list stack with an `sm` gap. Page sections are separated by `xl`.

### 4.2 Grid and breakpoints

| Name | Width | Layout |
|---|---|---|
| Mobile | < 768px | One column, full-width cards, 16px side padding |
| Desktop | ≥ 768px | Max width 1040px. Main column plus a 300px right sidebar |

The sidebar holds a "How NumCheck works" card and a "Reporting guidelines" card. On mobile, the sidebar cards move below the main content.

### 4.3 Touch targets

Every button, link in a list, and icon button is at least 44×44px.

## 5. Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on `canvas` | Page background, footer |
| 1 | 1px `hairline` border | Cards, buttons, inputs |
| 2 | `0 8px 24px rgba(0,0,0,0.06)` | Dropdowns, popovers, toasts |
| 3 | `0 16px 40px rgba(0,0,0,0.12)` | Dialogs |

Resting cards never have a shadow. In dark mode, level 2 and 3 also use a 1px `hairline` border, because shadows are hard to see on a dark background.

## 6. Shapes

| Token | Value | Use |
|---|---|---|
| `sm` | 4px | Small tags |
| `md` | 8px | Form fields, textarea, items inside cards |
| `lg` | 12px | Cards, banners, dialogs |
| `full` | 9999px | Buttons, search box, risk badges, tally pill, category bars |

Nested radius: an item inside a card uses the card radius minus the card padding, never below 4px. A 12px card with 8px padding holds 4px items; with 16px padding, inner items use `md` or `sm` by size, not `lg`.

Form fields use `md`, not `full`. The source system rounds text inputs fully, but a fully-round multi-line textarea looks broken, and NumCheck's report form needs one. Only the home search box is a pill.

## 7. Components

### 7.1 Buttons

| Component | Look | Example |
|---|---|---|
| `button-primary` | Blue fill, white label, pill, 44px tall | "Check", "Report this number", "Submit report" |
| `button-outline` | White fill, blue label and border | "Sign in", "Edit my report" |
| `button-outline-neutral` | White fill, ink label, hairline border | "Cancel", menu |
| `button-muted` | White fill, body label, hairline border | "Not now" |

Rules:
- One primary button per screen area.
- Destructive actions ("Delete my report", "Delete account") use `button-outline-neutral` with `risk-high-text` label, never a red fill, so they do not look like a risk badge.
- Pending state: label changes ("Submitting…"), spinner on the left, button disabled.
- Focus: 2px `focus-ring` outline with 2px offset.

### 7.2 Search pill (home hero)

- Full width on mobile, 560px max on desktop. 52px tall, `full` radius, `hairline-strong` border.
- Phone icon on the left, the `Check` button inside on the right.
- Typed text uses `number` (monospace), placeholder uses `body` in Mulish: "e.g. 077 123 4567".
- Error message sits below in `risk-high-text`, with an alert icon, linked to the input with `aria-describedby`.

### 7.3 Risk badge

- Pill with icon + label, colors from section 2.3.
- Example: `octagon-alert` icon + "High risk". Used in the feed and lists.
- Never shown without its text label.

### 7.4 Risk banner (number page)

- Card with the level's `surface` fill, 4px left border in `solid`.
- Line 1 (`heading-lg`, level `text` color): icon + "High risk".
- Line 2 (`body`, ink): neutral summary, e.g. "12 people reported this number. 8 said Scam."
- Unverified: "Not enough reports yet to judge this number."
- Disputed: "The owner of this number has disputed these reports. An admin is reviewing them."

### 7.5 Tally pill (signature component)

The NumCheck version of a crowd vote. A pill with two halves:

```
( ▲ 11  |  ✓ 2 )
```

- Left: `triangle-alert` icon + count of negative reports, in `risk-high-text`.
- Right: `check` icon + count of Safe reports, in `risk-low-text`.
- Divider: 1px `hairline`.
- Screen reader label: "11 problem reports, 2 safe reports".
- Shown on every feed card and under the risk banner.

### 7.6 Number card (feed)

```
┌───────────────────────────────────┐
│ 077 123 4567       [■ High risk] │
│ Fake bank call · Call  ( ▲ 11 | ✓ 2 ) │
│ "Said my account was locked…"     │
│                         5 min ago │
└───────────────────────────────────┘
```

- Number in `number` (monospace, ink), risk badge top right.
- Latest report category and channel in `ui` / `body`.
- First line of the latest description, one line, truncated.
- Timestamp pill bottom right.
- The whole card is one link to the number page. On hover the border changes to `hairline-strong`; no shadow, no scale.

In the sketches, ▲, ✓ and ■ stand for lucide icons; they are not characters in the UI.

### 7.7 Report card (number page)

- Category badge (neutral pill), channel, relative date in `caption`.
- Description in `body`, full text.
- Flag icon button (44×44) bottom right, label "Flag this report" for screen readers.
- No avatar or reporter name, ever.

### 7.8 Category breakdown

One row per category with reports:

```
Scam            ███████████░░░░  8
Fake bank call  ████░░░░░░░░░░░  3
Safe            █░░░░░░░░░░░░░░  1
```

- Label in `ui`, count in `ui`, bar 8px tall with `full` radius on a `canvas` track.
- Bar color from section 2.4.

### 7.9 Owner response card

- Violet `risk-disputed-surface` fill with a 4px `risk-disputed-solid` left border.
- Title: `scale` icon + "Response from the number's owner" in `ui`.
- Text in `body`, ink.
- Shown above the report list.

### 7.10 Forms

- Label above each field in `ui`, ink. Required fields say "(required)" in text, not only `*`.
- Inputs and textarea: `text-input` style, 44px min height.
- Category choice: a grid of selectable pills (`full` radius). Selected state: `primary-surface` fill, `primary` border and label, check icon.
- Character counter under the textarea in `caption` ("120 / 500").
- Error text under the field in `risk-high-text` with an icon.
- Guidelines box above the report form: `primary-surface` fill, `md` radius.

### 7.11 States

| State | Treatment |
|---|---|
| Loading | Static skeleton blocks in `hairline` color, same shape as the content. No pulse: nothing animates unless it is live |
| Empty | Centered icon, short sentence in `body`, one primary action. Example: "No reports yet for this number. Be the first to report it." |
| Error | `sidebar-card` style card with alert icon, a plain-language message and a "Try again" button |
| Toast | Level-2 surface card, bottom center on mobile, top right on desktop, auto-hide after 5 seconds |

### 7.12 Navigation and footer

- **Nav bar:** white with a hairline bottom border. Left: "NumCheck" wordmark in `heading`, ink. Right: theme toggle, then "Sign in" (`button-outline`) or the user menu. On number pages, a compact search pill appears in the nav on desktop.
- **Footer:** white with a hairline top border. Links in `body`: Terms, Privacy, Reporting guidelines, Contact. A one-line disclaimer: "Reports are user opinions. NumCheck does not verify them."

## 8. Icons, Motion and Copy

These rules keep the UI from looking generic or machine-made.

### 8.1 Icons

- One set: **lucide**. 16px inside text and badges, 18px in buttons and nav, stroke 1.5.
- Icon color follows the text next to it (`body`, or the risk `text` color inside a badge).
- 8px gap between an icon and its label.
- No emoji anywhere in the UI: not in buttons, badges, counts, headings or empty states.
- Icon-only buttons (flag, theme toggle, menu) always have an `aria-label`.

### 8.2 Motion

- One easing curve for everything: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Durations: hover / press / toggle 150ms, menus and popovers 200ms, dialogs and sheets 300ms.
- Animate only `color`, `background-color`, `border-color`, `opacity` and `transform`. Never `transition-all`, never width, height, top or left.
- Hover changes color or border only. Press scales to 0.98. No hover scale on cards or buttons.
- Nothing pulses, glows or loops unless it is live.
- When `prefers-reduced-motion` is set, all motion is replaced by an instant change.

### 8.3 Copy

- Sentence case everywhere, including badges and buttons: "High risk", not "HIGH RISK".
- No exclamation marks. No trailing periods on buttons, labels or badges.
- No hype words (seamless, supercharge, unlock). Say what happens: "Check a number", "Report this number".
- Placeholders are short examples, not instructions: "077 123 4567".
- Counts always say what they count and from where: "12 reports", "8 said Scam", never a bare "12!!".
- Neutral about people: "12 people reported this number as Scam", never "This is a scammer".
- Numbers use one format everywhere: local format first (`077 123 4567`), international below (`+94 77 123 4567`).

### 8.4 Never

These are banned outright, whatever the screen:

- Gradients on backgrounds, buttons, cards or text
- Colored glows or drop shadows on icons, pills or buttons
- Glass or blurred cards
- Blobs, orbs, grid backgrounds or decorative 3D shapes
- Uppercase labels with wide letter spacing
- Headings above weight 700
- Arbitrary spacing values outside the 4px scale (no `mt-[13px]`)
- `PRO`, `New`, `Beta` style badges

## 9. Component Library

NumCheck uses **shadcn/ui** (Radix UI primitives + Tailwind) with **lucide** icons.

| Why | |
|---|---|
| Code lives in the repo | shadcn copies each component into `src/components/ui/`. Nothing is hidden in a package, so every token in this document can be applied directly |
| Accessible by default | Radix handles focus trapping, Escape to close, keyboard navigation and ARIA for dialogs, menus and selects (NFR-ACC-02) |
| Works with the theme | shadcn reads CSS variables, so the light and dark tokens in section 2 map straight onto it |
| Familiar | Already used in the tuition-manager project |

How it is used:

- Base components from shadcn: `Button`, `Input`, `Textarea`, `Label`, `Dialog`, `DropdownMenu`, `Toast` (Sonner), `Skeleton`, `Tooltip`.
- After adding a shadcn component, restyle it to this document right away: radius, colors, heights, focus ring. A shadcn default left as it is counts as a bug.
- NumCheck components are built on top in `src/components/`: `RiskBadge`, `RiskBanner`, `TallyPill`, `NumberCard`, `ReportCard`, `CategoryBreakdown`, `SearchPill`.
- No second component library, and no copying components from another kit's look.

Libraries like MUI or Chakra are not used: they ship their own visual style, and fighting it to match this document would cost more than building on shadcn.

## 10. Design Review with unslop

Every task that changes a screen gets an unslop review before its pull request:

1. Run `/unslop` on the changed page in Claude Code and ask for the audit first, before any edits.
2. Fix every finding that breaks this document. If unslop suggests something that conflicts with this document, this document wins, unless the change is good enough to update the document itself.
3. Mention the review in the pull request description.

## 11. Do's and Don'ts

### Do
- Keep blue for actions and links only.
- Show every risk level as icon + label + color.
- Use neutral wording: "12 people reported…", never "This is a scammer".
- Use the monospace face for every phone number on screen.
- Separate cards with hairlines and the canvas gap, not shadows.
- Check every new color pair for 4.5:1 (text) or 3:1 (marks) in both themes.
- Use lucide icons only, at one size and stroke per context.
- Run an unslop review on every screen before its pull request.

### Don't
- Don't use red, amber, green or violet for anything other than their risk meaning.
- Don't put a red fill on any button.
- Don't use `muted` for text people need to read.
- Don't add a third font weight.
- Don't use emoji in the UI.
- Don't use anything in section 8.4.
- Don't show reporter avatars, names or any personal detail.
- Don't use the source system's brand names, mascot, logo or fonts. Only its design language (layout, spacing, shapes, density) is reused.

# Design system

Rules for any interface generated in this project. They are mandatory: if something doesn't fit, propose a change here instead of skipping them.

## Typography

The "Accessible" pairing: Atkinson Hyperlegible Next for everything (headings, text and UI) + Atkinson Hyperlegible Mono for data and labels. Atkinson was designed by the Braille Institute for maximum legibility: letters that can't be confused (I/l/1, O/0). Values in `globals.css`.

### Usage
- Headings (hero, h1, h2): `font-display`, weight 700, tracking -0.02em.
- Text and UI: `font-sans`. Allowed weights: 400 (text), 500 (buttons, labels, navigation), 600 (emphasis, card titles) and 700 (headings only).
- Hierarchy in UI comes from size and color first (`text-fg` / `text-fg-muted`); weight as support.
- Times, IDs, codes and uppercase labels: `font-mono text-xs uppercase tracking-wider`.
- Tables, prices and counters: `tabular-nums`.
- Paragraphs: `max-w-[65ch]`, line height 1.55. Don't center paragraphs longer than two lines.
- Minimum text size: 14px (`text-sm`). `text-xs` only for mono labels.

### Scale (use ONLY these sizes)
- text-display-2xl: 64px / 66px (font-display)
- text-display-xl: 48px / 49px (font-display)
- text-display-lg: 36px / 40px (font-display)
- text-heading: 28px / 32px (font-display)
- text-title: 20px / 28px, weight 600
- text-lg: 18px / 28px
- text-base: 16px / 24px
- text-sm: 14px / 20px
- text-xs: 12px / 16px (mono, labels)

Don't use arbitrary sizes (`text-[17px]`). If a new one is needed, propose it and add it here.

### Forbidden
- Inter, Roboto or system-ui as a visible font.
- `font-light` and thinner in UI text; `font-extrabold` and `font-black`.
- More than three different weights on one screen.
- Gradient text (`bg-clip-text`).
- Emojis in headings, buttons or labels.
- Body text under 14px.

## Color

Neutral "Papel" (gray with an 85° hue, tint 8) + accent "Cian" (#0099C6). Light and dark mode with the same tokens; values in `globals.css`.

### Semantic tokens (use ONLY these)
- Backgrounds: `bg` (page), `surface` (panels, cards, tables).
- Borders: `line` (dividers), `line-strong` (inputs, secondary buttons).
- Text: `fg` (primary), `fg-muted` (secondary), `fg-subtle` (labels, metadata).
- Accent: `accent` (primary button background), `accent-hover`, `accent-fg` (text on accent), `accent-soft` (selected row, highlight), `accent-text` (links, highlighted words, focus).
- States: `success`, `warning`, `danger` and their `*-soft` variants for backgrounds.

### Usage
- Neutrals for 90% of the screen. The accent only on: the primary action, selection, focus and the odd detail.
- A single `bg-accent` action per view.
- For colored text always use `text-accent-text`, never `text-accent`.
- Text on `bg-accent` is dark (`text-accent-fg`), never white.
- The accent has low contrast against the background: the primary button always gets `border border-line-strong` in light mode.
- States use a soft background + text, and always a word or icon besides the color.

### Forbidden
- Tailwind's default palette classes (`slate-*`, `gray-*`, `blue-*`, `purple-*`…). They don't exist in this project.
- Gradients of any kind.
- Loose hex colors in components.

## Spacing, radii and borders

"Normal" density, 6px radius, "Lines" separation, "Only what floats" shadows. Values in `globals.css`.

### Spacing
- 4px base. Use only Tailwind's scale in multiples of 4 (`1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24`). No `p-[13px]` or `mt-7`.
- Semantic tokens (use them instead of loose numbers):
  - `control-h`: 40px. Height of buttons, inputs and selects.
  - `control-x`: 14px. Horizontal button padding.
  - `card-p`: 24px. Inner padding of cards, modals and panels.
  - `stack`: 16px. Gap between form fields.
  - `gap`: 20px. Gap between cards or columns.
  - `row-h`: 44px. Row height in tables and lists.
  - `section`: 80px. Vertical gap between page sections.
- Less space inside a component than between components. Between sections, much more (`section`).
- Reading content with a max width (`max-w-[65ch]`); app layouts up to `max-w-7xl`.

### Radii
- `rounded-sm` (3px): tags, checkboxes, menu items.
- `rounded` (6px): inputs, menus and buttons.
- `rounded-lg` (9px): cards and modals.
- Don't mix radii outside these three. Nested elements: the inner one is never rounder than the outer one.

### Borders and separation
- Separate with 1px borders (`border border-line`). Cards use `bg-surface` and a border; no colored backgrounds to separate things.

### Shadows
- No shadows on cards. Only what floats (menus, popovers, modals, toasts) uses `shadow-float`.

### Forbidden
- `rounded-2xl`, `rounded-3xl` or `rounded-full` on cards and buttons.
- `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`.
- Cards inside cards with both border and shadow.
- Uniform spacing across the whole page: hierarchy is also built with space.

## Components

Always use these recipes. If a component isn't here, build it with the same tokens and propose adding it.

### Buttons
- Primary: "Accent fill". Only one per view.
- Secondary: "Tone". Ghost for tertiary actions (close, cancel in toolbars).
- Danger: `danger` background, only to confirm destructive actions (usually inside a modal).
- With icon: 16px icon to the left of the text. Icon-only button: square (`w-control`) and always with `aria-label`.
- Loading: 14px spinner + "-ing" text ("Saving…"), button disabled.
- Sizes: normal (`h-control`, 40px) and small (32px) for tables and toolbars. There is no large button.

### Forms
- Inputs: "Filled". Label above, always visible (never just a placeholder), `text-sm font-medium`.
- Help text below in `text-sm text-fg-subtle`. Error: `danger` border + message with an icon below. Never color alone.
- Checkbox, radio and switch: "Accent". Switch only for settings that apply instantly; checkbox for forms with a "Save" button.

### Focus
- "Accent ring" on every interactive element with `:focus-visible`. Never `outline-none` without an alternative.

### Data
- Tables: "Zebra". Small uppercase mono header. Times and IDs in mono. Figures right-aligned with `tabular-nums`. Selected row with `bg-accent-soft` and a 2px bar on the left.
- Status tags: "Soft background". Always with text, never just color.
- Tabs: "Underline". With a mono counter when useful.

### Alerts and floating elements
- In-page alerts: "Soft background".
- Menus, popovers, modals and toasts: `bg-surface` + border + `shadow-float` (toasts in ink: `bg-fg text-bg`).
- Destructive modals: title as a concrete question ("Cancel X's booking?"), text with the consequence, buttons "Keep it" + the action in `danger`.

### Icons
- Library: Phosphor (`@phosphor-icons/react`), regular style. 16px in buttons and menus, 18–20px standalone. Color inherited from the text.
- Never icons inside colored squares or circles. Never emojis as icons.
- Don't mix libraries.

### Component copy
- Buttons with verb + object: "Save booking", "Send SMS". No "Submit", "OK" or "Yes".
- Concrete messages with real data ("Booking moved to T4"), not generic ones ("Operation completed successfully!").
- No exclamation marks or emojis.

### Tailwind recipes

Exact classes for each component (`bg-line/55` is the fill gray).

```
/* Tailwind v4 recipes — they use the tokens in globals.css */

BUTTON (base)   inline-flex items-center justify-center gap-2 h-control px-control-x rounded text-sm font-medium whitespace-nowrap transition-colors disabled:opacity-45 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text
  primary       bg-accent text-accent-fg border border-line-strong dark:border-accent hover:bg-accent-hover
  secondary     bg-line/55 text-fg hover:bg-line
  ghost         text-fg-muted hover:bg-line/55 hover:text-fg
  danger        bg-danger text-bg hover:brightness-95
  icon only     w-control px-0
  small         h-8 px-2.5 text-[13px]

INPUT           h-control w-full text-[15px] text-fg placeholder:text-fg-subtle disabled:opacity-50 px-3 rounded border border-transparent bg-line/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text
  error         border-danger bg-danger-soft  + message: text-sm text-danger with icon
  label         text-sm font-medium
  help          text-sm text-fg-subtle
CHECKBOX        size-[18px] appearance-none rounded-sm border border-line-strong bg-bg checked:bg-accent checked:border-accent-text (check mark in text-accent-fg)
SWITCH on       bg-accent border border-accent-text (knob bg-accent-fg)

TABLE           w-full text-sm tabular-nums · container: border border-line rounded-lg bg-surface overflow-auto
  th            h-9 px-4 text-left font-mono text-[10.5px] uppercase tracking-wider text-fg-subtle font-normal border-b border-line
  tr            even:bg-line/55 hover:bg-accent-soft
  td            h-row px-4 whitespace-nowrap · times and IDs: font-mono text-fg-muted
TAG             inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium · ok: bg-success-soft text-success · warning: bg-warning-soft text-warning · error: bg-danger-soft text-danger · neutral: bg-line/55 text-fg-muted
TABS            list: flex gap-6 border-b border-line · tab: h-10 -mb-px border-b-2 border-transparent text-sm font-medium text-fg-muted aria-selected:border-fg aria-selected:text-fg

ALERT           flex gap-3 items-start px-3.5 py-3 text-sm · title font-semibold · text text-fg-muted · rounded · error: bg-danger-soft · warning: bg-warning-soft · ok: bg-success-soft · info: bg-accent-soft · icon in the state color
MENU            bg-surface border border-line rounded shadow-float p-1.5 min-w-60 · item: flex items-center gap-2.5 px-2.5 py-2 rounded-sm text-sm hover:bg-accent-soft · destructive: text-danger
MODAL           backdrop: bg-fg/30 · panel: bg-surface border border-line rounded-lg shadow-float max-w-md · header p-card pb-2 (title text-xl font-semibold) · footer: flex justify-end gap-2 p-card pt-5
TOAST           bg-fg text-bg rounded shadow-float px-3.5 py-2.5 text-sm flex items-center gap-3 · action: underlined text button

ICONS           @phosphor-icons/react · size 16 in buttons, 18–20 standalone
```

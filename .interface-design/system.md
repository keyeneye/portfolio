# Midnight Terminal Design System

## Direction
Dark, atmospheric interface inspired by late-night coding sessions. The feeling of a developer's monitor glowing in a dark room. Dynamic interactions with glow effects that demonstrate frontend expertise.

## Signature
**Glow effects** — Interactive elements emit a subtle cyan glow on hover, like code coming alive. Buttons lift and glow. Cards reveal inner light. The cursor blinks. Everything feels electric but controlled.

## Color Palette

### Void (Backgrounds)
- `--void: #050505` — Deepest black
- `--void-soft: #0a0a0b` — Code block background
- `--surface: #111113` — Card/panel background
- `--surface-raised: #18181b` — Elevated elements
- `--surface-bright: #27272a` — Hover states

### Light (Text)
- `--light: #fafafa` — Primary text
- `--light-muted: #a1a1aa` — Secondary text
- `--light-subtle: #71717a` — Labels, hints

### Strokes (Borders)
- `--stroke: #27272a` — Default borders
- `--stroke-subtle: #1c1c1f` — Subtle separators
- `--stroke-glow: #3f3f46` — Hover state borders

### Syntax Colors (Purposeful Accents)
- `--syntax-cyan: #22d3ee` — Primary accent, links, CTAs
- `--syntax-green: #4ade80` — Success, "current", available
- `--syntax-violet: #a78bfa` — Keywords, secondary accent
- `--syntax-orange: #fb923c` — Warnings, highlights
- `--syntax-pink: #f472b6` — Tertiary accent

### Semantic
- `--success: var(--syntax-green)`
- `--warning: var(--syntax-orange)`
- `--error: #f87171`

## Glow System
```css
--glow-sm: 0 0 10px;
--glow-md: 0 0 20px;
--glow-lg: 0 0 30px;
--accent-glow: rgba(34, 211, 238, 0.4);
```

## Depth Strategy
**Borders + Glow** — Subtle borders by default, glow effects on interaction:
- Cards: `border-stroke` → `border-accent` + `box-shadow: glow-md`
- Buttons: Lift (`translateY(-2px)`) + glow on hover
- All transitions: 200-300ms for smooth feel

## Spacing
Base unit: 4px
Section padding: `py-24`
Container: `max-w-6xl`
Card padding: `p-6`

## Typography
- **Headlines**: Geist Sans, semibold/bold, tight tracking
- **Body**: Geist Sans, regular, relaxed leading
- **Code**: Geist Mono, syntax-colored

## Border Radius
- `rounded-lg` (8px) — Buttons, tags
- `rounded-xl` (12px) — Cards, large panels
- `rounded-full` — Pills, dots

## Component Patterns

### Buttons
- **Primary**: Solid cyan, void text, lifts + glows on hover
- **Secondary**: Transparent, stroke border, glows cyan on hover
- **Ghost**: No border, subtle bg on hover

### Cards
- Surface bg, stroke border
- Hover: border-glow or border-accent + outer glow
- `card-glow` variant for stronger effect

### Tags
- Surface-raised bg, subtle border
- Colored variants: `tag-accent`, `tag-success`, `tag-violet`
- Hover: border glows

### Section Headers
- Gradient line before title
- Accent-colored keywords

## Animations
- `fadeInUp` — Entry animation (0.5s)
- `pulse` — Status indicators
- `glow` — Pulsing glow effect
- `float` — Gentle up/down
- `blink` — Cursor effect
- Stagger classes: `.stagger-1` through `.stagger-5`

## Special Effects
- **Glass**: `backdrop-blur-md` + semi-transparent bg
- **Gradient orbs**: Blurred accent circles for hero background
- **Gradient lines**: Section dividers with fading edges
- **Text gradient**: Cyan → Violet for emphasis

## Layout
- Max width: `max-w-6xl` (72rem)
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Section padding: `py-24`
- Navbar: Transparent → Glass on scroll

## Interactive Features
- Skills: Filterable by category with color-coded glow
- Timeline: Alternating layout with animated dots
- Scroll indicator: Floating animation
- Navbar: Appears on scroll with glass effect

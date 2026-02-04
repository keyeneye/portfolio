# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 portfolio website with React 19, TypeScript, Prisma ORM (SQLite), and Tailwind CSS 4. Data is stored in a database, not hardcoded. Organized using feature-based clean architecture with repository pattern.

## Commands

```bash
npm run dev              # Development server (port 3000)
npm run build            # Production build
npm run lint             # Run ESLint
npm run test             # Run Jest tests
npm run test:watch       # Jest watch mode
npm run test:coverage    # Generate coverage reports
npm run db:seed          # Seed database with initial data
```

**Database setup**: `npx prisma db push && npm run db:seed`

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router (Server Components by default)
- `src/features/` - Feature modules, each with domain/data/presentation layers:
  - `profile/` - Profile entity, repository, Hero and Contact components
  - `projects/` - Project entity, repository, Projects component
  - `skills/` - Skill entity, repository, Skills component
  - `experience/` - Experience entity, repository, Experience component
- `src/shared/` - Shared code across features:
  - `components/layout/` - Navbar, Footer, Layout, SkipLink
  - `components/ui/` - Base components (Icon)
  - `hooks/` - Custom hooks (useScroll, useIntersectionObserver)
  - `utils/` - Utilities (cn, date, constants)
  - `infrastructure/` - Prisma client singleton
- `src/config/site.ts` - Site configuration (navigation, social links)
- `prisma/` - Database schema and seed script

### Feature Structure

Each feature follows this pattern:
- `domain/` - Entity interface and repository interface (port)
- `data/` - Prisma repository implementation (adapter)
- `presentation/` - React components
- `index.ts` - Barrel exports

### Data Flow

1. Homepage (`src/app/page.tsx`) is the composition root (async Server Component)
2. Imports repository instances and components from feature barrels
3. Calls repository methods to fetch data from SQLite via Prisma
4. Passes data as props to presentation components
5. Four main models: Profile, Project, Skill, Experience

### Path Aliases

Use `@/*` to import from `./src/*` (e.g., `import { cn } from '@/shared/utils/cn'`)

## Testing

- Jest with React Testing Library
- Test files: `__tests__/**/*.[jt]s?(x)` or `*.{spec,test}.[jt]s?(x)`
- Next.js navigation mocked in `jest.setup.ts`

## Key Patterns

- **Feature-based architecture** - each feature owns its domain, data, and presentation
- **Repository pattern** - domain defines contracts, data provides Prisma implementations
- **Server Components** for data fetching (no "use client" unless needed)
- **Composition root** - `page.tsx` wires repositories to components
- Prisma singleton pattern in `src/shared/infrastructure/prisma.ts`
- Tailwind CSS 4 via PostCSS
- `cn()` utility for conditional class names (`src/shared/utils/cn.ts`)
- Icon system with lucide-react (`src/shared/components/ui/Icon.tsx`)

## Implemented Features

- **Performance**: `next/image` in Projects.tsx, `prefers-reduced-motion` CSS
- **Accessibility**: SkipLink, aria-labels, landmark regions, focus-visible styles
- **Utilities**: `formatDate`, `getDuration` in `src/shared/utils/date.ts`
- **Hooks**: `useScroll`, `useIntersectionObserver` in `src/shared/hooks/`

## Pending Items (from ARCHITECTURE.md)

- Dark mode (next-themes not installed)
- Test coverage ~10% (goal: 70%)
- ScrollReveal component (hook exists, not integrated)
- Dynamic SEO metadata (`generateMetadata()`)
- Husky pre-commit hooks
- Extended ESLint (jsx-a11y, react-hooks plugins)
- i18n, Blog, Sitemap

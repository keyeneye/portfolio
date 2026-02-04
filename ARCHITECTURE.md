# Portfolio - Plan de Mejoras y Documentación Técnica

> Última actualización: 16 Enero 2026
> Mantenedor: Frontend Team

---

## 📊 Estado Actual del Proyecto

### Stack Tecnológico

| Tecnología | Versión | Estado |
|------------|---------|--------|
| Next.js | 16.1.3 | ✅ Actualizado |
| React | 19.2.3 | ✅ Actualizado |
| TypeScript | 5.x | ✅ Actualizado |
| Tailwind CSS | 4.x | ✅ Actualizado |
| Prisma | 5.22.0 | ✅ Actualizado |
| ESLint | 9.x | ⚠️ Básico |

### Estructura del Proyecto

```
portfolio/
├── prisma/
│   ├── schema.prisma          # Modelos de datos
│   └── seed.ts                # Datos de ejemplo
├── src/
│   ├── app/
│   │   ├── page.tsx           # Página principal
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Estilos globales
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Experience.tsx
│   │       └── Contact.tsx
│   ├── config/
│   │   └── site.ts            # Configuración del sitio
│   ├── services/
│   │   └── portfolio.ts       # Servicios de datos
│   ├── lib/
│   │   └── prisma.ts          # Cliente Prisma
│   └── types/
│       └── index.ts           # Tipos TypeScript
├── public/                    # Assets estáticos
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── eslint.config.mjs
```

---

## 🚨 Problemas Críticos Identificados

### 1. Rendimiento (Performance)

| Problema | Impacto | Severidad | Estado |
|----------|---------|-----------|--------|
| ~~Uso de `<img>` nativo~~ | ~~Sin optimización automática de imágenes~~ | ~~🔴 Alta~~ | ✅ Resuelto |
| ~~SVGs inline~~ | ~~Bundle size mayor, sin reuse~~ | ~~🟡 Media~~ | ✅ Resuelto (lucide-react) |
| Sin lazy loading | Hook existe pero no integrado | 🟡 Media | ⚠️ Parcial |
| ~~Animaciones CSS sin `prefers-reduced-motion`~~ | ~~Problemas de accesibilidad~~ | ~~🟡 Media~~ | ✅ Resuelto |

**Estado actual:**
- ✅ `next/image` implementado en Projects.tsx con sizes responsivos y formatos avif/webp
- ✅ Sistema de iconos con lucide-react y componente Icon type-safe
- ⚠️ `useIntersectionObserver` hook existe pero no está integrado con ScrollReveal
- ✅ `prefers-reduced-motion` implementado en globals.css

### 2. Accesibilidad (WCAG 2.1 AA)

| Problema | WCAG | Severidad | Estado |
|----------|------|-----------|--------|
| ~~Falta skip-link~~ | ~~2.4.1~~ | ~~🔴 Alta~~ | ✅ Resuelto |
| ~~Sin aria-labels~~ | ~~1.1.1~~ | ~~🔴 Alta~~ | ✅ Resuelto |
| Contraste insuficiente | 1.4.3 | 🟡 Media | ⚠️ Pendiente revisión |
| ~~No hay focus visible~~ | ~~2.4.7~~ | ~~🟡 Media~~ | ✅ Resuelto |
| ~~Faltan landmark regions~~ | ~~1.3.1~~ | ~~🟡 Media~~ | ✅ Resuelto |

**Estado actual:**
- ✅ `SkipLink.tsx` implementado con estilos sr-only y focus visible
- ✅ aria-labels en Navbar (`aria-label="Main navigation"`), Contact, Footer, Projects
- ✅ `focus-visible` CSS definido globalmente en globals.css
- ✅ Landmark regions: `<header>`, `<nav>`, `<main role="main">`, `<footer role="contentinfo">`
- ✅ `aria-labelledby` en secciones (Experience, Hero)
- ⚠️ Contraste de colores (white/70) pendiente de revisión

### 3. Calidad de Código

| Problema | Estado Actual | Estado Esperado | Estado |
|----------|---------------|-----------------|--------|
| ~~Duplicación de lógica~~ | ~~`formatDate` en Experience.tsx~~ | ~~Utility function reusable~~ | ✅ Resuelto |
| Hardcoded colors | Algunos componentes | CSS variables system | ⚠️ Parcial |
| ~~Testing framework~~ | ~~❌ No configurado~~ | ~~✅ Jest + RTL~~ | ✅ Configurado |
| Test coverage | ~10% (17 tests) | >70% | ⚠️ En progreso |
| ~~Tipos incompletos~~ | ~~any implícitos~~ | ~~100% strict~~ | ✅ Resuelto |

**Estado actual:**
- ✅ `formatDate` y `getDuration` en `src/lib/utils/date.ts`
- ✅ `cn` utility en `src/lib/utils/cn.ts` (usando clsx)
- ✅ Jest configurado con jsdom, ts-jest, y mocks de Next.js
- ✅ TypeScript strict mode habilitado
- ⚠️ Solo 3 archivos de tests: `cn.test.ts`, `date.test.ts`, `Icon.test.tsx` (17 casos)
- ⚠️ Faltan tests para: Navbar, Layout, Contact, Projects, Skills, Experience, Footer

### 4. DX y Mantenibilidad

| Feature | Estado | Notas |
|---------|--------|-------|
| Pre-commit hooks | ❌ Pendiente | Husky no configurado |
| Storybook | ❌ Pendiente | No hay documentación de componentes |
| ESLint extendido | ⚠️ Básico | Solo usa next/core-web-vitals y next/typescript |
| Prettier | ❌ Pendiente | No configurado |
| Change-log | ⚠️ Parcial | Este archivo sirve como changelog |
| Contributing guide | ⚠️ Parcial | Guidelines en este archivo |

**Acciones pendientes:**
- Instalar `husky` y `lint-staged`
- Configurar Storybook para documentación de componentes
- Extender ESLint con: `eslint-plugin-jsx-a11y`, `eslint-plugin-react-hooks`

### 5. Features Faltantes

| Feature | Prioridad | Complejidad | Estado |
|---------|-----------|-------------|--------|
| Modo dark/light | Alta | Media | ❌ Pendiente |
| i18n (multi-idioma) | Media | Alta | ❌ Pendiente |
| Blog/articles | Media | Media | ❌ Pendiente |
| Scroll animations | Media | Baja | ⚠️ Hook listo, falta integrar |
| SEO metadata dinámico | Alta | Baja | ⚠️ Básico (sin generateMetadata) |
| Analytics | Baja | Baja | ❌ Pendiente |
| Sitemap.xml | Media | Baja | ❌ Pendiente |

**Nota:** El hook `useIntersectionObserver` está implementado en `src/lib/hooks/` pero no se ha creado el componente `ScrollReveal` ni se ha integrado en las secciones.

### 6. Seguridad

| Problema | Riesgo | Acción |
|----------|--------|--------|
| API routes vacías | Medio | Si se habilitan, sin validación |
| No hay rate limiting | Bajo | Implementar si hay endpoints públicos |
| Headers básicos | Medio | CSP, X-Frame-Options, etc. |

---

## 📋 Plan de Implementación

### FASE 1: Fundamentos

**Objetivo:** Establecer base sólida para desarrollo
**Duración:** 1 semana

#### 1.1 Configuración de Testing

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @types/jest
```

**Entregables:**
- [x] `jest.config.ts` configurado
- [x] `jest.setup.ts` con mocks de Next.js
- [ ] Coverage mínimo: 70% (actual: ~10%)
- [ ] Tests unitarios para:
  - [x] Utility functions (`formatDate`, `cn`)
  - [x] Componentes UI (`Icon`)
  - [ ] Secciones principales (`Hero`, `Skills`, etc.)

#### 1.2 ESLint Extendido

```bash
npm install -D eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/eslint-plugin
```

**Configuración recomendada:**

```javascript
// eslint.config.mjs
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
    },
    rules: {
      // Accesibilidad obligatoria
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      
      // React hooks
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  // Configuración de Next.js
  ...next,
);
```

#### 1.3 Utility Functions

```
src/
└── lib/
    ├── utils/
    │   ├── date.ts         # formatDate, parseDate, isCurrent
    │   ├── string.ts       # truncate, capitalize, slugify
    │   ├── validators.ts   # Zod schemas para validación
    │   └── constants.ts    # Constantes reutilizables
    └── hooks/
        ├── useScroll.ts
        └── useIntersectionObserver.ts
```

**Ejemplo de utilidad:**

```typescript
// lib/utils/date.ts
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    ...options,
  });
}

export function getDuration(startDate: Date, endDate?: Date): string {
  const start = new Date(startDate);
  const end = endDate || new Date();
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return remainingMonths > 0 ? `${years}y ${remainingMonths}mo` : `${years}y`;
}
```

---

### FASE 2: Performance y Accesibilidad

**Objetivo:** Optimizar Core Web Vitals y cumplir WCAG 2.1 AA
**Duración:** 1 semana

#### 2.1 Optimizar Imágenes

**Antes:**
```tsx
<img src={project.imageUrl} alt={project.title} />
```

**Después:**
```tsx
import Image from 'next/image';

<Image
  src={project.imageUrl}
  alt={project.title}
  width={400}
  height={225}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL={project.blurDataURL}
  className="object-cover transition-transform duration-300 hover:scale-105"
/>
```

**Configuración requerida en `next.config.ts`:**

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};
```

#### 2.2 Sistema de Iconos

**Instalación:**
```bash
npm install lucide-react
```

**Implementación:**

```tsx
// components/ui/Icon.tsx
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Code,
  Mail,
  ChevronRight
} from 'lucide-react';

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  external: ExternalLink,
  code: Code,
  mail: Mail,
  chevronRight: ChevronRight,
} as const;

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export function Icon({ name, size = 'md', className }: IconProps) {
  const Component = icons[name];
  return <Component size={sizeMap[size]} className={className} />;
}
```

**Uso:**
```tsx
import { Icon } from '@/components/ui/Icon';

<Icon name="github" size="md" className="w-5 h-5" />
```

#### 2.3 Accesibilidad - Fixes Inmediatos

**Skip Link:**
```tsx
// components/layout/SkipLink.tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
    >
      Skip to main content
    </a>
  );
}
```

**Navbar Accesible:**
```tsx
// components/layout/Navbar.tsx
<nav 
  aria-label="Main navigation"
  className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm"
>
  <SkipLink />
  <ul role="menubar" className="flex space-x-1">
    {siteConfig.navigation.map((item) => (
      <li role="none" key={item.id}>
        <Link
          href={`#${item.id}`}
          role="menuitem"
          aria-current={isActive ? 'page' : undefined}
          className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</nav>
```

#### 2.4 Reduced Motion

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Utility class */
@media (prefers-reduced-motion: reduce) {
  .animate-fadeInUp,
  .animate-float,
  .animate-pulse-glow {
    animation: none;
    transform: none;
  }
}
```

#### 2.5 Contraste de Colores

**Revisar y corregir:**

| Elemento | Actual | Problema | Solución |
|----------|--------|----------|----------|
| Text secondary | `white/70` | Ratio 3.1:1 | `white/80` o `gray-300` |
| Footer text | `white/60` | Ratio 2.5:1 | `white/70` o `gray-400` |

---

### FASE 3: Features de UX

**Objetivo:** Mejorar experiencia de usuario
**Duración:** 1 semana

#### 3.1 Dark Mode

**Instalación:**
```bash
npm install next-themes
```

**Proveedor:**
```tsx
// components/providers/ThemeProvider.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: 'class' | 'data-theme';
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**Wrapper del layout:**
```tsx
// app/providers.tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

**Toggle component:**
```tsx
// components/layout/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
```

**Tailwind v4 CSS Variables:**
```css
/* globals.css */
@plugin "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: #F8FAFC;
  --foreground: #020617;
  --primary: #0F172A;
  --primary-hover: #1E293B;
  --secondary: #2563EB;
  --secondary-hover: #1D4ED8;
  --accent: #38BDF8;
  --muted: #94A3B8;
  --surface: #FFFFFF;
  --border: #E5E7EB;
}

.dark {
  --background: #020617;
  --foreground: #F8FAFC;
  --primary: #F8FAFC;
  --primary-hover: #E2E8F0;
  --secondary: #3B82F6;
  --secondary-hover: #60A5FA;
  --accent: #38BDF8;
  --muted: #64748B;
  --surface: #0F172A;
  --border: #1E293B;
}
```

#### 3.2 Scroll Animations

**Hook de Intersection Observer:**
```tsx
// lib/hooks/useIntersectionObserver.ts
'use client';

import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const [ref, setRef] = useState<Element | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(ref);
        } else {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, triggerOnce]);

  return { ref: setRef, isInView };
}
```

**Componente ScrollReveal:**
```tsx
// components/ui/ScrollReveal.tsx
'use client';

import { useInView } from '@/lib/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const directionStyles = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-0' : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
```

#### 3.3 SEO Metadata Dinámico

```tsx
// app/page.tsx
import { Metadata } from 'next';
import { getPortfolioData } from '@/services/portfolio';

export async function generateMetadata(): Promise<Metadata> {
  const { profile } = await getPortfolioData();
  
  return {
    title: {
      default: `${profile?.name || 'Portfolio'} - ${profile?.title || 'Frontend Developer'}`,
      template: '%s | Portfolio',
    },
    description: profile?.bio || 'Frontend Developer portfolio',
    metadataBase: new URL('https://tudominio.com'),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://tudominio.com',
      siteName: 'Portfolio',
      title: `${profile?.name || 'Portfolio'} - ${profile?.title || 'Frontend Developer'}`,
      description: profile?.bio || 'Frontend Developer portfolio',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Portfolio OG Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${profile?.name || 'Portfolio'} - ${profile?.title || 'Frontend Developer'}`,
      description: profile?.bio || 'Frontend Developer portfolio',
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
```

---

### FASE 4: Arquitectura y DX

**Objetivo:** Mejorar mantenibilidad y developer experience
**Duración:** 1 semana

#### 4.1 Sistema de Diseño

```
src/
├── components/
│   ├── ui/                    # Componentes base (atoms)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Avatar.tsx
│   │   └── Icon.tsx
│   ├── sections/              # Secciones de página (molecules)
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── layout/                # Componentes de layout (organisms)
│       ├── Layout.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── ThemeToggle.tsx
├── hooks/                     # Custom hooks
│   ├── useScroll.ts
│   ├── useIntersectionObserver.ts
│   ├── useLocalStorage.ts
│   └── useDebounce.ts
├── providers/                 # Context providers
│   ├── ThemeProvider.tsx
│   └── QueryProvider.tsx
├── config/                    # Configuraciones
│   ├── site.ts
│   ├── constants.ts
│   └── categories.ts
├── lib/
│   ├── utils/
│   │   ├── cn.ts              # classNames utility
│   │   ├── date.ts
│   │   └── string.ts
│   ├── prisma.ts
│   └── validators.ts
└── types/                     # Tipos compartidos
    └── index.ts
```

**Utility de clases:**
```typescript
// lib/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

#### 4.2 Componentes UI Base

**Button:**
```tsx
// components/ui/Button.tsx
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-secondary text-white hover:bg-secondary-hover',
  outline: 'border border-border bg-transparent hover:bg-muted',
  ghost: 'bg-transparent hover:bg-muted',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
          'focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

**Card:**
```tsx
// components/ui/Card.tsx
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-surface rounded-xl p-6 border border-border',
          hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
```

#### 4.3 Storybook

```bash
npx storybook@latest init
```

**Configuración de Tailwind:**
```javascript
// .storybook/preview.ts
import '../src/app/globals.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
    },
  },
};

export default preview;
```

**Ejemplo de Story:**
```tsx
// components/ui/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};
```

#### 4.4 Pre-commit Hooks

```bash
npm install -D husky lint-staged
npx husky install
```

**Configuración:**
```json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,yaml,yml}": [
      "prettier --write"
    ]
  }
}
```

**Git hooks:**
```bash
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

```bash
# .husky/commit-msg
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx commitlint --edit $1
```

---

### FASE 5: Funcionalidades Avanzadas

**Objetivo:** Añadir features de alto valor
**Duración:** 2 semanas

#### 5.1 i18n (next-intl)

```bash
npm install next-intl
```

**Estructura:**
```
src/
├── app/
│   └── [locale]/
│       ├── page.tsx
│       └── layout.tsx
├── messages/
│   ├── en.json
│   └── es.json
└── i18n/
    └── request.ts
```

**Configuración:**
```typescript
// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

**Middleware:**
```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(en|es)/:path*'],
};
```

#### 5.2 Blog/Articles

**Modelo Prisma:**
```prisma
model Post {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  excerpt     String
  content     String   @db.Text
  coverImage  String?
  published   Boolean  @default(false)
  publishedAt DateTime?
  authorId    String
  author      Author   @relation(fields: [authorId], references: [id])
  tags        Tag[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Author {
  id        String   @id @default(cuid())
  name      String
  bio       String?
  avatarUrl String?
  posts     Post[]
}

model Tag {
  id    String @id @default(cuid())
  name  String @unique
  posts Post[]
}
```

#### 5.3 Sitemap y RSS

**next-sitemap.config.js:**
```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tudominio.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/private/' },
    ],
  },
};
```

**RSS Feed:**
```typescript
// app/rss.xml/route.ts
import { getBlogPosts } from '@/services/blog';

export async function GET() {
  const posts = await getBlogPosts();
  
  const rss = `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Portfolio Blog</title>
        <link>https://tudominio.com</link>
        <description>Frontend Developer Blog</description>
        <language>en</language>
        ${posts.map(post => `
          <item>
            <title>${post.title}</title>
            <link>https://tudominio.com/blog/${post.slug}</link>
            <description>${post.excerpt}</description>
            <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          </item>
        `).join('')}
      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
```

---

## 📊 KPIs de Éxito

### Métricas de Performance

| Métrica | Actual | Objetivo | Herramienta |
|---------|--------|----------|-------------|
| Lighthouse Performance | ~75 | >90 | Lighthouse CI |
| Lighthouse Accessibility | ~70 | >95 | Lighthouse CI |
| Lighthouse Best Practices | ~80 | >95 | Lighthouse CI |
| Lighthouse SEO | ~85 | >95 | Lighthouse CI |
| First Contentful Paint | ~1.2s | <0.8s | Web Vitals |
| Largest Contentful Paint | ~2.0s | <1.5s | Web Vitals |
| Cumulative Layout Shift | ~0.1 | <0.1 | Web Vitals |
| Time to Interactive | ~2.5s | <1.5s | Web Vitals |

### Métricas de Código

| Métrica | Actual | Objetivo | Estado |
|---------|--------|----------|--------|
| Test Coverage | ~10% | >70% | ⚠️ En progreso |
| TypeScript Strict | 100% | 100% | ✅ Completado |
| ESLint Errors | warnings | 0 errors | ⚠️ Config básica |
| Bundle Size (Gzipped) | ~150KB | <100KB | Pendiente medir |

---

## 🗺️ Roadmap de Migración

```
Semana 1  │████████████████████████│ FASE 1: Fundamentos
           Testing, ESLint, Utils

Semana 2  │████████████████████████│ FASE 2: Performance & A11y
           Images, Icons, WCAG

Semana 3  │████████████████████████│ FASE 3: UX Features
           Dark Mode, Scroll Animations

Semana 4  │████████████████████████│ FASE 4: Arquitectura
           Design System, Storybook, Hooks

Semana 5-6│████████████████████████│ FASE 5: Advanced
           i18n, Blog, SEO
```

---

## 🎯 Acciones Inmediatas (Sprint Actual)

### Alta Prioridad - COMPLETADO ✅

- [x] Implementar `next/image` en Projects.tsx
- [x] Añadir skip-link y aria-labels en Navbar
- [x] Configurar Jest y escribir primeros tests
- [ ] Corregir contraste de colores (white/70 → white/80)

### Media Prioridad - PARCIALMENTE COMPLETADO

- [x] Implementar sistema de iconos con lucide-react
- [ ] Configurar ThemeProvider para dark mode
- [ ] Añadir pre-commit hooks con husky
- [x] Crear utility functions (cn, formatDate)

### Baja Prioridad (Siguiente Sprint)

- [ ] Configurar Storybook
- [ ] Implementar i18n
- [ ] Añadir Blog section
- [ ] Generar sitemap.xml

### Nuevas Tareas Identificadas

- [ ] Aumentar test coverage (objetivo: 70%)
- [ ] Integrar `useIntersectionObserver` con ScrollReveal
- [ ] Implementar `generateMetadata()` dinámico en page.tsx
- [ ] Extender ESLint con plugins de a11y y react-hooks

---

## 📚 Recursos y Referencias

### Documentación Oficial

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Next Intl](https://next-intl-docs.vercel.app)

### Guías de Estilo

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusable-patterns)
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)

### Herramientas

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- [Web Vitals](https://web.dev/vitals/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Can I Use](https://caniuse.com)

---

## 🤝 Contribución

### Guidelines para PRs

1. Asegurar que los tests pasen
2. Verificar que no hay ESLint errors
3. Añadir tests para nuevas funcionalidades
4. Actualizar documentación si es necesario
5. Mantener mensajes de commit descriptivos

### Formato de Commits

```
feat: add dark mode toggle
fix: resolve accessibility issue on navbar
docs: update project roadmap
refactor: extract formatDate utility
test: add tests for Experience component
chore: configure husky pre-commit hooks
```

---

## 🔄 Changelog

### v0.2.0 (En Desarrollo)

#### Added
- ✅ Plan de mejoras documentado
- ✅ Configuración de Jest con React Testing Library
- ✅ Sistema de iconos con lucide-react (`Icon.tsx`)
- ✅ Componente `SkipLink` para accesibilidad
- ✅ Utility functions: `cn`, `formatDate`, `getDuration`
- ✅ Custom hooks: `useScroll`, `useIntersectionObserver`
- ✅ Tests unitarios para utilities y Icon component

#### Changed
- ✅ Migración de `<img>` a `next/image` en Projects.tsx
- ✅ Navbar con aria-labels y roles ARIA completos
- ✅ Footer con semantic markup y landmark regions
- ✅ globals.css con `prefers-reduced-motion` y `focus-visible`

#### Pending
- ⏳ Dark mode con next-themes
- ⏳ Test coverage >70%
- ⏳ ScrollReveal component integration
- ⏳ Dynamic SEO metadata
- ⏳ Husky pre-commit hooks
- ⏳ Extended ESLint configuration

---

> Este documento será actualizado regularmente. Última revisión: 16 Enero 2026

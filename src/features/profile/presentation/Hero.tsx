"use client";

import Link from "next/link";
import { Icon } from "@/shared/components/ui/Icon";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  email: string;
}

export default function Hero({ name, title, bio, email }: HeroProps) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-stroke mb-8 animate-fadeInUp">
            <span className="w-2 h-2 rounded-full bg-syntax-green animate-pulse" />
            <span className="text-sm text-light-muted font-mono">
              Available for new projects
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp stagger-1"
          >
            <span className="text-light">Hi, I&apos;m </span>
            <span className="text-gradient">{name}</span>
            <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 animate-blink align-middle" />
          </h1>

          {/* Title with syntax highlighting style */}
          <h2 className="text-xl sm:text-2xl mb-6 font-mono animate-fadeInUp stagger-2">
            <span className="text-syntax-violet">const</span>{" "}
            <span className="text-syntax-cyan">role</span>{" "}
            <span className="text-light-muted">=</span>{" "}
            <span className="text-syntax-green">&quot;{title}&quot;</span>
            <span className="text-light-muted">;</span>
          </h2>

          {/* Bio */}
          <p className="text-lg text-light-muted mb-10 leading-relaxed max-w-2xl animate-fadeInUp stagger-3">
            {bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fadeInUp stagger-4">
            <Link
              href="#projects"
              className="btn-primary group"
              aria-label="View my projects"
            >
              <span>View Projects</span>
              <Icon name="arrowRight" size="sm" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`mailto:${email}`}
              className="btn-secondary group"
              aria-label={`Send email to ${email}`}
            >
              <Icon name="mail" size="sm" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Tech stack preview */}
          <div className="mt-16 pt-8 border-t border-stroke animate-fadeInUp stagger-5">
            <p className="text-sm text-light-subtle mb-4 uppercase tracking-wider">
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Next.js", "Node.js", "Tailwind"].map((tech, i) => (
                <span
                  key={tech}
                  className="tag hover:border-glow transition-all duration-300"
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-light-subtle">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <Icon name="chevronDown" size="sm" />
        </div>
      </div>
    </section>
  );
}

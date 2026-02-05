"use client";

import Link from "next/link";
import { Icon } from "@/shared/components/ui/Icon";
import { HeroProps } from "../domain/Profile";



export default function Hero({ name, title, bio, email }: HeroProps) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-accent/20 rounded-full blur-[48px] sm:blur-[64px] md:blur-[96px] lg:blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-secondary/20 rounded-full blur-[48px] sm:blur-[64px] md:blur-[96px] lg:blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
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
          <p className="text-base sm:text-lg text-light-muted mb-8 sm:mb-10 leading-relaxed max-w-2xl animate-fadeInUp stagger-3">
            {bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 animate-fadeInUp stagger-4">
            <Link
              href="#projects"
              className="btn-primary group justify-center"
              aria-label="View my projects"
            >
              <span>View Projects</span>
              <Icon name="arrowRight" size="sm" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`mailto:${email}`}
              className="btn-secondary group justify-center"
              aria-label={`Send email to ${email}`}
            >
              <Icon name="mail" size="sm" />
              <span>Get in Touch</span>
            </a>
          </div>         
        </div>
      </div>
    </section>
  );
}

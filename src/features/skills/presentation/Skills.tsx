"use client";

import { Skill } from "../domain/Skill";
import { useState } from "react";

interface SkillsProps {
  skills: Skill[];
}

const categoryColors: Record<string, { text: string; bg: string; glow: string }> = {
  Frontend: { text: "text-syntax-cyan", bg: "bg-accent-muted", glow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]" },
  Backend: { text: "text-syntax-green", bg: "bg-success-muted", glow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]" },
  Tools: { text: "text-syntax-violet", bg: "bg-secondary-muted", glow: "hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]" },
  Database: { text: "text-syntax-orange", bg: "bg-warning/10", glow: "hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]" },
  Other: { text: "text-syntax-pink", bg: "bg-syntax-pink/10", glow: "hover:shadow-[0_0_20px_rgba(244,114,182,0.3)]" },
};

export default function Skills({ skills }: SkillsProps) {
  const categories = [...new Set(skills.map((skill) => skill.category))];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const getColors = (category: string) => {
    return categoryColors[category] || categoryColors.Other;
  };

  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-raised/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stroke to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header animate-fadeInUp">
          <h2 className="section-title">
            Skills & <span className="accent">Technologies</span>
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === null
                ? "bg-accent text-void"
                : "bg-surface text-light-muted hover:text-light border border-stroke hover:border-stroke-glow"
            }`}
          >
            All
          </button>
          {categories.map((category) => {
            const colors = getColors(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? `${colors.bg} ${colors.text}`
                    : "bg-surface text-light-muted hover:text-light border border-stroke hover:border-stroke-glow"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSkills.map((skill, index) => {
            const colors = getColors(skill.category);
            return (
              <div
                key={skill.id}
                className={`group relative p-4 rounded-xl bg-surface border border-stroke transition-all duration-300 hover:border-transparent hover:-translate-y-1 ${colors.glow} animate-fadeInUp`}
                style={{ animationDelay: `${0.1 + index * 0.03}s` }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <span className={`text-2xl ${colors.text} transition-transform duration-300 group-hover:scale-110`}>
                    {"</>"}
                  </span>
                  <span className="text-sm font-medium text-light">
                    {skill.name}
                  </span>
                  <span className={`text-xs ${colors.text} opacity-60`}>
                    {skill.category}
                  </span>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

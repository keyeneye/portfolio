import { Experience } from "../domain/Experience";
import { formatDate } from "@/shared/utils/date";
import { Icon } from "@/shared/components/ui/Icon";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="relative py-24"
      aria-labelledby="experience-title"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stroke to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header animate-fadeInUp">
          <h2 id="experience-title" className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-stroke to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 animate-fadeInUp ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 mt-1">
                  <div className={`w-full h-full rounded-full border-2 ${
                    exp.current
                      ? "bg-accent border-accent animate-pulse"
                      : "bg-surface border-stroke"
                  }`} />
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-accent/50 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="card group hover:border-accent/50 transition-all duration-300">
                    <div className={`flex flex-col sm:flex-row sm:items-start gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse md:text-left" : ""}`}>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-light group-hover:text-accent transition-colors duration-200">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-syntax-violet">
                          <Icon name="briefcase" size="sm" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <span className="tag">
                          <Icon name="calendar" size="sm" className="mr-1" />
                          {formatDate(exp.startDate)} — {exp.current ? "Present" : exp.endDate ? formatDate(exp.endDate) : "Present"}
                        </span>
                        {exp.current && (
                          <span className="tag-success flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-syntax-green animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <p className={`text-light-muted text-sm leading-relaxed ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

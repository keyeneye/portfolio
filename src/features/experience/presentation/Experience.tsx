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
            {/* Vertical line - hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-stroke to-transparent -translate-x-px" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 animate-fadeInUp ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 -translate-x-1/2 mt-1">
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
                  <div className={`flex-1 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="card group hover:border-accent/50 transition-all duration-300">
                      <div className={`flex flex-col gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse md:text-left md:items-start" : "md:flex-row md:items-start"}`}>
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-semibold text-light group-hover:text-accent transition-colors duration-200">
                            {exp.position}
                          </h3>
                          <div className={`flex items-center gap-2 text-syntax-violet mt-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                            <Icon name="briefcase" size="sm" />
                            <span className="font-medium text-sm md:text-base">{exp.company}</span>
                          </div>
                        </div>
                        <div className={`flex flex-wrap items-center gap-2 shrink-0 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <span className="tag text-xs md:text-sm">
                            <Icon name="calendar" size="sm" className="mr-1" />
                            {formatDate(exp.startDate)} — {exp.current ? "Present" : exp.endDate ? formatDate(exp.endDate) : "Present"}
                          </span>
                          {exp.current && (
                            <span className="tag-success flex items-center gap-1 text-xs md:text-sm">
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

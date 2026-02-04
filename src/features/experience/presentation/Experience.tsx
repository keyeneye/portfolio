import { Experience } from "../domain/Experience";
import { formatDate } from "@/shared/utils/date";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-[#F8FAFC]" aria-labelledby="experience-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="experience-title" className="section-title">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="card animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {exp.position}
                  </h3>
                  <p className="text-[#2563EB] font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#F1F5F9] text-[#0F172A]/60 text-xs rounded-md">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : exp.endDate ? formatDate(exp.endDate) : "Present"}
                  </span>
                  {exp.current && (
                    <span className="px-2.5 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-medium rounded-md">
                      Current
                    </span>
                  )}
                </div>
              </div>
              <p className="text-[#0F172A]/80 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

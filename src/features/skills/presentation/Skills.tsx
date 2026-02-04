import { Skill } from "../domain/Skill";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Skills & Technologies
        </h2>
        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <div key={category} className="animate-fadeInUp" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <h3 className="text-base font-semibold text-[#0F172A] mb-4 flex items-center gap-2 uppercase tracking-wide">
                <span className="w-1 h-4 bg-[#2563EB] rounded-full"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="px-3 py-1.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-md text-sm text-[#0F172A]/70 hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#F8FAFC] transition-all duration-200 cursor-default"
                    >
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

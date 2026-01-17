import { Project, ProjectsProps } from "@/types";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.imageUrl && (
                <div className="aspect-video bg-[#F1F5F9] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={225}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                {project.title}
              </h3>
              <p className="text-[#0F172A]/80 text-sm mb-3 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <p className="text-xs text-[#2563EB] font-mono mb-4">
                {project.techStack}
              </p>
              <div className="flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2563EB] hover:text-[#1D4ED8] transition-colors duration-200 flex items-center gap-1 font-medium"
                    aria-label={`View demo of ${project.title}`}
                  >
                    Demo
                    <Icon name="external" size="sm" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#2563EB] hover:text-[#1D4ED8] transition-colors duration-200 flex items-center gap-1 font-medium"
                    aria-label={`View code of ${project.title}`}
                  >
                    Code
                    <Icon name="code" size="sm" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

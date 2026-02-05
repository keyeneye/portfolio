import { Project } from "../domain/Project";
import Image from "next/image";
import { Icon } from "@/shared/components/ui/Icon";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stroke to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header animate-fadeInUp">
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group card-glow animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.imageUrl && (
                <div className="relative aspect-video rounded-lg overflow-hidden mb-5 border border-stroke">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-light group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-light-subtle hover:text-accent hover:bg-accent-muted transition-all duration-200"
                      aria-label={`View demo of ${project.title}`}
                    >
                      <Icon name="globe" size="sm" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-light-subtle hover:text-accent hover:bg-accent-muted transition-all duration-200"
                      aria-label={`View code of ${project.title}`}
                    >
                      <Icon name="github" size="sm" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-light-muted text-sm mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.split(",").map((tech) => (
                  <span
                    key={tech.trim()}
                    className="px-2 py-1 text-xs font-mono text-syntax-cyan bg-accent-muted rounded"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

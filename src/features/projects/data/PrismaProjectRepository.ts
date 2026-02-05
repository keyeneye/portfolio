import { cache } from "react";
import { prisma } from "@/shared/infrastructure/prisma";
import { Project } from "../domain/Project";
import { ProjectRepository } from "../domain/ProjectRepository";

class PrismaProjectRepository implements ProjectRepository {
  private getProjectsCached = cache(async (): Promise<Project[]> => {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return projects as Project[];
  });

  async getProjects(): Promise<Project[]> {
    return this.getProjectsCached();
  }
}

export const projectRepository = new PrismaProjectRepository();

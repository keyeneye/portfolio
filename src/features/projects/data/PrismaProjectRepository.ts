import { prisma } from "@/shared/infrastructure/prisma";
import { Project } from "../domain/Project";
import { ProjectRepository } from "../domain/ProjectRepository";

class PrismaProjectRepository implements ProjectRepository {
  async getProjects(): Promise<Project[]> {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return projects as Project[];
  }
}

export const projectRepository = new PrismaProjectRepository();

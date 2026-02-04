import { prisma } from "@/shared/infrastructure/prisma";
import { Experience } from "../domain/Experience";
import { ExperienceRepository } from "../domain/ExperienceRepository";

class PrismaExperienceRepository implements ExperienceRepository {
  async getExperiences(): Promise<Experience[]> {
    const experiences = await prisma.experience.findMany({
      orderBy: { startDate: "desc" },
    });
    return experiences as Experience[];
  }
}

export const experienceRepository = new PrismaExperienceRepository();

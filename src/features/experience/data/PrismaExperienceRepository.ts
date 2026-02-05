import { cache } from "react";
import { prisma } from "@/shared/infrastructure/prisma";
import { Experience } from "../domain/Experience";
import { ExperienceRepository } from "../domain/ExperienceRepository";

class PrismaExperienceRepository implements ExperienceRepository {
  private getExperiencesCached = cache(async (): Promise<Experience[]> => {
    const experiences = await prisma.experience.findMany({
      orderBy: { startDate: "desc" },
    });
    return experiences as Experience[];
  });

  async getExperiences(): Promise<Experience[]> {
    return this.getExperiencesCached();
  }
}

export const experienceRepository = new PrismaExperienceRepository();

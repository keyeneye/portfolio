import { prisma } from "@/shared/infrastructure/prisma";
import { Skill } from "../domain/Skill";
import { SkillRepository } from "../domain/SkillRepository";

class PrismaSkillRepository implements SkillRepository {
  async getSkills(): Promise<Skill[]> {
    const skills = await prisma.skill.findMany({
      orderBy: { name: "asc" },
    });
    return skills as Skill[];
  }
}

export const skillRepository = new PrismaSkillRepository();

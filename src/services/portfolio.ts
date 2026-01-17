import { prisma } from "@/lib/prisma";
import { Profile, Project, Skill, Experience } from "@/types";

export async function getProfile(): Promise<Profile | null> {
  const profile = await prisma.profile.findFirst();
  return profile as Profile | null;
}

export async function getProjects(): Promise<Project[]> {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return projects as Project[];
}

export async function getSkills(): Promise<Skill[]> {
  const skills = await prisma.skill.findMany({
    orderBy: { name: "asc" },
  });
  return skills as Skill[];
}

export async function getExperiences(): Promise<Experience[]> {
  const experiences = await prisma.experience.findMany({
    orderBy: { startDate: "desc" },
  });
  return experiences as Experience[];
}

export async function getPortfolioData() {
  const [profile, projects, skills, experiences] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills(),
    getExperiences(),
  ]);

  return { profile, projects, skills, experiences };
}

import { profileRepository } from "@/features/profile/data/PrismaProfileRepository";
import Hero from "@/features/profile/presentation/Hero";
import Contact from "@/features/profile/presentation/Contact";
import type { Profile } from "@/features/profile/domain/Profile";
import { projectRepository } from "@/features/projects/data/PrismaProjectRepository";
import Projects from "@/features/projects/presentation/Projects";
import { skillRepository } from "@/features/skills/data/PrismaSkillRepository";
import Skills from "@/features/skills/presentation/Skills";
import { experienceRepository } from "@/features/experience/data/PrismaExperienceRepository";
import ExperienceSection from "@/features/experience/presentation/Experience";
import Layout from "@/shared/components/layout/Layout";

export default async function HomePage() {
  const [profile, projects, skills, experiences] = await Promise.all([
    profileRepository.getProfile(),
    projectRepository.getProjects(),
    skillRepository.getSkills(),
    experienceRepository.getExperiences(),
  ]);

  const defaultProfile: Profile = {
    id: "default",
    name: "Your Name",
    title: "Frontend Developer",
    bio: "I build accessible, pixel-perfect, and performant web experiences.",
    email: "hello@example.com",
    github: null,
    linkedin: null,
    twitter: null,
    avatarUrl: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const displayProfile = profile || defaultProfile;

  return (
    <Layout profile={displayProfile}>
      <Hero
        name={displayProfile.name}
        title={displayProfile.title}
        bio={displayProfile.bio}
        email={displayProfile.email}
      />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <ExperienceSection experiences={experiences} />
      <Contact
        email={displayProfile.email}
        github={displayProfile.github}
        linkedin={displayProfile.linkedin}
        twitter={displayProfile.twitter}
      />
    </Layout>
  );
}

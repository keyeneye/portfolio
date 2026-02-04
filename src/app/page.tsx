import { profileRepository, Hero, Contact } from "@/features/profile";
import { projectRepository, Projects } from "@/features/projects";
import { skillRepository, Skills } from "@/features/skills";
import { experienceRepository, ExperienceSection } from "@/features/experience";
import Layout from "@/shared/components/layout/Layout";
import type { Profile } from "@/features/profile";

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

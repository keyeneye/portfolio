import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import ExperienceSection from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Layout from "@/components/layout/Layout";
import { getPortfolioData } from "@/services/portfolio";
import { Profile } from "@/types";

export default async function HomePage() {
  const { profile, projects, skills, experiences } = await getPortfolioData();

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

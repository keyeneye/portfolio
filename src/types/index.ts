export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  demoUrl: string | null;
  repoUrl: string | null;
  techStack: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  iconUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface HeroProps {
  name: string;
  title: string;
  bio: string;
  email: string;
}

export interface ProjectsProps {
  projects: Project[];
}

export interface SkillsProps {
  skills: Skill[];
}

export interface ExperienceProps {
  experiences: Experience[];
}

export interface ContactProps {
  email: string;
  github: string | null;
  linkedin: string | null;
  twitter: string | null;
}

export interface FooterProps {
  name: string;
  github?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
}
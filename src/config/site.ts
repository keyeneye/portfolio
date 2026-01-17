export interface SiteConfig {
  name: string;
  title: string;
  bio: string;
  email: string;
  socialLinks: {
    github: string | null;
    linkedin: string | null;
    twitter: string | null;
  };
  navigation: {
    id: string;
    label: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Frontend Developer",
  bio: "I build accessible, pixel-perfect, and performant web experiences.",
  email: "hello@example.com",
  socialLinks: {
    github: null,
    linkedin: null,
    twitter: null,
  },
  navigation: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],
};

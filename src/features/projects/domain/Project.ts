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

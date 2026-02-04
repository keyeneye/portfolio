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

import { Experience } from "./Experience";

export interface ExperienceRepository {
  getExperiences(): Promise<Experience[]>;
}

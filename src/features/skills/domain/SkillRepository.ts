import { Skill } from "./Skill";

export interface SkillRepository {
  getSkills(): Promise<Skill[]>;
}

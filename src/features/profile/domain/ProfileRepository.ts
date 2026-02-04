import { Profile } from "./Profile";

export interface ProfileRepository {
  getProfile(): Promise<Profile | null>;
}

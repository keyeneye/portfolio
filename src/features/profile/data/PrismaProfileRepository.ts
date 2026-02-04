import { prisma } from "@/shared/infrastructure/prisma";
import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";

class PrismaProfileRepository implements ProfileRepository {
  async getProfile(): Promise<Profile | null> {
    const profile = await prisma.profile.findFirst();
    return profile as Profile | null;
  }
}

export const profileRepository = new PrismaProfileRepository();

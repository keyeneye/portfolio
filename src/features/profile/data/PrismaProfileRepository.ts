import { cache } from "react";
import { prisma } from "@/shared/infrastructure/prisma";
import { Profile } from "../domain/Profile";
import { ProfileRepository } from "../domain/ProfileRepository";

class PrismaProfileRepository implements ProfileRepository {
  private getProfileCached = cache(async (): Promise<Profile | null> => {
    const profile = await prisma.profile.findFirst();
    return profile as Profile | null;
  });

  async getProfile(): Promise<Profile | null> {
    return this.getProfileCached();
  }
}

export const profileRepository = new PrismaProfileRepository();

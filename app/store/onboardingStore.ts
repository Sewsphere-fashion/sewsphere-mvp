// store/onboardingStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

type OnboardingState = {
  photo: string | null;
  bio: string;
  experience: string;
  state: string;
  city: string;
  specialties: string[];

  setPhoto: (photo: string | null) => void;
  setBio: (bio: string) => void;
  setExperience: (experience: string) => void;
  setStateValue: (state: string) => void;
  setCity: (city: string) => void;
  setSpecialties: (specialties: string[]) => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      photo: null,
      bio: "",
      experience: "",
      state: "",
      city: "",
      specialties: [],

      setPhoto: (photo) => set({ photo }),

      setBio: (bio) => set({ bio }),

      setExperience: (experience) => set({ experience }),

      setStateValue: (state) => set({ state }),

      setCity: (city) => set({ city }),

      setSpecialties: (specialties) => set({ specialties }),
    }),
    {
      name: "onboarding-storage",
    },
  ),
);
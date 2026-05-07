import { create } from "zustand";

type OnboardingState = {
  photo: File | null;
  bio: string;
  experience: string;
  state: string;
  city: string;
  specialties: string[];

  setPhoto: (photo: File | null) => void;
  setBio: (bio: string) => void;
  setExperience: (experience: string) => void;
  setStateValue: (state: string) => void;
  setCity: (city: string) => void;
  setSpecialties: (specialties: string[]) => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
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
}));
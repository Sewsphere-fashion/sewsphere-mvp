import { create } from "zustand";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

type AuthState = {
  user: User | null;
  token: string | null;

  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  setUser: (user) => set({ user }),

  setToken: (token) => set({ token }),

  logout: () =>
    set({
      user: null,
      token: null,
    }),
}));
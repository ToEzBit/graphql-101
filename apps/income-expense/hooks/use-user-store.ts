import { create } from "zustand";

export type User = {
  id: number;
  name: string;
  amount: number;
};

interface UserStore {
  userData: User | null;
  setUser: (userData: User) => void;
}

export const useUser = create<UserStore>((set) => ({
  userData: null,
  setUser: (userData) => set({ userData }),
}));

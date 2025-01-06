import { create } from "zustand";

type UserState = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  hasFinishedOnboarding: false,
  toggleHasOnboarded: () =>
    set((state) => ({ hasFinishedOnboarding: !state.hasFinishedOnboarding })),
}));

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UserState = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHasOnboarded: () =>
        set((state) => ({
          hasFinishedOnboarding: !state.hasFinishedOnboarding,
        })),
    }),
    {
      name: "plantly-store-bjhghfdf5434",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

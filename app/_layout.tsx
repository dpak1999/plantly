import { SplashScreen, Stack } from "expo-router";
import * as QuickActions from "expo-quick-actions";
import { useEffect } from "react";
import { Platform } from "react-native";
import { useQuickActionRouting } from "expo-quick-actions/router";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useQuickActionRouting();

  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add a plant",
        id: "0",
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
        params: { href: "/new" },
      },
    ]);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", title: "New Plant" }}
      />
    </Stack>
  );
}

import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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

import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "@/theme";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: "Home",
        headerRight: () => (
          <Link href={"/new"} asChild>
            <Pressable hitSlop={20}>
              <AntDesign
                name="pluscircleo"
                size={24}
                color={theme.colorGreen}
              />
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerBackVisible: false,
          headerTintColor: theme.colorBlack,
        }}
      />
    </Stack>
  );
}

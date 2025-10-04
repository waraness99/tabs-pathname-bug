import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function ALayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="common" options={{ presentation: "modal" }} />
    </Stack>
  );
}

import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "c",
};

export default function CLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="c" />
      <Stack.Screen name="common" options={{ presentation: "modal" }} />
    </Stack>
  );
}

import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "b",
};

export default function BLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="b" />
      <Stack.Screen name="common" options={{ presentation: "modal" }} />
    </Stack>
  );
}

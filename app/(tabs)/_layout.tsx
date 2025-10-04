import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  initialRouteName: "(a)",
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="(a)"
        options={{
          title: "A",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="a.circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(b)"
        options={{
          title: "B",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="b.circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(c)"
        options={{
          title: "C",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="c.circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

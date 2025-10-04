import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { Link, usePathname } from "expo-router";

export default function TabBScreen() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <ThemedText>{`Screen B path: ${pathname}`}</ThemedText>
      <Link href="/common">
        <ThemedText>Open Shared Screen</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

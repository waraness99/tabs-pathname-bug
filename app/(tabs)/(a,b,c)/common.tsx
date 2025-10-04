import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";

export default function CommonScreen() {
  return (
    <View style={styles.container}>
      <ThemedText>{`This is a common screen`}</ThemedText>
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

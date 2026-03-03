import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Coffee Map App!</Text>
      <Text style={styles.text}>Navigate the tabs below to explore cafés and learn more about the app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
  text: { fontSize: 16, textAlign: "center" },
});
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  suburb: string;
  onPress: () => void;
};

export default function CoffeeCard({ name, suburb, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{name}</Text>
      <Text>{suburb}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  title: { fontSize: 18, fontWeight: "bold" },
});
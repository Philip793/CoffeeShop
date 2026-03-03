import { View, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import CoffeeCard from "../../components/CoffeeCard";

type Coffee = {
  id: string;
  name: string;
  suburb: string;
  lat: number;
  lng: number;
};

export default function Cafes() {
  const router = useRouter();
  const [coffeeShops, setCoffeeShops] = useState<Coffee[]>([]);

  useEffect(() => {
    const data: Coffee[] = [
      { id: "1", name: "Sydney Brew", suburb: "Sydney CBD", lat: -33.8688, lng: 151.2093 },
      { id: "2", name: "Harbour Coffee", suburb: "Circular Quay", lat: -33.8615, lng: 151.2108 },
    ];
    setCoffeeShops(data);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={coffeeShops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CoffeeCard
            name={item.name}
            suburb={item.suburb}
            onPress={() =>
              router.push({
                pathname: "/map",
                params: { lat: item.lat.toString(), lng: item.lng.toString(), name: item.name },
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#fff" } });
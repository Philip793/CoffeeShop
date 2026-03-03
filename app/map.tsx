import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLocalSearchParams } from "expo-router";

export default function MapScreen() {
  const { lat, lng, name } = useLocalSearchParams();

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: Number(lat),
        longitude: Number(lng),
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Marker coordinate={{ latitude: Number(lat), longitude: Number(lng) }} title={String(name)} />
    </MapView>
  );
}

const styles = StyleSheet.create({ map: { flex: 1 } });
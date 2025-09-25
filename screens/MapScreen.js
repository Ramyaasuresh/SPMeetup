import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Marker, Polyline, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { MAPTILER_KEY } from "@env";   // ✅ load from .env

console.log("MAPTILER_KEY from env:", MAPTILER_KEY); // 🔍 debug log

export default function MapScreen({ route }) {
  const coords = route?.params?.coords ?? null; // Destination coords
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          setCurrentLocation({ latitude: -31.9505, longitude: 115.8605 }); // Perth fallback
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (err) {
        setErrorMsg("Error fetching location");
        setCurrentLocation({ latitude: -31.9505, longitude: 115.8605 });
      }
    })();
  }, []);

  if (!currentLocation) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading map...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      {/* ✅ OpenStreetMap tiles from MapTiler */}
      <UrlTile
        urlTemplate={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${vDvBEImPEg3RvvPYyhfC}`}
        maximumZ={19}
        flipY={false}
      />

      {/* Current Location Marker */}
      <Marker coordinate={currentLocation} title="You are here" pinColor="blue" />

      {/* Destination Marker */}
      {coords && <Marker coordinate={coords} title="Destination" pinColor="red" />}

      {/* Straight Line between current location & destination */}
      {coords && (
        <Polyline coordinates={[currentLocation, coords]} strokeColor="red" strokeWidth={3} />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  map: { flex: 1 },
});


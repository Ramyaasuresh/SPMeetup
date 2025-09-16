import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen({ route }) {
  const coords = route?.params?.coords ?? null; // Destination coords
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          // Fallback location if permission denied
          setCurrentLocation({
            latitude: -31.9505,
            longitude: 115.8605,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          });
          return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      } catch (e) {
        setCurrentLocation({
          latitude: -31.9505,
          longitude: 115.8605,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      }
    })();
  }, []);

  if (!coords) {
    return (
      <View style={styles.center}>
        <Text>No destination selected.</Text>
      </View>
    );
  }

  if (!currentLocation) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Fetching current location...</Text>
      </View>
    );
  }

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={currentLocation}  // use initialRegion for first render
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      <Marker coordinate={coords} title="Destination" pinColor="blue" />
      <Polyline coordinates={[currentLocation, coords]} strokeColor="red" strokeWidth={3} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

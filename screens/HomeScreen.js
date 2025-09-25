// HomeScreen.js
import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import moment from "moment";

export default function HomeScreen({ navigation, plans = [] }) {
  const today = moment().format("YYYY-MM-DD");
  const todaysMeetups = (plans || []).filter((p) => p.date === today);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Today's Meetups */}
      <Text style={styles.header}>Today's Meetups</Text>
      {todaysMeetups.length === 0 ? (
        <Text>No meetups today</Text>
      ) : (
        <FlatList
          data={todaysMeetups}
          keyExtractor={(item, idx) => item.id || idx.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>
                {item.place} at {item.time}
              </Text>
              <Button
                title="Join Now"
                onPress={() =>
                  navigation.navigate("MapScreen", {
                    coords: { latitude: -31.9505, longitude: 115.8605 }, // Perth
                  })
                }
              />
            </View>
          )}
        />
      )}

      {/* My Plans */}
      <Text style={[styles.header, { marginTop: 20 }]}>My Plans</Text>
      <FlatList
        data={plans}
        keyExtractor={(item, idx) => item.id || idx.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.date} - {item.place} at {item.time}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 20, fontWeight: "bold", marginVertical: 10 },
  item: { marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 },
});

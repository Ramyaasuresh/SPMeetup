// AddPlanScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import API_BASE from "../config/api";

export default function AddPlanScreen({ auth = {}, navigation }) {
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const addPlan = async () => {
    if (!place || !time || !date) {
      Alert.alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/plans`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth.token}` : "",
        },
        body: JSON.stringify({ place, time, date }),
      });

      if (res.ok) {
        Alert.alert("Plan saved!");
        navigation.goBack();
      } else {
        const data = await res.json();
        Alert.alert("Error", data.message || "Failed to save plan");
      }
   } catch (err) {
  console.log("Error saving plan:", err);
  Alert.alert("Error", err.message || "Something went wrong while saving.");
}

  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Place"
        value={place}
        onChangeText={setPlace}
        style={styles.input}
      />
      <TextInput
        placeholder="Time (HH:mm)"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <Button title="Save Plan" onPress={addPlan} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { marginBottom: 10, borderWidth: 1, padding: 10, borderRadius: 5 },
});

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddPlanScreen({ plans, setPlans, navigation }) {
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const addPlan = () => {
    if (!place || !time || !date) {
      Alert.alert('Please fill all fields');
      return;
    }

    const newPlan = {
      id: Date.now().toString(),
      place,
      time,
      date,
      // For now, we can set default coordinates
      coords: {
        latitude: 0,   // You can update this later
        longitude: 0
      }
    };

    setPlans([...plans, newPlan]);
    navigation.goBack();
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
        placeholder="Time"
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
  input: { marginBottom: 10, borderWidth: 1, padding: 5 }
});

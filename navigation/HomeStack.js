import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack({ plans }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {props => <HomeScreen {...props} plans={plans} />}
      </Stack.Screen>
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

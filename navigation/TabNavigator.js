// navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AddPlanScreen from "../screens/AddPlanScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ auth, setAuth }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} auth={auth} />}
      </Tab.Screen>
      <Tab.Screen name="Add Plan">
        {(props) => <AddPlanScreen {...props} auth={auth} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} auth={auth} setAuth={setAuth} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

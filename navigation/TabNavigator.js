import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddPlanScreen from '../screens/AddPlanScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ plans, setPlans }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home">
        {props => <HomeScreen {...props} plans={plans} />}
      </Tab.Screen>
      <Tab.Screen name="Add Plan">
        {props => <AddPlanScreen {...props} plans={plans} setPlans={setPlans} />}
      </Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

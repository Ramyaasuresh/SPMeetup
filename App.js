// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TabNavigator from "./navigation/TabNavigator";
import "./src/i18n"; // load i18n config
import { useTranslation } from "react-i18next";


const Stack = createNativeStackNavigator();

export default function App() {
  const [auth, setAuth] = useState({
    loggedIn: false,
    token: null,
    user: null,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!auth.loggedIn ? (
          <>
            <Stack.Screen name="Login">
              {(props) => (
                <LoginScreen {...props} setAuth={setAuth} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen name="MainTabs">
            {(props) => (
              <TabNavigator {...props} auth={auth} setAuth={setAuth} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

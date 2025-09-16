// navigation/AppNavigator.js
import React, { useState } from 'react';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

export default function AppNavigator() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // default: not logged in

    return (
        isLoggedIn
            ? <TabNavigator />
            : <AuthStack setIsLoggedIn={setIsLoggedIn} />
    );
}

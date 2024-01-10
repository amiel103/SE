import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './Pages/LandingPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" headerMode="false">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="ResetPasswordPage" component={ResetPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
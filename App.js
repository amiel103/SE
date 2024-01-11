import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './Pages/LandingPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import ProfilePage from './Pages/ProfilePage';
import HamburgerPage from './Pages/HamburgerPage';
import AboutUsPage from './Pages/AboutUsPage';
import TermsPage from './Pages/TermsPage';
import FavPage from './Pages/FavPage';
import ViewMorePage from './Pages/ViewMorePage';
import EducPage from './Pages/EducPage';
import HorrorPage from './Pages/HorrorPage';
import DocPage from './Pages/DocPage';
import FictionPage from './Pages/FictionPage';
import SciFiPage from './Pages/SciFiPage';


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
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="HamburgerPage" component={HamburgerPage} />
        <Stack.Screen name="AboutUsPage" component={AboutUsPage} />
        <Stack.Screen name="TermsPage" component={TermsPage} />
        <Stack.Screen name="FavPage" component={FavPage} />
        <Stack.Screen name="ViewMorePage" component={ViewMorePage} />
        <Stack.Screen name="EducPage" component={EducPage} />
        <Stack.Screen name="HorrorPage" component={HorrorPage} />
        <Stack.Screen name="DocPage" component={DocPage} />
        <Stack.Screen name="FictionPage" component={FictionPage} />
        <Stack.Screen name="SciFiPage" component={SciFiPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
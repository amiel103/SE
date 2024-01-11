import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}
      <TouchableOpacity
        style={styles.hamburger}
        onPress={() => navigation.navigate('HomePage')} // Navigate to HamburgerPage
      >
        <Text style={styles.hamburgerText}>&#x2630; Mich</Text>
      </TouchableOpacity>

      {/* Menu Buttons */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('ProfilePage')}>
          <Text style={styles.menuButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}onPress={() => navigation.navigate('AboutUsPage')}>
          <Text style={styles.menuButtonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('TermsPage')}>
          <Text style={styles.menuButtonText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('FavPage')}>
          <Text style={styles.menuButtonText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('LandingPage')}>
          <Text style={styles.menuButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const Stack = createNativeStackNavigator();

const HamburgerPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, // Hide the header for this screen
        }}
      />
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Vertical layout
    backgroundColor: '#cb7400', // Updated background color
    padding: 20,
    paddingTop: 60,
  },
  hamburger: {
    marginRight: 16,
    marginBottom: 100,
  },
  hamburgerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuButtonText: {
    color: '#cb7400', // Button text color matching the background color of the container
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HamburgerPage;

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
        onPress={() => navigation.toggleDrawer()} // Assuming you have a drawer navigator
      >
        <Text style={styles.hamburgerText}>&#x2630;</Text>
      </TouchableOpacity>

      {/* Home Content */}
      <View style={styles.content}>
        <Text style={styles.title}>CHOOSE A BOOK!</Text>
        <Text style={styles.subtitle}>TOP SELLING BOOKS IN 2O24</Text>

        {/* Display two images above */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://placekitten.com/300/200' }} // Example placeholder image
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://placekitten.com/300/200' }} // Example placeholder image
            style={styles.image}
          />
        </View>

        {/* Display two images below */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://placekitten.com/300/200' }} // Example placeholder image
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://placekitten.com/300/200' }} // Example placeholder image
            style={styles.image}
          />
        </View>

        {/* "View More" button */}
        <TouchableOpacity
          style={styles.viewMoreButton}
          onPress={() => {
            // Add the action you want when the "View More" button is pressed
          }}
        >
          <Text style={styles.viewMoreButtonText}>View More</Text>
        </TouchableOpacity>

        {/* Categories Navigation Bar */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Fiction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Horror</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Educational</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Sci-Fi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Documentary</Text>
          </TouchableOpacity>
          {/* Add more categories as needed */}
        </ScrollView>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const HomePage = () => {
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
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  hamburger: {
    marginRight: 16,
  },
  hamburgerText: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 3,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555', // Customized color for the subtitle
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  viewMoreButton: {
    backgroundColor: '#04a4a1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  viewMoreButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoriesContainer: {
    marginTop: 100,
    paddingBottom: 5,
  },
  categoryButton: {
    backgroundColor: '#04a4a1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    height: 35,
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default HomePage;

import React, { useState , useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');

  useEffect(() => {
    // Load the stored name when the component mounts
    loadName();
  }, []);

  const loadName = async () => {
    try {
      const storedName = await AsyncStorage.getItem('name');
      if (storedName !== null) {
        setName(storedName);
      }
    } catch (error) {
      console.error('Error loading name:', error);
    }
  };




  return (
    <View style={styles.container}>
      {/* Hamburger Icon */}
      <TouchableOpacity
        style={styles.hamburger}
        onPress={() => navigation.navigate('HamburgerPage')} // Navigate to HamburgerPage
      >
        <Text style={styles.hamburgerText}> &#x2630; {name}</Text>
      </TouchableOpacity>


      {/* Local Image */}
      <Image
        source={require('../assets/images/bgbgbgb.png')} // Adjust the path accordingly
        style={styles.localImage}
      />

      {/* Home Content */}
      <View style={styles.content}>
        <Text style={styles.title}>CHOOSE A BOOK!</Text>
        <Text style={styles.subtitle}>TOP SELLING BOOKS IN 2O24.a</Text>

        {/* Display two images above */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Example placeholder image
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Example placeholder image
            style={styles.image}
          />
        </View>

        {/* Display two images below */}
        {/* <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://placekitten.com/300/200' }} // Example placeholder image
            style={styles.image}
          />
          <Image
            source={{ uri: 'https://placekitten.com/300/200' }} // Example placeholder image
            style={styles.image}
          />
        </View> */}

        {/* "View More" button */}
        <TouchableOpacity
          style={styles.viewMoreButton}
          onPress={() => navigation.navigate('ViewMorePage')}
        >
          <Text style={styles.viewMoreButtonText}>View Posts</Text>
        </TouchableOpacity>

        {/* Categories Navigation Bar */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          <TouchableOpacity style={styles.categoryButton}
           onPress={() => navigation.navigate('FictionPage')}>
            <Text style={styles.categoryButtonText}>Fiction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}
           onPress={() => navigation.navigate('HorrorPage')}>
            <Text style={styles.categoryButtonText}>Horror</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}
           onPress={() => navigation.navigate('EducPage')}>
            <Text style={styles.categoryButtonText}>Educational</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}
           onPress={() => navigation.navigate('SciFiPage')}>
            <Text style={styles.categoryButtonText}>Sci-Fi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}
           onPress={() => navigation.navigate('DocPage')}>
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
    backgroundColor: '#162F65', // Updated background color
    padding: 20,
    paddingTop: 60,
  },
  hamburger: {
    marginRight: 16,
    marginBottom: 1,
  },
  hamburgerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  localImage: {
    width: '80%', // Adjust as needed
    height: 150,   // Adjust as needed
    resizeMode: 'cover',
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    marginLeft: 40,
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
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Customized color for the subtitle
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
    backgroundColor: '#cb7400',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 8,
  },
  viewMoreButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoriesContainer: {
    marginTop: 10,
    paddingBottom: 5,
  },
  categoryButton: {
    backgroundColor: '#cb7400',
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
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Import the existing image
import SecondImage from '../assets/images/proficon.png';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        {/* Content for the top section */}
        <Image
          source={require('../assets/images/bgbook.jpg')}
          style={{ width: 400, height: 250 }}
        />
        {/* Add your top section content here */}
        <View style={styles.overlay}></View>
      </View>
      <View style={styles.bottomSection}>
        {/* Content for the bottom section */}
        <View style={styles.centeredContent}>
          {/* Existing image */}
          <Image
            source={SecondImage} // Use the imported image
            style={{ width: 80, height: 80, marginBottom: 200 }} // Reducing width and height
          />
        </View>
        {/* Render individual TouchableOpacity components */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LoginPage')}
          >
            <Text style={styles.buttonText}>Terms and Condition</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUpPage')}
          >
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
          {/* New image */}
          <Image
            source={require('../assets/images/signouticon.png')}
            style={{ width: 40, height: 40, marginLeft: 10 }} // Adjust width and height as needed
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Arrange children in a column
  },
  topSection: {
    flex: 3, // 70% of the screen
    backgroundColor: '#162F65', // Top section background color
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Increase top padding
    paddingHorizontal: 20,
  },
  bottomSection: {
    flex: 11, // 30% of the screen
    backgroundColor: '#162F65', // Mint green bottom section background color
    alignItems: 'center', // Center content horizontally
  },
  overlay: {
    alignItems: 'center', // Center content horizontally
    marginBottom: 2, // Adjust margin bottom for the image
  },
  centeredContent: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically
    marginBottom: 20, // Adjust margin bottom for the image
  },
  buttonsContainer: {
    flexDirection: 'row', // Arrange buttons in a row
    alignItems: 'center', // Center items vertically
  },
  button: {
    backgroundColor: '#162F65',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 10, // Add left margin for buttons
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'left', // Align button text to the left
  },
  verticalMargin: {
    marginVertical: 5,
  },
});

export default HomePage;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        {/* Content for the top section */}
        <Image
          source={require('../assets/images/bgbgbgb.png')}
          style={{ width: 350, height: 150 }}
        />
        <Text style={styles.title}>Smart Deals for Savvy Students!</Text>
        {/* Add your top section content here */}
      </View>
      <View style={styles.bottomSection}>
        {/* Content for the bottom section */}
        <View style={styles.overlay}>
          {/* Add your bottom section content here */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('LoginPage')}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SignUpPage')}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
    flex: 1, // 30% of the screen
    backgroundColor:'#cb7400', // Mint green bottom section background color
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 10, // Adjust top margin
  },
  buttonContainer: {
    justifyContent: 'space-around',
    width: '40%',
  },
  button: {
    backgroundColor: '#162F65',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  verticalMargin: {
    marginVertical: 5,
  },
});

export default LandingPage;

// AboutUs.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutUsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>

      {/* Box in the middle */}
      <View style={styles.box}>
        {/* Description inside the box */}
        <Text style={styles.description}>
        AffordaBook is the ultimate platform for students to easily exchange, sell, and purchase textbooks, making the academic journey more affordable and sustainable. Our app empowers students to connect with their peers and streamline the textbook acquisition process. 


        </Text>
      </View>

      {/* Back Button */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#162F65',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  box: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 16,
    color: '#000', // Adjusted color for better visibility
  },
});

export default AboutUsPage;

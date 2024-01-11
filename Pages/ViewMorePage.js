// AboutUs.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ViewMorePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>View More</Text>
      <Text style={styles.description}>
        Welcome to our app! We are a team of developers passionate about creating amazing mobile experiences.
      </Text>
      
      {/* Add more information as needed */}
      
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default ViewMorePage;

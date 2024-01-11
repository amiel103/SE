// AboutUs.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HorrorPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HORROR</Text>
      <Text style={styles.description}>
        MWAMWA
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

export default HorrorPage;

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.topSection}>
          {/* ... (existing code for the top section) */}
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('HomePage')}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#2E8B57' }]} // Example different background color
              onPress={() => {
                /* Add navigation logic for Register button */
              }}
            >
               style={styles.button}
              onPress={() => navigation.navigate('SignUpPage')}
              <Text style={styles.buttonText}>Forgot Password?</Text>
            </TouchableOpacity>
            {/* ... (existing verticalMargin view if needed) */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cb7400', // Background color for the page
  },
  overlay: {
    flex: 1,
    backgroundColor: '',
    justifyContent: 'center',
  },
  topSection: {
    backgroundColor: '#162F65',
    flex: 9, // 70% of the screen
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Increase top padding
    paddingHorizontal: 20,

  },
  bottomSection: {
    flex: 3, // 30% of the screen
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain', // Adjust the image's content mode as needed
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#fff',
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#040D12',
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

export default LoginPage;

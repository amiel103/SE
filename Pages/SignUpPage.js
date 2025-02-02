
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import axios from 'axios';
const SignUpPage = ({ navigation }) => {

  const baseIP = 'http://192.168.254.149:8000'

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');


  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleRePasswordChange = (text) => {
    setRePassword(text);
  };

  const handleSignUp = async() => {
    // Use the email and password values as needed
    
    console.log('name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Repassword:', repassword);

    if(password != repassword){
      return
    }

    try {
      const response = await axios.post(baseIP+'/api/register', {
        name:name,
        email: email,
        password: password,
      });

      // Handle the response as needed
      console.log('Response:', response.data['message']);
      if(response.data['message'] == 'User registered successfully'){
        
        navigation.navigate('LandingPage')
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }

    // You can now make an API request or perform other actions with the email and password values
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.topSection}>
          {/* Image placed at the top center */}
          <Image
            source={require('../assets/images/bgbgbgb.png')}
            style={styles.image}
          />
          {/* Add any content for the top section */}
          <Text style={styles.title}>CREATE AN ACCOUNT</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#ffffff"
              onChangeText={handleNameChange}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#ffffff"
              onChangeText={handleEmailChange}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              onChangeText={handlePasswordChange}
            />
             <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              onChangeText={handleRePasswordChange}
            />
          </View>
        </View>
        <View style={styles.bottomSection}>
          {/* Add any content for the bottom section */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleSignUp()
                // navigation.navigate('LandingPage')
              }
              }
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('LoginPage')}
            >
              <Text style={styles.buttonText}>Back To Login</Text>
            </TouchableOpacity>
            <View style={styles.verticalMargin} />
            {/* Add other buttons */}
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
    width: '40%',
    marginBottom: 40,
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

export default SignUpPage;

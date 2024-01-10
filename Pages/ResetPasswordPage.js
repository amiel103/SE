import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const ResetPasswordPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/564x/62/bc/80/62bc80ae557ba83fddb7819b03874a16.jpg',
      }}
      style={styles.backgroundImage}
      resizeMode="cover" 
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>The Request Has Been Sent</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.customButton}>
              <Button
                title="Back To Login"
                onPress={() => navigation.navigate('LoginPage')}
                color="#040D12" 
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '65%',
  },
  customButton: {
    width: '100%',
    marginBottom: 5,
  },
  verticalMargin: {
    marginVertical: 5,
  },
});

export default ResetPasswordPage;

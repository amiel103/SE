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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt tempor imperdiet. Sed maximus eros feugiat ipsum laoreet, tincidunt ullamcorper eros viverra. Pellentesque ut urna non urna luctus convallis. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam risus purus, hendrerit nec erat vitae, gravida efficitur nisl. Aliquam at mi eget dolor elementum congue quis molestie urna. Etiam ut vulputate tellus, ut ullamcorper erat. Sed efficitur mauris vel mollis suscipit. Nunc mattis dictum tincidunt. In sodales nunc sed lectus consectetur interdum. Aenean a orci at velit consectetur ultrices. Nulla vitae dignissim velit. Sed eget pretium est. Nullam molestie ante in velit hendrerit tristique.


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
    textAlign: 'center',
    marginBottom: 16,
    color: '#000', // Adjusted color for better visibility
  },
});

export default AboutUsPage;

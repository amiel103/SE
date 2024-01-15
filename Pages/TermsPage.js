// AboutUs.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const TermsPage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Terms and Condition</Text>

        {/* Box in the middle */}
        <View style={styles.box}>
          {/* Description inside the box */}
          <Text style={styles.description}>
            {`              AffordaBook - Terms and Conditions\n\n
Effective Date: [January 1, 2024]\n\n
Welcome to AffordaBook! Please carefully read and understand the following Terms and Conditions, as they govern your use of the AffordaBook mobile application ("the App"). By using the App, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the App.\n\n
1. User Responsibilities:\n\n
1.1 Posting and Transactions:\n\n
AffordaBook allows users to post used books for sale or exchange.\n
Transactions, including payments or exchanges, must occur outside the App. The App is a platform for connecting buyers and sellers, and it is not involved in the actual transaction.\n
1.2 Accuracy of Information:\n\n
Users are responsible for the accuracy of the information provided when posting books for sale or exchange.\n
AffordaBook is not responsible for any discrepancies or inaccuracies in the posted information.\n\n
2. Transactions:\n\n
2.1 Third-Party Transactions:\n\n
All transactions facilitated through AffordaBook are between the buyer and the seller.\n
AffordaBook is not responsible for any issues arising from these transactions.\n
2.2 Failed Transactions:\n\n
AffordaBook is not liable for any failed transactions, including but not limited to payment disputes, delivery issues, or miscommunication between users.\n\n
3. Prohibited Conduct:\n\n
3.1 Fraudulent Activities:\n\n
Users must not engage in fraudulent activities, including but not limited to misrepresentation of books, payment fraud, or any other dishonest practices.\n
3.2 Abuse of the App:\n\n
Users must not misuse the App for any unauthorized or illegal purposes.\n\n
4. Content Ownership:\n\n
4.1 Intellectual Property:\n\n
Users retain ownership of the content they post on AffordaBook.\n
By using the App, users grant AffordaBook a non-exclusive, worldwide, royalty-free license to use, display, and distribute the posted content within the App.\n\n
5. Termination:\n\n
5.1 Termination by Users:\n\n
Users may terminate their use of the App at any time by uninstalling the application.\n
5.2 Termination by AffordaBook:\n\n
AffordaBook reserves the right to terminate or suspend a user's account if there is a violation of these Terms and Conditions.\n\n
6. Changes to Terms:\n\n
6.1 Modification of Terms:\n\n
AffordaBook reserves the right to modify or update these Terms and Conditions at any time. Users will be notified of any significant changes.\n\n
7. Disclaimer:\n\n
7.1 No Liability:\n\n
AffordaBook is not liable for any damages or losses resulting from the use of the App, including failed transactions, inaccurate information, or any other issues.\n\n
8. Governing Law:\n\n
8.1 Jurisdiction:\n\n
These Terms and Conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction].\n
By using AffordaBook, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you have any questions or concerns, please contact us at [Insert Contact Information].\n\n
Thank you for using AffordaBook! Happy book exchanging!\n`}
          </Text>
        </View>

        {/* Back Button */}
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
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
    fontWeight: 'bold',
  },
});

export default TermsPage;

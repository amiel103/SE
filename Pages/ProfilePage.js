import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfilePage = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddPost = () => {
    setModalVisible(true);
  };

  const handleAddPhoto = () => {
    // Handle the add photo logic here
    console.log('Add a Photo clicked');
  };

  const handlePost = () => {
    // Handle the post logic here
    console.log('Post added');
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Cover Image */}
      <Image
        source={require('../assets/images/bgbook.jpg')} // Adjust the path accordingly
        style={styles.coverImage}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>&lt; Go Back</Text>
      </TouchableOpacity>

      {/* Add a Post Button */}
      <TouchableOpacity style={styles.addPostButton} onPress={handleAddPost}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Profile Image */}
      <Image
        source={require('../assets/images/proficon.png')} // Adjust the path accordingly
        style={styles.profileImage}
      />

      {/* User Information */}
      <View style={styles.userInfo}>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      {/* Modal for Add Post */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a Post</Text>
            <TextInput
              placeholder="Write your post here..."
              style={styles.postInput}
              multiline={true}
            />
            <TouchableOpacity style={styles.addPhotoButton} onPress={handleAddPhoto}>
              <Text style={styles.addPhotoButtonText}>Add a Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton} onPress={handlePost}>
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#162F65',
  },
  coverImage: {
    width: '125%',
    height: 250, // Adjust the height as needed
    resizeMode: 'cover',
    marginBottom: 600,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  addPostButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#fff',
    position: 'absolute',
    top: 280,
  },
  userInfo: {
    alignItems: 'center',
    position: 'absolute',
    top: 430,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  email: {
    fontSize: 16,
    color: '#fff',
  },
  addPostButton: {
    position: 'absolute',
    top: 500, // Adjusted position under the user info
    right: 195,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postInput: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  addPhotoButton: {
    backgroundColor: '#162F65',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addPhotoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postButton: {
    backgroundColor: '#162F65',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontWeight: 'bold',
  },
});

export default ProfilePage;

// ViewMorePage.js


import React, { useState , useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    caption: 'Exciting Fiction Book\n\n for those who are interested, dm me @erusshab',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    caption: 'Thrilling Fiction Book\n\n for those who are interested, dm me @michellea',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    caption: 'Amazing Adventure\n\n message me if you want to grab this book!',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    caption: 'Educational Masterpiece\n\n perfect for students, contact me for details!',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add more data as needed
];

const FictionPage = () => {

  // const baseIP = 'http://127.0.0.1:8000'
  const baseIP = 'http://192.168.254.149:8000'

  const [id, setId] = useState('');

  useEffect(() => {
    // Load the stored name when the component mounts
    loadName();
  }, []);

  const loadName = async () => {
    try {
      const storedId = await AsyncStorage.getItem('id');
      if (storedId !== null) {
        setId(storedId);
      }
    } catch (error) {
      console.error('Error loading name:', error);
    }
  };


  const navigation = useNavigation();
  const [likedPosts, setLikedPosts] = useState([]);

  const toggleLike = (postId) => {
    const isLiked = likedPosts.includes(postId);
    if (isLiked) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity
      style={styles.postContainer}
      onPress={() => navigation.navigate('PostDetailsPage', { postId: item.id })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <Text style={styles.caption}>{item.caption}</Text>
      <TouchableOpacity onPress={ async() => {
        
        try {
          const response = await axios.post(baseIP + '/api/favorite-books', {
            user_id: id,
            book_title: item.caption,
            author: item.imageUrl,
          });
        
          // Handle the successful response
          console.log(response.data);
        } catch (error) {
          // Handle the error
          console.error('Error:', error);
        
          // If needed, you can access more details about the error
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
          }
        }

        // Handle the response as needed
        console.log('Response:', response.data['message']);
        console.log(item.caption);
        toggleLike(item.id);
      } 
      }style={styles.likeButton}>
        <Text style={likedPosts.includes(item.id) ? styles.likeTextActive : styles.likeText}>
          &#10084; Like
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Fiction Books</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderPostItem}
        numColumns={1} // Adjust the number of columns as needed
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162F65',
    padding: 20,
    paddingTop: 60,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  postContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  caption: {
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    padding: 10,
  },
  likeText: {
    fontSize: 16,
    color: '#fff',
  },
  likeTextActive: {
    fontSize: 16,
    color: '#e74c3c', // Red color for active like
  },
});

export default FictionPage;

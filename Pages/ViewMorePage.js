// ViewMorePage.js

import React, { useState , useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const initialData = [
  {
    id: '1',
    content: 'Exciting Fiction Book\n\n for those who are interested, dm me @erusshab',
    user:{name:"a"},
    imageUrl: 'https://placekitten.com/300/200',
  },
  {
    id: '2',
    content: 'Thrilling Horror Book\n\n for those who are interested, dm me @michellea',
    user:{name:"a"},
    imageUrl: 'https://placekitten.com/300/200',
  },

  {
    id: '3',
    content: 'Amazing Sci-Fi Adventure\n\n message me if you want to grab this book!',
    user:{name:"a"},
    imageUrl: 'https://placekitten.com/300/200',
  },
  {
    id: '4',
    content: 'Educational Masterpiece\n\n perfect for students, contact me for details!',
    user:{name:"a"},
    imageUrl: 'https://placekitten.com/300/200',
  },
  // Add more data as needed
];

const ViewMorePage = () => {

  const baseIP = 'http://127.0.0.1:8000';

  const [data, setData] = useState(initialData);
  

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get(baseIP+"/api/get-posts");
        console.log(response.data.data)
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);





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
      <Image source={{ uri: 'https://placekitten.com/300/200' }} style={styles.postImage} />
      <Text style={styles.caption}>{ item.content +'\n@' + item.user.name}</Text>
      <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.likeButton}>
        <Text style={likedPosts.includes(item.id) ? styles.likeTextActive : styles.likeText}>
          &#10084; Like
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Posts</Text>
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

export default ViewMorePage;

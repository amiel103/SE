// ViewMorePage.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    caption: 'Into Thin Air\n\n for those who are interested, dm me @erusshab',
    imageUrl: 'https://placekitten.com/300/200',
  },
  {
    id: '2',
    caption: 'Guns, Germs, and Steel\n\n for those who are interested, dm me @michellea',
    imageUrl: 'https://placekitten.com/300/200',
  },
  {
    id: '3',
    caption: 'Sapiens: A Brief History of Humankind\n\n message me if you want to grab this book!',
    imageUrl: 'https://placekitten.com/300/200',
  },
  {
    id: '4',
    caption: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup\n\n perfect for students, contact me for details!',
    imageUrl: 'https://placekitten.com/300/200',
  },
  // Add more data as needed
];

const FavPage = () => {
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
      <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.likeButton}>
        <Text style={likedPosts.includes(item.id) ? styles.likeTextActive : styles.likeText}>
          &#10084; Like
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Favorites</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderPostItem}
        numColumns={1} // a the number of columns as needed
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cb7400',
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

export default FavPage;

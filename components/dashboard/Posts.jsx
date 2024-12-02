import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import ModalForComment from './ModalForComment'

const postData = [
  {
    id: 1,
    name: 'Madhusudhan Rao',
    imageUrl: 'https://via.placeholder.com/50',
    postImage: {
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'This is a post captionThis is a post captionThis is a post caption',
    },
  },
  {
    id: 2,
    name: 'John Doe',
    imageUrl: 'https://via.placeholder.com/50',
    postImage: {
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'This is another post caption',
    },
  },
  {
    id: 3,
    name: 'Jane Doe',
    imageUrl: 'https://via.placeholder.com/50',
    postImage: {
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Yet another post caption',
    },
  },
];

export default function Posts() {
  const [expandedPostIds, setExpandedPostIds] = useState([]);

  const toggleCaption = (postId) => {
    setExpandedPostIds((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const truncateCaption = (caption, isExpanded) => {
    if (isExpanded || caption.length <= 25) return caption;
    return `${caption.slice(0, 25)}...`;
  };

  const [toggleSave, setToggleSave] = useState({});
  const [toggleLikePost, setTogglePostLike] = useState({});

  const saveToggleFunction = (postId) => {
    setToggleSave((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const toggleLikeFunction = (postId) => {
    setTogglePostLike((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const [commentClick, setCommentClick] = useState(false)

  return (
    <ScrollView style={styles.container}>
      {postData.map((data) => {
        const isExpanded = expandedPostIds.includes(data.id);
        const isSaved = toggleSave[data.id];
        const isLikePost = toggleLikePost[data.id];
        return (
          <View key={data.id} style={styles.postContainer}>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.userInfo}>
                <Image source={{ uri: data.imageUrl }} style={styles.userImage} />
                <Text style={styles.userName}>{data.name}</Text>
              </View>
            </View>

            <View style={styles.postContent}>
              <Image source={{ uri: data.postImage.imageUrl }} style={styles.postImage} />
              <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingTop:2,}}>
              <View style={styles.iconRow}>
                <TouchableOpacity onPress={() => toggleLikeFunction(data.id)}>
                  <FontAwesome
                    name={isLikePost ? 'heart' : 'heart-o'} // Filled heart when liked
                    size={24}
                    color={isLikePost ? 'red' : 'black'} // Red when liked, black when not liked
                    style={{
                      backgroundColor: 'transparent', // No background needed
                      padding: 6,
                      borderRadius: 50,
                    }}
                  />
                </TouchableOpacity >

                <TouchableOpacity onPress={()=> setCommentClick(true)}>
                <Ionicons name="chatbubble-outline" size={24} color="black" />
                </TouchableOpacity>

                {commentClick && <ModalForComment />}

                <Ionicons name="share-social-outline" size={24} color="black" />
              </View>
              <View>
                <TouchableOpacity onPress={() => saveToggleFunction(data.id)}>
                  <Ionicons
                    name={isSaved ? 'bookmark' : 'bookmark-outline'} 
                    size={24}
                    color={isSaved ? 'black' : ''}
                    style={{
                      // backgroundColor: isSaved ? 'black' : 'transparent', 
                      // padding: 6,
                      // borderRadius: 50,
                    }}
                  />
                </TouchableOpacity>
              </View>
              </View>
              <View style={styles.captionContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginRight: 4 }}>{data.name}</Text>
                <Text style={styles.caption}>
                  {truncateCaption(data.postImage.caption, isExpanded)}
                </Text>
                {!isExpanded && data.postImage.caption.length > 25 && (
                  <TouchableOpacity onPress={() => toggleCaption(data.id)}>
                    <Text style={styles.moreText}>more</Text>
                  </TouchableOpacity>
                )}
                {isExpanded && (
                  <TouchableOpacity onPress={() => toggleCaption(data.id)}>
                    <Text style={styles.moreText}>less</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'start', // Evenly distributes the icons horizontally
    alignItems: 'center',
     gap: 15,
  },

  container: {
    // padding: 10,
  },
  postContainer: {
    marginBottom: 10,
    // padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 4,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  postContent: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 5,
  },
  captionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10, paddingTop:2,
  },
  caption: {
    fontSize: 13,
    color: '#555',
    marginRight: 5,
    paddingHorizontal: 10,
    paddingTop: 4,
  },
  moreText: {
    fontSize: 12,
    color: '#007BFF',
  },
});

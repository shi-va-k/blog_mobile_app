// import { View, Text, ScrollView, Image } from 'react-native'
// import React from 'react'


// const postData = [
//     {
//         id: 1,
//         name: 'madhusudhan Rao',
//         imageUrl: 'https://via.placeholder.com/50',
//        postImage: {
//         imageUrl: 'https://via.placeholder.com/50', 
//         caption: 'gbiufbjkfdrg' ,
//         }
//     }
// ]

// export default function Posts() {
//   return (
//     <View>
//         {/* <ScrollView vertical showsHorizontalScrollIndicator={false}> */}
//       {/* <Text> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text> */}
//       {/* </ScrollView> */}
//       <View>
//         {/* <View> */}
//         {postData.map((data)=>(
//             <View style={{display:'flex', flexDirection:'column', backgroundColor:'white',  }}>
//             <View  key={data.id} style={{display:'flex', flexDirection:'row', gap: 3}}>
//                 <Image source={{ uri: data.imageUrl }} style={{width: 'full', height: 'full',}} />
//                 <Text>{data.name}</Text>
//             </View>
//             <View>
//             <Image source={{ uri: data.postImage.imageUrl }} />
//             <Text>{data.postImage.caption}</Text>
//             </View>
//             </View>
//         ))}
//         {/* </View> */}
//       </View>
//     </View>
//   )
// }

import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';

const postData = [
    {
      id: 1,
      name: 'Madhusudhan Rao',
      imageUrl: 'https://via.placeholder.com/50',
      postImage: {
        imageUrl: 'https://via.placeholder.com/150',
        caption: 'This is a post caption',
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
  return (
    <View style={styles.container}>
      {postData.map((data) => (
        <View key={data.id} style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Image source={{ uri: data.imageUrl }} style={styles.userImage} />
            <Text style={styles.userName}>{data.name}</Text>
          </View>

          <View style={styles.postContent}>
            <Image source={{ uri: data.postImage.imageUrl }} style={styles.postImage} />
            <Text style={styles.caption}>{data.postImage.caption}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  postContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3, // for Android shadow
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make it circular
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  postContent: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%', // Fill the width of the container
    height: 200,   // Set a fixed height for the image
    borderRadius: 5,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    color: '#555',
  },
});

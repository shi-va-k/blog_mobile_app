import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white p-4 px-5">
        <View>
          <View className="flex flex-row justify-between items-center ">
            <View className="flex flex-row justify-center items-center gap-3">
              <Text className="text-lg font-bold text-black ">hlooooo</Text>
              <FontAwesome name="angle-down" size={20} />
            </View>
            <FontAwesome name="bars" size={24} color="black" />
          </View>

          <View className="flex flex-row items-center justify-between mt-5">
            {/* Profile Image */}
            <View className="flex items-center">
              <Image
                className="bg-gray-500 h-24 w-24 rounded-full"
                source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
              />
            </View>

            {/* Posts */}
            <View className="flex items-center">
              <Text className="text-lg font-bold">178</Text>
              <Text className="text-gray-600">Posts</Text>
            </View>

            {/* Followers */}
            <View className="flex items-center">
              <Text className="text-lg font-bold">878</Text>
              <Text className="text-gray-600">Followers</Text>
            </View>

            {/* Following */}
            <View className="flex items-center">
              <Text className="text-lg font-bold">578</Text>
              <Text className="text-gray-600">Following</Text>
            </View>
          </View>

          <View><Text className='ml-2 font-bold text-gray-500'>hlooooo</Text>
            <View>
              <Text>Jai Balayyaa jj🔥🔥💘</Text>
            </View>
          </View>

          <View className='w-full bg-gray-200 mt-4 p-2 rounded-md'>
            <Text className='text-center'>Edit Profile</Text>
          </View>

          {/* Icons in Row */}
          <View className="flex flex-row justify-between items-center mt-4">
            <FontAwesome 
              name="play-circle"
              size={34}
              color="black" 
            />
            <FontAwesome 
              name="play-circle"
              size={34}
              color="black" 
            />
            <FontAwesome 
              name="play-circle"
              size={34}
              color="black" 
            />
            <FontAwesome 
              name="play-circle"
              size={34}
              color="black" 
            />
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
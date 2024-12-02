
// import { View, Text } from 'react-native'
// import React from 'react'
// import { Stack } from 'expo-router'
// import LoginScreen from '../../components/layout/Login'
// export default function index() {
//   return (
//     <>
//     <Stack.Screen options={{headerShown: false}}/>
//     <View>
//       {/* <Text>index</Text> */}
//       <LoginScreen />
//     </View>
//     </>
//   )
// }
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import LoginScreen from '../../components/layout/Login';
import  Header  from '../../components/dashboard/Header';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <LoginScreen /> */}
      <Header />
    </SafeAreaView>
  );
}

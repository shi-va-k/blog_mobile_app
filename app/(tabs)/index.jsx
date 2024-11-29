
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import LoginScreen from '../../components/layout/Login'
export default function index() {
  return (
    <>
    <Stack.Screen options={{headerShown: false}}/>
    <View>
      {/* <Text>index</Text> */}
      <LoginScreen />
    </View>
    </>
  )
}
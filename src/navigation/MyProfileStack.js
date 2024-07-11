import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

import { View, Text } from 'react-native'
import React from 'react'
import Header from "../components/Header";
import MyProfile from "../screens/profile/MyProfile";
import ImageSelector from "../screens/profile/ImageSelector";

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={
        {
          header: () => <Header title={"Profile"} />
        }
      }
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />

    </Stack.Navigator>
  )
}

export default MyProfileStack
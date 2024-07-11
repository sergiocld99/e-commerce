import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

import { View, Text } from 'react-native'
import React from 'react'
import Header from "../components/Header";
import MyProfile from "../screens/MyProfile";

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

    </Stack.Navigator>
  )
}

export default MyProfileStack
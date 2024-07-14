import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

import { View, Text } from 'react-native'
import React from 'react'
import Header from "../components/Header";
import MyProfile from "../screens/profile/MyProfile";
import ImageSelector from "../screens/profile/ImageSelector";
import LocationSelector from "../screens/location/LocationSelector";
import ListAddress from "../screens/location/ListAddress"

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
      <Stack.Screen name="Location Selector" component={LocationSelector} />
      <Stack.Screen name="List Address" component={ListAddress} />
      

    </Stack.Navigator>
  )
}

export default MyProfileStack
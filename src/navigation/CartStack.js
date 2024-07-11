import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from "../screens/Cart"
import Header from "../components/Header"

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Cart'
      screenOptions={({route}) => ({
        header: () => <Header title={"Cart"} />
      })}
    >
      <Stack.Screen name='Cart' component={Cart} />
    </Stack.Navigator>
  )
}

export default CartStack
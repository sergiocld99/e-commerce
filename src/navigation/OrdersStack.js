import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from "../screens/Cart"
import Header from "../components/Header"
import Orders from '../screens/Orders'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Orders'
      screenOptions={() => (
        {
          header: () => <Header title={"Orders"} />
        }
      )}
    >
      <Stack.Screen name='Orders' component={Orders} />
    </Stack.Navigator>
  )
}

export default OrdersStack
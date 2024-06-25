import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          ({route}) => ({
            header: () => {
              return <Header title={route.name === "ItemListCategory" ? route.params.category : 
                route.name === "ItemDetail" ? "Detail" : "Categories"
              } />
            }
          })
        } 
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
  )
}

export default ShopNavigator
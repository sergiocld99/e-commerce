import React from 'react'
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Categories from '../screens/Categories'

const Stack = createNativeStackNavigator()

const ShopStack = () => {
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
        <Stack.Screen name="Home" component={Categories} />
        <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
  )
}

export default ShopStack
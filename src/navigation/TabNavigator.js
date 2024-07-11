import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'

// icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import OrdersNavigator from './OrdersNavigator'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  // NavigationContainer solo debe encontrarse en el elemento de mayor jerarquía
  
  return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen name='ShopTab' component={ShopNavigator} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons name="shopping-outline" size={24} color={focused ? "green" : "gray"} />
            </View>
          )
        }} />
        <Tab.Screen name='CartTab' component={CartNavigator} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialIcons name="shopping-cart" size={24} color={focused ? "green" : "gray"} />
            </View>
          )
        }} />
        <Tab.Screen name='OrdersTab' component={OrdersNavigator} options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons name="order-bool-ascending" size={24} color={focused ? "green" : "gray"} />
            </View>
          )
        }} />
      </Tab.Navigator>
  )
}

export default TabNavigator
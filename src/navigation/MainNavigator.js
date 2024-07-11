import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import AuthStack from "./AuthStack"
import { useSelector } from "react-redux"

const MainNavigator = () => {
  const user = useSelector(state => state.authSlice.value.user)

  return (
    <NavigationContainer>
      {/* Mostrar pantalla de logueo o tabs segun estado de autenticacion */}
      {
        user ? <TabNavigator /> : <AuthStack /> 
      }
    </NavigationContainer>
  )
}

export default MainNavigator
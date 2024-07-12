import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import AuthStack from "./AuthStack"
import { useDispatch, useSelector } from "react-redux"
import { useGetProfilePictureQuery } from "../services/shopService"
import { setProfilePicture } from "../features/auth/authSlice"

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authSlice.value)
  const dispatch = useDispatch()

  // firebase (usar {} con los nombres exactos)
  const {data, error, isLoading} = useGetProfilePictureQuery(localId)

  useEffect(() => {
    if (data) dispatch(setProfilePicture(data.image))
    else console.log("No se encontro foto de perfil en firebase")
  }, [data])

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
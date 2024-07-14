import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import AuthStack from "./AuthStack"
import { useDispatch, useSelector } from "react-redux"
import { useGetProfilePictureQuery, useGetUserLocationQuery } from "../services/shopService"
import { setProfilePicture, setUserLocation } from "../features/auth/authSlice"

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authSlice.value)
  const dispatch = useDispatch()

  // firebase (usar {} con los nombres exactos)
  const {data: pfpData} = useGetProfilePictureQuery(localId)
  const {data: locationData} = useGetUserLocationQuery(localId)

  useEffect(() => {
    if (pfpData) dispatch(setProfilePicture(pfpData.image))
    else if (localId) console.log("No registered profile photo found")
  }, [pfpData])

  useEffect(() => {
    if (locationData) dispatch(setUserLocation(locationData))
      else if (localId) console.log("No registered location found")
  }, [locationData])

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
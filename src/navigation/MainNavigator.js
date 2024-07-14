import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./TabNavigator"
import AuthStack from "./AuthStack"
import { useDispatch, useSelector } from "react-redux"
import { useGetProfilePictureQuery, useGetUserLocationQuery } from "../services/shopService"
import { setProfilePicture, setUser, setUserLocation } from "../features/auth/authSlice"
import { getLocalSession } from "../db"

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authSlice.value)
  const dispatch = useDispatch()

  // get session from local db
  const queryLocalSession = async() => {
    getLocalSession().then(res => {
      if (res?.rows.length) {
        const user = res.rows._array[0]
        // if user found, there's no need to show login screen
        dispatch(setUser({
          data: user
        }))
      }
    }).catch(err => console.log("Cannot get local session", err.message))
  }

  // firebase (usar {} con los nombres exactos)
  const {data: pfpData} = useGetProfilePictureQuery(localId)
  const {data: locationData} = useGetUserLocationQuery(localId)

  // on load component (get last session)
  useEffect(() => {
    queryLocalSession()
  }, [])

  // on fetch pfp from firebase
  useEffect(() => {
    if (pfpData) {
      console.log("Getting profile photo")
      dispatch(setProfilePicture(pfpData.image))
    } else if (localId) console.log("No registered profile photo found")
  }, [pfpData])

  // on fetch location from firebase
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
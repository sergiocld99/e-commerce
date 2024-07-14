import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import BigButton from '../../components/BigButton'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'

// "navigation" es el nombre obligatorio del atributo para navegar
const MyProfile = ({navigation}) => {
  const image = useSelector(state => state.authSlice.value.imageCamera)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(clearUser())
    deleteSession({localId})
      .then(res => console.log(res))
  }
  
  return (
    <View style={styles.container}>
      {
        image ? <>
          <Image source={{uri: image}} style={styles.img} resizeMode='cover' />
        </> : 
        <>
          <Image source={require("../../../assets/default-pfp.png")} style={styles.img} />
        </>
      }
      <BigButton onPress={() => navigation.navigate("Image Selector")} title={"Replace photo"} customWidth={130} />
      <BigButton onPress={() => navigation.navigate("List Address")} title={"My addresses"} customWidth={130} />
      <BigButton onPress={onLogout} title={"Logout"} customWidth={130} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  img: {
    width: 160,
    height: 160,
    marginVertical: 20,
    borderRadius: 80,
    borderColor: 'yellow',
    borderWidth: 4
  }
})

export default MyProfile
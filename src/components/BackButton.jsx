import { View, Text, Pressable } from 'react-native'
import React from 'react'

// icons
import { AntDesign } from '@expo/vector-icons';


const BackButton = ({navigation}) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" style={{marginTop: 15, alignSelf: 'center'}} />
      </Pressable>
  )
}

export default BackButton
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { staticMapsApiKey } from '../keys/gcpKeys'

const MapPreview = ({location}) => {
  // url
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:red%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${staticMapsApiKey}`

  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  img: {
    width: 300,
    height: 300,
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 20
  }
})

export default MapPreview
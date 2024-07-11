import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const BigButton = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'yellow',
    marginVertical: 50
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default BigButton
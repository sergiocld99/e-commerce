import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

// icons
import { Feather } from '@expo/vector-icons';

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{width: "85%"}}>
        <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        <Text>{item.brand}</Text>
        <Text style={{fontWeight: 'bold'}}>${item.price}</Text>
      </View>
      <Pressable onPress={() => {}}>
        <Feather name="trash" size={24} color="black" />
      </Pressable>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'yellow',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})

export default CartItem
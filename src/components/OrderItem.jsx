import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

// icons
import { Feather } from '@expo/vector-icons';

const OrderItem = ({item}) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(item.items.reduce((tot, curr) => (tot += curr.price * curr.quantity), 0))
  })

  return (
    <View style={styles.container}>
      <View style={{width: "85%"}}>
        <Text style={{fontWeight: 'bold'}}>{new Date(item.createdAt).toLocaleString()}</Text>
        <Text style={{fontWeight: 'bold'}}>${total}</Text>
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

export default OrderItem
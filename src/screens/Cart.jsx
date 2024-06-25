import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'

// data
import allCartItems from "../data/cart.json"
import CartItem from '../components/CartItem'

const Cart = () => {
  const [items, setItems] = useState(allCartItems)

  return (
    <View>
      <FlatList data={items} 
        renderItem={({item}) => (<CartItem item={item} />)}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Cart
import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

// data
import allCartItems from "../data/cart.json"
import CartItem from '../components/CartItem'

const Cart = () => {
  const [items, setItems] = useState({})
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // para reducer, seteamos valor inicial 0, lo cual a su vez hace que sea tipo number
    const total = allCartItems.reduce((tot, curr) => tot + curr.quantity * curr.price, 0)
    setItems(allCartItems)
    setTotal(total)
  }, [allCartItems])

  return (
    <View style={{backgroundColor: '#aaffaa', flex: 1, paddingBottom: 20}}>
      <FlatList data={items} 
        renderItem={({item}) => (<CartItem item={item} />)}
        keyExtractor={item => item.id}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center'}}>
        <Pressable style={{backgroundColor: '#00ff00', padding: 10, borderRadius: 10, borderWidth: 2}} onPress={() => {}}>
          <Text style={{fontWeight: 'bold'}}>Confirm</Text>
        </Pressable>
        <Text style={{fontWeight: 'bold'}}>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart
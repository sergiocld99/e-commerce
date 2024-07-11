import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

// data
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'

const Cart = () => {
  //const [items, setItems] = useState({})
  //const [total, setTotal] = useState(0)

  // desde store
  const items = useSelector(state => state.cartSlice.value.items)
  const total = useSelector(state => state.cartSlice.value.total)

  // RTK Hook: devuelve un array
  const [triggerPost, result] = usePostOrderMutation()
  
  const onConfirmCart = () => {
    triggerPost({total, items, user: 'Sergio'})
  }

  return (
    <View style={{backgroundColor: '#aaffaa', flex: 1, paddingBottom: 20}}>
      <FlatList data={items} 
        renderItem={({item}) => (<CartItem item={item} />)}
        keyExtractor={item => item.id}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center'}}>
        <Pressable onPress={() => onConfirmCart()} style={{backgroundColor: '#00ff00', padding: 10, borderRadius: 10, borderWidth: 2}} >
          <Text style={{fontWeight: 'bold'}}>Confirm</Text>
        </Pressable>
        <Text style={{fontWeight: 'bold'}}>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart
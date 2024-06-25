import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'

// data
import allOrders from "../data/orders.json"
import OrderItem from '../components/OrderItem'

const Orders = () => {
  const [items, setItems] = useState(allOrders)
  
  return (
    <View style={{backgroundColor: '#aaffaa', flex: 1}}>
      <FlatList data={items}
        renderItem={({item}) => (
          <View>
            <OrderItem item={item} />
          </View>
        )}
        keyExtractor={item => item.id}  
      />
    </View>
  )
}

export default Orders
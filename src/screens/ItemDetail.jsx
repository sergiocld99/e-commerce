import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

// icons
import { AntDesign } from '@expo/vector-icons';

// data
import allProducts from '../data/products.json'
import Header from '../components/Header'

const ItemDetail = ({productId, setProductId}) => {
  const [product, setProduct] = useState({})

  // retrieve product
  useEffect(() => {
    const found = allProducts.find(p => p.id === productId)
    setProduct(found)
  }, [productId])

  return (
    <View style={{width: '100%'}}>
      <Header title={"Detail"} />
      <Pressable onPress={() => setProductId("")}>
          <AntDesign name="arrowleft" size={24} color="black" style={{marginTop: 15, alignSelf: 'center'}} />
        </Pressable>
    </View>
  )
}

export default ItemDetail
import { View, Text, Pressable, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

// icons
import { AntDesign } from '@expo/vector-icons';

// data
import allProducts from '../data/products.json'
import Header from '../components/Header'

const ItemDetail = ({productId, setProductId}) => {
  const [product, setProduct] = useState(null)

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

      {!product ? null : (
        <View style={{marginHorizontal: 20, gap: 10}}>
          <Image style={styles.img} resizeMode='cover' source={{uri: product.images[0]}} />
          <Text style={{fontWeight: 'bold'}}>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>${product.price}</Text>
          <Pressable style={styles.buy}>
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Buy</Text>
          </Pressable>
        </View>
      ) }

    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300
  },
  buy: {
    borderWidth: 2,
    borderColor: 'brown',
    borderRadius: 10,
    paddingHorizontal: 5,
    backgroundColor: 'yellow',
    width: 80
  }
})

export default ItemDetail
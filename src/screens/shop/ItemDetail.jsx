import { View, Text, Pressable, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

// icons
import { AntDesign } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { useGetProductByIdQuery } from '../../services/shopService';
import { addItem } from '../../features/cart/cartSlice';
import BigButton from '../../components/BigButton';

const ItemDetail = ({navigation, route}) => {
  const [product, setProduct] = useState(null)
  const [portrait, setPortrait] = useState(false)
  const productId = useSelector(state => state.shopSlice.value.productIdSelected)
  const {data, isLoading, error} = useGetProductByIdQuery(productId)
  const dispatch = useDispatch()

  // orientacion
  const {width, height} = useWindowDimensions()

  // funcion de agregado a carrito
  const onAddToCart = () => {
    dispatch(addItem({...product, quantity: 1}))
  }

  useEffect(() => {
    if (data) setProduct(data)
  }, [productId, data])

  useEffect(() => {
    setPortrait(height > width)
  }, [width, height])

  return (
    <View style={{width: '100%', backgroundColor: '#aaffaa', flex: 1}}>
      <Pressable onPress={() => navigation.navigate("ItemListCategory", {category: product?.category || ''})}>
        <AntDesign name="arrowleft" size={24} color="black" style={{marginTop: 15, alignSelf: 'center'}} />
      </Pressable>

      {!product ? null : portrait ? (
        <View style={{marginHorizontal: 20, gap: 10}}>
          <Image style={styles.img} resizeMode='center' source={{uri: product.images[0]}} />
          <Text style={{fontWeight: 'bold'}}>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>${product.price}</Text>
          <BigButton onPress={onAddToCart} title={"Add to cart"} />
        </View>
      ) : (
        <View style={{flexDirection: 'row', height: "75%"}}>
          <Image style={styles.imgLandscape} resizeMode='center' source={{uri: product.images[0]}} />
          <View style={{width: "50%", flexDirection: 'column', justifyContent: 'center', height: '75%', gap: 10}}>
            <Text style={{fontWeight: 'bold'}}>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>${product.price}</Text>
            <BigButton onPress={onAddToCart} title={"Add to cart"} />
          </View>
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
  imgLandscape: {
    height: "75%",
    width: "50%"
  },
  buy: {
    borderWidth: 2,
    borderColor: 'brown',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 4,
    backgroundColor: 'yellow',
    width: 200
  }
})

export default ItemDetail
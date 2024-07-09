import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../features/shop/shopSlice'

const ProductItem = ({item, navigator}) => {
  const dispatch = useDispatch()
  
  return (
    <Pressable style={styles.container} onPress={() => {
      // Establece el ID de producto en Store para poder cargarlo
      dispatch(setProductIdSelected(item.id))

      // El título de la pantalla a mostrar es "Detail" para todo producto
      navigator.navigate("ItemDetail")
    }}>
      <Image style={styles.img} resizeMode='center' source={{uri: item.images[0]}} />
      <View style={{width: '80%'}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{marginEnd: 10, textAlign: 'justify'}}>{item.description}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 4,
        marginVertical: 4,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        gap: 10
    },
    title: {
        fontWeight: 'bold'
    },
    img: {
      width: 60,
      height: 60,
      alignSelf: 'center'
    }
})

export default ProductItem
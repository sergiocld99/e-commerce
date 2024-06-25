import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const ProductItem = ({item, setProductId}) => {
  return (
    <Pressable style={styles.container} onPress={() => setProductId(item.id)}>
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
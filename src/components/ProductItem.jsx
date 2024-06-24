import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProductItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
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
        backgroundColor: 'lightgray'
    },
    title: {
        fontWeight: 'bold'
    }
})

export default ProductItem
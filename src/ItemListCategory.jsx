import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Search from './components/Search'
import Header from './components/Header'

const ItemListCategory = ({category}) => {
  return (
    <View>
      <Header title={category || "Products"} />
      <Search onSearch={() => {}} />
    </View>
  )
}

export default ItemListCategory
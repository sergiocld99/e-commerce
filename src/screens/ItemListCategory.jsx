import { View, Text, StyleSheet, FlatList, Pressable, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'

// icons
import { AntDesign } from '@expo/vector-icons';

// data
import allProducts from "../data/products.json"
import ProductItem from '../components/ProductItem'

const ItemListCategory = ({category, onBackPressed, onProductPressed}) => {
  // estados
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])

  // filtrado según categoría y query
  useEffect(() => {
    const filtered_1 = category ? allProducts.filter(p => p.category === category) : allProducts
    const filtered_2 = filtered_1.filter(p => p.title.includes(query))
    setProducts(filtered_2)
  }, [category, query])

  return (
    <View>
      <Header title={category || "Products"} />
      <View style={{flexDirection: 'row', width: '100%', marginHorizontal: 20, gap: 20}}>
        <Pressable onPress={onBackPressed}>
          <AntDesign name="arrowleft" size={24} color="black" style={{marginTop: 15}} />
        </Pressable>
        <Search onSearch={setQuery} />
      </View>
      
      <View >
        <FlatList data={products}
          renderItem={({item}) => <ProductItem item={item} setProductId={onProductPressed} /> }
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default ItemListCategory
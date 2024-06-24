import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import Header from './components/Header'

// data
import allProducts from "./data/products.json"
import ProductItem from './components/ProductItem'

const ItemListCategory = ({category}) => {
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
      <Search onSearch={setQuery} />
      <View style={styles.content} >
        <FlatList data={products}
          renderItem={({item}) => <ProductItem item={item} /> }
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 10
  }
})

export default ItemListCategory
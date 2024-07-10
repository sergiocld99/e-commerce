import { View, Text, StyleSheet, FlatList, Pressable, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../components/Header'

// icons
import { AntDesign } from '@expo/vector-icons';

import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux';
import { useGetProductsOfCategoryQuery, useGetProductsQuery } from '../services/shopService';

const ItemListCategory = ({navigation, route}) => {
  // estados
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])
  
  // categoría obtenida desde Store
  const category = useSelector(state => state.shopSlice.value.categorySelected)

  // ex: filtrado según categoría desde Store
  //const filteredProductsOfCategory = useSelector(state => state.shopSlice.value.filteredProductsOfCategory)

  // filtrado según categoría desde Firebase
  const {data: filteredProductsOfCategory, isLoading, error} = useGetProductsOfCategoryQuery(category)

  // filtrado según query
  useEffect(() => {
    if (filteredProductsOfCategory){
      const filtered = filteredProductsOfCategory.filter(p => p.title.includes(query))
      setProducts(filtered)
    }
  }, [filteredProductsOfCategory, query])

  return (
    <View style={{backgroundColor: '#aaffaa', flex: 1}}>
      <View style={{flexDirection: 'row', width: '100%', marginHorizontal: 20, gap: 20, marginTop: 12}}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={24} color="black" style={{marginTop: 15}} />
        </Pressable>
        <Search onSearch={setQuery} />
      </View>
      
      <View >
        <FlatList data={products}
          renderItem={({item}) => <ProductItem item={item} navigator={navigation} /> }
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default ItemListCategory
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const Categories = ({navigation}) => {
  const categories = useSelector(state => state.shopSlice.value.categories)
  const dispatch = useDispatch()

  return (
    <View style={{ width: "100%", backgroundColor: '#aaffaa', flex: 1 }}>
      <Counter />
      <FlatList
        data={categories}
        renderItem={({ item }) => 
          <Pressable 
            onPress={() => {
              // Se setea categoria en Store para obtener sus productos en dicha pantalla
              dispatch(setCategorySelected(item))

              // Se pasa la categoria al navigator para mostrarlo como titulo
              navigation.navigate("ItemListCategory", {category: item})
            }}>
            <Text style={styles.category}>{item}</Text>
          </Pressable> 
        }
        keyExtractor={(item) => item}
        style={{paddingTop: 12}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    fontFamily: 'Josefin',
    textAlign: "center",
    fontSize: 24,
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 10,
    marginHorizontal: 40,
    marginVertical: 10,
  },
});

export default Categories;

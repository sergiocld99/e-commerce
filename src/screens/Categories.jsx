import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

// data
import allCategories from "../data/categories.json";
import Header from "../components/Header";
import Counter from "../components/Counter";

const Categories = ({navigation}) => {
  const [categories, setCategories] = useState(allCategories);

  return (
    <View style={{ width: "100%", backgroundColor: '#aaffaa', flex: 1 }}>
      <Counter />
      <FlatList
        data={categories}
        renderItem={({ item }) => <Pressable onPress={() => navigation.navigate("ItemListCategory", {category: item})}>
          <Text style={styles.category}>{item}</Text>
        </Pressable> }
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

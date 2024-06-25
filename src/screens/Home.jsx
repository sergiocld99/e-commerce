import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

// data
import allCategories from "../data/categories.json";
import Header from "../components/Header";

const Home = ({navigation}) => {
  const [categories, setCategories] = useState(allCategories);

  return (
    <View style={{ width: "100%" }}>
      <Header title={"Categories"} />
      <FlatList
        data={categories}
        renderItem={({ item }) => <Pressable onPress={() => navigation.navigate("ItemListCategory", {category: item})}>
          <Text style={styles.category}>{item}</Text>
        </Pressable> }
        keyExtractor={(item) => item}
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

export default Home;

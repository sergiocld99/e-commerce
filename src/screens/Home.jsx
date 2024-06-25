import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

// data
import allCategories from "../data/categories.json";
import Header from "../components/Header";

const Home = ({onSelectCategory}) => {
  const [categories, setCategories] = useState(allCategories);

  return (
    <View style={{ width: "100%" }}>
      <Header title={"Categories"} />
      <FlatList
        data={categories}
        renderItem={({ item }) => <Pressable onPress={() => onSelectCategory(item)}>
          <Text style={styles.category}>{item}</Text>
        </Pressable> }
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
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

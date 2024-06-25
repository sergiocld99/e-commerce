import { StyleSheet, View } from "react-native";
import ItemListCategory from "./src/screens/ItemListCategory";
import Home from "./src/screens/Home";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [category, setCategory] = useState("");
  const [fontsLoaded] = useFonts({
    Josefin: require('./assets/fonts/josefin-sans/JosefinSans-Bold.ttf')
  })

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      {!category ? (
        <Home onSelectCategory={setCategory} />
      ) : (
        <ItemListCategory category={category} onBackPressed={() => setCategory("")} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaffaa",
    alignItems: "center",
    justifyContent: "start",
  },
});

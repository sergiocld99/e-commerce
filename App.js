import { StyleSheet, View } from "react-native";
import ItemListCategory from "./src/screens/ItemListCategory";
import Home from "./src/screens/Home";
import { useState } from "react";
import { useFonts } from "expo-font";
import ItemDetail from "./src/screens/ItemDetail";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  const [category, setCategory] = useState("");
  const [productId, setProductId] = useState("")

  const [fontsLoaded] = useFonts({
    Josefin: require('./assets/fonts/josefin-sans/JosefinSans-Bold.ttf')
  })

  if (!fontsLoaded) return null

  return (
    <Navigator />
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

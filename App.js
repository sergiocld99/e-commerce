import { StyleSheet } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import TabNavigator from "./src/navigation/TabNavigator";
import Store from "./src/store/Store";
import { Provider } from "react-redux";

export default function App() {
  const [fontsLoaded] = useFonts({
    Josefin: require('./assets/fonts/josefin-sans/JosefinSans-Bold.ttf')
  })

  if (!fontsLoaded) return null

  return (
    <Provider store={Store}>
      <TabNavigator />
    </Provider>
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

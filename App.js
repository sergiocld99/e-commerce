import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Store from "./src/store/Store";
import { Provider } from "react-redux";
import MainNavigator from "./src/navigation/MainNavigator";
import { init } from "./src/db";

// db init
init()
  .then(() => console.log("DB initialized"))
  .catch(err => console.log("DB initialization failed", err.message))

export default function App() {
  const [fontsLoaded] = useFonts({
    Josefin: require('./assets/fonts/josefin-sans/JosefinSans-Bold.ttf')
  })

  if (!fontsLoaded) return null

  return (
    <Provider store={Store}>
      <MainNavigator />
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

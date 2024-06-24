import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './src/components/Search';
import ItemListCategory from './src/ItemListCategory';

export default function App() {
  return (
    <View style={styles.container}>
      <ItemListCategory />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaffaa',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 20
  },
});

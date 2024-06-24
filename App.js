import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './src/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Search onSearch={() => {}} />
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

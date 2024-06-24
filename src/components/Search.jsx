import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

// icons
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Componente "Buscador"
// Recibe la función a llamar (con argumento input) cuando se presiona la acción de Buscar
const Search = ({onSearch}) => {
  // estado del input
  const [input, setInput] = useState("")

  // acciones
  const performSearch = () => onSearch(input)
  const clearInput = () => {
    setInput("")
    onSearch("")
  }
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={input} 
        onChangeText={setInput} placeholder='Search product...'
      />
      <Pressable onPress={performSearch} >
        <AntDesign name="search1" size={24} color="black" />
      </Pressable>
      <Pressable onPress={clearInput} >
        <Entypo name="cross" size={24} color="black" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 50
  },

  input: {
    width: 200
  }
})

export default Search
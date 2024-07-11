import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const InputForm = ({label, onChange, error, isSecure = false}) => {
  const [input, setInput] = useState("")
  const onChangeText = (text) => {
    setInput(text)

    // comunicacion al screen
    onChange(text)
  }

  return (
    <View>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {/* Mostrar error si corresponde */}
      {
        error ? <Text style={styles.error}>{error}</Text> : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: 'red',
    fontFamily: 'Josefin',
    fontStyle: 'italic'
  },
  input: {
    width: '90%',
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: "#aaffaa",
    padding: 2,
    fontFamily: 'Josefin',
    fontSize: 14
  },
  subtitle: {
    width: '90%',
    fontSize: 16,
    fontFamily: 'Josefin'
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  }
})

export default InputForm
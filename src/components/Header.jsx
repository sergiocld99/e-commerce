import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// Componente Encabezado, que recibe el título a mostrar por props
const Header = ({title}) => {
  return (
    <View style={{paddingVertical: 12}}>
      <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>{title}</Text>
    </View>
  )
}

export default Header
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// Componente Encabezado, que recibe el título a mostrar por props
const Header = ({title}) => {
  return (
    <View style={{paddingTop: 40, paddingBottom: 12, backgroundColor: '#44aa44'}}>
      <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold', fontStyle: 'italic'}}>{title}</Text>
    </View>
  )
}

export default Header
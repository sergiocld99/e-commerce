import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import BigButton from '../../components/BigButton'

const ImageSelector = ({navigation}) => {
  // estado
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()

  // paso 1: verificacion de permisos
  const verifyPermissions = async () => {

  }

  // paso 2: eleccion de imagen
  const pickImage = async () => {

  }

  // paso 3: confirmacion de imagen elegida
  const confirmImage = () => {

  }

  return (
    <View style={styles.container}>
      {
        image ? 
          <>
            {/* Mostrar foto y permitir reemplazo o confirmacion */}
            <Image source={{uri: image}} />
            <BigButton onPress={pickImage} title={"Take another photo"} />
            <BigButton onPress={confirmImage} title={"Confirm photo"} />
          </>
          :
          <>
            <View>
              <Text>No photo selected</Text>
            </View>
            <BigButton onPress={pickImage} title={"Take a photo"} />
          </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})

export default ImageSelector
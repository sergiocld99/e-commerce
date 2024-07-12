import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BigButton from '../../components/BigButton'

// picker
import * as ImagePicker from 'expo-image-picker';
import { setProfilePicture } from '../../features/auth/authSlice';
import { usePostOrderMutation, usePostProfilePictureMutation } from '../../services/shopService';

const ImageSelector = ({navigation}) => {
  // estado
  const [image, setImage] = useState(null)
  const localId = useSelector(state => state.authSlice.value.localId)
  const dispatch = useDispatch()

  // Firebase
  const [triggerPostPfp, result] = usePostProfilePictureMutation()

  // paso 1: verificacion de permisos
  const verifyPermissions = async () => {
    // pedir permiso
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    return granted
  }

  // paso 2: eleccion de imagen
  const pickImage = async () => {
    const havePermission = await verifyPermissions()
    if (!havePermission) return

    let selection = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9,16],
      base64: true,
      quality: 0.2
    })

    if (selection.canceled) {
      console.log("toma de foto cancelada")
    } else {
      // seleccion es un texto en base64
      setImage(`data:image/jpeg;base64,${selection.assets[0].base64}`)
    }
  }

  // paso 3: confirmacion de imagen elegida
  const confirmImage = () => {
    dispatch(setProfilePicture(image))
    triggerPostPfp({image, localId})
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      {
        image ? 
          <>
            {/* Mostrar foto y permitir reemplazo o confirmacion */}
            <Image style={styles.img} source={{uri: image}} />
            <BigButton onPress={pickImage} title={"Take another photo"} customWidth={180} />
            <BigButton onPress={confirmImage} title={"Confirm photo"} customWidth={180} />
          </>
          :
          <>
            <View>
              <Text style={styles.title}>No photo selected</Text>
            </View>
            <BigButton onPress={pickImage} title={"Take a photo"} customWidth={130} />
          </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 25
  },
  img: {
    width: 160,
    height: 160,
    marginVertical: 20,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: 'yellow'
  }
})

export default ImageSelector
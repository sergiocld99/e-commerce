import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import BigButton from '../../components/BigButton'
import BackButton from '../../components/BackButton'

const ListAddress = ({navigation}) => {
  // fetch location from store
  const {locationFormatted} = useSelector(state => state.authSlice.value)

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      {
        locationFormatted ? (
          <View style={styles.locationContainer}>
            <Text>{locationFormatted.address}</Text>
            <BigButton title={"Edit"} onPress={() => navigation.navigate("Location Selector")} />
          </View>
        ) : (
          <>
            <BigButton title={"Add a new one"} onPress={() => navigation.navigate("Location Selector")} />
          </>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'lightgreen'
  },
  locationContainer: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    marginVertical: 20,
    alignItems: 'center',
    width: '90%'
  }
})

export default ListAddress
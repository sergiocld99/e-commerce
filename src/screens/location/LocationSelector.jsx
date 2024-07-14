import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapPreview from "../../components/MapPreview";

import { staticMapsApiKey } from "../../keys/gcpKeys";
import { useDispatch, useSelector } from "react-redux";
import { usePostUserLocationMutation } from "../../services/shopService";
import BigButton from "../../components/BigButton";
import { setUserLocation } from "../../features/auth/authSlice"
import BackButton from "../../components/BackButton";

const LocationSelector = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [address, setAddress] = useState("")
  
  // store
  const { localId } = useSelector(state => state.authSlice.value)
  const dispatch = useDispatch()
  
  // RTK
  const [triggerPostAddress, result] = usePostUserLocationMutation()

  // get location fn
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync({});
      setError("");
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } else {
      setError("Location access permission denied");
    }
  };

  const reverseGeocode = async() => {
    if (location?.latitude){
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${staticMapsApiKey}`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setAddress(data.results[0].formatted_address)
        })
        .catch(err => setError(err.message))
    }
  }

  // after press confirm
  const onConfirmAddress = () => {
    const data = {
      latitude: location.latitude,
      longitude: location.longitude,
      address
    }

    dispatch(setUserLocation(data))
    triggerPostAddress({location: data, localId})
    navigation.goBack()
  }

  // on load component
  useEffect(() => {
    getLocation();
  }, []);

  // on location change detected
  useEffect(() => {
    reverseGeocode()
    console.log("location changed", location)
  }, [location])

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      
      <Text style={{ fontWeight: 'bold', width: "100%", textAlign: "center"}}>My Addresses</Text>
      {location ? (
        <>
          <Text style={{ width: "100%", textAlign: "center" }}>
            {
              address || `Lat: ${location.latitude}, long: ${location.longitude}`
            }
          </Text>
          <View style={styles.noLocationContainer}>
            <MapPreview location={location} />
          </View>
          <BigButton onPress={onConfirmAddress} title={"Confirm"} />
        </>
      ) : (
        <View style={styles.noLocationContainer}>
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 60,
    backgroundColor: "lightgreen",
  },
  noLocationContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "green",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationSelector;

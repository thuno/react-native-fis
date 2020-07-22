import React, {useState} from 'react';
import {Text, View, Button, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationScreen = () => {
  const [myLoca, setMyLoca] = useState({});
  const getLocation = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location',
        message: 'This app would like to view your location',
        buttonPositive: 'Please accept bare mortal',
      },
    ).then(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          setMyLoca({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            altitude: position.coords.altitude,
          });
        },
        (error) => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  };
  return (
    <View>
      <Button title="Location" onPress={getLocation} />
      <Text>
        Longtitude: {myLoca.longitude}
      </Text>
      <Text>
        Latitude: {myLoca.latitude}
      </Text>
      <Text>
        Altitude: {myLoca.altitude}
      </Text>
    </View>
  );
};

export default LocationScreen;

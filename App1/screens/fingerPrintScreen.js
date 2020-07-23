import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FingerPrintScreen = (props) => {
  const [checkFinger, setCheckFinger] = useState({
    errorMessageLegacy: undefined,
    biometricLegacy: undefined,
  });
  const checkFingerID = () => {
    FingerprintScanner.authenticate({
      description: 'Log in with Biometrics',
    })
      .then(() => {
        Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
        props.Press()
      })
      .catch((error) => {
        setCheckFinger({
          errorMessageLegacy: error.message,
          biometricLegacy: error.biometric,
        });
      });
  };

  return (
    <View>
      <Icon name='fingerprint' onPress={checkFingerID} size={30}/>
    </View>
  );
};

export default FingerPrintScreen;

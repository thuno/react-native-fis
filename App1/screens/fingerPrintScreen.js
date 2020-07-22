import React, {useState} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const FingerPrintScreen = () => {
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
      <Button title="Check Finger" onPress={checkFingerID} />
    </View>
  );
};

export default FingerPrintScreen;

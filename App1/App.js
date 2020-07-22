/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, ScrollView} from 'react-native';
import MyWall from './components/myWall';
import NotiScreen from './screens/notificationScreen';
import PickDoc from './screens/pickDocScreen';
import Location from './screens/locationScreen';
import Finger from './screens/fingerPrintScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
    {/* <LoginPage/> */}
        <MyWall />
        <ScrollView style={{marginTop: '-15%'}}>
          <Finger/>
        {/* <PickDoc />
        <Location />
        <NotiScreen /> */}
    </ScrollView>
    </View>
  );
};
export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import MyWall from './components/myWall';
import NotiScreen from './screens/notificationScreen';
import PickDoc from './screens/pickDocScreen';

const App = () => {
  return(
    <View style={{flex: 1}}>
      {/* <LoginPage/> */}
      <MyWall/>
      <PickDoc/>
      <NotiScreen/>
    </View>
  )
}
export default App;

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

const App = () => {
  return(
    <View style={{flex: 1}}>
      {/* <LoginPage/> */}
      <MyWall/>
      <NotiScreen/>
    </View>
  )
}
export default App;

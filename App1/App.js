/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LoginPage from './components/loginPage';
import {View} from 'react-native';
import MyWall from './components/myWall';

const App = () => {
  return(
    <View style={{flex: 1}}>
      {/* <LoginPage/> */}
      <MyWall/>
    </View>
  )
}
export default App;

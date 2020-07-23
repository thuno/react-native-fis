import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../components/loginPage';
import MyWall from '../components/myWall';
import Finger from './fingerPrintScreen';
import NotiScreen from './notificationScreen';
import PickDoc from './pickDocScreen';
import Location from './locationScreen';
import Contact from './contactScreen';
import SMS from './SMSScreen';

const Stack = createStackNavigator();

const StackScreens = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginPage">
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="MyWall" component={MyWall} 
            options={{headerShown: false}}
            />
            <Stack.Screen name="Finger" component={Finger} />
            <Stack.Screen name="NotiScreen" component={NotiScreen} />
            <Stack.Screen name="PicDoc" component={PickDoc} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="SMS" component={SMS} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default StackScreens;
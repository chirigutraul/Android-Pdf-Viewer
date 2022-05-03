import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// importing react native components
import Documents from './Documents';

const {Navigator, Screen} = createNativeStackNavigator;

export default function AppNavigator(){
    return(
    <NavigationContainer>
    <Navigator initialRouteName="Documents">
        <Screen name="Documents" component = {Documents}></Screen>
    </Navigator>
    </NavigationContainer>
    )  
}

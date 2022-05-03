import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native';

//importing react-native components
import Documents from './components/Documents';
import ViewDocuments from './components/ViewDocuments';
import PdfPage from './components/Pdf';


const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  mode:'adaptive'
}

export default function App({navigation}){
  return(
    <PaperProvider theme={theme}>
      <NavigationContainer>
      <Stack.Navigator  initialRouteName="Documents" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Documents" component={Documents} />
      <Stack.Screen name="ViewDocuments" component={ViewDocuments} options={{ title: 'Title', style:'header'}}/>
      <Stack.Screen name="PdfPage" component={PdfPage} />
    </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    fontSize:50,
  }
})
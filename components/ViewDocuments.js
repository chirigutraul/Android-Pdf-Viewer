import React from 'react';
import {Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";

//importing react-native components
import Header from './Header';



export default function ViewDocuments({navigation:{goBack}, route, navigation}){
  const handleCVClick = () => {
    navigation.navigate("PdfPage", {cvURI:route.params.uri[0]});
  }
  const handleCertificateClick = () =>{
    navigation.navigate("PdfPage", {cvURI:route.params.uri[1]});
  }


  return(
    <View style={styles.container}>

    <AntIcon name="arrowleft" color="black" size={28} style={styles.icon}
    onPress={goBack}/>



    <Header title={'View Documents'}/>

    {route.params.uri[0] && <Button mode='contained'
    style={styles.button}
    color='#089A8E'
    onPress={handleCVClick}
    >View CV</Button>}
    
    
    {route.params.uri[1] && <Button mode='contained'
    style={styles.button}
    color='#089A8E'
    onPress={handleCertificateClick}
    >View certificate of profession</Button>
    }
    

    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  textInput:{
    marginLeft:24,
    marginRight:24,
    marginTop:15,
  },
  button:{
    paddingTop:5,
    paddingBottom:5,
    borderRadius: 8,
    marginLeft:24,
    marginRight:24,
    marginTop:15,
  },
  icon:{
    marginLeft:24,
    marginTop:24,
  }
})
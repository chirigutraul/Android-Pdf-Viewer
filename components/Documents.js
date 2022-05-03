import React,{useState} from 'react';

import DocumentPicker from 'react-native-document-picker';

//importing components
import Header from './Header';
import {TextInput, Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";

export default function Home({navigation}){
  const [cv, setCvName] = useState();
  const [cvURI, setCvURI] = useState();

  const [certificate, setCertificateName] = useState();
  const [certificateURI, setCertificateURI] = useState();

  const handleClick = () =>{
    if(cv!=null || certificate !=null){
        navigation.navigate("ViewDocuments", {uri:[cvURI, certificateURI]})
    } else{
      alert("Please select at least one file.")
    }
  }

  const handleFocusCV = async () =>{
    try{
        const file = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          copyTo: 'documentDirectory',
          allowMultiSelection:false,
        });
      setCvName(file[0].name);
      setCvURI(file[0].fileCopyUri);
    } catch(err){
      if(DocumentPicker.isCancel(err)){
        //that means the user closed the document picker
      } else{
        throw err;
      }
    } 
  }

  const handleFocusCertificate = async () =>{
    try{
        const file = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          copyTo: 'documentDirectory',
          allowMultiSelection:false,
        });
      setCertificateName(file[0].name);
      setCertificateURI(file[0].fileCopyUri);
    } catch(err){
      if(DocumentPicker.isCancel(err)){
        //that means the user closed the document picker
      } else{
        throw err;
      }
    } 
  }

  return(
    <View style={styles.container}>
    <Header title={'Documents'}/>
    <View style={styles.inputSection}>
      <AntIcon name="arrowup" color="black" size={28} style={styles.inputIcon}
      onPress={handleFocusCV}
      />
        <TextInput
        style={styles.textInput} 
        mode='outlined'
        label='Curriculum Vitae'
        placeholder='Select file'
        activeOutlineColor='#808080'
        value={cv}
        onFocus={handleFocusCV}
        ></TextInput>
    </View>

    <View style={styles.inputSection}>
    <AntIcon name="arrowup" color="black" size={28} style={styles.inputIcon2}
      onPress={handleFocusCertificate}
    />
    <TextInput 
    style={styles.textInput} 
    mode='outlined'
    label='Certificate of profession'
    placeholder='file_name.pdf'
    activeOutlineColor='#808080'
    value={certificate}
    onFocus={handleFocusCertificate}
    ></TextInput>
    </View>

    <Button mode='contained'
    style={styles.button}
    color='#089A8E'
    onPress={()=>{
      handleClick();
    }}
    >Continue</Button>
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
    marginTop:'auto',
    marginLeft:24,
    marginRight:24,
    marginBottom:24,
  },
  inputIcon:{
    position:'absolute',
    right:34,
    top:34,
    zIndex:2,
  },
  inputIcon2:{
    position:'absolute',
    right:34,
    top:34,
    zIndex:2,
  }
})
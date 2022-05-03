import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';

export default function PdfViewer({route}){
    
    const source = { uri : route.params.cvURI}

    return(
        <Pdf source={source} style={styles.pdf}></Pdf>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})
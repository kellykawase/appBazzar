import React from 'react';

import { View, Image, Text,StyleSheet} from 'react-native';

import redes from '../../assets/redes.png';

export default function footer(){
    return(
        <View style={ styles.container}>
            <Text>Siga-nos</Text>
        <Image source={ redes } style={ styles.img }/>        
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:5,
      marginBottom:5
    },
  
    img: {
      alignItems: 'flex-end',
      margin:5,
        width:150,
        height: 25,
      },
});
import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';
import Cartoes from '../../assets/cartoes.png';

const CartaoScreen = () => {
    return (
        <View style={ estilos.container}>
            <Text>Aceitamos</Text>
        <Image source={ Cartoes } style={ estilos.img }/>        
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20,
    },
  
    img: {
      margin:5,
        width:200,
        height: 40,
      },
});


export default CartaoScreen;
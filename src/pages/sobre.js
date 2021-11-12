import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView} from 'react-native';
import sobre from '../../assets/sobre.png';
import endereco from '../../assets/endereco.png';
import Footer from '../components/footer';



const SobreScreen = () => {
    return (
        <ScrollView>
        <View style={ estilos.container}>
        <Image source={ sobre } style={ estilos.img }/>        
        <Image source={ endereco } style={ estilos.img2 }/> 
        <Footer/>       
        </View>
        </ScrollView>
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
        margin:20,
        width:'90%',
        height: 200,
      },

      img2: {
          margin:20,
          width:'90%',
          height: 150,
        },
});


export default SobreScreen;
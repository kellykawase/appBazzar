import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import SECTIONS from '../components/userList'
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Header = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
    return (
        <View >
            <View style={ styles.container }>
            <Text style={ styles.titulo }>BAZZAAR</Text>
        </View>    

        </View>
    )
}

const styles = StyleSheet.create({

    
    container:{
      paddingTop: 20,
      paddingHorizontal: 20,
      height: 80,
      justifyContent: "center",
      backgroundColor:'#393638',
  },
  titulo: {
      fontSize: 20,
      textTransform: 'uppercase',
      fontWeight: "bold",
      color: '#fff',
      textAlign: 'center',
  }
});

export default Header;
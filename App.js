import React from 'react';
import {  StyleSheet} from 'react-native';
import Header from './src/components/header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/detalhe';
import CartaoScreen from './src/pages/cartao';
import CategoriaScreen from './src/pages/categoria';
import SobreScreen from './src/pages/sobre';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
 return (
   <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />    
      <HomeStack.Screen name="Details" component={DetailsScreen} />
   </HomeStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Header/>
      <Tab.Navigator initialRouteName="HomeScreen"
         screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Categoria') {
              iconName = 'bars';
            } else if (route.name === 'Sobre') {
              iconName = 'isv';
            } else if (route.name === 'Cartao') {
              iconName = 'creditcard';
            }

            return <AntDesign name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor:'#777',
          headerShown: false
        })}
       >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="Categoria" component={CategoriaScreen}/>
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Cartao" component={CartaoScreen} />
      
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default App;

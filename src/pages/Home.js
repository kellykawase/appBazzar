import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Text, SectionList,  ScrollView, TouchableOpacity} from 'react-native';
import SECTIONS from '../components/userList'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import banner from '../../assets/banner.png';

const Stack = createNativeStackNavigator();

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image 
        source={{ uri: item.uri, }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.preco}>{item.Preco}</Text>
      <Text style={styles.desconto}>{item.Desconto}</Text>
    </View>
  );
};


function HomeScreen({ navigation }) {

  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
       
      <View style={styles.container}>

      <View>

<Image source={ banner } style={ styles.img2 }/>

    <View style={ styles.botao}>
        <Button 
                color="#BA374F"
                title="Comprar"   
            />
    </View>     

</View>
        
        <SectionList style={styles.listaItem}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <View style={styles.foto}>
              <FlatList 
                showsHorizontalScrollIndicator={false}
                data={section.data}
                horizontal
                renderItem={({ item }) => { 
                  return (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
                      <ListItem item={item} />
                    </TouchableOpacity>
                  );
              }}/>
            </View>
          )}
          renderItem={({ item, section }) => {
            return null;
            return <ListItem item={item} />;
          }}
        />
        
        </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
  },
  item: {
    margin: 10,
    justifyContent: 'center'
  },
  foto: {
    marginTop:30,
    elevation: 5,
  },
  itemPhoto: {
    width: 170,
    height: 170,
    borderRadius: 3,
  },
  preco: {
    color: '#000',
    marginTop: 2,
    textAlign: 'center',
    fontSize: 12,
    textDecorationLine:'line-through'
  },
 desconto: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
  listaItem: {
    marginBottom: 30
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img2: {
      margin:20,
      width:'90%',
      height: 200,
    },
    botao: {
        marginTop: -70,
        marginLeft:'35%',
        width: 90,          
      alignItems: 'center',      
    }
});

export default HomeScreen;
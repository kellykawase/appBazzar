import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, SectionList,ScrollView, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from '../components/categorias';

const Stack = createNativeStackNavigator();

const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image 
          source={{ uri: item.uri, }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };
  
  
  function CategoriaScreen({ navigation }) {
  

  
    return (
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
         
        <View style={styles.container}>
  
          <SectionList style={styles.listaItem}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={Lista}
            renderSectionHeader={({ section }) => (
              <View style={styles.foto}>
                <Text style={styles.sectionHeader}>{section.title}</Text>
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
    sectionHeader:{
      fontWeight:'bold',
fontSize:18,
margin:10,
    },
      item: {
        margin: 10,
        justifyContent: 'center'
      },
      foto: {
        elevation: 5,
      },
      itemPhoto: {
        width: 170,
        height: 170,
        borderRadius: 3,
      },
      itemText: {
        color: '#000',
        marginTop: 5,
        textAlign: 'center',
        fontSize: 17,
      },
      listaItem: {
        marginTop: 0,
        marginBottom: 30
      }
});


export default CategoriaScreen;
import React from 'react';
import { View,  StyleSheet,  Text, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';


const Separator = () => (
  <View style={styles.separator} />
);

const DetailsScreen = ({ navigation, route}) => {
  const data = route.params.item;
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Icon name='chevron-left' 
              onPress={() => navigation.pop()}
        />        
        <Text style={styles.text}>Detalhes</Text>
      </View>
      <View style={styles.imageContainer}>

        <Text style={styles.Descricao}>{data.Descricao}</Text>
        <Text style={styles.Tamanho}>Tamanho: {data.Tamanho}</Text>
        <Separator />
        <Text style={styles.Preco}>Valor: {data.Desconto}</Text>
      </View>
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20
  },
  text: {
    marginLeft: 100,
    fontSize: 20,
  },
  imageContainer: {
    justifyContent: 'center',
  },

  Descricao: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  Tamanho: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  Preco: {
    fontSize: 22,
    color: 'red',
    marginLeft: 30,
  },
  parcela: {
    fontSize: 16,
    marginLeft: 20,
  },
  separator: {
    marginVertical: 8,
    margin: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  page: {
    margin: 20,
    
    justifyContent: 'center'
  },
  Button: {
    alignContent: 'center',
    marginTop: 20,
  }
});
export default DetailsScreen;
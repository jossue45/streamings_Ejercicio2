import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';

export default function Contact() {
  const [COMEDIA] = useState([
    {
      id: '1',
      title: 'The Big Bang Theory',
      cantidad: 'Cantidad de Temporadas: 12',
      src: require('./Series/bigbangtheory.jpg'),
    },
    {
      id: '2',
      title: 'How I Met Your Mother',
      cantidad: 'Cantidad de Temporadas: 9',
      src: require('./Series/howimetyourmother.jpg'),
    },
    {
      id: '3',
      title: 'The Simpsons',
      cantidad: 'Cantidad de Temporadas: 34',
      src: require('./Series/simpsons.jpg'),
    },
  ]);
  const [AVENTURA] = useState([
    {
      id: '1',
      title: 'The Boys',
      cantidad: 'Cantidad de Temporadas: 3',
      src: require('./Series/theboys.jpg'),
    },
    {
      id: '2',
      title: 'Star Wars',
      cantidad: 'Cantidad de Temporadas: 4',
      src: require('./Series/starwars.jpg'),
    },
    {
      id: '3',
      title: 'What if?...',
      cantidad: 'Cantidad de Temporadas: 1',
      src: require('./Series/whatif.jpg'),
    },
  ]);
  const [FANTASIA] = useState([
    {
      id: '1',
      title: 'Lucifer',
      cantidad: 'Cantidad de Temporadas: 6',
      src: require('./Series/lucifer.jpg'),
    },
    {
      id: '2',
      title: 'Game Of Thrones',
      cantidad: 'Cantidad de Temporadas: 8',
      src: require('./Series/gameofthrones.jpg'),
    },
    {
      id: '3',
      title: 'Wanda Vision',
      cantidad: 'Cantidad de Temporadas: 1',
      src: require('./Series/wandavision.jpg'),
    },
  ]);
  const Item = ({ title, img, cantidad }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cantidad}>{cantidad}</Text>
      <Image style={styles.img} source={img} />
    </View>
  );
  const renderItem = ({ item }) => <Item title={item.title} cantidad={item.cantidad} img={item.src} />;
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.banner} source={require('./Series/series.jpg')} />
      </View>
      <View style={styles.contenedor}>
          <Text style={styles.titulo}>COMEDIA</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={COMEDIA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      </View>
      <View style={styles.contenedor}>
          <Text style={styles.titulo}>AVENTURA</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={AVENTURA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      </View>
      <View style={styles.contenedor}>
          <Text style={styles.titulo}>FANTASIA</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={FANTASIA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  banner: {
    height: 250,
    flex: 1,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  img: {
    width: 200,
    height: 225,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    margin: 8,
  },
});

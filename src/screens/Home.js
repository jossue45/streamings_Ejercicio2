import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
export default function Home() {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.banner}
          source={require('./Peliculas/movie.jpg')}
        />
      </View>
      <View style={styles.contenedor}>
          <Text style={styles.titulo}>COMEDIA</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/supercool.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/wallstreet.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/legalmenterubia.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/americanpie.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/locosadams.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/quepasoayer.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>ROMANCE</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/marryme.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/365dias.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/50sombras.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/adosmetrosdeti.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/antesdeti.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/aladdin.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>ACCION</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/spiderman.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/ambulance.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/venom.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/blackwidow.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/DrStrange.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./Peliculas/escuadronsuicida.jpg')}
              />
            </View>
          </ScrollView>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
});

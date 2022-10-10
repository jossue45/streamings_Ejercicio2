import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import { Video } from 'expo-av';

export default function About() {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const [modalVisible7, setModalVisible7] = useState(false);
  const [modalVisible8, setModalVisible8] = useState(false);
  const [modalVisible9, setModalVisible9] = useState(false);
  const video1 = React.useRef(null);
  const video2 = React.useRef(null);
  const video3 = React.useRef(null);
  const video4 = React.useRef(null);
  const video5 = React.useRef(null);
  const video6 = React.useRef(null);
  const video7 = React.useRef(null);
  const video8 = React.useRef(null);
  const video9 = React.useRef(null);
  const [status1, setStatus1] = React.useState({});
  const [status2, setStatus2] = React.useState({});
  const [status3, setStatus3] = React.useState({});
  const [status4, setStatus4] = React.useState({});
  const [status5, setStatus5] = React.useState({});
  const [status6, setStatus6] = React.useState({});
  const [status7, setStatus7] = React.useState({});
  const [status8, setStatus8] = React.useState({});
  const [status9, setStatus9] = React.useState({});
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible1}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>SUPER COOL</Text>
              <Text>
                Es una película de coming-of-age de comedia adolescente estadounidense de 2007 dirigida por Greg Mottola y producida por Judd Apatow. La película está protagonizada por Jonah Hill y Michael Cera como Seth y Evan, dos jóvenes están a pocos días de graduarse de la escuela secundaria. Antes de graduarse, los chicos quieren celebrar y perder la virginidad, pero su plan resulta más complicado de lo esperado
              </Text>
              <Text>Estreno: 17 de agosto de 2007</Text>
              <Video
                ref={video1}
                style={styles.video}
                source={require("./Videos/SuperCoolEspañolLatino.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus1}
              />
              <View style={styles.buttons}>
                <Button
                  title={status1.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status1.isPlaying ? video1.current.pauseAsync() : video1.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible2}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>LEGALMENTE RUBIA</Text>
              <Text>
                Es un largometraje de 2001 de la Metro-Goldwyn-Mayer, dirigido por Robert Luketic, protagonizado por Reese Witherspoon y Selma Blair (trabajando juntas por segunda vez desde sus participaciones en la película Cruel Intentions), así como el actor Luke Wilson y producido por Marc Platt. La película está basada en la novela de 2001, del mismo nombre, de Amanda Brown.
              </Text>
              <Text>Estreno: 28 de abril de 2009</Text>
              <Video
                ref={video2}
                style={styles.video}
                source={require("./Videos/legalmenterubia.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus2}
              />
              <View style={styles.buttons}>
                <Button
                  title={status2.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status2.isPlaying ? video2.current.pauseAsync() : video2.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible3}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>A DOS METROS DE TI</Text>
              <Text>
                Stella Grant es una paciente con fibrosis quística que utiliza activamente las redes sociales para hacer frente a su enfermedad y trata de vivir una vida normal. Ella conoce a otro paciente con FQ, Will Newman, quien está en el hospital para una prueba de medicamentos, en un intento por deshacerse de la infección bacteriana que tiene en los pulmones.
              </Text>
              <Text>Estreno: 15 de marzo de 2019</Text>
              <Video
                ref={video3}
                style={styles.video}
                source={require("./Videos/ADosMetrosDeTip.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus3}
              />
              <View style={styles.buttons}>
                <Button
                  title={status3.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status3.isPlaying ? video3.current.pauseAsync() : video3.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible3(!modalVisible3);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible4}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>ALADDIN</Text>
              <Text>
                Es una película musical de aventura y fantasía romántica estadounidense de 2019 dirigida por Guy Ritchie, basada en un guion escrito por John August, Ritchie y Vanessa Taylor, y coproducida por Walt Disney Pictures, Lin Pictures y Marc Platt Productions.
              </Text>
              <Text>Estreno: 24 de mayo de 2019</Text>
              <Video
                ref={video4}
                style={styles.video}
                source={require("./Videos/ALADDÍN2019.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus4}
              />
              <View style={styles.buttons}>
                <Button
                  title={status4.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status4.isPlaying ? video4.current.pauseAsync() : video4.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible4(!modalVisible4);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible5}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>SPIDER MAN: NO WAY HOME</Text>
              <Text>
                Es una película estadounidense de superhéroes basada en el personaje Spider-Man, de Marvel Comics, coproducida por Columbia Pictures y Marvel Studios, y distribuida por Sony Pictures Releasing. Es la secuela de Spider-Man: Homecoming (2017) y Spider-Man: Lejos de casa (2019), y la película número 27 en el Universo cinematográfico de Marvel (UCM). La película está dirigida por Jon Watts, escrita por Chris McKenna y Erik Sommers, y protagonizada por Tom Holland como Peter Parker / Spider-Man, junto a un elenco conformado por Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield y Tobey Maguire.
              </Text>
              <Text>Estreno: 15 de diciembre de 2021</Text>
              <Video
                ref={video5}
                style={styles.video}
                source={require("./Videos/SpiderManNoWayHome.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus5}
              />
              <View style={styles.buttons}>
                <Button
                  title={status5.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status5.isPlaying ? video5.current.pauseAsync() : video5.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible5(!modalVisible5);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible6}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>DR STRANGE: IN THE MULTIVERSE OF MADNESS</Text>
              <Text>
                Es una película de superhéroes estadounidense basada en el personaje de Doctor Strange, de Marvel Comics. Producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures, es la secuela de Doctor Strange (2016) y la película número 28 del Universo cinematográfico de Marvel (UCM). La película está dirigida por Sam Raimi, escrita por Michael Waldron y es protagonizada por Benedict Cumberbatch como Stephen Strange, junto a Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg y Rachel McAdams.
              </Text>
              <Text>Estreno: 2 de mayo de 2022</Text>
              <Video
                ref={video6}
                style={styles.video}
                source={require("./Videos/DOCTORSTRANGE.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus6}
              />
              <View style={styles.buttons}>
                <Button
                  title={status6.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status6.isPlaying ? video6.current.pauseAsync() : video6.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible6(!modalVisible6);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible7}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>THE BIG BANG THEORY</Text>
              <Text>
                La serie comienza con la llegada de Penny, aspirante a actriz, al apartamento vecino del que comparten Sheldon y Leonard, dos físicos que trabajan en el Instituto Tecnológico de California (Caltech). Leonard se enamora desde el primer momento de Penny. Leonard y Sheldon son científicos destacados en Caltech, amigos a su vez de Howard y Raj, que son presentados como unos completos geeks, alejados de las inquietudes y problemas de la gente común. En el curso de la serie se muestra la dificultad de los protagonistas masculinos para relacionarse con personas de fuera de su entorno, principalmente de sexo femenino, dando lugar a situaciones cómicas.
              </Text>
              <Text>Estreno: 24 de septiembre de 2007</Text>
              <Video
                ref={video7}
                style={styles.video}
                source={require("./Videos/TheBigBangTheory.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus7}
              />
              <View style={styles.buttons}>
                <Button
                  title={status7.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status7.isPlaying ? video7.current.pauseAsync() : video7.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible7(!modalVisible7);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible8}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>THE BOYS</Text>
              <Text>
                The Boys es una serie de televisión web estadounidense de superhéroes desarrollada por Eric Kripke para Prime Video. Basada en el cómic del mismo nombre de Garth Ennis y Darick Robertson, sigue al equipo homónimo de justicieros en su lucha contra diversos individuos con superpoderes que abusan de sus habilidades.
              </Text>
              <Text>Estreno: 26 de julio de 2019</Text>
              <Video
                ref={video8}
                style={styles.video}
                source={require("./Videos/TheBoys.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus8}
              />
              <View style={styles.buttons}>
                <Button
                  title={status8.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status8.isPlaying ? video8.current.pauseAsync() : video8.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible8(!modalVisible8);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible9}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>GAME OF THRONES</Text>
              <Text>
                Es una serie de televisión de drama y fantasía medieval desarrollada por David Benioff y D. B. Weiss y producida por la cadena HBO. Su argumento está inspirado en la serie de novelas Canción de hielo y fuego, escrita por el estadounidense George R. R. Martin, y relata las vivencias de un grupo de personajes de distintas casas nobiliarias en el continente ficticio de Poniente para tener el control del Trono de Hierro y gobernar los siete reinos que conforman el territorio
              </Text>
              <Text>Estreno: 17 de abril de 2011</Text>
              <Video
                ref={video9}
                style={styles.video}
                source={require("./Videos/GameofThrones.mp4")}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={setStatus9}
              />
              <View style={styles.buttons}>
                <Button
                  title={status9.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status9.isPlaying ? video9.current.pauseAsync() : video9.current.playAsync()
                  }
                />
              </View>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible9(!modalVisible9);
                }}>
              </Button>
            </View>
          </View>
        </Modal>
        <Text style={styles.subtitulo}>Dar clic en la imagen para reproducir el video</Text>
        <Text style={styles.titulo}>PELICULAS</Text>
        <Text style={styles.titulo1}>COMEDIA</Text>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible1(!modalVisible1);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/supercool.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible2(!modalVisible2);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/legalrubia.jpg')}
            />
          </TouchableHighlight>
        </View>
        <Text style={styles.titulo1}>ROMANCE</Text>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible3(!modalVisible3);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/adosmetros.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible4(!modalVisible4);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/aladdin.jpg')}
            />
          </TouchableHighlight>
        </View>
        <Text style={styles.titulo1}>AVENTURA</Text>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible5(!modalVisible5);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/spiderman.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible6(!modalVisible6);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/drstrange.jpg')}
            />
          </TouchableHighlight>
        </View>
        <Text style={styles.titulo}>SERIES</Text>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible7(!modalVisible7);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/bigbang.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible8(!modalVisible8);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/theboys.jpg')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisible9(!modalVisible9);
            }}>
            <Image
              style={styles.mejores}
              source={require('./Videos/img/gameofthrones.jpg')}
            />
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  titulo1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16
  }
});

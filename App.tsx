import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import imgSuper from './assets/super.png'
import { useState } from 'react';

export default function App() {
  const [usuario, setUsuario] = useState('')
  const [ligado, setLigado] = useState(true)

  function handleSwitch(){
    setLigado(!ligado)
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <Switch value={ligado}
        onValueChange={handleSwitch}/>
      
      {/* também é possível usar o require(caminho da imagem)*/}
      <Image style={{display: ligado ? 'flex' : 'none'}} 
      source={imgSuper}/> 

      <TextInput style={styles.input} 
      onChange={(texto) => 
        setUsuario(texto.nativeEvent.text)
      } keyboardType='default'
      placeholder='Nickname'
      value={usuario}/>

      <Button title='Exibir Nickname'
      onPress={() => {
        Alert.alert('NICKNAME', usuario)
      }}/>

      <View
        onTouchStart={(evento) => {
          Alert.alert('TOQUE', 'Clique iniciado')
        }}
        onTouchEnd={(evento) => {
          Alert.alert('TOQUE', 'Clique finalizado')
        }}
      >
        <Text style={[styles.button, styles.border]}
        onPress={() => {
          console.log('Pressionado');
        }} onLongPress={() => {
          console.log('Pressionamento longo');
        }}
        >CLIQUE</Text>
      </View>

      <Text selectable={true}>Agora você consegue selecionar o texto!</Text>

      <Text>
        <Text>Concatenando </Text>
        <Text>textos</Text>
      </Text>
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 720,
    height: 720
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  border: {
    borderColor: 'black',
    borderWidth: 2
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5
  }
});

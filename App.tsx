import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import imgSuper from './assets/super.png'

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* também é possível usar o require(caminho da imagem)*/}
      <Image source={imgSuper}/> 

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

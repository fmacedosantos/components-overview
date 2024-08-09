import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        onTouchStart={(evento) => {
          Alert.alert('TOQUE', 'Clique iniciado')
        }}
        onTouchEnd={(evento) => {
          Alert.alert('TOQUE', 'Clique finalizado')
        }}
      >
        <Text style={styles.button}>CLIQUE</Text>
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
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5
  }
});

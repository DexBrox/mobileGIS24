import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <>
    <View style={styles.textBox}>
      <Text style={styles.smallText}>Wer das liest ist doof</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.mapBox}>
      <MapView style={styles.map} 
        showsUserLocation={true}
        followsUserLocation={true}
      />
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  textBox: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 150, 130, 1)', // Setzen Sie die Hintergrundfarbe auf eine transparente Farbe
  },
  smallText: {
    fontSize: 30,
  },
  mapBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject, // This will make the map fill the entire container
  },
});
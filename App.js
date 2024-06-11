import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`;
  }

  return (
    <>
      <View style={styles.textBox}>
        <Text style={styles.smallText}>Hello GIK!</Text>
        <Text style={styles.smallText}>{text}</Text>
      </View>

      <View style={styles.mapBox}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
        />
      </View>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  textBox: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 150, 130, 1)',
    padding: 10,
  },
  smallText: {
    fontSize: 20,
    color: '#fff',
  },
  mapBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useAppContext} from '../utils/AppContext';
import mockLocations from '../data/mockLocations';

export default function MapScreen() {
  const {
    state: {location},
  } = useAppContext();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={location} title="You" description="Current location" />
        {mockLocations.map(loc => (
          <Marker
            key={loc.id}
            coordinate={loc.coordinate}
            title={loc.name}
            description={loc.description}
            pinColor={loc.pinColor}
          />
        ))}
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Lat: {location.latitude.toFixed(4)} | Lon: {location.longitude.toFixed(4)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  footer: {
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'

export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 24.7174211,
          longitude: 46.7276752,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
      >
     </MapView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});


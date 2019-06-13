import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabbar from 'react-native-tabbar-bottom'
import { createStackNavigator } from "react-navigation";
import Map from './screen/map/Map';
import TabbarNavigator from './components/tabbarNavigator';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: "Map",
    }
  }
  
  componentDidMount() {
    Font.loadAsync({
      'Ionicons': require('./node_modules/react-native-ionicons/fonts/Ionicons.ttf'),
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TabbarNavigator />
      </View>
    );
  }
}

/*const MapNavigator = createStackNavigator({
  page: Map
});*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, ListItem, Header } from 'react-native-elements';

export default class UserProfile extends React.Component {
  static navigationOptions = {
       header: null,
   }
   
   
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      //leftComponent={{ icon: 'menu', color: 'white' }}
      leftComponent={<Button onPress={this._goBack} type={'clear'} icon={{
    name: "arrow-back",
    size: 20,
    color: "white", }} />}
      containerStyle={{
    backgroundColor: '#2d75a3',
      }}
      />
        <Text>Under construction , thanks for your patience :D</Text>
      </View>
    );
  }
  _goBack = () => {
    this.props.navigation.goBack();
  };
}

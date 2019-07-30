import React from 'react';
import { KeyboardAvoidingView, FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, ListItem, Header } from 'react-native-elements';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

export default class about extends React.Component {
  static navigationOptions = {
       header: null,
   }
    
  render() {
    return (
      <View style={styles.container}>
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      leftComponent={<Button onPress={this._goBack} type={'clear'} icon={{
    name: "arrow-back",
    size: 20,
    color: "white", }} />}
      centerComponent={{ text: 'About', style: { color: 'white', fontWeight: 'bold', fontSize: 18, } }}
      containerStyle={{
    backgroundColor: '#2d75a3',
      }}
      />
      </View>
    );
  }
  
  _goBack = () => {
    this.props.navigation.goBack();
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 50,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

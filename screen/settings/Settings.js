import React from 'react';
import { KeyboardAvoidingView, FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, ListItem, Header } from 'react-native-elements';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import EditUsername from './editUsername';
import About from './about';

class Settings extends React.Component {
  constructor(){
    super();
  }
  
  static navigationOptions = {
       header: null,
   }
  
  render() {
    return (
      <View style={styles.container}>
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      //leftComponent={{ icon: 'menu', color: 'white' }}
      leftComponent={<Avatar rounded title="A"/>}
      centerComponent={{ text: 'Settings', style: { color: 'white', fontWeight: 'bold', fontSize: 18, } }}
      //onPress={this._goBack}
      containerStyle={{
    backgroundColor: '#2d75a3',
      }}
      />
      
      <ListItem
        title='Edit Username'
        titleStyle={{ fontSize: 20,}}
        //topDivider={'true'}
        //leftAvatar={{ source: { uri: item.avatar_url } }}
        //color={'red'}
        chevron
        onPress={this._goEditUsername}
        containerStyle={{
      borderRadius:16,
      marginLeft:5,
      marginRight:5,
      marginTop:5,
      borderWidth: 2,
      borderColor: '#eaeaea'
        }}
      />
      
      <ListItem
        title='About'
        titleStyle={{ fontSize: 20,}}
        //topDivider={'true'}
        //leftAvatar={{ source: { uri: item.avatar_url } }}
        //color={'red'}
        chevron
        onPress={this._goAbout}
        containerStyle={{
      borderRadius:16,
      marginLeft:5,
      marginRight:5,
      marginTop:10,
      borderWidth: 2,
      borderColor: '#eaeaea'
        }}
      />
      </View>
    );
  }
  
  _goEditUsername = () => {
    this.props.navigation.navigate('EditUsername');
  };
  
  _goAbout = () => {
    this.props.navigation.navigate('About');
  };
}

const AppStack = createStackNavigator({ Home: Settings, EditUsername: EditUsername, About:About});

export default createAppContainer(createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingScreen,
    App: AppStack,
    //Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

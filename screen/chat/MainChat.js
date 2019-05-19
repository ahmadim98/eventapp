import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { createStackNavigator } from "react-navigation";
import ChatRoom from './ChatRoom';

export default class MainChat extends React.Component {
  keyExtractor = (item, index) => index.toString()//this thing to make every listitem special in the list "exmaple : by id in database or email"
  
  //const ChatNavigae = this.props.navigation;
  //const {navigate} = this.props.navigation;
  //const { navigate } = props.navigation;
  renderItem = ({ item }) => (
    
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      //onPress={()=>this.props.navigation.navigate('ChatRoom')}
      //onPress={() => this.props.navigation.navigate('ChatRoom')}
    />
  )
  
  
  render() {
    
    return (
      <View style={styles.container}>
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      containerStyle={{
    backgroundColor: '#16394f',
      }}
      leftComponent={{ icon: 'menu', color: 'white' }}
      centerComponent={{ text: 'Loading', style: { color: 'white' } }}
      rightComponent={{ icon: 'home', color: 'white' }}
      />
      <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
      />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
   Main: { screen: MainChat },
   Room: { screen: ChatRoom},
});


const list = [
  {
    id:1,
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  
  {
    id:2,
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 50,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

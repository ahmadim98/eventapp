import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem, Header } from 'react-native-elements';

export default class ChatRoom extends React.Component {
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      //leftAvatar={{ source: { uri: item.avatar_url } }}
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
      centerComponent={{ text: 'Amy', style: { color: 'white' } }}
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

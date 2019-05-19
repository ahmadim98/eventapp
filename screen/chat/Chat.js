import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem, Header } from 'react-native-elements';

export default class Chat extends React.Component {
  keyExtractor = (item, index) => index.toString()
  
  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
    />
  )
  
  render() {
    return (
      <View style={styles.container}>
      <Header
      containerStyle={{
    backgroundColor: '#e3e3e3',
      }}
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
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
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  
  {
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

import React from 'react';
import { KeyboardAvoidingView, FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, ListItem, Header } from 'react-native-elements';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

export default class ChatRoom extends React.Component {
  static navigationOptions = {
       header: null,
   }
   
   
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      titleStyle={{ fontSize: 15, color:'#2d75a3'}}
      subtitleStyle={{ fontSize: 20, }}
      rightSubtitle={item.rightsubtitle}
      rightSubtitleStyle={{marginTop:30}}
      //topDivider={'true'}
      //leftAvatar={{ source: { uri: item.avatar_url } }}
      //color={'red'}
      containerStyle={{
    backgroundColor: '#f9f9f9',
    borderRadius:16,
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    borderWidth: 2,
    borderColor: '#eaeaea'
      }}
    />
  )
  
  
  render() {
    return (
      <View style={styles.container}>
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      //leftComponent={{ icon: 'menu', color: 'white' }}
      leftComponent={<Button onPress={this._goBack} type={'clear'} icon={{
    name: "arrow-back",
    size: 20,
    color: "white", }} />}
      centerComponent={{ text: 'Amy', style: { color: 'white', fontWeight: 'bold', fontSize: 18, } }}
      //rightComponent={{ icon: 'home', color: 'white' }}
      rightComponent={<Avatar rounded title="A" onPress={this._goProfile} /> }
      //onPress={this._goBack}
      containerStyle={{
    backgroundColor: '#2d75a3',
      }}
      />
      <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
      />
      {/*<Button onPress={this._goBack} />*/}
      <KeyboardAvoidingView behavior="padding" enabled>
      <View
        style={{
          flexx:1,
          flexDirection: 'row',
          justifyContent: 'center',
          height: 56,
          padding: 10,
          backgroundColor: '#f9f9f9',
        }}>
        <AutoGrowingTextInput placeholder={'Your Message'} style={{height: 40, width: 344 , borderRadius:7, borderColor: '#eaeaea', backgroundColor: 'white', borderWidth: 2, fontSize: 16}} />
        <Button buttonStyle={{backgroundColor: '#16394f',borderRadius: 50,marginLeft:2}}  type={'solid'} icon={{name: "arrow-forward", size: 22, color: "white",alignItems: 'center',justifyContent: 'center',}} />
      </View>
      </KeyboardAvoidingView>
      </View>
    );
  }
  
  _goBack = () => {
    this.props.navigation.goBack();
  };
  _goProfile = () => {
    this.props.navigation.navigate('Profile');
  };
}

const list = [
  {
    id:1,
    name: 'YOU',
    subtitle: 'Hey There',
    rightsubtitle: '1:11am',
  },
  
  {
    id:2,
    name: 'Ahmad',
    //avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Hello',
    rightsubtitle: '1:22am',
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

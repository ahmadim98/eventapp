import React from 'react';
import { TextInput, TouchableHighlight, FlatList, StyleSheet, Text, View } from 'react-native';
import { Overlay, Button, ListItem, Header } from 'react-native-elements';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import ChatRoom from './ChatRoom';
import UserProfile from '../../components/UserProfile';
import Icon from 'react-native-ionicons';

class MainChat extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    }
  }
  
  static navigationOptions = {
       header: null
   }
  keyExtractor = (item, index) => index.toString()//this thing to make every listitem special in the list "exmaple : by id in database or email"
  
  //const ChatNavigae = this.props.navigation;
  //const {navigate} = this.props.navigation;
  //const { navigate } = props.navigation;
  renderItem = ({ item }) => (
    
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      subtitleStyle={{ color: item.statuscolor, }}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      topDivider={true}
      badge={{ value: item.notifiy, textStyle: { fontSize: 14, }, containerStyle: { marginTop: -20 } }}
      chevron
      onPress={this._goRoom}
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
    backgroundColor: '#2d75a3',
      }}
      leftComponent={<TouchableHighlight onPress={()=>{}}>
         <Icon name="megaphone" size={20} color={'white'} />
     </TouchableHighlight>}
      centerComponent={{ text: 'Loading', style: { color: 'white' } }}
      //rightComponent={{ icon: 'person-add', color: 'white' }}
      rightComponent={<Button onPress={() => this.setState({ isVisible: true })} type={'clear'} icon={{
    name: "person-add",
    size: 20,
    color: "white", }} />}
      />
      <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
      />
      
      <Overlay
        isVisible={this.state.isVisible}
        onBackdropPress={() => this.setState({ isVisible: false })}
        height={150}
        width={225}
      >
        <View style={styles.containertwo}>
          <Icon name="body" size={50} />
          <TextInput
            style={{borderRadius:4, borderColor: '#eaeaea', backgroundColor: 'white', borderWidth: 2, fontSize: 16, marginTop:2}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder={'Write user id over here !'}
          />
          <Button onPress={() => {}} type={'solid'} title='ADD' buttonStyle={{marginTop:5,}} />
          {/*<Icon name="people" size={50} />  use it later to create add group ;)*/}
        </View>
      </Overlay>

      </View>
    );
  }
  _goRoom = () => {
    this.props.navigation.navigate('ChatRoom');
  };
}

const list = [
  {
    id:1,
    name: 'Amy Farha',
    subtitle: 'Availabe',
    statuscolor: 'green',
    notifiy:3
  },
  
  {
    id:2,
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Busy Now !',
    statuscolor: 'red',
    notifiy:4
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
  containertwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ Home: MainChat, ChatRoom: ChatRoom, Profile:UserProfile });

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

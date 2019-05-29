import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import ChatRoom from './ChatRoom';
import UserProfile from '../../components/UserProfile';

class MainChat extends React.Component {
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
      chevron
      onPress={this._showMoreApp}
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
      leftComponent={{ icon: 'warning', color: 'white' }}
      centerComponent={{ text: 'Loading', style: { color: 'white' } }}
      rightComponent={{ icon: 'person-add', color: 'white' }}
      />
      <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
      />
      </View>
    );
  }
  _showMoreApp = () => {
    this.props.navigation.navigate('ChatRoom');
  };
}


const list = [
  {
    id:1,
    name: 'Amy Farha',
    subtitle: 'Availabe',
    statuscolor: 'green'
  },
  
  {
    id:2,
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Busy Now !',
    statuscolor: 'red'
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabbar from 'react-native-tabbar-bottom'
import { createStackNavigator } from "react-navigation";
import Map from '../screen/map/Map';
import Tasks from '../screen/tasks/Tasks';
import MainChat from '../screen/chat/MainChat';
import Settings from '../screen/settings/Settings';

export default class TabbarNavigator extends React.Component {
  constructor() {
    super()
    this.state = {
      page: "Map",
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
        
        {this.state.page === "Map" && <Map navigation={this.props.navigation}>Map Screen</Map>}
        {this.state.page === "Tasks" && <Tasks navigation={this.props.navigation}>Tasks Screen</Tasks>}
        {this.state.page === "MainChat" && <MainChat navigation={this.props.navigation}>MainChat Screen</MainChat>}
        {/*{this.state.page === "ChatRoom" && <ChatRoom navigation={this.props.navigation}>ChatRoom Screen</ChatRoom>}*/}
        {this.state.page === "Settings" && <Settings navigation={this.props.navigation}>Settings Screen</Settings>}
        
        {/*{this.state.page === "HomeScreen" && <Text>Screen1</Text>}
        {this.state.page === "NotificationScreen" && <Text>Screen2</Text>}
        {this.state.page === "ProfileScreen" && <Text>Screen3</Text>}
        {this.state.page === "MainChatScreen" && <Text>Screen4</Text>}
        {this.state.page === "SearchScreen" && <Text>Screen5</Text>}*/}
        
        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabbarBgColor={'#eaeaea'}
          selectedIconColor={'#16394f'}
          iconColor={'#5b5b5b'}
          tabs={[
            {
              page: "Map",
              icon: "navigate",
            },
            {
              page: "Tasks",
              icon: "notifications",
              badgeNumber: 11,
            },
            {
              page: "MainChat",
              icon: "chatbubbles",
              badgeNumber: 7,
            },
            {
              page: "Settings",
              icon: "settings",
            },
          ]}
        />
      </View>
    );
  }
}

const MapNavigator = createStackNavigator({
  page: Map
});

const TasksNavigator = createStackNavigator({
  page: Tasks
});

const MainChatNavigator = createStackNavigator({
  page: MainChat
});

const SettingsNavigator = createStackNavigator({
  page: Settings
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
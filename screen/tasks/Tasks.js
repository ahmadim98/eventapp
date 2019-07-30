import React from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView, TouchableHighlight, Image } from 'react-native';
import { Card, ListItem, Button, Header, Divider, Overlay } from 'react-native-elements';
import Icon from 'react-native-ionicons';

const users = [
 {
    name: 'brynn',
    avatar: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/kodaikanal-2836301.jpg'
 },
];

export default class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisibleAdd: false,
      isVisibleModify: false,
      isVisibleDelete: false,
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/*<Text>this is tasks !</Text>*/}
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        containerStyle={{
      backgroundColor: '#2d75a3',
        }}
        leftComponent={<TouchableHighlight onPress={()=>{}}>
           <Icon name="menu" size={20} color={'white'} />
       </TouchableHighlight>}
        //rightComponent={{ icon: 'person-add', color: 'white' }}
        centerComponent={{ text: 'Tasks', style: { color: 'white', fontWeight: 'bold', fontSize: 18, } }}
        rightComponent={<Button onPress={() => this.setState({ isVisibleAdd: true })} type={'clear'} icon={{
      name: "add",
      size: 20,
      color: "white", }} />}
        />
        
        {/*here is the add component*/}
        <Overlay
          isVisible={this.state.isVisibleAdd}
          onBackdropPress={() => this.setState({ isVisibleAdd: false })}
          height={180}
          width={225}
        >
          <View style={styles.containertwo}>
            <Icon name="construct" size={50} style={{justifyContent: 'center'}} />
            <TextInput
              style={{borderRadius:4, borderColor: '#eaeaea', backgroundColor: 'white', borderWidth: 2, fontSize: 16, marginTop:2}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder={'Write title here !'}
            />
            <TextInput
              style={{borderRadius:4, borderColor: '#eaeaea', backgroundColor: 'white', borderWidth: 2, fontSize: 16, marginTop:2}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder={'Write descripiton here !'}
            />
            <Button onPress={() => {}} type={'solid'} title='ADD' buttonStyle={{marginTop:5,}} />
            {/*<Icon name="people" size={50} />  use it later to create add group ;)*/}
          </View>
        </Overlay>
        
        {/*here is the modify component*/}
        <Overlay
          isVisible={this.state.isVisibleModify}
          onBackdropPress={() => this.setState({ isVisibleModify: false })}
          height={180}
          width={225}
        >
          <View style={styles.containertwo}>
            <Icon name="construct" size={50} style={{justifyContent: 'center'}} />
            <TextInput
              style={{borderRadius:4, borderColor: '#eaeaea', backgroundColor: 'white', borderWidth: 2, fontSize: 16, marginTop:2}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder={'New title here !'}
            />
            <TextInput
              style={{borderRadius:4, borderColor: '#eaeaea', backgroundColor: 'white', borderWidth: 2, fontSize: 16, marginTop:2}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder={'New descripiton here !'}
            />
            <Button onPress={() => {}} type={'solid'} title='ADD' buttonStyle={{marginTop:5,}} />
            {/*<Icon name="people" size={50} />  use it later to create add group ;)*/}
          </View>
        </Overlay>
        
        {/*here is the delete component*/}
        <Overlay
          isVisible={this.state.isVisibleDelete}
          onBackdropPress={() => this.setState({ isVisibleDelete: false })}
          height={180}
          width={225}
        >
          <View style={styles.containertwo}>
            <Icon name="construct" size={50} style={{justifyContent: 'center'}} />
            <Text>Are you sure you want to delete it ?</Text>
            <Button onPress={() => {}} type={'solid'} title='Delete' buttonStyle={{marginTop:5,}} />
            {/*<Icon name="people" size={50} />  use it later to create add group ;)*/}
          </View>
        </Overlay>
        
        <ScrollView style={{width: 413, marginBottom: 60}} showsVerticalScrollIndicator={false} >
        <Card
          title={
            <View
              style={{
                flexx:1,
                flexDirection: 'row',
                //justifyContent: 'center',
                //height: 56,
                //backgroundColor: '#f9f9f9',
              }}>
              <Text style={{marginBottom: 10, fontSize:25, fontWeight: 'bold', justifyContent: 'center',}}>
              Prepare powerpoint
              </Text>
              <Icon name="close-circle" size={50} color={'red'} style={{marginLeft:85,}} />
            </View>
            }
          /*image={{uri:'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/kodaikanal-2836301.jpg'}}*/>
          <Divider style={{marginBottom: 10,}}/>
          <Text style={{marginBottom: 10}}>
            prepare powerpoint presentation and turn on the projector
          </Text>
          <Divider style={{marginBottom: 10,}}/>
          <View
            style={{
              flexx:1,
              flexDirection: 'row',
              //justifyContent: 'center',
              //height: 56,
              //backgroundColor: '#f9f9f9',
            }}>
            <Text style={{marginBottom: 10, fontSize:15, fontWeight: 'bold', justifyContent: 'center',}}>
            Approved by
            </Text>
            <Icon name="body" size={30} style={{marginLeft:85,}} />
          </View>
          <Text style={{marginBottom: 10}}>
            None
          </Text>
          <Divider style={{marginBottom: 10,}}/>
          <View
            style={{
              flexx:1,
              flexDirection: 'row',
              justifyContent: 'center',
              //height: 56,
              //backgroundColor: '#f9f9f9',
            }}>
            <Button buttonStyle={{backgroundColor: 'green',borderRadius: 50,marginLeft:2}}  type={'solid'} icon={{name: "done-all", size: 22, color: "white",alignItems: 'center',justifyContent: 'center',}} />
            <Button onPress={() => this.setState({ isVisibleModify: true })} buttonStyle={{backgroundColor: 'orange',borderRadius: 50,marginLeft:2}}  type={'solid'} title='Modify' />
            <Button onPress={() => this.setState({ isVisibleDelete: true })} buttonStyle={{backgroundColor: 'red',borderRadius: 50,marginLeft:2}}  type={'solid'} title='Delete' />
          </View>
        </Card>
        
        <Card
          title={
            <View
              style={{
                flexx:1,
                flexDirection: 'row',
                //justifyContent: 'center',
                //height: 56,
                //backgroundColor: '#f9f9f9',
              }}>
              <Text style={{marginBottom: 10, fontSize:25, fontWeight: 'bold', justifyContent: 'center',}}>
              Prepare powerpoint
              </Text>
              <Icon name="construct" size={50} color={'orange'} style={{marginLeft:85,}} />
            </View>
            }
          /*image={{uri:'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/kodaikanal-2836301.jpg'}}*/>
          <Divider style={{marginBottom: 10,}}/>
          <Text style={{marginBottom: 10}}>
            prepare powerpoint presentation and turn on the projector
          </Text>
          <Divider style={{marginBottom: 10,}}/>
          <View
            style={{
              flexx:1,
              flexDirection: 'row',
              //justifyContent: 'center',
              //height: 56,
              //backgroundColor: '#f9f9f9',
            }}>
            <Text style={{marginBottom: 10, fontSize:15, fontWeight: 'bold', justifyContent: 'center',}}>
            Approved by
            </Text>
            <Icon name="body" size={30} style={{marginLeft:85,}} />
          </View>
          <Text style={{marginBottom: 10}}>
            Mohammed
          </Text>
          <Text style={{marginBottom: 10}}>
            ahmad
          </Text>
          <Text style={{marginBottom: 10}}>
            saleh
          </Text>
          <Text style={{marginBottom: 10}}>
            abdullah
          </Text>
          <Divider style={{marginBottom: 10,}}/>
          <View
            style={{
              flexx:1,
              flexDirection: 'row',
              justifyContent: 'center',
              //height: 56,
              //backgroundColor: '#f9f9f9',
            }}>
            <Button buttonStyle={{backgroundColor: 'green',borderRadius: 50,marginLeft:2}}  type={'solid'} icon={{name: "done-all", size: 22, color: "white",alignItems: 'center',justifyContent: 'center',}} />
            <Button onPress={() => this.setState({ isVisibleModify: true })} buttonStyle={{backgroundColor: 'orange',borderRadius: 50,marginLeft:2}}  type={'solid'} title='Modify' />
            <Button onPress={() => this.setState({ isVisibleDelete: true })} buttonStyle={{backgroundColor: 'red',borderRadius: 50,marginLeft:2}}  type={'solid'} title='Delete' />
          </View>
        </Card>
        
        <Card
          title={
            <View
              style={{
                flexx:1,
                flexDirection: 'row',
                //justifyContent: 'center',
                //height: 56,
                //backgroundColor: '#f9f9f9',
              }}>
              <Text style={{marginBottom: 10, fontSize:25, fontWeight: 'bold', justifyContent: 'center',}}>
              Prepare powerpoint
              </Text>
              <Icon name="done-all" size={50} color={'green'} style={{marginLeft:85,}} />
            </View>
          }
          /*image={{uri:'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/kodaikanal-2836301.jpg'}}*/>
          <Text style={{marginBottom: 10, fontSize:20, fontWeight: 'bold', justifyContent: 'center',}}>
            Done at 7/19/2019 , 10:12am
          </Text>
          <Divider style={{marginBottom: 10,}}/>
          <Text style={{marginBottom: 10}}>
            prepare powerpoint presentation and turn on the projector
          </Text>
          <Divider style={{marginBottom: 10,}}/>
          <View
            style={{
              flexx:1,
              flexDirection: 'row',
              //justifyContent: 'center',
              //height: 56,
              //backgroundColor: '#f9f9f9',
            }}>
            <Text style={{marginBottom: 10, fontSize:15, fontWeight: 'bold', justifyContent: 'center',}}>
            Approved by
            </Text>
            <Icon name="body" size={30} style={{marginLeft:85,}} />
          </View>
          <Text style={{marginBottom: 10}}>
            Mohammed
          </Text>
          <Text style={{marginBottom: 10}}>
            ahmad
          </Text>
          <Text style={{marginBottom: 10}}>
            saleh
          </Text>
          <Text style={{marginBottom: 10}}>
            abdullah
          </Text>
          <Divider style={{marginBottom: 10,}}/>
          <View
            style={{
              flexx:1,
              flexDirection: 'row',
              justifyContent: 'center',
              //height: 56,
              //backgroundColor: '#f9f9f9',
            }}>
            <Button onPress={() => this.setState({ isVisibleDelete: true })} buttonStyle={{backgroundColor: 'red',borderRadius: 50,marginLeft:2}}  type={'solid'} title='Delete' />
          </View>
        </Card>
        
        
        {/*<Card title="CARD WITH DIVIDER">
          {
            users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text style={styles.name}>{u.name}</Text>
                </View>
              );
            })
          }
        </Card>*/}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Home from './components/Home';
import Chat from './components/Chat';

import {
  Router,
  Scene
} from 'react-native-router-flux';

import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component {
  render() {
    return (
      <Router>
        <Scene key = "root" titleStyle = {styles.navigationBarTitleStyle}>
          <Scene key = "home" component= {Home} title = "Home" titleStyle = {styles.navigationBarTitleStyle}/>
          <Scene key = "chat" component= {Chat} title = "Chat" titleStyle = {styles.navigationBarTitleStyle}/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navigationBarTitleStyle: {
       // centering for Android
      flex: 1,
      textAlign: 'center'
  }
});

export default App;

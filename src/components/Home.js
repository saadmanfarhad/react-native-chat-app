import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    name: '',
  }
  render() {
    return (
      <View>
        <Text style = {styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style = {styles.nameInput}
          placeholder = 'Your Name'
          onChangeText= {(text) => {
            this.setState({
              name: text,
            })
          }}
          value = {this.state.name}
        />
        <TouchableOpacity
          onPress = {( ) => {
            //navigate and pass the name
            Actions.chat({
              username: this.state.name
            });
          }}
        >
          <Text style= {styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    margin: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20
  }
});

export default Home;

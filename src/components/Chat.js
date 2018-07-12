import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';

import PropTypes from 'prop-types';

import {
  View,
  Text,
} from 'react-native';

class Chat extends React.Component {
  state = {
    messages : []
  }
  render() {
    return (
      <GiftedChat
        messages= {this.state.messages}
        onSend= {(message) => {

        }}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

Chat.defaultProps = {
  username: 'You'
}

Chat.propTypes = {
  username: PropTypes.string,
}

export default Chat;

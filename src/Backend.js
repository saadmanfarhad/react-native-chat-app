import firebase from 'firebase';

class Backend {
  uid = '';
  messageRef = null;
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAcOvq4WI4LV5_9RJM_f9IPEKMgWro9ANM",
      authDomain: "react-native-chat-app-d00ec.firebaseapp.com",
      databaseURL: "https://react-native-chat-app-d00ec.firebaseio.com",
      storageBucket: "react-native-chat-app-d00ec.appspot.com"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setUid(user.uid);
      }
      else{
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }

  loadMessages(callback) {
    this.messageRef = firebase.database().ref('messages');
    this.messageRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.username,
        },
      });
    };
    this.messageRef.limitToLast(20).on('child_added', onReceive);
  }

  sendMessage(message) {
    for(let i = 0; i < message.length; i++){
      this.messageRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }

  closeChat() {
    if(this.messageRef) {
      this.messageRef.off();
    }
  }
}

export default new Backend();

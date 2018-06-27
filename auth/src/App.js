import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBNI0IVhSe9Apn93IuicN5f38vq3Kqzydw',
      authDomain: 'authentication-a4e73.firebaseapp.com',
      databaseURL: 'https://authentication-a4e73.firebaseio.com',
      projectId: 'authentication-a4e73',
      storageBucket: 'authentication-a4e73.appspot.com',
      messagingSenderId: '839261289468',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

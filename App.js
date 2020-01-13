import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator, } from 'react-native';
import AppNavigator from './navigation/AppNavigator'
import * as Font from 'expo-font';
import { Ionicons, Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as firebase from 'firebase';
//configuring firebase with this project

var config = {
  apiKey: "AIzaSyA8hn-IZ0TsCJSRwBvbPrN2COAYmb-FrWc",
  authDomain: "credit-82e97.firebaseapp.com",
  databaseURL: "https://credit-82e97.firebaseio.com",
  projectId: "credit-82e97",
  storageBucket: "credit-82e97.appspot.com",
  messagingSenderId: "295615359456",
  appId: "1:295615359456:web:c31c92685e24c38283a385",
  measurementId: "G-DZRPE6G726"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isSplashReady: false,
    };
  }



  async componentDidMount() {
    let that = this;
    setTimeout(function () { that.setState({ isSplashReady: true }) }, 2500);
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isSplashReady) {
      return (
        <View style={styles.containers}>
          <Image
            style={styles.logo}
            source={require('./assets/logo.jpg')}
          />
          <ActivityIndicator style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }} size="large" color="#ea5435" />
        </View>
      )
    }
    else if (!this.state.isReady) {
      return <AppLoading />;
    }
    else {
      return (
        <View style={styles.container}>
          <AppNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containers: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: 190,
    width: 210,
    // marginTop: '40%'
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AlertIOS} from 'react-native';
import { withAuthenticator } from "aws-amplify-react-native";
import { Storage, Analytics, API } from "aws-amplify";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//will put file to public directory, support path
Storage.put('hans/test.txt', 'Hello')
    .then (result => console.log(result))
    .catch(err => console.log(err));

Storage.get('test.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err));
  
Analytics.record('Apps on');

type Props = {};
class App extends Component<Props> {

  async componentDidMount() {
    try {
      const data = await API.get('sampleCloudApi', '/items')
      AlertIOS.alert(
        'data Complete',
        JSON.stringify(data)
       );
      console.log('data: ', data)
    } catch (error) {
      AlertIOS.alert(
        'data error',
        JSON.stringify(error.message)
        
       );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export default withAuthenticator(App);

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
});

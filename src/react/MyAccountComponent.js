/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class MyAccountComponent extends Component {
  constructor() {
    super();
    this.state = {
      account: 'ojm325'
    };
  }

  render() {
    var displayView = this.state.active 
    return (
      <View style={styles.container}>
        <Text style={styles.username}>
          Welcome, {this.state.account}!
        </Text>
      </View>
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
  username: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('react_native_app', () => react_native_app);

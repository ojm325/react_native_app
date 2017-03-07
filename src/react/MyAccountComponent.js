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
      account: 'ojm325',
      active: true
    };
  },

  onButtonPress() {
    Alert.alert('Button has been pressed!');
    this.setState({
      active: false
    });
  }

  render() {
    return (
      {
        this.state.active ?
        <View style={styles.container}>
          <Text style={styles.username}>
            Welcome, {this.state.account}!
          </Text>
          <Button
            onPress={this.onButtonPress}
            title='Click This Button!'
            color='#841584'
            accessibilityLabel='Click this button that says Click This Button'
          />
        </View>
        :
        null
      }
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

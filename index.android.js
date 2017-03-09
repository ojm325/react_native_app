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
import MyAccountComponent from './src/react/MyAccountComponent'
import MapViewComponent from './src/react/MapViewComponent'

export default class react_native_app extends Component {
  constructor() {
    super();
    this.state = {
      displayView: true
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
     this.setState({
       displayView: false
     });
  }

  render() {
    var displayAccount = this.state.displayView ? <MyAccountComponent /> : null;
    return (
      <View style={styles.container}>
        <MapViewComponent />
        {displayAccount}
        <Button
          onPress={this.onButtonPress}
          title='Click This Button!'
          color='#841584'
          accessibilityLabel='Click this button that says Click This Button'
        />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('react_native_app', () => react_native_app);

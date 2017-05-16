import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src';

export default class typescriptStarter extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('typescriptStarter', () => typescriptStarter);

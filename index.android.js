/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/components/App';

import {
  AppRegistry,
} from 'react-native';

export default class ReactNativeDraggableBoardExample extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('ReactNativeDraggableBoardExample', () => ReactNativeDraggableBoardExample);


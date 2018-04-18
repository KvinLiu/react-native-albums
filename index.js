// Index.ios.js - place code in here for IOS!!!

import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header />
)

AppRegistry.registerComponent('reactAlbums', () => App);

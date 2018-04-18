// Index.ios.js - place code in here for IOS!!!

import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Alubms!'}/>
    <AlbumList />
  </View>
)

AppRegistry.registerComponent('reactAlbums', () => App);

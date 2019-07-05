
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Movie from './components/Movie';
import Header from './components/Header'


export default class App extends React.Component {
  render() {
    return (
     <View style={{flex: 1}}>
       <Header content='Movies'/>
       <Movie/>
     </View>
    );
  }
}



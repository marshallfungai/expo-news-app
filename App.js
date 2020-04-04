import React, { Component } from 'react';
import { ActivityIndicator, StatusBar , SafeAreaView} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreenRouter from './screens/index';
import {SavedNewsProvider} from './context/savedNewsContext';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    isReady: false
  }

  componentDidMount = async() => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ isReady: true })
  }

  render () {
    if (!this.state.isReady) {
      return <ActivityIndicator />
    }
    return (
      <SafeAreaProvider >

        <StatusBar barStyle="dark-content" />
        <SavedNewsProvider>
           <MainScreenRouter />
        </SavedNewsProvider>
        
      </SafeAreaProvider>
    )
  }
}
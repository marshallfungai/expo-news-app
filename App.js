import 'react-native-gesture-handler';
import React, {PureComponent} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {Provider} from "react-redux";
import {store} from "./src/store/utilities/storeConfiguration";

const Stack = createStackNavigator();

export default class App extends PureComponent{
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="dark-content"/>}
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator}/>
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

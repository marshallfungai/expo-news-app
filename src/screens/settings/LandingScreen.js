import React, {PureComponent} from 'react';
import { StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default class LandingScreen extends PureComponent{

  render() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text> Settings Landing Screen</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Dimensions } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems, DrawerActions } from 'react-navigation-drawer';
import { Icon } from 'native-base';


export default class SideMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <ScrollView>
        <SafeAreaView
          style={s.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          <View>
                <Image style={{width: null, height: 300}} source={ require('../assets/img/sidebar-top.jpg') } />
               
                <Icon name='close' style={{position:'absolute', top:5, right: 5, zIndex:5, color:'#fff'}} onPress={this.props.navigation.closeDrawer}/>
                
                {/* <View style={s.overlay}></View> */}
                
          </View>
          <DrawerItems inactiveTintColor='#fff' activeTintColor='#fff' activeBackgroundColor='#e64c1a' {...this.props} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
const {width, height} =  Dimensions.get('window');
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a5475',
    color: '#fff',
    height: height
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: '#0067ff',

  } 
});


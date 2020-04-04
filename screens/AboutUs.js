import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, View } from 'native-base';
import AppHeader from '../components/AppHeader';
export default class AboutUs extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <AppHeader isHome={true} navigation={this.props.navigation}/>
        <Content style={{marginHorizontal: 20, }}>
         
         <View><Text>About Us Content </Text></View>
         
        </Content>
      </Container>
    );
  }
}
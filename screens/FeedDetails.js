import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import AppHeader from '../components/AppHeader';
export default class FeedDetail extends Component {
  render() {
    return (
      <Container>
         <AppHeader />
        <Content>
          <Text>
             Feed details
          </Text>
        </Content>
      
      </Container>
    );
  }
}
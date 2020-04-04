import React, { Component, useEffect, useState, useContext } from 'react';
import { Dimensions, Modal, Share, Image, StyleSheet, TouchableOpacity, AsyncStorage, Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left,Right, Body, Title, View} from 'native-base';

import {SavedNewsContext} from '../context/savedNewsContext';

import { AppHeader } from './AppHeader';
import Time from './Time';


const ModalComponent = (props)=>{

    const [savedNews, setSavedNews] = useContext(SavedNewsContext);
    const { showModal, newsData } = props;
    const { title, content, urlToImage, publishedAt } = newsData;
    const {height, width} = Dimensions.get('window');

    useEffect(()=>{

    },[]);

    const handleModalClose = () => {
        return props.onClose();
    }

    const addToFavorites = ()=> {
       
         
            const addNews = {
                title:  props.newsData.title,
                content: props.newsData.content,
                publishedAt: props.newsData.publishedAt,
                urlToImage: props.newsData.urlToImage,
                category: props.category || 'Saved News'
            }
            
            setSavedNews([...savedNews, addNews]);  //save news
       
       
    }

    return (
        <Modal
            animationType='slide'
            transparent
            visible={showModal}
            onRequestClose={handleModalClose}
        >
            <Container style={{ margin:0, padding:0,  marginBottom: 0 }}>
                <Header>
                    <Left>

                        <Button transparent onPress={handleModalClose}>
                            <Icon name='close' />
                        </Button>
                    </Left>
                    <Body>
                        {/* <Title>{title}</Title> */}
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <View style={{ height: 200, width: width, flex: 1, margin: 0, padding: 0, textAlign:'center' }}>
                   
                    <Image source={{ uri: urlToImage }} style={{ height: 200, width: width, flex: 1, margin: 0, padding: 0 }} />
                     <Title numberOfLines={4} style={s.headerTitle}>{title}</Title>
                    <View style={s.overlay}></View>
                </View>
                <Content padder>
                
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            
                            <Body>
                                
                                <Text>
                                    {content}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                  
                                    <Time time={publishedAt} />
                                    
                                </Button>
                                <View style={{ display:'flex', flexDirection:'row', alignItems:'center'}} >
                                    <TouchableOpacity style={{ display:'flex', flexDirection:'row', alignItems:'center'}}  onPress={addToFavorites}>
                                         <Icon style={{color:'#3a5475', marginRight: 5}} name='ios-heart' /> 
                                         <Text style={{fontSize: 10 }}>Add To Favorites</Text>
                                    </TouchableOpacity>
                                </View>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>

            </Container>
        </Modal>
    );


}


export default ModalComponent;

const s = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    headerTitle: {
      fontSize: 20,
      zIndex: 5,
      position:'absolute', 
      color:'#fff', 
      bottom:0,  marginLeft:30, margin:30     
    
    },
 
    overlay: {
      flex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.3,
      backgroundColor: ' linear-gradient(to top, rgba(58, 60, 82, 0.99), rgba(68, 59, 86, 0.9), rgba(78, 59, 89, 0.81), rgba(88, 58, 93, 0.72), rgba(98, 58, 97, 0.63), rgba(108, 57, 100, 0.54), rgba(118, 57, 104, 0.45), rgba(128, 56, 107, 0.36), rgba(138, 56, 111, 0.27), rgba(148, 55, 115, 0.18), rgba(158, 55, 118, 0.09), rgba(168, 54, 122, 0))',

    }  
  });


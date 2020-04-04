import React, { Component } from 'react';
import { Dimensions, Alert, ActivityIndicator, View, ListView,  FlatList, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon} from 'native-base';
import styled from 'styled-components/native';

import { getNews } from '../services/newsData';
import NewsItem from './NewsItem';
import ModalComponent from './Modal';
import SkeletonLoader from './SkeletonLoader';
import Time from './Time';

import { ScrollView } from 'react-native-gesture-handler';
import { ThemeColors } from 'react-navigation';


export default class NewsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoadiing: true,
      data: null,
      placeholder_url: 'https://via.placeholder.com/150',
      setModalVisibility: false,
      modalNewsData: {}
    }; 
  }
  
  handleItemDataOnPress = (newsData)=>{
    this.setState({
      setModalVisibility: true,
      modalNewsData: newsData
   });
  }

  /***
   
  */
  handleModalClose = () => {
    this.setState({
          setModalVisibility: false,
          modalNewsData: {}
      })
    }

     
  componentDidMount () {
     const {articles} = this.props;
     
     if(articles) {
      this.setState({
        data: articles,
        isLoadiing: false
      });
     }
    
  }
  

  render() {

    let loadView = this.state.isLoading ? (
      <SkeletonLoader/>
    ) : (
      <CustomFlatList
      data={this.state.data}
      renderItem={({ item, index }) => <this.Item item={item} index={index} />}
      keyExtractor={(item, index) => index.toString()} />
      )



    return (
        <>  
                    
             {loadView}
                <ModalComponent 
                showModal={this.state.setModalVisibility}
                newsData={this.state.modalNewsData}
                onClose ={this.handleModalClose}
             />
        </>
    );
  }

  HeaderNews = ({newsData, onPressData})=>{
    const {width, height} = Dimensions.get('window');
    const {title, content, urlToImage, publishedAt} = newsData;
    const placeholder_url = 'https://loremflickr.com/320/140/turkey,cyprus/all';

    const handleDisplayNews =  () => {
       
     
       urlToImage != null ? urlToImage : placeholder_url;
      onPressData({  title, content, urlToImage, publishedAt });
  }

    return (
       <View >
          <TouchableOpacity onPress={handleDisplayNews} style={{width: '100%', height: height / 3, borderBottom: '1px solid #ccc', elevation: 3}} >
               <Image
                    style={{width: 50, height: 50}}
                    source={{ uri: urlToImage != null ? urlToImage : placeholder_url }}
                    style={{width: '100%', height: height / 4}}
                  />
                <View style={{padding:5, marginBottom: 2}}>
                  <Text note style={{fontSize:15, fontWeight:'700' }}>{title}</Text>
                  <Text note style={{fontSize: 12, marginBottom:10}}><Time time={publishedAt} /> </Text>
                
                 </View> 
          </TouchableOpacity>                 

       </View>  
    );
  }

  Item = ({ item, index }) =>{
    
    if(index == 0) {
      return (<this.HeaderNews onPressData={this.handleItemDataOnPress} newsData={item} /> );
    }
    return (
      <NewsItem key={item.id} onPressData={this.handleItemDataOnPress} newsData={item} category={this.props.category}/>
    );
  }
}

const CustomFlatList= styled(FlatList) `
     background-color: #eeeeee; 
`;

import React, { Component, useEffect, useState, useContext } from 'react';
import { Dimensions, Alert, ActivityIndicator, View, ListView,  FlatList, Image, AsyncStorage } from 'react-native';
import { Text } from 'native-base';
import styled from 'styled-components/native';


import {SavedNewsContext} from '../context/savedNewsContext';
import AppHeader from '../components/AppHeader';
import NewsItem from '../components/NewsItem';
import ModalComponent from '../components/Modal';
import SkeletonLoader from '../components/SkeletonLoader';



const Favorites = (props) => {

  const [savedNews, setSavedNews] = useContext(SavedNewsContext);
  const [isNewsAvailable, setIsNewsAvailable] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const [modalNewsDetail, setModalNewsDetail] = useState({}); 
  const [modalVisibility, setModalVisibility] = useState(false); 

  const {width, height} = Dimensions.get('window');
  // const placeholder_url = 'https://via.placeholder.com/150';

  useEffect(()=>{
 
    // console.log('the context provider is here :: ' + savedNews);
    if(savedNews != '') {
      setIsNewsAvailable(true);
    }
   
  }, [savedNews]);




  const handleItemDataOnPress = (newsData)=>{
    setModalVisibility(true);
    setModalNewsDetail(newsData);
  
  }


  const handleModalClose = () => {

       setModalVisibility(false);
       setModalNewsDetail({});
 
    }

    const CustomFlatList= styled(FlatList) `
     background-color: #eeeeee; 
`;




   let loadView =  isNewsAvailable ? //if news is saved news is available
   (
    <FlatList
    data={ savedNews}
    renderItem={({ item, index }) => <Item item={item} index={index}/>}
    keyExtractor={(item, index) => index.toString()} />
    )
    :<Text note style={{fontSize:20, fontWeight:'700' }}>No Saved News</Text>;  //if there is no saved news

    const Item = (props) =>{

      return (
         <NewsItem key={props.item.id} onPressData={handleItemDataOnPress} newsData={props.item} category={props.category}/>
       
      );
    }
    
    return (
      <>  

           <AppHeader  title="Favorite Articles" isHome={true} navigation={props.navigation}/>
           {loadView}
           <ModalComponent 
              showModal={modalVisibility}
              newsData={modalNewsDetail}
              onClose ={handleModalClose}
           />
      </>
  );
  

}


export default Favorites;


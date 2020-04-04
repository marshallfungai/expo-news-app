import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tab, Tabs, ScrollableTab  } from 'native-base';
import AppHeader from '../components/AppHeader';
import NewsList from '../components/NewsList';
import {getAllNews} from '../services/newsData';


export default class FeedScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
       isLoading: true,
       data: [],
       categories : ['top-headlines','Technology','Sports','Entertainment','Health'],
       topheadlines : [],
       technology : [],
       sports : [],
       entertainment : [],
       health : [],
    }
  }

  async componentDidMount () {
  
     //get all category news
         
      let cats = await getAllNews(this.state.categories).then(data => data); 
      
      if(cats) {
          this.setState({
            topheadlines: cats[0].articles,
            technology: cats[1].articles,
            sports: cats[2].articles,
            entertainment: cats[3].articles,
            health: cats[4].articles,
            isLoading: false,
        });
      }
     // console.log(this.state.topheadlines || 'no news to show');

 }

  render() {
    let FeedView = this.state.isLoading ? <ActivityIndicator animating={this.state.isLoading} /> :
                                          
                                          <Content padder={false}>
                                              <Tabs  tabBarUnderlineStyle={{borderBottomWidth:0}}
                                               
                                              renderTabBar={()=> <ScrollableTab tabBarUnderlineStyle={{color:'#fff'}}/>} >
                                                  <Tab heading="TopStories" tabStyle={{backgroundColor:'#000'}} activeTabStyle={{backgroundColor:'#cc232a',color:'#fff'}} activeTextStyle={{color:'#fff'}} textStyle={{color:'#fff'}}>
                                                      <NewsList articles ={this.state.topheadlines} category ='top-headlines' navigation={this.props.navigation}/>
                                                  </Tab>
                                                  <Tab heading="Technology" tabStyle={{backgroundColor:'#000', borderLeftColor:'#ccc'}} activeTabStyle={{backgroundColor:'#cc232a'}} activeTextStyle={{color:'#fff'}} textStyle={{color:'#fff'}}>              
                                                      <NewsList articles ={this.state.technology} category ='Technology' navigation={this.props.navigation}/>
                                                  </Tab>
                                                  <Tab  heading="Sports" tabStyle={{backgroundColor:'#000'}} activeTabStyle={{backgroundColor:'#cc232a'}} activeTextStyle={{color:'#fff'}} textStyle={{color:'#fff'}}>
                                                      <NewsList articles ={this.state.sports} category ='Sports' navigation={this.props.navigation}/>
                                                  </Tab>
                                                  <Tab  heading="Entertainment" tabStyle={{backgroundColor:'#000'}} activeTabStyle={{backgroundColor:'#cc232a'}} activeTextStyle={{color:'#fff'}} textStyle={{color:'#fff'}} >
                                                      <NewsList articles ={this.state.entertainment} category ='Entertainment' navigation={this.props.navigation}/>
                                                  </Tab>
                                                  <Tab  heading="health" tabStyle={{backgroundColor:'#000'}} activeTabStyle={{backgroundColor:'#cc232a', color:'#fff'}} activeTextStyle={{color:'#fff'}} textStyle={{color:'#fff'}}>
                                                      <NewsList articles ={this.state.health} category ='Health' navigation={this.props.navigation}/>
                                                  </Tab>
                                              </Tabs>
                                          </Content>
      ;
   
    return (
      <>
         <AppHeader hastabs={true} title="News Feed" isHome={true} navigation={this.props.navigation}/>
         {FeedView}
       
      </> 
    );
  }
}
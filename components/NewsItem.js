import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, List, ListItem, Text, Left, Body, Right, Button, View, Icon } from 'native-base';
import {TimeOnList} from './Time';
import styled from 'styled-components/native';


export default class NewsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsItem: props.newsData
        }
        this.handleDisplayNews = this.handleDisplayNews.bind(this);
    }

    handleDisplayNews() {

        const {title, content, urlToImage, publishedAt} = this.props.newsData;
        const placeholder_main = 'https://via.placeholder.com/300x200';
        urlToImage != null ? urlToImage : placeholder_main;
        this.props.onPressData({  title, content, urlToImage, publishedAt });
    }

    render() {

        const placeholder_url = 'https://via.placeholder.com/150';
        return (


            <CustomListItem avatar onPress={this.handleDisplayNews} noBorder={true} >
                <Left>
                    <Thumbnail square source={{ uri: this.state.newsItem.urlToImage != null ? this.state.newsItem.urlToImage : placeholder_url }} />
                </Left>
                <Body>
                    <Text style={{color:'#3a5475', fontSize: 17}} numberOfLines={2}>{this.state.newsItem.title}</Text>

                    {/* <Text note numberOfLines={3}>{this.state.newsItem.description} . .</Text> */}
                    <View style={{ marginTop: 5, borderTopColor: '#ccc', display: 'flex', flexDirection: 'row' }}>
                         <Text style={{backgroundColor:'#cc232a', color:'#fff', padding: 5, paddingBottom: 2, paddingTop: 2, marginRight: 5, fontSize: 11}}>{this.props.category}</Text>
                        <Text style={{ color:'#ccc'}}> || </Text>
                        <TimeOnList time={this.state.newsItem.publishedAt} />

                     </View>

                </Body>

            </CustomListItem>


        );
    }
}

const CustomListItem = styled(ListItem) `
     background-color: #fff;
     margin: 5px;
     padding: 5px;
     elevation: 1;
`;


import React, {Component} from 'react';
import {Body, Left, ListItem, Text, Thumbnail, View, Icon} from 'native-base';
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
                    <Thumbnail square large source={{ uri: this.state.newsItem.urlToImage != null ? this.state.newsItem.urlToImage : placeholder_url }} />
                </Left>
                <Body>
                    <Text style={{color:'#3a5475', fontSize: 17}} numberOfLines={2}>{this.state.newsItem.title}</Text>

                    {/* <Text note numberOfLines={3}>{this.state.newsItem.description} . .</Text> */}
                    <View style={{ marginTop: 10, borderTopColor: '#ccc', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{borderRadius: 10, textTransform: 'capitalize', fontFamily: 'Roboto', backgroundColor:'#cc232a', color:'#fff', padding: 5, fontSize: 11}}>
                            {this.props.category ? this.props.category.replace('-', ' ') : this.props.category}
                        </Text>
                        <Icon type={'Ionicons'} name={'ios-git-commit'} style={{fontSize: 15, paddingVertical: 5}}/>
                        <TimeOnList time={this.state.newsItem.publishedAt} extraStyle={{padding: 5}}/>

                    </View>

                </Body>

            </CustomListItem>


        );
    }
}

const CustomListItem = styled(ListItem) `
     background-color: #fff;
     margin: 8px;
     padding: 5px;
     elevation: 1;
     borderRadius: 10px;
`;


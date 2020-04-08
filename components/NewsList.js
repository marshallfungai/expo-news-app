import React, {Component} from 'react';
import {Dimensions, FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base';
import styled from 'styled-components/native';
import NewsItem from './NewsItem';
import ModalComponent from './Modal';
import SkeletonLoader from './SkeletonLoader';
import {TimeOnHeader, TimeOnList} from './Time';


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
                <TouchableOpacity
                    onPress={handleDisplayNews}
                    style={{backgroundColor:'#6780a4', width: '100%', height: height / 2.75, elevation: 3}} >
                    <Image
                        source={{ uri: urlToImage != null ? urlToImage : placeholder_url }}
                        style={{width: '100%', height: height / 4}}
                    />
                    <View style={{padding:5, marginBottom: 2}}>
                        <Text numberOfLines={2} style={{color: '#000', fontSize:16, fontFamily: 'Roboto_medium' }}>{title}</Text>
                        <TimeOnHeader time={publishedAt} />
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
     background-color: #ccd7e6; 
`;

import React from "react";
import {View, Text} from "react-native";
import {ListItem} from "react-native-elements";
import moment from "moment";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default (props) => {
    const article = props.article
    const isBookmarked = props.isBookmarked
    return <ListItem
        onPress={() => props.openNews(article)}
        containerStyle={{
            borderRadius: 10,
            margin: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
        }}
        leftAvatar={{ rounded: false, size: 'large', source: { uri: article.urlToImage } }}
        title={article.title}
        titleProps={{numberOfLines: 3}}
        subtitle={
            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 11, textTransform: 'capitalize'}}>{moment(article.publishedAt).format('LL')}</Text>
                <Text style={{fontSize: 11, textTransform: 'capitalize'}}>{moment(article.publishedAt).fromNow()}</Text>
                <MaterialCommunityIcons
                    onPress={() => props.toggleBookmarkStatus(article)}
                    name={'bookmark'} color={isBookmarked ? '#5472d3' : 'grey'} size={16}/>
            </View>
        }
    />
}


import React from "react";
import {View, Text} from "react-native";
import {ListItem} from "react-native-elements";
import moment from "moment";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default (props) => {
    const article = props.article
    return <ListItem
        containerStyle={{margin: 10, elevation: 3}}
        leftAvatar={{ rounded: false, size: 'large', source: { uri: article.urlToImage } }}
        title={article.title}
        titleProps={{numberOfLines: 3}}
        subtitle={
            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 11}}>{moment(article.publishedAt).format('LL')}</Text>
                <Text style={{fontSize: 11}}>{moment(article.publishedAt).fromNow()}</Text>
                <MaterialCommunityIcons name={'bookmark'} color={'grey'} size={16}/>
            </View>
        }
    />
}


import React from "react";
import {Text, View} from "react-native";
import {Image, ListItem, Tile} from "react-native-elements";

export default (props) => {
    const article = props.article
    return <Tile
        onPress={() => props.openNews(article)}
        imageSrc={{ uri: article.urlToImage }}
        title={article.title}
        caption="Some Caption Text"
        containerStyle={{marginBottom: 5,  elevation: 5}}
    />
}


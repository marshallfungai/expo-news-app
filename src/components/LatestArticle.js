import React from "react";
import {Text, View} from "react-native";
import {Image, ListItem, Tile} from "react-native-elements";
import Colors from "../constants/Colors";

export default (props) => {
    const article = props.article
    return <Tile
        onPress={() => props.openNews(article)}
        imageSrc={{ uri: article.urlToImage }}
        title={article.title}
        caption="Some Caption Text"
        overlayContainerStyle={{
            borderBottomColor: Colors.colorPrimary,
            elevation: 3,
            margin: 0,
            marginTop: 50,
        }}
    />
}


import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Tile} from "react-native-elements";
import moment from "moment";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default class LandingScreen extends PureComponent{

    render() {
        const { article, isBookmarked} = this.props.route.params
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Tile imageSrc={{ uri: article.urlToImage }}
                      title={article.title}
                      contentContainerStyle={{ height: 120 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{fontSize: 11, textTransform: 'capitalize'}}>{moment(article.publishedAt).format('LL')}</Text>
                        <Text style={{fontSize: 11, textTransform: 'capitalize'}}>{moment(article.publishedAt).fromNow()}</Text>
                        <MaterialCommunityIcons
                            name={'bookmark'} color={isBookmarked ? '#5472d3' : 'grey'} size={16}/>
                    </View>
                </Tile>
                <Text style={{margin: 10, lineHeight: 20}}>
                    {article.content}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
    },
});

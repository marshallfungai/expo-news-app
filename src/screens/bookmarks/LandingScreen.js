import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchOfflineBookmarks, toggleBookmarkStatus} from "../../store/actions/news";
import {connect} from "react-redux";
import OldArticle from "../../components/OldArticle";

class LandingScreen extends PureComponent{

    componentDidMount() {

    }

    render() {
        const bookmarkedItems = this.props.bookmarkedItems
        if (!bookmarkedItems.length){
            return (
                <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
                    <Text>You haven't bookmarked anything</Text>
                </View>
            )
        }

        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                {
                    bookmarkedItems.map((article, index) => (<OldArticle
                            key={JSON.stringify(article)}
                            article={article}
                            isBookmarked={this._isBookmarked(article)}
                            openNews={this._loadNewsContent}
                            toggleBookmarkStatus={this._onBookmarkPress}/>
                    ))
                }
            </ScrollView>
        );
    }

    _onBookmarkPress = (article) => {
        this.props.toggleBookmarkStatus(article);
    }

    _isBookmarked = (article) => {
        return this.props.bookmarkedItems.find(_article => _article.url === article.url)
    }

    _loadNewsContent = (article) => {
        const {navigation} = this.props;
        navigation.navigate('NewsDetail' ,{
            isBookmarked: this._isBookmarked(article),
            article: article
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const mapStateToProps = state => {

    return {
        bookmarkedItems: state.newsReducer.bookmarked
    };
};

const matchDispatchToProps = dispatch => {
    return {
        toggleBookmarkStatus: (article) => dispatch(toggleBookmarkStatus(article)),
        fetchOfflineBookmarks: () => dispatch(fetchOfflineBookmarks()),
    };
};

export default connect( mapStateToProps,  matchDispatchToProps )(LandingScreen);

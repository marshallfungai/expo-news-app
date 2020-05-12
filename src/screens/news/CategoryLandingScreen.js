import React, {PureComponent} from 'react';
import {ActivityIndicator, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchNews, toggleBookmarkStatus} from "../../store/actions/news";
import {connect} from "react-redux";
import OldArticle from "../../components/OldArticle";
import LatestArticle from "../../components/LatestArticle";

class CategoryLandingScreen extends PureComponent{

    componentDidMount() {
        const {route} = this.props
        const { category } = route.params;

        this._fetchNews(category)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {route} = this.props
        const { category } = route.params;

        if (route.params.category !== prevProps.route.params.category) {
            this._fetchNews(category)
        }
    }

    componentWillUnmount() {

    }

    render() {
        const {route} = this.props
        const { category } = route.params;

        if (!this.props.categories[category]){
            return (
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <ActivityIndicator />
                </ScrollView>
            )
        } else {
            const categoryArticles = this.props.categories[category]

            if (!categoryArticles.length){
                return (
                    <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
                        <Text>Nothing has been published in this category</Text>
                    </View>
                )
            }

            return (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            title={'Updating news'}
                            onRefresh={() => this._fetchNews(category)}/>
                    }
                    style={styles.container} contentContainerStyle={styles.contentContainer}>
                    {
                        categoryArticles.map((article, index) => {
                            if(index === 0) {
                                return <LatestArticle
                                    openNews={this._loadNewsContent}
                                    key={JSON.stringify(article)}
                                    article={article}/>
                            } else {
                                return <OldArticle
                                    key={JSON.stringify(article)}
                                    article={article}
                                    openNews={this._loadNewsContent}
                                    isBookmarked={this._isBookmarked(article)}
                                    toggleBookmarkStatus={this._onBookmarkPress}/>
                            }
                        })
                    }
                </ScrollView>
            );
        }
    }

    _fetchNews = (category) =>{
        const fetchParams = {
            category: category
        }

        this.props.fetchNews(fetchParams);
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

    contentContainer: {
        paddingBottom: 50,
        //top: 0,
    }
});

const mapStateToProps = state => {

    return {
        categories: state.newsReducer.categories,
        bookmarkedItems: state.newsReducer.bookmarked
    };
};

const matchDispatchToProps = dispatch => {
    return {
        fetchNews: (fetchParams) => dispatch(fetchNews(fetchParams)),
        toggleBookmarkStatus: (article) => dispatch(toggleBookmarkStatus(article)),
    };
};

export default connect( mapStateToProps,  matchDispatchToProps )(CategoryLandingScreen);

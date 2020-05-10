import React, {PureComponent, useState} from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchNews} from "../../store/actions/news";
import {connect} from "react-redux";
import {ListItem} from "react-native-elements";
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
            return (
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    {
                        categoryArticles.map((article, index) => {
                            if(index === 0) {
                                return <LatestArticle
                                    key={JSON.stringify(article)}
                                    article={article}/>
                            } else {
                                return <OldArticle
                                    key={JSON.stringify(article)}
                                    article={article}/>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const mapStateToProps = state => {

    return {
        categories: state.newsReducer.categories
    };
};

const matchDispatchToProps = dispatch => {
    return {
        fetchNews: (fetchParams) => dispatch(fetchNews(fetchParams)),
    };
};

export default connect( mapStateToProps,  matchDispatchToProps )(CategoryLandingScreen);

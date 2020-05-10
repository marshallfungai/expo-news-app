import React, {PureComponent, useState} from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchNews} from "../../store/actions/news";
import {connect} from "react-redux";
import {ListItem} from "react-native-elements";

class CategoryLandingScreen extends PureComponent{

    componentDidMount() {
        const {route} = this.props
        const cat = route.params.category
        this._fetchNews(cat)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {route} = this.props

        if (route.params.category !== prevProps.route.params.category) {
            console.log('doing again')
            const cat = route.params.category
            this._fetchNews(cat)
        }
    }

    componentWillUnmount() {

    }

    render() {
        const {route} = this.props
        const cat = route.params.category

        if (!this.props.categories[cat]){
            return (
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <ActivityIndicator />
                </ScrollView>
            )
        } else {
            const categoryArticles = this.props.categories[cat]
            return (
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    {
                        categoryArticles.map(article => (
                            <ListItem
                                key={JSON.stringify(article)}
                                bottomDivider={true}
                                title={article.title}
                                subtitle={article.description}/>
                        ))
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

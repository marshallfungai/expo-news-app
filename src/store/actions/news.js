import {FETCH_BOOKMARKED_ITEMS, FETCH_NEWS, TOGGLE_BOOKMARK_STATUS} from './actionTypes';
import { AsyncStorage } from 'react-native';
import axios from "axios";

export const fetchNews = fetchParams => async dispatch => {
    const key = '971ebffd234b46769458438d2d821628';
    const category = fetchParams.category;

    axios.get('http://newsapi.org/v2/top-headlines', {
        params: {
            apiKey: key,
            category: category === 'latest' ? '' : category,
            country: 'tr',
            language: 'tr'
        }
    }).then(async (response) => {
        dispatch({
            type: FETCH_NEWS,
            payload: {
                category: category,
                articles: response.data.articles
            }
        });
        await AsyncStorage.setItem (category, JSON.stringify(response));
    }).catch(async (error) => {
        const offlineData = await AsyncStorage.getItem(category);
        dispatch({
            type: FETCH_NEWS,
            payload: {
                category: category,
                articles: offlineData ? JSON.parse(offlineData) : []
            }
        });
    })
};

export const toggleBookmarkStatus = article => async dispatch => {
    dispatch({
        type: TOGGLE_BOOKMARK_STATUS,
        payload: article
    });
};

export const fetchOfflineBookmarks = article => async dispatch => {
    const offlineData = await AsyncStorage.getItem('bookmarkedItems');

    dispatch({
        type: FETCH_BOOKMARKED_ITEMS,
        payload: offlineData ? JSON.parse(offlineData) : []
    });
};

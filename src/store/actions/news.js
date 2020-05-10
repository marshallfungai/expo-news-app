import { FETCH_NEWS } from './actionTypes';
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
    }).then((response) => {
        dispatch({
            type: FETCH_NEWS,
            payload: {
                category: category,
                articles: response.data.articles
            }
        });
        AsyncStorage.setItem (category, JSON.stringify(response));
    }).catch((error) => {
        console.log(error);
    })
};

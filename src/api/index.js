const key = '971ebffd234b46769458438d2d821628'
import axios from 'axios'
import { AsyncStorage } from 'react-native';

export const fetchNews = (category) => {
    let data = null;

    axios.get('http://newsapi.org/v2/top-headlines', {
        params: {
            apiKey: key,
            category: category,
            country: 'tr',
            language: 'tr'
        }
    }).then((response) => {
        AsyncStorage.setItem(
            category,
            JSON.stringify(response)
        );
    }).catch((error) => {
        console.log(error);
    })

    return data
}

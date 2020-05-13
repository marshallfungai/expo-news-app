import {FETCH_BOOKMARKED_ITEMS, FETCH_NEWS, TOGGLE_BOOKMARK_STATUS} from '../actions/actionTypes';
import { AsyncStorage } from 'react-native';

const initialState = {
    categories: {},
    bookmarked: [],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS: {
            const fetchObj = action.payload;
            const category = fetchObj.category;
            const articles = fetchObj.articles;

            return {
                ...state,
                categories: {
                    ...state.categories,
                    [category]: articles
                }
            };
        }

        case TOGGLE_BOOKMARK_STATUS: {
            const article = action.payload;

            const bookmarksClone = JSON.parse(JSON.stringify(state.bookmarked))
            const foundIndex = bookmarksClone.findIndex(_article => _article.url === article.url)

            if (foundIndex === -1){
                bookmarksClone.push(article)
            } else {
                bookmarksClone.splice(foundIndex, 1)
            }

            _updateBookmarks(bookmarksClone)

            return {
                ...state,
                bookmarked: bookmarksClone
            };
        }

        case FETCH_BOOKMARKED_ITEMS: {
            const bookmarkedItems = action.payload;

            return {
                ...state,
                bookmarked: bookmarkedItems
            };
        }

        default:
            return state;
    }
};

const _updateBookmarks = async (items) => {
    await AsyncStorage.setItem('bookmarkedItems', JSON.stringify(items));
};

export { initialState, reducer };

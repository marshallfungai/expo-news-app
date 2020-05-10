import { FETCH_NEWS } from '../actions/actionTypes';

const initialState = {
    categories: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS:
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

        default:
            return state;
    }
};

const _saveLanguage = async language => {
    await AsyncStorage.setItem('appLanguage', language);
};

export { initialState, reducer };

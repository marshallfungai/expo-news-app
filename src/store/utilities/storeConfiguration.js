import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as newsReducer } from '../reducers/news';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    newsReducer: newsReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export { store };

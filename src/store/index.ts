import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import { bookReducer } from '../reducer';

export const history = createHistory();

const middleware = [
    routerMiddleware(history)
]

const composedEnhancers = compose(
    applyMiddleware(...middleware)
)

const store = createStore(
    connectRouter(history)(bookReducer),
    composedEnhancers
)

export default store;
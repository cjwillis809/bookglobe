import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './index';

export const history = createHistory();

const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers = compose(
  applyMiddleware(...middleware)
)

export default function configureStore() {
  return createStore(
    connectRouter(history)(rootReducer),
    composedEnhancers
  );
}
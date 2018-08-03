import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { fetchAllBooks } from './store/Actions';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(fetchAllBooks());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

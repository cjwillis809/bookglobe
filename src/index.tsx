import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';


import App from './App';
import LoginPage from './components/Login/LoginPage';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { fetchAllBooks } from './store/Actions';
import configureStore, { history } from './store/configureStore';

const store = configureStore();

store.dispatch(fetchAllBooks());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/login" component={LoginPage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

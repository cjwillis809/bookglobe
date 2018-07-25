import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import BooksList from './components/BooksList';
import LoginPage from './components/pages/LoginPage';
import store, { history } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact={true} path="/" component={BooksList}/>
          <Route exact={true} path="/login" component={LoginPage} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;

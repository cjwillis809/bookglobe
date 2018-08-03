import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import BooksList from './components/BooksList';

import logo from './logo.svg';
import { AppState } from './store';

interface BookAppProps {
  navigateToLogin: () => void
}

class App extends React.Component<BookAppProps> {
  constructor(props: BookAppProps) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to BookGlobe</h1>
          <button className="App-loginButton" onClick={this.props.navigateToLogin}>Login</button>
        </header>
        <BooksList />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    navigateToLogin: () => dispatch(push('/login'))
  }
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(App);

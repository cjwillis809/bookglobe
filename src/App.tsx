import * as React from 'react';
import './App.css';
import BooksList from './components/BooksList';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BooksList />
    </div>
  );
}

export default App;

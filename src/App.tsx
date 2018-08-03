import * as React from 'react';
import './App.css';
import BooksList from './components/BooksList';
import Header from './components/Header/Header';

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
        <Header />
        <BooksList />
      </div>
    );
  }
}

export default App;

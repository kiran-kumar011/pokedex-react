import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Pokemon />
      </React.Fragment>
    );
  }
}

export default App;

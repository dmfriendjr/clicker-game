import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game/Game';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TicTacToe from '../TicTacToe';

class App extends Component {
  render() {
    return (
      <main className="container">
        <TicTacToe />
      </main>
    );
  }
}

export default App;

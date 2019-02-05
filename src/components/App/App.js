import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TicTacToe from '../TicTacToe';
import Pong from '../Pong';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Link to="/">Home</Link>
        <Link to="/ttt">Tic Tac Toe</Link>
        <Link to="/pong">Pong</Link>
        <Route path="/ttt" component={TicTacToe} />
        <Route path="/pong" component={Pong} />
      </main>
    );
  }
}

export default App;

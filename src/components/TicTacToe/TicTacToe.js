import React, { Component } from 'react';
import './TicTacToe.css';

class TicTacToe extends Component {
  render() {
    return (
      <div className="tic-tac-toe">
        <div className="ttt-cell ttt-top-left">O</div>
        <div className="ttt-cell ttt-top-center">O</div>
        <div className="ttt-cell ttt-top-right">O</div>
        <div className="ttt-cell ttt-center-left">O</div>
        <div className="ttt-cell ttt-bottom-left">O</div>
        <div className="ttt-cell ttt-center-center">O</div>
        <div className="ttt-cell ttt-center-right">O</div>
        <div className="ttt-cell ttt-bottom-center">O</div>
        <div className="ttt-cell ttt-bottom-right">O</div>
      </div>
    );
  }
}

export default TicTacToe;

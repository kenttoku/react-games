import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TicTacToe.css';

class TicTacToe extends Component {
  render() {
    const { board } = this.props;

    const cells = board.map((cell, index) => {
      let column;
      let row;

      if (index % 3 === 0) {
        column = 'left';
      } else if (index % 3 === 1) {
        column = 'center';
      } else {
        column = 'right';
      }

      if (Math.floor(index / 3) === 0) {
        row = 'top';
      } else if (Math.floor(index / 3) === 1) {
        row = 'center';
      } else {
        row = 'bottom';
      }

      return <div key={`ttt-${row}-${column}`} className={`ttt-cell ttt-${row}-${column}`}>{cell}</div>;
    });

    return (
      <div className="tic-tac-toe">
        {cells}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.ticTacToe.board,
});

export default connect(mapStateToProps)(TicTacToe);

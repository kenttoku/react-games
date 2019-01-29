import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TicTacToe.css';
import { tttPlayCell, tttResetBoard } from '../../actions';

class TicTacToe extends Component {
  play(cell) {
    const { board, dispatch } = this.props;
    if (!board[cell]) {
      dispatch(tttPlayCell(cell));
    }
  }

  reset() {
    const { dispatch } = this.props;
    dispatch(tttResetBoard());
  }

  render() {
    // 0 1 2
    // 3 4 5
    // 6 7 8
    const { board } = this.props;
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winner;

    winConditions.forEach((condition) => {
      const first = board[condition[0]];
      const second = board[condition[1]];
      const third = board[condition[2]];
      if (first) {
        if (first === second && first === third) {
          winner = first;
        }
      }
    });

    const winDisplay = winner ? `Winner is ${winner}` : '';

    const cells = board.map((cell, index) => {
      let column;
      let row;
      let borderClasses = 'border border-dark';

      if (index % 3 === 0) {
        column = 'left';
        borderClasses += ' border-left-0';
      } else if (index % 3 === 1) {
        column = 'center';
      } else {
        column = 'right';
        borderClasses += ' border-right-0';
      }

      if (Math.floor(index / 3) === 0) {
        row = 'top';
        borderClasses += ' border-top-0';
      } else if (Math.floor(index / 3) === 1) {
        row = 'center';
      } else {
        row = 'bottom';
        borderClasses += ' border-bottom-0';
      }

      return (
        <button
          type="button"
          disabled={winner}
          onClick={() => this.play(index)}
          key={`ttt-${row}-${column}`}
          className={`ttt-cell ttt-${row}-${column} ${borderClasses}`}
        >
          {cell}
        </button>
      );
    });

    return (
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div className="tic-tac-toe mx-auto">
          {cells}
        </div>
        <button
          type="button"
          onClick={() => this.reset()}
        >
          Reset Board
        </button>
        <p>{winDisplay}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  board: state.ticTacToe.board,
});

export default connect(mapStateToProps)(TicTacToe);

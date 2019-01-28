import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TicTacToe.css';

class TicTacToe extends Component {
  render() {
    const { board } = this.props;

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

      return <div key={`ttt-${row}-${column}`} className={`ttt-cell ttt-${row}-${column} ${borderClasses}`}>{cell}</div>;
    });

    return (
      <div className="tic-tac-toe mx-auto">
        {cells}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.ticTacToe.board,
});

export default connect(mapStateToProps)(TicTacToe);

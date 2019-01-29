import * as actions from '../actions';

const initialState = {
  turnX: true,
  board: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
};

const ticTacToeReducer = (state = initialState, action) => {
  const { type } = action;
  if (type === actions.PLAY_CELL) {
    const { board } = state;
    const { cell } = action;
    board[cell] = state.turnX ? 'X' : 'O';
    return Object.assign({}, state, {
      turnX: !state.turnX,
      board: [...board],
    });
  }

  return state;
};

export default ticTacToeReducer;

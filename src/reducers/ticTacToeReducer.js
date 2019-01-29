import * as actions from '../actions';

const initialState = {
  turnX: true,
  board: [null, null, null, null, null, null, null, null, null],
};

const ticTacToeReducer = (state = initialState, action) => {
  const { type } = action;
  if (type === actions.TTT_PLAY_CELL) {
    const { board } = state;
    const { cell } = action;
    return Object.assign({}, state, {
      turnX: !state.turnX,
      board: board.map((boardCell, index) => {
        if (index === cell) {
          return state.turnX ? 'X' : 'O';
        }
        return boardCell;
      }),
    });
  } if (type === actions.TTT_RESET_BOARD) {
    return initialState;
  }

  return state;
};

export default ticTacToeReducer;

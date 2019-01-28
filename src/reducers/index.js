import { combineReducers } from 'redux';
import ticTacToeReducer from './ticTacToeReducer';

const reducer = combineReducers({
  ticTacToe: ticTacToeReducer,
});

export default reducer;

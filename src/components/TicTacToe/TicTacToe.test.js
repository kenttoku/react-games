import React from 'react';
import { shallow } from 'enzyme';
import TicTacToe from './TicTacToe';

describe('<TicTacToe />', () => {
  it('Renders without crashing', () => {
    shallow(<TicTacToe />);
  });
});

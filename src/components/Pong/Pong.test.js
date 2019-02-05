import React from 'react';
import { shallow } from 'enzyme';
import Pong from './Pong';

describe('<Pong />', () => {
  it('Renders without crashing', () => {
    shallow(<Pong />);
  });
});

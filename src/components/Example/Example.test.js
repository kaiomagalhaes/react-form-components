import React from 'react';
import ReactDOM from 'react-dom';
import Example from './index';

it('Example renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Example />, div);
});

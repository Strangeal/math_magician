import React from 'react';
import { render } from '@testing-library/react';
import Calculate from '../components/Calculator';

it('renders to match the snapshot', () => {
  const calculator = render(<Calculate />);
  expect(calculator).toMatchSnapshot();
});

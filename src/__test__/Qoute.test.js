import React from 'react';
import { render } from '@testing-library/react';
import Qoute from '../pages/Quote';

it('renders to match the snapshot', () => {
  const quote = render(<Qoute />);
  expect(quote).toMatchSnapshot();
});

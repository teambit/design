import React from 'react';
import { render } from '@testing-library/react';
import { DefaultSpanText, DivText } from './text.composition';

it('should render with the correct text in default span element', () => {
  const { getByText } = render(<DefaultSpanText />);
  const rendered = getByText('hello world!');

  expect(rendered).toBeTruthy();
});

it('should render with the correct text in div element', () => {
  const { getByText } = render(<DivText />);
  const rendered = getByText('hello world!');

  expect(rendered).toBeTruthy();
});

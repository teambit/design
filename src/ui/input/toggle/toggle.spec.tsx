import React from 'react';
import { render } from '@testing-library/react';
import { DisabledToggle, DisabledAndCheckedToggle } from './toggle.composition';

it('should render the toggle with disabled and unchecked options', () => {
  const { container } = render(<DisabledToggle />);
  const inputElement = container.querySelector('input');

  expect(inputElement).not.toBeNull();
  expect(inputElement?.disabled).toEqual(true);
  expect(inputElement?.checked).toEqual(false);
});

it('should render the toggle with disabled and checked options', () => {
  const { container } = render(<DisabledAndCheckedToggle />);
  const inputElement = container.querySelector('input');

  expect(inputElement).not.toBeNull();
  expect(inputElement?.disabled).toEqual(true);
  expect(inputElement?.checked).toEqual(true);
});

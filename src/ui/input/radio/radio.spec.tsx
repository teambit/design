import React from 'react';
import { render } from '@testing-library/react';
import { DisabledRadio, DisabledAndCheckedRadio } from './radio.composition';

it('should render the radio with disabled and unchecked options', () => {
  const { container } = render(<DisabledRadio />);
  const inputElement = container.querySelector('input');

  expect(inputElement).not.toBeNull();
  expect(inputElement?.disabled).toEqual(true);
  expect(inputElement?.checked).toEqual(false);
});

it('should render the radio with disabled and checked options', () => {
  const { container } = render(<DisabledAndCheckedRadio />);
  const inputElement = container.querySelector('input');

  expect(inputElement).not.toBeNull();
  expect(inputElement?.disabled).toEqual(true);
  expect(inputElement?.checked).toEqual(true);
});

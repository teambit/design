import React from 'react';
import { render } from '@testing-library/react';
import { PreviewColorPicker, DisabledColorPicker } from './color-picker.composition';

it('should render with text, and L size', () => {
  const { container, getByText } = render(<PreviewColorPicker />);
  const inputElement = container.querySelector('input');
  const text = getByText('Select color');

  expect(inputElement).not.toBeNull();
  expect(inputElement?.disabled).toEqual(false);
  expect(text).toBeInTheDocument();
});

it('should render with disabled option', () => {
  const { container } = render(<DisabledColorPicker />);
  const inputElement = container.querySelector('input');

  expect(inputElement).not.toBeNull();
  expect(inputElement?.disabled).toEqual(true);
});

import React from 'react';
import { render } from '@testing-library/react';
import { PreviewColorPicker, DisabledColorPicker } from './color-picker.composition';

it('should render with text, and L size', () => {
  const { getByText } = render(<PreviewColorPicker />);
  const text = getByText('Select color');

  expect(text).toBeInTheDocument();
});

it('should render with disabled option', () => {
  const { container } = render(<DisabledColorPicker />);
  const element = container.querySelector('.colorPicker');

  expect(element).not.toBeNull();
  expect(element?.classList).toContain('disabled');
});

import React from 'react';
import { render } from '@testing-library/react';
import { BasicCheckboxItem } from './checkbox-item.composition';

describe('Basic Checkbox Item', () => {
  it('should render with text inside', () => {
    const { getByText } = render(<BasicCheckboxItem />);
    const result = getByText('hello world!');

    expect(result).toBeInTheDocument();
  });
});

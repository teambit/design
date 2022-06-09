import React from 'react';
import { render } from '@testing-library/react';
import { BasicMultiSelect } from './multi-select.composition';

describe('Basic multi-select', () => {
  it('should render with placeholder text inside', () => {
    const { getByText } = render(<BasicMultiSelect />);
    const result = getByText('Item');

    expect(result).toBeInTheDocument();
  });
});

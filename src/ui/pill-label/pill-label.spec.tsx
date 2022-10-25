import React from 'react';
import { render } from '@testing-library/react';
import { BasicPillLabel } from './pill-label.compositions';

describe('Basic pill-label', () => {
  it('should render with text inside', () => {
    const { getByText } = render(<BasicPillLabel />);
    const result = getByText('This is a pill-shaped label');

    expect(result).toBeInTheDocument();
  });
});

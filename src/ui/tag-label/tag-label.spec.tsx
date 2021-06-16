import React from 'react';
import { render } from '@testing-library/react';
import { BasicTagLabel, ActiveTagLabel } from './tag-label.composition';

describe('tag-label', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTagLabel />);
    const rendered = getByText('basic');
    expect(rendered).toBeTruthy();
  });

  it('should render with active class', () => {
    const { getByText } = render(<ActiveTagLabel />);
    const rendered = getByText('active');
    expect(rendered.classList.contains('active')).toBe(true)

  });
});

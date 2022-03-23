import React from 'react';
import { render } from '@testing-library/react';
import { BasicIconText } from './icon-text.composition';

describe('IconText component', () => {
  it('should render input correctly', () => {
    const { getByTestId } = render(<BasicIconText />);
    const rendered = getByTestId('test-input');

    expect(rendered).toBeInTheDocument();
    expect(rendered.tagName).toBe('INPUT');
  });
});

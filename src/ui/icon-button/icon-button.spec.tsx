import React from 'react';
import { render } from '@testing-library/react';
import { IconButtonExample, IconButtonDisabled } from './icon-button.compositions';

describe('IconButton', () => {
  it('should render the text in the button', () => {
    const { getByText } = render(<IconButtonExample />);

    const result = getByText('Terminate');

    expect(result).toBeInTheDocument();
  });
  it('should render a disabled button', () => {
    const { getByText } = render(<IconButtonDisabled data-testId="target" />);

    const result = getByText('Terminate');

    expect(result).toHaveProperty('disabled');
  });
});

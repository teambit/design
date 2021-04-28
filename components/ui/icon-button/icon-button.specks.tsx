import React from 'react';
import { render } from '@testing-library/react';
import { IconButtonExample, IconButtonDisabled } from './icon-button.compositions';


describe('IconButton', () => {
    it('should render the text in the button', () => {
      const { container } = render(<IconButtonExample />);
      expect(container.querySelector('#icon-and-text').textContent).toEqual('Terminate');
    });
    it('should render a disabled button', () => {
      const { container } = render(<IconButtonDisabled />);
      // TODO: ran & oded fix it
      // @ts-ignore
      expect(container.querySelector('#disabled-icon-button')).toBeDisabled();
    });
  });
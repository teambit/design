import React from 'react';
import { render } from '@testing-library/react';
import { ButtonLinkWithImage } from './button-link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<ButtonLinkWithImage />);
  const rendered = getByText('Teambit');

  expect(rendered).toBeTruthy();
});
it('should render with image tag', () => {
  const { container } = render(<ButtonLinkWithImage />);

  expect(container.getElementsByTagName('img').length).toBe(1);
});

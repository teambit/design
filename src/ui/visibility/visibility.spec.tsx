import React from 'react';
import { render } from '@testing-library/react';
import { PrivateVisibilityExample, PublicVisibilityExample } from './visibility.composition';

it('should render private icon', () => {
  const { container } = render(<PrivateVisibilityExample />);
  const test = container.querySelectorAll('.bitcon-lock').length;

  expect(test).toBe(1);
});

it('should render public icon', () => {
  const { container } = render(<PublicVisibilityExample />);
  const test = container.querySelectorAll('.bitcon-world').length;

  expect(test).toBe(1);
});

import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelectable } from './selectable.composition';

it('should render an unchecked Selectable', () => {
  const { container } = render(<BasicSelectable isSelected={false} />);
  const rendered = container.querySelector('button');
  console.log('rendered?.classList', rendered?.classList.toString());
  expect(rendered?.classList.contains('selected')).toBeFalsy();
});

it('should render a checked Selectable', () => {
  const { container } = render(<BasicSelectable isSelected={true} />);
  const rendered = container.querySelector('button');
  console.log('rendered?.classList', rendered?.classList.toString());
  expect(rendered?.classList.contains('selected')).toBeTruthy();
});

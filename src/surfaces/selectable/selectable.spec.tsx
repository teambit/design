import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelectable } from './selectable.composition';

it('should render an unchecked Selectable', () => {
  const { getByText } = render(<BasicSelectable isSelected={false} />);
  const rendered = getByText('S');

  expect(rendered?.classList.contains('selected')).toBeFalsy();
});

it('should render a checked Selectable', () => {
  const { getByText } = render(<BasicSelectable isSelected={true} />);
  const rendered = getByText('S');

  expect(rendered?.classList.contains('selected')).toBeTruthy();
});

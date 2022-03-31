import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicMenuItem } from './menu-item.composition';

describe('Basic Menu Item', () => {
  it('should render with text inside', () => {
    const { getByText } = render(<BasicMenuItem />);
    const result = getByText('Menu item');

    expect(result).toBeInTheDocument();
  });
  it('should not have withIcon class', () => {
    const { getByText } = render(<BasicMenuItem />);
    const result = getByText('Menu item');

    expect(result.classList.contains('withIcon')).toBeFalsy();
  });
  it('should have active class when Item is clicked', async () => {
    const { getByText } = render(<BasicMenuItem />);
    const result = getByText('Menu item');

    expect(result.classList.contains('active')).toBeFalsy();
    await fireEvent.click(result);
    expect(result.classList.contains('active')).toBeTruthy();
  });
});

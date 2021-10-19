import React from 'react';
import { IconText } from './icon-text';

export const BasicIconText = () => (
  <IconText placeholder="search..." icon="discovery" onSubmit={() => alert('on icon click')} data-testid="test-input" />
);

export const BigIconText = () => (
  <IconText
    placeholder="bigger with font size"
    icon="discovery"
    onSubmit={() => alert('on icon click')}
    data-testid="test-input"
    style={{ fontSize: 20 }}
  />
);

import React from 'react';
import { Icon } from '@teambit/design.elements.icon';
import { IconText } from './icon-text';

export const BasicIconText = () => (
  <IconText
    placeholder="search..."
    icon={<Icon of="discovery" style={{ cursor: 'pointer' }} onClick={() => alert('on icon click')} />}
    data-testid="test-input"
  />
);

export const IconTextWithImage = () => (
  <IconText
    placeholder="search..."
    icon={
      <img
        src="https://static.bit.dev/bit-icons/filter.svg"
        style={{ cursor: 'pointer' }}
        onClick={() => alert('on icon click')}
      />
    }
    data-testid="test-input"
  />
);

export const BigIconTextWithIcon = () => (
  <IconText
    placeholder="bigger with font size"
    icon={<Icon of="discovery" style={{ cursor: 'pointer' }} onClick={() => alert('on icon click')} />}
    data-testid="test-input"
    style={{ fontSize: 20 }}
  />
);

export const IconTextWithoutIcon = () => <IconText placeholder="search..." data-testid="test-input" />;

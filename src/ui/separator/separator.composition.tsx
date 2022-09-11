import React from 'react';
import { Separator } from './separator';
import { TextSeparator } from './text-separator';

export const SemanticSeparator = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      top
      <Separator />
      bottom
    </div>
  );
};

export const PresentationalSeparator = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      top
      <Separator isPresentational />
      bottom
    </div>
  );
};

export const TextSeparatorExample = () => {
  return <TextSeparator style={{ minWidth: '200px' }}>text</TextSeparator>;
};

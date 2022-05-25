import React from 'react';
import { Separator } from './separator';
import { TextSeparator } from './text-separator';

export const SemanticSeparator = () => {
  return <Separator />;
};

export const PresentationalSeparator = () => {
  return <Separator isPresentational />;
};

export const TextSeparatorExample = () => {
  return <TextSeparator style={{ minWidth: '200px' }}>text</TextSeparator>;
};

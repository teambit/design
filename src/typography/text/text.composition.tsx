import React from 'react';
import { Text } from './text';
import { TextElement } from './text-element';

export const DefaultSpanText = () => {
  return <Text>hello world!</Text>;
};

export const DivText = () => {
  return <Text element={TextElement.div}>hello world!</Text>;
};

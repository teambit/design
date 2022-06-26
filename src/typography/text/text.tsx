import React from 'react';
import { TextElement } from './text-element';

export type TextProps = {
  /**
   * Text element to use.
   */
  element?: TextElement;
} & React.HTMLAttributes<HTMLDivElement>;

export function Text({ element: Element = TextElement.span, ...rest }: TextProps) {
  return <Element {...rest} />;
}

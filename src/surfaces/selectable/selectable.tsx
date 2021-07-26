import React from 'react';
import classNames from 'classnames';
import { roundnessClass, Roundness } from '@teambit/base-ui.css-components.roundness';
import styles from './selectable.module.scss';

export type SelectableProps = {
  /**
   * if the option is selected.
   */
  selected?: boolean;
  /** Controls the border radius of the selectable  */
  roundness?: Roundness;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Selectable({
  selected,
  roundness = 'default',
  onClick,
  className,
  children,
  ...rest
}: SelectableProps) {
  return (
    <button
      className={classNames(styles.option, roundnessClass[roundness], selected && styles.selected, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

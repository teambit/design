import React from 'react';
import classNames from 'classnames';
import { MenuItem, MenuItemsProps } from '@teambit/design.inputs.selectors.menu-item';
import styles from './multi-select.module.scss';

export function Placeholder({ children, className, ...rest }: MenuItemsProps) {
  return (
    <MenuItem className={classNames(styles.dropdownPlaceholder, className)} {...rest}>
      {children} <img src="https://static.bit.dev/bit-icons/fat-arrow-down.svg" alt="arrow down" />
    </MenuItem>
  );
}

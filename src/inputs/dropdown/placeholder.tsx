import React from 'react';
import classNames from 'classnames';
import { MenuItem, MenuItemsProps } from '@teambit/design.inputs.selectors.menu-item';
import styles from './dropdown.module.scss';

export function Placeholder({ children, className, ...rest }: MenuItemsProps) {
  return (
    <MenuItem className={classNames(styles.dropdownPlaceholder, className)} {...rest}>
      {children} <FatArrowDown />
    </MenuItem>
  );
}

function FatArrowDown() {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
      <path
        fill="var(--on-surface-color, #2b2b2b)"
        d="M401.947 207.477l-137.825 146.286c-4.486 4.76-11.757 4.76-16.243 0l-137.825-146.286c-7.236-7.679-2.111-20.81 8.121-20.81h275.65c10.233 0 15.357 13.131 8.122 20.81z"
      ></path>
    </svg>
  );
}

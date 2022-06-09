import React from 'react';
import classNames from 'classnames';
import { IconTextInput, IconTextInputProps } from '@teambit/design.ui.input.icon-text';
import styles from './multi-select.module.scss';

export function SearchInput({ className, ...rest }: IconTextInputProps) {
  return (
    <IconTextInput
      className={classNames(styles.searchInput, className)}
      placeholder="Search"
      icon={<img className={styles.icon} src="https://static.bit.dev/bit-icons/magnifying-glass.svg" />}
      {...rest}
    />
  );
}

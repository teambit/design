import React from 'react';
import classNames from 'classnames';
import { InputText, InputTextProps } from '@teambit/design.inputs.input-text';
import styles from './multi-select.module.scss';

export function SearchInput({ className, ...rest }: InputTextProps) {
  return (
    <InputText
      className={classNames(styles.searchInput, className)}
      placeholder="Search"
      icon={<img src="https://static.bit.dev/bit-icons/magnifying-glass.svg" />}
      {...rest}
    />
  );
}

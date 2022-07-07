import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { IconTextInput, IconTextInputProps } from '@teambit/design.ui.input.icon-text';
import styles from './search-plugin.module.scss';

export type SearchInputProps = {
  /**
   * a function that is trigger when clear is clicked.
   */
  onClear?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * a function that is trigger when done is clicked.
   */
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & IconTextInputProps;

export function SearchInput({ className, onChange, onClear, value, ...rest }: SearchInputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = useCallback((e) => {
    const nextValue = value || e.target.value;
    setInputValue(nextValue);
    onChange && onChange(e);
    return nextValue;
  }, []);

  const handleClear = (e) => {
    setInputValue('');
    onChange && onChange({ ...e, target: { value: '' } });
    onClear && onClear(e);
  };

  return (
    <IconTextInput
      className={classNames(styles.searchInput, className)}
      value={inputValue}
      onChange={handleChange}
      placeholder="Search"
      icon={
        inputValue ? (
          <span onClick={handleClear}>X</span>
        ) : (
          <img className={styles.icon} src="https://static.bit.dev/bit-icons/magnifying-glass.svg" />
        )
      }
      {...rest}
    />
  );
}

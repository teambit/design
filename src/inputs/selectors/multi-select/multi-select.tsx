import React from 'react';
import classNames from 'classnames';
import { Dropdown } from '@teambit/design.inputs.dropdown';
import { IconButton } from '@teambit/design.ui.icon-button';
import { Placeholder } from './default-placeholder';
import { SearchInput } from './search-input';
import { ListItems } from './list-items';
import type { MultiSelectProps } from './types';
import styles from './multi-select.module.scss';

export function MultiSelect({
  placeholder = '',
  itemsList = [],
  onCheck,
  onClear,
  onSubmit,
  className,
  dropdownBorder = true,
  dropClass,
  onSearch,
  ...rest
}: MultiSelectProps) {
  const hasButtons = !!onClear || !!onSubmit;
  const selectedItems = itemsList.filter((item) => item.checked);

  return (
    <Dropdown
      {...rest}
      className={classNames(styles.dropdown, dropdownBorder && styles.dropdownBorder, className)}
      dropClass={classNames(styles.dropClass, hasButtons && styles.hasButtons, dropClass)}
      PlaceholderComponent={typeof placeholder === 'string' ? Placeholder : undefined}
      // @ts-ignore - @types/react mismatch
      placeholder={placeholder}
      clickToggles={false}
    >
      {onSearch && <SearchInput onChange={onSearch} />}
      <div className={styles.listContainer}>
        {onSearch && selectedItems.length > 0 && (
          <>
            <p className={styles.titleList}>Selected</p>
            <ListItems itemsList={selectedItems} onCheck={onCheck} />
            <hr className={styles.separator} />
          </>
        )}
        <ListItems itemsList={onSearch ? itemsList.filter((item) => !item.checked) : itemsList} onCheck={onCheck} />
      </div>
      {hasButtons && (
        <div className={styles.buttonsHolder}>
          {onClear && (
            <div className={styles.clearText} onClick={onClear}>
              Clear
            </div>
          )}
          {onSubmit && (
            <IconButton priority="cta" onClick={onSubmit}>
              Done
            </IconButton>
          )}
        </div>
      )}
    </Dropdown>
  );
}

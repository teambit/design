import React from 'react';
import { Dropdown } from '@teambit/design.inputs.dropdown';
import { SearchInput } from './search-input';
import { ListItems } from './list-items';
import type { MultiSelectProps } from './types';
import styles from './multi-select.module.scss';

export function MultiSelect({ itemsList = [], onCheck, onSearch, ...rest }: MultiSelectProps) {
  const selectedItems = itemsList.filter((item) => item.checked);

  return (
    <Dropdown {...rest}>
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
    </Dropdown>
  );
}

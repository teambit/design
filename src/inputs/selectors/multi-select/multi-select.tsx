import React from 'react';
import { Dropdown, ButtonsPlugin } from '@teambit/design.inputs.dropdown';
import { ListItems } from './item-list-plugin';
import type { ButtonsPluginProps } from '@teambit/design.inputs.dropdown';
import type { DropdownProps } from '@teambit/design.inputs.dropdown';
import type { ListItemsProps } from './item-list-plugin';
import styles from './multi-select.module.scss';

export type MultiSelectProps = {} & ListItemsProps & DropdownProps & ButtonsPluginProps;

export function MultiSelect({ itemsList = [], onCheck, onSubmit, onClear, ...rest }: MultiSelectProps) {
  return (
    <Dropdown bottomPlugin={<ButtonsPlugin onClear={onClear} onSubmit={onSubmit} />} {...rest}>
      <div className={styles.listContainer}>
        <ListItems itemsList={itemsList} onCheck={onCheck} />
      </div>
    </Dropdown>
  );
}

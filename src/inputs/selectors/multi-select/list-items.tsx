import React from 'react';
import { CheckboxItem } from '@teambit/design.inputs.selectors.checkbox-item';
import { ListItemsProps } from './types';
import styles from './multi-select.module.scss';

export function ListItems({ itemsList, onCheck }: ListItemsProps) {
  return (
    <>
      {itemsList
        .filter((item) => item.visible || item.visible === undefined)
        .map((item, index) => (
          <CheckboxItem
            checked={item.checked}
            disabled={item.disabled}
            description={item.description}
            icon={item.icon}
            onInputChanged={(e) => onCheck?.(item.value, e)}
            key={index}
            className={styles.checkboxItem}
          >
            {item.element || item.value}
          </CheckboxItem>
        ))}
    </>
  );
}

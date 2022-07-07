import React, { ReactElement, ReactNode } from 'react';
import { CheckboxItem } from '@teambit/design.inputs.selectors.checkbox-item';
import styles from './item-list-plugin.module.scss';


export type ItemType = {
    /**
     * Value to be rendered in the list.
     */
    value: string;
    /**
     * Description to be rendered below the text.
     */
    description?: string;
    /**
     * Icon to be rendered right to the text.
     */
    icon?: ReactElement;
    /**
     * If the Item is selected or not.
     */
    checked?: boolean;
    /**
     * Make item disbaled.
     */
    disabled?: boolean;
    /**
     * Make item visible or not.
     */
    visible?: boolean;
    /**
     * Custom element to be rendered as Item in the list.
     */
    element?: ReactNode;
  };
  
  export type ListItemsProps = {
    /**
     * a list of item be rendered in the dropdown component.
     */
    itemsList: ItemType[];
    /**
     * a function that is trigger when an item is clicked, the function receive the checked/unchecked value.
     */
    onCheck?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  

export function ListItems({ itemsList, onCheck }: ListItemsProps) {
  return (
    <>
      {itemsList.map((item, index) => (
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

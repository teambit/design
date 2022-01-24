import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Dropdown } from '@teambit/design.inputs.dropdown';
import { CheckboxItem } from '@teambit/design.inputs.selectors.checkbox-item';
import { MenuItem } from '@teambit/design.inputs.selectors.menu-item';
import { Icon } from '@teambit/design.elements.icon';
import styles from './multi-select.module.scss';

export type ItemType = {
  value: string;
  description?: string;
  checked: boolean;
  disabled?: boolean;
};

export type MultiSelectProps = {
  /**
   * text to be rendered in the dropdown placeholder.
   */
  placeholderText?: ReactNode;
  /**
   * a list of item be rendered in the dropdown component.
   */
  itemsList?: ItemType[];
  /**
   * a function that is trigger when an item is clicked, the function receive the checked/unchecked value.
   */
  onCheck?: (value: string, checked: boolean) => void;
  /**
   * a function that is trigger when clear is clicked.
   */
  onClear?: () => void;
  /**
   * a function that is trigger when done is clicked.
   */
  onSubmit: () => void;
  /**
   * add style to the dropdown container.
   */
  className?: string;
  /**
   * add border to the dropdown container.
   */
  dropdownBorder?: boolean;
  /**
   * add style to the dropdown menu.
   */
  dropClass?: string;
};

export function MultiSelect({
  placeholderText = '',
  itemsList = [],
  onCheck,
  onClear,
  onSubmit,
  className,
  dropdownBorder = true,
  dropClass,
}: MultiSelectProps) {
  const placeholder = (
    <MenuItem className={styles.dropdownPlaceholder}>
      {placeholderText} <Icon of="fat-arrow-down" />
    </MenuItem>
  ) as any;

  return (
    <Dropdown
      className={classNames(styles.dropdown, dropdownBorder && styles.dropdownBorder, className)}
      dropClass={classNames(styles.dropClass, dropClass)}
      placeholder={placeholder}
      clickToggles={false}
    >
      {itemsList.map((item, index) => (
        <CheckboxItem
          checked={item.checked}
          disabled={item.disabled}
          description={item.description}
          onInputChanged={(e) => onCheck?.(item.value, e.target.checked)}
          key={index}
          className={styles.checkboxItem}
        >
          {item.value}
        </CheckboxItem>
      ))}
      <div className={styles.buttonsHolder}>
        {onClear && (
          <div className={styles.clearText} onClick={() => onClear()}>
            Clear
          </div>
        )}
        <div className={styles.doneText} onClick={() => onSubmit()}>
          Done
        </div>
      </div>
    </Dropdown>
  );
}

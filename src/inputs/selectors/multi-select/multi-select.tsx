import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Dropdown, DropdownProps } from '@teambit/design.inputs.dropdown';
import { CheckboxItem } from '@teambit/design.inputs.selectors.checkbox-item';
import { MenuItem, MenuItemsProps } from '@teambit/design.inputs.selectors.menu-item';
import { Icon } from '@teambit/design.elements.icon';
import styles from './multi-select.module.scss';

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
  icon?: string;
  /**
   * If the Item is selected or not.
   */
  checked: boolean;
  /**
   * Make item disbaled.
   */
  disabled?: boolean;
  /**
   * Custom element to be rendered as Item in the list.
   */
  element?: ReactNode;
};

export type MultiSelectProps = {
  /**
   * placeholder to be rendered in the dropdown placeholder.
   */
  placeholder: ReactNode;
  /**
   * a list of item be rendered in the dropdown component.
   */
  itemsList?: ItemType[];
  /**
   * a function that is trigger when an item is clicked, the function receive the checked/unchecked value.
   */
  onCheck?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * a function that is trigger when clear is clicked.
   */
  onClear?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * a function that is trigger when done is clicked.
   */
  onSubmit?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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
} & Omit<DropdownProps, 'placeholder'>;

function Placeholder({ children, className, ...rest }: MenuItemsProps) {
  return (
    <MenuItem className={classNames(styles.dropdownPlaceholder, className)} {...rest}>
      {children} <Icon of="fat-arrow-down" />
    </MenuItem>
  );
}

export function MultiSelect({
  placeholder,
  itemsList = [],
  onCheck,
  onClear,
  onSubmit,
  className,
  dropdownBorder = true,
  dropClass,
  ...rest
}: MultiSelectProps) {
  return (
    <Dropdown
      {...rest}
      className={classNames(styles.dropdown, dropdownBorder && styles.dropdownBorder, className)}
      dropClass={classNames(styles.dropClass, dropClass)}
      PlaceholderComponent={typeof placeholder === 'string' ? Placeholder : undefined}
      // @ts-ignore - @types/react mimatch
      placeholder={placeholder}
      clickToggles={false}
    >
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
      {(onClear || onSubmit) && (
        <div className={styles.buttonsHolder}>
          {onClear && (
            <div className={styles.clearText} onClick={onClear}>
              Clear
            </div>
          )}
          {onSubmit && (
            <div className={styles.doneText} onClick={onSubmit}>
              Done
            </div>
          )}
        </div>
      )}
    </Dropdown>
  );
}

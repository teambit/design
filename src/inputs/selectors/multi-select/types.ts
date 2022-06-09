import { ReactNode, ReactElement } from 'react';
import { DropdownProps } from '@teambit/design.inputs.dropdown';

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
  checked: boolean;
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

export type MultiSelectProps = {
  /**
   * placeholder to be rendered in the dropdown placeholder.
   */
  placeholder?: ReactNode;
  /**
   * a function that is trigger when clear is clicked.
   */
  onClear?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * a function that is trigger when done is clicked.
   */
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * add style to the dropdown container.
   */
  className?: string;
  /**
   * add border to the dropdown container.
   */
  dropdownBorder?: boolean;
  /**
   * add search option.
   */
  onSearch?: React.ChangeEventHandler<HTMLInputElement>;
} & ListItemsProps &
  Omit<DropdownProps, 'placeholder'>;

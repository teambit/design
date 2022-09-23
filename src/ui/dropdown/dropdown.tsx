import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Drawer, DrawerProps } from '@teambit/base-ui.surfaces.drawer';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import { Menu } from './menu';
import styles from './dropdown.module.scss';

export type DropdownProps = {
  /**
   * children to be rendered in the menu
   */
  children: ReactNode;
  /**
   * default placeholder override class
   */
  placeholderClass?: string;
  /**
   * menu override class
   */
  menuClass?: string;
  /**
   * disabled state
   */
  disabled?: boolean;
} & DrawerProps;

/**
 *
 * A generic and designed dropdown
 */
export function Dropdown({
  placeholderContent,
  children,
  menuClass,
  disabled,
  className,
  placeholderClass,
  open,
  ...rest
}: DropdownProps) {
  const preventOpenIfDisabled = disabled ? false : open; // prevent openning dropdown if disabled

  return (
    <Drawer
      open={preventOpenIfDisabled}
      className={classNames(disabled && styles.disabled, className)}
      {...rest}
      placeholderContent={
        <DefaultPlaceholder className={classNames(disabled && styles.disabled, placeholderClass)}>
          {placeholderContent}
        </DefaultPlaceholder>
      }
    >
      <Menu className={menuClass}>{children}</Menu>
    </Drawer>
  );
}

export type DefaultPlaceholderProps = {} & HTMLAttributes<HTMLDivElement>;

export function DefaultPlaceholder({ children, className, ...rest }: DefaultPlaceholderProps) {
  return (
    <div {...rest} className={classNames(styles.defaultPlaceholder, className)}>
      {children}
      <BaseIcon of="bitcon-fat-arrow-down" />
    </div>
  );
}

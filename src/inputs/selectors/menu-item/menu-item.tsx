import React from 'react';
import { Icon } from '@teambit/design.elements.icon';
import classNames from 'classnames';
import styles from './menu-item.module.scss';

export const classes = {
  menuItem: styles.menuItem,
  interactive: styles.interactive,
  active: styles.active,
  icon: styles.icon,
};
export type MenuItemsProps = {
  /** Optional icon to render at the start of the item (icomoon id) */
  icon?: string;
  /** apply active styles */
  active?: boolean;
  /** highlight when user hovers over item */
  interactive?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Menu entry with icon.
 */
export function MenuItem({ children, className, icon, active, interactive = true, ...rest }: MenuItemsProps) {
  return (
    <div
      {...rest}
      className={classNames(className, classes.menuItem, interactive && classes.interactive, active && classes.active)}
    >
      {icon && <Icon of={icon} className={classes.icon} />}
      {children}
    </div>
  );
}

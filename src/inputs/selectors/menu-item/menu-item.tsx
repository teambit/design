import React, { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './menu-item.module.scss';

export const iconClass = styles.withIcon;

export type MenuItemsProps = {
  /**
   * An optional Icon element to be render at the start of the item, can be an Image or an Icon.
   */
  Icon?: ReactElement;
  /**
   * Apply active styles
   */
  active?: boolean;
  /**
   * Highlight when user hovers over item
   */
  interactive?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Menu entry with icon.
 */
export function MenuItem({
  children,
  className,
  Icon,
  active,
  onClick,
  interactive = !!onClick,
  ...rest
}: MenuItemsProps) {
  return (
    <div
      {...rest}
      onClick={onClick}
      className={classNames(
        className,
        styles.menuItem,
        interactive && styles.interactive,
        active && styles.active,
        Icon && styles.withIcon
      )}
    >
      {Icon}
      {children}
    </div>
  );
}

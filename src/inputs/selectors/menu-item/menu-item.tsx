import React, { ReactElement, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './menu-item.module.scss';

export const iconClass = styles.withIcon;

export type MenuItemsProps = {
  /**
   * An optional Icon element to be render at the start of the item, can be an Image or an Icon.
   */
  icon?: ReactElement;
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
export const MenuItem = forwardRef<HTMLDivElement, MenuItemsProps>(
  ({ children, className, icon, active, onClick, interactive = !!onClick, ...rest }: MenuItemsProps, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        onClick={onClick}
        className={classNames(
          className,
          styles.menuItem,
          interactive && styles.interactive,
          active && styles.active,
          icon && styles.withIcon
        )}
      >
        {icon}
        {children}
      </div>
    );
  }
);

import React from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from '@teambit/base-ui.input.button';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import styles from './icon-button.module.scss';
import sizes from './sizes.module.scss';

export type IconButtonProps = {
  /**
   * icon name
   */
  icon?: string;
  /**
   * icon override class
   */
  iconClass?: string;
  /**
   * indicate button is on
   */
  active?: boolean;
  /**
   * style variance
   */
  priority?: 'ghost' | 'cta';
  /**
   * button sizes
   */
  size?: 'm' | 'l' | null;
} & ButtonProps;

/**
 *
 * Generic button that supports text, icon and integration of both
 */
export function IconButton({
  icon,
  className,
  children,
  iconClass,
  active,
  priority = 'ghost',
  size = 'm',
  ...rest
}: IconButtonProps) {
  return (
    <Button
      {...rest}
      className={classNames(
        styles.iconButton,
        sizes.buttonSizes,
        active && styles.active,
        icon && !children && styles.iconOnly,
        className
      )}
      data-priority={priority}
      data-size={size}
    >
      {icon && (
        <BaseIcon
          className={classNames(styles.icon, active && styles.active, children && styles.margin, iconClass)}
          of={`bitcon-${icon}`}
        />
      )}
      {children}
    </Button>
  );
}

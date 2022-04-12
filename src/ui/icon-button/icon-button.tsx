import React, { ReactElement } from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from '@teambit/base-ui.input.button';
import styles from './icon-button.module.scss';
import sizes from './sizes.module.scss';

export type IconButtonProps = {
  /**
   * An optional Icon element to be render at the start of the button, can be an Image or an Icon.
   */
  icon?: ReactElement;
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
  size?: 's' | 'm' | 'l' | null;
} & ButtonProps;

/**
 *
 * Generic button that supports text, icon and integration of both
 */
export function IconButton({
  icon,
  className,
  children,
  active,
  priority = 'ghost',
  size = 's',
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
        icon && children && styles.margin,
        icon && styles.withIcon,
        className
      )}
      data-priority={priority}
      data-size={size}
    >
      {icon}
      {children}
    </Button>
  );
}

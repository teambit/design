import React from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from '@teambit/base-ui.input.button';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import styles from './icon-button.module.scss';

export type IconButtonProps = {
  /**
   * icon name
   */
  icon?: string;
  /**
   * icon override class
   */
  iconClass?: string;
} & ButtonProps;

/**
 *
 * Generic button that supports text, icon and integration of both
 */
export function IconButton({ icon, className, children, iconClass, ...rest }: IconButtonProps) {
  return (
    <Button {...rest} className={classNames(styles.iconButton, className)}>
      {icon && (
        <BaseIcon className={classNames(styles.icon, children && styles.margin, iconClass)} of={`bitcon-${icon}`} />
      )}
      {children}
    </Button>
  );
}

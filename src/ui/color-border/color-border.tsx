import React from 'react';
import classNames from 'classnames';
import styles from './color-border.module.scss';
import sizes from './sizes.module.scss';

export type ColorBorderProps = {
  color?: string;
  /**
   * height sizes
   */
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | null;
} & React.HTMLAttributes<HTMLDivElement>;

export function ColorBorder({ color, size = 's', className, ...rest }: ColorBorderProps) {
  return (
    <div
      className={classNames(styles.colorBorder, sizes.colorBorderSizes, className)}
      data-size={size}
      {...rest}
      style={{ backgroundColor: color }}
    />
  );
}

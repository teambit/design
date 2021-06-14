import React from 'react';
import classNames from 'classnames';
import styles from './color-border.module.scss';

export type ColorBorderProps = {
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ColorBorder({ color, className, ...rest }: ColorBorderProps) {
  return <div className={classNames(styles.colorBorder, className)} {...rest} style={{ backgroundColor: color }} />;
}

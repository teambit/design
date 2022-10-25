import React from 'react';
import classNames from 'classnames';
import styles from './pill-label.module.scss';

export type PillLabelProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A pill shaped label with round borders
 */
export function PillLabel({ children, className, ...rest }: PillLabelProps) {
  return (
    <div className={classNames(styles.pillLabel, className)} {...rest}>
      {children}
    </div>
  );
}

import React from 'react';
import classNames from 'classnames';
import styles from './separator.module.scss';

export type TextSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export function TextSeparator({ className, children, ...rest }: TextSeparatorProps) {
  return (
    <div className={classNames(styles.textSeparator, className)} {...rest}>
      <div className={styles.line} />
      {children}
      <div className={styles.line} />
    </div>
  );
}

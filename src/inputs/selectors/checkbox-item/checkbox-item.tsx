import React from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps } from '@teambit/evangelist.input.checkbox.label';
import styles from './checkbox-item.module.scss';

export type CheckboxItemProps = CheckboxLabelProps;

export function CheckboxItem({ children, disabled, className, ...rest }: CheckboxItemProps) {
  return (
    <div className={classNames(styles.checkboxItem, !disabled && styles.hoverable, className)}>
      <CheckboxLabel disabled={disabled} {...rest}>
        <span className={styles.text}>{children}</span>
      </CheckboxLabel>
    </div>
  );
}

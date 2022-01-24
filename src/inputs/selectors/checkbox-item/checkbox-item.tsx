import React from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps } from '@teambit/evangelist.input.checkbox.label';
import styles from './checkbox-item.module.scss';

export type CheckboxItemProps = {
  /**
   * add another line of text under the value to describe it.
   */
  description?: string;
} & CheckboxLabelProps;

export function CheckboxItem({ description, children, disabled, className, ...rest }: CheckboxItemProps) {
  const content = description ? (
    <div className={styles.descriptionHolder}>
      <span className={styles.text}>{children}</span>
      <span className={styles.descriptionText}>{description}</span>
    </div>
  ) : (
    <span className={styles.text}>{children}</span>
  );
  return (
    <CheckboxLabel
      disabled={disabled}
      className={classNames(
        styles.checkboxItem,
        !disabled && styles.hoverable,
        description && styles.withDescription,
        className
      )}
      {...rest}
    >
      {content}
    </CheckboxLabel>
  );
}

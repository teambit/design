import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps } from '@teambit/evangelist.input.checkbox.label';
import styles from './checkbox-item.module.scss';

export type CheckboxItemProps = {
  /**
   * add another line of text under the value to describe it.
   */
  description?: string;
  /**
   * An optional Icon element to be render at the end of the item, can be an Image or an Icon.
   */
  icon?: ReactElement;
} & CheckboxLabelProps;

export function CheckboxItem({ description, icon, children, disabled, className, ...rest }: CheckboxItemProps) {
  const Content = description ? (
    <div className={styles.descriptionHolder}>
      <span className={styles.text}>{children}</span>
      <span className={styles.descriptionText}>{description}</span>
    </div>
  ) : (
    <div className={styles.text}>{children}</div>
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
      {typeof children === 'string' ? (
        <div className={styles.contentHolder}>
          {Content}
          {icon && <div className={styles.iconHolder}>{icon}</div>}
        </div>
      ) : (
        children
      )}
    </CheckboxLabel>
  );
}

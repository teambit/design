import React from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps } from '@teambit/evangelist.input.checkbox.label';
import { Icon } from '@teambit/design.elements.icon';
import styles from './checkbox-item.module.scss';

export type CheckboxItemProps = {
  /**
   * add another line of text under the value to describe it.
   */
  description?: string;
  /**
   * add an icon to the text, can be an icon or a url.
   */
  icon?: string;
} & CheckboxLabelProps;

function getIcon(icon: string) {
  if (icon.startsWith('http')) return <img src={icon} alt="" className={styles.img} />;
  return <Icon className={styles.icon} of={icon} />;
}

export function CheckboxItem({ description, icon, children, disabled, className, ...rest }: CheckboxItemProps) {
  const getContent = () => {
    return description ? (
      <div className={styles.descriptionHolder}>
        <span className={styles.text}>{children}</span>
        <span className={styles.descriptionText}>{description}</span>
      </div>
    ) : (
      <div className={styles.text}>{children}</div>
    );
  };

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
          {getContent()}
          {icon && <div className={styles.iconHolder}>{getIcon(icon)}</div>}
        </div>
      ) : (
        children
      )}
    </CheckboxLabel>
  );
}

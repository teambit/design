import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { textSize } from '@teambit/base-ui.text.text-sizes';
import styles from './tag-label.module.scss';

export type TagLabelProps = {
  /**
   * active state for tag label
   */
  isActive?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

export function TagLabel({ isActive = false, children, className, ...rest }: TagLabelProps) {
  return (
    <span {...rest} className={classNames(styles.tagLabel, textSize.xxs, isActive && styles.active, className)}>
      {children}
    </span>
  );
}

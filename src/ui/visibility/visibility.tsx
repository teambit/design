import React from 'react';
import classNames from 'classnames';
import { BaseIcon, BaseIconProps } from '@teambit/base-ui.elements.icon';
import styles from './visibility.module.scss';

export type VisibilityProps = {
  isPrivate: boolean;
} & Omit<BaseIconProps, 'of'>;

export function Visibility({ isPrivate, className, ...rest }: VisibilityProps) {
  return (
    <BaseIcon
      of={`bitcon-${isPrivate ? 'lock' : 'world'}`}
      className={classNames(styles.visibility, className)}
      {...rest}
    />
  );
}

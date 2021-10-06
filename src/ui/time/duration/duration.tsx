import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Duration } from '@teambit/base-ui.time.duration';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import { ellipsis } from '@teambit/design.ui.styles.ellipsis';
import styles from './duration.module.scss';

export type DurationUiProps = {
  time?: number;
} & HTMLAttributes<HTMLDivElement>;

export function DurationUi({ time, className, ...rest }: DurationUiProps) {
  if (!time) return null;
  return (
    <div {...rest} className={classNames(styles.duration, ellipsis, className)}>
      <BaseIcon of="bitcon-Ripple-duration" />
      <span>Duration:</span>&nbsp;
      <Duration time={time} />
    </div>
  );
}

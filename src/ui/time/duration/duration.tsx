import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Duration } from '@teambit/base-ui.time.duration';
import type { Duration as TimeDuration } from '@teambit/toolbox.date.duration';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import { ellipsis } from '@teambit/ui.styles.ellipsis';
import styles from './duration.module.scss';

export type DurationUiProps = {
    time?: TimeDuration | number;
} & HTMLAttributes<HTMLDivElement>;

export function DurationUi({time, className, ...rest}: DurationUiProps) {
  if(!time) return null;
  return (
    <div {...rest} className={classNames(styles.duration, ellipsis, className)}>
      <BaseIcon of="bitcon-Ripple-duration" />
      <span>Duration:</span>&nbsp;
      <Duration time={time} />
    </div>
  );
}

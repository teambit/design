import React from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps, Input } from '@teambit/base-ui.input.checkbox.label';
import styles from './radio.module.scss';

export { Input };
export type RadioProps = {} & CheckboxLabelProps;

export function Radio({ className, ...rest }: RadioProps) {
  const indicator = (
    <div className={styles.out}>
      <div className={styles.inner}>
        <div className={styles.innerCircle} />
      </div>
    </div>
  );
  return <CheckboxLabel className={classNames(styles.label, className)} indicator={indicator} {...rest} />;
}

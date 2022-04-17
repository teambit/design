import React from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps, Input } from '@teambit/base-ui.input.checkbox.label';
import styles from './radio.module.scss';

export { Input };
export type RadioProps = { name?: string; value?: string } & CheckboxLabelProps;

export function Radio({ className, type = 'radio', ...rest }: RadioProps) {
  const indicator = (
    <div className={styles.out}>
      <div className={styles.inner}>
        <div className={styles.innerCircle} />
      </div>
    </div>
  );
  return <CheckboxLabel type={type} className={classNames(styles.label, className)} indicator={indicator} {...rest} />;
}

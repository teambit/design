import React from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps, Input } from '@teambit/base-ui.input.checkbox.label';
import styles from './toggle.module.scss';

export { Input };
export type ToggleProps = {} & CheckboxLabelProps;

export function Toggle({ className, ...rest }: ToggleProps) {
  const indicator = <span className={styles.slider}></span>;
  return <CheckboxLabel className={classNames(styles.label, className)} indicator={indicator} {...rest} />;
}

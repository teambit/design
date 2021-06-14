import React from 'react';
import classNames from 'classnames';
import { IconButton, IconButtonProps } from '@teambit/design.ui.icon-button';
import styles from './settings-button.module.scss';

export type SettingsButtonProps = {} & IconButtonProps;

export function SettingsButton({ className, ...rest }: SettingsButtonProps) {
  return <IconButton {...rest} icon="settings" className={classNames(styles.settingsButton, className)} />;
}

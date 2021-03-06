import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { Roboto } from '@teambit/base-ui.theme.fonts.roboto';
import { IconFont } from '@teambit/design.theme.icons-font';
import sizes from './sizes.module.scss';
import global from './global.module.scss'; // TODO - rename
import colors from './colors.module.scss';

export type ThemeContextProps = {} & HTMLAttributes<HTMLDivElement>;

/**
 * Fully fledged theme for compositions
 */
export function ThemeContext({ children, className, ...rest }: ThemeContextProps) {
  return (
    <Theme {...rest} className={classNames(className, sizes.heading, global.overrides, colors.status)}>
      <IconFont query="eo46cx" />
      <Roboto />
      {children}
    </Theme>
  );
}

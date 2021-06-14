import React from 'react';
import classnames from 'classnames';
import { flexCenter } from '@teambit/base-ui.styles.flex-center';
import { ThemeContext, ThemeContextProps } from '@teambit/design.theme.theme-context';

export function ThemWithCentering(props: ThemeContextProps) {
  return <ThemeContext {...props} className={classnames(props.className, flexCenter)} style={{ height: '100%' }} />;
}

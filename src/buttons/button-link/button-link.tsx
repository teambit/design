import React, { ReactNode } from 'react';
import { Link, LinkProps } from '@teambit/base-react.navigation.link';
import { IconButton, IconButtonProps } from '@teambit/design.ui.icon-button';

export type ButtonLinkProps = {
  /**
   * link props.
   */
  linkProps?: LinkProps;
} & IconButtonProps;

export function ButtonLink({ linkProps, ...rest }: ButtonLinkProps) {
  return (
    <Link {...linkProps}>
      <IconButton {...rest} />
    </Link>
  );
}

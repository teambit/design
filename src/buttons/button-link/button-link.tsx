import React from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from '@teambit/design.ui.navigation.link';
import { IconButton, IconButtonProps } from '@teambit/design.ui.icon-button';
import styles from './button-link.module.scss';

export type ButtonLinkProps = {
  /**
   * link props.
   */
  linkProps?: LinkProps;
} & IconButtonProps;

export function ButtonLink({ linkProps, ...rest }: ButtonLinkProps) {
  const linkClassName = linkProps?.className;
  return (
    <Link {...linkProps} className={classNames(styles.link, linkClassName)}>
      <IconButton {...rest} />
    </Link>
  );
}

import { Icon } from '@teambit/evangelist.elements.icon';
import { Link, LinkProps } from '@teambit/base-react.navigation.link';
import { classes } from '@teambit/design.ui.surfaces.menu.item';
import classNames from 'classnames';
import React from 'react';

export type MenuLinkItemProps = {
  /** Optional icon to render at the start of the item (icomoon id) */
  icon?: string;
  /** show link as active. usage as a function is deprecated and will be removed */
  isActive?: boolean | (() => boolean);
} & LinkProps;

/**
 * Menu entry with link and icon.
 */
export function MenuLinkItem({
  href,
  children,
  icon,
  isActive,
  className,
  activeClassName,
  ...rest
}: MenuLinkItemProps) {
  return (
    <Link
      {...rest}
      href={href}
      className={classNames(className, classes.menuItem, !!href && classes.interactive)}
      activeClassName={classNames(activeClassName, classes.active)}
      active={toBoolean(isActive)}
    >
      {icon && <Icon of={icon} className={classes.icon} />}
      {children}
    </Link>
  );
}

function toBoolean(val?: boolean | (() => boolean)) {
  if (typeof val === 'boolean') return val;
  if (typeof val === 'function') return val();
  return undefined;
}

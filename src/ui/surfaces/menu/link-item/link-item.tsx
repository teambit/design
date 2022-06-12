import { Icon } from '@teambit/evangelist.elements.icon';
import { Link, LinkProps } from '@teambit/base-react.navigation.link';
// import { NavLink, NavLinkProps } from '@teambit/base-ui.routing.nav-link';
import { classes } from '@teambit/design.ui.surfaces.menu.item';
import classNames from 'classnames';
import React from 'react';

export type MenuLinkItemProps = {
  /** Optional icon to render at the start of the item (icomoon id) */
  icon?: string;
  isActive?: () => boolean;
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
      active={!isActive ? undefined : isActive()}
    >
      {icon && <Icon of={icon} className={classes.icon} />}
      {children}
    </Link>
  );
}

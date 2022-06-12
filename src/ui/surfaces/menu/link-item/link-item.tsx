import { Icon } from '@teambit/evangelist.elements.icon';
import { Link, LinkProps } from '@teambit/base-react.navigation.link';
import { classes } from '@teambit/design.ui.surfaces.menu.item';
import classNames from 'classnames';
import React from 'react';

export type MenuLinkItemProps = {
  /** Optional icon to render at the start of the item (icomoon id) */
  icon?: string;
  /** @deprecated use the `active` prop */
  isActive?: () => boolean;
} & LinkProps;

/**
 * Menu entry with link and icon.
 */
export function MenuLinkItem({
  href,
  children,
  icon,
  active,
  isActive,
  className,
  activeClassName,
  ...rest
}: MenuLinkItemProps) {
  const _active = active ?? (typeof isActive === 'function' ? isActive() : undefined);

  return (
    <Link
      {...rest}
      href={href}
      className={classNames(className, classes.menuItem, !!href && classes.interactive)}
      activeClassName={classNames(activeClassName, classes.active)}
      active={_active}
    >
      {icon && <Icon of={icon} className={classes.icon} />}
      {children}
    </Link>
  );
}

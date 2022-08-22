import React, { forwardRef, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, LinkProps, useLocation } from '@teambit/base-react.navigation.link';
import { compareUrl } from '@teambit/base-ui.routing.compare-url';
import { Dropdown } from '@teambit/design.inputs.dropdown';
import type { Position } from '@teambit/design.inputs.dropdown';
import { MenuItem } from '@teambit/design.inputs.selectors.menu-item';
import { TabLine } from './tab-line';
import type { BorderPosition } from './tab-line';
import styles from './tabs.module.scss';

type Priority = 'menu' | 'inner';
export type TabLinkProps = {
  priority?: Priority;
} & LinkProps;

/**
 * A component used to display a nav link, usually used in headers or tabs to display a specific active ui
 */
export const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  ({ className, activeClassName, children, priority = 'menu', ...rest }: TabLinkProps, ref) => {
    return (
      <Link
        data-priority={priority}
        className={classNames(styles.tabLink, className)}
        activeClassName={classNames(styles.active, activeClassName)}
        ref={ref}
        {...rest}
      >
        <div>{children}</div>
      </Link>
    );
  }
);

export type TabsLinkProps = {
  /**
   * List of links to display in the navbar
   */
  links?: LinkProps[];
  borderPosition?: BorderPosition;
  priority?: Priority;
  dropdownPosition?: Position;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export function TabsLink({
  links = [],
  className,
  borderPosition = 'bottom',
  priority = 'menu',
  dropdownPosition = 'bottom-end',
  ...rest
}: TabsLinkProps) {
  const moreBtnRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabLineRef = useRef<HTMLDivElement>(null);
  const primaryTabLinksRefs = useRef<HTMLAnchorElement[]>([]);
  const secondaryTabLinksRefs = useRef<HTMLDivElement[]>([]);
  const [selectedTab, setSelectedTab] = useState<HTMLElement | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    if (priority === 'menu') {
      const activeLink = links.findIndex((value, index) => isActiveLink(value));
      const selectedEl = primaryTabLinksRefs.current[activeLink];
      if (selectedEl) setSelectedTab(selectedEl as HTMLElement);
    }
    toggleTabs();
    window.addEventListener('resize', toggleTabs);
    return () => window.removeEventListener('resize', toggleTabs);
  }, [selectedTab, links]);

  const onTabSelect = (tabIndex: number) => {
    setSelectedTab(primaryTabLinksRefs.current[tabIndex] as HTMLElement);
  };

  const resetStyle = () => {
    containerRef.current?.classList.remove(styles.overflow);
    moreBtnRef.current?.classList.remove(styles.hidden);
    tabLineRef.current?.classList.remove(styles.hidden);
    primaryTabLinksRefs.current.forEach((tabLinkRef, index) => {
      tabLinkRef.classList.remove(styles.hidden);
    });
    secondaryTabLinksRefs.current.forEach((tabLinkRef, index) => {
      tabLinkRef.classList.remove(styles.hidden);
    });
  };

  const getAllWidthBefore = (currentElIndex: number) => {
    let width = 0;
    primaryTabLinksRefs.current.forEach((el, index) => {
      if (index <= currentElIndex) {
        width += el.offsetWidth;
      }
    });
    return width;
  };

  const toggleTabs = () => {
    resetStyle();
    const containerRefWidth = containerRef.current?.offsetWidth || 0;
    const buttonWidth = moreBtnRef.current?.offsetWidth || 0;
    let hiddenItems: number[] = [];

    for (let index = primaryTabLinksRefs.current.length - 1; index > 0; index--) {
      const tabLinkRef = primaryTabLinksRefs.current[index];
      const allWidthBefore = getAllWidthBefore(index);
      if (containerRefWidth - buttonWidth <= allWidthBefore + buttonWidth) {
        if (tabLineRef && tabLinkRef === selectedTab) {
          tabLineRef.current?.classList.add(styles.hidden);
        }
        tabLinkRef.classList.add(styles.hidden);
        hiddenItems.push(index);
      }
    }

    if (!hiddenItems.length) {
      moreBtnRef.current?.classList.add(styles.hidden);
    } else {
      secondaryTabLinksRefs.current.forEach((tabLinkRef, index) => {
        if (!hiddenItems.includes(index)) {
          tabLinkRef.classList.add(styles.hidden);
        }
      });
    }
  };

  const isActiveLink = (link: LinkProps) => {
    if (link.active) return true;
    else if (location && link.href) {
      return compareUrl(location?.pathname, link.href);
    }
    return false;
  };

  return (
    <nav className={classNames(styles.navLinks, styles.overflow, className)} ref={containerRef} {...rest}>
      {links.map(({ ...link }, index) => (
        <TabLink
          key={`nav-link-${link.key || link.href}`}
          priority={priority}
          ref={(ref) => ref && (primaryTabLinksRefs.current[index] = ref)}
          onClick={(e) => onTabSelect(index)}
          {...link}
        >
          {link.children}
        </TabLink>
      ))}
      {priority === 'menu' && <TabLine borderPosition={borderPosition} selectedTab={selectedTab} ref={tabLineRef} />}
      <div className={classNames(styles.more, styles.hidden)} ref={moreBtnRef}>
        <Dropdown
          // @ts-ignore
          placeholder={
            <div className={styles.dots} data-priority={priority}>
              <img src="https://static.bit.dev/bit-icons/more-h.svg" />
            </div>
          }
          dropClass={styles.secondaryTabContainer}
          position={dropdownPosition}
          clickToggles
          margin={8}
        >
          {links.map(({ ...link }, index) => (
            <Link onClick={(e) => onTabSelect(index)} className={styles.link} {...link}>
              <MenuItem
                key={`dropdown-link-${link.key || link.href}`}
                interactive
                active={isActiveLink(link)}
                ref={(ref) => ref && (secondaryTabLinksRefs.current[index] = ref)}
                className={styles.item}
              >
                {link.children}
              </MenuItem>
            </Link>
          ))}
        </Dropdown>
      </div>
    </nav>
  );
}

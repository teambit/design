import React, { HTMLAttributes, ReactNode, useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Dropdown } from '@teambit/design.inputs.dropdown';
import type { Position } from '@teambit/design.inputs.dropdown';
import { MenuItem } from '@teambit/design.inputs.selectors.menu-item';
import { TabLine } from './tab-line';
import type { BorderPosition } from './tab-line';
import styles from './tabs.module.scss';

export type Content = {
  title: ReactNode;
  content: ReactNode;
};

export type ContentTabsProps = {
  /**
   * The tab that should be open on initial render.
   */
  defaultIndex?: number;
  /**
   * A className to pass to nav container.
   */
  navClassName?: string;
  /**
   * Tab line border position can be top or bottom.
   */
  borderPosition?: BorderPosition;
  /**
   * An array of contents to render tab title and their content.
   */
  tabs: Content[];
  dropdownPosition?: Position;
} & HTMLAttributes<HTMLDivElement>;

export function ContentTabs({
  defaultIndex = 0,
  navClassName,
  borderPosition = 'bottom',
  tabs,
  dropdownPosition = 'bottom-end',
  ...rest
}: ContentTabsProps) {
  const [tabIndex, setTabIndex] = useState(defaultIndex);
  const [selectedTab, setSelectedTab] = useState<HTMLElement | undefined>(undefined);
  const moreBtnRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabLineRef = useRef<HTMLDivElement>(null);
  const primaryTabRefs = useRef<HTMLDivElement[]>([]);
  const secondaryTabRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setSelectedTab(primaryTabRefs.current[tabIndex]);
    toggleTabs();
    window.addEventListener('resize', toggleTabs);
    return () => window.removeEventListener('resize', toggleTabs);
  }, [tabIndex, selectedTab, tabs]);

  const onTabSelect = (index: number) => {
    setTabIndex(index);
  };

  const resetStyle = () => {
    containerRef.current?.classList.remove(styles.overflow);
    moreBtnRef.current?.classList.remove(styles.hidden);
    tabLineRef.current?.classList.remove(styles.hidden);
    primaryTabRefs.current.forEach((tabLinkRef, index) => {
      tabLinkRef.classList.remove(styles.hidden);
    });
    secondaryTabRefs.current.forEach((tabLinkRef, index) => {
      tabLinkRef.classList.remove(styles.hidden);
    });
  };

  const getAllWidthBefore = (currentElIndex: number) => {
    let width = 0;
    primaryTabRefs.current.forEach((el, index) => {
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

    for (let index = primaryTabRefs.current.length - 1; index > 0; index--) {
      const tabRef = primaryTabRefs.current[index];
      const allWidthBefore = getAllWidthBefore(index);
      if (containerRefWidth - buttonWidth <= allWidthBefore + buttonWidth) {
        if (tabRef === selectedTab) {
          tabLineRef.current?.classList.add(styles.hidden);
        }
        tabRef.classList.add(styles.hidden);
        hiddenItems.push(index);
      }
    }

    if (!hiddenItems.length) {
      moreBtnRef.current?.classList.add(styles.hidden);
    } else {
      secondaryTabRefs.current.forEach((tabRef, index) => {
        if (!hiddenItems.includes(index)) {
          tabRef.classList.add(styles.hidden);
        }
      });
    }
  };

  return (
    <div {...rest}>
      <nav className={classNames(styles.navLinks, styles.overflow, navClassName)} ref={containerRef}>
        {tabs.map((value, index) => (
          <div
            className={classNames(styles.tab, index === tabIndex && styles.active)}
            onClick={(e) => onTabSelect(index)}
            key={`tab-${value.title}-${index}`}
            ref={(ref) => ref && (primaryTabRefs.current[index] = ref)}
          >
            {value.title}
          </div>
        ))}
        <TabLine borderPosition={borderPosition} selectedTab={selectedTab} ref={tabLineRef} />
        <div className={classNames(styles.more, styles.hidden)} ref={moreBtnRef}>
          <Dropdown
            // @ts-ignore
            placeholder={
              <div className={styles.dots} data-priority="menu">
                <img src="https://static.bit.dev/bit-icons/more-h.svg" />
              </div>
            }
            dropClass={styles.secondaryTabContainer}
            position={dropdownPosition}
            clickToggles
            margin={8}
          >
            {tabs.map((value, index) => (
              <MenuItem
                key={`dropdown-${value.title}-${index}`}
                active={index === tabIndex}
                ref={(ref) => ref && (secondaryTabRefs.current[index] = ref)}
                onClick={(e) => onTabSelect(index)}
              >
                {value.title}
              </MenuItem>
            ))}
          </Dropdown>
        </div>
      </nav>
      <div>{tabs[tabIndex].content}</div>
    </div>
  );
}

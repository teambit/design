import React from 'react';
import { LinkProps } from '@teambit/base-react.navigation.link';
import { ContentTabs } from './tabs';
import type { Content } from './tabs';
import { TabsLink } from './tabs-link';

const menuLinks: LinkProps[] = [
  { children: 'Overview', href: 'https://bit.cloud/teambit/design/navigation/tabs', external: true },
  {
    children: 'Compositions',
    href: 'https://bit.cloud/teambit/design/navigation/tabs/~compositions',
    external: true,
  },
  {
    children: 'Dependencies',
    href: 'https://bit.cloud/teambit/design/navigation/tabs/~dependencies',
    external: true,
  },
  {
    children: 'Active',
    href: location.pathname,
  },
  { children: 'Tests', href: 'https://bit.cloud/teambit/design/navigation/tabs/~tests', external: true },
  { children: 'Code', href: 'https://bit.cloud/teambit/design/navigation/tabs/~code', external: true },
  { children: 'Compare', href: 'https://bit.cloud/teambit/design/navigation/tabs/~compare', external: true },
  { children: 'Change log', href: 'https://bit.cloud/teambit/design/navigation/tabs/~logs', external: true },
  {
    children: 'Configuration',
    href: 'https://bit.cloud/teambit/design/navigation/tabs/~configuration',
    external: true,
  },
];

const contentTabs: Content[] = [
  { title: 'Tab 1', content: <div>Tab 1 content</div> },
  {
    title: (
      <>
        <img style={{ height: 16, marginRight: 8 }} src="https://static.bit.dev/bit-icons/magnifying-glass.svg" />
        Tab 2 with icon
      </>
    ),
    content: <div>Tab2 content</div>,
  },
  { title: 'Tab 3', content: <div>Tab 3 content</div> },
  { title: 'Tab 4', content: <div>Tab 4 content</div> },
  { title: 'Tab 5', content: <div>Tab 5 content</div> },
  { title: 'Tab 6', content: <div>Tab 6 content</div> },
  { title: 'Tab 7', content: <div>Tab 7 content</div> },
  { title: 'Tab 8', content: <div>Tab 8 content</div> },
  { title: 'Tab 9', content: <div>Tab 9 content</div> },
];

export function TabsContent() {
  return <ContentTabs tabs={contentTabs} data-testid="content-tabs" />;
}

export function TabsLinkMenuExample() {
  return <TabsLink style={{ height: 56 }} links={menuLinks} data-testid="tabslink-menu" />;
}

export function TabsLinkInnerMenuExample() {
  return <TabsLink style={{ height: 32 }} priority="inner" links={menuLinks} />;
}

import React from 'react';
import { Tab, TabContainer, TabList, TabPanel } from './tabs';

export function TabsExample() {
  return (
    <TabContainer>
      <TabList>
        <Tab>compositions</Tab>
        <Tab>tests</Tab>
      </TabList>
      <TabPanel>
        <div>compositions content</div>
      </TabPanel>
      <TabPanel>
        <div>tests content</div>
      </TabPanel>
    </TabContainer>
  );
}

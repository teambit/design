import React from 'react';
import { render } from '@testing-library/react';
import { TabsContent, TabsLinkMenuExample } from './tabs.compositions';

describe('TabsContent component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<TabsContent />);
    const rendered = getByTestId('content-tabs');

    expect(rendered).toBeInTheDocument();
  });
  it('should render all tabs twice', () => {
    const { getByTestId, getAllByText } = render(<TabsContent />);
    const rendered = getByTestId('content-tabs');

    ['Tab 1', 'Tab 2 with icon', 'Tab 3', , 'Tab 4', , 'Tab 5', , 'Tab 6', , 'Tab 7', , 'Tab 8', , 'Tab 9'].forEach(
      (value, index) => {
        const rendered = getAllByText(value || '');
        expect(rendered.length).toBe(2);
        expect(rendered[0]).toBeInTheDocument();
        expect(rendered[1]).toBeInTheDocument();
      }
    );
  });
});

describe('TabsLink component', () => {
  it('should render correctly link', () => {
    const { getByTestId } = render(<TabsLinkMenuExample />);
    const rendered = getByTestId('tabslink-menu');

    expect(rendered).toBeInTheDocument();
  });
  it('should render all tabs twice link', () => {
    const { getByTestId, getAllByText } = render(<TabsLinkMenuExample />);
    const rendered = getByTestId('tabslink-menu');

    [
      'Overview',
      'Compositions',
      'Dependencies',
      ,
      'Active',
      ,
      'Tests',
      ,
      'Code',
      ,
      'Compare',
      ,
      'Change log',
      ,
      'Configuration',
    ].forEach((value, index) => {
      const rendered = getAllByText(value || '');
      expect(rendered.length).toBe(2);
      expect(rendered[0]).toBeInTheDocument();
      expect(rendered[1]).toBeInTheDocument();
    });
  });
});

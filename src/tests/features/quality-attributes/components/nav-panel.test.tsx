import React from 'react';
import { render, screen } from '@testing-library/react';
import NavPanel from './NavPanel'; // Adjust the import path

test('NavPanel displays links based on qualityAttributes', () => {
  // Define sample qualityAttributes data for testing
  const qualityAttributes = [
    {
      id: '1',
      name: 'Usability',
      url: '/quality/usability',
    },
    {
      id: '2',
      name: 'Performance',
      url: '/quality/performance',
    },
  ];

  // Render the NavPanel component with the sample data
  render(<NavPanel qualityAttributes={qualityAttributes} />);

  // Check if links are displayed based on the sample data
  const usabilityLink = screen.getByText('Usability');
  const performanceLink = screen.getByText('Performance');

  // Assert that the links are present in the rendered component
  expect(usabilityLink).toBeInTheDocument();
  expect(performanceLink).toBeInTheDocument();

  // Optionally, you can check the href attribute of the links
  expect(usabilityLink.getAttribute('href')).toBe('/quality/usability');
  expect(performanceLink.getAttribute('href')).toBe('/quality/performance');
});
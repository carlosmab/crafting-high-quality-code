import QualityAttributesPage from '@src/pages/quality-attributes/QualityAttributesPage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


test('Quality Attributes page contains TitleBar, NavPanel, and MainPanel', () => {
  // Render the QualityAttributesPage component
  render(<QualityAttributesPage />);

  const titleBar = screen.queryByTestId('title-bar');
  expect(titleBar).not.toBeNull();

  const navPanel = screen.queryByTestId('nav-panel');
  expect(navPanel).not.toBeNull();

  const mainPanel = screen.queryByTestId('main-panel');
  expect(mainPanel).not.toBeNull();
});
import TitleBar from '@src/features/quality-attributes/components/title-bar/TitleBar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders the main title with the expected text and class', () => {
  render(<TitleBar />);

  const mainTitleElement = screen.queryByText('Quality Code Attributes');

  expect(mainTitleElement).not.toBeNull();
  expect(mainTitleElement).toHaveClass('main-title');
});

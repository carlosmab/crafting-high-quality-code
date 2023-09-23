import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '@src/App';
import { MemoryRouter } from 'react-router-dom';


test('renders home page when on /home route', () => {
  render(
    <MemoryRouter initialEntries={['/home']}>
      <App />
    </MemoryRouter>
  );
  
  const homePageContent = screen.getByTestId("home-page");
  expect(homePageContent).toBeInTheDocument();
});


test('renders quality attributes page when on /quality-attributes route', () => {
  render(
    <MemoryRouter initialEntries={['/quality-attributes']}>
      <App />
    </MemoryRouter>
  );
  
  const homePageContent = screen.getByTestId("quality-attributes");
  expect(homePageContent).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import App from '@src/App';

test('renders home page when on /home route', () => {
  render(
    <MemoryRouter initialEntries={['/home']}>
      <App />
    </MemoryRouter>
  );

  const homePageElement = screen.getByText(/Home Page/i); 
  expect(homePageElement).toBeInTheDocument();
});


import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import APIProfilerPage from '@src/pages/api-profiler/APIProfilerPage';


describe("API profiler page tests", () => {

  beforeEach(() => {
    render(<APIProfilerPage />);
  })

  it('Page contains the correct title', () => {
    const title = screen.queryByTestId('api-profiler-title');
    expect(title).not.toBeNull();
    expect(title).toHaveTextContent('API Profiler');
  });

  it('Page contains service description', () => {
    const description = screen.queryByTestId('api-profiler-services');
    expect(description).not.toBeNull();
  })

  it('Page contains service features', () => {
    const features = screen.queryByTestId('api-profiler-features');
    expect(features).not.toBeNull();
  })
 
})

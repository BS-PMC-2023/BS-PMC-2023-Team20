import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar, footer, and home content', () => {
  render(<App />);

  // Assert that the navbar and footer are rendered
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();

  // Assert that the Home component is rendered
  expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
});

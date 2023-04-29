import Singin from './Singin';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('My Component', () => {
  test('renders a button with "here" text', () => {
    render(
      <MemoryRouter>
        <Singin />
      </MemoryRouter>
    );
    const button = screen.getByText('here');
    expect(button).toBeInTheDocument();
  });
});


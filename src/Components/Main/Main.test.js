import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'; // import the method

describe('Main component', () => {
  test('renders "Available items" section title', () => {
    render(<Main />, { wrapper: MemoryRouter }); // wrap the MemoryRouter component
    const title = screen.getByText('Available items');
    expect(title).toBeInTheDocument(); // use the method
  });
});

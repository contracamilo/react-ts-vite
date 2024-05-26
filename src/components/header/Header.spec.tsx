// src/components/header/Header.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '..';

test('renders the Header component with correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Tip Calculator/i);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveClass('text-center text-4xl text-white');
  const headerContainer = headerElement.closest('header');
  expect(headerContainer).toHaveClass('bg-teal-400 py-5');
});


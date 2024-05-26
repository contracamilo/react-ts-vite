import { render, screen } from '@testing-library/react';
import MenuItemBox from './MenuItem';

const mockItem = {
  id: 1,
  name: 'Sample Item',
  price: 9.99,
};

test('renders the MenuItemBox component with correct item name and price', () => {
  render(<MenuItemBox item={mockItem} />);

  const nameElement = screen.getByText(mockItem.name);
  const priceElement = screen.getByText(mockItem.price);

  expect(nameElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { Totals } from './Totals';

const mockOrder = [
  {
    id: 1,
    name: 'Item 1',
    price: 9.99,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Item 2',
    price: 14.99,
    quantity: 1,
  },
];

test('renders the correct subtotal amount', () => {
  const mockTip = 0.15;
  const mockSetTip = jest.fn();
  const mockStoreOrder = jest.fn();

  render(<Totals order={mockOrder} tip={mockTip} setTip={mockSetTip} storeOrder={mockStoreOrder} />);

  const subtotalElement = screen.getByText('Subtotal to pay:');
  const subtotalAmountElement = screen.getByText('$34.97');

  expect(subtotalElement).toBeInTheDocument();
  expect(subtotalAmountElement).toBeInTheDocument();
});






import { render, screen } from '@testing-library/react';
import { Container } from './MenuContainer';

describe('Container', () => {
  const mockMenuList = <div>Mock Menu List</div>;
  const mockOrderContent = () => <div>Mock Order Content</div>;
  const mockOrder = [{ id: 1, name: 'Item 1', price: 30,  quantity: 1 }, { id: 2, name: 'Item 2', price: 40, quantity: 2}];
  const mockTip = 10;
  const mockSetTip = jest.fn();
  const mockStoreOrder = jest.fn();

  it('renders the menu and order sections', () => {
    render(
      <Container
        MenuList={mockMenuList}
        OrderContent={mockOrderContent}
        order={mockOrder}
        tip={mockTip}
        setTip={mockSetTip}
        storeOrder={mockStoreOrder}
      />
    );

    const menuSection = screen.getByText('Menu');
    const orderSection = screen.getByText('Order');

    expect(menuSection).toBeInTheDocument();
    expect(orderSection).toBeInTheDocument();
  });

  it('renders the provided MenuList component', () => {
    render(
      <Container
        MenuList={mockMenuList}
        OrderContent={mockOrderContent}
        order={mockOrder}
        tip={mockTip}
        setTip={mockSetTip}
        storeOrder={mockStoreOrder}
      />
    );

    const mockMenuListElement = screen.getByText('Mock Menu List');

    expect(mockMenuListElement).toBeInTheDocument();
  });

  it('renders the provided OrderContent component', () => {
    render(
      <Container
        MenuList={mockMenuList}
        OrderContent={mockOrderContent}
        order={mockOrder}
        tip={mockTip}
        setTip={mockSetTip}
        storeOrder={mockStoreOrder}
      />
    );

    const mockOrderContentElement = screen.getByText('Mock Order Content');

    expect(mockOrderContentElement).toBeInTheDocument();
  });

});
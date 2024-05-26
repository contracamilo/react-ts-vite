import { render, screen } from '@testing-library/react';
import { Container } from './MenuContainer';

test('renders the MenuList and CheckList components', () => {
  const menuList = <div>Menu List</div>;
  const checkList = <div>Check List</div>;

  render(<Container MenuList={menuList} CheckList={checkList} />);

  const menuListElement = screen.getByText('Menu List');
  const checkListElement = screen.getByText('Check List');

  expect(menuListElement).toBeInTheDocument();
  expect(checkListElement).toBeInTheDocument();
});
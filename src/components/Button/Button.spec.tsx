import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders the Button component with correct text and styles', () => {
  const onClickMock = jest.fn();
  const buttonText = 'Click me';
  const buttonStyles = 'bg-blue-500 text-white';

  render(
    <Button onClick={onClickMock} styles={buttonStyles}>
      {buttonText}
    </Button>
  );

  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass(buttonStyles);

  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
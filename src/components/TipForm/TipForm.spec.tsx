import { render, screen, fireEvent } from '@testing-library/react';
import { TipForm } from './TipForm';


test('calls the setTip function with the selected tip value', () => {
    const setTipMock = jest.fn();
    const tip = 15;

    render(<TipForm setTip={setTipMock} tip={tip} />);

    const optionElement = screen.getByLabelText('10%');
    fireEvent.click(optionElement);

    expect(setTipMock).toHaveBeenCalledWith(0.1);
});

test('calls the setTip function with the selected tip value', () => {
    const setTipMock = jest.fn();
    const tip = 15;

    render(<TipForm setTip={setTipMock} tip={tip} />);

    const optionElement = screen.getByLabelText('20%');
    fireEvent.click(optionElement);

    expect(setTipMock).toHaveBeenCalledWith(0.2);
});

test('calls the setTip function with the selected tip value', () => {
    const setTipMock = jest.fn();
    const tip = 15;

    render(<TipForm setTip={setTipMock} tip={tip} />);

    const optionElement = screen.getByLabelText('50%');
    fireEvent.click(optionElement);

    expect(setTipMock).toHaveBeenCalledWith(0.5);
});
import { screen, render } from '@testing-library/react';
import AddCardForm from './AddCardForm.jsx';

test('render AddCardForm for unknown language', () => {
    render(<AddCardForm />);
    expect(screen.getByTestId('testNULL')).toBeInTheDocument();
});
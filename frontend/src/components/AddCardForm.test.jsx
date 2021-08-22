import { screen, render } from '@testing-library/react';
import AddCardAbstractForm from './AddCardAbstractForm.jsx';

test('render AddCardAbstractForm for unknown language', () => {
    render(<AddCardAbstractForm />);
    expect(screen.getByTestId('testNULL')).toBeInTheDocument();
});
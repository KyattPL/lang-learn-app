import { render, screen } from '@testing-library/react';
import NorwegianAddAbstract from './NorwegianAddAbstract.jsx';

test('render NorwegianAddAbstract for null speech', () => {
    render(<NorwegianAddAbstract />);
    expect(screen.getByTestId('testNorAddAbstr')).toBeInTheDocument();
});
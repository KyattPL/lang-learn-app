import { dashOnEmptyInput } from './dashOnEmptyInput';

test('test dashOnEmptyInput when null was passed', () => {
    expect(() => dashOnEmptyInput(null)).toThrowError();
});

test('test dashOnEmptyInput for empty current.value', () => {
    expect(dashOnEmptyInput({ current: { value: '' } })).toBe('-');
});

test('test dashOnEmptyInput for non-empty current.value', () => {
    expect(dashOnEmptyInput({ current: { value: 'test' } })).toBe('test');
});
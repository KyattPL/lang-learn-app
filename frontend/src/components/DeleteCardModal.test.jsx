import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import DeleteCardModal from './DeleteCardModal.jsx';
import { fetchCheckDeletePassword } from '../utils/fetchCheckDeletePassword.js';
import { fetchDeleteCard } from '../utils/fetchDeleteCard.js';

jest.mock('../utils/fetchCheckDeletePassword.js');
jest.mock('../utils/fetchDeleteCard.js');

test('render DeleteCardModal Button', () => {
    render(<DeleteCardModal />);
});

test('open and close DeleteCardModal', async () => {
    render(<DeleteCardModal />);

    act(() => {
        fireEvent.click(screen.getByTestId('testOpenModalButton'));
    });

    await waitFor(() => expect(screen.getByText('Authorization required')).toBeInTheDocument());

    act(() => {
        fireEvent.click(screen.getByTestId('testCloseModalButton'));
    })

    await waitFor(() => expect(screen.queryByText('Authorization required')).toBe(null));
});

test('send empty password in DeleteCardModal', async () => {
    fetchCheckDeletePassword.mockImplementationOnce(() => Promise.resolve("Forbidden"));

    render(<DeleteCardModal />);

    act(() => {
        fireEvent.click(screen.getByTestId('testOpenModalButton'));
    });

    await waitFor(() => expect(screen.getByText('Authorization required')).toBeInTheDocument());

    act(() => {
        fireEvent.click(screen.getByTestId('testSendPassButton'));
    })

    await waitFor(() => expect(screen.getByText('Wrong password')).toBeInTheDocument());
});

test('send wrong password in DeleteCardModal', async () => {
    fetchCheckDeletePassword.mockImplementationOnce(() => Promise.resolve("Forbidden"));

    render(<DeleteCardModal />);

    act(() => {
        fireEvent.click(screen.getByTestId('testOpenModalButton'));
    });

    await waitFor(() => expect(screen.getByText('Authorization required')).toBeInTheDocument());

    act(() => {
        fireEvent.change(screen.getByTestId('testPassInput'), { target: { value: "wrongpass" } });
        fireEvent.click(screen.getByTestId('testSendPassButton'));
    });

    await waitFor(() => expect(screen.getByText('Wrong password')).toBeInTheDocument());
});

test('test onSubmit with empty pass for DeleteCardModal', async () => {
    fetchCheckDeletePassword.mockImplementationOnce(() => Promise.resolve("Forbidden"));

    render(<DeleteCardModal />);

    act(() => {
        fireEvent.click(screen.getByTestId('testOpenModalButton'));
    });

    await waitFor(() => expect(screen.getByText('Authorization required')).toBeInTheDocument());

    act(() => {
        fireEvent.submit(screen.getByTestId('testFormDeleteCard'));
    });

    await waitFor(() => expect(screen.getByText('Wrong password')).toBeInTheDocument());
});

test('fail fetchCheckDeletePassword', async () => {
    fetchCheckDeletePassword.mockImplementationOnce(() => Promise.reject("DB_ERR"));
    console.error = jest.fn();

    render(<DeleteCardModal />);

    act(() => {
        fireEvent.click(screen.getByTestId('testOpenModalButton'));
    });

    await waitFor(() => expect(screen.getByText('Authorization required')).toBeInTheDocument());

    act(() => {
        fireEvent.click(screen.getByTestId('testSendPassButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("Error: ", "DB_ERR"));
});

test('fail fetchDeleteCard', async () => {
    fetchCheckDeletePassword.mockImplementationOnce(() => Promise.resolve("OK"));
    fetchDeleteCard.mockImplementationOnce(() => Promise.reject("DB_ERR_INNER"));
    console.error = jest.fn();

    render(<DeleteCardModal />);

    act(() => {
        fireEvent.click(screen.getByTestId('testOpenModalButton'));
    });

    await waitFor(() => expect(screen.getByText('Authorization required')).toBeInTheDocument());

    act(() => {
        fireEvent.click(screen.getByTestId('testSendPassButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("Error: ", "DB_ERR_INNER"));
});

test('fail fetchDeleteCard for missing lang', async () => {
    fetchCheckDeletePassword.mockImplementationOnce(() => Promise.resolve("OK"));
    fetchDeleteCard.mockImplementationOnce(() => Promise.resolve("MISSING_LANG_PASSED"));
    console.error = jest.fn();

    render(<DeleteCardModal />);

    act(() => {
        fireEvent.click(screen.getByTestId('testOpenModalButton'));
    });

    await waitFor(() => expect(screen.getByText('Authorization required')).toBeInTheDocument());

    act(() => {
        fireEvent.click(screen.getByTestId('testSendPassButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("MISSING_LANG_PASSED"));
});

test('successfully delete the card', async () => {
    fetchCheckDeletePassword.mockImplementationOnce(() => Promise.resolve("OK"));
    fetchDeleteCard.mockImplementationOnce(() => Promise.resolve("OK"));

    document.dispatchEvent = jest.fn();
    document.getElementById = jest.fn();

    const mockValidated = { setCustomValidity: jest.fn() };
    const mockForm = { dispatchEvent: jest.fn() };
    document.getElementById.mockImplementationOnce(() => mockValidated).mockImplementationOnce(() => mockForm);

    render(<DeleteCardModal />);

    act(() => {
        fireEvent.click(screen.getByTestId('testOpenModalButton'));
    });

    await waitFor(() => expect(screen.getByText('Authorization required')).toBeInTheDocument());

    act(() => {
        fireEvent.click(screen.getByTestId('testSendPassButton'));
    });

    await waitFor(() => expect(mockForm.dispatchEvent).toHaveBeenCalled());
});
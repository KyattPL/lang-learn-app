import { screen, render, act, waitFor } from '@testing-library/react';
import { fireEvent } from "@testing-library/dom";

import AddCardForm from './AddCardForm.jsx';
import { fetchAddCard } from '../utils/fetchAddCard.js';

jest.mock('../utils/fetchAddCard.js');

test('submit form with missing required inputs for AddCardForm', async () => {

    act(() => {
        render(<AddCardForm langSelected="Norwegian" grammarSelected="Noun" wordSetter={() => { }} showModal={() => { }} />);
    });

    await waitFor(() => expect(screen.getByTestId("testNorwegianNounSubmit")).toBeInTheDocument(), { timeout: 4000 });

    act(() => {
        const submitButton = screen.getByTestId("testNorwegianNounSubmit");
        fireEvent.click(submitButton);
    });

    await waitFor(() => expect(screen.getByTestId("testAddForm")).toHaveClass("was-validated"));
});

test('render AddCardForm for unknown language', async () => {

    console.error = jest.fn();

    act(() => {
        render(<AddCardForm />);
    });

    expect(screen.getByTestId('testNULL')).toBeInTheDocument();
    await waitFor(() => expect(console.error).toHaveBeenCalledWith(TypeError("Empty parameters were given")));
});

test('resolve fetchAddCard with DB_ERR for AddCardForm', async () => {

    fetchAddCard.mockResolvedValue('DB_ERR');

    console.error = jest.fn();

    act(() => {
        render(<AddCardForm langSelected="Norwegian" grammarSelected="Noun" wordSetter={() => { }} showModal={() => { }} />);
    });

    await waitFor(() => expect(screen.getByTestId("testNorwegianNounSubmit")).toBeInTheDocument());

    act(() => {
        fireEvent.change(screen.getByTestId("testNorwegianNounWordInp"), { target: { value: "hund" } });
        fireEvent.change(screen.getByTestId("testNorwegianNounPronInp"), { target: { value: "hun" } });
        fireEvent.change(screen.getByTestId("testNorwegianNounMeanInp"), { target: { value: "pies" } });
        fireEvent.click(screen.getByTestId("testNorwegianNounSubmit"));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("DB_ERR"));
});

test('resolve fetchAddCard with Internal Server Error for AddCardForm', async () => {

    fetchAddCard.mockResolvedValue('Internal Server Error');

    console.error = jest.fn();

    act(() => {
        render(<AddCardForm langSelected="Norwegian" grammarSelected="Noun" wordSetter={() => { }} showModal={() => { }} />);
    });

    await waitFor(() => expect(screen.getByTestId("testNorwegianNounSubmit")).toBeInTheDocument());

    act(() => {
        fireEvent.change(screen.getByTestId("testNorwegianNounWordInp"), { target: { value: "hund" } });
        fireEvent.change(screen.getByTestId("testNorwegianNounPronInp"), { target: { value: "hun" } });
        fireEvent.change(screen.getByTestId("testNorwegianNounMeanInp"), { target: { value: "pies" } });
        fireEvent.click(screen.getByTestId("testNorwegianNounSubmit"));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("There was a problem with saving your card to the database"));
});

test('resolve fetchAddCard with Proxy error for AddCardForm', async () => {

    fetchAddCard.mockResolvedValue('Proxy error:');

    console.error = jest.fn();

    act(() => {
        render(<AddCardForm langSelected="Norwegian" grammarSelected="Noun" wordSetter={() => { }} showModal={() => { }} />);
    });

    await waitFor(() => expect(screen.getByTestId("testNorwegianNounSubmit")).toBeInTheDocument());

    act(() => {
        fireEvent.change(screen.getByTestId("testNorwegianNounWordInp"), { target: { value: "hund" } });
        fireEvent.change(screen.getByTestId("testNorwegianNounPronInp"), { target: { value: "hun" } });
        fireEvent.change(screen.getByTestId("testNorwegianNounMeanInp"), { target: { value: "pies" } });
        fireEvent.click(screen.getByTestId("testNorwegianNounSubmit"));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("Proxy error:"));
});

test('fail fetchAddCard with 404 status for AddCardForm', async () => {

    fetchAddCard.mockRejectedValue('Not Found');

    console.error = jest.fn();

    act(() => {
        render(<AddCardForm langSelected="Norwegian" grammarSelected="Noun" wordSetter={() => { }} showModal={() => { }} />);
    });

    await waitFor(() => expect(screen.getByTestId("testNorwegianNounSubmit")).toBeInTheDocument());

    act(() => {
        fireEvent.change(screen.getByTestId("testNorwegianNounWordInp"), { target: { value: "hund" } });
        fireEvent.change(screen.getByTestId("testNorwegianNounPronInp"), { target: { value: "hun" } });
        fireEvent.change(screen.getByTestId("testNorwegianNounMeanInp"), { target: { value: "pies" } });
        fireEvent.click(screen.getByTestId("testNorwegianNounSubmit"));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("Error: ", "Not Found"));
});
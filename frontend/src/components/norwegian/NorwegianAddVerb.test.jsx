import NorwegianAddVerb from "./NorwegianAddVerb.jsx";
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import { fetchAddCard } from "../../utils/fetchAddCard.js";

jest.mock("../../utils/fetchAddCard.js");

test('validate form for missing required inputs for NorwegianAddVerb', async () => {
    render(<NorwegianAddVerb wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.click(screen.getByTestId('testNorAddVerbButton'));
    });

    await waitFor(() => expect(screen.getByTestId('testNorwegianAddVerbForm')).toHaveClass('was-validated'));
});

test('fail fetchAddCard with DB_ERR for NorwegianAddVerb', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.reject("DB_ERR"));
    console.error = jest.fn();

    render(<NorwegianAddVerb wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddVerbWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddVerbButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("Error: ", "DB_ERR"));
});

test('resolve fetchAddCard with MISSING_WORD_PASSED for NorwegianAddVerb', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("MISSING_WORD_PASSED"));
    console.error = jest.fn();

    render(<NorwegianAddVerb wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddVerbWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddVerbButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("MISSING_WORD_PASSED"));
});

test('resolve fetchAddCard with Internal Server Error for NorwegianAddVerb', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("Internal Server Error"));
    console.error = jest.fn();

    render(<NorwegianAddVerb wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddVerbWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddVerbButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("There was a problem with saving your card to the database"));
});

test('resolve fetchAddCard with Proxy error for NorwegianAddVerb', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("Proxy error:"));
    console.error = jest.fn();

    render(<NorwegianAddVerb wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddVerbWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddVerbButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("Proxy error:"));
});

test('successfully add adjective for NorwegianAddVerb', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("OK"));
    console.error = jest.fn();
    const showModal = jest.fn();

    render(<NorwegianAddVerb wordSetter={(obj) => { }} showModal={showModal} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddVerbWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddVerbMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddVerbButton'));
    });

    await waitFor(() => expect(showModal).toHaveBeenCalled());
});
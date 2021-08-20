import NorwegianAddAdjective from "./NorwegianAddAdjective.jsx";
import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import { fetchAddCard } from "../../utils/fetchAddCard.js";

jest.mock("../../utils/fetchAddCard.js");

test('validate form for missing required inputs for NorwegianAddAdjective', async () => {
    render(<NorwegianAddAdjective wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.click(screen.getByTestId('testNorAddAdjButton'));
    });

    await waitFor(() => expect(screen.getByTestId('testNorwegianAddAdjForm')).toHaveClass('was-validated'));
});

test('fail fetchAddCard with DB_ERR for NorwegianAddAdjective', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.reject("DB_ERR"));
    console.error = jest.fn();

    render(<NorwegianAddAdjective wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddAdjWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddAdjButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("Error: ", "DB_ERR"));
});

test('resolve fetchAddCard with MISSING_WORD_PASSED for NorwegianAddAdjective', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("MISSING_WORD_PASSED"));
    console.error = jest.fn();

    render(<NorwegianAddAdjective wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddAdjWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddAdjButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("MISSING_WORD_PASSED"));
});

test('resolve fetchAddCard with Internal Server Error for NorwegianAddAdjective', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("Internal Server Error"));
    console.error = jest.fn();

    render(<NorwegianAddAdjective wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddAdjWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddAdjButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("There was a problem with saving your card to the database"));
});

test('resolve fetchAddCard with Proxy error for NorwegianAddAdjective', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("Proxy error:"));
    console.error = jest.fn();

    render(<NorwegianAddAdjective wordSetter={(obj) => { }} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddAdjWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddAdjButton'));
    });

    await waitFor(() => expect(console.error).toHaveBeenCalledWith("Proxy error:"));
});

test('successfully add adjective for NorwegianAddAdjective', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("OK"));
    console.error = jest.fn();
    const showModal = jest.fn();

    render(<NorwegianAddAdjective wordSetter={(obj) => { }} showModal={showModal} />);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddAdjWord'), { target: { value: "ikke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjPron'), { target: { value: "yke" } });
        fireEvent.change(screen.getByTestId('testNorAddAdjMean'), { target: { value: "nie" } });
        fireEvent.click(screen.getByTestId('testNorAddAdjButton'));
    });

    await waitFor(() => expect(showModal).toHaveBeenCalled());
});
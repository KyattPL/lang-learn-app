import NorwegianAddNoun from "./NorwegianAddNoun";
import { act, render, waitFor } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/dom';
import { fetchAddCard } from "../../utils/fetchAddCard.js";
import { dashOnEmptyInput } from "../../utils/dashOnEmptyInput.js";

jest.mock("../../utils/fetchAddCard.js");
jest.mock("../../utils/dashOnEmptyInput.js");

test('check countable checkbox in NorwegianAddNoun', () => {
    render(<NorwegianAddNoun />);

    expect(screen.getByTestId('testCountCheckbox')).not.toBeChecked();

    act(() => {
        fireEvent.click(screen.getByTestId('testCountCheckbox'));
    });

    expect(screen.getByTestId('testCountCheckbox')).toBeChecked();
});

test('validate that required inputs were filled in for NorwegianAddNoun', () => {
    render(<NorwegianAddNoun />);
    act(() => {
        fireEvent.click(screen.getByTestId('testNorAddNounSubmit'));
    });

    expect(screen.getByTestId('testNorAddNounForm')).toHaveClass('was-validated');
});

test('resolve fetchAddCard with DB_ERR for NorwegianAddNoun', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("DB_ERR"));
    console.error = jest.fn();

    render(<NorwegianAddNoun wordSetter={(obj) => {}}/>);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddNounWordInp'), { target: { value: "hund" } });
        fireEvent.change(screen.getByTestId('testNorAddNounPronInp'), { target: { value: "'hun" } });
        fireEvent.change(screen.getByTestId('testNorAddNounMeanInp'), { target: { value: "pies" } });
        fireEvent.click(screen.getByTestId('testNorAddNounSubmit'));
        waitFor(() => expect(console.error).toHaveBeenCalledWith("DB_ERR"));
    });
});

test('resolve fetchAddCard with Internal Server Error for NorwegianAddNoun', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("Internal Server Error"));
    dashOnEmptyInput.mockImplementation(() => '-');
    console.error = jest.fn();

    render(<NorwegianAddNoun wordSetter={(obj) => {}}/>);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddNounWordInp'), { target: { value: "hund" } });
        fireEvent.change(screen.getByTestId('testNorAddNounPronInp'), { target: { value: "'hun" } });
        fireEvent.change(screen.getByTestId('testNorAddNounMeanInp'), { target: { value: "pies" } });
        fireEvent.click(screen.getByTestId('testNorAddNounSubmit'));
        waitFor(() => expect(console.error).toHaveBeenCalledWith("There was a problem with saving your card to the database"));
    });
});

test('resolve fetchAddCard with Proxy Error for NorwegianAddNoun', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.resolve("Proxy error:"));
    dashOnEmptyInput.mockImplementation(() => '-');
    console.error = jest.fn();

    render(<NorwegianAddNoun wordSetter={(obj) => {}}/>);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddNounWordInp'), { target: { value: "hund" } });
        fireEvent.change(screen.getByTestId('testNorAddNounPronInp'), { target: { value: "'hun" } });
        fireEvent.change(screen.getByTestId('testNorAddNounMeanInp'), { target: { value: "pies" } });
        fireEvent.click(screen.getByTestId('testNorAddNounSubmit'));
        waitFor(() => expect(console.error).toHaveBeenCalledWith("Proxy error:"));
    });
});

test('fail fetchAddCard for NorwegianAddNoun', async () => {
    fetchAddCard.mockImplementationOnce(() => Promise.reject("404"));
    dashOnEmptyInput.mockImplementation(() => '-');
    console.error = jest.fn();

    render(<NorwegianAddNoun wordSetter={(obj) => {}}/>);

    act(() => {
        fireEvent.change(screen.getByTestId('testNorAddNounWordInp'), { target: { value: "hund" } });
        fireEvent.change(screen.getByTestId('testNorAddNounPronInp'), { target: { value: "'hun" } });
        fireEvent.change(screen.getByTestId('testNorAddNounMeanInp'), { target: { value: "pies" } });
        fireEvent.click(screen.getByTestId('testNorAddNounSubmit'));
        waitFor(() => expect(console.error).toHaveBeenCalledWith("Error: ", "404"));
    });
});
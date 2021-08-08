import SearchCard from './SearchCard.jsx';
import { render, waitFor } from '@testing-library/react';
import { fireEvent, screen } from "@testing-library/dom";
import { fetchGetCard } from "../utils/fetchGetCard.js";
import mockConsole from "jest-mock-console";

jest.mock("../utils/fetchGetCard.js");

test("render SearchCard when card hasn't been found", () => {
    render(<SearchCard />);
});

test("render SearchCard and test card finding for valid form", async () => {

    fetchGetCard.mockResolvedValue(`{
            "word": "hund",
            "translation": [
                {
                    "pronounciation": "ˈhʉn",
                    "type": "noun",
                    "meaning": "Pies - normalny tak o zwierzak",
                    "grammarNoun": {
                        "countable": "true",
                        "gender": "masculine",
                        "singularIndefinite": "en hund",
                        "singularDefinite": "hunden",
                        "pluralIndefinite": "hunder",
                        "pluralDefinite": "hundene",
                        "_id": "420"
                    }
                }
            ]
        }`);

    render(<SearchCard />);
    const testWordInput = screen.getByTestId("testWordInput");
    testWordInput.value = "hund";
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    fireEvent.click(testButtonSearch);

    expect(fetchGetCard).toHaveBeenCalled();

    await waitFor(() => expect(screen.getByText("hundene")).toBeInTheDocument());

});

test('render SearchCard and test card finding for missing word input ', async () => {
    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    fireEvent.click(testButtonSearch);

    await waitFor(() => expect(screen.getByText("Empty box!")).toBeInTheDocument());
});

test('render SearchCard and test card finding for nonexistent word ', async () => {

    fetchGetCard.mockResolvedValue("");

    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    testWordInput.value = "zzzzz";

    fireEvent.click(testButtonSearch);

    await waitFor(() => expect(screen.getByText("Not in dictionary")).toBeInTheDocument());

    const testCloseModal = screen.getByTestId("testCloseModal");
    fireEvent.click(testCloseModal);

    await waitFor(() => expect(screen.queryByText("Not in dictionary")).toBe(null));
});


// TODO: EXPECT SOMETHING USEFUL FROM THESE 3 FUNCTIONS
test('render SearchCard and test DB_ERR from fetch call ', async () => {
    fetchGetCard.mockResolvedValue("DB_ERR");
    mockConsole();

    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    testWordInput.value = "zzzzz";

    fireEvent.click(testButtonSearch);
});

test('render SearchCard and test MISSING_WORD_PASSED from fetch call ', async () => {
    fetchGetCard.mockResolvedValue("MISSING_WORD_PASSED");
    mockConsole();

    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    testWordInput.value = "zzzzz";

    fireEvent.click(testButtonSearch);
});

test('render SearchCard and test rejected promise from fetch call ', async () => {
    fetchGetCard.mockRejectedValue("fetchGetCard API call return rejected promise");
    mockConsole();

    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    testWordInput.value = "zzzzz";

    fireEvent.click(testButtonSearch);
});
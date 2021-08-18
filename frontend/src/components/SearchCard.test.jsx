import SearchCard from './SearchCard.jsx';
import { render, waitFor, act } from '@testing-library/react';
import { fireEvent, screen } from "@testing-library/dom";
import { fetchGetCard } from "../utils/fetchGetCard.js";

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

test('render SearchCard and test DB_ERR from fetch call ', async () => {
    fetchGetCard.mockResolvedValue("DB_ERR");
    console.error = jest.fn();

    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    testWordInput.value = "zzzzz";

    fireEvent.click(testButtonSearch);

    await waitFor(() => expect(console.error).toHaveBeenCalledWith('DB_ERR'));
});

test('render SearchCard and test MISSING_WORD_PASSED from fetch call ', async () => {
    fetchGetCard.mockResolvedValue("MISSING_WORD_PASSED");
    console.error = jest.fn();

    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    testWordInput.value = "zzzzz";

    fireEvent.click(testButtonSearch);
    await waitFor(() => expect(console.error).toHaveBeenCalledWith('MISSING_WORD_PASSED'));
});

test('render SearchCard and test rejected promise from fetch call ', async () => {
    fetchGetCard.mockRejectedValue("fetchGetCard API call return rejected promise");
    console.error = jest.fn();

    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    testWordInput.value = "zzzzz";

    fireEvent.click(testButtonSearch);
    await waitFor(() => expect(console.error).toHaveBeenCalledWith('Error:', 'fetchGetCard API call return rejected promise'));
});

test('render SearchCard and test proxy error from fetch call', async () => {
    fetchGetCard.mockResolvedValue("Proxy error:");
    console.error = jest.fn();

    render(<SearchCard />);
    const testButtonSearch = screen.getByTestId("testButtonSearch");
    const testWordInput = screen.getByTestId("testWordInput");

    testWordInput.value = "hund";

    fireEvent.click(testButtonSearch);
    await waitFor(() => expect(console.error).toHaveBeenCalledWith('Proxy error:'));
});

test('resize SearchCard', () => {
    render(<SearchCard />);
    global.innerWidth = 420;
    act(() => {
        fireEvent.resize(window);
    });
    const column = screen.getByTestId('testFormCol');
    expect(column).toHaveClass('col-12');
});
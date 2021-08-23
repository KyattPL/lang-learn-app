import { render, screen } from "@testing-library/react";
import mockConsole from 'jest-mock-console';
import Flashcard from "./Flashcard.jsx";

test("throw error on null Flashcard component",  () => {
    const restoreConsole = mockConsole();
    expect(() => render(<Flashcard />)).toThrowError();
    restoreConsole();
});

test("returns Norwegian Card", () => {
    const testObj = {
        "word": "hund",
        "pronounciation": "ˈhʉn",
        "translation": [
            {
                "type": "noun",
                "meaning": "Pies - normalny tak o zwierzak",
                "grammarNoun": {
                    "countable": "true",
                    "gender": "masculine",
                    "singularIndefinite": "en hund",
                    "singularDefinite": "hunden",
                    "pluralIndefinite": "hunder",
                    "pluralDefinite": "hundene"
                }
            }
        ]
    };
    render(<Flashcard cardLang="Norwegian" cardObj={testObj} numOfTranslation={0} />);
    expect(screen.getByText("en hund")).toBeInTheDocument();
});
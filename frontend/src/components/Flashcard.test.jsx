import { act, render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import mockConsole from 'jest-mock-console';
import Flashcard from "./Flashcard.jsx";

afterEach(() => {
    global.innerWidth = 1024;
});

test("throw error on null Flashcard component", () => {
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

test("render Flashcard on small screen size", () => {

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

    act(() => {
        global.innerWidth = 500;
        fireEvent.resize(window);
    });

    render(<Flashcard cardLang="Norwegian" cardObj={testObj} numOfTranslation={0} />);

    expect(screen.getByText("Singular Indefinite")).toBeInTheDocument();

    act(() => {
        global.innerWidth = 1024;
        fireEvent.resize(window);
    });

    expect(screen.queryByText("Singular Indefinite")).toBe(null);
});

test("render Flashcard with # and * used in config", () => {
    const testObj = {
        "word": "ikke",
        "pronounciation": "ike",
        "translation": [
            {
                "type": "adjective",
                "meaning": "nie",
                "grammarAdjective": {
                    "masculineSinIndef": "test1",
                    "masculineSinDef": "test",
                    "masculinePlIndef": "test",
                    "masculinePlDef": "test",
                    "feminineSinIndef": "test",
                    "feminineSinDef": "test",
                    "femininePlIndef": "test",
                    "femininePlDef": "test",
                    "neuterSinIndef": "test423",
                    "neuterSinDef": "test",
                    "neuterPlIndef": "test",
                    "neuterPlDef": "test",
                    "comparative": "test",
                    "indefSuperlative": "test",
                    "defSuperlative": "test17"
                }
            }
        ]
    };
    render(<Flashcard cardLang="Norwegian" cardObj={testObj} numOfTranslation={0} />);
    expect(screen.getByText("test423")).toBeInTheDocument();
});
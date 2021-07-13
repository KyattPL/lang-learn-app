import { render } from "@testing-library/react";
import { mockComponent } from "react-dom/test-utils";
import Flashcard from "./Flashcard.jsx";
import NorwegianCard from "./norwegian/NorwegianCard.jsx";
import DutchCard from "./dutch/DutchCard.jsx";

test("returns null Flashcard component", () => {
    render(<Flashcard />);
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
    expect(Flashcard({cardLang: "Norwegian", cardObj: testObj}).type).toBe(NorwegianCard);
});

test("returns Dutch card", () => {
    const testObj = {

    };
    expect(Flashcard({cardLang: "Dutch", cardObj: testObj}).type).toBe(DutchCard);
});
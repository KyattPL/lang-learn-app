import { render } from "@testing-library/react";
import mockConsole from "jest-mock-console";
import { fireEvent, screen } from "@testing-library/dom";

import NorwegianCard from "./NorwegianCard.jsx";

afterEach(() => {
    global.innerWidth = 1024;
});

test('render NorwegianCard for a noun', () => {
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
                    "pluralDefinite": "hundene",
                    "_id": 420
                }
            }
        ]
    };

    render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
});

test('render NorwegianCard for an adjective', () => {
    const testObj = {
        "word": "ikke",
        "pronounciation": "ike",
        "translation": [
            {
                "type": "adjective",
                "meaning": "Test stuff",
                "grammarAdj": {
                    "masculineSinIndef": "ikke",
                    "masculineSinDef": "ikka",
                    "masculinePlIndef": "ikke",
                    "masculinePlDef": "ikka",
                    "feminineSinIndef": "ikke",
                    "feminineSinDef": "ikka",
                    "femininePlIndef": "ikke",
                    "femininePlDef": "ikka",
                    "neuterSinIndef": "eikke",
                    "neuterSinDef": "eikka",
                    "neuterPlIndef": "ikket",
                    "neuterPlDef": "ikkete",
                    "comparative": "ikketa",
                    "indefSuperlative": "ikketan",
                    "defSuperlative": "ikketane",
                    "_id": 420
                }
            }
        ]
    };
    render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
});

test('render NorwegianCard for a verb', () => {
    const testObj = {
        "word": "faef",
        "pronounciation": "fefae",
        "translation": [
            {
                "type": "verb",
                "meaning": "Test stuff",
                "grammarVerb": {
                    "infinitive": "faef",
                    "present": "aefaf",
                    "past": "efffe",
                    "future": "eea",
                    "conditional": "fafa",
                    "imperative": "fafaef",
                    "presentPerfect": "va faaan",
                    "pastPerfect": "fafeee",
                    "futurePerfect": "fafaa",
                    "conditionalPerfect": "fff",
                    "_id": 420
                }
            }
        ]
    };
    render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
});

test('render NorwegianCard for a noun on a small screen', () => {

    global.innerWidth = 500;

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
                    "pluralDefinite": "hundene",
                    "_id": 420
                }
            }
        ]
    };

    render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
});

test('render NorwegianCard for an adjective on a small screen', () => {

    global.innerWidth = 500;

    const testObj = {
        "word": "ikke",
        "pronounciation": "ike",
        "translation": [
            {
                "type": "adjective",
                "meaning": "Test stuff",
                "grammarAdj": {
                    "masculineSinIndef": "ikke",
                    "masculineSinDef": "ikka",
                    "masculinePlIndef": "ikke",
                    "masculinePlDef": "ikka",
                    "feminineSinIndef": "ikke",
                    "feminineSinDef": "ikka",
                    "femininePlIndef": "ikke",
                    "femininePlDef": "ikka",
                    "neuterSinIndef": "eikke",
                    "neuterSinDef": "eikka",
                    "neuterPlIndef": "ikket",
                    "neuterPlDef": "ikkete",
                    "comparative": "ikketa",
                    "indefSuperlative": "ikketan",
                    "defSuperlative": "ikketane",
                    "_id": 420
                }
            }
        ]
    };
    render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
});

test('render NorwegianCard for a verb on a small screen', () => {

    global.innerWidth = 500;

    const testObj = {
        "word": "faef",
        "pronounciation": "fefae",
        "translation": [
            {
                "type": "verb",
                "meaning": "Test stuff",
                "grammarVerb": {
                    "infinitive": "faef",
                    "present": "aefaf",
                    "past": "efffe",
                    "future": "eea",
                    "conditional": "fafa",
                    "imperative": "fafaef",
                    "presentPerfect": "va faaan",
                    "pastPerfect": "fafeee",
                    "futurePerfect": "fafaa",
                    "conditionalPerfect": "fff",
                    "_id": 420
                }
            }
        ]
    };
    render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
});

test('fail NorwegianCard render on wrong card obj structure', () => {
    const testObj = {
        "word": "faef",
        "translation": [
            {
                "type": "verb",
                "meaning": "Test stuff",
                "grammarYikes": {
                    "infinitive": "faef",
                    "conditionalPerfect": "fff"
                }
            }
        ]
    };
    mockConsole();
    expect(() => {
        render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
    }).toThrowError();
});

test('fail NorwegianCard render on wrong card obj translation structure', () => {
    const testObj = {
        "word": "faef",
        "pronounciation": "fefae",
        "translation": [
            {
                "type": "verb",
                "meaning": "Test stuff",
                "grammarYikes": {
                    "infinitive": "faef",
                    "conditionalPerfect": "fff"
                }
            }
        ]
    };
    mockConsole();
    expect(() => {
        render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
    }).toThrowError();
});

test('fail NorwegianCard render on wrong card obj translation structure on a small screen', () => {
    global.innerWidth = 500;
    const testObj = {
        "word": "faef",
        "pronounciation": "fefae",
        "translation": [
            {
                "type": "verb",
                "meaning": "Test stuff",
                "grammarYikes": {
                    "infinitive": "faef",
                    "conditionalPerfect": "fff"
                }
            }
        ]
    };
    mockConsole();
    expect(() => {
        render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />)
    }).toThrowError();
});

test('resize NorwegianCard', () => {
    const testObj = {
        "word": "faef",
        "pronounciation": "fefae",
        "translation": [
            {
                "type": "verb",
                "meaning": "Test stuff",
                "grammarVerb": {
                    "infinitive": "faef",
                    "present": "aefaf",
                    "past": "efffe",
                    "future": "eea",
                    "conditional": "fafa",
                    "imperative": "fafaef",
                    "presentPerfect": "va faaan",
                    "pastPerfect": "fafeee",
                    "futurePerfect": "fafaa",
                    "conditionalPerfect": "fff",
                    "_id": 420
                }
            }
        ]
    };
    render(<NorwegianCard cardObj={testObj} numOfTranslation={0} />);
    global.innerWidth = 500;
    fireEvent.resize(window);
    const element = screen.getByTestId("testCard");
    expect(element).toEqual(expect.anything());
});
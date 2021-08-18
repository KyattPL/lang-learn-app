import { render } from '@testing-library/react';
import NounGrammarNorwegian from './NounGrammarNorwegian.jsx';
import mockConsole from "jest-mock-console";

test('render NounGrammarNorwegian', () => {
    const testObj = {
        "countable": "true",
        "gender": "masculine",
        "singularIndefinite": "en hund",
        "singularDefinite": "hunden",
        "pluralIndefinite": "hunder",
        "pluralDefinite": "hundene",
        "_id": "420"
    };
    render(<NounGrammarNorwegian grammarObj={testObj} />);
});

test('fail NounGrammarNorwegian render on null props ', () => {
    const restoreConsole = mockConsole();
    expect(() => {
        render(<NounGrammarNorwegian />)
    }).toThrowError();
    restoreConsole();
});

test('fail NounGrammarNorwegian render on wrong prop structure', () => {
    const testObj = {

    };
    const restoreConsole = mockConsole();
    expect(() => {
        render(<NounGrammarNorwegian grammarObj={testObj} />)
    }).toThrowError();
    restoreConsole();
});
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
    mockConsole();
    expect(() => {
        render(<NounGrammarNorwegian />)
    }).toThrowError();
});

test('fail NounGrammarNorwegian render on wrong prop structure', () => {
    const testObj = {

    };
    mockConsole();
    expect(() => {
        render(<NounGrammarNorwegian grammarObj={testObj} />)
    }).toThrowError();
});
import { render } from "@testing-library/react";
import mockConsole from "jest-mock-console";
import VerbGrammarNorwegian from "./VerbGrammarNorwegian.jsx";

test('render VerbGrammarNorwegian', () => {
    const testObj = {
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
        "_id": "420"
    };
    render(<VerbGrammarNorwegian grammarObj={testObj} />);
});

test('fail VerbGrammarNorwegian render on null props', () => {
    mockConsole();
    expect(() => {
        render(<VerbGrammarNorwegian />)
    }).toThrowError();
});

test('fail VerbGrammarNorwegian render on wrong prop structure', () => {
    const testObj = {
        "future": "eea",
    };
    mockConsole();
    expect(() => {
        render(<VerbGrammarNorwegian grammarObj={testObj} />)
    }).toThrowError();
});
import { render } from "@testing-library/react";
import SmNounGrammarNorwegian from "./SmNounGrammarNorwegian";
import mockConsole from "jest-mock-console";

test('fail SmNounGrammarNorwegian render on wrong grammarObj structure ', () => {
    const testObj = {
        "singularDefinite": "hunden",
    };
    mockConsole();
    expect(() => render(<SmNounGrammarNorwegian grammarObj={testObj} />)).toThrowError();
});
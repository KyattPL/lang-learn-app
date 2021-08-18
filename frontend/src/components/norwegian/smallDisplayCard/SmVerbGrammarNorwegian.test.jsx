import { render } from "@testing-library/react";
import SmVerbGrammarNorwegian from "./SmVerbGrammarNorwegian";
import mockConsole from "jest-mock-console";

test('fail SmVerbGrammarNorwegian render on wrong grammarObj structure ', () => {
    const testObj = {
        "presentPerfect": "va faaan",
    };
    const restoreConsole = mockConsole();
    expect(() => render(<SmVerbGrammarNorwegian grammarObj={testObj} />)).toThrowError();
    restoreConsole();
});
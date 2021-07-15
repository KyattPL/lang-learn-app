import { render } from "@testing-library/react";
import mockConsole from "jest-mock-console";
import SmAdjGrammarNorwegian from "./SmAdjGrammarNorwegian";

test('fail SmAdjGrammarNorwegian render on wrong grammarObj structure ', () => {
    const testObj = {
        "feminineSinDef": "ikka"
    };
    mockConsole();
    expect(() => render(<SmAdjGrammarNorwegian grammarObj={testObj} />)).toThrowError();
});
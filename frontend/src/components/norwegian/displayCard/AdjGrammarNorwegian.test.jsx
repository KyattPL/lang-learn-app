import { render } from "@testing-library/react";
import mockConsole from "jest-mock-console";
import AdjGrammarNorwegian from "./AdjGrammarNorwegian";


test('render AdjGrammarNorwegian ', () => {
    const testObj = {
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
        "_id": "420"
    };
    render(<AdjGrammarNorwegian grammarObj={testObj} />);
});


test('fail AdjGrammarNorwegian on null props', () => {
    const restoreConsole = mockConsole();
    expect(() => {
        render(<AdjGrammarNorwegian />)
    }).toThrowError();
    restoreConsole();
});

test('fail AdjGrammarNorwegian on wrong prop structure', () => {
    const restoreConsole = mockConsole();
    const testObj = {
        "feminineSinDef": "ikka"
    };
    expect(() => {
        render(<AdjGrammarNorwegian grammarObj={testObj} />)
    }).toThrowError();
    restoreConsole();
});
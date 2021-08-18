import { fetchAddCard } from './fetchAddCard';

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            test: "test"
        })
    })
});

test('test fetchAddCard when both parameters are null', () => {
    fetch.mockImplementationOnce(() => Promise.reject("MISSING_LANG_PASSED"));
    fetchAddCard(null, null).catch((reason) => {
        expect(reason).toBe("MISSING_LANG_PASSED");
    });
});

test('test fetchAddCard when lang is null', () => {
    fetch.mockImplementationOnce(() => Promise.reject("MISSING_LANG_PASSED"));
    const cardObj = {
        "word": "hund",
        "translation": [
            {
                "type": "noun",
                "pronounciation": "hun",
                "meaning": "pies",
                "grammarNoun": {
                    "countable": "true",
                    "gender": "masculine",
                    "singularIndefinite": "hundere",
                    "singularDefinite": "en hundene",
                    "pluralIndefinite": "hunder",
                    "pluralDefinite": "hunderen"
                }
            }
        ]
    };
    fetchAddCard(null, cardObj).catch((reason) => {
        expect(reason).toBe("MISSING_LANG_PASSED");
    });
})

test('test fetchAddCard when cardObj is null', () => {
    fetch.mockImplementationOnce(() => Promise.reject("MISSING_WORD_PASSED"));
    fetchAddCard("Norwegian", null).catch((reason) => {
        expect(reason).toBe("MISSING_WORD_PASSED");
    });
});

test('test fetchAddCard when correct parameters were given', () => {
    fetch.mockImplementationOnce(() => Promise.resolve(new Response(new Blob(["OK"], { type: "text" }))));
    const cardObj = {
        "word": "hund",
        "translation": [
            {
                "type": "noun",
                "pronounciation": "hun",
                "meaning": "pies",
                "grammarNoun": {
                    "countable": "true",
                    "gender": "masculine",
                    "singularIndefinite": "hundere",
                    "singularDefinite": "en hundene",
                    "pluralIndefinite": "hunder",
                    "pluralDefinite": "hunderen"
                }
            }
        ]
    };
    fetchAddCard("Norwegian", cardObj).then((res) => {
        expect(res).toBe("OK");
    });
});
import { fetchGetCard } from "./fetchGetCard.js";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            test: "test"
        })
    })
});

test('test fetchGetCard when 2 null parameters were passed ', async () => {
    fetch.mockImplementationOnce(() => Promise.reject("MISSING_LANG_PASSED"));
    fetchGetCard(null, null).catch((reason) => {
        expect(reason).toBe("MISSING_LANG_PASSED")
    });
});

test('test fetchGetCard when null lang was passed ', async () => {
    fetch.mockImplementationOnce(() => Promise.reject("MISSING_LANG_PASSED"));
    fetchGetCard(null, "hund").catch((reason) => {
        expect(reason).toBe("MISSING_LANG_PASSED")
    });
});

test('test fetchGetCard when null word was passed ', async () => {
    fetch.mockImplementationOnce(() => Promise.reject("MISSING_WORD_PASSED"));
    fetchGetCard("Norwegian", null).catch((reason) => {
        expect(reason).toBe("MISSING_WORD_PASSED")
    });
});

test('test fetchGetCard when correct params were passed ', async () => {
    const cardObjText = {
        word: "hund",
        pronounciation: "ˈhʉn",
        translation: [
            {
                type: "noun",
                meaning: "Pies - normalny tak o zwierzak",
                grammarNoun: {
                    countable: "true",
                    gender: "masculine",
                    singularIndefinite: "en hund",
                    singularDefinite: "hunden",
                    pluralIndefinite: "hunder",
                    pluralDefinite: "hundene",
                    _id: "420"
                }
            }
        ]
    };

    fetch.mockImplementationOnce(() => Promise.resolve(new Response(new Blob([JSON.stringify(cardObjText)], { type: "application/json" }))));

    fetchGetCard("Norwegian", "hund").then((data) => {
        expect(data).toBe(JSON.stringify(cardObjText))
    });
});
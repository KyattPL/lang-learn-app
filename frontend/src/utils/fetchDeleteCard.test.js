import { fetchDeleteCard } from "./fetchDeleteCard";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            test: "test"
        })
    })
});

test('test fetchDeleteCard when 4 null parameters were passed', () => {
    fetch.mockImplementationOnce(() => Promise.reject("Forbidden"));
    fetchDeleteCard(null, null, null, null).catch((reason) => {
        expect(reason).toBe("Forbidden");
    });
});

test('test fetchDeleteCard when null password was passed', () => {
    fetch.mockImplementationOnce(() => Promise.reject("Forbidden"));
    fetchDeleteCard(null, "Norwegian", 4234, 113).catch((reason) => {
        expect(reason).toBe("Forbidden");
    });
});

test('test fetchDeleteCard when wrong password was given', () => {
    fetch.mockImplementationOnce(() => Promise.reject("Forbidden"));
    fetchDeleteCard("testing", "Norwegian", 4234, 132).catch((reason) => {
        expect(reason).toBe("Forbidden");
    });
});

test('test fetchDeleteCard when correct parameters were given', () => {
    fetch.mockImplementationOnce(() => Promise.resolve(new Response(new Blob(["OK"], { type: "text" }))));
    fetchDeleteCard("correct_password", "Norwegian", 123, 32).then((res) => {
        expect(res).toBe("OK");
    });
});
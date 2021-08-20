import { fetchCheckDeletePassword } from "./fetchCheckDeletePassword";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            test: "test"
        })
    })
});

test('test fetchCheckDeletePassword for null password', () => {
    fetch.mockImplementationOnce(() => Promise.reject("Forbidden"));
    fetchCheckDeletePassword(null).catch((reason) => {
        expect(reason).toBe("Forbidden");
    });
});

test('test fetchCheckDeletePassword for wrong password', () => {
    fetch.mockImplementationOnce(() => Promise.reject("Forbidden"));
    fetchCheckDeletePassword("wrongpass").catch((reason) => {
        expect(reason).toBe("Forbidden");
    });
});

test('test fetchCheckDeletePassword for correct password', () => {
    fetch.mockImplementationOnce(() => Promise.resolve(new Response(new Blob(["OK"], { type: "text" }))));
    fetchCheckDeletePassword("correctpass").then((res) => {
        expect(res).toBe("OK");
    });
});
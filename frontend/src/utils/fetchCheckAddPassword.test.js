import { fetchCheckAddPassword } from './fetchCheckAddPassword';

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve({
            test: "test"
        })
    })
});

test('test fetchCheckAddPassword for null password', () => {
    fetch.mockImplementationOnce(() => Promise.reject("Forbidden"));
    fetchCheckAddPassword(null).catch((reason) => {
        expect(reason).toBe("Forbidden");
    });
});

test('test fetchCheckAddPassword for wrong password', () => {
    fetch.mockImplementationOnce(() => Promise.reject("Forbidden"));
    fetchCheckAddPassword("wrongpass").catch((reason) => {
        expect(reason).toBe("Forbidden");
    });
});

test('test fetchCheckAddPassword for correct password', () => {
    fetch.mockImplementationOnce(() => Promise.resolve(new Response(new Blob(["OK"], { type: "text" }))));
    fetchCheckAddPassword("correctpass").then((res) => {
        expect(res).toBe("OK");
    });
});
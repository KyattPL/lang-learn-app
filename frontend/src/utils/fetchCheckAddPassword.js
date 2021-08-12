export const fetchCheckAddPassword = (pass) => {
    return fetch("/checkAddPassword", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: pass })
    }).then(response => response.text());
};
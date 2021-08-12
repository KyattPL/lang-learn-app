export const fetchCheckDeletePassword = (pass) => {
    return fetch("/checkDeletePassword", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: pass })
    }).then(response => response.text());
};
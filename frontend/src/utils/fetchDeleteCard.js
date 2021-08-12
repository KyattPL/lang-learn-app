export const fetchDeleteCard = (password, lang, id, translationId) => {
    return fetch("/deleteCard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password, lang: lang, id: id, translationId: translationId })
    }).then(response => response.text());
};
export const fetchAddCard = (lang, cardObj) => {
    return fetch("/addCard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lang: lang, cardObj: cardObj })
    }).then(response => response.text());
};
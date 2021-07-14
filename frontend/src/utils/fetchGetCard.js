export const fetchGetCard = (lang, word) => {
    return fetch("/getCard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lang: lang, word: word })
    }).then(response => response.text())
}
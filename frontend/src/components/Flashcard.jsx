import NorwegianCard from "./norwegian/NorwegianCard";

function Flashcard({ cardLang, cardObj }) {

    let result = null;

    switch (cardLang) {
        case "Dutch": result = null; break;
        case "Norwegian": result = <NorwegianCard cardObj={cardObj} />; break;
        default: result = null;
    }

    return (
        result
    );
}

export default Flashcard;
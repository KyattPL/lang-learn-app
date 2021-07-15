import NorwegianCard from "./norwegian/NorwegianCard";
import DutchCard from "./dutch/DutchCard";

function Flashcard({ cardLang, cardObj, numOfTranslation }) {

    let result = null;

    switch (cardLang) {
        case "Dutch": result = <DutchCard cardObj={cardObj} />; break;
        case "Norwegian": result = <NorwegianCard cardObj={cardObj} numOfTranslation={numOfTranslation} />; break;
        default: result = null;
    }

    return (
        result
    );
}

export default Flashcard;
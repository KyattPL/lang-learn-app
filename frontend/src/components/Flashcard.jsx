import NorwegianCard from "./norwegian/NorwegianCard";
import DutchCard from "./dutch/DutchCard";

function Flashcard({ cardLang, cardObj }) {

    let result = null;

    switch (cardLang) {
        case "Dutch": result = <DutchCard cardObj={cardObj} />; break;
        case "Norwegian": result = <NorwegianCard cardObj={cardObj} numOfTranslation={0} />; break;
        default: result = null;
    }

    return (
        result
    );
}

export default Flashcard;
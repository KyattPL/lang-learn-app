import Flashcard from "./Flashcard.jsx";

function TranslationGroup({ cardLang, cardObj }) {
    let numOfTranslations = cardObj.translation.length;
    return (
        <div>
            {Array(numOfTranslations).fill().map((_, i) => <Flashcard key={i} cardLang={cardLang} cardObj={cardObj} numOfTranslation={i} />)}
        </div>
    )
}

export default TranslationGroup;
import NorwegianAddAdjective from './NorwegianAddAdjective.jsx'
import NorwegianAddNoun from './NorwegianAddNoun.jsx'
import NorwegianAddVerb from './NorwegianAddVerb.jsx'

function NorwegianAddAbstract({speech, wordSetter}) {

    let result;

    switch (speech) {
        case "Adjective": result = <NorwegianAddAdjective wordSetter={wordSetter} />; break;
        case "Noun": result = <NorwegianAddNoun wordSetter={wordSetter}/>; break;
        case "Verb": result = <NorwegianAddVerb wordSetter={wordSetter}/>; break;
        default: result = <div>NULL</div>; break;
    }

    return (
        <>
            { result }
        </>
    )
}

export default NorwegianAddAbstract;
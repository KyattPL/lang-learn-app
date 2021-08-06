import NorwegianAddAdjective from './NorwegianAddAdjective.jsx'
import NorwegianAddNoun from './NorwegianAddNoun.jsx'
import NorwegianAddVerb from './NorwegianAddVerb.jsx'

function NorwegianAddAbstract({speech}) {

    let result;

    switch (speech) {
        case "Adjective": result = <NorwegianAddAdjective />; break;
        case "Noun": result = <NorwegianAddNoun />; break;
        case "Verb": result = <NorwegianAddVerb />; break;
        default: result = <div>NULL</div>; break;
    }

    return (
        <>
            { result }
        </>
    )
}

export default NorwegianAddAbstract;
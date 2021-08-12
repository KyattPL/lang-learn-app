import NorwegianAddAdjective from './NorwegianAddAdjective.jsx'
import NorwegianAddNoun from './NorwegianAddNoun.jsx'
import NorwegianAddVerb from './NorwegianAddVerb.jsx'

function NorwegianAddAbstract({speech, wordSetter, showModal}) {

    let result;

    switch (speech) {
        case "Adjective": result = <NorwegianAddAdjective showModal={showModal} wordSetter={wordSetter} />; break;
        case "Noun": result = <NorwegianAddNoun showModal={showModal} wordSetter={wordSetter}/>; break;
        case "Verb": result = <NorwegianAddVerb showModal={showModal} wordSetter={wordSetter}/>; break;
        default: result = <div>NULL</div>; break;
    }

    return (
        <>
            { result }
        </>
    )
}

export default NorwegianAddAbstract;
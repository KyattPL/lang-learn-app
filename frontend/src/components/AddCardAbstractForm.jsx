import { useRef, useState } from 'react';
import NorwegianAddAbstract from './norwegian/NorwegianAddAbstract.jsx';

function getFormStructure(lang, grammar) {
    const file = require(`../langJsons/${lang}.json`);
    const obj = file[`add${grammar}`]['translation'][0][`grammar${grammar}`]
    if (obj) {
        console.log(Object.values(obj));
    }
}

function getGrammarInputNames(lang, grammar) {
    const file = require(`../langJsons/${lang}.json`);
    const obj = file[`add${grammar}`]['translation'][0][`grammar${grammar}`];
    return Object.values(obj);
}

function AddCardAbstractForm({ langSelected, grammarSelected, wordSetter, showModal }) {

    let result;

    getFormStructure(langSelected, grammarSelected);

    const grammarInputNames = 0;
    const grammarInputLen = grammarInputNames.length;

    const [validated, setValidated] = useState(false);
    const [checkedCountable, setCheckedCountable] = useState(false);

    const wordInput = useRef(null);
    const pronInput = useRef(null);
    const meanInput = useRef(null);

    // grammarInputNames, grammarInputLen -> extract names from .json
    // dunno about word/pron/mean/gender Input refs
    // elRefs and useEffect can be copied
    // copy addCard and populate cardObj according to the one from .json (somehow)
    // clearForm can be copied
    // dunno how to render word/pron/mean/countable/gender inputs
        // They differ from the other ones so rendering in a loop would have to 
        // acknowledge these differences somehow :thinking:

    switch (langSelected) {
        case "Dutch": result = <div>Dutch here</div>; break;
        case "Norwegian": result = <NorwegianAddAbstract showModal={showModal} wordSetter={wordSetter} speech={grammarSelected} />; break;
        default: result = <div data-testid="testNULL">NULL</div>; break;
    }

    return (
        <>
            {result}
        </>
    )
}

export default AddCardAbstractForm;
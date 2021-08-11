// import DutchAddAbstract from './dutch/DutchAddAbstract.jxs';
import NorwegianAddAbstract from './norwegian/NorwegianAddAbstract.jsx';

function AddCardAbstractForm({langSelected, grammarSelected, wordSetter}) {

    let result;

    switch(langSelected) {
        case "Dutch": result = <div>Dutch here</div>; break;
        case "Norwegian": result = <NorwegianAddAbstract wordSetter={wordSetter} speech={grammarSelected}/>; break;
        default: result = <div>NULL</div>; break;
    }

    return (
        <>
        { result }
        </>
    )
}

export default AddCardAbstractForm;
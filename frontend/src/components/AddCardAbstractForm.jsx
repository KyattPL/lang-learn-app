// import DutchAddAbstract from './dutch/DutchAddAbstract.jxs';
import NorwegianAddAbstract from './norwegian/NorwegianAddAbstract.jsx';

function AddCardAbstractForm({ langSelected, grammarSelected, wordSetter, showModal }) {

    let result;

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
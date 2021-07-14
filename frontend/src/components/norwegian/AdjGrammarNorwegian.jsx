import Table from 'react-bootstrap/Table';

function checkProperties(grammarObj) {
    const testObj = {
        "masculineSinIndef": "ikke",
        "masculineSinDef": "ikka",
        "masculinePlIndef": "ikke",
        "masculinePlDef": "ikka",
        "feminineSinIndef": "ikke",
        "feminineSinDef": "ikka",
        "femininePlIndef": "ikke",
        "femininePlDef": "ikka",
        "neuterSinIndef": "eikke",
        "neuterSinDef": "eikka",
        "neuterPlIndef": "ikket",
        "neuterPlDef": "ikkete",
        "comparative": "ikketa",
        "indefSuperlative": "ikketan",
        "defSuperlative": "ikketane",
        "_id": "420"
    }
    let origKeys = Object.keys(grammarObj).sort();
    let testKeys = Object.keys(testObj).sort();
    return JSON.stringify(origKeys) === JSON.stringify(testKeys);
}

function AdjGrammarNorwegian({ grammarObj }) {

    if (!checkProperties(grammarObj)) {
        throw new TypeError("Wrong grammar obj structure in AdjGrammarNorwegian");
    }

    return (
        <>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan="2">Singular</th>
                        <th colSpan="2">Plural</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Indefinite</th>
                        <th>Definite</th>
                        <th>Indefinite</th>
                        <th>Definite</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>masc.</strong></td>
                        <td>{grammarObj.masculineSinIndef}</td>
                        <td>{grammarObj.masculineSinDef}</td>
                        <td>{grammarObj.masculinePlIndef}</td>
                        <td>{grammarObj.masculinePlDef}</td>
                    </tr>
                    <tr>
                        <td><strong>fem.</strong></td>
                        <td>{grammarObj.feminineSinIndef}</td>
                        <td>{grammarObj.feminineSinDef}</td>
                        <td>{grammarObj.femininePlIndef}</td>
                        <td>{grammarObj.femininePlDef}</td>
                    </tr>
                    <tr>
                        <td><strong>neut.</strong></td>
                        <td>{grammarObj.neuterSinIndef}</td>
                        <td>{grammarObj.neuterSinDef}</td>
                        <td>{grammarObj.neuterPlIndef}</td>
                        <td>{grammarObj.neuterPlDef}</td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Comparative</th>
                        <th>Indefinite superlative</th>
                        <th>Definite superlative</th>
                    </tr>
                    <tr>
                        <td>{grammarObj.comparative}</td>
                        <td>{grammarObj.indefSuperlative}</td>
                        <td>{grammarObj.defSuperlative}</td>
                    </tr>
                </thead>
            </Table>
        </>
    )
}

export default AdjGrammarNorwegian;
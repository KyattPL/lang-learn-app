import Table from 'react-bootstrap/Table';

function checkProperties(grammarObj) {
    const testObj = {
        "countable": "true",
        "gender": "masculine",
        "singularIndefinite": "en hund",
        "singularDefinite": "hunden",
        "pluralIndefinite": "hunder",
        "pluralDefinite": "hundene",
        "_id": "420"
    }
    let origKeys = Object.keys(grammarObj).sort();
    let testKeys = Object.keys(testObj).sort();
    return JSON.stringify(origKeys) === JSON.stringify(testKeys);
}

function NounGrammarNorwegian({ grammarObj }) {

    if (!checkProperties(grammarObj)) {
        throw new TypeError("Wrong grammar obj structure in NounGrammarNorwegian");
    }

    return (
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Indefinite</strong></td>
                    <td>{grammarObj.singularIndefinite}</td>
                    <td>{grammarObj.singularDefinite}</td>
                </tr>
                <tr>
                    <td><strong>Definite</strong></td>
                    <td>{grammarObj.pluralIndefinite}</td>
                    <td>{grammarObj.pluralDefinite}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default NounGrammarNorwegian;
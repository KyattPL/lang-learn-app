import Table from 'react-bootstrap/Table';
import { checkNounProperties } from '../utilsNorwegian.js';
import "../../../styles/CardTable.css";

function NounGrammarNorwegian({ grammarObj }) {

    if (!checkNounProperties(grammarObj)) {
        throw new TypeError("Wrong grammar obj structure in NounGrammarNorwegian");
    }

    return (
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th className="cardTableHeader">Singular</th>
                    <th className="cardTableHeader">Plural</th>
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
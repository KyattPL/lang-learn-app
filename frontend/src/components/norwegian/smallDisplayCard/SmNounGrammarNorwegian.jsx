import Table from 'react-bootstrap/Table';
import { checkNounProperties } from '../utilsNorwegian.js';

function SmNounGrammarNorwegian({grammarObj}) {

    if(!checkNounProperties(grammarObj)) {
        throw new TypeError("Wrong grammar obj structure in SmNounGrammarNorwegian");
    }

    return (
        <Table bordered hover size="sm">
            <tbody data-testid="testCard">
                <tr>
                    <th>Singular Indefinite</th>
                    <td>{grammarObj.singularIndefinite}</td>
                </tr>
                <tr>
                    <th>Singular Definite</th>
                    <td>{grammarObj.singularDefinite}</td>
                </tr>
                <tr>
                    <th>Plural Indefinite</th>
                    <td>{grammarObj.pluralIndefinite}</td>
                </tr>
                <tr>
                    <th>Plural Definite</th>
                    <td>{grammarObj.pluralDefinite}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default SmNounGrammarNorwegian;
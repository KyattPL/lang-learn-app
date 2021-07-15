import Table from 'react-bootstrap/Table';
import { checkVerbProperties } from '../utilsNorwegian.js';
import "../../../styles/CardTable.css";

function SmVerbGrammarNorwegian({grammarObj}) {

    if(!checkVerbProperties(grammarObj)) {
        throw new TypeError("Wrong grammar obj structure in SmVerbGrammarNorwegian");
    }

    return (
        <Table bordered hover size="sm">
            <tbody data-testid="testCard">
                <tr>
                    <th className="cardTableHeader" colSpan="2">Simple</th>
                </tr>
                <tr>
                    <th>Present</th>
                    <td>{grammarObj.present}</td>
                </tr>
                <tr>
                    <th>Past</th>
                    <td>{grammarObj.past}</td>
                </tr>
                <tr>
                    <th>Future</th>
                    <td>{grammarObj.future}</td>
                </tr>
                <tr>
                    <th>Conditional</th>
                    <td>{grammarObj.conditional}</td>
                </tr>
                <tr>
                    <th className="cardTableHeader" colSpan="2">Perfect</th>
                </tr>
                <tr>
                    <th>Present</th>
                    <td>{grammarObj.presentPerfect}</td>
                </tr>
                <tr>
                    <th>Past</th>
                    <td>{grammarObj.pastPerfect}</td>
                </tr>
                <tr>
                    <th>Future</th>
                    <td>{grammarObj.futurePerfect}</td>
                </tr>
                <tr>
                    <th>Conditional</th>
                    <td>{grammarObj.conditionalPerfect}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default SmVerbGrammarNorwegian;
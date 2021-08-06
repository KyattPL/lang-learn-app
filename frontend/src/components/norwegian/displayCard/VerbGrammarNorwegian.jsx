import Table from 'react-bootstrap/Table';
import { checkVerbProperties } from '../utilsNorwegian.js';
import "../../../styles/CardTable.css";

function VerbGrammarNorwegian({ grammarObj }) {

    if (!checkVerbProperties(grammarObj)) {
        throw new TypeError("Wrong grammar obj structure in VerbGrammarNorwegian");
    }

    return (
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th className="cardTableHeader">Present</th>
                    <th className="cardTableHeader">Past</th>
                    <th className="cardTableHeader">Future</th>
                    <th className="cardTableHeader">Conditional</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Simple</th>
                    <td>{grammarObj.present}</td>
                    <td>{grammarObj.past}</td>
                    <td>{grammarObj.future}</td>
                    <td>{grammarObj.conditional}</td>
                </tr>
                <tr>
                    <td><strong>Perfect</strong></td>
                    <td>{grammarObj.presentPerfect}</td>
                    <td>{grammarObj.pastPerfect}</td>
                    <td>{grammarObj.futurePerfect}</td>
                    <td>{grammarObj.conditionalPerfect}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default VerbGrammarNorwegian;
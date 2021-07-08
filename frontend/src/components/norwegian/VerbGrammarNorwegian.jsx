import Table from 'react-bootstrap/Table';

function VerbGrammarNorwegian({ grammarObj }) {

    return (
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Present</th>
                    <th>Past</th>
                    <th>Future</th>
                    <th>Conditional</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Simple</strong></td>
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
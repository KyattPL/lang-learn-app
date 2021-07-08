import Table from 'react-bootstrap/Table';

function NounGrammarNorwegian({ grammarObj }) {

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
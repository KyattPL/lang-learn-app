import Table from 'react-bootstrap/Table';
import { checkAdjProperties } from '../utilsNorwegian.js';
import "../../../styles/CardTable.css";

function SmAdjGrammarNorwegian({grammarObj}) {

    if(!checkAdjProperties(grammarObj)) {
        throw new TypeError("Wrong grammar obj structure in SmAdjGrammarNorwegian");
    }

    return (
        <>
            <Table bordered hover size="sm">
                <tbody data-testid="testCard">
                    <tr>
                        <th className="cardTableHeader" colSpan="2">Masculine</th>
                    </tr>
                    <tr>
                        <th>Singular Indefinite</th>
                        <td>{grammarObj.masculineSinIndef}</td>
                    </tr>
                    <tr>
                        <th>Singular Definite</th>
                        <td>{grammarObj.masculineSinDef}</td>
                    </tr>
                    <tr>
                        <th>Plural Indefinite</th>
                        <td>{grammarObj.masculinePlIndef}</td>
                    </tr>
                    <tr>
                        <th>Plural Definite</th>
                        <td>{grammarObj.masculinePlDef}</td>
                    </tr>
                    <tr>
                        <th className="cardTableHeader" colSpan="2">Feminine</th>
                    </tr>
                    <tr>
                        <th>Singular Indefinite</th>
                        <td>{grammarObj.feminineSinIndef}</td>
                    </tr>
                    <tr>
                        <th>Singular Definite</th>
                        <td>{grammarObj.feminineSinDef}</td>
                    </tr>
                    <tr>
                        <th>Plural Indefinite</th>
                        <td>{grammarObj.femininePlIndef}</td>
                    </tr>
                    <tr>
                        <th>Plural Definite</th>
                        <td>{grammarObj.femininePlDef}</td>
                    </tr>
                    <tr>
                        <th className="cardTableHeader" colSpan="2">Neuter</th>
                    </tr>
                    <tr>
                        <th>Singular Indefinite</th>
                        <td>{grammarObj.neuterSinIndef}</td>
                    </tr>
                    <tr>
                        <th>Singular Definite</th>
                        <td>{grammarObj.neuterSinDef}</td>
                    </tr>
                    <tr>
                        <th>Plural Indefinite</th>
                        <td>{grammarObj.neuterPlIndef}</td>
                    </tr>
                    <tr>
                        <th>Plural Definite</th>
                        <td>{grammarObj.neuterPlDef}</td>
                    </tr>
                </tbody>
            </Table>
            <Table bordered hover size="sm">
                <tbody>
                    <tr>
                        <th>Comparative</th>
                        <td>{grammarObj.comparative}</td>
                    </tr>
                    <tr>
                        <th>Indefinite superlative</th>
                        <td>{grammarObj.indefSuperlative}</td>
                    </tr>
                    <tr>
                        <th>Definite superlative</th>
                        <td>{grammarObj.defSuperlative}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default SmAdjGrammarNorwegian;
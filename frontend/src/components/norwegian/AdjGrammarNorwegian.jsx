import Table from 'react-bootstrap/Table';
import { checkAdjProperties } from './utilsNorwegian.js';
import "../../styles/CardTable.css";

function AdjGrammarNorwegian({ grammarObj }) {

    if (!checkAdjProperties(grammarObj)) {
        throw new TypeError("Wrong grammar obj structure in AdjGrammarNorwegian");
    }

    return (
        <>
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th className="cardTableHeader" colSpan="2">Singular</th>
                        <th className="cardTableHeader" colSpan="2">Plural</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th className="cardTableHeader">Indefinite</th>
                        <th className="cardTableHeader">Definite</th>
                        <th className="cardTableHeader">Indefinite</th>
                        <th className="cardTableHeader">Definite</th>
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
                        <th className="cardTableHeader">Comparative</th>
                        <th className="cardTableHeader">Indefinite superlative</th>
                        <th className="cardTableHeader">Definite superlative</th>
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
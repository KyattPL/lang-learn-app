import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function NounGrammarNorwegian(props) {

    let grammarObj = props.grammarObj;

    return (
        <ListGroup>
            <ListGroupItem>
                <b>s. ind.</b> {grammarObj.singularIndefinite}
            </ListGroupItem>
            <ListGroupItem>
                <b>s. def.</b>   {grammarObj.singularDefinite}
            </ListGroupItem>
            <ListGroupItem>
                <b>pl. ind.</b> {grammarObj.pluralIndefinite}
            </ListGroupItem>
            <ListGroupItem>
                <b>pl. def.</b>   {grammarObj.pluralDefinite}
            </ListGroupItem>
        </ListGroup>
    )
}

export default NounGrammarNorwegian;
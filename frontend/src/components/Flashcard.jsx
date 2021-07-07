import Card from 'react-bootstrap/Card';
import NounGrammarNorwegian from './NounGrammarNorwegian';

function Flashcard(props) {
    let cardObj = props.cardObj;
    let singleTranslation = cardObj.translation[0];

    return (
        <Card>
            <Card.Body>
                <Card.Title>{cardObj.word}</Card.Title>
                <Card.Subtitle className="mb-2">{cardObj.pronounciation}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{singleTranslation.type} {singleTranslation.gender}</Card.Subtitle>
                <Card.Text>
                    {singleTranslation.meaning}
                </Card.Text>
                <NounGrammarNorwegian grammarObj={singleTranslation.grammar} />
            </Card.Body>
        </Card>
    )
}

export default Flashcard;
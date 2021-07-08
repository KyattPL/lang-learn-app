import Card from 'react-bootstrap/Card';
import AdjGrammarNorwegian from './AdjGrammarNorwegian';
import NounGrammarNorwegian from './NounGrammarNorwegian';
import VerbGrammarNorwegian from './VerbGrammarNorwegian';

function NorwegianCard(props) {
    let cardObj = props.cardObj;
    let singleTranslation = cardObj.translation[0];

    let result = null;

    if ("grammarAdj" in singleTranslation) {
        result = <AdjGrammarNorwegian grammarObj={singleTranslation.grammarAdj} />
    } else if ("grammarNoun" in singleTranslation) {
        result = <NounGrammarNorwegian grammarObj={singleTranslation.grammarNoun} />
    } else if ("grammarVerb" in singleTranslation) {
        result = <VerbGrammarNorwegian grammarObj={singleTranslation.grammarVerb} />
    }

    let gender = "grammarNoun" in singleTranslation ? singleTranslation.grammarNoun.gender : null;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{cardObj.word}</Card.Title>
                <Card.Subtitle className="mb-2">{cardObj.pronounciation}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{singleTranslation.type} {gender}</Card.Subtitle>
                <Card.Text>
                    {singleTranslation.meaning}
                </Card.Text>
                {result}
            </Card.Body>
        </Card>
    )
}

export default NorwegianCard;
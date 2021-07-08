import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import AdjGrammarNorwegian from './AdjGrammarNorwegian';
import NounGrammarNorwegian from './NounGrammarNorwegian';
import VerbGrammarNorwegian from './VerbGrammarNorwegian';

import '../../styles/Card.css';

function NorwegianCard(props) {
    let cardObj = props.cardObj;
    let singleTranslation = cardObj.translation[0];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
    });

    let result = null;

    if (windowWidth >= 576) {
        if ("grammarAdj" in singleTranslation) {
            result = <AdjGrammarNorwegian grammarObj={singleTranslation.grammarAdj} />
        } else if ("grammarNoun" in singleTranslation) {
            result = <NounGrammarNorwegian grammarObj={singleTranslation.grammarNoun} />
        } else if ("grammarVerb" in singleTranslation) {
            result = <VerbGrammarNorwegian grammarObj={singleTranslation.grammarVerb} />
        }
    } else {
        // TODO: make Grammars arranged in an order that will handle smaller devices
        if ("grammarAdj" in singleTranslation) {
            result = null;//<AdjGrammarNorwegian grammarObj={singleTranslation.grammarAdj} />
        } else if ("grammarNoun" in singleTranslation) {
            result = null;//<NounGrammarNorwegian grammarObj={singleTranslation.grammarNoun} />
        } else if ("grammarVerb" in singleTranslation) {
            result = null;//<VerbGrammarNorwegian grammarObj={singleTranslation.grammarVerb} />
        }
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
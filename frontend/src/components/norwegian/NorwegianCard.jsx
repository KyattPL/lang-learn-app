import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import AdjGrammarNorwegian from './AdjGrammarNorwegian';
import NounGrammarNorwegian from './NounGrammarNorwegian';
import VerbGrammarNorwegian from './VerbGrammarNorwegian';

import '../../styles/Card.css';

function checkProperties(cardObj, numOfTranslation) {
    let result = false;
    if ('word' in cardObj && 'pronounciation' in cardObj && 'translation' in cardObj) {
        let trObj = cardObj.translation[numOfTranslation];
        if ('grammarAdj' in trObj || 'grammarNoun' in trObj || 'grammarVerb' in trObj) {
            result = true;
        }
    }
    return result;
}

function NorwegianCard({ cardObj, numOfTranslation }) {
    let singleTranslation = cardObj.translation[numOfTranslation];

    if (!checkProperties(cardObj, numOfTranslation)) {
        throw new TypeError("Wrong card obj structure in NorwegianCard");
    }

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
        } else {
            result = <VerbGrammarNorwegian grammarObj={singleTranslation.grammarVerb} />
        }
    } else {
        // TODO: make Grammars arranged in an order that will handle smaller devices
        if ("grammarAdj" in singleTranslation) {
            result = <div data-testid="testCard"></div>; //<AdjGrammarNorwegian grammarObj={singleTranslation.grammarAdj} />
        } else if ("grammarNoun" in singleTranslation) {
            result = <div data-testid="testCard"></div>; //<NounGrammarNorwegian grammarObj={singleTranslation.grammarNoun} />
        } else {
            result = <div data-testid="testCard"></div>; //<VerbGrammarNorwegian grammarObj={singleTranslation.grammarVerb} />
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
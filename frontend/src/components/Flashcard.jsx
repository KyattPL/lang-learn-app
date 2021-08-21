import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import DeleteCardModal from './DeleteCardModal.jsx';

const typeOfSpeech = (cardObj) => {
    let type = cardObj['translation'][0]['type'];
    return type[0].toUpperCase() + type.slice(1);
}

const getDisplayObj = (cardLang, grammarType) => {
    let file = require(`../langJsons/${cardLang}.json`);
    return file[`display${grammarType}`];
}

const createSingleTable = (wholeTable) => {
    return (
        <Table bordered hover size="sm">

        </Table>
    );
}

const constructTables = (cardObj, grammarType, displayObj, isSmallScreen, numOfTranslation) => {
    const screenType = isSmallScreen ? 'small' : 'regular';
    const structure = displayObj[screenType];
    console.log(structure);
    return (
        <>
            {structure.forEach((wholeTable) => createSingleTable(wholeTable))}
        </>
    );
}

// Do something with gender and countable stuff
function Flashcard({ cardLang, cardObj, numOfTranslation }) {

    // 1. Based on cardObj, check the type of speech
    // 2. Then go to <cardLang>.json and find display<typeOfSpeech> object or sth
    // 3. In display<typeOfSpeech> there should be 2 properties: regular and small (for screen sizes)
    // 4. ??? Somehow define the card structure with JSON ???
    // 5. Create the table according to this structure
    // 6. Profit
    const singleTranslation = cardObj.translation[numOfTranslation];
    const grammarType = typeOfSpeech(cardObj);
    const displayObj = getDisplayObj(cardLang, grammarType);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSmallScreen, setIsSmallScreen] = useState(null);

    useEffect(() => {
        let isMounted = true;
        function handleResize() {
            if (isMounted) setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => { isMounted = false };
    }, []);

    useEffect(() => {
        if (windowWidth <= 576) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }, [windowWidth]);

    const result = constructTables(cardObj, grammarType, displayObj, isSmallScreen, numOfTranslation);

    return (
        <Card className="mb-2">
            <Card.Header>
                <DeleteCardModal cardLang="Norwegian" cardId={cardObj._id} translationId={singleTranslation._id} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{cardObj.word}</Card.Title>
                <Card.Subtitle className="mb-2">{singleTranslation.pronounciation}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{singleTranslation.type}</Card.Subtitle>
                <Card.Text>
                    {singleTranslation.meaning}
                </Card.Text>
                {result}
            </Card.Body>
        </Card>
    );
}

export default Flashcard;
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import DeleteCardModal from './DeleteCardModal.jsx';

import '../styles/CardTable.css';

const typeOfSpeech = (cardObj) => {
    let type = cardObj['translation'][0]['type'];
    return type[0].toUpperCase() + type.slice(1);
}

const getDisplayObj = (cardLang, grammarType) => {
    let file = require(`../langJsons/${cardLang}.json`);
    return file[`display${grammarType}`];
}

const createCell = (index, cell, cardObj, numOfTranslation, grammarType) => {
    let outside = null;
    let inside = null;

    if (cell === '' || cell === null) {
        return <td key={index}></td>
    }

    if (cell.includes('$')) {
        let propertyName = cell.replace(/\$/g, '');
        inside = cardObj['translation'][numOfTranslation][`grammar${grammarType}`][propertyName];
    } else {
        inside = cell.replace(/\#/g, '').replace(/\*/g, '');
    }

    if (cell.includes('#') && cell.includes('*')) {
        let numberOfCols = cell.match(/\*/g).length;
        outside = <th className="cardTableHeader" colSpan={numberOfCols} key={index}>{inside}</th>;
    } else if (cell.includes('#')) {
        outside = <th className="cardTableHeader" key={index}>{inside}</th>;
        // } else if (cell.includes('*')) {
        //     let numberOfCols = cell.match(/\*/g).length;
        //     outside = <td colSpan={numberOfCols} key={index}>{inside}</td>;
    } else {
        outside = <td key={index}>{inside}</td>;
    }

    return outside;
}

const createRow = (index, row, cardObj, numOfTranslation, grammarType) => {
    return (
        <tr key={index}>
            {row.map((cell, index) => createCell(index, cell, cardObj, numOfTranslation, grammarType))}
        </tr>
    )
}

const createSingleTable = (index, wholeTable, cardObj, numOfTranslation, grammarType) => {
    return (
        <Table bordered hover size="sm" key={index}>
            <tbody data-testid="testCard">
                {wholeTable.map((row, index) => createRow(index, row, cardObj, numOfTranslation, grammarType))}
            </tbody>
        </Table>
    );
}

const constructTables = (cardObj, grammarType, displayObj, isSmallScreen, numOfTranslation) => {
    const screenType = isSmallScreen ? 'small' : 'regular';
    const structure = displayObj[screenType];
    return (
        <>
            {structure.map((wholeTable, index) => createSingleTable(index, wholeTable, cardObj, numOfTranslation, grammarType))}
        </>
    );
}

// Do something with gender and countable stuff - Nouns
// Do something with infinitives - Verbs
function Flashcard({ cardLang, cardObj, numOfTranslation }) {

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
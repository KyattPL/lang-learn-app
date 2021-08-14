import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useRef } from 'react';

import '../styles/SearchCard.css';
import TranslationGroup from './TranslationGroup.jsx';
import SearchCardModal from './SearchCardModal.jsx';
import { fetchGetCard } from '../utils/fetchGetCard.js';

function SearchCard() {

    const [validated, setValidated] = useState(false);
    const [hasBeenFound, setFound] = useState(false);
    const wordInput = useRef(null);
    const selectInput = useRef(null);

    const [cardInfo, setCardInfo] = useState(null);
    const [cardLang, setCardLang] = useState(null);

    const [noWord, setNoWord] = useState(null);
    const [shouldShowModal, setShouldShowModal] = useState(false);

    const handleClose = () => setShouldShowModal(false);

    const showModal = (missingWord) => {
        setNoWord(missingWord);
        setShouldShowModal(true);
        return;
    }

    const searchCard = (event) => {

        event.preventDefault();
        event.stopPropagation();

        if (event.currentTarget.checkValidity() === true) {
            setValidated(false);
            fetchGetCard(selectInput.current.value, wordInput.current.value)
                .then(data => {
                    if (data === "DB_ERR" || data === "MISSING_WORD_PASSED" || data === "MISSING_LANG_PASSED") {
                        console.error(data);
                    } else {
                        if (data === '') {
                            showModal(wordInput.current.value);
                        } else {
                            setCardInfo(JSON.parse(data));
                            setCardLang(selectInput.current.value);
                            setFound(true);
                        }
                    }
                }).catch((error) => {
                    console.error('Error:', error);
                })
        } else {
            setValidated(true);
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col xs={10}>
                    <Form className="mt-2" noValidate validated={validated} onSubmit={searchCard}>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Word
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Language:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control className="langDropdown" ref={selectInput} as="select" defaultValue="Norwegian">
                                <option>Dutch</option>
                                <option>Norwegian</option>
                            </Form.Control>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Search:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl required ref={wordInput} placeholder="Word" data-testid="testWordInput" />
                            <FormControl.Feedback style={{ order: 4 }} type="invalid">Empty box!</FormControl.Feedback>
                            <Button data-testid="testButtonSearch" type="submit" variant="success">
                                Submit
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col xs={10} className="mt-2">
                    {hasBeenFound ? <TranslationGroup cardLang={cardLang} cardObj={cardInfo} /> : null}
                </Col>
                <Col>
                </Col>
            </Row>
            <SearchCardModal show={shouldShowModal} noWord={noWord} handleClose={handleClose} />
        </Container>
    )
}

export default SearchCard;
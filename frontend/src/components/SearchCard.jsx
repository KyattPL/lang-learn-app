import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useRef, useEffect } from 'react';

import '../styles/SearchCard.css';
import TranslationGroup from './TranslationGroup.jsx';
import SearchCardModal from './SearchCardModal.jsx';
import { fetchGetCard } from '../utils/fetchGetCard.js';

function SearchCard() {

    const [validated, setValidated] = useState(false);
    const [hasBeenFound, setFound] = useState(false);
    const wordInput = useRef(null);
    const langInput = useRef(null);

    const [cardInfo, setCardInfo] = useState(null);
    const [cardLang, setCardLang] = useState(null);

    const [noWord, setNoWord] = useState(null);
    const [shouldShowModal, setShouldShowModal] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
    });

    let numberOfColumns = windowWidth <= 425 ? 12 : 10;

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
            fetchGetCard(langInput.current.value, wordInput.current.value)
                .then(data => {
                    if (data === "DB_ERR" || data === "MISSING_WORD_PASSED" || data === "MISSING_LANG_PASSED") {
                        console.error(data);
                    } else {
                        if (data === '') {
                            showModal(wordInput.current.value);
                        } else if (data.startsWith("Proxy error:")) {
                            console.error(data);
                        } else {
                            setCardInfo(JSON.parse(data));
                            setCardLang(langInput.current.value);
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
                <Col xs={numberOfColumns} data-testid="testFormCol">
                    <Form className="mt-2" noValidate validated={validated} onSubmit={searchCard}>
                        <Form.Row className="align-items-center searchCardForm">
                            <Col xs={12} sm={6} md={5}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Language:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control className="langDropdown" ref={langInput} as="select" defaultValue="Norwegian">
                                        <option>Dutch</option>
                                        <option>Norwegian</option>
                                    </Form.Control>
                                </InputGroup>
                            </Col>
                            <Col xs={12} sm={6} md={5}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Word:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl required ref={wordInput} placeholder="Word" data-testid="testWordInput" />
                                    <FormControl.Feedback style={{ order: 4 }} type="invalid">Empty box!</FormControl.Feedback>
                                </InputGroup>
                            </Col>
                            <Col xs={12} md={2}>
                                <Button data-testid="testButtonSearch" type="submit" variant="success" block>
                                    Submit
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col xs={numberOfColumns} className="mt-2">
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
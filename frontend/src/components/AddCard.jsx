import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useRef, useState, useEffect } from 'react';

import '../styles/AddCard.css';
import AddCardAbstractForm from './AddCardAbstractForm.jsx';
import AddCardModal from './AddCardModal.jsx';

function AddCard() {

    let langs = [{ lang: "Dutch", index: 1 }, { lang: "Norwegian", index: 2 }];

    const selectLang = useRef(null);
    const selectSpeech = useRef(null);

    const [currLang, setCurrLang] = useState("Dutch");
    const [currSpeech, setCurrSpeech] = useState("Adjective");
    const [currWord, setCurrWord] = useState(null);
    const [shouldShowModal, setShouldShowModal] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        let isMounted = true;
        function handleResize() {
            if (isMounted) setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => { isMounted = false };
    }, []);

    let numberOfColumns = windowWidth <= 425 ? 12 : 10;

    const updateLang = () => {
        setCurrLang(selectLang.current.value);
    }

    const updateSpeech = () => {
        setCurrSpeech(selectSpeech.current.value);
    }

    const showModal = () => {
        setShouldShowModal(true);
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col xs={numberOfColumns} data-testid="testAddCardFormCol">
                    <Form className="mt-2">
                        <Form.Row className="align-items-center gapBetweenRows">
                            <Col xs={12} md={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Language:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control className="langDropdown" onChange={() => updateLang()} ref={selectLang} as="select" defaultValue="Dutch" data-testid="testLangDropdown">
                                        {langs.map((lang) => <option key={lang.index} data-testid={lang.lang}>{lang.lang}</option>)}
                                    </Form.Control>
                                </InputGroup>
                            </Col>
                            <Col xs={12} md={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Part of speech:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control className="langDropdown" onChange={() => updateSpeech()} ref={selectSpeech} as="select" defaultValue="Adjective" data-testid="testSpeechDropdown">
                                        <option>Adjective</option>
                                        <option>Noun</option>
                                        <option>Verb</option>
                                    </Form.Control>
                                </InputGroup>
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
                    <AddCardAbstractForm showModal={showModal} wordSetter={setCurrWord} langSelected={currLang} grammarSelected={currSpeech} />
                </Col>
                <Col>
                </Col>
            </Row>
            <AddCardModal show={shouldShowModal} addedWord={currWord} handleClose={() => setShouldShowModal(false)} />
        </Container >
    )
}

export default AddCard;
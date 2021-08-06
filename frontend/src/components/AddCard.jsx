import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useRef, useState } from 'react';
import React from 'react';

import AddCardAbstractForm from './AddCardAbstractForm.jsx';
import '../styles/DropdownLiveSearch.css';

function AddCard() {

    let langs = [{ lang: "Dutch", index: 1 }, { lang: "Norwegian", index: 2 }];

    const selectLang = useRef(null);
    const selectSpeech = useRef(null);

    const [currLang, setCurrLang] = useState("Dutch");
    const [currSpeech, setCurrSpeech] = useState("Adjective");

    const updateLang = () => {
        setCurrLang(selectLang.current.value);
    }

    const updateSpeech = () => {
        setCurrSpeech(selectSpeech.current.value);
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col xs={10}>
                    <InputGroup className="mt-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Language:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control className="langDropdown" onChange={() => updateLang()} ref={selectLang} as="select" defaultValue="Dutch">
                            {langs.map((lang) => <option key={lang.index}>{lang.lang}</option>)}
                        </Form.Control>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Part of speech:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control className="langDropdown" onChange={() => updateSpeech()} ref={selectSpeech} as="select" defaultValue="Adjective">
                            <option>Adjective</option>
                            <option>Noun</option>
                            <option>Verb</option>
                        </Form.Control>
                    </InputGroup>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col xs={10} className="mt-2">
                    <AddCardAbstractForm langSelected={currLang} grammarSelected={currSpeech}/>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container >
    )
}

export default AddCard;
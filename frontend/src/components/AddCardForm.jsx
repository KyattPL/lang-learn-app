import { useRef, useState, useEffect, createRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { fetchAddCard } from '../utils/fetchAddCard.js';
import { fetchCheckAddPassword } from '../utils/fetchCheckAddPassword.js';
import { dashOnEmptyInput } from '../utils/dashOnEmptyInput.js';
import { createAddCardInput } from '../utils/createAddCardInput.js';

function AddCardForm({ langSelected, grammarSelected, wordSetter, showModal }) {

    const [grammarInputNames, setGrammarInputNames] = useState(null);
    const [grammarInputLen, setGrammarInputLen] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [validated, setValidated] = useState(false);

    const wordInput = useRef(null);
    const pronInput = useRef(null);
    const meanInput = useRef(null);
    const passInput = useRef(null);

    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {

        async function getGrammarInputNames(lang, grammar) {

            if (lang === undefined || grammar === undefined) {
                throw new TypeError("Empty parameters were given");
            }

            const file = require(`../langJsons/${lang}.json`);
            const obj = file[`add${grammar}`]['translation'][0][`grammar${grammar}`];
            setGrammarInputNames(Object.values(obj));
        }

        getGrammarInputNames(langSelected, grammarSelected).catch(err => console.error(err));
    }, [langSelected, grammarSelected]);

    useEffect(() => {
        if (grammarInputNames) setGrammarInputLen(grammarInputNames.length);
    }, [grammarInputNames]);

    useEffect(() => {
        if (grammarInputLen) setIsLoading(false);
    }, [grammarInputLen]);

    useEffect(() => {
        if (!isLoading) setElRefs(elRefs => (
            Array(grammarInputLen).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [isLoading, grammarInputLen]);

    const clearForm = () => {
        wordInput.current.value = '';
        pronInput.current.value = '';
        meanInput.current.value = '';
        for (let i = 0; i < grammarInputLen; i++) {
            if (elRefs[i].current.type !== 'checkbox' && elRefs[i].current.type !== 'select-one') {
                elRefs[i].current.value = '';
            }
        }
    }

    const createFetchCardObj = (lang, grammar) => {
        const file = require(`../langJsons/${lang}.json`);
        const obj = file[`add${grammar}`];
        const grammarObjName = `grammar${grammar}`;
        const cardObj = {
            "word": wordInput.current.value,
            "translation": [
                {
                    "type": grammarSelected.toLowerCase(),
                    "pronounciation": pronInput.current.value,
                    "meaning": meanInput.current.value
                }
            ]
        }
        cardObj['translation'][0][grammarObjName] = {};
        const keyNames = Object.keys(obj['translation'][0][grammarObjName]);
        keyNames.forEach((key, index) => {
            cardObj['translation'][0][grammarObjName][key] = dashOnEmptyInput(elRefs[index])
        });
        return cardObj;
    }

    const addCard = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const savedTarget = event.currentTarget;

        await fetchCheckAddPassword(passInput.current.value).then(res => {
            if (res === "Forbidden") {
                document.getElementById('passInput').setCustomValidity("Wrong password!");
            } else {
                document.getElementById('passInput').setCustomValidity("");
            }
        });

        if (savedTarget.checkValidity() === true) {
            setValidated(false);
            wordSetter(wordInput.current.value);
            const cardObj = createFetchCardObj(langSelected, grammarSelected);
            fetchAddCard(langSelected, cardObj).then(data => {
                if (data === "DB_ERR" || data === "MISSING_LANG_PASSED" || data === "MISSING_WORD_PASSED") {
                    console.error(data);
                } else if (data === "Internal Server Error") {
                    console.error("There was a problem with saving your card to the database");
                } else if (data.startsWith("Proxy error:")) {
                    console.error(data);
                } else {
                    clearForm();
                    showModal();
                }
            }).catch((error) => {
                console.error("Error: ", error);
            })
        } else {
            setValidated(true);
        }
    };

    const testLangSpeech = `${langSelected}${grammarSelected}`;

    return isLoading === false ?
        <Form onSubmit={addCard} noValidate validated={validated} data-testid="testAddForm">
            <Form.Group as={Row} className="mb-2" data-testid={`testAddWord${testLangSpeech}`}>
                <Form.Label column md="3">
                    Word
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={wordInput} required type="text" placeholder="Type here" data-testid={`test${testLangSpeech}WordInp`} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column md="3">
                    Pronounciation
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={pronInput} required type="text" placeholder="Type here" data-testid={`test${testLangSpeech}PronInp`} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column md="3">
                    Meaning
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={meanInput} required type="text" placeholder="Type here" data-testid={`test${testLangSpeech}MeanInp`} />
                </Col>
            </Form.Group>
            {
                grammarInputNames.map((name, index) => createAddCardInput(name, elRefs[index]))
            }
            <Form.Group as={Row} className="mb-2">
                <Form.Label column md="3">
                    Password
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={passInput} type="password" placeholder="Authorization password" data-testid="testAddCardPassInput" id="passInput" />
                    <Form.Control.Feedback type="invalid">Wrong password</Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Button variant="success" type="submit" data-testid={`test${testLangSpeech}Submit`}>
                Add Card
            </Button>
        </Form> : <div data-testid="testNULL">LOADING</div>
}

export default AddCardForm;
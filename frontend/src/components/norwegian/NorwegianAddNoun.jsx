import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../../styles/AddCard.css';
import { useState, useRef } from 'react';
import { fetchAddCard } from '../../utils/fetchAddCard';
import { dashOnEmptyInput } from '../../utils/dashOnEmptyInput';

function NorwegianAddNoun({ wordSetter, showModal }) {

    const [validated, setValidated] = useState(false);
    const [checkedCountable, setCheckedCountable] = useState(false);

    const wordInput = useRef(null);
    const pronInput = useRef(null);
    const genderInput = useRef(null);
    const meanInput = useRef(null);
    const sinDefInput = useRef(null);
    const sinIndefInput = useRef(null);
    const plDefInput = useRef(null);
    const plIndefInput = useRef(null);

    const addCard = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.currentTarget.checkValidity() === true) {
            setValidated(false);
            wordSetter(wordInput.current.value);
            const cardObj = {
                "word": wordInput.current.value,
                "translation": [
                    {
                        "type": "noun",
                        "pronounciation": pronInput.current.value,
                        "meaning": meanInput.current.value,
                        "grammarNoun": {
                            "countable": checkedCountable,
                            "gender": genderInput.current.value,
                            "singularIndefinite": dashOnEmptyInput(sinIndefInput),
                            "singularDefinite": dashOnEmptyInput(sinDefInput),
                            "pluralIndefinite": dashOnEmptyInput(plIndefInput),
                            "pluralDefinite": dashOnEmptyInput(plDefInput)
                        }
                    }
                ]
            }
            fetchAddCard("Norwegian", cardObj).then(data => {
                if (data === "DB_ERR" || data === "MISSING_LANG_PASSED" || data === "MISSING_WORD_PASSED") {
                    console.error(data);
                } else if (data === "Internal Server Error") {
                    console.error("There was a problem with saving your card to the database");
                } else if (data.startsWith("Proxy error:")) {
                    console.error(data);
                } else  {
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

    const clearForm = () => {
        wordInput.current.value = '';
        pronInput.current.value = '';
        meanInput.current.value = '';
        sinDefInput.current.value = '';
        sinIndefInput.current.value = '';
        plDefInput.current.value = '';
        plIndefInput.current.value = '';
    }

    return (
        <Form onSubmit={addCard} noValidate validated={validated}>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Word
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={wordInput} required type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Pronounciation
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={pronInput} required type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Countable
                </Form.Label>
                <Col sm={10}>
                    <Form.Control onClick={() => setCheckedCountable(!checkedCountable)} style={{ width: "auto" }} type="checkbox" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Gender
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={genderInput} required as="select">
                        <option value="masculine">Masculine</option>
                        <option value="feminine">Feminine</option>
                        <option value="neuter">Neuter</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Meaning
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={meanInput} required type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Singular Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={sinDefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Singular Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={sinIndefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Plural Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={plDefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Plural Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={plIndefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Button variant="success" type="submit">
                Add Card
            </Button>
        </Form>
    );
}

export default NorwegianAddNoun;
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../../styles/AddCard.css';
import { useState, useRef } from 'react';
import { fetchAddCard } from '../../utils/fetchAddCard';
import { dashOnEmptyInput } from '../../utils/dashOnEmptyInput';

function NorwegianAddVerb() {

    const [validated, setValidated] = useState(false);

    const wordInput = useRef(null);
    const pronInput = useRef(null);
    const meanInput = useRef(null);

    const infinitiveInput = useRef(null);
    const presentInput = useRef(null);
    const pastInput = useRef(null);
    const futureInput = useRef(null);
    const condInput = useRef(null);
    const imperInput = useRef(null);
    const presPerfInput = useRef(null);
    const pastPerfInput = useRef(null);
    const futurePerfInput = useRef(null);
    const condPerfInput = useRef(null);

    const addCard = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.currentTarget.checkValidity() === true) {
            setValidated(false);
            const cardObj = {
                "word": wordInput.current.value,
                "translation": [
                    {
                        "type": "noun",
                        "pronounciation": pronInput.current.value,
                        "meaning": meanInput.current.value,
                        "grammarVerb": {
                            "infinitive": dashOnEmptyInput(infinitiveInput),
                            "present": dashOnEmptyInput(presentInput),
                            "past": dashOnEmptyInput(pastInput),
                            "future": dashOnEmptyInput(futureInput),
                            "conditional": dashOnEmptyInput(condInput),
                            "imperative": dashOnEmptyInput(imperInput),
                            "presentPerfect": dashOnEmptyInput(presPerfInput),
                            "pastPerfect": dashOnEmptyInput(pastPerfInput),
                            "futurePerfect": dashOnEmptyInput(futurePerfInput),
                            "conditionalPerfect": dashOnEmptyInput(condPerfInput)
                        }
                    }
                ]
            }
            fetchAddCard("Norwegian", cardObj).then(data => {
                if (data === "DB_ERR") {
                    console.log("db err");
                } else if (data === "MISSING_WORD_PASSED") {
                    console.log("missing word");
                } else {
                    console.log("OK!")
                }
            }).catch((error) => {
                console.error("Error: ", error);
            })
        } else {
            setValidated(true);
        }
    };

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
                    Meaning
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={meanInput} required type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Infinitive
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={infinitiveInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Present
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={presentInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Past
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={pastInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Future
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={futureInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Conditional
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={condInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Imperative
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={imperInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Present Perfect
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={presPerfInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Past Perfect
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={pastPerfInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Future Perfect
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={futurePerfInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Conditional Perfect
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={condPerfInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Button variant="success" type="submit">
                Add Card
            </Button>
        </Form>
    );
}

export default NorwegianAddVerb;
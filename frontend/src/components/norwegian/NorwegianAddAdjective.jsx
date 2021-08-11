import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../../styles/AddCard.css';
import { useState, useRef } from 'react';
import { fetchAddCard } from '../../utils/fetchAddCard';
import { dashOnEmptyInput } from '../../utils/dashOnEmptyInput';

function NorwegianAddAdjective() {

    const [validated, setValidated] = useState(false);

    const wordInput = useRef(null);
    const pronInput = useRef(null);
    const meanInput = useRef(null);

    const mascSinIndefInput = useRef(null);
    const mascSinDefInput = useRef(null);
    const mascPlIndefInput = useRef(null);
    const mascPlDefInput = useRef(null);

    const femSinIndefInput = useRef(null);
    const femSinDefInput = useRef(null);
    const femPlIndefInput = useRef(null);
    const femPlDefInput = useRef(null);

    const neuterSinIndefInput = useRef(null);
    const neuterSinDefInput = useRef(null);
    const neuterPlIndefInput = useRef(null);
    const neuterPlDefInput = useRef(null);

    const comparativeInput = useRef(null);
    const indefSuperlativeInput = useRef(null);
    const defSuperlativeInput = useRef(null);

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
                        "grammarAdj": {
                            "masculineSinIndef": dashOnEmptyInput(mascSinIndefInput),
                            "masculineSinDef": dashOnEmptyInput(mascSinDefInput),
                            "masculinePlIndef": dashOnEmptyInput(mascPlIndefInput),
                            "masculinePlDef": dashOnEmptyInput(mascPlDefInput),
                            "feminineSinIndef": dashOnEmptyInput(femSinIndefInput),
                            "feminineSinDef": dashOnEmptyInput(femSinDefInput),
                            "femininePlIndef": dashOnEmptyInput(femPlIndefInput),
                            "femininePlDef": dashOnEmptyInput(femPlDefInput),
                            "neuterSinIndef": dashOnEmptyInput(neuterSinIndefInput),
                            "neuterSinDef": dashOnEmptyInput(neuterSinDefInput),
                            "neuterPlIndef": dashOnEmptyInput(neuterPlIndefInput),
                            "neuterPlDef": dashOnEmptyInput(neuterPlDefInput),
                            "comparative": dashOnEmptyInput(comparativeInput),
                            "indefSuperlative": dashOnEmptyInput(indefSuperlativeInput),
                            "defSuperlative": dashOnEmptyInput(defSuperlativeInput)
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
                    Masculine Singular Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={mascSinIndefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Masculine Singular Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={mascSinDefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Masculine Plural Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={mascPlIndefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Masculine Plural Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={mascPlDefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Feminine Singular Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={femSinIndefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Feminine Singular Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={femSinDefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Feminine Plural Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={femPlIndefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Feminine Plural Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={femPlDefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Neuter Singular Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={neuterSinIndefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Neuter Singular Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={neuterSinDefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Neuter Plural Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={neuterPlIndefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Neuter Plural Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={neuterPlDefInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Comparative
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={comparativeInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Indefinite Superlative
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={indefSuperlativeInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Definite Superlative
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={defSuperlativeInput} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Button variant="success" type="submit">
                Add Card
            </Button>
        </Form>
    );
}

export default NorwegianAddAdjective;
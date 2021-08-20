import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../../styles/AddCard.css';
import { useState, useRef, createRef, useEffect } from 'react';
import { fetchAddCard } from '../../utils/fetchAddCard';
import { dashOnEmptyInput } from '../../utils/dashOnEmptyInput';

function NorwegianAddNoun({ wordSetter, showModal }) {

    const grammarInputNames = ["Singular Indefinite", "Singular Definite",
        "Plural Indefinite", "Plural Definite"];

    const grammarInputLen = grammarInputNames.length;

    const [validated, setValidated] = useState(false);
    const [checkedCountable, setCheckedCountable] = useState(false);

    const wordInput = useRef(null);
    const pronInput = useRef(null);
    const meanInput = useRef(null);
    const genderInput = useRef(null);

    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        setElRefs(elRefs => (
            Array(grammarInputLen).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [grammarInputLen]);

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
                            "singularIndefinite": dashOnEmptyInput(elRefs[0]),
                            "singularDefinite": dashOnEmptyInput(elRefs[1]),
                            "pluralIndefinite": dashOnEmptyInput(elRefs[2]),
                            "pluralDefinite": dashOnEmptyInput(elRefs[3])
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

    const clearForm = () => {
        for (let i = 0; i < grammarInputLen; i++) {
            elRefs[i].current.value = '';
        }
    }

    return (
        <Form onSubmit={addCard} noValidate validated={validated} data-testid="testNorAddNounForm">
            <Form.Group as={Row} className="mb-2">
                <Form.Label column md="3">
                    Word
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={wordInput} required type="text" placeholder="Type here" data-testid="testNorAddNounWordInp" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column md="3">
                    Pronounciation
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={pronInput} required type="text" placeholder="Type here" data-testid="testNorAddNounPronInp" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column md="3">
                    Meaning
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={meanInput} required type="text" placeholder="Type here" data-testid="testNorAddNounMeanInp" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column md="3">
                    Countable
                </Form.Label>
                <Col md={9}>
                    <Form.Control onClick={() => setCheckedCountable(!checkedCountable)} style={{ width: "auto" }} type="checkbox" data-testid="testCountCheckbox"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column md="3">
                    Gender
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={genderInput} required as="select">
                        <option value="masculine">Masculine</option>
                        <option value="feminine">Feminine</option>
                        <option value="neuter">Neuter</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            {
                grammarInputNames.map((name, index) =>
                    <Form.Group key={name} as={Row} className="mb-2">
                        <Form.Label column md="3">
                            {name}
                        </Form.Label>
                        <Col md={9}>
                            <Form.Control ref={elRefs[index]} className="dontValidate" type="text" placeholder="Type here" />
                        </Col>
                    </Form.Group>)
            }
            <Button variant="success" type="submit" data-testid="testNorAddNounSubmit">
                Add Card
            </Button>
        </Form>
    );
}

export default NorwegianAddNoun;
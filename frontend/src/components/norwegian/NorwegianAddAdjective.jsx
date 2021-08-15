import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../../styles/AddCard.css';
import { useState, createRef, useRef, useEffect } from 'react';
import { fetchAddCard } from '../../utils/fetchAddCard';
import { dashOnEmptyInput } from '../../utils/dashOnEmptyInput';

function NorwegianAddAdjective({ wordSetter, showModal }) {

    const grammarInputNames = ["Masculine Singular Indefinite", "Masculine Singular Definite",
        "Masculine Plural Indefinite", "Masculine Plural Definite", "Feminine Singular Indefinite",
        "Feminine Singular Definite", "Feminine Plural Indefinite", "Feminine Plural Definite",
        "Neuter Singular Indefinite", "Neuter Singular Definite", "Neuter Plural Indefinite",
        "Neuter Plural Definite", "Comparative", "Indefinite Superlative", "Definite Superlative"];

    const grammarInputLen = grammarInputNames.length;
    const [validated, setValidated] = useState(false);

    const wordInput = useRef(null);
    const pronInput = useRef(null);
    const meanInput = useRef(null);

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
                        "type": "adjective",
                        "pronounciation": pronInput.current.value,
                        "meaning": meanInput.current.value,
                        "grammarAdj": {
                            "masculineSinIndef": dashOnEmptyInput(elRefs[0]),
                            "masculineSinDef": dashOnEmptyInput(elRefs[1]),
                            "masculinePlIndef": dashOnEmptyInput(elRefs[2]),
                            "masculinePlDef": dashOnEmptyInput(elRefs[3]),
                            "feminineSinIndef": dashOnEmptyInput(elRefs[4]),
                            "feminineSinDef": dashOnEmptyInput(elRefs[5]),
                            "femininePlIndef": dashOnEmptyInput(elRefs[6]),
                            "femininePlDef": dashOnEmptyInput(elRefs[7]),
                            "neuterSinIndef": dashOnEmptyInput(elRefs[8]),
                            "neuterSinDef": dashOnEmptyInput(elRefs[9]),
                            "neuterPlIndef": dashOnEmptyInput(elRefs[10]),
                            "neuterPlDef": dashOnEmptyInput(elRefs[11]),
                            "comparative": dashOnEmptyInput(elRefs[12]),
                            "indefSuperlative": dashOnEmptyInput(elRefs[13]),
                            "defSuperlative": dashOnEmptyInput(elRefs[14])
                        }
                    }
                ]
            }
            fetchAddCard("Norwegian", cardObj).then(data => {
                if (data === "DB_ERR" || data === "MISSING_LANG_PASSED" || data === "MISSING_WORD_PASSED") {
                    console.error(data);
                } else if (data === "Internal Server Error") {
                    console.error("There was a problem with saving your card to the database");
                } else if (data.startsWith("Proxy error:")){
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
        for (let i=0; i < grammarInputLen; i++) {
            elRefs[i].current.value = '';
        }
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
                    Meaning
                </Form.Label>
                <Col sm={10}>
                    <Form.Control ref={meanInput} required type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            {
                grammarInputNames.map((name, index) => 
                    <Form.Group as={Row} className="mb-2" key={name}>
                        <Form.Label column sm="2">
                            {name}
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={elRefs[index]} className="dontValidate" type="text" placeholder="Type here"/>
                        </Col>
                    </Form.Group>)
            }
            <Button variant="success" type="submit">
                Add Card
            </Button>
        </Form>
    );
}

export default NorwegianAddAdjective;
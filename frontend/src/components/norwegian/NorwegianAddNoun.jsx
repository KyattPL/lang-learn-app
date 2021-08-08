import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../../styles/AddCard.css';
import { useState } from 'react';
import { fetchGetCard } from '../../utils/fetchGetCard';

function NorwegianAddNoun() {

    const [validated, setValidated] = useState(false);

    const addCard = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.currentTarget.checkValidity() === true) {
            setValidated(false);
            fetchGetCard("Norwegian", null);
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
                    <Form.Control required type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Pronounciation
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Gender
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Meaning
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Singular Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Singular Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Plural Definite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">
                    Plural Indefinite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Card
            </Button>
        </Form>
    );
}

export default NorwegianAddNoun;